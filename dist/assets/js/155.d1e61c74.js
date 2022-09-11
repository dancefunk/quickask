(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{707:function(n,s,a){"use strict";a.r(s);var e=a(4),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"nodejs-nodemailer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-nodemailer"}},[n._v("#")]),n._v(" NodeJS-Nodemailer")]),n._v(" "),a("p",[n._v("使用nodejs模块发送邮件")]),n._v(" "),a("blockquote",[a("ul",[a("li",[n._v("package.json")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('{\n  "name": "mail",\n  "version": "1.0.0",\n  "description": "",\n  "main": "mail.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "nodemailer": "^4.0.1",\n    "nodemailer-smtp-transport": "^2.7.4",\n    "nodemailer-wellknown": "^0.2.3"\n  }\n}\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br")])]),a("blockquote",[a("ul",[a("li",[n._v("mail.js")])])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('var nodemailer = require("nodemailer");\nvar smtpTransport = require(\'nodemailer-smtp-transport\');\nvar wellknown = require("nodemailer-wellknown");\nvar config = wellknown("163");   //所选择的第三方服务\n\nconfig.auth = {\n    user:\'xxxxxxx@163.com\',  //邮件账号\n    pass:\'xxxxxxxxxxxx\'   //这里密码不是163密码，是你设置的smtp授权密码\n}\n\n\nvar transporter = nodemailer.createTransport(smtpTransport(config));\n\nvar mailOptions = {\n    from:"xxxxxxx@163.com",   //发送方的邮件地址\n    to:"xxxxxxxxxx@qq.com",    //收件人的邮件地址\n    subject:"问答社区",  //邮件主题\n    text:"text plain",    //邮件文档类型\n    html:"<div>您好</div>"   //邮件正文内容\n};\n\n// send mail with defined transport object\ntransporter.sendMail(mailOptions, function(error, info){\n    if(error){\n        return console.log(error);\n    }\n    console.log(\'Message sent: \' + info.response);\n\n});\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br")])]),a("h3",{attrs:{id:"sendcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sendcloud"}},[n._v("#")]),n._v(" sendcloud")]),n._v(" "),a("p",[n._v("使用第三方平台"),a("code",[n._v("(sendcloud)")]),n._v("发送邮件")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("<?php\n//http://sendcloud.sohu.com/\nfunction send_mail() {\n  $url = 'http://api.sendcloud.net/apiv2/mail/send';\n  $API_USER = 'xxxxxxxxxxxxxx';\n  $API_KEY = 'xxxxxxxxxxxxxx';\n\n  //您需要登录SendCloud创建API_USER，使用API_USER和API_KEY才可以进行邮件的发送。\n  $param = array(\n      'apiUser' => $API_USER,\n      'apiKey' => 'xxxxxxxxxxxxxx',\n      'from' => 'service@sendcloud.im',\n      'fromName' => 'SendCloud测试邮件',\n      'to' => 'xxxxxxxxxx@qq.com',\n      'subject' => '来自SendCloud的第一封邮件！',\n      'html' => '你太棒了！你已成功的从SendCloud发送了一封测试邮件，接下来快登录前台去完善账户信息吧！',\n      'respEmailId' => 'true');\n\n  $data = http_build_query($param);\n\n  $options = array(\n        'http' => array(\n        'method'  => 'POST',\n        'header'  => 'Content-Type: application/x-www-form-urlencoded',\n        'content' => $data\n  ));\n\n  $context  = stream_context_create($options);\n  $result = file_get_contents($url, false, $context);\n\n  return $result;\n}\n\necho send_mail();\n?>\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);