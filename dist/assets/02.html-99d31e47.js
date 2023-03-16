import{_ as n,p as s,q as a,Z as e}from"./framework-823c4b5a.js";const t={},i=e(`<h3 id="ddl数据定义语言" tabindex="-1"><a class="header-anchor" href="#ddl数据定义语言" aria-hidden="true">#</a> DDL数据定义语言</h3><h3 id="数据库操作" tabindex="-1"><a class="header-anchor" href="#数据库操作" aria-hidden="true">#</a> 数据库操作</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>显示数据库列表
show databases<span class="token punctuation">;</span>	

创建数据库
create database 库名 charset utf8<span class="token punctuation">;</span>

删除数据库
drop database 库名<span class="token punctuation">;</span> 

选择数据库
<span class="token keyword">use</span> 库名<span class="token punctuation">;</span>

修改数据库名称
<span class="token number">1.</span><span class="token constant">RENAME</span> <span class="token constant">DATABASE</span> db_name <span class="token constant">TO</span> new_db_name
这个语法在mysql <span class="token number">5.1</span><span class="token number">.7</span>中被添加进来，到了<span class="token number">5.1</span><span class="token number">.23</span>又去掉了<span class="token punctuation">,</span>原因是有可能丢失数据。

<span class="token number">2.</span>如果所有表都是MyISAM类型的话，可以改文件夹的名字
	关闭mysqld
	把data目录中的db_name目录重命名为new_db_name
	开启mysqld
	
<span class="token number">3.</span>重命名所有的表

<span class="token number">4.</span> mysqldump导出数据再导入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据表操作" tabindex="-1"><a class="header-anchor" href="#数据表操作" aria-hidden="true">#</a> 数据表操作</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>显示数据表列表
show tables<span class="token punctuation">;</span>

显示数据表的结构
desc 表名<span class="token punctuation">;</span>

创建数据表
mysql<span class="token operator">&gt;</span> create table 表名<span class="token punctuation">(</span>
    <span class="token operator">&gt;</span> id <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> primary key auto_increment<span class="token punctuation">,</span>
    <span class="token operator">&gt;</span> name <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> not <span class="token constant">null</span><span class="token punctuation">,</span>
    <span class="token operator">&gt;</span> sex <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> not <span class="token constant">null</span> <span class="token keyword">default</span> <span class="token string single-quoted-string">&#39;0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除数据表
drop table 表名；

修改表名
alter table test rename to test2<span class="token punctuation">;</span>

修改表编码
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> <span class="token string backtick-quoted-string">\`table\`</span> <span class="token keyword">DEFAULT</span> <span class="token constant">CHARACTER</span> <span class="token constant">SET</span> utf8<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字段操作" tabindex="-1"><a class="header-anchor" href="#字段操作" aria-hidden="true">#</a> 字段操作</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>添加字段
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> test <span class="token constant">ADD</span> name <span class="token keyword type-declaration">INT</span><span class="token punctuation">;</span>

编辑字段
把字段 name 的类型 改为 <span class="token function">CHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>，可以执行以下命令<span class="token punctuation">:</span>
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> test <span class="token constant">MODIFY</span> name <span class="token function">CHAR</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

在 <span class="token constant">CHANGE</span> 关键字之后，紧跟着的是你要修改的字段名，然后指定新字段的类型及名称
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> test <span class="token constant">CHANGE</span> name name <span class="token constant">BIGINT</span><span class="token punctuation">;</span>

删除字段
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> test <span class="token constant">DROP</span> name<span class="token punctuation">;</span>

修改字段的编码格式
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> <span class="token string backtick-quoted-string">\`tablename\`</span> <span class="token constant">CHANGE</span> <span class="token string backtick-quoted-string">\`字段名1\`</span> <span class="token string backtick-quoted-string">\`字段名2\`</span> <span class="token function">VARCHAR</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token constant">CHARACTER</span> <span class="token constant">SET</span> utf8 <span class="token constant">NOT</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>  

修改一张表的所有字段的编码格式
alter table <span class="token string backtick-quoted-string">\`tablename\`</span> convert to character set utf8<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示当前使用的数据库" tabindex="-1"><a class="header-anchor" href="#显示当前使用的数据库" aria-hidden="true">#</a> 显示当前使用的数据库</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">SELECT</span> <span class="token function">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="导出数据库" tabindex="-1"><a class="header-anchor" href="#导出数据库" aria-hidden="true">#</a> 导出数据库</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysqldump <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 数据库名 <span class="token operator">&gt;</span> 存放位置
mysqldump <span class="token operator">-</span>u root <span class="token operator">-</span>p demo <span class="token operator">&gt;</span> e<span class="token punctuation">:</span>\\demo<span class="token operator">.</span>sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导出表" tabindex="-1"><a class="header-anchor" href="#导出表" aria-hidden="true">#</a> 导出表</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysqldump <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 数据库名 表名<span class="token operator">&gt;</span> 导出的文件名
mysqldump <span class="token operator">-</span>u root <span class="token operator">-</span>p demo user<span class="token operator">&gt;</span> e<span class="token punctuation">:</span>\\demo<span class="token operator">.</span>sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入表" tabindex="-1"><a class="header-anchor" href="#导入表" aria-hidden="true">#</a> 导入表</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysql <span class="token operator">-</span>u 用户名 <span class="token operator">-</span>p 数据库名 <span class="token operator">&lt;</span> 存放位置
<span class="token number">1</span>、mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p demo <span class="token operator">&lt;</span> e<span class="token punctuation">:</span>\\demo<span class="token operator">.</span>sql
<span class="token number">2</span>、mysql <span class="token operator">-</span>u root <span class="token operator">-</span>p
    mysql<span class="token operator">&gt;</span>show databases<span class="token punctuation">;</span>
    mysql<span class="token operator">&gt;</span><span class="token keyword">use</span> <span class="token package">demo</span><span class="token punctuation">;</span>
    mysql<span class="token operator">&gt;</span>source e<span class="token punctuation">:</span>\\demo<span class="token operator">.</span>sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="普通索引" tabindex="-1"><a class="header-anchor" href="#普通索引" aria-hidden="true">#</a> 普通索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>添加普通索引
alter table test add index <span class="token function">index_name</span><span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除普通索引
alter table test drop index index_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="唯一索引" tabindex="-1"><a class="header-anchor" href="#唯一索引" aria-hidden="true">#</a> 唯一索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>添加唯一索引
alter table test add <span class="token function">unique</span><span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除唯一索引
alter table test drop index id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主键索引" tabindex="-1"><a class="header-anchor" href="#主键索引" aria-hidden="true">#</a> 主键索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>添加主键索引
alter table test add primary <span class="token function">key</span><span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除主键索引
alter table test drop primary key<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全文索引" tabindex="-1"><a class="header-anchor" href="#全文索引" aria-hidden="true">#</a> 全文索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>添加全文索引
alter table 表名  add fulltext <span class="token string backtick-quoted-string">\`全文索引名称\`</span> <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`字段\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
alter table demo add fulltext <span class="token string backtick-quoted-string">\`name\`</span> <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`name\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除全文索引
alter table 表名 drop <span class="token function">fulltext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">ALTER</span> <span class="token constant">TABLE</span> demo <span class="token constant">DROP</span> <span class="token constant">INDEX</span> <span class="token string backtick-quoted-string">\`name\`</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多列索引" tabindex="-1"><a class="header-anchor" href="#多列索引" aria-hidden="true">#</a> 多列索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>添加多列索引
alter table test add index <span class="token function">index_name</span><span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">,</span><span class="token string backtick-quoted-string">\`name\`</span><span class="token punctuation">,</span><span class="token string backtick-quoted-string">\`age\`</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

删除多列索引
alter table test drop index index_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),p=[i];function l(c,o){return s(),a("div",null,p)}const r=n(t,[["render",l],["__file","02.html.vue"]]);export{r as default};
