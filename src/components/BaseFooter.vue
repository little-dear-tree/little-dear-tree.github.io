<template>
  <footer>
    <h1>小鹿樹教育文化協會</h1>

    <ul class="info">
      <!-- email -->
      <li itemprop="email" aria-label="Email: little.dear.tree2020@gmail.com">
        <SvgIcon name="connection-mail" size="22px" color="#8b949e" />
        <a href="mailto:little.dear.tree2020@gmail.com">
          little.dear.tree2020@gmail.com
        </a>
      </li>

      <!-- facebook -->
      <li
        itemprop="facebook"
        aria-label="facebook: 小鹿樹教育文化協會/Little.Dear.Tree"
      >
        <SvgIcon name="connection-facebook" size="22px" color="#8b949e" />
        <a
          href="https://www.facebook.com/%E5%B0%8F%E9%B9%BF%E6%A8%B9%E6%95%99%E8%82%B2%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83LittleDearTree-101351098369983/"
        >
          小鹿樹教育文化協會/Little.Dear.Tree
        </a>
      </li>

      <!-- instagram -->
      <li itemprop="instagram" aria-label="instagram: little.dear.tree2020">
        <SvgIcon name="connection-instagram" size="22px" color="#8b949e" />
        <a href="https://www.instagram.com/little.dear.tree2020">
          little.dear.tree2020
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
ul {
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    a {
      margin-left: 5px;
      color: #c9d1d9;

      &:hover {
        color: rgb(87 161 244);
      }
    }
  }
}

footer {
  padding: 1em 2em;
  background-color: black;
}

h1 {
  position: relative;
  margin-bottom: 1em;
  color: white;

  &::after {
    position: absolute;
    top: 21px;
    right: 0;
    width: calc(100% - 320px);
    height: 1px;
    background: #61749f;
    content: '';
  }
}
</style>
