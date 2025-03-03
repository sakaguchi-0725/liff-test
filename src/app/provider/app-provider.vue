<script lang="ts" setup>
import { useRoute } from 'vue-router';


const route = useRoute()
alert(route.query["liff.state"])
alert(JSON.stringify(route.query))
</script>

<template>
  <RouterView />
</template>
