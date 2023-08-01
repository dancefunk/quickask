import{_ as i,r as d,o as s,c as a,b as e,d as l,e as v,a as r}from"./app-47c2ac71.js";const c="/dist/assets/images/article/2021/v8.png",t={},o=r(`<h3 id="来源" tabindex="-1"><a class="header-anchor" href="#来源" aria-hidden="true">#</a> 来源</h3><p>JavaScript 是一款拥有「自动垃圾回收」功能的编程语言。</p><p>市面上具有这样功能的语言，一般都是拥有相对应的虚拟机的，像 Java的JVM ，C#的CLR ，PHP的Zend。</p><p>虚拟机一般实现了代码解析，内存的管理、布局、垃圾回收等功能。</p><p>不像C/C++这种没有虚拟机的语言，它们需要手动管理内存。</p><p>C/C++语言编译后的文件，是可以直接运行的。</p><p>我认为学习一门开发语言，除了知道一些语法上的使用，各种API的调用以外。学习相应的虚拟机也是很有必要的。</p><p>而 JavaScript 由于其特殊的历史原因，并不是只有 V8 一个引擎。</p><p>但是目前 V8 它是业界最优秀的 JavaScript 引擎，也就成为了一个学习样本</p><p>如今的 JavaScript 不仅仅是用在浏览器端了，也因为 NodeJS 的关系得以在服务器端运行。</p><p>和浏览器端不同的地方在于服务器端对资源的敏感性是很高的。</p><p>当业务规模大了，并发量上来了，一些很细小的问题会放大。这时候一些小小的内存泄漏，都会酿造灾难。</p><p>所以作为一个 JavaScript 开发者，搞清楚从敲入 console.log(&#39;hello world&#39;) ，直到后面交由CPU执行的中间过程是很重要的</p><h3 id="v8-概述" tabindex="-1"><a class="header-anchor" href="#v8-概述" aria-hidden="true">#</a> V8 概述</h3><p>V8 作为一个 JavaScript 引擎，最初是服役于 Google Chrome 浏览器的。</p><p>它随着 Chrome 的第一版发布而发布以及开源。</p><p>现在它除了 Chrome 浏览器，已经有很多其他的使用者了。诸如 NodeJS、MongoDB、CouchDB 等</p><p>JavaScript 作为 Prototype Based Language , 基于它使用 Prototype 继承的特征，V8 使用了直译的方式</p><p>即把 JavaScript 代码直接编译成机器码( Machine Code, 有些地方也叫 Native Code )，然后直接交由硬件执行。</p><p>与传统的「编译-解析-执行」的流程不同，V8 处理 JavaScript，并没有二进制码或其他的中间码。</p><p>简单来说，V8主要工作就是：「把 JavaScript 直译成机器码，然后运行」</p><p>但这中间，往往是一个复杂的过程，它需要处理很多的难题，诸如：</p><ul><li>1.编译优化</li><li>2.内存管理</li><li>3.垃圾回收</li></ul><h3 id="nodejs中是如何引入v8的" tabindex="-1"><a class="header-anchor" href="#nodejs中是如何引入v8的" aria-hidden="true">#</a> Nodejs中是如何引入V8的</h3><blockquote><p>我们关注Node的源码目录</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── ...
├── deps
│   ├── ...
│   ├── v8
│   ├── ...
├── ...
├── lib
│   ├── ...
│   ├── buffer.js
│   ├── child_process.js
│   ├── console.js
│   ├── ...
├── node -&gt; out/Release/node
├── ...
├── out
│   ├── ...
│   ├── Release
|         ├── node
|         ├── node.d
|         ├── obj
|             └── gen
|                 ├── ...
|                 ├── node_natives.h
|                 ├── ...
│   ├── ...
├── src
│   ├── ...
│   ├── debug-agent.cc
│   ├── debug-agent.h
│   ├── env-inl.h
│   ├── env.cc
│   ├── ...
├── 
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="需要关注的几个目录和文件" tabindex="-1"><a class="header-anchor" href="#需要关注的几个目录和文件" aria-hidden="true">#</a> 需要关注的几个目录和文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/deps/v8
	这里是V8源码所在文件夹，你会发现里面的目录结构跟 V8源码 十分相似。
	NodeJS除了移植V8源码，还在增添了一些内容。
	
/src
	由C/C++编写的核心模块所在文件夹，由C/C++编写的这部分模块被称为「Builtin Module」
	
/lib
	由JavaScript编写的核心模块所在文件夹，这部分被称为「Native Code」，
	在编译Node源码的时候，会采用V8附带的 js2c.py 工具，
	把所有内置的JavaScript代码转换成C++里面的数组，生成 out/Release/obj/gen/node_natives.h 文件。
	有些 Native Module 需要借助于 Builtin Module 实现背后的功能。
	
/out
	该目录是Node源码编译(命令行运行 make )后生成的目录，里面包含了Node的可执行文件。
	当在命令行中键入 node xxx.js ，实际就是运行了 out/Release/node 文件。
	
来张图说明一下V8在Node运行时的整体过程

Node在启动的时候，就已经把 Native Module，Builtin Module 加载到内存里面了。
后来的 JavaScript 代码，就需要通过 V8 进行动态编译解析运行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+c+'" alt="v8"></p>',29),u={href:"https://segmentfault.com/a/1190000014722508?utm_source=index-hottest",target:"_blank",rel:"noopener noreferrer"};function m(p,b){const n=d("ExternalLinkIcon");return s(),a("div",null,[o,e("p",null,[e("a",u,[l("转载：https://segmentfault.com/a/1190000014722508?utm_source=index-hottest"),v(n)])])])}const g=i(t,[["render",m],["__file","nodejsyuv8yinqing.html.vue"]]);export{g as default};
