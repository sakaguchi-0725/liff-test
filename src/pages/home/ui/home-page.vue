<script setup lang="ts">
import liff from '@line/liff';
import { RouterLink } from 'vue-router'

const idToken = liff.getIDToken()
const accessToken = liff.getAccessToken()
</script>

<template>
  <div class="content">
    <h1 class="page-header">Home</h1>
    <p>AccessToken: {{ accessToken }}</p>
    <p>IdToken: {{ idToken }}</p>
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