import{_ as n,o as s,c as a,a as e}from"./app-da5bd584.js";const t={},p=e(`<h3 id="class类" tabindex="-1"><a class="header-anchor" href="#class类" aria-hidden="true">#</a> class类</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>通过 class 关键字定义类，class 的本质是 function
它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//父类 定义一个类</span>
<span class="token keyword">class</span> <span class="token class-name">Father</span> 
<span class="token punctuation">{</span>
    <span class="token comment">//定义常规属性</span>
    name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    sex <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
    age <span class="token operator">=</span> <span class="token number">0</span>
    money <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token comment">//静态属性</span>
    <span class="token keyword">static</span> nickname <span class="token operator">=</span> <span class="token string">&#39;昵称(静态属性)&#39;</span>

    <span class="token comment">//构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;构造函数&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">//调用属性</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex 
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//类的方法</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">+=</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">world</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;静态方法&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//实例化得到一个对象</span>
<span class="token keyword">var</span> xiaoming <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Father</span><span class="token punctuation">(</span><span class="token string">&#39;小明&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;16&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//在外部调用属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">.</span>name<span class="token punctuation">)</span>

<span class="token comment">//在外部调用方法</span>
xiaoming<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaoming<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">//外部调用静态属性和方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Father<span class="token punctuation">.</span>nickname<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Father<span class="token punctuation">.</span><span class="token function">world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//-------------------------------------</span>

<span class="token comment">// 子类 extends 继承 父类</span>
<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span>
<span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//继承超类 super === 父类的 constructor()</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> age<span class="token punctuation">)</span>

        <span class="token comment">//调用父类里面的方法</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//实例化子类</span>
<span class="token keyword">var</span> xiaolan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Son</span><span class="token punctuation">(</span><span class="token string">&#39;小兰&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;女&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>

<span class="token comment">//调用子类继承的属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xiaolan<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">//调用子类继承的静态属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Son<span class="token punctuation">.</span>nickname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getter-setter" tabindex="-1"><a class="header-anchor" href="#getter-setter" aria-hidden="true">#</a> getter / setter</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>有时候希望访问属性时能返回一个动态计算后的值,就可以用getter/setter
getter 和 setter 必须同时存在
getter 和 setter 不能与属性同名需要创建一个伪属性来访问
如果getter和属性重名，会报错 Uncaught RangeError: Maximum call stack size exceeded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span>
<span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 实例化时调用 set 方法</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>

    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;getter&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name
    <span class="token punctuation">}</span>

    <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setter&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">//设置一个伪属性</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

demo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello es6&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","09.html.vue"]]);export{d as default};
