<template>
  <v-main
    class="d-flex justify-center"
    style="background-color: #003b3a; min-height: 100vh"
  >
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <v-card
          elevation="6"
          max-width="700"
          max-height="340"
          class="pa-1 mt-10"
          style="
            background-color: #1a6f62;
            border: 1px solid #1a6f62;
            margin-top: -50px;
          "
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

              <v-col cols="12" md="6">
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      class="mt-6"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                      alt="Vue.js"
                      width="50"
                    />
                    <p class="mt-2"><b>Vue.js</b></p>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      class="mt-6"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      alt="JavaScript"
                      width="50"
                    />
                    <p class="mt-2"><b>JavaScript</b></p>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      class="mt-6"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                      alt="TypeScript"
                      width="50"
                    />
                    <p class="mt-2"><b>TypeScript</b></p>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      class="mt-6"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                      alt="AWS"
                      width="50"
                    />
                    <p class="mt-2"><b>AWS</b></p>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      class="mt-6"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                      alt="Node.js"
                      width="50"
                    />
                    <p class="mt-2"><b>Node.js</b></p>
                  </v-col>

                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-column align-center"
                  >
                    <v-img
                      class="mt-6"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                      alt="Nuxt"
                      width="50"
                    />
                    <p class="mt-2"><b>Nuxt</b></p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-btn color="primary">Meu Currículo</v-btn> 
      </v-col>
    </v-row>
  </v-main>
</template>

<script setup lang="ts">
  defineProps();
</script>
