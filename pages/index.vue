<template>
  <section class="container">
    <div>
      <div class="title">
        <app-logo />
        <h1 class="title__text">
          Daily Vue
        </h1>
      </div>
      <p class="text">
        매일 매일 예제 하나씩 구현해보는 vue daily project
      </p>
      <ul class="link">
        <li>
          <nuxt-link to="/190731" class="link__text">
            로그인 Validation<span class="link__date">190731</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190801" class="link__text">
            버튼 테마 Component<span class="link__date">190801</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190802"  class="link__text">
            Navigation Menu<span class="link__date">190802</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190805" class="link__text">
            Inline Editor<span class="link__date">190805</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190806" class="link__text">
            Order Calculator<span class="link__date">190806</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190807" class="link__text">
            Instant Search<span class="link__date">190807</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190811" class="link__text">
            Switchable Grid<span class="link__date">190811</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190812" class="link__text">
            Category List Filter<span class="link__date">190812</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190815" class="link__text">
            카드 Component<span class="link__date">190815</span>
          </nuxt-link>
        </li>
        <li class="text__desc">
          회사 홈페이지 진행 1908 ~ 1912<a class="link__company" href="https://marketdesigners.com/" target="_blank">MarketDesigners</a>
        </li>
        <li>
          <nuxt-link to="/200118" class="link__text">
            구구단<span class="link__date">200118</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/200119" class="link__text">
            숫자야구<span class="link__date">200119</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/200120" class="link__text">
            가위바위보 게임<span class="link__date">200120</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/200121" class="link__text">
            <span>로또</span><span class="link__date">200121</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/200123" class="link__text">
            <span>틱택토</span><span class="link__date">200123</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
.container {
  padding: 80px 96px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  @include maxWidth767() {
    padding: 80px 24px;
  }
}
.title {
  width: 100%;
  margin-bottom: 20px;
  font-weight: 700;
  &__text {
    display: inline-block;
    margin-left: 15px;
    font-size: 50px;
    color: #37352f;
    line-height: 1;
    @include maxWidth767() {
      display: block;
      margin: 15px 0 0;
    }
  }
}
.text {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  &__desc {
    padding: 0 5px;
    background-color: #d9f0e6;
    text-align: center;
  }
}

.link {
  margin-top: 40px;
  padding-top: 8px;
  border-top: 1px solid rgba(55, 53, 47, 0.16);
  li {
    overflow: hidden;
    font-size: 16px;
    line-height: 30px;
  }
  &__text {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 5px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    &:hover {
      background-color: rgba(55, 53, 47, 0.08);
    }
  }
  &__date {
    float: right;
    font-size: 12px;
  }
  &__company {
    margin-left: 8px;
    color: #505050;
    font-weight: 700;
    text-decoration: underline;
  }
}
</style>
