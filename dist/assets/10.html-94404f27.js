import{_ as l,r as a,o as r,c as v,b as e,d as n,e as d,a as s}from"./app-3e5ace64.js";const t={},u=e("h3",{id:"内置的auth模块实现注册与登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内置的auth模块实现注册与登录","aria-hidden":"true"},"#"),n(" 内置的Auth模块实现注册与登录")],-1),c={href:"https://blog.csdn.net/zgb4687199/article/details/81878745",target:"_blank",rel:"noopener noreferrer"},o={href:"https://blog.csdn.net/wlzx120/article/details/77528162?locationNum=5&fps=1",target:"_blank",rel:"noopener noreferrer"},m={href:"https://laravelacademy.org/post/8900.html",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>基于后盾laravel–module组件化开发所作。 通过使用模块来管理大型Laravel项目，模块就像一个laravel包非常方便的进行添加或移除。<br> 这个包已经在 HDCMS 中使用。<br> 模块是在nwidart.com/laravel-modules 和 laravel-permission 组件基础上扩展了一些功能，所以需要先安装这两个组件。<br> laravel-modules 和 laravel-permission 组件的功能都可以正常使用</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require houdunwang/laravel-module

php artisan vendor:publish --provider=&quot;Nwidart\\Modules\\LaravelModulesServiceProvider&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-composer-json-设置自动加载目录" tabindex="-1"><a class="header-anchor" href="#配置-composer-json-设置自动加载目录" aria-hidden="true">#</a> 配置 composer.json 设置自动加载目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;autoload&quot;: {
    &quot;psr-4&quot;: {
      &quot;App\\\\&quot;: &quot;app/&quot;,
      &quot;Modules\\\\&quot;: &quot;Modules/&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建模块" tabindex="-1"><a class="header-anchor" href="#创建模块" aria-hidden="true">#</a> 创建模块</h3><blockquote><p>php artisan hd:module Admin</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建模块会同时执行以下操作： 
- 生成 menus.php 配置文件 
- 生成 permission.php 权限文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件说明" tabindex="-1"><a class="header-anchor" href="#文件说明" aria-hidden="true">#</a> 文件说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- config——基础配置，用于配置模块中文描述等信息 
- permission.php——权限设置 
- menus.php——后台管理菜单 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p={href:"https://packagist.org/packages/houdunwang/laravel-module",target:"_blank",rel:"noopener noreferrer"},g=s(`<h3 id="用户认证脚手架" tabindex="-1"><a class="header-anchor" href="#用户认证脚手架" aria-hidden="true">#</a> 用户认证脚手架</h3><p>Laravel 自带了用户认证功能，我们将利用此功能来快速构建我们的用户中心。</p><p>首先执行认证脚手架命令，生成代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加guard" tabindex="-1"><a class="header-anchor" href="#添加guard" aria-hidden="true">#</a> 添加guard</h3><p>打开<code>config\\auth.php</code>,这里用的模块化，后台新建<code>admins</code>表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

return [
    &#39;defaults&#39; =&gt; [
        &#39;guard&#39; =&gt; &#39;web&#39;,
        &#39;passwords&#39; =&gt; &#39;users&#39;,
    ],

    &#39;guards&#39; =&gt; [
        &#39;web&#39; =&gt; [
            &#39;driver&#39; =&gt; &#39;session&#39;,
            &#39;provider&#39; =&gt; &#39;users&#39;,
        ],
        &#39;admin&#39; =&gt; [
            &#39;driver&#39; =&gt; &#39;session&#39;,
            &#39;provider&#39; =&gt; &#39;admins&#39;,
        ],

        &#39;api&#39; =&gt; [
            &#39;driver&#39; =&gt; &#39;token&#39;,
            &#39;provider&#39; =&gt; &#39;users&#39;,
        ],
    ],


    &#39;providers&#39; =&gt; [
        &#39;users&#39; =&gt; [
            &#39;driver&#39; =&gt; &#39;eloquent&#39;,
            &#39;model&#39; =&gt; App\\User::class,
        ],

         &#39;admins&#39; =&gt; [
             &#39;driver&#39; =&gt; &#39;eloquent&#39;,
             &#39;model&#39; =&gt; App\\Admin::class,
         ],
    ],

    &#39;passwords&#39; =&gt; [
        &#39;users&#39; =&gt; [
            &#39;provider&#39; =&gt; &#39;users&#39;,
            &#39;table&#39; =&gt; &#39;password_resets&#39;,
            &#39;expire&#39; =&gt; 60,
        ],
    ],

];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="logincontroller里面重写方法" tabindex="-1"><a class="header-anchor" href="#logincontroller里面重写方法" aria-hidden="true">#</a> LoginController里面重写方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace Addons\\Admin\\Http\\Controllers\\Auth;

use App\\Http\\Controllers\\Controller;
use Illuminate\\Foundation\\Auth\\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = &#39;/admin&#39;;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this-&gt;middleware(&#39;guest:admin&#39;)-&gt;except(&#39;logout&#39;);
    }
    /**
     *
     * 重写加载后台登录模板方法
     *
     * @return \\Illuminate\\Contracts\\View\\Factory|\\Illuminate\\View\\View
     */
    public function showLoginForm()
    {
        return view(&#39;admin::auth.login&#39;);
    }

    public function username(){
        return &#39;name&#39;;
    }

    protected function guard()
    {
        return \\Auth::guard(&#39;admin&#39;);
    }

    /**
     *
     * 重写后台退出登录操作
     *
     * @param Request $request
     * @return \\Illuminate\\Http\\RedirectResponse|\\Illuminate\\Routing\\Redirector
     */
    public function logout(Request $request)
    {
        $this-&gt;guard()-&gt;logout();

        $request-&gt;session()-&gt;invalidate();

        return redirect(&#39;/admin/login&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现登陆后跳转到不同路径" tabindex="-1"><a class="header-anchor" href="#实现登陆后跳转到不同路径" aria-hidden="true">#</a> 实现登陆后跳转到不同路径</h3><p><code>app\\Middleware\\RedirectIfAuthenticated.php</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public function handle($request, Closure $next, $guard = null)
{
    if (Auth::guard($guard)-&gt;check()) {
        $path = $guard ? &#39;/admin&#39; : &#39;/home&#39;;
        return redirect($path);
    }

    return $next($request);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现未通过认证跳转不同登陆页" tabindex="-1"><a class="header-anchor" href="#实现未通过认证跳转不同登陆页" aria-hidden="true">#</a> 实现未通过认证跳转不同登陆页</h3><p><code>app\\Exceptions\\Handler.php</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>protected function unauthenticated($request, AuthenticationException $exception)
{
    //获取当前守卫的值
    $guards = $exception-&gt;guards();
    //通过判断$guards的值里面是否有admin的值,如果有,代表想跳转去后台登录,如果没有,就代表跳转去前台登录
    if (in_array(&#39;admin&#39;,$guards)){
        $url = &#39;/admin/login&#39;;
    }else{
        $url = &#39;/login&#39;;
    }
    if ($request-&gt;expectsJson()){
        //如果是异步请求,进这个if
        return response()-&gt;json([&#39;message&#39; =&gt; $exception-&gt;getMessage()], 401);
    }else{
        //如果不是异步请求,就进入else
        return redirect()-&gt;guest($url);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里注意的是重写完后要在路由组中传看守器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::group([&#39;middleware&#39; =&gt; [&#39;web&#39;,&#39;auth:admin&#39;], &#39;prefix&#39; =&gt; &#39;admin&#39;, &#39;namespace&#39; =&gt; &#39;Addons\\Admin\\Http\\Controllers&#39;], function()
{
    Route::get(&#39;/&#39;, &#39;AdminController@index&#39;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function h(x,f){const i=a("ExternalLinkIcon");return r(),v("div",null,[u,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",c,[n("引用：Laravel 5.6 内置的Auth模块实现注册与登录"),d(i)])]),e("li",null,[e("a",o,[n("Laravel-使用中间件做用户认证和权限管理"),d(i)])]),e("li",null,[e("a",m,[n("官方文档：登录认证"),d(i)])])])]),b,e("p",null,[e("a",p,[n("后盾laravel-module手册"),d(i)]),n(" 查看具体用法")]),g])}const q=l(t,[["render",h],["__file","10.html.vue"]]);export{q as default};
