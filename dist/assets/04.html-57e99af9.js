import{_ as n,p as s,q as a,Z as e}from"./framework-823c4b5a.js";const t={},p=e(`<h3 id="if条件语句" tabindex="-1"><a class="header-anchor" href="#if条件语句" aria-hidden="true">#</a> if条件语句</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> 1 + 1 == 2</span> <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>  <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> 5 &lt; 3</span>      <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 2px dotted<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token atrule"><span class="token rule">@if</span> null</span>       <span class="token punctuation">{</span> <span class="token property">border</span><span class="token punctuation">:</span> 3px double<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="else-if-语句" tabindex="-1"><a class="header-anchor" href="#else-if-语句" aria-hidden="true">#</a> else if 语句</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>$<span class="token property">type</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token atrule"><span class="token rule">@if</span> $type == blue</span> 
  <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token atrule"><span class="token rule">@else</span> if $type == red</span> 
  <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token atrule"><span class="token rule">@else</span> if $type == green</span> 
  <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
  <span class="token atrule"><span class="token rule">@else</span></span> 
  <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-循环语句" tabindex="-1"><a class="header-anchor" href="#for-循环语句" aria-hidden="true">#</a> for 循环语句</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@for</span> $i from 1 through 3</span> 
<span class="token punctuation">{</span>
  <span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 2em * $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-2</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-3</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 6em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="each-循环语句" tabindex="-1"><a class="header-anchor" href="#each-循环语句" aria-hidden="true">#</a> each 循环语句</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@each</span> $color in red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> pink</span> 
<span class="token punctuation">{</span>
  <span class="token selector">.#</span><span class="token punctuation">{</span>$color<span class="token punctuation">}</span><span class="token selector">-text</span><span class="token punctuation">{</span>
    <span class="token selector">color:#</span><span class="token punctuation">{</span>$color<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.red-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.green-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.blue-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.pink-text</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while循环语句" tabindex="-1"><a class="header-anchor" href="#while循环语句" aria-hidden="true">#</a> while循环语句</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>$<span class="token property">i</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token atrule"><span class="token rule">@while</span> $i &lt; 5</span> 
<span class="token punctuation">{</span>
  <span class="token selector">.item-#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> 1em * $i<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  $<span class="token property">i</span><span class="token punctuation">:</span> $i + 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>编译后</strong></p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.item-1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-3</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.item-4</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 4em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss函数指令" tabindex="-1"><a class="header-anchor" href="#scss函数指令" aria-hidden="true">#</a> SCSS函数指令</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>比如html5开发，rem与设计图单位的换算

<span class="token atrule"><span class="token rule">@function</span> <span class="token function">rem</span><span class="token punctuation">(</span>$n<span class="token punctuation">)</span></span> 
<span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@return</span> <span class="token punctuation">(</span>$n/2/12<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>

<span class="token selector">.header</span><span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">rem</span><span class="token punctuation">(</span>90rem<span class="token punctuation">)</span><span class="token punctuation">;</span> //<span class="token property">height</span><span class="token punctuation">:</span>3.75rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","04.html.vue"]]);export{d as default};
