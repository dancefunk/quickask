import{_ as e,o as i,c as n,a as s}from"./app-110372b4.js";const d={},l=s(`<h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>一次性session(验证提示)
$request-&gt;session()-&gt;flash(&#39;status&#39;,&#39;ok&#39;);

从session中获取数据...    
$value = session(&#39;key&#39;);    

指定默认值...    
$value = session(&#39;key&#39;, &#39;default&#39;);   
 
存储数据到session...    
session([&#39;key&#39; =&gt; &#39;value&#39;]);

视图获取 session
{{ Session::get(&#39;user_name&#39;) }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>引入 Cookie
use Illuminate\\Support\\Facades\\Cookie;

写入 cookie
$cookie = Cookie::make($key,$value,$minutest); //创建一个cookie实例

//加入到队列
Cookie::queue($cookie );

获取 cookie
Cookie::get($key)

删除cookie
$user = Cookie::forget(&#39;username&#39;);
Cookie::queue($user);

判断cookie 是否存在
dd(Cookie::has(&#39;username&#39;));


默认情况下，Laravel 生成的所有 Cookie 都是经过加密和签名，因此不能被客户端修改或读取。 
如果你想要应用程序生成的部分 Cookie 不被加密，
那么可以使用在 app/Http/Middleware 目录中 
App\\Http\\Middleware\\EncryptCookies 中间件的 $except 属性：

protected $except = [
    &#39;cookie_name&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页-自定义分页样式" tabindex="-1"><a class="header-anchor" href="#分页-自定义分页样式" aria-hidden="true">#</a> 分页(自定义分页样式)</h3><h3 id="操作步骤如下" tabindex="-1"><a class="header-anchor" href="#操作步骤如下" aria-hidden="true">#</a> 操作步骤如下:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1)  对应public/css/paging.css 文件建立分页样式.
(2)  控制器查出分页数据使用 paginate函数进行分页处理.(禁止使用group by处理查询).
(3) 对应视图引入分页样式.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="paging-css-样式文件代码-复制即可用-实际操作过-如下" tabindex="-1"><a class="header-anchor" href="#paging-css-样式文件代码-复制即可用-实际操作过-如下" aria-hidden="true">#</a> paging.css 样式文件代码(复制即可用,实际操作过)如下</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#pull_right{
    text-align:center;
}
.pull-right {
    /*float: left!important;*/
}
.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
}
.pagination &gt; li {
    display: inline;
}
.pagination &gt; li &gt; a,
.pagination &gt; li &gt; span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #428bca;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
}
.pagination &gt; li:first-child &gt; a,
.pagination &gt; li:first-child &gt; span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.pagination &gt; li:last-child &gt; a,
.pagination &gt; li:last-child &gt; span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
.pagination &gt; li &gt; a:hover,
.pagination &gt; li &gt; span:hover,
.pagination &gt; li &gt; a:focus,
.pagination &gt; li &gt; span:focus {
    color: #2a6496;
    background-color: #eee;
    border-color: #ddd;
}
.pagination &gt; .active &gt; a,
.pagination &gt; .active &gt; span,
.pagination &gt; .active &gt; a:hover,
.pagination &gt; .active &gt; span:hover,
.pagination &gt; .active &gt; a:focus,
.pagination &gt; .active &gt; span:focus {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #428bca;
    border-color: #428bca;
}
.pagination &gt; .disabled &gt; span,
.pagination &gt; .disabled &gt; span:hover,
.pagination &gt; .disabled &gt; span:focus,
.pagination &gt; .disabled &gt; a,
.pagination &gt; .disabled &gt; a:hover,
.pagination &gt; .disabled &gt; a:focus {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd;
}
.clear{
    clear: both;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="testcntroller-php-控制器示例写法" tabindex="-1"><a class="header-anchor" href="#testcntroller-php-控制器示例写法" aria-hidden="true">#</a> TestCntroller.php 控制器示例写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Http\\Controllers;

use Illuminate\\Support\\Facades\\DB;
use App\\Http\\Controllers\\Controller;

class TestController extends Controller{
    /**
     * 测试数据
     */
    public function index()
    {
        $test = DB::table(&#39;test&#39;)-&gt;paginate(5);
        return view(&#39;index&#39;, [&#39;test&#39; =&gt; $test]);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list-blade-php-视图文件代码示例写法" tabindex="-1"><a class="header-anchor" href="#list-blade-php-视图文件代码示例写法" aria-hidden="true">#</a> list.blade.php 视图文件代码示例写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--用于引用css--&gt;
&lt;link  rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;{{asset(&#39;css/paging.css&#39;)}}&quot;/&gt;

&lt;div class=&quot;container&quot;&gt;
    &lt;!--查数据--&gt;
    @foreach ($test as $value)
        {{ $value-&gt;id }}
    @endforeach
&lt;/div&gt;

&lt;div id=&quot;pull_right&quot;&gt;
    &lt;!--分页写法--&gt;
    &lt;div class=&quot;pull-right&quot;&gt;
        {{ $test-&gt;render() }}
    &lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mews-captcha-图片验证码解决方案" tabindex="-1"><a class="header-anchor" href="#mews-captcha-图片验证码解决方案" aria-hidden="true">#</a> mews/captcha 图片验证码解决方案</h3><h3 id="使用-composer-安装" tabindex="-1"><a class="header-anchor" href="#使用-composer-安装" aria-hidden="true">#</a> 使用 composer 安装：</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require mews/captcha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改-config-app-文件-添加-serviceprovider" tabindex="-1"><a class="header-anchor" href="#修改-config-app-文件-添加-serviceprovider" aria-hidden="true">#</a> 修改 config/app 文件，添加 ServiceProvider</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;providers&#39; =&gt; [
    ...
    Mews\\Captcha\\CaptchaServiceProvider::class,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>aliases</code> 数组内追加如下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;aliases&#39; =&gt; [
    ...
    &#39;Captcha&#39; =&gt; Mews\\Captcha\\Facades\\Captcha::class,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行 <code>php artisan vendor:publish</code> 生成配置文件 <code>config/captcha.php</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [

    &#39;characters&#39; =&gt; &#39;2346789abcdefghjmnpqrtuxyzABCDEFGHJMNPQRTUXYZ&#39;,

    &#39;default&#39;   =&gt; [
        &#39;length&#39;    =&gt; 5,
        &#39;width&#39;     =&gt; 120,
        &#39;height&#39;    =&gt; 36,
        &#39;quality&#39;   =&gt; 90,
    ],

    &#39;flat&#39;   =&gt; [
        &#39;length&#39;    =&gt; 6,
        &#39;width&#39;     =&gt; 160,
        &#39;height&#39;    =&gt; 46,
        &#39;quality&#39;   =&gt; 90,
        &#39;lines&#39;     =&gt; 6,
        &#39;bgImage&#39;   =&gt; false,
        &#39;bgColor&#39;   =&gt; &#39;#ecf2f4&#39;,
        &#39;fontColors&#39;=&gt; [&#39;#2c3e50&#39;, &#39;#c0392b&#39;, &#39;#16a085&#39;, &#39;#c0392b&#39;, &#39;#8e44ad&#39;, &#39;#303f9f&#39;, &#39;#f57c00&#39;, &#39;#795548&#39;],
        &#39;contrast&#39;  =&gt; -5,
    ],

    &#39;mini&#39;   =&gt; [
        &#39;length&#39;    =&gt; 3,
        &#39;width&#39;     =&gt; 60,
        &#39;height&#39;    =&gt; 32,
    ],

    &#39;inverse&#39;   =&gt; [
        &#39;length&#39;    =&gt; 5,
        &#39;width&#39;     =&gt; 120,
        &#39;height&#39;    =&gt; 36,
        &#39;quality&#39;   =&gt; 90,
        &#39;sensitive&#39; =&gt; true,
        &#39;angle&#39;     =&gt; 12,
        &#39;sharpen&#39;   =&gt; 10,
        &#39;blur&#39;      =&gt; 2,
        &#39;invert&#39;    =&gt; true,
        &#39;contrast&#39;  =&gt; -5,
    ]

];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;form-group code&quot;&gt;
    &lt;label&gt;验证码&lt;/label&gt;
    &lt;input class=&quot;tt-text&quot; name=&quot;captcha&quot;&gt;
    {!! captcha_img() !!}
&lt;/div&gt;


&lt;div class=&quot;form-group code&quot;&gt;
    &lt;label&gt;验证码&lt;/label&gt;
    &lt;input class=&quot;tt-text&quot; name=&quot;captcha&quot;&gt;
    &lt;img src=&quot;{{captcha_src()}}&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用自定义样式的验证码" tabindex="-1"><a class="header-anchor" href="#使用自定义样式的验证码" aria-hidden="true">#</a> 使用自定义样式的验证码</h3><p>如果想使用自定义的验证码，如上文配置文件里的 <code>inverse</code> 选项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    ...

    &#39;default&#39;   =&gt; [
        ...
    ],

    &#39;inverse&#39;   =&gt; [
        &#39;length&#39;    =&gt; 5,
        &#39;width&#39;     =&gt; 120,
        &#39;height&#39;    =&gt; 36,
        &#39;quality&#39;   =&gt; 90,
        &#39;sensitive&#39; =&gt; true,
        &#39;angle&#39;     =&gt; 12,
        &#39;sharpen&#39;   =&gt; 10,
        &#39;blur&#39;      =&gt; 2,
        &#39;invert&#39;    =&gt; true,
        &#39;contrast&#39;  =&gt; -5,
    ]

];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断用户输入的验证码是否正确" tabindex="-1"><a class="header-anchor" href="#判断用户输入的验证码是否正确" aria-hidden="true">#</a> 判断用户输入的验证码是否正确</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$this-&gt;validate($request, [
    &#39;captcha&#39; =&gt; &#39;required|captcha&#39;
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="laravel5-6-邮件队列database驱动简单demo" tabindex="-1"><a class="header-anchor" href="#laravel5-6-邮件队列database驱动简单demo" aria-hidden="true">#</a> laravel5.6 邮件队列database驱动简单demo</h3><h3 id="配置-env-demo示例是163邮箱-开启pop3和smtp服务-获取授权密码" tabindex="-1"><a class="header-anchor" href="#配置-env-demo示例是163邮箱-开启pop3和smtp服务-获取授权密码" aria-hidden="true">#</a> 配置 .env (demo示例是163邮箱,开启POP3和SMTP服务,获取授权密码)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MAIL_DRIVER=smtp
MAIL_HOST=smtp.163.com
MAIL_PORT=465
MAIL_USERNAME=你的163邮箱地址
MAIL_PASSWORD=你的163邮箱地址对应的授权密码（不是登录密码）
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=你的163邮箱地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改-env-中的-queue-driver-值-配置文件-config-queue-php-默认是同步-sync-demo配置-database-驱动" tabindex="-1"><a class="header-anchor" href="#修改-env-中的-queue-driver-值-配置文件-config-queue-php-默认是同步-sync-demo配置-database-驱动" aria-hidden="true">#</a> 修改 .env 中的 QUEUE_DRIVER 值 (配置文件 config/queue.php 默认是同步&#39;sync&#39;, demo配置&#39;database&#39;驱动)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>QUEUE_DRIVER=database
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据库建表" tabindex="-1"><a class="header-anchor" href="#数据库建表" aria-hidden="true">#</a> 数据库建表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//队列任务表
php artisan queue:table    
//任务执行失败表            
php artisan queue:failed-table
//执行数据库迁移        
php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成任务类" tabindex="-1"><a class="header-anchor" href="#生成任务类" aria-hidden="true">#</a> 生成任务类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:job SendEmail
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成之后-在handle方法中处理发送队列邮件" tabindex="-1"><a class="header-anchor" href="#生成之后-在handle方法中处理发送队列邮件" aria-hidden="true">#</a> 生成之后,在handle方法中处理发送队列邮件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace App\\Jobs;

use Illuminate\\Bus\\Queueable;
use Illuminate\\Queue\\SerializesModels;
use Illuminate\\Queue\\InteractsWithQueue;
use Illuminate\\Contracts\\Queue\\ShouldQueue;
use Illuminate\\Foundation\\Bus\\Dispatchable;
use Illuminate\\Support\\Facades\\Mail;

class SendEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private  $email;

    private  $content;

    private  $subject;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct( $email, $content, $subject)
    {
        $this-&gt;email = $email;
        $this-&gt;content = $content;
        $this-&gt;subject = $subject;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = $this-&gt;email;
        $subject = $this-&gt;subject;

        Mail::send(
            &#39;admin.emails.test&#39;,
            [&#39;content&#39; =&gt; $this-&gt;content],
            function ($message) use($email, $subject) {
                $message-&gt;to($email)-&gt;subject($subject);
            }
        );

        // Mail::failures() 返回的错误邮件信息,判断是否发送成功. (无错误信息,返回空数组)
        if(empty(Mail::failures())){
            dd(&#39;发送成功&#39;);
        }else{
            dd(&#39;发送失败&#39;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对应邮件发送的控制器-任务加到队列中" tabindex="-1"><a class="header-anchor" href="#对应邮件发送的控制器-任务加到队列中" aria-hidden="true">#</a> 对应邮件发送的控制器,任务加到队列中</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
namespace App\\Http\\Controllers\\Admin;

use App\\Http\\Controllers\\Controller;
use App\\Jobs\\SendEmail;

/**
 * Description of BookedController
 */
class BookedController extends Controller {
    
    public function queueSend()
    {
        //邮件发送demo数据
        $data =[
            0=&gt;[
                &#39;email&#39;=&gt;&#39;XXXXXX@qq.com&#39;,
                &#39;content&#39;=&gt;&#39;Hello World One&#39;,
                &#39;subject&#39;=&gt;&#39;测试标题一&#39;,
            ],
            1=&gt;[
                &#39;email&#39;=&gt;&#39;XXXXXX@qq.com&#39;,
                &#39;content&#39;=&gt;&#39;Hello World Two&#39;,
                &#39;subject&#39;=&gt;&#39;测试标题二&#39;,
            ]
        ];

        foreach ($data  as $item){
            //数据循环,插入表jobs中,队列初始化数据
            dispatch(new SendEmail($item[&#39;email&#39;],$item[&#39;content&#39;],$item[&#39;subject&#39;]));
        }
    }
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行队列里的任务" tabindex="-1"><a class="header-anchor" href="#执行队列里的任务" aria-hidden="true">#</a> 执行队列里的任务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//默认只执行一次队列请求,当请求执行完成后就终止
php artisan queue:work
//监听队列请求,只要运行着,就能一直接受请求,除非手动终止
php artisan queue:listen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),a=[l];function v(r,t){return i(),n("div",null,a)}const u=e(d,[["render",v],["__file","11.html.vue"]]);export{u as default};
