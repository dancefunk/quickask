import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const t="/assets/tag-3fd5c753.png",i="/assets/submit-bb8d1e44.jpg",p="/assets/composer-c3c109af.png",o={},l=e(`<h3 id="本教程的源码" tabindex="-1"><a class="header-anchor" href="#本教程的源码" aria-hidden="true">#</a> 本教程的源码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://gitee.com/dancefunk/ComposerDemo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="准备材料" tabindex="-1"><a class="header-anchor" href="#准备材料" aria-hidden="true">#</a> 准备材料</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、注册(Gitee、Github) 2选1的平台的账号
2、注册packagist账户 https://packagist.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整个过程的完整的目录结构" tabindex="-1"><a class="header-anchor" href="#整个过程的完整的目录结构" aria-hidden="true">#</a> 整个过程的完整的目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.gitignore
LICENSE
README.md
composer.json
index.php
src/
	database.php
	helper.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建线上仓库" tabindex="-1"><a class="header-anchor" href="#创建线上仓库" aria-hidden="true">#</a> 创建线上仓库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在github 或者 gitee 平台上面先创建一个仓库，并设置开源，仓库名称例如：demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="拉取线上仓库到本地" tabindex="-1"><a class="header-anchor" href="#拉取线上仓库到本地" aria-hidden="true">#</a> 拉取线上仓库到本地</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://gitee.com/xxxxxx/demo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="composer初始化" tabindex="-1"><a class="header-anchor" href="#composer初始化" aria-hidden="true">#</a> composer初始化</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>进入到 仓库目录 进行初始化

composer init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Package name (&lt;vendor&gt;/&lt;name&gt;) <span class="token punctuation">[</span>root/demo<span class="token punctuation">]</span><span class="token operator">:</span> funky/demo
Description <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> this is a test composer
Author <span class="token punctuation">[</span>username &lt;username@qq.com&gt;<span class="token punctuation">,</span> n to skip<span class="token punctuation">]</span><span class="token operator">:</span> 
Minimum Stability <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> stable
Package Type (e.g. library<span class="token punctuation">,</span> project<span class="token punctuation">,</span> metapackage<span class="token punctuation">,</span> composer-plugin) <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> library
License <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">:</span> MIT

Define your dependencies.

Would you like to define your dependencies (require) interactively <span class="token punctuation">[</span>yes<span class="token punctuation">]</span>? yes
Search for a package<span class="token operator">:</span> 
Would you like to define your dev dependencies (require-dev) interactively <span class="token punctuation">[</span>yes<span class="token punctuation">]</span>? yes
Search for a package<span class="token operator">:</span> 
Add PSR<span class="token number">-4</span> autoload mapping? Maps namespace <span class="token string">&quot;Funky\\Demo&quot;</span> to the entered relative path. <span class="token punctuation">[</span>src/<span class="token punctuation">,</span> n to skip<span class="token punctuation">]</span><span class="token operator">:</span> n

<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;funky/demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;this is a test composer&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;library&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;username@qq.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minimum-stability&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stable&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Do you confirm generation <span class="token punctuation">[</span>yes<span class="token punctuation">]</span>? 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>library: 这是默认类型，它会简单的将文件复制到 vendor 目录
project: 这表示当前包是一个项目，而不是一个库
metapackage: 当一个空的包，包含依赖并且需要触发依赖的安装，这将不会对系统写入额外的文件
composer-plugin: 一个安装类型为 composer-plugin 的包，它有一个自定义安装类型，可以为其它包提供一个 installler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="贴上完整的composer-json配置" tabindex="-1"><a class="header-anchor" href="#贴上完整的composer-json配置" aria-hidden="true">#</a> 贴上完整的composer.json配置</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;funky/demo&quot;</span><span class="token punctuation">,</span> #包名称
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;this is a test composer&quot;</span><span class="token punctuation">,</span>  #包描述信息
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;library&quot;</span><span class="token punctuation">,</span> #类型，可选 library<span class="token punctuation">,</span> project<span class="token punctuation">,</span> metapackage<span class="token punctuation">,</span> composer-plugin
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span> #开源协议
    <span class="token property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">,</span> #作者
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxxxx@qq.com&quot;</span> #邮箱
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minimum-stability&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dev&quot;</span><span class="token punctuation">,</span> #版本限制 dev开发版 stable 稳定版
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  #表示必须安装的依赖包列表，这些包必须满足条件，否则不会安装
    <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;files&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token string">&quot;src/helper.php&quot;</span>  #载入助手函数
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>  #PHP自动加载的映射，支持psr<span class="token number">-4</span>和psr<span class="token number">-0</span>自动加载，注意目录和命名空间
            <span class="token property">&quot;funky\\\\demo\\\\&quot;</span><span class="token operator">:</span><span class="token string">&quot;src&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建程序文件" tabindex="-1"><a class="header-anchor" href="#创建程序文件" aria-hidden="true">#</a> 创建程序文件</h3><blockquote><p>src/helper.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;helper.php app ...&lt;br/&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/database.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">namespace</span> <span class="token package">wjcms<span class="token punctuation">\\</span>composer</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Database</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;composer index ...&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成类库映射文件" tabindex="-1"><a class="header-anchor" href="#生成类库映射文件" aria-hidden="true">#</a> 生成类库映射文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer dump-autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>然后在看我们的项目，多出来一个vendor目录，里边就是composer的东西

我们在根目录写一个 index.php 来测试一下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>index.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">include</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">funky<span class="token punctuation">\\</span>demo<span class="token punctuation">\\</span>Database</span><span class="token punctuation">;</span>

<span class="token variable">$db</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交git平台" tabindex="-1"><a class="header-anchor" href="#提交git平台" aria-hidden="true">#</a> 提交Git平台</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .
git commit -m &#39;composer test&#39;
git push origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="去线上平台给仓库最新次的提交打上tag标签" tabindex="-1"><a class="header-anchor" href="#去线上平台给仓库最新次的提交打上tag标签" aria-hidden="true">#</a> 去线上平台给仓库最新次的提交打上Tag标签</h3><p><img src="`+t+`" alt="composer"></p><h3 id="提交到packagist" tabindex="-1"><a class="header-anchor" href="#提交到packagist" aria-hidden="true">#</a> 提交到packagist</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://packagist.org/packages/submit

将git仓库的地址提交到composer平台

注意是仓库的访问地址，不是（克隆/下载）的地址

访问地址是 地址栏上面的URL 

这个是访问地址：https://gitee.com/username/demo

这个是克隆地址：https://gitee.com/dancefunk/demo.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="composer"></p><p><img src="'+p+`" alt="composer"></p><h3 id="提交成功" tabindex="-1"><a class="header-anchor" href="#提交成功" aria-hidden="true">#</a> 提交成功</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>提交成功之后，用composer 下载一下自己写的包看一下是否构建成功

composer require funky/demo

注意每次git提交之后，要给最新的提交赋上tag标签，然后在去 packagist.org 上面更新一下最新的版本出来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),c=[l];function r(u,d){return s(),a("div",null,c)}const m=n(o,[["render",r],["__file","02.html.vue"]]);export{m as default};
