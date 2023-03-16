import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const p={},e=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 在外部封装条件判断</span>
        <span class="token keyword">let</span> login <span class="token operator">=</span> <span class="token keyword">null</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            login <span class="token operator">=</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>已经登录<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            login <span class="token operator">=</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>暂未登录<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>login<span class="token punctuation">}</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login <span class="token operator">?</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>已经登录<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>暂未登录<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function l(c,i){return s(),a("div",null,o)}const u=n(p,[["render",l],["__file","09.html.vue"]]);export{u as default};
