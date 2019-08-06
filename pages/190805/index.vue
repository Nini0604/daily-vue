<template>
  <div class="content" @click="hideToolBox">
    <div v-if="showToolBox" class="content__toolBox" @click.stop>
      <input
        v-model="textContent"
        type="text"
        class="content__toolBox__input"
      >
    </div>
    <p class="content__text" @click.stop="toggleToolBox">
      {{ textContent }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showToolBox: false,
      textContent: 'Edit me'
    }
  },
  methods: {
    toggleToolBox() {
      this.showToolBox = !this.showToolBox
    },
    hideToolBox() {
      this.showToolBox = false
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  position: relative;
  height: 300px;
  padding-top: 150px;
  text-align: center;
  &__toolBox {
    position: absolute;
    top: 80px;
    left: 50%;
    width: 290px;
    padding: 10px;
    margin-left: -150px;
    background: linear-gradient(#5c9bb7, #5392ad);
    background: -webkit-linear-gradient(#5c9bb7, #5392ad);
    background: -moz-linear-gradient(#5c9bb7, #5392ad);
    background-color: #5c9bb7;
    box-shadow: 0 1px 1px #ccc;
    border-radius: 3px;
    &__input {
      width: 100%;
      height: 36px;
      border: none;
      border-radius: 3px;
      font-size: 16px;
      font-weight: bold;
      line-height: 34px;
      color: #8d9395;
      box-shadow: 0 0px 6px #bbb inset;
      text-align: center;
      outline: none;
    }
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -12px;
      width: 0;
      height: 0;
      margin-left: -6px;
      border: 6px solid #5190ac;
      border-color: #5190ac transparent transparent;
    }
  }
  &__text {
    display: inline-block;
    height: 30px;
    font-size: 22px;
    font-weight: 700;
    color: #6d8088;
    cursor: pointer;
    &:before {
      content: '✎';
      display: inline-block;
      margin-right: 3px;
      font-weight: normal;
      vertical-align: middle;
    }
  }
}
</style>
