import{_ as n,p as s,q as a,Z as e}from"./framework-823c4b5a.js";const t={},p=e(`<h3 id="安装pdo" tabindex="-1"><a class="header-anchor" href="#安装pdo" aria-hidden="true">#</a> 安装PDO</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">PHP5</span>以上已经自带有了php_pdo<span class="token operator">.</span>dll的扩展，不过需要稍微设置一下才能使用。
打开php<span class="token operator">.</span>ini配置文件
下面有一堆类似 <span class="token punctuation">;</span>extension<span class="token operator">=</span>php_mbstring<span class="token operator">.</span>dll 的东西<span class="token operator">.</span>
这里就是<span class="token constant">PHP</span>扩展加载的配置了，我们找到相应的<span class="token constant">PDO</span>扩展然后开启它。
extension<span class="token operator">=</span>php_pdo<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_mysql<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_pgsql<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_sqlite<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_mssql<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_odbc<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_firebird<span class="token operator">.</span>dll
extension<span class="token operator">=</span>php_pdo_oci8<span class="token operator">.</span>dll

其次新建php文件到环境下面，然后在文件里面输入<span class="token keyword">echo</span> <span class="token function">phpinfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
最终在输出的内容里面搜索<span class="token string double-quoted-string">&quot;PDO&quot;</span>看是否能够查询到，如果有结果就说明安装成功。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pdo的使用" tabindex="-1"><a class="header-anchor" href="#pdo的使用" aria-hidden="true">#</a> PDO的使用</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:text/html;charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//标记数据库的信息  mysql:host=主机名;dbname=数据库名</span>
<span class="token variable">$dsn</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;mysql:host=localhost;dbname=dancefunk&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//实例化PDO对象 添加dsn对象 输入 数据库用户名和密码</span>
<span class="token variable">$db</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PDO</span><span class="token punctuation">(</span><span class="token variable">$dsn</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;root&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT =&gt; true) 变成这样：</span>
<span class="token variable">$db</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PDO</span><span class="token punctuation">(</span><span class="token variable">$dsn</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;root&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token keyword">array</span><span class="token punctuation">(</span><span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">ATTR_PERSISTENT</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//一次操作就这么简单，也许跟以前的没有太大区别，跟ADOdb倒是有几分相似。</span>

<span class="token comment">//设置编码</span>
<span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SET NAMES UTF8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//$db-&gt;exec() 执行插入，更新，删除数据，并返回影响行数</span>
<span class="token variable">$count</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;INSERT INTO pre_admin(admin_name,admin_pwd,admin_use,admin_time) VALUES(&#39;admin&#39;,&#39;1234567890&#39;,1,32143445)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//输出影响行数</span>
<span class="token keyword">echo</span> <span class="token variable">$count</span><span class="token punctuation">;</span>

<span class="token comment">//如果我们想提取数据的话，那么就应该使用数据获取功能。</span>
<span class="token variable">$article_list</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SELECT * FROM pre_article&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$row</span> <span class="token operator">=</span> <span class="token variable">$article_list</span><span class="token operator">-&gt;</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//如果想一次把数据都获取到数组里可以这样：</span>
<span class="token variable">$article_list</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SELECT * FROM pre_article&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$result_arr</span> <span class="token operator">=</span> <span class="token variable">$article_list</span><span class="token operator">-&gt;</span><span class="token function">fetchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result_arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//设置属性</span>
<span class="token comment">//$db-&gt;setAttribute(PDO::ATTR_CASE, PDO::CASE_UPPER);</span>


<span class="token comment">//值需要关联索引</span>
<span class="token variable">$article_list</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SELECT * FROM pre_article&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$article_list</span><span class="token operator">-&gt;</span><span class="token function">setFetchMode</span><span class="token punctuation">(</span><span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">FETCH_ASSOC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$result_arr</span> <span class="token operator">=</span> <span class="token variable">$article_list</span><span class="token operator">-&gt;</span><span class="token function">fetchAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result_arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">/*
看上面的代码，setAttribute() 方法是设置部分属性，主要属性有：PDO::ATTR_CASE、PDO::ATTR_ERRMODE等等，
我们这里需要设置的是PDO::ATTR_CASE，就是我们使用关联索引获取数据集的时候，关联索引是大写还是小写，有几个选择：

PDO::CASE_LOWER -- 强制列名是小写
PDO::CASE_NATURAL -- 列名按照原始的方式
PDO::CASE_UPPER -- 强制列名为大写

我们使用setFetchMode方法来设置获取结果集的返回值的类型，同样类型还有：

PDO::FETCH_ASSOC-- 关联数组形式
PDO::FETCH_NUM -- 数字索引数组形式
PDO::FETCH_BOTH -- 两者数组形式都有，这是缺省的
PDO::FETCH_OBJ -- 按照对象的形式，类似于以前的mysql_fetch_object()
当然，一般情况下我们是使用PDO::FETCH_ASSOC，具体使用什么，按照你自己的需要，其他获取类型参考手册。
*/</span>

<span class="token comment">//获取数据</span>
<span class="token variable">$rs</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SELECT * FROM pre_article&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$rs</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token variable">$row</span> <span class="token operator">=</span> <span class="token variable">$rs</span><span class="token operator">-&gt;</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$row</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">//查询指定字段,一般使用fetchColumn()来进行count统计或者某些只需要单字段的记录很好操作。</span>
<span class="token variable">$rs</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;SELECT COUNT(*) FROM pre_article&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$col</span> <span class="token operator">=</span> <span class="token variable">$rs</span><span class="token operator">-&gt;</span><span class="token function">fetchColumn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$col</span><span class="token punctuation">;</span>



<span class="token comment">/*
简单的总结一下上面的操作:
查询操作主要是PDO::query()、PDO::exec()、PDO::prepare()。
PDO::query()主要是用于有记录结果返回的操作，特别是SELECT操作，
PDO::exec()主要是针对没有结果集合返回的操作，比如INSERT、UPDATE、DELETE等操作，它返回的结果是当前操作影响的列数。
PDO::prepare()主要是预处理操作，需要通过$rs-&gt;execute()来执行预处理里面的SQL语句，
这个方法可以绑定参数，功能比较强大，不是本文能够简单说明白的，大家可以参考手册和其他文档。


获取结果集操作主要是：PDOStatement::fetchColumn()、PDOStatement::fetch()、PDOStatement::fetchALL()
PDOStatement::fetchColumn() 是获取结果指定第一条记录的某个字段，缺省是第一个字段。
PDOStatement::fetch() 是用来获取一条记录.
PDOStatement::fetchAll()是获取所有记录集中的数据,获取结果可以通过PDOStatement::setFetchMode来设置需要结果集合的类型。

另外有两个周边的操作，一个是PDO::lastInsertId()和PDOStatement::rowCount()。
PDO::lastInsertId()是返回上次插入操作，主键列类型是自增的最后的自增ID。
PDOStatement::rowCount()主要是用于PDO::query()和PDO::prepare()进行DELETE、INSERT、UPDATE操作影响的结果集，
对PDO::exec()方法和SELECT操作无效。
*/</span>

<span class="token comment">//错误处理</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token variable">$db</span> <span class="token operator">=</span> <span class="token function">newPDO</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;mysql:host=localhost;dbname=test&#39;</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token punctuation">,</span> <span class="token variable">$pass</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$db</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">PDOException</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">print</span> <span class="token string double-quoted-string">&quot;Error: &quot;</span> <span class="token operator">.</span> <span class="token variable">$e</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;br/&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">die</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function l(i,c){return s(),a("div",null,o)}const r=n(t,[["render",l],["__file","02.html.vue"]]);export{r as default};
