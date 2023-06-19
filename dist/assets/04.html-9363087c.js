import{_ as n,o as s,c as a,a as p}from"./app-c220f801.js";const e={},t=p(`<h3 id="作为类型的接口" tabindex="-1"><a class="header-anchor" href="#作为类型的接口" aria-hidden="true">#</a> 作为类型的接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span>number<span class="token punctuation">;</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span>string<span class="token punctuation">;</span>
    nickname<span class="token operator">?</span><span class="token operator">:</span>string<span class="token punctuation">;</span> <span class="token comment">//可选属性</span>
    readonly money<span class="token operator">:</span> number<span class="token punctuation">;</span> <span class="token comment">//只读属性</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span> demo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">key</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">money</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作为函数类型的接口" tabindex="-1"><a class="header-anchor" href="#作为函数类型的接口" aria-hidden="true">#</a> 作为函数类型的接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>key<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token function-variable function">demo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">key：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --- value：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组类型的接口" tabindex="-1"><a class="header-anchor" href="#数组类型的接口" aria-hidden="true">#</a> 数组类型的接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>
    <span class="token comment">// 要求索引是数值类型，值也是数值类型</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span>number<span class="token punctuation">]</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span> demo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象类型的接口" tabindex="-1"><a class="header-anchor" href="#对象类型的接口" aria-hidden="true">#</a> 对象类型的接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>
    <span class="token comment">// 索引为字符串，值也是字符串</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span>string<span class="token punctuation">]</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span> demo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
test<span class="token punctuation">[</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;world&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展接口" tabindex="-1"><a class="header-anchor" href="#扩展接口" aria-hidden="true">#</a> 扩展接口</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">demo2</span> <span class="token keyword">extends</span> <span class="token class-name">demo</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">test</span><span class="token operator">:</span> demo2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;hello world&#39;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多接口继承" tabindex="-1"><a class="header-anchor" href="#多接口继承" aria-hidden="true">#</a> 多接口继承</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 定义接口</span>
<span class="token keyword">interface</span> <span class="token class-name">TCP</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

    <span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">UDP</span><span class="token punctuation">{</span>
    <span class="token constant">IP</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可以实现继承多个接口</span>
<span class="token keyword">class</span> <span class="token class-name">Socket</span> <span class="token keyword">implements</span> <span class="token class-name">TCP</span><span class="token punctuation">,</span> <span class="token constant">UDP</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

    <span class="token constant">IP</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">;</span>
    <span class="token literal-property property">max</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">host</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">port</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>host <span class="token operator">=</span> host
        <span class="token keyword">this</span><span class="token punctuation">.</span>port <span class="token operator">=</span> port
    <span class="token punctuation">}</span>

    <span class="token function">server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;创建服务器&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;链接服务器&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;关闭服务器&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","04.html.vue"]]);export{u as default};
