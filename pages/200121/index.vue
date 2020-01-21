<template>
  <div>
    <h2>당첨 숫자</h2>
    <div class="wrap__balls">
      <LottoBall
        v-for="ball in winningBalls"
        :key="ball.number"
        :number="ball.number"
        :color="ball.color"
      />
    </div>
    <h2>보너스</h2>
    <LottoBall v-if="bonusBall.length" :number="bonusBall[0].number" :color="bonusBall[0].color" />
    <button v-if="showButton" @click="replay()">
      한번 더!
    </button>
  </div>
</template>

<script>
import LottoBall from '~/components/200121/LottoBall.vue'

const timeout = []
export default {
  components: { LottoBall },
  data() {
    return {
      winningNumbers: this.shuffleNumbers(),
      showButton: false,
      winningBalls: [],
      bonusBall: []
    }
  },
  computed: {
  },
  watch: {
    // winningBalls(value, oldValue) {
    //   if (value.length === 0) {
    //     this.displayBalls()
    //   }
    // }
  },
  mounted() {
    this.displayBalls()
  },
  beforeDestroy() {
    timeout.forEach((timeout) => {
      clearInterval(timeout)
    })
  },
  methods: {
    reset() {
      this.winningNumbers = this.shuffleNumbers()
      this.winningBalls = []
      this.showButton = false
      this.bonusBall = []
      this.displayBalls()
    },
    shuffleNumbers() {
      let shuffleNumbers = []
      const numberArray = Array(45).fill().map((element, index) => index + 1)
      for (let index = 0; index < 7; index++) {
        const randomNumber = numberArray.splice(Math.floor(Math.random() * numberArray.length), 1)[0]
        shuffleNumbers.push(randomNumber)
        shuffleNumbers = shuffleNumbers.slice(0, 7).sort((a, b) => a - b)
      }
      return shuffleNumbers
    },
    displayBalls() {
      const { winningNumbers } = this
      let ballColor = null
      const lastIndex = winningNumbers.length - 1
      winningNumbers.forEach((winningNumber, index) => {
        timeout[index] = setTimeout(() => {
          if (winningNumber <= 10) {
            ballColor = 'red'
          } else if (winningNumber <= 20) {
            ballColor = 'orange'
          } else if (winningNumber <= 30) {
            ballColor = 'yellow'
          } else if (winningNumber <= 40) {
            ballColor = 'blue'
          } else {
            ballColor = 'green'
          }
          if (index !== lastIndex) {
            this.winningBalls.push({ 'number': winningNumber, 'color': ballColor })
          }
        }, (index + 1) * 1000)
      })
      timeout[lastIndex] = setTimeout(() => {
        const bonusNumber = winningNumbers[lastIndex]
        this.bonusBall.push({ 'number': bonusNumber, 'color': ballColor })
        this.showButton = true
      }, 7000)
    },
    replay() {
      this.reset()
    }
  }
}
</script>

<style scoped lang="scss">
  h2 {
    padding: 10px 0;
  }
  .wrap {
    &__balls {
      overflow: hidden;
      height: 32px;
    }
  }
  button {
    padding: 3px 5px;
    border: 1px solid #333;
  }
</style>
