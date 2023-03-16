import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const t={},i=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PWA：渐进式网络开发应用程序(离线可访问)，需要通过serviceWorker 实现

在离线(offline)时应用程序能够继续运行功能。这是通过使用名为 Service Workers 的网络技术来实现的。

workbox ---&gt; workbox-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖插件" tabindex="-1"><a class="header-anchor" href="#安装依赖插件" aria-hidden="true">#</a> 安装依赖插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add workbox-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h3><blockquote><p>webpack.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> WorkboxWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;workbox-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token operator">...</span>省略部分配置<span class="token operator">...</span>


<span class="token keyword">new</span> <span class="token class-name">WorkboxWebpackPlugin<span class="token punctuation">.</span>GenerateSW</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">/*
        帮助 serviceworker 快速启动
        删除旧的 serviceworker
        生成一个 serviceworker 配置文件
    */</span>
    <span class="token literal-property property">clientsClaim</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">skipWaiting</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改入口js文件" tabindex="-1"><a class="header-anchor" href="#修改入口js文件" aria-hidden="true">#</a> 修改入口JS文件</h3><blockquote><p>index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* index.js */</span>
<span class="token comment">// 注册serviceworker</span>
<span class="token comment">// 处理兼容</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;serviceWorker&#39;</span> <span class="token keyword">in</span> navigator<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
        navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&#39;./service-worker.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
            <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sw注册成功&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token parameter">reason</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sw注册失败&#39;</span><span class="token punctuation">,</span> reason<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译打包" tabindex="-1"><a class="header-anchor" href="#编译打包" aria-hidden="true">#</a> 编译打包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>最后去访问打包后的 dist/index.html 打开控制台 我们会发现 在没有实时开启webpack-dev-server的情况下，我们还是可以离线访问注册的service服务 就是index.js里面写的程序</strong></p>`,12),p=[i];function c(o,l){return s(),a("div",null,p)}const u=n(t,[["render",c],["__file","14.html.vue"]]);export{u as default};
