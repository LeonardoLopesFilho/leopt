<template>
  <v-main
    class="d-flex justify-center"
    style="background-color: #003b3a; min-height: 100vh"
  >
    <v-container class="py-10">
      <v-card
        elevation="6"
        max-width="30%"
        class="mx-auto mb-8"
        style="background-color: #1a6f62; border: 1px solid #1a6f62"
      >
        <v-card-text class="text-white text-center">
          <h2>Meus Conhecimentos</h2> 
        </v-card-text>
      </v-card>

      <v-row>
        <v-col
          v-for="(projeto, index) in projetos"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card
            elevation="6"
            class="pa-4"
            style="
              background-color: #1a6f62;
              border: 1px solid #1a6f62;
              height: 100%;
            "
          >
            <v-img
              :src="projeto.imagem"
              height="160"
              cover
              class="mb-4 rounded"
            ></v-img>
            <v-card-title class="text-white text-h6">
              {{ projeto.titulo }}
            </v-card-title>
            <v-card-text class="text-white">
              {{ projeto.descricao }}
            </v-card-text>
            <v-card-actions>
              <v-btn
                :href="projeto.link"
                target="_blank"
                class="text-white"
                variant="text"
              >
                Ver Projeto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script setup lang="ts">
  const projetos = [
    {
      titulo: "CRM - SDCRM",
      descricao:
        "Sistema completo de gerenciamento de clientes, com módulos adicionais voltados à organização e otimização de processos internos da empresa.",
      link: "https://app.sdcrm.com.br/",
      imagem: "/img/SDCRM.png",
    },
    {
      titulo: "Eccomerce Certificado Digital",
      descricao:
        "Integrei a equipe responsável pela construção do e-commerce da Senha Digital Soluções Digitais.",
      link: "https://senhadigital.com.br/",
      imagem: "/img/SITE.png",
    },
    {
      titulo: "Meu Portfólio",
      descricao:
        "Integrei a equipe responsável pela construção do e-commerce da Senha Digital Soluções Digitais.",
      link: "http://localhost:3000/",
      imagem: "/img/PORTIFOLIO.png",
    },
    {
      titulo: "SDC - Sistema de Consulta",
      descricao:
        "Sistema desenvolvido para realizar consultas completas de CPF e CNPJ, oferecendo informações relevantes como score de crédito, dados cadastrais e outras análises importantes. A ferramenta foi projetada para auxiliar empresas na tomada de decisão com base em dados confiáveis e atualizados..",
      link: "https://app.sdconsulta.com.br/",
      imagem: "/img/SDC.png",
    },
    {
      titulo: "LP - CWL Construtora",
      descricao:
        "Landing page institucional desenvolvida para apresentar a CWL Construtora. O site destaca informações sobre a empresa, seus serviços, missão e formas de contato, com um layout limpo, responsivo e voltado para conversão de visitantes em potenciais clientes.",
      link: "https://cwlconstrutora.com.br/",
      imagem: "/img/CWL.png",
    },
  ];
  defineProps();
</script>
