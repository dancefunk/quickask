import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const p={},e=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 最大值</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 最小值</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 绝对值函数</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 平方</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 向上取整</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">5.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 向下取整</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">5.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 四舍五入</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">5.6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 随机数</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">rand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number-format" tabindex="-1"><a class="header-anchor" href="#number-format" aria-hidden="true">#</a> number_format</h3><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">参数1</td><td style="text-align:left;">格式化数值</td></tr><tr><td style="text-align:left;">参数2</td><td style="text-align:left;">保留几位小数</td></tr><tr><td style="text-align:left;">参数3</td><td style="text-align:left;">小数位分割符号</td></tr><tr><td style="text-align:left;">参数4</td><td style="text-align:left;">千分位分割符号</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 千分位格式化函数</span>
<span class="token variable">$number</span> <span class="token operator">=</span> <span class="token number">1234.56</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token function">number_format</span><span class="token punctuation">(</span><span class="token variable">$number</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;.&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//1,234.56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,u){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","05.html.vue"]]);export{d as default};
