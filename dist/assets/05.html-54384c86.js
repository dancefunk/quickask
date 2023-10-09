import{_ as n,o as s,c as a,a as t}from"./app-88c1fa71.js";const e={},p=t(`<h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useMemo 可以作为 Vue 的 computed 来使用。
useMemo 主要用于性能优化，其中的计算比较复杂再使用。

useMemo的作用主要是 数据缓存，当缓存的状态数据，发生改变时才会刷新数据，如果缓存的状态数据没有发生改变。
则不会刷新缓存区域，从而达到部分区域缓存的效果，减少重复渲染次数，提高应用性能

useMemo 和 useCallback 原理一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Memo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>dep<span class="token punctuation">,</span> setDep<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;渲染&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">ChangeCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">ChangeDep</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token function">setDep</span><span class="token punctuation">(</span>dep <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">total</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;没有缓存的变量方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> count
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> memoTotal <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;被缓存的变量方法&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> count
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>当count改变的时候会全部重新渲染<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>当dep改变的时候只会部分渲染，count没有改变不会重复渲染<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>ChangeCount<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                count变量改变 <span class="token operator">|</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>ChangeDep<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                dep变量改变 <span class="token operator">|</span> <span class="token punctuation">{</span>dep<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>total<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>memo total<span class="token operator">:</span> <span class="token punctuation">{</span>memoTotal<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> Memo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","05.html.vue"]]);export{r as default};
