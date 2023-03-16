import{_ as t,p as e,q as p,s as n,R as s,t as c,Z as o,n as i}from"./framework-823c4b5a.js";const l="/assets/ipc-d0883a96.jpg",u={},r=n("h3",{id:"友情参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#友情参考","aria-hidden":"true"},"#"),s(" 友情参考")],-1),d={href:"http://www.inode.club/node/processAndThread.html#%E6%96%87%E7%AB%A0%E5%AF%BC%E8%A7%88",target:"_blank",rel:"noopener noreferrer"},k=o(`<h3 id="什么是进程" tabindex="-1"><a class="header-anchor" href="#什么是进程" aria-hidden="true">#</a> 什么是进程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进程是系统中正在运行的一个程序，程序一旦运行就是进程。

进程可以看成程序执行的一个实例。进程是系统资源分配的独立实体，每个进程都拥有独立的地址空间。
一个进程无法访问另一个进程的变量和数据结构，如果想让一个进程访问另一个进程的资源，需要使用进程间通信。
比如管道，文件，套接字等。

一个进程可以拥有多个线程，每个线程使用其所属进程的栈空间。
线程与进程的一个主要区别是，统一进程内的一个主要区别是，同一进程内的多个线程会共享部分状态，
多个线程可以读写同一块内存（一个进程无法直接访问另一进程的内存）。
同时，每个线程还拥有自己的寄存器和栈，其他线程可以读写这些栈内存。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是线程" tabindex="-1"><a class="header-anchor" href="#什么是线程" aria-hidden="true">#</a> 什么是线程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>线程是进程的一个实体，是进程的一条执行路径。

线程是进程的一个特定执行路径。当一个线程修改了进程的资源，它的兄弟线程可以立即看到这种变化。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程和线程的区别体现在以下几个方面" tabindex="-1"><a class="header-anchor" href="#进程和线程的区别体现在以下几个方面" aria-hidden="true">#</a> 进程和线程的区别体现在以下几个方面</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.地址空间和其他资源（如打开文件）：进程间相互独立，同一进程的各线程间共享。某进程内的线程在其他进程内不可见。

2.通信：进程间通信IPC（管道，信号量，共享内存，消息队列），线程间可以直接独写进程数据段（如全局变量）来进程通信——需要进程同步和互斥手段的辅助，以保证数据的一致性。

3.调度和切换：线程上下文切换比进程上下文切换快得多。

4.在多线程OS中，进程不是一个可执行的实体。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程和线程的选择取决以下几点" tabindex="-1"><a class="header-anchor" href="#进程和线程的选择取决以下几点" aria-hidden="true">#</a> 进程和线程的选择取决以下几点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.需要频繁创建销毁的优先使用线程；因为对进程来说创建和销毁一个进程的代价是很大的。

2.线程的切换速度快，所以在需要大量计算，切换频繁时使用线程，还有耗时的操作时用使用线程可提高应用程序的响应。

3.因为对CPU系统的效率使用上线程更占优势，所以可能要发展到多机分布的用进程，多核分布用线程。

4.并行操作时用线程，如C/S架构的服务器端并发线程响应用户的请求。

5.需要更稳定安全时，适合选择进程；需要速度时，选择线程更好。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node-js-进程创建" tabindex="-1"><a class="header-anchor" href="#node-js-进程创建" aria-hidden="true">#</a> Node.js 进程创建</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用内置模块来创建进程child_process 和 cluster 模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="child-process-fork开启子进程" tabindex="-1"><a class="header-anchor" href="#child-process-fork开启子进程" aria-hidden="true">#</a> child_process.fork开启子进程</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建子进程主要用来解决线程阻塞问题，在进行高并发计算是创建子进程，子进程计算完成通过send方法将结果发送给主进程，主进程通过msessage监听到信息后处理并退出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fork <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;child_process&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fork<span class="token punctuation">;</span>

<span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url <span class="token operator">==</span> <span class="token string">&#39;/compute&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> compute <span class="token operator">=</span> <span class="token function">fork</span><span class="token punctuation">(</span><span class="token string">&#39;./compute.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        compute<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;开启一个新的子进程&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 当一个子进程使用 process.send() 发送消息时会触发 &#39;message&#39; 事件</span>
        compute<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token parameter">sum</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Sum is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            compute<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 子进程监听到一些错误消息退出</span>
        compute<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">收到close事件，子进程收到信号 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>signal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 而终止，退出码 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            compute<span class="token punctuation">.</span><span class="token function">kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ok</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">server started at http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token number">3000</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>compute.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">computation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;计算开始&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;计算耗时&#39;</span><span class="token punctuation">)</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1e10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> i
  <span class="token punctuation">}</span>

  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;计算结束&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;计算耗时&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>

process<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token string">&#39;process.pid&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span> <span class="token comment">// 子进程id</span>
  <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">computation</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 如果Node.js进程是通过进程间通信产生的，那么，process.send()方法可以用来给父进程发送消息</span>
  process<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cluster-开启子进程" tabindex="-1"><a class="header-anchor" href="#cluster-开启子进程" aria-hidden="true">#</a> cluster 开启子进程</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> numCPUs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;os&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length
<span class="token keyword">const</span> cluster <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cluster&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>cluster<span class="token punctuation">.</span>isMaster<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Master proces id is&#39;</span><span class="token punctuation">,</span> process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span>
  <span class="token comment">// fork workers</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCPUs<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cluster<span class="token punctuation">.</span><span class="token function">fork</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  cluster<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;exit&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">worker<span class="token punctuation">,</span> code<span class="token punctuation">,</span> signal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;worker process died,id&#39;</span><span class="token punctuation">,</span> worker<span class="token punctuation">.</span>process<span class="token punctuation">.</span>pid<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// Worker可以共享同一个TCP连接</span>
  <span class="token comment">// 这里是一个http服务器</span>
  http
    <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
      res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;hello word&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="child-process与cluster区别" tabindex="-1"><a class="header-anchor" href="#child-process与cluster区别" aria-hidden="true">#</a> child_process与cluster区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>相同点：
	主进程负责监听端口，接收到新的请求后将其分发给下面的 worker 进程
	
不同点：
	最大区别在于cluster允许跨进程端口复用，给我们的网络服务器带来很大的方便，也就是可以在同一个服务器端口，利用cluster实现多进程。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="进程间通信" tabindex="-1"><a class="header-anchor" href="#进程间通信" aria-hidden="true">#</a> 进程间通信</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IPC (Inter-process communication) 进程间通信技术
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+'" alt="IPC"></p><p>父进程在实际创建子进程之前，会创建IPC通道并监听它，然后才真正的创建出子进程，这个过程中也会通过环境变量<code>(NODE_CHANNEL_FD)</code>告诉子进程这个 IPC 通道的文件描述符。子进程在启动的过程中，根据文件描述符去连接这个已存在的 IPC 通道，从而完成父子进程之间的连接。</p>',24);function v(m,b){const a=i("ExternalLinkIcon");return e(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[s("深入理解Node.js 中的进程与线程"),c(a)])])]),k])}const h=t(u,[["render",v],["__file","04.html.vue"]]);export{h as default};
