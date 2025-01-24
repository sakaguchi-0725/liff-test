<script setup lang="ts">
import liff from '@line/liff';
import { ref } from 'vue';
import { RouterLink } from 'vue-router'

const id = ref<string | null>(liff.getIDToken())


</script>

<template>
  <div class="content">
    <h1 class="page-header">Home</h1>
    <p class="text">
      これはホーム画面です<br />
      LINE ID {{ id }}
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