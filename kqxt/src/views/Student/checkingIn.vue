<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100% ;margin-top: 20px;"
	>
   <el-table-column
     prop="id"
     label="竞赛序号"
     width="80">
   </el-table-column>
   <el-table-column
     prop="title"
     label="竞赛名称"
     width="280">
   </el-table-column>
   <el-table-column
     prop="tag"
     label="竞赛类型"
     width="180">
   </el-table-column>
   <el-table-column
     prop="sponsor"
     label="主办方"
     width="180">
   </el-table-column>
   <el-table-column
     prop="teacher"
     label="指导教师"
     width="180">
   </el-table-column>
   <el-table-column
     prop="startDate"
     label="报名截止时间"
     width="180">
   </el-table-column>
   <el-table-column
     prop="endDate"
     label="报名截止时间"
     width="180">
   </el-table-column>
   <el-table-column fixed="right" label="操作" width="100">
   	<template slot-scope="scope">
   		<el-button @click="detail(scope.row.id)" type="text" size="small">详情</el-button>
		<el-divider direction="vertical"></el-divider>
   		<el-button @click="joinIn(scope.row.id)" type="text" size="small">立即参加</el-button>
   	</template>
   </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id:"5",
		  title:"ACM国际大学生程序设计大赛",
		  tag:"计算机",
		  teacher:"唐克",
		  sponsor:"ACM",
		  startDate:"2021-01-09",
		  endDate:"2021-01-20"
        }]
      }
    },
	methods:{
		detail(id) {
			this.$router.push({
				path: '/detail',
				query: {
					id: id,
				}
			})
		},
		joinIn(id) {
			console.log(id)
		}
	}
  }
</script>