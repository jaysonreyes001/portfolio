import { createWebHistory, createRouter } from 'vue-router'

import Layout from '@/Components/Layout.vue'
import projectView from '@/Pages/projectView.vue'
import Home from "@/Pages/home.vue";
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { 
        path: '/',
        name: 'Home', 
        component: Home
      },
      { 
        path: 'project/:project',
        name: 'Project', 
        component: projectView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
     return { top: 0, left: 0 }
   }
})

export default router