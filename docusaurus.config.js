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
                id: 'gossip',
                routeBasePath: '/gossip',
                path: './gossip',
                // blog: {
                //     blogTitle: 'Docusaurus 博客！',
                //     blogDescription: '这是个用 Docusaurus 搭建的博客！',
                postsPerPage: 'ALL',
                // },
            },
        ],
    ],
};