import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobView from '../views/job/JobView.vue'
import JobDetail from '@/views/job/JobDetail.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/jobs',
    name: 'jobs',
    component: JobView
  },

  {
    path: '/jobs/:id',
    name: 'jobsDetail',
    component: JobDetail,
    props: true
  },

  {
    path: '/all-jobs',
    redirect: '/jobs'

  },

  {
    path: '/:cathAll(.*)',
    name: 'notfound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
