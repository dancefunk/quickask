import{_ as n,o as a,c as s,a as e}from"./app-6325e707.js";const i={},d=e(`<h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Mysql 是一种关系型数据库系统<span class="token punctuation">;</span> 它的安全性和稳定性已足以满足许多应用程序的要求，而且有着非常高的性价比这不仅是因为MySQL本身是免费的<span class="token operator">.</span>
还因为它对硬件性能要求不那么苛刻这些优点使MySQL成为数据库领域里事实上的标准之一<span class="token operator">.</span>
与其他的开源数据库系统相比，MySQL不仅在性能指标方面高出一截，在使用范围方面也远远领先于其他竞争对手
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql有什么作用-请写出至少一个常用的管理mysql的工具" tabindex="-1"><a class="header-anchor" href="#mysql有什么作用-请写出至少一个常用的管理mysql的工具" aria-hidden="true">#</a> Mysql有什么作用？请写出至少一个常用的管理Mysql的工具？</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>MySQL是 开放源码的关系型数据库管理系统。       
对数据库进行统一的管理和控制，使用户能方便定义和操纵数据。      
mysql<span class="token operator">.</span>exe phpMyAdmin  MySQLDumper  Navicat  MySQL <span class="token constant">GUI</span> Tools mysqlworkbench     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是关系型数据库" tabindex="-1"><a class="header-anchor" href="#什么是关系型数据库" aria-hidden="true">#</a> 什么是关系型数据库</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>数据被存放在一些结构化的数据表中，而数据表之间形成内在的交叉关系。
存在于数据表之间的这种关系使数据库又被称为关系型数据库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系型数据库系统" tabindex="-1"><a class="header-anchor" href="#关系型数据库系统" aria-hidden="true">#</a> 关系型数据库系统</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>MySQL、Oracle、Microsoft <span class="token constant">SQL</span> Server 和<span class="token constant">IBM</span> <span class="token constant">DB2</span>都是关系型数据库系统<span class="token punctuation">(</span>database system<span class="token punctuation">)</span>。
除了管理数据，一个这样的系统还包括用来管理各种关系数据库的程序。
一个合格的关系数据库系统不仅要确保各种数据的存储情况安全可靠<span class="token operator">.</span>
还必须能够处理对现有数据进行查询、分析和排序以及对新数据进行保存等诸多命令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库基本结构-数据表、字段、记录、sql、索引" tabindex="-1"><a class="header-anchor" href="#数据库基本结构-数据表、字段、记录、sql、索引" aria-hidden="true">#</a> 数据库基本结构：数据表、字段、记录、SQL、索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>数据表：实际存放有关数据的结构  <span class="token punctuation">(</span>实体<span class="token punctuation">)</span>
字段：记录数据表里的每一行<span class="token punctuation">(</span>数据<span class="token punctuation">)</span>的记录名 <span class="token punctuation">(</span>数据列<span class="token punctuation">,</span>属性<span class="token punctuation">)</span>              
记录：数据表里的每一行<span class="token punctuation">(</span>数据<span class="token punctuation">)</span>被称为一条数据记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是sql-结构化查询语句" tabindex="-1"><a class="header-anchor" href="#什么是sql-结构化查询语句" aria-hidden="true">#</a> 什么是SQL：结构化查询语句</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>结构化查询语句是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系型数据库系统<span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>为了在一个数据表里搜索某个特定的记录，或者提取一系列数据记录<span class="token operator">.</span>
MySQL必须把这个数据表里的所有数据记录都搜索一遍。
如果数据表的体积比较庞大，在遇到这样一些查询的时候性能就会显著的下降。
为解决性能下降的问题可以为查询所涉及的数据列创建并使用一个索引。

注意：索引可以加快数据的检索操作，但会使数据修改操作变慢。
每修改一条数据记录，索引就必须刷新一次。
索引另一个明显缺陷是它们会在硬盘上占用相当大的空间。
因此，应该只为最经常查询和最经常排序的数据列建立索引。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设计数据库的具体步骤" tabindex="-1"><a class="header-anchor" href="#设计数据库的具体步骤" aria-hidden="true">#</a> 设计数据库的具体步骤</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1</span>，挑实体 
<span class="token number">2</span>，拉关系 
<span class="token number">3</span>，建库，建表、把实体变成表，把属性变成字段
<span class="token number">4</span>，<span class="token number">1</span><span class="token punctuation">:</span>n  把 <span class="token number">1</span> 这边的主键 放到 n 这边做外键
<span class="token number">5</span>，m<span class="token punctuation">:</span>n 把两边的主键放到一个新的关系表 里 做外键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库设计要求" tabindex="-1"><a class="header-anchor" href="#数据库设计要求" aria-hidden="true">#</a> 数据库设计要求</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1.</span>一个好的数据库设计方案应该满足以下几项要求：
    数据表里没有重复冗余的数据<span class="token punctuation">;</span>
    数据表里没有重复的数据列<span class="token punctuation">;</span>
    数据表的空间占用总量越小越好<span class="token punctuation">;</span>
    使用频率高的查询都能以简单高效的方式执行。

<span class="token number">2.</span>命名要求
    MySQL对数据列的名字不区分大小写，但对数据库和数据表的名字区分大小写<span class="token punctuation">;</span>
    数据库、数据表和数据列名字的长度最多不能超过<span class="token number">64</span>个字符<span class="token punctuation">;</span>
    在名字里要避免使用特殊字符<span class="token punctuation">;</span>
    数据表和数据列的名字应该有意义<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="范式理论" tabindex="-1"><a class="header-anchor" href="#范式理论" aria-hidden="true">#</a> 范式理论</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>第一范式
  内容相似的数据列必须消除（<span class="token string double-quoted-string">&quot;清除&quot;</span>的办法是再创建一个数据表来存放）<span class="token punctuation">;</span>
  必须为每一组相关数据分别创建一个数据表<span class="token punctuation">;</span>
  每条数据记录必须用一个主键来标识<span class="token punctuation">;</span>

第二范式
  只要数据列里的内容出现重复，就意味着应该把数据表拆分为多个子表<span class="token punctuation">;</span>
  拆分出来的数据表必须用外键关联起来<span class="token punctuation">;</span>

第三范式
  与主键没有直接关系的数据列必须消除（<span class="token string double-quoted-string">&quot;消除&quot;</span>的办法是再创建一个数据表来存放<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实体属性" tabindex="-1"><a class="header-anchor" href="#实体属性" aria-hidden="true">#</a> 实体属性</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>实体：客观存在并可相互区别的事物称为实体。实体可以是具体的人、事、物，也可以是抽象的概念或联系<span class="token operator">.</span>
属性：实体所具有的某一特性称为属性。一个实体可以由若干个属性来描述。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库关系" tabindex="-1"><a class="header-anchor" href="#数据库关系" aria-hidden="true">#</a> 数据库关系</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">1</span>                        
    第一个数据表里的一条数据记录对应着第二个数据表里的一条数据记录，同时第二个数据表里的每一条数据记录也分别对应着第一个数据表里的一条数据记录          
<span class="token number">1</span><span class="token punctuation">:</span>n            
    第一个数据表里的一条数据记录对应着第二个数据表的多条记录         
n<span class="token punctuation">:</span>m         
    第一个数据表里的一条记录对应着第二个数据表里的多条记录，同时第二个数据表里的一条记录也可以对应着第一个数据表的多条记录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主键" tabindex="-1"><a class="header-anchor" href="#主键" aria-hidden="true">#</a> 主键</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>主键的作用是帮助MySQL以最快的速度把一条特定的数据记录在数据表里的位置确定下来。           
主键必须是唯一的，任意两条数据记录里的主键字段绝不允许是同样的内容<span class="token punctuation">;</span>           
主键都必须有索引（即<span class="token string double-quoted-string">&quot;主索引&quot;</span>）<span class="token punctuation">;</span>           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外键" tabindex="-1"><a class="header-anchor" href="#外键" aria-hidden="true">#</a> 外键</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>如果公共关键字在一个关系中是主关键字，那么这个公共关键字被称为另一个关系的外键。           
由此可见，外键表示了两个关系之间的联系。以另一个关系的外键作主关键字的表被称为主表，          
具有此外键的表被称为主表的从表。           
外键的作用是引用另一个数据表的某条记录<span class="token punctuation">;</span> 使两张表形成关联           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),l=[d];function c(p,r){return a(),s("div",null,l)}const u=n(i,[["render",c],["__file","01.html.vue"]]);export{u as default};
