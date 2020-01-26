<template>
  <td @click.prevent="onClickTd">
    {{ colsData }}
  </td>
</template>

<script>
import EventBus from '~/assets/js/EventBus.js'
export default {
  name: 'TdComponent',
  props: {
    colsData: {
      type: String,
      required: true
    },
    rowIndex: {
      type: Number,
      required: true
    },
    colsIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClickTd() {
      EventBus.$emit('data', this.rowIndex, this.colsIndex)
      EventBus.$emit('clickTd')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
