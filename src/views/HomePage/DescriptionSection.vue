<script setup lang="ts">
import FadeInUpScrollVue from '@/components/utils/anim/FadeInUpScroll.vue';

interface DescriptionType {
  image: string;
  title?: string | string[];
  description?: string;
}

const descriptionImages: DescriptionType[] = [
  ...Array.from({ length: 5 }).map(
    (_, index): DescriptionType => ({
      image: `https://picsum.photos/600/400?c=${index}`,
      title: ['title', '標題'],
      description:
        '帶著這些問題，我們一起來審視標皮。我以為我了解標皮，但我真的了解標皮嗎？仔細想想，我對標皮的理解只是皮毛而已。泰戈爾深信，生活並不是一條人工開鑿的運河，不能把河水媽限制在一些規定好了的河道內。希望大家能發現話中之話。既然如此，對於標皮，我們不能不去想，卻也不能走火入魔。賈爾斯說過一句很有意思的話，一切最文明的東西所具有的價值，自由都具備。這激勵了我。',
    })
  ),
];
</script>

<template>
  <section id="description-section">
    <div class="cases">
      <div v-for="(img, index) in descriptionImages" :key="index" class="case">
        <div class="description">
          <h1 v-if="Array.isArray(img.title)">
            <template v-for="(title, index) in img.title" :key="index">
              <span v-text="title"></span>
              <br />
            </template>
          </h1>
          <h1 v-else v-text="img.title"></h1>

          <p v-text="img.description"></p>
        </div>
        <div class="image">
          <LImg :src="img.image" />
        </div>
      </div>
    </div>
    <!-- <div class="content">
      <h1 class="title">小鹿樹教育文化協會/Little.Dear.Tree</h1>
      <span class="description">
        我們是由一群志同道合，貢獻所長並打破本位框架的夥伴們所組成並致力於推動
        偏鄉教育。
        在課程中跨越領域，將音樂、舞蹈、戲劇、語言文學、多元媒材創作、團體輔導、
        表達性藝術治療、專題式學習(project-based learning) 融入課程活動。
        文化平權與教育正義。
        願每個孩子都能擁有平等的機會、豐足的信心，無所畏懼的說自己的生命故事。
      </span>
    </div> -->
  </section>
</template>

<style lang="scss" scoped>
#description-section {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
}

.cases {
  width: 95%;
  max-width: 75em;
  margin-top: 2em;

  .case {
    display: flex;
    margin-bottom: 2em;
    justify-content: center;

    .description {
      word-wrap: break-word;

      > h1 {
        position: relative;
        margin-bottom: 8px;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 2px;
        color: #6f6f6f;

        &::before {
          position: absolute;
          top: -8px;
          left: 0;
          width: 47px;
          height: 5px;
          background: #6f6f6f;
          content: '';
        }
      }

      > p {
        font-size: 18px;
        color: #6f6f6f;
      }
    }

    .image,
    .description {
      align-self: center;
      max-width: 50%;
    }

    .image :deep(img) {
      display: block;
      width: 70%;
      margin: 0 auto 20px;
    }
  }

  @media (max-width: 1000px) {
    max-width: 90%;

    .case {
      flex-direction: column-reverse;
    }

    .image,
    .description {
      max-width: initial !important;
    }
  }
  @media (min-width: 1000px) {
    .description {
      padding-left: 1em;
    }

    :nth-child(2n + 1) .description {
      order: 1;
    }
  }
}

/* .content {
  margin-left: 1em;

  .title {
    font-size: 25pt;
  }

  .description {
    font-size: 13pt;
  }
} */
</style>
