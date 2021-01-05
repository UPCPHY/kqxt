<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 70% ;margin-top: 20px;margin: 0 auto;"
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
     prop="stage"
     label="状态"
     width="280">
   </el-table-column>
   <el-table-column fixed="right" label="操作" width="100">
   	<template slot-scope="scope">
   		<el-button @click="detail(scope.row.id)" type="text" size="small">详情</el-button>
		<el-divider direction="vertical"></el-divider>
   		<el-button @click="joinIn(scope.row.id)" type="text" size="small">取消报名</el-button>
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
		  stage:"未通过"
        }],
		
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