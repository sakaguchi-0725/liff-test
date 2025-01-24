<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="content">
    <h1 class="page-header">About</h1>
    <p class="text">
      これはAbout画面です
    </p>
    <RouterLink :to="{ name: 'home' }" class="btn btn-back">
      戻る
    </RouterLink>
  </div>
</template>

<style lang="css" scoped>
.text {
  margin: 30px 0;
}
</style>