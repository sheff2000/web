import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/student:id',
    name: 'student',
    component: () => import('../views/StudentView.vue')
  },
  {
    path:'/add-student',
    name: 'addstudent',
    component: () => import('../views/AddStudentView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
