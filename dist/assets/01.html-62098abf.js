import{_ as n,p as s,q as a,Y as t}from"./framework-aa5c4115.js";const p={},e=t(`<h3 id="基于nodejs的框架" tabindex="-1"><a class="header-anchor" href="#基于nodejs的框架" aria-hidden="true">#</a> 基于NodeJS的框架</h3><ul><li>Express.js</li><li>koa.js</li><li>egg.js</li><li>think.js</li></ul><h3 id="框架如何选择" tabindex="-1"><a class="header-anchor" href="#框架如何选择" aria-hidden="true">#</a> 框架如何选择</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>选择任意一款框架，都可以用来搭建我们的web应用，以上框架的性质区别不大，都是用于搭建中间件服务

我们本教程选用的是express.js，因为考虑到职场上的使用情况，express.js这块使用较多，所以选择这款框架
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本功能" tabindex="-1"><a class="header-anchor" href="#基本功能" aria-hidden="true">#</a> 基本功能</h3><ul><li>目录结构</li><li>内置对象</li><li>运行环境</li><li>配置</li><li>中间件</li><li>路由（Router）</li><li>控制器（Controller）</li><li>服务（Service）</li><li>插件</li><li>定时任务</li><li>框架扩展</li></ul><h3 id="express-js应用搭建" tabindex="-1"><a class="header-anchor" href="#express-js应用搭建" aria-hidden="true">#</a> Express.js应用搭建</h3><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>创建文件夹project
cd project/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成配置文件" tabindex="-1"><a class="header-anchor" href="#生成配置文件" aria-hidden="true">#</a> 生成配置文件</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;body-parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.19.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.1.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;express&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.17.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node-mysql-promise&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.0.7&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;open&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^7.3.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>/project
	/assets  	静态资源目录
	/config		项目配置目录
	/controller	控制器目录
	/router		路由目录
	/views			视图目录
	main.js		入口文件
	package.json		npm包配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库配置文件" tabindex="-1"><a class="header-anchor" href="#数据库配置文件" aria-hidden="true">#</a> 数据库配置文件</h3><blockquote><p>/config/database.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//数据库配置</span>
<span class="token keyword">const</span> Mysql <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;node-mysql-promise&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//链接数据库</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> Mysql<span class="token punctuation">.</span><span class="token function">createConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tablePrefix</span><span class="token operator">:</span><span class="token string">&quot;pre_&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span><span class="token string">&quot;book&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">logSql</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>  <span class="token comment">//控制台不输出sql语句</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件" aria-hidden="true">#</a> 入口文件</h3><blockquote><p>main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      open <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//系统模块</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//自己的模块</span>
<span class="token keyword">const</span> Router <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router/index&#39;</span><span class="token punctuation">)</span>


<span class="token comment">//创建一个应用</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//挂载静态资源目录</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;/assets&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//设置模板存放路径</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;/views&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//设置模板启用编译缓存</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view cache&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token comment">//设置引擎</span>
app<span class="token punctuation">.</span><span class="token function">engine</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>ejs<span class="token punctuation">.</span>__express<span class="token punctuation">)</span>

<span class="token comment">//设置模板后缀</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//挂载请求方式对象</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">extended</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//设置路由</span>
<span class="token function">Router</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span>

<span class="token comment">//启动</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">服务已启动：http://localhost:3000/</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由封装" tabindex="-1"><a class="header-anchor" href="#路由封装" aria-hidden="true">#</a> 路由封装</h3><h4 id="目录结构-1" tabindex="-1"><a class="header-anchor" href="#目录结构-1" aria-hidden="true">#</a> 目录结构</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>/router/
	index.js
	home.js
	user.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路由入口文件" tabindex="-1"><a class="header-anchor" href="#路由入口文件" aria-hidden="true">#</a> 路由入口文件</h4><blockquote><p>/router/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//引入路由</span>

<span class="token comment">//主路由</span>
<span class="token keyword">const</span> HomeRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//用户路由</span>
<span class="token keyword">const</span> UserRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>HomeRouter<span class="token punctuation">)</span>

  <span class="token comment">//设置一个前缀 并挂载路由</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> UserRouter<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="home主路由文件" tabindex="-1"><a class="header-anchor" href="#home主路由文件" aria-hidden="true">#</a> home主路由文件</h4><blockquote><p>/router/home.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>


<span class="token comment">//引入控制器</span>
<span class="token keyword">const</span> HomeCtrl <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;../controller/home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//创建路由模块</span>
<span class="token keyword">const</span> HomeRouter <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//设置路由规则</span>
HomeRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>HomeCtrl<span class="token punctuation">.</span>index<span class="token punctuation">)</span>

<span class="token comment">//设置登录get路由</span>
HomeRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>HomeCtrl<span class="token punctuation">.</span>login<span class="token punctuation">)</span>

<span class="token comment">//设置登录post路由</span>
HomeRouter<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>HomeCtrl<span class="token punctuation">.</span>loginPost<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HomeRouter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="user用户路由" tabindex="-1"><a class="header-anchor" href="#user用户路由" aria-hidden="true">#</a> user用户路由</h4><blockquote><p>/router/user.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>


<span class="token comment">//引入一个控制器文件</span>
<span class="token keyword">const</span> UserCtrl <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;../controller/user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//创建路由</span>
<span class="token keyword">const</span> UserRouter <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//设置路由的规则</span>

<span class="token comment">//以get的方式来进行访问</span>
<span class="token comment">//http://localhost:3000/user/profile</span>
UserRouter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/profile&#39;</span><span class="token punctuation">,</span>UserCtrl<span class="token punctuation">.</span>profile<span class="token punctuation">)</span>


<span class="token comment">//导出</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> UserRouter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制器封装" tabindex="-1"><a class="header-anchor" href="#控制器封装" aria-hidden="true">#</a> 控制器封装</h3><h4 id="home主控制器" tabindex="-1"><a class="header-anchor" href="#home主控制器" aria-hidden="true">#</a> home主控制器</h4><blockquote><p>/controller/home.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入数据库类</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;../config/database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">//默认首页方法</span>
<span class="token keyword">let</span> <span class="token function-variable function">index</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//从异步变成同步</span>
    <span class="token comment">// db.table(&#39;book&#39;).select().then(data =&gt; {</span>
    <span class="token comment">//     console.log(data)</span>
    <span class="token comment">// })</span>

    <span class="token comment">//查询分类</span>
    <span class="token keyword">var</span> catelist <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string">&#39;cate&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token string">&#39;id desc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

     <span class="token comment">//赋值</span>
     <span class="token keyword">const</span> assign <span class="token operator">=</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">catelist</span><span class="token operator">:</span>catelist<span class="token punctuation">,</span>
     <span class="token punctuation">}</span>

    <span class="token comment">//渲染模板</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>assign<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//登录界面</span>
<span class="token keyword">let</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//渲染模板</span>
    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">loginPost</span> <span class="token operator">=</span> <span class="token keyword">async</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//获取post表单的数据</span>
<span class="token punctuation">}</span>


<span class="token comment">//导出模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    index<span class="token punctuation">,</span>
    login<span class="token punctuation">,</span>
    loginPost
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户控制器" tabindex="-1"><a class="header-anchor" href="#用户控制器" aria-hidden="true">#</a> 用户控制器</h4><blockquote><p>/controller/user.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入数据库类</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&quot;../config/database&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">//基本资料界面</span>
<span class="token keyword">let</span> <span class="token function-variable function">profile</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

    res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&#39;user/profile&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">//导出模块</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    profile
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视图界面" tabindex="-1"><a class="header-anchor" href="#视图界面" aria-hidden="true">#</a> 视图界面</h3><blockquote><p>/views/index.html</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        &lt;%- include(&quot;../common/meta.html&quot;) %&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/css/bootstrap.min.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/js/jquery-1.9.1.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/js/bootstrap.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/js/bootstrap-paginator.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-over<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warmp<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warmp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            &lt;%- include(&quot;../common/header.html&quot;) %&gt;
            
            <span class="token comment">&lt;!-- 面包屑导航 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dh<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> &gt; 书籍列表：
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

            <span class="token comment">&lt;!-- 书籍列表 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list-index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>articlelist</span><span class="token punctuation">&gt;</span></span>
                    &lt;% for(var item of booklist){ %&gt;
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/chapter/list?bookid=&lt;%= item.id %&gt;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                            &lt;%= item.title %&gt;
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
                    &lt;% } %&gt;
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

            <span class="token comment">&lt;!-- 分页 --&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pagination<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
            

            <span class="token comment">&lt;!-- 底部 --&gt;</span>
            &lt;%- include(&quot;../common/footer.html&quot;) %&gt;
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token comment">&lt;!-- 侧滑菜单 --&gt;</span>
        &lt;%- include(&quot;../common/menu.html&quot;) %&gt;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 分页功能 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">currentPage</span><span class="token operator">:</span><span class="token string">&quot;&lt;%= page %&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">totalPages</span><span class="token operator">:</span><span class="token string">&quot;&lt;%= total %&gt;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span><span class="token string">&quot;mini&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">alignment</span><span class="token operator">:</span><span class="token string">&quot;center&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">numberOfPages</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token function-variable function">itemContainerClass</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> page<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>page <span class="token operator">===</span> current<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;active&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;pointer-cursor&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onPageClicked</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>originalEvent<span class="token punctuation">,</span>type<span class="token punctuation">,</span>page</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//alert(&quot;Page item clicked, type: &quot;+type+&quot; page: &quot;+page);</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onPageChanged</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span>oldPage<span class="token punctuation">,</span>newPage</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//alert(&quot;Current page changed, old: &quot;+oldPage+&quot; new: &quot;+newPage);</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">pageUrl</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span>page<span class="token punctuation">,</span>current</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/book/list/?cateid=&lt;%= cateid %&gt;&amp;page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.pagination&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bootstrapPaginator</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","01.html.vue"]]);export{r as default};
