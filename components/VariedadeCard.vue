<template>
  <v-main
    class="d-flex justify-center px-4"
    style="background-color: #003b3a; min-height: 100vh"
  >
    <v-row no-gutters class="d-flex justify-center">
      <v-col cols="12" md="6">
        <v-card
          elevation="6"
          max-width="500"
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
      </v-col>
      <v-col cols="12" md="6">
        <v-card
          elevation="6"
          max-width="500"
          class="pa-7 mt-2 mx-auto"
          style="
            background-color: #1a6f62;
            border: 1px solid #1a6f62;
            margin-top: -50px;
          "
        >
          <v-card-text class="text-white text-center">
            <h3>📚 Livros que já li</h3>

            <!-- Livros já lidos -->
            <v-row class="mt-4" dense>
              <v-col cols="4" v-for="livro in livrosLidos" :key="livro.titulo">
                <v-img
                  :src="livro.capa"
                  aspect-ratio="2/3"
                  class="rounded-lg elevation-3"
                />
                <p class="mt-2 text-white text-subtitle-2">
                  {{ livro.titulo }}
                </p>
              </v-col>
            </v-row>

            <!-- Livro atual -->
            <div class="mt-6">
              <h4 class="mb-3">📖 Lendo agora</h4>
              <v-img
                :src="livroAtual.capa"
                aspect-ratio="2/3"
                max-width="150"
                class="mx-auto rounded-lg elevation-5"
              />
              <p class="mt-2 text-white text-subtitle-2">
                {{ livroAtual.titulo }}
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
const livrosLidos = [
  { titulo: "O Problema dos 3 Corpos", capa: "/img/3body.jpg" },
  { titulo: "O Fim da Morte", capa: "/img/ofimdamorte.jpg" },
  { titulo: "Floresta Sombria", capa: "/img/darkflorest.jpg" },
  { titulo: "Apocalipse", capa: "/img/apocalipse.jpg" },
  { titulo: "Devoradores de Estrelas", capa: "/img/devoradores.jpg" },
  { titulo: "Cartas de um diabo a seu aprendiz", capa: "/img/cartas.jpg" },
  { titulo: "Sombra do Paraiso", capa: "/img/sombra.jpg" },
];

const livroAtual = {
  titulo: "A Janela de Overton",
  capa: "/img/janela.jpg",
};
</script>
