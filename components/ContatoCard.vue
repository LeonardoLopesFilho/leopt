<template>
  <v-main class="d-flex justify-center" style="background-color: #00534C; min-height: 100vh;">
    <v-card 
      elevation="6" 
      max-width="600" 
      class="pa-6" 
      style="background-color: rgba(255,255,255,0.05); border: 1px solid #fff3;">
      <v-card-text class="text-white text-center">
        <h2>Contato</h2>
        <p>Entre em contato comigo através das minhas redes sociais:</p>
        <v-btn href="https://www.linkedin.com/in/leonardolopes" target="_blank" class="mx-2" icon>
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        <v-btn href="https://www.instagram.com/leonardolopes" target="_blank" class="mx-2" icon>
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn href="https://meu-cv.com" target="_blank" class="mx-2" icon>
          <v-icon>mdi-file-document</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script setup lang="ts">
defineProps()
</script>
