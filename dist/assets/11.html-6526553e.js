import{_ as s,r as d,o as l,c as t,b as e,d as i,e as n,a as r}from"./app-d50584af.js";const v="/dist/assets/images/php/git/flow.png",c="/dist/assets/images/php/git/devlop.png",u="/dist/assets/images/php/git/feature.png",o="/dist/assets/images/php/git/release.png",m="/dist/assets/images/php/git/hotfix.png",h={},b=e("h3",{id:"转载支持原创",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#转载支持原创","aria-hidden":"true"},"#"),i(" 转载支持原创")],-1),g={href:"https://www.jianshu.com/p/36292d36e41d",target:"_blank",rel:"noopener noreferrer"},p={href:"https://timegoesby.top/Git-Flow/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://juejin.cn/post/6981033629837164581#heading-12",target:"_blank",rel:"noopener noreferrer"},f=r('<p><img src="'+v+`" alt="flow"></p><h3 id="常用分支" tabindex="-1"><a class="header-anchor" href="#常用分支" aria-hidden="true">#</a> 常用分支</h3><h4 id="production分支" tabindex="-1"><a class="header-anchor" href="#production分支" aria-hidden="true">#</a> Production分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>也就是我们经常使用的Master分支，这个分支是生产环境的代码。
这个分支只能从其他分支合并，不能在这个分支直接修改。

Master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="develop分支" tabindex="-1"><a class="header-anchor" href="#develop分支" aria-hidden="true">#</a> Develop分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这个分支是我们是我们的主开发分支，主要合并其他分支，比如Feature分支
Develop -&gt; Master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="feature分支" tabindex="-1"><a class="header-anchor" href="#feature分支" aria-hidden="true">#</a> Feature分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这个分支主要是用来开发一个新的功能，一旦开发完成，我们将会合并回Develop分支
Feature -&gt; Develop -&gt; Master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="release分支" tabindex="-1"><a class="header-anchor" href="#release分支" aria-hidden="true">#</a> Release分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当你需要发布一个新Release的时候，我们基于Develop分支创建一个Release分支，
完成Release后，会合并到Master和Develop分支

Develop == Release
Release -&gt; Master
Release -&gt; Develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hotfix分支" tabindex="-1"><a class="header-anchor" href="#hotfix分支" aria-hidden="true">#</a> Hotfix分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支
所以Hotfix的改动会进入下一个Release

Hotfix -&gt; Master
Hotfix -&gt; Develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何使用这些分支" tabindex="-1"><a class="header-anchor" href="#如何使用这些分支" aria-hidden="true">#</a> 如何使用这些分支</h3><h4 id="master-devlop分支" tabindex="-1"><a class="header-anchor" href="#master-devlop分支" aria-hidden="true">#</a> Master/Devlop分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>所有在Master分支上的Commit应该打上Tag，一般情况下Master不存在Commit，Devlop分支基于Master分支创建
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+`" alt="flow"></p><h4 id="feature分支-1" tabindex="-1"><a class="header-anchor" href="#feature分支-1" aria-hidden="true">#</a> Feature分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，毕竟保留下来意义也不大
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+`" alt="flow"></p><h4 id="release分支-1" tabindex="-1"><a class="header-anchor" href="#release分支-1" aria-hidden="true">#</a> Release分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Release分支基于Develop分支创建，创建Release分支之后，我们可以在这个Release分支上测试，修改Bug等。
发布Release分支时，合并Release到Master和Develop分支上
同时在Master分支上打个Tag记住Release版本号，然后就可以删除Release分支了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="flow"></p><h4 id="hotfix分支-1" tabindex="-1"><a class="header-anchor" href="#hotfix分支-1" aria-hidden="true">#</a> Hotfix分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+`" alt="flow"></p><h3 id="安装git-flow" tabindex="-1"><a class="header-anchor" href="#安装git-flow" aria-hidden="true">#</a> 安装git-flow</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows (Cygwin): 安装 git-flow, 你需要 wget 和 util-linux
wget -q -O - --no-check-certificate https://github.com/nvie/gitflow/raw/develop/contrib/gitflow-installer.sh | bash

Linux
apt-get install git-flow

mac Homebrew
brew install git-flow-avh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入项目文件夹(.git所在到文件夹)下，输入如下命令
git flow init

接下来设置每个分支的名字，一般不需要更改，按默认的全程回车就好

创建完之后可以查看一下当前的分支
git branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开发新功能-feature分支" tabindex="-1"><a class="header-anchor" href="#开发新功能-feature分支" aria-hidden="true">#</a> 开发新功能(feature分支)</h3><p>需求：新建一个 demo.html 并添加内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git flow feature start 分支名
git flow feature finish 分支名

在feature下面创建demo分支 做新功能
git flow feature start demo

查看状态，看一下是否有切换分支
git status

然后新建demo.html文件,添加并提交
git add .
git commit -m &quot;create demo.html&quot;


完成feature下面的demo分支 完成新功能
git flow feature finish demo

这个命令会将该feature下的demo分支合并到develop，并自动删除demo分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布-release分支" tabindex="-1"><a class="header-anchor" href="#发布-release分支" aria-hidden="true">#</a> 发布(release分支)</h3><p>需求：新建一个 release.html 并添加内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git flow release start 版本号
git flow release finish 版本号

当在某个阶段，我们的feature都已经完善，并且通过了测试，我们可以将该develop分支进行发布（release）
git flow release start 1.0

查看状态，看一下是否有切换分支
git status

然后新建release.html文件,添加并提交
git add .
git commit -m &quot;create release.html&quot;


发布新版本
git flow release finish 1.0

该命令会触发如下几个操作
	Git-Flow从远程仓库fetch数据以确保本地的数据是最新的
	内容被合并到 master 和 develop 
	发布分支被删除，回到develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新远程分支" tabindex="-1"><a class="header-anchor" href="#更新远程分支" aria-hidden="true">#</a> 更新远程分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin master
git push origin develop
git push --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修复bug-hotfix分支" tabindex="-1"><a class="header-anchor" href="#修复bug-hotfix分支" aria-hidden="true">#</a> 修复bug(Hotfix分支)</h3><p>git flow基于master分支，用于紧急修复，修改完成后合并到master，develop分支</p><p>需求：新建一个 bug.html 并添加内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git flow hotfix start 分支名
git flow hotfix finish 分支名

创建修补分支
git flow hotfix start bug

查看状态，看一下是否有切换分支
git status

然后新建bug.html文件,添加并提交
git add .
git commit -m &quot;create bug.html&quot;


完成修复程序
git flow hotfix finish bug

该命令和完成发布非常相似，会进行如下操作：
	该修改会同时合并到develop和master（以确保错误不会再次进入下一个版本）
	分支被删除，并在此进入develop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function w(_,M){const a=d("ExternalLinkIcon");return l(),t("div",null,[b,e("ul",null,[e("li",null,[e("a",g,[i("https://www.jianshu.com/p/36292d36e41d"),n(a)])]),e("li",null,[e("a",p,[i("https://timegoesby.top/Git-Flow/"),n(a)])]),e("li",null,[e("a",x,[i("https://juejin.cn/post/6981033629837164581#heading-12"),n(a)])])]),f])}const R=s(h,[["render",w],["__file","11.html.vue"]]);export{R as default};
