import{_ as s,r as l,o as a,c as t,b as e,d as i,e as r,a as n}from"./app-a58d3f97.js";const c={},v=n('<h3 id="基本介绍" tabindex="-1"><a class="header-anchor" href="#基本介绍" aria-hidden="true">#</a> 基本介绍</h3><p><code>ThinkPHP</code>是一个快速、简单的基于<code>MVC</code>和面向对象的轻量级<code>PHP</code>开发框架，遵循<code>Apache2</code>开源协议发布，自2006年诞生以来一直秉承简洁实用的设计原则，在保持出色的性能和至简代码的同时，尤其注重开发体验和易用性，并且拥有众多的原创功能和特性，为<code>WEB</code>应用和<code>API</code>开发提供了强有力的支持。</p>',2),u={href:"https://www.kancloud.cn/manual/thinkphp5",target:"_blank",rel:"noopener noreferrer"},o=n(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><blockquote><ul><li>Composer安装</li><li>Git安装</li><li>源码安装</li></ul></blockquote><p><strong>Composer安装</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -sS https://getcomposer.org/installer | php

mv composer.phar /usr/local/bin/composer

然后在命令行下面，切换到你的web根目录下面并执行下面的命令：
composer create-project topthink/think=5.0.*  tp5  --prefer-dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Git安装</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先克隆下载应用项目仓库
git clone https://github.com/top-think/think tp5

然后切换到tp5目录下面，再克隆核心框架仓库：
git clone https://github.com/top-think/framework thinkphp

两个仓库克隆完成后，就完成了ThinkPHP5.0的Git方式下载，如果需要更新核心框架的时候，只需要切换到thinkphp核心目录下面，然后执行：
git pull https://github.com/top-think/framework
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>源码安装(离线安装)</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>直接下载zip压缩包放到php环境目录下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>project  应用部署目录
├─application           应用目录（可设置）
│  ├─common             公共模块目录（可更改）
│  ├─index              模块目录(可更改)
│  │  ├─config.php      模块配置文件
│  │  ├─common.php      模块函数文件
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  └─ ...            更多类库目录
│  ├─command.php        命令行工具配置文件
│  ├─common.php         应用公共（函数）文件
│  ├─config.php         应用（公共）配置文件
│  ├─database.php       数据库配置文件
│  ├─tags.php           应用行为扩展定义文件
│  └─route.php          路由配置文件
├─extend                扩展类库目录（可定义）
├─public                WEB 部署目录（对外访问目录）
│  ├─static             静态资源存放目录(css,js,image)
│  ├─index.php          应用入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于 apache 的重写
├─runtime               应用的运行时目录（可写，可设置）
├─vendor                第三方类库目录（Composer）
├─thinkphp              框架系统目录
│  ├─lang               语言包目录
│  ├─library            框架核心类库目录
│  │  ├─think           Think 类库包目录
│  │  └─traits          系统 Traits 目录
│  ├─tpl                系统模板目录
│  ├─.htaccess          用于 apache 的重写
│  ├─.travis.yml        CI 定义文件
│  ├─base.php           基础定义文件
│  ├─composer.json      composer 定义文件
│  ├─console.php        控制台入口文件
│  ├─convention.php     惯例配置文件
│  ├─helper.php         助手函数文件（可选）
│  ├─LICENSE.txt        授权说明文件
│  ├─phpunit.xml        单元测试配置文件
│  ├─README.md          README 文件
│  └─start.php          框架引导文件
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="入口文件" tabindex="-1"><a class="header-anchor" href="#入口文件" aria-hidden="true">#</a> 入口文件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ThinkPHP5.0版本的默认自带的入口文件位于public/index.php
实际部署的时候public目录为你的应用对外访问目录

浏览器访问路径为：http://localhost/tp5/public/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态资源访问" tabindex="-1"><a class="header-anchor" href="#静态资源访问" aria-hidden="true">#</a> 静态资源访问</h3><p>网站的资源文件访问不会影响正常的操作访问，只有当访问的资源文件不存在的时候才会解析到入口文件，一般就会提示模块不存在的错误。</p><p>网站的资源文件一般放入public目录的子目录下面，例如下面是一个建议规范：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public
├─index.php     应用入口文件
├─static		静态资源目录   
│  ├─css      	样式目录
│  ├─js         脚本目录
│  └─img      	图像目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>记住，千万不要在<code>public</code>目录之外的任何位置放置资源文件，包括<code>application</code>目录。</strong></p><p>访问资源文件的URL路径是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://tp5.com/static/css/style.css
http://tp5.com/static/js/common.js
http://tp5.com/static/img/picture.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你没有设置域名绑定，而是使用子目录方式访问的话，那么可能的资源访问地址是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost/public/static/css/style.css
http://localhost/public/static/js/common.js
http://localhost/public/static/img/picture.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态常量" tabindex="-1"><a class="header-anchor" href="#静态常量" aria-hidden="true">#</a> 静态常量</h3><ul><li>在模板中可以使用<code>__STATIC__</code> 来输出项目目录但是在路径中缺少public目录，可以在配置文件中自定义静态常量</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 视图输出字符串内容替换
&#39;view_replace_str&#39;       =&gt; [
    &#39;__PUBLIC__&#39; =&gt; dirname($_SERVER[&#39;SCRIPT_NAME&#39;]),
    &#39;__STATIC__&#39; =&gt; dirname($_SERVER[&#39;SCRIPT_NAME&#39;]) . &#39;/static&#39;,
    &#39;__CSS__&#39;    =&gt; dirname($_SERVER[&#39;SCRIPT_NAME&#39;]) . &#39;/static/css&#39;,
    &#39;__JS__&#39;     =&gt; dirname($_SERVER[&#39;SCRIPT_NAME&#39;]) . &#39;/static/js&#39;,
    &#39;__IMG__&#39;    =&gt; dirname($_SERVER[&#39;SCRIPT_NAME&#39;]) . &#39;/static/images&#39;,


加载资源格式：
&lt;linkhref=&quot;__CSS__/style.css&quot;rel=&quot;stylesheet&quot;&gt;
&lt;script src=&quot;__JS__/style.js&quot;&gt;&lt;/script&gt;
&lt;img src=&quot;__IMG__/user_logo.jpg&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调试模式" tabindex="-1"><a class="header-anchor" href="#调试模式" aria-hidden="true">#</a> 调试模式</h3><p><code>ThinkPHP</code>支持调试模式，默认情况下是开启状态（<code>5.0.10+</code>版本开始，默认关闭调试模式，需要自己开启）。调试模式以除错方便优先，而且在异常的时候可以显示尽可能多的信息，所以对性能有一定的影响。</p><p>修改应用配置文件（<code>application/config.php</code>）中的<code>app_debug</code>配置参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 关闭调试模式
&#39;app_debug&#39; =&gt;  false,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为了安全考虑，避免泄露你的服务器WEB目录信息等资料，一定记得正式部署的时候关闭调试模式</strong></p><h3 id="url访问" tabindex="-1"><a class="header-anchor" href="#url访问" aria-hidden="true">#</a> URL访问</h3><p>默认情况下，<code>URL</code>是不区分大小写的，也就是说 <code>URL</code>里面的<strong>模块/控制器/操作</strong>名会自动转换为小写，控制器在最后调用的时候会转换为驼峰法处理。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost/index.php/Index/Blog/read
// 和下面的访问是等效的
http://localhost/index.php/index/blog/read
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果访问下面的地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost/index.php/Index/BlogTest/read
// 和下面的访问是等效的
http://localhost/index.php/index/blogtest/read
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种URL不区分大小写情况下，如果要访问驼峰法的控制器类，则需要使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://localhost/index.php/Index/blog_test/read
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果希望URL访问严格区分大小写，可以在应用配置文件中设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 关闭URL中控制器和操作名的自动转换
&#39;url_convert&#39;    =&gt;  false,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>隐藏入口文件</p><p>在ThinkPHP5.0中，出于优化的URL访问原则，还支持通过URL重写隐藏入口文件，下面以Apache为例说明隐藏应用入口文件index.php的设置。</p><p>下面是Apache的配置过程，可以参考下：</p><blockquote><ul><li>1、httpd.conf配置文件中加载了mod_rewrite.so模块</li><li>2、AllowOverride None 将None改为 All</li><li>3、在应用入口文件同级目录添加.htaccess文件，内容如下：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;IfModule mod_rewrite.c&gt;
Options +FollowSymlinks -Multiviews
RewriteEngine on

RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
&lt;/IfModule&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置信息" tabindex="-1"><a class="header-anchor" href="#配置信息" aria-hidden="true">#</a> 配置信息</h3><blockquote><ul><li>配置文件路径：/tp5/application/config</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//项目配置文件
return [
    // 默认模块名
    &#39;default_module&#39;        =&gt; &#39;index&#39;,
    // 默认控制器名
    &#39;default_controller&#39;    =&gt; &#39;Index&#39;,
    // 默认操作名
    &#39;default_action&#39;        =&gt; &#39;index&#39;,
    //更多配置参数
    //...
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取配置" tabindex="-1"><a class="header-anchor" href="#读取配置" aria-hidden="true">#</a> 读取配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>先引入config 配置类
use think\\Config;

读取config 配置
Config::get(&#39;配置名称&#39;);

或者你需要判断是否存在某个设置参数
Config::has(&#39;配置参数2&#39;);

设置配置参数
Config::set(&#39;配置参数&#39;,&#39;配置值&#39;);
// 或者使用助手函数
config(&#39;配置参数&#39;,&#39;配置值&#39;);

也可以批量设置，例如：
Config::set([
    &#39;配置参数1&#39;=&gt;&#39;配置值&#39;,
    &#39;配置参数2&#39;=&gt;&#39;配置值&#39;
]);
// 或者使用助手函数
config([
    &#39;配置参数1&#39;=&gt;&#39;配置值&#39;,
    &#39;配置参数2&#39;=&gt;&#39;配置值&#39;
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库配置" tabindex="-1"><a class="header-anchor" href="#数据库配置" aria-hidden="true">#</a> 数据库配置</h3><blockquote><ul><li>tp5/application/database.php</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 数据库设置 */
&#39;database&#39;              =&gt; [
    // 数据库类型
    &#39;type&#39;        =&gt; &#39;mysql&#39;,
    // 服务器地址
    &#39;hostname&#39;    =&gt; &#39;127.0.0.1&#39;,
    // 数据库名
    &#39;database&#39;    =&gt; &#39;thinkphp&#39;,
    // 数据库用户名
    &#39;username&#39;    =&gt; &#39;root&#39;,
    // 数据库密码
    &#39;password&#39;    =&gt; &#39;&#39;,
    // 数据库连接端口
    &#39;hostport&#39;    =&gt; &#39;&#39;,
    // 数据库连接参数
    &#39;params&#39;      =&gt; [],
    // 数据库编码默认采用utf8
    &#39;charset&#39;     =&gt; &#39;utf8&#39;,
    // 数据库表前缀
    &#39;prefix&#39;      =&gt; &#39;&#39;,
    // 数据库调试模式
    &#39;debug&#39;       =&gt; false,
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function m(b,p){const d=l("ExternalLinkIcon");return a(),t("div",null,[v,e("blockquote",null,[e("ul",null,[e("li",null,[e("strong",null,[i("官方手册："),e("a",u,[i("在线预览"),r(d)])])])])]),o])}const g=s(c,[["render",m],["__file","01.html.vue"]]);export{g as default};
