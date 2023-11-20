import{_ as e,r as o,o as t,c as i,b as n,d as r,e as p,a as s}from"./app-9f8282b6.js";const l={},c=s(`<h3 id="什么是bower" tabindex="-1"><a class="header-anchor" href="#什么是bower" aria-hidden="true">#</a> 什么是bower</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Bower 是用于 web 前端开发的包管理器。对于前端包管理方面的问题，它提供了一套通用、客观的解决方案。
它通过一个 API 暴露包之间的依赖模型，这样更利于使用更合适的构建工具。
bower 没有系统级的依赖，在不同 app 之间也不互相依赖。      

bower 完全借鉴了npm构思和实现原理,所以后面你会看到它的使用几乎和npm是一模一样.              

bower 是运行在node.js 基础上,所以你的当前环境确保已经安装 node.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="官网" tabindex="-1"><a class="header-anchor" href="#官网" aria-hidden="true">#</a> 官网</h3>`,3),d={href:"https://bower.io/",target:"_blank",rel:"noopener noreferrer"},u=s(`<h3 id="安装bower" tabindex="-1"><a class="header-anchor" href="#安装bower" aria-hidden="true">#</a> 安装bower</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install <span class="token operator">-</span>g bower
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义包的安装目录" tabindex="-1"><a class="header-anchor" href="#自定义包的安装目录" aria-hidden="true">#</a> 自定义包的安装目录</h3><p>首先进入项目目录下，新建文件<code>1.txt</code><br> 然后命令行进入项目目录下，输入命令重命名该文件为<code>.bowerrc</code></p><blockquote><p>mv 1.txt .bowerrc</p></blockquote><p>其次我们可以在目录下面新建一个<code>js/lib/</code>目录用来存放一些bower所安装的一些类库</p><blockquote><p>mkdir js &amp;&amp; cd js &amp;&amp; mkdir lib</p></blockquote><p>在<code>.bowerrc</code>中定义包管理路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;directory&quot; : &quot;js/lib&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bower初始化" tabindex="-1"><a class="header-anchor" href="#bower初始化" aria-hidden="true">#</a> bower初始化</h3><blockquote><p>bower init</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dancefunk&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dancefunk &lt;dancefunk@sina.com&gt;&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;moduleType&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;amd&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;**/.*&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;bower_components&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;js/lib&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;tests&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包的查找" tabindex="-1"><a class="header-anchor" href="#包的查找" aria-hidden="true">#</a> 包的查找</h3><p>比如我想要安装bootstrap的某个插件，但是记不住名字了，就可以直接在命令行输入命令，bower就会列出包含字符串bootstrap的可用包了</p><blockquote><p>bower search bootstrap</p></blockquote><h3 id="包的信息" tabindex="-1"><a class="header-anchor" href="#包的信息" aria-hidden="true">#</a> 包的信息</h3><p>比如我们想要查找jquery都有哪些个版本，输入如下命令：</p><blockquote><p>bower info jquery</p></blockquote><h3 id="包的安装" tabindex="-1"><a class="header-anchor" href="#包的安装" aria-hidden="true">#</a> 包的安装</h3><blockquote><p>bower install jquery --save</p></blockquote><p>然后bower就会从远程下载jquery最新版本到你的js/lib目录下<br> 其中--save参数是保存配置到你的bower.json，你会发现bower.json文件已经多了一行：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
     <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~2.1.4&quot;</span>
      <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包的更新" tabindex="-1"><a class="header-anchor" href="#包的更新" aria-hidden="true">#</a> 包的更新</h3><p>上面安装的是最新版的高版本jquery，假如想要兼容低版本浏览器的呢？<br> 已经查到兼容低版本浏览器的jquery版本为1.11.3，下面直接修改bower.json文件中的jquery版本号如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~1.11.3&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行如下命令,bower就会为你切换jquery的版本了</p><blockquote><p>bower update</p></blockquote><h3 id="查看依赖关系" tabindex="-1"><a class="header-anchor" href="#查看依赖关系" aria-hidden="true">#</a> 查看依赖关系</h3><blockquote><p>bower list</p></blockquote><h3 id="包的卸载" tabindex="-1"><a class="header-anchor" href="#包的卸载" aria-hidden="true">#</a> 包的卸载</h3><p>卸载包可以使用uninstall 命令：</p><blockquote><p>bower uninstall jquery</p></blockquote>`,32);function b(v,k){const a=o("ExternalLinkIcon");return t(),i("div",null,[c,n("p",null,[n("a",d,[r("https://bower.io/"),p(a)])]),u])}const h=e(l,[["render",b],["__file","10.html.vue"]]);export{h as default};
