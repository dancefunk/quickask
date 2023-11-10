import{_ as n,o as s,c as a,a as e}from"./app-c94bd78a.js";const i="/dist/assets/images/html5/javascript/prototype.png",t={},l=e(`<h3 id="变量的生命周期" tabindex="-1"><a class="header-anchor" href="#变量的生命周期" aria-hidden="true">#</a> 变量的生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>全局变量：全局声明的变量<span class="token punctuation">,</span>作用范围为整个脚本
局部变量：函数内声明的变量，作用范围为函数内部，函数调用完成后，局部变量就会被销毁

在函数外用<span class="token keyword">var</span>声明的变量一般就是全局变量
定义在函数当中，但是没有用<span class="token keyword">var</span>声明的是全局变量
定义在函数当中，用<span class="token keyword">var</span>声明的是局部变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> global <span class="token operator">=</span> <span class="token string">&#39;global&#39;</span> <span class="token comment">//全局变量</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">var</span> local<span class="token operator">=</span><span class="token string">&#39;local&#39;</span> <span class="token comment">//局部变量</span>

    local <span class="token operator">=</span> <span class="token string">&#39;局部变量&#39;</span> <span class="token comment">//修改局部变量</span>
    global <span class="token operator">=</span> <span class="token string">&#39;全局变量&#39;</span> <span class="token comment">//修改全局变量</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">)</span> <span class="token comment">//打印全局变量</span>

<span class="token comment">// console.log(local) //打印局部变量，会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>标记清除（常用）
    工作原理：
        当变量进入环境时，将这个变量标记为&quot;进入环境&quot;。
        当变量离开环境时，则将其标记为&quot;离开环境&quot;。标记&quot;离开环境&quot;的就回收内存。

    工作流程：
        1.垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。
        2.去掉环境中的变量以及被环境中的变量引用的变量的标记。
        3.再被加上标记的会被视为准备删除的变量。
        4.垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。


引用计数：
    工作原理：
        跟踪记录每个值被引用的次数。
        
    工作流程：
        1.声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是1。
        2.同一个值又被赋值给另一个变量，这个引用类型值的引用次数加1.
        3.当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减1.
        4.当引用次数变成0时，说明没办法访问这个值了。
        5.当垃圾收集器下一次运行时，它就会释放引用次数是0的值所占的内存。

    弊端：
        在循环循环引用中变量的引用次数不会为零则变量不会被回收
        而为了解决这种问题，可以显性地切断引用，即将变量的值设为null

    
现在大部分的浏览器都是采用标记清除的垃圾回收机制
而IE的BOM和DOM中的对象是以引用计数方式进行垃圾回收的COM对象的形式存在的
所以会有导致变量不能被回收的现象。但是在IE9之后就取消了COM对象的形式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当函数嵌套时，内层函数只能在外层函数作用域内执行，在内层函数执行的过程中，若需要引入某个变量时
首先会在当前作用域中寻找，若未找到，则继续向上一层级的作用域中寻找，直到全局作用域为止
我们称这种链式的查询关系为作用域链

作用域链：核心作用，找变量，追溯一个变量的来源，从当前作用域当中开始找，找到最外层全局作用域为止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">function</span> <span class="token constant">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">200</span>
    <span class="token keyword">function</span> <span class="token constant">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">300</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 自由变量，顺作用域链向父作用域找</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 自由变量，顺作用域链向父作用域找</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 本作用域的变量</span>
    <span class="token punctuation">}</span>
    <span class="token constant">F2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token constant">F1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> 原型和原型链</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>构造函数就是一个普通的函数，创建方式和普通函数没有区别，不同的是构造函数习惯上首字母大写。
另外就是调用方式的不同，普通函数是直接调用，而构造函数需要使用new关键字来调用。

原型的作用：拓展(属性、方法)
原型链的作用：找父类 从当前对象开始，直到找到的结果为null的时候，所形成的这条链就是原型链
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+`" alt="prototype"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//定义对象</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> money</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//对象下面的属性</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
	<span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">=</span> money

	<span class="token comment">//对象下面的方法</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">work</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>money <span class="token operator">+=</span> <span class="token number">1000</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 先注释掉prototype 为了不影响下面的原型链的结果，要用在取消注释</span>
<span class="token comment">//额外拓展方法 就行继承 == 原型 == prototype</span>
<span class="token comment">// Person.prototype.sleep = function()</span>
<span class="token comment">// {</span>
<span class="token comment">// 	// this == Person 继承了谁  this 指向的就是那个对象</span>
<span class="token comment">// 	console.log(\`\${this.name} 在 睡觉\`)</span>
<span class="token comment">// }</span>

<span class="token comment">//实例化对象</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token comment">// // 调用拓展方法 先注释掉prototype 为了不影响下面的原型链的结果，要用在取消注释</span>
<span class="token comment">// obj.sleep()</span>

<span class="token comment">//找obj这个对象的父类</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">//new Person()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">//function Person</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>  <span class="token comment">//new Object JS底层的内置对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span> <span class="token comment">//null </span>

<span class="token comment">// 原型链(找父亲): 从某个对象开始 一直往上追溯 直到追溯为 null 的时候就结束了</span>
<span class="token comment">// obj -&gt; person -&gt; Object -&gt; null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),c=[l];function o(p,d){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","04.html.vue"]]);export{r as default};
