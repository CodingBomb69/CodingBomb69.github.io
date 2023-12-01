import type { SidebarConfig } from '@vuepress/theme-default'

export const siderbarZh: SidebarConfig = {
    '/guide': [
        { text: '指导', children: ['env', 'grammer'], collapsible: true }
    ],
    '/react': [
        {
            text: 'React',
            children: ['/react/','/react/basic.md']
        }
    ]
}