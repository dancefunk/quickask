import{_ as e,o as n,c as i,a as d}from"./app-110372b4.js";const l={},a=d(`<h3 id="定义路由" tabindex="-1"><a class="header-anchor" href="#定义路由" aria-hidden="true">#</a> 定义路由</h3><p>URL地址里面的<code>index</code>模块怎么才能省略呢，默认的<code>URL</code>地址显得有点长，下面就来说说如何通过路由简化<code>URL</code>访问。</p><p>我们在路由定义文件（<code>application/route.php</code>）里面添加一些路由规则，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 添加路由规则 路由到 index控制器的hello操作方法
    &#39;hello/:name&#39; =&gt; &#39;index/index/hello&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该路由规则表示所有<code>hello</code>开头的并且带参数的访问都会路由到index控制器的hello操作方法。</p><p>路由之前的URL访问地址为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/index/index/hello/name/thinkphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>定义路由后就只能访问下面的URL地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/hello/thinkphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>定义路由规则后，原来的URL地址将会失效，变成非法请求。</strong></p><p>使用<code>[]</code>把路由规则中的变量包起来，就表示该变量为可选</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 路由参数name为可选
    &#39;hello/[:name]&#39; =&gt; &#39;index/hello&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当<code>name</code>参数没有传入值的时候，<code>hello</code>方法的<code>name</code>参数有默认值<code>World</code>，所以输出的内容为 <code>Hello,World!</code></p><p>除了路由配置文件中定义之外，还可以采用动态定义路由规则的方式定义，例如在路由配置文件（<code>application/route.php</code>）的开头直接添加下面的方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use think\\Route;

Route::rule(&#39;hello/:name&#39;, &#39;index/hello&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完成的效果和使用配置方式定义是一样的。</p><p>无论是配置方式还是通过Route类的方法定义路由，都统一放到路由配置文件<code>application/route.php</code>文件中</p><h3 id="完整匹配" tabindex="-1"><a class="header-anchor" href="#完整匹配" aria-hidden="true">#</a> 完整匹配</h3><p>前面定义的路由是只要以hello开头就能进行匹配，如果需要完整匹配，可以使用下面的定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 路由参数name为可选
    &#39;hello/[:name]$&#39; =&gt; &#39;index/hello&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当路由规则以<code>$</code>结尾的时候就表示当前路由规则需要完整匹配。</p><p>当我们访问下面的URL地址的时候：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/hello // 正确匹配
http://tp5.com/hello/thinkphp // 正确匹配
http://tp5.com/hello/thinkphp/val/value // 不会匹配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="闭包定义" tabindex="-1"><a class="header-anchor" href="#闭包定义" aria-hidden="true">#</a> 闭包定义</h3><p>还支持通过定义闭包为某些特殊的场景定义路由规则，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 定义闭包
    &#39;hello/[:name]&#39; =&gt; function ($name) {
        return &#39;Hello,&#39; . $name . &#39;!&#39;;
    },
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use think\\Route;

Route::rule(&#39;hello/:name&#39;, function ($name) {
    return &#39;Hello,&#39; . $name . &#39;!&#39;;
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，当访问下面的URL地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/hello/thinkphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello,thinkphp!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置url分隔符" tabindex="-1"><a class="header-anchor" href="#设置url分隔符" aria-hidden="true">#</a> 设置URL分隔符</h3><p>如果需要改变URL地址中的<code>pathinfo</code>参数分隔符，只需要在应用配置文件（<code>application/config.php</code>）中设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 设置pathinfo分隔符
&#39;pathinfo_depr&#39;          =&gt; &#39;-&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>路由规则定义无需做任何改变，我们就可以访问下面的地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/hello-thinkphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="路由参数" tabindex="-1"><a class="header-anchor" href="#路由参数" aria-hidden="true">#</a> 路由参数</h3><p>我们还可以约束路由规则的请求类型或者URL后缀之类的条件，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 定义路由的请求类型和后缀
    &#39;hello/[:name]&#39; =&gt; [&#39;index/hello&#39;, [&#39;method&#39; =&gt; &#39;get&#39;, &#39;ext&#39; =&gt; &#39;html&#39;]],
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面定义的路由规则限制了必须是<code>get</code>请求，而且后缀必须是<code>html</code>的，所以下面的访问地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/hello // 无效
http://tp5.com/hello.html // 有效
http://tp5.com/hello/thinkphp // 无效
http://tp5.com/hello/thinkphp.html // 有效
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量规则" tabindex="-1"><a class="header-anchor" href="#变量规则" aria-hidden="true">#</a> 变量规则</h3><p>接下来，我们来尝试一些复杂的路由规则定义满足不同的路由变量。在此之前，首先增加一个控制器类如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php

namespace app\\index\\controller;

class Blog
{

    public function get($id)
    {
        return &#39;查看id=&#39; . $id . &#39;的内容&#39;;
    }

    public function read($name)
    {
        return &#39;查看name=&#39; . $name . &#39;的内容&#39;;
    }

    public function archive($year, $month)
    {
        return &#39;查看&#39; . $year . &#39;/&#39; . $month . &#39;的归档内容&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加如下路由规则：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    &#39;blog/:year/:month&#39; =&gt; [&#39;blog/archive&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;year&#39; =&gt; &#39;\\d{4}&#39;, &#39;month&#39; =&gt; &#39;\\d{2}&#39;]],
    &#39;blog/:id&#39;          =&gt; [&#39;blog/get&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;id&#39; =&gt; &#39;\\d+&#39;]],
    &#39;blog/:name&#39;        =&gt; [&#39;blog/read&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;name&#39; =&gt; &#39;\\w+&#39;]],
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的路由规则中，我们对变量进行的规则约束，变量规则使用正则表达式进行定义。</p><p>我们看下几种URL访问的情况</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 访问id为5的内容
http://tp5.com/blog/5 
// 访问name为thinkphp的内容
http://tp5.com/blog/thinkphp 
// 访问2015年5月的归档内容
http://tp5.com/blog/2015/05 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由分组" tabindex="-1"><a class="header-anchor" href="#路由分组" aria-hidden="true">#</a> 路由分组</h3><p>上面的三个路由规则由于都是<code>blog</code>打头，所以我们可以做如下的简化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    &#39;[blog]&#39; =&gt; [
        &#39;:year/:month&#39; =&gt; [&#39;blog/archive&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;year&#39; =&gt; &#39;\\d{4}&#39;, &#39;month&#39; =&gt; &#39;\\d{2}&#39;]],    
        &#39;:id&#39;          =&gt; [&#39;blog/get&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;id&#39; =&gt; &#39;\\d+&#39;]],
        &#39;:name&#39;        =&gt; [&#39;blog/read&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;name&#39; =&gt; &#39;\\w+&#39;]],
    ],
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于这种定义方式，我们称之为路由分组，路由分组一定程度上可以提高路由检测的效率。</p><h3 id="复杂路由" tabindex="-1"><a class="header-anchor" href="#复杂路由" aria-hidden="true">#</a> 复杂路由</h3><p>有时候，我们还需要对URL做一些特殊的定制，例如如果要同时支持下面的访问地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/blog/thinkphp 
http://tp5.com/blog-2015-05 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只要稍微改变路由定义规则即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    &#39;blog/:id&#39;            =&gt; [&#39;blog/get&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;id&#39; =&gt; &#39;\\d+&#39;]],
    &#39;blog/:name&#39;          =&gt; [&#39;blog/read&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;name&#39; =&gt; &#39;\\w+&#39;]],
    &#39;blog-&lt;year&gt;-&lt;month&gt;&#39; =&gt; [&#39;blog/archive&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;year&#39; =&gt; &#39;\\d{4}&#39;, &#39;month&#39; =&gt; &#39;\\d{2}&#39;]],
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对 <code>blog-&lt;year&gt;-&lt;month&gt;</code> 这样的非正常规范，我们需要使用&lt;变量名&gt;这样的变量定义方式，而不是 <code>:变量名</code>方式。</p><p>简单起见，我们还可以把变量规则统一定义，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 全局变量规则定义
    &#39;__pattern__&#39;         =&gt; [
        &#39;name&#39;  =&gt; &#39;\\w+&#39;,
        &#39;id&#39;    =&gt; &#39;\\d+&#39;,
        &#39;year&#39;  =&gt; &#39;\\d{4}&#39;,
        &#39;month&#39; =&gt; &#39;\\d{2}&#39;,
    ],
    // 路由规则定义
    &#39;blog/:id&#39;            =&gt; &#39;blog/get&#39;,
    &#39;blog/:name&#39;          =&gt; &#39;blog/read&#39;,
    &#39;blog-&lt;year&gt;-&lt;month&gt;&#39; =&gt; &#39;blog/archive&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>__pattern__</code>中定义的变量规则我们称之为全局变量规则，在路由规则里面定义的变量规则我们称之为局部变量规则，如果一个变量同时定义了全局规则和局部规则的话，当前的局部规则会覆盖全局规则的，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 全局变量规则
    &#39;__pattern__&#39;         =&gt; [
        &#39;name&#39;  =&gt; &#39;\\w+&#39;,
        &#39;id&#39;    =&gt; &#39;\\d+&#39;,
        &#39;year&#39;  =&gt; &#39;\\d{4}&#39;,
        &#39;month&#39; =&gt; &#39;\\d{2}&#39;,
    ],

    &#39;blog/:id&#39;            =&gt; &#39;blog/get&#39;,
    // 定义了局部变量规则
    &#39;blog/:name&#39;          =&gt; [&#39;blog/read&#39;, [&#39;method&#39; =&gt; &#39;get&#39;], [&#39;name&#39; =&gt; &#39;\\w{5,}&#39;]],
    &#39;blog-&lt;year&gt;-&lt;month&gt;&#39; =&gt; &#39;blog/archive&#39;,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url生成" tabindex="-1"><a class="header-anchor" href="#url生成" aria-hidden="true">#</a> URL生成</h3><p>定义路由规则之后，我们可以通过Url类来方便的生成实际的URL地址（路由地址），针对上面的路由规则，我们可以用下面的方式生成URL地址。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 输出 blog/thinkphp
Url::build(&#39;blog/read&#39;, &#39;name=thinkphp&#39;);
Url::build(&#39;blog/read&#39;, [&#39;name&#39; =&gt; &#39;thinkphp&#39;]);
// 输出 blog/5
Url::build(&#39;blog/get&#39;, &#39;id=5&#39;);
Url::build(&#39;blog/get&#39;, [&#39;id&#39; =&gt; 5]);
// 输出 blog/2015/05
Url::build(&#39;blog/archive&#39;, &#39;year=2015&amp;month=05&#39;);
Url::build(&#39;blog/archive&#39;, [&#39;year&#39; =&gt; &#39;2015&#39;, &#39;month&#39; =&gt; &#39;05&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以使用系统提供的助手函数url来简化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url(&#39;blog/read&#39;, &#39;name=thinkphp&#39;);
// 等效于
Url::build(&#39;blog/read&#39;, &#39;name=thinkphp&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常在模板文件中输出的话，可以使用助手函数，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{:url(&#39;blog/read&#39;, &#39;name=thinkphp&#39;)}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你配置了<code>url_html_suffix</code>参数的话，生成的URL地址会带上后缀，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;url_html_suffix&#39;   =&gt; &#39;html&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么生成的URL地址 类似</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>blog/thinkphp.html 
blog/2015/05.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的URL地址全部采用路由方式定义，也可以直接使用路由规则来定义URL生成，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>url(&#39;/blog/thinkphp&#39;);
Url::build(&#39;/blog/8&#39;);
Url::build(&#39;/blog/archive/2015/05&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成方法的第一个参数一定要和路由定义的路由地址保持一致，如果你的路由地址比较特殊，例如使用闭包定义的话，则需要手动给路由指定标识，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 添加hello路由标识
Route::rule([&#39;hello&#39;,&#39;hello/:name&#39;], function($name){
    return &#39;Hello,&#39;.$name;
});

// 根据路由标识快速生成URL
Url::build(&#39;hello&#39;, &#39;name=thinkphp&#39;);

// 或者使用
Url::build(&#39;hello&#39;, [&#39;name&#39; =&gt; &#39;thinkphp&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),s=[a];function t(r,v){return n(),i("div",null,s)}const u=e(l,[["render",t],["__file","02.html.vue"]]);export{u as default};
