(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{432:function(t,r,e){"use strict";e.r(r);var s=e(23),a=Object(s.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress与travis-cli持续集成自动化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress与travis-cli持续集成自动化部署"}},[t._v("#")]),t._v(" vuepress与travis-cli持续集成自动化部署")]),t._v(" "),e("p",[t._v("由于前段时间整理了下工作中常用到的命令，想把其做成个文档，以备以后能够方便查阅，想到用"),e("code",[t._v("vuepress")]),t._v("来搭建文档。")]),t._v(" "),e("p",[e("code",[t._v("vuepress")]),t._v("的搭建完全可参照"),e("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),e("OutboundLink")],1),t._v("，但是在线部署的时候还是碰到了一些需要注意的细节地方。")]),t._v(" "),e("p",[t._v("本文的部署是集成了"),e("code",[t._v("travis cli")]),t._v("自动化部署。")]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("根目录新建"),e("code",[t._v("travis.yml")]),t._v("文件")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("language: node_js # node环境\nnode_js:\n  - lts/*\nscript:\n  - npm run docs:build # 执行命令\ndeploy:\n  provider: pages\n  skip-cleanup: true\n  local_dir: docs/.vuepress/dist # 部署的文件夹文件\n  github-token: $GITHUB_TOKEN # travis服务上的token变量\n  target-branch: gh-pages # 集成发布到gh-pages上\n  keep-history: true\n  on:\n    branch: master\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("h2",{attrs:{id:"设置github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置github"}},[t._v("#")]),t._v(" 设置github")]),t._v(" "),e("ul",[e("li",[t._v("手动创建"),e("code",[t._v("gh-pages")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1hGicj",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGicj.jpg",alt:"1hGicj.jpg"}}),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("创建"),e("code",[t._v("github token")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1hGFjs",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGFjs.jpg",alt:"1hGFjs.jpg"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://imgchr.com/i/1hGC9g",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGC9g.jpg",alt:"1hGC9g.jpg"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("点击"),e("code",[t._v("generate new token")]),t._v("，选择部分权限")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1hGEBq",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGEBq.png",alt:"1hGEBq.png"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("保存后，注意复制"),e("code",[t._v("token")]),t._v("串，只有第一次才会显示，以后访问只能更新"),e("code",[t._v("token")]),t._v("串。")]),t._v(" "),e("h2",{attrs:{id:"设置travis-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置travis-cli"}},[t._v("#")]),t._v(" 设置travis cli")]),t._v(" "),e("p",[t._v("用"),e("code",[t._v("github")]),t._v("账户登录"),e("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis-ci"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("开启自动部署的项目")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1hGp4S",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGp4S.md.jpg",alt:"1hGp4S.md.jpg"}}),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("设置变量"),e("code",[t._v("GITHUB_TOKEN")])])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1hGVH0",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGVH0.md.jpg",alt:"1hGVH0.md.jpg"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("ADD")]),t._v("后可以直接尝试修改项目代码后查看部署信息\n"),e("a",{attrs:{href:"https://imgchr.com/i/1hGmNT",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1hGmNT.md.png",alt:"1hGmNT.md.png"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("通过这次项目部署学习到了怎么使用"),e("code",[t._v("travis")]),t._v("来持续集成"),e("code",[t._v("github")]),t._v("项目，学习阮一峰大神的"),e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("持续集成服务 Travis CI 教程"),e("OutboundLink")],1),t._v("了解来部分"),e("code",[t._v("travis")]),t._v("配置；最后推荐下我的这次部署的项目，前端开发工作中遇到的命令："),e("a",{attrs:{href:"https://github.com/one-pupil/fe-dev-command",target:"_blank",rel:"noopener noreferrer"}},[t._v("fe-dev-command"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);