const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story' }]

module.exports = {
    lang: 'en-US',
    title: 'Vitepress Test Documentation',
    description: 'Vite & Vue pwered static site generator.',
    base: '/vitepress-demo/',
    themeConfig: {
        search: {
            provider: 'local'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'Contact', link: '/contact' },
            // { text: 'Guide', link: '/guide/' },
            // { text: 'Config', link: '/config/' },
            { text: 'Github', link: 'https://github.com/zmijewskik/vitepress-demo'},
        ],
        sidebar: {
            '/about/': ourStorySidebar,
            '/contact': ourStorySidebar,
        },
    },
}