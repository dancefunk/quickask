(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{553:function(s,t,a){s.exports=a.p+"assets/img/hook.9484869b.png"},881:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"准备工作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("1、在服务器上提前设置好公钥，步骤请去gitee官网查看\n2、在服务器的web目录下先提前克隆仓库代码下来\n3、并设置权限和用户组\n\tsudo chmod -R 777 /home/wwwroot/demo\n\tsudo chown -R www:www /home/wwwroot/demo\n\t\n4、经常有人会忽略.git目录也是需要设置权限和所有组的\n\tcd demo\n\tsudo chmod -R 777 .git/\n\tsudo chown -R www:www .git/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"钩子文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#钩子文件"}},[s._v("#")]),s._v(" 钩子文件")]),s._v(" "),n("blockquote",[n("p",[s._v("在web站点根目录,新建文件夹"),n("code",[s._v("/hook/deploy.php")])])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * 自动更新钩子\n **/")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//需要修改为自己服务器上项目的路径的")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/home/wwwroot/demo.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//webhooks中设置的密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'demo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//获取请求参数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file_get_contents")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'php://input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("die")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'request is empty'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//验证密码是否正确")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$data")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json_decode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'password'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$password")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("die")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'password is error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//自己git仓库地址，加上用户名(可以用空间地址,因为用户名一般是邮箱,但是邮箱@符号会被解析)密码防止没有权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//$remote = 'https://用户名:密码@gitee.com/xxxxxxx/xxxx.git';")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'https://用户名:密码@gitee.com/xxxxxxx/demo.git'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"cd '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" && git pull "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" 2>&1; chmod -R 777 "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("; chown -R www:www "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(';"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("empty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("is_array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$msg")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"error: Your local changes to the following files would be overwritten by merge"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$merge")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stripos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$msg")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$merge")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("FALSE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("shell_exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"cd '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(' && git reset --hard;"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"cd '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" && git pull "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(" 2>&1; chmod -R 777 "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v("; chown -R www:www "),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$local")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),s._v(';"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$result")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$output")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*\n * 以下代码可删除\n * pull遇到错误 error: Your local changes to the following files would be overwritten by merge:\n * 执行：git reset --hard 即可\n * exec 函数要开启  一般默认是禁用的  需要修改 php.ini disable_functions 保存 成功 php-fpm\n * lnmp 重启fpm  /etc/init.d/php-fpm restart\n */")]),s._v("\n")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br")])]),n("h3",{attrs:{id:"码云部署配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#码云部署配置"}},[s._v("#")]),s._v(" 码云部署配置")]),s._v(" "),n("p",[n("img",{attrs:{src:a(553),alt:"ajax3"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);