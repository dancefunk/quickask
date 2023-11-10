import{_ as n,o as s,c as a,a as e}from"./app-c94bd78a.js";const t={},p=e(`<h3 id="math对象" tabindex="-1"><a class="header-anchor" href="#math对象" aria-hidden="true">#</a> Math对象</h3><h3 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token constant">E</span> ：常量e。返回自然对数的底数：<span class="token number">2.718281828459045</span>
Math<span class="token punctuation">.</span><span class="token constant">PI</span> ：常量π。返回圆周率的值 ：<span class="token number">3.141592653589793</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 绝对值</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 取大整</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">2.3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 取小整</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">2.3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 最大值</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 最小值</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 2的3次方</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 0~1之间随机数 无限接近 0 和 1 但不等于0，1</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 四舍五入</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">4.5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number对象" tabindex="-1"><a class="header-anchor" href="#number对象" aria-hidden="true">#</a> Number对象</h3><h3 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 最大的数字</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span>

<span class="token comment">// 最小的数字</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">MIN_VALUE</span><span class="token punctuation">)</span>

<span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token number">NaN</span><span class="token punctuation">)</span>

<span class="token comment">// 正无穷</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">POSITIVE_INFINITY</span><span class="token punctuation">)</span>

<span class="token comment">// 负无穷</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token constant">NEGATIVE_INFINITY</span><span class="token punctuation">)</span>

<span class="token comment">// 进制表示</span>
<span class="token comment">// 十进制</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment">//八进制 0o 0O</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0o16</span><span class="token punctuation">)</span>

<span class="token comment">//二进制 0b 0B</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0b1111</span><span class="token punctuation">)</span>

<span class="token comment">//十六进制 0x</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0xf680</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1" aria-hidden="true">#</a> 方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 判断是否为整数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 判断是否为NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","03.html.vue"]]);export{r as default};
