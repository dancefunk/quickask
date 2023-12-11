import{_ as e,o as i,c as n,a as s}from"./app-d50584af.js";const a={},d=s(`<h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看远程版本库信息
git remote -v

添加远程版本库
git remote add &lt;remote&gt; &lt;url&gt;

删除远程版本库
git remote rm &lt;remote&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程操作需要重启安全认证" tabindex="-1"><a class="header-anchor" href="#远程操作需要重启安全认证" aria-hidden="true">#</a> 远程操作需要重启安全认证</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global http.sslVerify true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：fatal: refusing to merge unrelated histories

上述的错误是说，拉取/推送的仓库，与本地仓库没有任何关系，我们可以添加参数，强制拉取/推送
git push origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>fetch 下载操作(不合并本地仓库)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>从远程主机的master分支拉取最新内容下来，但不合并到HEAD中(下载)
git fetch origin master

将拉取下来的最新内容合并到当前所在的分支中
git merge FETCH_HEAD


注意：fatal: refusing to merge unrelated histories 报错就强制拉取
git merge FETCH_HEAD --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>pull 拉取操作(合并本地仓库)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>普通拉取
git pull origin master

强制拉取
git pull origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="推送操作" tabindex="-1"><a class="header-anchor" href="#推送操作" aria-hidden="true">#</a> 推送操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>普通推送
git push origin master

强制推送
git push origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布标签" tabindex="-1"><a class="header-anchor" href="#发布标签" aria-hidden="true">#</a> 发布标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>情景1：我在本地修改好后，发现远程分支已经被改动了，此时我本地也被改动了就造成了冲突，无法 push 或者 pull
此时，就可以用 git stash 来处理

// 把本地的改动暂存起来
git stash 

// 拉取远程分支（此时本地分支会回滚到上次commit的情况，你的改动都存在stash中）
git pull  

// 将stash中改动重新加回本地分支，就可以继续修改了，当然，如果改好了就是add,commit,push
git stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>情景2：例如忘记切换，将代码写错了分支，直接在 master 分支上做改动，这里假设我的分支是 test 分支

// 把本地当前改动暂存起来，此时master分支就恢复到了上次拉取时的状态
git stash

// 切换到需要改动的分支
git checkout test

// 将改动pop到自己当前的分支
git stash pop

顾名思义，stash 就是一个栈，平时我们把需要暂存的文件存到栈中，把代码恢复到上次拉取的状态以进行操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[d];function t(r,v){return i(),n("div",null,l)}const u=e(a,[["render",t],["__file","07.html.vue"]]);export{u as default};
