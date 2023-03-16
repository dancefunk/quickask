import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const e={},p=t(`<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在UniApp项目开发当中，经常会去调用后端的接口，所以我们在UniApp搭建的过程中，需要对接口请求进行封装

在封装的过程中我们需要去安装 uview，来帮助我们发送http请求

下面就是封装的过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>接口的目录结构</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>services/  					存放自定义封装的服务文件
	request.js 				uview内部的http请求插件的二次封装
	
api/
	user/
		address.js
		profile.js
		index.js
		
	product/
		product.js
		index.js
		
	index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见我们发现每个目录下面都有一个<code>index.js</code>这个文件，那么这个文件就是每个接口的入口文件</p><h3 id="总入口文件" tabindex="-1"><a class="header-anchor" href="#总入口文件" aria-hidden="true">#</a> 总入口文件</h3><blockquote><p>src/api/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//默认引入模块</span>
<span class="token keyword">const</span> files <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">index.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

files<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

	<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default

	<span class="token keyword">var</span> mod <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">//替换路径</span>
	<span class="token keyword">var</span> name <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\/(.*)\\/index.js</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;$1&quot;</span><span class="token punctuation">)</span>

	mod<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> item

	Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>modules<span class="token punctuation">,</span> mod<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> vm</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">//加载模块</span>
	modules

	<span class="token comment">//循环组合接口API</span>
	<span class="token keyword">let</span> api <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> ModeName <span class="token keyword">in</span> modules<span class="token punctuation">)</span> 
	<span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>modules<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> ApiName <span class="token keyword">in</span> modules<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span><span class="token punctuation">)</span> 
		<span class="token punctuation">{</span>
			<span class="token keyword">let</span> config <span class="token operator">=</span> modules<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span><span class="token punctuation">[</span>ApiName<span class="token punctuation">]</span>
			config<span class="token punctuation">.</span>name <span class="token operator">=</span> ApiName
	
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>config<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token operator">!</span>config<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">continue</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>api<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				api<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">switch</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">case</span> <span class="token string">&quot;GET&quot;</span><span class="token operator">:</span>
					api<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span><span class="token punctuation">[</span>config<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> uni<span class="token punctuation">.</span>$u<span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>url<span class="token punctuation">,</span>data<span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
					<span class="token keyword">break</span>
				<span class="token keyword">case</span> <span class="token string">&quot;POST&quot;</span><span class="token operator">:</span>
					api<span class="token punctuation">[</span>ModeName<span class="token punctuation">]</span><span class="token punctuation">[</span>config<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> uni<span class="token punctuation">.</span>$u<span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>url<span class="token punctuation">,</span>data<span class="token punctuation">)</span>
					<span class="token keyword">break</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	vm<span class="token punctuation">.</span>$u<span class="token punctuation">.</span>api <span class="token operator">=</span> api
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	install
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每个独立接口模块下面的index-js" tabindex="-1"><a class="header-anchor" href="#每个独立接口模块下面的index-js" aria-hidden="true">#</a> 每个独立接口模块下面的index.js</h3><blockquote><p>src/api/user/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> files <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

files<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">files</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span>default
  Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的接口文件" tabindex="-1"><a class="header-anchor" href="#其他的接口文件" aria-hidden="true">#</a> 其他的接口文件</h3><blockquote><p>src/api/user/address.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">AddressList</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;user/address/list&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AddressAdd</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;user/address/add&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AddressEdit</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;user/address/edit&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AddressInfo</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;user/address/info&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">AddressDelete</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;user/address/delete&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局挂载" tabindex="-1"><a class="header-anchor" href="#全局挂载" aria-hidden="true">#</a> 全局挂载</h3><blockquote><p>src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入请求封装，将app参数传递到配置中</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./services/request.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token comment">//API接口</span>
<span class="token keyword">import</span> api <span class="token keyword">from</span> <span class="token string">&#39;@/api&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>api<span class="token punctuation">,</span> app<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="另外还需要一个关键的步骤-需要配置接口代理" tabindex="-1"><a class="header-anchor" href="#另外还需要一个关键的步骤-需要配置接口代理" aria-hidden="true">#</a> 另外还需要一个关键的步骤，需要配置接口代理！！！</h3><blockquote><p>vue.config.js 根目录下面如果没有这个文件就需要自己手动创建</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue.config.js，如没有此文件则手动创建</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">transpileDependencies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;uview-ui&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 以下为接口代理设置,但是仅在H5模式下面支持，如需要配置其他小程序的接口地址，请移步到 services/request.js</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://www.ask.com&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 如果接口跨域，需要进行这个参数配置</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="另外需要留意封装的请求文件中所写的请求前缀" tabindex="-1"><a class="header-anchor" href="#另外需要留意封装的请求文件中所写的请求前缀" aria-hidden="true">#</a> 另外需要留意封装的请求文件中所写的请求前缀</h3><blockquote><p>src/services/request.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 此vm参数为页面的实例，可以通过它引用vuex中的变量</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化请求配置</span>
    uni<span class="token punctuation">.</span>$u<span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">setConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">/* config 为默认全局配置*/</span>
		<span class="token comment">//域名前缀</span>
		
		<span class="token comment">// 如果为H5模式下可以仅配置前缀然后用反向代理来执行域名配置 (下面的注释是条件编译不要删除)!!!!</span>
		<span class="token comment">// #ifdef H5</span>
        config<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/api&#39;</span><span class="token punctuation">;</span>
		<span class="token comment">// #endif</span>

		<span class="token comment">// 如果为小程序模式，需配置完整域名路径 (下面的注释是条件编译不要删除)!!!!</span>
		<span class="token comment">// #ifdef MP-WEIXIN || APP-PLUS</span>
		config<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;http://www.ask.com/api&#39;</span><span class="token punctuation">;</span>
		<span class="token comment">// #endif</span>

		<span class="token comment">//请求头</span>
		config<span class="token punctuation">.</span>header <span class="token operator">=</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span>
		<span class="token punctuation">}</span>
		
        <span class="token keyword">return</span> config
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
	
	<span class="token comment">// 请求拦截</span>
	uni<span class="token punctuation">.</span>$u<span class="token punctuation">.</span>http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
		<span class="token comment">// 可使用async await 做异步操作</span>
	    <span class="token comment">// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}</span>
	    config<span class="token punctuation">.</span>data <span class="token operator">=</span> config<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
		<span class="token comment">// 根据custom参数中配置的是否需要token，添加对应的请求头</span>
		<span class="token comment">// if(config?.custom?.auth) {</span>
		<span class="token comment">// 	// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中</span>
		<span class="token comment">// 	config.header.token = vm.$store.state.userInfo.token</span>
		<span class="token comment">// }</span>
	    <span class="token keyword">return</span> config 
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// 可使用async await 做异步操作</span>
	    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
	
	<span class="token comment">// 响应拦截</span>
	uni<span class="token punctuation">.</span>$u<span class="token punctuation">.</span>http<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
		<span class="token comment">/* 对响应成功做点什么 可使用async await 做异步操作*/</span>
		<span class="token keyword">const</span> data <span class="token operator">=</span> response<span class="token punctuation">.</span>data

		<span class="token comment">// 自定义参数</span>
		<span class="token comment">// const custom = response.config?.custom</span>
		<span class="token comment">// if (data.code !== 200) { </span>
		<span class="token comment">// 	// 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示</span>
		<span class="token comment">// 	if (custom.toast !== false) {</span>
		<span class="token comment">// 		uni.$u.toast(data.message)</span>
		<span class="token comment">// 	}</span>

		<span class="token comment">// 	// 如果需要catch返回，则进行reject</span>
		<span class="token comment">// 	if (custom?.catch) {</span>
		<span class="token comment">// 		return Promise.reject(data)</span>
		<span class="token comment">// 	} else {</span>
		<span class="token comment">// 		// 否则返回一个pending中的promise，请求不会进入catch中</span>
		<span class="token comment">// 		return new Promise(() =&gt; { })</span>
		<span class="token comment">// 	}</span>
		<span class="token comment">// }</span>
		<span class="token keyword">return</span> data<span class="token punctuation">.</span>data <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>data
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
		<span class="token comment">// 对响应错误做点什么 （statusCode !== 200）</span>
		<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在业务中使用" tabindex="-1"><a class="header-anchor" href="#在业务中使用" aria-hidden="true">#</a> 在业务中使用</h3><blockquote><p>src/pages/index/index3.vue</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token keyword">async</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
	<span class="token punctuation">{</span>
		<span class="token comment">//接口调用 比如调用用户的收货地址列表</span>
		<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$u<span class="token punctuation">.</span>api<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">AddressList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","05.html.vue"]]);export{r as default};
