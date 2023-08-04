import{_ as e,r as t,o as i,c as l,b as n,d as a,e as c,a as p}from"./app-d0ac87ef.js";const o={},r=n("h3",{id:"babel官网文档",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#babel官网文档","aria-hidden":"true"},"#"),a(" Babel官网文档")],-1),d={href:"https://www.babeljs.cn/",target:"_blank",rel:"noopener noreferrer"},u=p(`<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是Babel?
Babel 是一个 JavaScript 编译器，可以将ES6语法转成ES5语法

为啥要转成ES5?
目前的浏览器大多支持ES5的语法规范，但是却不是所有的浏览器都支持ES6语法规范，所以就有了Babel
用于将ES6转成ES5好被现在很多主流的浏览器支持
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个demo文件夹" tabindex="-1"><a class="header-anchor" href="#创建一个demo文件夹" aria-hidden="true">#</a> 创建一个demo文件夹</h3><h3 id="初始化package文件" tabindex="-1"><a class="header-anchor" href="#初始化package文件" aria-hidden="true">#</a> 初始化package文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装babel命令行工具" tabindex="-1"><a class="header-anchor" href="#安装babel命令行工具" aria-hidden="true">#</a> 安装babel命令行工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save-dev babel-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装babel转译器" tabindex="-1"><a class="header-anchor" href="#安装babel转译器" aria-hidden="true">#</a> 安装babel转译器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install babel-preset-env --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置-babelrc文件" tabindex="-1"><a class="header-anchor" href="#配置-babelrc文件" aria-hidden="true">#</a> 配置.babelrc文件</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建要转译的js文件" tabindex="-1"><a class="header-anchor" href="#创建要转译的js文件" aria-hidden="true">#</a> 创建要转译的js文件</h3><blockquote><p>src/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">fun1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;str = &quot;</span><span class="token punctuation">,</span>str<span class="token punctuation">)</span>
	<span class="token keyword">return</span> str
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;demo&quot;</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> u <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
u<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加编译命令" tabindex="-1"><a class="header-anchor" href="#添加编译命令" aria-hidden="true">#</a> 添加编译命令</h3><blockquote><p>package.json</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel src -d dist&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="执行编译命令" tabindex="-1"><a class="header-anchor" href="#执行编译命令" aria-hidden="true">#</a> 执行编译命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="其他转译器" tabindex="-1"><a class="header-anchor" href="#其他转译器" aria-hidden="true">#</a> 其他转译器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>babel-preset-es2015
将es2015版本的js代码转译为es5代码，对于es2016版本的代码或者es2017版本的代码不转译。

babel-preset-react
主要在转译react代码的时候使用

babel-preset-env
最常用的转译器。通过在.babelrc中配置env选项，可以让代码兼容不同版本的浏览器或者node。
浏览器或者node已经支持的语法将不再转译了，不支持的才转译。
如果不配置env选项，该转译器等同于babel-preset-latest。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以配置babel-preset-env为例</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;browsers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;last 2 versions&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;safari &gt;= 7&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function v(b,k){const s=t("ExternalLinkIcon");return i(),l("div",null,[r,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",d,[a("https://www.babeljs.cn/"),c(s)])])])]),u])}const h=e(o,[["render",v],["__file","02.html.vue"]]);export{h as default};
