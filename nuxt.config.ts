// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  image: {
    dir: "public",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image-edge",
    "@dargmuesli/nuxt-cookie-control",
    "nuxt-simple-sitemap",
  ],

  css: ["@/assets/css/main.scss"],

  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://app.snipcart.com" },
        { rel: "preconnect", href: "https://cdn.snipcart.com" },
        {
          rel: "stylesheet",
          href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        { src: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js" },
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
      htmlAttrs: {
        lang: "fr",
      },
      title: "Éditions les crocos",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Les éditions les crocos proposent des livres pour enfants.",
        },
        { name: "theme-color", content: "#3ba23f" },
        { name: "og:title", content: "Éditions les crocos" },
        { name: "og:type", content: "article" },
        { name: "og:site_name", content: "Éditions les crocos" },
        {
          name: "og:description",
          content: "Les éditions les crocos proposent des livres pour enfants.",
        },
      ],
    },
  },

  sitemap: {
    siteUrl: "https://editionslescrocos.com",
  },

  cookieControl: {
    necessary: [
      {
        identifier: "G-L4315DSBHJ",
        id: "ga",
        name: "Cookies nécessaires au fonctionnement du site",
        description:
          "Nous utilisons l'outil Google Analytics à des fins statistiques afin d'améliorer nos services.",
        src: "https://www.googletagmanager.com/gtag/js?id=G-JFDNW9JFSX",
      },
    ],
    locales: ["fr"],
  },

  vite: {
    //...
    optimizeDeps: { exclude: ["fsevents"] },
  },
});
