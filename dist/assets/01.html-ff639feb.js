import{_ as s,p as n,q as e,Y as a}from"./framework-e1bed10d.js";const i={},t=a(`<h3 id="css基础知识" tabindex="-1"><a class="header-anchor" href="#css基础知识" aria-hidden="true">#</a> CSS基础知识</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>CSS是Cascading Style Sheet（层叠样式表）的缩写
是用于增强控制网页样式并允许将样式信息与网页内容分离的一种标记性语言
CSS不需要编译<span class="token punctuation">,</span>可以直接由浏览器执行

它能做些什么?   
使用CSS样式可以有效地对页面进行布局
使用CSS样式可以对页面字体<span class="token punctuation">,</span>颜色<span class="token punctuation">,</span>背景和其他效果实现精确描述
只要修改这个CSS文件中相应的代码<span class="token punctuation">,</span>那么整个站点的所有页面都会随之发生变动
CSS可以支持多种设备<span class="token punctuation">,</span>如手机<span class="token punctuation">,</span>PDA<span class="token punctuation">,</span>打印机<span class="token punctuation">,</span>电视机<span class="token punctuation">,</span>游戏机等
<span class="token property">目的</span><span class="token punctuation">:</span>将表现与结构分离
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css语法结构" tabindex="-1"><a class="header-anchor" href="#css语法结构" aria-hidden="true">#</a> CSS语法结构</h3><p>CSS语法由三部分构成:选择符、属性和值,每个属性有一个值,属性和值被冒号分开</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style type=&quot;text/css&quot;&gt;
    body</span> <span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span>#cccccc<span class="token punctuation">;</span><span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将css应用到网页中" tabindex="-1"><a class="header-anchor" href="#将css应用到网页中" aria-hidden="true">#</a> 将CSS应用到网页中</h3><p>将CSS应用到网页中有：3种方式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">行内样式表
&lt;body style=&quot;background-color:#ccccc;&quot;&gt;&lt;/body&gt;
&lt;h1 style=&quot;font-size:12px; color:#ff0000;&quot;&gt;这是一个标题&lt;/h1&gt; 
 
 
内部样式表
&lt;head&gt;
    &lt;style type=&quot;text/css&quot;&gt;
      body</span> <span class="token punctuation">{</span>
        	<span class="token property">background-color</span><span class="token punctuation">:</span>#cccccc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    &lt;/style&gt;
&lt;/head&gt;
 
 
外部样式表
&lt;head&gt;
    &lt;link rel=<span class="token string">&quot;stylesheet&quot;</span> type=<span class="token string">&quot;text/css&quot;</span> href=<span class="token string">&quot;style.css&quot;</span> /&gt;
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三种引入方式的优先级对比" tabindex="-1"><a class="header-anchor" href="#三种引入方式的优先级对比" aria-hidden="true">#</a> 三种引入方式的优先级对比</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>优先级依次是：就近原则
行内样式表 &gt; 内部样式表 &gt; 外部样式表
内部样式表和外部样式表主要取决于引入的先后顺序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function c(d,u){return n(),e("div",null,l)}const o=s(i,[["render",c],["__file","01.html.vue"]]);export{o as default};
