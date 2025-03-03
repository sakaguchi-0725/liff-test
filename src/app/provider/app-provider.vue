<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()


onMounted(() => {
  console.log(route.query)
})
</script>

<template>
  <RouterView />
</template>
