<template>
  <div class="login">
    <h2 class="login__title">
      LOGIN
    </h2>
    <p class="login__text">
      아이디와 비밀번호를 입력해주세요.
    </p>
    <Login :user="user" :hasError="hasError" />
    <p class="login__text--error">
      {{ errorMessage }}
    </p>
    <button class="login__button" @click="clickSubmit">
      로그인
    </button>
  </div>
</template>

<script>
import Login from '~/components/Login.vue'

export default {
  components: { Login },
  data() {
    return {
      user: {
        id: '',
        password: ''
      },
      errorMessage: '',
      hasError: false
    }
  },
  methods: {
    clickSubmit() {
      const isValidForm = this.user.id && this.user.password
      if (isValidForm) {
        this.hasError = false
        this.errorMessage = ''
        alert('로그인 validate 성공!')
      }
      if (!isValidForm) {
        this.hasError = true
        this.errorMessage = '아이디와 비밀번호를 반드시 입력해주세요'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  width: 250px;
  height: 320px;
  margin: 0 auto;
  padding: 50px 65px;
  background-color: #fff;
  font-family: 'PT Sans Narrow', sans-serif;
  &__title {
    font-size: 25px;
    letter-spacing: 5px;
    font-weight: 100;
  }
  &__text {
    font-size: 14px;
    line-height: 40px;
    &--error {
      color: red;
    }
  }
  &__button {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    background-color: #499df5;
    font-size: 18px;
    color: #fff;
    line-height: 40px;
    text-align: center;
  }
}
</style>
