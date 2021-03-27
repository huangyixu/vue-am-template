/** @format */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		redirect: '/welcome'
	},
	{
		path: '/welcome',
		name: 'Welcome',
		component: () => import('../views/welcome.vue')
	},
	{
		path: '/page1',
		name: 'Page1',
		component: () => import('../views/page1.vue')
	},
	{
		path: '/page2',
		name: 'Page2',
		component: () => import('../views/page2.vue')
	}
]

export default createRouter({
	history: createWebHistory(),
	routes
})
