import { createWebHistory, createRouter } from 'vue-router'

import AddTicketsPage from './components/views/AddTicketsPage.vue'
import AllTicketsPage from './components/views/AllTicketsPage.vue'
import DashboardPage from './components/views/DashboardPage.vue'
import NewsPage from './components/views/NewsPage.vue'

const routes = [
  { path: '/addTicket', component: AddTicketsPage },
  { path: '/allTicket', component: AllTicketsPage },
  { path: '/dashboard', component: DashboardPage },
  { path: '/news', component: NewsPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
