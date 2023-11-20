import{_ as n,r as d,o as l,c as a,b as e,d as t,e as r,a as s}from"./app-9f8282b6.js";const c={},u={id:"homebrew官网地址",tabindex:"-1"},o=e("a",{class:"header-anchor",href:"#homebrew官网地址","aria-hidden":"true"},"#",-1),b={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},v=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Homebrew 是 Linux 下套件管理工具。有点类似于一个应用中心

它的主要优势在于：
	依存于系统既有的库，减少了空间占用和冗余；
	使用 Git 进行管理和更新；
	定制容易；
	安装软件/软件包/应用都在一个目录下，方便管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="升级" tabindex="-1"><a class="header-anchor" href="#升级" aria-hidden="true">#</a> 升级</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)&quot;

下载下来 uninstall.sh 这个脚本后使用下面的命令来运行卸载脚本程序
/bin/bash uninstall.sh --help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局目录" tabindex="-1"><a class="header-anchor" href="#全局目录" aria-hidden="true">#</a> 全局目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认安装路径：/usr/local/Cellar

如需修改，则修改config中的HOMEBREW_PREFIX参数(默认为/usr/local)
个人建议不要修改，因为凡是自己安装的软件大部分都放在这个目录下，保证安装路径统一
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看homebrew配置
brew config

homebrew想要修改配置一般是直接修改系统的环境变量文件就可以了
比如我们关闭掉homebrew的自动更新,在.profile文件中添加以下内容：
export HOMEBREW_NO_AUTO_UPDATE=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更换国内源" tabindex="-1"><a class="header-anchor" href="#更换国内源" aria-hidden="true">#</a> 更换国内源</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>中科大 https://mirrors.ustc.edu.cn/
清华 https://mirrors.tuna.tsinghua.edu.cn/
阿里 https://developer.aliyun.com/mirror/ (这个还是不推荐了，没有home-cask源)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>下面更换的是中科大源</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>替换brew.git
cd &quot;$(brew --repo)&quot;
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

替换homebrew-core.git
cd &quot;$(brew --repo)/Library/Taps/homebrew/homebrew-core&quot;
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

替换homebrew-cask.git(这个只有安装了HomeBrew Cask才会有，没安装就没有，默认是没有，没有就不用替换)
cd &quot;$(brew --repo)/Library/Taps/homebrew/homebrew-cask&quot;
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

更新
brew update

第一次可能会慢一点（大约5分钟），不过，后面执行brew install xxx软件时就会很快了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>查看是否确认源成功</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd &quot;$(brew --repo)&quot;

git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>另一种更改镜像源的方法，这种较为简单，直接修改系统环境变量配置文件 /Users/用户名/.profile</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#homebrew 镜像源
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><table><thead><tr><th style="text-align:left;">描述</th><th style="text-align:left;">命令</th></tr></thead><tbody><tr><td style="text-align:left;">显示版本信息</td><td style="text-align:left;">brew -v</td></tr><tr><td style="text-align:left;">显示已安装的软件</td><td style="text-align:left;">brew list</td></tr><tr><td style="text-align:left;">搜索软件</td><td style="text-align:left;">brew search 软件名</td></tr><tr><td style="text-align:left;">安装软件包</td><td style="text-align:left;">brew install 软件名</td></tr><tr><td style="text-align:left;">强制卸载软件</td><td style="text-align:left;">brew uninstall 软件名 --force</td></tr><tr><td style="text-align:left;">检测已经过时的软件</td><td style="text-align:left;">brew outdated</td></tr><tr><td style="text-align:left;">升级所有软件包</td><td style="text-align:left;">brew upgrade</td></tr><tr><td style="text-align:left;">升级指定软件包</td><td style="text-align:left;">brew upgrade 软件名</td></tr><tr><td style="text-align:left;">禁止指定软件升级</td><td style="text-align:left;">brew pin 软件名</td></tr><tr><td style="text-align:left;">解锁禁止升级</td><td style="text-align:left;">brew unpin 软件名</td></tr><tr><td style="text-align:left;">清理所有的过时软件</td><td style="text-align:left;">brew cleanup</td></tr><tr><td style="text-align:left;">清除已卸载无用的启动配置文件</td><td style="text-align:left;">brew services cleanup</td></tr><tr><td style="text-align:left;">列出管理运行的服务</td><td style="text-align:left;">brew services list</td></tr><tr><td style="text-align:left;">创建软件包的软链接</td><td style="text-align:left;">brew link 软件名</td></tr><tr><td style="text-align:left;">删除软件包的软链接</td><td style="text-align:left;">brew unlink 软件名</td></tr><tr><td style="text-align:left;">列出软件包的依赖关系</td><td style="text-align:left;">brew deps 软件名</td></tr></tbody></table><h3 id="homebrew-cask" tabindex="-1"><a class="header-anchor" href="#homebrew-cask" aria-hidden="true">#</a> HomeBrew Cask!!!</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Homebrew Cask 是 Homebrew 的扩展，借助它可以方便地在 macOS 上安装图形界面程序

搜索 Cakebrew For Mac  图形管理工具，非常好用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function m(h,g){const i=d("ExternalLinkIcon");return l(),a("div",null,[e("h3",u,[o,t(),e("a",b,[t("HomeBrew官网地址"),r(i)])]),v])}const p=n(c,[["render",m],["__file","Homebrew.html.vue"]]);export{p as default};
