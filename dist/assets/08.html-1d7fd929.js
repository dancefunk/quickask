import{_ as n,o as s,c as a,a as t}from"./app-02c5a260.js";const p={},e=t(`<h4 id="选项式api写法" tabindex="-1"><a class="header-anchor" href="#选项式api写法" aria-hidden="true">#</a> 选项式API写法</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>props验证<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
	{{propC}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token comment">// 基础类型检测, null意味着任何类型都行</span>
			<span class="token literal-property property">propA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>

			<span class="token comment">// 多种类型</span>
			<span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>

			<span class="token comment">// 必传且是String</span>
			<span class="token literal-property property">propC</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
				<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

			<span class="token comment">// 数字有默认值</span>
			<span class="token literal-property property">propD</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
				<span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">101</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			
			<span class="token comment">// 数组、默认值是一个工厂函数返回对象</span>
			<span class="token literal-property property">propE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
				<span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;propE default invoked.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;I am from propE.&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>

			<span class="token comment">// 自定义验证函数</span>
			<span class="token literal-property property">propF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> 
				<span class="token punctuation">{</span>
					<span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组合式api写法" tabindex="-1"><a class="header-anchor" href="#组合式api写法" aria-hidden="true">#</a> 组合式API写法</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>props验证<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
	{{propC}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// 基础类型检测, null意味着任何类型都行</span>
		<span class="token literal-property property">propA</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>

		<span class="token comment">// 多种类型</span>
		<span class="token literal-property property">propB</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span><span class="token punctuation">,</span>

		<span class="token comment">// 必传且是String</span>
		<span class="token literal-property property">propC</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
			<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>

		<span class="token comment">// 数字有默认值</span>
		<span class="token literal-property property">propD</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
			<span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">101</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		
		<span class="token comment">// 数组、默认值是一个工厂函数返回对象</span>
		<span class="token literal-property property">propE</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
			<span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;propE default invoked.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;I am from propE.&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>

		<span class="token comment">// 自定义验证函数</span>
		<span class="token literal-property property">propF</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> 
			<span class="token punctuation">{</span>
				<span class="token keyword">return</span> value <span class="token operator">&gt;</span> <span class="token number">100</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用组件" tabindex="-1"><a class="header-anchor" href="#调用组件" aria-hidden="true">#</a> 调用组件</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> demo <span class="token keyword">from</span> <span class="token string">&#39;./components/demo.vue&#39;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo</span> <span class="token attr-name">:prop-c</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>hello&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","08.html.vue"]]);export{r as default};
