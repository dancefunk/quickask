import{_ as n,o as s,c as a,a as e}from"./app-f25f351f.js";const p={},t=e(`<h3 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>$<span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>

<span class="token selector">.wt</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wt</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学运算" tabindex="-1"><a class="header-anchor" href="#数学运算" aria-hidden="true">#</a> 数学运算</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#id</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1 + 2<span class="token punctuation">)</span> *3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#id</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊的-除法运算符" tabindex="-1"><a class="header-anchor" href="#特殊的-除法运算符" aria-hidden="true">#</a> 特殊的 / 除法运算符</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 10px/8px<span class="token punctuation">;</span>             // 纯 CSS，不是除法运算
  $<span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> $width/2<span class="token punctuation">;</span>            // 使用了变量，是除法运算
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">round</span><span class="token punctuation">(</span>1.5px<span class="token punctuation">)</span>/2<span class="token punctuation">;</span>        // 使用了函数，是除法运算
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>500px/2<span class="token punctuation">)</span><span class="token punctuation">;</span>          // 使用了圆括号，是除法运算
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px + 8px/2px<span class="token punctuation">;</span> // 使用了加（+）号，是除法运算
  <span class="token property">padding-left</span><span class="token punctuation">:</span> + 100px / 2<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> 10px/8px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="颜色运算符" tabindex="-1"><a class="header-anchor" href="#颜色运算符" aria-hidden="true">#</a> 颜色运算符</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #001100 + #040506<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #010 + #040506<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #041606<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #041606<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插值" tabindex="-1"><a class="header-anchor" href="#插值" aria-hidden="true">#</a> 插值</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>$<span class="token property">name</span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span>
$<span class="token property">attr</span><span class="token punctuation">:</span> border<span class="token punctuation">;</span>
<span class="token selector">p.#</span><span class="token punctuation">{</span>$name<span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token selector">#</span><span class="token punctuation">{</span>$attr<span class="token punctuation">}</span><span class="token property">-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  $<span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  $<span class="token property">line-height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
  <span class="token selector">font: #</span><span class="token punctuation">{</span>$font-size<span class="token punctuation">}</span><span class="token selector">/#</span><span class="token punctuation">{</span>$line-height<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p.foo</span> <span class="token punctuation">{</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">font</span><span class="token punctuation">:</span> 12px/30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import导入" tabindex="-1"><a class="header-anchor" href="#import导入" aria-hidden="true">#</a> import导入</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>import 可以导入style.scss的样式到当前文件下
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;style.scss&#39;</span><span class="token punctuation">;</span></span>


<span class="token selector">import 指令支持嵌套
.warp</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;style.scss&#39;</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extend继承" tabindex="-1"><a class="header-anchor" href="#extend继承" aria-hidden="true">#</a> extend继承</h3><blockquote><p><strong>extend只能继承选择器</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.border</span><span class="token punctuation">{</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span>1px<span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
	<span class="token property">border-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo</span><span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@extend</span> .border<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.border, .demo</span><span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>extend的多次继承</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.border</span><span class="token punctuation">{</span>
	<span class="token property">border-width</span><span class="token punctuation">:</span>1px<span class="token punctuation">;</span>
	<span class="token property">border-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
	<span class="token property">border-style</span><span class="token punctuation">:</span>solid<span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.text</span><span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>16px<span class="token punctuation">;</span>
	<span class="token property">letter-spacing</span><span class="token punctuation">:</span>3px<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@extend</span> .border<span class="token punctuation">;</span></span>
  <span class="token atrule"><span class="token rule">@extend</span> .text<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.border, .demo</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.text, .demo</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>extend的链式继承</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.demo1</span><span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span>1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo2</span><span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@extend</span> .demo1<span class="token punctuation">;</span></span>
	<span class="token property">background</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo3</span><span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@extend</span> .demo2<span class="token punctuation">;</span></span>
	<span class="token property">font-size</span><span class="token punctuation">:</span>16px<span class="token punctuation">;</span>
	<span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token atrule"><span class="token rule">@extend</span> .demo3<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.demo1, .demo2, .demo3, .box</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo2, .demo3, .box</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.demo3, .box</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mixin-include混合" tabindex="-1"><a class="header-anchor" href="#mixin-include混合" aria-hidden="true">#</a> mixin + include混合</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> demo</span> <span class="token punctuation">{</span>
  <span class="token selector">font:</span> <span class="token punctuation">{</span>
    <span class="token property">family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> demo<span class="token punctuation">;</span></span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>mixin 在外层混合, 不依赖于父层结构</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> demo</span> <span class="token punctuation">{</span>
  <span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@include</span> demo<span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>mixin 设置参数</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">demo</span><span class="token punctuation">(</span>$color<span class="token punctuation">,</span> $width<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">border:</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> $width<span class="token punctuation">;</span>
    <span class="token property">style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span> 
	<span class="token atrule"><span class="token rule">@include</span> <span class="token function">demo</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span></span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>mixin 混合未知格式和数量的变量, 使用arg...</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">demo</span><span class="token punctuation">(</span>$shadows...<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> $shadows<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> $shadows<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> $shadows<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.shadows</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> <span class="token function">demo</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.shadows</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>mixin内部也可以用include</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@mixin</span> demo</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@include</span> background<span class="token punctuation">;</span></span>
  <span class="token atrule"><span class="token rule">@include</span> text<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@mixin</span> background</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #fc0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@mixin</span> text</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">p</span><span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@include</span> demo<span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fc0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),c=[t];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","03.html.vue"]]);export{d as default};
