<template>
  <v-main
    class="d-flex justify-center px-4"
    style="background-color: #003b3a; min-height: 100vh"
  >
    <v-card
      elevation="6"
      max-width="900"
      max-height="550"
      class="pa-7 mt-2 mx-auto"
      style="
        background-color: #1a6f62;
        border: 1px solid #1a6f62;
        margin-top: -50px;
      "
    >
      <v-card-text class="text-white text-center">
        <h3>Minha Vibe no Spotify 🎶</h3>
        <iframe
          style="border-radius: 12px; width: 100%; max-width: 400px"
          src="https://open.spotify.com/embed/playlist/1KdKqsAVNbyToAmTMRhxVb?utm_source=generator"
          height="400"
          frameborder="0"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="mt-5 mx-auto d-block"
        />
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script setup lang="ts"></script>
