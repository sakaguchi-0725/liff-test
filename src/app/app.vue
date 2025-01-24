<script setup lang="ts">
import '@/app/assets/css/index.css'
import { RouterView } from 'vue-router'
import { constants } from '@/shared/lib'
import liff from "@line/liff"
import { onMounted } from 'vue'

onMounted(async () => {
  await liff.init({ liffId: constants.LIFF_ID})
    .then(() => {
      alert('LIFF initialized successfully')
      const token = liff.getAccessToken()
      alert(token ?? 'getAccessToken failed')
    })
    .catch(() => {
      alert('LIFF initialization failed')
    })
})
</script>

<template>
  <RouterView />
</template>