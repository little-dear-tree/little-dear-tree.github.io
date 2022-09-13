<script setup lang="ts">
import BaseFooterVue from '@/components/BaseFooter.vue';
import BaseHeaderVue from '@/components/BaseHeader.vue';
</script>

<template>
  <BaseHeaderVue class="header" />
  <div class="content">
    <router-view />
  </div>
  <BaseFooterVue class="footer" />
</template>

<style lang="scss" scoped>
:global(#app-mount) {
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}
</style>
