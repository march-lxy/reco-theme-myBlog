module.exports = {
  "title": "平凡的你我",
  "description": "理想成为大牛的小陈同学",
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
    ],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
      }
    ],
    [
      "script", {
        "data-ad-client": "ca-pub-4115802993921398",
        "async": "true",
        "src": "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/alert.js"
      }
    ],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/autoPush.js"
      }
    ],
    [
      "script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/tongji.js"
      }
    ],
    [
      "script", {
        'type': "text/javascript",
        'language': "javascript",
        'charset': "gb2312",
        "src": "https://news.163.com/special/00019HSN/epidemic_data.js"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
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
    "author": "caleb",
    "authorAvatar": "/avatar.png",
    "record": "陕ICP备19024018号-1",
    "recordLink": 'http://www.beian.miit.gov.cn',
    startYear: '2018',
    // friendLink: [{
    //   title: '',
    //   desc: '',
    //   avatar: "",
    //   link: ''
    // }]
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
    ], 'go-top', ["@vuepress-reco/back-to-top", false]
  ]
}