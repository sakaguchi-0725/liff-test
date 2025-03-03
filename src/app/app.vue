<script setup lang="ts">
import AppProvider from './provider/app-provider.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <AppProvider>
    <RouterView />
  </AppProvider>
</template>
