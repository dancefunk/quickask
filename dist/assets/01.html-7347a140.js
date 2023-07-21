import{_ as n,o as s,c as a,a as e}from"./app-6f490402.js";const t={},p=e(`<h3 id="安装vuerouter4" tabindex="-1"><a class="header-anchor" href="#安装vuerouter4" aria-hidden="true">#</a> 安装VueRouter4</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install vue-router@4 -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>快速入门使用</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入路由对象
import { createRouter, createWebHashHistory } from &quot;vue-router&quot;

//引入组件
import home from &#39;../components/home.vue&#39;
import user from &#39;../components/user.vue&#39;

//创建路由
export default createRouter({
    history: createWebHashHistory(), //路由的模式
    linkExactActiveClass: &#39;active&#39;,  //点击路由跳转的底部样式标量
    //路由列表
    routes: [
        {
            //默认首页
            path: &#39;/&#39;,
            name: &#39;home&#39;,
            component: home
        },
        {
            path: &#39;/user&#39;,
            name: &#39;user&#39;,
            component: user
        }
    ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在使用vue-router来进行路由封装的时候，就会需要用到该功能点

在用vue-router的时候会遇到需要引入当前文件夹下的所有文件例如引入module文件夹下所有的js文件

通常可以再module文件夹下建一个index.js 文件，然后在index文件里统一 export导出

但其实可以更方便，i<wbr>mport.meta.globEager这个ES6方法可以满足需求，不需要再每次都要在index文件里导出了

这样操作我们还有一个好处就是可以让路由封装的路径与Components组件目录的路径一致

我们先可以看一下目录结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>组件的目录结构</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>components/
	user/
		base/
			index.vue
			login.vue
			profile.vue
			register.vue
			
		address/
			index.vue
			add.vue
			edit.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>路由的目录结构</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>routers/
	user/
		base.js
		address.js
		order.js
		index.js
		
	product/
		cart.js
		product.js
		type.js
		index.js
		
	index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由此可见我们发现每个目录下面都有一个<code>index.js</code>这个文件，那么这个文件就是每个路由模块的入口文件</p><h3 id="总入口文件" tabindex="-1"><a class="header-anchor" href="#总入口文件" aria-hidden="true">#</a> 总入口文件</h3><blockquote><p>src/routers/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入路由对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span>

<span class="token comment">// 设置一个默认首页</span>
<span class="token keyword">import</span> home <span class="token keyword">from</span> <span class="token string">&#39;@/components/home.vue&#39;</span>

<span class="token comment">// 引入每个目录下面的index.js文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&quot;./*/index.js&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// 总路由集合</span>
<span class="token keyword">const</span> RouterList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">//提取每个对象下的值 同步获取</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>ModulesFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">mod</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    RouterList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>mod<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

RouterList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">//传参选项 query</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token comment">//传参选项 params</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> home<span class="token punctuation">,</span>
  <span class="token comment">// meta:{ //自定义参数</span>
  <span class="token comment">//   Auth:true, //自定义命名 比如Auth为true就是需要登录 否则不需要登录</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 创建一个总路由对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">//history模式 并且不会有/# </span>
  <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//激活链接状态class名称</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span>RouterList<span class="token punctuation">,</span>   <span class="token comment">//routes 很容易写成 routers !!!!!!!!!</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="每个独立路由模块下面的index-js" tabindex="-1"><a class="header-anchor" href="#每个独立路由模块下面的index-js" aria-hidden="true">#</a> 每个独立路由模块下面的index.js</h3><blockquote><p>src/routers/user/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 引入当前目录下面的所有文件</span>
<span class="token keyword">const</span> ModulesFile <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&#39;./*.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 路由集合</span>
<span class="token keyword">const</span> RouterList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment">//提取每个对象下的值 同步获取</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>ModulesFile<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">mod</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>mod<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    RouterList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span>mod<span class="token punctuation">.</span>default<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//定义父组件</span>
<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;router-view&gt;&lt;/router-view&gt;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">//导出</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 父路由</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span>layout<span class="token punctuation">,</span>
    <span class="token comment">//子路由分组   /user/order/xxxx</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span>RouterList
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他的路由文件" tabindex="-1"><a class="header-anchor" href="#其他的路由文件" aria-hidden="true">#</a> 其他的路由文件</h3><blockquote><p>src/routers/user/base.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入组件</span>
<span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/base/index.vue&#39;</span>
<span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/base/login.vue&#39;</span>
<span class="token keyword">import</span> register <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/base/register.vue&#39;</span>
<span class="token keyword">import</span> profile <span class="token keyword">from</span> <span class="token string">&#39;@/components/user/base/profile.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
    <span class="token comment">//会员中心</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// /user/base/index</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;base/index&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseIndex&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>index<span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token comment">//如果路由中存在这个属性 就代表需要登录才能访问</span>
            <span class="token literal-property property">auth</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//基本资料</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;base/profile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseProfile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>profile<span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">auth</span><span class="token operator">:</span><span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//登录界面</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;base/login&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseLogin&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>login
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//注册界面</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;base/register&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;BaseRegister&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span>register
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后在程序入口中加载路由" tabindex="-1"><a class="header-anchor" href="#最后在程序入口中加载路由" aria-hidden="true">#</a> 最后在程序入口中加载路由</h3><blockquote><p>src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//加载路由</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./routers/index.js&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","01.html.vue"]]);export{u as default};
