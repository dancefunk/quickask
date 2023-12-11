import{_ as n,o as s,c as a,a as e}from"./app-d50584af.js";const p={},t=e(`<h3 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token punctuation">[</span>变量名<span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span>类型<span class="token punctuation">]</span> <span class="token operator">=</span> 值<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="变量作用域" tabindex="-1"><a class="header-anchor" href="#变量作用域" aria-hidden="true">#</a> 变量作用域</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>全局变量：任意位置调用
局部变量：只作用域函数内部
类作用域：
    类变量：定义在类里面的变量，在外部通过 <span class="token keyword">new</span> 实例化后方面
    静态变量：不需要实例化，之类通过 <span class="token keyword">class</span> 类名来访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 全局变量</span>
<span class="token keyword">var</span> global <span class="token operator">=</span> <span class="token number">12</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> 
<span class="token punctuation">{</span>
    <span class="token comment">// 实例变量</span>
    value <span class="token operator">=</span> <span class="token number">13</span><span class="token punctuation">;</span>

    <span class="token comment">// 静态变量</span>
    <span class="token keyword">static</span> sval <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
   
   <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
   <span class="token punctuation">{</span>
    <span class="token comment">// 局部变量</span>
    <span class="token keyword">var</span> local <span class="token operator">=</span> <span class="token number">14</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> local
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">全局变量：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>global<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">静态变量：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Demo<span class="token punctuation">.</span>sval<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> 

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">实例变量：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">局部变量：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>obj<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数返回值 箭头函数写法
 * <span class="token keyword">@param</span> <span class="token parameter">a</span> 数值类型
 * <span class="token keyword">@param</span> <span class="token parameter">b</span> 可选参数
 * <span class="token keyword">@param</span> <span class="token parameter">c</span> 带默认值的参数
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">let</span> demo <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">?</span><span class="token operator">:</span>number<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a + b + c = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token punctuation">(</span>c <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">demo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>TypeScript提供了函数重载的概念，您可以拥有多个具有相同名称但参数类型和返回类型不同的函数。
但是，参数的数量应该是相同的。因为函数重载不支持参数数量和类型不同的函数。


<span class="token function">在例子中，我们有相同的函数add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>，有两个函数声明 和 一个函数实现。
第一个函数有两个字符串类型的参数，而第二个函数有两个数字类型的参数。最后一个函数应该有函数实现
根据前两个函数声明，返回类型可以是字符串或数字，所以我们必须在函数定义中使用兼容的参数和返回类型，如any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>string<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span>string</span><span class="token punctuation">)</span><span class="token operator">:</span>string<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span>number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span>number</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns &quot;Hello World&quot; </span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// returns 30 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token operator">...</span>names<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> <span class="token string">&quot; &quot;</span> <span class="token operator">+</span> names<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot; - &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">demo</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;typescript&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔类型" tabindex="-1"><a class="header-anchor" href="#布尔类型" aria-hidden="true">#</a> 布尔类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">isDone</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">demo1</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">6</span>
<span class="token keyword">const</span> <span class="token literal-property property">demo2</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0xf00d</span>
<span class="token keyword">const</span> <span class="token literal-property property">demo3</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0b1010</span>
<span class="token keyword">const</span> <span class="token literal-property property">demo4</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0o744</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">nickname</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;ricky&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">sentence</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span> nickname <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">list</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">list2</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h3><p>元组类型表示一个已知元素数量和类型的数组，各元素类型不一定一致</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> number<span class="token punctuation">]</span><span class="token punctuation">;</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3><p>表示几种可能值之一，枚举值可以为数字，字符串等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up<span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Down <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Left <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Right <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 数字枚举支持反向映射，即通过值获取key</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;Up&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
    Down<span class="token punctuation">,</span>
    Left<span class="token punctuation">,</span>
    Right
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span>Up<span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Down<span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Left<span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10 11 12 13</span>

<span class="token comment">// 字符串</span>
<span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
    Up <span class="token operator">=</span> <span class="token string">&#39;Up&#39;</span><span class="token punctuation">,</span>
    Down <span class="token operator">=</span> <span class="token string">&#39;Down&#39;</span><span class="token punctuation">,</span>
    Left <span class="token operator">=</span> <span class="token string">&#39;Left&#39;</span><span class="token punctuation">,</span>
    Right <span class="token operator">=</span> <span class="token string">&#39;Right&#39;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Direction<span class="token punctuation">[</span><span class="token string">&#39;Right&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Right Up</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union联合" tabindex="-1"><a class="header-anchor" href="#union联合" aria-hidden="true">#</a> Union联合</h3><p>TypeScript 允许我们在变量或函数参数中使用多种数据类型，这被称为联合类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
code <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>   <span class="token comment">// OK</span>
code <span class="token operator">=</span> <span class="token string">&quot;ABC&quot;</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
<span class="token comment">// code = false; // 编译错误</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> number<span class="token punctuation">)</span></span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token function">demo</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// demo(false) // 编译错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> Any</h3><p>any表示任何可能，当设置为any时，类型检查器对这些值将不再进行检查，所以实际项目中不建议使用。大部分情况下可用unknown替代</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">demo</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
demo <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// OK </span>
demo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OK</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> unknown</h3><p>unknown在ts3.0加入，用法同any，表示当前并不知道该变量为哪种类型，不过不会关闭类型检查，在unknown类型被确定为某一中类型之前，不能进行实例化，getter，函数执行等</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">demo</span><span class="token operator">:</span> unknown <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
demo <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span> <span class="token comment">// OK </span>
demo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ERROR</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> Void</h3><p>与Java等语言类似，void用于表示没有数据，因为只能为void变量赋undefined和null</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">demo</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> 
<span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null和undefined" tabindex="-1"><a class="header-anchor" href="#null和undefined" aria-hidden="true">#</a> Null和Undefined</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">demo1</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">demo2</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never</h3><p>never，代表不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">message</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> never 
<span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">infiniteLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> never 
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","02.html.vue"]]);export{u as default};