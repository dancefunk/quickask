import{_ as n,o as s,c as a,a as t}from"./app-4eb807d7.js";const p={},e=t(`<h3 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useState是React的一个Hook，它是一个方法，可以传入值作为state的默认值，返回一个数组
数组的第一项是对应的状态(默认值会赋予状态)，数组的第二项是更新状态的函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>


<span class="token keyword">const</span> <span class="token function-variable function">State</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">//设置count初始变量、以及更新状态的函数</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> 
    <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//更新对象类型的数据</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleClick2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">21</span>
        <span class="token punctuation">}</span>

        <span class="token function">setUser</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//更新数组对象类型</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleClick3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;小明&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">4000</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;小李&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">5000</span><span class="token punctuation">,</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>

        <span class="token function">setList</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//类似于vue的监听watch函数</span>
    React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当user变量有变化的时候才会触发&#39;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span><span class="token punctuation">)</span>

    React<span class="token punctuation">.</span><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当list变量有变化的时候才会触发&#39;</span><span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>list<span class="token punctuation">]</span><span class="token punctuation">)</span>


    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">&gt;</span>count 状态数据的值为：<span class="token punctuation">{</span>count<span class="token punctuation">}</span> <span class="token operator">|</span> 点击修改状态<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick2<span class="token punctuation">}</span><span class="token operator">&gt;</span>修改对象类型的数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>

            <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&#39;button&#39;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick3<span class="token punctuation">}</span><span class="token operator">&gt;</span>修改数组对象类型的数据<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> State
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","01.html.vue"]]);export{r as default};
