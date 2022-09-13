<template>
  <Head>
    <title>{{ title }}</title>
    <meta property="og:title" :content="title" />
    <meta property="og:site_name" :content="title" />
    <meta property="twitter:title" :content="title" />

    <meta name="description" :content="description" />
    <meta property="og:description" :content="description" />
    <meta property="twitter:description" :content="description" />

    <meta name="keywords" :content="keywords" />

    <meta property="og:image" :content="image" />
    <meta property="og:image:secure_url" :content="image" />
    <meta property="twitter:image" :content="image" />

    <meta name="theme-color" content="#ffffff" />
    <meta property="og:type" content="website" />
    <meta property="twitter:card" content="summary_large_image" />

    <meta name="abstract" content="vue-template" />
    <meta name="subject" content="vue-template" />
  </Head>
</template>

<script lang="ts" setup>
import { Head } from '@vueuse/head';

const props = defineProps<{
  title?: string;
  pageTitle?: string;
  keywords?: string[];
  description?: string;
  image?: string;
}>();

const pageTitle = props.pageTitle || '';

let _title: string | void = void 0;
if (pageTitle) _title = `小鹿樹教育文化協會 | ${pageTitle}`;

const image = props.image || '/favicon.ico';
const keywords = (
  props.keywords || [
    '小鹿樹教育文化協會',
    'Little.Dear.Tree',
    '臺南市小鹿樹教育文化協會',
  ]
)?.join(',');

const description =
  props.description ||
  '小鹿樹教育文化協會，致力於實踐教育正義及文化平權，透過音樂劇製作計畫等方式，激發孩子潛能，許孩子一個勇於為自己發聲的未來。因為看見台灣教育及文化資源不平等的問題，小鹿樹教育文化協會長期與偏鄉學校及社福機構合作，開發「心靈教育系統」（Spiritual Education System），並透過兒童音樂劇計畫、中英語讀寫創作等課程，導入文學、藝術、哲學、表演等素養刺激，啟迪兒童潛能與表達能力。小鹿樹兒少音樂劇團、地方合作音樂劇製作計畫、中英語心靈寫作課程。我們願賦予孩子為自己發聲的力量，建構一個平等而具有生命力的共好社會。';

const title = _title || props.title || '小鹿樹教育文化協會/Little.Dear.Tree';
</script>
