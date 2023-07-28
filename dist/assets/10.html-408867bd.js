import{_ as n,o as s,c as a,a as e}from"./app-11dfbba7.js";const t={},p=e(`<h3 id="生产环境下js会自动压缩" tabindex="-1"><a class="header-anchor" href="#生产环境下js会自动压缩" aria-hidden="true">#</a> 生产环境下JS会自动压缩</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mode: production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="html压缩" tabindex="-1"><a class="header-anchor" href="#html压缩" aria-hidden="true">#</a> html压缩</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./template/index.html&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 移除空格</span>
          <span class="token literal-property property">collapseWhitespace</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token comment">// 移除注释</span>
          <span class="token literal-property property">removeComments</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[p];function o(i,c){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","10.html.vue"]]);export{d as default};
