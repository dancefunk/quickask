import{_ as e,o as n,c as i,a as s}from"./app-1b1b276f.js";const t={},a=s(`<p><strong>1、先cd到根目录，执行git config --global credential.helper store命令</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2、执行之后会在.gitconfig文件中多加红色字体项</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[user]
        name = xxx
        email = xxxx@xxxx.com
[credential]
        helper = store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、之后cd到项目目录，执行git pull命令，会提示输入账号密码。输完这一次以后就不再需要，并且会在根目录生成一个.git-credentials文件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull

Username for &#39;https://git.oschina.net&#39;: xxxx@xxxx.com
Password for &#39;https://xxxx@xxxx.com@git.oschina.net&#39;:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat .git-credentials

https://Username:Password@git.oschina.net
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4、之后pull/push代码都不再需要输入账号密码了~</strong></p>`,8),d=[a];function l(r,c){return n(),i("div",null,d)}const x=e(t,[["render",l],["__file","10.html.vue"]]);export{x as default};
