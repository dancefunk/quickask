import{_ as e,o as i,c as d,a as n}from"./app-6325e707.js";const s={},t=n(`<h3 id="定义控制器" tabindex="-1"><a class="header-anchor" href="#定义控制器" aria-hidden="true">#</a> 定义控制器</h3><p>下面是一个基础控制器类的例子。需要注意的是，该控制器继承了一个Laravel内置的基础控制器类。该基础控制器提供了一些编辑的方法，比如 <code>middleware</code> 方法，该方法可以为控制器行为添加中间件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\User;
use App\\Http\\Controllers\\Controller;

class UserController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; User::findOrFail($id)]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以这样定义一个指向控制器行为的路由:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/{id}&#39;, &#39;UserController@show&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>现在, 当一个请求与此指定的路由的URI匹配时， <code>UserController</code>类的<code>show</code>方法就会被执行。当然，路由参数也会传递至该方法。</p><blockquote><p>控制器并不是强制要求 继承基础类。但是，如果控制器没有继承基础类，你将无法使用一些便捷的功能，比如<code>middleware, validate和 dispatch</code> 。</p></blockquote><h3 id="控制器和命名空间" tabindex="-1"><a class="header-anchor" href="#控制器和命名空间" aria-hidden="true">#</a> 控制器和命名空间</h3><p>需要注意的是，在定义控制器路由时，我们不需要指定完整的控制器命名空间。因为 <code>RouteServiceProvider</code> 会在一个包含命名空间的路由器组中加载路由文件，所以我们只需指定类名中 <code>App\\Http\\Controllers</code> 命名空间之后的部分就可以了。</p><p>如果你选择将控制器存放在 <code>App\\Http\\Controllers</code> 目录下，只需要简单的使用相对于 <code>App\\Http\\Controllers</code> 根命名空间的特定类名。 也就是说，如果完整的控制器类是 <code>App\\Http\\Controllers\\Photos\\AdminController</code>，那你应该用以下这种方式向控制器注册路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;foo&#39;, &#39;Photos\\AdminController@method&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="单个行为控制器" tabindex="-1"><a class="header-anchor" href="#单个行为控制器" aria-hidden="true">#</a> 单个行为控制器</h3><p>如果你想定义一个只处理单个行为的控制器，你可以在这个控制器中放置一个 <code>__invoke</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\User;
use App\\Http\\Controllers\\Controller;

class ShowProfile extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return Response
     */
    public function __invoke($id)
    {
        return view(&#39;user.profile&#39;, [&#39;user&#39; =&gt; User::findOrFail($id)]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册单个行为控制器的路由时，不需要指定方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;user/{id}&#39;, &#39;ShowProfile&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="控制器中间件" tabindex="-1"><a class="header-anchor" href="#控制器中间件" aria-hidden="true">#</a> 控制器中间件</h3><p>Middleware 可以在路由文件中被分配给控制器路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;profile&#39;, &#39;UserController@show&#39;)-&gt;middleware(&#39;auth&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，在控制器的构造方法中指定中间件会更方便。使用控制器构造函数中的 <code>middleware</code> 方法， 你可以很容易地将中间件分配给控制器的行为。你甚至可以约束中间件只对控制器类中的某些特定方法生效：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class UserController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this-&gt;middleware(&#39;auth&#39;);

        $this-&gt;middleware(&#39;log&#39;)-&gt;only(&#39;index&#39;);

        $this-&gt;middleware(&#39;subscribed&#39;)-&gt;except(&#39;store&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还能使用闭包来为控制器注册中间件。闭包的方便之处在于，你无需特地创建一个中间件类来为某一个特殊的控制器注册中间件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$this-&gt;middleware(function ($request, $next) {
    // ...

    return $next($request);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>你可以将中间件分配给控制器的部分行为上；然而这样可能意味着你的控制器正在变得很大。这里建议你将控制器分成多个更小的控制器。</p></blockquote><h3 id="资源控制器" tabindex="-1"><a class="header-anchor" href="#资源控制器" aria-hidden="true">#</a> 资源控制器</h3><p>Laravel 资源路由将典型的「CRUD」路由分配给具有单行代码的控制器。比如，你希望创建一个控制器来处理应用保存的「照片」的所有 HTTP 请求。使用Artisan命令 <code>make:controller</code> ，我们可以快速创建这样一个控制器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:controller PhotoController --resource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会生成一个控制器 <code>app/Http/Controllers/PhotoController.php</code> 。其中包含了每个可用资源的操作方法。</p><p>接下来，你可以给控制器注册一个资源路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::resource(&#39;photos&#39;, &#39;PhotoController&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个单一路由声明创建多个路由来处理资源上的各种行为。生成的控制器为每个行为保留了方法，包括了关于处理 HTTP 动作和 URIs 的声明注释。</p><p>你可以通过将一个数组传入到<code>resources</code>方法中的方式来一次性的创建多个资源控制器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::resources([
    &#39;photos&#39; =&gt; &#39;PhotoController&#39;,
    &#39;posts&#39; =&gt; &#39;PostController&#39;
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="资源控制器操作处理" tabindex="-1"><a class="header-anchor" href="#资源控制器操作处理" aria-hidden="true">#</a> 资源控制器操作处理</h3><table><thead><tr><th style="text-align:left;">动作</th><th style="text-align:left;">URI</th><th style="text-align:left;">行为</th><th style="text-align:left;">路由名称</th></tr></thead><tbody><tr><td style="text-align:left;">GET</td><td style="text-align:left;">/photos</td><td style="text-align:left;">index</td><td style="text-align:left;">photos.index</td></tr><tr><td style="text-align:left;">GET</td><td style="text-align:left;">/photos/create</td><td style="text-align:left;">create</td><td style="text-align:left;">photos.create</td></tr><tr><td style="text-align:left;">POST</td><td style="text-align:left;">/photos</td><td style="text-align:left;">store</td><td style="text-align:left;">photos.store</td></tr><tr><td style="text-align:left;">GET</td><td style="text-align:left;">/photos/{photo}</td><td style="text-align:left;">show</td><td style="text-align:left;">photos.show</td></tr><tr><td style="text-align:left;">GET</td><td style="text-align:left;">/photos/{photo}/edit</td><td style="text-align:left;">edit</td><td style="text-align:left;">photos.edit</td></tr><tr><td style="text-align:left;">PUT/PATCH</td><td style="text-align:left;">/photos/{photo}</td><td style="text-align:left;">update</td><td style="text-align:left;">photos.update</td></tr><tr><td style="text-align:left;">DELETE</td><td style="text-align:left;">/photos/{photo}</td><td style="text-align:left;">destroy</td><td style="text-align:left;">photos.destroy</td></tr></tbody></table><h3 id="指定资源模型" tabindex="-1"><a class="header-anchor" href="#指定资源模型" aria-hidden="true">#</a> 指定资源模型</h3><p>如果你使用了路由模型绑定，并且想在资源控制器的方法中使用类型提示，你可以在生成控制器的时候使用<code>--model</code> 选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:controller PhotoController --resource --model=Photo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="伪造表单方法" tabindex="-1"><a class="header-anchor" href="#伪造表单方法" aria-hidden="true">#</a> 伪造表单方法</h3><p>因为 HTML 表单不能生成<code>PUT，PATCH</code>和 <code>DELETE</code> 请求，所以你需要添加一个隐藏的<code>_method</code> 字段来伪造这些 <code>HTTP</code> 动作。 这个<code>Blade</code>指令 <code>@method</code> 可以为你创建这个字段：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;form action=&quot;/foo/bar&quot; method=&quot;POST&quot;&gt;
    @method(&#39;PUT&#39;)
&lt;/form&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部分资源路由" tabindex="-1"><a class="header-anchor" href="#部分资源路由" aria-hidden="true">#</a> 部分资源路由</h3><p>声明资源路由时，你可以指定控制器应该处理的部分行为，而不是所有默认的行为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::resource(&#39;photos&#39;, &#39;PhotoController&#39;, [&#39;only&#39; =&gt; [
    &#39;index&#39;, &#39;show&#39;
]]);

Route::resource(&#39;photos&#39;, &#39;PhotoController&#39;, [&#39;except&#39; =&gt; [
    &#39;create&#39;, &#39;store&#39;, &#39;update&#39;, &#39;destroy&#39;
]]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api-资源路由" tabindex="-1"><a class="header-anchor" href="#api-资源路由" aria-hidden="true">#</a> API 资源路由</h3><p>当声明用于 <code>APIs</code> 的资源路由时，通常需要排除显示 <code>HTML</code> 模板的路由， 如 <code>create</code> 和 <code>edit</code>。 为了方便起见，你可以使用 <code>apiResource</code> 方法自动排除这两个路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::apiResource(&#39;photos&#39;, &#39;PhotoController&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你可以通过传递一个数组给 <code>apiResources</code> 方法的方式来一次性注册多个API资源控制器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::apiResources([
    &#39;photos&#39; =&gt; &#39;PhotoController&#39;,
    &#39;posts&#39; =&gt; &#39;PostController&#39;
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了快速生成一个不包含<code>create</code> 和 <code>edit</code>方法的API资源控制器，可以在执行 <code>make:controller</code>命令时加上 <code>--api</code>选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:controller API/PhotoController --api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="命名资源路由" tabindex="-1"><a class="header-anchor" href="#命名资源路由" aria-hidden="true">#</a> 命名资源路由</h3><p>默认情况下，所有的资源控制器行为都有一个路由名称。 但是，你可以传入一个 <code>names</code> 数组来覆盖这些名称：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::resource(&#39;photos&#39;, &#39;PhotoController&#39;, [&#39;names&#39; =&gt; [
    &#39;create&#39; =&gt; &#39;photos.build&#39;
]]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命名资源路由参数" tabindex="-1"><a class="header-anchor" href="#命名资源路由参数" aria-hidden="true">#</a> 命名资源路由参数</h3><p>默认情况下， <code>Route::resource</code> 会根据资源名称的「单数」形式创建资源路由的路由参数。 你可以在选项数组中传入 <code>parameters</code>参数来轻松地覆盖每个资源。 <code>parameters</code> 数组应当是一个资源名称和参数名称的关联数组：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::resource(&#39;user&#39;, &#39;AdminUserController&#39;, [&#39;parameters&#39; =&gt; [
    &#39;user&#39; =&gt; &#39;admin_user&#39;
]]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例将会为资源的 <code>show</code> 路由生成如下的 URI ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/user/{admin_user}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="本地化资源-uris" tabindex="-1"><a class="header-anchor" href="#本地化资源-uris" aria-hidden="true">#</a> 本地化资源 URIs</h3><p>默认情况下，<code>Route::resource</code> 将会使用英文动词来创建资源 <code>URI</code>。如果你需要本地化 <code>create</code> 和 <code>edit</code> 行为动作名，你可以在<code>AppServiceProvider</code>的 <code>boot</code> 方法中使用 <code>Route::resourceVerbs</code> 方法实现 ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use Illuminate\\Support\\Facades\\Route;

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    Route::resourceVerbs([
        &#39;create&#39; =&gt; &#39;crear&#39;,
        &#39;edit&#39; =&gt; &#39;editar&#39;,
    ]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦动作被自定义后，像 <code>Route::resource(&#39;fotos&#39;, &#39;PhotoController&#39;)</code> 这样注册的资源路由将会产生如下的 URI：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/fotos/crear

/fotos/{foto}/editar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="补充资源控制器" tabindex="-1"><a class="header-anchor" href="#补充资源控制器" aria-hidden="true">#</a> 补充资源控制器</h3><p>如果你想为一个资源控制器在默认的资源路由之外增加额外的路由，你应该在调用<code>Route::resource</code>之前定义这些路由。否则由 <code>resource</code> 方法定义的路由可能会无意中优先于你补充的路由：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;photos/popular&#39;, &#39;PhotoController@method&#39;);

Route::resource(&#39;photos&#39;, &#39;PhotoController&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>记住保持控制器的专一性。如果你发现需要典型的资源操作之外的方法，可以考虑将你的控制器分成两个更小的控制器.</p></blockquote><h3 id="依赖注入-控制器" tabindex="-1"><a class="header-anchor" href="#依赖注入-控制器" aria-hidden="true">#</a> 依赖注入 &amp; 控制器</h3><h4 id="构造函数注入" tabindex="-1"><a class="header-anchor" href="#构造函数注入" aria-hidden="true">#</a> 构造函数注入</h4><p>Laravel 使用 服务容器 来解析所有的控制器。因此，你可以在控制器的构造函数中使用类型提示需要的依赖项，而声明的依赖项会自动解析并注入控制器实例中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use App\\Repositories\\UserRepository;

class UserController extends Controller
{
    /**
     * 用户 repository 实例。
     */
    protected $users;

    /**
     * 创建一个新的控制器实例。
     *
     * @param  UserRepository  $users
     * @return void
     */
    public function __construct(UserRepository $users)
    {
        $this-&gt;users = $users;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法注入" tabindex="-1"><a class="header-anchor" href="#方法注入" aria-hidden="true">#</a> 方法注入</h4><p>除了构造函数注入之外，你还可以在控制器方法中类型提示依赖项。 最常见的用法就是将 <code>Illuminate\\Http\\Request</code>实例注入到控制器方法中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * 保存一个新用户
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $name = $request-&gt;name;

        //
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的控制器方法还需要从路由参数中获取输入内容，只需要在其他依赖项后列出路由参数即可。比如，如果你的路由是这样定义的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::put(&#39;user/{id}&#39;, &#39;UserController@update&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还可以类型提示 <code>Illuminate\\Http\\Request</code> 并通过定义控制器方法获取 <code>id</code> 参数，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;

class UserController extends Controller
{
    /**
     * 更新给定用户的信息。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由缓存" tabindex="-1"><a class="header-anchor" href="#路由缓存" aria-hidden="true">#</a> 路由缓存</h3><blockquote><p>基于闭包的路由不能被缓存。如果要使用路由缓存，你必须将所有的闭包路由转换成控制器类路由。</p></blockquote><p>如果你的应用只使用了基于控制器的路由，那么你应该充分利用 <code>Laravel</code> 的路由缓存的优势。使用路由缓存将极大地减少注册所有应用路由所需的时间。某些情况下，路由注册的速度甚至可以快一百倍。要生成路由缓存，只需执行 <code>Artisan</code> 命令 <code>route:cache</code> ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan route:cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行这个命令之后，每一次请求的时候都将会加载缓存的路由文件。如果你添加了新的路由，记得你需要生成一个新的路由缓存。因此，你应该只在生产环境运行 <code>route:cache</code>命令：</p><p>你可以使用 <code>route:clear</code> 命令清除路由缓存：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan route:clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,86),l=[t];function a(r,o){return i(),d("div",null,l)}const v=e(s,[["render",a],["__file","04.html.vue"]]);export{v as default};
