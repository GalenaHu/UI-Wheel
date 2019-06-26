module.exports = {
    base: '/UI-Wheel/',
    title: 'UI-Wheel',
    description: '一个基于Vue的UI框架',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github', link: 'https://github.com/GalenaHu/UI-Wheel' }
        ],
        search: false,
        sidebar: [{
                title: '入门',
                collapsable: false,
                children: [
                    'start/install',
                    'start/import'
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/my-components/button',
                    '/my-components/input',
                    '/my-components/grid',
                    '/my-components/layout',
                    '/my-components/toast',
                    '/my-components/tabs',
                    '/my-components/popover',
                    '/my-components/collapse',
                ]
            }
        ]
    }
}