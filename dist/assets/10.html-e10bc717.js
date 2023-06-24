import{_ as i,o as n,c as e,a as s}from"./app-6568e73a.js";const l={},d=s(`<h3 id="nginx虚拟主机配置" tabindex="-1"><a class="header-anchor" href="#nginx虚拟主机配置" aria-hidden="true">#</a> Nginx虚拟主机配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server
    {
        listen 80;
        #listen [::]:80;
        server_name aoma.dancefunk.com ;
        index index.html index.htm index.php default.html default.htm default.php;
        root  /home/website/public;

        include none.conf;
        #error_page   404   /404.html;

        # Deny access to PHP files in specific directory
        #location ~ /(wp-content|uploads|wp-includes|images)/.*\\.php$ { deny all; }

        location / {
        # 默认请求的文件排序
            index  index.html index.htm index.php;
            # 判断请求的文件是否存在
            #try_files  $uri  /index.php$uri;
            try_files  $uri  /index.php$uri;
            if (!-e $request_filename) {
                # rewrite ^/index.php(.*)$ /index.php?s=$1 last;
                rewrite ^(.*)$ /index.php?s=$1 last;
                break;
            }  

        }

        location ~ .+\\.php($|/) {
            #fastcgi_pass remote_php_ip:9000;
            fastcgi_pass unix:/tmp/php-cgi.sock;
            fastcgi_index index.php;
            fastcgi_split_path_info ^(.+\\.php)(/.*)$;
            fastcgi_param PATH_INFO $fastcgi_path_info; #add
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param  PHP_VALUE  &quot;open_basedir=/home/website/:/tmp/:/proc/&quot;;
            include fastcgi_params;
        }

        location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }

        location ~ .*\\.(js|css)?$
        {
            expires      12h;
        }

        location ~ /.well-known {
            allow all;
        }

        location ~ /\\.
        {
            deny all;
        }

        access_log  /home/website/xxxx.com.log;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),a=[d];function v(c,r){return n(),e("div",null,a)}const u=i(l,[["render",v],["__file","10.html.vue"]]);export{u as default};
