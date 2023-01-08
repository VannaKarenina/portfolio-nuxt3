// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({

    css: [
        '~/assets/style/scss/main.scss'
    ],

    plugins: [
        {
            src: '~/plugins/bootstrap.plugin.ts',
            mode: "client"
        }
    ],

    modules: [
        '@nuxtjs/i18n'
    ],

    //@ts-ignore
    i18n: {

    }

})
