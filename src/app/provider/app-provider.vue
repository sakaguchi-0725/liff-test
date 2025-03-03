<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const clinic = computed(() => route.query['liff.state'])
alert(clinic.value)
alert(route.fullPath)
</script>

<template>
  <RouterView />
</template>
