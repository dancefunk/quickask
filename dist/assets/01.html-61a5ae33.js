import{_ as e,r as t,o as p,c as o,b as n,d as s,e as l,a as c}from"./app-4841f850.js";const r={},i=n("h3",{id:"react-router-dom",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-router-dom","aria-hidden":"true"},"#"),s(" react-router-dom")],-1),u={href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer"},d=c(`<h3 id="安装react-route-dom" tabindex="-1"><a class="header-anchor" href="#安装react-route-dom" aria-hidden="true">#</a> 安装react-route-dom</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install react-router-dom -S
yarn add react-router-dom -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>快速入门使用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&#39;./Foo&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">&#39;./Bar&#39;</span><span class="token punctuation">;</span>
​
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Routes<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/foo&#39;</span> element<span class="token operator">=</span><span class="token punctuation">{</span>Foo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&#39;/bar&#39;</span> element<span class="token operator">=</span><span class="token punctuation">{</span>Bar<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在使用react-router-dom来进行路由封装的时候，就会需要用到该功能点

在用react-router-dom的时候会遇到需要引入当前文件夹下的所有文件例如引入module文件夹下所有的js文件

通常可以再module文件夹下建一个index.js 文件，然后在index文件里统一 export导出

但其实可以更方便，require.context这个方法可以满足需求，不需要再每次都要在index文件里导出了

这样操作我们还有一个好处就是可以让路由封装的路径与Components组件目录的路径一致

我们先可以看一下目录结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>组件的目录结构</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
	user/
		index.js
		login.js
		profile.js
		register.js
		
	address/
		index.js
		add.js
		edit.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>路由的目录结构</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>routers/
	user.js
	address.js
	index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总入口文件" tabindex="-1"><a class="header-anchor" href="#总入口文件" aria-hidden="true">#</a> 总入口文件</h3><blockquote><p>src/routers/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Routes<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Outlet<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> AuthRouter <span class="token keyword">from</span> <span class="token string">&#39;./auth&#39;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;@/components/home.js&#39;</span>

<span class="token comment">// 引入当前目录下面的所有文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>

<span class="token comment">// 总路由集合</span>
<span class="token keyword">const</span> RouterMap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">//不需要合并的文件</span>
<span class="token keyword">var</span> NoNeedAuth <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;auth&#39;</span><span class="token punctuation">]</span>

<span class="token comment">//对引入的文件进行循环</span>
ModulesFile<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">modules<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

  <span class="token comment">// 路由模块名称   文件夹/index  user/index</span>
  <span class="token keyword">const</span> ModuleName <span class="token operator">=</span> modulePath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.\\/(.*)\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//不需要包含不必要的文件进来</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>NoNeedAuth<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ModuleName<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//路由列表</span>
    <span class="token keyword">const</span> ModuleList <span class="token operator">=</span> <span class="token function">ModulesFile</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>

    <span class="token comment">//追加到数组</span>
    RouterMap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>ModuleList<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> RouterMap
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">const</span> <span class="token function-variable function">RouterList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
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

<span class="token keyword">export</span> <span class="token keyword">default</span> RouterList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/routers/auth.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Navigate<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>


<span class="token keyword">const</span> <span class="token function-variable function">AuthRouter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
  <span class="token comment">//根据auth参数来判断是否需要登录访问</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>auth<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//获取cookie信息</span>
    <span class="token keyword">var</span> LoginUser <span class="token operator">=</span> React<span class="token punctuation">.</span>$cookie<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> React<span class="token punctuation">.</span>$cookie<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">//如果没有cookie,就重定向到登录界面,有cookie的话就显示路由组件</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>LoginUser<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">&quot;/user/login&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
          <span class="token punctuation">{</span>props<span class="token punctuation">.</span>component<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>component<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> AuthRouter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的路由文件" tabindex="-1"><a class="header-anchor" href="#其他的路由文件" aria-hidden="true">#</a> 其他的路由文件</h3><blockquote><p>src/routers/user.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Outlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/login&quot;</span>
<span class="token keyword">import</span> register <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/register&quot;</span>
<span class="token keyword">import</span> profile <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/profile&quot;</span>

<span class="token doc-comment comment">/**
 * 用户基本资料路由 - 子路由
 */</span>
<span class="token keyword">const</span> lists <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> profile<span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;login&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> login<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;register&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;register&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> register
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">//默认父组件 可以自己定义</span>
<span class="token keyword">const</span> <span class="token function-variable function">layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> RouterList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> lists<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> RouterList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根组件使用" tabindex="-1"><a class="header-anchor" href="#根组件使用" aria-hidden="true">#</a> 根组件使用</h3><blockquote><p>src/App.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./App.css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>BrowserRouter<span class="token punctuation">,</span> Link<span class="token punctuation">,</span> NavLink<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>
<span class="token keyword">import</span> RouterList <span class="token keyword">from</span> <span class="token string">&#39;./routers/index.js&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token operator">&gt;</span>去首页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/user/login&quot;</span><span class="token operator">&gt;</span>登录 <span class="token operator">-</span> 有登录按钮和退出按钮<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/user/register&quot;</span><span class="token operator">&gt;</span>注册<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">&quot;/user/profile&quot;</span><span class="token operator">&gt;</span>会员中心<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">&gt;</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>

      <span class="token operator">&lt;</span>hr <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>RouterList <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",u,[s("官网：https://reactrouter.com/"),l(a)])]),d])}const g=e(r,[["render",k],["__file","01.html.vue"]]);export{g as default};
