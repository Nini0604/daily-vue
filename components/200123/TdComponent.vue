<template>
  <td @click="changeTurn">
    {{ colsData }}
  </td>
</template>

<script>
let checkedNum = 0

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
    changeTurn() {
      const parentData = this.$parent.$parent.$parent.$data
      if (!parentData.tableData[this.rowIndex][this.colsIndex]) {
        this.$set(parentData.tableData[this.rowIndex], this.colsIndex, parentData.turn)
        this.checkLine()
        parentData.turn = parentData.turn === 'O' ? 'X' : 'O'
      }
    },
    checkLine() {
      const parentData = this.$parent.$parent.$parent.$data
      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        if (parentData.tableData[this.rowIndex][i] === parentData.turn) {
          this.checkWin()
        }
      }

      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        if (parentData.tableData[i][this.colsIndex] === parentData.turn) {
          this.checkWin()
        }
      }

      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        if (parentData.tableData[i][i] === parentData.turn) {
          this.checkWin()
        }
      }

      checkedNum = 0
      for (let i = 0; i < 3; i++) {
        const j = 3 - 1 - i
        if (parentData.tableData[i][j] === parentData.turn) {
          this.checkWin()
        }
      }
    },
    checkWin() {
      checkedNum += 1
      const parentData = this.$parent.$parent.$parent.$data
      if (checkedNum === 3) {
        parentData.winner = parentData.turn
        parentData.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
        parentData.turn = 'O'
      } else {
        let draw = false
        parentData.tableData.forEach((row) => {
          row.forEach((data) => {
            if (!data) {
              draw = false
            }
          })
        })
        if (draw) {
          parentData.winner = ''
          parentData.tableData = [['', '', ''], ['', '', ''], ['', '', '']]
          parentData.turn = 'O'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
