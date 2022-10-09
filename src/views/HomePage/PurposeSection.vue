<script setup lang="ts">
import FadeInUpScrollVue from '@/components/utils/anim/FadeInUpScroll.vue';
</script>

<template>
  <section id="purpose-section">
    <FadeInUpScrollVue one>
      <div class="attachment-fixed">
        <h1>小鹿樹教育文化協會</h1>
      </div>
    </FadeInUpScrollVue>
  </section>
</template>

<style lang="scss" scoped>
.attachment-fixed {
  position: relative;
  display: flex;
  width: 100%;
  height: 250px;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
  text-align: center;
  text-shadow: 0 0 20px #000;
  background: #313131;
  background-attachment: fixed;
  background-image: url('https://scontent.ftpe3-2.fna.fbcdn.net/v/t39.30808-6/294717835_584839786687776_49507967485349543_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OGmUxyS5rQgAX_Ia3Uy&_nc_ht=scontent.ftpe3-2.fna&oh=00_AT8lOxZiUjig6g46lXzsKh-izXlmhP1zSdjlDVylG0MztQ&oe=6347C0D7');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
}
</style>
