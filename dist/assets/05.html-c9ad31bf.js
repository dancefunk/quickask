import{_ as n,o as s,c as a,a as t}from"./app-1b1b276f.js";const e={},p=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//设置时区 设置中国时区</span>
<span class="token function">date_default_timezone_set</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;PRC&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//返回当前时间戳 单位：秒</span>
<span class="token keyword">echo</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//将时间戳转换为标准时间</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Y-m-d H:i:s&quot;</span><span class="token punctuation">,</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//将标准时间转换为时间戳</span>
<span class="token keyword">echo</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;2022-10-10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// PHP获取当前月第一天</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-01&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// PHP获取当前月最后一天</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// PHP获取当前时间前一天 (前n天就是 -n)</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d&#39;</span><span class="token punctuation">,</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;-1 day&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// PHP获取当前时间后一天 (后n天就是 +n)</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-d&#39;</span><span class="token punctuation">,</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;+1 day&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// PHP获取前一个月第一天 (前n个月就是-n)</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-01&#39;</span><span class="token punctuation">,</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;-1 month&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// PHP获取后一个月最后一天 (后n个月就是 +n)</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Y-m-t&#39;</span><span class="token punctuation">,</span> <span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;+1 month&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// PHP获取当月天数</span>
<span class="token keyword">echo</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","05.html.vue"]]);export{d as default};
