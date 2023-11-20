import{_ as a,o as e,c as s,a as i}from"./app-9f8282b6.js";const t="/dist/assets/images/html5/javascript/ajax1.png",n="/dist/assets/images/html5/javascript/ajax2.png",d={},r=i(`<h3 id="什么是同步和异步" tabindex="-1"><a class="header-anchor" href="#什么是同步和异步" aria-hidden="true">#</a> 什么是同步和异步</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>同步：
	发送请求-&gt;等待服务器处理-&gt;处理完毕返回结果，这个期间客户端浏览器不能干任何事
	同步请求将锁住浏览器，用户想操作必须等请求完成后才可以执行
	
异步: 
	发送请求-&gt;服务器接收处理(浏览器仍然可以作其他事情)-&gt;处理完毕返回结果
	异步请求不会锁住浏览器，用户可以任意操作，不需要做任何等待
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步模式的工作流程" tabindex="-1"><a class="header-anchor" href="#同步模式的工作流程" aria-hidden="true">#</a> 同步模式的工作流程</h3><p><img src="`+t+'" alt="ajax1"></p><h3 id="异步程序的工作流程" tabindex="-1"><a class="header-anchor" href="#异步程序的工作流程" aria-hidden="true">#</a> 异步程序的工作流程</h3><p><img src="'+n+'" alt="ajax2"></p>',6),c=[r];function l(h,m){return e(),s("div",null,c)}const v=a(d,[["render",l],["__file","01.html.vue"]]);export{v as default};
