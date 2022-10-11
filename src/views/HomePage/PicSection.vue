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
      <div class="container">
        <h1>
          Little.Dear.Tree
          <br />
          讓每個孩子無所畏懼的說自己的生命故事
        </h1>
      </div>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>
.pics-slide-block {
  position: relative;
  display: flex;
  width: 100%;
  height: 720px;
  max-height: 950px;

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

  .container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    text-align: center;

    h1 {
      padding-bottom: 8%;
      font-size: 3rem;
      line-height: 60px;
      color: white;
      text-shadow: 0 0 5px #000;
    }
  }
}
</style>
