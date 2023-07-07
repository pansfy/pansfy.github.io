module.exports = {
  title: "Mr·潘助力站",
  description: "分享AI资源、Python办公、高效工具等",
  head: [
    ['link', { rel: 'icon', href: './favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 助理', link: '/assistant/' },
      { text: '生产力工具集', link: '/resources/' },
      { text: 'Python', link: '/python/' },
      { text: 'Python 办公', link: '/python_work/' },
      { text: '网站动态', link: '/other/update.html' }
    ],
    sidebar: "auto"
  },
  plugins: {
    '@vuepress/back-to-top': true,
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github',
      owner: 'pansfy',
      repo: 'pansfy.github.io',
      clientId: '657086bff53f81974752',
      clientSecret: '614f055c9dc04143b79791c3ec75bbf1715ab558'
    }
  }
};