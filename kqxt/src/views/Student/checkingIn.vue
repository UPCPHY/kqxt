<template>
  <el-table :data="tableData" stripe style="width: 100% ;margin-top: 20px;">
    <el-table-column prop="aid" label="竞赛序号" width="80">
    </el-table-column>
    <el-table-column prop="title" label="竞赛名称" width="280">
    </el-table-column>
    <el-table-column prop="tag" label="竞赛类型" width="180">
    </el-table-column>
    <el-table-column prop="sponsor" label="主办方" width="180">
    </el-table-column>
    <el-table-column prop="teacher" label="指导教师" width="180">
    </el-table-column>
    <el-table-column prop="startDate" label="报名截止时间" width="180">
    </el-table-column>
    <el-table-column prop="endDate" label="报名截止时间" width="180">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="detail(scope.row.aid)" type="text" size="small">详情</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button @click="joinIn(scope.row.aid)" type="text" size="small">立即参加</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import http from '../../utils/http.js'
export default {
  data() {
    return {
      tableData: [{
        aid: "5",
        title: "ACM国际大学生程序设计大赛",
        tag: "计算机",
        teacher: "唐克",
        sponsor: "ACM",
        startDate: "2021-01-09",
        endDate: "2021-01-20"
      }]
    }
  },
  methods: {
    detail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          aid: id,
        }
      })
    },
    joinIn(id) {
      console.log(id)
    },

  },
  created() {
    const _this = this
    http.get('/findA')
        .then(rep => {
          _this.tableData = rep.data
        })
        .catch(e => {
          console.log(e)
        })
  }
}
</script>

