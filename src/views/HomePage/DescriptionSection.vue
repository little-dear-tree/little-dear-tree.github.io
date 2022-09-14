<script setup lang="ts">
import 'swiper.css';
import 'swiper/all.css';

import { Autoplay, Pagination, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

interface DescriptionType {
  image: string;
  title?: string;
  description?: string;
  to?: string;
  more?: string;
}

const descriptionImages: DescriptionType[] = [
  ...Array.from({ length: 10 }).map(
    (_, index): DescriptionType => ({
      image: `https://picsum.photos/400?c=${index}`,
      title: 'image title',
      description: 'description',
      to: 'https://google.com',
      more: '/more',
    })
  ),
];
</script>

<template>
  <section id="description-section">
    <swiper
      loop
      grab-cursor
      effect="creative"
      direction="vertical"
      :pagination="{ clickable: true }"
      :creative-effect="{
        prev: {
          shadow: true,
          origin: 'left center',
          translate: ['-5%', 0, -200],
          rotate: [0, 100, 0],
        },
        next: {
          origin: 'right center',
          translate: ['5%', 0, -200],
          rotate: [0, -100, 0],
        },
      }"
      :modules="[Autoplay, Pagination, EffectCreative]"
      :autoplay="{ delay: 1e3, disableOnInteraction: false }"
      class="description-slide-block"
    >
      <swiper-slide v-for="(img, index) in descriptionImages" :key="index">
        <a :href="img.to" class="info">
          <div
            role="img"
            :style="{ '--image-url': `url(${img.image})` }"
            :title="img.title"
            :aria-label="img.title"
          ></div>
          <div class="description">
            <h2 v-text="img.title"></h2>
            <p v-text="img.description"></p>
            <a :href="img.more">更多</a>
          </div>
        </a>
      </swiper-slide>
    </swiper>

    <div class="content">
      <h1 class="title">小鹿樹教育文化協會/Little.Dear.Tree</h1>
      <span class="description">
        我們是由一群志同道合，貢獻所長並打破本位框架的夥伴們所組成並致力於推動
        偏鄉教育。
        在課程中跨越領域，將音樂、舞蹈、戲劇、語言文學、多元媒材創作、團體輔導、
        表達性藝術治療、專題式學習(project-based learning) 融入課程活動。
        文化平權與教育正義。
        願每個孩子都能擁有平等的機會、豐足的信心，無所畏懼的說自己的生命故事。
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#description-section {
  display: grid;
  max-width: 800px;
  margin: auto;
}

.description-slide-block {
  width: 800px;
  height: 250px;

  .swiper-slide {
    width: 100%;
    height: 100%;
  }

  .info {
    display: flex;

    div[role='img'] {
      width: 400px;
      height: 400px;
      background-image: var(--image-url);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .description {
      display: flex;
      width: 400px;
      height: 250px;
      background-color: red;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
