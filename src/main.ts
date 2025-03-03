import { createApp } from 'vue'
import { App, createAppRouter } from './app'
import liff from '@line/liff'
import { constants } from './shared/lib'

liff.init({ liffId: constants.LIFF_ID })

const app = createApp(App)
const router = createAppRouter("web")

app.use(router)
app.mount("#app")
