import{_ as n,o as s,c as a,a as t}from"./app-88c1fa71.js";const p={},e=t(`<h3 id="字符串拓展" tabindex="-1"><a class="header-anchor" href="#字符串拓展" aria-hidden="true">#</a> 字符串拓展</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// includes 返回布尔值，判断是否找到参数字符串</span>
<span class="token keyword">var</span> string <span class="token operator">=</span> <span class="token string">&quot;apple,banana,orange&quot;</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;banana&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>


<span class="token comment">// repeat 将字符串重复指定次数</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello,&quot;</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>


<span class="token comment">// padStart：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串</span>
<span class="token comment">// padEnd：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串</span>
<span class="token comment">// 以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串</span>
<span class="token comment">// 如果没有指定第二个参数，默认用空格填充</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;ooooh&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&quot;o&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// &quot;hoooo&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;h&quot;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// &quot;    h&quot;</span>

<span class="token comment">//常用于补全位数：</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// &quot;0000000123&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组拓展" tabindex="-1"><a class="header-anchor" href="#数组拓展" aria-hidden="true">#</a> 数组拓展</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span>

<span class="token comment">// keys()  提取数组中的下标</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">of</span> list<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// values()   提取数组中的值</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> list<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// entries() 返回键值对</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> list<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">// includes 数组是否包含指定的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// flat 数组降维，默认是降一维</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数拓展" tabindex="-1"><a class="header-anchor" href="#函数拓展" aria-hidden="true">#</a> 函数拓展</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 常规</span>
<span class="token keyword">function</span> <span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">100</span>
<span class="token punctuation">}</span>

<span class="token comment">// 匿名函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">GetPrice</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">200</span>
<span class="token punctuation">}</span>

<span class="token comment">// ES6 箭头函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">GetPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">300</span>
<span class="token punctuation">}</span>

<span class="token comment">// 简写</span>
<span class="token keyword">var</span> <span class="token function-variable function">GetPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token number">300</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// 带参数的结构</span>
<span class="token keyword">var</span> <span class="token function-variable function">GetPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span>arg2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg1<span class="token operator">+</span>arg2
<span class="token punctuation">}</span>

<span class="token comment">// 简写</span>
<span class="token keyword">var</span> <span class="token function-variable function">GetPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1<span class="token operator">+</span>arg2

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">GetPrice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">//ES6中遍历函数</span>
<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;王五&#39;</span><span class="token punctuation">]</span>

list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">遍历的索引：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --- 遍历的值：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">//ES5的写法 this 是取决于被哪个function 所包含的</span>
<span class="token comment">//ES6函数中this总是绑定总是指向对象自身</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
    that<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// this == setInterval这个定时器</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>

    <span class="token comment">//箭头函数一般指向的就是 对象的本身</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象拓展" tabindex="-1"><a class="header-anchor" href="#对象拓展" aria-hidden="true">#</a> 对象拓展</h3><h4 id="属性-方法简写" tabindex="-1"><a class="header-anchor" href="#属性-方法简写" aria-hidden="true">#</a> 属性/方法简写</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//属性简写</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> 
<span class="token punctuation">{</span>
    <span class="token comment">//属性简写</span>
    name<span class="token punctuation">,</span>

    <span class="token comment">//方法简写</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;hello work&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//属性可以写成表达式  值要写到[]外面</span>
    <span class="token punctuation">[</span><span class="token string">&#39;he&#39;</span><span class="token operator">+</span><span class="token string">&#39;llo&#39;</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原型操作与遍历对象" tabindex="-1"><a class="header-anchor" href="#原型操作与遍历对象" aria-hidden="true">#</a> 原型操作与遍历对象</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span>setPrototypeOf   设置原型
Object<span class="token punctuation">.</span>getPrototypeOf   获取原型
Object<span class="token punctuation">.</span>keys	<span class="token function">提取对象中的所有属性名</span><span class="token punctuation">(</span>不含原型继承<span class="token punctuation">)</span>
Object<span class="token punctuation">.</span>values		<span class="token function">提取对象中的所有属性值</span><span class="token punctuation">(</span>不含原型继承<span class="token punctuation">)</span>
Object<span class="token punctuation">.</span>entries  返回对象中的键值对
Object<span class="token punctuation">.</span>assign   对象合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">111</span><span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">d</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;sdf&quot;</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">,</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">e</span><span class="token operator">:</span><span class="token number">999</span><span class="token punctuation">}</span>

<span class="token comment">//prototype 设置原型</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>

<span class="token comment">//直接打印不会打印出原型继承的内容</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>

<span class="token comment">//需要循环输出才能打印出原型的内容</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj1<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取一个对象的原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//遍历对象中的属性名称</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//遍历对象中的属性值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//返回对象中的键值对</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//对象合并</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","05.html.vue"]]);export{k as default};
