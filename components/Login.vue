<template>
  <filedset>
    <legend class="loginText">로그인</legend>
    <ul class="loginList">
      <li class="loginList__item">
        <label class="loginList__item__text">아이디</label>
        <input
          class="loginList__item__input"
          v-model="user.id" type="text"
          :class="{hasError:hasError}"
          placeholder="아이디를 입력해주세요"
        >
      </li>
      <li class="loginList__item">
        <label class="loginList__item__text">비밀번호</label>
        <input
          class="loginList__item__input"
          v-model="user.password"
          type="password"
          :class="{hasError:hasError}"
          placeholder="비밀번호를 입력해주세요"
        />
      </li>
    </ul>
  </filedset>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    hasError: Boolean
  }
}
</script>

<style lang="scss">
.loginText {
  display: none;
}
.loginList {
  &__item {
    position: relative;
    width: 248px;
    height: 33px;
    margin-bottom: 8px;
    &__text {
      display: none;
    }
    &__input {
      width: 100%;
      height: 100%;
      background-color: transparent;
      border: 1px solid #dadada;
      outline: none;
      font-size: 12px;
      color: #333;
      line-height: 33px;
      text-indent: 10px;
    }
  }
}
.hasError {
  border: 1px solid red;
}
</style>
