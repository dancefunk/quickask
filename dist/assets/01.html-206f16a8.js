import{_ as e,r as t,o as p,c as o,b as n,d as s,e as l,a as c}from"./app-f25f351f.js";const i={},r=n("h3",{id:"react-router-dom",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-router-dom","aria-hidden":"true"},"#"),s(" react-router-dom")],-1),u={href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer"},d=c(`<h3 id="安装react-route-dom6" tabindex="-1"><a class="header-anchor" href="#安装react-route-dom6" aria-hidden="true">#</a> 安装react-route-dom6</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install react-router-dom -S
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
		base/
			index.js
			login.js
			profile.js
			register.js
			
		address/
			index.js
			add.js
			edit.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>路由的目录结构</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>routers/
	user/
		base.js
		address.js
		order.js
		index.js
		
	product/
		cart.js
		product.js
		type.js
		index.js
		
	index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见我们发现每个目录下面都有一个<code>index.js</code>这个文件，那么这个文件就是每个路由模块的入口文件</p><h3 id="总入口文件" tabindex="-1"><a class="header-anchor" href="#总入口文件" aria-hidden="true">#</a> 总入口文件</h3><blockquote><p>src/routers/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每个独立路由模块下面的index-js" tabindex="-1"><a class="header-anchor" href="#每个独立路由模块下面的index-js" aria-hidden="true">#</a> 每个独立路由模块下面的index.js</h3><blockquote><p>src/routers/user/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Outlet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token comment">// 引入当前目录下面的所有文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>

<span class="token keyword">const</span> RouterMap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

ModulesFile<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">modules<span class="token punctuation">,</span> modulePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 路由模块名称</span>
  <span class="token keyword">const</span> ModuleName <span class="token operator">=</span> modulePath<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.\\/(.*)\\.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span><span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">//不包含当前index.js 文件</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>ModuleName <span class="token operator">!==</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//路由列表(数组)</span>
    <span class="token keyword">const</span> ModuleList <span class="token operator">=</span> <span class="token function">ModulesFile</span><span class="token punctuation">(</span>modulePath<span class="token punctuation">)</span>

    <span class="token comment">//追加到数组</span>
    RouterMap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>ModuleList<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> RouterMap
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

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
    <span class="token literal-property property">children</span><span class="token operator">:</span> RouterMap<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> RouterList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的路由文件" tabindex="-1"><a class="header-anchor" href="#其他的路由文件" aria-hidden="true">#</a> 其他的路由文件</h3><blockquote><p>src/routers/user/base.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/base/login&quot;</span>
<span class="token keyword">import</span> register <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/base/register&quot;</span>
<span class="token keyword">import</span> profile <span class="token keyword">from</span> <span class="token string">&quot;@/components/user/base/profile&quot;</span>


<span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function k(v,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[s("官网：https://reactrouter.com/"),l(a)])]),d])}const g=e(i,[["render",k],["__file","01.html.vue"]]);export{g as default};
