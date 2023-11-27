import{_ as e,o as t,c as i,a as n}from"./app-a528498f.js";const d={},l=n(`<h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><p>视图功能由<code>\\think\\View</code>类配合视图驱动（模板引擎）类一起完成，目前的内置模板引擎包含PHP原生模板和<code>Think</code>模板引擎。</p><p>因为新版的控制器可以无需继承任何的基础类，因此在控制器中如何使用视图取决于你怎么定义控制器。</p><p>如果你的控制器继承了<code>\\think\\Controller</code>类的话，则无需自己实例化视图类，可以直接调用控制器基础类封装的相关视图类的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 渲染模板输出
return $this-&gt;fetch(&#39;hello&#39;,[&#39;name&#39;=&gt;&#39;thinkphp&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的方法可以直接被调用：</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">fetch</td><td style="text-align:left;">渲染模板输出</td></tr><tr><td style="text-align:left;">display</td><td style="text-align:left;">渲染内容输出</td></tr><tr><td style="text-align:left;">assign</td><td style="text-align:left;">模板变量赋值</td></tr><tr><td style="text-align:left;">engine</td><td style="text-align:left;">初始化模板引擎</td></tr></tbody></table><p>如果需要调用<code>View</code>类的其它方法，可以直接使用<code>$this-&gt;view</code> 对象：</p><h4 id="助手函数" tabindex="-1"><a class="header-anchor" href="#助手函数" aria-hidden="true">#</a> 助手函数</h4><p>如果你只是需要渲染模板输出的话，可以使用系统提供的助手函数<code>view</code>，可以完成相同的功能：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return view(&#39;hello&#39;,[&#39;name&#39;=&gt;&#39;thinkphp&#39;]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="模板赋值" tabindex="-1"><a class="header-anchor" href="#模板赋值" aria-hidden="true">#</a> 模板赋值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace index\\app\\controller;

class Index extends \\think\\Controller
{
    public function index()
    {
        // 模板变量赋值
        $this-&gt;assign(&#39;name&#39;,&#39;ThinkPHP&#39;);
        $this-&gt;assign(&#39;email&#39;,&#39;thinkphp@qq.com&#39;);
        // 或者批量赋值
        $this-&gt;assign([
            &#39;name&#39;  =&gt; &#39;ThinkPHP&#39;,
            &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;
        ]);
        // 模板输出
        return $this-&gt;fetch(&#39;index&#39;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板渲染" tabindex="-1"><a class="header-anchor" href="#模板渲染" aria-hidden="true">#</a> 模板渲染</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 不带任何参数 自动定位当前操作的模板文件
return $this-&gt;fetch();

表示系统会按照默认规则自动定位模板文件，其规则是：
当前模块/默认视图目录/当前控制器（小写）/当前操作（小写）.html

// 指定模板输出 表示调用当前控制器下面的edit模板
return $this-&gt;fetch(&#39;edit&#39;); 

表示调用Member控制器下面的read模板。
return $this-&gt;fetch(&#39;member/read&#39;);

跨模块渲染模板
return $this-&gt;fetch(&#39;admin@member/edit&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板标签" tabindex="-1"><a class="header-anchor" href="#模板标签" aria-hidden="true">#</a> 模板标签</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>要更改普通标签的起始标签和结束标签，可以更改下面的配置参数：

&#39;template&#39;      =&gt; [
    // 模板引擎
    &#39;type&#39;   =&gt; &#39;think&#39;,
    //标签库标签开始标签 
    &#39;taglib_begin&#39;  =&gt;  &#39;&lt;&#39;,
    //标签库标签结束标记
    &#39;taglib_end&#39;    =&gt;  &#39;&gt;&#39;,     
],

输出模板标签就需要改成

&lt;eq name=&quot;name&quot; value=&quot;value&quot;&gt;
相等
&lt;else/&gt;
不相等
&lt;/eq&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量输出" tabindex="-1"><a class="header-anchor" href="#变量输出" aria-hidden="true">#</a> 变量输出</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$view = new View();
$view-&gt;name = &#39;thinkphp&#39;;
return $view-&gt;fetch();

Hello,{$name}！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系统变量输出" tabindex="-1"><a class="header-anchor" href="#系统变量输出" aria-hidden="true">#</a> 系统变量输出</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{$Think.server.script_name} // 输出$_SERVER[&#39;SCRIPT_NAME&#39;]变量
{$Think.session.user_id} // 输出$_SESSION[&#39;user_id&#39;]变量
{$Think.get.pageNumber} // 输出$_GET[&#39;pageNumber&#39;]变量
{$Think.cookie.name}  // 输出$_COOKIE[&#39;name&#39;]变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>模板支持直接输出Request请求对象的方法参数，用法如下：

// 调用Request对象的get方法 传入参数为id
{$Request.get.id}
// 调用Request对象的param方法 传入参数为name
{$Request.param.name}
// 调用Request对象的param方法 传入参数为user.nickname
{$Request.param.user.nickname}
// 调用Request对象的root方法
{$Request.root}
// 调用Request对象的root方法，并且传入参数true
{$Request.root.true}
// 调用Request对象的path方法
{$Request.path}
// 调用Request对象的module方法
{$Request.module}
// 调用Request对象的controller方法
{$Request.controller}
// 调用Request对象的action方法
{$Request.action}
// 调用Request对象的ext方法
{$Request.ext}
// 调用Request对象的host方法
{$Request.host}
// 调用Request对象的ip方法
{$Request.ip}
// 调用Request对象的header方法
{$Request.header.accept-encoding}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用函数" tabindex="-1"><a class="header-anchor" href="#使用函数" aria-hidden="true">#</a> 使用函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们往往需要对模板输出变量使用函数，可以使用：
{$data.name|md5} 

编译后的结果是：
&lt;?php echo (md5($data[&#39;name&#39;])); ?&gt;

{$data.name|substr=0,3}


如果函数有多个参数需要调用，则使用：
{$create_time|date=&quot;y-m-d&quot;,###}

还可以支持多个函数过滤，多个函数之间用&quot;|&quot;分割即可，例如：
{$name|md5|strtoupper|substr=0,3}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用默认值" tabindex="-1"><a class="header-anchor" href="#使用默认值" aria-hidden="true">#</a> 使用默认值</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>给变量输出提供默认值，例如：
{$user.nickname|default=&quot;这家伙很懒，什么也没留下&quot;}

系统变量依然可以支持默认值输出，例如：
{$Think.get.name|default=&quot;名称为空&quot;}

默认值和函数可以同时使用，例如：
{$Think.get.name|getName|default=&quot;名称为空&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三元运算" tabindex="-1"><a class="header-anchor" href="#三元运算" aria-hidden="true">#</a> 三元运算</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{$status? &#39;正常&#39; : &#39;错误&#39;}
{$info[&#39;status&#39;]? $info[&#39;msg&#39;] : $info[&#39;error&#39;]}
{$info.status? $info.msg : $info.error }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原样输出" tabindex="-1"><a class="header-anchor" href="#原样输出" aria-hidden="true">#</a> 原样输出</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可以使用literal标签来防止模板标签被解析，例如：

{literal}
    Hello,{$name}！
{/literal}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板注释" tabindex="-1"><a class="header-anchor" href="#模板注释" aria-hidden="true">#</a> 模板注释</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单行注释
{/* 注释内容 */ } 或 {// 注释内容 } 

多行注释
{/* 这是模板
注释内容*/ }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模板布局" tabindex="-1"><a class="header-anchor" href="#模板布局" aria-hidden="true">#</a> 模板布局</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>全局配置方式

&#39;template&#39;  =&gt;  [
    &#39;layout_on&#39;     =&gt;  true,
    &#39;layout_name&#39;   =&gt;  &#39;layout&#39;,
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先会渲染<code>application/index/view/layout.html</code> 模板，布局模板的写法和其他模板的写法类似，本身也可以支持所有的模板标签以及包含文件，区别在于有一个特定的输出替换变量<code>{__CONTENT__}</code>，例如，下面是一个典型的<code>layout.html</code>模板的写法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{include file=&quot;public/header&quot; /}
 {__CONTENT__}
{include file=&quot;public/footer&quot; /}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="包含文件" tabindex="-1"><a class="header-anchor" href="#包含文件" aria-hidden="true">#</a> 包含文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在当前模版文件中包含其他的模版文件使用include标签，标签用法：
{include file=&#39;模版文件1,模版文件2,...&#39; /}

使用模版表达式
{include file=&quot;public/header&quot; /} // 包含头部模版header
{include file=&quot;public/menu&quot; /} // 包含菜单模版menu
{include file=&quot;blue/public/menu&quot; /} // 包含blue主题下面的menu模版
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置标签" tabindex="-1"><a class="header-anchor" href="#内置标签" aria-hidden="true">#</a> 内置标签</h4><table><thead><tr><th style="text-align:left;">标签名</th><th style="text-align:left;">作用</th><th style="text-align:left;">包含属性</th></tr></thead><tbody><tr><td style="text-align:left;">include</td><td style="text-align:left;">包含外部模板文件（闭合）</td><td style="text-align:left;">file</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">导入资源文件（闭合 包括js css import别名）</td><td style="text-align:left;">file,href,type,value,basepath</td></tr><tr><td style="text-align:left;">volist</td><td style="text-align:left;">循环数组数据输出</td><td style="text-align:left;">name,id,offset,length,key,mod</td></tr><tr><td style="text-align:left;">foreach</td><td style="text-align:left;">数组或对象遍历输出</td><td style="text-align:left;">name,item,key</td></tr><tr><td style="text-align:left;">for</td><td style="text-align:left;">For循环数据输出</td><td style="text-align:left;">name,from,to,before,step</td></tr><tr><td style="text-align:left;">switch</td><td style="text-align:left;">分支判断输出</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">case</td><td style="text-align:left;">分支判断输出（必须和switch配套使用）</td><td style="text-align:left;">value,break</td></tr><tr><td style="text-align:left;">default</td><td style="text-align:left;">默认情况输出（闭合 必须和switch配套使用）</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">compare</td><td style="text-align:left;">比较输出（包括eq neq lt gt egt elt heq nheq等别名）</td><td style="text-align:left;">name,value,type</td></tr><tr><td style="text-align:left;">range</td><td style="text-align:left;">范围判断输出（包括in notin between notbetween别名）</td><td style="text-align:left;">name,value,type</td></tr><tr><td style="text-align:left;">present</td><td style="text-align:left;">判断是否赋值</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">notpresent</td><td style="text-align:left;">判断是否尚未赋值</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">empty</td><td style="text-align:left;">判断数据是否为空</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">notempty</td><td style="text-align:left;">判断数据是否不为空</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">defined</td><td style="text-align:left;">判断常量是否定义</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">notdefined</td><td style="text-align:left;">判断常量是否未定义</td><td style="text-align:left;">name</td></tr><tr><td style="text-align:left;">define</td><td style="text-align:left;">常量定义（闭合）</td><td style="text-align:left;">name,value</td></tr><tr><td style="text-align:left;">assign</td><td style="text-align:left;">变量赋值（闭合）</td><td style="text-align:left;">name,value</td></tr><tr><td style="text-align:left;">if</td><td style="text-align:left;">条件判断输出</td><td style="text-align:left;">condition</td></tr><tr><td style="text-align:left;">elseif</td><td style="text-align:left;">条件判断输出（闭合 必须和if标签配套使用）</td><td style="text-align:left;">condition</td></tr><tr><td style="text-align:left;">else</td><td style="text-align:left;">条件不成立输出（闭合 可用于其他标签）</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">php</td><td style="text-align:left;">使用php代码</td><td style="text-align:left;">无</td></tr></tbody></table>`,41),a=[l];function s(r,v){return t(),i("div",null,a)}const c=e(d,[["render",s],["__file","07.html.vue"]]);export{c as default};
