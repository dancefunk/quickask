import{_ as e,p as i,q as n,Y as d}from"./framework-e1bed10d.js";const s={},l=d(`<h3 id="head说明" tabindex="-1"><a class="header-anchor" href="#head说明" aria-hidden="true">#</a> HEAD说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HEAD 表示当前版本

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-回退提交commit" tabindex="-1"><a class="header-anchor" href="#reset-回退提交commit" aria-hidden="true">#</a> reset(回退提交commit)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--mixed 为默认参数，回退提交，只保留工作区
--soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态
--hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>mixed 为默认参数，回退提交，只保留工作区</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>回退 所有文件 到上一个版本
git reset HEAD^  

回退 指定文件 到上一个版本
git reset HEAD^ demo.html

回退到 指定版本
git reset 提交id&lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>soft参数，回退提交，保留暂存区(add)和工作区，让仓库恢复到执行(git commit)之前的状态</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --soft HEAD^

执行完查看一下状态,可以看一下保留状态是否在暂存区
git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>hard参数，回退提交，全部区域回退，一点不保留(版本库/暂存区/工作区)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reset --hard HEAD^

注意：谨慎使用 –-hard 参数，它会删除回退点之前的所有信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="restore-回退暂存区add" tabindex="-1"><a class="header-anchor" href="#restore-回退暂存区add" aria-hidden="true">#</a> restore(回退暂存区add)</h3><blockquote><p>暂存区(add) 回退 工作区</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>回退 所有文件 从 暂存区到工作区
git restore --staged .

回退 指定文件 从 暂存区到工作区
git restore --staged index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>将工作区的文件修改撤销(内容撤销) restore/checkout 都可以</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>撤销 所有文件 的内容修改
git restore .

撤销 指定文件 的内容修改
git restore index.html

-------------------------

撤销 所有文件 的内容修改
git checkout .

撤销 指定文件 的内容修改
git checkout index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),a=[l];function r(t,v){return i(),n("div",null,a)}const u=e(s,[["render",r],["__file","04.html.vue"]]);export{u as default};
