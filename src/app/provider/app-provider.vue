<script lang="ts" setup>
import liff from '@line/liff';
import { useRoute } from 'vue-router';

liff.ready.then(() => {
  const route = useRoute()
  alert(JSON.stringify(route.query))
})
</script>

<template>
  <RouterView />
</template>
