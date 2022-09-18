<script setup lang="ts">
import { ref } from 'vue';
import { OnClickOutside } from '@vueuse/components';

const close = ref(false);
</script>

<template>
  <Teleport to="body">
    <div class="still-in-development" :class="{ close }">
      <OnClickOutside @trigger="close = true">
        <div>目前尚在開發中!!</div>
        <div class="close" @click="close = true">x</div>
      </OnClickOutside>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.still-in-development {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;

  &,
  > div {
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    align-items: center;
    justify-content: center;
  }

  &:not(.close) > div {
    position: relative;
    width: 400px;
    height: 100px;
    background-color: rgb(0 0 0 / 50%);
    border-radius: 8px;

    .close {
      position: absolute;
      top: 0;
      right: 10px;
      padding: 5px;
      cursor: pointer;
    }
  }

  &.close {
    right: 0;
    pointer-events: none;
    background-color: #24242478;

    .close {
      display: none;
    }
  }

  &:not(.close) {
    width: 100%;
    height: 100%;
    background-color: #2424242e;
  }
}
</style>
