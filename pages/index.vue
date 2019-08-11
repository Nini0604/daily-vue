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
      <ul class="links">
        <li>
          <nuxt-link to="/190731">
            <span class="links__text">로그인 Validation</span><span class="links__date">190731</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190801">
            <span class="links__text">버튼 테마 Component</span><span class="links__date">190801</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190802">
            <span class="links__text">Navigation Menu</span><span class="links__date">190802</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190805">
            <span class="links__text">Inline Editor</span><span class="links__date">190805</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190806">
            <span class="links__text">Order Calculator</span><span class="links__date">190806</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190807">
            <span class="links__text">Instant Search</span><span class="links__date">190807</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/190811">
            <span class="links__text">Switchable Grid</span><span class="links__date">190811</span>
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
  padding: 4px 6px;
  font-size: 16px;
}

.links {
  margin-top: 40px;
  padding-top: 8px;
  border-top: 1px solid rgba(55, 53, 47, 0.16);
  li {
    overflow: hidden;
    height: 30px;
    padding: 0 4px;
    font-size: 16px;
    line-height: 30px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      &:hover {
        background-color: rgba(55, 53, 47, 0.08);
      }
    }
  }
  &__text {
    float: left;
  }
  &__date {
    float: right;
    font-size: 12px;
  }
}
</style>
