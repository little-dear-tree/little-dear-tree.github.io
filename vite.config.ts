/* eslint-disable import/no-extraneous-dependencies */

import 'vite-ssg';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import * as fs from 'fs';

import tosource from 'tosource';
import { parse } from 'yaml';
import vue from '@vitejs/plugin-vue';
import { generateSitemap } from 'sitemap-ts';

import svgIcon from './plugin/svgIcon';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL,
  plugins: [
    vue(),
    svgIcon(),
    {
      name: 'vite:transform-yaml:',
      transform(code, id) {
        if (!/\.ya?ml$/.test(id)) return null;

        return `const data = ${tosource(parse(code))};\nexport default data`;
      },
    },
    {
      name: 'fix-swipper-css',
      enforce: 'pre',
      resolveId(id) {
        const [hasSwiper, children] = id.match(/swiper(?:\/(\w+))?\.css/) || [
          void 0,
        ];

        if (hasSwiper) return `fix-swiper${children ? `/${children}` : ''}.css`;
      },
      async load(id) {
        const [hasSwiper, children] = id.match(/fix-swiper(\/\w+)?\.css/) || [
          void 0,
        ];

        if (hasSwiper) {
          let fileName: string;

          if (children === '/all') fileName = 'swiper-bundle';
          fileName ||= children ? `/modules${children.repeat(2)}` : 'swiper';

          return fs.readFileSync(
            `./node_modules/swiper/${fileName}.min.css`,
            'utf-8'
          );
        }
      },
    },
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    terserOptions: {
      compress: {
        // Prevent Infinity from being compressed to 1/0, may cause performance issues on Chrome
        keep_infinity: true,
        drop_console: false,
      },
      format: { comments: false },
    },
    minify: 'terser',
    // Speed up packing
    brotliSize: false,
  },
  ssgOptions: {
    rootContainerId: 'app-mount',
    formatting: 'minify',
    dirStyle: 'nested',
    script: 'async',
    onFinished() {
      if (process.env.HOSTNAME) {
        generateSitemap({
          hostname: process.env.HOSTNAME,
          robots: [{ userAgent: '*', allow: '/' }],
        });
      }
    },
  },
});
