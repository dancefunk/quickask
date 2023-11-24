import{_ as n,o as s,c as a,a as t}from"./app-3e5ace64.js";const e={},p=t(`<h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们经常会用到路由守卫这个功能，来帮助我们判断用户的状态是否有登录，如果有登录就进入到路由界面。
如果没有的话就跳转到登录界面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具体实现" tabindex="-1"><a class="header-anchor" href="#具体实现" aria-hidden="true">#</a> 具体实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建一个自定义路由验证的文件 路径 src/routers/auth.js
在当前文件中 我们通过判断cookie中是否有无用户信息来判断是否登录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需要先安装react-cookie" tabindex="-1"><a class="header-anchor" href="#需要先安装react-cookie" aria-hidden="true">#</a> 需要先安装react-cookie</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add react-cookies -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>src/routers/auth.js 定义路由验证文件</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useNavigate<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> cookie <span class="token keyword">from</span> <span class="token string">&#39;react-cookies&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">AuthRouter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">AuthLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">let</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> LoginUser <span class="token operator">=</span> cookie<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> cookie<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>LoginUser<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">&#39;/user/base/login&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">&gt;</span> 
        <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>auth <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>AuthLogin <span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>component<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AuthRouter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参考使用方式</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们在项目中判断是否登录，无非就是封装一个自定义组件，让自定义组件来判断是否有没有登录就可以了
我们通过传递一些自定义参数来给我们的自定义验证组件
auth 如果为true 就说明当前访问的路由是需要登录的 否则就不需要登录
component  为访问该路由的一个页面组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> AuthRouter <span class="token keyword">from</span> <span class="token string">&#39;./auth&#39;</span>

<span class="token operator">&lt;</span>Routes<span class="token operator">&gt;</span>
  <span class="token punctuation">{</span><span class="token comment">/* 默认首页 */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>
    	<span class="token operator">&lt;</span>Route 
    		path<span class="token operator">=</span><span class="token string">&#39;/user/index&#39;</span> 
    		element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AuthRouter auth<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> component<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>自己的组件 <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>AuthRouter<span class="token operator">&gt;</span><span class="token punctuation">}</span>
    	<span class="token operator">&gt;</span>
    	<span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
    <span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在路由入口封装文件中的使用方式 /src/routers/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Routes<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Outlet<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> AuthRouter <span class="token keyword">from</span> <span class="token string">&#39;./auth&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;@/components/home.js&#39;</span>

<span class="token comment">// 引入每个目录下面的index.js文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">index.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>

<span class="token comment">// 总路由集合</span>
<span class="token keyword">const</span> RouterMap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">//对引入的文件进行循环</span>
ModulesFile<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">modules<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token comment">// 路由模块名称   文件夹/index  user/index</span>
  <span class="token keyword">const</span> ModuleName <span class="token operator">=</span> modulePath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.\\/(.*)\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//不包含当前index.js 文件</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>ModuleName <span class="token operator">!==</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//路由列表</span>
    <span class="token keyword">const</span> ModuleList <span class="token operator">=</span> <span class="token function">ModulesFile</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>

    <span class="token comment">//追加到数组</span>
    RouterMap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>ModuleList<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> RouterMap
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">RouterList</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Routes<span class="token operator">&gt;</span>
          <span class="token punctuation">{</span><span class="token comment">/* 默认首页 */</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>

          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
            <span class="token punctuation">{</span>
              RouterMap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>Route key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> path<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>path<span class="token punctuation">}</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AuthRouter auth<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>auth<span class="token punctuation">}</span> component<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>item<span class="token punctuation">.</span>component <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>AuthRouter<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span>item<span class="token punctuation">.</span>children <span class="token operator">&amp;&amp;</span>
                      item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">son<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>Route key<span class="token operator">=</span><span class="token punctuation">{</span>idx<span class="token punctuation">}</span> path<span class="token operator">=</span><span class="token punctuation">{</span>son<span class="token punctuation">.</span>path<span class="token punctuation">}</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AuthRouter auth<span class="token operator">=</span><span class="token punctuation">{</span>son<span class="token punctuation">.</span>auth<span class="token punctuation">}</span> component<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>son<span class="token punctuation">.</span>component <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>AuthRouter<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> RouterList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由的结构" tabindex="-1"><a class="header-anchor" href="#路由的结构" aria-hidden="true">#</a> 路由的结构</h3><blockquote><p>src/routers/user/base.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 用户基本资料路由 - 子路由
 */</span>
<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;base/profile&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> profile<span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;base/login&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> login<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;base/register&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;register&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> register
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> base
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","04.html.vue"]]);export{u as default};
