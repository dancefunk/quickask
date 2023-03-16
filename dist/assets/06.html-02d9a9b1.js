import{_ as n,p as s,q as r,s as e,R as i,t,Y as d,n as c}from"./framework-e1bed10d.js";const l="/assets/git_normal-56db737c.png",m="/assets/git_merge-42e1dbbf.png",o="/assets/git_rebase-22811c88.png",u={},v=e("h3",{id:"原文转载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#原文转载","aria-hidden":"true"},"#"),i(" 原文转载")],-1),b={href:"https://www.jianshu.com/p/f23f72251abc",target:"_blank",rel:"noopener noreferrer"},g=d(`<h3 id="git-rebase-和-git-merge-的区别" tabindex="-1"><a class="header-anchor" href="#git-rebase-和-git-merge-的区别" aria-hidden="true">#</a> git rebase 和 git merge 的区别</h3><blockquote><p>共同点</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>两条命令主要的用途：合并分支
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="rebase"></p>',15);function h(p,x){const a=c("ExternalLinkIcon");return s(),r("div",null,[v,e("p",null,[e("a",b,[i("https://www.jianshu.com/p/f23f72251abc"),t(a)])]),g])}const f=n(u,[["render",h],["__file","06.html.vue"]]);export{f as default};
