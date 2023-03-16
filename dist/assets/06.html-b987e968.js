import{_ as n,p as s,q as a,Z as e}from"./framework-823c4b5a.js";const t={},p=e(`<h3 id="mysql触发器" tabindex="-1"><a class="header-anchor" href="#mysql触发器" aria-hidden="true">#</a> Mysql触发器</h3><h3 id="什么触发器" tabindex="-1"><a class="header-anchor" href="#什么触发器" aria-hidden="true">#</a> 什么触发器</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1</span>、个人理解
触发器，从字面来理解，一触即发的一个器，简称触发器（哈哈，个人理解），
举个例子吧，好比天黑了，你开灯了，你看到东西了。你放炮仗，点燃了，一会就炸了

<span class="token number">2</span>、官方定义
触发器（trigger）是个特殊的存储过程，它的执行不是由程序调用，也不是手工启动，而是由事件来触发，
比如当对一个表进行操作（ insert，delete， update）时就会激活它执行。触发器经常用于加强数据的完整性约束和业务规则等。 
触发器可以从 <span class="token constant">DBA_TRIGGERS</span> ，<span class="token constant">USER_TRIGGERS</span> 数据字典中查到。
触发器有一个非常好的特性就是<span class="token punctuation">:</span>触发器可以禁止或回滚违反引用完整性的更改，从而取消所尝试的数据修改。
什么意思，举个例子解释一下，街机游戏大家都玩过吧，闯过一关，闯下一关，有一关没闯过就要从第一关开始。触发器跟这个类似。

<span class="token number">3</span>、官方解释如下
触发程序视为单一交易中的一部份，因此可以由原触发程序还原交易，
如果在交易过程中侦测到严重的错误（如使用者中断连线），则会自动还原整个交易。
他的作用很明显了，可以保重数据的完整性，下面有一个实例来说明他的好处，以及如果使编写代码不那么复杂
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="触发器语法" tabindex="-1"><a class="header-anchor" href="#触发器语法" aria-hidden="true">#</a> 触发器语法</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">CREATE</span> <span class="token constant">TRIGGER</span> trigger_name trigger_time trigger_event <span class="token constant">ON</span> tbl_name <span class="token keyword">FOR</span> <span class="token constant">EACH</span> <span class="token constant">ROW</span> trigger_stmt

<span class="token constant">CREATE</span> <span class="token constant">TRIGGER</span> 触发器的名字 触发时间 触发事件 <span class="token constant">ON</span> 数据表名 <span class="token keyword">FOR</span> <span class="token constant">EACH</span> <span class="token constant">ROW</span> 触发程序时执行的语句

trigger_name：触发器的名字
trigger_time：触发时间 before after
trigger_event：触发事件 insert update delete
tbl_name：数据表名
trigger_stmt：触发程序时执行的语句

触发程序是与表有关的命名数据库对象，当表上出现特定事件时，将激活该对象。
触发程序与命名为tbl_name的表相关。tbl_name必须引用永久性表。不能将触发程序与<span class="token constant">TEMPORARY</span>表或视图关联起来。
trigger_time是触发程序的动作时间。它可以是 <span class="token constant">BEFORE</span> 或 <span class="token constant">AFTER</span> ，以指明触发程序是在激活它的语句之前或之后触发。
trigger_event指明了激活触发程序的语句的类型。trigger_event可以是下述值之一：
	<span class="token constant">INSERT</span>：将新行插入表时激活触发程序，例如，通过<span class="token constant">INSERT</span>、<span class="token constant">LOAD</span> <span class="token constant">DATA</span>和<span class="token constant">REPLACE</span>语句。
	<span class="token constant">UPDATE</span>：更改某一行时激活触发程序，例如，通过<span class="token constant">UPDATE</span>语句。
	<span class="token constant">DELETE</span>：从表中删除某一行时激活触发程序，例如，通过<span class="token constant">DELETE</span>和<span class="token constant">REPLACE</span>语句。

请注意，trigger_event与以表操作方式激活触发程序的<span class="token constant">SQL</span>语句并不很类似，这点很重要。
例如，关于<span class="token constant">INSERT</span>的<span class="token constant">BEFORE</span>触发程序不仅能被<span class="token constant">INSERT</span>语句激活，也能被<span class="token constant">LOAD</span> <span class="token constant">DATA</span>语句激活。

可能会造成混淆的例子之一是<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token operator">.</span><span class="token operator">.</span> <span class="token constant">ON</span> <span class="token constant">DUPLICATE</span> <span class="token constant">UPDATE</span> <span class="token operator">...</span>
语法：<span class="token constant">BEFORE</span> <span class="token constant">INSERT</span>触发程序对于每一行将激活，后跟<span class="token constant">AFTER</span> <span class="token constant">INSERT</span>触发程序，或<span class="token constant">BEFORE</span> <span class="token constant">UPDATE</span>和<span class="token constant">AFTER</span> <span class="token constant">UPDATE</span>触发程序，
具体情况取决于行上是否有重复键。对于具有相同触发程序动作时间和事件的给定表，不能有两个触发程序。
例如，对于某一表，不能有两个<span class="token constant">BEFORE</span> <span class="token constant">UPDATE</span>触发程序。
但可以有<span class="token number">1</span>个<span class="token constant">BEFORE</span> <span class="token constant">UPDATE</span>触发程序和<span class="token number">1</span>个<span class="token constant">BEFORE</span> <span class="token constant">INSERT</span>触发程序，或<span class="token number">1</span>个<span class="token constant">BEFORE</span> <span class="token constant">UPDATE</span>触发程序和<span class="token number">1</span>个<span class="token constant">AFTER</span> <span class="token constant">UPDATE</span>触发程序。
trigger_stmt是当触发程序激活时执行的语句。如果你打算执行多个语句，可使用<span class="token constant">BEGIN</span> <span class="token operator">...</span> <span class="token constant">END</span>复合语句结构。
这样，就能使用存储子程序中允许的相同语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试数据" tabindex="-1"><a class="header-anchor" href="#测试数据" aria-hidden="true">#</a> 测试数据</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1</span><span class="token punctuation">,</span>用户表user
<span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token string backtick-quoted-string">\`user\`</span> <span class="token punctuation">(</span> 
<span class="token string backtick-quoted-string">\`id\`</span> <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> auto_increment <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;用户ID&#39;</span><span class="token punctuation">,</span> 
<span class="token string backtick-quoted-string">\`name\`</span> <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token keyword">default</span> <span class="token string single-quoted-string">&#39;&#39;</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;名称&#39;</span><span class="token punctuation">,</span> 
<span class="token string backtick-quoted-string">\`sex\`</span> <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token keyword">default</span> <span class="token string single-quoted-string">&#39;0&#39;</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;0为男，1为女&#39;</span><span class="token punctuation">,</span> 
<span class="token constant">PRIMARY</span> <span class="token function">KEY</span>  <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span> <span class="token constant">ENGINE</span><span class="token operator">=</span>MyISAM  <span class="token keyword">DEFAULT</span> <span class="token constant">CHARSET</span><span class="token operator">=</span>utf8 <span class="token punctuation">;</span> 

<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token string backtick-quoted-string">\`user\`</span> <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`id\`</span><span class="token punctuation">,</span> <span class="token string backtick-quoted-string">\`name\`</span><span class="token punctuation">,</span> <span class="token string backtick-quoted-string">\`sex\`</span><span class="token punctuation">)</span> <span class="token function">VALUES</span> 
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;张映&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tank&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

<span class="token number">2</span><span class="token punctuation">,</span>评论表comment
<span class="token constant">CREATE</span> <span class="token constant">TABLE</span> <span class="token string backtick-quoted-string">\`comment\`</span> <span class="token punctuation">(</span> 
<span class="token string backtick-quoted-string">\`c_id\`</span> <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> auto_increment <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;评论ID&#39;</span><span class="token punctuation">,</span> 
<span class="token string backtick-quoted-string">\`u_id\`</span> <span class="token keyword type-declaration">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;用户ID&#39;</span><span class="token punctuation">,</span> 
<span class="token string backtick-quoted-string">\`name\`</span> <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token keyword">default</span> <span class="token string single-quoted-string">&#39;&#39;</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;用户名称&#39;</span><span class="token punctuation">,</span> 
<span class="token string backtick-quoted-string">\`content\`</span> <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token keyword">default</span> <span class="token string single-quoted-string">&#39;&#39;</span> <span class="token constant">COMMENT</span> <span class="token string single-quoted-string">&#39;评论内容&#39;</span><span class="token punctuation">,</span> 
<span class="token constant">PRIMARY</span> <span class="token function">KEY</span>  <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`c_id\`</span><span class="token punctuation">)</span> 
<span class="token punctuation">)</span> <span class="token constant">ENGINE</span><span class="token operator">=</span>MyISAM  <span class="token keyword">DEFAULT</span> <span class="token constant">CHARSET</span><span class="token operator">=</span>utf8 <span class="token punctuation">;</span> 

<span class="token constant">INSERT</span> <span class="token constant">INTO</span> <span class="token string backtick-quoted-string">\`comment\`</span> <span class="token punctuation">(</span><span class="token string backtick-quoted-string">\`c_id\`</span><span class="token punctuation">,</span> <span class="token string backtick-quoted-string">\`u_id\`</span><span class="token punctuation">,</span> <span class="token string backtick-quoted-string">\`name\`</span><span class="token punctuation">,</span> <span class="token string backtick-quoted-string">\`content\`</span><span class="token punctuation">)</span> <span class="token function">VALUES</span> 
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;张映&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;触发器测试&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;张映&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;解决字段冗余&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;tank&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;使代码更简单&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>在这里有一个冗余字段name，我们在读取评论时可以用联合查寻来找到user表中的名字，为什么要有冗余字段呢，
因简单的sql语句执行效率更高，但不是冗余字段越多越好，冗余字段多了，同样会增加数据库负担<span class="token operator">.</span>
我要做的事情是，当我更新user表的name时，触发器同时更新comment表，就不要写php代码去更新了，
当用户被删除时，comment表中，有关该用户的数据将被删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建触发器" tabindex="-1"><a class="header-anchor" href="#创建触发器" aria-hidden="true">#</a> 创建触发器</h3><h4 id="创建更新name触发器" tabindex="-1"><a class="header-anchor" href="#创建更新name触发器" aria-hidden="true">#</a> 创建更新name触发器</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop trigger <span class="token keyword">if</span> exists updatename<span class="token punctuation">;</span>  
<span class="token class-name type-declaration">delimiter</span> $$
create trigger updatename after update on user <span class="token keyword">for</span> each row
begin
	<span class="token keyword">if</span> <span class="token keyword">new</span><span class="token operator">.</span>name <span class="token operator">!=</span>old<span class="token operator">.</span>name then
		update comment set comment<span class="token operator">.</span>name <span class="token operator">=</span> <span class="token keyword">new</span><span class="token operator">.</span>name where comment<span class="token operator">.</span>u_id <span class="token operator">=</span> old<span class="token operator">.</span>id<span class="token punctuation">;</span>
	end <span class="token keyword">if</span><span class="token punctuation">;</span>
<span class="token class-name type-declaration">end</span>$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建删除comment数据触发器" tabindex="-1"><a class="header-anchor" href="#创建删除comment数据触发器" aria-hidden="true">#</a> 创建删除comment数据触发器</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop trigger <span class="token keyword">if</span> exists deletecomment<span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
create trigger deletecomment before delete on user <span class="token keyword">for</span> each row
begin
delete from comment where comment<span class="token operator">.</span>u_id <span class="token operator">=</span> old<span class="token operator">.</span>id<span class="token punctuation">;</span>
<span class="token class-name type-declaration">end</span>$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>有一点很让人郁闷，就是写好的触发器代码，不能修改，你要删除掉重建，郁闷中，
还有一点就是phpmyadmin，有的能创建触发器，有的不能，有的能创建，但创建了看不到。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试触发器是否可用" tabindex="-1"><a class="header-anchor" href="#测试触发器是否可用" aria-hidden="true">#</a> 测试触发器是否可用</h3><h4 id="测试updata触发器" tabindex="-1"><a class="header-anchor" href="#测试updata触发器" aria-hidden="true">#</a> 测试updata触发器</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>update user set name<span class="token operator">=</span><span class="token string single-quoted-string">&#39;Soctt&#39;</span> where id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新后去comment表里面看看，里面name字段里面的段有没有改变</p><h4 id="测试delete触发器" tabindex="-1"><a class="header-anchor" href="#测试delete触发器" aria-hidden="true">#</a> 测试delete触发器</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>delete from user  where id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新后去comment表里面看看，里面name字段里面的段有没有改变</p><h3 id="mysql触发器-trigger之after与before区分" tabindex="-1"><a class="header-anchor" href="#mysql触发器-trigger之after与before区分" aria-hidden="true">#</a> MySQL触发器 trigger之after与before区分</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>after：是先完成数据的增删改，然后再触发，触发的语句晚于监视的增删改，无法影响前面的增删改动作；
也就是说先插入订单记录，再更新商品数量。当商品数量少于订单数量时造成爆库。

before：先完成触发，在进行增删改，触发语句先于监视的增删改，我们就有机会判断，修改即将发生的操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="触发器的优点" tabindex="-1"><a class="header-anchor" href="#触发器的优点" aria-hidden="true">#</a> 触发器的优点</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>触发器的<span class="token string double-quoted-string">&quot;自动性&quot;</span>
对程序员来说，触发器是看不到的，但是他的确做事情了，如果不用触发器的话，
你更新了user表的name字段时，你还要写代码去更新其他表里面的冗余字段，
举例子，只是一张表，如果是几张表都有冗余字段呢，你的代码是不是要写很多呢，看上去是不是很不爽呢。


触发器的数据完整性
触发器有回滚性，举个例子，就是你要更新五张表的数据，不会出现更新了二个张表，而另外三张表没有更新。
但是如果是用php代码去写的话，就有可能出现这种情况的，比如你更新了二张表的数据，这个时候，数据库挂掉了。
你就郁闷了，有的更新了，有的没更新。这样页面显示不一致了，变有bug了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","06.html.vue"]]);export{d as default};
