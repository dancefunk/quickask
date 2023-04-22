import{_ as s,p as n,q as a,Y as e}from"./framework-aa5c4115.js";const i={},t=e(`<h3 id="第三方部署模块" tabindex="-1"><a class="header-anchor" href="#第三方部署模块" aria-hidden="true">#</a> 第三方部署模块</h3><ul><li>pm2</li><li>forever</li></ul><h3 id="使用场合" tabindex="-1"><a class="header-anchor" href="#使用场合" aria-hidden="true">#</a> 使用场合</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>forever管理多个站点，每个站点访问量不大，不需要监控
pm2网站访问量比较大,需要完整的监控界面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pm2的主要特性" tabindex="-1"><a class="header-anchor" href="#pm2的主要特性" aria-hidden="true">#</a> PM2的主要特性</h3><ul><li>内建负载均衡（使用Node cluster 集群模块）</li><li>后台运行</li><li>0秒停机重载，我理解大概意思是维护升级的时候不需要停机.</li><li>具有Ubuntu和CentOS 的启动脚本</li><li>停止不稳定的进程（避免无限循环）</li><li>控制台检测</li><li>提供 HTTP API</li><li>远程控制和实时的接口API (Nodejs 模块,允许和PM2进程管理器交互)</li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用方法-根目录执行" tabindex="-1"><a class="header-anchor" href="#使用方法-根目录执行" aria-hidden="true">#</a> 使用方法(根目录执行)</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 start app.js 或者 pm2 start bin/www  启动node项目

pm2 list 列出由pm2管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常。

pm2 monit 监视每个node进程的CPU和内存的使用情况

pm2 logs 显示所有进程日志

pm2 stop all 停止所有进程

pm2 restart all 重启所有进程

pm2 reload all <span class="token number">0</span>秒停机重载进程 <span class="token punctuation">(</span>用于 NETWORKED 进程<span class="token punctuation">)</span>

pm2 stop <span class="token number">0</span> 停止指定的进程

pm2 restart <span class="token number">0</span> 重启指定的进程

pm2 startup 产生 init 脚本 保持进程活着

pm2 web 运行健壮的 computer API endpoint <span class="token punctuation">(</span>http://localhost:9615<span class="token punctuation">)</span>

pm2 delete <span class="token number">0</span> 杀死指定的进程

pm2 delete all 杀死全部进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动进程的方式详细" tabindex="-1"><a class="header-anchor" href="#启动进程的方式详细" aria-hidden="true">#</a> 启动进程的方式详细</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pm2 start app.js <span class="token parameter variable">-i</span> max 根据有效CPU数目启动最大进程数目

pm2 start app.js <span class="token parameter variable">-i</span> <span class="token number">3</span> 启动3个进程

pm2 start app.js <span class="token parameter variable">-x</span> 用fork模式启动 app.js 而不是使用 cluster

pm2 start app.js <span class="token parameter variable">-x</span> -- <span class="token parameter variable">-a</span> <span class="token number">23</span> 用fork模式启动 app.js 并且传递参数 <span class="token punctuation">(</span>-a <span class="token number">23</span><span class="token punctuation">)</span>

pm2 start app.js <span class="token parameter variable">--name</span> serverone 启动一个进程并把它命名为 serverone

pm2 stop serverone 停止 serverone 进程

pm2 start app.json 启动进程, 在 app.json里设置选项

pm2 start app.js <span class="token parameter variable">-i</span> max -- <span class="token parameter variable">-a</span> <span class="token number">23</span> 在--之后给 app.js 传递参数

pm2 start app.js <span class="token parameter variable">-i</span> max <span class="token parameter variable">-e</span> err.log <span class="token parameter variable">-o</span> out.log 启动 并 生成一个配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置pm2启动文件" tabindex="-1"><a class="header-anchor" href="#配置pm2启动文件" aria-hidden="true">#</a> 配置pm2启动文件</h3><blockquote><ul><li>可以通过pm2 start processes.json来启动。</li></ul></blockquote><h5 id="也可以把启动命令写在package-json里" tabindex="-1"><a class="header-anchor" href="#也可以把启动命令写在package-json里" aria-hidden="true">#</a> 也可以把启动命令写在package.json里</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./bin/xxx&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;pm2&quot;</span><span class="token operator">:</span><span class="token string">&quot;pm2 start processes.json&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="在项目根目录下添加文件processes-json" tabindex="-1"><a class="header-anchor" href="#在项目根目录下添加文件processes-json" aria-hidden="true">#</a> 在项目根目录下添加文件processes.json</h5><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;apps&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mywork&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cwd&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/srv/node-app/current&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/www&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;log_date_format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;YYYY-MM-DD HH:mm Z&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;error_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/var/log/node-app/node-app.stderr.log&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;out_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;log/node-app.stdout.log&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;pid_file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pids/node-geo-api.pid&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;instances&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token property">&quot;min_uptime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200s&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max_restarts&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max_memory_restart&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1M&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;cron_restart&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1 0 * * *&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;merge_logs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;exec_interpreter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;exec_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fork&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autorestart&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;vizion&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apps:json是结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
name:应用程序名称
cwd:应用程序所在的目录
script:应用程序的脚本路径
log_date_format:
error_file:自定义应用程序的错误日志文件
out_file:自定义应用程序日志文件
pid_file:自定义应用程序的pid文件
instances:
min_uptime:最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
max_restarts:设置应用程序异常退出重启的次数，默认15次（从0开始计数）
cron_restart:定时启动，解决重启能解决的问题
watch:是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
merge_logs:
exec_interpreter:应用程序的脚本类型，这里使用的shell，默认是nodejs
exec_mode:应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
autorestart:启用/禁用应用程序崩溃或退出时自动重启
vizion:启用/禁用vizion特性(版本控制)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),p=[t];function l(o,r){return n(),a("div",null,p)}const d=s(i,[["render",l],["__file","02.html.vue"]]);export{d as default};
