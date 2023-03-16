import{_ as l,p as o,q as i,s as n,R as s,t as e,Z as t,n as p}from"./framework-823c4b5a.js";const c={},r=n("h3",{id:"nodejs-模板引擎",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nodejs-模板引擎","aria-hidden":"true"},"#"),s(" NodeJS-模板引擎")],-1),d=n("h3",{id:"xtpl-和-xtemplate-使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#xtpl-和-xtemplate-使用","aria-hidden":"true"},"#"),s(" Xtpl 和 xtemplate 使用")],-1),u={href:"https://github.com/xtemplate/xtpl",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/xtemplate/xtemplate",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ npm install xtpl --save
$ npm install xtemplate --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>控制器</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const xtpl = require(&#39;xtpl&#39;);

db.table(&#39;student&#39;).where(where).select().then(function(data){
    xtpl.renderFile(path.join(__dirname,&#39;../views/student-list.html&#39;),{
        array:data,
        count:count
    },function(err,content){
        if(err)
        {
            console.log(err);
        }
        res.setHeader(&quot;Content-Type&quot;,&quot;text/html;charset=utf-8&quot;);
        res.end(content);
    });
}).catch(function(err){
    console.log(err);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>视图</li></ul></blockquote><p><strong>layout.html</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
	&lt;meta charset=&quot;UTF-8&quot;&gt;
	&lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;div class=&quot;content&quot;&gt;
	    {{{block (&quot;body&quot;)}}}
	&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>student-list.html</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{extend (&#39;./layout.html&#39;)}}   引入主页面 将student-list.html子页面渲染到主页面里面

{{#block (&quot;body&quot;)}}
	{{#each(array)}}
		&lt;tr&gt;
			&lt;td&gt;&lt;input type=&quot;checkbox&quot; value=&quot;{{stu_id}}&quot; /&gt;&lt;/td&gt;
			&lt;td&gt;{{this.stu_id}}&lt;/td&gt;
			&lt;td&gt;&lt;a href=&quot;#&quot;&gt;{{this.stu_name}}&lt;/a&gt;&lt;/td&gt;
			&lt;td&gt;{{this.stu_sex?&quot;男&quot;:&quot;女&quot;}}&lt;/td&gt;
		&lt;/tr&gt;
	{{/each}}
{{/block}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejs使用" tabindex="-1"><a class="header-anchor" href="#ejs使用" aria-hidden="true">#</a> ejs使用</h3>`,9),k={href:"http://www.embeddedjs.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/mde/ejs",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ npm install ejs --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>输出</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在页面中输出变量值，你可以这么用： &lt;div&gt;&lt;%= var01 %&gt;&lt;/div&gt;
如果不希望变量值的内容被转义，那就这么用：&lt;div&gt;&lt;%- var02 %&gt;&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>模块的逻辑支持</li></ul></blockquote><p>所有使用 &lt;% %&gt; 括起来的内容都会被编译成 Javascript，你可以在模版文件中像写 js 一样 Coding，也允许你声明变量，作用域就是当前模版，因为一个模版会被编译成一个 Javascript 函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;% var name = &quot;littledu&quot; %&gt;
&lt;div&gt;
Hello, My Name is &lt;%-name %&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>循环</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
    &lt;% for(var i = 0; i &lt; 10; i++) {%&gt;
    &lt;li&gt;我是列表 &lt;%-i %&gt;&lt;/li&gt;
    &lt;% } %&gt;
&lt;ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>Includes(引用相对路径的模版文件)</li></ul></blockquote><p>例如有 <code>html/index.html</code> 和 <code>html/_block/head.html</code>这两个文件，<br> 你就可以在 <code>index.html</code> 这么用 <code>&lt;% include _block/head.html %&gt;</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
    &lt;% users.forEach(function(user){ %&gt;
    &lt;% include user/show %&gt;
    &lt;% }) %&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ejs-helper" tabindex="-1"><a class="header-anchor" href="#ejs-helper" aria-hidden="true">#</a> EJS Helper</h3><p>我们在 EJS 之外，提供了一些额外的模版函数来简化我们的一些工作。</p><p><strong>github：<a href="GIT%EF%BC%9Ahttps://github.com/willerce/tmt-ejs-helper">https://github.com/willerce/tmt-ejs-helper</a></strong></p><blockquote><ul><li>css()</li></ul></blockquote><p>快速的引用 CSS 文件，并附上注释线上 CSS 绝对路径，便于下游前端使用。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;title&gt;页面标题&lt;/title&gt;
    &lt;%- css(&quot;style-workflow.css&quot;) %&gt;
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;title&gt;页面标题&lt;/title&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;../../dev/css/style-workflow.css&quot;/&gt;
    &lt;!--&lt;link rel=&quot;stylesheet&quot; href=&quot;http://wximg.gtimg.com/tmt/workflow/dist/css/style-workflow.css&quot;/&gt;--&gt;
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>js()</li></ul></blockquote><p>功能与 css() 一致，不复述</p><blockquote><ul><li>img() 占位图</li></ul></blockquote><p>占位图，可以指定高、宽，以及 className</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;%- img(200, 400, &#39;block__img&#39;) %&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img src=&quot;http://temp.im/200x400&quot; class=&quot;block__img&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>text() 占位文本</li></ul></blockquote><p>生成指定长度的占位图，第二个参数为偏移字数 例如，下面这个函数，生成的文本长度可能为 7 ~ 13 位。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span&gt;&lt;%- text(10, 3) %&gt;&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译后：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;span&gt;一二三四五六七八九&lt;/span&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="基于ejs搭建应用" tabindex="-1"><a class="header-anchor" href="#基于ejs搭建应用" aria-hidden="true">#</a> 基于ejs搭建应用</h3><p><strong>文件目录结构</strong></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>demo/
    node_modules/
    public/
        css/
            main.css
        html/
        js/
        views/
            footer.html
            header.html
            index.html
        app.js
        package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-建立项目文件-先建一个ejs-demo文件夹-在ejs-demo运行下面命令-初始化仓库-一路回车" tabindex="-1"><a class="header-anchor" href="#_2-建立项目文件-先建一个ejs-demo文件夹-在ejs-demo运行下面命令-初始化仓库-一路回车" aria-hidden="true">#</a> 2.建立项目文件,先建一个<code>ejs_demo</code>文件夹,在<code>ejs_demo</code>运行下面命令,初始化仓库,一路回车:</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_3-安装两个ejs和express插件" tabindex="-1"><a class="header-anchor" href="#_3-安装两个ejs和express插件" aria-hidden="true">#</a> 3.安装两个ejs和express插件:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>npm install ejs <span class="token operator">--</span>save
npm install express <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-建立文件app-js-写上以下代码" tabindex="-1"><a class="header-anchor" href="#_4-建立文件app-js-写上以下代码" aria-hidden="true">#</a> 4.建立文件app.js,写上以下代码:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">var</span> http<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> express<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> app<span class="token operator">=</span><span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1.在app.js的头上定义ejs:</span>
<span class="token keyword">var</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//定义变量</span>
<span class="token keyword">var</span> tem<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&quot;我是中间部分&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//创建服务器</span>
<span class="token comment">//在控制台输入node app.js启动服务器</span>
http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;服务器地址为:http://localhost:8080&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//挂载静态资源处理中间件,设置css或者js引用文件的静态路径</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>__dirname<span class="token operator">+</span><span class="token string">&quot;/public&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 或者以下这个也可以</span>
<span class="token comment">// app.use(express.static(path.join(__dirname, &#39;public&#39;), {maxAge: 36000}));</span>
<span class="token comment">//设置模板视图的目录</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;views&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;./public/views&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置是否启用视图编译缓存，启用将加快服务器执行效率</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;view cache&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.注册html模板引擎：</span>
app<span class="token punctuation">.</span><span class="token function">engine</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>ejs<span class="token punctuation">.</span>__express<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置模板引擎的格式即运用何种模板引擎</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;view engine&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置路由</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/index&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span>tem<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-写index-html文件" tabindex="-1"><a class="header-anchor" href="#_5-写index-html文件" aria-hidden="true">#</a> 5.写index.html文件</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;IE=edge,chrome=1&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span><span class="token constant">EJS</span><span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;description&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;keywords&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">&quot;/css/main.css&quot;</span> rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&quot;./header.html&quot;</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">%=</span>title<span class="token operator">%</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&quot;./footer.html&quot;</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-写header-html文件" tabindex="-1"><a class="header-anchor" href="#_6-写header-html文件" aria-hidden="true">#</a> 6.写header.html文件:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span>
          content<span class="token operator">=</span>&quot;width<span class="token operator">=</span>device<span class="token operator">-</span>width<span class="token punctuation">,</span> user<span class="token operator">-</span>scalable<span class="token operator">=</span>no<span class="token punctuation">,</span> 
         initial<span class="token operator">-</span>scale<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span> maximum<span class="token operator">-</span>scale<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">,</span> minimum<span class="token operator">-</span>scale<span class="token operator">=</span><span class="token number">1.0</span>&quot;<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">&quot;X-UA-Compatible&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;ie=edge&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>Document<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>我是头部<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-写footer-html文件" tabindex="-1"><a class="header-anchor" href="#_7-写footer-html文件" aria-hidden="true">#</a> 7.写footer.html文件:</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot;
          content=&quot;width=device-width, user-scalable=no, 
    initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;我是尾部&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-写main-css文件" tabindex="-1"><a class="header-anchor" href="#_8-写main-css文件" aria-hidden="true">#</a> 8.写main.css文件:</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>h1<span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span>100px<span class="token punctuation">;</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span>green<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span>20px auto<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
  line<span class="token operator">-</span>height<span class="token operator">:</span>100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="最后运行程序" tabindex="-1"><a class="header-anchor" href="#最后运行程序" aria-hidden="true">#</a> 最后运行程序</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>node app<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,50);function h(x,q){const a=p("ExternalLinkIcon");return o(),i("div",null,[r,d,n("ul",null,[n("li",null,[n("strong",null,[s("Xtpl："),n("a",u,[s("https://github.com/xtemplate/xtpl"),e(a)])])]),n("li",null,[n("strong",null,[s("Xtemplate："),n("a",v,[s("https://github.com/xtemplate/xtemplate"),e(a)])])])]),m,n("ul",null,[n("li",null,[n("strong",null,[s("EJS："),n("a",k,[s("http://www.embeddedjs.com/"),e(a)])])]),n("li",null,[n("strong",null,[s("EJS："),n("a",b,[s("https://github.com/mde/ejs"),e(a)])])])]),g])}const _=l(c,[["render",h],["__file","03.html.vue"]]);export{_ as default};
