<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div id="app" class="flex min-h-screen flex-col justify-between">
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>
