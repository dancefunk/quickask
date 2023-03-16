import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const t={},i=e(`<h3 id="localstorage本地存储" tabindex="-1"><a class="header-anchor" href="#localstorage本地存储" aria-hidden="true">#</a> localStorage本地存储</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>localStorage（本地存储）
	可以长期存储数据，没有时间限制，一天，一年，两年甚至更长，数据都可以使用
	
sessionStorage（会话存储）
	只有在浏览器被关闭之前使用，创建另一个页面时同意可以使用，关闭浏览器之后数据就会消失
	

<span class="token constant">HTML5</span>的本地存储<span class="token constant">API</span>中的 localStorage 与 sessionStorage 在使用方法上是相同的
区别在于 sessionStorage 在关闭页面后即被清空，而 localStorage 则会一直保存

不同浏览器对该<span class="token constant">API</span>支持情况有所差异，如使用方法、最大存储空间等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>localStorage<span class="token punctuation">.</span>setItem（<span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;value&quot;</span>）<span class="token comment">//存储</span>

localStorage<span class="token punctuation">.</span>getItem（key）<span class="token comment">//按key进行取值</span>

localStorage<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token comment">//获取全部值</span>

localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token comment">//删除单个值</span>

localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//删除全部数据</span>

localStorage<span class="token punctuation">.</span>length<span class="token comment">//获得数据的数量</span>

注：localStorage和sessionStorage用法相同
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[i];function c(o,d){return s(),a("div",null,l)}const p=n(t,[["render",c],["__file","03.html.vue"]]);export{p as default};
