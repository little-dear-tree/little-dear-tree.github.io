import 'vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LImg: typeof import('./components/utils/BaseImg.vue')['default'];
    SvgIcon: typeof import('./components/utils/SvgIcon.vue')['default'];
    GeneralHead: typeof import('./components/utils/GeneralHead.vue')['default'];

    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
  }
}

declare global {
  namespace JSX {
    import { ImgHTMLAttributes, NativeElements } from 'vue';

    interface IntrinsicElements extends NativeElements {
      img: ImgHTMLAttributes & { lazyLoad?: boolean };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [name: string]: any;
    }
  }
}

export {};
