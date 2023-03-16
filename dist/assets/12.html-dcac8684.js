import{_ as n,p as s,q as a,Z as e}from"./framework-823c4b5a.js";const t={},p=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>React 中的一个常见模式是一个组件返回多个元素。
Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。(一个空的根元素)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
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

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;example&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","12.html.vue"]]);export{r as default};
