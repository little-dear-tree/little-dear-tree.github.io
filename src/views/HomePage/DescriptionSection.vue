<script setup lang="ts">
import 'swiper.css';
import 'swiper/all.css';

import { Autoplay, Grid, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
</script>

<template>
  <section id="description-section">
    <swiper
      loop
      grab-cursor
      :slides-per-view="4"
      :allow-touch-move="false"
      :autoplay="{ delay: 10 * 1e3 }"
      :modules="[Autoplay, Grid, EffectCards]"
      class="pics-slide-block"
    >
      <swiper-slide v-for="i in 15" :key="i">{{ i }}</swiper-slide>
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

<style lang="scss" scoped></style>
