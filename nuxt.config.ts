// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({

    ssr: true,

    builder: "vite",

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

    vite: {
        server: {
            hmr: {
                clientPort: 8001,
            }
        }
    },

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
