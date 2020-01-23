<template>
  <div>
    <table>
      <tbody>
        <TrComponent
          v-for="(rowData, index) in tableData"
          :key="index"
          :rowData="rowData"
          :rowIndex="index"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TrComponent from '~/components/200123/TrComponent.vue'
export default {
  name: 'TableComponent',
  components: { TrComponent },
  props: {
    tableData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  td {
    width: 100px;
    height: 100px;
    border: 5px solid #333;
    font-size: 50px;
    text-align: center;
    line-height: 100px;
  }
}
</style>
