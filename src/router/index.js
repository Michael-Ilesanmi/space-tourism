import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/HomeView.vue'
import Container from '../views/pagesContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Container',
      component: Container,
      children: [
        {
            path: "",
            component: Home,
            meta: {
                title: "Home",
            },
        },
      ]
    }
  ]
})

export default router
