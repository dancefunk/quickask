(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{856:function(s,a,n){"use strict";n.r(a);var e=n(5),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"定义路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#定义路由"}},[s._v("#")]),s._v(" 定义路由")]),s._v(" "),n("p",[s._v("URL地址里面的"),n("code",[s._v("index")]),s._v("模块怎么才能省略呢，默认的"),n("code",[s._v("URL")]),s._v("地址显得有点长，下面就来说说如何通过路由简化"),n("code",[s._v("URL")]),s._v("访问。")]),s._v(" "),n("p",[s._v("我们在路由定义文件（"),n("code",[s._v("application/route.php")]),s._v("）里面添加一些路由规则，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 添加路由规则 路由到 index控制器的hello操作方法\n    'hello/:name' => 'index/index/hello',\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("该路由规则表示所有"),n("code",[s._v("hello")]),s._v("开头的并且带参数的访问都会路由到index控制器的hello操作方法。")]),s._v(" "),n("p",[s._v("路由之前的URL访问地址为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/index/index/hello/name/thinkphp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("定义路由后就只能访问下面的URL地址")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/hello/thinkphp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("定义路由规则后，原来的URL地址将会失效，变成非法请求。")])]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("[]")]),s._v("把路由规则中的变量包起来，就表示该变量为可选")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 路由参数name为可选\n    'hello/[:name]' => 'index/hello',\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/hello\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("当"),n("code",[s._v("name")]),s._v("参数没有传入值的时候，"),n("code",[s._v("hello")]),s._v("方法的"),n("code",[s._v("name")]),s._v("参数有默认值"),n("code",[s._v("World")]),s._v("，所以输出的内容为 "),n("code",[s._v("Hello,World!")])]),s._v(" "),n("p",[s._v("除了路由配置文件中定义之外，还可以采用动态定义路由规则的方式定义，例如在路由配置文件（"),n("code",[s._v("application/route.php")]),s._v("）的开头直接添加下面的方法：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("use think\\Route;\n\nRoute::rule('hello/:name', 'index/hello');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("完成的效果和使用配置方式定义是一样的。")]),s._v(" "),n("p",[s._v("无论是配置方式还是通过Route类的方法定义路由，都统一放到路由配置文件"),n("code",[s._v("application/route.php")]),s._v("文件中")]),s._v(" "),n("h3",{attrs:{id:"完整匹配"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#完整匹配"}},[s._v("#")]),s._v(" 完整匹配")]),s._v(" "),n("p",[s._v("前面定义的路由是只要以hello开头就能进行匹配，如果需要完整匹配，可以使用下面的定义：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 路由参数name为可选\n    'hello/[:name]$' => 'index/hello',\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("当路由规则以"),n("code",[s._v("$")]),s._v("结尾的时候就表示当前路由规则需要完整匹配。")]),s._v(" "),n("p",[s._v("当我们访问下面的URL地址的时候：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/hello // 正确匹配\nhttp://tp5.com/hello/thinkphp // 正确匹配\nhttp://tp5.com/hello/thinkphp/val/value // 不会匹配\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"闭包定义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#闭包定义"}},[s._v("#")]),s._v(" 闭包定义")]),s._v(" "),n("p",[s._v("还支持通过定义闭包为某些特殊的场景定义路由规则，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 定义闭包\n    'hello/[:name]' => function ($name) {\n        return 'Hello,' . $name . '!';\n    },\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("或者")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("use think\\Route;\n\nRoute::rule('hello/:name', function ($name) {\n    return 'Hello,' . $name . '!';\n});\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("因此，当访问下面的URL地址：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/hello/thinkphp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("会输出")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hello,thinkphp!\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"设置url分隔符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置url分隔符"}},[s._v("#")]),s._v(" 设置URL分隔符")]),s._v(" "),n("p",[s._v("如果需要改变URL地址中的"),n("code",[s._v("pathinfo")]),s._v("参数分隔符，只需要在应用配置文件（"),n("code",[s._v("application/config.php")]),s._v("）中设置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 设置pathinfo分隔符\n'pathinfo_depr'          => '-',\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("路由规则定义无需做任何改变，我们就可以访问下面的地址：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/hello-thinkphp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"路由参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由参数"}},[s._v("#")]),s._v(" 路由参数")]),s._v(" "),n("p",[s._v("我们还可以约束路由规则的请求类型或者URL后缀之类的条件，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 定义路由的请求类型和后缀\n    'hello/[:name]' => ['index/hello', ['method' => 'get', 'ext' => 'html']],\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("上面定义的路由规则限制了必须是"),n("code",[s._v("get")]),s._v("请求，而且后缀必须是"),n("code",[s._v("html")]),s._v("的，所以下面的访问地址：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/hello // 无效\nhttp://tp5.com/hello.html // 有效\nhttp://tp5.com/hello/thinkphp // 无效\nhttp://tp5.com/hello/thinkphp.html // 有效\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"变量规则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量规则"}},[s._v("#")]),s._v(" 变量规则")]),s._v(" "),n("p",[s._v("接下来，我们来尝试一些复杂的路由规则定义满足不同的路由变量。在此之前，首先增加一个控制器类如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<?php\n\nnamespace app\\index\\controller;\n\nclass Blog\n{\n\n    public function get($id)\n    {\n        return '查看id=' . $id . '的内容';\n    }\n\n    public function read($name)\n    {\n        return '查看name=' . $name . '的内容';\n    }\n\n    public function archive($year, $month)\n    {\n        return '查看' . $year . '/' . $month . '的归档内容';\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("添加如下路由规则：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    'blog/:year/:month' => ['blog/archive', ['method' => 'get'], ['year' => '\\d{4}', 'month' => '\\d{2}']],\n    'blog/:id'          => ['blog/get', ['method' => 'get'], ['id' => '\\d+']],\n    'blog/:name'        => ['blog/read', ['method' => 'get'], ['name' => '\\w+']],\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("在上面的路由规则中，我们对变量进行的规则约束，变量规则使用正则表达式进行定义。")]),s._v(" "),n("p",[s._v("我们看下几种URL访问的情况")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 访问id为5的内容\nhttp://tp5.com/blog/5 \n// 访问name为thinkphp的内容\nhttp://tp5.com/blog/thinkphp \n// 访问2015年5月的归档内容\nhttp://tp5.com/blog/2015/05 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"路由分组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由分组"}},[s._v("#")]),s._v(" 路由分组")]),s._v(" "),n("p",[s._v("上面的三个路由规则由于都是"),n("code",[s._v("blog")]),s._v("打头，所以我们可以做如下的简化：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    '[blog]' => [\n        ':year/:month' => ['blog/archive', ['method' => 'get'], ['year' => '\\d{4}', 'month' => '\\d{2}']],    \n        ':id'          => ['blog/get', ['method' => 'get'], ['id' => '\\d+']],\n        ':name'        => ['blog/read', ['method' => 'get'], ['name' => '\\w+']],\n    ],\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("对于这种定义方式，我们称之为路由分组，路由分组一定程度上可以提高路由检测的效率。")]),s._v(" "),n("h3",{attrs:{id:"复杂路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂路由"}},[s._v("#")]),s._v(" 复杂路由")]),s._v(" "),n("p",[s._v("有时候，我们还需要对URL做一些特殊的定制，例如如果要同时支持下面的访问地址")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("http://tp5.com/blog/thinkphp \nhttp://tp5.com/blog-2015-05 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("我们只要稍微改变路由定义规则即可：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    'blog/:id'            => ['blog/get', ['method' => 'get'], ['id' => '\\d+']],\n    'blog/:name'          => ['blog/read', ['method' => 'get'], ['name' => '\\w+']],\n    'blog-<year>-<month>' => ['blog/archive', ['method' => 'get'], ['year' => '\\d{4}', 'month' => '\\d{2}']],\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("对 "),n("code",[s._v("blog-<year>-<month>")]),s._v(" 这样的非正常规范，我们需要使用<变量名>这样的变量定义方式，而不是 "),n("code",[s._v(":变量名")]),s._v("方式。")]),s._v(" "),n("p",[s._v("简单起见，我们还可以把变量规则统一定义，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 全局变量规则定义\n    '__pattern__'         => [\n        'name'  => '\\w+',\n        'id'    => '\\d+',\n        'year'  => '\\d{4}',\n        'month' => '\\d{2}',\n    ],\n    // 路由规则定义\n    'blog/:id'            => 'blog/get',\n    'blog/:name'          => 'blog/read',\n    'blog-<year>-<month>' => 'blog/archive',\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("在"),n("code",[s._v("__pattern__")]),s._v("中定义的变量规则我们称之为全局变量规则，在路由规则里面定义的变量规则我们称之为局部变量规则，如果一个变量同时定义了全局规则和局部规则的话，当前的局部规则会覆盖全局规则的，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("return [\n    // 全局变量规则\n    '__pattern__'         => [\n        'name'  => '\\w+',\n        'id'    => '\\d+',\n        'year'  => '\\d{4}',\n        'month' => '\\d{2}',\n    ],\n\n    'blog/:id'            => 'blog/get',\n    // 定义了局部变量规则\n    'blog/:name'          => ['blog/read', ['method' => 'get'], ['name' => '\\w{5,}']],\n    'blog-<year>-<month>' => 'blog/archive',\n];\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"url生成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#url生成"}},[s._v("#")]),s._v(" URL生成")]),s._v(" "),n("p",[s._v("定义路由规则之后，我们可以通过Url类来方便的生成实际的URL地址（路由地址），针对上面的路由规则，我们可以用下面的方式生成URL地址。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 输出 blog/thinkphp\nUrl::build('blog/read', 'name=thinkphp');\nUrl::build('blog/read', ['name' => 'thinkphp']);\n// 输出 blog/5\nUrl::build('blog/get', 'id=5');\nUrl::build('blog/get', ['id' => 5]);\n// 输出 blog/2015/05\nUrl::build('blog/archive', 'year=2015&month=05');\nUrl::build('blog/archive', ['year' => '2015', 'month' => '05']);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("我们还可以使用系统提供的助手函数url来简化")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("url('blog/read', 'name=thinkphp');\n// 等效于\nUrl::build('blog/read', 'name=thinkphp');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("通常在模板文件中输出的话，可以使用助手函数，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("{:url('blog/read', 'name=thinkphp')}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果你配置了"),n("code",[s._v("url_html_suffix")]),s._v("参数的话，生成的URL地址会带上后缀，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("'url_html_suffix'   => 'html',\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("那么生成的URL地址 类似")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("blog/thinkphp.html \nblog/2015/05.html\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("如果你的URL地址全部采用路由方式定义，也可以直接使用路由规则来定义URL生成，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("url('/blog/thinkphp');\nUrl::build('/blog/8');\nUrl::build('/blog/archive/2015/05');\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("生成方法的第一个参数一定要和路由定义的路由地址保持一致，如果你的路由地址比较特殊，例如使用闭包定义的话，则需要手动给路由指定标识，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("// 添加hello路由标识\nRoute::rule(['hello','hello/:name'], function($name){\n    return 'Hello,'.$name;\n});\n\n// 根据路由标识快速生成URL\nUrl::build('hello', 'name=thinkphp');\n\n// 或者使用\nUrl::build('hello', ['name' => 'thinkphp']);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);