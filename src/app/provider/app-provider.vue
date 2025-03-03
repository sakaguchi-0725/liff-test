<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const clinic = computed(() => route.query['clinic'])
alert(clinic)
</script>

<template>
  <RouterView />
</template>
