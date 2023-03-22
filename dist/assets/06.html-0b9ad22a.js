import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const t={},p=e(`<h3 id="声明文件的定义" tabindex="-1"><a class="header-anchor" href="#声明文件的定义" aria-hidden="true">#</a> 声明文件的定义</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>通俗地来讲，在 TypeScript 中以 <span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts 为后缀的文件，我们称之为 TypeScript 声明文件。
它的主要作用是描述 JavaScript 模块内所有导出接口的类型信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么时候需要写-ts-声明文件" tabindex="-1"><a class="header-anchor" href="#什么时候需要写-ts-声明文件" aria-hidden="true">#</a> 什么时候需要写 TS 声明文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在日常的开发中，绝大多数时候是不需要我们单独去编写一个 <span class="token constant">TS</span> 声明文件的
如果我们的文件本身是用 <span class="token constant">TS</span> 编写的，在编译的时候让 <span class="token constant">TS</span> <span class="token function">自动生成声明文件即可</span><span class="token punctuation">(</span><span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts后缀文件<span class="token punctuation">)</span>

总结了以下<span class="token number">2</span> 种情况，需要我们手动定义声明文件：
<span class="token number">1</span>、通过 script 标签引入的第三方库
<span class="token number">2</span>、使用的第三方 npm 包，但是没有提供声明文件
	第三方 npm 包如果有提供声明文件的话，一般会以两种形式存在：一是 @types<span class="token operator">/</span>xxx 安装声明的第三方包 npm i @type<span class="token operator">/</span>xxx
	另外是在源代码中提供 <span class="token punctuation">.</span>d<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用第三方的d-ts" tabindex="-1"><a class="header-anchor" href="#使用第三方的d-ts" aria-hidden="true">#</a> 使用第三方的d.ts</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>可以通过npm安装使用，比如安装jQuery的d.ts
npm install @types/jquery -save

Github上有一个库DefinitelyTyped，定义了市面上主流的Javascript库的d.ts
https<span class="token operator">:</span><span class="token comment">//github.com/DefinitelyTyped/DefinitelyTyped</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何编写-ts-声明文件" tabindex="-1"><a class="header-anchor" href="#如何编写-ts-声明文件" aria-hidden="true">#</a> 如何编写 TS 声明文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>declare <span class="token keyword">let</span><span class="token operator">/</span><span class="token keyword">const</span>  <span class="token comment">// 声明全局变量</span>
declare <span class="token keyword">function</span>   <span class="token comment">// 声明全局方法</span>
declare <span class="token keyword">class</span>      <span class="token comment">// 声明全局类</span>
declare <span class="token keyword">enum</span>       <span class="token comment">// 声明全局枚举类型 </span>
declare namespace  <span class="token comment">// 声明（含有子属性的）全局对象</span>
<span class="token keyword">interface</span><span class="token operator">/</span>type     <span class="token comment">// 声明全局类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>index.d.ts</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 变量</span>
declare <span class="token keyword">let</span> <span class="token literal-property property">username</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

<span class="token comment">// 常量</span>
declare <span class="token keyword">const</span> <span class="token literal-property property">version</span><span class="token operator">:</span> any<span class="token punctuation">;</span>

<span class="token comment">// 函数、函数重载</span>
declare <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">uid</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
declare <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
declare <span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> any<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">;</span>

<span class="token comment">// 类</span>
declare <span class="token keyword">class</span> <span class="token class-name">DB</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 枚举</span>
declare <span class="token keyword">enum</span> Status <span class="token punctuation">{</span>
  Loading<span class="token punctuation">,</span>
  Success<span class="token punctuation">,</span>
  Failed<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// 接口 interface declare 可以不需要</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nickname</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Socket</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 命名空间</span>
declare namespace User <span class="token punctuation">{</span>
  <span class="token comment">// 局部 Test.User</span>
  <span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> User<span class="token punctuation">;</span>
  
  namespace fn 
  <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">obj</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 声明合并</span>
declare <span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>index.ts</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/// &lt;reference path=&quot;index.d.ts&quot; /&gt;

username = &#39;hello world&#39;
console.log(username)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm包" tabindex="-1"><a class="header-anchor" href="#npm包" aria-hidden="true">#</a> npm包</h3><p>对于没有提供声明文件的 npm 包，我们可以创建一个 types 目录，来管理自己写的声明文件，同时需要在配置文件 tsconfig.json 中的 paths 和 basrUrl 中配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">// types文件夹的相对路径</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;types/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>npm 包的声明文件主要有以下几种语法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span><span class="token operator">/</span><span class="token keyword">let</span>  <span class="token comment">// 导出变量</span>
<span class="token keyword">export</span> namespace  <span class="token comment">// 导出（含有自属性的）对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span>    <span class="token comment">// ES6 默认导出</span>
<span class="token keyword">export</span> <span class="token operator">=</span>          <span class="token comment">// commonjs 导出模块</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何让-ts-在编译时自动生成-d-ts" tabindex="-1"><a class="header-anchor" href="#如何让-ts-在编译时自动生成-d-ts" aria-hidden="true">#</a> 如何让 TS 在编译时自动生成.d.ts</h3><blockquote><p>tsconfig.json</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","06.html.vue"]]);export{d as default};
