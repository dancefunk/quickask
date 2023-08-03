import{_ as n,o as s,c as a,a as t}from"./app-f25f351f.js";const p={},e=t(`<h3 id="cheerio" tabindex="-1"><a class="header-anchor" href="#cheerio" aria-hidden="true">#</a> Cheerio</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>为服务器特别定制的，快速、灵活、实施的jQuery核心实现

官网地址
https://cheerio.js.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="爬虫目标地址" tabindex="-1"><a class="header-anchor" href="#爬虫目标地址" aria-hidden="true">#</a> 爬虫目标地址</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://desk.zol.com.cn/fengjing/1.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>创建文件夹project
cd project/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成配置文件" tabindex="-1"><a class="header-anchor" href="#生成配置文件" aria-hidden="true">#</a> 生成配置文件</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装插件-package-json" tabindex="-1"><a class="header-anchor" href="#安装插件-package-json" aria-hidden="true">#</a> 安装插件(package.json)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pregimage&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;async&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.1.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mkdirp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.51.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;cheerio&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.18.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主程序-main-js" tabindex="-1"><a class="header-anchor" href="#主程序-main-js" aria-hidden="true">#</a> 主程序(main.js)</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//依赖模块</span>
<span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    cheerio <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cheerio&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    mkdirp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mkdirp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    async <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;async&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//本地存放目录</span>
<span class="token keyword">var</span> dir <span class="token operator">=</span> <span class="token string">&quot;./images/&quot;</span>

<span class="token comment">//判断目录是否存在，不存在就创建目录</span>
<span class="token function">mkdirp</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//总共采集了多少张图片</span>
<span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">//爬虫地址</span>
<span class="token keyword">var</span> firstUrl <span class="token operator">=</span> <span class="token string">&quot;http://desk.zol.com.cn/dongman/1.html&quot;</span>


<span class="token comment">//发起请求</span>
<span class="token function">request</span><span class="token punctuation">(</span>firstUrl<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>response<span class="token punctuation">,</span>body</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">//判断是否请求成功，请求成功就走进判断里面</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//cheerio 是实现jquery的核心，利用cheerio加载界面dom元素</span>
    <span class="token keyword">var</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>

    <span class="token comment">//获取总数</span>
    <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.allPic font&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token comment">//每页显示多少条数据</span>
    <span class="token keyword">var</span> limit <span class="token operator">=</span> <span class="token number">15</span>

    <span class="token comment">//算出总页数</span>
    <span class="token keyword">var</span> pages <span class="token operator">=</span> count<span class="token operator">%</span>limit<span class="token operator">==</span><span class="token number">0</span> <span class="token operator">?</span> count<span class="token operator">/</span>limit <span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>count<span class="token operator">/</span>limit<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span>
    
    <span class="token comment">//循环获取每页里面的数据 从第一页开始</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>pages<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token function">pregImage</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//控制台打印信息</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">总共采集了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">张图片</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">pregImage</span><span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

  <span class="token comment">//目标地址</span>
  <span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://desk.zol.com.cn/dongman/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.html</span><span class="token template-punctuation string">\`</span></span>

  <span class="token comment">//存放图片的链接地址</span>
  <span class="token keyword">var</span> links <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">//从第一张开始</span>
  <span class="token keyword">var</span> current <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token comment">//发送请求</span>
  <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> response<span class="token punctuation">,</span> body</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">//判断是否请求成功</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
      <span class="token comment">//cheerio加载页面dom元素</span>
      <span class="token keyword">var</span> $ <span class="token operator">=</span> cheerio<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>

      <span class="token comment">//获取图片列表</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.photo-list-padding a img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//获取图片的src地址</span>
        <span class="token keyword">var</span> src <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
        
        <span class="token comment">//通过替换可以更改图片的大小</span>
        src <span class="token operator">=</span> src<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">t_s208x130c5</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;t_s960x600c5&#39;</span><span class="token punctuation">)</span>

        <span class="token comment">//追加到数组里面</span>
        links<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 每次只执行一个异步操作 请求每张图片</span>
      async<span class="token punctuation">.</span><span class="token function">mapSeries</span><span class="token punctuation">(</span>links<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">爬虫进度：第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">页,第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">张图片</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

        <span class="token comment">//封装下载图片方法</span>
        <span class="token function">download</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> dir<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span> item<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment">//第几张图片、总张数递增</span>
        current<span class="token operator">++</span>
        number<span class="token operator">++</span>

        <span class="token comment">//执行结果传给最后的callback null为成功无数据 失败的话就返回错误err</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>

      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//下载图片，并保存</span>
<span class="token keyword">var</span> <span class="token function-variable function">download</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> dir<span class="token punctuation">,</span> filename</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">//设置请求结构</span>
  request<span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>res<span class="token punctuation">,</span>body</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//发送请求，并接收结果保存下来</span>
    <span class="token function">request</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span>dir <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span> <span class="token operator">+</span> filename<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行爬虫" tabindex="-1"><a class="header-anchor" href="#运行爬虫" aria-hidden="true">#</a> 运行爬虫</h3><div class="language-node line-numbers-mode" data-ext="node"><pre class="language-node"><code>node main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="电影爬虫" tabindex="-1"><a class="header-anchor" href="#电影爬虫" aria-hidden="true">#</a> 电影爬虫</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建文件夹project/
cd project/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装插件-package-json-1" tabindex="-1"><a class="header-anchor" href="#安装插件-package-json-1" aria-hidden="true">#</a> 安装插件(package.json)</h4><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;movie&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NodeJS爬虫1905电影网站&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;main.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.88.2&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="封装文件操作-fs-js" tabindex="-1"><a class="header-anchor" href="#封装文件操作-fs-js" aria-hidden="true">#</a> 封装文件操作(fs.js)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">fsRead</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span><span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fsWrite</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span>content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>content<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">flag</span><span class="token operator">:</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">encoding</span><span class="token operator">:</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fsDir</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">mkdir</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;创建目录成功&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>fsRead<span class="token punctuation">,</span>fsWrite<span class="token punctuation">,</span>fsDir<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="主文件-main-js" tabindex="-1"><a class="header-anchor" href="#主文件-main-js" aria-hidden="true">#</a> 主文件(main.js)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> request <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span>fsWrite<span class="token punctuation">,</span>fsRead<span class="token punctuation">,</span>fsDir<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./fs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//如果有https报错 那个没有影响</span>
<span class="token keyword">let</span> httpUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.1905.com/vod/list/n_1/o3u1p1.html?fr=vodhome_js_lx&#39;</span>

<span class="token doc-comment comment">/**
 * 获取起始页面的所有分类
 * 获取分类的电影
 * 根据电影连接获取电影详情信息
 **/</span>

<span class="token keyword">function</span> <span class="token function">req</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>response<span class="token punctuation">,</span>body</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>response<span class="token punctuation">,</span>body<span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>

<span class="token comment">//分类地址</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getClassUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//创建存放数据目录</span>
    <span class="token keyword">await</span> <span class="token function">fsDir</span><span class="token punctuation">(</span><span class="token string">&#39;./movies&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> <span class="token punctuation">{</span>response<span class="token punctuation">,</span>body<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">req</span><span class="token punctuation">(</span>httpUrl<span class="token punctuation">)</span>
    <span class="token comment">// console.log(body)</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;span class=&quot;search-index-L&quot;&gt;类型(.*?)&lt;div class=&quot;grid-12x&quot;&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">igs</span></span>
    <span class="token comment">//解析html内容</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=&quot;javascript\\:void\\(0\\);&quot; onclick=&quot;location\\.href=&#39;(.*?)&#39;;return false;&quot;.*?&gt;(.*?)&lt;\\/a&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">igs</span></span>
    <span class="token keyword">let</span> arrClass <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> res<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>res <span class="token operator">=</span> reg1<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token string">&quot;全部&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">className</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token literal-property property">url</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
            arrClass<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
            <span class="token keyword">await</span> <span class="token function">fsDir</span><span class="token punctuation">(</span><span class="token string">&#39;./movies/&#39;</span><span class="token operator">+</span>res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">getMovie</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//通过分类，获取页面中的电影链接</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getMovie</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>MovieType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>response<span class="token punctuation">,</span>body<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">req</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a class=&quot;pic-pack-outer&quot; target=&quot;_blank&quot; href=&quot;(.*?)&quot;.*?&gt;&lt;img</span><span class="token regex-delimiter">/</span><span class="token regex-flags">igs</span></span>
    <span class="token keyword">var</span> res<span class="token punctuation">;</span>
    <span class="token keyword">var</span> arrList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        arrList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token function">parsePage</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>MovieType<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token comment">//  console.log(&quot;分类：&quot;,MovieType)</span>
<span class="token comment">//  console.log(arrList)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">parsePage</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>MovieType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>response<span class="token punctuation">,</span>body<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">req</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;h1 class=&quot;playerBox-info-name playerBox-info-cnName&quot;&gt;(.*?)&lt;\\/h1&gt;.*?&lt;span class=&quot;playerBox-info-year&quot;&gt;\\((.*?)\\)&lt;\\/span&gt;.*?id=&quot;playerBoxIntroCon&quot;&gt;(.*?)&lt;a.*?导演.*?target=&quot;\\_blank&quot; title=&quot;(.*?)&quot; data-hrefexp.*?地区&lt;b&gt;.*?target=&quot;\\_blank&quot; title=&quot;(.*?)&quot; data-hrefexp</span><span class="token regex-delimiter">/</span><span class="token regex-flags">igs</span></span>
    <span class="token keyword">let</span> res<span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">let</span> movie <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">year</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">brief</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">daoyan</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">diqu</span><span class="token operator">:</span>res<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">movieUrl</span><span class="token operator">:</span>url<span class="token punctuation">,</span>
            MovieType
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> strMovie <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>movie<span class="token punctuation">)</span>
        <span class="token function">fsWrite</span><span class="token punctuation">(</span><span class="token string">&#39;./movies/&#39;</span><span class="token operator">+</span>MovieType<span class="token operator">+</span><span class="token string">&quot;/&quot;</span><span class="token operator">+</span>res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token string">&quot;.json&quot;</span><span class="token punctuation">,</span>strMovie<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token function">getClassUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="运行爬虫-1" tabindex="-1"><a class="header-anchor" href="#运行爬虫-1" aria-hidden="true">#</a> 运行爬虫</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会在项目目录下面创建一个movies文件夹里面就是爬虫采集的电影数据</p>`,25),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","01.html.vue"]]);export{r as default};
