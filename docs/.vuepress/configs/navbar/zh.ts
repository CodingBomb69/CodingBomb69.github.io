import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarZh: NavbarConfig = [
    {
        text: '主页',
        link: '/',
        // 该元素将一直处于激活状态
        activeMatch: '/',
    },
    
    {
        text: "框架",
        children: [
            {
                text: 'React',
                link: 'react'
            },
            {
                text: 'Vue',
                link: 'vue'
            },
            {
                text: 'Node',
                link: 'node'
            },
        ]
    },
    {
        text: '基础',
        children:
            [
                { text: 'HTML', link: 'https://1m29yg5p67.k.topthink.com/@html' },
                { text: 'Markdown', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
                { text: 'CSS', link: 'https://1m29yg5p67.k.topthink.com/@css3' },
                { text: 'js', link: '/js' }
            ],
    },
    {
        text: '小破站',
        link: 'https://www.chitchat.top',
    },

]