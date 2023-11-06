import{_ as o,r as i,o as p,c as l,b as n,d as s,e,a as t}from"./app-6325e707.js";const c={},r=n("h3",{id:"本教程的源码-很重要",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#本教程的源码-很重要","aria-hidden":"true"},"#"),s(" 本教程的源码(很重要！！！)")],-1),u={href:"https://gitee.com/dancefunk/quickask-php",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"composer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#composer","aria-hidden":"true"},"#"),s(" composer")],-1),v={href:"https://www.phpcomposer.com/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://packagist.org/",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Composer就是一个安装包管理工具，服务于PHP脚本语言
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="windows安装" tabindex="-1"><a class="header-anchor" href="#windows安装" aria-hidden="true">#</a> Windows安装</h3>`,2),b={href:"https://pkg.phpcomposer.com/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="mac安装" tabindex="-1"><a class="header-anchor" href="#mac安装" aria-hidden="true">#</a> Mac安装</h3><blockquote><p>利用homebrew来安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="是否安装成功" tabindex="-1"><a class="header-anchor" href="#是否安装成功" aria-hidden="true">#</a> 是否安装成功</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看全局配置" tabindex="-1"><a class="header-anchor" href="#查看全局配置" aria-hidden="true">#</a> 查看全局配置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer config -g -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="更新composer" tabindex="-1"><a class="header-anchor" href="#更新composer" aria-hidden="true">#</a> 更新composer</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer selfupdate

或者（两者是等效的）

composer self-update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手动更换镜像源" tabindex="-1"><a class="header-anchor" href="#手动更换镜像源" aria-hidden="true">#</a> 手动更换镜像源</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>全局配置
这个命令会修改Composer的全局配置文件 config.json
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

取消全局配置
composer config -g --unset repos.packagist

------------

配置只在当前项目生效
这个命令会修改项目下的composer.json
composer config repo.packagist composer https://mirrors.aliyun.com/composer/

取消当前项目配置
composer config --unset repos.packagist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="利用第三方管理工具更换" tabindex="-1"><a class="header-anchor" href="#利用第三方管理工具更换" aria-hidden="true">#</a> 利用第三方管理工具更换</h3>`,12),q={href:"https://github.com/slince/composer-registry-manager",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
composer global require slince/composer-registry-manager

列出所有可使用的镜像
composer repo:ls

切换镜像
composer repo:use aliyun

切换完成后再次查看
composer repo:ls

可以通过全局命令来看composer是否切换成功
composer config -g -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><blockquote><p>搜索包</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>初始化 composer.json</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>安装包</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require
composer install

安装后会产生两个文件和一个文件夹，如下：
composer.json 是包的依赖文件
composer.lock 是包的版本锁定文件
vendor 是包的所在目录

对于 require 和 install 是不相同的
require 会把包的信息添加到 composer.json 文件中并进行 install
install 是直接从 composer.json 或 composer.lock 文件中提取依赖信息，然后进行安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>更新包</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 更新指定包
composer update hashids/hashids

// 安装包
composer require hashids/hashids:2.0.0

// 已安装 升级
composer require hashids/hashids:3.0.0

// 已安装 降级
composer require hashids/hashids:2.0.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>删除包</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>清除缓存</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer clearcache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>查看全部命令</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>打包处理</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer archive

如果项目中安装了不止一个包，可能安装了很多个项目依赖的包
需要对项目中的包依赖进行一个打包处理成为一个压缩文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>生成类库映射文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer dump-autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="composer自动加载" tabindex="-1"><a class="header-anchor" href="#composer自动加载" aria-hidden="true">#</a> composer自动加载</h3><blockquote><p>目录结构</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/test
	composer.json
	index.php
	/common
		functions.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>composer.json</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;common/functions.php&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;common/test.php&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;classmap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;extends/&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>common/functions.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">ShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
	<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>common/test.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;hello test&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>extends/User.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;用户类&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>extends/Db.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Db</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;数据库类&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>完成上面操作，我们打开终端，进入test目录下面，执行命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> dump-autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>index.php</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 引入composer 自动加载器</span>
<span class="token keyword">include_once</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./vendor/autoload.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">ShowName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$user</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$db</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Db</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="composer-json文件解读" tabindex="-1"><a class="header-anchor" href="#composer-json文件解读" aria-hidden="true">#</a> Composer.json文件解读</h3><blockquote><p>以laravel框架配置文件为例</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token comment">//name 表示包的名称，由作者名和项目名组成，用&#39;/&#39;分割</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;laravel/laravel&quot;</span><span class="token punctuation">,</span>   
    
    <span class="token comment">//描述（description是必要属性）</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Laravel Framework&quot;</span><span class="token punctuation">,</span>
    
    <span class="token comment">//一组用于搜索与筛选的与包相关的关键字，keywords是非必须属性</span>
    <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;framework&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;laravel&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    
    <span class="token comment">//表示包的许可证，可以是字符串也可以是字符串数组，license是非必须属性</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>    
    
    <span class="token comment">//包的类型，默认为库library type是非必须属性</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;project&quot;</span><span class="token punctuation">,</span>    
    
    <span class="token comment">//表示必须安装的依赖包列表，这些包必须满足条件，否则不会安装。require是非必须属性</span>
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>       
        <span class="token property">&quot;php&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=7.0.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fideloper/proxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~3.3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;intervention/image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;laravel/framework&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5.5.*&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;laravel/tinker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~1.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//表示开发或运行测试时的依赖包列表。require-Dev是非必须属性</span>
    <span class="token property">&quot;require-dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>      
        <span class="token property">&quot;filp/whoops&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~2.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fzaninotto/faker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~1.4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mockery/mockery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~1.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;phpunit/phpunit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~6.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;symfony/thanks&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//PHP自动加载的映射，支持psr-4和psr-0自动加载，class映射和files引用</span>
    <span class="token property">&quot;autoload&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>        
        <span class="token property">&quot;classmap&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;database/seeds&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;database/factories&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;App\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;app/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token property">&quot;autoload-dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;psr-4&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Tests\\\\&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tests/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//表示scripts使用的任意扩展数据</span>
    <span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>       
        <span class="token property">&quot;laravel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;dont-discover&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token comment">//表示composer允许在安装过程的各个部分执行脚本</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;post-root-package-install&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;@php -r \\&quot;file_exists(&#39;.env&#39;) || copy(&#39;.env.example&#39;, &#39;.env&#39;);\\&quot;&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;post-create-project-cmd&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;@php artisan key:generate&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;post-autoload-dump&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Illuminate\\\\Foundation\\\\ComposerScripts::postAutoloadDump&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;@php artisan package:discover&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;preferred-install&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort-packages&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;optimize-autoloader&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40);function x(f,y){const a=i("ExternalLinkIcon");return p(),l("div",null,[r,n("p",null,[n("strong",null,[n("a",u,[s("https://gitee.com/dancefunk/quickask-php"),e(a)])])]),d,n("ul",null,[n("li",null,[n("strong",null,[n("a",v,[s("composer官网"),e(a)])])]),n("li",null,[n("strong",null,[n("a",m,[s("packagist依赖包官网"),e(a)])])])]),k,n("blockquote",null,[n("p",null,[s("请对照官网的方式来安装："),n("a",b,[s("https://pkg.phpcomposer.com/"),e(a)])])]),h,n("blockquote",null,[n("p",null,[s("CRM - Composer源管理工具："),n("a",q,[s("https://github.com/slince/composer-registry-manager"),e(a)])])]),g])}const w=o(c,[["render",x],["__file","01.html.vue"]]);export{w as default};
