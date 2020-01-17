(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{256:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"github项目实现自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github项目实现自动化部署"}},[s._v("#")]),s._v(" Github项目实现自动化部署")]),s._v(" "),a("p",[s._v("当我们利用"),a("code",[s._v("github")]),s._v("来托管项目时，每次部署项目都要走同样的流程，敲击同样的命令行，尤其的我们的"),a("code",[s._v("node")]),s._v("项目更是无法忍受这种重复工作。")]),s._v(" "),a("p",[s._v("那到底有没有一种可以解放我们双手，当我们提交代码后，服务器自动执行我们已经制定好的命令行，答案是我们可以利用"),a("code",[s._v("Github")]),s._v("自有的"),a("code",[s._v("Webhooks")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"webhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webhooks"}},[s._v("#")]),s._v(" Webhooks")]),s._v(" "),a("p",[a("code",[s._v("Webhooks")]),s._v("是来监测你在"),a("code",[s._v("github")]),s._v("上的各种事件，我们可以通过定制它来监测一个"),a("code",[s._v("push")]),s._v("事件，每当我们提交代码时"),a("code",[s._v("Webhooks")]),s._v("会被触发，这是我们可以通过配置一个"),a("code",[s._v("HOST POST")]),s._v("请求到你所需要的地址。")]),s._v(" "),a("h2",{attrs:{id:"如何配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何配置"}},[s._v("#")]),s._v(" 如何配置")]),s._v(" "),a("p",[s._v("找到你在"),a("code",[s._v("Github")]),s._v("上的项目地址上的"),a("code",[s._v("Setting")]),s._v("的"),a("code",[s._v("Webhooks")]),s._v("，如下图配置：")]),s._v(" "),a("img",{attrs:{src:"_img/deploy.png"}}),s._v(" "),a("h2",{attrs:{id:"项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[s._v("#")]),s._v(" 项目配置")]),s._v(" "),a("ul",[a("li",[s._v("编写执行"),a("code",[s._v("shell命令")])])]),s._v(" "),a("p",[s._v("在项目根目录下新建"),a("code",[s._v("deployed.sh")]),s._v("文件，输入你想在服务器上执行的命令行，如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd /front/docs/\n\ngit pull origin master\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("编写执行脚本")])]),s._v(" "),a("p",[s._v("在项目根目录下新建"),a("code",[s._v("deployed.js")]),s._v("文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var http = require('http')\nvar spawn = require('child_process').spawn\nvar createHandler = require('github-webhook-handler')\nvar handler = createHandler({\n  path: '/pushCode',\n  secret: '12345678'\n})\nhttp.createServer(function (req, res) {\n  handler(req, res, function (err) {\n    res.statusCode = 404;\n    res.end('no such location')\n  })\n}).listen(3000)\n\nhandler.on('error', function (err) {\n  console.error('Error:', err.message)\n})\n\nhandler.on('push', function (event) {\n  console.log('Received a push event for %s to %s',\n    event.payload.repository.name,\n    event.payload.ref)\n  rumCommand('sh', ['./deployed.sh'], function (txt) {\n    console.log(txt)\n  })\n})\n\nfunction rumCommand(cmd, args, callback) {\n  var child = spawn(cmd, args)\n  var response = ''\n  child.stdout.on('data', function (buffer) {\n    response += buffer.toString()\n  })\n  child.stdout.on('end', function () {\n    callback(response)\n  })\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h2",{attrs:{id:"nginx配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[s._v("#")]),s._v(" nginx配置")]),s._v(" "),a("p",[s._v("执行脚本跑在了3000端口，我们服务器对应启用到 3000 端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("upstream test {\n    server 127.0.0.1:3000;\n}\n\nserver {\n\n  location /pushCode {\n    proxy_pass http://test;\n    proxy_redirect off;\n  }\n\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"部署项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署项目"}},[s._v("#")]),s._v(" 部署项目")]),s._v(" "),a("p",[s._v("首次部署到服务器时，仍然是需要我们手动执行命令"),a("code",[s._v("git pull")]),s._v("项目，当我们在服务器上"),a("code",[s._v("clone")]),s._v("下我们的项目后，在本地尝试修改下代码，然后再次提交，可看到后台的日志")]),s._v(" "),a("img",{attrs:{src:"_img/logs.png"}}),s._v(" "),a("p",[s._v("再次查看"),a("code",[s._v("Webhooks")])]),s._v(" "),a("img",{attrs:{src:"_img/hooks.png"}}),s._v(" "),a("p",[s._v("表示已经自动触发了接口，项目自动化部署成功。")]),s._v(" "),a("h2",{attrs:{id:"管理应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理应用"}},[s._v("#")]),s._v(" 管理应用")]),s._v(" "),a("p",[s._v("在服务器上执行"),a("code",[s._v("node")]),s._v("命令后，当我们离开服务器后，实际上程序进程关闭了，所以我们利用"),a("a",{attrs:{href:"https://github.com/Unitech/pm2",target:"_blank",rel:"noopener noreferrer"}},[s._v("pm2"),a("OutboundLink")],1),s._v("来管理我们的"),a("code",[s._v("node")]),s._v("进程。")]),s._v(" "),a("p",[s._v("在项目根目录下新建"),a("code",[s._v("pm2.json")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('[{\n  "name": "test",\n  "script": "deployed.js",\n  "env_dev": {\n    "NODE_ENV": "development"\n  },\n  "env_production": {\n    "NODE_ENV": "production"\n  }\n}]\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("把所有的代码推送上服务器，进入服务器项目目录，执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 启动命令\npm2 start pm2.json\n\n// 查看是否启动\npm2 list\n\n// 查看日志\npm2 logs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);