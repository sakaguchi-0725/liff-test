<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()


onMounted(() => {
  alert(route.query)
})
</script>

<template>
  <RouterView />
</template>
