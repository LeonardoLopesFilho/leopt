<template>
  <v-main
    class="d-flex justify-center"
    style="background-color: #003b3a; min-height: 110vh"
  >
    <v-row>
      <v-col cols="11" sm="10" md="12" class="d-flex justify-center mx-auto">
        <v-card
          elevation="6"
          :max-width="700"
          :style="{
            backgroundColor: '#1a6f62',
            border: '1px solid #1a6f62',
            marginTop: '-50px',
            maxHeight: 'none',
          }"
          class="pa-1 mt-10"
        >
          <v-card-text class="text-white text-center">
            <h2>Sobre Mim</h2>
            <v-row>
              <v-col cols="12" md="6" class="d-flex justify-center mt-3">
                <p
                  class="mt-3 text-subtitle-1 font-weight-medium"
                  style="
                    font-family: 'Poppins', sans-serif;
                    max-width: 500px;
                    color: #e0ede8;
                  "
                >
                  Sou desenvolvedor full stack com 3+ anos de experiência. Gosto
                  de transformar problemas em soluções tão simples que até
                  parecem mágica (mas é só Código e Muito café mesmo). Meu maior
                  prazer? Criar aquele botão que faz tudo funcionar, enquanto o
                  cliente acha que foi só um 'clic'. <b>Spoiler</b>: nunca é só
                  um clic.
                </p>
              </v-col>

              <v-col cols="12" md="6" class="d-flex justify-center mt-10">
                <div>
                  <v-img
                    src="/img/Foto.jpeg"
                    width="200"
                    height="200"
                    class="rounded-circle"
                    cover
                    style="position: relative; z-index: 1"
                  />
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn
          color="primary"
          :href="'/Leonardo_Pimentel_CV.pdf'"
          target="_blank"
        >
          Meu Currículo</v-btn
        >
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
  const isMobile = ref(window.innerWidth <= 600);

  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 600;
  });
</script>
