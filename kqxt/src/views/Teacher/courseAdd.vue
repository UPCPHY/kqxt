<template>
	<el-form style="width: 60%;margin: 0 auto;margin-top: 20px;" :model="ruleForm" :rules="rules" ref="ruleForm"
	 label-width="100px" class="demo-ruleForm">
		<el-form-item label="竞赛标题" prop="title">
			<el-input v-model="ruleForm.title"></el-input>
		</el-form-item>
		<el-form-item label="竞赛类型" prop="tag">
			<el-input v-model="ruleForm.tag"></el-input>
		</el-form-item>
		<el-form-item label="指导老师" prop="teacher">
			<el-input v-model="ruleForm.teacher"></el-input>
		</el-form-item>
		<el-form-item label="主办方" prop="sponsor">
			<el-input v-model="ruleForm.sponsor"></el-input>
		</el-form-item>
		</el-input>
		<div style="margin: 20px 0;"></div>
		<el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.detail" maxlength="200" show-word-limit>
		</el-input>
		<el-form-item class="block">
			<span class="demonstration">开始日期</span>
			<el-date-picker v-model="ruleForm.startDate" type="date" placeholder="选择日期">
			</el-date-picker>
		</el-form-item>
		<el-form-item class="block">
			<span class="demonstration">结束日期</span>
			<el-date-picker v-model="ruleForm.endDate" type="date" placeholder="选择日期">
			</el-date-picker>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
		</el-form-item>

	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					id: "5",
					title: "ACM国际大学生程序设计大赛",
					tag: "计算机",
					teacher: "唐克",
					sponsor: "ACM",
					startDate: "2021-01-09",
					endDate: "2021-01-20",
					detail: "国际大学生程序设计竞赛（英文全称：International Collegiate Programming Contest（简称ICPC））是由国际计算机协会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。"
				}
			};
		},
		methods: {
			submitForm(formName) {
				const _this = this
				_this.$refs[formName].validate((valid) => {
					if (valid) {
						_this.$axios.put('http://localhost:8181/Person/update', _this.ruleForm).then(function(resp) {
							if (resp.data == 'success') {
								_this.$alert('学生' + _this.ruleForm.idKey.id + '修改成功！', '消息', {
									confirmButtonText: '确定',
									callback: action => {
										_this.$router.push('/BookManage')
									}
								})
							}
						})
					} else {
						return false;
					}
				});
			}
		}
	}
</script>
