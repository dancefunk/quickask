import{_ as e,o as i,c as n,a as s}from"./app-d0ac87ef.js";const d={},a=s(`<h3 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h3><p>数据库的配置文件放置在 <code>config/database.php</code> 文件中，你可以在此定义所有的数据库连接，并指定默认使用的连接。此文件内提供了大部分 Laravel 能支持的数据库配置示例。</p><h3 id="curd查询构造器" tabindex="-1"><a class="header-anchor" href="#curd查询构造器" aria-hidden="true">#</a> CURD查询构造器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
//laravel5.6  语法 demo示例

namespace App\\Http\\Controllers;//命名该控制App空间下名称

use Illuminate\\Support\\Facades\\DB;//使用DB操作数据库
use App\\Http\\Controllers\\Controller;//继承基础控制器

class UserController extends Controller
{
    /**
     * 展示应用的用户列表.
     *
     * @return Response
     */
    public function index()
    {
        //DB使用为每种操作提供了相应方法：
        select(查),update(修改),insert(插入),delete(删除),statement(声明)
        //建议占位符,其他框架通用性强
        
        
        //原生sql写法
        $data = DB::select(&#39;select * from users where id = :id and name = :name &#39;,[&#39;:id&#39; =&gt; 1,&#39;:name&#39;  =&gt;&#39;测试&#39;]);

        //查方法
        //get()  方法获取表中所有记录(获取多行多列)
        $data = DB::table(&#39;users&#39;)-&gt;get();

        //first()  方法将会返回单个对象(获取一行一列)
        //where()  方法查询指定条件对象
        $data = DB::table(&#39;users&#39;)-&gt;where(&#39;id&#39;,&#39;name&#39;,&#39;3&#39;,&#39;测试&#39;)-&gt;first();

        //select() 方法可以查询指定自定义字段
        $data = DB::table(&#39;users&#39;)-&gt;select(&#39;id&#39;,&#39;name&#39;, &#39;email&#39;)-&gt;get();

        //value() 方法从结果中获取单个值，该方法会直接返回指定列的值：
        $data = DB::table(&#39;users&#39;)-&gt;where(&#39;name&#39;,&#39;测试&#39;)-&gt;value(&#39;email&#39;);

        //pluck()  方法获取单个列值的数组
        $data = DB::table(&#39;users&#39;)-&gt;pluck(&#39;name&#39;);

        //count() 统计数量
        $data = DB::table(&#39;users&#39;)-&gt;count();

        //exists()  方法来判断匹配查询条件的结果是否存在
        $data=DB::table(&#39;users&#39;)-&gt;where(&#39;id&#39;, 1)-&gt;exists();

        //join() 方法连表查询
        $data = DB::table(&#39;users&#39;)
            -&gt;join(&#39;ceshi&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;ceshi.id&#39;)
            -&gt;select(&#39;users.*&#39;, &#39;ceshi.name&#39;)
            -&gt;get();

        //leftJoin() 方法左连表查询
        $data = DB::table(&#39;users&#39;)
            -&gt;leftJoin(&#39;ceshi&#39;, &#39;users.id&#39;, &#39;=&#39;, &#39;ceshi.id&#39;)
            -&gt;select(&#39;users.*&#39;, &#39;ceshi.name&#39;)
            -&gt;get();

        //where() 参数说明:(一)参数是列名,(二)参数是操作符,(三)参数是该列要比较的值
        $data = DB::table(&#39;users&#39;)
            -&gt;where(&#39;id&#39;, &#39;&gt;=&#39;, 1)
            -&gt;where(&#39;name&#39;, &#39;like&#39;, &#39;测试%&#39;)
            -&gt;get();

        //传递条件数组到where中写法,建议多where查询使用这个方法
        $data = DB::table(&#39;users&#39;)
            -&gt;where([
                [&#39;id&#39;, &#39;&gt;=&#39;, 1],
                [&#39;name&#39;, &#39;like&#39;, &#39;测试%&#39;]
            ])
            -&gt;get();

        //whereBetween() 方法验证列值是否在给定值之间
        $data = DB::table(&#39;users&#39;)
            -&gt;whereBetween(&#39;id&#39;, [1, 3])-&gt;get();

        //whereIn 方法验证给定列的值是否在给定数组中：
        $data = DB::table(&#39;users&#39;)
            -&gt;whereIn(&#39;id&#39;, [1, 2, 3])
            -&gt;get();

        //orderBy() 方法排序
        $data = DB::table(&#39;users&#39;)
            -&gt;orderBy(&#39;id&#39;, &#39;desc&#39;)
            -&gt;get();

        //insert()      方法插入记录到数据表
        //insertGetId() 方法插入记录并返回自增ID值
        $data=DB::table(&#39;users&#39;)-&gt;insert(
            [
                &#39;name&#39;=&gt;&#39;测试&#39;,
                &#39;email&#39; =&gt; &#39;ceshi.com&#39;,
                &#39;password&#39; =&gt; &#39;ceshi&#39;
            ]
        );

        //update() 方法修改记录
        $data =DB::table(&#39;users&#39;)
            -&gt;where(&#39;id&#39;, 1)
            -&gt;update([&#39;name&#39; =&gt; &#39;测试&#39;]);

        //delete() 方法删除记录
        $data=DB::table(&#39;users&#39;)-&gt;where(&#39;id&#39;, &#39;&gt;&#39;, 10)-&gt;delete();


        //paginate() 方法分页 每页显示数量
        //注意:目前使用 groupBy 的分页操作不能被Laravel有效执行
        $data = DB::table(&#39;users&#39;)-&gt;paginate(2);


        //前台分页中链接附加参数实现分页
        $getName = $GET[&#39;name&#39;]?:&#39;&#39;;
        $data = DB::table(&#39;users&#39;)
             -&gt;select(&#39;id&#39;,&#39;name&#39;,&#39;age&#39;)
             -&gt;where(&#39;name&#39;, &#39;like&#39;, $getName.&#39;%&#39;)
             -&gt;paginate(2);

        //返回给前端视图数据
        return $this-&gt;view(&#39;index&#39;,[&#39;data&#39;=&gt;$data,&#39;namePage&#39;=&gt;$getName]);

        //前端引用代码  
        //appends 方法添加查询参数到分页链接查询字符串; 添加 &amp;name=$namePage到每个分页链接中.
        {{ $data-&gt;appends([&#39;name&#39; =&gt; $namePage])-&gt;links() }}

        //simplePaginate() 方法分页视图中简单的显示&quot;下一页&quot;和&quot;上一页&quot;链接
        $data = DB::table(&#39;users&#39;)-&gt;simplePaginate(2);
        
        //返回给前端视图数据
        return $this-&gt;view(&#39;index&#39;,[&#39;data&#39;=&gt;$data]);
        
        //前端简单引用代码 
        &lt;div class=&quot;container&quot;&gt;
        @foreach ($users as $user)
            {{ $user-&gt;name }}
        @endforeach
        &lt;/div&gt;
        {{ $data-&gt;links() }}


        //原生分页写法
        $page = 2;
        $pageSize = 1;
        $offset = ($page - 1) * $pageSize;
        $result = DB::table(&#39;picasa&#39;)
            -&gt;where(&#39;title&#39;, &#39;like&#39;, &#39;%&#39;.$title.&#39;%&#39;)
            -&gt;offset($offset)
            -&gt;limit($pageSize)
            -&gt;get();

        //返回数据视图文件
        return $this-&gt;view(&#39;index&#39;, [&#39;result&#39; =&gt; $result]);

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启sql查询日志" tabindex="-1"><a class="header-anchor" href="#开启sql查询日志" aria-hidden="true">#</a> 开启sql查询日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DB::connection()-&gt;enableQueryLog();//开启QueryLog
$data = DB::table(&#39;users&#39;)-&gt;select(&#39;id&#39;,&#39;name&#39;, &#39;email&#39;)-&gt;get();//执行sql
dump(DB::getQueryLog());//sql语句和查询时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="写入日志信息" tabindex="-1"><a class="header-anchor" href="#写入日志信息" aria-hidden="true">#</a> 写入日志信息</h3><p>八种日志级别：<code>emergency、alert、critical、error、warning、 notice、info 和 debug</code></p><p>默认日志存放位置: <code>/storage/logs/laravel.log</code></p><p>引用: <code>use Illuminate\\Support\\Facades\\Log</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Log::emergency(string $message, array $context = []);
Log::alert(string $message, array $context = []);
Log::critical(string $message, array $context = []);
Log::error(string $message, array $context = []);
Log::warning(string $message, array $context = []);
Log::notice(string $message, array $context = []);
Log::info(string $message, array $context = []);
Log::debug(string $message, array $context = []);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eloquent-orm操作数据" tabindex="-1"><a class="header-anchor" href="#eloquent-orm操作数据" aria-hidden="true">#</a> Eloquent ORM操作数据</h3><h4 id="自动建立users模型" tabindex="-1"><a class="header-anchor" href="#自动建立users模型" aria-hidden="true">#</a> 自动建立Users模型</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:model Users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="手动建立users模型" tabindex="-1"><a class="header-anchor" href="#手动建立users模型" aria-hidden="true">#</a> 手动建立Users模型</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
namespace App\\Model\\Eloquent\\Admin;
 
use Illuminate\\Database\\Eloquent\\Model;
 
class Users extends Model
{
    //指定表名
    protected $table=&quot;users&quot;;
 
    //指定id
    protected $primaryKey=&quot;id&quot;;
 
    //指定允许批量的字段
    protected $fillable=[&#39;name&#39;,&#39;age&#39;];
 
    //指定不允许批量赋值的字段
    protected $guarded=[];

    //连接多数据库配置  默认使用&#39;mysql&#39; 
    protected $connection = &#39;mysql&#39;;
 
    //自动维护时间戳  默认是&#39;true&#39; 
    public $timestamps=true;
 
    //返回当前时间的时间戳,进入数据库,输出时,可以输出格式化好的时间
    protected function getDateFormat()
    {
        return time();
    }
 
    //设置之后,返回的就是数据表中的时间戳
    protected function asDateTime($value)
    {
        return $value;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引用users模型" tabindex="-1"><a class="header-anchor" href="#引用users模型" aria-hidden="true">#</a> 引用Users模型</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use App\\Model\\Eloquent\\Admin\\Users;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="orm-查" tabindex="-1"><a class="header-anchor" href="#orm-查" aria-hidden="true">#</a> ORM 查</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//all() 查询所有数据  查询数据为集合
$data=Users::all();

//根据[$id]主键查询 查询一条数据
$data=Users::find($id);

//findOrFail() 根据主键查询 如果没有查到 报错
$data=Users::findOrFail($id);

//get() 查询所有数据
$data=Users::get();

//first() 查询第一条
$data=Users::where(&#39;id&#39;,&#39;&gt;&#39;,&#39;1&#39;)-&gt;orderBy(&#39;age&#39;,&#39;desc&#39;)-&gt;first();

//chunk() 每次查询指定[$num]条数 
Users::chunk($num,function($data){
    print_r($data);
});

//聚合函数
//count() 统计记录条数
$num = Users::count();

//max() 查询最大值   min() 查询最小值
$max=Users::where(&#39;id&#39;,&#39;&gt;&#39;,1)-&gt;max(&#39;age&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="orm-增" tabindex="-1"><a class="header-anchor" href="#orm-增" aria-hidden="true">#</a> ORM 增</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//save() 单增
$data = new Users();
$data-&gt;name = &#39;admin_a&#39;;
$data-&gt;age = 100;
$data-&gt;save();

//create() 多增
$ret=Users::create([
    &#39;name&#39;=&gt;&#39;admin_b&#39;,
    &#39;age&#39;=&gt;200
]);

//firstOrCreate()以属性查询数据 如果没有 新建数据
$ret=Users::firstOrCreate([
    &#39;name&#39;=&gt;&#39;admin_c&#39;,
    &#39;age&#39;=&gt;300
]);

//firstOrNew() 以属性查询数据 如果没有 新建实例 如果想保存调用save()
$ret=Users::firstOrNew([
    &#39;name&#39;=&gt;&#39;admin_d&#39;,
    &#39;age&#39;=&gt;400
]);
$ret-&gt;save();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="orm-改" tabindex="-1"><a class="header-anchor" href="#orm-改" aria-hidden="true">#</a> ORM 改</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取主键id,模型修改数据
$data=Users::find($id);
$data-&gt;name =&#39;admin_e&#39;;
$data-&gt;age =66;
$data-&gt;save();

//批量修改
$ret=Users::where(&#39;id&#39;,&#39;&gt;&#39;,2)-&gt;update(
    [&#39;age&#39;=&gt;33]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="orm-删" tabindex="-1"><a class="header-anchor" href="#orm-删" aria-hidden="true">#</a> ORM 删</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获取主键id,模型删除单条
$data=Users::find($id);
$data-&gt;delete();

//通过主键删除多条
$ret=Users::destroy(1,2,3);
$ret=Users::destroy([4,5,6]);

//删除指定条件
$ret=Users::where(&#39;id&#39;,&#39;&gt;&#39;,2)-&gt;delete();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[a];function r(v,t){return i(),n("div",null,l)}const u=e(d,[["render",r],["__file","06.html.vue"]]);export{u as default};
