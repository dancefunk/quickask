import{_ as n,o as s,c as a,a as p}from"./app-11dfbba7.js";const t={},e=p(`<h3 id="vue-i18n-国际化" tabindex="-1"><a class="header-anchor" href="#vue-i18n-国际化" aria-hidden="true">#</a> vue-i18n(国际化)</h3><blockquote><p>文档地址</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://vue-i18n.intlify.dev/
https://kazupon.github.io/vue-i18n/zh/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装最新版</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install vue<span class="token operator">-</span>i18n@next <span class="token operator">-</span><span class="token constant">S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>新建目录</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>src<span class="token operator">/</span>i18n<span class="token operator">/</span>
	index<span class="token punctuation">.</span>js
	zh<span class="token punctuation">.</span>js
	en<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/i18n/zh.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">save</span><span class="token operator">:</span> <span class="token string">&#39;保存&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">edit</span><span class="token operator">:</span> <span class="token string">&#39;编辑&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token string">&#39;更新&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">delete</span><span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">forever</span><span class="token operator">:</span> <span class="token string">&#39;永久&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expired</span><span class="token operator">:</span> <span class="token string">&#39;过期&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/i18n/en.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">common</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;username&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">save</span><span class="token operator">:</span> <span class="token string">&#39;Save&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">edit</span><span class="token operator">:</span> <span class="token string">&#39;Edit&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token string">&#39;Update&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">delete</span><span class="token operator">:</span> <span class="token string">&#39;Delete&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">forever</span><span class="token operator">:</span> <span class="token string">&#39;Forever&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">expired</span><span class="token operator">:</span> <span class="token string">&#39;Expired&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/i18n/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>
<span class="token keyword">import</span> enLocale <span class="token keyword">from</span> <span class="token string">&#39;./en&#39;</span> <span class="token comment">// 导入项目中用到的英文语言包</span>
<span class="token keyword">import</span> zhLocale <span class="token keyword">from</span> <span class="token string">&#39;./zh&#39;</span><span class="token comment">// 导入项目中用到的中文语言包</span>

<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>enLocale<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zh</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>zhLocale<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">legacy</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">// Composition API 模式 没有该参数可能会报错</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;language&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置语种</span>
  messages<span class="token punctuation">,</span> <span class="token comment">// 设置全局当地语言包,</span>
  <span class="token literal-property property">fallbackLocale</span><span class="token operator">:</span> <span class="token string">&#39;zh&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">numberFormats</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//设置 数字本地化</span>
    <span class="token string-property property">&#39;en&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//添加 $</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;currency&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">&#39;USD&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;zh&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//添加 ￥</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;currency&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">&#39;JPY&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">currencyDisplay</span><span class="token operator">:</span> <span class="token string">&#39;symbol&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">dateTimeFormats</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token comment">//设置 日期时间本地化</span>
    <span class="token string-property property">&#39;en&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">short</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token string">&#39;short&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">long</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token string">&#39;short&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">weekday</span><span class="token operator">:</span> <span class="token string">&#39;short&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;zh&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">short</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token string">&#39;short&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">long</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token string">&#39;short&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">weekday</span><span class="token operator">:</span> <span class="token string">&#39;short&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">hour</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">minute</span><span class="token operator">:</span> <span class="token string">&#39;numeric&#39;</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>入口文件挂载 src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//导入配置好的国际化语言包</span>
<span class="token keyword">import</span> i18n <span class="token keyword">from</span> <span class="token string">&#39;./i18n&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>组件中使用 src/components/home.vue</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>国际化多语言<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 在标签中使用 通过 $t() 或者 t() --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale = &#39;zh&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>中文<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>van-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale = &#39;en&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>英文<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>van-button</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ t(&#39;common.username&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// 引入国际化插件</span>
	<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token punctuation">{</span> t<span class="token punctuation">,</span> locale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function l(c,r){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","i18n.html.vue"]]);export{u as default};