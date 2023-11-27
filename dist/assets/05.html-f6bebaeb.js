import{_ as p,r as l,o as i,c,b as n,d as s,e,a}from"./app-a528498f.js";const o="/dist/assets/images/html5/css/rem.jpg",u={},d=a(`<h3 id="重置样式" tabindex="-1"><a class="header-anchor" href="#重置样式" aria-hidden="true">#</a> 重置样式</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">不同浏览器对HTML标签有不同的样式，这些不同的样式会影响我们布局的兼容性
所以我们需要在开始做布局之前，先清除掉这些默认样式
最简单的一种做法：*</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reset-css样本" tabindex="-1"><a class="header-anchor" href="#reset-css样本" aria-hidden="true">#</a> reset.css样本</h3>`,3),r={href:"http://marvin1023.github.io/sandal/reset.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<h3 id="响应式布局适配案例" tabindex="-1"><a class="header-anchor" href="#响应式布局适配案例" aria-hidden="true">#</a> 响应式布局适配案例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://huodong.m.taobao.com/act/yibo.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>通过响应式设计手段能够使网站在手机端和PC端上能够有更好的浏览效果和排版结构

优点：
能够快速解决多设备显示错乱问题

缺点：
兼容各种设备工作量大，效率低下，代码累赘
会出现隐藏无用的元素，加载时间加长

工具：
视口、媒体查询
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视口viewport" tabindex="-1"><a class="header-anchor" href="#视口viewport" aria-hidden="true">#</a> 视口viewport</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>视口指的是移动设备中的设备屏幕窗口
在移动端浏览器当中，存在着两种视口：		
一种是可见视口（也就是我们说的设备大小），另一种是视窗视口（网页的宽度是多少）

什么是可见视口，什么又是视窗视口呢？此处举一个例子：
如果我们的屏幕是320像素*480像素的大小（iPhone4）
假设在浏览器中，320像素的屏幕宽度能够展示980像素宽度的内容
那么320像素的宽度就是可见视口的宽度，而能够显示的980像素的宽度就是视窗视口的宽度

为了显示更多的内容，大多数的浏览器会把自己的视窗视口扩大
简易的理解，就是让原本320像素的屏幕宽度能够容下980像素甚至更宽的内容（将网页等比例缩小）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数设置∶</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">width</td><td style="text-align:left;">viewport的宽度</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;">viewport的高度</td></tr><tr><td style="text-align:left;">initial-scale</td><td style="text-align:left;">初始的缩放比例</td></tr><tr><td style="text-align:left;">minimum-scale</td><td style="text-align:left;">允许用户缩放到的最小比例</td></tr><tr><td style="text-align:left;">maximum-scale</td><td style="text-align:left;">允许用户缩放到的最大比例</td></tr><tr><td style="text-align:left;">user-scalable</td><td style="text-align:left;">用户是否可以手动缩放</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>将视口设置为320像素
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=320<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

将视口设置为设备宽度
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

将视口设置为设备宽度，并在最初的时候以放大2倍的方式显示
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=2.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

将视口设置为设备宽度，并允许缩放，最大放大到2倍，最小缩小到1/2
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, maximum-scale=2.0, minimum-scale=0.5<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

将视口设置为设备宽度，并禁止缩放
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, user-scalable=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动端rem适配" tabindex="-1"><a class="header-anchor" href="#移动端rem适配" aria-hidden="true">#</a> 移动端rem适配</h3><blockquote><ul><li>rem.js</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// html元素字体</span>
    <span class="token comment">// 倍数关系可以修改，此处为25</span>
    <span class="token comment">// 设置为10时, dpr=1的手机, 宽度360, 计算出来html的字体大小为5px, 可能是字体太小了</span>
    <span class="token comment">// 尽量设置大一些, 这样避免12px字体大小的限制</span>
    <span class="token keyword">var</span> _rootFontSize <span class="token operator">=</span> window<span class="token punctuation">.</span>_rootFontSize <span class="token operator">||</span> <span class="token number">25</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 默认不支持缩放</span>
    <span class="token keyword">var</span> _remMetaScalable <span class="token operator">=</span> <span class="token keyword">typeof</span> window<span class="token punctuation">.</span>_remMetaScalable <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span> 
      <span class="token operator">?</span> <span class="token boolean">false</span> 
      <span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>_remMetaScalable<span class="token punctuation">;</span>
  
    <span class="token keyword">var</span> docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">,</span>
      isIOS <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\(i[^;]+;( U;)? CPU.+Mac OS X</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  
      <span class="token comment">// 只针对IOS设备</span>
      dpr <span class="token operator">=</span> isIOS <span class="token operator">?</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>win<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  
      <span class="token comment">// 计算缩放比</span>
      scale <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> dpr<span class="token punctuation">,</span>
  
      <span class="token comment">// 检测支持的&quot;缩放&quot;事件</span>
      resizeEvt <span class="token operator">=</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token keyword">in</span> window <span class="token operator">?</span> <span class="token string">&#39;orientationchange&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">;</span>
    docEl<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>dpr <span class="token operator">=</span> dpr<span class="token punctuation">;</span>
  
    <span class="token comment">// 被iframe引用时，禁止缩放</span>
    dpr <span class="token operator">=</span> window<span class="token punctuation">.</span>top <span class="token operator">===</span> window<span class="token punctuation">.</span>self <span class="token operator">?</span> dpr <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  
    <span class="token keyword">var</span> metaEl <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;meta&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    metaEl<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;viewport&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> metaElContent <span class="token operator">=</span> <span class="token string">&#39;width=device-width, &#39;</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 支持缩放</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_remMetaScalable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      metaElContent <span class="token operator">+=</span> <span class="token string">&#39;initial-scale=&#39;</span> <span class="token operator">+</span> scale<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      metaElContent <span class="token operator">+=</span> <span class="token punctuation">(</span>
        <span class="token string">&#39;initial-scale=&#39;</span> <span class="token operator">+</span> scale 
        <span class="token operator">+</span> <span class="token string">&#39;,maximum-scale=&#39;</span> <span class="token operator">+</span> scale 
        <span class="token operator">+</span> <span class="token string">&#39;, minimum-scale=&#39;</span> <span class="token operator">+</span> scale 
        <span class="token operator">+</span> <span class="token string">&#39;, user-scalable=no&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    metaEl<span class="token punctuation">.</span>content <span class="token operator">=</span> metaElContent<span class="token punctuation">;</span>
    docEl<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>metaEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token comment">// 缩放/旋转设备检测函数</span>
    <span class="token keyword">var</span> <span class="token function-variable function">recalc</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> width <span class="token operator">=</span> docEl<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
  
      <span class="token comment">// 750为设计用的宽度, 比如它以iphone6标准(宽750)</span>
      <span class="token comment">// 此时, 按照设计稿的尺寸写就可以了</span>
      <span class="token comment">// 如: 设计稿为100px, 那么就写4rem(100 / 25), 25是自己设置的</span>
      <span class="token comment">// 也可以设置成100, 这样就写100px就写1rem</span>
      docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> _rootFontSize <span class="token operator">*</span> <span class="token punctuation">(</span>width <span class="token operator">/</span> <span class="token number">750</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">recalc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>doc<span class="token punctuation">.</span>addEventListener<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>resizeEvt<span class="token punctuation">,</span> recalc<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>index.html</li></ul></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.c1</span> <span class="token punctuation">{</span>
          <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      
        <span class="token selector">.c2</span> <span class="token punctuation">{</span>
          <span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 1.28rem<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      
        <span class="token selector">.c3</span> <span class="token punctuation">{</span>
          <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
          <span class="token property">font-size</span><span class="token punctuation">:</span> 1.28rem<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rem.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    .c1 {
      border: 2px solid black;
      font-size: 32px;
    }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    .c2 {
      border: 2px solid black;
      font-size: 1.28rem;
    }
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    .c3 {
      border: 1px solid black;
      font-size: 1.28rem;
    }    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="rem"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>可以看出:

在DPR为1时, 其实用什么都可以的, 也就是我们正常在pc页面上的写法.

在DPR为2时:
	不使用rem.js, 实际显示效果就会是我们写的2倍.
	这也就是为什么我们写的1px的边框在iPhone手机上常常看起来比较粗的原因.
	使用rem.js, 效果才是我们预期的.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设备像素比-device-pixel-ratio" tabindex="-1"><a class="header-anchor" href="#设备像素比-device-pixel-ratio" aria-hidden="true">#</a> 设备像素比(device pixel ratio)</h3><p>设备像素比简称为DPR，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>设备像素比 ＝ 物理像素 / 设备独立像素
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="手淘-flexible-适配方案" tabindex="-1"><a class="header-anchor" href="#手淘-flexible-适配方案" aria-hidden="true">#</a> 手淘 flexible 适配方案</h3><p>手机淘宝的H5页面是如何实现多端适配的呢，经过多年的摸索和实战，手淘总结了一套移动端适配的方案<code>lib-flexible</code></p><blockquote><p>https://github.com/amfe/lib-flexible</p></blockquote>`,22),k={href:"https://github.com/amfe/article/issues/17",target:"_blank",rel:"noopener noreferrer"},m=a(`<h3 id="响应式布局经验之谈-个人经验" tabindex="-1"><a class="header-anchor" href="#响应式布局经验之谈-个人经验" aria-hidden="true">#</a> 响应式布局经验之谈(个人经验)</h3><h4 id="pc端兼容预览方式" tabindex="-1"><a class="header-anchor" href="#pc端兼容预览方式" aria-hidden="true">#</a> PC端兼容预览方式：</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>切换不同屏幕分辨率，以Mac为例
    1440 x 900
    1680 x 1050
    1920 x 1200

主要兼容以上几个屏幕效果，windows的分辨率模式更多，根据实际情况来兼容

兼容多个浏览器
谷歌、火狐、Safair、Edge(微软)、IE、360、搜狗
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="移动端兼容预览方式" tabindex="-1"><a class="header-anchor" href="#移动端兼容预览方式" aria-hidden="true">#</a> 移动端兼容预览方式：</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>移动端需要兼容两种：平板和手机
请安装“微信开发者工具”使用公众号网页功能，输入URL来预览效果
使用该工具的好处就是，利用微信内置的手机浏览器来模拟真实手机效果
通过查看不同手机机型来处理网页兼容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="缩放浏览器百分比" tabindex="-1"><a class="header-anchor" href="#缩放浏览器百分比" aria-hidden="true">#</a> 缩放浏览器百分比%</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>有些客户会有要求缩放浏览器界面，也要保证兼容效果，对于这种的要求。
我们就需要配合 min-width、max-width 等属性来调整兼容了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字体类型统一-重视" tabindex="-1"><a class="header-anchor" href="#字体类型统一-重视" aria-hidden="true">#</a> 字体类型统一(重视！！)</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>很多重视视觉效果的客户，往往会比较喜欢抓字体样式的细节，比如说你的字体是什么宋体，黑体之类的
与设计图的效果并不是一样的。这样对于我们开发者来说就非常头疼，所以尽量在页面布局的时候，将字体类型统一
那么关于使用自定义字体，我们就要多去活用 @font-face 属性，最好在公共文件中添加属性进行字体统一
减少页面加载时间过长，请将字体文件进行压缩
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="字体大小换算-重视" tabindex="-1"><a class="header-anchor" href="#字体大小换算-重视" aria-hidden="true">#</a> 字体大小换算(重视！！)</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>对于设计稿和页面效果的比较客户会非常抓字体大小和字体类型的细节问题，这类问题需要特别注意

可以使用上面的 “手淘方案”

或者使用JS来封装换算效果

给html设置一个font-size:62.5%，使得1rem=10px，仍有可能会出现一些bug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function b(h,g){const t=l("ExternalLinkIcon");return i(),c("div",null,[d,n("p",null,[n("strong",null,[n("a",r,[s("http://marvin1023.github.io/sandal/reset.html"),e(t)])])]),v,n("p",null,[s("详情地址："),n("a",k,[s("https://github.com/amfe/article/issues/17"),e(t)])]),m])}const f=p(u,[["render",b],["__file","05.html.vue"]]);export{f as default};
