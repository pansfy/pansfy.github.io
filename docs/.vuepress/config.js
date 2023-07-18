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
      { text: '科学上网', link: 'https://dashboard.zrj333.com/#/register?code=OujBmI53' },
      { text: '生产力工具集', link: '/resources/' },
      { text: 'Python', link: '/python/' },
      { text: 'Python 办公', link: '/python_work/' },
      { text: '网站动态', link: '/other/update.html' }
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
          icon: 'iconfont iconfont-xiazai',
          name: '资料下载',
          popover: {
            title: '扫码下载阿里网盘提取码：b1g2',
            type: 'image',
            imageUrl: 'https://images.pansaifei.com/share_python_work.png'
          }
        },
        {
          icon: 'iconfont iconfont-gongzhonghao',
          name: '公众号',
          popover: {
            title: 'Python办公助力站',
            type: 'image',
            imageUrl: 'https://images.pansaifei.com/python-work.jpg'
          }
        },
        {
          icon: 'iconfont iconfont-jiaoliu',
          name: '委派他做',
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