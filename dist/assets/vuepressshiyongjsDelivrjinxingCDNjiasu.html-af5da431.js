import{_ as i,r as t,o as l,c,b as n,d as s,e,a as d}from"./app-4eb807d7.js";const r="/dist/assets/images/article/2021/github1.png",p="/dist/assets/images/article/2021/github2.png",o="/dist/assets/images/article/2021/github3.png",u="/dist/assets/images/article/2021/github4.png",v={},m=n("h2",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),s(" 参考链接")],-1),b={href:"https://jwchan.cn/_posts/other/vuepress_gh-pages_cdn.html#%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/weixin_42886104/article/details/106454331",target:"_blank",rel:"noopener noreferrer"},h={href:"https://bili33.top/2020/02/08/jsDelivr-Usage/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.juanertu.com/archives/cbcd1946",target:"_blank",rel:"noopener noreferrer"},x=d(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vuepress作为搭建个人博客为主，如果提升访问速度，需要用到github提供的jsDelivr免费CDN服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="github配置要求" tabindex="-1"><a class="header-anchor" href="#github配置要求" aria-hidden="true">#</a> Github配置要求</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先将自己的github账号添加公钥，以防后面操作的时候无权限，可以省略重复输入账号密码
2、在github上面创建一个公共权限的仓库
3、利用SSH的克隆方式去下载项目，因为https的克隆方式有文件大小的限制
4、将新项目克隆到指定目录。该目录与下文关联，我用的vuepress 所以我放的目录是：
	/quickask/public/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webpack配置" tabindex="-1"><a class="header-anchor" href="#webpack配置" aria-hidden="true">#</a> Webpack配置</h2><blockquote><p>根据webpack配置，判断编译环境是线上还是线下，根据不同环境做出不同处理</p></blockquote><h5 id="在package-json中重新修改编译命令-在编译命令后面增加自定义参数区分线上还是线下" tabindex="-1"><a class="header-anchor" href="#在package-json中重新修改编译命令-在编译命令后面增加自定义参数区分线上还是线下" aria-hidden="true">#</a> 在<code>package.json</code>中重新修改编译命令,在编译命令后面增加自定义参数区分线上还是线下</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs online&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;local&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs local&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="找到config-js配置文件的configurewebpack配置" tabindex="-1"><a class="header-anchor" href="#找到config-js配置文件的configurewebpack配置" aria-hidden="true">#</a> 找到<code>config.js</code>配置文件的<code>configureWebpack</code>配置</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
    
    <span class="token comment">//编译输出目录</span>
    <span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;public/dist/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">//githubcdn 提高访问速度</span>
    <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token constant">NODE_ENV</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>

        <span class="token comment">//获取命令行参数 判断是否为编译本地版本 还是线上版本 dancefunk</span>
        <span class="token comment">//online线上 local本地 在package.json中有写 vuepress build docs online</span>
        <span class="token keyword">var</span> arguments <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">var</span> type <span class="token operator">=</span> arguments<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">?</span> arguments<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>

        <span class="token comment">//判断是否是生产环境</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> type <span class="token operator">===</span> <span class="token string">&#39;online&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">//@1.0为github仓库上面的新建的标签版本号，因为push后不会刷新cdn缓存文件，</span>
                    <span class="token comment">//所以最好是每次更新后用一个新的标签版本号。可以来回两个标签版本号互换</span>
                    <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;https://cdn.jsdelivr.net/gh/dancefunk/quickask@1.0/dist/&#39;</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">//配置路径别名</span>
                    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&#39;public&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./public/dist/assets&#39;</span><span class="token punctuation">)</span> 
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token comment">//配置路径别名</span>
                    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token string-property property">&#39;public&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./public/dist/assets&#39;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改所有文档中用到静态文件的路径" tabindex="-1"><a class="header-anchor" href="#修改所有文档中用到静态文件的路径" aria-hidden="true">#</a> 修改所有文档中用到静态文件的路径</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改前
![demo](/dist/assets/images/html5/javascript/demo.png)


修改后
![demo](/dist/assets/images/html5/javascript/demo.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态文件所存放的目录结构" tabindex="-1"><a class="header-anchor" href="#静态文件所存放的目录结构" aria-hidden="true">#</a> 静态文件所存放的目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这个目录就放静态的图片，或者其他类型文件就可以了
/quickask/docs/.vuepress/public/dist/assets

/dist
	/assets
		/images
		/icons
		
之所以多加一层dist 原因是因为 每次编译 程序会自动清空 dist文件夹 所以我们把.git/ 仓库放在dist目录外
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据以上配置在运行编译命令得到不同的编译结果为" tabindex="-1"><a class="header-anchor" href="#根据以上配置在运行编译命令得到不同的编译结果为" aria-hidden="true">#</a> 根据以上配置在运行编译命令得到不同的编译结果为</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>线上访问的静态资源路径是：
https://cdn.jsdelivr.net/gh/dancefunk/quickask@1.0/dist/assets/js/app.js

线下访问的静态资源路径是：
/dist/assets/js/app.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟主机的配置" tabindex="-1"><a class="header-anchor" href="#虚拟主机的配置" aria-hidden="true">#</a> 虚拟主机的配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>需要将虚拟主机指向的目录设置为：/quickask/public/dist/

线上和线下都是如此
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将编译好的资源提交到github上面去" tabindex="-1"><a class="header-anchor" href="#将编译好的资源提交到github上面去" aria-hidden="true">#</a> 将编译好的资源提交到github上面去</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /quickask/public

git pull  

git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="再回到自己的服务器上面将该静态项目检出和更新" tabindex="-1"><a class="header-anchor" href="#再回到自己的服务器上面将该静态项目检出和更新" aria-hidden="true">#</a> 再回到自己的服务器上面将该静态项目检出和更新</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /home/wwwroot/quickask/

git pull

cd ../

sudo chmod -R 777 quickask/

sudo chown -R www:www quickask/

线上的目录结构是
/quickask/
	/ssl
	/dist/
	/.git/
	/.gitignore
	
ssl/ 是https证书文件目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitignore忽略文件结构-静态目录的" tabindex="-1"><a class="header-anchor" href="#gitignore忽略文件结构-静态目录的" aria-hidden="true">#</a> .gitignore忽略文件结构(静态目录的)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssl/*
*/.DS_Store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决jsdelivr缓存问题" tabindex="-1"><a class="header-anchor" href="#解决jsdelivr缓存问题" aria-hidden="true">#</a> 解决jsDelivr缓存问题</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>每次改过代码后，重新编译build 线上版本并git push到github的时候.
CDN缓存并不会刷新最新的提交文件，所以这个时候我们最好提前在编译的时候先设置好 标签版本号例如

第一次可以设置为1.0版本标签
https://cdn.jsdelivr.net/gh/dancefunk/quickask@1.0/dist/

第二次可以是这是为2.0版本标签
https://cdn.jsdelivr.net/gh/dancefunk/quickask@2.0/dist/

第三次可以设置为1.0版本标签  两个版本号可以互换
https://cdn.jsdelivr.net/gh/dancefunk/quickask@1.0/dist/

反正先要将所有的标签清空。然后先编译好，提交到github上面，然后在设置标签版本号

url地址结构
https://cdn.jsdelivr.net/gh/&lt;username&gt;/&lt;repo-name&gt;@&lt;version&gt;/&lt;path&gt;

&lt;username&gt;就改成自己的名字，
&lt;repo-name&gt;改成自己的仓库名字，
&lt;version&gt;就是你的release版本，如果不填会自动选择最新的release&lt;path&gt;改成自己的文件路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+'" alt="github"></p><p><img src="'+p+'" alt="github"></p><p><img src="'+o+'" alt="github"></p><p><img src="'+u+'" alt="github"></p>',30);function _(f,j){const a=t("ExternalLinkIcon");return l(),c("div",null,[m,n("ul",null,[n("li",null,[n("a",b,[s("Vuepress 使用 CDN 优化 gh-pages 加载速度"),e(a)])]),n("li",null,[n("a",k,[s("解决git clone 速度慢的问题"),e(a)])]),n("li",null,[n("a",h,[s("jsDelivr配置CDN"),e(a)])]),n("li",null,[n("a",g,[s("解决jsdelivr缓存问题的几个办法"),e(a)])])]),x])}const q=i(v,[["render",_],["__file","vuepressshiyongjsDelivrjinxingCDNjiasu.html.vue"]]);export{q as default};
