<template>
  <v-app-bar app color="#003B3A" flat>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="auto" class="d-flex align-center">
          <v-img src="/Planet.png" alt="Logo" width="30" class="mr-2" />
          <h2 class="text-white">Leonardo Lopes</h2>
        </v-col>

        <!-- Botões para desktop -->
        <v-col cols="auto" class="d-none d-md-flex">
          <v-btn text href="#sobre-mim"><b>Sobre Mim</b></v-btn>
          <v-btn text href="#projetos"><b>Projetos</b></v-btn>
          <v-btn text href="#conhecimento"><b>Conhecimento</b></v-btn>
          <v-btn text href="#contato"><b>Contato</b></v-btn>
        </v-col>

        <!-- Botão hambúrguer para mobile -->
        <v-col cols="auto" class="d-flex d-md-none">
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- Drawer para mobile -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list nav dense>
      <v-list-item href="#sobre-mim" @click="drawer = false">
        <v-list-item-title>Sobre Mim</v-list-item-title>
      </v-list-item>
      <v-list-item href="#projetos" @click="drawer = false">
        <v-list-item-title>Projetos</v-list-item-title>
      </v-list-item>
      <v-list-item href="#conhecimento" @click="drawer = false">
        <v-list-item-title>Conhecimento</v-list-item-title>
      </v-list-item>
      <v-list-item href="#contato" @click="drawer = false">
        <v-list-item-title>Contato</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)
</script>
