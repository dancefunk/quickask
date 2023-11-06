import{_ as n,o as s,c as a,a as t}from"./app-6325e707.js";const p={},e=t(`<h3 id="usereducer" tabindex="-1"><a class="header-anchor" href="#usereducer" aria-hidden="true">#</a> useReducer</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>看到useReducer,肯定会想到Redux，没错它和Redux的工作方式是一样的。
useReducer的出现是useState的替代方案，能够让我们更好的管理状态。

useReducer一共可以接受三个参数并返回当前的state与其配套的dispatch

第一个参数
useReducer的第一个参数就是形如(state,action) =&gt; newState这样的reducer，
没错就是reducer，和redux完全相同。

第二个参数
useReducer的第二个参数和Redux的createStore也相同，指定状态的默认值。

第三个参数
useReducer的第三个参数接受一个函数作为参数，并把第二个参数当作函数的参数执行。
主要作用是初始值的惰性求值，把一些对状态的逻辑抽离出来，有利于重置state。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>


<span class="token keyword">const</span> <span class="token function-variable function">Reducer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">//创建一个reducer 状态的数据类型为数值</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> CountDispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&#39;add&#39;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> state <span class="token operator">+</span> <span class="token number">1</span>
            <span class="token keyword">case</span> <span class="token string">&#39;sub&#39;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> state <span class="token operator">-</span> <span class="token number">1</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token keyword">return</span> state
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token comment">//创建一个reducer 状态的数据类型为对象</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> ListDispatch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useReducer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&#39;add&#39;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>
                    <span class="token operator">...</span>state<span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">id</span><span class="token operator">:</span> state<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                        <span class="token literal-property property">name</span><span class="token operator">:</span> action<span class="token punctuation">.</span>name
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token keyword">case</span> <span class="token string">&#39;remove&#39;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> state<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> index <span class="token operator">!==</span> action<span class="token punctuation">.</span>index<span class="token punctuation">)</span>
            <span class="token keyword">case</span> <span class="token string">&#39;clear&#39;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token keyword">return</span> state
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token comment">//表单提交方法</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
    <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token function">ListDispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value
        <span class="token punctuation">}</span><span class="token punctuation">)</span>

        inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
        inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">CountDispatch</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>自增<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">CountDispatch</span><span class="token punctuation">(</span><span class="token string">&#39;sub&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>减少<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>对象类型的reducer<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>input ref<span class="token operator">=</span><span class="token punctuation">{</span>inputRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;submit&#39;</span><span class="token operator">&gt;</span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token function">ListDispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;clear&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>清理<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            
            <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">ListDispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;remove&#39;</span><span class="token punctuation">,</span>index<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token constant">X</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>

<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Reducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","04.html.vue"]]);export{r as default};
