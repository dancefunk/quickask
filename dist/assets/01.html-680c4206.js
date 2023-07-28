import{_ as e,o as i,c as a,a as n}from"./app-11dfbba7.js";const s="/dist/assets/images/php/git/git.jpg",d="/dist/assets/images/php/git/command.png",t={},l=n('<h3 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程" aria-hidden="true">#</a> 工作流程</h3><p><img src="'+s+`" alt="git"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Working Directory：本地工作目录（工作区）

Stage(Index)：暂存区

Repository：仓库，仓库又分本地仓库和远程仓库

Remote：远程仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局身份设置" tabindex="-1"><a class="header-anchor" href="#全局身份设置" aria-hidden="true">#</a> 全局身份设置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global user.name &quot;Your Name&quot;
git config --global user.email &quot;Your Email&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置换行符选项" tabindex="-1"><a class="header-anchor" href="#设置换行符选项" aria-hidden="true">#</a> 设置换行符选项</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Unix/Mac
git config --global core.autocrlf input
git config --global core.safecrlf true

Windows
git config --global core.autocrlf true
git config --global core.safecrlf true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看全局配置" tabindex="-1"><a class="header-anchor" href="#查看全局配置" aria-hidden="true">#</a> 查看全局配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --list

系统全局git配置文件：.gitconfig
一般该文件会放到计算机的家目录，MAC为例的话：/用户/用户名/.gitconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><p><img src="`+d+'" alt="git"></p>',11),r=[l];function c(o,u){return i(),a("div",null,r)}const g=e(t,[["render",c],["__file","01.html.vue"]]);export{g as default};
