<template>
  <div>
    <h1>{{ num1 }} 곱하기 {{ num2 }} ?</h1>
    <form @submit="onSubmitForm">
      <input ref="answer" v-model="value" type="number">
      <button type="submit">
        입력
      </button>
    </form>
    <p>{{ result }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: Math.ceil(Math.random() * 9),
      num2: Math.ceil(Math.random() * 9),
      value: '',
      result: ''
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault()
      const calculate = Number(this.value) === this.num1 * this.num2
      if (calculate) {
        this.result = '정답'
        this.num1 = Math.ceil(Math.random() * 9)
        this.num2 = Math.ceil(Math.random() * 9)
      } else {
        this.result = '땡'
      }
      this.value = ''
      this.$refs.answer.focus()
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    border: 1px solid #333;
  }
</style>
