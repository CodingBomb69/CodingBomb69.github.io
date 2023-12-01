import { defaultTheme } from 'vuepress'
import { navbarZh, siderbarZh } from './configs/switch.js'

export default {
    title: '随便写写',

    head: [['link', { rel: 'icon', href: 'https://pic.chitchat.top/images/favicon.ico' }]],
    description: "面试题，八股文，前端，js",
    locales: {
        '/': {
            selectLanguageName: '简体中文',
            title: '彗星文档',
            description: '繁星似海 熠熠生辉',
        },
        '/en/': {
            selectLanguageName: 'English',
            title: 'Comet documents',
            description: 'my book',
        },
    },
    theme: defaultTheme({
        logo: 'logo.jpg',

        locales: {
            '/': {
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                navbar: navbarZh,
                sidebar: siderbarZh,
                notFound: ['没找到', '网页走丢了'],
                backToHome: '回到首页'
            },
            '/en/': {
                selectLanguageName: 'English',
                selectLanguageText: 'Language'
            },
        },

    }),


}