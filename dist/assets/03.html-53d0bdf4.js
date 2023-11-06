import{_ as l,r as d,o as t,c as r,b as n,d as s,e as a,a as i}from"./app-02c5a260.js";const o={},c=n("h3",{id:"npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#npm","aria-hidden":"true"},"#"),s(" npm")],-1),p={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},u=i(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>NPM的全称是Node Package Manager包管理器，随NodeJS一起安装的包管理工具
它很方便的让开发者下载、安装、上传以及管理已经安装的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生成包配置文件package-json" tabindex="-1"><a class="header-anchor" href="#生成包配置文件package-json" aria-hidden="true">#</a> 生成包配置文件package.json</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    name<span class="token operator">:</span><span class="token string">&quot;包名&quot;</span><span class="token punctuation">,</span>
    version<span class="token operator">:</span><span class="token string">&quot;版本号&quot;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span><span class="token string">&quot;包的简介&quot;</span><span class="token punctuation">,</span>
    keywords<span class="token operator">:</span><span class="token string">&quot;关键词数组，可被npm库中搜索到&quot;</span><span class="token punctuation">,</span>
    author：<span class="token string">&quot;包作者&quot;</span><span class="token punctuation">,</span>
    scripts：<span class="token string">&quot;包的命令列表&quot;</span><span class="token punctuation">,</span>
    main<span class="token operator">:</span><span class="token string">&quot;入口文件&quot;</span><span class="token punctuation">,</span>
    dependencies<span class="token operator">:</span><span class="token string">&quot;生产环境下依赖包列表&quot;</span><span class="token punctuation">,</span>
    devDenpendencies<span class="token operator">:</span><span class="token string">&quot;开发环境下依赖包列表&quot;</span><span class="token punctuation">,</span>
    maintainters<span class="token operator">:</span><span class="token string">&quot;包维护者列表&quot;</span><span class="token punctuation">,</span>
    contributors<span class="token operator">:</span><span class="token string">&quot;贡献者列表&quot;</span><span class="token punctuation">,</span>
    bus<span class="token operator">:</span><span class="token string">&quot;可反馈bug的url或者email&quot;</span><span class="token punctuation">,</span>
    lincenses<span class="token operator">:</span><span class="token string">&quot;当前包所使用的许可证列表&quot;</span><span class="token punctuation">,</span>
    repositories<span class="token operator">:</span><span class="token string">&quot;源代码的托管位置&quot;</span><span class="token punctuation">,</span>
    homepage<span class="token operator">:</span><span class="token string">&quot;当前包的网站位置&quot;</span><span class="token punctuation">,</span>
    os<span class="token operator">:</span><span class="token string">&quot;支持的操作系统列表，一般为空（基本都支持）&quot;</span><span class="token punctuation">,</span>
    cpu<span class="token operator">:</span><span class="token string">&quot;支持的CPU架构列表，一般为空（基本都支持）&quot;</span><span class="token punctuation">,</span>
    engine<span class="token operator">:</span><span class="token string">&quot;支持的javascript引擎列表，一般为空（基本都支持）&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局安装与本地安装" tabindex="-1"><a class="header-anchor" href="#全局安装与本地安装" aria-hidden="true">#</a> 全局安装与本地安装</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>本地安装
npm install express

全局安装
npm install express <span class="token operator">-</span>g

安装指定版本
npm install express@<span class="token number">4.1</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="本地安装" tabindex="-1"><a class="header-anchor" href="#本地安装" aria-hidden="true">#</a> 本地安装</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>将安装包放在当前目录下的node_modules文件夹中

如果没有node_modules目录，会在当前执行 npm 命令的目录下生成node_modules目录

可以通过 require() 来引入本地安装的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>将安装包放在 /usr/local 下可以直接在命令行里使用
不能通过 require() 来引入本地安装的包

查看全局安装路径
npm config get prefix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">-</span><span class="token constant">S</span><span class="token punctuation">,</span> <span class="token operator">--</span>save 安装包信息将写入到 dependencies（生产环境下依赖包列表）
npm install express <span class="token operator">--</span>save
npm install express <span class="token operator">-</span><span class="token constant">S</span>

<span class="token operator">-</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token operator">--</span>save<span class="token operator">-</span>dev 安装包信息将加入到 devDependencies（开发环境下依赖包列表）
npm install gulp <span class="token operator">--</span>save<span class="token operator">-</span>dev
npm install gulp <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>查看所有全局安装的模块
npm ls -g

查看npm默认设置
npm config ls（部分）
npm config ls -l（全部）

清除node_modules中的编译缓存
npm cache clean -f

安装package.json中的所有依赖包
npm install

搜索模块
npm search express

更新模块
npm update express
npm update express -g 更新全局

卸载模块
npm uninstall express
npm uninstall express -g 删除全局
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nrm快速切换npm源" tabindex="-1"><a class="header-anchor" href="#nrm快速切换npm源" aria-hidden="true">#</a> nrm快速切换NPM源</h3>`,15),v={href:"https://github.com/Pana/nrm",target:"_blank",rel:"noopener noreferrer"},m=i(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>安装
npm install -g nrm

列出可选的源
nrm ls    

* npm ---- https<span class="token operator">:</span><span class="token comment">//registry.npmjs.org/</span>
  cnpm --- http<span class="token operator">:</span><span class="token comment">//r.cnpmjs.org/</span>
  taobao - http<span class="token operator">:</span><span class="token comment">//registry.npm.taobao.org/</span>
  eu ----- http<span class="token operator">:</span><span class="token comment">//registry.npmjs.eu/</span>
  au ----- http<span class="token operator">:</span><span class="token comment">//registry.npmjs.org.au/</span>
  sl ----- http<span class="token operator">:</span><span class="token comment">//npm.strongloop.com/</span>
  nj ----- https<span class="token operator">:</span><span class="token comment">//registry.nodejitsu.com/</span>
带 * 的是当前使用的源，上面的输出表明当前源是官方源。

切换
nrm use taobao  

测试速度
nrm test npm


测试所有源的响应时间：
nrm test 

  npm ---- 891ms
  cnpm --- 1213ms
* taobao - 460ms
  eu ----- 3859ms
  au ----- 1073ms
  sl ----- 4150ms
  nj ----- 8008ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npx" tabindex="-1"><a class="header-anchor" href="#npx" aria-hidden="true">#</a> npx</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx是npm5.2之后发布的一个命令，就是执行npm依赖包的二进制文件，简而言之，就是我们可以使用npx来执行各种命令

使用npx可以在命令行直接执行本地已安装的依赖包命令，不用在scripts脚本写入命令，也不用麻烦的去找本地脚本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npx举例" tabindex="-1"><a class="header-anchor" href="#npx举例" aria-hidden="true">#</a> npx举例</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i -D mocha
npx mocha --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npx原理" tabindex="-1"><a class="header-anchor" href="#npx原理" aria-hidden="true">#</a> npx原理</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、去node_modules/.bin路径检查npx后的命令是否存在，找到之后执行
2、找不到，就去环境变量$PATH里面，检查npx后的命令是否存在，找到之后执行
3、还是找不到，自动下载一个临时的依赖包最新版本在一个临时目录，然后再运行命令，运行完之后删除，不污染全局环境
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(h,g){const e=d("ExternalLinkIcon");return t(),r("div",null,[c,n("blockquote",null,[n("p",null,[n("strong",null,[s("官网："),n("a",p,[s("https://www.npmjs.com/"),a(e)])])])]),u,n("blockquote",null,[n("p",null,[n("strong",null,[n("a",v,[s("github.com/Pana/nrm"),a(e)])])])]),m])}const x=l(o,[["render",b],["__file","03.html.vue"]]);export{x as default};
