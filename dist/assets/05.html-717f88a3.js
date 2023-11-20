import{_ as t,r as p,o,c as i,b as n,d as s,e,a as c}from"./app-9f8282b6.js";const l={},u=n("h3",{id:"友情参考",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#友情参考","aria-hidden":"true"},"#"),s(" 友情参考")],-1),r={href:"http://itrain.top/2020/07/engineering_express_mock_server/",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"mockjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mockjs","aria-hidden":"true"},"#"),s(" Mockjs")],-1),k={href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"},v=c(`<p>提供了以下模拟功能：</p><ul><li>根据数据模板生成模拟数据</li><li>模拟 Ajax 请求，生成并返回模拟数据</li><li>基于 HTML 模板生成模拟数据</li></ul><h3 id="安装nodemon" tabindex="-1"><a class="header-anchor" href="#安装nodemon" aria-hidden="true">#</a> 安装nodemon</h3><blockquote><p>开发时会经常修改开发代码并即时测试，手动重启服务器较麻烦，可安装nodemon来监视文件的变化自动编译</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i nodemon -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建工作目录" tabindex="-1"><a class="header-anchor" href="#创建工作目录" aria-hidden="true">#</a> 创建工作目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir mock-server
cd mock-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化项目配置-package-json" tabindex="-1"><a class="header-anchor" href="#初始化项目配置-package-json" aria-hidden="true">#</a> 初始化项目配置(package.json)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加启动程序" tabindex="-1"><a class="header-anchor" href="#添加启动程序" aria-hidden="true">#</a> 添加启动程序</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  ......<span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon app.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
	......
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-express-及-mock-js-环境" tabindex="-1"><a class="header-anchor" href="#安装-express-及-mock-js-环境" aria-hidden="true">#</a> 安装 Express 及 Mock.js 环境</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i express mockjs -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="app-js" tabindex="-1"><a class="header-anchor" href="#app-js" aria-hidden="true">#</a> app.js</h3><blockquote><p>在项目根目录下创建 <code>app.js</code> 文件：</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入 express 模块</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 引入路由模块(路由中间件)</span>
<span class="token keyword">const</span> usersRouter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./mock/users&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 创建 Express 应用</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 对请求数据进行处理</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 使用路由中间件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api/v1/users&#39;</span><span class="token punctuation">,</span> usersRouter<span class="token punctuation">)</span>

<span class="token comment">// 启动服务器，监听 3000 端口</span>
<span class="token keyword">const</span> server <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> address<span class="token punctuation">,</span> port <span class="token punctuation">}</span> <span class="token operator">=</span> server<span class="token punctuation">.</span><span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Server running at http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>address<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>port<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由创建" tabindex="-1"><a class="header-anchor" href="#路由创建" aria-hidden="true">#</a> 路由创建</h3><blockquote><p>创建路由文件，并加载mock数据请求。文件路径/mock/users.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> mock<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../utils&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 获取用户信息
 */</span>
router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/:id?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 从请求中获取信息</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>params
  <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> pageSize <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>query
  <span class="token comment">// 应该响应的结果</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">undefined</span>
  <span class="token comment">// 用户基本信息数据结构</span>
   <span class="token keyword">const</span> userinfo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;id|+1&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;@last(6,10)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;@ctitle(3,7)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;@img(64x64,@color,avatar)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token string">&#39;@date()&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;sex|1&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;@email&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&#39;@string(&quot;number&quot;,11)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">&#39;@county(true)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token string">&#39;@datetime()&#39;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>id <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>username<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 未传递 id 与 username，分页查询</span>
    result <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">list|</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pageSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">[</span>userinfo<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">total</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@integer(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token operator">*</span>pageSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,376)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      page<span class="token punctuation">,</span>
      pageSize
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 根据 id 查询</span>
    result <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>userinfo<span class="token punctuation">,</span>
      id
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 根据用户名查找</span>
    result <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>userinfo<span class="token punctuation">,</span>
      username<span class="token punctuation">,</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;@integer(1,20)&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 添加用户信息
 */</span>
router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取请求主体中传递的添加信息</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    username<span class="token punctuation">,</span>
    password<span class="token punctuation">,</span>
    nickname<span class="token punctuation">,</span>
    avatar<span class="token punctuation">,</span>
    birthday<span class="token punctuation">,</span>
    sex<span class="token punctuation">,</span>
    email<span class="token punctuation">,</span>
    phone<span class="token punctuation">,</span>
    address<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body
  <span class="token comment">// 如果用户或密码不存在，则返回错误信息</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>username <span class="token operator">||</span> <span class="token operator">!</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;用户名和密码不能为空&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// mock 添加成功的数据</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    username<span class="token punctuation">,</span>
    nickname<span class="token punctuation">,</span>
    avatar<span class="token punctuation">,</span>
    birthday<span class="token punctuation">,</span>
    sex<span class="token punctuation">,</span>
    email<span class="token punctuation">,</span>
    phone<span class="token punctuation">,</span>
    address<span class="token punctuation">,</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;@integer(100,200)&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token string">&#39;@now()&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 修改用户信息
 */</span>
router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取请求主体中传递的修改信息</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    id<span class="token punctuation">,</span>
    username<span class="token punctuation">,</span>
    nickname<span class="token punctuation">,</span>
    avatar<span class="token punctuation">,</span>
    birthday<span class="token punctuation">,</span>
    sex<span class="token punctuation">,</span>
    email<span class="token punctuation">,</span>
    phone<span class="token punctuation">,</span>
    address<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body
  <span class="token comment">// 响应修改后的数据</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token punctuation">,</span>
    username<span class="token punctuation">,</span>
    nickname<span class="token punctuation">,</span>
    avatar<span class="token punctuation">,</span>
    birthday<span class="token punctuation">,</span>
    sex<span class="token punctuation">,</span>
    email<span class="token punctuation">,</span>
    phone<span class="token punctuation">,</span>
    address<span class="token punctuation">,</span>
    <span class="token literal-property property">createdAt</span><span class="token operator">:</span> <span class="token string">&#39;@datetime&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">updatedAt</span><span class="token operator">:</span> <span class="token string">&#39;@now&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 删除用户信息
 */</span>
router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取待删除用户的 id</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>params
  <span class="token comment">// mock 删除成功的数据</span>
  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    id<span class="token punctuation">,</span>
    <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装mock请求工具" tabindex="-1"><a class="header-anchor" href="#封装mock请求工具" aria-hidden="true">#</a> 封装mock请求工具</h3><blockquote><p>/utils/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入模块</span>
<span class="token keyword">const</span> Mock <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 生成成功数据的结构，data 是各不同</span>
<span class="token comment">// 接口实际向前端返回的数据对象内容</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">mock</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">res_code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">res_error</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">res_body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 生成失败数据的结构，接收错误码和错误</span>
<span class="token comment">// 消息参数</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">error</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">errno<span class="token punctuation">,</span> errmsg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">res_code</span><span class="token operator">:</span> errno<span class="token punctuation">,</span>
    <span class="token literal-property property">res_error</span><span class="token operator">:</span> errmsg<span class="token punctuation">,</span>
    <span class="token literal-property property">res_body</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动服务器" tabindex="-1"><a class="header-anchor" href="#启动服务器" aria-hidden="true">#</a> 启动服务器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行命令后，得到如下内容显示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; mock-server@1.0.0 start /Users/isaac/Documents/mock-server
&gt; nodemon app.js

[nodemon] 1.18.9
[nodemon] to restart at any time, enter \`rs\`
[nodemon] watching: *.*
[nodemon] starting \`node app.js\`
Server running at http://127.0.0.1:3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明服务器已启动成功，并在 3000 端口等待用户请求。</p><h3 id="接口测试" tabindex="-1"><a class="header-anchor" href="#接口测试" aria-hidden="true">#</a> 接口测试</h3><blockquote><ul><li>VSCode 扩展程序 REST Client 插件来测试接口</li></ul></blockquote><p>在项目根下建立 <code>api.http</code> 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>### 分页查询用户信息
GET http://localhost:3000/api/v1/users?page=3&amp;pageSize=10 HTTP/1.1

### 根据用户编号查询用户信息
GET http://localhost:3000/api/v1/users/18 HTTP/1.1

### 根据用户名查询用户信息
GET http://localhost:3000/api/v1/users?username=xiaoming HTTP/1.1

### 添加用户信息
POST http://localhost:3000/api/v1/users HTTP/1.1
Content-Type: application/json

{
  &quot;username&quot;: &quot;xiaoming&quot;,
  &quot;password&quot;: &quot;testabc123!!!&quot;,
  &quot;nickname&quot;: &quot;小明&quot;,
  &quot;avatar&quot;: &quot;@img(32x32,@color,xiaoming)&quot;,
  &quot;birthday&quot;: &quot;2000-01-01&quot;,
  &quot;sex&quot;: 1,
  &quot;email&quot;: &quot;xiaoming@qq.com&quot;,
  &quot;phone&quot;: &quot;13199332834&quot;,
  &quot;address&quot;: &quot;四川成都&quot;
}

### 修改用户信息
PUT http://localhost:3000/api/v1/users HTTP/1.1
Content-Type: application/json

{
  &quot;id&quot;: 18,
  &quot;username&quot;: &quot;xiaoming&quot;,
  &quot;nickname&quot;: &quot;小明1号&quot;,
  &quot;avatar&quot;: &quot;@img(64x64,@color,no1)&quot;,
  &quot;birthday&quot;: &quot;2000-08-22&quot;,
  &quot;sex&quot;: 1,
  &quot;email&quot;: &quot;xiaomingerhao@qq.com&quot;,
  &quot;phone&quot;: &quot;13199332834&quot;,
  &quot;address&quot;: &quot;四川成都&quot;
}

### 删除用户信息
DELETE http://localhost:3000/api/v1/users/12 HTTP/1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function m(b,g){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[s("利用 Express 搭建 Mock 服务器"),e(a)])])]),d,n("p",null,[n("a",k,[s("Mock.js"),e(a)]),s("是一款模拟数据生成器，帮助前端开发者独立于后端进行开发，帮助编写单元测试")]),v])}const q=t(l,[["render",m],["__file","05.html.vue"]]);export{q as default};
