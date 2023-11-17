module.exports = {
  title: "Mr·潘助力站",
  description: "分享实用性应用、个人博客建站、科学上网、ChatGPT 工具等",
  head: [
    ['link', { rel: 'icon', href: './favicon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '应用坊', link: '/pickapp/' },
      { text: '科学上网', link: 'https://dashboard.zrj333.com/#/register?code=OujBmI53' },
      { text: '建站运维', link: '/devops/' },
      { text: '资源站分享', link: '/resources/' },
      { text: 'ChatGPT', link: '/assistant/' },
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
    ],
    ['vuepress-plugin-toolbar', {
      'pageNav': {
        icon: 'iconfont iconfont-daohang',
        name: '导航',
      },
      opts: [
        {
          icon: 'iconfont iconfont-gongzhonghao',
          name: '公众号',
          popover: {
            title: '应用坊',
            type: 'image',
            imageUrl: 'https://psf-markdown.oss-cn-shanghai.aliyuncs.com/assets/image-20231116171900802.png'
          }
        },
        {
          icon: 'iconfont iconfont-jiaoliu',
          name: '合作交流',
          popover: {
            title: '微信号',
            type: 'image',
            imageUrl: 'https://images.pansaifei.com/wechat.jpg'
          }
        },
        {
          icon: 'iconfont iconfont-dashang',
          name: '支持我',
          link: '',
          popover: {
            title: '微信赞赏码',
            type: 'image',
            imageUrl: 'https://images.pansaifei.com/reward.jpg'
          }
        }
      ]
    }
    ]
  ]
};