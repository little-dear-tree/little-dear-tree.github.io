<template>
  <div ref="rootEl" class="fade-in-up-scroll" :class="{ isVisible }">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useIntersectionObserver } from '@vueuse/core';

const isVisible = ref<boolean>();
const rootEl = ref<HTMLDivElement>();

const props = defineProps<{
  rootMargin?: string;
  threshold?: number | number[];
  one?: boolean;
  callback?: typeof defaultCallback;
}>();

const defaultCallback = (
  [{ isIntersecting }]: IntersectionObserverEntry[],
  _observer: IntersectionObserver
) => {
  if (props.one === void 0 || props.one) isVisible.value ||= isIntersecting;
  else isVisible.value = isIntersecting;
};

useIntersectionObserver(rootEl, props.callback || defaultCallback, {
  threshold: props.threshold || 0.8,
  rootMargin: props.rootMargin || '0px',
});
</script>

<style lang="scss" scoped>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up-scroll {
  opacity: 0;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;

  &.isVisible {
    animation-name: fade-in-up;
  }
}
</style>
