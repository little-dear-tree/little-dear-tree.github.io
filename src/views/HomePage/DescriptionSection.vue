<script setup lang="ts">
import { reactive } from 'vue';
import descriptionImagesData from '@/data/HomePage/images.yaml';
import FadeInUpScrollVue from '@/components/utils/anim/FadeInUpScroll.vue';

interface DescriptionType {
  image: string;
  title?: string | string[];
  description?: string;
}

const modules = import.meta.glob('../../**/*');

const descriptionImages = reactive<DescriptionType[]>([]);

(descriptionImagesData as DescriptionType[]).map(async (data) => {
  const { image } = data;

  if (!image.startsWith('@/')) {
    descriptionImages.push(data);
    return;
  }

  await modules[image.replace(/^@\//, '../../')]().then((module) => {
    descriptionImages.push({ ...data, image: module.default });
  });
});
</script>

<template>
  <section id="description-section">
    {{ descriptionImages }}
    <div class="cases">
      <FadeInUpScrollVue
        v-for="(img, index) in descriptionImages"
        :key="index"
        one
        class="case"
      >
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
          <LImg v-if="img.image" :src="img.image" />
        </div>
      </FadeInUpScrollVue>
    </div>
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

    .image :deep([img]) {
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
