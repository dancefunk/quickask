import{_ as a,r as d,o as l,c as r,b as n,d as e,e as i,a as v}from"./app-9f8282b6.js";const m={},c=n("h3",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),e(" 参考链接")],-1),t={href:"https://www.cnblogs.com/gaozejie/p/10689742.html",target:"_blank",rel:"noopener noreferrer"},o={href:"https://www.cnblogs.com/wyy1234/p/9727142.html",target:"_blank",rel:"noopener noreferrer"},u=n("h3",{id:"nvm安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nvm安装","aria-hidden":"true"},"#"),e(" nvm安装")],-1),p={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},b=v(`<h4 id="安装nvm" tabindex="-1"><a class="header-anchor" href="#安装nvm" aria-hidden="true">#</a> 安装nvm</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>首先把nvm-setup.zip解压到比如E:/dev/nvm 中(其它盘也可以)
然后以管理员的身份运行nvm-setup
选择nvm安装目录为 E:\\dev\\nvm
node安装目录为 E:\\dev\\nodejs
修改settings.txt的内容为：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>root<span class="token operator">:</span> E<span class="token operator">:</span>\\dev\\nvm
path<span class="token operator">:</span> E<span class="token operator">:</span>\\dev\\nodejs
arch<span class="token operator">:</span> <span class="token number">64</span>
proxy<span class="token operator">:</span> none
node_mirror<span class="token operator">:</span> http<span class="token operator">:</span><span class="token comment">//npm.taobao.org/mirrors/node/</span>
npm_mirror<span class="token operator">:</span> https<span class="token operator">:</span><span class="token comment">//npm.taobao.org/mirrors/npm/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nvm环境变量" tabindex="-1"><a class="header-anchor" href="#nvm环境变量" aria-hidden="true">#</a> nvm环境变量</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>我的电脑-&gt;属性-&gt;高级系统设置-&gt;环境变量

新增环境变量
NVM_HOME<span class="token operator">:</span>E<span class="token operator">:</span>\\dev\\nvm
NVM_SYMLINK<span class="token operator">:</span>E<span class="token operator">:</span>\\dev\\nodejs

修改环境变量
PATH<span class="token operator">:</span>%NVM_HOME%;%NVM_SYMLINK%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启多版本控制" tabindex="-1"><a class="header-anchor" href="#开启多版本控制" aria-hidden="true">#</a> 开启多版本控制</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nvm on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="通过nvm安装node" tabindex="-1"><a class="header-anchor" href="#通过nvm安装node" aria-hidden="true">#</a> 通过nvm安装node</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>nvm -v <span class="token comment">//查看nvm版本</span>
nvm install latest  <span class="token comment">//安装最新版本</span>
nvm install <span class="token number">8.12</span>.<span class="token number">0</span>  <span class="token comment">//下载指定版本</span>
nvm use <span class="token number">8.12</span>.<span class="token number">0</span> <span class="token comment">//使用指定版本</span>
nvm ls <span class="token comment">//查看已经安装的nodejs版本</span>
node -v <span class="token comment">//查看nodejs版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装全局npm" tabindex="-1"><a class="header-anchor" href="#安装全局npm" aria-hidden="true">#</a> 安装全局npm</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>安装node的时候，npm其实也已经一起安装了
因为nvm可以管理多个版本的node，如果每次添加一个node版本都要安装一堆的包就很麻烦
如果有一个npm可以让各个版本的node共用，就不会这么麻烦了
这就是为什么我们要配置一个全局的npm的原因
简单的三步就可以配置一个全局的npm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>配置用npm下载包时全局安装的包路径
npm config set prefix &quot;E:\\dev\\nvm\\npm&quot;

安装cnpm淘宝镜像  https://npmmirror.com/
npm install -g cnpm --registry=https://registry.npmmirror.com

新增环境变量
NPM_HOME=E:\\dev\\nvm\\npm

修改环境变量
path中添加%NPM_HOME%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nvm常用命令" tabindex="-1"><a class="header-anchor" href="#nvm常用命令" aria-hidden="true">#</a> nvm常用命令</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>显示nvm版本
nvm version

开启和关闭node版本管理
nvm on
nvm off

安装node，最新稳定版本latest
nvm install latest

显示已安装的node版本
nvm list

切换node版本
nvm use version

卸载指定版本node
nvm uninstall version

设置存储不同版本node的目录
nvm root 存储路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nvm-use-version-报错-exit-status-1-乱码" tabindex="-1"><a class="header-anchor" href="#nvm-use-version-报错-exit-status-1-乱码" aria-hidden="true">#</a> nvm use [version] 报错“exit status 1 乱码”</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>搜索到的可能导致的原因有：
1、安装路径有中文
2、安装路径有空格
3、CMD命令行窗口不是管理员权限打开
4、配置文件和实际安装路径不符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="node版本切换n-mac" tabindex="-1"><a class="header-anchor" href="#node版本切换n-mac" aria-hidden="true">#</a> Node版本切换n(Mac)</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>安装
npm install -g n

安装完成之后，直接输入n后，会输出当前已经安装的node版本以及正在使用的版本
你可以通过移动上下方向键来选择要使用的版本，最后按回车生效

n
    0.10.1 
    0.10.15 
o   0.10.21 
    0.11.8

安装最新版本
n latest

安装稳定版本
n stable

删除某个版本
n rm 0.10.1

以指定的版本来执行脚本
n use 0.10.21 some.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function h(g,k){const s=d("ExternalLinkIcon");return l(),r("div",null,[c,n("blockquote",null,[n("p",null,[n("a",t,[e("https://www.cnblogs.com/gaozejie/p/10689742.html"),i(s)])])]),n("blockquote",null,[n("p",null,[n("a",o,[e("https://www.cnblogs.com/wyy1234/p/9727142.html"),i(s)])])]),u,n("blockquote",null,[n("p",null,[e("下载nvm-setup.zip "),n("a",p,[e("https://github.com/coreybutler/nvm-windows/releases"),i(s)])])]),b])}const _=a(m,[["render",h],["__file","02.html.vue"]]);export{_ as default};
