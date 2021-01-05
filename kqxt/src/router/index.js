import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: manage => import('../layout/manage.vue'),
		redirect: '/checkingIn',
		children: [{
				path: "/checkingIn",
				name: "我的竞赛",
				component: checkingIn => import('../views/Student/checkingIn.vue') 
			},
			{
				path: "/checkingManager",
				name: "考勤管理",
				component: checkingManager => import('../views/Teacher/checkingManage.vue')
			},
			{
				path: "/courseAdd",
				mame: "添加课程",
				component: courseAdd => import('../views/Teacher/courseAdd.vue')
			},
			{
				path: "/detail",
				name: "细节",
				component: checkingIn => import('../views/Student/detail.vue') 
			},
			{
				path: "/index",
				name: "首页",
				component: checkingIn => import('../views/index.vue') 
			}
		]
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;