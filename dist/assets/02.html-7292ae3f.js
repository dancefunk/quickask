import{_ as e,o as n,c as a,a as t}from"./app-4841f850.js";const s={},i=t(`<h3 id="全局安装脚手架" tabindex="-1"><a class="header-anchor" href="#全局安装脚手架" aria-hidden="true">#</a> 全局安装脚手架</h3><blockquote><ul><li>Yarn安装</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn global add @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>NPM安装</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看安装是否成功" tabindex="-1"><a class="header-anchor" href="#查看安装是否成功" aria-hidden="true">#</a> 查看安装是否成功</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新全局脚手架" tabindex="-1"><a class="header-anchor" href="#更新全局脚手架" aria-hidden="true">#</a> 更新全局脚手架</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm update -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><blockquote><p>利用Vite构建工具来创建项目</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># npm 6.x
npm init vite@latest &lt;project-name&gt; --template vue

# npm 7+，需要加上额外的双短横线
npm init vite@latest &lt;project-name&gt; -- --template vue

cd &lt;project-name&gt;

npm install

npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Yarn安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn create vite &lt;project-name&gt; --template vue
cd &lt;project-name&gt;
yarn
yarn dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/project
	.gitignore				git仓库忽略文件
	index.html				页面入口文件
	package.json				安装包依赖文件
	vite.config.js			vite配置文件
	node_modules/				依赖包
	public/					公共访问目录
	dist/						打包目录
	src/						开发逻辑目录
	
	
/src
	App.vue					项目入口文件
	main.js					项目的核心文件
	assets/					放置一些图片，如logo等
	components/				组件目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue脚手架更改包管理工具" tabindex="-1"><a class="header-anchor" href="#vue脚手架更改包管理工具" aria-hidden="true">#</a> vue脚手架更改包管理工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Mac路径：~/.vuerc
Windows路径：C:\\Users\\当前电脑登录账户名\\vuerc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>.vuerc内容</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;useTaobaoRegistry&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;latestVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5.0.8&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChecked&quot;</span><span class="token operator">:</span> <span class="token number">1658284242242</span><span class="token punctuation">,</span>
  <span class="token property">&quot;packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[i];function l(r,c){return n(),a("div",null,d)}const v=e(s,[["render",l],["__file","02.html.vue"]]);export{v as default};
