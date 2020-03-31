const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录

const docs = rootpath;
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');
module.exports = {

    // 技术总结
    '/views/technology-sharing/vue/': utils.genSidebar('VUE了解一下？', filehelper.getFileName(docs + "/views/technology-sharing/vue/"), false),
    '/views/technology-sharing/node/': utils.genSidebar('NodeJs&&爬虫', filehelper.getFileName(docs + "/views/technology-sharing/node/"), false),
    '/views/technology-sharing/jsDir/': utils.genSidebar('JS', filehelper.getFileName(docs + "/views/technology-sharing/jsDir/"), false),
    '/views/technology-sharing/Linux/': utils.genSidebar('Linux', filehelper.getFileName(docs + "/views/technology-sharing/Linux/"), false),
    '/views/technology-sharing/nuxt/': utils.genSidebar('nuxt', filehelper.getFileName(docs + "/views/technology-sharing/nuxt/"), false),
    '/views/technology-sharing/cssDir/': utils.genSidebar('css', filehelper.getFileName(docs + "/views/technology-sharing/cssDir/"), false),
    '/views/technology-sharing/vuepress/': utils.genSidebar('vuepress', filehelper.getFileName(docs + "/views/technology-sharing/vuepress/"), false),
    // 实用工具

    '/views/tools/': utils.genSidebar('实用工具', filehelper.getFileName(docs + "/views/tools/"), false),
    // 一定要放在最后！！！
    // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
    // '/': [''] // 此处选择禁用
};
