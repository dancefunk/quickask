import{_ as n,o as s,c as a,a as e}from"./app-6f490402.js";const t={},p=e(`<p>中间件，匹配路由前、后完成一系列的操作。egg是基于koa实现的，所以egg的中间件形式和koa的中间件形式是一样的，都是基于洋葱模型</p><h3 id="新建中间件" tabindex="-1"><a class="header-anchor" href="#新建中间件" aria-hidden="true">#</a> 新建中间件</h3><blockquote><p>app/middleware/auth.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> app</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
  <span class="token comment">//打印config配置的中间件传递参数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
  <span class="token punctuation">{</span>
    <span class="token comment">//匹配路由地址</span>
    <span class="token keyword">var</span> pathname <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname

    <span class="token keyword">if</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>session<span class="token punctuation">.</span>LoginUser<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">//如果有session登录就正常访问</span>
      <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// 没有session就跳转到登录界面，排除不需要做判断的页面</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>pathname <span class="token operator">==</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span>
      <span class="token punctuation">{</span>
        ctx<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置中间件" tabindex="-1"><a class="header-anchor" href="#配置中间件" aria-hidden="true">#</a> 配置中间件</h3><blockquote><p>config/config.default.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//设置中间件</span>
config<span class="token punctuation">.</span>middleware <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;auth&#39;</span><span class="token punctuation">]</span>

<span class="token comment">//中间件传递参数</span>
config<span class="token punctuation">.</span>auth <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;中间件传递参数&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置好之后-重新去访问任意路由页面-就会发现不管是哪个路由-都会先去到中间件的方法里面进行验证" tabindex="-1"><a class="header-anchor" href="#配置好之后-重新去访问任意路由页面-就会发现不管是哪个路由-都会先去到中间件的方法里面进行验证" aria-hidden="true">#</a> 配置好之后，重新去访问任意路由页面，就会发现不管是哪个路由，都会先去到中间件的方法里面进行验证</h4>`,8),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","07.html.vue"]]);export{r as default};
