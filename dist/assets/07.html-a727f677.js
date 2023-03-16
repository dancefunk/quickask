import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const e={},p=t(`<h3 id="object对象" tabindex="-1"><a class="header-anchor" href="#object对象" aria-hidden="true">#</a> Object对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object对象是所有JavaScript对象的基类
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 父对象</span>
<span class="token keyword">function</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token parameter">nickname</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>nickname <span class="token operator">=</span> nickname

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nickname<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 子对象</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token comment">// 子对象继承父对象</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>nickname <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>
obj<span class="token punctuation">.</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 获取原型链</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__ <span class="token operator">==</span> <span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>

<span class="token comment">// 获取构造函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>constructor <span class="token operator">==</span> People<span class="token punctuation">)</span>


<span class="token comment">// hasOwnProperty 判断对象是否有某个属性(非继承)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;nickname&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// 创建并返回一个指定原型和指定属性的对象</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&#39;李四&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">20</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>


<span class="token comment">// 添加新属性</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">&#39;money&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">// 冻结对象，不能添加属性以及无法对属性进行修改、删除等操作</span>
<span class="token comment">// Object.freeze(obj2)</span>

<span class="token comment">// 修改属性</span>
obj2<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">2000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">// 返回一个数组，包含对象的所有属性和方法，不包含原型继承的属性和方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性描述符" tabindex="-1"><a class="header-anchor" href="#属性描述符" aria-hidden="true">#</a> 属性描述符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>分为 数据属性 和 访问器属性

数据属性：包含属性的操作特性；如：设置值、是否可枚举等等

访问器属性：设置属性的访问方式；<span class="token keyword">set</span>、<span class="token keyword">get</span>特性等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据属性" tabindex="-1"><a class="header-anchor" href="#数据属性" aria-hidden="true">#</a> 数据属性</h4><table><thead><tr><th style="text-align:left;">特性名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;">设置属性的值</td><td style="text-align:left;">undefined</td></tr><tr><td style="text-align:left;">writable</td><td style="text-align:left;">是否可修改属性的值；true：可修改属性的值；false：不可修改属性的值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">enumerable</td><td style="text-align:left;">是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">configurable</td><td style="text-align:left;">是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性</td><td style="text-align:left;">false</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">)</span>在使用Object<span class="token punctuation">.</span>defineProperty、Object<span class="token punctuation">.</span>defineProperties 或 Object<span class="token punctuation">.</span>create
函数的情况下添加数据属性，writable、enumerable和configurable默认值为<span class="token boolean">false</span>

<span class="token number">2</span><span class="token punctuation">)</span>使用对象直接量创建的属性，writable、enumerable和configurable特性默认为<span class="token boolean">true</span>

示例：

<span class="token comment">// 1)对象直接量；属性特性默认为true</span>
<span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// =&gt; Object {value: &quot;tom&quot;, writable: true, enumerable: true, configurable: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

 
<span class="token comment">// 2)通过Object.create创建，属性特性默认为false</span>
<span class="token keyword">var</span> o2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// =&gt; Object {value: &quot;tom&quot;, writable: false, enumerable: false, configurable: false}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="访问器属性" tabindex="-1"><a class="header-anchor" href="#访问器属性" aria-hidden="true">#</a> 访问器属性</h4><table><thead><tr><th style="text-align:left;">特性名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">get</td><td style="text-align:left;">属性的返回值函数</td><td style="text-align:left;">undefined</td></tr><tr><td style="text-align:left;">set</td><td style="text-align:left;">属性的设置值函数；含有一个赋值参数</td><td style="text-align:left;">undefined</td></tr><tr><td style="text-align:left;">enumerable</td><td style="text-align:left;">是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">configurable</td><td style="text-align:left;">是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性</td><td style="text-align:left;">false</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token comment">// 添加一个属性，并设置为访问器属性</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	 <span class="token comment">// get和set里的变量不要使用属性，如：属性为name，get和set用的是_name</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>   
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> <span class="token string">&#39;name不能为纯数字&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// =&gt; Object {get: function, set: function, enumerable: true, configurable: true}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;12&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; name不能为纯数字</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete删除属性" tabindex="-1"><a class="header-anchor" href="#delete删除属性" aria-hidden="true">#</a> delete删除属性</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>说明：<span class="token keyword">delete</span>只能删除对象的自有属性，不能删除继承属性

语法：<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>propertyName 或者 <span class="token keyword">delete</span> obj<span class="token punctuation">[</span>propertyName<span class="token punctuation">]</span>

示例：

<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
o<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 1</span>
<span class="token keyword">delete</span> o<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; undefined ：访问不存在的属性，返回undefined</span>
 
o<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 在原型对象上添加一个y属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 2</span>
<span class="token keyword">delete</span> o<span class="token punctuation">.</span>y<span class="token punctuation">;</span> <span class="token comment">// 删除继承属性y</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; 2 ：还是可以访问继承属性y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in运算符" tabindex="-1"><a class="header-anchor" href="#in运算符" aria-hidden="true">#</a> in运算符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>说明：判断对象是否包含某个属性，会从对象的实例属性、继承属性里进行检测

语法：propertyName <span class="token keyword">in</span> obj

返回值：

<span class="token punctuation">{</span>bool<span class="token punctuation">}</span> 判断对象的实例属性或继承是否包含此属性

<span class="token boolean">true</span>：对象的实例属性或继承属性包含此属性

<span class="token boolean">false</span>：对象的实例属性或继承属性不包含此属性

示例：

<span class="token keyword">function</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置Student的原型为People对象</span>
 
<span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span> <span class="token keyword">in</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true ：age为实例属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span> <span class="token keyword">in</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; true ：name为继承属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;address&#39;</span> <span class="token keyword">in</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// =&gt; false ：address不存在此对象呢，返回false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","07.html.vue"]]);export{r as default};
