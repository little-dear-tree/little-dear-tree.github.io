<script setup lang="ts">
import BaseFooterVue from '@/components/BaseFooter.vue';
import BaseHeaderVue from '@/components/BaseHeader.vue';
</script>

<template>
  <BaseHeaderVue />
  <router-view />
  <BaseFooterVue />
</template>
