<template>
  <v-footer
    class="text-center text-white"
    padless
    style="background-color: #003b3a"
  >
    <v-container>
      <v-row justify="center" align="center" class="py-3">
        <v-col cols="12" class="d-flex flex-column align-center">
          <p class="mb-1">
            &copy; {{ new Date().getFullYear() }} - Criado por Leonardo Lopes
            Filho
          </p>
          <v-btn
            icon
            href="https://www.bibliaonline.com.br/nvi/pv/15/3"
            target="_blank" color="white" variant="text" >
            <v-icon>mdi-cross</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
