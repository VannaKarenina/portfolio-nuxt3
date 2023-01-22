// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({

    ssr: true,

    builder: "vite",

    nitro: {
      compressPublicAssets: true
    },

    app: {
        head: {
            title: '👑Kiinse',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },

    css: [
        '~/assets/style/scss/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    plugins: [
        {
            src: '~/plugins/bootstrap.client.ts',
            mode: "client"
        }
    ],

    modules: [
        '@nuxtjs/i18n',
        '@nuxt/image-edge',
        '@nuxt/content'
    ],

    //@ts-ignore
    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.json'
            },
            {
                code: 'ru',
                file: 'ru.json'
            }
        ],
        lazy: true,
        langDir: 'locale/',
        defaultLocale: 'en',
        parsePages: false,
        strategy: "no_prefix"
    }

})
