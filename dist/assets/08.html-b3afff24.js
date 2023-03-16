import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const o={},e=t(`<h3 id="自定义hook" tabindex="-1"><a class="header-anchor" href="#自定义hook" aria-hidden="true">#</a> 自定义Hook</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>自定义hooks可以说成是一种约定而不是功能
当一个函数以use开头并且在函数内部调用其他hooks，那么这个函数就可以成为自定义hooks
自定义Hooks可以封装状态，能够更好的实现状态共享
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token comment">//自定义hook函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">useCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>

    <span class="token comment">//返回一个数组，数组中有状态的值、状态++的函数，状态--的函数</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        count<span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Custom</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> addCount<span class="token punctuation">,</span> redCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>自定义hook函数<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>当前的值：<span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addCount<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">+</span> <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>redCount<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">-</span> <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Custom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[e];function c(l,i){return s(),a("div",null,p)}const u=n(o,[["render",c],["__file","08.html.vue"]]);export{u as default};
