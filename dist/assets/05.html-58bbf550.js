import{_ as n,o as s,c as a,a as t}from"./app-da5bd584.js";const p={},e=t(`<h3 id="逻辑结构" tabindex="-1"><a class="header-anchor" href="#逻辑结构" aria-hidden="true">#</a> 逻辑结构</h3><blockquote><p>src/router.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入路由对象</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span>

<span class="token comment">//引入组件</span>
<span class="token keyword">import</span> login <span class="token keyword">from</span> <span class="token string">&#39;./components/login.vue&#39;</span>
<span class="token keyword">import</span> order <span class="token keyword">from</span> <span class="token string">&#39;./components/order.vue&#39;</span>

<span class="token comment">// 创建路由</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//hash路由模式</span>
    <span class="token literal-property property">linkExactActiveClass</span><span class="token operator">:</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//点击路由跳转的底部样式标量</span>
    <span class="token comment">//路由列表</span>
    <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/order&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;order&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> order<span class="token punctuation">,</span>
            <span class="token comment">//给这个路由添加自定义信息, 让改路由在登录状态下才能访问</span>
            <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">IsLogin</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> login<span class="token punctuation">,</span>
            <span class="token comment">// 组件内的守卫</span>
            <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//进入路由前</span>
                <span class="token comment">// 在渲染该组件的对应路由被 confirm 前调用</span>
                <span class="token comment">// 不！能！获取组件实例 \`this\`</span>
                <span class="token comment">// 因为当守卫执行前，组件实例还没被创建</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> 
            <span class="token punctuation">{</span>
                <span class="token comment">//更新路由前</span>
                <span class="token comment">// vue(2.2版本 新增)</span>
                <span class="token comment">// 在当前路由改变，但是该组件被复用时调用</span>
                <span class="token comment">// 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，</span>
                <span class="token comment">// 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。</span>
                <span class="token comment">// 可以访问组件实例 \`this\`</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">//离开路由前</span>
                <span class="token comment">// 导航离开该组件的对应路由时调用</span>
                <span class="token comment">// 可以访问组件实例 \`this\`</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面结构" tabindex="-1"><a class="header-anchor" href="#页面结构" aria-hidden="true">#</a> 页面结构</h3><blockquote><p>src/App.vue</p></blockquote><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>路由守卫<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/order<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>会员订单列表<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>登录界面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件" aria-hidden="true">#</a> 入口文件</h3><blockquote><p>src/main.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./style.css&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//全局前置路由守卫</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//to 这个参数代表 去到哪个路由</span>
    <span class="token comment">//from 这个参数代表 从哪里来</span>
    <span class="token comment">//next 这个参数代表 是否可以去到下一步</span>
    <span class="token comment">//我们可以根据to当中是否有meta信息来判断当前的路由是否需要登录</span>
    <span class="token comment">//这个就是我们常见的判断是否有登录</span>
    <span class="token keyword">var</span> IsLogin <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>IsLogin <span class="token operator">?</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>IsLogin <span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token comment">//如果IsLogin=true 就说明是需要登录的，否则就不需要登录</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>IsLogin<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 需要登录去到登录界面</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//不需要登录直接去到下一步</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//全局后置路由守卫</span>
router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身</span>
    <span class="token comment">// console.log(&#39;全局后置路由守卫&#39;)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目中使用方式" tabindex="-1"><a class="header-anchor" href="#项目中使用方式" aria-hidden="true">#</a> 项目中使用方式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>  <span class="token comment">//挂载路由</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vant<span class="token punctuation">)</span>   <span class="token comment">//挂载UI组件</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>  <span class="token comment">//挂载接口   === install</span>
    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCookies<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>


<span class="token comment">//添加路由守卫做判断是否有无登录</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//需要登录</span>

        <span class="token comment">//判断是否有无cookie </span>
        <span class="token keyword">var</span> LoginUser <span class="token operator">=</span> app<span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">//没有登录就跳转到登录界面</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>LoginUser<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/user/base/login&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>

        <span class="token comment">//获取id</span>
        <span class="token keyword">var</span> userid <span class="token operator">=</span> LoginUser<span class="token punctuation">.</span>id <span class="token operator">?</span> LoginUser<span class="token punctuation">.</span>id <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>

        <span class="token comment">//接口请求</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">userid</span><span class="token operator">:</span>userid<span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>code <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//验证失败</span>
            app<span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">)</span>

            <span class="token comment">//跳转了</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/user/base/login&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//验证成功</span>
            <span class="token comment">//覆盖cookie</span>
            app<span class="token punctuation">.</span>$cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;LoginUser&#39;</span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
            
            <span class="token comment">//让他去到该去的路由</span>
            <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//不需要登录,直接跳转路由</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","05.html.vue"]]);export{r as default};
