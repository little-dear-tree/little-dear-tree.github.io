<script setup lang="ts">
import 'swiper.css';
import 'swiper/all.css';

import { Autoplay, Controller, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const modules = [Autoplay, Pagination, Controller];

const images = [
  { url: 'https://picsum.photos/1000/500?c=0', alt: 'test' },
  { url: 'https://picsum.photos/1000/500?c=1', alt: 'test' },
  { url: 'https://picsum.photos/1000/500?c=2', alt: 'test' },
  { url: 'https://picsum.photos/1000/500?c=3', alt: 'test' },
];
</script>

<template>
  <swiper
    loop
    :allow-touch-move="false"
    :autoplay="{ delay: 10 * 1e3 }"
    :modules="modules"
    class="pics-slide-block"
  >
    <swiper-slide v-for="(img, index) in images" :key="index">
      <div :style="{ '--image-url': `url(${img.url})` }"></div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.pics-slide-block {
  display: flex;
  width: 100%;
  height: 500px;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    > div {
      width: 100%;
      height: 100%;
      background-image: var(--image-url);
      background-position: center;
      background-size: cover;
    }
  }
}
</style>
