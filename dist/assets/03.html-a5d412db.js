import{_ as e,r as p,o,c as l,b as n,d as s,e as t,a as i}from"./app-a58d3f97.js";const c={},u=n("h3",{id:"转载地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#转载地址","aria-hidden":"true"},"#"),s(" 转载地址")],-1),r={href:"https://yejiwei.com/post/193",target:"_blank",rel:"noopener noreferrer"},d={href:"https://blog.xiaolong0418.com/blogs/18",target:"_blank",rel:"noopener noreferrer"},k=n("h3",{id:"vite构建工具",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vite构建工具","aria-hidden":"true"},"#"),s(" Vite构建工具")],-1),v={href:"https://vitejs.cn/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="vite配置" tabindex="-1"><a class="header-anchor" href="#vite配置" aria-hidden="true">#</a> Vite配置</h3><blockquote><p>vite.config.js 简易配置</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token comment">//引入路径模块</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;components&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;src/components&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;vue&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm-bundler.js&#39;</span> <span class="token comment">// 定义vue的别名，如果使用其他的插件，可能会用到别名</span>
      <span class="token comment">// &quot;styles&quot;: path.resolve(__dirname, &quot;src/styles&quot;),</span>
      <span class="token comment">// &quot;plugins&quot;: path.resolve(__dirname, &quot;src/plugins&quot;),</span>
      <span class="token comment">// &quot;views&quot;: path.resolve(__dirname, &quot;src/views&quot;),</span>
      <span class="token comment">// &quot;layouts&quot;: path.resolve(__dirname, &quot;src/layouts&quot;),</span>
      <span class="token comment">// &quot;utils&quot;: path.resolve(__dirname, &quot;src/utils&quot;),</span>
      <span class="token comment">// &quot;apis&quot;: path.resolve(__dirname, &quot;src/apis&quot;),</span>
      <span class="token comment">// &quot;dirs&quot;: path.resolve(__dirname, &quot;src/directives&quot;),</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">//设置代理请求 当代理商识别你的请求如果前缀是 /api的话 就会自动转移</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://www.ask.com/api&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//跨域</span>
        <span class="token comment">//替换掉api前缀 防止多个api地址</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hmr</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>vite.config.js 完整配置</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ConfigEnv<span class="token punctuation">,</span> loadEnv<span class="token punctuation">,</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//自动导入组件</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> VantResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/resolvers&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&quot;unplugin-auto-import/vite&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//按需引入vant组件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStyleImportPlugin<span class="token punctuation">,</span> VantResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-style-import&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//提供压缩和基于 ejs 模板功能的 vite 插件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-html&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//复制插件</span>
<span class="token keyword">import</span> copy <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-copy&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//图片压缩</span>
<span class="token comment">//import viteImagemin from &quot;vite-plugin-imagemin&quot;;</span>

<span class="token comment">//oss</span>
<span class="token keyword">import</span> VitePluginOss <span class="token keyword">from</span> <span class="token string">&quot;vite-plugin-oss&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//打包分析</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-visualizer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dir</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">CWD</span> <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> mode <span class="token punctuation">}</span><span class="token operator">:</span> ConfigEnv<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">UserConfig</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 环境变量</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token constant">VITE_OSS_URL</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_OSS_DIST</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_OSS_REGION</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_OSS_ACCESSKEYID</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_OSS_ACCESSKEYSECRET</span><span class="token punctuation">,</span>
    <span class="token constant">VITE_OSS_BUCKET</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> <span class="token constant">CWD</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// console.log(VITE_OSS_DIST);</span>

  <span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//导入自定义组件</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定组件位置，默认是src/components</span>
      <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/components&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置文件生成位置</span>
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&quot;src/components.d.ts&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// ui库解析器，也可以自定义</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//导入vue函数</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pinia&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为&#39;src/auto-import.d.ts&#39;</span>
      <span class="token comment">// dts: &#39;src/auto-import.d.ts&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//按需引入vant组件样式</span>
    <span class="token function">createStyleImportPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolves</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">VantResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">//ejs变量注入</span>
    <span class="token function">createHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// entry: &quot;src/main.ts&quot;,</span>
      <span class="token comment">// template: &quot;index.html&quot;,</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">isProd</span><span class="token operator">:</span> mode <span class="token operator">===</span> <span class="token string">&quot;prod&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 可将其他插件放入该数组</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">&quot;prod&quot;</span> <span class="token operator">||</span> mode <span class="token operator">===</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    plugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      <span class="token comment">//复制插件</span>
      <span class="token function">copy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&quot;assets/images/**/*&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&quot;dist/public/images&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token comment">//图片压缩</span>
      <span class="token comment">// viteImagemin({</span>
      <span class="token comment">//   gifsicle: {</span>
      <span class="token comment">//     optimizationLevel: 7,</span>
      <span class="token comment">//     interlaced: false,</span>
      <span class="token comment">//   },</span>

      <span class="token comment">//   //压缩有点慢，用处不大，经测试，前后压缩处理无差别</span>
      <span class="token comment">//   // optipng: {</span>
      <span class="token comment">//   //   optimizationLevel: 7</span>
      <span class="token comment">//   // },</span>
      <span class="token comment">//   mozjpeg: {</span>
      <span class="token comment">//     quality: 20,</span>
      <span class="token comment">//   },</span>
      <span class="token comment">//   pngquant: {</span>
      <span class="token comment">//     quality: [0.8, 0.9],</span>
      <span class="token comment">//     speed: 4,</span>
      <span class="token comment">//   },</span>
      <span class="token comment">//   svgo: {</span>
      <span class="token comment">//     plugins: [</span>
      <span class="token comment">//       {</span>
      <span class="token comment">//         name: &quot;removeViewBox&quot;,</span>
      <span class="token comment">//       },</span>
      <span class="token comment">//       {</span>
      <span class="token comment">//         name: &quot;removeEmptyAttrs&quot;,</span>
      <span class="token comment">//         active: false,</span>
      <span class="token comment">//       },</span>
      <span class="token comment">//     ],</span>
      <span class="token comment">//   },</span>
      <span class="token comment">// }),</span>

      <span class="token comment">// //oss</span>
      <span class="token function">VitePluginOss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&quot;./dist/**&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dist</span><span class="token operator">:</span> <span class="token constant">VITE_OSS_DIST</span><span class="token punctuation">,</span>
        <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token constant">VITE_OSS_REGION</span><span class="token punctuation">,</span>
        <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> <span class="token constant">VITE_OSS_ACCESSKEYID</span><span class="token punctuation">,</span>
        <span class="token literal-property property">accessKeySecret</span><span class="token operator">:</span> <span class="token constant">VITE_OSS_ACCESSKEYSECRET</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bucket</span><span class="token operator">:</span> <span class="token constant">VITE_OSS_BUCKET</span><span class="token punctuation">,</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">//上传日志</span>
        <span class="token literal-property property">verbose</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token function-variable function">setOssPath</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">let</span> index <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">let</span> Path <span class="token operator">=</span> filePath<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">,</span> filePath<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> Path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\\\</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// console.log(plugins);</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token comment">//开发或生产环境服务的公共基础路径</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> mode <span class="token operator">===</span> <span class="token string">&quot;prod&quot;</span> <span class="token operator">||</span> mode <span class="token operator">===</span> <span class="token string">&quot;test&quot;</span> <span class="token operator">?</span> <span class="token string">&quot;./&quot;</span> <span class="token operator">:</span> <span class="token constant">VITE_OSS_URL</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">find</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@\\/</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token function">pathResolve</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//配置全局样式</span>
        <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息</span>
          <span class="token literal-property property">charset</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token string">&#39;@use &quot;@/assets/css/globalstyle.scss&quot; as *;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
      <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 设置服务启动时是否自动打开浏览器</span>
      <span class="token literal-property property">cors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许跨域</span>
      <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:4523/mock/720332&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token comment">//删除/api</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> plugins<span class="token punctuation">,</span>

    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token string">&quot;terser&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">terserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//生产环境时移除console</span>
          <span class="token literal-property property">drop_console</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">drop_debugger</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//指定生成静态资源的存放路径</span>
      <span class="token literal-property property">assetsDir</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>

      <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//打包目录区分优化</span>
        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">chunkFileNames</span><span class="token operator">:</span> <span class="token string">&quot;static/[name]-[hash].js&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">entryFileNames</span><span class="token operator">:</span> <span class="token string">&quot;static/[name]-[hash].js&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">assetFileNames</span><span class="token operator">:</span> <span class="token string">&quot;static/[name]-[hash].[ext]&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unplugin-vue-components" tabindex="-1"><a class="header-anchor" href="#unplugin-vue-components" aria-hidden="true">#</a> unplugin-vue-components</h3><blockquote><p>自动导入ui库,该插件内置了大多数流行库解析器</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install unplugin<span class="token operator">-</span>vue<span class="token operator">-</span>components <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js,插件会生成一个ui库组件以及指令路径components.d.ts文件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ElementPlusResolver<span class="token punctuation">,</span>
  AntDesignVueResolver<span class="token punctuation">,</span>
  VantResolver<span class="token punctuation">,</span>
  HeadlessUiResolver<span class="token punctuation">,</span>
  ElementUiResolver
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// ui库解析器，也可以自定义</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">AntDesignVueResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">VantResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">HeadlessUiResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">ElementUiResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动导入自己的组件" tabindex="-1"><a class="header-anchor" href="#自动导入自己的组件" aria-hidden="true">#</a> 自动导入自己的组件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js,插件会生成一个自己组件路径的components.d.ts文件</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 指定组件位置，默认是src/components</span>
      <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/components&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// ui库解析器</span>
      <span class="token comment">// resolvers: [ElementPlusResolver()],</span>
      <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 配置文件生成位置</span>
      <span class="token literal-property property">dts</span><span class="token operator">:</span> <span class="token string">&#39;src/components.d.ts&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-plugin-style-import" tabindex="-1"><a class="header-anchor" href="#vite-plugin-style-import" aria-hidden="true">#</a> vite-plugin-style-import</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vite<span class="token operator">-</span>plugin<span class="token operator">-</span>style<span class="token operator">-</span><span class="token keyword">import</span> 样式自动引入
当你使用unplugin<span class="token operator">-</span>vue<span class="token operator">-</span>components来引入ui库的时候
message<span class="token punctuation">,</span> notification 等引入样式不生效 安装vite<span class="token operator">-</span>plugin<span class="token operator">-</span>style<span class="token operator">-</span><span class="token keyword">import</span>即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vite-plugin-style-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> styleImport<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  AndDesignVueResolve<span class="token punctuation">,</span>
  VantResolve<span class="token punctuation">,</span>
  ElementPlusResolve<span class="token punctuation">,</span>
  NutuiResolve<span class="token punctuation">,</span>
  AntdResolve
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-style-import&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">styleImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolves</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">AndDesignVueResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">VantResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">ElementPlusResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">NutuiResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">AntdResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 自定义规则</span>
      <span class="token literal-property property">libs</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;ant-design-vue&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">esModule</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">resolveStyle</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ant-design-vue/es/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/index</span><span class="token template-punctuation string">\`</span></span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 引用使用less的库要配置一下</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">javascriptEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unplugin-auto-import-vite" tabindex="-1"><a class="header-anchor" href="#unplugin-auto-import-vite" aria-hidden="true">#</a> unplugin-auto-import/vite</h3><blockquote><p>vue3等插件 hooks 自动引入 支持vue, vue-router, vue-i18n, @vueuse/head, @vueuse/core等自动引入</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install unplugin-auto-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>安装的时候会自动生成auto-imports.d文件(默认是在根目录)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@vueuse/head&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;@vueuse/core&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token comment">// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为&#39;src/auto-import.d.ts&#39;</span>
      <span class="token comment">// dts: &#39;src/auto-import.d.ts&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入前</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">//引入后</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>


<span class="token comment">// 引入前</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token comment">//引入后</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span> count <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-global-api" tabindex="-1"><a class="header-anchor" href="#vue-global-api" aria-hidden="true">#</a> vue-global-api</h3><blockquote><p>解决eslint报错</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-global-api -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>.eslintrc.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue-global-api&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>它还为细粒度控制提供了相同的集合和单个 API 选项</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// collections</span>
    <span class="token string">&#39;vue-global-api/reactivity&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;vue-global-api/lifecycle&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;vue-global-api/component&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// single apis</span>
    <span class="token string">&#39;vue-global-api/ref&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;vue-global-api/toRef&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-plugin-ali-oss" tabindex="-1"><a class="header-anchor" href="#vite-plugin-ali-oss" aria-hidden="true">#</a> vite-plugin-ali-oss</h3><blockquote><p>打包自动上传打包文件到oss</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> vitePluginAliOss <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-ali-oss&#39;</span>

<span class="token comment">// 获取 .env 环境配置文件</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//oss  plugins数组</span>
<span class="token function">vitePluginAliOss</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">region</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_OSS_REGION</span><span class="token punctuation">,</span>
    <span class="token literal-property property">accessKeyId</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_OSS_ACCESSKEYID</span><span class="token punctuation">,</span>
    <span class="token literal-property property">accessKeySecret</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_OSS_ACCESSKEYSECRET</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bucket</span><span class="token operator">:</span> env<span class="token punctuation">.</span><span class="token constant">VITE_OSS_BUCKET</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-plugin-cdn-import" tabindex="-1"><a class="header-anchor" href="#vite-plugin-cdn-import" aria-hidden="true">#</a> vite-plugin-cdn-import</h3><blockquote><p>Vite使用CDN</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> importToCDN <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-cdn-import&#39;</span><span class="token punctuation">;</span>
<span class="token function">importToCDN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue-i18n&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;VueI18n&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.bootcdn.net/ajax/libs/vue-i18n/9.1.10/vue-i18n.global.prod.min.js&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;VueRouter&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://unpkg.com/vue-router@4.0.16/dist/vue-router.global.prod.js&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;ElementPlus&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://unpkg.com/element-plus@2.2.6/dist/index.full.js</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token string">&#39;https://unpkg.com/element-plus/dist/index.css&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;vue-demi&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;VueDemi&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.bootcdn.net/ajax/libs/vue-demi/0.13.1/index.iife.js&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;Pinia&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.bootcdn.net/ajax/libs/pinia/2.0.14/pinia.iife.prod.min.js&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;@smallwei/avue&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">var</span><span class="token operator">:</span> <span class="token string">&#39;AVUE&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/@smallwei/avue@3.0.17&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
这上面的都有引用关系所以都需要通过cdn的方式引入
VueDemi这个是pinia用来判断是vue2还是vue3所需要的，要额外引入一下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>第二种方案（通过rollup-plugin-external-globals）这个方式需要单独在index.html中引入cdn资源</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>//vite.config.ts
import externalGlobals from &#39;rollup-plugin-external-globals&#39;;
let globals = externalGlobals({
    vue: &#39;Vue&#39;,
    &#39;vue-i18n&#39;: &#39;VueI18n&#39;,
    &#39;vue-router&#39;: &#39;VueRouter&#39;,
    &#39;element-plus&#39;: &#39;ElementPlus&#39;,
    pinia: &#39;Pinia&#39;,
    &#39;@smallwei/avue&#39;: &#39;AVUE&#39;
});

//vite.config.ts(注意plugins的位置是在build下)

build:{
    rollupOptions:{
        // 忽略打包
        external: [&#39;vue&#39;, &#39;vue-i18n&#39;, &#39;pinia&#39;, &#39;vue-router&#39;, &#39;element-plus&#39;,&#39;@smallwei/avue&#39;],
    },
    plugins: [globals],
}

// index.html
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue@3.2.25/dist/vue.global.prod.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue-i18n/9.1.10/vue-i18n.global.prod.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-router@4.0.16/dist/vue-router.global.prod.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/element-plus@2.2.6/dist/index.full.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/vue-demi/0.13.1/index.iife.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/pinia/2.0.14/pinia.iife.prod.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/@smallwei/avue@3.0.17<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="通知用户" tabindex="-1"><a class="header-anchor" href="#通知用户" aria-hidden="true">#</a> 通知用户</h3><blockquote><p>网页重新部署，通知用户</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add @plugin-web-update-notification/vite -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>以 git commit hash (也支持 package.json version、build timestamp、custom) 为版本号，打包时将版本号写入 json 文件
客户端轮询服务器上的版本号（浏览器窗口的 visibilitychange、focus 事件辅助），和本地作比较，如果不相同则通知用户刷新页面。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> webUpdateNotice <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@plugin-web-update-notification/vite&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">webUpdateNotice</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">notificationProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;更新通知&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;网站内容有更新，请刷新页面，获取最新内容&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&#39;刷新&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dismissButtonText</span><span class="token operator">:</span> <span class="token string">&#39;忽略&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vitejs-plugin-legacy" tabindex="-1"><a class="header-anchor" href="#vitejs-plugin-legacy" aria-hidden="true">#</a> @vitejs/plugin-legacy</h3><blockquote><p>@vitejs/plugin-legacy： 为打包后的文件提供传统浏览器兼容性支持</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install @vitejs/plugin-legacy -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>vite.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> legacy <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-legacy&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">legacy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;defaults&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;not IE 11&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rollup-plugin-visualizer" tabindex="-1"><a class="header-anchor" href="#rollup-plugin-visualizer" aria-hidden="true">#</a> rollup-plugin-visualizer</h3><blockquote><p>rollup-plugin-visualizer: 构建分析，打包之后，会在根目录默认生成一个 stats.html 文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install rollup-plugin-visualizer -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>vite.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> legacy <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-legacy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup-plugin-visualizer&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">legacy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;defaults&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;not IE 11&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行打包命令后，在浏览器中打开 <code>stats.html</code> 文件</p><h3 id="按需加载插件" tabindex="-1"><a class="header-anchor" href="#按需加载插件" aria-hidden="true">#</a> 按需加载插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。
如果插件在服务或构建期间按需使用，请使用 apply 属性指明它们仅在 &#39;build&#39; 或 &#39;serve&#39; 模式时调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>vite.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">apply</span><span class="token operator">:</span> <span class="token string">&#39;build&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h3><blockquote><p>src/my-plugin/index.ts</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> ResolvedConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">examplePlugin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">config</span><span class="token operator">:</span> any<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;read-config&quot;</span><span class="token punctuation">,</span>

    <span class="token function">configResolved</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">resolvedConfig</span><span class="token operator">:</span> ResolvedConfig</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;resolvedConfig=&gt;&quot;</span><span class="token punctuation">,</span> resolvedConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 存储最终解析的配置</span>
      config <span class="token operator">=</span> resolvedConfig<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 在其他钩子中使用存储的配置</span>
    <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">code</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(code,id)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>command <span class="token operator">===</span> <span class="token string">&quot;serve&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// dev: 由开发服务器调用的插件</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// build: 由 Rollup 调用的插件</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> examplePlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>vite.config.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> examplePlugin <span class="token keyword">from</span> <span class="token string">&quot;./src/my-plugin/index&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">exmaplePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vite-和-rollup-钩子函数" tabindex="-1"><a class="header-anchor" href="#vite-和-rollup-钩子函数" aria-hidden="true">#</a> vite 和 rollup 钩子函数</h3><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th><th style="text-align:left;">所属</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;">插件名称</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">handleHotUpdate</td><td style="text-align:left;">执行自定义 HMR（模块热替换）更新处理</td><td style="text-align:left;">vite 独享</td></tr><tr><td style="text-align:left;">config</td><td style="text-align:left;">在解析 Vite 配置前调用。可以自定义配置，会与 vite 基础配置进行合并</td><td style="text-align:left;">vite 独享</td></tr><tr><td style="text-align:left;">configResolved</td><td style="text-align:left;">在解析 Vite 配置后调用。可以读取 vite 的配置，进行一些操作</td><td style="text-align:left;">vite 独享</td></tr><tr><td style="text-align:left;">configureServer</td><td style="text-align:left;">是用于配置开发服务器的钩子。最常见的用例是在内部 connect 应用程序中添加自定义中间件。</td><td style="text-align:left;">vite 独享</td></tr><tr><td style="text-align:left;">transformIndexHtml</td><td style="text-align:left;">转换 index.html 的专用钩子。</td><td style="text-align:left;">vite 独享</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;">在收集 rollup 配置前，vite（本地）服务启动时调用，可以和 rollup 配置进行合并</td><td style="text-align:left;">vite 和 rollup 共享</td></tr><tr><td style="text-align:left;">buildStart</td><td style="text-align:left;">在 rollup 构建中，vite（本地）服务启动时调用，在这个函数中可以访问 rollup 的配置</td><td style="text-align:left;">vite 和 rollup 共享</td></tr><tr><td style="text-align:left;">resolveId</td><td style="text-align:left;">在解析模块时调用，可以返回一个特殊的 resolveId 来指定某个 import 语句加载特定的模块</td><td style="text-align:left;">vite 和 rollup 共享</td></tr><tr><td style="text-align:left;">load</td><td style="text-align:left;">在解析模块时调用，可以返回代码块来指定某个 import 语句加载特定的模块</td><td style="text-align:left;">vite 和 rollup 共享</td></tr><tr><td style="text-align:left;">transform</td><td style="text-align:left;">在解析模块时调用，将源代码进行转换，输出转换后的结果，类似于 webpack 的 loader</td><td style="text-align:left;">vite 和 rollup 共享</td></tr><tr><td style="text-align:left;">buildEnd</td><td style="text-align:left;">在 vite 本地服务关闭前，rollup 输出文件到目录前调用</td><td style="text-align:left;">vite 和 rollup 共享</td></tr><tr><td style="text-align:left;">closeBundle</td><td style="text-align:left;">在 vite 本地服务关闭前，rollup 输出文件到目录前调用</td><td style="text-align:left;">vite 和 rollup 共享</td></tr></tbody></table><h3 id="vite-和-webpack-的区别" tabindex="-1"><a class="header-anchor" href="#vite-和-webpack-的区别" aria-hidden="true">#</a> vite 和 webpack 的区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>webpack先打包，再启动开发服务器，请求服务器时直接给予打包后的结果
vite是直接启动开发服务器，然后按需编译依赖文件
vite基本原理是无需打包，依赖浏览器原生支持 esm 去解析模块 请求哪个模块再对哪个模块进行实时编译
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65);function b(g,y){const a=p("ExternalLinkIcon");return o(),l("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("Vite零基础快速入门"),t(a)])]),n("li",null,[n("a",d,[s("Vite快速入门教程"),t(a)])])]),k,n("p",null,[n("a",v,[s("https://vitejs.cn/"),t(a)])]),m])}const h=e(c,[["render",b],["__file","03.html.vue"]]);export{h as default};
