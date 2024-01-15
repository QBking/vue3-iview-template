import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/layout'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    hidden: true,
    redirect: '/create/scripter'
  },
  {
    path: '/create',
    name: 'Create',
    component: Layout,
    meta: { title: '创意制造', icon: 'md-bulb' },
    redirect: '/create/scripter',
    children: [{
      path: 'scripter',
      name: 'Scripter',
      component: () => import('@/views/test'),
      meta: { title: '剧本制作' }
    }]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
