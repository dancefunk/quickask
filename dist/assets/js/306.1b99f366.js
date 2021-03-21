(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{866:function(s,e,t){"use strict";t.r(e);var a=t(5),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"定义控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定义控制器"}},[s._v("#")]),s._v(" 定义控制器")]),s._v(" "),t("p",[s._v("下面是一个基础控制器类的例子。需要注意的是，该控制器继承了一个Laravel内置的基础控制器类。该基础控制器提供了一些编辑的方法，比如 "),t("code",[s._v("middleware")]),s._v(" 方法，该方法可以为控制器行为添加中间件：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\User;\nuse App\\Http\\Controllers\\Controller;\n\nclass UserController extends Controller\n{\n    /**\n     * Show the profile for the given user.\n     *\n     * @param  int  $id\n     * @return Response\n     */\n    public function show($id)\n    {\n        return view('user.profile', ['user' => User::findOrFail($id)]);\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("你可以这样定义一个指向控制器行为的路由:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::get('user/{id}', 'UserController@show');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在, 当一个请求与此指定的路由的URI匹配时， "),t("code",[s._v("UserController")]),s._v("类的"),t("code",[s._v("show")]),s._v("方法就会被执行。当然，路由参数也会传递至该方法。")]),s._v(" "),t("blockquote",[t("p",[s._v("控制器并不是强制要求 继承基础类。但是，如果控制器没有继承基础类，你将无法使用一些便捷的功能，比如"),t("code",[s._v("middleware, validate和 dispatch")]),s._v(" 。")])]),s._v(" "),t("h3",{attrs:{id:"控制器和命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制器和命名空间"}},[s._v("#")]),s._v(" 控制器和命名空间")]),s._v(" "),t("p",[s._v("需要注意的是，在定义控制器路由时，我们不需要指定完整的控制器命名空间。因为 "),t("code",[s._v("RouteServiceProvider")]),s._v(" 会在一个包含命名空间的路由器组中加载路由文件，所以我们只需指定类名中 "),t("code",[s._v("App\\Http\\Controllers")]),s._v(" 命名空间之后的部分就可以了。")]),s._v(" "),t("p",[s._v("如果你选择将控制器存放在 "),t("code",[s._v("App\\Http\\Controllers")]),s._v(" 目录下，只需要简单的使用相对于 "),t("code",[s._v("App\\Http\\Controllers")]),s._v(" 根命名空间的特定类名。 也就是说，如果完整的控制器类是 "),t("code",[s._v("App\\Http\\Controllers\\Photos\\AdminController")]),s._v("，那你应该用以下这种方式向控制器注册路由：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::get('foo', 'Photos\\AdminController@method');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"单个行为控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单个行为控制器"}},[s._v("#")]),s._v(" 单个行为控制器")]),s._v(" "),t("p",[s._v("如果你想定义一个只处理单个行为的控制器，你可以在这个控制器中放置一个 "),t("code",[s._v("__invoke")]),s._v(" 方法：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\User;\nuse App\\Http\\Controllers\\Controller;\n\nclass ShowProfile extends Controller\n{\n    /**\n     * Show the profile for the given user.\n     *\n     * @param  int  $id\n     * @return Response\n     */\n    public function __invoke($id)\n    {\n        return view('user.profile', ['user' => User::findOrFail($id)]);\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("注册单个行为控制器的路由时，不需要指定方法：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::get('user/{id}', 'ShowProfile');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"控制器中间件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制器中间件"}},[s._v("#")]),s._v(" 控制器中间件")]),s._v(" "),t("p",[s._v("Middleware 可以在路由文件中被分配给控制器路由：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::get('profile', 'UserController@show')->middleware('auth');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("但是，在控制器的构造方法中指定中间件会更方便。使用控制器构造函数中的 "),t("code",[s._v("middleware")]),s._v(" 方法， 你可以很容易地将中间件分配给控制器的行为。你甚至可以约束中间件只对控制器类中的某些特定方法生效：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("class UserController extends Controller\n{\n    /**\n     * Instantiate a new controller instance.\n     *\n     * @return void\n     */\n    public function __construct()\n    {\n        $this->middleware('auth');\n\n        $this->middleware('log')->only('index');\n\n        $this->middleware('subscribed')->except('store');\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("还能使用闭包来为控制器注册中间件。闭包的方便之处在于，你无需特地创建一个中间件类来为某一个特殊的控制器注册中间件：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$this->middleware(function ($request, $next) {\n    // ...\n\n    return $next($request);\n});\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("blockquote",[t("p",[s._v("你可以将中间件分配给控制器的部分行为上；然而这样可能意味着你的控制器正在变得很大。这里建议你将控制器分成多个更小的控制器。")])]),s._v(" "),t("h3",{attrs:{id:"资源控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源控制器"}},[s._v("#")]),s._v(" 资源控制器")]),s._v(" "),t("p",[s._v("Laravel 资源路由将典型的「CRUD」路由分配给具有单行代码的控制器。比如，你希望创建一个控制器来处理应用保存的「照片」的所有 HTTP 请求。使用Artisan命令 "),t("code",[s._v("make:controller")]),s._v(" ，我们可以快速创建这样一个控制器：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php artisan make:controller PhotoController --resource\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令会生成一个控制器 "),t("code",[s._v("app/Http/Controllers/PhotoController.php")]),s._v(" 。其中包含了每个可用资源的操作方法。")]),s._v(" "),t("p",[s._v("接下来，你可以给控制器注册一个资源路由：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::resource('photos', 'PhotoController');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个单一路由声明创建多个路由来处理资源上的各种行为。生成的控制器为每个行为保留了方法，包括了关于处理 HTTP 动作和 URIs 的声明注释。")]),s._v(" "),t("p",[s._v("你可以通过将一个数组传入到"),t("code",[s._v("resources")]),s._v("方法中的方式来一次性的创建多个资源控制器：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::resources([\n    'photos' => 'PhotoController',\n    'posts' => 'PostController'\n]);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"资源控制器操作处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源控制器操作处理"}},[s._v("#")]),s._v(" 资源控制器操作处理")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("动作")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("URI")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("行为")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("路由名称")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("GET")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("index")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.index")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("GET")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos/create")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("create")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.create")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("POST")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("store")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.store")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("GET")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos/{photo}")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("show")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.show")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("GET")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos/{photo}/edit")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("edit")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.edit")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("PUT/PATCH")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos/{photo}")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("update")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.update")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("DELETE")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("/photos/{photo}")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("destroy")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[s._v("photos.destroy")])])])]),s._v(" "),t("h3",{attrs:{id:"指定资源模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定资源模型"}},[s._v("#")]),s._v(" 指定资源模型")]),s._v(" "),t("p",[s._v("如果你使用了路由模型绑定，并且想在资源控制器的方法中使用类型提示，你可以在生成控制器的时候使用"),t("code",[s._v("--model")]),s._v(" 选项：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php artisan make:controller PhotoController --resource --model=Photo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"伪造表单方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#伪造表单方法"}},[s._v("#")]),s._v(" 伪造表单方法")]),s._v(" "),t("p",[s._v("因为 HTML 表单不能生成"),t("code",[s._v("PUT，PATCH")]),s._v("和 "),t("code",[s._v("DELETE")]),s._v(" 请求，所以你需要添加一个隐藏的"),t("code",[s._v("_method")]),s._v(" 字段来伪造这些 "),t("code",[s._v("HTTP")]),s._v(" 动作。 这个"),t("code",[s._v("Blade")]),s._v("指令 "),t("code",[s._v("@method")]),s._v(" 可以为你创建这个字段：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<form action="/foo/bar" method="POST">\n    @method(\'PUT\')\n</form>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"部分资源路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部分资源路由"}},[s._v("#")]),s._v(" 部分资源路由")]),s._v(" "),t("p",[s._v("声明资源路由时，你可以指定控制器应该处理的部分行为，而不是所有默认的行为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::resource('photos', 'PhotoController', ['only' => [\n    'index', 'show'\n]]);\n\nRoute::resource('photos', 'PhotoController', ['except' => [\n    'create', 'store', 'update', 'destroy'\n]]);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"api-资源路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api-资源路由"}},[s._v("#")]),s._v(" API 资源路由")]),s._v(" "),t("p",[s._v("当声明用于 "),t("code",[s._v("APIs")]),s._v(" 的资源路由时，通常需要排除显示 "),t("code",[s._v("HTML")]),s._v(" 模板的路由， 如 "),t("code",[s._v("create")]),s._v(" 和 "),t("code",[s._v("edit")]),s._v("。 为了方便起见，你可以使用 "),t("code",[s._v("apiResource")]),s._v(" 方法自动排除这两个路由：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::apiResource('photos', 'PhotoController');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你可以通过传递一个数组给 "),t("code",[s._v("apiResources")]),s._v(" 方法的方式来一次性注册多个API资源控制器：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::apiResources([\n    'photos' => 'PhotoController',\n    'posts' => 'PostController'\n]);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("为了快速生成一个不包含"),t("code",[s._v("create")]),s._v(" 和 "),t("code",[s._v("edit")]),s._v("方法的API资源控制器，可以在执行 "),t("code",[s._v("make:controller")]),s._v("命令时加上 "),t("code",[s._v("--api")]),s._v("选项：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php artisan make:controller API/PhotoController --api\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"命名资源路由"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名资源路由"}},[s._v("#")]),s._v(" 命名资源路由")]),s._v(" "),t("p",[s._v("默认情况下，所有的资源控制器行为都有一个路由名称。 但是，你可以传入一个 "),t("code",[s._v("names")]),s._v(" 数组来覆盖这些名称：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::resource('photos', 'PhotoController', ['names' => [\n    'create' => 'photos.build'\n]]);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"命名资源路由参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名资源路由参数"}},[s._v("#")]),s._v(" 命名资源路由参数")]),s._v(" "),t("p",[s._v("默认情况下， "),t("code",[s._v("Route::resource")]),s._v(" 会根据资源名称的「单数」形式创建资源路由的路由参数。 你可以在选项数组中传入 "),t("code",[s._v("parameters")]),s._v("参数来轻松地覆盖每个资源。 "),t("code",[s._v("parameters")]),s._v(" 数组应当是一个资源名称和参数名称的关联数组：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::resource('user', 'AdminUserController', ['parameters' => [\n    'user' => 'admin_user'\n]]);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("上例将会为资源的 "),t("code",[s._v("show")]),s._v(" 路由生成如下的 URI ：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/user/{admin_user}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"本地化资源-uris"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地化资源-uris"}},[s._v("#")]),s._v(" 本地化资源 URIs")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("Route::resource")]),s._v(" 将会使用英文动词来创建资源 "),t("code",[s._v("URI")]),s._v("。如果你需要本地化 "),t("code",[s._v("create")]),s._v(" 和 "),t("code",[s._v("edit")]),s._v(" 行为动作名，你可以在"),t("code",[s._v("AppServiceProvider")]),s._v("的 "),t("code",[s._v("boot")]),s._v(" 方法中使用 "),t("code",[s._v("Route::resourceVerbs")]),s._v(" 方法实现 ：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("use Illuminate\\Support\\Facades\\Route;\n\n/**\n * Bootstrap any application services.\n *\n * @return void\n */\npublic function boot()\n{\n    Route::resourceVerbs([\n        'create' => 'crear',\n        'edit' => 'editar',\n    ]);\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("一旦动作被自定义后，像 "),t("code",[s._v("Route::resource('fotos', 'PhotoController')")]),s._v(" 这样注册的资源路由将会产生如下的 URI：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("/fotos/crear\n\n/fotos/{foto}/editar\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"补充资源控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充资源控制器"}},[s._v("#")]),s._v(" 补充资源控制器")]),s._v(" "),t("p",[s._v("如果你想为一个资源控制器在默认的资源路由之外增加额外的路由，你应该在调用"),t("code",[s._v("Route::resource")]),s._v("之前定义这些路由。否则由 "),t("code",[s._v("resource")]),s._v(" 方法定义的路由可能会无意中优先于你补充的路由：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::get('photos/popular', 'PhotoController@method');\n\nRoute::resource('photos', 'PhotoController');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("blockquote",[t("p",[s._v("记住保持控制器的专一性。如果你发现需要典型的资源操作之外的方法，可以考虑将你的控制器分成两个更小的控制器.")])]),s._v(" "),t("h3",{attrs:{id:"依赖注入-控制器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入-控制器"}},[s._v("#")]),s._v(" 依赖注入 & 控制器")]),s._v(" "),t("h4",{attrs:{id:"构造函数注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数注入"}},[s._v("#")]),s._v(" 构造函数注入")]),s._v(" "),t("p",[s._v("Laravel 使用 服务容器 来解析所有的控制器。因此，你可以在控制器的构造函数中使用类型提示需要的依赖项，而声明的依赖项会自动解析并注入控制器实例中：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Repositories\\UserRepository;\n\nclass UserController extends Controller\n{\n    /**\n     * 用户 repository 实例。\n     */\n    protected $users;\n\n    /**\n     * 创建一个新的控制器实例。\n     *\n     * @param  UserRepository  $users\n     * @return void\n     */\n    public function __construct(UserRepository $users)\n    {\n        $this->users = $users;\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h4",{attrs:{id:"方法注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法注入"}},[s._v("#")]),s._v(" 方法注入")]),s._v(" "),t("p",[s._v("除了构造函数注入之外，你还可以在控制器方法中类型提示依赖项。 最常见的用法就是将 "),t("code",[s._v("Illuminate\\Http\\Request")]),s._v("实例注入到控制器方法中：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass UserController extends Controller\n{\n    /**\n     * 保存一个新用户\n     *\n     * @param  Request  $request\n     * @return Response\n     */\n    public function store(Request $request)\n    {\n        $name = $request->name;\n\n        //\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("如果你的控制器方法还需要从路由参数中获取输入内容，只需要在其他依赖项后列出路由参数即可。比如，如果你的路由是这样定义的：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Route::put('user/{id}', 'UserController@update');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你还可以类型提示 "),t("code",[s._v("Illuminate\\Http\\Request")]),s._v(" 并通过定义控制器方法获取 "),t("code",[s._v("id")]),s._v(" 参数，如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n\nnamespace App\\Http\\Controllers;\n\nuse Illuminate\\Http\\Request;\n\nclass UserController extends Controller\n{\n    /**\n     * 更新给定用户的信息。\n     *\n     * @param  Request  $request\n     * @param  string  $id\n     * @return Response\n     */\n    public function update(Request $request, $id)\n    {\n        //\n    }\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h3",{attrs:{id:"路由缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由缓存"}},[s._v("#")]),s._v(" 路由缓存")]),s._v(" "),t("blockquote",[t("p",[s._v("基于闭包的路由不能被缓存。如果要使用路由缓存，你必须将所有的闭包路由转换成控制器类路由。")])]),s._v(" "),t("p",[s._v("如果你的应用只使用了基于控制器的路由，那么你应该充分利用 "),t("code",[s._v("Laravel")]),s._v(" 的路由缓存的优势。使用路由缓存将极大地减少注册所有应用路由所需的时间。某些情况下，路由注册的速度甚至可以快一百倍。要生成路由缓存，只需执行 "),t("code",[s._v("Artisan")]),s._v(" 命令 "),t("code",[s._v("route:cache")]),s._v(" ：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php artisan route:cache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行这个命令之后，每一次请求的时候都将会加载缓存的路由文件。如果你添加了新的路由，记得你需要生成一个新的路由缓存。因此，你应该只在生产环境运行 "),t("code",[s._v("route:cache")]),s._v("命令：")]),s._v(" "),t("p",[s._v("你可以使用 "),t("code",[s._v("route:clear")]),s._v(" 命令清除路由缓存：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("php artisan route:clear\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);