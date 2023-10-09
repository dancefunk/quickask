import{_ as n,o as s,c as a,a as t}from"./app-88c1fa71.js";const e={},p=t(`<h3 id="css语法规则" tabindex="-1"><a class="header-anchor" href="#css语法规则" aria-hidden="true">#</a> CSS语法规则</h3><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">CSS单位</td><td style="text-align:left;">CSS单位</td></tr><tr><td style="text-align:left;">!important</td><td style="text-align:left;">提升指定样式的应用优先权</td></tr><tr><td style="text-align:left;">@import</td><td style="text-align:left;">外部引入</td></tr><tr><td style="text-align:left;">@font-face</td><td style="text-align:left;">引入自定义字体</td></tr><tr><td style="text-align:left;">@keyframes</td><td style="text-align:left;">设置动画</td></tr><tr><td style="text-align:left;">@media</td><td style="text-align:left;">媒体查询</td></tr><tr><td style="text-align:left;">CSS浏览器前缀</td><td style="text-align:left;">CSS浏览器前缀</td></tr></tbody></table><h3 id="常用的css度量单位" tabindex="-1"><a class="header-anchor" href="#常用的css度量单位" aria-hidden="true">#</a> 常用的CSS度量单位</h3><h4 id="em相对父元素单位" tabindex="-1"><a class="header-anchor" href="#em相对父元素单位" aria-hidden="true">#</a> em相对父元素单位</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 12px = 1em --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>12px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>2em</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>子元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span>24px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>子元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rem相对根元素单位" tabindex="-1"><a class="header-anchor" href="#rem相对根元素单位" aria-hidden="true">#</a> rem相对根元素单位</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token comment">/* rem = root em */</span>
    <span class="token comment">/* 12px = 1rem */</span>
	<span class="token selector">html</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p:first-child</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>24px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">p:last-child</span><span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>2rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>子元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>子元素<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vw-vh" tabindex="-1"><a class="header-anchor" href="#vw-vh" aria-hidden="true">#</a> vw / vh</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>相对于视口的宽度。视口被均分为100单位的vw
相对于视口的高度。视口被均分为100单位的vh

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h1</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 8vw<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 8vh<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> !important</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">p</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token important">!important</span><span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>important提升样式优先权<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @import</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>&lt;style&gt;
    <span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;index.css&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> @media</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 屏幕大小 &lt;= 2000px */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>2000px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">body</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 1000px &lt;= 屏幕大小 &lt;= 1500px */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>1000px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1500px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">body</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 屏幕大小 &lt;= 1000px */</span>
<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1000px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">body</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="font-face" tabindex="-1"><a class="header-anchor" href="#font-face" aria-hidden="true">#</a> @font-face</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span><span class="token punctuation">{</span>
    <span class="token comment">/* 自定义字体名称 */</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> OSBold<span class="token punctuation">;</span>

    <span class="token comment">/* 自定义字体文件路径 */</span>
    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./fonts/OpenSans-Bold.ttf&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keyframes" tabindex="-1"><a class="header-anchor" href="#keyframes" aria-hidden="true">#</a> @keyframes</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> back 1s linear infinite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> back</span><span class="token punctuation">{</span>
    <span class="token selector">from</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">50%</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">to</span><span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css浏览器引擎前缀" tabindex="-1"><a class="header-anchor" href="#css浏览器引擎前缀" aria-hidden="true">#</a> CSS浏览器引擎前缀</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>-moz-     /* 火狐等使用Mozilla浏览器引擎的浏览器 */
-webkit-  /* Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */
-o-       /* Opera浏览器(早期) */
-ms-      /* Internet Explorer (不一定) */ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 简单属性 */</span>
<span class="token selector">.demo</span><span class="token punctuation">{</span>
    <span class="token property">-webkit-animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
    <span class="token property">-moz-animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
    <span class="token property">-o-animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
    <span class="token property">-ms-animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>

    <span class="token comment">/* 不带前缀的放到最后 */</span>
    <span class="token property">animation-name</span><span class="token punctuation">:</span> move<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/* 复杂属性 keyframes */</span>
<span class="token atrule"><span class="token rule">@-webkit-keyframes</span> move</span><span class="token punctuation">{</span>
    <span class="token selector">0%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-moz-keyframes</span> move</span><span class="token punctuation">{</span>
    <span class="token selector">0%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-o-keyframes</span> move</span><span class="token punctuation">{</span>
    <span class="token selector">0%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@-ms-keyframes</span> move</span><span class="token punctuation">{</span>
    <span class="token selector">0%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token punctuation">}</span> 
    <span class="token selector">100%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 不带前缀的放到最后 */</span>
<span class="token atrule"><span class="token rule">@keyframes</span> move</span><span class="token punctuation">{</span>
    <span class="token selector">0%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span><span class="token punctuation">}</span>
    <span class="token selector">100%</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[p];function c(i,o){return s(),a("div",null,l)}const d=n(e,[["render",c],["__file","03.html.vue"]]);export{d as default};
