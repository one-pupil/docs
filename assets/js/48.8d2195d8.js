(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{266:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"github项目实现自动化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github项目实现自动化部署"}},[s._v("#")]),s._v(" Github项目实现自动化部署")]),s._v(" "),e("p",[s._v("当我们利用"),e("code",[s._v("github")]),s._v("来托管项目时，每次部署项目都要走同样的流程，敲击同样的命令行，尤其的我们的"),e("code",[s._v("node")]),s._v("项目更是无法忍受这种重复工作。")]),s._v(" "),e("p",[s._v("那到底有没有一种可以解放我们双手，当我们提交代码后，服务器自动执行我们已经制定好的命令行，答案是我们可以利用"),e("code",[s._v("Github")]),s._v("自有的"),e("code",[s._v("Webhooks")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"webhooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webhooks"}},[s._v("#")]),s._v(" Webhooks")]),s._v(" "),e("p",[e("code",[s._v("Webhooks")]),s._v("是来监测你在"),e("code",[s._v("github")]),s._v("上的各种事件，我们可以通过定制它来监测一个"),e("code",[s._v("push")]),s._v("事件，每当我们提交代码时"),e("code",[s._v("Webhooks")]),s._v("会被触发，这是我们可以通过配置一个"),e("code",[s._v("HOST POST")]),s._v("请求到你所需要的地址。")]),s._v(" "),e("h2",{attrs:{id:"如何配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[s._v("#")]),s._v(" 如何配置")]),s._v(" "),e("p",[s._v("找到你在"),e("code",[s._v("Github")]),s._v("上的项目地址上的"),e("code",[s._v("Setting")]),s._v("的"),e("code",[s._v("Webhooks")]),s._v("，如下图配置：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1h8u6A",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1h8u6A.md.png",alt:"1h8u6A.md.png"}}),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"项目配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[s._v("#")]),s._v(" 项目配置")]),s._v(" "),e("ul",[e("li",[s._v("编写执行"),e("code",[s._v("shell命令")])])]),s._v(" "),e("p",[s._v("在项目根目录下新建"),e("code",[s._v("deployed.sh")]),s._v("文件，输入你想在服务器上执行的命令行，如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd /front/docs/\n\ngit pull origin master\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("编写执行脚本")])]),s._v(" "),e("p",[s._v("在项目根目录下新建"),e("code",[s._v("deployed.js")]),s._v("文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var http = require('http')\nvar spawn = require('child_process').spawn\nvar createHandler = require('github-webhook-handler')\nvar handler = createHandler({\n  path: '/pushCode',\n  secret: '12345678'\n})\nhttp.createServer(function (req, res) {\n  handler(req, res, function (err) {\n    res.statusCode = 404;\n    res.end('no such location')\n  })\n}).listen(3000)\n\nhandler.on('error', function (err) {\n  console.error('Error:', err.message)\n})\n\nhandler.on('push', function (event) {\n  console.log('Received a push event for %s to %s',\n    event.payload.repository.name,\n    event.payload.ref)\n  rumCommand('sh', ['./deployed.sh'], function (txt) {\n    console.log(txt)\n  })\n})\n\nfunction rumCommand(cmd, args, callback) {\n  var child = spawn(cmd, args)\n  var response = ''\n  child.stdout.on('data', function (buffer) {\n    response += buffer.toString()\n  })\n  child.stdout.on('end', function () {\n    callback(response)\n  })\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br")])]),e("h2",{attrs:{id:"nginx配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),e("p",[s._v("执行脚本跑在了3000端口，我们服务器对应启用到 3000 端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("upstream test {\n    server 127.0.0.1:3000;\n}\n\nserver {\n\n  location /pushCode {\n    proxy_pass http://test;\n    proxy_redirect off;\n  }\n\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h2",{attrs:{id:"部署项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署项目"}},[s._v("#")]),s._v(" 部署项目")]),s._v(" "),e("p",[s._v("首次部署到服务器时，仍然是需要我们手动执行命令"),e("code",[s._v("git pull")]),s._v("项目，当我们在服务器上"),e("code",[s._v("clone")]),s._v("下我们的项目后，在本地尝试修改下代码，然后再次提交，可看到后台的日志")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1h81Tf",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1h81Tf.md.png",alt:"1h81Tf.md.png"}}),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("再次查看"),e("code",[s._v("Webhooks")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://imgchr.com/i/1h88k8",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://s2.ax1x.com/2020/02/09/1h88k8.md.png",alt:"1h88k8.md.png"}}),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("表示已经自动触发了接口，项目自动化部署成功。")]),s._v(" "),e("h2",{attrs:{id:"管理应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#管理应用"}},[s._v("#")]),s._v(" 管理应用")]),s._v(" "),e("p",[s._v("在服务器上执行"),e("code",[s._v("node")]),s._v("命令后，当我们离开服务器后，实际上程序进程关闭了，所以我们利用"),e("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2"),e("OutboundLink")],1),s._v("来管理我们的"),e("code",[s._v("node")]),s._v("进程。")]),s._v(" "),e("p",[s._v("在项目根目录下新建"),e("code",[s._v("pm2.json")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[{\n  "name": "test",\n  "script": "deployed.js",\n  "env_dev": {\n    "NODE_ENV": "development"\n  },\n  "env_production": {\n    "NODE_ENV": "production"\n  }\n}]\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("把所有的代码推送上服务器，进入服务器项目目录，执行")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 启动命令\npm2 start pm2.json\n\n// 查看是否启动\npm2 list\n\n// 查看日志\npm2 logs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);