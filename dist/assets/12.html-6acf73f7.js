import{_ as n,o as s,c as a,a as e}from"./app-3c87854f.js";const t={},p=e(`<h3 id="proxy代理" tabindex="-1"><a class="header-anchor" href="#proxy代理" aria-hidden="true">#</a> Proxy代理</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Proxy 对象是<span class="token constant">ES6</span>新出的一个特性，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、修改、遍历、函数调用等）
需要知道的是，在Vue2中双向数据绑定原理（数据劫持）采用Object<span class="token punctuation">.</span>defineProperty，而在Vue3中数据劫持原理采用的是Proxy代理。

为什么Proxy会取代Object<span class="token punctuation">.</span>defineProperty
<span class="token number">1</span>、Object<span class="token punctuation">.</span>defineProperty只能劫持对象的属性，不能监听数组。也不能对 es6 新产生的 Map<span class="token punctuation">,</span>Set 这些数据结构做出监听。
也不能监听新增和删除操作等。

<span class="token number">2</span>、Proxy可以直接监听整个对象而非属性，可以监听数组的变化，具有多达<span class="token number">13</span>中拦截方法。


proxy在目标对象的外层搭建了一层拦截，外界对目标对象的某些操作，必须通过这层拦截

<span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>表示生成一个Proxy拦截实例
target参数表示所要拦截的目标对象
handler参数也是一个对象，用来定制拦截行为
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> target <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> aciton <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 被读取</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 被设置为 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> aciton<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

demo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello demo&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//demo 读取属性的值时，实际上执行的是 aciton.get</span>
<span class="token comment">//在 demo 设置属性值时，实际上执行的是 aciton.set </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy实现私有变量" tabindex="-1"><a class="header-anchor" href="#proxy实现私有变量" aria-hidden="true">#</a> Proxy实现私有变量</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> target <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>  <span class="token comment">//假设为私有属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> action <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span>key</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//判断是不是_开头</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;私有变量age不能被访问&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;私有变量age不能被修改&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>

        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token comment">//查看name属性能否被访问和修改</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> 

demo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello work&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>name<span class="token punctuation">)</span> 

<span class="token comment">// 私有变量age不能被访问</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>_age<span class="token punctuation">)</span>

<span class="token comment">// 私有变量age不能被修改</span>
demo<span class="token punctuation">.</span>_age <span class="token operator">=</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置校验规则" tabindex="-1"><a class="header-anchor" href="#设置校验规则" aria-hidden="true">#</a> 设置校验规则</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//设置验证器</span>
<span class="token keyword">function</span> <span class="token function">CreateValidator</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> validator</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">_validator</span><span class="token operator">:</span> validator<span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> 
            <span class="token punctuation">{</span>
                <span class="token keyword">let</span> validator <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_validator<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">validator</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> 
                <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> 
                <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Cannot set </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">. Invalid.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> 
            <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is not a valid property</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//设置验证规则</span>
<span class="token keyword">const</span> PersonValidators <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">//名字必须是string类型</span>
        <span class="token keyword">return</span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">//年龄必须是number 并且 age 要大于 18</span>
        <span class="token keyword">return</span> <span class="token keyword">typeof</span> age <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&gt;</span> <span class="token number">18</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建实体类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> 
<span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">CreateValidator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> PersonValidators<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//实例化</span>
<span class="token keyword">const</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>

<span class="token comment">// 以下操作都会报错,因为没有通过效验规则</span>
<span class="token comment">// demo.name = 0;  </span>
<span class="token comment">// demo.age = &#39;demo&#39;;  </span>
<span class="token comment">// demo.age = 15;  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reflect反射机制" tabindex="-1"><a class="header-anchor" href="#reflect反射机制" aria-hidden="true">#</a> Reflect反射机制</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是比Object更易读，为操作Object对象提供了一种更优雅的方式。
它的方法与 Proxy 是对应的。
简单点说以后修改对象的属性，用Reflect这个对象去修改会更严谨，但是如果不熟的人去操作的话，就会感觉这个Reflect很繁琐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>target：目标对象
name：读取或设置的属性、方法
receiver：反射的对象
value：修改的值

查找并返回target的name属性
Reflect.get(target, name, receiver)

设置target对象的name属性等于value
Reflect.set(target, name, value, receiver)

判断target对象中是否有某个的属性
Reflect.has(target, name)

用于删除对象属性
Reflect.deleteProperty(target, property)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">姓名：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 年龄：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">edit</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> value
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> receiver <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>

<span class="token comment">//Reflect.get(target, name, receiver) get获取属性 获取person对象下面的 name 属性-------------------</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当 person 对象中存在 info 方法，那么 info 方法的 this 会被绑定为receiver对象</span>
<span class="token comment">//简单理解就是借 person 中的 info 方法 来打印 receiver对象中的信息 有点像映射关系</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">//Reflect.set(target, name, value, receiver) 修改对象下的某个属性---------------------------------</span>

<span class="token comment">//先打印一遍</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

<span class="token comment">//然后修改age属性</span>
Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>

<span class="token comment">//打印看结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

<span class="token comment">//value为空时会将属性清除</span>
Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//打印看结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

<span class="token comment">//利用person中edit修改器方法，来修改receiver对象中的age属性</span>
Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;edit&#39;</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> receiver<span class="token punctuation">)</span>

<span class="token comment">// 打印看结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>receiver<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

<span class="token comment">// Reflect.has(obj, name)  判断是否有无属性----------------------------------------------------</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Reflect<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// Reflect.deleteProperty(obj, property) 删除对象下的属性------------------------------------</span>
Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","12.html.vue"]]);export{r as default};
