<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { onMounted } from "vue";

  onMounted(() => {
    console.log(
      "%cEste local é apenas para desenvolvedores!",
      "color: #ff6347; font-size: 18px; font-weight: bold;"
    );
    console.log(
      "%cCaso queira saber mais sobre o Leonardo, chame no WhatsApp!",
      "color: #32cd32; font-size: 16px; font-weight: normal;"
    );
  });
</script>
<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
