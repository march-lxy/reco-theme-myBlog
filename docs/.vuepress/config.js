module.exports = {
  "title": "平凡的你我",
  "description": "理想成为大牛的小陈同学",
  "dest": "public",
  "head": require('./head'),
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
    "record": "陕ICP备20001997号",
    "recordLink": 'http://www.beian.miit.gov.cn',
    startYear: '2018',
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: require('./plugins')
}