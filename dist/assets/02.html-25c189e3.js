import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const p={},o=t(`<h3 id="cookie缓存概述" tabindex="-1"><a class="header-anchor" href="#cookie缓存概述" aria-hidden="true">#</a> cookie缓存概述</h3><p>Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB<br> 浏览器每次向服务器发出请求，就会自动附上这段信息<br> Cookie 保存以下几方面的信息</p><ul><li>Cookie的名字</li><li>Cookie的值</li><li>到期时间</li><li>所属域名（默认是当前域名）</li><li>生效的路径（默认是当前网址）</li></ul><h3 id="cookie的属性" tabindex="-1"><a class="header-anchor" href="#cookie的属性" aria-hidden="true">#</a> cookie的属性</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Set-Cookie: value[; expires=date][; domain=domain][; path=path][; secure]

上面的Set-Cookie字段，用分号分隔多个属性。它们的含义如下

value属性
value属性是必需的，它是一个键值对，用于指定Cookie的值。

expires属性
expires属性用于指定Cookie过期时间。它的格式采用 Date.toUTCString() 的格式。
如果不设置该属性，或者设为\`null\`，Cookie只在当前会话有效，浏览器窗口一旦关闭，当前会话结束，该Cookie就会被删除。
浏览器根据本地时间，决定Cookie是否过期，由于本地时间是不精确的，所以没有办法保证Cookie一定会在服务器指定的时间过期。

domain属性
domain属性指定Cookie所在的域名，比如 example.com或.example.com(这种写法将对所有子域名生效)。
如果未指定，默认为设定该Cookie的域名。所指定的域名必须是当前发送Cookie的域名的一部分，
比如当前访问的域名是example.com，就不能将其设为google.com。只有访问的域名匹配domain属性，Cookie才会发送到服务器

path属性

path属性用来指定路径，必须是绝对路径（比如/、/mydir），如果未指定，默认为请求该 Cookie 的网页路径
只有path属性匹配向服务器发送的路径，Cookie才会发送。
这里的匹配不是绝对匹配，而是从根路径开始，只要path属性匹配发送路径的一部分，就可以发送。
比如，path属性等于/blog，则发送路径是/blog或者/blog/roll，Cookie都会发送。path属性生效的前提是domain属性匹配。

secure属性

secure属性用来指定Cookie只能在加密协议HTTPS下发送到服务器。
该属性只是一个开关，不需要指定值。如果通信是HTTPS协议，该开关自动打开。

max-age
max-age属性用来指定Cookie有效期，比如60 * 60 * 24 * 365（即一年31536e3秒）

HttpOnly
HttpOnly属性用于设置该Cookie不能被JavaScript读取，详见下文的说明。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie使用" tabindex="-1"><a class="header-anchor" href="#cookie使用" aria-hidden="true">#</a> cookie使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 设置cookie</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;username=hello&quot;</span>

<span class="token comment">// 设置cookie 在某个域名下可访问  *.xxxx.com 都可以访问</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;username=hello; domain=xxxx.com&quot;</span>

<span class="token comment">// expires 和 max-age 都是过期时间参数 2选1就可以</span>
<span class="token comment">// 当前时间 +1 天</span>
<span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">86400e3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
date <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;username=hello; expires=&quot;</span> <span class="token operator">+</span> date<span class="token punctuation">;</span>

    
<span class="token comment">// cookie 会在一小时后失效</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;username=hello; max-age=3600&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 删除 cookie（让它立即过期）</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">&quot;username=hello; max-age=0&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie的限制" tabindex="-1"><a class="header-anchor" href="#cookie的限制" aria-hidden="true">#</a> cookie的限制</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>浏览器对Cookie数量的限制，规定不一样
目前，Firefox是每个域名最多设置<span class="token number">50</span>个Cookie，而Safari和Chrome没有域名数量的限制
所有Cookie的累加长度限制为4KB。超过这个长度的Cookie，将被忽略，不会被设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http-only" tabindex="-1"><a class="header-anchor" href="#http-only" aria-hidden="true">#</a> Http-Only</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>设置cookie的时候，如果服务器加上了 HttpOnly 属性，则这个cookie无法被<span class="token constant">JS</span><span class="token function">读取，只用于向服务器发送</span>
<span class="token punctuation">(</span>即document<span class="token punctuation">.</span>cookie不会返回这个cookie的值<span class="token punctuation">)</span>

Set<span class="token operator">-</span>Cookie<span class="token operator">:</span> key<span class="token operator">=</span>value<span class="token punctuation">;</span> HttpOnly

上面的这个Cookie将无法用<span class="token constant">JS</span>获取
进行<span class="token constant">AJAX</span>异步操作时，异步对象也无法包括这个Cookie
这主要是为了防止<span class="token constant">XSS</span>攻击盗取Cookie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie封装操作" tabindex="-1"><a class="header-anchor" href="#cookie封装操作" aria-hidden="true">#</a> cookie封装操作</h3><blockquote><p>index.html</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>cookie example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cookie.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------cookie对象-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------对象-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------设置cookie-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wlh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------设置cookie 123-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wlh123&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------设置cookie age-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------获取cookie-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------获取所有-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------清除age-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------获取所有-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------清除所有-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------获取所有-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------解决冲突-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">var</span> $Cookie <span class="token operator">=</span> cookie<span class="token punctuation">.</span><span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token boolean">true</span> <span class="token comment">/*a new name of cookie*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$Cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;----------使用新的命名-------------&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$Cookie<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>cookie.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
 * HTTP Cookie:存储会话信息
 * 名称和值传送时必须是经过RUL编码的
 * cookie绑定在指定的域名下，非本域无法共享cookie，但是可以是在主站共享cookie给子站
 * cookie有一些限制：比如IE6 &amp; IE6- 限定在20个；IE7 50个；Opear 30个...所以一般会根据【必须】需求才设定cookie
 * cookie的名称不分大小写；同时建议将cookie URL编码；路径是区分cookie在不同情况下传递的好方式；带安全标志cookie
 *     在SSL情况下发送到服务器端，http则不会。建议针对cookie设置expires、domain、 path；每个cookie小于4KB
 * */</span>
<span class="token comment">//对cookie的封装，采取getter、setter方式</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">global</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//获取cookie对象，以对象表示</span>
	<span class="token keyword">function</span> <span class="token function">getCookiesObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">var</span> cookies <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>cookie<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">var</span> objs <span class="token operator">=</span> document<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> objs<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">var</span> index <span class="token operator">=</span> objs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					name <span class="token operator">=</span> objs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>
					value <span class="token operator">=</span> objs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> objs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>	
				cookies<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> cookies<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//设置cookie</span>
	<span class="token keyword">function</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">//opts maxAge, path, domain, secure</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">var</span> cookie <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;=&#39;</span> <span class="token operator">+</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//可选参数</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>opts<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>maxAge<span class="token punctuation">)</span><span class="token punctuation">{</span>
					cookie <span class="token operator">+=</span> <span class="token string">&#39;; max-age=&#39;</span> <span class="token operator">+</span> opts<span class="token punctuation">.</span>maxAge<span class="token punctuation">;</span> 
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">{</span>
					cookie <span class="token operator">+=</span> <span class="token string">&#39;; path=&#39;</span> <span class="token operator">+</span> opts<span class="token punctuation">.</span>path<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>domain<span class="token punctuation">)</span><span class="token punctuation">{</span>
					cookie <span class="token operator">+=</span> <span class="token string">&#39;; domain=&#39;</span> <span class="token operator">+</span> opts<span class="token punctuation">.</span>domain<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>opts<span class="token punctuation">.</span>secure<span class="token punctuation">)</span><span class="token punctuation">{</span>
					cookie <span class="token operator">+=</span> <span class="token string">&#39;; secure&#39;</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> cookie<span class="token punctuation">;</span>
			<span class="token keyword">return</span> cookie<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//获取cookie</span>
	<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span><span class="token function">getCookiesObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//清除某个cookie</span>
	<span class="token keyword">function</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">getCookiesObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">&#39;=; max-age=0&#39;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">//清除所有cookie</span>
	<span class="token keyword">function</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">var</span> cookies <span class="token operator">=</span> <span class="token function">getCookiesObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> cookies<span class="token punctuation">)</span><span class="token punctuation">{</span>
			document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> key <span class="token operator">+</span> <span class="token string">&#39;=; max-age=0&#39;</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//获取所有cookies</span>
	<span class="token keyword">function</span> <span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">getCookiesObj</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">//解决冲突</span>
	<span class="token keyword">function</span> <span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> name <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>name <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">[</span><span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				window<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> window<span class="token punctuation">[</span><span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">delete</span> window<span class="token punctuation">[</span><span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> window<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> window<span class="token punctuation">[</span><span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">delete</span> window<span class="token punctuation">[</span><span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	global<span class="token punctuation">[</span><span class="token string">&#39;cookie&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;getCookies&#39;</span><span class="token operator">:</span> getCookies<span class="token punctuation">,</span>
		<span class="token string-property property">&#39;set&#39;</span><span class="token operator">:</span> set<span class="token punctuation">,</span>
		<span class="token string-property property">&#39;get&#39;</span><span class="token operator">:</span> get<span class="token punctuation">,</span>
		<span class="token string-property property">&#39;remove&#39;</span><span class="token operator">:</span> remove<span class="token punctuation">,</span>
		<span class="token string-property property">&#39;clear&#39;</span><span class="token operator">:</span> clear<span class="token punctuation">,</span>
		<span class="token string-property property">&#39;noConflict&#39;</span><span class="token operator">:</span> noConflict
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","02.html.vue"]]);export{k as default};
