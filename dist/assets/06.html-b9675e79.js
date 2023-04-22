import{_ as e,p as i,q as n,Y as s}from"./framework-aa5c4115.js";const d={},l=s(`<h3 id="模型-验证器" tabindex="-1"><a class="header-anchor" href="#模型-验证器" aria-hidden="true">#</a> 模型&amp;&amp;验证器</h3><h4 id="定义一个user模型类" tabindex="-1"><a class="header-anchor" href="#定义一个user模型类" aria-hidden="true">#</a> 定义一个User模型类：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\model;

use think\\Model;

class User extends Model
{
	// 设置当前模型对应的完整数据表名称
    protected $table = &#39;think_user&#39;;
    
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模型调用" tabindex="-1"><a class="header-anchor" href="#模型调用" aria-hidden="true">#</a> 模型调用</h4><p>模型类可以使用静态调用或者实例化调用两种方式，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 静态调用
$user = User::get(1);
$user-&gt;name = &#39;thinkphp&#39;;
$user-&gt;save();

// 实例化模型
$user = new User;
$user-&gt;name= &#39;thinkphp&#39;;
$user-&gt;save();

// 使用 Loader 类实例化（单例）
$user = Loader::model(&#39;User&#39;);

// 或者使用助手函数\`model\`
$user = model(&#39;User&#39;);
$user-&gt;name= &#39;thinkphp&#39;;
$user-&gt;save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模型初始化" tabindex="-1"><a class="header-anchor" href="#模型初始化" aria-hidden="true">#</a> 模型初始化</h4><p>模型同样支持初始化，与控制器的初始化不同的是，模型的初始化是重写<code>Model</code>的<code>initialize</code>，具体如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\model;

use think\\Model;

class Index extends Model
{

    //自定义初始化
    protected function initialize()
    {
        //需要调用\`Model\`的\`initialize\`方法
        parent::initialize();
        //TODO:自定义的初始化
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样也可以使用静态<code>init</code>方法，需要注意的是<code>init</code>只在第一次实例化的时候执行，并且方法内需要注意静态调用的规范，具体如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\model;

use think\\Model;

class Index extends Model
{

    //自定义初始化
    protected static function init()
    {
        //TODO:自定义的初始化
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新增" tabindex="-1"><a class="header-anchor" href="#新增" aria-hidden="true">#</a> 新增</h3><h4 id="添加一条数据" tabindex="-1"><a class="header-anchor" href="#添加一条数据" aria-hidden="true">#</a> 添加一条数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user           = new User;
$user-&gt;name     = &#39;thinkphp&#39;;
$user-&gt;email    = &#39;thinkphp@qq.com&#39;;
$user-&gt;save();

也可以使用data方法批量赋值：

$user = new User;
$user-&gt;data([
    &#39;name&#39;  =&gt;  &#39;thinkphp&#39;,
    &#39;email&#39; =&gt;  &#39;thinkphp@qq.com&#39;
]);
$user-&gt;save();


或者直接在实例化的时候传入数据

$user = new User([
    &#39;name&#39;  =&gt;  &#39;thinkphp&#39;,
    &#39;email&#39; =&gt;  &#39;thinkphp@qq.com&#39;
]);
$user-&gt;save();

如果需要过滤非数据表字段的数据，可以使用：

$user = new User($_POST);
// 过滤post数组中的非数据表字段数据
$user-&gt;allowField(true)-&gt;save();

如果你通过外部提交赋值给模型，并且希望指定某些字段写入，可以使用：

$user = new User($_POST);
// post数组中只有name和email字段会写入
$user-&gt;allowField([&#39;name&#39;,&#39;email&#39;])-&gt;save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取自增id" tabindex="-1"><a class="header-anchor" href="#获取自增id" aria-hidden="true">#</a> 获取自增ID</h4><p>如果要获取新增数据的自增ID，可以使用下面的方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user           = new User;
$user-&gt;name     = &#39;thinkphp&#39;;
$user-&gt;email    = &#39;thinkphp@qq.com&#39;;
$user-&gt;save();
// 获取自增ID
echo $user-&gt;id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这里其实是获取模型的主键，如果你的主键不是id，而是user_id的话，其实获取自增ID就变成这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user           = new User;
$user-&gt;name     = &#39;thinkphp&#39;;
$user-&gt;email    = &#39;thinkphp@qq.com&#39;;
$user-&gt;save();
// 获取自增ID
echo $user-&gt;user_id;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意不要在同一个实例里面多次新增数据，如果确实需要多次新增，那么可以用下面的方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user           = new User;
$user-&gt;name     = &#39;thinkphp&#39;;
$user-&gt;email    = &#39;thinkphp@qq.com&#39;;
$user-&gt;save();
$user-&gt;name     = &#39;onethink&#39;;
$user-&gt;email    = &#39;onethink@qq.com&#39;;
// 第二次开始必须使用下面的方式新增
$user-&gt;isUpdate(false)-&gt;save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加多条数据" tabindex="-1"><a class="header-anchor" href="#添加多条数据" aria-hidden="true">#</a> 添加多条数据</h4><p>支持批量新增，可以使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user = new User;
$list = [
    [&#39;name&#39;=&gt;&#39;thinkphp&#39;,&#39;email&#39;=&gt;&#39;thinkphp@qq.com&#39;],
    [&#39;name&#39;=&gt;&#39;onethink&#39;,&#39;email&#39;=&gt;&#39;onethink@qq.com&#39;]
];
$user-&gt;saveAll($list);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新" tabindex="-1"><a class="header-anchor" href="#更新" aria-hidden="true">#</a> 更新</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在取出数据后，更改字段内容后更新数据。

$user = User::get(1);
$user-&gt;name     = &#39;thinkphp&#39;;
$user-&gt;email    = &#39;thinkphp@qq.com&#39;;
$user-&gt;save();


也可以直接带更新条件来更新数据

$user = new User;
// save方法第二个参数为更新条件
$user-&gt;save([
    &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
    &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;
],[&#39;id&#39; =&gt; 1]);

上面两种方式更新数据，如果需要过滤非数据表字段的数据，可以使用：

$user = new User();
// 过滤post数组中的非数据表字段数据
$user-&gt;allowField(true)-&gt;save($_POST,[&#39;id&#39; =&gt; 1]);

如果你通过外部提交赋值给模型，并且希望指定某些字段写入，可以使用：

$user = new User();
// post数组中只有name和email字段会写入
$user-&gt;allowField([&#39;name&#39;,&#39;email&#39;])-&gt;save($_POST, [&#39;id&#39; =&gt; 1]);

可以使用saveAll方法批量更新数据，例如：

$user = new User;
$list = [
    [&#39;id&#39;=&gt;1, &#39;name&#39;=&gt;&#39;thinkphp&#39;, &#39;email&#39;=&gt;&#39;thinkphp@qq.com&#39;],
    [&#39;id&#39;=&gt;2, &#39;name&#39;=&gt;&#39;onethink&#39;, &#39;email&#39;=&gt;&#39;onethink@qq.com&#39;]
];
$user-&gt;saveAll($list);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><p>删除模型数据，可以在实例化后调用delete方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user = User::get(1);
$user-&gt;delete();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据主键删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User::destroy(1);
// 支持批量删除多个数据
User::destroy(&#39;1,2,3&#39;);
// 或者
User::destroy([1,2,3]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 删除状态为0的数据
User::destroy([&#39;status&#39; =&gt; 0]);

还支持使用闭包删除，例如：
User::destroy(function($query){
    $query-&gt;where(&#39;id&#39;,&#39;&gt;&#39;,10);
});

或者通过数据库类的查询条件删除
User::where(&#39;id&#39;,&#39;&gt;&#39;,10)-&gt;delete();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>获取单个数据的方法包括：


取出主键为1的数据
$user = User::get(1);
echo $user-&gt;name;

// 使用数组查询
$user = User::get([&#39;name&#39; =&gt; &#39;thinkphp&#39;]);

// 使用闭包查询
$user = User::get(function($query){
    $query-&gt;where(&#39;name&#39;, &#39;thinkphp&#39;);
});
echo $user-&gt;name;


获取多个数据

取出多个数据：
// 根据主键获取多个数据
$list = User::all(&#39;1,2,3&#39;);
// 或者使用数组
$list = User::all([1,2,3]);
foreach($list as $key=&gt;$user){
    echo $user-&gt;name;
}
// 使用数组查询
$list = User::all([&#39;status&#39;=&gt;1]);
// 使用闭包查询
$list = User::all(function($query){
    $query-&gt;where(&#39;status&#39;, 1)-&gt;limit(3)-&gt;order(&#39;id&#39;, &#39;asc&#39;);
});
foreach($list as $key=&gt;$user){
    echo $user-&gt;name;
}

获取某个字段或者某个列的值
// 获取某个用户的积分
User::where(&#39;id&#39;,10)-&gt;value(&#39;score&#39;);
// 获取某个列的所有值
User::where(&#39;status&#39;,1)-&gt;column(&#39;name&#39;);
// 以id为索引
User::where(&#39;status&#39;,1)-&gt;column(&#39;name&#39;,&#39;id&#39;);
User::where(&#39;status&#39;,1)-&gt;column(&#39;id,name&#39;); // 同tp3的getField

简单方法查询
User::where(&#39;id&#39;,&#39;&gt;&#39;,10)-&gt;select();
User::where(&#39;name&#39;,&#39;thinkphp&#39;)-&gt;find();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聚合" tabindex="-1"><a class="header-anchor" href="#聚合" aria-hidden="true">#</a> 聚合</h3><p>在模型中也可以调用数据库的聚合方法进行查询，例如：</p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">count</td><td style="text-align:left;">统计数量，参数是要统计的字段名（可选）</td></tr><tr><td style="text-align:left;">max</td><td style="text-align:left;">获取最大值，参数是要统计的字段名（必须）</td></tr><tr><td style="text-align:left;">min</td><td style="text-align:left;">获取最小值，参数是要统计的字段名（必须）</td></tr><tr><td style="text-align:left;">avg</td><td style="text-align:left;">获取平均值，参数是要统计的字段名（必须）</td></tr><tr><td style="text-align:left;">sum</td><td style="text-align:left;">获取总分，参数是要统计的字段名（必须）</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>静态调用：
User::count();
User::where(&#39;status&#39;,&#39;&gt;&#39;,0)-&gt;count();
User::where(&#39;status&#39;,1)-&gt;avg(&#39;score&#39;);
User::max(&#39;score&#39;);

动态调用：
$user = new User;
$user-&gt;count();
$user-&gt;where(&#39;status&#39;,&#39;&gt;&#39;,0)-&gt;count();
$user-&gt;where(&#39;status&#39;,1)-&gt;avg(&#39;score&#39;);
$user-&gt;max(&#39;score&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取器" tabindex="-1"><a class="header-anchor" href="#获取器" aria-hidden="true">#</a> 获取器</h3><p>获取器的作用是在获取数据的字段值后自动进行处理，例如，我们需要对状态值进行转换，可以使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class User extends Model 
{
    public function getStatusAttr($value)
    {
        $status = [-1=&gt;&#39;删除&#39;,0=&gt;&#39;禁用&#39;,1=&gt;&#39;正常&#39;,2=&gt;&#39;待审核&#39;];
        return $status[$value];
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据表的字段会自动转换为驼峰法，一般status字段的值采用数值类型，我们可以通过获取器定义，自动转换为字符串描述。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user = User::get(1);
echo $user-&gt;status; // 例如输出&quot;正常&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取器还可以定义数据表中不存在的字段，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class User extends Model 
{
    public function getStatusTextAttr($value,$data)
    {
        $status = [-1=&gt;&#39;删除&#39;,0=&gt;&#39;禁用&#39;,1=&gt;&#39;正常&#39;,2=&gt;&#39;待审核&#39;];
        return $status[$data[&#39;status&#39;]];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就可以直接使用status_text字段的值了，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user = User::get(1);
echo $user-&gt;status_text; // 例如输出&quot;正常&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>获取器只有当获取某个数据属性的时候自动触发，如果你要获取包含获取器处理的全部数据属性的话，可以使用下面的方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$user = User::get(1);
// 获取全部获取器数据
dump($user-&gt;toArray());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改器" tabindex="-1"><a class="header-anchor" href="#修改器" aria-hidden="true">#</a> 修改器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>修改器的作用是可以在数据赋值的时候自动进行转换处理，例如：

class User extends Model 
{
    public function setNameAttr($value)
    {
        return strtolower($value);
    }
}

如下代码实际保存到数据库中的时候会转为小写
$user = new User();
$user-&gt;name = &#39;THINKPHP&#39;;
$user-&gt;save();
echo $user-&gt;name; // thinkphp

也可以进行序列化字段的组装：
class User extends Model 
{
    public function setNameAttr($value,$data)
    {
        return serialize($data);
    }
}

批量修改
除了赋值的方式可以触发修改器外，还可以用下面的方法批量触发修改器

$user = new User();
$data[&#39;name&#39;] = &#39;THINKPHP&#39;;
$data[&#39;email&#39;] = &#39;thinkphp@qq.com&#39;;
$user-&gt;data($data, true);
$user-&gt;save();
echo $user-&gt;name; // thinkphp

或者直接使用save方法触发，例如：

$user = new User();
$data[&#39;name&#39;] = &#39;THINKPHP&#39;;
$data[&#39;email&#39;] = &#39;thinkphp@qq.com&#39;;
$user-&gt;save($data);
echo $user-&gt;name; // thinkphp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="时间戳" tabindex="-1"><a class="header-anchor" href="#时间戳" aria-hidden="true">#</a> 时间戳</h3><p>系统支持自动写入创建和更新的时间戳字段，有两种方式配置支持。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一种方式，是在数据库配置文件中添加全局设置：
// 开启自动写入时间戳字段
&#39;auto_timestamp&#39; =&gt; true,


第二种是直接在单独的模型类里面设置：
protected $autoWriteTimestamp = true;

如果这两个地方设置为true，默认识别为整型int类型，如果你的时间字段不是int类型的话，
例如使用datetime类型的话，可以这样设置：

// 开启自动写入时间戳字段
&#39;auto_timestamp&#39; =&gt; &#39;datetime&#39;,

或者

protected $autoWriteTimestamp = &#39;datetime&#39;;

如果是关闭全局的自动时间写入，则可以使用：

// 关闭全局自动写入时间字段
&#39;auto_timestamp&#39; =&gt; false,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证器" tabindex="-1"><a class="header-anchor" href="#验证器" aria-hidden="true">#</a> 验证器</h3><p>ThinkPHP5.0验证使用独立的<code>\\think\\Validate</code>类或者验证器进行验证。</p><h4 id="独立验证" tabindex="-1"><a class="header-anchor" href="#独立验证" aria-hidden="true">#</a> 独立验证</h4><p>任何时候，都可以使用<code>Validate</code>类进行独立的验证操作，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$validate = new Validate([
    &#39;name&#39;  =&gt; &#39;require|max:25&#39;,
    &#39;email&#39; =&gt; &#39;email&#39;
]);
$data = [
    &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
    &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;
];
if (!$validate-&gt;check($data)) {
    dump($validate-&gt;getError());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是5.0推荐的验证方式，为具体的验证场景或者数据表定义好验证器类，直接调用验证类的<code>check</code>方法即可完成验证，下面是一个例子：</p><p>我们定义一个<code>\\app\\index\\validate\\User</code>验证器类用于<code>User</code>的验证。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\validate;

use think\\Validate;

class User extends Validate
{
    protected $rule = [
        &#39;name&#39;  =&gt;  &#39;require|max:25&#39;,
        &#39;email&#39; =&gt;  &#39;email&#39;,
    ];

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要进行<code>User</code>验证的地方，添加如下代码即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$data = [
    &#39;name&#39;=&gt;&#39;thinkphp&#39;,
    &#39;email&#39;=&gt;&#39;thinkphp@qq.com&#39;
];

$validate = Loader::validate(&#39;User&#39;);

if(!$validate-&gt;check($data)){
    dump($validate-&gt;getError());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用助手函数实例化验证器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$validate = validate(&#39;User&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="验证规则" tabindex="-1"><a class="header-anchor" href="#验证规则" aria-hidden="true">#</a> 验证规则</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$rule = [
    &#39;name&#39;  =&gt; &#39;require|max:25&#39;,
    &#39;age&#39;   =&gt; &#39;number|between:1,120&#39;,
    &#39;email&#39; =&gt; &#39;email&#39;,
];

$msg = [
    &#39;name.require&#39; =&gt; &#39;名称必须&#39;,
    &#39;name.max&#39;     =&gt; &#39;名称最多不能超过25个字符&#39;,
    &#39;age.number&#39;   =&gt; &#39;年龄必须是数字&#39;,
    &#39;age.between&#39;  =&gt; &#39;年龄只能在1-120之间&#39;,
    &#39;email&#39;        =&gt; &#39;邮箱格式错误&#39;,
];

$data = [
    &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
    &#39;age&#39;   =&gt; 10,
    &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;,
];

$validate = new Validate($rule, $msg);
$result   = $validate-&gt;check($data);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用默认的错误提示信息" tabindex="-1"><a class="header-anchor" href="#使用默认的错误提示信息" aria-hidden="true">#</a> 使用默认的错误提示信息</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$rule = [
    &#39;name&#39;  =&gt; &#39;require|max:25&#39;,
    &#39;age&#39;   =&gt; &#39;number|between:1,120&#39;,
    &#39;email&#39; =&gt; &#39;email&#39;,
];

$data = [
    &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
    &#39;age&#39;   =&gt; 121,
    &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;,
];
$validate = new Validate($rule);
$result   = $validate-&gt;check($data);
if(!$result){
    echo $validate-&gt;getError();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="验证场景" tabindex="-1"><a class="header-anchor" href="#验证场景" aria-hidden="true">#</a> 验证场景</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$rule = [
    &#39;name&#39;  =&gt; &#39;require|max:25&#39;,
    &#39;age&#39;   =&gt; &#39;number|between:1,120&#39;,
    &#39;email&#39; =&gt; &#39;email&#39;,
];
$msg = [
    &#39;name.require&#39; =&gt; &#39;名称必须&#39;,
    &#39;name.max&#39;     =&gt; &#39;名称最多不能超过25个字符&#39;,
    &#39;age.number&#39;   =&gt; &#39;年龄必须是数字&#39;,
    &#39;age.between&#39;  =&gt; &#39;年龄只能在1-120之间&#39;,
    &#39;email&#39;        =&gt; &#39;邮箱格式错误&#39;,
];
$data = [
    &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
    &#39;age&#39;   =&gt; 10,
    &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;,
];
$validate = new Validate($rule);
$validate-&gt;scene(&#39;edit&#39;, [&#39;name&#39;, &#39;age&#39;]);
$result = $validate-&gt;scene(&#39;edit&#39;)-&gt;check($data);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>表示验证edit场景（该场景定义只需要验证name和age字段）。</p><p>如果使用了验证器，可以直接在类里面定义场景，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\validate;

use think\\Validate;

class User extends Validate
{
    protected $rule =   [
        &#39;name&#39;  =&gt; &#39;require|max:25&#39;,
        &#39;age&#39;   =&gt; &#39;number|between:1,120&#39;,
        &#39;email&#39; =&gt; &#39;email&#39;,    
    ];
    
    protected $message  =   [
        &#39;name.require&#39; =&gt; &#39;名称必须&#39;,
        &#39;name.max&#39;     =&gt; &#39;名称最多不能超过25个字符&#39;,
        &#39;age.number&#39;   =&gt; &#39;年龄必须是数字&#39;,
        &#39;age.between&#39;  =&gt; &#39;年龄只能在1-120之间&#39;,
        &#39;email&#39;        =&gt; &#39;邮箱格式错误&#39;,    
    ];
    
    protected $scene = [
        &#39;edit&#39;  =&gt;  [&#39;name&#39;,&#39;age&#39;],
    ];
    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再需要验证的地方直接使用 scene 方法验证</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$data = [
    &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
    &#39;age&#39;   =&gt; 10,
    &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;,
];

$validate = new \\app\\index\\validate\\User($rule);
$result = $validate-&gt;scene(&#39;edit&#39;)-&gt;check($data);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制器验证" tabindex="-1"><a class="header-anchor" href="#控制器验证" aria-hidden="true">#</a> 控制器验证</h4><p>如果你需要在控制器中进行验证，并且继承了<code>\\think\\Controller</code>的话，可以调用控制器类提供的<code>validate</code>方法进行验证，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$result = $this-&gt;validate(
    [
        &#39;name&#39;  =&gt; &#39;thinkphp&#39;,
        &#39;email&#39; =&gt; &#39;thinkphp@qq.com&#39;,
    ],
    [
        &#39;name&#39;  =&gt; &#39;require|max:25&#39;,
        &#39;email&#39;   =&gt; &#39;email&#39;,
    ]);
if(true !== $result){
    // 验证失败 输出错误信息
    dump($result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果定义了验证器类的话，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\validate;

use think\\Validate;

class User extends Validate
{
    protected $rule = [
        &#39;name&#39;  =&gt;  &#39;require|max:25&#39;,
        &#39;email&#39; =&gt;  &#39;email&#39;,
    ];
    
    protected $message = [
        &#39;name.require&#39;  =&gt;  &#39;用户名必须&#39;,
        &#39;email&#39; =&gt;  &#39;邮箱格式错误&#39;,
    ];
    
    protected $scene = [
        &#39;add&#39;   =&gt;  [&#39;name&#39;,&#39;email&#39;],
        &#39;edit&#39;  =&gt;  [&#39;email&#39;],
    ];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制器中的验证代码可以简化为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$result = $this-&gt;validate($data,&#39;User&#39;);
if(true !== $result){
    // 验证失败 输出错误信息
    dump($result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要使用场景，可以使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$result = $this-&gt;validate($data,&#39;User.edit&#39;);
if(true !== $result){
    // 验证失败 输出错误信息
    dump($result);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="模型验证" tabindex="-1"><a class="header-anchor" href="#模型验证" aria-hidden="true">#</a> 模型验证</h4><p>如果使用下面的验证器类的话：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>namespace app\\index\\validate;
use think\\Validate;
class User extends Validate
{
    protected $rule = [
        &#39;name&#39;  =&gt;  &#39;require|max:25&#39;,
        &#39;email&#39; =&gt;  &#39;email&#39;,
    ];
    
    protected $message = [
        &#39;name.require&#39;  =&gt;  &#39;用户名必须&#39;,
        &#39;email&#39; =&gt;  &#39;邮箱格式错误&#39;,
    ];
    
    protected $scene = [
        &#39;add&#39;   =&gt;  [&#39;name&#39;,&#39;email&#39;],
        &#39;edit&#39;  =&gt;  [&#39;email&#39;],
    ];    
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模型验证代码可以简化为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$User = new User;
// 调用当前模型对应的User验证器类进行数据验证
$result = $User-&gt;validate(true)-&gt;save($data);
if(false === $result){
    // 验证失败 输出错误信息
    dump($User-&gt;getError());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要调用的验证器类和当前的模型名称不一致，则可以使用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$User = new User;
// 调用Member验证器类进行数据验证
$result = $User-&gt;validate(&#39;Member&#39;)-&gt;save($data);
if(false === $result){
    // 验证失败 输出错误信息
    dump($User-&gt;getError());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样也可以支持场景验证：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$User = new User;
// 调用Member验证器类进行数据验证
$result = $User-&gt;validate(&#39;User.edit&#39;)-&gt;save($data);
if(false === $result){
    // 验证失败 输出错误信息
    dump($User-&gt;getError());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内置规则" tabindex="-1"><a class="header-anchor" href="#内置规则" aria-hidden="true">#</a> 内置规则</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>验证某个字段必须，例如：
&#39;name&#39;=&gt;&#39;require&#39;

验证某个字段的值是否为数字（采用filter_var验证），例如：
&#39;num&#39;=&gt;&#39;number&#39;

验证某个字段的值是否为浮点数字（采用filter_var验证），例如：
&#39;num&#39;=&gt;&#39;float&#39;

验证某个字段的值是否为布尔值（采用filter_var验证），例如：
&#39;num&#39;=&gt;&#39;boolean&#39;

验证某个字段的值是否为email地址（采用filter_var验证），例如：
&#39;email&#39;=&gt;&#39;email&#39;

验证某个字段的值是否为数组，例如：
&#39;info&#39;=&gt;&#39;array&#39;

验证某个字段是否为为 yes, on, 或是 1。这在确认&quot;服务条款&quot;是否同意时很有用，例如：
&#39;accept&#39;=&gt;&#39;accepted&#39;

验证值是否为有效的日期，例如：
&#39;date&#39;=&gt;&#39;date&#39;

验证某个字段的值是否为字母，例如：
&#39;name&#39;=&gt;&#39;alpha&#39;

验证某个字段的值是否为字母和数字，例如：
&#39;name&#39;=&gt;&#39;alphaNum&#39;

验证某个字段的值是否为字母和数字，下划线_及破折号-，例如：
&#39;name&#39;=&gt;&#39;alphaDash&#39;

验证某个字段的值只能是汉字，例如：
&#39;name&#39;=&gt;&#39;chs&#39;

验证某个字段的值只能是汉字、字母，例如：
&#39;name&#39;=&gt;&#39;chsAlpha&#39;

验证某个字段的值只能是汉字、字母和数字，例如：
&#39;name&#39;=&gt;&#39;chsAlphaNum&#39;

验证某个字段的值只能是汉字、字母、数字和下划线_及破折号-，例如：
&#39;name&#39;=&gt;&#39;chsDash&#39;

验证某个字段的值是否为有效的域名或者IP，例如：
&#39;host&#39;=&gt;&#39;activeUrl&#39;

验证某个字段的值是否为有效的URL地址（采用filter_var验证），例如：
&#39;url&#39;=&gt;&#39;url&#39;

验证某个字段的值是否为有效的IP地址（采用filter_var验证），例如：
&#39;ip&#39;=&gt;&#39;ip&#39;

验证某个字段的值是否为指定格式的日期，例如：
&#39;create_time&#39;=&gt;&#39;dateFormat:y-m-d&#39;

验证某个字段的值是否在某个范围，例如：
&#39;num&#39;=&gt;&#39;in:1,2,3&#39;

验证某个字段的值不在某个范围，例如：
&#39;num&#39;=&gt;&#39;notIn:1,2,3&#39;

验证某个字段的值是否在某个区间，例如：
&#39;num&#39;=&gt;&#39;between:1,10&#39;

验证某个字段的值不在某个范围，例如：
&#39;num&#39;=&gt;&#39;notBetween:1,10&#39;

验证某个字段的值的长度是否在某个范围，例如：
&#39;name&#39;=&gt;&#39;length:4,25&#39;

验证某个字段的值的最大长度，例如：
&#39;name&#39;=&gt;&#39;max:25&#39;

验证某个字段的值的最小长度，例如：
&#39;name&#39;=&gt;&#39;min:5&#39;

验证某个字段的值是否在某个日期之后，例如：
&#39;begin_time&#39; =&gt; &#39;after:2016-3-18&#39;,

验证某个字段的值是否在某个日期之前，例如：
&#39;end_time&#39;   =&gt; &#39;before:2016-10-01&#39;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,98),a=[l];function v(r,t){return i(),n("div",null,a)}const c=e(d,[["render",v],["__file","06.html.vue"]]);export{c as default};
