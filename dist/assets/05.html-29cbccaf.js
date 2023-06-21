import{_ as i,o as e,c as n,a as l}from"./app-a58d3f97.js";const d={},s=l(`<h3 id="打包上线" tabindex="-1"><a class="header-anchor" href="#打包上线" aria-hidden="true">#</a> 打包上线</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们通过打包命令，将项目进行打包压缩，那么生成的路径是：dist/

那么大家在上线的时候一定要切记，在打包之前先把接口请求的代理地址改为线上地址
例如配置文件：vite.config.js

以下为本地配置
proxy: {
  &#39;/api&#39;: {
    target: &#39;http://www.local.com/api&#39;,
    changeOrigin:true,
    rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
  }
},


修改为线上配置 主要变化的是域名地址
proxy: {
  &#39;/api&#39;: {
    target: &#39;http://www.online.com/api&#39;,
    changeOrigin:true,
    rewrite: (path) =&gt; path.replace(/^\\/api/, &#39;&#39;)
  }
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>然后运行打包命令</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="最后传递到服务器上面-并配置服务器的反向代理" tabindex="-1"><a class="header-anchor" href="#最后传递到服务器上面-并配置服务器的反向代理" aria-hidden="true">#</a> 最后传递到服务器上面，并配置服务器的反向代理</h3><blockquote><p>Apache反向代理</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、去httpd.conf 中 开启一下两个扩展
LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so

2、在去到虚拟主机中  将&lt;VirtualHost *:80&gt;标签内部的内容放进去

&lt;VirtualHost *:80&gt;
    ProxyRequests off

    &lt;Proxy *&gt;
        Order deny,allow
        Allow from Off
    &lt;/Proxy&gt;

    ProxyPass /api http://www.onlone.com/api
&lt;/VirtualHost&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Nginx反向代理</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80; # 监听端口
    server_name  www.local.com;
    
    location / {
    	  #站点根目录，即网页文件存放的根目录, 默认主页目录在nginx安装目录的html子目录。 
        root   /Applications/MAMP/htdocs/class/local/dist;     
        
        #目录内的默认打开文件,如果没有匹配到index.html,则搜索index.htm,依次类推
        index  index.html index.htm;    
        
        #解决页面刷新404问题
        try_files $uri $uri/ /index.html;  
    }

    location /api {
        rewrite  ^.+api/?(.*)$ /$1 break;
        
        #需要代理的地址
        proxy_pass  http://www.online.com/api;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),a=[s];function r(v,c){return e(),n("div",null,a)}const u=i(d,[["render",r],["__file","05.html.vue"]]);export{u as default};
