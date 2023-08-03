import{_ as e,o as n,c as i,a as s}from"./app-f25f351f.js";const a={},t=s(`<h3 id="一键生成crud" tabindex="-1"><a class="header-anchor" href="#一键生成crud" aria-hidden="true">#</a> 一键生成CRUD</h3><blockquote><p>在FastAdmin中可以快速的一键生成CRUD，其中包括控制器、模型、视图、验证器、语言包、JS</p></blockquote><h4 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在数据库中创建一个fa_test数据表，编辑好表字段结构，并且一定写上字段注释和表注释

FastAdmin在生成CRUD时会根据字段属性、字段注释、表注释自动生成语言包、组件和排版

请确保php所在的目录已经加入到系统环境变量，否则会提示找不到该命令

打开命令行控制台进入到FastAdmin根目录，也就是think文件所在的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//生成fa_test表的CRUD
php think crud -t test
//生成fa_test表的CRUD且一键生成菜单
php think crud -t test -u 1
//删除fa_test表生成的CRUD
php think crud -t test -d 1
//生成fa_test表的CRUD且控制器生成在二级目录下
php think crud -t test -c mydir/test
//生成fa_test_log表的CRUD且生成对应的控制器为testlog
php think crud -t test_log -c testlog
//生成fa_test表的CRUD且对应的模型名为testmodel
php think crud -t test -m testmodel
//生成fa_test表的CRUD且生成关联模型category，外链为category_id，关联表主键为id
php think crud -t test -r category -k category_id -p id
//生成fa_test表的CRUD且所有以list或data结尾的字段都生成复选框
php think crud -t test --setcheckboxsuffix=list --setcheckboxsuffix=data
//生成fa_test表的CRUD且所有以image和img结尾的字段都生成图片上传组件
php think crud -t test --imagefield=image --imagefield=img
//关联多个表,参数传递时请按顺序依次传递，支持以下几个参数relation/relationmodel/relationforeignkey/relationprimarykey/relationfields/relationmode
php think crud -t test --relation=category --relation=admin --relationforeignkey=category_id --relationforeignkey=admin_id
//生成v_phealth_db2数据库下的fa_test表的CRUD
php think crud -t test --db=v_phealth_db2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数介绍" tabindex="-1"><a class="header-anchor" href="#参数介绍" aria-hidden="true">#</a> 参数介绍</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-t, --table=TABLE                              表名，带不带表前缀均可
-c, --controller[=CONTROLLER]                  生成的控制器名,可选,默认根据表名进行自动解析
-m, --model[=MODEL]                            生成的模型名,可选,默认根据表名进行自动解析
-i, --fields[=FIELDS]                          生成的数据列表中可见的字段，默认是全部
-f, --force[=FORCE]                            是否覆盖模式,如果目标位置已经有对应的控制器或模型会提示
-l, --local[=LOCAL]                            是否本地模型,默认1,置为0时,模型将生成在common模块下
-r, --relation[=RELATION]                      关联模型表名，带不带表前缀均可
-e, --relationmodel[=RELATIONMODEL]            生成的关联模型名,可选,默认根据表名进行自动解析
-k, --relationforeignkey[=RELATIONFOREIGNKEY]  表外键,可选,默认会识别为使用 模型_id 名称
-p, --relationprimarykey[=RELATIONPRIMARYKEY]  关联模型表主键,可选,默认会自动识别
-s, --relationfields[=RELATIONFIELDS]          关联模型表显示的字段，默认是全部
-o, --relationmode[=RELATIONMODE]              关联模型,hasone或belongsto [default: &quot;belongsto&quot;]
-d, --delete[=DELETE]                          删除模式,将删除之前使用CRUD命令生成的相关文件
-u, --menu[=MENU]                              菜单模式,生成CRUD后将继续一键生成菜单
--db[=key]                                     多数据库支持(参数为tp5中配置的数据库key 在application\\config.php添加数据库配置信息)
--setcheckboxsuffix[=SETCHECKBOXSUFFIX]    自动生成复选框的字段后缀
--enumradiosuffix[=ENUMRADIOSUFFIX]        自动生成单选框的字段后缀
--imagefield[=IMAGEFIELD]                  自动生成图片上传组件的字段后缀
--filefield[=FILEFIELD]                    自动生成文件上传组件的字段后缀
--intdatesuffix[=INTDATESUFFIX]            自动生成日期组件的字段后缀
--switchsuffix[=SWITCHSUFFIX]              自动生成可选组件的字段后缀
--citysuffix[=CITYSUFFIX]                  自动生成城市选择组件的字段后缀
--selectpagesuffix[=SELECTPAGESUFFIX]      自动生成Selectpage组件的字段后缀
--ignorefields[=IGNOREFIELDS]                 排除的字段
--editorclass[=EDITORCLASS]                自动生成富文本组件的字段后缀
--headingfilterfield[=HEADINGFILTERFIELD]  自动生成筛选过滤选项卡的字段，默认是status字段
--sortfield[=SORTFIELD]                    排序字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果你的表带有下划级会自动生成带层级的控制器和视图，如果你不希望生成带层级的控制器和视图，请使用-c 参数，
例如：php think crud -t test_log -c testlog将会生成testlog这个控制器，
同理如果你的普通表想生成带层级的控制器则可以使用php think crud -t test -c mydir/test

FastAdmin自带一个fa_test表用于测试CRUD能支持的字段名称和类型，请直接使用php think crud -t test生成查看

生成CRUD后，关联表外键在列表未显示对应的关联表数据信息，此时建议你使用在线命令行插件进行可视化生成

生成CRUD后，在添加或编辑时外键字段未能正确显示关联表数据列表，请查看数据库章节常见问题中的说明

如果需要生成回收站，请务必保证你的表中存在deletetime字段，且默认值为null，
这样在一键CRUD时将自动生成回收站的功能，如果deletetime默认值为0，数据将默认进入回收站

不可以对fa_user/fa_auth_rule/fa_auth_group/fa_auth_group_access/fa_admin/fa_admin_log/
fa_admin/fa_user_group/fa_user_rule等框架核心表进行CRUD，否则原有的框架后台功能将无法正常使用

默认的category_id字段，会将表名做为筛选条件，如对fa_test表做CRUD，则类型为test，
如对fa_test_copy做CRUD，则类型为test_copy，
务必前往常规管理-&gt;系统配置-&gt;字典配置-&gt;分类类型中添加上对应的类型，
然后再到分类管理录入数据后才会生效，否则在Selectpage下拉时会为空。

更多CRUD一键生成可使用的参数请使用php think crud --help查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一键生成菜单" tabindex="-1"><a class="header-anchor" href="#一键生成菜单" aria-hidden="true">#</a> 一键生成菜单</h3><blockquote><p>FastAdmin可通过命令控制台快速的一键生成后台的权限节点菜单规则，同时后台的管理菜单也会同步改变，操作非常简单</p></blockquote><h4 id="准备工作-1" tabindex="-1"><a class="header-anchor" href="#准备工作-1" aria-hidden="true">#</a> 准备工作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先确保已经将FastAdmin配置好，数据库连接正确，同时确保已经通过上一步的一键生成CRUD已经生成了test的CRUD

请确保php所在的目录已经加入到系统环境变量，否则会提示找不到该命令

打开控制台进入到FastAdmin根目录，也就是think文件所在的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令-1" tabindex="-1"><a class="header-anchor" href="#常用命令-1" aria-hidden="true">#</a> 常用命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//一键生成test控制器的权限菜单
php think menu -c test
//一键生成mydir/test控制器的权限菜单
php think menu -c mydir/test
//删除test控制器生成的菜单
php think menu -c test -d 1
//一键全部重新所有控制器的权限菜单
php think menu -c all-controller
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见问题-1" tabindex="-1"><a class="header-anchor" href="#常见问题-1" aria-hidden="true">#</a> 常见问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在使用php think menu前确保你的控制器已经添加或通过php think crud生成好

如果之前已经生成了菜单,需要再次生成,请登录后台手动删除之前生成的菜单或使用
php think menu -c 控制器名 -d 1来删除

如果生成层级目录的菜单，在后台展示时父级菜单会以目录名称显示，如果需要修改可以在
application/admin/lang/zh-cn.php中追加相应的语言包即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一键压缩打包" tabindex="-1"><a class="header-anchor" href="#一键压缩打包" aria-hidden="true">#</a> 一键压缩打包</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在FastAdmin中如果修改了核心的JS或CSS文件，是需要重新压缩打包后在生产环境下才会生效
FastAdmin采用的是基于RequireJS的r.js进行JS和CSS文件的压缩打包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="准备工作-2" tabindex="-1"><a class="header-anchor" href="#准备工作-2" aria-hidden="true">#</a> 准备工作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请先确保你的环境已经安装好Node环境。

首先确认你application/config.php中app_debug的值，
当为true的时候是采用的无压缩的JS和CSS，当为false时采用的是压缩版的JS和CSS。

请确保php所在的目录已经加入到系统环境变量，否则会提示找不到该命令

打开命令行控制台进入到FastAdmin根目录，也就是think文件所在的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令-2" tabindex="-1"><a class="header-anchor" href="#常用命令-2" aria-hidden="true">#</a> 常用命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//一键压缩打包前后台的JS和CSS
php think min -m all -r all
//一键压缩打包后台的JS和CSS
php think min -m backend -r all
//一键压缩打包前后台的JS
php think min -m all -r js
//一键压缩打包后台的CSS
php think min -m backend -r css
//使用uglify进行一键压缩打包后台的JS文件
php think min -m backend -r js -o uglify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见问题-2" tabindex="-1"><a class="header-anchor" href="#常见问题-2" aria-hidden="true">#</a> 常见问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Windows系统需要手动配置node的路径,请参考在Windows下如何压缩打包JS和CSS

如果无法进行打包，可以使用php think min -m all -r all -vvv尝试下，看下错误信息

如果压缩打包后访问不生效，请检查是否是你的浏览器缓存的原因

请不要直接修改以.min.js和.min.css结尾的文件，因为一键压缩打包后会进行覆盖

安装或卸载插件后无需进行压缩打包JS和CSS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="影响文件" tabindex="-1"><a class="header-anchor" href="#影响文件" aria-hidden="true">#</a> 影响文件</h4><blockquote><p>在调试模式和生产环境下所加载的JS和CSS是不一样的，压缩打包会重新生成生产环境下的JS和CSS文件，特别注意下</p></blockquote><h5 id="调试模式" tabindex="-1"><a class="header-anchor" href="#调试模式" aria-hidden="true">#</a> 调试模式</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public/assets/js/require-frontend.js
public/assets/js/require-backend.js
public/assets/css/frontend.css
public/assets/css/backend.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="生产环境-打包压缩后会重新生成以下文件" tabindex="-1"><a class="header-anchor" href="#生产环境-打包压缩后会重新生成以下文件" aria-hidden="true">#</a> 生产环境：(打包压缩后会重新生成以下文件)</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public/assets/js/require-frontend.min.js
public/assets/js/require-backend.min.js
public/assets/css/frontend.min.css
public/assets/css/backend.min.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一键生成api文档" tabindex="-1"><a class="header-anchor" href="#一键生成api文档" aria-hidden="true">#</a> 一键生成API文档</h3><blockquote><p>FastAdmin中的一键生成API文档可以在命令行或后台一键生成我们API接口的接口测试文档，可以直接在线模拟接口请求，查看参数示例和返回示例</p></blockquote><h4 id="准备工作-3" tabindex="-1"><a class="header-anchor" href="#准备工作-3" aria-hidden="true">#</a> 准备工作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请确保你的API模块下的控制器代码没有语法错误，控制器类注释、方法名注释完整，注释规则请参考下方注释规则

请确保你的FastAdmin已经安装成功且能正常登录后台

请确保php所在的目录已经加入到系统环境变量，否则会提示找不到该命令

打开命令行控制台进入到FastAdmin根目录，也就是think文件所在的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令-3" tabindex="-1"><a class="header-anchor" href="#常用命令-3" aria-hidden="true">#</a> 常用命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//一键生成API文档
php think api --force=true
//指定https://www.example.com为API接口请求域名,默认为空
php think api -u https://www.example.com --force=true
//输出自定义文件为myapi.html,默认为api.html
php think api -o myapi.html --force=true
//修改API模板为mytemplate.html，默认为index.html
php think api -e mytemplate.html --force=true
//修改标题为FastAdmin,作者为作者
php think api -t FastAdmin -a Karson --force=true
//查看API接口命令行帮助
php think api -h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数介绍-1" tabindex="-1"><a class="header-anchor" href="#参数介绍-1" aria-hidden="true">#</a> 参数介绍</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-u, --url[=URL]            默认API请求URL地址 [default: &quot;&quot;]
-m, --module[=MODULE]      模块名(admin/index/api) [default: &quot;api&quot;]
-o, --output[=OUTPUT]      输出文件 [default: &quot;api.html&quot;]
-e, --template[=TEMPLATE]  模板文件 [default: &quot;index.html&quot;]
-f, --force[=FORCE]        覆盖模式 [default: false]
-t, --title[=TITLE]        文档标题 [default: &quot;FastAdmin&quot;]
-a, --author[=AUTHOR]      文档作者 [default: &quot;FastAdmin&quot;]
-c, --class[=CLASS]        扩展类 (multiple values allowed)
-l, --language[=LANGUAGE]  语言 [default: &quot;zh-cn&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注释规则" tabindex="-1"><a class="header-anchor" href="#注释规则" aria-hidden="true">#</a> 注释规则</h4><blockquote><p>在我们的控制器中通常分为两部分注释，一是控制器头部的注释，二是控制器方法的注释</p></blockquote><h5 id="控制器注释" tabindex="-1"><a class="header-anchor" href="#控制器注释" aria-hidden="true">#</a> 控制器注释</h5><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">@ApiSector</td><td style="text-align:left;">API分组名称</td><td style="text-align:left;">(测试分组)</td></tr><tr><td style="text-align:left;">@ApiRoute</td><td style="text-align:left;">API接口URL，此@ApiRoute只是基础URL</td><td style="text-align:left;">(/api/test)</td></tr><tr><td style="text-align:left;">@ApiInternal</td><td style="text-align:left;">忽略的控制器,表示此控制将不加入API文档</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">@ApiWeigh</td><td style="text-align:left;">API方法的排序,值越大越靠前</td><td style="text-align:left;">(99)</td></tr></tbody></table><h5 id="控制器方法注释" tabindex="-1"><a class="header-anchor" href="#控制器方法注释" aria-hidden="true">#</a> 控制器方法注释</h5><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;">@ApiTitle</td><td style="text-align:left;">API接口的标题,为空时将自动匹配注释的文本信息</td><td style="text-align:left;">(测试标题)</td></tr><tr><td style="text-align:left;">@ApiSummary</td><td style="text-align:left;">API接口描述</td><td style="text-align:left;">(测试描述)</td></tr><tr><td style="text-align:left;">@ApiRoute</td><td style="text-align:left;">API接口地址,为空时将自动计算请求地址</td><td style="text-align:left;">(/api/test/index)</td></tr><tr><td style="text-align:left;">@ApiMethod</td><td style="text-align:left;">API接口请求方法,默认为GET</td><td style="text-align:left;">(POST)</td></tr><tr><td style="text-align:left;">@ApiSector</td><td style="text-align:left;">API分组,默认按钮控制器或控制器的@ApiSector进行分组</td><td style="text-align:left;">(测试分组)</td></tr><tr><td style="text-align:left;">@ApiParams</td><td style="text-align:left;">API请求参数,如果在@ApiRoute中有对应的{@参数名}，将进行替换</td><td style="text-align:left;">(name=&quot;id&quot;, type=&quot;integer&quot;, required=true, description=&quot;会员ID&quot;)</td></tr><tr><td style="text-align:left;">@ApiHeaders</td><td style="text-align:left;">API请求传递的Headers信息</td><td style="text-align:left;">(name=token, type=string, required=true, description=&quot;请求的Token&quot;)</td></tr><tr><td style="text-align:left;">@ApiReturn</td><td style="text-align:left;">API返回的结果示例</td><td style="text-align:left;">({&quot;code&quot;:1,&quot;msg&quot;:&quot;返回成功&quot;})</td></tr><tr><td style="text-align:left;">@ApiReturnParams</td><td style="text-align:left;">API返回的结果参数介绍</td><td style="text-align:left;">(name=&quot;code&quot;, type=&quot;integer&quot;, required=true, sample=&quot;0&quot;)</td></tr><tr><td style="text-align:left;">@ApiReturnHeaders</td><td style="text-align:left;">API返回的Headers信息</td><td style="text-align:left;">(name=&quot;token&quot;, type=&quot;integer&quot;, required=true, sample=&quot;123456&quot;)</td></tr><tr><td style="text-align:left;">@ApiInternal</td><td style="text-align:left;">忽略的方法,表示此方法将不加入文档</td><td style="text-align:left;">无</td></tr><tr><td style="text-align:left;">@ApiWeigh</td><td style="text-align:left;">API方法的排序,值越大越靠前</td><td style="text-align:left;">(99)</td></tr></tbody></table><h4 id="标准范例" tabindex="-1"><a class="header-anchor" href="#标准范例" aria-hidden="true">#</a> 标准范例</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>api<span class="token punctuation">\\</span>controller</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 测试API控制器
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>app<span class="token punctuation">\\</span>common<span class="token punctuation">\\</span>controller<span class="token punctuation">\\</span>Api</span>
<span class="token punctuation">{</span>

    <span class="token comment">// 无需验证登录的方法</span>
    <span class="token keyword">protected</span> <span class="token variable">$noNeedLogin</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 无需要判断权限规则的方法</span>
    <span class="token keyword">protected</span> <span class="token variable">$noNeedRight</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 首页
     *
     * 可以通过@ApiInternal忽略请求的方法
     * @ApiInternal
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 私有方法
     * 私有的方法将不会出现在文档列表
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">privatetest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;private&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 测试方法
     *
     * @ApiTitle    (测试名称)
     * @ApiSummary  (测试描述信息)
     * @ApiSector   (测试分组)
     * @ApiMethod   (POST)
     * @ApiRoute    (/api/test/test/id/<span class="token punctuation">{</span>id<span class="token punctuation">}</span>/name/<span class="token punctuation">{</span>name<span class="token punctuation">}</span>)
     * @ApiHeaders  (name=token, type=string, required=true, description=&quot;请求的Token&quot;)
     * @ApiParams   (name=&quot;id&quot;, type=&quot;integer&quot;, required=true, description=&quot;会员ID&quot;)
     * @ApiParams   (name=&quot;name&quot;, type=&quot;string&quot;, required=true, description=&quot;用户名&quot;)
     * @ApiParams   (name=&quot;data&quot;, type=&quot;object&quot;, sample=&quot;<span class="token punctuation">{</span>&#39;user_id&#39;:&#39;int&#39;,&#39;user_name&#39;:&#39;string&#39;,&#39;profile&#39;:<span class="token punctuation">{</span>&#39;email&#39;:&#39;string&#39;,&#39;age&#39;:&#39;integer&#39;<span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;, description=&quot;扩展数据&quot;)
     * @ApiReturnParams   (name=&quot;code&quot;, type=&quot;integer&quot;, required=true, sample=&quot;0&quot;)
     * @ApiReturnParams   (name=&quot;msg&quot;, type=&quot;string&quot;, required=true, sample=&quot;返回成功&quot;)
     * @ApiReturnParams   (name=&quot;data&quot;, type=&quot;object&quot;, sample=&quot;<span class="token punctuation">{</span>&#39;user_id&#39;:&#39;int&#39;,&#39;user_name&#39;:&#39;string&#39;,&#39;profile&#39;:<span class="token punctuation">{</span>&#39;email&#39;:&#39;string&#39;,&#39;age&#39;:&#39;integer&#39;<span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;, description=&quot;扩展数据返回&quot;)
     * @ApiReturn   (<span class="token punctuation">{</span>
        &#39;code&#39;:&#39;1&#39;,
        &#39;mesg&#39;:&#39;返回成功&#39;
     * <span class="token punctuation">}</span>)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token variable">$id</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;返回成功&quot;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">request</span><span class="token operator">-&gt;</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见问题-3" tabindex="-1"><a class="header-anchor" href="#常见问题-3" aria-hidden="true">#</a> 常见问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果控制器的方法是private或protected的，则将不会生成相应的API文档

如果注释不生效，请检查注释文本是否正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一键管理插件" tabindex="-1"><a class="header-anchor" href="#一键管理插件" aria-hidden="true">#</a> 一键管理插件</h3><blockquote><p>FastAdmin中的插件可以通过命令行快速的进行安装、卸载、禁用和启用</p></blockquote><h4 id="准备工作-4" tabindex="-1"><a class="header-anchor" href="#准备工作-4" aria-hidden="true">#</a> 准备工作</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>请确保你的FastAdmin已经能正常登录后台

请确保php所在的目录已经加入到系统环境变量，否则会提示找不到该命令

打开命令行控制台进入到FastAdmin根目录，也就是think文件所在的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常用命令-4" tabindex="-1"><a class="header-anchor" href="#常用命令-4" aria-hidden="true">#</a> 常用命令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建一个myaddon本地插件，常用于开发自己的插件时使用
php think addon -a myaddon -c create
//刷新插件缓存，如果禁用启用了插件，部分文件需要刷新才会生效
php think addon -a example -c refresh
//远程安装example插件
php think addon -a example -c install
//卸载本地的example插件
php think addon -a example -c uninstall
//启用本地的example插件
php think addon -a example -c enable
//禁用本地的example插件
php think addon -a example -c disable
//升级本地的example插件
php think addon -a example -c upgrade
//将本地的example插件打包成zip文件
php think addon -a example -c package
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常见问题-4" tabindex="-1"><a class="header-anchor" href="#常见问题-4" aria-hidden="true">#</a> 常见问题</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>付费插件请直接在后台插件管理或FastAdmin官方插件市场下载，然后进行离线安装

如果管理插件后不生效，请在后台右上角清除缓存重试

更多一键管理插件的参数请使用php think addon --help查看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58),d=[t];function l(r,c){return n(),i("div",null,d)}const v=e(a,[["render",l],["__file","08.html.vue"]]);export{v as default};
