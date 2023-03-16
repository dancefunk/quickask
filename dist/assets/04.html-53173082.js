import{_ as s,p as n,q as a,Z as t}from"./framework-823c4b5a.js";const e={},p=t(`<h3 id="dcl数据控制语言" tabindex="-1"><a class="header-anchor" href="#dcl数据控制语言" aria-hidden="true">#</a> DCL数据控制语言</h3><h3 id="用户操作" tabindex="-1"><a class="header-anchor" href="#用户操作" aria-hidden="true">#</a> 用户操作</h3><h4 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户" aria-hidden="true">#</a> 创建用户</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>命令<span class="token punctuation">:</span><span class="token constant">CREATE</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;username&#39;</span>@<span class="token string single-quoted-string">&#39;host&#39;</span> <span class="token constant">IDENTIFIED</span> <span class="token constant">BY</span> <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">;</span> 

说明<span class="token punctuation">:</span>
username <span class="token operator">-</span> 你将创建的用户名<span class="token punctuation">,</span> 

host <span class="token operator">-</span> 指定该用户在哪个主机上可以登陆<span class="token punctuation">,</span>
如果是本地用户可用localhost<span class="token punctuation">,</span> 如果想让该用户可以从任意远程主机登陆<span class="token punctuation">,</span>可以使用通配符<span class="token operator">%</span><span class="token operator">.</span> 

password <span class="token operator">-</span> 该用户的登陆密码<span class="token punctuation">,</span>密码可以为空<span class="token punctuation">,</span>如果为空则该用户可以不需要密码登陆服务器<span class="token operator">.</span> 

<span class="token constant">CREATE</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;demo&#39;</span>@<span class="token string single-quoted-string">&#39;localhost&#39;</span> <span class="token constant">IDENTIFIED</span> <span class="token constant">BY</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">;</span> 
<span class="token constant">CREATE</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;demo&#39;</span>@<span class="token string single-quoted-string">&#39;192.168.1.101_&#39;</span> <span class="token constant">IDENDIFIED</span> <span class="token constant">BY</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">;</span> 
<span class="token constant">CREATE</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;demo&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span> <span class="token constant">IDENTIFIED</span> <span class="token constant">BY</span> <span class="token string single-quoted-string">&#39;123456&#39;</span><span class="token punctuation">;</span> 
<span class="token constant">CREATE</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;demo&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span> <span class="token constant">IDENTIFIED</span> <span class="token constant">BY</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span> 
<span class="token constant">CREATE</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;demo&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改用户" tabindex="-1"><a class="header-anchor" href="#修改用户" aria-hidden="true">#</a> 修改用户</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>命令<span class="token punctuation">:</span><span class="token constant">SET</span> <span class="token constant">PASSWORD</span> <span class="token keyword">FOR</span> <span class="token string single-quoted-string">&#39;username&#39;</span>@<span class="token string single-quoted-string">&#39;host&#39;</span> <span class="token operator">=</span> <span class="token function">PASSWORD</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;newpassword&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

如果是当前登陆用户用<span class="token constant">SET</span> <span class="token constant">PASSWORD</span> <span class="token operator">=</span> <span class="token function">PASSWORD</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;newpassword&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

例子<span class="token punctuation">:</span> <span class="token constant">SET</span> <span class="token constant">PASSWORD</span> <span class="token keyword">FOR</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span> <span class="token operator">=</span> <span class="token function">PASSWORD</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

命令：<span class="token constant">RENAME</span> <span class="token constant">USER</span> test@<span class="token string single-quoted-string">&#39;localhost&#39;</span> to test1@<span class="token string single-quoted-string">&#39;localhost&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户" aria-hidden="true">#</a> 删除用户</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>命令<span class="token punctuation">:</span> <span class="token constant">DROP</span> <span class="token constant">USER</span> <span class="token string single-quoted-string">&#39;username&#39;</span>@<span class="token string single-quoted-string">&#39;host&#39;</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="授权" tabindex="-1"><a class="header-anchor" href="#授权" aria-hidden="true">#</a> 授权</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>命令<span class="token punctuation">:</span><span class="token constant">GRANT</span> privileges <span class="token constant">ON</span> databasename<span class="token operator">.</span>tablename <span class="token constant">TO</span> <span class="token string single-quoted-string">&#39;username&#39;</span>@<span class="token string single-quoted-string">&#39;host&#39;</span> 

说明<span class="token punctuation">:</span> privileges <span class="token operator">-</span> 用户的操作权限<span class="token punctuation">,</span>如<span class="token constant">SELECT</span> <span class="token punctuation">,</span> <span class="token constant">INSERT</span> <span class="token punctuation">,</span> <span class="token constant">UPDATE</span> 等<span class="token operator">.</span>
如果要授予所的权限则使用<span class="token constant">ALL</span><span class="token operator">.</span><span class="token punctuation">;</span>databasename <span class="token operator">-</span> 数据库名<span class="token punctuation">,</span>tablename<span class="token operator">-</span>表名<span class="token punctuation">,</span>
如果要授予该用户对所有数据库和表的相应操作权限则可用<span class="token operator">*</span>表示<span class="token punctuation">,</span> 如<span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span><span class="token operator">.</span> 

例子<span class="token punctuation">:</span> <span class="token constant">GRANT</span> <span class="token constant">SELECT</span><span class="token punctuation">,</span> <span class="token constant">INSERT</span> <span class="token constant">ON</span> test<span class="token operator">.</span>user <span class="token constant">TO</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span> 
<span class="token constant">GRANT</span> <span class="token constant">ALL</span> <span class="token constant">ON</span> <span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span> <span class="token constant">TO</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span> 

注意<span class="token punctuation">:</span>用以上命令授权的用户不能给其它用户授权<span class="token punctuation">,</span>如果想让该用户可以授权<span class="token punctuation">,</span>用以下命令<span class="token punctuation">:</span> 
<span class="token constant">GRANT</span> privileges <span class="token constant">ON</span> databasename<span class="token operator">.</span>tablename <span class="token constant">TO</span> <span class="token string single-quoted-string">&#39;username&#39;</span>@<span class="token string single-quoted-string">&#39;host&#39;</span> <span class="token constant">WITH</span> <span class="token constant">GRANT</span> <span class="token constant">OPTION</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销用户" tabindex="-1"><a class="header-anchor" href="#撤销用户" aria-hidden="true">#</a> 撤销用户</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>命令<span class="token punctuation">:</span> <span class="token constant">REVOKE</span> privilege <span class="token constant">ON</span> databasename<span class="token operator">.</span>tablename <span class="token constant">FROM</span> <span class="token string single-quoted-string">&#39;username&#39;</span>@<span class="token string single-quoted-string">&#39;host&#39;</span><span class="token punctuation">;</span>

说明<span class="token punctuation">:</span> privilege<span class="token punctuation">,</span> databasename<span class="token punctuation">,</span> tablename <span class="token operator">-</span> 同授权部分<span class="token operator">.</span> 

例子<span class="token punctuation">:</span> <span class="token constant">REVOKE</span> <span class="token constant">SELECT</span> <span class="token constant">ON</span> <span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span> <span class="token constant">FROM</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span> 

注意<span class="token punctuation">:</span> 假如你在给用户<span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span>授权的时候是这样的<span class="token punctuation">(</span>或类似的<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token class-name return-type">GRANT</span> <span class="token constant">SELECT</span> <span class="token constant">ON</span> test<span class="token operator">.</span>user <span class="token constant">TO</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">,</span> 则在使用
<span class="token constant">REVOKE</span> <span class="token constant">SELECT</span> <span class="token constant">ON</span> <span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span> <span class="token constant">FROM</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span>
命令并不能撤销该用户对test数据库中user表的<span class="token constant">SELECT</span> 操作<span class="token operator">.</span>
相反<span class="token punctuation">,</span>如果授权使用的是<span class="token constant">GRANT</span> <span class="token constant">SELECT</span> <span class="token constant">ON</span> <span class="token operator">*</span><span class="token operator">.</span><span class="token operator">*</span> <span class="token constant">TO</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span>
则<span class="token constant">REVOKE</span> <span class="token constant">SELECT</span> <span class="token constant">ON</span> test<span class="token operator">.</span>user <span class="token constant">FROM</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span>
命令也不能撤销该用户对test数据库中user表的Select 权限<span class="token operator">.</span> 

具体信息可以用命令<span class="token constant">SHOW</span> <span class="token constant">GRANTS</span> <span class="token keyword">FOR</span> <span class="token string single-quoted-string">&#39;pig&#39;</span>@<span class="token string single-quoted-string">&#39;%&#39;</span><span class="token punctuation">;</span> 查看<span class="token operator">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,i){return n(),a("div",null,o)}const u=s(e,[["render",c],["__file","04.html.vue"]]);export{u as default};
