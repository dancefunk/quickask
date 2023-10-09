import{_ as n,o as s,c as a,a as t}from"./app-88c1fa71.js";const e={},p=t(`<h3 id="模块操作" tabindex="-1"><a class="header-anchor" href="#模块操作" aria-hidden="true">#</a> 模块操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export导出

export default 默认导出

import导入

如果使用script标签来操作模块文件的话，需要给script标签添加type=&quot;module&quot;属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="demo-html" tabindex="-1"><a class="header-anchor" href="#demo-html" aria-hidden="true">#</a> demo.html</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 引入的时候一定要按照模块的方式来引入 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./mod1.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./mod2.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//一个个独立引入</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>nickname<span class="token punctuation">,</span> work<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./mod1.js&#39;</span>

    <span class="token comment">//一次性全部引入</span>
    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mod <span class="token keyword">from</span> <span class="token string">&#39;./mod1.js&#39;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nickname<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>nickname<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">//export default 结构的  不用*来引入所有 直接给别名就可以</span>
    <span class="token keyword">import</span> mod2 <span class="token keyword">from</span> <span class="token string">&#39;./mod2.js&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mod2<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mod1-js" tabindex="-1"><a class="header-anchor" href="#mod1-js" aria-hidden="true">#</a> mod1.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//导出属性</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> nickname <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>


<span class="token comment">//导出方法</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> <span class="token function-variable function">work</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;hello work&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mod2-js" tabindex="-1"><a class="header-anchor" href="#mod2-js" aria-hidden="true">#</a> mod2.js</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;hello module&#39;</span><span class="token punctuation">,</span>
    <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;hello work default&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,i){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","10.html.vue"]]);export{d as default};
