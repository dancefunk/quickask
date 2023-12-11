import{_ as e,o as i,c as a,a as n}from"./app-d50584af.js";const d={},t=n(`<h3 id="git的忽略文件的语法规则" tabindex="-1"><a class="header-anchor" href="#git的忽略文件的语法规则" aria-hidden="true">#</a> Git的忽略文件的语法规则</h3><blockquote><p><strong>.gitignore</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 这是注释行，将被忽略
*.a       # 忽略所有以.a为扩展名的文件    
!lib.a    # 但是名为lib.a的文件或目录不要忽略，即使前面设置了对*.a的忽略
/TODO     # 只忽略此目录下的TODO文件，子目录中的TODO文件不忽略
build/    # 忽略所有build目录下的文件，但如果是名为build的文件则不忽略
doc/*.txt # 忽略文件如doc/notes.txt，但是文件如doc/server/arch.txt不忽略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置好之后-有个关键的步骤一定要清楚缓存提交生效" tabindex="-1"><a class="header-anchor" href="#设置好之后-有个关键的步骤一定要清楚缓存提交生效" aria-hidden="true">#</a> 设置好之后，有个关键的步骤一定要清楚缓存提交生效！！！</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rm -r --cached .
git add .
git commit -m &#39;update .gitignore&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git通过命令忽略指定文件" tabindex="-1"><a class="header-anchor" href="#git通过命令忽略指定文件" aria-hidden="true">#</a> Git通过命令忽略指定文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>忽略指定文件
git update-index --assume-unchanged ./test.txt

取消忽略指定文件
git update-index --no-assume-unchanged ./test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),s=[t];function l(r,c){return i(),a("div",null,s)}const v=e(d,[["render",l],["__file","08.html.vue"]]);export{v as default};
