import{_ as e,o as n,c as i,a as d}from"./app-11dfbba7.js";const s={},a=d(`<h3 id="控制器" tabindex="-1"><a class="header-anchor" href="#控制器" aria-hidden="true">#</a> 控制器</h3><p>ThinkPHP V5.0的控制器定义比较灵活，可以无需继承任何的基础类，也可以继承官方封装的<code>\\think\\Controller</code>类或者其他的控制器类。</p><h3 id="修改控制器系统配置" tabindex="-1"><a class="header-anchor" href="#修改控制器系统配置" aria-hidden="true">#</a> 修改控制器系统配置</h3><blockquote><ul><li>配置文件路径：application\\config.php</li></ul></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 自动搜索控制器</span>
<span class="token string single-quoted-string">&#39;controller_auto_search&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>

该配置项的作用是：
http<span class="token punctuation">:</span><span class="token comment">//local.tp5.com/index/goods.goods/index</span>
http<span class="token punctuation">:</span><span class="token comment">//你的基本url/模块名/分组名.控制器名/方法名</span>

修改后
http<span class="token punctuation">:</span><span class="token comment">//local.tp5.com/index/goods/index/goods/goods/index</span>

将 <span class="token string double-quoted-string">&quot;.&quot;</span> 修改为 <span class="token string double-quoted-string">&quot;/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制器定义" tabindex="-1"><a class="header-anchor" href="#控制器定义" aria-hidden="true">#</a> 控制器定义</h3><blockquote><ul><li>控制器的实际位置：application\\index\\controller\\Index.php</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\controller;

class Index 
{
    public function index()
    {
        return &#39;index&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制器类可以无需继承任何类，命名空间默认以<code>app</code>为根命名空间。</p><p>控制器的根命名空间可以设置，例如我们在应用配置文件中修改：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 修改应用类库命名空间
&#39;app_namespace&#39; =&gt; &#39;application&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>则实际的控制器类应该更改定义如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace application\\index\\controller;

class Index 
{
    public function index()
    {
        return &#39;index&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果继承了<code>think\\Controller</code>类的话，可以直接调用<code>think\\View</code>及<code>think\\Request</code>类的方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\controller;

use think\\Controller;

class Index extends Controller
{
    public function index()
    {
        // 获取包含域名的完整URL地址
        $this-&gt;assign(&#39;domain&#39;,$this-&gt;request-&gt;url(true));
        return $this-&gt;fetch(&#39;index&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制器初始化" tabindex="-1"><a class="header-anchor" href="#控制器初始化" aria-hidden="true">#</a> 控制器初始化</h3><p>如果你的控制器类继承了<code>\\think\\Controller</code>类的话，可以定义控制器初始化方法<code>_initialize</code>，在该控制器的方法调用之前首先执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\controller;

use think\\Controller;

class Index extends Controller
{

    public function _initialize()
    {
        echo &#39;init&lt;br/&gt;&#39;;
    }
    
    public function hello()
    {
        return &#39;hello&#39;;
    }
    
    public function data()
    {
        return &#39;data&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code>http://localhost/index.php/index/Index/hello</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输出：
init
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面跳转" tabindex="-1"><a class="header-anchor" href="#页面跳转" aria-hidden="true">#</a> 页面跳转</h3><p>在应用开发中，经常会遇到一些带有提示信息的跳转页面，例如操作成功或者操作错误页面，并且自动跳转到另外一个目标页面。系统的<code>\\think\\Controller</code>类内置了两个跳转方法<code>success</code>和<code>error</code>，用于页面跳转提示。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\controller;

use think\\Controller;
use app\\index\\model\\User;

class Index extends Controller
{
    public function index()
    {
        $User = new User; //实例化User对象
        $result = $User-&gt;save($data); 
        if($result){
            //设置成功后跳转页面的地址，默认的返回页面是$_SERVER[&#39;HTTP_REFERER&#39;]
            $this-&gt;success(&#39;新增成功&#39;, &#39;User/list&#39;);
        } else {
            //错误页面的默认跳转页面是返回前一页，通常不需要设置
            $this-&gt;error(&#39;新增失败&#39;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>跳转地址是可选的，success方法的默认跳转地址是<code>$_SERVER[&quot;HTTP_REFERER&quot;]</code>，<code>error</code>方法的默认跳转地址是<code>javascript:history.back(-1);</code></p><p><code>success</code>和<code>error</code>方法都可以对应的模板，默认的设置是两个方法对应的模板都是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>THINK_PATH . &#39;tpl/dispatch_jump.tpl&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以改变默认的模板：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//默认错误跳转对应的模板文件
&#39;dispatch_error_tmpl&#39; =&gt; APP_PATH . &#39;tpl/dispatch_jump.tpl&#39;,
//默认成功跳转对应的模板文件
&#39;dispatch_success_tmpl&#39; =&gt; APP_PATH . &#39;tpl/dispatch_jump.tpl&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用项目内部的模板文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//默认错误跳转对应的模板文件
&#39;dispatch_error_tmpl&#39; =&gt; &#39;public/error&#39;,
//默认成功跳转对应的模板文件
&#39;dispatch_success_tmpl&#39; =&gt; &#39;public/success&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板文件可以使用模板标签，并且可以使用下面的模板变量：</p><h3 id="重定向" tabindex="-1"><a class="header-anchor" href="#重定向" aria-hidden="true">#</a> 重定向</h3><p><code>\\think\\Controller</code>类的<code>redirect</code>方法可以实现页面的重定向功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//重定向到News模块的Category操作
$this-&gt;redirect(&#39;News/category&#39;, [&#39;cate_id&#39; =&gt; 2]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的用法是跳转到News模块的category操作，重定向后会改变当前的URL地址。</p><p>或者直接重定向到一个指定的外部URL地址，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//重定向到指定的URL地址 并且使用302
$this-&gt;redirect(&#39;http://thinkphp.cn/blog/2&#39;,302);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在重定向的时候通过session闪存数据传值，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$this-&gt;redirect(&#39;News/category&#39;, [&#39;cate_id&#39; =&gt; 2], 302, [&#39;data&#39; =&gt; &#39;hello&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用redirect助手函数还可以实现更多的功能，例如可以记住当前的URL后跳转</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redirect(&#39;News/category&#39;)-&gt;remember();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="空操作" tabindex="-1"><a class="header-anchor" href="#空操作" aria-hidden="true">#</a> 空操作</h3><p>空操作是指系统在找不到指定的操作方法的时候，会定位到空操作（<code>_empty</code>）方法来执行，利用这个机制，我们可以实现错误页面和一些<code>URL</code>的优化。</p><p>例如，下面我们用空操作功能来实现一个城市切换的功能。<br> 我们只需要给City控制器类定义一个_empty （空操作）方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
namespace app\\index\\controller;

class City 
{
    public function _empty($name)
    {
        //把所有城市的操作解析到city方法
        return $this-&gt;showCity($name);
    }
    
    //注意 showCity方法 本身是 protected 方法
    protected function showCity($name)
    {
        //和$name这个城市相关的处理
         return &#39;当前城市&#39; . $name;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们就可以在浏览器里面输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://serverName/index/city/beijing/
http://serverName/index/city/shanghai/
http://serverName/index/city/shenzhen/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于City并没有定义<code>beijing</code>、<code>shanghai</code>或者<code>shenzhen</code>操作方法，因此系统会定位到空操作方法 <code>_empty</code>中去解析，<code>_empty</code>方法的参数就是当前URL里面的操作名，因此会看到依次输出的结果是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当前城市:beijing
当前城市:shanghai
当前城市:shenzhen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),l=[a];function c(t,r){return n(),i("div",null,l)}const u=e(s,[["render",c],["__file","03.html.vue"]]);export{u as default};
