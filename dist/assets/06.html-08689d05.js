import{_ as i,r as p,o as c,c as l,b as n,d as s,e,a as t}from"./app-d50584af.js";const o="/dist/assets/images/html5/javascript/call.jpg",u="/dist/assets/images/html5/javascript/event.jpg",d="/dist/assets/images/html5/javascript/task.jpg",r="/dist/assets/images/html5/javascript/queue.jpg",v={},k=n("h3",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),s(" 参考链接")],-1),m={href:"https://lq782655835.github.io/blogs/js/js-base-3.event-loop.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="什么是进程-什么是线程-二者有啥关联" tabindex="-1"><a class="header-anchor" href="#什么是进程-什么是线程-二者有啥关联" aria-hidden="true">#</a> 什么是进程？什么是线程？二者有啥关联？</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进程：CPU资源分配的最小单位；浏览器是多进程的，每个tab页都是一个进程；

线程：CPU调度的最小单位；一个进程中可以有多个线程；

举例：进程就是一个公司，每个公司都有自己的资源进行调度，公司之间是相互独立的；
而线程就是公司的每个员工，多人协作完成任务，员工之间共享公司的空间；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么js是单线程而不是多线程" tabindex="-1"><a class="header-anchor" href="#为什么js是单线程而不是多线程" aria-hidden="true">#</a> 为什么JS是单线程而不是多线程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>JS设计为单线程是跟它的用途有关，因为JS作为浏览器的脚本语言，主要就是实现用户与浏览器的交互以及操作DOM
这就决定了JS只能是单线程，要不然就会带来很复杂的同步问题


假如JS是多线程，如果一个线程要修改某个DOM，而另外一个线程要删除这个DOM，此时浏览器就不知道该如何操作了，一脸茫然
所以为了避免复杂性，从诞生开始就是单线程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器内核渲染过程" tabindex="-1"><a class="header-anchor" href="#浏览器内核渲染过程" aria-hidden="true">#</a> 浏览器内核渲染过程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GUI 渲染线程：负责渲染页面，解析 HTML，CSS 构成 DOM 树；
JS 引擎线程：解释执行代码、用户输入和网络请求；
事件处理线程：click、mouse等交互事件发生后将事件函数放入队列；
定时器触发线程：等时间结束后执行函数推入任务队列中；
http网络请求线程：处理用户的get、post请求，返回结果推入任务队列中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引擎和runtime" tabindex="-1"><a class="header-anchor" href="#引擎和runtime" aria-hidden="true">#</a> 引擎和runtime</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>引擎：解释并编译代码，让它变成能交给机器运行的代码。

runtime(宿主环境)：JS运行的环境称之为宿主环境，比如提供异步处理模块、Timer模块、Ajax的Network模块、事件的DOM渲染模块等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行栈" tabindex="-1"><a class="header-anchor" href="#执行栈" aria-hidden="true">#</a> 执行栈</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>执行栈(call stack)是一个数据结构，用于存放各种函数的执行环境，每一个函数执行之前，它的相关信息会加入到执行栈。
函数调用之前，创建执行环境，然后加入到执行栈；函数调用之后，销毁执行环境。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="call"></p><h3 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h3>',12),h={href:"https://blog.csdn.net/yun_shuo/article/details/116607168",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">JS</span>中所有的任务可以分为同步任务和异步任务，同步任务是立即执行的任务，同步任务一般会直接进入到主线程中执行
而异步任务，就是异步执行的任务，比如ajax网络请求，setTimeout定时函数等都属于异步任务
<span class="token function">异步任务会通过任务队列</span><span class="token punctuation">(</span>先进先出<span class="token punctuation">)</span>的机制来进行协调
同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入任务队列
主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行
这种不断重复就是我们所说的事件循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="event"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在事件循环中，每进行一次循环操作称为tick，每一次 tick 的任务的步骤可以总结如下：
<span class="token number">1.</span>执行一个宏任务（栈中没有就从事件队列中获取）
<span class="token number">2.</span>执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
<span class="token number">3.</span>宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
<span class="token number">4.</span>当前宏任务执行完毕，开始检查渲染，然后<span class="token constant">GUI</span>线程接管渲染
<span class="token number">5.</span>渲染完毕后，<span class="token constant">JS</span>线程继续接管，开始下一个宏任务（从事件队列中获取）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="task"></p><h3 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h3>',5),f={href:"https://blog.csdn.net/weixin_46015333/article/details/127995994",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>队列(Queue) 是一种只在表的一端进行插入，而在另一端进行删除的数据结构
队头(front) 允许删除的一端，永远指向第一个元素前一个位置
队尾(rear) 允许插入的一端，永远是指向队列最后一个元素
先进先出的线性表，简称FIFO表
空队列 当队列中没有元素

当队列满时再入队会产生空间溢出，简称上溢
当队列空时再出队也会产生溢出，简称下溢
溢是一种出错状态，应该避免；下溢则是正常现象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="queue"></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ObjectQueue</span> 
<span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 入队</span>
  <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token operator">++</span><span class="token keyword">this</span><span class="token punctuation">.</span>end<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 出队</span>
  <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 取队头元素</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>front<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 判断队列是否为空</span>
  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>end<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 取队列有多少个元素</span>
  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 清空队列</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>front <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>end <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微任务和宏任务" tabindex="-1"><a class="header-anchor" href="#微任务和宏任务" aria-hidden="true">#</a> 微任务和宏任务</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>宏任务(macrotask) == 事件循环队列
微任务(microtask) == 任务队列

宏任务主要包含：
script( 整体代码)、setTimeout、setInterval、I/O、UI 交互事件、setImmediate(Node.js环境)

微任务主要包含：
Promise、MutaionObserver、process.nextTick(Node.js 环境)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script start&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//整体 script 作为第一个宏任务进入主线程，遇到 console.log，输出 script start</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//运行 setTimeout，其回调函数被分发到下一次的宏任务 事件队列 中</span>


Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//遇到 Promise，其then函数被分到到微任务事件队列中记为 then1，之后又遇到了then函数，将其分到微任务事件队列中，记为then2</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;script end&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//遇到 console.log，输出 script end</span>


<span class="token comment">// 执行结果：</span>
<span class="token comment">// script start</span>
<span class="token comment">// script end</span>
<span class="token comment">// promise1</span>
<span class="token comment">// promise2</span>
<span class="token comment">// setTimeout</span>

<span class="token comment">// 运行分析</span>
<span class="token comment">// 第一次的事件循环(第一次tick)</span>
<span class="token comment">// 先运行主线程上的宏任务：script、setTimeout运行，并将回调函数添加到下一次的宏任务事件队列中</span>
<span class="token comment">// 将promise 的 then1 和 then2 添加到微任务事件队列中</span>
<span class="token comment">// 主线程任务运行完之后，运行微任务的事件队列 then1  这样就清空了所有微任务</span>


<span class="token comment">// 第二次的事件循环(第二次tick)</span>
<span class="token comment">// 运行宏任务 setTimeout中的回调函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(_,w){const a=p("ExternalLinkIcon");return c(),l("div",null,[k,n("blockquote",null,[n("p",null,[n("a",m,[s("https://lq782655835.github.io/blogs/js/js-base-3.event-loop.html"),e(a)])])]),b,n("blockquote",null,[n("p",null,[s("参考链接："),n("a",h,[s("https://blog.csdn.net/yun_shuo/article/details/116607168"),e(a)])])]),g,n("blockquote",null,[n("p",null,[s("参考链接："),n("a",f,[s("https://blog.csdn.net/weixin_46015333/article/details/127995994"),e(a)])])]),x])}const q=i(v,[["render",y],["__file","06.html.vue"]]);export{q as default};
