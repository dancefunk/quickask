(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{857:function(s,e,a){"use strict";a.r(e);var n=a(5),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"请求信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求信息"}},[s._v("#")]),s._v(" 请求信息")]),s._v(" "),a("p",[s._v("如果要获取当前的请求信息，可以使用"),a("code",[s._v("\\think\\Request")]),s._v("类")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$request = Request::instance();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以使用助手函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$request = request();\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"获取url信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取url信息"}},[s._v("#")]),s._v(" 获取URL信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$request = Request::instance();\n// 获取当前域名\necho 'domain: ' . $request->domain() . '<br/>';\n// 获取当前入口文件\necho 'file: ' . $request->baseFile() . '<br/>';\n// 获取当前URL地址 不含域名\necho 'url: ' . $request->url() . '<br/>';\n// 获取包含域名的完整URL地址\necho 'url with domain: ' . $request->url(true) . '<br/>';\n// 获取当前URL地址 不含QUERY_STRING\necho 'url without query: ' . $request->baseUrl() . '<br/>';\n// 获取URL访问的ROOT地址\necho 'root:' . $request->root() . '<br/>';\n// 获取URL访问的ROOT地址\necho 'root with domain: ' . $request->root(true) . '<br/>';\n// 获取URL地址中的PATH_INFO信息\necho 'pathinfo: ' . $request->pathinfo() . '<br/>';\n// 获取URL地址中的PATH_INFO信息 不含后缀\necho 'pathinfo: ' . $request->path() . '<br/>';\n// 获取URL地址中的后缀信息\necho 'ext: ' . $request->ext() . '<br/>';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("输出结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("domain: http://tp5.com\nfile: /index.php\nurl: /index/index/hello.html?name=thinkphp\nurl with domain: http://tp5.com/index/index/hello.html?name=thinkphp\nurl without query: /index/index/hello.html\nroot:\nroot with domain: http://tp5.com\npathinfo: index/index/hello.html\npathinfo: index/index/hello\next: html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h4",{attrs:{id:"设置-获取-模块-控制器-操作名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置-获取-模块-控制器-操作名称"}},[s._v("#")]),s._v(" 设置/获取 模块/控制器/操作名称")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$request = Request::instance();\necho "当前模块名称是" . $request->module();\necho "当前控制器名称是" . $request->controller();\necho "当前操作名称是" . $request->action();\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果当前访问的地址是 "),a("code",[s._v("http://serverName/index.php/index/hello_world/index")])]),s._v(" "),a("p",[s._v("输出结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("当前模块名称是index\n当前控制器名称是HelloWorld\n当前操作名称是index\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"获取请求参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取请求参数"}},[s._v("#")]),s._v(" 获取请求参数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$request = Request::instance();\necho '请求方法：' . $request->method() . '<br/>';\necho '资源类型：' . $request->type() . '<br/>';\necho '访问ip地址：' . $request->ip() . '<br/>';\necho '是否AJax请求：' . var_export($request->isAjax(), true) . '<br/>';\necho '请求参数：';\ndump($request->param());\necho '请求参数：仅包含name';\ndump($request->only(['name']));\necho '请求参数：排除name';\ndump($request->except(['name']));\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("输出结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("请求方法：GET\n资源类型：html\n访问ip地址：127.0.0.1\n是否Ajax请求：false\n请求参数：\narray (size=2)\n  'test' => string 'ddd' (length=3)\n  'name' => string 'thinkphp' (length=8)\n  \n请求参数：仅包含name\narray (size=1)\n  'name' => string 'thinkphp' (length=8)\n  \n请求参数：排除name\narray (size=1)\n  'test' => string 'ddd' (length=3)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"输入变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入变量"}},[s._v("#")]),s._v(" 输入变量")]),s._v(" "),a("p",[s._v("可以通过"),a("code",[s._v("Request")]),s._v("对象完成全局输入变量的检测、获取和安全过滤，支持包括"),a("code",[s._v("$_GET、$_POST、$_REQUEST、$_SERVER、$_SESSION、$_COOKIE、$_ENV")]),s._v("等系统变量，以及文件上传信息。")]),s._v(" "),a("h4",{attrs:{id:"获取param变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取param变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("PARAM")]),s._v("变量")]),s._v(" "),a("p",[a("code",[s._v("PARAM")]),s._v("变量是框架提供的用于自动识别"),a("code",[s._v("GET、POST")]),s._v("或者"),a("code",[s._v("PUT")]),s._v("请求的一种变量获取方式，是系统推荐的获取请求参数的方法，用法如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 获取当前请求的name变量\nRequest::instance()->param('name');\n// 获取当前请求的所有变量（经过过滤）\nRequest::instance()->param();\n// 获取当前请求的所有变量（原始数据）\nRequest::instance()->param(false);\n// 获取当前请求的所有变量（包含上传文件）\nRequest::instance()->param(true);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('param.name');\ninput('param.');\n或者\ninput('name');\ninput('');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("因为"),a("code",[s._v("input")]),s._v("函数默认就采用PARAM变量读取方式。")]),s._v(" "),a("h4",{attrs:{id:"获取get变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取get变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("GET")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->get('id'); // 获取某个get变量\nRequest::instance()->get('name'); // 获取get变量\nRequest::instance()->get(); // 获取所有的get变量（经过过滤的数组）\nRequest::instance()->get(false); // 获取所有的get变量（原始数组）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("或者使用内置的助手函数"),a("code",[s._v("input")]),s._v("方法实现相同的功能：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('get.id');\ninput('get.name');\ninput('get.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"获取post变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取post变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("POST")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->post('name'); // 获取某个post变量\nRequest::instance()->post(); // 获取经过过滤的全部post变量\nRequest::instance()->post(false); // 获取全部的post原始变量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('post.name');\ninput('post.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"获取put变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取put变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("PUT")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->put('name'); // 获取某个put变量\nRequest::instance()->put(); // 获取全部的put变量（经过过滤）\nRequest::instance()->put(false); // 获取全部的put原始变量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('put.name');\ninput('put.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"获取request变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取request变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("REQUEST")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->request('id'); // 获取某个request变量\nRequest::instance()->request(); // 获取全部的request变量（经过过滤）\nRequest::instance()->request(false); // 获取全部的request原始变量数据\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('request.id');\ninput('request.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"获取server变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取server变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("SERVER")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->server('PHP_SELF'); // 获取某个server变量\nRequest::instance()->server(); // 获取全部的server变量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('server.PHP_SELF');\ninput('server.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"获取session变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取session变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("SESSION")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->session('user_id'); // 获取某个session变量\nRequest::instance()->session(); // 获取全部的session变量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('session.user_id');\ninput('session.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"获取cookie变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取cookie变量"}},[s._v("#")]),s._v(" 获取"),a("code",[s._v("Cookie")]),s._v("变量")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Request::instance()->cookie('user_id'); // 获取某个cookie变量\nRequest::instance()->cookie(); // 获取全部的cookie变量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("使用助手函数实现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("input('cookie.user_id');\ninput('cookie.');\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"请求类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求类型"}},[s._v("#")]),s._v(" 请求类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 是否为 GET 请求\nif (Request::instance()->isGet()) echo "当前为 GET 请求";\n// 是否为 POST 请求\nif (Request::instance()->isPost()) echo "当前为 POST 请求";\n// 是否为 PUT 请求\nif (Request::instance()->isPut()) echo "当前为 PUT 请求";\n// 是否为 DELETE 请求\nif (Request::instance()->isDelete()) echo "当前为 DELETE 请求";\n// 是否为 Ajax 请求\nif (Request::instance()->isAjax()) echo "当前为 Ajax 请求";\n// 是否为 Pjax 请求\nif (Request::instance()->isPjax()) echo "当前为 Pjax 请求";\n// 是否为手机访问\nif (Request::instance()->isMobile()) echo "当前为手机访问";\n// 是否为 HEAD 请求\nif (Request::instance()->isHead()) echo "当前为 HEAD 请求";\n// 是否为 Patch 请求\nif (Request::instance()->isPatch()) echo "当前为 PATCH 请求";\n// 是否为 OPTIONS 请求\nif (Request::instance()->isOptions()) echo "当前为 OPTIONS 请求";\n// 是否为 cli\nif (Request::instance()->isCli()) echo "当前为 cli";\n// 是否为 cgi\nif (Request::instance()->isCgi()) echo "当前为 cgi";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("助手函数")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// 是否为 GET 请求\nif (request()->isGet()) echo "当前为 GET 请求";\n……\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);