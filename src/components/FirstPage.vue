<template>
  <el-container>
    <el-aside width="200px">
      <el-tree :data="data"
               show-checkbox
               node-key="id"
               :default-expanded-keys="[2, 3]"
               :default-checked-keys="[5]"
               :props="defaultProps">
      </el-tree>
    </el-aside>
    <el-main>
      <el-table :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 100%; margin-top: 20px">
        <el-table-column prop="procCode"
                         label="岗位代码"
                         width="180">
        </el-table-column>
        <el-table-column prop="channel"
                         label="选岗结果">
        </el-table-column>
        <el-table-column prop="count"
                         label="数量">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      contentSpanArr: [],
      position: 0
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
      // const myData = [{
      //   procCode: '1',
      //   channel: 'M',
      //   count: '10'
      // }, {
      //   procCode: '1',
      //   channel: 'C',
      //   count: '20'
      // }, {
      //   procCode: '2',
      //   channel: 'M',
      //   count: '25'
      // }, {
      //   procCode: '2',
      //   channel: 'C',
      //   count: '11'
      // }, {
      //   procCode: '2',
      //   channel: 'H',
      //   count: '3'
      // }]
      // this.tableData = myData
      // for (var i = 0; i < myData.length; i++) {
      //   if (i === 0) {
      //     this.contentSpanArr.push(1)
      //     this.position = 0
      //   } else {
      //     if (myData[i].procCode === myData[i - 1].procCode) {
      //       this.contentSpanArr[this.position] += 1
      //       console.log(this.contentSpanArr)
      //       this.contentSpanArr.push(0)
      //     } else {
      //       this.contentSpanArr.push(1)
      //       this.position = i
      //     }
      //   }
      // }
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
  }
}
</script>
