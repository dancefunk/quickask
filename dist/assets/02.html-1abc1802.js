import{_ as e,o as i,c as d,a as n}from"./app-3e5ace64.js";const a={},s=n(`<h3 id="基本路由" tabindex="-1"><a class="header-anchor" href="#基本路由" aria-hidden="true">#</a> 基本路由</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;foo&#39;, function () {
    return &#39;Hello World&#39;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认路由文件" tabindex="-1"><a class="header-anchor" href="#默认路由文件" aria-hidden="true">#</a> 默认路由文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>routes/web.php	它提供了会话状态和 CSRF 保护等功能。
routes/api.php	他里面的路由都是无状态的，并且被分配了 api 中间件组。

大多数的应用构建，都是以在 routes/web.php 文件定义路由开始的。
可以通过在浏览器中输入定义的路由 URL 来访问 

例如，你可以在浏览器中输入 http://your-app.dev/user 来访问以下路由：
Route::get(&#39;/user&#39;, &#39;UserController@index&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可用的路由方法" tabindex="-1"><a class="header-anchor" href="#可用的路由方法" aria-hidden="true">#</a> 可用的路由方法</h3><p>路由器允许你注册能响应任何 HTTP 请求的路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有的时候你可能需要注册一个可响应多个 HTTP 请求的路由，这时你可以使用 match 方法，也可以使用 any 方法注册一个实现响应所有 HTTP 请求的路由</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::match([&#39;get&#39;, &#39;post&#39;], &#39;/&#39;, function () {
    //
});

Route::any(&#39;foo&#39;, function () {
    //
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csrf-保护" tabindex="-1"><a class="header-anchor" href="#csrf-保护" aria-hidden="true">#</a> CSRF 保护</h3><p>指向 web 路由文件中定义的 POST、PUT 或 DELETE 路由的任何 HTML 表单都应该包含一个 CSRF 令牌字段，否则，这个请求将会被拒绝。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form method=&quot;POST&quot; action=&quot;/profile&quot;&gt;
    @csrf
    ...
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向路由" tabindex="-1"><a class="header-anchor" href="#重定向路由" aria-hidden="true">#</a> 重定向路由</h3><p>如果要定义重定向到另一个 URI 的路由，可以使用 Route::redirect方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::redirect(&#39;/here&#39;, &#39;/there&#39;, 301);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="视图路由" tabindex="-1"><a class="header-anchor" href="#视图路由" aria-hidden="true">#</a> 视图路由</h3><p>如果你的路由只需要返回一个视图，可以使用 Route::view 方法。它和 redirect 一样方便，不需要定义完整的路由或控制器。</p><p><code>view</code> 方法有三个参数，其中前两个是必填参数，分别是 URI 和视图名称。第三个参数选填，可以传入一个数组，数组中的数据会被传递给视图:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::view(&#39;/welcome&#39;, &#39;welcome&#39;);

Route::view(&#39;/welcome&#39;, &#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;Taylor&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数" aria-hidden="true">#</a> 路由参数</h3><h3 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数" aria-hidden="true">#</a> 必填参数</h3><p>当然，有时需要在路由中捕获一些 URL 片段。例如，从 URL 中捕获用户的 ID，可以通过定义路由参数来执行此操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/{id}&#39;, function ($id) {
    return &#39;User &#39;.$id;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以根据需要在路由中定义多个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;posts/{post}/comments/{comment}&#39;, function ($postId, $commentId) {
    //
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由的参数通常都会被放在 <code>{}</code> 内，并且参数名只能为字母，同时路由参数不能包含 <code>-</code> 符号，如果需要可以用下划线 <code>(_)</code> 代替。路由参数会按顺序依次被注入到路由回调或者控制器中，而不受回调或者控制器的参数名称的影响。</p><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><p>有时，你可能需要指定一个路由参数，但你希望这个参数是可选的。你可以在参数后面加上 ? 标记来实现，但前提是要确保路由的相应变量有默认值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/{name?}&#39;, function ($name = null) {
    return $name;
});

Route::get(&#39;user/{name?}&#39;, function ($name = &#39;John&#39;) {
    return $name;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则表达式约束" tabindex="-1"><a class="header-anchor" href="#正则表达式约束" aria-hidden="true">#</a> 正则表达式约束</h3><p>你可以使用路由实例上的 <code>where</code> 方法约束路由参数的格式。<code>where</code> 方法接受参数名称和定义参数应如何约束的正则表达式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/{name}&#39;, function ($name) {
    //
})-&gt;where(&#39;name&#39;, &#39;[A-Za-z]+&#39;);

Route::get(&#39;user/{id}&#39;, function ($id) {
    //
})-&gt;where(&#39;id&#39;, &#39;[0-9]+&#39;);

Route::get(&#39;user/{id}/{name}&#39;, function ($id, $name) {
    //
})-&gt;where([&#39;id&#39; =&gt; &#39;[0-9]+&#39;, &#39;name&#39; =&gt; &#39;[a-z]+&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由命名" tabindex="-1"><a class="header-anchor" href="#路由命名" aria-hidden="true">#</a> 路由命名</h3><p>路由命名可以方便地为指定路由生成 <code>URL</code> 或者重定向。通过在路由定义上链式调用 <code>name</code> 方法可以指定路由名称：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/profile&#39;, function () {
    //
})-&gt;name(&#39;profile&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你还可以指定控制器行为的路由名称：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/profile&#39;, &#39;UserController@showProfile&#39;)-&gt;name(&#39;profile&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成指定路由的 <code>URL</code> 为路由指定了名称后，就可以使用全局辅助函数 <code>route</code> 来生成链接或者重定向到该路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 生成 URL...
$url = route(&#39;profile&#39;);

// 生成重定向...
return redirect()-&gt;route(&#39;profile&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是有定义参数的命名路由，可以把参数作为 <code>route</code> 函数的第二个参数传入，指定的参数将会自动插入到 <code>URL</code> 中对应的位置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/{id}/profile&#39;, function ($id) {
    //
})-&gt;name(&#39;profile&#39;);

$url = route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由组" tabindex="-1"><a class="header-anchor" href="#路由组" aria-hidden="true">#</a> 路由组</h3><p>路由组允许你在大量路由之间共享路由属性，例如中间件或命名空间，而不需要为每个路由单独定义这些属性。共享属性应该以数组的形式传入 <code>Route::group</code> 方法的第一个参数中。</p><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h3><p>要给路由组中所有的路由分配中间件，可以在 <code>group</code> 之前调用 <code>middleware</code> 方法，中间件会依照它们在数组中列出的顺序来运行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::middleware([&#39;first&#39;, &#39;second&#39;])-&gt;group(function () {
    Route::get(&#39;/&#39;, function () {
        // 使用 first 和 second 中间件
    });

    Route::get(&#39;user/profile&#39;, function () {
        // 使用 first 和 second 中间件
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3><p>另一个常见用例是使用 <code>namespace</code> 方法将相同的 <code>PHP</code> 命名空间分配给路由组的中所有的控制器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::namespace(&#39;Admin&#39;)-&gt;group(function () {
    // 在 &quot;App\\Http\\Controllers\\Admin&quot; 命名空间下的控制器
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请记住，默认情况下，<code>RouteServiceProvider</code> 会在命名空间组中引入你的路由文件，让你不用指定完整的 <code>App\\Http\\Controllers</code> 命名空间前缀就能注册控制器路由。因此，你只需要指定命名空间 <code>App\\Http\\Controllers</code>之后的部分。</p><h3 id="子域名路由" tabindex="-1"><a class="header-anchor" href="#子域名路由" aria-hidden="true">#</a> 子域名路由</h3><p>路由组也可以用来处理子域名。子域名可以像路由 URI 一样被分配路由参数，允许你获取一部分子域名作为参数给路由或控制器使用。可以在 <code>group</code> 之前调用 <code>domain</code> 方法来指定子域名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::domain(&#39;{account}.myapp.com&#39;)-&gt;group(function () {
    Route::get(&#39;user/{id}&#39;, function ($account, $id) {
        //
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由前缀" tabindex="-1"><a class="header-anchor" href="#路由前缀" aria-hidden="true">#</a> 路由前缀</h3><p>可以用 <code>prefix</code> 方法为路由组中给定的 URL 增加前缀。例如，你可以为组中所有路由的 URI 加上 <code>admin</code> 前缀：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::prefix(&#39;admin&#39;)-&gt;group(function () {
    Route::get(&#39;users&#39;, function () {
        // 匹配包含 &quot;/admin/users&quot; 的 URL
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由名称前缀" tabindex="-1"><a class="header-anchor" href="#路由名称前缀" aria-hidden="true">#</a> 路由名称前缀</h3><p><code>name</code> 方法可以用来给路由组中的每个路由名称添加一个给定的字符串。 例如，您可能希望以 「admin」为所有分组路由的名称加前缀。 给定的字符串与指定的路由名称前缀完全相同，因此我们将确保在前缀中提供尾部的 <code>.</code> 字符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::name(&#39;admin.&#39;)-&gt;group(function () {
    Route::get(&#39;users&#39;, function () {
        // 路由分配名称&quot;admin.users&quot;...
    })-&gt;name(&#39;users&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问控制" tabindex="-1"><a class="header-anchor" href="#访问控制" aria-hidden="true">#</a> 访问控制</h3><p><code>Laravel</code> 包含了一个 中间件 用于控制应用程序对路由的访问。如果想要使用，请将 <code>throttle</code> 中间件分配给一个路由或一个路由组。<code>throttle</code> 中间件会接收两个参数，这两个参数决定了在给定的分钟数内可以进行的最大请求数。 例如，让我们指定一个经过身份验证并且用户每分钟访问频率不超过 60 次的路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::middleware(&#39;auth:api&#39;, &#39;throttle:60,1&#39;)-&gt;group(function () {
    Route::get(&#39;/user&#39;, function () {
        //
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态访问控制" tabindex="-1"><a class="header-anchor" href="#动态访问控制" aria-hidden="true">#</a> 动态访问控制</h3><p>您可以根据已验证的 <code>User</code> 模型的属性指定动态请求的最大值。 例如，如果您的 <code>User</code> 模型包含<code>rate_limit</code>属性，则可以将属性名称传递给 <code>throttle</code> 中间件，以便它用于计算最大请求计数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::middleware(&#39;auth:api&#39;, &#39;throttle:rate_limit,1&#39;)-&gt;group(function () {
    Route::get(&#39;/user&#39;, function () {
        //
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="表单方法伪造" tabindex="-1"><a class="header-anchor" href="#表单方法伪造" aria-hidden="true">#</a> 表单方法伪造</h3><p>HTML 表单不支持 <code>PUT、PATCH</code> 或 <code>DELETE</code> 行为。所以当你要从 HTML 表单中调用定义了 <code>PUT、PATCH</code> 或 <code>DELETE</code> 路由时，你将需要在表单中增加隐藏的 <code>_method</code> 输入标签。使用 <code>_method</code> 字段的值作为 <code>HTTP</code> 的请求方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;/foo/bar&quot; method=&quot;POST&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;_method&quot; value=&quot;PUT&quot;&gt;
    &lt;input type=&quot;hidden&quot; name=&quot;_token&quot; value=&quot;{{ csrf_token() }}&quot;&gt;
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以使用 <code>@ method</code> Blade 指令生成 <code>_method</code> 输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;/foo/bar&quot; method=&quot;POST&quot;&gt;
    @method(&#39;PUT&#39;)
    @csrf
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问当前路由" tabindex="-1"><a class="header-anchor" href="#访问当前路由" aria-hidden="true">#</a> 访问当前路由</h3><p>你可以使用 Route Facade 上的 <code>current、currentRouteName</code> 和 <code>currentRouteAction</code> 方法来访问处理传入请求的路由的信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route = Route::current();

$name = Route::currentRouteName();

$action = Route::currentRouteAction();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73),t=[s];function r(l,c){return i(),d("div",null,t)}const o=e(a,[["render",r],["__file","02.html.vue"]]);export{o as default};
