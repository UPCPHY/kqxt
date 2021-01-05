<template>
	<div>
		<el-menu
		  :default-active="activeIndex2"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#640c0e"
		  text-color="#fff"
		  active-text-color="#ffd04b"
		  router
		  >
		  <el-menu-item index="index"><i class="el-icon-grape"/>首页</el-menu-item>
		  <el-menu-item index="checkingIn"><i class="el-icon-watermelon"/>竞赛列表</el-menu-item>
		  <el-menu-item index="checkingManager"><i class="el-icon-cherry"/>我的报名</el-menu-item>
		  <el-menu-item index="courseAdd"><i class="el-icon-apple"/>发布竞赛</el-menu-item>
		  <el-menu-item index="gameManage"><i class="el-icon-pear"/>报名审核</el-menu-item>
		  <p style="float: right; padding: 3px 0;font-size:18px;color:#ffff">学科竞赛管理系统 | 中国石油大学（华东）</p>
		</el-menu>
		<router-view/>
	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>

<style>
	.el-col-4 {
	    width: 15.66667%;
	}
</style>