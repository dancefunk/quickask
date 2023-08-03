import{_ as n,o as s,c as a,a as p}from"./app-f25f351f.js";const e={},t=p(`<h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>state 是 react 中用来存储组件数据状态的，可以类比成 vue 中的 data

更新组件的state,会重新渲染界面,简单来说,就是用户界面会随着state变化而变化

Vue最显著的特征：双向绑定 React没有这个，它是单向数据绑定的

React是一个单向数据流的库，状态驱动视图

与 vue 中不同的是 state 不能直接被修改，需要通过 setState() 的方法去修改

setState() 更新组件状态之后不会立即生效，react 为提高性能会按批次更新 state 然后 render, 即异步操作
所以 setState() 之后立即去取state的值并不是更新之后的状态

setState() 第一个参数接受两种类型的参数，Object以及Function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Base2</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span>
    <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">username</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>

        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span><span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                    用户名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Base2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。

这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">&#39;prop-types&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">Base3</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Base3<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// title: PropTypes.number, //必须是数值类型</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span> <span class="token comment">//必须是字符串类型</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Base3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Base3<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的</span>
    <span class="token literal-property property">optionalArray</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalBool</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalFunc</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalNumber</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalObject</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">,</span>
    <span class="token literal-property property">optionalString</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
 
    <span class="token comment">// 可以被渲染的对象 numbers, strings, elements 或 array</span>
    <span class="token literal-property property">optionalNode</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>node<span class="token punctuation">,</span>
 
    <span class="token comment">//  React 元素</span>
    <span class="token literal-property property">optionalElement</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>element<span class="token punctuation">,</span>
 
    <span class="token comment">// 用 JS 的 instanceof 操作符声明 prop 为类的实例。</span>
    <span class="token literal-property property">optionalMessage</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Message<span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token comment">// 用 enum 来限制 prop 只接受指定的值。</span>
    <span class="token literal-property property">optionalEnum</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;News&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Photos&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token comment">// 可以是多个对象类型中的一个</span>
    <span class="token literal-property property">optionalUnion</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
      React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
      React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Message<span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token comment">// 指定类型组成的数组</span>
    <span class="token literal-property property">optionalArrayOf</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token comment">// 指定类型的属性构成的对象</span>
    <span class="token literal-property property">optionalObjectOf</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">objectOf</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token comment">// 特定 shape 参数的对象</span>
    <span class="token literal-property property">optionalObjectWithShape</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
      <span class="token literal-property property">fontSize</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 
    <span class="token comment">// 任意类型加上 \`isRequired\` 来使 prop 不可空。</span>
    <span class="token literal-property property">requiredFunc</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
 
    <span class="token comment">// 不可空的任意类型</span>
    <span class="token literal-property property">requiredAny</span><span class="token operator">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>any<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
 
    <span class="token comment">// 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 \`console.warn\` 或抛异常</span>
    <span class="token comment">// 因为这样 \`oneOfType\` 会失效。</span>
    <span class="token function-variable function">customProp</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">matchme</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
      <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;Validation failed!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","04.html.vue"]]);export{r as default};
