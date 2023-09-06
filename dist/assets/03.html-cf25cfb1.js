import{_ as n,o as s,c as a,a as e}from"./app-da5bd584.js";const t={},i=e(`<h3 id="自动化测试分类" tabindex="-1"><a class="header-anchor" href="#自动化测试分类" aria-hidden="true">#</a> 自动化测试分类</h3><h3 id="单元测试" tabindex="-1"><a class="header-anchor" href="#单元测试" aria-hidden="true">#</a> 单元测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单元测试（unit testing）是指对软件中的最小可测试单元进行检查和验证。
简单来说，单元就是人为规定的最小的被测功能模块，可能是一个单一函数或方法、一个完整的组件或类。

单元测试是最小巧也是最简单的测试——它们通过隔离单个组件的每一个部分，来在最小工作单元上进行断言。

单元测试侧重：检验函数的输出结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="e2e测试" tabindex="-1"><a class="header-anchor" href="#e2e测试" aria-hidden="true">#</a> e2e测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>e2e (端到端) 测试，致力于确保组件的一系列交互是正确的。
它们是更高级别的测试，例如可能会测试用户是否注册、登录以及更新他们的用户名。
这种测试运行起来会比单元测试和快照比对测试慢一些。

e2e测试侧重：从用户视角，对真实系统的访问行为进行仿真
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="快照比对测试" tabindex="-1"><a class="header-anchor" href="#快照比对测试" aria-hidden="true">#</a> 快照比对测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>快照比对测试（snapshot testing）会保存你的 Vue 组件的标记，然后比较每次新生成的测试运行结果。

如果有些东西改变了，开发者就会得到通知，并决定这个改变是刻意为之 (组件更新时) 还是意外发生的 (组件行为不正确)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自动化测试框架" tabindex="-1"><a class="header-anchor" href="#自动化测试框架" aria-hidden="true">#</a> 自动化测试框架</h3><p>Jest、Mocha、Jasmine、sinon、chai、Karma、vue-test-utils都是什么？</p><table><thead><tr><th style="text-align:left;">名词</th><th style="text-align:left;">类型</th><th style="text-align:left;">名词</th></tr></thead><tbody><tr><td style="text-align:left;">Jest</td><td style="text-align:left;">测试框架</td><td style="text-align:left;">Jest由Facebook开发，用于测试JavaScript代码（尤其是使用React JS开发的应用程序集成了断言、JSDom、覆盖率报告等，是一款几乎零配置的测试框架提供snapshot功能</td></tr><tr><td style="text-align:left;">Mocha</td><td style="text-align:left;">测试框架</td><td style="text-align:left;">基于JavaScript的自动化测试框架，用于测试使用Node.js运行的应用程序比较年老的测试框架，在JavaScript界使用更广泛，可参考文献更多</td></tr><tr><td style="text-align:left;">Jasmine</td><td style="text-align:left;">测试框架</td><td style="text-align:left;">主要用于异步测试，是一个功能丰富的JavaScript自动化测试框架Jasmine需要很多配置</td></tr><tr><td style="text-align:left;">sinon</td><td style="text-align:left;">测试框架</td><td style="text-align:left;">用于 JavaScript 的测试监视(spy)、桩(stub)和仿制(mock)功能。不依赖其他类库，兼容任何单元测试框架</td></tr><tr><td style="text-align:left;">chai</td><td style="text-align:left;">断言库</td><td style="text-align:left;">一套TDD(测试驱动开发)/BDD(行为驱动开发)的断言库expect/should库</td></tr><tr><td style="text-align:left;">Karma</td><td style="text-align:left;">运行器</td><td style="text-align:left;">不是测试框架，也不是断言库，是允许你的JavaScript代码在复杂的浏览器运行的工具（抹平浏览器障碍）</td></tr><tr><td style="text-align:left;">vue-test-utils</td><td style="text-align:left;">单元测试工具库</td><td style="text-align:left;">vue官方提供的，专门为测试单文件组件而开发</td></tr></tbody></table><h3 id="jasmine-karma自动化单元测试" tabindex="-1"><a class="header-anchor" href="#jasmine-karma自动化单元测试" aria-hidden="true">#</a> Jasmine+Karma自动化单元测试</h3><ul><li>Jasmine</li><li>Karma</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>karma主要是网页端测试JS过程中的管理工具
karma会将你的js代码引用到浏览器当中，给JS代码一个浏览器的运行环境，这是karma的一个主要功能
它可以监控(Watch)文件的变化，然后自行执行，通过console.log显示测试结果


Jasmine是单元测试框架，首先提供了基本的断言机制，还有其他的高级功能，函数的监控，判断这个函数是不是被调用过
还有可以mock伪装ajax请求的结果等等

istanbul是一个单元测试代码覆盖率检查工具，可以很直观地告诉我们，单元测试对代码的控制程度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装karma" tabindex="-1"><a class="header-anchor" href="#安装karma" aria-hidden="true">#</a> 安装karma</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g karma-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>创建文件夹jstest/

cd jstest/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="项目初始化-package-json" tabindex="-1"><a class="header-anchor" href="#项目初始化-package-json" aria-hidden="true">#</a> 项目初始化(package.json)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add jasmine-core karma-jasmine karma-coverage karma-chrome-launcher karma-firefox-launcher --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="初始化karma" tabindex="-1"><a class="header-anchor" href="#初始化karma" aria-hidden="true">#</a> 初始化karma</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>karma init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ karma init
// 选择测试框架，这里我选择jasmine
Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
&gt; jasmine

// 是否引入Require.js，不需要
Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
&gt; no 

// 选择使用的浏览器，可以使用
//[&#39;Firefox&#39;, &#39;Chrome&#39;, &#39;ChromeHeadless&#39;, &#39;ChromeCanary&#39;, &#39;Safari&#39;, &#39;PhantomJS&#39;, &#39;Opera&#39;, &#39;IE&#39;]
// 这里也可以选择多个浏览器，测试用例将在多个浏览器里执行
Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
&gt;Firefox 
&gt;Chrome
&gt;IE
&gt;


// 告诉需要执行的测试用例的代码路径，支持正则,可以写多个（键入空白执行下一步）
// 如果不小心按了回车键  可以在karma.conf.js中的 \`\`\`files:[]\`\`\` 直接填写    files: [&#39;test/**.js&#39;],
What is the location of your source and test files ?
You can use glob patterns, eg. &quot;js/*.js&quot; or &quot;test/**/*Spec.js&quot;.
Enter empty string to move to the next question.
&gt; test/**/*.js


// 上面指定的路径中需要排除在外的文件
Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. &quot;**/*.swp&quot;.
Enter empty string to move to the next question.
&gt;


// 是否观察文件的变化,自动测试
Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
&gt; yes


Config file generated at &quot;E:\\demo\\karma-test\\karma.conf.js&quot;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编写测试用例" tabindex="-1"><a class="header-anchor" href="#编写测试用例" aria-hidden="true">#</a> 编写测试用例</h3><h5 id="新建目录结构" tabindex="-1"><a class="header-anchor" href="#新建目录结构" aria-hidden="true">#</a> 新建目录结构</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/test
	/index.js
	/index.spec.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="index-js" tabindex="-1"><a class="header-anchor" href="#index-js" aria-hidden="true">#</a> index.js</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 加法函数</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 乘法函数</span>
<span class="token keyword">function</span> <span class="token function">multi</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="index-spec-js" tabindex="-1"><a class="header-anchor" href="#index-spec-js" aria-hidden="true">#</a> index.spec.js</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;测试加法和乘法运算&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;加法测试&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> add5 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment">//这里的结果应该是11 不是10 故意写错让测试框架检查出错误</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;乘法测试&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">var</span> multi5 <span class="token operator">=</span> <span class="token function">multi</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
      <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">multi5</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运行单元测试" tabindex="-1"><a class="header-anchor" href="#运行单元测试" aria-hidden="true">#</a> 运行单元测试</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>karma start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="测试覆盖率" tabindex="-1"><a class="header-anchor" href="#测试覆盖率" aria-hidden="true">#</a> 测试覆盖率</h3><blockquote><p>上面安装插件的时候已经安装了</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add karma-coverage --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="修改karma-conf-js配置" tabindex="-1"><a class="header-anchor" href="#修改karma-conf-js配置" aria-hidden="true">#</a> 修改karma.conf.js配置</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span>    
    <span class="token comment">// 这里配置哪些文件需要统计测试覆盖率，例如，如果你的所有代码文件都在 src文件夹中，你就需要如下配置。</span>
    <span class="token literal-property property">preprocessors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;test/*.js&#39;</span><span class="token operator">:</span> <span class="token string">&#39;coverage&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    
    <span class="token comment">// 配置覆盖率报告的查看方式,type查看类型，可取值html、text等等，dir输出目录</span>
    <span class="token literal-property property">coverageReporter</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">dir</span><span class="token operator">:</span> <span class="token string">&#39;coverage/&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 添加配置报告选择</span>
    <span class="token literal-property property">reporters</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;progress&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;coverage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行<code>karma start</code>，我们能看到生成了<code>coverage</code>目录，在浏览器中打开目录中的<code>index.html</code>我们能看到覆盖率已经生成</p><h3 id="vue项目单元测试" tabindex="-1"><a class="header-anchor" href="#vue项目单元测试" aria-hidden="true">#</a> vue项目单元测试</h3><h3 id="vue-test-utils" tabindex="-1"><a class="header-anchor" href="#vue-test-utils" aria-hidden="true">#</a> vue-test-utils</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue-test-utils是vue官方的单元测试框架，提供了一系列非常方便的工具
使我们更轻松地为vue构建的应用来编写单元测试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么选择jest" tabindex="-1"><a class="header-anchor" href="#为什么选择jest" aria-hidden="true">#</a> 为什么选择jest</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>因为 jest 包含了 karma + mocha + chai + sinon 的所有常用功能，零配置开箱即用
vue-test-utils在Vue和Jest之间提供了一个桥梁，暴露出一些接口
让我们更加方便地通过Jest为Vue应用编写单元测试
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><blockquote><p>通过vue-cli创建模板脚手架时，可以选择是否启用单元测试，并且选择单元测试框架，这样Vue就帮助我们自动配置好了Jest</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>运行命令，创建vue项目
vue create <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

选择<span class="token string">&quot;Manually select features&quot;</span> 和 <span class="token string">&quot;Unit Testing&quot;</span>，以及 <span class="token string">&quot;Jest&quot;</span> 作为测试运行器。

安装完成，cd 进入项目目录中并运行
<span class="token function">npm</span> run test:unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行完成后可看到单元测试结果</p></blockquote><h3 id="分析测试文件" tabindex="-1"><a class="header-anchor" href="#分析测试文件" aria-hidden="true">#</a> 分析测试文件</h3><blockquote><p>test/unit/example.spec.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> shallowMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>
<span class="token keyword">import</span> HelloWorld <span class="token keyword">from</span> <span class="token string">&#39;@/components/HelloWorld.vue&#39;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;HelloWorld.vue&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;renders props.msg when passed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&#39;new message&#39;</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowMount</span><span class="token punctuation">(</span>HelloWorld<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">propsData</span><span class="token operator">:</span> <span class="token punctuation">{</span> msg <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatch</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么以spec-js命名" tabindex="-1"><a class="header-anchor" href="#为什么以spec-js命名" aria-hidden="true">#</a> 为什么以spec.js命名</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spec是specification（基准）的缩写，
vue-test-uitls会默认找tests/unit下面的所有以spec后缀命名的js文件，跑文件里的测试脚本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单元测试的三个步骤" tabindex="-1"><a class="header-anchor" href="#单元测试的三个步骤" aria-hidden="true">#</a> 单元测试的三个步骤</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安排（Arrange）：为测试做好设置。在我们的用例中，是渲染了组件

行动（Act）：对系统执行操作

断言（Assert）：确保真实的结果匹配你的期望，我们需要断言以确保组件运行正确
（断言就是比较，判断正不正确，1+1是不是等于2，就是一个最简单的断言）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> shallowMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/test-utils&quot;</span>
<span class="token keyword">import</span> FormSubmitter <span class="token keyword">from</span> <span class="token string">&quot;@/components/FormSubmitter.vue&quot;</span>
 
<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;FormSubmitter&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;reveals a notification when submitted&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">//安排</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">shallowMount</span><span class="token punctuation">(</span>FormSubmitter<span class="token punctuation">)</span> 
 
    <span class="token comment">//行动</span>
    wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;[data-username]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&quot;alice&quot;</span><span class="token punctuation">)</span>
    wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;form&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&quot;submit.prevent&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> wrapper<span class="token punctuation">.</span>vm<span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
    <span class="token comment">//断言</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;.message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&quot;Thank you for your submission, alice.&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>上面代码中的describe块称为&quot;测试套件&quot;，表示一组相关的测试。
它是一个函数，第一个参数是测试套件的名称，第二个参数是实际执行的函数，分组让测试用例代码结构化，易于维护

it块称为&quot;测试用例&quot;，表示一个单独的测试，是测试的最小单位

expect是断言，它接受一个参数就是运行测试内容的结果，返回一个对象，这个对象来调用匹配器(toBe) ，
匹配器的参数就是我们的预期结果，这样就可以对结果和预期进行对比了，也就可以判断对不对了，
比如expect(1+1).toBe(2)。

Vue 组件单元测试的一般思路：渲染这个组件，然后断言这些标签是否匹配组件的状态。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue测试组件" tabindex="-1"><a class="header-anchor" href="#vue测试组件" aria-hidden="true">#</a> Vue测试组件</h3><h5 id="src-components-submitbutton-vue" tabindex="-1"><a class="header-anchor" href="#src-components-submitbutton-vue" aria-hidden="true">#</a> /src/components/SubmitButton.vue</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;isAdmin&quot;</span><span class="token operator">&gt;</span>Admin Privileges<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>span v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">&gt;</span>Not Authorized<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;SubmitButton&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
                <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">isAdmin</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
                <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="tests-unit-submitbutton-spec-js" tabindex="-1"><a class="header-anchor" href="#tests-unit-submitbutton-spec-js" aria-hidden="true">#</a> /tests/unit/SubmitButton.spec.js</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> SubmitButton <span class="token keyword">from</span> <span class="token string">&quot;../../src/components/SubmitButton&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>shallowMount<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vue/test-utils&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token string">&#39;submit&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">factory</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">propsData</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">shallowMount</span><span class="token punctuation">(</span>SubmitButton<span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token comment">//测试从父组件中接受属性（props）的组件</span>
        <span class="token literal-property property">propsData</span><span class="token operator">:</span><span class="token punctuation">{</span>
            msg<span class="token punctuation">,</span>
            <span class="token operator">...</span>propsData
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;does not have admin privileges&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;renders a message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

       <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;Not Authorized&#39;</span><span class="token punctuation">)</span>
       <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;has admin privileges&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;renders a message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

        <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">isAdmin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;span&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;Admin Privileges&#39;</span><span class="token punctuation">)</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>wrapper<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="最后执行命令-查看测试结果" tabindex="-1"><a class="header-anchor" href="#最后执行命令-查看测试结果" aria-hidden="true">#</a> 最后执行命令，查看测试结果</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn test:unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,64),p=[i];function o(l,c){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","03.html.vue"]]);export{r as default};
