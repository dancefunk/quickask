(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{501:function(s,a,t){s.exports=t.p+"assets/img/ssl.c2243c4e.png"},502:function(s,a,t){s.exports=t.p+"assets/img/mamp.abfbb759.png"},602:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"安装openssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装openssl"}},[s._v("#")]),s._v(" 安装openssl")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v("请自行搜索安装过程，这么不做过多讲解\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"新建证书存放目录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建证书存放目录"}},[s._v("#")]),s._v(" 新建证书存放目录")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v("/htdocs/localssl  这个目录你可以自己修改放在项目根目录也是可以的\n\n例如这样：\n/htdocs/project/localssl\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"创建生成证书所需的配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建生成证书所需的配置文件"}},[s._v("#")]),s._v(" 创建生成证书所需的配置文件")]),s._v(" "),n("blockquote",[n("p",[s._v("/localssl/openssl.conf")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" req "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\ndefault_bits        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\ndefault_keyfile     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" server-key.pem\ndistinguished_name  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subject\nreq_extensions      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" req_ext\nx509_extensions     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" x509_ext\nstring_mask         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8only\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" subject "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\ncountryName                 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Country Name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" letter code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncountryName_default         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" US\n\nstateOrProvinceName         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" State or Province Name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("full name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nstateOrProvinceName_default "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NY\n\nlocalityName                "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Locality Name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eg, city"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlocalityName_default        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" New York\n\norganizationName            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Organization Name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("eg, company"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\norganizationName_default    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Example, LLC\n\ncommonName                  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Common Name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g. server FQDN or YOUR name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncommonName_default          "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Example Company\n\nemailAddress                "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Email Address\nemailAddress_default        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" test@example.com\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" x509_ext "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nsubjectKeyIdentifier   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v("\nauthorityKeyIdentifier "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keyid,issuer\n\nbasicConstraints       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CA:FALSE\nkeyUsage               "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" digitalSignature, keyEncipherment\nsubjectAltName         "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" @alternate_names\nnsComment              "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OpenSSL Generated Certificate"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" req_ext "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nsubjectKeyIdentifier "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v("\n\nbasicConstraints     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CA:FALSE\nkeyUsage             "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" digitalSignature, keyEncipherment\nsubjectAltName       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" @alternate_names\nnsComment            "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OpenSSL Generated Certificate"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" alternate_names "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nDNS.1       "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" www.demo.com\nIP.1        "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br")])]),n("h3",{attrs:{id:"非常注意点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非常注意点"}},[s._v("#")]),s._v(" 非常注意点")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v("注意将文件的最后一行的改成自己的域名\nDNS.1 = www.demo.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"生成证书命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成证书命令"}},[s._v("#")]),s._v(" 生成证书命令")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("openssl req -config openssl.conf -new -sha256 -newkey rsa:2048 -nodes -keyout www.demo.com.key -x509 -days "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3650")]),s._v(" -out www.demo.com.crt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"第二个值得注意的点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二个值得注意的点"}},[s._v("#")]),s._v(" 第二个值得注意的点")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("生成证书时，会有一系列问题需要填写，其他的问题都可以敲回车直接跳过\n\n只将common name填写成你的域名 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("关键步骤"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ！！！\n\nCommon Name "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g. server FQDN or YOUR name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":www.demo.com\n\n命令运行成功会在当前目录下生成两个文件：www.demo.com.crt, www.demo.com.key\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"授权步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#授权步骤"}},[s._v("#")]),s._v(" 授权步骤")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、最好给个权限\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" localssl/\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、双击.crt的证书文件\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、打开钥匙串访问，在左侧栏系统中，找到你自己的ssl证书\n\t将证书的信任一栏，全部都改成始终信任\n\t\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("、最后在去将ssl配置到虚拟主机上面去\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("、重启环境在进行访问\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[n("img",{attrs:{src:t(501),alt:"ssl"}})]),s._v(" "),n("p",[n("img",{attrs:{src:t(502),alt:"mamp"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);