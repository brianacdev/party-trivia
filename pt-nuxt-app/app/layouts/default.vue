<script setup lang="ts">

</script>

<template>
  <div class="h-full w-full flex flex-col justify-start">
    <div class="flex-none">
      <AppHeader/>
    </div>
    <div class="flex-1 pt-6">
      <slot/>
    </div>
    <div class="flex-none">
      <AppFooter/>
    </div>
  </div>
</template>
