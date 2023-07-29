import{_ as n,o as s,c as a,a as e}from"./app-f46aa08f.js";const i={},t=e(`<h3 id="promises" tabindex="-1"><a class="header-anchor" href="#promises" aria-hidden="true">#</a> Promises</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>ES6 对 Promise 有了原生的支持，一个 Promise 是一个等待被异步执行的对象，
当它执行完成后，其状态会变成 resolved 或者rejected

Promise 异步操作有三种状态：
	pending（进行中）
	resolve（已成功）
	reject（已失败）

除了异步操作的结果，任何其他操作都无法改变这个状态

当状态一旦改变后，那么结果就确定是成功还是失败了，所以状态就不会再次改变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="then方法" tabindex="-1"><a class="header-anchor" href="#then方法" aria-hidden="true">#</a> then方法</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>then 方法接收两个函数作为参数
第一个参数是 Promise 执行成功时的回调
第二个参数是 Promise 执行失败时的回调
两个函数只会有一个被调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="async修饰符" tabindex="-1"><a class="header-anchor" href="#async修饰符" aria-hidden="true">#</a> async修饰符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>异步请求操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="await修饰符" tabindex="-1"><a class="header-anchor" href="#await修饰符" aria-hidden="true">#</a> await修饰符</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>同步请求操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//先让函数变成异步函数</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//给一个状态用于下面的判断</span>
    <span class="token keyword">var</span> IsLogin <span class="token operator">=</span> <span class="token boolean">true</span>

    <span class="token comment">//创建异步的状态对象</span>
    <span class="token keyword">var</span> axios <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>IsLogin<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//设置异步为成功状态</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">result</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;登录成功&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//设置异步为失败状态</span>
            <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">result</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;登录失败&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//异步的方式 不需要等待 会继续往后执行 可以打开注释对比一下效果</span>
    <span class="token comment">// axios.then(</span>
    <span class="token comment">//     (success) =&gt; console.log(success),</span>
    <span class="token comment">//     (error) =&gt; console.log(error)</span>
    <span class="token comment">// )</span>

    <span class="token comment">//同步的方式  必须要等await拿到结果之后，才可以往后走</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[t];function c(o,p){return s(),a("div",null,l)}const d=n(i,[["render",c],["__file","11.html.vue"]]);export{d as default};
