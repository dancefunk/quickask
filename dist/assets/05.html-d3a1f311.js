import{_ as n,o as s,c as a,a as e}from"./app-88c1fa71.js";const t={},p=e(`<h3 id="打包上线" tabindex="-1"><a class="header-anchor" href="#打包上线" aria-hidden="true">#</a> 打包上线</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>我们通过打包命令，将项目进行打包压缩，那么生成的路径是：dist<span class="token operator">/</span>

那么大家在上线的时候一定要切记，在打包之前先把接口请求的代理地址改为线上地址
例如配置文件：vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js

以下为本地配置
<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://www.local.com/api&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>


修改为线上配置 主要变化的是域名地址
<span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://www.online.com/api&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后运行打包命令</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="最后传递到服务器上面-并配置服务器的反向代理" tabindex="-1"><a class="header-anchor" href="#最后传递到服务器上面-并配置服务器的反向代理" aria-hidden="true">#</a> 最后传递到服务器上面，并配置服务器的反向代理</h3><blockquote><p>Apache反向代理</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>1、去httpd.conf 中 开启一下两个扩展
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so

2、在去到虚拟主机中  将<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualHost</span> <span class="token attr-name"><span class="token namespace">*:</span>80</span><span class="token punctuation">&gt;</span></span>标签内部的内容放进去

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualHost</span> <span class="token attr-name"><span class="token namespace">*:</span>80</span><span class="token punctuation">&gt;</span></span>
    ProxyRequests off

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Proxy</span> <span class="token attr-name">*</span><span class="token punctuation">&gt;</span></span>
        Order deny,allow
        Allow from Off
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Proxy</span><span class="token punctuation">&gt;</span></span>

    ProxyPass /api http://www.onlone.com/api
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Nginx反向代理</p></blockquote><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span> <span class="token comment"># 监听端口</span>
    <span class="token directive"><span class="token keyword">server_name</span>  www.local.com</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    	  <span class="token comment">#站点根目录，即网页文件存放的根目录, 默认主页目录在nginx安装目录的html子目录。 </span>
        <span class="token directive"><span class="token keyword">root</span>   /Applications/MAMP/htdocs/class/local/dist</span><span class="token punctuation">;</span>     
        
        <span class="token comment">#目录内的默认打开文件,如果没有匹配到index.html,则搜索index.htm,依次类推</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>    
        
        <span class="token comment">#解决页面刷新404问题</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">rewrite</span>  ^.+api/?(.*)$ /<span class="token variable">$1</span> break</span><span class="token punctuation">;</span>
        
        <span class="token comment">#需要代理的地址</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span>  http://www.online.com/api</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[p];function l(o,c){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","05.html.vue"]]);export{d as default};
