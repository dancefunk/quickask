import{_ as e,o as i,c as s,a as n}from"./app-02c5a260.js";const t="/dist/assets/images/php/git/gitee-ssh-key.png",a="/dist/assets/images/php/git/github-key.png",d="/dist/assets/images/php/git/github-token.png",l={},r=n(`<h3 id="创建秘钥文件" tabindex="-1"><a class="header-anchor" href="#创建秘钥文件" aria-hidden="true">#</a> 创建秘钥文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &quot;你的邮箱&quot;

或者通过下面的命令可以给秘钥起不同的名字

ssh-keygen -t gitee -C &quot;你的邮箱&quot;
ssh-keygen -t github -C &quot;你的邮箱&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>填写好自己的邮箱后，然后一路回车。成功执行后，会生成秘钥文件，路径为：用户主目录
~/.ssh/id_rsa   私钥文件
~/.ssh/id_rsa.pub 公钥文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录github-gitee平台上传自己的秘钥-配置服务端" tabindex="-1"><a class="header-anchor" href="#登录github-gitee平台上传自己的秘钥-配置服务端" aria-hidden="true">#</a> 登录github/gitee平台上传自己的秘钥(配置服务端)</h3><p><img src="`+t+'" alt="gitee-ssh-key"><img src="'+a+`" alt="gitee-ssh-key"></p><h3 id="让本机电脑识别秘钥" tabindex="-1"><a class="header-anchor" href="#让本机电脑识别秘钥" aria-hidden="true">#</a> 让本机电脑识别秘钥</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-add &quot;你的 id-rsa 文件地址&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加后秘钥后验证是否关联平台成功-需要联网-gitee-github" tabindex="-1"><a class="header-anchor" href="#添加后秘钥后验证是否关联平台成功-需要联网-gitee-github" aria-hidden="true">#</a> 添加后秘钥后验证是否关联平台成功-需要联网(gitee/github)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>验证github平台是否
ssh -T git@github.com
Hi xxxxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.


ssh -T git@gitee.com
Hi xxxxx! You&#39;ve successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="github平台将密码换成了token" tabindex="-1"><a class="header-anchor" href="#github平台将密码换成了token" aria-hidden="true">#</a> Github平台将密码换成了token</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git push origin master

remote: Support for password authentication was removed on August 13, 2021.
Please use a personal access token instead.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>github平台认为，用户在更新(pull) 或者是 推送(push) 代码的时候 使用 用户密码是一种不安全的方式，
然后特意将验证机制改为了token秘钥方式来验证
我们看一下如何生成 token


github登录 -&gt; 右上角菜单 -&gt; settings -&gt; Developer settings -&gt; Personal access tokens

然后选择 Generate new token 生成新token

最后生成的 token 要自己保存好，因为他只显示一次

最后就可以在 pull /  push 操作的时候用 token 代替密码了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="github-key"></p>',13),u=[r];function c(v,o){return i(),s("div",null,u)}const g=e(l,[["render",c],["__file","13.html.vue"]]);export{g as default};
