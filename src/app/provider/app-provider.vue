<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const decodedLiffState = computed(() => {
  const liffState = route.query['liff.state']
  alert(liffState)
  return liffState ? decodeURIComponent(liffState as string) : ''
})

const clinicVal = computed(() => {
  if (!decodedLiffState.value) return null

  const urlParts = decodedLiffState.value.split('?')
  if (urlParts.length < 2) return null

  const params = new URLSearchParams(urlParts[1])
  return params.get('clinic')
})

</script>

<template>
  <p>{{ clinicVal }}</p>
  <RouterView />
</template>
