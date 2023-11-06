import{_ as e,r as i,o as l,c as p,b as s,d as n,e as t,a as c}from"./app-6325e707.js";const r={},o=s("h3",{id:"参考链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),n(" 参考链接")],-1),d={href:"https://vic.kim/2021/04/25/Mac%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F%E9%85%8D%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"},v=c(`<h3 id="mac环境变量配置" tabindex="-1"><a class="header-anchor" href="#mac环境变量配置" aria-hidden="true">#</a> Mac环境变量配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Mac一般使用bash作为默认shell，如果安装了oh my sh，则默认使用zshshell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="环境变量的加载顺序" tabindex="-1"><a class="header-anchor" href="#环境变量的加载顺序" aria-hidden="true">#</a> 环境变量的加载顺序</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>加载顺序：先加载系统级别的配置，在加载用户级的环境变量

系统级别的环境配置文件
/etc/profile
/etc/paths


bash环境的配置文件
~/.bashrc
~/.bash_profile
~/.profile


zsh环境的配置文件
.zshrc
.zprofile


.zprofile 的作用与 .bash_profile 相同，并且在登录时运行
.zshrc 的作用与 .bashrc 相同，并针对每个新的“终端”会话运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="我用的是zsh可以看下面两个文件" tabindex="-1"><a class="header-anchor" href="#我用的是zsh可以看下面两个文件" aria-hidden="true">#</a> 我用的是zsh可以看下面两个文件</h3><h3 id="zshrc" tabindex="-1"><a class="header-anchor" href="#zshrc" aria-hidden="true">#</a> .zshrc</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>这个文件前面那些内容不需要动，直接在最下方添加以下内容

<span class="token comment">#----------------------FunkyRicky-----------------------#</span>
<span class="token builtin class-name">source</span> ~/.zprofile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zprofile" tabindex="-1"><a class="header-anchor" href="#zprofile" aria-hidden="true">#</a> .zprofile</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加载手动修改的命令行配置文件</span>
emulate <span class="token function">sh</span>
emulate <span class="token function">zsh</span>

<span class="token comment"># 自定义命令</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ll</span><span class="token operator">=</span><span class="token string">&#39;ls -l&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tailf</span><span class="token operator">=</span><span class="token string">&#39;tail -f&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token punctuation">..</span><span class="token operator">=</span><span class="token string">&#39;cd ..&#39;</span>

<span class="token comment">#加载homebrew全局目录环境变量</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>/usr/local/bin/brew shellenv<span class="token variable">)</span></span>&quot;</span>

<span class="token comment">#rabbitmq消息队列图像管理工具 这个还没安装</span>
<span class="token comment"># export RABBIT_HOME=/usr/local/Cellar/rabbitmq/3.9.13</span>
<span class="token comment"># export PATH=$PATH:$RABBIT_HOME/sbin</span>

<span class="token comment">#php命令行版本</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/Applications/MAMP/bin/php/php7.4.33/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">alias</span> php-config<span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/php-config&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">phpdbg</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/phpdbg&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">phpize</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/phpize&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">pear</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/pear&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">peardev</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/peardev&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">pecl</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/pecl&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">composer</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/composer&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">php</span><span class="token operator">=</span><span class="token string">&#39;/Applications/MAMP/bin/php/php7.4.33/bin/php -c &quot;/Library/Application Support/appsolute/MAMP PRO/conf/php7.4.33.ini&quot;&#39;</span>

<span class="token comment">#pyenv python多版本管理</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">PYENV_ROOT</span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$HOME</span>/.pyenv&quot;</span>
<span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> pyenv <span class="token operator">&gt;</span>/dev/null <span class="token operator">||</span> <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$PYENV_ROOT</span>/bin:<span class="token environment constant">$PATH</span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>pyenv init <span class="token parameter variable">--path</span><span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function b(u,m){const a=i("ExternalLinkIcon");return l(),p("div",null,[o,s("p",null,[s("strong",null,[s("a",d,[n("Mac环境变量配置"),t(a)])])]),v])}const k=e(r,[["render",b],["__file","Machuanjingbianliangpeizhi.html.vue"]]);export{k as default};
