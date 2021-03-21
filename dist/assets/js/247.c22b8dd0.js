(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{804:function(s,a,e){"use strict";e.r(a);var t=e(5),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"快速入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[s._v("#")]),s._v(" 快速入门")]),s._v(" "),e("h3",{attrs:{id:"快速入门-基本步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速入门-基本步骤"}},[s._v("#")]),s._v(" 快速入门 - 基本步骤")]),s._v(" "),e("p",[s._v("在学习前，先谈谈大致使用gulp的步骤，先做个初步的认识。"),e("br"),s._v("\n安装nodejs -> 全局安装gulp -> 项目安装gulp以及gulp插件 -> 配置gulpfile.js -> 运行任务")]),s._v(" "),e("h4",{attrs:{id:"全局安装gulp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装gulp"}},[s._v("#")]),s._v(" 全局安装gulp")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"检测是否安装成功-出现版本号即为正确安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检测是否安装成功-出现版本号即为正确安装"}},[s._v("#")]),s._v(" 检测是否安装成功,出现版本号即为正确安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"新建package-json文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建package-json文件"}},[s._v("#")]),s._v(" 新建package.json文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm init\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"本地安装gulp插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装gulp插件"}},[s._v("#")]),s._v(" 本地安装gulp插件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"新建gulpfile-js文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建gulpfile-js文件"}},[s._v("#")]),s._v(" 新建gulpfile.js文件")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("gulpfile.js是gulp项目的配置文件，是位于项目根目录的普通js文件")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//导入工具包 require('node_modules里对应模块')\nvar gulp = require('gulp'), //本地安装gulp所用到的地方\n    less = require('gulp-less');\n \n//定义一个testLess任务（自定义任务名称）\ngulp.task('testLess', function () {\n    gulp.src('src/less/index.less') //该任务针对的文件\n        .pipe(less()) //该任务调用的模块\n        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css\n});\n \ngulp.task('default',['testLess', 'elseTask']); //定义默认任务\n \ngulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数\n\ngulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) \n\ngulp.dest(path[, options]) 处理完后文件生成路径\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h4",{attrs:{id:"运行gulp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行gulp"}},[s._v("#")]),s._v(" 运行gulp")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp default\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);