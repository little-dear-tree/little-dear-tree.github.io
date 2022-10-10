<script setup lang="ts">
import type { JsonLdObj } from 'jsonld/jsonld-spec';

import { ArrayOrType } from '@/utils';

import PicSection from './PicSection.vue';
import DescriptionSection from './DescriptionSection.vue';
import PurposeSection from './PurposeSection.vue';

const jsonLd: ArrayOrType<JsonLdObj> = [
  {
    '@type': 'Organization',
    name: 'little-dear-tree',
    url: 'https://little-dear-tree.github.io/',
    logo: 'https://little-dear-tree.github.io/favicon/android-chrome-512x512.png',
    founders: [{ '@type': 'Person', name: '呂鍾伶' }],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: ['lyra8624@gmail.com', 'little.dear.tree2020@gmail.com'],
    },
    sameAs: [
      'https://www.facebook.com/%E5%B0%8F%E9%B9%BF%E6%A8%B9%E6%95%99%E8%82%B2%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83LittleDearTree-101351098369983/',
      'https://www.instagram.com/little.dear.tree2020/?fbclid=IwAR0vVJUEie2gVqLDR5LNHCFtoEaoOtFAkLw3yhMdTSq6hjDyoxjI-tfD4eU',
    ],
  },
];
</script>

<template>
  <GeneralHead :json-ld="jsonLd" />

  <PicSection />
  <DescriptionSection />
  <PurposeSection />
</template>

<style lang="scss" scoped></style>
