<script lang="ts" setup>
const items = [
  {
    title: 'test',
    href: 'awa',
    target: '_blank',
  },
];
</script>

<template>
  <header>
    <div class="menu-content">
      <div class="menu-icon"></div>
      <div v-for="(item, index) of items" :key="index" class="menu-item">
        <a
          :href="item.href"
          :target="item.target"
          class="menu-title"
          v-text="item.title"
        ></a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100%;
  height: 5rem;
  background-color: white;
  box-shadow: 0 0 90px 2px #0005;
}

.menu-content {
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 30px;
}

.menu-title {
  font-size: 18px;
  line-height: 30px;
  color: #2f2f2f;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;

  &::after {
    width: 0;
    border-bottom: 2px solid #666;
    content: '';
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }
}

:global(body) {
  --margin-height: 5rem;

  height: calc(100vh - var(--margin-height));
  margin-top: var(--margin-height);
}
</style>
