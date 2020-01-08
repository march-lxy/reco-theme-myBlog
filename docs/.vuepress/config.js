module.exports = {
  "title": "平凡的你我",
  "description": "理想成为大牛的小牛同学",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themePicker": false, //颜色选择器
  "themeConfig": {
    "themePicker": false, //颜色选择器
    "nav": require('./nav'),
    "sidebar": require('./sidebarConf'),
    "valineConfig": {
      appId: 'NK6vtvs0tsr7ajg2kQzv0bTC-gzGzoHsz',
      appKey: 'XGQw70J7pvctx0FXIHpTB3IK',
      placeholder: 'ヾﾉ≧∀≦)o来啊，快活啊!',
      avatar: 'identicon',
      visitor: true,
      recordIP: true,
    },
    "type": "blog",
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "author": "Caleb",
    "authorAvatar": "/avatar.png",
    "record": "陕ICP备19024018号-1",
    "recordLink": 'http://www.beian.miit.gov.cn',
    startYear: '2019',

  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "୧((〃•̀ꇴ•〃))૭⁺✧ 欢迎回来！",
        hideIcon: "/favicon.ico",
        hideText: "(⸝⸝⸝ᵒ̴̶̷̥́ ⌑ ᵒ̴̶̷̣̥̀⸝⸝⸝) 喔哟，别走哎！",
        recoverTime: 2000
      }
    ], 'go-top', ["@vuepress-reco/back-to-top", false],
  ]
}