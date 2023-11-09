import{_ as n,o as s,c as a,a as t}from"./app-4eb807d7.js";const p={},e=t(`<h3 id="提示框" tabindex="-1"><a class="header-anchor" href="#提示框" aria-hidden="true">#</a> 提示框</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 系统提示框</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 确认对话框 确认返回true 失败返回false</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;是否确认删除&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>

<span class="token comment">// 输入对话框</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&#39;请输入用户名&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   设置循环定时器
      <span class="token keyword">var</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> test<span class="token operator">:</span>执行的代码串或函数设置<span class="token number">1000</span>毫秒

<span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  清除循环定时器
      <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    设置单次定时器
      <span class="token keyword">var</span> <span class="token constant">T</span> <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  test<span class="token operator">:</span>执行的代码串或函数   设置<span class="token number">1000</span>毫秒

<span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    清除单次定时器
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator对象" tabindex="-1"><a class="header-anchor" href="#navigator对象" aria-hidden="true">#</a> navigator对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//navigator.userAgent属性返回浏览器的User-Agent字符串，标示浏览器的厂商和版本信息。</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span>

<span class="token comment">//navigator.platform属性返回用户的操作系统信息</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>platform<span class="token punctuation">)</span>

<span class="token comment">//navigator.onLine属性返回一个布尔值，表示用户当前在线还是离线</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span>

<span class="token comment">//navigator.geolocation返回一个Geolocation对象，包含用户地理位置的信息</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="screen对象" tabindex="-1"><a class="header-anchor" href="#screen对象" aria-hidden="true">#</a> screen对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//显示设备的高度，单位为像素</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span>

<span class="token comment">// 显示设备的宽度，单位为像素</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url的编码-解码方法" tabindex="-1"><a class="header-anchor" href="#url的编码-解码方法" aria-hidden="true">#</a> URL的编码 / 解码方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 特殊符号不转义</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.example.com/q=春节&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 转义特殊符号</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.example.com/q=春节&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//解码函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURI</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.example.com/q=%E6%98%A5%E8%8A%82&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//解码函数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;%E6%98%A5%E8%8A%82&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history对象" tabindex="-1"><a class="header-anchor" href="#history对象" aria-hidden="true">#</a> History对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>history对象是包含浏览器的历史记录

<span class="token comment">//前进和后退</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//前进和后退</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
history<span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//增加浏览记录</span>
history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;page1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;?page=1&#39;</span><span class="token punctuation">)</span>
history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;page2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;?page=2&#39;</span><span class="token punctuation">)</span>
history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;page3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;?page=3&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//可以返回当前的浏览记录</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>history<span class="token punctuation">.</span>state<span class="token punctuation">)</span>

<span class="token comment">//修改当前的浏览记录 替换当前的 page3</span>
history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;page4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;?page=4&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//使用back后退</span>
history<span class="token punctuation">.</span><span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location对象" tabindex="-1"><a class="header-anchor" href="#location对象" aria-hidden="true">#</a> Location对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Location 对象包含有关当前 <span class="token constant">URL</span> 的信息

<span class="token comment">// 返回一个URL的锚部分</span>
<span class="token comment">//http://www.demo.com/index.html#top</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>

<span class="token comment">// 返回一个URL的主机名和端口</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>host<span class="token punctuation">)</span>

<span class="token comment">// 返回URL的主机名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">)</span>

<span class="token comment">// 返回完整的URL</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span>

<span class="token comment">// 返回的URL路径名</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span>

<span class="token comment">// 返回一个URL服务器使用的端口号</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>port<span class="token punctuation">)</span>

<span class="token comment">// 返回一个URL协议</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>protocol<span class="token punctuation">)</span>

<span class="token comment">// 返回一个URL的查询部分</span>
<span class="token comment">//http://www.demo.com/index.php?username=demo&amp;password=123456</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span>

<span class="token comment">// 刷新界面</span>
location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","01.html.vue"]]);export{r as default};
