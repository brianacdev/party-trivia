<script setup lang="ts">
import type {NuxtError} from "#app"

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
})

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
})

</script>

<template>
  <div class="h-full">
    <AppHeader/>

    <main class="h-full">
      <h1 class="text-3xl font-medium">There was an error! :-( </h1>
    </main>

    <AppFooter/>

    <UNotifications/>
  </div>
</template>
