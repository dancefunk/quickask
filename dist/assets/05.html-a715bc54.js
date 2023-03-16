import{_ as t,p as n,q as a,Z as s}from"./framework-823c4b5a.js";const e={},l=s(`<h3 id="索引优点" tabindex="-1"><a class="header-anchor" href="#索引优点" aria-hidden="true">#</a> 索引优点</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>索引看着挺高大上的一个名字，说白了就是我们书最新面的目录。

假如你用新华字典来查找<span class="token string double-quoted-string">&quot;张&quot;</span>这个汉字，不使用目录的话，你可能要从新华字典的第一页找到最后一页，可能要花二个小时。

字典越厚呢，你花的时间就越多。

现在你使用目录来查找<span class="token string double-quoted-string">&quot;张&quot;</span>这个汉字，张的首字母是z，
z开头的汉字从<span class="token number">900</span>多页开始，有了这条线索，你查找一个汉字可能只要一分钟，由此可见索引的重要性。

索引用于快速找出在某个列中有一特定值的行。

不使用索引，MySQL必须从第<span class="token number">1</span>条记录开始然后读完整个表直到找出相关的行。表越大，花费的时间越多。
如果表中查询的列有一个索引，MySQL能快速到达一个位置去搜寻到数据文件的中间，没有必要看所有数据。

当然索引也不易过多，索引越多写入，修改的速度越慢。因为，写入修改数据时，也要修改索引。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql的索引类型" tabindex="-1"><a class="header-anchor" href="#mysql的索引类型" aria-hidden="true">#</a> MySQL的索引类型</h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">普通索引</td><td style="text-align:left;">最基本的索引，它没有任何限制</td></tr><tr><td style="text-align:left;">唯一索引</td><td style="text-align:left;">某一行企用了唯一索引则不准许这一列的行数据中有重复的值。针对这一列的每一行数据都要求是唯一的</td></tr><tr><td style="text-align:left;">主键索引</td><td style="text-align:left;">它是一种特殊的唯一索引，不允许有空值。一般是在建表的时候同时创建主键索引，常用于用户ID。类似于书中的页码</td></tr><tr><td style="text-align:left;">全文索引</td><td style="text-align:left;">对于需要全局搜索的数据，进行全文索引</td></tr></tbody></table><h3 id="普通索引" tabindex="-1"><a class="header-anchor" href="#普通索引" aria-hidden="true">#</a> 普通索引</h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add index(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD INDEX(username);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的username字段增加索引</td></tr></tbody></table><h3 id="唯一索引" tabindex="-1"><a class="header-anchor" href="#唯一索引" aria-hidden="true">#</a> 唯一索引</h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add UNIQUE(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD UNIQUE(email);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的email字段增加唯一索引</td></tr></tbody></table><h3 id="全文索引" tabindex="-1"><a class="header-anchor" href="#全文索引" aria-hidden="true">#</a> 全文索引</h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add FULLTEXT(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD FULLTEXT(content);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的content字段增加唯一索引</td></tr></tbody></table><h3 id="主键索引" tabindex="-1"><a class="header-anchor" href="#主键索引" aria-hidden="true">#</a> 主键索引</h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">详细说明</th></tr></thead><tbody><tr><td style="text-align:left;">基本语法</td><td style="text-align:left;">alter table 表 add PRIMARY KEY(字段)</td></tr><tr><td style="text-align:left;">示例</td><td style="text-align:left;">ALTER TABLE money ADD PRIMARY KEY(id);</td></tr><tr><td style="text-align:left;">示例解释</td><td style="text-align:left;">为money表的id字段增加主键索引</td></tr></tbody></table><h3 id="创建表时也可以声明索引" tabindex="-1"><a class="header-anchor" href="#创建表时也可以声明索引" aria-hidden="true">#</a> 创建表时也可以声明索引</h3><p>创建表时可在创建表语句后加上对应的类型即可声明索引：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">PRIMARY</span> <span class="token function">KEY</span><span class="token punctuation">(</span>字段<span class="token punctuation">)</span>
<span class="token constant">INDEX</span> <span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段<span class="token punctuation">)</span>
<span class="token constant">FULLTEXT</span> <span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段<span class="token punctuation">)</span>
<span class="token constant">UNIQUE</span><span class="token punctuation">[</span>索引名<span class="token punctuation">]</span> <span class="token punctuation">(</span>字段<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>整体示例如下：</li></ul></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;</span> <span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token function">test</span> <span class="token punctuation">(</span>
	id <span class="token keyword type-declaration">INT</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token punctuation">,</span>
	username <span class="token function">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token punctuation">,</span>
	password <span class="token keyword type-declaration">INT</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token punctuation">,</span>
	content <span class="token keyword type-declaration">INT</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token punctuation">,</span>
	<span class="token constant">PRIMARY</span> <span class="token function">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token constant">INDEX</span> <span class="token function">pw</span> <span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">UNIQUE</span> <span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token function">FULLTEXT</span> <span class="token punctuation">(</span>content<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token constant">ENGINE</span> <span class="token operator">=</span> InnoDB<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),i=[l];function d(c,p){return n(),a("div",null,i)}const r=t(e,[["render",d],["__file","05.html.vue"]]);export{r as default};
