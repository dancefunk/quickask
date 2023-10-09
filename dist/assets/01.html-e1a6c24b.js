import{_ as l,r as t,o as d,c,b as n,d as s,e as a,a as i}from"./app-88c1fa71.js";const r={},o=n("h4",{id:"整篇教程以参考fastadmin官方为主-更多详细内容可查看官方文档-尊重版权-如有侵犯-立即删除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#整篇教程以参考fastadmin官方为主-更多详细内容可查看官方文档-尊重版权-如有侵犯-立即删除","aria-hidden":"true"},"#"),s(" 整篇教程以参考FastAdmin官方为主，更多详细内容可查看官方文档，尊重版权，如有侵犯，立即删除")],-1),u={href:"https://doc.fastadmin.net/docs",target:"_blank",rel:"noopener noreferrer"},p=i(`<h2 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>PHP &gt;= 7.1 且 &lt;= 7.3 (推荐PHP7.1版本)
Mysql &gt;= 5.6 (需支持innodb引擎)
Apache 或 Nginx
PDO PHP Extension
MBstring PHP Extension
CURL PHP Extension
Node.js (可选,用于安装Bower和LESS,同时打包压缩也需要使用到)
Composer (可选,用于管理第三方扩展包)
Bower (可选,用于管理前端资源)
Less (可选,用于编辑less文件,如果你需要增改css样式,最好安装上)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整包安装-推荐" tabindex="-1"><a class="header-anchor" href="#完整包安装-推荐" aria-hidden="true">#</a> 完整包安装(推荐)</h2>`,3),v={href:"https://www.fastadmin.net/download.html",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b=n("br",null,null,-1),h={href:"http://www.demo.com/install.php",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),f=i(`<h2 id="命令行安装" tabindex="-1"><a class="header-anchor" href="#命令行安装" aria-hidden="true">#</a> 命令行安装</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>1、克隆FastAdmin到你本地
git clone https://gitee.com/karson/fastadmin.git

2、进入目录
cd fastadmin

3、下载前端插件依赖包
bower install

4、下载PHP依赖包
composer install

5、一键创建数据库并导入数据
php think install -u 数据库用户名 -p 数据库密码

6、添加虚拟主机并绑定到项目的public目录

7、为了安全，安装完成后会在public目录生成随机后台入口，请通过随机后台入口登录管理后台
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fastadmin-nginx-虚拟主机配置" tabindex="-1"><a class="header-anchor" href="#fastadmin-nginx-虚拟主机配置" aria-hidden="true">#</a> fastadmin nginx 虚拟主机配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server
    <span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        <span class="token comment">#listen [::]:80;</span>
        server_name www.demo.com<span class="token punctuation">;</span>
        index index.html index.htm index.php default.html default.htm default.php<span class="token punctuation">;</span>
        root  /home/wwwroot/www.demo.com/public<span class="token punctuation">;</span>

        include rewrite/none.conf<span class="token punctuation">;</span>
        <span class="token comment">#error_page   404   /404.html;</span>

        <span class="token comment"># Deny access to PHP files in specific directory</span>
        <span class="token comment">#location ~ /(wp-content|uploads|wp-includes|images)/.*\\.php$ { deny all; }</span>

        location / <span class="token punctuation">{</span>
        <span class="token comment"># 默认请求的文件排序</span>
            index  index.html index.htm index.php<span class="token punctuation">;</span>
            <span class="token comment"># 判断请求的文件是否存在</span>
            <span class="token comment">#try_files  $uri  /index.php$uri;</span>
            try_files  <span class="token variable">$uri</span>  /index.php<span class="token variable">$uri</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>-e <span class="token variable">$request_filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment"># rewrite ^/index.php(.*)$ /index.php?s=$1 last;</span>
                rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /index.php?s<span class="token operator">=</span><span class="token variable">$1</span> last<span class="token punctuation">;</span>
                <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>  

        <span class="token punctuation">}</span>

        location ~ .+<span class="token punctuation">\\</span>.php<span class="token punctuation">(</span>$<span class="token operator">|</span>/<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">#fastcgi_pass remote_php_ip:9000;</span>
            fastcgi_pass unix:/tmp/php-cgi.sock<span class="token punctuation">;</span>
            fastcgi_index index.php<span class="token punctuation">;</span>
            fastcgi_split_path_info ^<span class="token punctuation">(</span>.+<span class="token punctuation">\\</span>.php<span class="token punctuation">)</span><span class="token punctuation">(</span>/.*<span class="token punctuation">)</span>$<span class="token punctuation">;</span>
            fastcgi_param PATH_INFO <span class="token variable">$fastcgi_path_info</span><span class="token punctuation">;</span> <span class="token comment">#add</span>
            fastcgi_param SCRIPT_FILENAME <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span><span class="token punctuation">;</span>
            fastcgi_param  PHP_VALUE  <span class="token string">&quot;open_basedir=/home/wwwroot/www.demo.com/:/tmp/:/proc/&quot;</span><span class="token punctuation">;</span>
            include fastcgi_params<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>gif<span class="token operator">|</span>jpg<span class="token operator">|</span>jpeg<span class="token operator">|</span>png<span class="token operator">|</span>bmp<span class="token operator">|</span>swf<span class="token punctuation">)</span>$
        <span class="token punctuation">{</span>
            expires      30d<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location ~ .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>js<span class="token operator">|</span>css<span class="token punctuation">)</span>?$
        <span class="token punctuation">{</span>
            expires      12h<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location ~ /.well-known <span class="token punctuation">{</span>
            allow all<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        location ~ /<span class="token punctuation">\\</span>.
        <span class="token punctuation">{</span>
            deny all<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        access_log  /home/wwwlogs/www.demo.com.log<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="让自己的项目与fastadmin官方源码同步更新-重要" tabindex="-1"><a class="header-anchor" href="#让自己的项目与fastadmin官方源码同步更新-重要" aria-hidden="true">#</a> 让自己的项目与FastAdmin官方源码同步更新(重要！！！)</h2>`,5),g={href:"https://www.nuomiphp.com/Article/detail/id/68.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://ask.fastadmin.net/question/1659.html",target:"_blank",rel:"noopener noreferrer"},w=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在gitee上面先创建自己的项目,然后将其clone到本地
2、在克隆下的目录里面安装fastadmin源码，安装好系统后，并先进行首次的提交到自己的仓库(commit、push两个动作都做)
3、重点了、将fastadmin官方的仓库地址，添加到本仓库内作为”远程线上地址“
	仓库名称(fastadmin)    
   	仓库地址(https://gitee.com/karson/fastadmin.git)
    git remote add fastadmin https://gitee.com/karson/fastadmin.git

   
4、查看远程仓库，看看是否有添加进去
	git remote -v
	
	fastadmin    https://gitee.com/karson/fastadmin.git (fetch)
	fastadmin    https://gitee.com/karson/fastadmin.git (push)
	origin  	https://gitee.com/dancefunk/demo.git (fetch)
	origin  	https://gitee.com/dancefunk/demo.git (push)
	
5、把远程仓库fastadmin拉下本地
	git fetch fastadmin
	
6、强制合并
	PS:这是因为git认为这是两个不相关的项目，我们得在命令后面加上参数: 
	--allow-unrelated-histories ，进行强制合并
	执行这一步之后，会报一些错误，不要紧因为版本相差悬殊会有冲突的文件，解决冲突文件就可以了
	
	git merge fastadmin/master --allow-unrelated-histories
	

7、报错的信息
	error: The following untracked working tree files would be overwritten by merge:
	        addons/.htaccess
	        public/uploads/.htaccess
	        runtime/.htaccess
	Please move or remove them before you merge.
	Aborting
	
	根据错误的信息，可以先将这几个文件移出，或者备份后在移出也可以
	
8、重新执行强制合并
	git merge fastadmin/master --allow-unrelated-histories
	
	应该就可以看到冲突文件了，因为冲突文件较多最好使用软件&quot;SourceTree&quot;图形界面来进行合并方便点
	
9、处理完冲突文件后，最后进行提交和推送到自己的origin仓库就可以了。

10、如果不确定是否是最新的可以再一次的去拉取一下fastadmin的远程仓库，
	直至更新到Already up to date，就说明是最新的了
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上面的步骤只是更新核心代码-下载的步骤也要做" tabindex="-1"><a class="header-anchor" href="#上面的步骤只是更新核心代码-下载的步骤也要做" aria-hidden="true">#</a> 上面的步骤只是更新核心代码，下载的步骤也要做</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>更新后端组件
composer update -vvv

更新前端组件
bower update

更新数据库
如果 fastadmin.sql 有更新，请根据 Git 更新日志对比修改数据库。

清空缓存 可以在项目根目录内执行，或者将 runtime 目录清空
php think clear


bower update  
bower镜像因为是国外的所有，下载的时候可能会出现 超时的问题，可以从官网下载 资源包下来 替换到 vendor目录也可以
https://www.fastadmin.net/download.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function x(P,$){const e=t("ExternalLinkIcon");return d(),c("div",null,[o,n("p",null,[n("strong",null,[n("a",u,[s("官方文档链接"),a(e)])])]),p,n("p",null,[s("1、前往官网下载页面("),n("a",v,[s("https://www.fastadmin.net/download.html"),a(e)]),s(")下载完整包解压到你的项目目录"),m,s(" 2、添加站点并绑定到项目中的public目录为运行目录"),b,s(" 3、访问"),n("a",h,[s("http://www.demo.com/install.php"),a(e)]),s("进行安装"),k,s(" 4、为了安全，安装完成后会在public目录生成随机后台入口，请通过随机后台入口登录管理后台")]),f,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",g,[s("参考链接"),a(e)])]),n("li",null,[n("a",_,[s("FastAdmin升级更新"),a(e)])])])]),w])}const A=l(r,[["render",x],["__file","01.html.vue"]]);export{A as default};
