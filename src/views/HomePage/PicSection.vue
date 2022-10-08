<script setup lang="ts">
import 'swiper.css';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import baseSlideshowData from '@/data/HomePage/slideshow.yaml';

const slideshowData: string[] = baseSlideshowData;
</script>

<template>
  <section id="pic-section">
    <swiper
      loop
      :allow-touch-move="false"
      :autoplay="{ delay: 10 * 1e3 }"
      :modules="[Autoplay]"
      class="pics-slide-block"
    >
      <swiper-slide v-for="(img, index) in slideshowData" :key="index">
        <div lazy-load :style="{ '--image-url': `url(${img})` }"></div>
      </swiper-slide>
    </swiper>
  </section>
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
