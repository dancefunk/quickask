import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const t={},p=e(`<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在使用vue-router来进行路由封装的时候，就会需要用到该功能点

在用vue-router的时候会遇到需要引入当前文件夹下的所有文件例如引入module文件夹下所有的js文件

通常可以再module文件夹下建一个index.js 文件，然后在index文件里统一export 导出

但其实可以更方便，require.context这个方法可以满足需求，不需要再每次都要在index文件里导出了

我们先可以看一下目录结构

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>/router/
	user/
		address.js
		user.js
		order.js
		index.js
		
	goods/
		cart.js
		goods.js
		type.js
		index.js
		
	index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见我们发现每个目录下面都有一个<code>index.js</code>这个文件，那么这个文件就是每个路由模块的入口文件</p><h3 id="总入口文件" tabindex="-1"><a class="header-anchor" href="#总入口文件" aria-hidden="true">#</a> 总入口文件</h3><blockquote><ul><li>/router/index.js</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">&#39;@/components/home&#39;</span>

<span class="token comment">//让vue这个应用具备路由的功能</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span>


<span class="token comment">//-----------------------------这个是核心引入文件部分-----------------------------------------</span>
<span class="token comment">// 引入每个目录下面的index.js文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">index.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>

<span class="token comment">// 总路由集合</span>
<span class="token keyword">const</span> RouterList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">//对引入的文件进行循环</span>
ModulesFile<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">modules<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token comment">// 路由模块名称   文件夹/index  user/index</span>
  <span class="token keyword">const</span> ModuleName <span class="token operator">=</span> modulePath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.\\/(.*)\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//不包含当前index.js 文件</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>ModuleName <span class="token operator">!=</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//路由列表</span>
    <span class="token keyword">const</span> ModuleList <span class="token operator">=</span> <span class="token function">ModulesFile</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>

    <span class="token comment">//追加到数组</span>
    RouterList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>ModuleList<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//这个 RouterList 就是组装后的结果</span>

<span class="token comment">//-----------------------------这个是核心引入文件部分-----------------------------------------</span>


<span class="token comment">// 创建一个总路由对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span> <span class="token comment">//使用js bom对象中history模式  并且不会有 /# </span>
  <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token comment">//激活链接状态class名称</span>
  <span class="token comment">//routes 很容易写成 routers !!!!!!!!!</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">//跟路由</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//传参选项 query</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token comment">//传参选项 params</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> home<span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//自定义参数</span>
        <span class="token literal-property property">Auth</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//自定义命名 比如Auth为true就是需要登录 否则不需要登录</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>RouterList  <span class="token comment">// 父-子</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每个独立路由模块下面的index-js" tabindex="-1"><a class="header-anchor" href="#每个独立路由模块下面的index-js" aria-hidden="true">#</a> 每个独立路由模块下面的index.js</h3><blockquote><ul><li>/router/user/index.js</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入当前目录下面的所有文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>

<span class="token keyword">const</span> RouterList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

ModulesFile<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">modules<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 路由模块名称</span>
  <span class="token keyword">const</span> ModuleName <span class="token operator">=</span> modulePath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.\\/(.*)\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//不包含当前index.js 文件</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>ModuleName <span class="token operator">!=</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//路由列表(数组)</span>
    <span class="token keyword">const</span> ModuleList <span class="token operator">=</span> <span class="token function">ModulesFile</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>

    <span class="token comment">//追加到数组</span>
    RouterList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>ModuleList<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//定义父组件</span>
<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;router-view&gt;&lt;/router-view&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">//导出</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 父路由</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>layout<span class="token punctuation">,</span>
    <span class="token comment">//子路由分组   /user/order/xxxx</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token operator">...</span>RouterList
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的路由文件" tabindex="-1"><a class="header-anchor" href="#其他的路由文件" aria-hidden="true">#</a> 其他的路由文件</h3><blockquote><ul><li>/router/user/base.js</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/base/login&quot;</span>
<span class="token keyword">import</span> register <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/base/register&quot;</span>


<span class="token doc-comment comment">/**
 * 用户基本资料路由 - 子路由
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// /user/base/login</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;base/login&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>login<span class="token punctuation">,</span>
    <span class="token comment">//路由独享的钩子</span>
    <span class="token comment">// beforeEnter:() =&gt; {</span>

    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// /user/base/login</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;base/register&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;register&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>register
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","JSzidongyinrudangqianmodulewenjianjiaxiadesuoyouwenjian.html.vue"]]);export{u as default};
