import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '../views/UserListView.vue'
import AddUserView from '../views/AddUserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-list',
      component: UserListView,
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUserView,
    },
  ],
})

export default router
