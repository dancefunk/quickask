import{_ as n,o as s,c as a,a as t}from"./app-02c5a260.js";const e={},p=t(`<h1 id="javascript常见设计模式" tabindex="-1"><a class="header-anchor" href="#javascript常见设计模式" aria-hidden="true">#</a> JavaScript常见设计模式</h1><table><thead><tr><th style="text-align:left;">单例模式</th><th style="text-align:left;">工厂模式</th><th style="text-align:left;">观察者模式</th><th style="text-align:left;">代理模式</th><th style="text-align:left;">策略模式</th></tr></thead><tbody><tr><td style="text-align:left;">适配器模式</td><td style="text-align:left;">外观模式</td><td style="text-align:left;">构造函数模式</td><td style="text-align:left;">命令模式</td><td style="text-align:left;">建造者模式</td></tr><tr><td style="text-align:left;">迭代器模式</td><td style="text-align:left;">中介者模式</td><td style="text-align:left;">享元模式</td><td style="text-align:left;">职责链模式</td><td style="text-align:left;">装饰者模式</td></tr><tr><td style="text-align:left;">组合模式</td><td style="text-align:left;">模板模式</td><td style="text-align:left;">原型模式</td><td style="text-align:left;">状态模式</td><td style="text-align:left;">桥接模式</td></tr></tbody></table><h1 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单: 单一, 一个
例: 实例
所谓的单例, 就是指一个类只有一个实例, 不管你 new 多少次, 都是这一个实例
具体的实现思路就是:
	先判断实例是否存在
	如果存在则直接将实例返回
	如果不存在, 就创建了再返回
	
当一个类的实例被频繁使用，如果重复创建这个实例，会无端消耗资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="普通案例" tabindex="-1"><a class="header-anchor" href="#普通案例" aria-hidden="true">#</a> 普通案例</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//实例化多次浪费资源</span>
<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>

<span class="token comment">// 单例模式就是帮助我们把这里的 false 变成 true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token operator">==</span> p2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单例模式-1" tabindex="-1"><a class="header-anchor" href="#单例模式-1" aria-hidden="true">#</a> 单例模式</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//将类移到执行函数内容，是为了不对外暴露内部实现</span>
  <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> instance

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> instance
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token operator">===</span> p2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么是工厂模式？就是像工厂一样批量创建对象。具体来说，抽象创建具体对象的过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">factory</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> work</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> name<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">,</span>
    <span class="token literal-property property">work</span><span class="token operator">:</span> work<span class="token punctuation">,</span>
    <span class="token function-variable function">info</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">是一名</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>work<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> person
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;厨师&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">&#39;建筑师&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="发布-订阅模式-观察者模式" tabindex="-1"><a class="header-anchor" href="#发布-订阅模式-观察者模式" aria-hidden="true">#</a> 发布-订阅模式(观察者模式)</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：发布-订阅模式也叫做观察者模式。通过一对一或者一对多的依赖关系，当对象发生改变时，订阅方都会收到通知

作用：一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作

应用场景：在 Vue 中，实现数据双向绑定也是使用了该模式
对于需要实现响应式的对象来说，在 get 的时候会进行依赖收集，当改变了对象的属性时，就会触发派发更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 发布者 商家</span>
<span class="token keyword">class</span> <span class="token class-name">Publisher</span>
<span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//添加订阅者</span>
  <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//通知所有订阅者</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">//调用订阅者的函数</span>
      user<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//订阅者 顾客</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span>
<span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>

  <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;顾客接收到通知，准备买买买&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//创建订阅者：顾客</span>
<span class="token keyword">const</span> customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//创建发布者：商家</span>
<span class="token keyword">const</span> business <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Publisher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//订阅到货消息</span>
business<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span>

<span class="token comment">//货物到达通知顾客</span>
business<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：代理模式是为了控制对对象的访问，不让外部直接访问到对象。

作用：转发请求，避免直接操作对象

应用场景：比如你需要买一件国外的产品，这时候你可以通过代购来购买产品。比如事件代理就用到了代理模式。Vue的数据劫持就用了代理模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//替man送礼物给girl</span>

<span class="token comment">//对象代理</span>
<span class="token keyword">var</span> <span class="token function-variable function">girl</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">//委托人</span>
<span class="token keyword">var</span> <span class="token function-variable function">man</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">girl</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>girl <span class="token operator">=</span> girl
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">gift</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>girl<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 送你个礼物：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>gift<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//代理人</span>
<span class="token keyword">var</span> <span class="token function-variable function">proxy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">girl</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>girl <span class="token operator">=</span> girl
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">gift</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//替man送礼物给girl</span>
    <span class="token keyword">new</span> <span class="token class-name">man</span><span class="token punctuation">(</span>girl<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>gift<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//进行代理</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">proxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">girl</span><span class="token punctuation">(</span><span class="token string">&#39;小红&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;玫瑰花&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：策略模式定义一系列的操作类型,把它们一个个封装起来, 并且使它们可相互替换。

作用：解决大量的if-else场景
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> rules <span class="token operator">=</span> 
<span class="token punctuation">{</span>
  <span class="token function">IsNumber</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Number
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">IsString</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">IsBoolean</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Boolean
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">IsFunction</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span>constructor <span class="token operator">==</span> Function
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">//类似于验证器功能</span>
<span class="token keyword">const</span> <span class="token function-variable function">validate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> rules<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;IsString&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">&#39;IsNumber&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>概念：不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作

作用：适配器模式的作用是解决两个软件实体间的接口不兼容的问题

应用场景：使用适配器模式之后，原本由于接口不兼容而不能工作的两个软件实体可以一起工作。比如Type-C和苹果的转接口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//插头对象</span>
<span class="token keyword">class</span> <span class="token class-name">Adapter</span> <span class="token punctuation">{</span>
  <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;德国标准插头&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 适配器</span>
<span class="token keyword">class</span> <span class="token class-name">Target</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>adapter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Adapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>adapter<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 转换为 中国插头</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Target</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>demo<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(e,[["render",c],["__file","08.html.vue"]]);export{d as default};
