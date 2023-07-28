import{_ as n,o as s,c as a,a as e}from"./app-11dfbba7.js";const t={},p=e(`<h3 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>StrictMode 是一个用来突出显示应用程序中潜在问题的工具
与 Fragment 一样，StrictMode 不会渲染任何可见的 UI
它为其后代元素触发额外的检查和警告

注意：
严格模式检查仅在开发模式下运行；它们不会影响生产构建。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在看这个案例之前我们先看一道题关于严格模式的" tabindex="-1"><a class="header-anchor" href="#在看这个案例之前我们先看一道题关于严格模式的" aria-hidden="true">#</a> 在看这个案例之前我们先看一道题关于严格模式的</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// &#39;use strict&#39;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span>foo
<span class="token punctuation">}</span>

demo<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 没有use strict输出</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// undefined</span>

<span class="token comment">// 有 use strict 输出</span>
<span class="token comment">// 报错</span>
<span class="token comment">// 2</span>
<span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Base16</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">demo</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//创建一个Ref属性对象</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
            <span class="token comment">// 第一种写法</span>
            <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
                React<span class="token punctuation">.</span>StrictMode 是一个用来突出显示应用程序中潜在问题的工具<span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
                与 Fragment 一样，StrictMode 不会渲染任何可见的 <span class="token constant">UI</span> <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
                它为其后代元素触发额外的检查和警告 <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>demo<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>

                在严格模式下面是不能运行的
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> ref<span class="token operator">=</span><span class="token string">&quot;demo&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Base16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","14.html.vue"]]);export{d as default};
