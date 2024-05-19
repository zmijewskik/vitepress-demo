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
            { text: 'Code', link: '/code' },
            { 
                text: 'Code', 
                items: [
                    { text: 'HTML', link: '/html' },
                    { text: 'CSS', link: '/css' },
                    { text: 'js', link: '/js' },
                    { text: 'less', link: '/less' },
                    { text: 'php', link: '/php' },
                    { text: 'Smarty', link: '/smarty' },
                    { text: 'Vue', link: '/vue' },
                ] 
            },
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