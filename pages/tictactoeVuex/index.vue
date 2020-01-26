<template>
  <div>
    <p>{{ getTurnMessage }}</p>
    <TableComponent>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td v-for="(cellData, cellIndex) in rowData" :key="cellIndex" @click="onClickTd(rowIndex, cellIndex)">
          {{ cellData }}
        </td>
      </tr>
    </TableComponent>
    <p v-if="winner">
      {{ getWinnerMessage }}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import store, { CHANGE_TURN, CLICK_CELL, NO_WINNER, RESET_GAME, SET_WINNER } from '~/store/tictactoe.js'
import TableComponent from '~/components/TableComponent.vue'

export default {
  store,
  components: {
    TableComponent
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(['winner', 'turn', 'tableData']),
    ...mapGetters(['getTurnMessage', 'getWinnerMessage'])
    // winner() {
    //   return this.$store.state.winner;
    // },
    // turn() {
    //   return this.$store.state.turn;
    // },
  },
  methods: {
    onClickTd(rowIndex, cellIndex) {
      if (!this.cellData) {
        this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex })

        let win = false
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true
        }

        if (win) { // 이긴 경우: 3줄 달성
          this.$store.commit(SET_WINNER, this.turn)
          this.$store.commit(RESET_GAME)
        } else { // 무승부
          let all = true // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false
              }
            })
          })
          if (all) { // 무승부
            this.$store.commit(NO_WINNER)
            this.$store.commit(RESET_GAME)
          } else {
            this.$store.commit(CHANGE_TURN)
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
p {
  font-size: 20px;
}
</style>
