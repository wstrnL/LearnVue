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
                :row-class-name="tableRowClassName"
                style="width: 100%"
                @row-click="click">
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
      </el-table>
      <el-row>
        <el-button @click="removeTable">删除</el-button>
      </el-row>
    </el-main>
  </el-container>
</template>
<script src="./FirstPage.js"></script>
