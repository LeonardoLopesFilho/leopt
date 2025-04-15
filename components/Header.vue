<template>
  <v-app-bar app color="#003B3A" flat>
    <v-row>
      <v-col cols="4" class="d-flex justify-start pl-10">
        <div class="d-flex align-center">
          <v-img
            src="/Planet.png"
            alt="Vue.js Logo"
            width="30"
            class="mr-2"
          ></v-img>
          <h2>Leonardo Lopes</h2>
        </div>
      </v-col>
      <v-col cols="8" class="d-flex justify-end">
        <v-btn text href="#sobre-mim"><b>Sobre Mim</b></v-btn>
        <v-btn text href="#projetos"><b>Projetos</b></v-btn>
        <v-btn text href="#conhecimento"><b>Conhecimento</b></v-btn>
        <v-btn text href="#contato"><b>Contato</b></v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
  defineProps();
</script>
