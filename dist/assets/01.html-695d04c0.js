import{_ as e,p as i,q as n,Z as s}from"./framework-823c4b5a.js";const d="/assets/mvc-48c93774.png",a="/assets/mvvm-e2c83cfe.png",l={},c=s(`<h3 id="mvc" tabindex="-1"><a class="header-anchor" href="#mvc" aria-hidden="true">#</a> MVC</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>视图（View）：用户界面
控制器（Controller）：业务逻辑
模型（Model）：数据保存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="mvc"></p><h3 id="mvvm" tabindex="-1"><a class="header-anchor" href="#mvvm" aria-hidden="true">#</a> MVVM</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MVVM分为三个部分：分别是
	M（Model，模型层 ）
	V（View，视图层）
	VM（ViewModel，V与M连接的桥梁，也可以看作为控制器）
	
1、 M：模型层，主要负责业务数据相关；
2、 V：视图层，顾名思义，负责视图相关，细分下来就是html+css层；
3、 VM：V与M沟通的桥梁，负责监听M或者V的修改，是实现MVVM双向绑定的要点；

MVVM支持双向绑定，意思就是当M层数据进行修改时，VM层会监测到变化，并且通知V层进行相应的修改，
反之修改V层则会通知M层数据进行修改，以此也实现了视图与模型层的相互解耦；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+a+'" alt="mvvm"></p>',6),t=[c];function r(v,m){return i(),n("div",null,t)}const u=e(l,[["render",r],["__file","01.html.vue"]]);export{u as default};
