import{_ as n,o as s,c as a,a as e}from"./app-6568e73a.js";const p={},t=e(`<h3 id="访问修饰符" tabindex="-1"><a class="header-anchor" href="#访问修饰符" aria-hidden="true">#</a> 访问修饰符</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> 公共修饰符
    父类：内部和外部都能访问
    继承的子类：内部和外部都能访问
     
<span class="token keyword">protected</span> 受保护修饰符
    父类：内部能访问，外部不能访问
    继承的子类：内部能访问，外部不能访问

<span class="token keyword">private</span> 私有修饰符
    父类：内部能访问，外部不能访问
    继承的子类：内部不能访问，外部不能访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">demo</span>
<span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
  	<span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token variable">$demo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$demo</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$demo</span><span class="token operator">-&gt;</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="protected" tabindex="-1"><a class="header-anchor" href="#protected" aria-hidden="true">#</a> protected</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">demo</span>
<span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">protected</span> <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;1000&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
  	<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">age</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">demo2</span> <span class="token keyword">extends</span> <span class="token class-name">demo</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">age</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$demo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$demo</span><span class="token operator">-&gt;</span><span class="token property">age</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$demo</span><span class="token operator">-&gt;</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$demo2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$demo2</span><span class="token operator">-&gt;</span><span class="token property">age</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$demo2</span><span class="token operator">-&gt;</span><span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">demo</span>
<span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">demo2</span> <span class="token keyword">extends</span> <span class="token class-name">demo</span>
<span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$demo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$demo</span><span class="token operator">-&gt;</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token variable">$demo2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">demo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$demo2</span><span class="token operator">-&gt;</span><span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[t];function l(o,c){return s(),a("div",null,i)}const u=n(p,[["render",l],["__file","02.html.vue"]]);export{u as default};
