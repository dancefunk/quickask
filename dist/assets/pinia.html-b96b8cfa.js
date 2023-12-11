import{_ as n,o as s,c as a,a as e}from"./app-d50584af.js";const p={},t=e(`<h3 id="pinia存储库" tabindex="-1"><a class="header-anchor" href="#pinia存储库" aria-hidden="true">#</a> pinia存储库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://pinia.vuejs.org/
https://pinia.web3doc.top/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装pinia和持久化插件" tabindex="-1"><a class="header-anchor" href="#安装pinia和持久化插件" aria-hidden="true">#</a> 安装pinia和持久化插件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install pinia -S
npm install pinia-plugin-persist -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局挂载" tabindex="-1"><a class="header-anchor" href="#全局挂载" aria-hidden="true">#</a> 全局挂载</h3><blockquote><p>src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//pinia 状态管理进行挂载</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span><span class="token comment">//引入pinia</span>
<span class="token keyword">import</span> piniaPluginPersist <span class="token keyword">from</span> <span class="token string">&#39;pinia-plugin-persist&#39;</span><span class="token comment">//引入pinia数据持久化插件</span>

<span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersist<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置和使用" tabindex="-1"><a class="header-anchor" href="#配置和使用" aria-hidden="true">#</a> 配置和使用</h3><blockquote><p>src/store/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 状态管理的文件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;shop&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//开启数据持久化</span>
        <span class="token literal-property property">strategies</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;shop&#39;</span><span class="token punctuation">,</span><span class="token comment">//给一个要保存的名称</span>
            <span class="token literal-property property">storage</span><span class="token operator">:</span> localStorage<span class="token punctuation">,</span><span class="token comment">//sessionStorage / localStorage 存储方式</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//定义状态数据 - 保存本地存储数据</span>
    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//data</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">addrid</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//computed</span>
        <span class="token function">nickname</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> state<span class="token punctuation">.</span>user<span class="token punctuation">.</span>nickname
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">edit</span><span class="token punctuation">(</span><span class="token parameter">nickname</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">.</span>nickname <span class="token operator">=</span> nickname
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件中使用" tabindex="-1"><a class="header-anchor" href="#组件中使用" aria-hidden="true">#</a> 组件中使用</h3><blockquote><p>src/components/home.vue</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 引入pinia</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>useStore<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/index&#39;</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span>storeToRefs<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

  <span class="token comment">//初始化</span>
  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token comment">//获取状态数据</span>
  <span class="token keyword">var</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">storeToRefs</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>
  
  <span class="token comment">//存放pinia数据</span>
  user<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>
  	<span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
  	<span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
  	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),i=[t];function o(c,l){return s(),a("div",null,i)}const u=n(p,[["render",o],["__file","pinia.html.vue"]]);export{u as default};
