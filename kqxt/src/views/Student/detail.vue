<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span style="font-size:33px">{{content.title}}</span>
			<el-button style="float: right; padding: 3px 0;font-size:20px" type="text">参加</el-button>
		</div>
		<span>开始时间：{{content.startDate}}</span>
		<el-divider direction="vertical"></el-divider>
		<span>结束时间：{{content.endDate}}</span>
		<el-divider></el-divider>
		<span>类型：{{content.tag}}</span>
		<el-divider direction="vertical"></el-divider>
		<span>指导老师：{{content.teacher}}</span>
		<el-divider direction="vertical"></el-divider>
		<span>主办方：{{content.sponsor}}</span>
		<el-divider></el-divider>
		 <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
		<p style="text-align:left;">{{content.detail}}</p>
		<el-divider></el-divider>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				content: {
					id: "5",
					title: "ACM国际大学生程序设计大赛",
					tag: "计算机",
					teacher: "唐克",
					sponsor: "ACM",
					startDate: "2021-01-09",
					endDate: "2021-01-20",
					detail: "国际大学生程序设计竞赛（英文全称：International Collegiate Programming Contest（简称ICPC））是由国际计算机协会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。经过近40年的发展，ACM国际大学生程序设计竞赛已经发展成为全球最具影响力的大学生程序设计竞赛。赛事目前由方正集团赞助 ACM国际大学生程序设计竞赛的历史可以上溯到1970年，当时在美国德克萨斯A&M大学举办了首届比赛。当时的主办方是the Alpha Chapter of the UPE Computer Science Honor Society。作为一种全新的发现和培养计算机科学顶尖学生的方式，竞赛很快得到美国和加拿大各大学的积极响应。1977年，在ACM计算机科学会议期间举办了首次总决赛，并演变成为一年一届的多国参与的国际性比赛。"
				}
			}
		},
		created() {
			console.log(this.$route.query.id)
		}
	}
</script>

<style>
	.text {
		font-size: 14px;
	}

	.item {
		margin-bottom: 15px;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.box-card {
		width: 66.3%;
		margin: 0 auto;
	}
</style>
