module.exports = [
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
    [
        'vuepress-plugin-container',
        {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        },
    ],
    [
        'vuepress-plugin-container',
        {
            type: 'prompt',
            before: info => `<div class="prompt"><p class="title">${info}</p>`,
            after: '</div>',
        },
    ]
]