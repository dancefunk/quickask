import{_ as t,r as p,o,c,b as n,d as s,e as i,a}from"./app-6568e73a.js";const l={},u=a(`<h3 id="开发自定义插件" tabindex="-1"><a class="header-anchor" href="#开发自定义插件" aria-hidden="true">#</a> 开发自定义插件</h3><blockquote><p>src/services/demo.js (新建自定义插件)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 插件是自包含的代码，通常向 Vue 添加全局级功能。</span>
<span class="token comment">// 它可以是公开 install() 方法的 object，也可以是 function</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
     <span class="token comment">//定义全局</span>
     app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function-variable function">$demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token string">&#39;自定义插件&#39;</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/main.js (全局挂载)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//加载自定义插件</span>
<span class="token keyword">import</span> demo <span class="token keyword">from</span> <span class="token string">&#39;./services/demo&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>调用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">async</span> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	  <span class="token comment">//调用自定义插件</span>
	  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue3-cookies" tabindex="-1"><a class="header-anchor" href="#vue3-cookies" aria-hidden="true">#</a> vue3-cookies</h3>`,8),d={href:"https://www.npmjs.com/package/vue3-cookies",target:"_blank",rel:"noopener noreferrer"},r=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install vue3<span class="token operator">-</span>cookies <span class="token operator">--</span>save

yarn add vue3<span class="token operator">-</span>cookies <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>挂载：src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> VueCookies <span class="token keyword">from</span> <span class="token string">&#39;vue3-cookies&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCookies<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">//设置cookie</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;用户信息&#39;</span><span class="token punctuation">)</span>

      <span class="token comment">//获取cookie</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span>

      <span class="token comment">//删除</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(v,m){const e=p("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[s("Vue中操作Cookie插件："),n("a",d,[s("https://www.npmjs.com/package/vue3-cookies"),i(e)])])]),r])}const g=t(l,[["render",k],["__file","04.html.vue"]]);export{g as default};
