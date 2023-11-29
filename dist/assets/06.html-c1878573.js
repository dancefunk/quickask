import{_ as s,r as n,o as r,c as t,b as e,d as i,e as d,a as c}from"./app-4841f850.js";const l="/dist/assets/images/php/git/git_normal.png",m="/dist/assets/images/php/git/git_merge.png",o="/dist/assets/images/php/git/git_rebase.png",u={},v=e("h3",{id:"原文转载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#原文转载","aria-hidden":"true"},"#"),i(" 原文转载")],-1),g={href:"https://www.jianshu.com/p/f23f72251abc",target:"_blank",rel:"noopener noreferrer"},b=c(`<h3 id="git-rebase-和-git-merge-的区别" tabindex="-1"><a class="header-anchor" href="#git-rebase-和-git-merge-的区别" aria-hidden="true">#</a> git rebase 和 git merge 的区别</h3><blockquote><p>共同点</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两条命令主要的用途：合并分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>区别点</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>merge
特点：自动创建一个新的commit
如果合并的时候遇到冲突，仅需要修改后重新commit
优点：记录了真实的commit情况，包括每个分支的详情
缺点：每次merge会自动产生一个merge commit

rebase
特点：会合并之前的commit历史
优点：得到更简洁的项目历史，去掉了merge commit
缺点：如果合并出现代码问题不容易定位，因为re-write了history

合并时如果出现冲突需要按照如下步骤解决
1、修改冲突部分
2、git add
3、git rebase --continue
4、如果第三步无效可以执行 git rebase --skip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用习惯" tabindex="-1"><a class="header-anchor" href="#使用习惯" aria-hidden="true">#</a> 使用习惯</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果你想要一个干净的，没有merge commit的线性历史树，那么你应该选择git rebase
如果你想保留完整的历史记录，并且想要避免重写commit history的风险，你应该选择使用git merge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正常的时间线" tabindex="-1"><a class="header-anchor" href="#正常的时间线" aria-hidden="true">#</a> 正常的时间线</h3><p><img src="`+l+`" alt="normal"></p><h3 id="merge操作" tabindex="-1"><a class="header-anchor" href="#merge操作" aria-hidden="true">#</a> merge操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout feature    切换分支
git merge master        合并分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt="merge"></p><h3 id="rebase操作" tabindex="-1"><a class="header-anchor" href="#rebase操作" aria-hidden="true">#</a> rebase操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout feature
git rebase master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="rebase"></p>',15);function h(p,x){const a=n("ExternalLinkIcon");return r(),t("div",null,[v,e("p",null,[e("a",g,[i("https://www.jianshu.com/p/f23f72251abc"),d(a)])]),b])}const f=s(u,[["render",h],["__file","06.html.vue"]]);export{f as default};
