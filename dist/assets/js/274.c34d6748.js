(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{848:function(s,a,e){"use strict";e.r(a);var n=e(5),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"gulp插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp插件"}},[s._v("#")]),s._v(" Gulp插件")]),s._v(" "),e("h3",{attrs:{id:"gulp-imagemin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-imagemin"}},[s._v("#")]),s._v(" gulp-imagemin")]),s._v(" "),e("blockquote",[e("p",[s._v("使用gulp-imagemin压缩图片文件（包括PNG、JPEG、GIF和SVG图片）")])]),s._v(" "),e("h5",{attrs:{id:"全局安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-imagemin -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-imagemin --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    imagemin = require('gulp-imagemin');\n \ngulp.task('testImagemin', function () {\n    gulp.src('src/img/*.{png,jpg,gif,ico}')\n        .pipe(imagemin())\n        .pipe(gulp.dest('dist/img'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h5",{attrs:{id:"gulp-imagemin-其他参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-imagemin-其他参数"}},[s._v("#")]),s._v(" gulp-imagemin "),e("a",{attrs:{href:"https://github.com/sindresorhus/gulp-imagemin#user-content-options",target:"_blank",rel:"noopener noreferrer"}},[s._v("其他参数"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    imagemin = require('gulp-imagemin');\n \ngulp.task('testImagemin', function () {\n    gulp.src('src/img/*.{png,jpg,gif,ico}')\n        .pipe(imagemin({\n            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）\n            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片\n            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染\n            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化\n        }))\n        .pipe(gulp.dest('dist/img'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h5",{attrs:{id:"深度压缩图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深度压缩图片"}},[s._v("#")]),s._v(" 深度压缩图片")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    imagemin = require('gulp-imagemin'),\n    //确保本地已安装imagemin-pngquant [cnpm install imagemin-pngquant --save-dev]\n    pngquant = require('imagemin-pngquant');\n \ngulp.task('testImagemin', function () {\n    gulp.src('src/img/*.{png,jpg,gif,ico}')\n        .pipe(imagemin({\n            progressive: true,\n            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性\n            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件\n        }))\n        .pipe(gulp.dest('dist/img'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h5",{attrs:{id:"执行任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp testImagemin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"gulp-minify-css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-minify-css"}},[s._v("#")]),s._v(" gulp-minify-css")]),s._v(" "),e("p",[s._v("使用gulp-minify-css压缩css文件，减小文件大小，并给引用url添加版本号避免缓存。")]),s._v(" "),e("h5",{attrs:{id:"全局安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-2"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-minify-css -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-2"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-minify-css --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js-2"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    cssmin = require('gulp-minify-css');\n \ngulp.task('testCssmin', function () {\n    gulp.src('src/css/*.css')\n        .pipe(cssmin())\n        .pipe(gulp.dest('dist/css'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h5",{attrs:{id:"gulp-minify-css-其他参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-minify-css-其他参数"}},[s._v("#")]),s._v(" gulp-minify-css "),e("a",{attrs:{href:"https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api",target:"_blank",rel:"noopener noreferrer"}},[s._v("其他参数"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    cssmin = require('gulp-minify-css');\n \ngulp.task('testCssmin', function () {\n    gulp.src('src/css/*.css')\n        .pipe(cssmin({\n            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]\n            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]\n            keepBreaks: true//类型：Boolean 默认：false [是否保留换行]\n        }))\n        .pipe(gulp.dest('dist/css'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h5",{attrs:{id:"给css文件里引用url加版本号-根据引用文件的md5生产版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#给css文件里引用url加版本号-根据引用文件的md5生产版本号"}},[s._v("#")]),s._v(" 给css文件里引用url加版本号（根据引用文件的md5生产版本号）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    cssmin = require('gulp-minify-css');\n    //确保已本地安装gulp-make-css-url-version [cnpm install gulp-make-css-url-version --save-dev]\n    cssver = require('gulp-make-css-url-version'); \n \ngulp.task('testCssmin', function () {\n    gulp.src('src/css/*.css')\n        .pipe(cssver()) //给css文件里引用文件加版本号（文件MD5）\n        .pipe(cssmin())\n        .pipe(gulp.dest('dist/css'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h5",{attrs:{id:"执行任务-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务-2"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp testCssmin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"gulp-uglify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-uglify"}},[s._v("#")]),s._v(" gulp-uglify")]),s._v(" "),e("p",[s._v("使用gulp-uglify压缩javascript文件，减小文件大小")]),s._v(" "),e("h5",{attrs:{id:"全局安装-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-3"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-uglify -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-3"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-uglify --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js-3"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    uglify = require('gulp-uglify');\n \ngulp.task('jsmin', function () {\n    gulp.src('src/js/index.js')\n        .pipe(uglify())\n        .pipe(gulp.dest('dist/js'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h5",{attrs:{id:"压缩多个js文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩多个js文件"}},[s._v("#")]),s._v(" 压缩多个js文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    uglify = require('gulp-uglify');\n \ngulp.task('jsmin', function () {\n    gulp.src(['src/js/index.js','src/js/detail.js']) //多个文件以数组形式传入\n        .pipe(uglify())\n        .pipe(gulp.dest('dist/js'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h5",{attrs:{id:"gulp-uglify-其他参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-uglify-其他参数"}},[s._v("#")]),s._v(" gulp-uglify "),e("a",{attrs:{href:"https://github.com/terinjokes/gulp-uglify#user-content-options",target:"_blank",rel:"noopener noreferrer"}},[s._v("其他参数"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    uglify= require('gulp-uglify');\n \ngulp.task('jsmin', function () {\n    gulp.src(['src/js/*.js', '!src/js/**/{test1,test2}.js'])\n        .pipe(uglify({\n            mangle: true,//类型：Boolean 默认：true 是否修改变量名\n            compress: true,//类型：Boolean 默认：true 是否完全压缩\n            preserveComments: all //保留所有注释\n        }))\n        .pipe(gulp.dest('dist/js'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h5",{attrs:{id:"执行任务-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务-3"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp jsmin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"gulp-concat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-concat"}},[s._v("#")]),s._v(" gulp-concat")]),s._v(" "),e("p",[s._v("使用gulp-concat合并javascript文件，减少网络请求。")]),s._v(" "),e("h5",{attrs:{id:"全局安装-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-4"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-concat -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-4"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-concat --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js-4"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    concat = require('gulp-concat');\n \ngulp.task('testConcat', function () {\n    gulp.src('src/js/*.js')\n        .pipe(concat('all.js'))//合并后的文件名\n        .pipe(gulp.dest('dist/js'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h5",{attrs:{id:"执行任务-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务-4"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp testConcat\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"gulp-htmlmin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-htmlmin"}},[s._v("#")]),s._v(" gulp-htmlmin")]),s._v(" "),e("p",[s._v("使用gulp-htmlmin压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作。")]),s._v(" "),e("h5",{attrs:{id:"全局安装-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-5"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-htmlmin -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-5"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-htmlmin --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js-5"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    htmlmin = require('gulp-htmlmin');\n \ngulp.task('testHtmlmin', function () {\n    var options = {\n        removeComments: true,//清除HTML注释\n        collapseWhitespace: true,//压缩HTML\n        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked=\"true\"/> ==> <input />\n        removeEmptyAttributes: true,//删除所有空格作属性值 <input id=\"\" /> ==> <input />\n        removeScriptTypeAttributes: true,//删除<script>的type=\"text/javascript\"\n        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type=\"text/css\"\n        minifyJS: true,//压缩页面JS\n        minifyCSS: true//压缩页面CSS\n    };\n    gulp.src('src/html/*.html')\n        .pipe(htmlmin(options))\n        .pipe(gulp.dest('dist/html'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("更多压缩【参数】请查看"),e("a",{attrs:{href:"https://github.com/kangax/html-minifier#user-content-options-quick-reference",target:"_blank",rel:"noopener noreferrer"}},[s._v("html-minifer docs"),e("OutboundLink")],1)]),s._v(" "),e("h5",{attrs:{id:"执行任务-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务-5"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp testHtmlmin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"gulp-autoprefixer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-autoprefixer"}},[s._v("#")]),s._v(" gulp-autoprefixer")]),s._v(" "),e("p",[s._v("使用gulp-autoprefixer根据设置浏览器版本自动处理浏览器前缀。"),e("br"),s._v("\n使用她我们可以很潇洒地写代码，不必考虑各浏览器兼容前缀。"),e("br"),s._v("\n特别是开发移动端页面时，就能充分体现它的优势。例如兼容性不太好的flex布局。")]),s._v(" "),e("h5",{attrs:{id:"全局安装-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-6"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-autoprefixer -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-6"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-autoprefixer --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js-6"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    autoprefixer = require('gulp-autoprefixer');\n \ngulp.task('testAutoFx', function () {\n    gulp.src('src/css/index.css')\n        .pipe(autoprefixer({\n            browsers: ['last 2 versions', 'Android >= 4.0'],\n            cascade: true, //是否美化属性值 默认：true 像这样：\n            //-webkit-transform: rotate(45deg);\n            //        transform: rotate(45deg);\n            remove:true //是否去掉不必要的前缀 默认：true \n        }))\n        .pipe(gulp.dest('dist/css'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("#####gulp-autoprefixer的browsers参数详解 "),e("a",{attrs:{href:"https://github.com/ai/browserslist#queries",target:"_blank",rel:"noopener noreferrer"}},[s._v("传送门"),e("OutboundLink")],1)]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("strong",[s._v("last 2 versions")]),s._v(": 主流浏览器的最新两个版本")]),s._v(" "),e("li",[e("strong",[s._v("last 1 Chrome versions")]),s._v(": 谷歌浏览器的最新版本")]),s._v(" "),e("li",[e("strong",[s._v("last 2 Explorer versions")]),s._v(": IE的最新两个版本")]),s._v(" "),e("li",[e("strong",[s._v("last 3 Safari versions")]),s._v(": 苹果浏览器最新三个版本")]),s._v(" "),e("li",[e("strong",[s._v("Firefox >= 20")]),s._v(": 火狐浏览器的版本大于或等于20")]),s._v(" "),e("li",[e("strong",[s._v("iOS 7")]),s._v(": IOS7版本")]),s._v(" "),e("li",[e("strong",[s._v("Firefox ESR")]),s._v(": 最新ESR版本的火狐")]),s._v(" "),e("li",[e("strong",[s._v("大于5%")]),s._v(": 全球统计有超过5%的使用率")])])]),s._v(" "),e("p",[s._v("#####发现上面规律了吗，相信这不难看出，接下来说说各浏览器的标识：")]),s._v(" "),e("blockquote",[e("ul",[e("li",[e("strong",[s._v("Android")]),s._v(" for Android WebView.")]),s._v(" "),e("li",[e("strong",[s._v("BlackBerry or bb")]),s._v(" for Blackberry browser.")]),s._v(" "),e("li",[e("strong",[s._v("Chrome")]),s._v(" for Google Chrome.")]),s._v(" "),e("li",[s._v("**Firefox or ff **for Mozilla Firefox.")]),s._v(" "),e("li",[s._v("**Explorer or ie **for Internet Explorer.")]),s._v(" "),e("li",[s._v("**iOS or ios_saf **for iOS Safari.")]),s._v(" "),e("li",[s._v("**Opera **for Opera.")]),s._v(" "),e("li",[s._v("**Safari **for desktop Safari.")]),s._v(" "),e("li",[s._v("**OperaMobile or op_mob **for Opera Mobile.")]),s._v(" "),e("li",[s._v("**OperaMini or op_mini **for Opera Mini.")]),s._v(" "),e("li",[e("strong",[s._v("ChromeAndroid or and_chr")])]),s._v(" "),e("li",[s._v("**FirefoxAndroid or and_ff **for Firefox for Android.")]),s._v(" "),e("li",[s._v("**ExplorerMobile or ie_mob **for Internet Explorer Mobile.")])])]),s._v(" "),e("h5",{attrs:{id:"执行任务-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务-6"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp testAutoFx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"gulp-rev-append"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gulp-rev-append"}},[s._v("#")]),s._v(" gulp-rev-append")]),s._v(" "),e("p",[s._v("使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。")]),s._v(" "),e("h5",{attrs:{id:"全局安装-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-7"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-rev-append -g\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"本地安装-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地安装-7"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cnpm install gulp-rev-append --save\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"配置html页面引用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置html页面引用"}},[s._v("#")]),s._v(" 配置html页面引用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<!doctype html>\n<html>\n  <head>\n    <link rel="stylesheet" href="css/style.css?rev=@@hash">\n    <script src="js/js-one.js?rev=@@hash"><\/script>\n    <script src="js/js-two.js"><\/script>\n  </head>\n  <body>\n    <div>hello, world!</div>\n    <img src="img/test.jpg?rev=@@hash" alt="" />\n    <script src="js/js-three.js?rev=@@hash"><\/script>\n  </body>\n</html>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h5",{attrs:{id:"配置gulpfile-js-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置gulpfile-js-7"}},[s._v("#")]),s._v(" 配置gulpfile.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var gulp = require('gulp'),\n    rev = require('gulp-rev-append');\n \ngulp.task('testRev', function () {\n    gulp.src('src/html/index.html')\n        .pipe(rev())\n        .pipe(gulp.dest('dist/html'));\n});\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h5",{attrs:{id:"执行任务-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行任务-7"}},[s._v("#")]),s._v(" 执行任务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gulp testRev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);