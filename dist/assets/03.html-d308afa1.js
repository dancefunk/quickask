import{_ as t,r as p,o as e,c as o,b as n,d as s,e as c,a as i}from"./app-88c1fa71.js";const l={},u=n("h3",{id:"应用生命周期",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#应用生命周期","aria-hidden":"true"},"#"),s(" 应用生命周期")],-1),r={href:"https://uniapp.dcloud.io/collocation/frame/lifecycle",target:"_blank",rel:"noopener noreferrer"},d=i(`<blockquote><p>应用生命周期仅可在App.vue中监听，在其它页面监听无效。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当uni-app 初始化完成时触发（全局只触发一次）&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当 uni-app 启动，或从后台进入前台显示&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当 uni-app 从前台进入后台&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;当 uni-app 报错时触发&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onPageNotFound</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;页面不存在监听函数&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onThemeChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听系统主题变化&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听页面加载，其参数为上个页面传递的数据，参数类型为 Object&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听页面隐藏&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onUnload</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听页面卸载&#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getapp" tabindex="-1"><a class="header-anchor" href="#getapp" aria-hidden="true">#</a> getApp</h3><blockquote><p>getApp() 函数用于获取当前应用实例，一般用于获取globalData</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getcurrentpages" tabindex="-1"><a class="header-anchor" href="#getcurrentpages" aria-hidden="true">#</a> getCurrentPages</h3><blockquote><p>getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出，第一个元素为首页，最后一个元素为当前页面</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//获取当前页面的路由</span>
<span class="token keyword">var</span> routes <span class="token operator">=</span> <span class="token function">getCurrentPages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> curRoute <span class="token operator">=</span> routes<span class="token punctuation">[</span>routes<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>route
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-on-eventname-callback" tabindex="-1"><a class="header-anchor" href="#uni-on-eventname-callback" aria-hidden="true">#</a> <code>uni.$on(eventName,callback)</code></h3><blockquote><p>监听全局的自定义事件。事件可以由 <code>uni.$emit</code> 触发，回调函数会接收所有传入事件触发函数的额外参数</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听到事件来自 update ，携带参数 msg 为：&#39;</span> <span class="token operator">+</span> data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uni-emit-eventname-object" tabindex="-1"><a class="header-anchor" href="#uni-emit-eventname-object" aria-hidden="true">#</a> <code>uni.$emit(eventName,OBJECT)</code></h3><blockquote><p>触发全局的自定事件。附加参数都会传给监听器回调</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;update&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">msg</span><span class="token operator">:</span><span class="token string">&#39;页面更新&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="uni-off-eventname-callback" tabindex="-1"><a class="header-anchor" href="#uni-off-eventname-callback" aria-hidden="true">#</a> <code>uni.$off([eventName, callback])</code></h3><blockquote><p>移除全局自定义事件监听器</p></blockquote><h3 id="页面通讯演示" tabindex="-1"><a class="header-anchor" href="#页面通讯演示" aria-hidden="true">#</a> 页面通讯演示</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>view <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>text<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>val<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>text<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;comunicationOff&quot;</span><span class="token operator">&gt;</span>结束监听<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">val</span><span class="token operator">:</span> <span class="token number">0</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
				uni<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
					<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token number">2</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
			uni<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">comunicationOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				uni<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">+=</span> e<span class="token punctuation">.</span>data
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
		flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
		align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
		justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token punctuation">.</span>data <span class="token punctuation">{</span>
		text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
		line<span class="token operator">-</span>height<span class="token operator">:</span> 40px<span class="token punctuation">;</span>
		margin<span class="token operator">-</span>top<span class="token operator">:</span> 40px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	button <span class="token punctuation">{</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		<span class="token literal-property property">margin</span><span class="token operator">:</span> 20px <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function k(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("https://uniapp.dcloud.io/collocation/frame/lifecycle"),c(a)])]),d])}const g=t(l,[["render",k],["__file","03.html.vue"]]);export{g as default};
