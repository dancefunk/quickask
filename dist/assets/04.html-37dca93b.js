import{_ as s,p as a,q as d,s as n,R as e,t as l,Y as r,n as v}from"./framework-e1bed10d.js";const c={},t=n("h3",{id:"yarn",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#yarn","aria-hidden":"true"},"#"),e(" Yarn")],-1),u={href:"https://www.yarnpkg.cn/",target:"_blank",rel:"noopener noreferrer"},m=r(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Yarn为Node.js平台的代码包管理器。类似于知名的npm包管理器，实际是npm客户端

特点：快速、安全、可靠

1.离线模式
如果你之前安装过某个包，你就可以在没有网络连接的情况下再次安装它

2.确定性
不管是什么顺序，在不同的机器上的依赖会以同一方式安装

3.网络性能
Yarn可以高效地队列化请求并且避免请求瀑布化，使网络利用率最大化

4.相同的软件包
从 npm 安装软件包并使用相同的包管理流程

5.网络适应
单个请求失败不会导致安装失败，请求失败时会重试

6.扁平模式
解析不匹配的依赖版本为一个单一的版本来避免导致多个版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Mac安装
brew install yarn

Windows安装
下载.msi按装包。确保Node.js已经安装并可用。
https://yarnpkg.com/latest.msi

检查安装是否成功
yarn --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改yarn全局安装和缓存位置" tabindex="-1"><a class="header-anchor" href="#修改yarn全局安装和缓存位置" aria-hidden="true">#</a> 修改yarn全局安装和缓存位置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>改变 yarn 全局安装位置
yarn config  set global-folder &quot;你的磁盘路径&quot;

改变 yarn 缓存位置
yarn config set cache-folder &quot;你的磁盘路径&quot;

检查当前 yarn 的 bin位置
yarn global bin

检查当前 yarn 的 全局安装位置
yarn global dir

我们需要将全局安装目录添加到系统环境变量中去，否则通过 yarn安装全局包 的时候，在cmd命令行中是找不到的命令的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动更换镜像源" tabindex="-1"><a class="header-anchor" href="#手动更换镜像源" aria-hidden="true">#</a> 手动更换镜像源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry <span class="token string">&quot;https://registry.npm.taobao.org&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yrm快速切换镜像源" tabindex="-1"><a class="header-anchor" href="#yrm快速切换镜像源" aria-hidden="true">#</a> yrm快速切换镜像源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> yrm

列出当前可用的所有镜像源
yrm <span class="token function">ls</span>

<span class="token function">npm</span> -----  https://registry.npmjs.org/
cnpm ----  http://r.cnpmjs.org/
taobao --  https://registry.npm.taobao.org/
nj ------  https://registry.nodejitsu.com/
rednpm -- http://registry.mirror.cqupt.edu.cn
skimdb -- https://skimdb.npmjs.com/registry
<span class="token function">yarn</span> ----  https://registry.yarnpkg.com


使用淘宝镜像源
yrm use taobao


测试访问速度
yrm <span class="token builtin class-name">test</span> taobao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>生成包配置文件 package.json
yarn init

安装所有依赖包
yarn install

安装依赖包
yarn add express -S

更新依赖包
yarn upgrade express -S

手动选择升级的依赖包
yarn upgrade-interactive --latest

更新到最新版
yarn self-update

删除依赖包
yarn remove express -S

清除缓存
yarn cache clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(o,p){const i=v("ExternalLinkIcon");return a(),d("div",null,[t,n("blockquote",null,[n("p",null,[n("strong",null,[e("官网："),n("a",u,[e("https://www.yarnpkg.cn/"),l(i)])])])]),m])}const g=s(c,[["render",b],["__file","04.html.vue"]]);export{g as default};
