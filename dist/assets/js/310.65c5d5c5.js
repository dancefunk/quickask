(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{872:function(s,e,a){"use strict";a.r(e);var n=a(5),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"blade模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blade模板引擎"}},[s._v("#")]),s._v(" blade模板引擎")]),s._v(" "),a("p",[a("code",[s._v("Blade")]),s._v(" 是由 "),a("code",[s._v("Laravel")]),s._v(" 提供的非常简单但功能强大的模板引擎，不同于其他流行的 PHP 模板引擎，"),a("code",[s._v("Blade")]),s._v(" 在视图中并不约束你使用 "),a("code",[s._v("PHP")]),s._v(" 原生代码。所有的 "),a("code",[s._v("Blade")]),s._v(" 视图最终都会被编译成原生 "),a("code",[s._v("PHP")]),s._v(" 代码并缓存起来直到被修改，这意味着对应用的性能而言 "),a("code",[s._v("Blade")]),s._v(" 基本上是零开销。"),a("code",[s._v("Blade")]),s._v(" 视图文件使用 "),a("code",[s._v(".blade.php")]),s._v(" 文件扩展并存放在 "),a("code",[s._v("resources/views")]),s._v(" 目录下。")]),s._v(" "),a("h3",{attrs:{id:"模板继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板继承"}},[s._v("#")]),s._v(" 模板继承")]),s._v(" "),a("h3",{attrs:{id:"定义布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义布局"}},[s._v("#")]),s._v(" 定义布局")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!-- 存放在 resources/views/layouts/app.blade.php --\x3e\n\n<html>\n    <head>\n        <title>应用名称 - @yield('title')</title>\n    </head>\n    <body>\n        @section('sidebar')\n            这里是侧边栏\n        @show\n\n        <div class=\"container\">\n            @yield('content')\n        </div>\n    </body>\n</html>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h3",{attrs:{id:"继承布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承布局"}},[s._v("#")]),s._v(" 继承布局")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\x3c!-- 存放在 resources/views/child.blade.php --\x3e\n\n@extends('layouts.app')\n\n@section('title', 'Laravel')\n\n@section('sidebar')\n    @parent\n    <p>Laravel侧边栏内容</p>\n@endsection\n\n@section('content')\n    <p>这里是主体内容，完善中...</p>\n@endsection\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"组件-插槽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件-插槽"}},[s._v("#")]),s._v(" 组件 & 插槽")]),s._v(" "),a("p",[s._v("组件和插槽给内容片段"),a("code",[s._v("（section）")]),s._v("和布局"),a("code",[s._v("（layout）")]),s._v("带来了方便，不过，有些人可能会发现组件和插槽的模型更容易理解。首先，我们假设有一个可复用的"),a("code",[s._v("alert")]),s._v("组件，我们想要在整个应用中都可以复用它：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- /resources/views/alert.blade.php --\x3e\n\n<div class="alert alert-danger">\n    {{ $slot }}\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v(s._s(s.$slot))]),s._v(" 变量包含了我们想要注入组件的内容，现在，要构建这个组件，我们可以使用 Blade 指令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@component('alert')\n    <strong>Whoops!</strong> Something went wrong!\n@endcomponent\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("有时候为组件定义多个插槽很有用。下面我们来编辑"),a("code",[s._v("alert")]),s._v("组件以便可以注入"),a("code",[s._v("标题")]),s._v("，命名插槽可以通过"),a("code",[s._v("echoing")]),s._v("与它们的名字相匹配的变量来显示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\x3c!-- /resources/views/alert.blade.php --\x3e\n\n<div class="alert alert-danger">\n    <div class="alert-title">{{ $title }}</div>\n    {{ $slot }}\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("现在，我们可以使用指令 "),a("code",[s._v("@slot")]),s._v(" 注入内容到命名的插槽。任何不在 "),a("code",[s._v("@slot")]),s._v(" 指令中的内容都会被传递到组件的 "),a("code",[s._v("$slot")]),s._v(" 变量中：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@component('alert')\n    @slot('title')\n        Forbidden\n    @endslot\n\n    You are not allowed to access this resource!\n@endcomponent\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"数据显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据显示"}},[s._v("#")]),s._v(" 数据显示")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Route::get('greeting', function () {\n    return view('welcome', ['name' => '学院君']);\n});\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("那么可以通过如下方式显示 "),a("code",[s._v("name")]),s._v(" 变量的内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("你好, {{ $name }}。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出 "),a("code",[s._v("PHP")]),s._v(" 函数的结果")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("The current UNIX timestamp is {{ time() }}.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"输出存在的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出存在的数据"}},[s._v("#")]),s._v(" 输出存在的数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{ isset($name) ? $name : 'Default' }}\n\n除了使用三元运算符，Blade 还提供了更简单的方式：\n\n{{ $name or 'Default' }}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"显示原生数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示原生数据"}},[s._v("#")]),s._v(" 显示原生数据")]),s._v(" "),a("p",[s._v("要输出带 "),a("code",[s._v("HTML")]),s._v(" 元素的富文本，可以使用如下语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Hello, {!! $name !!}.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"渲染-json-内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染-json-内容"}},[s._v("#")]),s._v(" 渲染 JSON 内容")]),s._v(" "),a("p",[s._v("有时候你可能会将数据以数组方式传递到视图再将其转化为 "),a("code",[s._v("JSON")]),s._v(" 格式以便初始化某个 "),a("code",[s._v("JavaScript")]),s._v("变量，例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var app = <?php echo json_encode($array); ?>;\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这样显得很麻烦，有更简便的方式来实现这个功能，那就是 "),a("code",[s._v("Blade")]),s._v(" 的 "),a("code",[s._v("@json")]),s._v(" 指令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<script>\n    var app = @json($array);\n<\/script>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"blade-javascript-框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blade-javascript-框架"}},[s._v("#")]),s._v(" Blade & JavaScript 框架")]),s._v(" "),a("p",[s._v("由于很多 "),a("code",[s._v("JavaScript")]),s._v(" 框架也是用花括号来表示要显示在浏览器中的表达式，如 "),a("code",[s._v("Vue")]),s._v("，我们可以使用 "),a("code",[s._v("@")]),s._v(" 符号来告诉 "),a("code",[s._v("Blade")]),s._v(" 渲染引擎该表达式应该保持原生格式不作改动。比如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<h1>Laravel</h1>\nHello, @{{ name }}.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"流程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程控制"}},[s._v("#")]),s._v(" 流程控制")]),s._v(" "),a("h3",{attrs:{id:"if-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-语句"}},[s._v("#")]),s._v(" If 语句")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@if (count($records) === 1)\n    I have one record!\n@elseif (count($records) > 1)\n    I have multiple records!\n@else\n    I don't have any records!\n@endif\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("为方便起见，"),a("code",[s._v("Blade")]),s._v(" 还提供了 "),a("code",[s._v("@unless")]),s._v(" 指令，表示除非：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@unless (Auth::check())\n    You are not signed in.\n@endunless\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("此外，"),a("code",[s._v("Blade")]),s._v(" 还提供了 "),a("code",[s._v("@isset")]),s._v(" 和 "),a("code",[s._v("@empty")]),s._v(" 指令，分别对应 "),a("code",[s._v("PHP")]),s._v(" 的 "),a("code",[s._v("isset")]),s._v(" 和 "),a("code",[s._v("empty")]),s._v(" 方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('@isset($records)\n    // $records is defined and is not null...\n@endisset\n\n@empty($records)\n    // $records is "empty"...\n@endempty\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"认证指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证指令"}},[s._v("#")]),s._v(" 认证指令")]),s._v(" "),a("p",[a("code",[s._v("@auth")]),s._v(" 和 "),a("code",[s._v("@guest")]),s._v(" 指令可用于快速判断当前用户是否登录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@auth\n    // 用户已登录...\n@endauth\n\n@guest\n    // 用户未登录...\n@endguest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果需要的话，你也可以在使用 "),a("code",[s._v("@auth")]),s._v(" 和 "),a("code",[s._v("@guest")]),s._v(" 的时候指定认证 "),a("code",[s._v("guard")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@auth('admin')\n    // The user is authenticated...\n@endauth\n\n@guest('admin')\n    // The user is not authenticated...\n@endguest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"section-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#section-指令"}},[s._v("#")]),s._v(" Section 指令")]),s._v(" "),a("p",[s._v("你可以使用 "),a("code",[s._v("@hasSection")]),s._v(" 指令判断某个 section 中是否有内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@hasSection('navigation')\n    <div class=\"pull-right\">\n        @yield('navigation')\n    </div>\n\n    <div class=\"clearfix\"></div>\n@endif\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"switch-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switch-语句"}},[s._v("#")]),s._v(" Switch 语句")]),s._v(" "),a("p",[a("code",[s._v("switch")]),s._v(" 语句可以通过 "),a("code",[s._v("@switch，@case，@break，@default")]),s._v(" 和 "),a("code",[s._v("@enswitch")]),s._v(" 指令构建：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@switch($i)\n    @case(1)\n        First case...\n        @break\n\n    @case(2)\n        Second case...\n        @break\n\n    @default\n        Default case...\n@endswitch\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环"}},[s._v("#")]),s._v(" 循环")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@for ($i = 0; $i < 10; $i++)\n    The current value is {{ $i }}\n@endfor\n\n@foreach ($users as $user)\n    <p>This is user {{ $user->id }}</p>\n@endforeach\n\n@forelse ($users as $user)\n    <li>{{ $user->name }}</li>\n@empty\n    <p>No users</p>\n@endforelse\n\n@while (true)\n    <p>I'm looping forever.</p>\n@endwhile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("使用循环的时候还可以结束循环或跳出当前迭代：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@foreach ($users as $user)\n    @if ($user->type == 1)\n        @continue\n    @endif\n\n    <li>{{ $user->name }}</li>\n\n    @if ($user->number == 5)\n        @break\n    @endif\n@endforeach\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("还可以使用指令声明来引入条件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@foreach ($users as $user)\n    @continue($user->type == 1)\n        <li>{{ $user->name }}</li>\n    @break($user->number == 5)\n@endforeach\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"loop变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loop变量"}},[s._v("#")]),s._v(" "),a("code",[s._v("$loop")]),s._v("变量")]),s._v(" "),a("p",[s._v("在循环的时候，可以在循环体中使用 "),a("code",[s._v("$loop")]),s._v(" 变量，该变量提供了一些有用的信息，比如当前循环索引，以及当前循环是不是第一个或最后一个迭代：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@foreach ($users as $user)\n    @if ($loop->first)\n        This is the first iteration.\n    @endif\n\n    @if ($loop->last)\n        This is the last iteration.\n    @endif\n\n    <p>This is user {{ $user->id }}</p>\n@endforeach\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("如果你身处嵌套循环，可以通过 "),a("code",[s._v("$loop")]),s._v(" 变量的 "),a("code",[s._v("parent")]),s._v(" 属性访问父级循环：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@foreach ($users as $user)\n    @foreach ($user->posts as $post)\n        @if ($loop->parent->first)\n            This is first iteration of the parent loop.\n        @endif\n    @endforeach\n@endforeach\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("code",[s._v("$loop")]),s._v(" 变量还提供了其他一些有用的属性：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("属性")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->index")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当前循环迭代索引 (从0开始)")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->iteration")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当前循环迭代 (从1开始)")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->remaining")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当前循环剩余的迭代")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->count")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("迭代数组元素的总数量")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->first")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否是当前循环的第一个迭代")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->last")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("是否是当前循环的最后一个迭代")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->depth")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("当前循环的嵌套层级")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("$loop->parent")])]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("嵌套循环中的父级循环变量")])])])]),s._v(" "),a("h3",{attrs:{id:"注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[s._v("#")]),s._v(" 注释")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{{-- 注释的内容 --}}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"引入子视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引入子视图"}},[s._v("#")]),s._v(" 引入子视图")]),s._v(" "),a("p",[s._v("你可以使用 Blade 的 "),a("code",[s._v("@include")]),s._v(" 命令来引入一个已存在的视图，所有在父视图的可用变量在被引入的视图中都是可用的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<div>\n    @include('shared.errors')\n\n    <form>\n        \x3c!-- 表单内容 --\x3e\n    </form>\n</div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("被引入的视图会继承父视图中的所有数据，同时也可以向引入的视图传递额外的数组数据：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@include('view.name', ['some' => 'data'])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当然，如果尝试使用 "),a("code",[s._v("@include")]),s._v(" 去引入一个不存在的视图，"),a("code",[s._v("Laravel")]),s._v(" 会抛出错误。如果想引入一个可能存在或可能不存在的视图，就使用 "),a("code",[s._v("@includeIf")]),s._v(" 指令:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@includeIf('view.name', ['some' => 'data'])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果要根据给定的布尔条件 "),a("code",[s._v("@include")]),s._v(" 视图，可以使用 "),a("code",[s._v("@includeWhen")]),s._v(" 指令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@includeWhen($boolean, 'view.name', ['some' => 'data'])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("要包含来自给定数组视图的第一个视图，可以使用 "),a("code",[s._v("includeFirst")]),s._v(" 指令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@includeFirst(['custom.admin', 'admin'], ['some' => 'data'])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("请避免在 Blade 视图中使用 "),a("code",[s._v("__DIR__")]),s._v(" 及 "),a("code",[s._v("__FILE__")]),s._v(" 常量，因为它们会引用编译视图时缓存的位置。")])]),s._v(" "),a("h2",{attrs:{id:"堆栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆栈"}},[s._v("#")]),s._v(" 堆栈")]),s._v(" "),a("p",[s._v("Blade 可以被推送到在其他视图或布局中的其他位置渲染的命名堆栈。这在子视图中指定所需的 "),a("code",[s._v("JavaScript")]),s._v(" 库时非常有用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@push('scripts')\n    <script src=\"/example.js\"><\/script>\n@endpush\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("你可以根据需要多次压入堆栈，通过 "),a("code",[s._v("@stack")]),s._v(" 命令中传递堆栈的名称来渲染完整的堆栈内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<head>\n    \x3c!-- Head Contents --\x3e\n\n    @stack('scripts')\n</head>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);