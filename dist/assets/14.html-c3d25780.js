import{_ as e,p as i,q as s,Y as d}from"./framework-e1bed10d.js";const a="/assets/gitpull-a17e3d45.png",n={},l=d('<h3 id="前提条件-请看上一章节" tabindex="-1"><a class="header-anchor" href="#前提条件-请看上一章节" aria-hidden="true">#</a> 前提条件-请看上一章节</h3><blockquote><ul><li>已经在<code>gihub</code>上面添加好<code>SSH-KEY</code>验证了</li></ul></blockquote><h3 id="git-pull的时候-报错信息" tabindex="-1"><a class="header-anchor" href="#git-pull的时候-报错信息" aria-hidden="true">#</a> git pull的时候，报错信息</h3><p><strong>解决git@github.com.Permission denied (publickey)</strong></p><p><img src="'+a+`" alt="gitpull"></p><h3 id="先验证一下key是否有效" tabindex="-1"><a class="header-anchor" href="#先验证一下key是否有效" aria-hidden="true">#</a> 先验证一下Key是否有效</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ssh -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如果是下面的结果说明验证失败" tabindex="-1"><a class="header-anchor" href="#如果是下面的结果说明验证失败" aria-hidden="true">#</a> 如果是下面的结果说明验证失败</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>No more authentication methods to try.  
Permission denied (publickey).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="然后执行命令" tabindex="-1"><a class="header-anchor" href="#然后执行命令" aria-hidden="true">#</a> 然后执行命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ssh-agent -s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="接着在执行" tabindex="-1"><a class="header-anchor" href="#接着在执行" aria-hidden="true">#</a> 接着在执行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ssh-add ~/.ssh/id_rsa

这条命令需要注意一下，请确保自己要添加的KEY 是不是这个文件,以我的为例，因为我有：
gitee的KEY 和 github的KEY，先去看看目录里面有的key文件

cd ~/.ssh/

id_rsa
id_rsa.pub
github_rsa
github_rsa.pub

因为 我要添加的是github的KEY文件 所以我执行的命令是：

sudo ssh-add ~/.ssh/github_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="是否添加key成功" tabindex="-1"><a class="header-anchor" href="#是否添加key成功" aria-hidden="true">#</a> 是否添加KEY成功</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Identity added: ...这是ssh key文件路径的信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="最后再验证一下key" tabindex="-1"><a class="header-anchor" href="#最后再验证一下key" aria-hidden="true">#</a> 最后再验证一下KEY</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo ssh -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh -T git@github.com
Hi xxxxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git配置多个ssh-key" tabindex="-1"><a class="header-anchor" href="#git配置多个ssh-key" aria-hidden="true">#</a> Git配置多个SSH-KEY</h3><blockquote><ul><li>在 <code>~/.ssh/</code> 目录下新建一个<code>config</code>文件，添加如下内容（其中<code>Host</code>和<code>HostName</code>填写<code>git</code>服务器的域名，<code>IdentityFile</code>指定私钥的路径）</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># gitee</span>
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa


<span class="token comment"># github</span>
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bad-owner-or-permissions-on-ssh-config的解决" tabindex="-1"><a class="header-anchor" href="#bad-owner-or-permissions-on-ssh-config的解决" aria-hidden="true">#</a> Bad owner or permissions on .ssh/config的解决</h3><blockquote><ul><li>这个时候，只需要在<code>.ssh</code>目录，执行以下命令行：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo chmod 600 config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24),t=[l];function r(c,u){return i(),s("div",null,t)}const h=e(n,[["render",r],["__file","14.html.vue"]]);export{h as default};
