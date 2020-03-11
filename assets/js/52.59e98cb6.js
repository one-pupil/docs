(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{270:function(e,a,s){"use strict";s.r(a);var t=s(0),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"小程序项目入坑实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序项目入坑实践"}},[e._v("#")]),e._v(" 小程序项目入坑实践")]),e._v(" "),s("p",[e._v("公司由于小程序原开发需求变动，产品决定重新开始设计新的小程序，人员紧张，导致我接了这个坑~。原开发时准备使用 "),s("code",[e._v("mpvue")]),e._v(" 来开发，"),s("a",{attrs:{href:"https://segmentfault.com/a/1190000014748397",target:"_blank",rel:"noopener noreferrer"}},[e._v("前篇文章"),s("OutboundLink")],1),e._v("介绍了一些关于"),s("code",[e._v("mpvue")]),e._v("的写法，后来在我将简易框架搭建后，发现"),s("code",[e._v("mpvue")]),e._v("的组件分发支持不是很友好，所以弃用，还是用原生来开发程序。")]),e._v(" "),s("p",[e._v("基本使用可能各大教程都已说的明明白白，这里就不啰嗦，改篇主要是记录下本人开发过程中所遇到的一些问题。")]),e._v(" "),s("h2",{attrs:{id:"不能使用-async-await语法糖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不能使用-async-await语法糖"}},[e._v("#")]),e._v(" 不能使用 "),s("code",[e._v("async")]),e._v(" "),s("code",[e._v("await")]),e._v("语法糖")]),e._v(" "),s("p",[e._v("小程序还是不支持这类语法糖，本人解决办法就是在使用该语法代码中引用了"),s("a",{attrs:{href:"https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("regeneratorRuntime"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"引入图片时，请先压缩图片，小程序大小限制2m多一点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入图片时，请先压缩图片，小程序大小限制2m多一点"}},[e._v("#")]),e._v(" 引入图片时，请先压缩图片，小程序大小限制2M多一点")]),e._v(" "),s("p",[e._v("尽量少引用本地图片，能放服务器的图片还是放在服务器上，毕竟程序大小有限制，本人在没注意图片压缩时，上传代码突然报了个程序代码限制在2M内。")]),e._v(" "),s("h2",{attrs:{id:"input输入数字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input输入数字"}},[e._v("#")]),e._v(" input输入数字")]),e._v(" "),s("p",[e._v("一般项目可能都会碰到金额的输入限制，这里小程序"),s("code",[e._v("input")]),e._v("组件，可利用"),s("code",[e._v("type = 'digit'")]),e._v("，来控制输入只能是数值和小数点。")]),e._v(" "),s("h2",{attrs:{id:"textarea组件键盘遮挡问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textarea组件键盘遮挡问题"}},[e._v("#")]),e._v(" textarea组件键盘遮挡问题")]),e._v(" "),s("p",[e._v("这个可能大部分都可预见，各机型对"),s("code",[e._v("textarea")]),e._v("组件输入可能都有问题，本人开发遇见的是安卓机，尤其是华为，当聚焦输入时键盘挡住输入，并没有如预期页面向上滚动输入，暂时的兼容解决办法")]),e._v(" "),s("p",[e._v("在页面的底部增加元素，当聚焦输入时，给其高度，让页面滚动到键盘不可遮住的位置。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\x3c!--控制textarea键盘遮挡  --\x3e\n<view style='height: {{pageScrollHeight}}px'></view>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("当我们使用组件的聚焦，失焦来处理后，发现在换行时都会触发"),s("code",[e._v("textarea")]),e._v("的聚焦事件，所以我们的具体代码：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// Textarea 获取键盘高度\n  focusTextarea: function(e) {\n    const _this = this;\n    let height = e.detail.height; // 键盘高度\n    _this.setData({\n      pageScrollHeight: (height - 60)\n    })\n    this.pageScrollToBottom();\n  },\n\n// 换行时\n  changTextarea: function (e) {\n    this.setData({\n      hasFocus: false\n    })\n  },\n\n  // 失去焦点\n  blurTextarea: function (e) {\n    const _this = this;\n    _this.setData({\n      pageScrollHeight: 0,\n      hasFocus: true\n    })\n  },\n\n // 页面滚动到底部\n  pageScrollToBottom: function () {\n    if (this.data.hasFocus) {\n      wx.createSelectorQuery().select('#page-scroll').boundingClientRect(function (rect) {\n        // 使页面滚动到底部\n        wx.pageScrollTo({\n          scrollTop: rect.height\n        })\n      }).exec()\n    }\n  },\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br")])]),s("h2",{attrs:{id:"ios9报can-t-find-variable-setcsstohead-错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios9报can-t-find-variable-setcsstohead-错误"}},[e._v("#")]),e._v(" ios9报Can't find variable: setCssToHead 错误")]),e._v(" "),s("p",[e._v("这个在小程序社区里出现过，原因好像是微信小程序的"),s("code",[e._v("wxs")]),e._v("所引起的，"),s("a",{attrs:{href:"https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=abf5cf90b9ff095159a32f46fc1538fd&highline=setcsstohead&token=570087027&lang=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[e._v("原贴"),s("OutboundLink")],1),e._v("说是由于"),s("code",[e._v("wxs")]),e._v("文件使用了"),s("code",[e._v("es6")]),e._v("，但是本人代码特别注意了，没有使用，还是一样报出这个错误，当我把这类文件删除后，程序就可正常运行。所以本人建议："),s("code",[e._v("还是尽量不要使用wxs了")]),e._v("，可到小程序完全兼容后再尝试。")]),e._v(" "),s("p",[s("strong",[e._v("总结")]),e._v("\n整个开发过程中还是流畅的，毕竟没有用小程序里面很多的API，所遇到的坑和兼容问题都不是很多，本人把项目主要代码删除了，小程序"),s("a",{attrs:{href:"https://github.com/one-pupil/mini-apps",target:"_blank",rel:"noopener noreferrer"}},[e._v("开源地址"),s("OutboundLink")],1),e._v("，里面只有一些程序的结构，和项目的公用代码，欢迎大家交流指点，"),s("a",{attrs:{href:"https://imondo.cn/blog/article/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文地址"),s("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);a.default=n.exports}}]);