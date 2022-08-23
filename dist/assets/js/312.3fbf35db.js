(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{872:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"dcl数据控制语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dcl数据控制语言"}},[s._v("#")]),s._v(" DCL数据控制语言")]),s._v(" "),a("h3",{attrs:{id:"用户操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户操作"}},[s._v("#")]),s._v(" 用户操作")]),s._v(" "),a("h4",{attrs:{id:"创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" 创建用户")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IDENTIFIED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n说明"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nusername "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 你将创建的用户名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n\nhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 指定该用户在哪个主机上可以登陆"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n如果是本地用户可用localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 如果想让该用户可以从任意远程主机登陆"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("可以使用通配符"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" \n\npassword "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 该用户的登陆密码"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("密码可以为空"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("如果为空则该用户可以不需要密码登陆服务器"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'demo'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IDENTIFIED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'demo'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'192.168.1.101_'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IDENDIFIED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'demo'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IDENTIFIED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'demo'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("IDENTIFIED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'demo'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h4",{attrs:{id:"修改用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改用户"}},[s._v("#")]),s._v(" 修改用户")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASSWORD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'newpassword'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n如果是当前登陆用户用"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASSWORD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"newpassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n例子"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASSWORD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n命令："),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("RENAME")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" test@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'localhost'")]),s._v(" to test1@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"删除用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[s._v("#")]),s._v(" 删除用户")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DROP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#授权"}},[s._v("#")]),s._v(" 授权")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANT")]),s._v(" privileges "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" databasename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tablename "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),s._v(" \n\n说明"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" privileges "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 用户的操作权限"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("如"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v(" 等"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("\n如果要授予所的权限则使用"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("databasename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 数据库名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("tablename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("表名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n如果要授予该用户对所有数据库和表的相应操作权限则可用"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("表示"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 如"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" \n\n例子"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("user "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ALL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n注意"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("用以上命令授权的用户不能给其它用户授权"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("如果想让该用户可以授权"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("用以下命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANT")]),s._v(" privileges "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" databasename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tablename "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WITH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OPTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"撤销用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销用户"}},[s._v("#")]),s._v(" 撤销用户")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("命令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REVOKE")]),s._v(" privilege "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" databasename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("tablename "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'username'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'host'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n说明"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" privilege"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" databasename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" tablename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 同授权部分"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" \n\n例子"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n注意"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 假如你在给用户"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),s._v("授权的时候是这样的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("或类似的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name return-type"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("user "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 则在使用\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n命令并不能撤销该用户对test数据库中user表的"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" 操作"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("\n相反"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("如果授权使用的是"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n则"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REVOKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("user "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n命令也不能撤销该用户对test数据库中user表的Select 权限"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" \n\n具体信息可以用命令"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GRANTS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'pig'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'%'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 查看"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);