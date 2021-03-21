(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{531:function(s,t,a){s.exports=a.p+"assets/img/yeoman1.86752a8e.jpeg"},796:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"yeoman"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yeoman"}},[s._v("#")]),s._v(" Yeoman")]),s._v(" "),n("p",[s._v("首先附上Yeoman官网："),n("a",{attrs:{href:"http://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://yeoman.io/"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("网友制作的前端脚手架："),n("a",{attrs:{href:"https://github.com/JakeLaoyu/generator-jake-front",target:"_blank",rel:"noopener noreferrer"}},[s._v("generator-jake-front"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("如果想快速制作一个脚手架，并且不需要实现特别复杂的定制化，看完这篇文章足够，如果想要实现复杂的功能，需要去"),n("a",{attrs:{href:"http://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看官方文档"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" 环境")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("全局安装需要的工具")])])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("npm install "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g yo\nnpm install "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g generator"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("generator\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"初始化项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),n("p",[s._v("执行下面命令，执行之前并不需要自己新建文件夹，yo generator会帮助我们建好文件夹")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("yo generator\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("项目名称自己设置，必须是以"),n("code",[s._v("generator-")]),s._v("开头，协议选择"),n("code",[s._v("MIT")]),s._v("，在设置了一系列问题之后")]),s._v(" "),n("p",[n("img",{attrs:{src:a(531),alt:"yeoman"}})]),s._v(" "),n("p",[s._v("自动生成如下目录")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("generator"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("test\n├── "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LICENSE")]),s._v("\n├── "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("md\n├── __tests__\n│   └── app"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("js\n├── generators\n│   └── app\n│       ├── index"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("js\n│       └── templates\n│           └── dummyfile"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("txt\n└── package"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("json\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),n("p",[n("code",[s._v("generators/app/templates/")]),s._v("是默认存放文件的目录，把所有模版文件放在这个目录下")]),s._v(" "),n("p",[n("code",[s._v("/generators/app/index.js")]),s._v("是"),n("code",[s._v("Yeoman")]),s._v("的配置文件，定义如何生成我们的脚手架")]),s._v(" "),n("h3",{attrs:{id:"prompting"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prompting"}},[s._v("#")]),s._v(" prompting")]),s._v(" "),n("p",[n("code",[s._v("Prompts")]),s._v("是"),n("code",[s._v("generator")]),s._v("与用户交互的主要方式。"),n("code",[s._v("prompt")]),s._v("模块由 "),n("a",{attrs:{href:"https://github.com/SBoudrias/Inquirer.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("Inquirer.js"),n("OutboundLink")],1),s._v("提供，你可以参考它的"),n("a",{attrs:{href:"https://github.com/SBoudrias/Inquirer.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("API"),n("OutboundLink")],1),s._v("，在可用的提示选项列表。")]),s._v(" "),n("p",[n("code",[s._v("prompt")]),s._v("方法是异步的并且返回一个 "),n("code",[s._v("promise")]),s._v("。在你运行下一个任务前去完成它，你需要返回 "),n("code",[s._v("promise")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[s._v("Generator")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("prompting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Have Yeoman greet the user.")]),s._v("\n    this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yosay")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Welcome to the awe-inspiring '")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" chalk"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("red")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'generator-downloads'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("' generator!'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" prompts "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'confirm'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'someAnswer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Would you like to enable this option?'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("prompt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("prompts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("props "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// To access props later use this.props.someAnswer;")]),s._v("\n      this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("props "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("p",[s._v("做一些适当的修改，实现更通用的脚手架。可以查阅API")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("this.appname: 获取当前文件夹名称")])]),s._v(" "),n("li",[n("strong",[s._v("this.user.git.name(): 获取全局git用户名")])]),s._v(" "),n("li",[n("strong",[s._v("this.user.git.email(): 获取全局git邮箱")])]),s._v(" "),n("li",[n("strong",[s._v("this.github.username(): 获取github用户名")])])]),s._v(" "),n("p",[s._v("定义对象中的"),n("code",[s._v("type")]),s._v("，管理交互方式。使用"),n("code",[s._v("input")]),s._v("实现控制台输入。")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("type")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'input'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'author'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("message")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'author'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("user"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("git"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这样便实现了让用户输入作者名称，默认为git全局配置的用户名。然后在其他配置中使用"),n("code",[s._v("this.props.author")]),s._v("实现获取用户输入。")]),s._v(" "),n("h3",{attrs:{id:"writing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing"}},[s._v("#")]),s._v(" writing")]),s._v(" "),n("p",[n("code",[s._v("Generators")]),s._v("在"),n("code",[s._v("this.fs")]),s._v("暴露了所有的文件的方法，这是一个实例，"),n("a",{attrs:{href:"https://github.com/sboudrias/mem-fs-editor",target:"_blank",rel:"noopener noreferrer"}},[s._v("mem-fs editor"),n("OutboundLink")],1),s._v(" - 确保为所有可获得的方法选择模块文件。")]),s._v(" "),n("p",[s._v("值得注意的是，通过"),n("code",[s._v("this.fs")]),s._v("暴露"),n("code",[s._v("commit")]),s._v("，你不应该在你的"),n("code",[s._v("generator")]),s._v("去调用它。"),n("code",[s._v("Yeoman")]),s._v("在运行循环的冲突阶段结束后，在内部调用它。")]),s._v(" "),n("h3",{attrs:{id:"复制一个模板文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复制一个模板文件"}},[s._v("#")]),s._v(" 复制一个模板文件")]),s._v(" "),n("p",[s._v("例如："),n("code",[s._v("./templates/index.html")]),s._v("的文件内容是：")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%=")]),s._v(" title "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("然后，我们将使用"),n("a",{attrs:{href:"https://github.com/sboudrias/mem-fs-editor#copyfrom-to-options",target:"_blank",rel:"noopener noreferrer"}},[s._v("copyTpl"),n("OutboundLink")],1),s._v("方法去复制作为模板的处理中的文件。"),n("code",[s._v("copyTpl")]),s._v("使用的是"),n("a",{attrs:{href:"http://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ejs"),n("OutboundLink")],1),s._v(" 模板引擎。")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[s._v("Generator")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("writing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("fs"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("copy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("templatePath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'index.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("destinationPath")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'index.html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("title")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Templating with Yeoman'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("一旦generator运行成功，"),n("code",[s._v("index.html")]),s._v("将会包含：")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Templating with Yeoman"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("title"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("head"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("html"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("code",[s._v("json")]),s._v("也同样适用上面的语法，配置"),n("code",[s._v("package.json")]),s._v("文件可以适应不同的项目。")]),s._v(" "),n("h3",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" install")]),s._v(" "),n("p",[n("code",[s._v("install")]),s._v("方法设置在文件copy完成之后执行的命令，例如")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name class-name-fully-qualified"}},[s._v("Generator")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\nthis"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("installDependencies")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("bower")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("npm")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("yarn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token argument-name"}},[s._v("callback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       this"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Everything is ready!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),n("p",[s._v("由于我们在本地开发，并不知道用起来怎么样，所以可以使用"),n("code",[s._v("npm link")]),s._v("命令，相当于在全局安装了此脚手架，然后在新文件夹中执行"),n("code",[s._v("yo")]),s._v("，选择脚手架，便可以测试")]),s._v(" "),n("h3",{attrs:{id:"发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[s._v("#")]),s._v(" 发布")]),s._v(" "),n("p",[n("code",[s._v("generator-test/package.json")]),s._v("中的"),n("code",[s._v("name")]),s._v("要在https://www.npmjs.com/没被创建过，才可以发布。")]),s._v(" "),n("p",[s._v("发布需要一个"),n("code",[s._v("npm")]),s._v("的账号，如果没有使用"),n("code",[s._v("npm adduser")]),s._v("创建；")]),s._v(" "),n("p",[s._v("如果已有账号，运行"),n("code",[s._v("npm login")]),s._v("登陆。")]),s._v(" "),n("p",[s._v("在项目根目录下，运行"),n("code",[s._v("npm publish")]),s._v("就可以发布了。如果更新后重新发布，注意修改根目录下的"),n("code",[s._v("package.json")]),s._v("文件中的版本号。")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("npm unpublish")]),s._v("包名命令可以撤销发布，只有在发包的24小时内才允许撤销发布的包。")])])}),[],!1,null,null,null);t.default=e.exports}}]);