import{_ as e,o as i,c as n,a as s}from"./app-6568e73a.js";const d={},a=s(`<h3 id="请求信息" tabindex="-1"><a class="header-anchor" href="#请求信息" aria-hidden="true">#</a> 请求信息</h3><p>如果要获取当前的请求信息，可以使用<code>\\think\\Request</code>类</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request = Request::instance();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以使用助手函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request = request();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="获取url信息" tabindex="-1"><a class="header-anchor" href="#获取url信息" aria-hidden="true">#</a> 获取URL信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request = Request::instance();
// 获取当前域名
echo &#39;domain: &#39; . $request-&gt;domain() . &#39;&lt;br/&gt;&#39;;
// 获取当前入口文件
echo &#39;file: &#39; . $request-&gt;baseFile() . &#39;&lt;br/&gt;&#39;;
// 获取当前URL地址 不含域名
echo &#39;url: &#39; . $request-&gt;url() . &#39;&lt;br/&gt;&#39;;
// 获取包含域名的完整URL地址
echo &#39;url with domain: &#39; . $request-&gt;url(true) . &#39;&lt;br/&gt;&#39;;
// 获取当前URL地址 不含QUERY_STRING
echo &#39;url without query: &#39; . $request-&gt;baseUrl() . &#39;&lt;br/&gt;&#39;;
// 获取URL访问的ROOT地址
echo &#39;root:&#39; . $request-&gt;root() . &#39;&lt;br/&gt;&#39;;
// 获取URL访问的ROOT地址
echo &#39;root with domain: &#39; . $request-&gt;root(true) . &#39;&lt;br/&gt;&#39;;
// 获取URL地址中的PATH_INFO信息
echo &#39;pathinfo: &#39; . $request-&gt;pathinfo() . &#39;&lt;br/&gt;&#39;;
// 获取URL地址中的PATH_INFO信息 不含后缀
echo &#39;pathinfo: &#39; . $request-&gt;path() . &#39;&lt;br/&gt;&#39;;
// 获取URL地址中的后缀信息
echo &#39;ext: &#39; . $request-&gt;ext() . &#39;&lt;br/&gt;&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>domain: http://tp5.com
file: /index.php
url: /index/index/hello.html?name=thinkphp
url with domain: http://tp5.com/index/index/hello.html?name=thinkphp
url without query: /index/index/hello.html
root:
root with domain: http://tp5.com
pathinfo: index/index/hello.html
pathinfo: index/index/hello
ext: html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置-获取-模块-控制器-操作名称" tabindex="-1"><a class="header-anchor" href="#设置-获取-模块-控制器-操作名称" aria-hidden="true">#</a> 设置/获取 模块/控制器/操作名称</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request = Request::instance();
echo &quot;当前模块名称是&quot; . $request-&gt;module();
echo &quot;当前控制器名称是&quot; . $request-&gt;controller();
echo &quot;当前操作名称是&quot; . $request-&gt;action();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果当前访问的地址是 <code>http://serverName/index.php/index/hello_world/index</code></p><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当前模块名称是index
当前控制器名称是HelloWorld
当前操作名称是index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取请求参数" tabindex="-1"><a class="header-anchor" href="#获取请求参数" aria-hidden="true">#</a> 获取请求参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$request = Request::instance();
echo &#39;请求方法：&#39; . $request-&gt;method() . &#39;&lt;br/&gt;&#39;;
echo &#39;资源类型：&#39; . $request-&gt;type() . &#39;&lt;br/&gt;&#39;;
echo &#39;访问ip地址：&#39; . $request-&gt;ip() . &#39;&lt;br/&gt;&#39;;
echo &#39;是否AJax请求：&#39; . var_export($request-&gt;isAjax(), true) . &#39;&lt;br/&gt;&#39;;
echo &#39;请求参数：&#39;;
dump($request-&gt;param());
echo &#39;请求参数：仅包含name&#39;;
dump($request-&gt;only([&#39;name&#39;]));
echo &#39;请求参数：排除name&#39;;
dump($request-&gt;except([&#39;name&#39;]));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请求方法：GET
资源类型：html
访问ip地址：127.0.0.1
是否Ajax请求：false
请求参数：
array (size=2)
  &#39;test&#39; =&gt; string &#39;ddd&#39; (length=3)
  &#39;name&#39; =&gt; string &#39;thinkphp&#39; (length=8)
  
请求参数：仅包含name
array (size=1)
  &#39;name&#39; =&gt; string &#39;thinkphp&#39; (length=8)
  
请求参数：排除name
array (size=1)
  &#39;test&#39; =&gt; string &#39;ddd&#39; (length=3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入变量" tabindex="-1"><a class="header-anchor" href="#输入变量" aria-hidden="true">#</a> 输入变量</h3><p>可以通过<code>Request</code>对象完成全局输入变量的检测、获取和安全过滤，支持包括<code>$_GET、$_POST、$_REQUEST、$_SERVER、$_SESSION、$_COOKIE、$_ENV</code>等系统变量，以及文件上传信息。</p><h4 id="获取param变量" tabindex="-1"><a class="header-anchor" href="#获取param变量" aria-hidden="true">#</a> 获取<code>PARAM</code>变量</h4><p><code>PARAM</code>变量是框架提供的用于自动识别<code>GET、POST</code>或者<code>PUT</code>请求的一种变量获取方式，是系统推荐的获取请求参数的方法，用法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 获取当前请求的name变量
Request::instance()-&gt;param(&#39;name&#39;);
// 获取当前请求的所有变量（经过过滤）
Request::instance()-&gt;param();
// 获取当前请求的所有变量（原始数据）
Request::instance()-&gt;param(false);
// 获取当前请求的所有变量（包含上传文件）
Request::instance()-&gt;param(true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;param.name&#39;);
input(&#39;param.&#39;);
或者
input(&#39;name&#39;);
input(&#39;&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为<code>input</code>函数默认就采用PARAM变量读取方式。</p><h4 id="获取get变量" tabindex="-1"><a class="header-anchor" href="#获取get变量" aria-hidden="true">#</a> 获取<code>GET</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;get(&#39;id&#39;); // 获取某个get变量
Request::instance()-&gt;get(&#39;name&#39;); // 获取get变量
Request::instance()-&gt;get(); // 获取所有的get变量（经过过滤的数组）
Request::instance()-&gt;get(false); // 获取所有的get变量（原始数组）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用内置的助手函数<code>input</code>方法实现相同的功能：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;get.id&#39;);
input(&#39;get.name&#39;);
input(&#39;get.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取post变量" tabindex="-1"><a class="header-anchor" href="#获取post变量" aria-hidden="true">#</a> 获取<code>POST</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;post(&#39;name&#39;); // 获取某个post变量
Request::instance()-&gt;post(); // 获取经过过滤的全部post变量
Request::instance()-&gt;post(false); // 获取全部的post原始变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;post.name&#39;);
input(&#39;post.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取put变量" tabindex="-1"><a class="header-anchor" href="#获取put变量" aria-hidden="true">#</a> 获取<code>PUT</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;put(&#39;name&#39;); // 获取某个put变量
Request::instance()-&gt;put(); // 获取全部的put变量（经过过滤）
Request::instance()-&gt;put(false); // 获取全部的put原始变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;put.name&#39;);
input(&#39;put.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取request变量" tabindex="-1"><a class="header-anchor" href="#获取request变量" aria-hidden="true">#</a> 获取<code>REQUEST</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;request(&#39;id&#39;); // 获取某个request变量
Request::instance()-&gt;request(); // 获取全部的request变量（经过过滤）
Request::instance()-&gt;request(false); // 获取全部的request原始变量数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;request.id&#39;);
input(&#39;request.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取server变量" tabindex="-1"><a class="header-anchor" href="#获取server变量" aria-hidden="true">#</a> 获取<code>SERVER</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;server(&#39;PHP_SELF&#39;); // 获取某个server变量
Request::instance()-&gt;server(); // 获取全部的server变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;server.PHP_SELF&#39;);
input(&#39;server.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取session变量" tabindex="-1"><a class="header-anchor" href="#获取session变量" aria-hidden="true">#</a> 获取<code>SESSION</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;session(&#39;user_id&#39;); // 获取某个session变量
Request::instance()-&gt;session(); // 获取全部的session变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;session.user_id&#39;);
input(&#39;session.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取cookie变量" tabindex="-1"><a class="header-anchor" href="#获取cookie变量" aria-hidden="true">#</a> 获取<code>Cookie</code>变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Request::instance()-&gt;cookie(&#39;user_id&#39;); // 获取某个cookie变量
Request::instance()-&gt;cookie(); // 获取全部的cookie变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input(&#39;cookie.user_id&#39;);
input(&#39;cookie.&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求类型" tabindex="-1"><a class="header-anchor" href="#请求类型" aria-hidden="true">#</a> 请求类型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 是否为 GET 请求
if (Request::instance()-&gt;isGet()) echo &quot;当前为 GET 请求&quot;;
// 是否为 POST 请求
if (Request::instance()-&gt;isPost()) echo &quot;当前为 POST 请求&quot;;
// 是否为 PUT 请求
if (Request::instance()-&gt;isPut()) echo &quot;当前为 PUT 请求&quot;;
// 是否为 DELETE 请求
if (Request::instance()-&gt;isDelete()) echo &quot;当前为 DELETE 请求&quot;;
// 是否为 Ajax 请求
if (Request::instance()-&gt;isAjax()) echo &quot;当前为 Ajax 请求&quot;;
// 是否为 Pjax 请求
if (Request::instance()-&gt;isPjax()) echo &quot;当前为 Pjax 请求&quot;;
// 是否为手机访问
if (Request::instance()-&gt;isMobile()) echo &quot;当前为手机访问&quot;;
// 是否为 HEAD 请求
if (Request::instance()-&gt;isHead()) echo &quot;当前为 HEAD 请求&quot;;
// 是否为 Patch 请求
if (Request::instance()-&gt;isPatch()) echo &quot;当前为 PATCH 请求&quot;;
// 是否为 OPTIONS 请求
if (Request::instance()-&gt;isOptions()) echo &quot;当前为 OPTIONS 请求&quot;;
// 是否为 cli
if (Request::instance()-&gt;isCli()) echo &quot;当前为 cli&quot;;
// 是否为 cgi
if (Request::instance()-&gt;isCgi()) echo &quot;当前为 cgi&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>助手函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 是否为 GET 请求
if (request()-&gt;isGet()) echo &quot;当前为 GET 请求&quot;;
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58),t=[a];function l(r,u){return i(),n("div",null,t)}const v=e(d,[["render",l],["__file","04.html.vue"]]);export{v as default};
