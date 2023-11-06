import{_ as n,o as s,c as a,a as p}from"./app-02c5a260.js";const t={},e=p(`<h3 id="通过自定义css样式来覆盖原本bootstrap导航条样式" tabindex="-1"><a class="header-anchor" href="#通过自定义css样式来覆盖原本bootstrap导航条样式" aria-hidden="true">#</a> 通过自定义css样式来覆盖原本Bootstrap导航条样式</h3><blockquote><ul><li>以下媒体查询是当屏幕为1024px像素时，切换为移动端导航，更改1024px可以调整变化边界值</li></ul></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.navbar-header</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-left,.navbar-right</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-toggle</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-collapse</span> <span class="token punctuation">{</span>
        <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid transparent<span class="token punctuation">;</span>
        <span class="token property">box-shadow</span><span class="token punctuation">:</span> inset 0 1px 0 <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>255<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-fixed-top</span> <span class="token punctuation">{</span>
        <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">border-width</span><span class="token punctuation">:</span> 0 0 1px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-collapse.collapse</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-nav</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token important">!important</span><span class="token punctuation">;</span>
        <span class="token property">margin-top</span><span class="token punctuation">:</span> 7.5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-nav&gt;li</span> <span class="token punctuation">{</span>
        <span class="token property">float</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.navbar-nav&gt;li&gt;a</span> <span class="token punctuation">{</span>
        <span class="token property">padding-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.collapse.in</span><span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span>block <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","Bootstrapmeitichaxun.html.vue"]]);export{r as default};
