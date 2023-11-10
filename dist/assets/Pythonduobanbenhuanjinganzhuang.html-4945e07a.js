import{_ as e,o as n,c as a,a as i}from"./app-c94bd78a.js";const s={},d=i(`<h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3><table><thead><tr><th style="text-align:left;">文件名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>~/.pyenv/</code></td><td style="text-align:left;">多python版本目录</td></tr><tr><td style="text-align:left;"><code>~/.pip/</code></td><td style="text-align:left;">pip工具配置目录</td></tr></tbody></table><h3 id="安装pyenv" tabindex="-1"><a class="header-anchor" href="#安装pyenv" aria-hidden="true">#</a> 安装pyenv</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>分为Windows系统 和 Mac系统 两种安装方式查看官方来安装
https://github.com/pyenv/pyenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mac安装方式-homebrew" tabindex="-1"><a class="header-anchor" href="#mac安装方式-homebrew" aria-hidden="true">#</a> Mac安装方式(homebrew)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install pyenv

查看是否安装成功
pyenv -v

查看所有的python版本，*指向的是当前所使用的版本，system是系统安装的python
pyenv versions 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将pyenv配置到全局环境变量中-profile" tabindex="-1"><a class="header-anchor" href="#将pyenv配置到全局环境变量中-profile" aria-hidden="true">#</a> 将pyenv配置到全局环境变量中(~./profile)</h3><blockquote><p>该配置是从上面的仓库中，复制过来的，如有更新请对照官方仓库来操作</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">PYENV_ROOT</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.pyenv&quot;</span>
<span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> pyenv <span class="token operator">&gt;</span>/dev/null <span class="token operator">||</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$PYENV_ROOT</span>/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装python" tabindex="-1"><a class="header-anchor" href="#安装python" aria-hidden="true">#</a> 安装Python</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看可安装的python版本
pyenv install --list

安装指定版本python
pyenv install 3.11.0

更新版本管理控制器
pyenv rehash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换python版本" tabindex="-1"><a class="header-anchor" href="#切换python版本" aria-hidden="true">#</a> 切换python版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>全局切换
pyenv global 3.11.0

本地目录版本切换(当前目录及其子目录生效)
pyenv local 3.11.0

激活后，在每次进入该目录时会自动切换到指定的版本。如果取消激活则使用--unset参数：
pyenv local --unset

验证是否切换成功
python -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="卸载python版本" tabindex="-1"><a class="header-anchor" href="#卸载python版本" aria-hidden="true">#</a> 卸载python版本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>卸载指定版本
pyenv uninstall 3.11.0

更新版本管理控制器
pyenv rehash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="virtualenv" tabindex="-1"><a class="header-anchor" href="#virtualenv" aria-hidden="true">#</a> virtualenv</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>假如我们有多个项目都是用3.11.0的环境，但是又不想让他们公用一个环境该怎么办？
使用virtualenv可以为某个已经安装的python版本创建一个干净的虚拟机环境
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install pyenv-virtualenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="虚拟机使用" tabindex="-1"><a class="header-anchor" href="#虚拟机使用" aria-hidden="true">#</a> 虚拟机使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>列出所有的虚拟环境
pyenv virtualenvs

创建 3.11.0 版本虚拟环境
pyenv virtualenv 3.11.0 env3110


激活指定的虚拟环境
pyenv activate env3110

退出当前虚拟环境
pyenv deactivate

删除虚拟环境，或者直接找到文件夹删除文件夹也是可以的
pyenv virtualenv-delete env3110
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="替换pip国内源" tabindex="-1"><a class="header-anchor" href="#替换pip国内源" aria-hidden="true">#</a> 替换pip国内源</h3><blockquote><p>~/.pip/pip.conf​​</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[global]
timeout = 6000
index-url = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看是否修改成功" tabindex="-1"><a class="header-anchor" href="#查看是否修改成功" aria-hidden="true">#</a> 查看是否修改成功</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pip config list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,26),l=[d];function t(r,v){return n(),a("div",null,l)}const u=e(s,[["render",t],["__file","Pythonduobanbenhuanjinganzhuang.html.vue"]]);export{u as default};
