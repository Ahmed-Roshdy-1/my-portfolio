export default defineNuxtConfig({
  compatibilityDate: '2026-08-21',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Ahmed Roshdy | Frontend Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Ahmed Roshdy - Web Developer specializing in Vue.js, Nuxt.js, and React.' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  }
})
