// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false
  },

  css: ['vuetify/styles', '@mdi/font/css/materialdesignicons.css', '~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },

  app: {
    head: {
      title: 'Leonardo | Portfólio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfólio de Leonardo - Desenvolvedor Full Stack' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Planet.png' }
      ]
    }
  },

  compatibilityDate: '2025-04-15'
})