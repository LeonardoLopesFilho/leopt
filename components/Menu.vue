<template>
  <v-navigation-drawer v-model="drawer" app temporary color="#00423C">
    <v-list dense>
      <v-list-item link>
        <v-list-item-title class="text-white">Projetos</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title class="text-white">Contato</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-title class="text-white">Redes Sociais</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  const drawer = ref(false);

  defineProps();
</script>
