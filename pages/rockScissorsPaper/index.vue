<template>
  <div>
    <div :class="['computer','image__'+imageClassName]" />
    <ul class="list_button">
      <li>
        <button @click="clickButton('scissors')">
          가위
        </button>
      </li>
      <li>
        <button @click="clickButton('rock')">
          바위
        </button>
      </li>
      <li>
        <button @click="clickButton('paper')">
          보
        </button>
      </li>
    </ul>
    <p>
      <span>{{ result }}</span>
      <span>현재 {{ score }}</span>
    </p>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
let intervalPlay = null
const rockScissorsPaper = {
  rock: { score: 0, text: '바위' },
  scissors: { score: 1, text: '가위' },
  paper: { score: -1, text: '보' }
}
export default {
  data() {
    return {
      result: '',
      score: 0,
      imageClassName: ''
    }
  },
  computed: {

  },
  mounted() {
    this.changeHand()
  },
  beforeDestroy() {
    clearInterval(intervalPlay)
    // 꼭 해줘야 메모리 누수 문제 발생하지않는다
  },
  methods: {
    changeHand() {
      intervalPlay = setInterval(() => {
        if (this.imageClassName === 'scissors') {
          this.imageClassName = 'rock'
        } else if (this.imageClassName === 'rock') {
          this.imageClassName = 'paper'
        } else {
          this.imageClassName = 'scissors'
        }
      }, 100)
    },
    clickButton(choice) {
      // 내가 선택한 가위바위보 text로 rockScissorsPaper중 찾기
      const myChoiceObject = Object.entries(rockScissorsPaper).find((element) => {
        if (element[0] === choice) {
          return element
        }
      })

      // 상대 가위바위보 text로 rockScissorsPaper중 찾기
      const computerChoiceObject = Object.entries(rockScissorsPaper).find((element) => {
        if (element[0] === this.imageClassName) {
          return element
        }
      })

      // 위 찾은 걸로 score, text 뽑아내기
      const myChoiceScore = myChoiceObject[1].score
      const computerChoiceScore = computerChoiceObject[1].score
      const myChoiceText = myChoiceObject[1].text
      const computerChoiceText = computerChoiceObject[1].text

      // 바위 가위 보 0 1 -1로 계산
      const scoreDifferent = myChoiceScore - computerChoiceScore
      if (scoreDifferent === 0) {
        this.result = '나:' + myChoiceText + ',상대:' + computerChoiceText + '로 비겼습니다'
      } else if ([-1, 2].includes(scoreDifferent)) {
        this.result = '나:' + myChoiceText + ',상대:' + computerChoiceText + '로 이겼습니다'
        this.score += 2
      } else {
        this.result = '나:' + myChoiceText + ',상대:' + computerChoiceText + '로 겼습니다'
        this.score -= 2
      }
      clearInterval(intervalPlay)
      setTimeout(() => {
        this.changeHand()
      }, 800)
    }
  }
}
</script>

<style scoped lang="scss">
  .computer {
    width: 149px;
    height: 220px;
    background: url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0;
  }
  .image {
    &__rock {
      background-position-x: 0;
    }
    &__scissors {
      background-position-x: -135px;
    }
    &__paper {
      background-position-x: -285px;
    }
  }
  .list_button {
    overflow: hidden;
    li {
      float: left;
      margin-left: 5px;
      button {
        width: 40px;
        border: 1px solid #333;
        text-align: center;
      }
    }
  }
  p {
    padding-left: 5px;
  }
</style>
