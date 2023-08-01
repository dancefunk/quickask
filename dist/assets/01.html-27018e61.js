import{_ as e,o as i,c as n,a as d}from"./app-47c2ac71.js";const s="/dist/assets/images/html5/nodejs/node_event_loop.jpg",a={},l=d(`<h3 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Node.js 是运行在服务端的 JavaScript环境，基于Google的V8引擎

Node.js 它提供事件驱动、异步I/O、跨平台运行环境

Node.js 可以开发不同平台的应用程序，Web端网页、实时聊天程序、API服务器、App端、桌面端都可以

Node.js 类似于PHP、Java、.NET等老牌语言

Node.js 是单进程单线程应用程序，通过事件和回调支持并发，所以性能非常高

Node.js 的每一个API都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发

Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出

每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件循环机制" tabindex="-1"><a class="header-anchor" href="#事件循环机制" aria-hidden="true">#</a> 事件循环机制</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Node.js的事件循环是靠一个单线程不断地查询队列中是否有事件
当读取到事件时，将调用与这个事件关联的回调函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件循环机制组成元素" tabindex="-1"><a class="header-anchor" href="#事件循环机制组成元素" aria-hidden="true">#</a> 事件循环机制组成元素</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>事件生产者：Node.js通过EventEmitter模块发送事件，发送的事件会被放到事件队列中

事件队列：事件队列是一个FIFO模型，一端用于接收推入的事件，另外一端拉出要处理的事件

事件循环：是一个单线程运行的任务，会不断轮询事件队列，并将轮询到的事件放到线程池中进行处理

线程池：线程池是真正执行事件和任务处理的位置，比较耗时的操作如：网络I/O、文件操作I/O及其它会引起阻塞的操作都会在这里处理
处理完成后，会调用事件对应的回调函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+'" alt="node_event_loop.png"></p>',7),r=[l];function v(c,t){return i(),n("div",null,r)}const u=e(a,[["render",v],["__file","01.html.vue"]]);export{u as default};
