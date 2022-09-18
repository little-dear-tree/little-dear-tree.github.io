<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import PreloaderLogo from '@/assets/image/mk-logo.png';

// eslint-disable-next-line vue/no-setup-props-destructure
const props = defineProps<{
  src: string;
  srcset?: string;
}>();
const srcset = props.srcset || PreloaderLogo;

const done = ref(false);
const error = ref(false);

const onError = ({ target }: Event) => (target as HTMLDivElement).remove();
</script>

<template>
  <div
    class="lazy-load"
    :data-src="src"
    :data-srcset="srcset"
    :class="{ done, error }"
  >
    <img :src="src" @load="done = true" @error="onError" />
    <div
      class="lazy-preloader"
      :style="{ '--srcset-url': `url(${srcset || PreloaderLogo})` }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.lazy-load {
  position: relative;

  .lazy-preloader {
    display: none;
  }

  &:not(.done) {
    width: 10px;
    height: 10px;

    .lazy-preloader {
      top: 50%;
      left: 50%;
      display: block;
      width: 100px;
      height: 100px;
      transform-origin: 50%;
    }
  }
}

.lazy-preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: white;
  background-image: var(--srcset-url);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
}
</style>
