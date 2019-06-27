import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( './views/home.vue')
    },
    {
      path: '/invest',
      name: 'invest',
      component: () => import( './views/invest.vue')
    },
		{
		  path: '/find',
		  name: 'find',
		  component: () => import( './views/find.vue')
		},
		{
		  path: '/user',
		  name: 'user',
		  component: () => import( './views/user.vue')
		},
  ]
})
