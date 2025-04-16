module.exports = {
  title: "AstraShell 官方站",
  description: "分享 PowerShell 工具集、科学上网、各类加速镜像、浏览器插件等各种资源",
  head: [
    ['link', { rel: 'icon', href: './favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AstraShell', link: '/astrashell/' },
      { text: '科学上网', link: 'https://hizrj.xyz/user/register?code=OujBmI53' },
      { text: '科学上网备', link: 'https://dashboard.zrj222.xyz/#/register?code=OujBmI53' },
      { text: '资源站分享', link: '/resources/' }
    ],
    sidebar: "auto",
    smoothScroll: true,
    sidebarDepth: 3,
    lastUpdated: '上次更新: '
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',
        owner: 'pansfy',
        repo: 'pansfy.github.io',
        clientId: '657086bff53f81974752',
        clientSecret: '614f055c9dc04143b79791c3ec75bbf1715ab558'
      }
    ]
  ]
};