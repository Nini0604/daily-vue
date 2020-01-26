<template>
  <div>
    <p class="ball" :style="{'background-color':color}">
      {{ number }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'LottoBall',
  props: {
    number: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .ball {
    float: left;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border: 1px solid #333;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
  }
</style>
