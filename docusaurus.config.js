const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'My Site',
    tagline: 'Dinosaurs are cool',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Lsh’s blog',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '日志',
                },
                // { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/element', label: 'Element源码系列', position: 'left' },
                { to: '/antDesign', label: 'AntDesign源码系列', position: 'left' },
                { to: '/vue2', label: 'Vue2源码系列', position: 'left' },
                {
                    href: 'https://github.com/2917292081',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: '日志',
                        to: '/docs/intro',
                    }, {
                        label: 'Element源码系列',
                        to: '/element',
                    }, {
                        label: 'AntDesign源码系列',
                        to: '/antDesign',
                    }, {
                        label: 'Vue2源码系列',
                        to: '/vue2',
                    }, ],
                },
                {
                    title: 'About',
                    items: [{
                            label: 'QQ: 291729201',
                            href: '#',
                        },
                        {
                            label: 'VX: peterroe163com',
                            href: '#',
                        },
                        {
                            label: 'Email: peterroe@163.com',
                            href: '#',
                        },
                    ],
                },
                {
                    title: 'Others',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/2917292081',
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    themes: [
        '@docusaurus/theme-live-codeblock'
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                element: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-blog',
            {
                /**
                 * 此参数对于任何支持多实例的插件都需要
                 */
                id: 'element',
                /**
                 * URL route for the blog section of your site.
                 * *不要* 在末尾添加斜线（/）
                 */
                routeBasePath: '/element',
                /**
                 * 指向存放博客文章的目录的路径。相对于网站根目录。
                 */
                path: './element',
            },
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'antDesign',
                routeBasePath: '/antDesign',
                path: './antDesign',
            },
        ],
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'vue',
                routeBasePath: '/vue2',
                path: './vue2',
            },
        ],
    ],
};