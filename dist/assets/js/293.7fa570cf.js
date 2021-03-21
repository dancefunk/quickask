(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{855:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"基本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本介绍"}},[s._v("#")]),s._v(" 基本介绍")]),s._v(" "),a("p",[a("code",[s._v("ThinkPHP")]),s._v("是一个快速、简单的基于"),a("code",[s._v("MVC")]),s._v("和面向对象的轻量级"),a("code",[s._v("PHP")]),s._v("开发框架，遵循"),a("code",[s._v("Apache2")]),s._v("开源协议发布，自2006年诞生以来一直秉承简洁实用的设计原则，在保持出色的性能和至简代码的同时，尤其注重开发体验和易用性，并且拥有众多的原创功能和特性，为"),a("code",[s._v("WEB")]),s._v("应用和"),a("code",[s._v("API")]),s._v("开发提供了强有力的支持。")]),s._v(" "),a("blockquote",[a("ul",[a("li",[a("strong",[s._v("官方手册："),a("a",{attrs:{href:"https://www.kancloud.cn/manual/thinkphp5",target:"_blank",rel:"noopener noreferrer"}},[s._v("在线预览"),a("OutboundLink")],1)])])])]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("Composer安装")]),s._v(" "),a("li",[s._v("Git安装")]),s._v(" "),a("li",[s._v("源码安装")])])]),s._v(" "),a("p",[a("strong",[s._v("Composer安装")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl -sS https://getcomposer.org/installer | php\n\nmv composer.phar /usr/local/bin/composer\n\n然后在命令行下面，切换到你的web根目录下面并执行下面的命令：\ncomposer create-project topthink/think=5.0.*  tp5  --prefer-dist\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("Git安装")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("首先克隆下载应用项目仓库\ngit clone https://github.com/top-think/think tp5\n\n然后切换到tp5目录下面，再克隆核心框架仓库：\ngit clone https://github.com/top-think/framework thinkphp\n\n两个仓库克隆完成后，就完成了ThinkPHP5.0的Git方式下载，如果需要更新核心框架的时候，只需要切换到thinkphp核心目录下面，然后执行：\ngit pull https://github.com/top-think/framework\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("源码安装(离线安装)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("直接下载zip压缩包放到php环境目录下\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("project  应用部署目录\n├─application           应用目录（可设置）\n│  ├─common             公共模块目录（可更改）\n│  ├─index              模块目录(可更改)\n│  │  ├─config.php      模块配置文件\n│  │  ├─common.php      模块函数文件\n│  │  ├─controller      控制器目录\n│  │  ├─model           模型目录\n│  │  ├─view            视图目录\n│  │  └─ ...            更多类库目录\n│  ├─command.php        命令行工具配置文件\n│  ├─common.php         应用公共（函数）文件\n│  ├─config.php         应用（公共）配置文件\n│  ├─database.php       数据库配置文件\n│  ├─tags.php           应用行为扩展定义文件\n│  └─route.php          路由配置文件\n├─extend                扩展类库目录（可定义）\n├─public                WEB 部署目录（对外访问目录）\n│  ├─static             静态资源存放目录(css,js,image)\n│  ├─index.php          应用入口文件\n│  ├─router.php         快速测试文件\n│  └─.htaccess          用于 apache 的重写\n├─runtime               应用的运行时目录（可写，可设置）\n├─vendor                第三方类库目录（Composer）\n├─thinkphp              框架系统目录\n│  ├─lang               语言包目录\n│  ├─library            框架核心类库目录\n│  │  ├─think           Think 类库包目录\n│  │  └─traits          系统 Traits 目录\n│  ├─tpl                系统模板目录\n│  ├─.htaccess          用于 apache 的重写\n│  ├─.travis.yml        CI 定义文件\n│  ├─base.php           基础定义文件\n│  ├─composer.json      composer 定义文件\n│  ├─console.php        控制台入口文件\n│  ├─convention.php     惯例配置文件\n│  ├─helper.php         助手函数文件（可选）\n│  ├─LICENSE.txt        授权说明文件\n│  ├─phpunit.xml        单元测试配置文件\n│  ├─README.md          README 文件\n│  └─start.php          框架引导文件\n├─build.php             自动生成定义文件（参考）\n├─composer.json         composer 定义文件\n├─LICENSE.txt           授权说明文件\n├─README.md             README 文件\n├─think                 命令行入口文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br")])]),a("h3",{attrs:{id:"入口文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入口文件"}},[s._v("#")]),s._v(" 入口文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ThinkPHP5.0版本的默认自带的入口文件位于public/index.php\n实际部署的时候public目录为你的应用对外访问目录\n\n浏览器访问路径为：http://localhost/tp5/public/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"静态资源访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态资源访问"}},[s._v("#")]),s._v(" 静态资源访问")]),s._v(" "),a("p",[s._v("网站的资源文件访问不会影响正常的操作访问，只有当访问的资源文件不存在的时候才会解析到入口文件，一般就会提示模块不存在的错误。")]),s._v(" "),a("p",[s._v("网站的资源文件一般放入public目录的子目录下面，例如下面是一个建议规范：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("public\n├─index.php     应用入口文件\n├─static\t\t静态资源目录   \n│  ├─css      \t样式目录\n│  ├─js         脚本目录\n│  └─img      \t图像目录\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("记住，千万不要在"),a("code",[s._v("public")]),s._v("目录之外的任何位置放置资源文件，包括"),a("code",[s._v("application")]),s._v("目录。")])]),s._v(" "),a("p",[s._v("访问资源文件的URL路径是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://tp5.com/static/css/style.css\nhttp://tp5.com/static/js/common.js\nhttp://tp5.com/static/img/picture.jpg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果你没有设置域名绑定，而是使用子目录方式访问的话，那么可能的资源访问地址是：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://localhost/public/static/css/style.css\nhttp://localhost/public/static/js/common.js\nhttp://localhost/public/static/img/picture.jpg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"静态常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态常量"}},[s._v("#")]),s._v(" 静态常量")]),s._v(" "),a("ul",[a("li",[s._v("在模板中可以使用"),a("code",[s._v("__STATIC__")]),s._v(" 来输出项目目录但是在路径中缺少public目录，可以在配置文件中自定义静态常量")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 视图输出字符串内容替换\n'view_replace_str'       => [\n    '__PUBLIC__' => dirname($_SERVER['SCRIPT_NAME']),\n    '__STATIC__' => dirname($_SERVER['SCRIPT_NAME']) . '/static',\n    '__CSS__'    => dirname($_SERVER['SCRIPT_NAME']) . '/static/css',\n    '__JS__'     => dirname($_SERVER['SCRIPT_NAME']) . '/static/js',\n    '__IMG__'    => dirname($_SERVER['SCRIPT_NAME']) . '/static/images',\n\n\n加载资源格式：\n<linkhref=\"__CSS__/style.css\"rel=\"stylesheet\">\n<script src=\"__JS__/style.js\"><\/script>\n<img src=\"__IMG__/user_logo.jpg\" />\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"调试模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试模式"}},[s._v("#")]),s._v(" 调试模式")]),s._v(" "),a("p",[a("code",[s._v("ThinkPHP")]),s._v("支持调试模式，默认情况下是开启状态（"),a("code",[s._v("5.0.10+")]),s._v("版本开始，默认关闭调试模式，需要自己开启）。调试模式以除错方便优先，而且在异常的时候可以显示尽可能多的信息，所以对性能有一定的影响。")]),s._v(" "),a("p",[s._v("修改应用配置文件（"),a("code",[s._v("application/config.php")]),s._v("）中的"),a("code",[s._v("app_debug")]),s._v("配置参数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 关闭调试模式\n'app_debug' =>  false,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("为了安全考虑，避免泄露你的服务器WEB目录信息等资料，一定记得正式部署的时候关闭调试模式")])]),s._v(" "),a("h3",{attrs:{id:"url访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#url访问"}},[s._v("#")]),s._v(" URL访问")]),s._v(" "),a("p",[s._v("默认情况下，"),a("code",[s._v("URL")]),s._v("是不区分大小写的，也就是说 "),a("code",[s._v("URL")]),s._v("里面的"),a("strong",[s._v("模块/控制器/操作")]),s._v("名会自动转换为小写，控制器在最后调用的时候会转换为驼峰法处理。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://localhost/index.php/Index/Blog/read\n// 和下面的访问是等效的\nhttp://localhost/index.php/index/blog/read\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果访问下面的地址")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://localhost/index.php/Index/BlogTest/read\n// 和下面的访问是等效的\nhttp://localhost/index.php/index/blogtest/read\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("在这种URL不区分大小写情况下，如果要访问驼峰法的控制器类，则需要使用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("http://localhost/index.php/Index/blog_test/read\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果希望URL访问严格区分大小写，可以在应用配置文件中设置：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 关闭URL中控制器和操作名的自动转换\n'url_convert'    =>  false,\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("隐藏入口文件")]),s._v(" "),a("p",[s._v("在ThinkPHP5.0中，出于优化的URL访问原则，还支持通过URL重写隐藏入口文件，下面以Apache为例说明隐藏应用入口文件index.php的设置。")]),s._v(" "),a("p",[s._v("下面是Apache的配置过程，可以参考下：")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("1、httpd.conf配置文件中加载了mod_rewrite.so模块")]),s._v(" "),a("li",[s._v("2、AllowOverride None 将None改为 All")]),s._v(" "),a("li",[s._v("3、在应用入口文件同级目录添加.htaccess文件，内容如下：")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<IfModule mod_rewrite.c>\nOptions +FollowSymlinks -Multiviews\nRewriteEngine on\n\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]\n</IfModule>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置信息"}},[s._v("#")]),s._v(" 配置信息")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("配置文件路径：/tp5/application/config")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//项目配置文件\nreturn [\n    // 默认模块名\n    'default_module'        => 'index',\n    // 默认控制器名\n    'default_controller'    => 'Index',\n    // 默认操作名\n    'default_action'        => 'index',\n    //更多配置参数\n    //...\n];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"读取配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取配置"}},[s._v("#")]),s._v(" 读取配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("先引入config 配置类\nuse think\\Config;\n\n读取config 配置\nConfig::get('配置名称');\n\n或者你需要判断是否存在某个设置参数\nConfig::has('配置参数2');\n\n设置配置参数\nConfig::set('配置参数','配置值');\n// 或者使用助手函数\nconfig('配置参数','配置值');\n\n也可以批量设置，例如：\nConfig::set([\n    '配置参数1'=>'配置值',\n    '配置参数2'=>'配置值'\n]);\n// 或者使用助手函数\nconfig([\n    '配置参数1'=>'配置值',\n    '配置参数2'=>'配置值'\n]);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"数据库配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[s._v("#")]),s._v(" 数据库配置")]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("tp5/application/database.php")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/* 数据库设置 */\n'database'              => [\n    // 数据库类型\n    'type'        => 'mysql',\n    // 服务器地址\n    'hostname'    => '127.0.0.1',\n    // 数据库名\n    'database'    => 'thinkphp',\n    // 数据库用户名\n    'username'    => 'root',\n    // 数据库密码\n    'password'    => '',\n    // 数据库连接端口\n    'hostport'    => '',\n    // 数据库连接参数\n    'params'      => [],\n    // 数据库编码默认采用utf8\n    'charset'     => 'utf8',\n    // 数据库表前缀\n    'prefix'      => '',\n    // 数据库调试模式\n    'debug'       => false,\n],\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);