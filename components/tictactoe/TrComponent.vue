<template>
  <tr>
    <TdComponent
      v-for="(colsData, index) in rowData"
      :key="index"
      :colsData="colsData"
      :colsIndex="index"
      :rowIndex="rowIndex"
    />
  </tr>
</template>

<script>
import TdComponent from '~/components/tictactoe/TdComponent.vue'
export default {
  name: 'TrComponent',
  components: { TdComponent },
  props: {
    rowData: {
      type: Array,
      required: true
    },
    rowIndex: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
