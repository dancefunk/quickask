import{_ as n,o as i,c as s,a}from"./app-1b1b276f.js";const e={},l=a(`<h3 id="mac配置环境变量的地方-每次重启命令行都会重新在环境文件" tabindex="-1"><a class="header-anchor" href="#mac配置环境变量的地方-每次重启命令行都会重新在环境文件" aria-hidden="true">#</a> Mac配置环境变量的地方，每次重启命令行都会重新在环境文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>~/.zprofile
~/.profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zprofile" tabindex="-1"><a class="header-anchor" href="#zprofile" aria-hidden="true">#</a> ~/.zprofile</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>alias dir=&#39;ls -l&#39;
alias ll=&#39;ls -l&#39;
alias tailf=&#39;tail -f&#39;
alias ..=&#39;cd ..&#39;

#加载手动修改的命令行配置文件
emulate sh
source ~/.profile
emulate zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="profile" tabindex="-1"><a class="header-anchor" href="#profile" aria-hidden="true">#</a> ~/.profile</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>#rabbitmq消息队列图像管理工具
export RABBIT_HOME=/usr/local/Cellar/rabbitmq/<span class="token number">3.9</span>.<span class="token number">13</span>
export PATH=$PATH<span class="token operator">:</span>$RABBIT_HOME/sbin
#设置默认python版本
alias python=<span class="token string">&quot;/usr/local/bin/python3&quot;</span>
alias pip=<span class="token string">&quot;/usr/local/bin/pip3&quot;</span>
#mongodb命令行
export MONGODB_HOME=/usr/local/Cellar/mongodb-community/<span class="token number">4.4</span>.<span class="token number">3</span>
export PATH=$PATH<span class="token operator">:</span>$MONGODB_HOME/bin
#php命令行版本
export PATH=<span class="token string">&quot;/Applications/MAMP/bin/php/php7.4.33/bin:/usr/local/opt/m4/bin:$PATH&quot;</span>
export PATH=<span class="token string">&quot;/Applications/MAMP/Library/bin:$PATH&quot;</span>
export PATH=<span class="token string">&quot;/Applications/MAMP/bin/php/php7.4.33/bin:$PATH&quot;</span>
alias php=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/php -c <span class="token string">&quot;/Library/Application Support/appsolute/MAMP PRO/conf/php7.4.33.ini&quot;</span>&#39;
alias composer=&#39;/Applications/MAMP/bin/php/composer&#39;
alias php-config=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/php-config&#39;
alias phpdbg=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/phpdbg&#39;
alias phpize=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/phpize&#39;
alias pear=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/pear&#39;
alias peardev=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/peardev&#39;
alias pecl=&#39;/Applications/MAMP/bin/php/php7.<span class="token number">4.33</span>/bin/pecl&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[l];function r(d,o){return i(),s("div",null,p)}const t=n(e,[["render",r],["__file","macshangshiyongzshpeizhihuanjingbianliang.html.vue"]]);export{t as default};
