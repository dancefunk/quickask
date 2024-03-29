import{_ as n,o as s,c as a,a as e}from"./app-d50584af.js";const p={},t=e(`<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>当我们在React项目开发当中，经常会去调用后端的接口，所以我们在React搭建的过程中，需要对接口请求进行封装

在封装的过程中我们需要去安装 axios 这个插件，来帮助我们发送http请求

下面就是封装的过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装axios" tabindex="-1"><a class="header-anchor" href="#安装axios" aria-hidden="true">#</a> 安装axios</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add axios -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="请求服务封装" tabindex="-1"><a class="header-anchor" href="#请求服务封装" aria-hidden="true">#</a> 请求服务封装</h3><blockquote><p>src/services/request.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入axios异步请求插件</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token keyword">let</span> cancel <span class="token punctuation">,</span>promiseArr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> CancelToken <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">;</span>

<span class="token comment">//请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//发起请求时，取消掉当前正在进行的相同请求</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>promiseArr<span class="token punctuation">[</span>config<span class="token punctuation">.</span>url<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        promiseArr<span class="token punctuation">[</span>config<span class="token punctuation">.</span>url<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">&#39;操作取消&#39;</span><span class="token punctuation">)</span>
        promiseArr<span class="token punctuation">[</span>config<span class="token punctuation">.</span>url<span class="token punctuation">]</span> <span class="token operator">=</span> cancel
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        promiseArr<span class="token punctuation">[</span>config<span class="token punctuation">.</span>url<span class="token punctuation">]</span> <span class="token operator">=</span> cancel
    <span class="token punctuation">}</span>
      <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//响应拦截器即异常处理</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// return response</span>
      <span class="token keyword">return</span> response<span class="token punctuation">.</span>data
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token operator">&amp;&amp;</span> err<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;错误请求&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;未授权，请重新登录&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;拒绝访问&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;请求错误,未找到该资源&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">405</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;请求方法未允许&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">408</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;请求超时&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;服务器端出错&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">501</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;网络未实现&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;网络错误&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">503</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;服务不可用&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">504</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;网络超时&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">case</span> <span class="token number">505</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&#39;http版本不支持该请求&#39;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
          <span class="token keyword">default</span><span class="token operator">:</span>
            err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">连接错误</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>err<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> 
      <span class="token punctuation">{</span>
        err<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">&quot;连接到服务器失败&quot;</span>
      <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">//请求的默认前缀 只要是发出去请求就会 默认带上这个前缀</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;/shop&#39;</span>

<span class="token comment">//设置默认请求头 异步的</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">//设置超时请求时间</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10000</span>


<span class="token comment">//get请求</span>
<span class="token keyword">let</span> <span class="token function-variable function">GET</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span>data<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> data<span class="token punctuation">.</span>params<span class="token punctuation">,</span>
      <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        cancel <span class="token operator">=</span> c
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">//post请求</span>
<span class="token keyword">let</span> <span class="token function-variable function">POST</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span>data<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span>data<span class="token punctuation">.</span>params<span class="token punctuation">,</span>
      <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        cancel <span class="token operator">=</span> c
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 文件上传请求</span>
<span class="token keyword">let</span> <span class="token function-variable function">UPLOAD</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
  <span class="token comment">//封装表单数据对象</span>
  <span class="token keyword">var</span> RequestData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token string">&quot;{}&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> data<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      RequestData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">.</span>params<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span>data<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span>RequestData<span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;multipart/form-data&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        cancel <span class="token operator">=</span> c
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">GET</span><span class="token punctuation">,</span>
  <span class="token constant">POST</span><span class="token punctuation">,</span>
  <span class="token constant">UPLOAD</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义全局api变量" tabindex="-1"><a class="header-anchor" href="#定义全局api变量" aria-hidden="true">#</a> 定义全局API变量</h3><blockquote><p>src/index.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入接口请求</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/services/request.js&#39;</span>

<span class="token comment">//设置为全局变量</span>
React<span class="token punctuation">.</span>$<span class="token constant">HTTP</span> <span class="token operator">=</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在业务中使用" tabindex="-1"><a class="header-anchor" href="#在业务中使用" aria-hidden="true">#</a> 在业务中使用</h3><blockquote><p>src/components/home.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//组装数据</span>
	<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;123123@qq.com&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token number">123123</span>
	<span class="token punctuation">}</span>
	
    <span class="token comment">//发起请求</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token keyword">await</span> React<span class="token punctuation">.</span>$<span class="token constant">HTTP</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/business/login&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","02.html.vue"]]);export{u as default};
