import { createApp } from 'vue'
import { App, createAppRouter } from './app'
import liff from '@line/liff'
import { constants } from './shared/lib'

const main = async () => {
  await liff.init({ liffId: constants.LIFF_ID })
  
  const idToken = liff.getIDToken()
  const accessToken = liff.getAccessToken()
  alert(`IDToken: ${idToken}\nAccessToken: ${accessToken}`)

  const app = createApp(App)
  const router = createAppRouter("web")

  app.use(router)
  app.mount("#app")
}

main()
