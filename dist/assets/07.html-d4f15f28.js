import{_ as n,o as s,c as a,a as e}from"./app-3c87854f.js";const t={},p=e(`<h3 id="set-与-map" tabindex="-1"><a class="header-anchor" href="#set-与-map" aria-hidden="true">#</a> Set 与 Map</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Set 和 Map 主要的应用场景在于 数据重组 和 数据储存。
Set 是一种叫做集合的数据结构，Map 是一种叫做字典的数据结构。

集合 与 字典 的区别：
共同点：集合、字典 可以储存不重复的值
	
不同点：
	集合 是以 [value, value]的形式储存元素，或者说只有值，没有键名的结构
	字典 是以 [key=&gt;value] 的形式储存 有键值对，类似对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="maps和object的区别" tabindex="-1"><a class="header-anchor" href="#maps和object的区别" aria-hidden="true">#</a> Maps和Object的区别</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="集合set" tabindex="-1"><a class="header-anchor" href="#集合set" aria-hidden="true">#</a> 集合Set</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES6 新增的一种新的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。

Set 本身是一种构造函数，用来生成 Set 数据结构。

Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//返回长度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span>size<span class="token punctuation">)</span>

<span class="token comment">//判断是否存在某个值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token comment">//添加</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;strings&#39;</span><span class="token punctuation">)</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//查看是否添加进去</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span>

<span class="token comment">//删除某个值</span>
set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;strings&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//查看是否删除</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span>

<span class="token comment">//循环遍历</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> value <span class="token keyword">of</span> set<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//去重</span>
<span class="token keyword">var</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">//并集</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> union <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">,</span> <span class="token operator">...</span>b<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// {1, 2, 3, 4}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>union<span class="token punctuation">)</span>

<span class="token comment">//交集</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> intersect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> b<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {2, 3}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>intersect<span class="token punctuation">)</span>

<span class="token comment">//差集</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> difference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>b<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {1} 求的是a的差集</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>difference<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakset" tabindex="-1"><a class="header-anchor" href="#weakset" aria-hidden="true">#</a> WeakSet</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WeakSet的成员只能是对象，而不能是其他类型的值
WeakSet中的对象都是弱引用，也就是说如果外部都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存
不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建</span>
<span class="token keyword">var</span> weak <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
<span class="token comment">//添加</span>
weak<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>
weak<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token comment">//查看一下是否被添加</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">)</span>
    
<span class="token comment">//查看某个对象是否存在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">)</span>
    
<span class="token comment">//删除成员对象</span>
weak<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span> 

<span class="token comment">// 删除后在查看是否存在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">)</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典map" tabindex="-1"><a class="header-anchor" href="#字典map" aria-hidden="true">#</a> 字典Map</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>是一组键值对的结构，具有极快的查找速度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建map</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">var</span> keyString <span class="token operator">=</span> <span class="token string">&quot;a string&quot;</span><span class="token punctuation">,</span>
    keyObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">keyFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    
<span class="token comment">// 设置值</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keyString<span class="token punctuation">,</span> <span class="token string">&quot;value 与 &#39;a string&#39; 关联&quot;</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keyObj<span class="token punctuation">,</span> <span class="token string">&quot;value 与 keyObj 关联&quot;</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>keyFunc<span class="token punctuation">,</span> <span class="token string">&quot;value 与 keyFunc 关联&quot;</span><span class="token punctuation">)</span>

<span class="token comment">//获取长度</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span>size<span class="token punctuation">)</span>

<span class="token comment">// 获取值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keyString<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keyObj<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>keyFunc<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//判断某个属性是否存在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>keyString<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//删除某个属性</span>
map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>keyString<span class="token punctuation">)</span>

<span class="token comment">//循环遍历</span>
<span class="token comment">// for(var value of map.values()) //只循环value值</span>
<span class="token comment">// for(var key of map.keys())  //只循环key值</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//返回键值对</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">索引：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ---  值：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//Map转换为数组</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>

<span class="token comment">//数组转化为Map</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weamap" tabindex="-1"><a class="header-anchor" href="#weamap" aria-hidden="true">#</a> WeaMap</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WeakMap 对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。
WeakMap中的键都是弱引用，也就是说如果外部都不再引用该键的话，那么垃圾回收机制会自动回收该对象所占用的内存
不考虑该对象还存在于WeakMap之中，这个特点意味着WeakMap 的 key键名 是不可遍历的
另一个需要注意的点是，WeakMap 的所有 key 必须是对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> weak <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//weak.set(&#39;a&#39;, &#39;b&#39;)</span>
<span class="token comment">// Uncaught TypeError: Invalid value used as weak map key</span>

<span class="token keyword">var</span> o1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function-variable function">o2</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
o3 <span class="token operator">=</span> window
    
weak<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> <span class="token number">37</span><span class="token punctuation">)</span>
weak<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>o2<span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span>
weak<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>o3<span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>

<span class="token comment">//获取某个key的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>o3<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//判断是否存在某个key</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//删除某个key</span>
weak<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span>

<span class="token comment">//删除之后在看一下是否存在</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>weak<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Set：
	成员唯一、无序且不重复。
	[value, value]，键值与键名是一致的（或者说只有键值，没有键名）。
	可以遍历，方法有：add、delete、has。
	
WeakSet：
	成员都是对象。
	成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏。
	不能遍历，方法有add、delete、has。
	
Map：
	本质上是键值对的集合，类似集合。
	可以遍历，方法很多可以跟各种数据格式转换。
	
WeakMap：
	只接受对象作为键名（null除外），不接受其他类型的值作为键名。
	键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的。
	不能遍历，方法有get、set、has、delete。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","07.html.vue"]]);export{k as default};
