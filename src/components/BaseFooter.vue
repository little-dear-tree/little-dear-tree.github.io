<template>
  <footer>
    <div class="info">
      <div class="base-info">
        <h1 class="name">小鹿樹教育文化協會</h1>

        <div class="community">
          <!-- email -->
          <span
            itemprop="email"
            aria-label="Email: little.dear.tree2020@gmail.com"
          >
            <SvgIcon name="connection-mail" size="22px" color="#8b949e" />
            <a href="mailto:little.dear.tree2020@gmail.com">
              little.dear.tree2020@gmail.com
            </a>
          </span>

          <!-- facebook -->
          <span
            itemprop="facebook"
            aria-label="facebook: 小鹿樹教育文化協會/Little.Dear.Tree"
          >
            <SvgIcon name="connection-facebook" size="22px" color="#8b949e" />
            <a
              href="https://www.facebook.com/%E5%B0%8F%E9%B9%BF%E6%A8%B9%E6%95%99%E8%82%B2%E6%96%87%E5%8C%96%E5%8D%94%E6%9C%83LittleDearTree-101351098369983/"
            >
              小鹿樹教育文化協會/Little.Dear.Tree
            </a>
          </span>

          <!-- instagram -->
          <span
            itemprop="instagram"
            aria-label="instagram: little.dear.tree2020"
          >
            <SvgIcon name="connection-instagram" size="22px" color="#8b949e" />
            <a href="https://www.instagram.com/little.dear.tree2020">
              little.dear.tree2020
            </a>
          </span>
        </div>
      </div>
      <div class="else-info">
        <div>
          <h2>了解更多</h2>
          <ul>
            <li><a href="">近期活動</a></li>
            <li><a href="">人才招募</a></li>
            <li><a href="">近期合作</a></li>
          </ul>
        </div>
        <div>
          <h2>支持我們</h2>
          <ul>
            <li><a href="">捐款計畫</a></li>
            <li><a href="">捐款徵信</a></li>
            <li><a href="">感謝名單</a></li>
            <li>
              <router-link to="/user-access-levels">會員身分說明</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2>佔位</h2>
          <ul>
            <li><a href="">佔位</a></li>
            <li><a href="">佔位</a></li>
          </ul>
        </div>
        <div>
          <h2>佔位</h2>
          <ul>
            <li><a href="">佔位</a></li>
            <li><a href="">佔位</a></li>
            <li><a href="">佔位</a></li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    Copyright © 2022 小鹿樹教育文化協會/Little Dear Tree All Rights Reserved.
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 80%;
  max-width: 1400px;
  padding: 2em 1em;
  margin: 0 auto;

  @media (max-width: 750px) {
    width: 90%;

    .info {
      grid-template-columns: initial;

      .else-info {
        margin: initial;
        grid-row-start: -1;
        margin-bottom: 1em;
      }
    }
  }
}

.info {
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);

    .else-info {
      justify-items: normal;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.else-info {
  display: grid;
  justify-items: center;
  gap: 15px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.base-info {
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
}

.community {
  display: flex;
  flex-direction: column;

  span {
    margin-top: 8px;
  }
}

h1 {
  position: relative;
  margin-bottom: 8px;
  font-size: 27px;
  color: black;
}

h2 {
  margin-bottom: 8px;
  font-size: 18px;
}

a {
  line-height: 1.75rem;
  color: #242629;

  &:hover {
    color: rgb(79 136 250);
    text-decoration: none;
  }
}

svg ~ a {
  margin-left: 5px;
}

hr {
  margin: 1em 0;
}
</style>
