<template>
  <v-main
    class="d-flex justify-center"
    style="background-color: #003b3a; min-height: 100vh"
  >
    <v-container class="py-1">
      <v-card
        elevation="6"
        max-width="700"
        max-height="340"
        class="mx-auto mb-8"
        style="background-color: #1a6f62; border: 1px solid #1a6f62"
      >
        <v-card-title class="text-white text-center"
          ><b>Meus Conhecimentos</b></v-card-title
        >
        <v-card-text class="text-white text-center">
          <p>
            Vale ressaltar que minha experiência não se limita a essas
            ferramentas, e estou sempre aprendendo e me adaptando a novas
            tecnologias.
          </p>
        </v-card-text>
      </v-card>

      <div class="d-flex justify-center my-10">
        <v-card class="pa-6 text-center" max-width="900" color="#1a6f62">
          <v-row>
            <v-col
              v-for="tech in technologies"
              :key="tech.name"
              cols="3"
              class="d-flex justify-center align-center"
            >
              <div class="text-center">
                <v-tooltip bottom>
                  <template #activator="{ props }">
                    <v-img
                      v-bind="props"
                      :src="tech.icon"
                      width="60"
                      height="60"
                      class="mx-auto mb-2"
                      contain
                    ></v-img>
                  </template>
                  <span>{{ tech.name }}</span>
                </v-tooltip>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
  </v-main>
</template>
<script setup lang="ts">
  const technologies = [
    {
      name: "Vue.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "WordPress",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
      name: "Ubuntu",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "Vuetify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "AWS Lambda",
      icon: "https://www.svgrepo.com/show/448267/aws-lambda.svg",
    },
  ];
</script>
<style scoped></style>
