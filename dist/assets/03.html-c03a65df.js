import{_ as e,o as i,c as n,a as d}from"./app-4eb807d7.js";const s={},l=d(`<h3 id="中间层" tabindex="-1"><a class="header-anchor" href="#中间层" aria-hidden="true">#</a> 中间层</h3><p>Laravel 中间件提供了一种方便的机制来过滤进入应用的 HTTP 请求。例如，Laravel 内置了一个中间件来验证用户的身份认证。如果用户没有通过身份认证，中间件会将用户重定向到登录界面。但是，如果用户被认证，中间件将允许该请求进一步进入该应用。</p><p>当然，除了身份认证以外，还可以编写另外的中间件来执行各种任务。例如：CORS 中间件可以负责为所有离开应用的响应添加合适的头部信息；日志中间件可以记录所有传入应用的请求。</p><p>Laravel 自带了一些中间件，包括身份验证、CSRF 保护等。所有这些中间件都位于 <code>app/Http/Middleware</code> 目录。</p><h3 id="定义中间件" tabindex="-1"><a class="header-anchor" href="#定义中间件" aria-hidden="true">#</a> 定义中间件</h3><p>通过运行 <code>make:middleware Artisan</code> 命令来创建新的中间件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:middleware CheckAge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该命令将会在 <code>app/Http/Middleware</code> 目录下创建一个新的 <code>CheckAge</code>类，在这个中间件中，我们仅允许 <code>age</code> 参数大于 <code>200</code> 的请求对此路由进行访问，否则，我们将此用户重定向到 <code>home</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;

class CheckAge
{
    /**
     * 处理传入的请求
     *
     * @param  \\Illuminate\\Http\\Request  $request
     * @param  \\Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request-&gt;age &lt;= 200) {
            return redirect(&#39;home&#39;);
        }

        return $next($request);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如你所见，假如给定的 <code>age</code> 参数小于或等于 <code>200</code> ，这个中间件将返回一个HTTP重定向到客户端；否则，请求将进一步传递到应用中。要让请求继续传递到应用程序中（即允许「通过」中间件验证的），只需使用 <code>$request</code> 作为参数去调用回调函数 <code>$next</code> 。</p><p>最好将中间件想象为一系列 HTTP 请求必须经过才能进入你应用的「层」。每一层都会检查请求（是否符合某些条件），（如果不符合）甚至可以（在请求访问你的应用之前）完全拒绝掉。</p><h3 id="前置-后置中间件" tabindex="-1"><a class="header-anchor" href="#前置-后置中间件" aria-hidden="true">#</a> 前置 &amp; 后置中间件</h3><p>中间件是在请求之前或之后运行取决于中间件本身。例如, 接下来的这个中间件将在应用处理请求 之前 执行其任务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;

class BeforeMiddleware
{
    public function handle($request, Closure $next)
    {
        // Perform action

        return $next($request);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而接下来的这个中间件将在应用处理请求 之后 执行其任务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;

class AfterMiddleware
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // 执行操作

        return $response;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注册中间件" tabindex="-1"><a class="header-anchor" href="#注册中间件" aria-hidden="true">#</a> 注册中间件</h3><h4 id="全局中间件" tabindex="-1"><a class="header-anchor" href="#全局中间件" aria-hidden="true">#</a> 全局中间件</h4><p>假设你想让中间件在应用处理每个HTTP请求期间运行，只需要在 <code>app/Http/Kernel.php</code> 中的 <code>$middleware</code> 属性中列出这个中间件</p><h4 id="为路由分配中间件" tabindex="-1"><a class="header-anchor" href="#为路由分配中间件" aria-hidden="true">#</a> 为路由分配中间件</h4><p>假设你想为指定的路由分配中间件，首先应该在 <code>app/Http/Kernel.php</code> 文件内为该中间件分配一个 <code>键</code> 。默认情况下， <code>Kernel</code> 类的 <code>$routeMiddleware</code> 属性下包含了Laravel内置的中间件。若要加入自定义的中间件，只需把它附加到列表后并为其分配一个自定义 <code>键</code> 即可。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 在 App\\Http\\Kernel 类中

protected $routeMiddleware = [
    &#39;auth&#39; =&gt; \\Illuminate\\Auth\\Middleware\\Authenticate::class,
    &#39;auth.basic&#39; =&gt; \\Illuminate\\Auth\\Middleware\\AuthenticateWithBasicAuth::class,
    &#39;bindings&#39; =&gt; \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
    &#39;can&#39; =&gt; \\Illuminate\\Auth\\Middleware\\Authorize::class,
    &#39;guest&#39; =&gt; \\App\\Http\\Middleware\\RedirectIfAuthenticated::class,
    &#39;throttle&#39; =&gt; \\Illuminate\\Routing\\Middleware\\ThrottleRequests::class,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦在 <code>Kernel</code> 类中定义好了中间件，就可以通过 <code>middleware</code> 方法将为路由分配中间件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;admin/profile&#39;, function () {
    //
})-&gt;middleware(&#39;auth&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以为路由分配多个中间件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;/&#39;, function () {
    //
})-&gt;middleware(&#39;first&#39;, &#39;second&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分配中间件时，你还可以传递完整的类名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use App\\Http\\Middleware\\CheckAge;

Route::get(&#39;admin/profile&#39;, function () {
    //
})-&gt;middleware(CheckAge::class);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中间件组" tabindex="-1"><a class="header-anchor" href="#中间件组" aria-hidden="true">#</a> 中间件组</h3><p>某些时候你可能希望使用一个 key 把多个中间件打包成一个组，方便将他们应用到路由中。你可以使用 Http kernel 的 <code>$middlewareGroups</code> 属性。</p><p>Laravel 内置了 <code>web</code> 和 <code>api</code> 两个中间件组，它们包含了常用的中间件,你可能会想应用到 <code>web UI</code> 和 <code>API</code> 路由中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 应用程序的路由中间件组
 *
 * @var array
 */
protected $middlewareGroups = [
    &#39;web&#39; =&gt; [
        \\App\\Http\\Middleware\\EncryptCookies::class,
        \\Illuminate\\Cookie\\Middleware\\AddQueuedCookiesToResponse::class,
        \\Illuminate\\Session\\Middleware\\StartSession::class,
        \\Illuminate\\View\\Middleware\\ShareErrorsFromSession::class,
        \\App\\Http\\Middleware\\VerifyCsrfToken::class,
        \\Illuminate\\Routing\\Middleware\\SubstituteBindings::class,
    ],

    &#39;api&#39; =&gt; [
        &#39;throttle:60,1&#39;,
        &#39;auth:api&#39;,
    ],
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中间件组和单个中间件一样可以被应用到路由和控制器行为中。同时，中间组很方便得将多个中间件一次性应用到路由上：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;/&#39;, function () {
    //
})-&gt;middleware(&#39;web&#39;);

Route::group([&#39;middleware&#39; =&gt; [&#39;web&#39;]], function () {
    //
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>RouteServiceProvider</code> 将 <code>web</code> 中间组自动应用到 <code>routes/web.php</code> 。</p><h3 id="中间件参数" tabindex="-1"><a class="header-anchor" href="#中间件参数" aria-hidden="true">#</a> 中间件参数</h3><p>中间件也可以接受额外的参数。举个例子，假如你的应用需要在执行特定操作之前验证用户是否为给定的 「角色」，你可以通过创建一个 <code>CheckRole</code> 中间件，由它来接收「角色」名称作为附加参数。</p><p>附加的中间件参数应该在 <code>$next</code> 参数之后被传递：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Middleware;

use Closure;

class CheckRole
{
    /**
     * 处理传入的参数
     *
     * @param  \\Illuminate\\Http\\Request  $request
     * @param  \\Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        if (! $request-&gt;user()-&gt;hasRole($role)) {
            // 重定向
        }

        return $next($request);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义路由时通过一个 <code>:</code> 来隔开中间件名称和参数来指定中间件参数。多个参数就使用逗号分隔：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::put(&#39;post/{id}&#39;, function ($id) {
    //
})-&gt;middleware(&#39;role:editor&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="terminable-中间件" tabindex="-1"><a class="header-anchor" href="#terminable-中间件" aria-hidden="true">#</a> Terminable 中间件</h3><p>有时中间件可能需要在 HTTP 响应发送到浏览器之后处理一些工作。比如，Laravel 内置的「session」中间件会在响应发送到浏览器之后将会话数据写入存储器中。如果你在中间件中定义一个 <code>terminate</code> 方法，则会在响应发送到浏览器后自动调用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace Illuminate\\Session\\Middleware;

use Closure;

class StartSession
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }

    public function terminate($request, $response)
    {
        // Store the session data...
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>terminate</code> 方法应该同时接收请求和响应。一旦定义了这个中间件，你应该将它添加到路由列表或 <code>app/Http/Kernel.php</code> 文件的全局中间件中。</p><p>在你的中间件上调用 <code>terminate</code> 调用时，Laravel 会从 服务容器 中解析出一个新的中间件实例。如果要在调用 <code>handle</code> 和 <code>terminate</code> 方法时使用同一个中间件实例，就使用容器的 <code>singleton</code> 方法向容器注册中间件。</p>`,46),a=[l];function r(c,v){return i(),n("div",null,a)}const u=e(s,[["render",r],["__file","03.html.vue"]]);export{u as default};
