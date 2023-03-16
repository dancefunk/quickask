import{_ as n,p as a,q as s,Z as e}from"./framework-823c4b5a.js";const t={},p=e(`<h3 id="安装依赖插件" tabindex="-1"><a class="header-anchor" href="#安装依赖插件" aria-hidden="true">#</a> 安装依赖插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add jquery -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改配置" tabindex="-1"><a class="header-anchor" href="#修改配置" aria-hidden="true">#</a> 修改配置</h3><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">externals</span><span class="token operator">:</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 拒绝jQuery这个包被打包进来</span>
        <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改入口js文件" tabindex="-1"><a class="header-anchor" href="#修改入口js文件" aria-hidden="true">#</a> 修改入口JS文件</h3><blockquote><p>src/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">&#39;jquery&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>$<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译打包" tabindex="-1"><a class="header-anchor" href="#编译打包" aria-hidden="true">#</a> 编译打包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看打包文件" tabindex="-1"><a class="header-anchor" href="#查看打包文件" aria-hidden="true">#</a> 查看打包文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>打包出来的 bundle.js 很小，没有$,
且记得在 index.html 中手动引入 &lt;script src=&quot;http://CDN/jquery&quot;&gt;&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function r(l,o){return a(),s("div",null,i)}const d=n(t,[["render",r],["__file","15.html.vue"]]);export{d as default};
