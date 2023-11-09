import{_ as r,r as d,o as l,c,b as e,d as s,e as a,a as n}from"./app-4eb807d7.js";const t={},u=n(`<h3 id="使用-acme-sh-给-nginx-安装-let-s-encrypt-提供的免费-ssl-证书" tabindex="-1"><a class="header-anchor" href="#使用-acme-sh-给-nginx-安装-let-s-encrypt-提供的免费-ssl-证书" aria-hidden="true">#</a> 使用 acme.sh 给 Nginx 安装 Let’ s Encrypt 提供的免费 SSL 证书</h3><h2 id="安装-acme-sh" tabindex="-1"><a class="header-anchor" href="#安装-acme-sh" aria-hidden="true">#</a> 安装 acme.sh</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl https://get.acme.sh | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="然后重新载入一下-bashrc" tabindex="-1"><a class="header-anchor" href="#然后重新载入一下-bashrc" aria-hidden="true">#</a> 然后重新载入一下 .bashrc</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source ~/.bashrc 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="申请签发-ssl-证书" tabindex="-1"><a class="header-anchor" href="#申请签发-ssl-证书" aria-hidden="true">#</a> 申请签发 SSL 证书</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>acme.sh --issue -d www.your-app.com -w /home/ubuntu/www/your-app/current/public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>NOTE! 上面这段过程将会往 <strong>/home/ubuntu/www/your-app/current/public</strong> 创建一个 <strong>.well-known</strong> 的文件夹，同时 <strong>Let’ s Encrypt</strong> 将会通过你要注册的域名去访问那个文件来确定权限，它可能会去访问 <strong>http://www.your-app.com/.well-known/</strong> 这个路径。 所以你需要确保 <strong>/home/ubuntu/www/your-app/current/public</strong> 是在 Nginx 上配置成 root 目录，里面任意文件可以直接域名访问的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location ~ /\\.
{
	deny all;
}

将虚拟主机里面的上面这段配置删掉或注释掉或在这段配置前面加上下面的配置：

location ~ /.well-known {
allow all;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果成功的话，你就会看到这样的结果:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Fri Dec 23 11:20:15 CST 2016] Renew: &#39;www.your-app.com&#39;
[Fri Dec 23 11:20:15 CST 2016] Single domain=&#39;www.your-app.com&#39;
[Fri Dec 23 11:20:15 CST 2016] Getting domain auth token for each domain
[Fri Dec 23 11:20:15 CST 2016] Getting webroot for domain=&#39;www.your-app.com&#39;
[Fri Dec 23 11:20:15 CST 2016] _w=&#39;/home/ubuntu/www/your-app/current/public/&#39;
[Fri Dec 23 11:20:15 CST 2016] Getting new-authz for domain=&#39;www.your-app.com&#39;
[Fri Dec 23 11:08:57 CST 2016] The new-authz request is ok.
[Fri Dec 23 11:08:57 CST 2016] Verifying:www.your-app.com
[Fri Dec 23 11:09:01 CST 2016] Success
[Fri Dec 23 11:09:01 CST 2016] Verify finished, start to sign.
[Fri Dec 23 11:09:02 CST 2016] Cert success.
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
[Fri Dec 23 11:09:02 CST 2016] Your cert is in  /home/ubuntu/.acme.sh/www.your-app.com/www.your-app.com.cer 
[Fri Dec 23 11:09:02 CST 2016] Your cert key is in  /home/ubuntu/.acme.sh/www.your-app.com/www.your-app.com.key 
[Fri Dec 23 11:09:04 CST 2016] The intermediate CA cert is in  /home/ubuntu/.acme.sh/www.your-app.com/ca.cer 
[Fri Dec 23 11:09:04 CST 2016] And the full chain certs is there:  /home/ubuntu/.acme.sh/www.your-app.com/fullchain.cer 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你的证书文件已经申请成功了，并放到了 <strong>~/.acme.sh/</strong> 目录里面。</p><h2 id="将-ssl-证书安装到网站的路径-并配置好-restart-nginx-的动作" tabindex="-1"><a class="header-anchor" href="#将-ssl-证书安装到网站的路径-并配置好-restart-nginx-的动作" aria-hidden="true">#</a> 将 SSL 证书安装到网站的路径，并配置好 restart Nginx 的动作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>acme.sh --installcert -d www.your-app.com \\
--keypath       /home/ubuntu/www/ssl/www.your-app.com.key  \\
--fullchainpath /home/ubuntu/www/ssl/www.your-app.com.key.pem \\
--reloadcmd     &quot;sudo service nginx reload&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你会看到结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Fri Dec 23 11:59:57 CST 2016] Installing key to:/home/ubuntu/www/ssl/www.your-app.com.key
[Fri Dec 23 11:59:57 CST 2016] Installing full chain to:/home/ubuntu/www/ssl/www.your-app.com.key.pem
[Fri Dec 23 11:59:57 CST 2016] Run Le_ReloadCmd: sudo service nginx force-reload
Restarting nginx: nginx.
[Fri Dec 23 11:59:58 CST 2016] Reload success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改一下-sudoer-文件-让-sudo-service-nginx-force-reload-不需要输入密码" tabindex="-1"><a class="header-anchor" href="#修改一下-sudoer-文件-让-sudo-service-nginx-force-reload-不需要输入密码" aria-hidden="true">#</a> 修改一下 sudoer 文件，让 sudo service nginx force-reload 不需要输入密码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo visudo

ubuntu  ALL=(ALL) NOPASSWD: /usr/sbin/service nginx force-reload

ubuntu 是 acme.sh 安装所用的账号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生成-dhparam-pem-文件" tabindex="-1"><a class="header-anchor" href="#生成-dhparam-pem-文件" aria-hidden="true">#</a> 生成 dhparam.pem 文件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl dhparam -out /home/ubuntu/www/ssl/dhparam.pem 2048
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修改-nginx-或虚拟主机-启用-ssl" tabindex="-1"><a class="header-anchor" href="#修改-nginx-或虚拟主机-启用-ssl" aria-hidden="true">#</a> 修改 Nginx/或虚拟主机 启用 SSL</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
  # 新增
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;
  # 兼容其他老浏览器的 ssl_ciphers 设置请访问 https://wiki.mozilla.org/Security/Server_Side_TLS

  server {
    listen 80 default_server;
    # 新增
    listen 443 ssl;
    ssl_certificate         /home/ubuntu/www/ssl/www.your-app.com.key.pem;
    ssl_certificate_key     /home/ubuntu/www/ssl/www.your-app.com.key;
    # ssl_dhparam 
    ssl_dhparam             /home/ubuntu/www/ssl/dhparam.pem;

    # 其他省略
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查 Nginx 配置是否正确后重启</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo service nginx configtest
sudo service nginx restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="验证-ssl" tabindex="-1"><a class="header-anchor" href="#验证-ssl" aria-hidden="true">#</a> 验证 SSL</h2><p>访问 ssllabs.com 输入你的域名，检查 SSL 的配置是否都正常：</p>`,26),o={href:"https://www.ssllabs.com/",target:"_blank",rel:"noopener noreferrer"},v=n(`<p>确保验证结果有 A 以上，否则根据提示调整问题</p><h2 id="后续维护" tabindex="-1"><a class="header-anchor" href="#后续维护" aria-hidden="true">#</a> 后续维护</h2><p>Let&#39;s Encrypt 的证书有效期是 90 天的，你需要定期 <strong>renew</strong> 重新申请，这部分 <strong>acme.sh</strong> 以及帮你做了，在安装的时候往 crontab 增加了一行每天执行的命令 <strong>acme.sh --cron</strong>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ crontab -l
0 0 * * * &quot;/home/ubuntu/.acme.sh&quot;/acme.sh --cron --home &quot;/home/ubuntu/.acme.sh&quot; &gt; /dev/null

下面这段你可以尝试执行一下，看看是否正确
&quot;/home/ubuntu/.acme.sh&quot;/acme.sh --cron --home &quot;/home/ubuntu/.acme.sh&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就是正常的:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Fri Dec 23 11:50:30 CST 2016] Renew: &#39;www.your-app.com&#39;
[Fri Dec 23 11:50:30 CST 2016] Skip, Next renewal time is: Tue Feb 21 03:20:54 UTC 2017
[Fri Dec 23 11:50:30 CST 2016] Add &#39;--force&#39; to force to renew.
[Fri Dec 23 11:50:30 CST 2016] Skipped www.your-app.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>acme.sh --cron</strong> 命令执行以后将会 申请新的证书 并放到相同的文件路径。由于前面执行 <strong>--installcert</strong> 的时候告知了重新 Nginx 的方法，<strong>acme.sh</strong> 也同时会在证书更新以后重启 Nginx。</p><h2 id="最后走一下-acme-sh-cron-的流程看看能否正确执行" tabindex="-1"><a class="header-anchor" href="#最后走一下-acme-sh-cron-的流程看看能否正确执行" aria-hidden="true">#</a> 最后走一下 acme.sh --cron 的流程看看能否正确执行</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>acme.sh --cron -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个过程应该会得到这样的结果，并在最后重启 Nginx (不需要输入密码)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Tue Dec 27 14:28:09 CST 2016] Renew: &#39;www.your-app.com&#39;
[Tue Dec 27 14:28:09 CST 2016] Single domain=&#39;www.your-app.com&#39;
[Tue Dec 27 14:28:09 CST 2016] Getting domain auth token for each domain
[Tue Dec 27 14:28:09 CST 2016] Getting webroot for domain=&#39;www.your-app.com&#39;
[Tue Dec 27 14:28:09 CST 2016] _w=&#39;/home/ubuntu/www/your-app/current/public/&#39;
[Tue Dec 27 14:28:09 CST 2016] Getting new-authz for domain=&#39;www.your-app.com&#39;
[Tue Dec 27 14:28:16 CST 2016] The new-authz request is ok.
[Tue Dec 27 14:28:16 CST 2016] www.your-app.com is already verified, skip.
[Tue Dec 27 14:28:16 CST 2016] www.your-app.com is already verified, skip http-01.
[Tue Dec 27 14:28:16 CST 2016] www.your-app.com is already verified, skip http-01.
[Tue Dec 27 14:28:16 CST 2016] Verify finished, start to sign.
[Tue Dec 27 14:28:19 CST 2016] Cert success.
... 省略
[Fri Dec 23 11:09:02 CST 2016] Your cert is in  /home/ubuntu/.acme.sh/www.your-app.com/www.your-app.com.cer 
[Fri Dec 23 11:09:02 CST 2016] Your cert key is in  /home/ubuntu/.acme.sh/www.your-app.com/www.your-app.com.key 
[Fri Dec 23 11:09:04 CST 2016] The intermediate CA cert is in  /home/ubuntu/.acme.sh/www.your-app.com/ca.cer 
[Fri Dec 23 11:09:04 CST 2016] And the full chain certs is there:  /home/ubuntu/.acme.sh/www.your-app.com/fullchain.cer 
[Tue Dec 27 14:28:22 CST 2016] Run Le_ReloadCmd: sudo service nginx force-reload
 * Reloading nginx nginx                                                                                                                                     [ OK ] 
[Tue Dec 27 14:28:22 CST 2016] Reload success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="还有一个步骤就是强制让虚拟主机跳转https" tabindex="-1"><a class="header-anchor" href="#还有一个步骤就是强制让虚拟主机跳转https" aria-hidden="true">#</a> 还有一个步骤就是强制让虚拟主机跳转https</h2><p>在虚拟主机里面添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server 
{  
    listen 0.0.0.0:80;  
    server_name www.dancefunk.com;
    return 301 https://$server_name$request_uri;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),m={href:"https://ruby-china.org/topics/31983",target:"_blank",rel:"noopener noreferrer"},h=n(`<h2 id="更新acme-sh" tabindex="-1"><a class="header-anchor" href="#更新acme-sh" aria-hidden="true">#</a> 更新acme.sh</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>目前由于 acme 协议和 letsencrypt CA 都在频繁的更新, 因此 acme.sh 也经常更新以保持同步.

升级 acme.sh 到最新版 :
acme.sh --upgrade

如果你不想手动升级, 可以开启自动升级:
acme.sh --upgrade --auto-upgrade

之后, acme.sh 就会自动保持更新了.

你也可以随时关闭自动更新:
acme.sh --upgrade --auto-upgrade 0

具体教程可以参考acme.sh的github
https://github.com/Neilpang/acme.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="acme-sh-删除域名" tabindex="-1"><a class="header-anchor" href="#acme-sh-删除域名" aria-hidden="true">#</a> acme.sh 删除域名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>acme.sh --remove -d xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>手动删除 /home/yxz/.acme.sh/xxx.xxx 文件夹。</p><h2 id="acme-sh的verify-error-invalid-response-from报错" tabindex="-1"><a class="header-anchor" href="#acme-sh的verify-error-invalid-response-from报错" aria-hidden="true">#</a> acme.sh的Verify error:Invalid response from报错</h2><blockquote><ul><li>打开虚拟主机配置文件 /vhost/xxxxx.conf 加入以下代码；</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location ~ /.well-known/acme-challenge/ 
<span class="token punctuation">{</span>
    default_type <span class="token string">&quot;text/plain&quot;</span><span class="token punctuation">;</span>
    root  /home/wwwroot/yoursite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
location /.well-known/acme-challenge/ 
<span class="token punctuation">{</span>
    try_files <span class="token variable">$uri</span> <span class="token operator">=</span><span class="token number">404</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># location ~ /\\.</span>
<span class="token comment"># {</span>
<span class="token comment">#     deny all;</span>
<span class="token comment"># }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>重新加载nginx的配置</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/init.d/nginx reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>重新更新证书</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--renew</span> <span class="token parameter variable">-d</span> www.yousite.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>续费证书成功</strong></p><h2 id="acme-sh申请错误的限制" tabindex="-1"><a class="header-anchor" href="#acme-sh申请错误的限制" aria-hidden="true">#</a> acme.sh申请错误的限制</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Create new order error. Le_OrderFinalize not found. {
  &quot;type&quot;: &quot;urn:ietf:params:acme:error:rateLimited&quot;,
  &quot;detail&quot;: &quot;Error creating new order :: too many failed authorizations recently: see https://letsencrypt.org/docs/rate-limits/&quot;,
  &quot;status&quot;: 429
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上面的信息代表的意思是有申请错误的限制，同一域名同一账号连续失败5次后会被暂停申请1个小时</strong><br><strong>这个就是频繁提交失败后被服务器暂停申请了，等1个小时再试就好了。</strong></p>`,16);function p(b,g){const i=d("ExternalLinkIcon");return l(),c("div",null,[u,e("p",null,[e("a",o,[s("https://www.ssllabs.com/"),a(i)])]),v,e("p",null,[e("a",m,[s("转自：使用 acme.sh 给 Nginx 安装 Let’ s Encrypt 提供的免费 SSL 证书"),a(i)])]),h])}const x=r(t,[["render",p],["__file","shiyong acme.sh gei Nginx anzhuang Let’ s Encrypt tigongdemianfei SSL zhengshu.html.vue"]]);export{x as default};
