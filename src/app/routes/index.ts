import { createMemoryHistory, createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router"
import { HomePage } from "@/pages/home"
import { AboutPage } from "@/pages/about"
import { constants } from "@/shared/lib"

const routes: RouteRecordRaw[] = [
  { path: '', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage }
]

export const createAppRouter = (type: "web" | "memory"): Router => {
  const history =
    type === 'web'
      ? createWebHistory(constants.BASE_URL)
      : createMemoryHistory(constants.BASE_URL)

  return createRouter({
    history,
    routes,
  })
}
