import{_ as n,p as s,q as a,Y as p}from"./framework-aa5c4115.js";const t={},e=p(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>React 使用 JSX 来替代常规的 JavaScript。
JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
我们不需要一定使用 JSX，但它有以下优点：
	JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
	它是类型安全的，在编译过程中就能发现错误。
	使用 JSX 编写模板更加简单快速。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Base6</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">myStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>姓名：张三<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">,</span>
                <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>性别：男<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">,</span>
                <span class="token operator">&lt;</span>span<span class="token operator">&gt;</span>年龄：<span class="token number">20</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span><span class="token comment">/* 表达式 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

                <span class="token punctuation">{</span><span class="token comment">/* 三元运算符 */</span><span class="token punctuation">}</span>
                <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>show <span class="token operator">?</span> <span class="token string">&#39;显示&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;隐藏&#39;</span><span class="token punctuation">}</span>

                <span class="token punctuation">{</span><span class="token comment">/* 样式写法 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>myStyle<span class="token punctuation">}</span><span class="token operator">&gt;</span>样式写法<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>

                <span class="token punctuation">{</span><span class="token comment">/* 数组写法 下面这样写可以显示 但是会报错，需要嵌入循环 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token comment">/*this.state.list*/</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

                <span class="token punctuation">{</span><span class="token comment">/* 数组写法 正确写法 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token punctuation">(</span>
                            <span class="token operator">&lt;</span>p key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                

                <span class="token punctuation">{</span><span class="token comment">/* 数组写法 上面的写法有些麻烦，可以继续简化 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>Info info<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>


            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Info</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> props<span class="token punctuation">.</span>info<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span>p key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> list
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Base6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","07.html.vue"]]);export{u as default};
