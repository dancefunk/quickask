import{_ as p,r as o,o as c,c as l,b as n,d as s,e,a as t}from"./app-3e5ace64.js";const i={},r=t(`<h3 id="react-cookie" tabindex="-1"><a class="header-anchor" href="#react-cookie" aria-hidden="true">#</a> React-cookie</h3><blockquote><p>安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cnpm install react-cookies -S
yarn add react-cookies -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用操作</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入</span>
<span class="token keyword">import</span> cookie <span class="token keyword">from</span> <span class="token string">&#39;react-cookies&#39;</span>

<span class="token comment">//存</span>
cookie<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token string">&#39;userid&#39;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//取</span>
cookie<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">&#39;userid&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//删</span>
cookie<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;userid&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react中使用less" tabindex="-1"><a class="header-anchor" href="#react中使用less" aria-hidden="true">#</a> React中使用less</h3><blockquote><p>安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add craco-less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>修改配置 craco.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* craco.config.js */</span>
<span class="token keyword">const</span> CracoLessPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;craco-less&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//配置less</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">plugin</span><span class="token operator">:</span> CracoLessPlugin<span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lessLoaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">lessOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>页面中引入less文件</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入页面的less文件</span>
<span class="token keyword">import</span> <span class="token string">&#39;assets/css/index.less&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react城市地区插件" tabindex="-1"><a class="header-anchor" href="#react城市地区插件" aria-hidden="true">#</a> React城市地区插件</h3>`,13),u={href:"https://github.com/dwqs/react-area-linkage",target:"_blank",rel:"noopener noreferrer"},d=t(`<blockquote><p>安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// v3之前的版本
npm i --save react-area-linkage

// v3及之后的版本
npm i --save react-area-linkage area-data

or yarn

// v3之前的版本
yarn add react-area-linkage

// v3及之后的版本
yarn add react-area-linkage area-data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用操作" tabindex="-1"><a class="header-anchor" href="#使用操作" aria-hidden="true">#</a> 使用操作</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> pca<span class="token punctuation">,</span> pcaa <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;area-data&#39;</span><span class="token punctuation">;</span> <span class="token comment">// v3 or higher</span>
<span class="token keyword">import</span> <span class="token string">&#39;react-area-linkage/dist/index.css&#39;</span><span class="token punctuation">;</span> <span class="token comment">// v2 or higher</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AreaSelect<span class="token punctuation">,</span> AreaCascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-area-linkage&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// basic</span>
<span class="token operator">&lt;</span>AreaSelect onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>selectedChange<span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>pca<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>AreaCascader onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>selectedChange<span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>pcaa<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">//setting</span>
<span class="token operator">&lt;</span>AreaSelect type<span class="token operator">=</span><span class="token string">&#39;all&#39;</span> level<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>pcaa<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>selectedChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>AreaCascader type<span class="token operator">=</span><span class="token string">&#39;all&#39;</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>selectedChange<span class="token punctuation">}</span> level<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span> data<span class="token operator">=</span><span class="token punctuation">{</span>pcaa<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={href:"https://dwqs.github.io/react-area-linkage/",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"react-intl-universal多语言插件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#react-intl-universal多语言插件","aria-hidden":"true"},"#"),s(" react-intl-universal多语言插件")],-1),m={href:"https://www.npmjs.com/package/react-intl-universal",target:"_blank",rel:"noopener noreferrer"};function b(g,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("blockquote",null,[n("p",null,[n("a",u,[s("https://github.com/dwqs/react-area-linkage"),e(a)])])]),d,n("p",null,[s("更多案例请查看官网："),n("a",k,[s("https://dwqs.github.io/react-area-linkage/"),e(a)])]),v,n("p",null,[n("a",m,[s("https://www.npmjs.com/package/react-intl-universal"),e(a)])])])}const x=p(i,[["render",b],["__file","05.html.vue"]]);export{x as default};