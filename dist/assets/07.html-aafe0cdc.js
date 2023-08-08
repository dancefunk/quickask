import{_ as n,o as s,c as a,a as t}from"./app-1b1b276f.js";const e={},p=t(`<h3 id="数据响应式原理" tabindex="-1"><a class="header-anchor" href="#数据响应式原理" aria-hidden="true">#</a> 数据响应式原理</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Mutation Observer API 用来监视 DOM 变动
DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知

概念上，它很接近事件，可以理解为当 DOM 发生变动，就会触发事件
但是，它与事件有一个本质不同：事件是同步触发，也就是说，DOM 的变动立刻会触发相应的事件
Mutation Observer 则是异步触发，DOM 的变动并不会马上触发，而是要等到当前所有 DOM 操作都结束才触发

这样设计是为了应付 DOM 变动频繁的特点
举例来说，如果在文档中连续插入1000个<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>元素，就会连续触发1000个插入事件
执行每个事件的回调函数，这很可能造成浏览器的卡顿
而 Mutation Observer 完全不同，只在1000个段落都插入结束后才会触发，而且只触发一次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mutation-observer特点" tabindex="-1"><a class="header-anchor" href="#mutation-observer特点" aria-hidden="true">#</a> Mutation Observer特点</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>它等待所有脚本任务完成后，才会运行，即采用异步方式
它把 DOM 变动记录封装成一个数组进行处理，而不是一条条地个别处理 DOM 变动
它既可以观察发生在 DOM 的所有类型变动，也可以观察某一类变动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应式配置" tabindex="-1"><a class="header-anchor" href="#响应式配置" aria-hidden="true">#</a> 响应式配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>childList   <span class="token function">观察子节点</span><span class="token punctuation">(</span>增<span class="token punctuation">,</span> 删<span class="token punctuation">)</span>
attributes	<span class="token function">观察属性节点</span><span class="token punctuation">(</span>增<span class="token punctuation">,</span> 删<span class="token punctuation">,</span> 改<span class="token punctuation">)</span>
attributeOldValue	属性变化之前的值
attributeFilter	只有该数组中包含的属性名发生变化时才会被观察到<span class="token punctuation">,</span>其他名称的属性发生变化后会被忽略

characterData   一种抽象接口<span class="token punctuation">,</span>具体可以为文本节点<span class="token punctuation">,</span>注释节点<span class="token punctuation">,</span>以及处理指令节点
characterData   观察该节点的文本内容是否发生变化
characterDataOldValue   记录变化之前的值

subtree	整个<span class="token constant">DOM</span>元素上所有的变化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码实例" tabindex="-1"><a class="header-anchor" href="#代码实例" aria-hidden="true">#</a> 代码实例</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>数据响应式原理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 有兼容的话 需要调整兼容性</span>
    <span class="token keyword">var</span> MutationObserver <span class="token operator">=</span> window<span class="token punctuation">.</span>MutationObserver

    <span class="token comment">// 需要观察的节点</span>
    <span class="token keyword">var</span> ele <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#element&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">// 创建观察者对象</span>
    <span class="token keyword">var</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MutationObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">MutationRecord<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 指定的DOM节点(目标节点)发生变化时被调用</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MutationRecord<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 配置观察选项:</span>
    <span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 观察属性</span>
        <span class="token literal-property property">childList</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// 观察子节点</span>
        <span class="token literal-property property">characterData</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// characterData节点</span>
        <span class="token literal-property property">attributeOldValue</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 记忆上一次的atrr值</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 当前观察者对象注册需要观察的目标节点</span>
    <span class="token comment">// config 指定要观察的DOM变化类型.</span>
    observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span> config<span class="token punctuation">)</span>

    <span class="token comment">// 你还可以停止观察</span>
    <span class="token comment">// observer.disconnect()</span>


    <span class="token comment">// 添加一个 title属性</span>
    ele<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
    ele<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;hello javascript&#39;</span>

    <span class="token comment">// 修改子节点</span>
    ele<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token string">&#39;mutation observer&#39;</span>

    <span class="token comment">//创建新节点</span>
    <span class="token keyword">var</span> newdom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">//修改节点</span>
    newdom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;新节点&#39;</span>

    <span class="token comment">//内部后追加元素</span>
    ele<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newdom<span class="token punctuation">)</span>

    <span class="token comment">//删除节点</span>
    ele<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>newdom<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[p];function c(o,i){return s(),a("div",null,l)}const r=n(e,[["render",c],["__file","07.html.vue"]]);export{r as default};
