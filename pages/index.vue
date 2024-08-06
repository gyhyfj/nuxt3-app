<script setup lang="ts">
const contentText = ref('')
onMounted(() => {
  const sse = new EventSource('/api/hello')
  sse.addEventListener('message', e => {
    contentText.value += JSON.parse(e.data)
  })
})
</script>

<template>
  <p
    class="flex-center h-[100dvh] w-[100dvw] whitespace-pre-wrap font-['Homemade_Apple'] text-xl text-red-600"
  >
    {{ contentText }}
  </p>
</template>
