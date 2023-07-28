import{_ as e,o as a,c as d,a as i}from"./app-110372b4.js";const l={},n=i(`<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><p>laravel是一个简洁,优雅的PHP开发框架，使用IoC(依赖注入容器)结构和MVC模式。Laravel框架包括数据库迁移、Eloquent ORM(数据库关系)、路由、验证、视图以及Blade模板等等。</p><p>作为一个容器框架,laravel 重点解决大型项目中,各个模块功能冗余,耦合度高的问题.让各个模块的功能代码都能轻松通过laravel框架衔接起来,以保障系统在无数个版本的开发过后,代码依然简洁明了,可读性高.让每个参与该项目的开发者,更加专注于自己的业务逻辑.</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><p>Laravel 使用 <code>Composer</code> 来管理项目依赖。因此，在使用 <code>Laravel</code> 之前，请确保你的机器已经安装了 <code>Composer</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer global require &quot;laravel/installer&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>确保将 <code>composer vender bin</code> 目录放置在你的系统环境变量 <code>$PATH</code> 中，以便系统可以找到 <code>Laravel</code> 的可执行文件。该目录根据您的操作系统存在不同的位置中；一些常见的配置包括：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>macOS: $HOME/.composer/vendor/bin
GNU / Linux 发行版: $HOME/.config/composer/vendor/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后， <code>laravel new</code> 命令会在您指定的目录创建一个全新的 <code>Laravel</code> 项目。例如， <code>laravel new blog</code> 将会创建一个名为 <code>blog</code> 的目录，并已安装好所有的 <code>Laravel</code> 依赖项：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>laravel new blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 Composer 创建项目</p><p>或者，你也可以在终端中运行 <code>create-project</code> 命令来安装 Laravel：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer create-project --prefer-dist laravel/laravel blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="本地开发环境" tabindex="-1"><a class="header-anchor" href="#本地开发环境" aria-hidden="true">#</a> 本地开发环境</h3><p>如果您在本地安装了 PHP，并且您想使用 PHP内置的服务器来为您的应用程序提供服务，则可以使用 <code>serve Artisan</code> 命令。该命令会在 <code>http://localhost:8000</code> 上启动开发服务器：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><blockquote><ul><li>公共目录</li></ul></blockquote><p>安装完 Laravel 之后，你必须将 web 服务器根目录指向 public 目录。该目录下的 index.php 文件将作为所有进入应用程序的 HTTP 请求的前端控制器。</p><blockquote><ul><li>配置文件</li></ul></blockquote><p>Laravel 框架的所有配置文件都放在 config 目录中。每个选项都有注释，方便你随时查看文件并熟悉可用的选项。</p><blockquote><ul><li>目录权限</li></ul></blockquote><p>安装完 Laravel 后，你可能需要给这两个文件配置读写权限：<code>storage</code> 目录和 <code>bootstrap/cache</code> 目录应该允许 <code>Web</code> 服务器写入，否则 <code>Laravel</code> 程序将无法运行。 如果你使用的是 <code>Homestead</code> 虚拟机, 这些权限已经为你配置好了。</p><blockquote><ul><li>应用密钥</li></ul></blockquote><p>安装 <code>Laravel</code> 之后下一件应该做的事就是将应用程序的密钥设置为随机字符串。如果你是通过 <code>Composer</code> 或 <code>Laravel</code> 安装器安装的 <code>Laravel</code>，那这个密钥已经为你通过 <code>php artisan key:generate</code> 命令设置好了。</p><p>通常来说，这个字符串长度为 32 个字符。密钥可以在 <code>.env</code> 环境文件中设置。前提是你要将 <code>.env.example</code> 文件重命名为 <code>.env</code>。 如果应用程序密钥没有被设置，就不能确保你的用户会话和其他加密数据的安全！</p><blockquote><ul><li>其他配置</li></ul></blockquote><p>除了以上的配置，<code>Laravel</code> 几乎就不需要再配置什么了。你随时就能开发！但是，可能的话，还是希望你查看 <code>config/app.php</code> 文件及其注释。它包含几个你可能想要根据你的应用来更改的选项，比如 timezone 和 locale。</p><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>App/		 	目录包含应用程序的核心代码。
	Console/	目录包含了所有自定义的 Artisan 命令。
	Exceptions/ 目录包含了应用的异常处理器，也是应用抛出异常的好地方。
	Http/		目录包含了控制器、中间件和表单请求。几乎所有的进入应用的请求的处理逻辑都被放在这里。
	Providers/	目录包含了应用的所有 服务提供器 。
	Rules/		目录默认不存在，它会在运行 Artisan 命令 make:rule 命令时被创建。包含应用自定义验证规则对象
	
Bootstrap/	目录包含引导框架并配置自动加载的文件。
Config/		目录，顾名思义，包含应用程序所有的配置文件。
Database/		目录包含数据填充和迁移文件。你还可以把它作为 SQLite 数据库存放目录。
public/		目录包含了入口文件 index.php ，它是进入应用程序的所有请求的入口点。
resource/		目录包含了视图和未编译的资源文件（如 LESS、SASS 或 JavaScript）。
routes/		目录包含了应用的所有路由定义
	web.php		路由基本上都要定义在 web.php 文件中
	api.php		包含的路由位于 api 中间件组约束之内，支持频率限制功能，这些路由是无状态的，所以请求通过这些路由进入应用需要通过 token 进行认证并且不能访问 Session 状态。
	console.php	用于定义所有基于闭包的控制台命令
	channels.php	用于注册应用支持的所有事件广播频道	
storage/		目录包含编译的 Blade 模板、基于文件的会话和文件缓存、以及框架生成的其他文件。
	app/		用于存放应用生成的文件
	framework/	用于存放框架生成的文件和缓存
	logs/		存放的是应用的日志文件
tests/			目录包含自动化测试文件。Laravel 已内置了 PHPUnit 的测试范例供你参考。
vendor/		目录包含你的 Composer 依赖包。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),t=[n];function c(o,r){return a(),d("div",null,t)}const v=e(l,[["render",c],["__file","01.html.vue"]]);export{v as default};
