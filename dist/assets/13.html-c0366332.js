import{_ as n,o as s,c as a,a as e}from"./app-c94bd78a.js";const t={},c=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>React 中的一个常见模式是一个组件返回多个元素。
Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。(一个空的根元素)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Base15</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">txtRef</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
            <span class="token comment">// 第一种写法</span>
            <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Fragment<span class="token operator">&gt;</span>
                React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 <span class="token constant">DOM</span> 添加额外节点。
            <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>Fragment<span class="token operator">&gt;</span>

            <span class="token comment">// 第二种写法 短语法</span>
            <span class="token comment">// &lt;&gt;</span>
            <span class="token comment">//     React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。</span>
            <span class="token comment">// &lt;/&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Base15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[c];function l(i,o){return s(),a("div",null,p)}const d=n(t,[["render",l],["__file","13.html.vue"]]);export{d as default};
