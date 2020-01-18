<template>
  <div>
    <form @submit="onSubmitForm">
      <input
        ref="answer"
        v-model="value"
        type="number"
        maxlength="4"
      >
      <button type="submit">
        입력
      </button>
    </form>
    {{ resultNumber }}
    <p>시도:{{ triedValues.length }}</p>
    <p v-if="showResult">
      <ul>
        <li v-for="(triedValue, index) in triedValues" :key="index">
          {{ triedValue }}
        </li>
      </ul>
      <span>{{ result }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      triedValues: [],
      resultNumber: this.getResultNumber(),
      strikeNumber: 0,
      ballNumber: 0,
      showResult: false
    }
  },
  computed: {
    result() {
      return this.strikeNumber + '스트라이크,' + this.ballNumber + '볼'
    }
  },
  created() {

  },
  methods: {
    getResultNumber() {
      const numberArray = Array(9).fill().map((element, i) => i + 1)
      const resultArray = []
      for (let i = 0; i < 4; i++) {
        const randomNum = Math.floor(Math.random() * (9 - i))
        resultArray.push(numberArray.splice(randomNum, 1)[0])
      }
      return resultArray.join().replace(/,/g, '')
    },
    resetData() {
      this.value = ''
      this.triedValues = []
      this.resultNumber = this.getResultNumber()
      this.strikeNumber = 0
      this.ballNumber = 0
      this.showResult = false
    },
    onSubmitForm(e) {
      e.preventDefault()
      this.showResult = true
      this.$refs.answer.focus()
      this.strikeNumber = 0
      this.ballNumber = 0
      this.triedValues.push(this.value)

      const valueArray = this.value.split('')
      if (this.triedValues.length > 9) {
        alert('실패! 답은' + this.resultNumber + '였어요!')
        this.resetData()
      }
      if (this.value === this.resultNumber) {
        this.result = '홈런!'
        alert('정답!')
        this.resetData()
      } else {
        valueArray.forEach((value, index) => {
          if (value === this.resultNumber[index]) {
            this.strikeNumber++
          } else if (this.resultNumber.indexOf(value) > -1) {
            this.ballNumber++
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    border: 1px solid #333;
  }
</style>
