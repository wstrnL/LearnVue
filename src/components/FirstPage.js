export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      contentSpanArr: [],
      position: 0,
      rowIndex: ''
    }
  },
  created () {
    this.getList()
  },
  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.contentSpanArr[rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    getList () {
      var arr1 = [[30, -1, 90], [70, 100, -40]]
      var arr2 = []
      // 确定新数组有多少行
      for (var m = 0; m < arr1[0].length; m++) {
        arr2[m] = []
      }
      // 动态添加数据
      // 遍历原数组
      for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
          arr2[j][i] = arr1[i][j]
        }
        // 打印新数组
        for (let i = 0; i < arr2.length; i++) {
          for (let j = 0; j < arr2[i].length; j++) {
            document.writeln(arr2[i][j])
          }
          document.write('<br />')
        }
      }
    },
    removeTable () {
      this.tableData.splice(this.selection.index, 1)
    },
    click (row, column, event) {
      if (row != null) {
        this.selection = row
      }
    },
    tableRowClassName ({ row, rowIndex }) {
      row.index = rowIndex
    }

  }
}
