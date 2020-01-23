<template>
  <div>
    <TableComponent :tableData="tableData" />
    <p>{{ turn }}님 차례입니다</p>
    <p v-if="winner">
      {{ winner }} 님이 승리하셨습니다
    </p>
  </div>
</template>

<script>
import TableComponent from '~/components/200123/TableComponent.vue'
export default {
  components: { TableComponent },
  data() {
    return {
      tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      turn: 'O',
      winner: ''
    }
  }

}
</script>

<style scoped lang="scss">
  p {
    font-size: 20px;
  }
</style>
