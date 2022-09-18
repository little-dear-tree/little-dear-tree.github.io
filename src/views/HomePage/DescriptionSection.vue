<script setup lang="ts">
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
    <div class="cases">
      <div v-for="(img, index) in descriptionImages" :key="index" class="case">
        <div class="left">
          <LImg :src="img.image" />
        </div>
        <div class="right">
          <a class="more" :href="img.more">更多</a>
        </div>
      </div>
    </div>
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
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  margin: auto;
}

.cases {
  width: 100%;

  .case {
    display: flex;
    width: 80%;
    margin: 3em auto;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
    }

    .right {
      display: flex;
      width: 400px;
      height: 400px;
    }

    .more {
      position: relative;
      padding: 2px;
      margin-left: 1em;
      font-size: 1.4rem;
      font-weight: 900;
      text-decoration: none;

      &:hover::after {
        animation: more-hover 0.5s forwards cubic-bezier(0.8, 0.1, 0.1, 0.8);
      }

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
        content: '';
        transform: scaleX(0);
        backface-visibility: hidden;
        will-change: transform;
        transform-origin: center right;
      }
    }
  }
}

.content {
  margin-left: 1em;

  .title {
    font-size: 25pt;
  }

  .description {
    font-size: 13pt;
  }
}

@keyframes more-hover {
  0% {
    transform: scale(1);
    transform-origin: center right;
  }

  50% {
    transform: scaleX(0);
    transform-origin: center right;
  }

  55% {
    transform: scaleX(0);
    transform-origin: center left;
  }

  to {
    transform: scale(1);
    transform-origin: center left;
  }
}
</style>
