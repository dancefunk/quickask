(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{587:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"linux-svn搭建配置钩子自动更新"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-svn搭建配置钩子自动更新"}},[s._v("#")]),s._v(" linux svn搭建配置钩子自动更新")]),s._v(" "),n("h2",{attrs:{id:"_1、安装svn服务器端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装svn服务器端"}},[s._v("#")]),s._v(" 1、安装svn服务器端")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install subversion  \n\n从镜像下载安装svn服务器端 \n中间会提示是否ok，输入y，确认 \n安装成功提示：.....complete！\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("依次执行如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd /usr/local/              //进入目录，准备创建svn目录 \n \nmkdir svnRepo                   //创建一个svn目录 \n \nchmod -R 777 svnRepo            //修改目录权限为777 \n \nsvnadmin create /usr/local/svnRepo/first //创建一个svn版本仓库first(first可以随便起名字) \n \ncd first/conf               //进入first版本仓库下的配置文件目录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"_2、下面要修改这个目录下的三个配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、下面要修改这个目录下的三个配置文件"}},[s._v("#")]),s._v(" 2、下面要修改这个目录下的三个配置文件")]),s._v(" "),n("p",[s._v("(1) svnserve.conf //配置版本库信息和用户文件和用户密码文件的路径、版本库路径")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("anon-access = none       //默认是只读read\nauth-access = write      //认证后有写入权限\npassword-db = passwd     //帐号密码配置文件\nauthz-db = authz         //权限配置文件\nrealm = first            //改成自己的版本库 生效范围\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("其它采用默认配置. 各语句都必须顶格写, 左侧不能留空格, 否则会出错. 这是个坑一定要注意")]),s._v(" "),n("p",[s._v("(2) passwd //创建或修改用户密码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[users]\n# harry = harryssecret\n# sally = sallyssecret\nuser1 = 123456\nuser2 = 123456\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("(3) authz //文件,创建svn组和组用户的权限")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[group]  \ncompany = user1,user2       //创建一个first的组，并制定两个用户user1和user2 \n\n\n[first:/]       //创建first这个版本库的所有者\n@company = rw      //com\n* = r\n \n[/]                   //制定根目录下的权限 \n@company = rw           //first组用户权限为读写  \n* = r                 //其他用户只有读权限\n*\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_3、然后要设置自启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、然后要设置自启动"}},[s._v("#")]),s._v(" 3、然后要设置自启动")]),s._v(" "),n("p",[s._v("打开自启动文件 /etc/rc.local")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#!/bin/sh \n# \n# This script will be executed *after* all the other init scripts. \n# You can put your own initialization stuff in here if you don't \n# want to do the full Sys V style init stuff. \n\ntouch /var/lock/subsys/local\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("添加下面一行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("svnserve -d -r /usr/local/svnRepo/first\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("svn命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ps aux |grep 'svn'  查找所有svn启动的进程 \n \nkill -9 2505    杀死2505这个查找到的svn进程 \n\n1：单版本库起动    svnserve -d -r /usr/local/svnRepo/first \n2：多版本库起动    svnserve -d -r /usr/local/svnRepo \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_4、客户端访问"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、客户端访问"}},[s._v("#")]),s._v(" 4、客户端访问")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("假设客户端使用tortoiseSVN 输入地址, svn://你的svn服务器ip:3690 \n输入用户名和密码查看是否有链接成功\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_5、使用post-commit实现自动部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5、使用post-commit实现自动部署"}},[s._v("#")]),s._v(" 5、使用post-commit实现自动部署")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ cd hooks/ \n$ cp post-commit.tmpl post-commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("(1):然后打开文件清空内容，修改为以下代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#!/bin/sh\nexport LANG=en_US.UTF-8\n/usr/bin/svn update --username user1 --password 123456 /var/www/test\n\n\n其中第一行意思是：用sh来解析这个脚本，因为各种shell的语法有细微的差别\n第二行是编码格式：这里我使用的是UTF-8\n最后一行/usr/bin/svn 是svn的路径，不是项目路径，应该都是一样的，\n后半句分别是用户名、密码、和项目路径。\n--username这个比较坑了，网上搜出来的很多都搞错了，前面其实是两个减号，英文输入法下的。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("(2):修改post-commit的可执行权限")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("chmod 755 post-commit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("(3): checkout项目")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("在服务器进入项目目录/var/www/test checkout 整个项目。\nsvn checkout svn://您的服务器地址:3690 . //注意目录后面还有一个点\n至此，如果按照此步骤搞下来，应该已经没有问题了，你可以本地commit代码，自动同步到项目了。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);