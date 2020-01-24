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
import EventBus from '~/assets/js/EventBus.js'
import TableComponent from '~/components/200123/TableComponent.vue'

let checkedNum = 0
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
      winner: '',
      rowIndex: '',
      colsIndex: ''
    }
  },
  created() {
    EventBus.$on('data', (rowIndex, colsIndex) => {
      this.rowIndex = rowIndex
      this.colsIndex = colsIndex
    })
    EventBus.$on('clickTd', this.onClickTd)
  },
  methods: {
    onClickTd() {
      const { tableData, rowIndex, colsIndex, turn } = this
      // 이벤트버스 사용 안할시
      // const this.tableData = this.$parent.$parent.$parent.$data
      if (!tableData[rowIndex][colsIndex]) {
        this.$set(tableData[rowIndex], colsIndex, turn)
        this.checkLine()
        this.turn = turn === 'O' ? 'X' : 'O'
      }
    },
    checkLine() {
      const { tableData, rowIndex, colsIndex, turn } = this
      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        if (tableData[rowIndex][i] === turn) {
          this.checkWin()
        }
      }

      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        if (tableData[i][colsIndex] === turn) {
          this.checkWin()
        }
      }

      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        if (tableData[i][i] === turn) {
          this.checkWin()
        }
      }

      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        const j = 3 - 1 - i
        if (tableData[i][j] === turn) {
          this.checkWin()
        }
      }
    },
    checkWin() {
      checkedNum += 1
      if (checkedNum === 3) {
        this.winner = this.turn
        this.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
        this.turn = 'O'
      } else {
        let draw = true
        this.tableData.forEach((row) => {
          row.forEach((data) => {
            if (!data) {
              draw = false
            }
          })
        })
        if (draw) {
          this.winner = ''
          this.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
          this.turn = 'O'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  p {
    font-size: 20px;
  }
</style>
