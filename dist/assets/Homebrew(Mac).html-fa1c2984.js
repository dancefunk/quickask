import{_ as s,r,o as a,c as d,b as e,d as i,e as l,a as t}from"./app-3c87854f.js";const c={},u=e("h3",{id:"homebrew",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#homebrew","aria-hidden":"true"},"#"),i(" HomeBrew")],-1),v={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Homebrew 是 Linux 下套件管理工具。有点类似于一个应用中心

它的主要优势在于：
	依存于系统既有的库，减少了空间占用和冗余；
	使用 Git 进行管理和更新；
	定制容易；
	安装软件/软件包/应用都在一个目录下，方便管理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="卸载homebrew" tabindex="-1"><a class="header-anchor" href="#卸载homebrew" aria-hidden="true">#</a> 卸载homebrew</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)&quot;

下载下来 uninstall.sh 这个脚本后 使用下面的命令来运行卸载脚本程序
/bin/bash uninstall.sh --help 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局目录" tabindex="-1"><a class="header-anchor" href="#全局目录" aria-hidden="true">#</a> 全局目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>默认安装路径：/usr/local/Cellar

如需修改，则修改config中的HOMEBREW_PREFIX参数(默认为/usr/local)。
个人建议不要修改，因为凡是自己安装的软件大部分都放在这个目录下，保证安装路径统一。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>使用命令来查看homebrew的全局配置
brew config

homebrew想要修改配置一般是直接修改系统的环境变量文件就可以了，mac的是 .profile
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><blockquote><p>安装卸载软件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew --version或者brew -v   #显示brew版本信息
brew search 软件名			  #搜索软件
brew uninstall 软件名		  #卸载软件
brew remove 软件名   	   	  #移除软件
brew list  					#显示所有的已安装的软件
brew search text 			#搜索本地远程仓库的软件，已安装会显示绿色的勾
brew search /text/ 		 	#使用正则表达式搜软件
brew services list      	#查看系统通过 brew 安装的服务
brew services cleanup   	#清除已卸载无用的启动配置文件
brew services restart mysql     #重启


举例说明：
brew search mysql		#搜索mysql
brew install mysql  	#安装mysql
brew remove mysql  		#卸载mysql
brew upgrade mysql		#升级mysql
brew options mysql		#查看mysql安装选项
brew info mysql			#查看mysql相关信息
brew home mysql			#访问mysql官方网站
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>升级软件相关</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew update 				#自动升级homebrew（从github下载最新版本）
brew outdated 			#检测已经过时的软件
brew upgrade  			#升级所有已过时的软件，即列出的以过时软件
brew upgrade 软件名 		#升级指定的软件
brew pin 软件名 			#禁止指定软件升级
brew unpin 软件名 		#解锁禁止升级
brew upgrade --all 		#升级所有的软件包，包括未清理干净的旧版本的包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>清理相关</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>homebrew再升级软件时候不会清理相关的旧版本，在软件升级后我们可以使用如下命令清理

brew cleanup -n 					#列出需要清理的内容
brew cleanup 软件名 				#清理指定的软件过时包
brew cleanup 						#清理所有的过时软件
brew uninstall 软件名 			#卸载指定软件
brew uninstall 软件名 --force 	#彻底卸载指定软件，包括旧版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过brew安装的文件会自动设置环境变量，所以不用担心命令行不能启动的问题。 
比如安装好了mysql，即可运行 mysql -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="homebrew-cask" tabindex="-1"><a class="header-anchor" href="#homebrew-cask" aria-hidden="true">#</a> HomeBrew Cask!!!</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Homebrew Cask 是 Homebrew 的扩展，借助它可以方便地在 macOS 上安装图形界面程序

搜索 Cakebrew For Mac  图形管理工具，非常好用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function m(o,h){const n=r("ExternalLinkIcon");return a(),d("div",null,[u,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",v,[i("HomeBrew官网地址"),l(n)])])])]),b])}const g=s(c,[["render",m],["__file","Homebrew(Mac).html.vue"]]);export{g as default};
