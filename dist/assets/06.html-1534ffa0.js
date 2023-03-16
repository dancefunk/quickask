import{_ as n,p as s,q as a,Z as e}from"./framework-823c4b5a.js";const t={},p=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>postcss 是可以用来处理兼容性问题
postcss-loader loader，用于读取且添加兼容性代码
postcss-preset-env 插件，能让postcss精确到对指定范围内的兼容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装依赖插件" tabindex="-1"><a class="header-anchor" href="#安装依赖插件" aria-hidden="true">#</a> 安装依赖插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add postcss-loader postcss-preset-env -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在package-json中配置browserslist" tabindex="-1"><a class="header-anchor" href="#在package-json中配置browserslist" aria-hidden="true">#</a> 在package.json中配置browserslist</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;browserslist&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token property">&quot;development&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
	  <span class="token string">&quot;last 1 chrome version&quot;</span><span class="token punctuation">,</span>
	  <span class="token string">&quot;last 1 firefox version&quot;</span><span class="token punctuation">,</span>
	  <span class="token string">&quot;last 1 safari version&quot;</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token property">&quot;production&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
	  <span class="token string">&quot;&gt;0.1%&quot;</span><span class="token punctuation">,</span>
	  <span class="token string">&quot;not dead&quot;</span><span class="token punctuation">,</span>
	  <span class="token string">&quot;not op_mini all&quot;</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack-config-js配置" tabindex="-1"><a class="header-anchor" href="#webpack-config-js配置" aria-hidden="true">#</a> webpack.config.js配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>

<span class="token comment">/* 合并css文件 */</span>
<span class="token keyword">const</span> miniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;build.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    miniCssExtractPlugin<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
                    <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;postcss-loader&#39;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">postcssOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                    <span class="token string">&#39;postcss-preset-env&#39;</span>
                                <span class="token punctuation">]</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./template/index.html&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">miniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">filename</span><span class="token operator">:</span>  <span class="token string">&#39;[hash:8].css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式文件" tabindex="-1"><a class="header-anchor" href="#样式文件" aria-hidden="true">#</a> 样式文件</h3><blockquote><p>src/a.css</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#box1</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口js文件" tabindex="-1"><a class="header-anchor" href="#入口js文件" aria-hidden="true">#</a> 入口JS文件</h3><blockquote><p>src/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./a.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="最后编译" tabindex="-1"><a class="header-anchor" href="#最后编译" aria-hidden="true">#</a> 最后编译</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在生成模式下打包后对比" tabindex="-1"><a class="header-anchor" href="#在生成模式下打包后对比" aria-hidden="true">#</a> 在生成模式下打包后对比</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">打包前的结果

#box1</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">打包后的结果

#box1</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token property">-webkit-backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
	        <span class="token property">backface-visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","06.html.vue"]]);export{u as default};
