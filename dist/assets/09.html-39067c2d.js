import{_ as e,p as i,q as n,Z as d}from"./framework-823c4b5a.js";const a={},l=d(`<h3 id="快速生成模块" tabindex="-1"><a class="header-anchor" href="#快速生成模块" aria-hidden="true">#</a> 快速生成模块</h3><blockquote><ul><li>表示自动生成test模块，自动生成的模块目录包含了config、controller、model和view目录以及common.php公共文件。</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think build --module test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="快速生成控制器类" tabindex="-1"><a class="header-anchor" href="#快速生成控制器类" aria-hidden="true">#</a> 快速生成控制器类</h3><blockquote><ul><li>执行下面的指令可以生成 index模块的 Blog控制器类库文件</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think make:controller index/Blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="快速生成模型类" tabindex="-1"><a class="header-anchor" href="#快速生成模型类" aria-hidden="true">#</a> 快速生成模型类</h3><blockquote><ul><li>执行下面的指令可以生成 index 模块的 Blog 模型类库文件</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think make:model index/Blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="快速生成类库映射文件" tabindex="-1"><a class="header-anchor" href="#快速生成类库映射文件" aria-hidden="true">#</a> 快速生成类库映射文件</h3><blockquote><ul><li>可以使用下面的指令生成类库映射文件，提高系统自动加载的性能。</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:autoload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指令执行成功后，会在rumtime目录下面生成classmap.php文件，生成的类库映射文件会扫描系统目录和 应用目录的类库</p><h3 id="生成路由缓存" tabindex="-1"><a class="header-anchor" href="#生成路由缓存" aria-hidden="true">#</a> 生成路由缓存</h3><blockquote><ul><li>optimize:route如果你的应用定义了比较多的路由规则，可以使用下面的指令生成路由缓存文件，提高系统的路由检测的性能</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:route
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指令执行成功后，会在rumtime目录下面生成route.php 文件，生成的路由缓存文件仅仅支持在应用的路由配置文件中定义的路由（包括方法定义和配置定义）</p><h3 id="清除缓存文件" tabindex="-1"><a class="header-anchor" href="#清除缓存文件" aria-hidden="true">#</a> 清除缓存文件</h3><blockquote><ul><li><ol><li>如果需要清除应用的缓存文件，可以使用下面的命令：</li></ol></li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think clear
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不带任何参数调用clear命令的话，会清除 runtime 目录（包括模板缓存、日志文件及其子目录）下面的所 有的文件，但会保留目录。</p><blockquote><ul><li>2)如果需要清除某个指定目录下面的文件，可以使用：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think clear --path d:\\www\\tp5\\runtime\\log\\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成配置缓存文件" tabindex="-1"><a class="header-anchor" href="#生成配置缓存文件" aria-hidden="true">#</a> 生成配置缓存文件</h3><blockquote><ul><li>1)可以为应用或者模块生成配置缓存文件</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认生成应用的配置缓存文件，调用后会在<code>runtime</code>目录下面生成<code>init.php</code>文件，生成配置缓存文件 后，应用目录下面的<code>config.php</code> <code>common.php</code>以及<code>tags.php</code>不会被加载，被 <code>runtime/init.php</code> 取代。</p><blockquote><ul><li>2)如果需要生成某个模块的配置缓存，可以使用：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:config --module index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>调用后会在<code>runtime/index</code>目录下面生成<code>init.php</code>文件，生成后，<code>index</code>模块目录下面的 <code>config.php common.php</code>以及<code>tags.php</code>不会被加载，被<code>runtime/index/init.php</code>取代</p><h3 id="生成数据表字段缓存" tabindex="-1"><a class="header-anchor" href="#生成数据表字段缓存" aria-hidden="true">#</a> 生成数据表字段缓存</h3><blockquote><ul><li>1)可以通过生成数据表字段信息缓存，提升数据库查询的性能，避免多余的查询。命令如下：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:schema
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会自动生成当前数据库配置文件中定义的数据表字段缓存，也可以指定数据库生成字段缓存（必须有用户权限），例如，下面指定生成demo数据库下面的所有数据表的字段缓存信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:schema --db demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行后会自动在&#39;runtime/schema&#39;目录下面按照数据表生成字段缓存文件。</p><p>如果你的应用使用了不同的数据库连接，可以根据模块来生成，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:schema --module index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会读取index模块的模型来生成数据表字段缓存。</p><p>更新数据表字段缓存也是同样的方式，每次执行都会重新生成缓存。如果需要单独更新某个数据表的缓存， 可以使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:schema --table think_user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>支持指定数据库名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php think optimize:schema --table demo.think_user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建自定义命令" tabindex="-1"><a class="header-anchor" href="#创建自定义命令" aria-hidden="true">#</a> 创建自定义命令</h3><blockquote><ul><li><ol><li>首先在配置文件：application/command.php</li></ol></li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [  
    &#39;app\\home\\command\\Test&#39;  
];  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置自定义的命令行的namespace。</p><blockquote><ul><li>2.创建自定义的命令行</li></ul></blockquote><p>我在home模块中的command创建一个Test.php的文件，这里要特别注意，因为是命令行跑，要特别注意文件名的大小写，我一开始的时候没有注意到这个，文件名用了小写，结果一直跑不出来命令。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\home\\command;  
  
use think\\console\\Command;  
use think\\console\\Input;  
use think\\console\\Output;  
  
class Test extends Command  
{  
    protected function configure()  
    {  
        $this-&gt;setName(&#39;test&#39;)-&gt;setDescription(&#39;Command Test&#39;);  
    }  
  
    protected function execute(Input $input, Output $output)  
    {  
        $output-&gt;writeln(&quot;TestCommand:&quot;);  
    }  
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>讲解一下，这个文件是集成Think底层的Command类的，configure函数是在命令行中用list命令列出所有任务的时候回显示的出的提示，execute函数是说要执行的命令，在这里可以直接调用其他函数，完成例如统计等任务工作，然后用output输出到命令行。</p><p>最后，在根目录中有一个think.php的文件，这个是命令行的入口，文件名可以随意改。代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定义项目路径  
define(&#39;APP_PATH&#39;, &#39;./application/&#39;);  
  
// 加载框架引导文件  
require &#39;./thinkphp/console.php&#39;;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后输入<code>php think test</code>， 这样就会显示出结果了。</p>`,54),t=[l];function s(c,u){return i(),n("div",null,t)}const r=e(a,[["render",s],["__file","09.html.vue"]]);export{r as default};
