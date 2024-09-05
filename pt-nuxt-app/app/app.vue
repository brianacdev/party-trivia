<script setup lang="ts">
import {definePageMeta} from "#imports"

const colorMode = useColorMode()

const color = computed(() => colorMode.value === "dark" ? "#111827" : "white")

definePageMeta({

})

useHead({
  meta: [
    {charset: "utf-8"},
    {name: "viewport", content: "width=device-width, initial-scale=1"},
    {key: "theme-color", name: "theme-color", content: color},
  ],
  link: [
    {rel: "icon", href: "/favicon.ico"},
  ],
  htmlAttrs: {
    lang: "en",
    class: "h-full",
  },
  bodyAttrs: {
    class: "h-full",
  },
})
</script>

<template>
  <div class="h-full w-full">
    <NuxtLoadingIndicator/>

    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    <UNotifications/>
  </div>
</template>
