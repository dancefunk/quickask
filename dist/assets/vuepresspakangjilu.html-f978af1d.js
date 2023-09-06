import{_ as p,r as o,o as i,c,b as n,d as s,e,a as t}from"./app-da5bd584.js";const l={},u=n("h2",{id:"vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" vuepress")],-1),r={href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"vuepress-theme-reco1-6-6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress-theme-reco1-6-6","aria-hidden":"true"},"#"),s(" vuepress-theme-reco1.6.6")],-1),m={href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>因为我的博客主要用于技术书籍，所以风格趋向于gitbook
那么首先安装一个好看的主题，我选用的 vuepress-theme-reco
去官网按照教程进行安装，安装过程中推荐使用 Yarn 安装
安装完成后再进行下一步操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuepress-plugin-autobar" tabindex="-1"><a class="header-anchor" href="#vuepress-plugin-autobar" aria-hidden="true">#</a> vuepress-plugin-autobar</h2>`,2),g={href:"https://github.com/boboidream/vuepress-bar",target:"_blank",rel:"noopener noreferrer"},h=t(`<h5 id="安装的坑" tabindex="-1"><a class="header-anchor" href="#安装的坑" aria-hidden="true">#</a> 安装的坑</h5><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>因为我在搭建的过程中全程用Yarn，然后这个依赖包是国外的导致下载的时候无法下载.

所以利用yarn安装的时候要写成具体的依赖库github地址来安装

yarn add https://github.com/boboidream/vuepress-bar.git -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="设置侧边栏配置" tabindex="-1"><a class="header-anchor" href="#设置侧边栏配置" aria-hidden="true">#</a> 设置侧边栏配置</h5>`,3),f={href:"https://github.com/boboidream/vuepress-bar",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//导航栏插件</span>
<span class="token keyword">const</span>  autobarOptions  <span class="token operator">=</span> 
<span class="token punctuation">{</span>
  <span class="token comment">// rootDir:&#39;&#39;,  //文档所在的根目录</span>
  <span class="token literal-property property">stripNumbers</span> <span class="token operator">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//从目录名称中删除数字前缀，这有助于进行排序</span>
  <span class="token literal-property property">maxLevel</span> <span class="token operator">:</span>  <span class="token number">20</span><span class="token punctuation">,</span>  <span class="token comment">//子目录遍历的最大递归级别</span>
  <span class="token literal-property property">navPrefix</span> <span class="token operator">:</span>  <span class="token string">&#39;nav&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//导航栏和多边工具条目录的前缀</span>
  <span class="token literal-property property">skipEmptySidebar</span> <span class="token operator">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//如果目录为空，请勿将项目添加到侧栏</span>
  <span class="token literal-property property">skipEmptyNavbar</span> <span class="token operator">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//如果目录为空，请勿将项目添加到导航栏</span>
  <span class="token literal-property property">multipleSideBar</span> <span class="token operator">:</span>  <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//如果有导航栏项，则创建多个侧栏</span>
  <span class="token literal-property property">setHomepage</span> <span class="token operator">:</span>  <span class="token string">&#39;hide&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pinyinNav</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//拼音导航</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
	    <span class="token comment">// 自动生成目录</span>
	    <span class="token punctuation">[</span><span class="token string">&#39;autobar&#39;</span><span class="token punctuation">,</span>autobarOptions<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="设置侧边栏目录结构" tabindex="-1"><a class="header-anchor" href="#设置侧边栏目录结构" aria-hidden="true">#</a> 设置侧边栏目录结构</h5>`,2),x={href:"https://github.com/boboidream/vuepress-bar",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>docs/
	nav.00.article.hidden/
	nav.01.book.hidden/
	nav.02.topic.hidden/
	nav.03.source.hidden/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="设置隐藏菜单" tabindex="-1"><a class="header-anchor" href="#设置隐藏菜单" aria-hidden="true">#</a> 设置隐藏菜单</h5><blockquote><ul><li>因为原插件没有这个参数所以只能自己改,并且对目录的命名有些要求.把隐藏目录的结尾用<code>.hidden</code>来结束</li></ul></blockquote><h5 id="node-modules-vuepress-plugin-autobar-lib-index-js" tabindex="-1"><a class="header-anchor" href="#node-modules-vuepress-plugin-autobar-lib-index-js" aria-hidden="true">#</a> <code>/node_modules/vuepress-plugin-autobar/lib/index.js</code></h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">ready</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>themeConfig<span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>getSiteData <span class="token operator">?</span> ctx<span class="token punctuation">.</span><span class="token function">getSiteData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> ctx<span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>rootDir <span class="token operator">=</span> ctx<span class="token punctuation">.</span>sourceDir<span class="token punctuation">}</span> <span class="token operator">=</span> options<span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>nav<span class="token punctuation">,</span> sidebar<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getConfig</span><span class="token punctuation">(</span>rootDir<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>pinyinNav <span class="token operator">&amp;&amp;</span> nav<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">translitePinyin</span><span class="token punctuation">(</span>nav<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//dancefunk  加上这一段隐藏hidden导航</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nav<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hidden</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>nav<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>link<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
          nav<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token operator">--</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//dancefunk 删除默认首页的侧边栏 首页不用显示侧边栏所以可以隐藏 也加上</span>
      <span class="token keyword">delete</span> sidebar<span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">]</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>themeConfig<span class="token punctuation">.</span>nav <span class="token operator">&amp;&amp;</span> themeConfig<span class="token punctuation">.</span>nav<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        themeConfig<span class="token punctuation">.</span>nav <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>nav<span class="token punctuation">,</span> <span class="token operator">...</span>themeConfig<span class="token punctuation">.</span>nav<span class="token punctuation">]</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        themeConfig<span class="token punctuation">.</span>nav <span class="token operator">=</span> nav
      <span class="token punctuation">}</span>

      themeConfig<span class="token punctuation">.</span>sidebar <span class="token operator">=</span> sidebar<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>nav<span class="token punctuation">,</span> sidebar<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>除此之外,侧边栏标题的单词之前不需要边距所以还需要修改 当前这个文件 <code>/lib/index.js</code> 中</li></ul></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token parameter">dir<span class="token punctuation">,</span> <span class="token punctuation">{</span> navPrefix<span class="token punctuation">,</span> stripNumbers <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> dir<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>sep<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> argsIndex <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&quot;--&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>argsIndex <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> argsIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>navPrefix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;nav.001.xyz&quot; or &quot;nav-001.xyz&quot; or &quot;nav_001.xyz&quot; or &quot;nav 001.xyz&quot; -&gt; &quot;nav&quot;</span>
    <span class="token keyword">const</span> pattern <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">escapeRegExp</span><span class="token punctuation">(</span>navPrefix<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">[.-_ ]?</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>stripNumbers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;001.guide&quot; or &quot;001-guide&quot; or &quot;001_guide&quot; or &quot;001 guide&quot; -&gt; &quot;guide&quot;</span>
    name <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d+[.\\-_ ]?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//dancefunk 注释掉原来的那句return  添加后面那句</span>
  <span class="token comment">// return startCase(name);</span>
  <span class="token keyword">return</span> name<span class="token punctuation">;</span>   <span class="token comment">//书籍子导航标题不需要 单词间距 JavaScript != Java Script dancefunk  </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>vuepress侧边栏深度为3层,如果超过3层会报错,所以要去除层级判断</li></ul></blockquote><h5 id="node-modules-vuepress-theme-reco-helpers-utils-js" tabindex="-1"><a class="header-anchor" href="#node-modules-vuepress-theme-reco-helpers-utils-js" aria-hidden="true">#</a> <code>/node_modules/vuepress-theme-reco/helpers/utils.js</code></h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function resolveItem (item, pages, base, groupDepth = 1) {
  if (typeof item === &#39;string&#39;) {
    return resolvePage(pages, item, base)
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    })
  } else {
  
    //dancefunk 不需要检测层级深度 把下面这段话注释掉就可以了
    // if (groupDepth &gt; 3) {
    //   console.error(
    //     &#39;[vuepress] detected a too deep nested sidebar group.&#39;
    //   )
    // }
    
    
    const children = item.children || []
    if (children.length === 0 &amp;&amp; item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      })
    }
    return {
      type: &#39;group&#39;,
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      children: children.map(child =&gt; resolveItem(child, pages, base, groupDepth + 1)),
      collapsable: item.collapsable !== false
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件夹为中文提示警告" tabindex="-1"><a class="header-anchor" href="#文件夹为中文提示警告" aria-hidden="true">#</a> 文件夹为中文提示警告</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>把文件夹和文件改为了中文，结果dev运行提示警告（vuepress版本1.8.0）：

warn

vue-router.esm.js?8c4f:16
[vue-router] Route with path &quot;/01.技术/05.tool/03.centos.html&quot; contains unencoded characters, 
make sure your path is correctly encoded before passing it to the router. 
Use encodeURI to encode static segments of your path.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改文件位置：node_modules@vuepress\\core\\lib\\node\\internal-plugins\\routes.js</strong></p><p><strong>主要是修改 添加 encodeURI 函数部分</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">routesCode</span> <span class="token punctuation">(</span><span class="token parameter">pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">genRoute</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> pagePath<span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> componentName<span class="token punctuation">,</span>
    <span class="token literal-property property">frontmatter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      layout
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    regularPath<span class="token punctuation">,</span>
    _meta
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  {
    name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>componentName<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    path: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>pagePath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    component: GlobalLayout,
    beforeEnter: (to, from, next) =&gt; {
      ensureAsyncComponentsLoaded(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>layout <span class="token operator">||</span> <span class="token string">&#39;Layout&#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>componentName<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">).then(next)
    },</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>_meta <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n    meta: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>_meta<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  }</span><span class="token template-punctuation string">\`</span></span>

    <span class="token keyword">const</span> dncodedPath <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>pagePath<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dncodedPath <span class="token operator">!==</span> pagePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      code <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">,
  {
    path: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>dncodedPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    redirect: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>pagePath<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  }</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>pagePath<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      code <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">,
  {
    path: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>pagePath <span class="token operator">+</span> <span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    redirect: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>pagePath<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  }</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> decodedRegularPath <span class="token operator">=</span> <span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>regularPath<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>decodedRegularPath <span class="token operator">!==</span> pagePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      code <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">,
  {
    path: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token function">encodeURI</span><span class="token punctuation">(</span>decodedRegularPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,
    redirect: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>pagePath<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
  }</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> code
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新注意" tabindex="-1"><a class="header-anchor" href="#更新注意" aria-hidden="true">#</a> 更新注意！</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>尽量与官网的版本一致，不过也具体要看情况，如果风格能够接受那就可以更新到最新版。
另外记得更新为最新版之前先备份,然后在更新
更新后上面所修改的部分要重新修改一遍，因为更新后插件重新下载覆盖了这一条要牢记！！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function w(q,j){const a=o("ExternalLinkIcon");return i(),c("div",null,[u,n("blockquote",null,[n("p",null,[n("a",r,[s("https://vuepress.vuejs.org/zh/"),e(a)]),s(" - [vuepress官网]")])]),n("blockquote",null,[n("p",null,[n("a",d,[s("https://www.vuepress.cn/"),e(a)]),s(" - [vuepress中文网]")])]),n("blockquote",null,[n("p",null,[n("a",k,[s("https://github.com/vuepress-reco/vuepress-theme-reco"),e(a)]),s(" - [vuepress-theme-reco主题]")])]),v,n("blockquote",null,[n("ul",null,[n("li",null,[s("基于"),n("a",m,[s("vuepress-theme-reco"),e(a)]),s(" 主题进行二次加工")])])]),b,n("blockquote",null,[n("ul",null,[n("li",null,[n("a",g,[s("vuepress-plugin-autobar"),e(a)]),s(" 自动生成侧边栏和导航栏替代GitBook")])])]),h,n("blockquote",null,[n("ul",null,[n("li",null,[s("docs/.vuepress/config.js 中设置侧边栏目录，具体参数请参考插件文档 "),n("a",f,[s("vuepress-plugin-autobar"),e(a)])])])]),y,n("blockquote",null,[n("ul",null,[n("li",null,[s("给出我目前使用的列表结构，具体参数请参考插件文档 "),n("a",x,[s("vuepress-plugin-autobar"),e(a)])])])]),_])}const N=p(l,[["render",w],["__file","vuepresspakangjilu.html.vue"]]);export{N as default};
