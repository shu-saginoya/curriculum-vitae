import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/curriculum',
      name: 'curriculum',
      component: () => import('@/views/CurriculumView.vue')
    },
    {
      path: '/samples',
      name: 'samples',
      component: () => import('@/views/SamplesView.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('@/views/BooksView.vue')
    }
  ]
})

export default router
