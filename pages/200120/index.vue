<template>
  <div>
    <div class="computer" />
    <ul class="list_button">
      <li>
        <button @click="clickButton('가위')">
          가위
        </button>
      </li>
      <li>
        <button @click="clickButton('가위')">
          바위
        </button>
      </li>
      <li>
        <button @click="clickButton('가위')">
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
export default {
  data() {
    return {
      result: '',
      score: 0
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    clickButton(choice) {
      console.log(choice)
    }
  }
}
</script>

<style scoped lang="scss">
  .computer {
    width: 160px;
    height: 243px;
    background: url(https://en.pimg.jp/023/182/267/1/23182267.jpg);
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
