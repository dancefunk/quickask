import{_ as p,r as o,o as l,c as i,b as n,d as s,e,a as t}from"./app-c94bd78a.js";const c={},r=n("h3",{id:"vue-router",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-router","aria-hidden":"true"},"#"),s(" Vue-Router")],-1),u={href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="安装vuerouter4" tabindex="-1"><a class="header-anchor" href="#安装vuerouter4" aria-hidden="true">#</a> 安装VueRouter4</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-router@4 -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>快速入门使用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入路由对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span>

<span class="token comment">//引入组件</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">&#39;../components/home.vue&#39;</span>
<span class="token keyword">import</span> user <span class="token keyword">from</span> <span class="token string">&#39;../components/user.vue&#39;</span>

<span class="token comment">//创建路由</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//路由的模式</span>
    <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//点击路由跳转的底部样式标量</span>
    <span class="token comment">//路由列表</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//默认首页</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> home
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> user
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在使用vue-router来进行路由封装的时候，就会需要用到该功能点

在用vue-router的时候会遇到需要引入当前文件夹下的所有文件例如引入module文件夹下所有的js文件

通常可以再module文件夹下建一个index.js 文件，然后在index文件里统一 export导出

但其实可以更方便，i<wbr>mport.meta.globEager这个ES6方法可以满足需求，不需要再每次都要在index文件里导出了

这样操作我们还有一个好处就是可以让路由封装的路径与Components组件目录的路径一致

我们先可以看一下目录结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>组件的目录结构</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
	user/
		index.vue
		login.vue
		profile.vue
		register.vue
		
	address/
		index.vue
		add.vue
		edit.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>路由的目录结构</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>routers/
	user.js
	address.js
	index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总入口文件" tabindex="-1"><a class="header-anchor" href="#总入口文件" aria-hidden="true">#</a> 总入口文件</h3><blockquote><p>src/routers/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入路由对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span>

<span class="token comment">//引入当前目录下面所有的JS文件</span>
<span class="token keyword">const</span> modfile <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&#39;./*.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 引入每个目录下面的index.js文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&quot;./*/index.js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">eager</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 总路由集合</span>
<span class="token keyword">const</span> RouterList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">//提取每个对象下的值 同步获取</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>modfile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">mod</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>default<span class="token punctuation">)</span> <span class="token keyword">await</span> RouterList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建一个总路由对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">//history模式 并且不会有/# </span>
  <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//激活链接状态class名称</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span>RouterList<span class="token punctuation">,</span>   <span class="token comment">//routes 很容易写成 routers !!!!!!!!!</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的路由文件" tabindex="-1"><a class="header-anchor" href="#其他的路由文件" aria-hidden="true">#</a> 其他的路由文件</h3><blockquote><p>src/routers/user.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入组件</span>
<span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/index.vue&#39;</span>
<span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/login.vue&#39;</span>
<span class="token keyword">import</span> register <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/register.vue&#39;</span>
<span class="token keyword">import</span> profile <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/profile.vue&#39;</span>


<span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//会员中心</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseIndex&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>index<span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//如果路由中存在这个属性 就代表需要登录才能访问</span>
            <span class="token literal-property property">auth</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//基本资料</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseProfile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>profile<span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">auth</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//登录界面</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseLogin&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>login
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//注册界面</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;register&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseRegister&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>register
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//1级路由的组件</span>
<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;router-view&gt;&lt;/router-view&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token comment">//1级路由</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> layout<span class="token punctuation">,</span> <span class="token comment">//组件</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> children
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后在程序入口中加载路由" tabindex="-1"><a class="header-anchor" href="#最后在程序入口中加载路由" aria-hidden="true">#</a> 最后在程序入口中加载路由</h3><blockquote><p>src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//加载路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./routers/index.js&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动构建路由第三方插件" tabindex="-1"><a class="header-anchor" href="#自动构建路由第三方插件" aria-hidden="true">#</a> 自动构建路由第三方插件</h3><blockquote><p>参考链接</p></blockquote>`,21),v={href:"https://cloud.tencent.com/developer/article/1962114",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/guozhiqiang/p/16892086.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<blockquote><p>先安装两个插件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vite-plugin-pages -S
npm install vite-plugin-vue-layouts -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>vite.config.js 进行配置</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
	<span class="token function">Pages</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	  <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token string">&#39;src/views&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 需要生成路由的组件目录</span>
	  <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;**/components/*.vue&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// 排除在外的目录，即所有 components 目录下的 .vue 文件都不会生成路由</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">Layouts</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	  <span class="token literal-property property">layoutsDirs</span><span class="token operator">:</span> <span class="token string">&#39;src/layout&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// 布局模板文件存放目录</span>
	  <span class="token literal-property property">defaultLayout</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span>  <span class="token comment">// 默认布局，对应 src/layout/index.vue</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/routers/index.js 路由配置</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setupLayouts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;virtual:generated-layouts&#39;</span>
<span class="token keyword">import</span> generatedRoutes <span class="token keyword">from</span> <span class="token string">&#39;virtual:generated-pages&#39;</span>

<span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
generatedRoutes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  routes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token operator">?.</span>meta<span class="token operator">?.</span>layout <span class="token operator">!=</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token function">setupLayouts</span><span class="token punctuation">(</span><span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> v<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//路由的模式</span>
  <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//点击路由跳转的底部样式标量</span>
  routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/layout/index.vue 模板布局文件</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/main.js 最后在程序入口中加载路由</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//加载路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./routers/index.js&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>页面目录结构</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>views/
	user/
		index.vue
		login.vue
		profile.vue
		register.vue
		
	address/
		index.vue
		add.vue
		edit.vue
		

生成对应的路由例如：
	http://localhost:3000/user
	http://localhost:3000/user/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(y,g){const a=o("ExternalLinkIcon");return l(),i("div",null,[r,n("p",null,[n("strong",null,[n("a",u,[s("官网：https://router.vuejs.org/zh/"),e(a)])])]),d,n("ul",null,[n("li",null,[n("a",v,[s("https://cloud.tencent.com/developer/article/1962114"),e(a)])]),n("li",null,[n("a",k,[s("https://www.cnblogs.com/guozhiqiang/p/16892086.html"),e(a)])])]),m])}const f=p(c,[["render",b],["__file","01.html.vue"]]);export{f as default};
