import{_ as p,p as o,q as i,s as n,R as s,t as e,Y as t,n as c}from"./framework-aa5c4115.js";const l={},r=n("h3",{id:"本教程的仓库源代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本教程的仓库源代码","aria-hidden":"true"},"#"),s(" 本教程的仓库源代码")],-1),d={href:"https://gitee.com/dancefunk/react.git",target:"_blank",rel:"noopener noreferrer"},u=t(`<h3 id="create-react-app官方脚手架" tabindex="-1"><a class="header-anchor" href="#create-react-app官方脚手架" aria-hidden="true">#</a> create-react-app官方脚手架</h3><blockquote><p>npx安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx create-react-app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>npm安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init react-app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>yarn安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create react-app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>选择其他模板</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx create-react-app my-app --template [template-name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),v={href:"https://www.npmjs.com/search?q=cra-template-*",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>my-app/
  README.md				说明文件
  node_modules/			依赖包目录
  package.json			依赖包配置
  public/					公共资源目录
    index.html			默认首页
    favicon.ico			ico图标
  src/						项目核心目录
    App.css				根组件css样式文件
    App.js				根组件App
    App.test.js			测试文件
    index.css				全局css样式文件
    index.js				全局入口程序文件
    logo.svg				logo图片文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令结构" tabindex="-1"><a class="header-anchor" href="#命令结构" aria-hidden="true">#</a> 命令结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.npm start 
    在http://localhost:3000下监视文件，文件修改将自动更新，你可以在控制台中看到检测错误
    
2.npm test
    在交互监视模式下启动测试运行程序。后面细讲
    
3.npm run build
    在生产环境中编译代码，并放在build目录中
    能够正确的打包代码，并且优化，压缩，使用hash重命名文件
    
4.npm run eject
	如果你对create-react-app这个构建工具和配置项不满意，你可以在任何时候eject，从而导出可配置的模板
	这个命令可以移除到项目的单一构建依赖，取而代之的是将配置文件和项目依赖到导入到你的项目中，你可以随意支配他们
	这是一个单向操作，一旦你使用eject，那么就不能恢复了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="craco配置" tabindex="-1"><a class="header-anchor" href="#craco配置" aria-hidden="true">#</a> craco配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用 create-react-app 创建项目，不想 eject 项目但想对项目中 wepback 进行自定义配置
那么就可以使用craco配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add @craco/craco -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>修改命令配置文件 (package.json)</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco start&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco build&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;craco test&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;eject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-scripts eject&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>项目根目录下创建配置文件 (my-app/craco.config.js)</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* craco.config.js */</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">webpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 别名</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;@&quot;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//配置代理解决跨域</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&quot;http://www.ask.com/api&quot;</span><span class="token punctuation">,</span>  
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关闭eslint代码检查-语法规范的警告" tabindex="-1"><a class="header-anchor" href="#关闭eslint代码检查-语法规范的警告" aria-hidden="true">#</a> 关闭Eslint代码检查(语法规范的警告)</h3><blockquote><p>package.json</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;no-undef&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;no-restricted-globals&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;no-unused-vars&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;eqeqeq&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;no-useless-constructor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;jsx-a11y/alt-text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function k(b,g){const a=c("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[n("strong",null,[n("a",d,[s("https://gitee.com/dancefunk/react.git"),e(a)])])]),u,n("p",null,[s("可以在npm市场搜索其他react脚手架模板："),n("a",v,[s('"cra-template-*"'),e(a)])]),m])}const h=p(l,[["render",k],["__file","02.html.vue"]]);export{h as default};
