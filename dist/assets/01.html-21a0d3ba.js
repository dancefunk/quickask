import{_ as n,o as a,c as s,a as t}from"./app-3e5ace64.js";const e={},p=t(`<h3 id="安装typescript" tabindex="-1"><a class="header-anchor" href="#安装typescript" aria-hidden="true">#</a> 安装TypeScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mkdir demo <span class="token operator">&amp;&amp;</span> cd demo
npm init
tsc <span class="token operator">--</span>init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译命令" tabindex="-1"><a class="header-anchor" href="#编译命令" aria-hidden="true">#</a> 编译命令</h3><blockquote><p>package.json</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 编译</span>
        <span class="token property">&quot;build:w&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc -w&quot;</span> <span class="token comment">// 监听文件，有变动即编译</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="书写ts脚本" tabindex="-1"><a class="header-anchor" href="#书写ts脚本" aria-hidden="true">#</a> 书写TS脚本</h3><blockquote><p>src/index.ts</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数返回值 箭头函数写法
 * <span class="token keyword">@param</span> <span class="token parameter">a</span> 数值类型
 * <span class="token keyword">@param</span> <span class="token parameter">b</span> 可选参数
 * <span class="token keyword">@param</span> <span class="token parameter">c</span> 带默认值的参数
 * <span class="token keyword">@returns</span> 
 */</span>
<span class="token keyword">let</span> demo <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token operator">?</span><span class="token operator">:</span>number<span class="token punctuation">)</span><span class="token operator">:</span><span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">a + b + c = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">+</span> b <span class="token operator">+</span> <span class="token punctuation">(</span>c <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">demo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行编译" tabindex="-1"><a class="header-anchor" href="#运行编译" aria-hidden="true">#</a> 运行编译</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试编译文件" tabindex="-1"><a class="header-anchor" href="#测试编译文件" aria-hidden="true">#</a> 测试编译文件</h3><blockquote><p>index.html 将编译后的JS文件引入到页面中测试</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./src/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),o=[p];function c(l,i){return a(),s("div",null,o)}const r=n(e,[["render",c],["__file","01.html.vue"]]);export{r as default};