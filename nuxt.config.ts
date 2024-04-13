// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  sourcemap: true,
  css: [
    "@/assets/scss/global.scss",
  ],
  modules: ['@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', /*'./custom-folder/stores/**'*/],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'B. Braun',
      meta: [{ name: 'BBraun Gynaecology', content: 'Data driven dashboard' }],
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  }
})