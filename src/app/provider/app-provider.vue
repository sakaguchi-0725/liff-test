<script lang="ts" setup>
import { useRoute } from 'vue-router';


const route = useRoute()
alert(JSON.stringify(route))
alert(window.location.href)
</script>

<template>
  <RouterView />
</template>
