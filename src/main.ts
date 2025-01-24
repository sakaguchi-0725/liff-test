import { createApp } from 'vue'
import { App, createAppRouter } from './app'
import liff from "@line/liff"
import { constants } from './shared/lib'

liff.init({ liffId: constants.LIFF_ID})
  .then(() => {
    alert('LIFF initialized successfully')
  })
  .catch(() => {
    alert('LIFF initialization failed')
  })

const app = createApp(App)
const router = createAppRouter("web")

app.use(router)
app.mount("#app")
