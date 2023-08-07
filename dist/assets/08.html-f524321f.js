import{_ as n,o as s,c as a,a as t}from"./app-b57ef521.js";const p={},e=t(`<h3 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>React 元素的事件处理和 DOM 元素类似。但是有一点语法上的不同:
React 事件绑定属性的命名采用驼峰式写法，而不是小写。
如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM 元素的写法)
还有一个核心点就是，React事件中的回调函数里面的this是undefined，因为在React中的this是指向组件本身
所以如果想要将回调函数可以绑定事件的话，需要我们自己手动利用bind方法进行指向
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Base7</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

        <span class="token comment">//让回调函数指向全局的this属性</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick2</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//类中方法的写法</span>
    <span class="token function">handleClick1</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发事件&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">// 事件对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">handleClick2</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发事件&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">//传递的参数</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>

        <span class="token comment">//事件对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 使用箭头函数的写法来解决 this的指向</span>
    <span class="token function-variable function">handleClick3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//事件对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//带参数结构</span>
    <span class="token function-variable function">handleClick4</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">args<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//传递的参数</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>

        <span class="token comment">//事件对象</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick1<span class="token punctuation">}</span><span class="token operator">&gt;</span>第一种绑定事件<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick2</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token function">第一种绑定事件</span><span class="token punctuation">(</span>传参<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick3<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token function">第二种绑定事件</span><span class="token punctuation">(</span>不传参<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick4</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token function">第二种绑定事件</span><span class="token punctuation">(</span>传参<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> Base7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","08.html.vue"]]);export{k as default};
