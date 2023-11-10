import{_ as n,o as s,c as a,a as e}from"./app-c94bd78a.js";const t={},p=e(`<h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>JSON是一种轻量级的数据交换格式
基本格式：{&quot;key&quot;:&quot;value&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js中使用json" tabindex="-1"><a class="header-anchor" href="#js中使用json" aria-hidden="true">#</a> JS中使用JSON</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> json <span class="token operator">=</span> <span class="token string">&#39;{&quot;username&quot;:&quot;demo&quot;, &quot;password&quot;:&quot;123123&quot;}&#39;</span>

<span class="token comment">//json 转换为 js</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token comment">//js 转换为 json</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php中使用json" tabindex="-1"><a class="header-anchor" href="#php中使用json" aria-hidden="true">#</a> PHP中使用JSON</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token comment">// 使用json_decode的一些注意事项</span>
<span class="token comment">//     使用UTF-8编码</span>
<span class="token comment">//     不能在最后元素有逗号</span>
<span class="token comment">//     不能使用单引号</span>
<span class="token comment">//     不能有\\r,\\t，如果有请替换</span>

<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;username&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token number">123456</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// php 转换 json</span>
<span class="token variable">$json</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$json</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// json 转换 php</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$json</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","05.html.vue"]]);export{r as default};
