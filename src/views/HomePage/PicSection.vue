<script setup lang="ts">
import 'swiper.css';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const images = [
  { url: 'https://picsum.photos/1000/500?c=0', alt: 'test' },
  { url: 'https://picsum.photos/1000/500?c=1', alt: 'test' },
  { url: 'https://picsum.photos/1000/500?c=2', alt: 'test' },
  { url: 'https://picsum.photos/1000/500?c=3', alt: 'test' },
];
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
      <swiper-slide v-for="(img, index) in images" :key="index">
        <div :style="{ '--image-url': `url(${img.url})` }"></div>
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
