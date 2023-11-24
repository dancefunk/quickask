import{_ as n,o as s,c as a,a as e}from"./app-3e5ace64.js";const t={},p=e(`<h3 id="useref-绑定页面的dom元素" tabindex="-1"><a class="header-anchor" href="#useref-绑定页面的dom元素" aria-hidden="true">#</a> useRef(绑定页面的DOM元素)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>返回一个可变的 ref 对象，该对象只有个 current 属性，初始值为传入的参数( initialValue )。
返回的 ref 对象在组件的整个生命周期内保持不变
当更新 current 值时并不会 re-render ，这是与 useState 不同的地方
更新 useRef 是 side effect (副作用)，所以一般写在 useEffect 或 event handler 里
useRef 类似于类组件的 this
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Ref</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">//空</span>
    <span class="token comment">// const inputRef = React.useRef()</span>

    <span class="token comment">//有值</span>
    <span class="token keyword">const</span> inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>Ref属性<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>当前的值：<span class="token punctuation">{</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span><span class="token operator">&gt;</span>提交 <span class="token operator">-</span> 控制台看结果<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>       
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Ref
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","07.html.vue"]]);export{u as default};
