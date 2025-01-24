<script setup lang="ts">
import type { Profile } from '@liff/get-profile';
import liff from '@line/liff';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router'

const profile = ref<Profile>()
const accessToken = ref<string | null>()

onMounted(async () => {
  alert(liff.isInClient())

  accessToken.value = liff.getAccessToken()
  profile.value = await liff.getProfile()
})


</script>

<template>
  <div class="content">
    <h1 class="page-header">Home</h1>
    <p class="text">
      これはホーム画面です<br />
    </p>
    <RouterLink :to="{ name: 'about' }" class="btn btn-primary">
      次へ
    </RouterLink>
  </div>
</template>

<style lang="css" scoped>
.text {
  margin: 30px 0;
}
</style>