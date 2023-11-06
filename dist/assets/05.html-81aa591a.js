import{_ as e,o as d,c as i,a as n}from"./app-02c5a260.js";const a={},s=n(`<h3 id="获取请求" tabindex="-1"><a class="header-anchor" href="#获取请求" aria-hidden="true">#</a> 获取请求</h3><p>要通过依赖注入的方式来获取当前 HTTP 请求的实例，你应该在控制器方法中引入 <code>Illuminate\\Http\\Request</code> 类。传入的请求实例将通过 服务容器 自动注入:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * 存储一个新的用户。
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $name = $request-&gt;input(&#39;name&#39;);

        //
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖注入-路由参数" tabindex="-1"><a class="header-anchor" href="#依赖注入-路由参数" aria-hidden="true">#</a> 依赖注入 &amp; 路由参数</h3><p>如果控制器方法要从路由参数中获取数据，则应在其他依赖项之后列出路由参数。例如，如果你的路由是这样定义的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::put(&#39;user/{id}&#39;, &#39;UserController@update&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下所示使用提示类 <code>Illuminate\\Http\\Request</code> ，就可以在控制器方法中获得路由参数 <code>id</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * 更新某个用户
     *
     * @param  Request  $request
     * @param  string  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通过路由闭包获取请求" tabindex="-1"><a class="header-anchor" href="#通过路由闭包获取请求" aria-hidden="true">#</a> 通过路由闭包获取请求</h3><p>你也同样可以在路由闭包中使用 <code>Illuminate\\Http\\Request</code> 类. 程序在执行的时候，服务容器会自动的将请求注入到路由闭包中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Illuminate\\Http\\Request;

Route::get(&#39;/&#39;, function (Request $request) {
    //
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求路径-方法" tabindex="-1"><a class="header-anchor" href="#请求路径-方法" aria-hidden="true">#</a> 请求路径 &amp; 方法</h3><p><code>Illuminate\\Http\\Request</code> 实例为你的应用程序提供了一系列方法检查路由，并且继承了 <code>Symfony\\Component\\HttpFoundation\\Request</code> 类。 以下是该类的一些重要用法：</p><h3 id="获取请求路径" tabindex="-1"><a class="header-anchor" href="#获取请求路径" aria-hidden="true">#</a> 获取请求路径</h3><p><code>path</code> 方法返回请求的路径信息。也就是说，如果传入的请求的目标地址是 <code>http://domain.com/foo/bar</code>，那么 <code>path</code> 将会返回 <code>foo/bar</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$uri = $request-&gt;path();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>is</code> 方法可以验证传入的请求路径和指定规则是否匹配。使用这个方法的时，你也可以传递一个 <code>*</code> 字符作为通配符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;is(&#39;admin/*&#39;)) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取请求的-url" tabindex="-1"><a class="header-anchor" href="#获取请求的-url" aria-hidden="true">#</a> 获取请求的 URL</h3><p>你可以使用 <code>url</code> 或 <code>fullUrl</code> 方法去获取传入请求的完整 <code>URL</code>。<code>url</code> 方法返回不带有查询字符串的 <code>URL</code>，而 <code>fullUrl</code> 方法的返回值包含查询字符串：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 没有查询字符串...
$url = $request-&gt;url();

// 使用查询字符串...
$url = $request-&gt;fullUrl();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取请求方法" tabindex="-1"><a class="header-anchor" href="#获取请求方法" aria-hidden="true">#</a> 获取请求方法</h3><p>对于传入的请求 <code>method</code> 方法将返回 <code>HTTP</code> 的请求方式。你也可以使用 <code>isMethod</code> 方法去验证 <code>HTTP</code> 的请求方式与指定规则是否相配：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$method = $request-&gt;method();

if ($request-&gt;isMethod(&#39;post&#39;)) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取输入" tabindex="-1"><a class="header-anchor" href="#获取输入" aria-hidden="true">#</a> 获取输入</h3><h3 id="获取所有输入数据" tabindex="-1"><a class="header-anchor" href="#获取所有输入数据" aria-hidden="true">#</a> 获取所有输入数据</h3><p>你可以使用 <code>all</code> 方法以 <code>array</code> 形式获取到所有输入数据:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$input = $request-&gt;all();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取指定输入值" tabindex="-1"><a class="header-anchor" href="#获取指定输入值" aria-hidden="true">#</a> 获取指定输入值</h3><p>使用几种简单的方法（不需要特别指定哪个 HTTP 动作），就可以访问 <code>Illuminate\\Http\\Request</code> 实例中所有的用户输入。也就是说无论是什么样的 HTTP 动作，<code>input</code> 方法都可以被用来获取用户输入数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;name&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以给 <code>input</code> 方法的第二个参数传入一个默认值。如果请求的输入值不存在请求上，就返回默认值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;name&#39;, &#39;Sally&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果传输表单数据中包含「数组」形式的数据，那么可以使用「点」式语法来获取数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;products.0.name&#39;);

$names = $request-&gt;input(&#39;products.*.name&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从查询字符串获取输入" tabindex="-1"><a class="header-anchor" href="#从查询字符串获取输入" aria-hidden="true">#</a> 从查询字符串获取输入</h3><p>使用 <code>input</code> 方法可以从整个请求中获取输入数据（包括查询字符串），而 <code>query</code> 方法可以只从查询字符串中获取输入数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;query(&#39;name&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果请求的查询字符串数据不存在，则将返回这个方法的第二个参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;query(&#39;name&#39;, &#39;Helen&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以不提供参数调用 <code>query</code> 方法来以关联数组的形式检索所有查询字符串值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$query = $request-&gt;query();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="通过动态属性获取输入" tabindex="-1"><a class="header-anchor" href="#通过动态属性获取输入" aria-hidden="true">#</a> 通过动态属性获取输入</h3><p>你也可以通过 <code>Illuminate\\Http\\Request</code> 实例的动态属性来获取用户输入。例如，如果你应用的表单中包含 <code>name</code>字段，那么可以像这样访问该字段的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Laravel 在处理动态属性的优先级是，先在请求的数据中查找，如果没有，再到路由参数中查找。</p><h3 id="获取-json-输入信息" tabindex="-1"><a class="header-anchor" href="#获取-json-输入信息" aria-hidden="true">#</a> 获取 JSON 输入信息</h3><p>如果发送到应用程序的请求数据是 JSON，只要请求的 <code>Content-Type</code> 标头正确设置为 <code>application/json</code>，就可以通过 <code>input</code> 方法访问 <code>JSON</code> 数据。你甚至可以使用 「点」式语法来读取 <code>JSON</code> 数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$name = $request-&gt;input(&#39;user.name&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取部分输入数据" tabindex="-1"><a class="header-anchor" href="#获取部分输入数据" aria-hidden="true">#</a> 获取部分输入数据</h3><p>如果你需要获取输入数据的子集，则可以用 <code>only</code> 和 <code>except</code> 方法。这两个方法都接收 <code>array</code> 或动态列表作为参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$input = $request-&gt;only([&#39;username&#39;, &#39;password&#39;]);

$input = $request-&gt;only(&#39;username&#39;, &#39;password&#39;);

$input = $request-&gt;except([&#39;credit_card&#39;]);

$input = $request-&gt;except(&#39;credit_card&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>only</code> 方法会返回所有你指定的键值对，但不会返回请求中不存在的键值对。</p></blockquote><h3 id="确定是否存在输入值" tabindex="-1"><a class="header-anchor" href="#确定是否存在输入值" aria-hidden="true">#</a> 确定是否存在输入值</h3><p>要判断请求是否存在某个值，可以使用 <code>has</code> 方法。如果请求中存在该值，<code>has</code> 方法就会返回 <code>true</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;has(&#39;name&#39;)) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当提供一个数组作为参数时，<code>has</code> 方法将确定是否存在数组中所有给定的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;has([&#39;name&#39;, &#39;email&#39;])) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想确定请求中是否存在值并且不为空，可以使用 <code>filled</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;filled(&#39;name&#39;)) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><h3 id="从请求中获取-cookie" tabindex="-1"><a class="header-anchor" href="#从请求中获取-cookie" aria-hidden="true">#</a> 从请求中获取 Cookie</h3><p><code>Laravel</code> 框架创建的每个 <code>cookie</code> 都会被加密并使用验证码进行签名，这意味着如果客户端更改了它们，便视为无效。若要从请求中获取 <code>cookie</code> 值，你可以在 <code>Illuminate\\Http\\Request</code> 实例上使用 <code>cookie</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$value = $request-&gt;cookie(&#39;name&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者，您可以使用 <code>Cookie Facade</code> 来访问 <code>cookie</code> 的值：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$value = Cookie::get(&#39;name&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件" tabindex="-1"><a class="header-anchor" href="#文件" aria-hidden="true">#</a> 文件</h3><h3 id="获取上传文件" tabindex="-1"><a class="header-anchor" href="#获取上传文件" aria-hidden="true">#</a> 获取上传文件</h3><p>你可以使用 <code>file</code> 方法或使用动态属性从 <code>Illuminate\\Http\\Request</code> 实例中访问上传的文件。该 <code>file</code> 方法返回一个 <code>Illuminate\\Http\\UploadedFile</code> 类的实例，该类继承了 <code>PHP</code> 的 <code>SplFileInfo</code> 类的同时也提供了各种与文件交互的方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$file = $request-&gt;file(&#39;photo&#39;);

$file = $request-&gt;photo;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用 <code>hasFile</code> 方法确认请求中是否存在文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;hasFile(&#39;photo&#39;)) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证成功上传" tabindex="-1"><a class="header-anchor" href="#验证成功上传" aria-hidden="true">#</a> 验证成功上传</h3><p>除了检查上传的文件是否存在外，你也可以通过 <code>isValid</code> 方法验证上传的文件是否有效：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request-&gt;file(&#39;photo&#39;)-&gt;isValid()) {
    //
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件路径-扩展名" tabindex="-1"><a class="header-anchor" href="#文件路径-扩展名" aria-hidden="true">#</a> 文件路径 &amp; 扩展名</h3><p><code>UploadedFile</code> 类还包含访问文件的完整路径及其扩展名方法。<code>extension</code> 方法会根据文件内容判断文件的扩展名。该扩展名可能会和客户端提供的扩展名不同：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$path = $request-&gt;photo-&gt;path();

$extension = $request-&gt;photo-&gt;extension();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="响应对象" tabindex="-1"><a class="header-anchor" href="#响应对象" aria-hidden="true">#</a> 响应对象</h1><h3 id="返回字符串或者数组" tabindex="-1"><a class="header-anchor" href="#返回字符串或者数组" aria-hidden="true">#</a> 返回字符串或者数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;/&#39;, function () {
    return &#39;Hello World&#39;;
});


Route::get(&#39;/&#39;, function () {
    return [1, 2, 3];
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应对象-1" tabindex="-1"><a class="header-anchor" href="#响应对象-1" aria-hidden="true">#</a> 响应对象</h3><p>一般来说，你不会只从路由行为返回简单的字符串或数组。你也许会返回完整的 <code>Illuminate\\Http\\Response</code> 实例或视图</p><p>返回完整的 <code>Response</code> 实例允许你自定义响应的 <code>HTTP</code> 状态码和响应头信息。<code>Response</code> 实例继承自 <code>Symfony\\Component\\HttpFoundation\\Response</code> 类，该类提供了各种构建 <code>HTTP</code> 响应的方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;home&#39;, function () {
    return response(&#39;Hello World&#39;, 200)
                  -&gt;header(&#39;Content-Type&#39;, &#39;text/plain&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为响应增加头信息" tabindex="-1"><a class="header-anchor" href="#为响应增加头信息" aria-hidden="true">#</a> 为响应增加头信息</h3><p>大部分的响应方法都是可链式调用的，使得创建响应实例的过程更具可读性。例如，你可以在响应返回给用户前使用 <code>header</code> 方法为其添加一系列的头信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return response($content)
    -&gt;header(&#39;Content-Type&#39;, $type)
    -&gt;header(&#39;X-Header-One&#39;, &#39;Header Value&#39;)
    -&gt;header(&#39;X-Header-Two&#39;, &#39;Header Value&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，你可以使用 <code>withHeaders</code> 方法来指定要添加到响应的头信息数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return response($content)
    -&gt;withHeaders([
        &#39;Content-Type&#39; =&gt; $type,
        &#39;X-Header-One&#39; =&gt; &#39;Header Value&#39;,
        &#39;X-Header-Two&#39; =&gt; &#39;Header Value&#39;,
    ]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为响应增加-cookie" tabindex="-1"><a class="header-anchor" href="#为响应增加-cookie" aria-hidden="true">#</a> 为响应增加 Cookie</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return response($content)
    -&gt;header(&#39;Content-Type&#39;, $type)
    -&gt;cookie(&#39;name&#39;, &#39;value&#39;, $minutes);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h3><p>重定向响应是 <code>Illuminate\\Http\\RedirectResponse</code> 类的实例，并且包含用户需要重定向至另一个 <code>URL</code> 所需的头信息。<code>Laravel</code> 提供了几种方法用于生成 <code>RedirectResponse</code> 实例。其中最简单的方法是使用全局辅助函数 <code>redirect</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;dashboard&#39;, function () {
    return redirect(&#39;home/dashboard&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候你可能希望将用户重定向到之前的位置，比如提交的表单无效时。这时你可以使用全局辅助函数 <code>back</code> 来执行此操作。由于这个功能利用了 <code>Session</code>，请确保调用 <code>back</code> 函数的路由使用 <code>web</code> 中间件组或所有 <code>Session</code> 中间件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::post(&#39;user/profile&#39;, function () {
    // Validate the request...

    return back()-&gt;withInput();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向至命名路由" tabindex="-1"><a class="header-anchor" href="#重定向至命名路由" aria-hidden="true">#</a> 重定向至命名路由</h3><p>当你不带参数调用辅助函数 <code>redirect</code> 时，会返回 <code>Illuminate\\Routing\\Redirector</code> 实例。这个实例允许你调用 <code>Redirector</code> 上的任何方法。例如为命名路由生成 <code>RedirectResponse</code>，可以使用 <code>route</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return redirect()-&gt;route(&#39;login&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你的路由有参数，你可以把它们作为 <code>route</code> 方法的第二个参数来传递：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 对于具有以下 URI 的路由: profile/{id}

return redirect()-&gt;route(&#39;profile&#39;, [&#39;id&#39; =&gt; 1]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向至控制器行为" tabindex="-1"><a class="header-anchor" href="#重定向至控制器行为" aria-hidden="true">#</a> 重定向至控制器行为</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return redirect()-&gt;action(&#39;HomeController@index&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你的控制器路由需要参数，你可以将它们作为第二个参数传递给 <code>action</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return redirect()-&gt;action(
    &#39;UserController@profile&#39;, [&#39;id&#39; =&gt; 1]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重定向到外部域" tabindex="-1"><a class="header-anchor" href="#重定向到外部域" aria-hidden="true">#</a> 重定向到外部域</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return redirect()-&gt;away(&#39;https://www.google.com&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,108),t=[s];function l(r,c){return d(),i("div",null,t)}const o=e(a,[["render",l],["__file","05.html.vue"]]);export{o as default};
