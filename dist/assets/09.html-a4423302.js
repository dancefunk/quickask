import{_ as n,o as s,c as a,a as e}from"./app-02c5a260.js";const t="/dist/assets/images/php/git/hook.png",p={},o=e(`<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、在服务器上提前设置好公钥，步骤请去gitee官网查看
2、在服务器的web目录下先提前克隆仓库代码下来
3、并设置权限和用户组
	sudo chmod -R 777 /home/wwwroot/demo
	sudo chown -R www:www /home/wwwroot/demo
	
4、经常有人会忽略.git目录也是需要设置权限和所有组的
	cd demo
	sudo chmod -R 777 .git/
	sudo chown -R www:www .git/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="钩子文件" tabindex="-1"><a class="header-anchor" href="#钩子文件" aria-hidden="true">#</a> 钩子文件</h3><blockquote><p>在web站点根目录,新建文件夹<code>/hook/deploy.php</code></p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token doc-comment comment">/**
 * 自动更新钩子
 **/</span>

<span class="token comment">//需要修改为自己服务器上项目的路径的</span>
<span class="token variable">$local</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;/home/wwwroot/demo.com&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//webhooks中设置的密码</span>
<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//获取请求参数</span>
<span class="token variable">$request</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;php://input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;request is empty&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//验证密码是否正确</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token variable">$password</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password is error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//自己git仓库地址，加上用户名(可以用空间地址,因为用户名一般是邮箱,但是邮箱@符号会被解析)密码防止没有权限</span>
<span class="token comment">//$remote = &#39;https://用户名:密码@gitee.com/xxxxxxx/xxxx.git&#39;;</span>
<span class="token variable">$remote</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;https://用户名:密码@gitee.com/xxxxxxx/demo.git&#39;</span><span class="token punctuation">;</span>

<span class="token function">exec</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;cd <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span> &amp;&amp; git pull <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$remote</span><span class="token punctuation">}</span></span> 2&gt;&amp;1; chmod -R 777 <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span>; chown -R www:www <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span>;&quot;</span><span class="token punctuation">,</span> <span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$output</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">is_array</span><span class="token punctuation">(</span><span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$msg</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;error: Your local changes to the following files would be overwritten by merge&quot;</span><span class="token punctuation">;</span>

    <span class="token variable">$merge</span> <span class="token operator">=</span> <span class="token function">stripos</span><span class="token punctuation">(</span><span class="token variable">$output</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$msg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$merge</span> <span class="token operator">!==</span> <span class="token constant boolean">FALSE</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">shell_exec</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;cd <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span> &amp;&amp; git reset --hard;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token function">exec</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;cd <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span> &amp;&amp; git pull <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$remote</span><span class="token punctuation">}</span></span> 2&gt;&amp;1; chmod -R 777 <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span>; chown -R www:www <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$local</span><span class="token punctuation">}</span></span>;&quot;</span><span class="token punctuation">,</span> <span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">echo</span> <span class="token variable">$output</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$output</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
 * 以下代码可删除
 * pull遇到错误 error: Your local changes to the following files would be overwritten by merge:
 * 执行：git reset --hard 即可
 * exec 函数要开启  一般默认是禁用的  需要修改 php.ini disable_functions 保存 成功 php-fpm
 * lnmp 重启fpm  /etc/init.d/php-fpm restart
 */</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="码云部署配置" tabindex="-1"><a class="header-anchor" href="#码云部署配置" aria-hidden="true">#</a> 码云部署配置</h3><p><img src="`+t+'" alt="ajax3"></p>',7),i=[o];function l(c,u){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","09.html.vue"]]);export{d as default};
