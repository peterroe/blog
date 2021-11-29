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
            title: 'Front End',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: '前端技术',
                },
                // { to: '/blog', label: 'Blog', position: 'left' },
                { to: '/gossip', label: '生活与创作', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: '前端技术',
                        to: '/docs/intro',
                    }, {
                        label: '生活与创作',
                        to: '/gossip',
                    }],
                },
                {
                    title: 'About',
                    items: [{
                        label: '📧: peterroe@163.com',
                        href: '#',
                    }, ],
                },
                {
                    title: 'Others',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/peterroe',
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
                gossip: {
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
        [
            '@docusaurus/plugin-content-blog',
            {
                id: 'gossip',
                routeBasePath: '/gossip',
                path: './gossip',
            },
        ],
    ],
};