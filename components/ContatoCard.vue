<template>
  <v-main
    class="d-flex justify-center px-4"
    style="background-color: #003b3a; min-height: 70vh"
  >
    <v-card
      elevation="6"
      max-width="700"
      max-height="200"
      class="mx-auto py-3 mt-4"
      style="
        background-color: #1a6f62;
        border: 1px solid #1a6f62;
        margin-top: -50px;
      "
    >
    <v-card-title class="text-white text-center"
          ><b>Contato</b></v-card-title
        >
    <v-card-text class="text-white text-center">
        <p>Entre em contato comigo através das minhas redes sociais:</p>
        <v-row class="d-flex justify-center mt-7" no-gutters>
          <v-col cols="4" class="d-flex justify-center mb-4">
            <v-btn
              href="https://www.instagram.com/leonardo_bvb/"
              target="_blank"
              class="mx-2"
              icon
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-4">
            <v-btn
              href="https://www.linkedin.com/in/leonardo-pimentel-lopesfilho"
              target="_blank"
              class="mx-2"
              icon
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="4" class="d-flex justify-center mb-4">
            <v-btn
              href="https://github.com/LeonardoLopesFilho"
              target="_blank"
              class="mx-2"
              icon
            >
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script setup lang="ts">
</script>
