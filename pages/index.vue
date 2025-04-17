<template>
  <div>
    <v-app>
      <div v-if="isLoading" class="loading-container">
        <v-progress-circular indeterminate color="primary" size="64" />
      </div>

      <div v-else>
        <Header />
        <div id="sobre-mim">
          <BioCard />
        </div>
        <div id="projetos">
          <ProjetosCard />
        </div>
        <div id="conhecimento">
          <TecnologiasCard />
        </div>
        <div id="variedade">
          <VariedadeCard />
        </div>
        <div id="contato">
          <ContatoCard />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </v-app>

    <a
      href="https://wa.me/5541996014579?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20seu%20Portf%C3%B3lio%20e%20Gostei%20do%20seu%20trabalho!%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%2C%20Por%20Favor%3F"
      target="_blank"
      class="whatsapp-float"
      aria-label="Converse pelo WhatsApp"
    >
      <v-img src="/img/whatsappwhite.png" alt="WhatsApp" width="30" />
    </a>
  </div>
</template>

<script setup lang="ts">
  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 1000); // você pode ajustar esse tempo ou usar uma verificação real
  });
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  .loading-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #003b3a;
  }

  .whatsapp-float {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    padding: 16px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  .whatsapp-float:hover {
    transform: scale(1.1);
  }
</style>
