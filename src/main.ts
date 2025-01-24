import { createApp } from 'vue'
import { App, createAppRouter } from './app'

const app = createApp(App)
const router = createAppRouter("web")

app.use(router)
app.mount("#app")
