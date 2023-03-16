import{_ as e,p as a,q as i,Y as s}from"./framework-e1bed10d.js";const n={},l=s(`<h3 id="mac上使用zsh配置环境变量" tabindex="-1"><a class="header-anchor" href="#mac上使用zsh配置环境变量" aria-hidden="true">#</a> mac上使用zsh配置环境变量</h3><h3 id="mac配置环境变量的地方" tabindex="-1"><a class="header-anchor" href="#mac配置环境变量的地方" aria-hidden="true">#</a> Mac配置环境变量的地方</h3><h3 id="_1-etc-profile-建议不修改这个文件" tabindex="-1"><a class="header-anchor" href="#_1-etc-profile-建议不修改这个文件" aria-hidden="true">#</a> 1./etc/profile （建议不修改这个文件 ）</h3><p>全局（公有）配置，不管是哪个用户，登录时都会读取该文件。</p><h3 id="_2-etc-bashrc-一般在这个文件中添加系统级环境变量" tabindex="-1"><a class="header-anchor" href="#_2-etc-bashrc-一般在这个文件中添加系统级环境变量" aria-hidden="true">#</a> 2./etc/bashrc （一般在这个文件中添加系统级环境变量）</h3><p>全局（公有）配置，bash shell执行时，不管是何种方式，都会读取此文件。</p><h3 id="_3-bash-profile-一般在这个文件中添加用户级环境变量" tabindex="-1"><a class="header-anchor" href="#_3-bash-profile-一般在这个文件中添加用户级环境变量" aria-hidden="true">#</a> 3.~/.bash_profile （一般在这个文件中添加用户级环境变量）</h3><p>每个用户都可使用该文件输入专用于自己使用的shell信息,当用户登录时,该文件仅仅执行一次!</p><h3 id="那么当mac机器上安装了zsh后-bash-profile-文件中的环境变量就无法起到作用。" tabindex="-1"><a class="header-anchor" href="#那么当mac机器上安装了zsh后-bash-profile-文件中的环境变量就无法起到作用。" aria-hidden="true">#</a> 那么当mac机器上安装了zsh后 .bash_profile 文件中的环境变量就无法起到作用。</h3><p>接下来的解决方案：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1, cd ~ 
2, open .zshrc 
3, 在.zshrc文件末尾增加.bash_profile的引用： 
source ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本人的环境变量复制一份在此以免以后要用： .bash_profile:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source ~/.profile
alias dir=&#39;ls -l&#39;
alias ll=&#39;ls -l&#39;
alias tailf=&#39;tail -f&#39;
alias ..=&#39;cd ..&#39;

export PATH=&quot;/Applications/MAMP/bin/php/php5.6.30/bin:$PATH&quot;
export PATH=&quot;/Applications/MAMP/Library/bin:$PATH&quot;
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles

#export PATH=&quot;/usr/local/Cellar/python3/3.6.2/bin:\${PATH}&quot;
#alias python=&quot;/usr/local/Cellar/python3/3.6.2/bin/python3.6&quot;
#alias pip=&quot;/usr/local/Cellar/python3/3.6.2/bin/pip3.6&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r=[l];function d(c,h){return a(),i("div",null,r)}const o=e(n,[["render",d],["__file","macshangshiyongzshpeizhihuanjingbianliang.html.vue"]]);export{o as default};
