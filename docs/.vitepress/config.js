const ourStorySidebar = [{ text: 'Our Story', link: '/about/our-story' }]

module.exports = {
    title: 'Vitepress Test Documentation',
    themeConfig: {
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

export default {
    lang: 'en-US',
    title: 'Vitepress Test Documentation',
    description: 'Vite & Vue pwered static site generator.',
    base: '/vitepress-demo/'
}