import{_ as e,o as i,c as n,a as d}from"./app-1b1b276f.js";const t={},l=d(`<h3 id="数据库配置" tabindex="-1"><a class="header-anchor" href="#数据库配置" aria-hidden="true">#</a> 数据库配置</h3><p>我们给应用定义数据库配置文件（<code>appliation/database.php</code>），里面设置了应用的全局数据库配置信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 数据库类型
    &#39;type&#39;        =&gt; &#39;mysql&#39;,
    // 服务器地址
    &#39;hostname&#39;    =&gt; &#39;127.0.0.1&#39;,
    // 数据库名
    &#39;database&#39;    =&gt; &#39;test&#39;,
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
    &#39;debug&#39;       =&gt; true,
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置长链接" tabindex="-1"><a class="header-anchor" href="#配置长链接" aria-hidden="true">#</a> 配置长链接</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return [
    // 数据库名
    &#39;database&#39;    =&gt; &#39;demo&#39;,
    // 数据库表前缀
    &#39;prefix&#39;      =&gt; &#39;think_&#39;,
    // 数据库连接参数
    &#39;params&#39; =&gt; [
        // 使用长连接
        \\PDO::ATTR_PERSISTENT =&gt; true,
    ],    
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原生查询" tabindex="-1"><a class="header-anchor" href="#原生查询" aria-hidden="true">#</a> 原生查询</h4><p>设置好数据库连接信息后，我们就可以直接进行原生的SQL查询操作了，包括<code>query</code>和<code>execute</code>两个方法，分别用于查询操作和写操作，下面我们来实现数据表<code>think_data</code>的<code>CURD</code>操作。</p><blockquote><ul><li>创建（create）</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 插入记录
$result = Db::execute(&#39;insert into think_data (id, name ,status) values (5, &quot;thinkphp&quot;,1)&#39;);
dump($result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>更新（update）</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 更新记录
$result = Db::execute(&#39;update think_data set name = &quot;framework&quot; where id = 5 &#39;);
dump($result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>读取（read）</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询数据
$result = Db::query(&#39;select * from think_data where id = 5&#39;);
dump($result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>删除（delete）</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 删除数据
$result = Db::execute(&#39;delete from think_data where id = 5 &#39;);
dump($result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>其它操作</li></ul></blockquote><p>可以执行一些其他的数据库操作，原则上，读操作都使用<code>query</code>方法，写操作使用<code>execute</code>方法即可，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 显示数据库列表
$result = Db::query(&#39;show tables from demo&#39;);
dump($result);


// 清空数据表
$result = Db::execute(&#39;TRUNCATE table think_data&#39;);
dump($result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询构造器" tabindex="-1"><a class="header-anchor" href="#查询构造器" aria-hidden="true">#</a> 查询构造器</h3><p>除了原生查询外，5.0还提供了数据库查询构造器，可以更方便执行数据库操作，查询构造器基于PDO实现，对不同的数据库驱动都是统一的语法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 插入记录
Db::table(&#39;think_data&#39;)
    -&gt;insert([&#39;id&#39; =&gt; 18, &#39;name&#39; =&gt; &#39;thinkphp&#39;, &#39;status&#39; =&gt; 1]);

// 更新记录
Db::table(&#39;think_data&#39;)
    -&gt;where(&#39;id&#39;, 18)
    -&gt;update([&#39;name&#39; =&gt; &quot;hello&quot;]);

// 查询数据
$list = Db::table(&#39;think_data&#39;)
	-&gt;field(&#39;name,email&#39;)
    -&gt;where(&#39;id&#39;, 18)
    -&gt;select();

// 删除数据
Db::table(&#39;think_data&#39;)
    -&gt;where(&#39;id&#39;, 18)
    -&gt;delete();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于我们在数据库配置文件中设置了数据表的前缀为<code>think_</code>，因此，<code>table</code>方法可以改成<code>name</code>方法，这样就不会因为数据表前缀的修改而改动<code>CURD</code>代码，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 插入记录
Db::name(&#39;data&#39;)
    -&gt;insert([&#39;id&#39; =&gt; 18, &#39;name&#39; =&gt; &#39;thinkphp&#39;]);

// 更新记录
Db::name(&#39;data&#39;)
    -&gt;where(&#39;id&#39;, 18)
    -&gt;update([&#39;name&#39; =&gt; &quot;framework&quot;]);

// 查询数据
$list = Db::name(&#39;data&#39;)
    -&gt;where(&#39;id&#39;, 18)
    -&gt;select();
dump($list);

// 删除数据
Db::name(&#39;data&#39;)
    -&gt;where(&#39;id&#39;, 18)
    -&gt;delete();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用系统提供的助手函数<code>db</code>则可以进一步简化查询代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$db = db(&#39;data&#39;);
// 插入记录
$db-&gt;insert([&#39;id&#39; =&gt; 20, &#39;name&#39; =&gt; &#39;thinkphp&#39;]);

// 更新记录
$db-&gt;where(&#39;id&#39;, 20)-&gt;update([&#39;name&#39; =&gt; &quot;framework&quot;]);

// 查询数据
$list = $db-&gt;where(&#39;id&#39;, 20)-&gt;select();
dump($list);

// 删除数据
$db-&gt;where(&#39;id&#39;, 20)-&gt;delete();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链式操作" tabindex="-1"><a class="header-anchor" href="#链式操作" aria-hidden="true">#</a> 链式操作</h3><p>使用链式操作可以完成复杂的数据库查询操作，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询十个满足条件的数据 并按照id倒序排列
$list = Db::name(&#39;data&#39;)
    -&gt;where(&#39;status&#39;, 1)
    -&gt;field(&#39;id,name&#39;)
    -&gt;order(&#39;id&#39;, &#39;desc&#39;)
    -&gt;limit(10)
    -&gt;select();
dump($list);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链式操作不分先后，只要在查询方法（这里是<code>select</code>方法）之前调用就行，所以，下面的查询是等效的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询十个满足条件的数据 并按照id倒序排列
$list = Db::name(&#39;data&#39;)
    -&gt;field(&#39;id,name&#39;)
    -&gt;order(&#39;id&#39;, &#39;desc&#39;)
    -&gt;where(&#39;status&#39;, 1)
    -&gt;limit(10)
    -&gt;select();
dump($list);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持链式操作的查询方法包括：</p><table><thead><tr><th style="text-align:left;">方法名</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">select</td><td style="text-align:left;">查询数据集</td></tr><tr><td style="text-align:left;">find</td><td style="text-align:left;">查询单个记录</td></tr><tr><td style="text-align:left;">insert</td><td style="text-align:left;">插入记录</td></tr><tr><td style="text-align:left;">update</td><td style="text-align:left;">更新记录</td></tr><tr><td style="text-align:left;">delete</td><td style="text-align:left;">删除记录</td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">查询值</td></tr><tr><td style="text-align:left;">column</td><td style="text-align:left;">查询列</td></tr><tr><td style="text-align:left;">chunk</td><td style="text-align:left;">分块查询</td></tr><tr><td style="text-align:left;">count等</td><td style="text-align:left;">聚合查询</td></tr></tbody></table><h3 id="事务支持" tabindex="-1"><a class="header-anchor" href="#事务支持" aria-hidden="true">#</a> 事务支持</h3><p>对于事务的支持，最简单的方法就是使用<code>transaction</code>方法，只需要把需要执行的事务操作封装到闭包里面即可自动完成事务，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Db::transaction(function () {
    Db::table(&#39;think_user&#39;)
        -&gt;delete(1);
    Db::table(&#39;think_data&#39;)
        -&gt;insert([&#39;id&#39; =&gt; 28, &#39;name&#39; =&gt; &#39;thinkphp&#39;, &#39;status&#39; =&gt; 1]);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦<code>think_data</code>表写入失败的话，系统会自动回滚，写入成功的话系统会自动提交当前事务。</p><p>也可以手动控制事务的提交，上面的实现代码可以改成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 启动事务
Db::startTrans();
try {
    Db::table(&#39;think_user&#39;)
        -&gt;delete(1);
    Db::table(&#39;think_data&#39;)
        -&gt;insert([&#39;id&#39; =&gt; 28, &#39;name&#39; =&gt; &#39;thinkphp&#39;, &#39;status&#39; =&gt; 1]);
    // 提交事务
    Db::commit();
} catch (\\Exception $e) {
    // 回滚事务
    Db::rollback();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38),s=[l];function a(r,v){return i(),n("div",null,s)}const c=e(t,[["render",a],["__file","05.html.vue"]]);export{c as default};
