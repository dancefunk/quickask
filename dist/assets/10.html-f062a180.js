import{_ as n,p as s,q as a,Z as t}from"./framework-823c4b5a.js";const p={},e=t(`<h3 id="父组件向子组件传递数据与方法" tabindex="-1"><a class="header-anchor" href="#父组件向子组件传递数据与方法" aria-hidden="true">#</a> 父组件向子组件传递数据与方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>provide - 可以向所有子组件提供数据以及提供修改数据的方法

inject - 子组件用inject来接收数据和方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>父组件</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Vue3新特性 - provide 与 inject (父组件向子组件传递数据与方法)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son3</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
	<span class="token keyword">import</span> Son3 <span class="token keyword">from</span> <span class="token string">&#39;./son3.vue&#39;</span>

	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>

			<span class="token comment">// provide(别名, 要传递的数据和方法)</span>
			<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;myName&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
			<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;HandleClick&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				name<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;zhangsan&#39;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Son3 <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>子组件 son3.vue</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HandleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ name }} 点击一下我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;myName&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> HandleClick <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;HandleClick&#39;</span><span class="token punctuation">)</span>

            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                name<span class="token punctuation">,</span>
                HandleClick
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","10.html.vue"]]);export{k as default};
