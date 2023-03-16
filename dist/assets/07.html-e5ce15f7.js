import{_ as e,p as a,q as i,Z as d}from"./framework-823c4b5a.js";const n={},s=d(`<h3 id="查看远程版本库信息" tabindex="-1"><a class="header-anchor" href="#查看远程版本库信息" aria-hidden="true">#</a> 查看远程版本库信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看指定远程版本库信息" tabindex="-1"><a class="header-anchor" href="#查看指定远程版本库信息" aria-hidden="true">#</a> 查看指定远程版本库信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote show &lt;remote&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加远程版本库" tabindex="-1"><a class="header-anchor" href="#添加远程版本库" aria-hidden="true">#</a> 添加远程版本库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote add &lt;remote&gt; &lt;url&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除远程版本库" tabindex="-1"><a class="header-anchor" href="#删除远程版本库" aria-hidden="true">#</a> 删除远程版本库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push &lt;remote&gt; :&lt;branch&gt;

git push &lt;remote&gt; --delete &lt;branch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下载远程端版本-但不合并到head中-下载" tabindex="-1"><a class="header-anchor" href="#下载远程端版本-但不合并到head中-下载" aria-hidden="true">#</a> 下载远程端版本，但不合并到HEAD中(下载)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git fetch &lt;remote&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将远程端版本合并到本地版本中-更新-拉取" tabindex="-1"><a class="header-anchor" href="#将远程端版本合并到本地版本中-更新-拉取" aria-hidden="true">#</a> 将远程端版本合并到本地版本中(更新/拉取)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="将本地版本发布到远程端-推送" tabindex="-1"><a class="header-anchor" href="#将本地版本发布到远程端-推送" aria-hidden="true">#</a> 将本地版本发布到远程端(推送)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push remote &lt;remote&gt; &lt;branch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发布标签" tabindex="-1"><a class="header-anchor" href="#发布标签" aria-hidden="true">#</a> 发布标签</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push --tags
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),t=[s];function l(r,c){return a(),i("div",null,t)}const u=e(n,[["render",l],["__file","07.html.vue"]]);export{u as default};
