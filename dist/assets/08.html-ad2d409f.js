import{_ as e,o as i,c as n,a as d}from"./app-3e5ace64.js";const a={},s=d(`<h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><p>ThinkPHP采用<code>think\\Cache</code>类提供缓存功能支持。</p><h4 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$options = [
    // 缓存类型为File
    &#39;type&#39;  =&gt;  &#39;File&#39;, 
    // 缓存有效期为永久有效
    &#39;expire&#39;=&gt;  0, 
    //缓存前缀
    &#39;prefix&#39;=&gt;  &#39;think&#39;,
     // 指定缓存目录
    &#39;path&#39;  =&gt;  APP_PATH.&#39;runtime/cache/&#39;,
];
Cache::connect($options);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者通过定义配置参数的方式，在应用配置文件中添加：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;cache&#39;  =&gt; [
    &#39;type&#39;   =&gt; &#39;File&#39;,
    &#39;path&#39;   =&gt; CACHE_PATH,
    &#39;prefix&#39; =&gt; &#39;&#39;,
    &#39;expire&#39; =&gt; 0,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取缓存" tabindex="-1"><a class="header-anchor" href="#获取缓存" aria-hidden="true">#</a> 获取缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dump(Cache::get(&#39;name&#39;)); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除缓存" tabindex="-1"><a class="header-anchor" href="#删除缓存" aria-hidden="true">#</a> 删除缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cache::rm(&#39;name&#39;); 

获取并删除缓存
Cache::pull(&#39;name&#39;); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="清空缓存" tabindex="-1"><a class="header-anchor" href="#清空缓存" aria-hidden="true">#</a> 清空缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cache::clear(); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> Session</h3><h4 id="session初始化" tabindex="-1"><a class="header-anchor" href="#session初始化" aria-hidden="true">#</a> Session初始化</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;session&#39;                =&gt; [
    &#39;prefix&#39;         =&gt; &#39;think&#39;,
    &#39;type&#39;           =&gt; &#39;&#39;,
    &#39;auto_start&#39;     =&gt; true,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置session" tabindex="-1"><a class="header-anchor" href="#设置session" aria-hidden="true">#</a> 设置session</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 赋值（当前作用域）
Session::set(&#39;name&#39;,&#39;thinkphp&#39;);
// 赋值think作用域
Session::set(&#39;name&#39;,&#39;thinkphp&#39;,&#39;think&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断是否存在" tabindex="-1"><a class="header-anchor" href="#判断是否存在" aria-hidden="true">#</a> 判断是否存在</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 判断（当前作用域）是否赋值
Session::has(&#39;name&#39;);
// 判断think作用域下面是否赋值
Session::has(&#39;name&#39;,&#39;think&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="取值" tabindex="-1"><a class="header-anchor" href="#取值" aria-hidden="true">#</a> 取值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 取值（当前作用域）
Session::get(&#39;name&#39;);
// 取值think作用域
Session::get(&#39;name&#39;,&#39;think&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 删除（当前作用域）
Session::delete(&#39;name&#39;);
// 删除think作用域下面的值
Session::delete(&#39;name&#39;,&#39;think&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="清空" tabindex="-1"><a class="header-anchor" href="#清空" aria-hidden="true">#</a> 清空</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 清除session（当前作用域）
Session::clear();
// 清除think作用域
Session::clear(&#39;think&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h3><h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// cookie初始化
Cookie::init([&#39;prefix&#39;=&gt;&#39;think_&#39;,&#39;expire&#39;=&gt;3600,&#39;path&#39;=&gt;&#39;/&#39;]);
// 指定当前前缀
Cookie::prefix(&#39;think_&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持的参数及默认值如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// cookie 名称前缀
&#39;prefix&#39;    =&gt; &#39;&#39;,
// cookie 保存时间
&#39;expire&#39;    =&gt; 0,
// cookie 保存路径
&#39;path&#39;      =&gt; &#39;/&#39;,
// cookie 有效域名
&#39;domain&#39;    =&gt; &#39;&#39;,
//  cookie 启用安全传输
&#39;secure&#39;    =&gt; false,
// httponly设置
&#39;httponly&#39;  =&gt; &#39;&#39;,
// 是否使用 setcookie
&#39;setcookie&#39; =&gt; true,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置-1" tabindex="-1"><a class="header-anchor" href="#设置-1" aria-hidden="true">#</a> 设置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 设置Cookie 有效期为 3600秒
Cookie::set(&#39;name&#39;,&#39;value&#39;,3600);
// 设置cookie 前缀为think_
Cookie::set(&#39;name&#39;,&#39;value&#39;,[&#39;prefix&#39;=&gt;&#39;think_&#39;,&#39;expire&#39;=&gt;3600]);
// 支持数组
Cookie::set(&#39;name&#39;,[1,2,3]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判断" tabindex="-1"><a class="header-anchor" href="#判断" aria-hidden="true">#</a> 判断</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie::has(&#39;name&#39;);
// 判断指定前缀的cookie值是否存在
Cookie::has(&#39;name&#39;,&#39;think_&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取" tabindex="-1"><a class="header-anchor" href="#获取" aria-hidden="true">#</a> 获取</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie::get(&#39;name&#39;);
// 获取指定前缀的cookie值
Cookie::get(&#39;name&#39;,&#39;think_&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除cookie" tabindex="-1"><a class="header-anchor" href="#删除cookie" aria-hidden="true">#</a> 删除cookie</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie::delete(&#39;name&#39;);
// 删除指定前缀的cookie
Cookie::delete(&#39;name&#39;,&#39;think_&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="清空-1" tabindex="-1"><a class="header-anchor" href="#清空-1" aria-hidden="true">#</a> 清空</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 清空指定前缀的cookie
Cookie::clear(&#39;think_&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h3><p><code>ThinkPHP5.0</code>内置了分页实现，要给数据添加分页输出功能在5.0变得非常简单，可以直接在<code>Db</code>类查询的时候调用<code>paginate</code>方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询状态为1的用户数据 并且每页显示10条数据
$list = Db::name(&#39;user&#39;)-&gt;where(&#39;status&#39;,1)-&gt;paginate(10);
// 把分页数据赋值给模板变量list
$this-&gt;assign(&#39;list&#39;, $list);
// 渲染模板输出
return $this-&gt;fetch();

模板文件中分页输出代码如下：

&lt;div&gt;
&lt;ul&gt;
{volist name=&#39;list&#39; id=&#39;user&#39;}
    &lt;li&gt; {$user.nickname}&lt;/li&gt;
{/volist}
&lt;/ul&gt;
&lt;/div&gt;
{$list-&gt;render()}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以单独赋值分页输出的模板变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询状态为1的用户数据 并且每页显示10条数据
$list = User::where(&#39;status&#39;,1)-&gt;paginate(10);
// 获取分页显示
$page = $list-&gt;render();
// 模板变量赋值
$this-&gt;assign(&#39;list&#39;, $list);
$this-&gt;assign(&#39;page&#39;, $page);
// 渲染模板输出
return $this-&gt;fetch();

模板文件中分页输出代码如下：
&lt;div&gt;
&lt;ul&gt;
{volist name=&#39;list&#39; id=&#39;user&#39;}
    &lt;li&gt; {$user.nickname}&lt;/li&gt;
{/volist}
&lt;/ul&gt;
&lt;/div&gt;
{$page}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h3><p><code>ThinkPHP5.0</code>对文件上传的支持更加简单。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public function upload(){
    // 获取表单上传文件 例如上传了001.jpg
    $file = request()-&gt;file(&#39;image&#39;);
    
    // 移动到框架应用根目录/public/uploads/ 目录下
    if($file){
        $info = $file-&gt;move(ROOT_PATH . &#39;public&#39; . DS . &#39;uploads&#39;);
        if($info){
            // 成功上传后 获取上传信息
            // 输出 jpg
            echo $info-&gt;getExtension();
            // 输出 20160820/42a79759f284b767dfcb2a0197904287.jpg
            echo $info-&gt;getSaveName();
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            echo $info-&gt;getFilename(); 
        }else{
            // 上传失败获取错误信息
            echo $file-&gt;getError();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>move</code>方法成功的话返回的是一个<code>\\think\\File</code>对象，你可以对上传后的文件进行后续操作。</p><h4 id="多文件上传" tabindex="-1"><a class="header-anchor" href="#多文件上传" aria-hidden="true">#</a> 多文件上传</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public function upload(){
    // 获取表单上传文件
    $files = request()-&gt;file(&#39;image&#39;);
    foreach($files as $file){
        // 移动到框架应用根目录/public/uploads/ 目录下
        $info = $file-&gt;move(ROOT_PATH . &#39;public&#39; . DS . &#39;uploads&#39;);
        if($info){
            // 成功上传后 获取上传信息
            // 输出 jpg
            echo $info-&gt;getExtension(); 
            // 输出 42a79759f284b767dfcb2a0197904287.jpg
            echo $info-&gt;getFilename(); 
        }else{
            // 上传失败获取错误信息
            echo $file-&gt;getError();
        }    
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多文件上传重名的解决办法-同一时间上传多张图片问题" tabindex="-1"><a class="header-anchor" href="#多文件上传重名的解决办法-同一时间上传多张图片问题" aria-hidden="true">#</a> 多文件上传重名的解决办法(同一时间上传多张图片问题)</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改源代码文件：
/xxx/thinkphp/library/think/File.php

switch ($this-&gt;rule) {
    case &#39;date&#39;:
        $savename = date(&#39;Ymd&#39;) . DS . md5(microtime(true).$this-&gt;filename);
        break;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证码" tabindex="-1"><a class="header-anchor" href="#验证码" aria-hidden="true">#</a> 验证码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先使用Composer安装think-captcha扩展包：

composer require topthink/think-captcha=1.*

模版内验证码的显示
&lt;div&gt;{:captcha_img()}&lt;/div&gt;

&lt;div&gt;&lt;img src=&quot;{:captcha_src()}&quot; alt=&quot;captcha&quot; /&gt;&lt;/div&gt;

使用TP5的内置验证功能，添加captcha验证规则即可
$this-&gt;validate($data,[
    &#39;captcha|验证码&#39;=&gt;&#39;require|captcha&#39;
]);

或者手动验证
if(!captcha_check($captcha)){
 //验证失败
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),l=[s];function r(t,v){return i(),n("div",null,l)}const u=e(a,[["render",r],["__file","08.html.vue"]]);export{u as default};
