import{_ as e,p as i,q as n,Y as d}from"./framework-e1bed10d.js";const s={},l=d(`<h3 id="checkout-放弃修改" tabindex="-1"><a class="header-anchor" href="#checkout-放弃修改" aria-hidden="true">#</a> checkout(放弃修改)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>checkout放弃的是(git add .)之前还没有放到暂存区的修改

放弃工作区的 所有文件 修改
git checkout .

放弃 指定文件 的修改
git checkout -- demo.html

--------------------------------------------

两个文件 demo.html index.html 
一个文件执行了git add demo.html (暂存区)
一个没执行git add(工作区)

放弃工作区和暂存区的所有修改
git checkout -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="revert-撤销" tabindex="-1"><a class="header-anchor" href="#revert-撤销" aria-hidden="true">#</a> revert(撤销)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>撤销已提交的记录，从commit(本地仓库) -&gt; add(暂存区) -&gt; 工作区
可以撤销指定的提交内容，撤销后会生成一个新的commit提交

撤销最新一次提交
git revert HEAD

撤销指定commit(提交)
git revert d8b1768fafb72139545f2a496485afcd0601e486

如果撤销中出现冲突可以按照下方回滚------------------------------------

将文件从暂存区撤回工作区(冲突文件会跑到暂存区，所以要先撤回出来)
git restore --staged demo.html

将工作区的文件撤销修改
git restore demo.html

最后将撤销操作跳过
git revert --skip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-回退" tabindex="-1"><a class="header-anchor" href="#reset-回退" aria-hidden="true">#</a> reset(回退)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--mixed 为默认参数，回退提交，只保留工作区
--soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态
--hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--mixed 为默认参数，回退提交，只保留工作区------------------

回退 所有文件 到上一个版本
git reset HEAD^  

回退 指定文件 到上一个版本
git reset demo.html

回退到 指定版本
git reset 提交id&lt;commit&gt;


--soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态------------------
git reset --soft HEAD^

执行完查看一下状态,可以看一下保留状态是否在暂存区
git status


--hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)------------------
git reset --hard HEAD^

注意：谨慎使用 –-hard 参数，它会删除回退点之前的所有信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="head说明" tabindex="-1"><a class="header-anchor" href="#head说明" aria-hidden="true">#</a> HEAD说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HEAD 表示当前版本

HEAD^ 上一个版本

HEAD^^ 上上一个版本

HEAD^^^ 上上上一个版本

以此类推...


可以使用 ～数字表示---------------------------------


HEAD~0 表示当前版本

HEAD~1 上一个版本

HEAD^2 上上一个版本

HEAD^3 上上上一个版本

以此类推...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[l];function v(r,c){return i(),n("div",null,a)}const m=e(s,[["render",v],["__file","04.html.vue"]]);export{m as default};
