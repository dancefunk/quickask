import{_ as n,o as s,c as a,a as t}from"./app-110372b4.js";const e={},p=t(`<h3 id="mysql存储过程" tabindex="-1"><a class="header-anchor" href="#mysql存储过程" aria-hidden="true">#</a> Mysql存储过程</h3><ul><li><strong>MySQL存储过程简介</strong></li><li><strong>MySQL存储过程入门</strong></li><li><strong>MySQL存储过程变量</strong></li><li><strong>MySQL存储过程参数</strong></li><li><strong>数据类型及运算符</strong></li><li><strong>存储过程中的Mysql流程语句</strong></li><li><strong>存储过程中的MySQL循环</strong></li><li><strong>MySQL游标</strong></li><li><strong>存储过程中的MySQL错误处理</strong></li><li><strong>MySQL存储函数</strong></li></ul><h3 id="mysql存储过程简介" tabindex="-1"><a class="header-anchor" href="#mysql存储过程简介" aria-hidden="true">#</a> MySQL存储过程简介</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>存储过程是一组为了完成特定功能的<span class="token constant">SQL</span>语句集，经编译后存储在数据库中。
用户通过指定存储过程的名字并给出参数<span class="token punctuation">(</span>如果该存储过程带有参数<span class="token punctuation">)</span>来执行它。
存储过程可由应用程序通过一个调用来执行，而且允许用户声明变量 。
同时，存储过程可以接收和输出参数、返回执行存储过程的状态值，也可以嵌套调用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql存储过程入门" tabindex="-1"><a class="header-anchor" href="#mysql存储过程入门" aria-hidden="true">#</a> MySQL存储过程入门</h3><h4 id="创建存储过程" tabindex="-1"><a class="header-anchor" href="#创建存储过程" aria-hidden="true">#</a> 创建存储过程</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name type-declaration">delimiter</span> $$
create procedure 存储过程的名称<span class="token punctuation">(</span><span class="token punctuation">)</span>
begin
<span class="token operator">...</span><span class="token operator">...</span><span class="token operator">...</span>
<span class="token class-name type-declaration">end</span>
$$
delimiter <span class="token punctuation">;</span>

案例：
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
begin
	select <span class="token operator">*</span> from pre_article<span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="调用存储过程" tabindex="-1"><a class="header-anchor" href="#调用存储过程" aria-hidden="true">#</a> 调用存储过程</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>基本语法：call 存储过程的名称
call <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除存储过程" tabindex="-1"><a class="header-anchor" href="#删除存储过程" aria-hidden="true">#</a> 删除存储过程</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>基本语法：drop procedure 存储过程的名称
drop procedure <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

注意事项：
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>不能在一个存储过程中删除另一个存储过程，只能调用另一个存储过程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他常用命令" tabindex="-1"><a class="header-anchor" href="#其他常用命令" aria-hidden="true">#</a> 其他常用命令</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1.</span>显示数据库中所有存储的存储过程基本信息，包括所属数据库，存储过程名称，创建时间等
show procedure status<span class="token punctuation">;</span>

<span class="token number">2.</span>显示某一个MySQL存储过程的详细信息
show create procedure 存储过程的名称
show create procedure test1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql存储过程变量" tabindex="-1"><a class="header-anchor" href="#mysql存储过程变量" aria-hidden="true">#</a> MySQL存储过程变量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>自定义变量：
	<span class="token keyword">DECLARE</span> a <span class="token keyword type-declaration">INT</span><span class="token punctuation">;</span> 
	<span class="token constant">SET</span> a<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>    
	可用以下语句代替：<span class="token keyword">DECLARE</span> a <span class="token keyword type-declaration">INT</span> <span class="token keyword">DEFAULT</span> <span class="token number">100</span><span class="token punctuation">;</span>

变量分为用户变量和系统变量，系统变量又分为会话和全局级变量

用户变量：用户变量名一般以@开头，滥用用户变量会导致程序难以理解及管理

<span class="token number">1</span>、 在mysql客户端使用用户变量
mysql<span class="token operator">&gt;</span> <span class="token constant">SELECT</span> <span class="token string single-quoted-string">&#39;Hello World&#39;</span> into @x<span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token constant">SELECT</span> @x<span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token constant">SET</span> @y<span class="token operator">=</span><span class="token string single-quoted-string">&#39;Goodbye Cruel World&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> select @y<span class="token punctuation">;</span>

mysql<span class="token operator">&gt;</span> <span class="token constant">SET</span> @z<span class="token operator">=</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> select @z<span class="token punctuation">;</span>


<span class="token number">2</span>、 在存储过程中使用用户变量

mysql<span class="token operator">&gt;</span> <span class="token constant">CREATE</span> <span class="token constant">PROCEDURE</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token constant">SELECT</span> <span class="token function">CONCAT</span><span class="token punctuation">(</span>@demo<span class="token punctuation">,</span><span class="token string single-quoted-string">&#39; World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token constant">SET</span> @demo<span class="token operator">=</span><span class="token string single-quoted-string">&#39;Hello&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token constant">CALL</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token number">3</span>、 在存储过程间传递全局范围的用户变量
mysql<span class="token operator">&gt;</span> <span class="token constant">CREATE</span> <span class="token constant">PROCEDURE</span> <span class="token function">p1</span><span class="token punctuation">(</span> <span class="token punctuation">)</span>   <span class="token constant">SET</span> @last_procedure<span class="token operator">=</span><span class="token string single-quoted-string">&#39;p1&#39;</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token constant">CREATE</span> <span class="token constant">PROCEDURE</span> <span class="token function">p2</span><span class="token punctuation">(</span> <span class="token punctuation">)</span> <span class="token constant">SELECT</span> <span class="token function">CONCAT</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Last procedure was &#39;</span><span class="token punctuation">,</span>@last_procedure<span class="token punctuation">)</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token constant">CALL</span> <span class="token function">p1</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
mysql<span class="token operator">&gt;</span> <span class="token constant">CALL</span> <span class="token function">p2</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql存储过程参数" tabindex="-1"><a class="header-anchor" href="#mysql存储过程参数" aria-hidden="true">#</a> MySQL存储过程参数</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysql存储过程的参数用在存储过程的定义，共有三种参数类型<span class="token punctuation">,</span><span class="token constant">IN</span><span class="token punctuation">,</span><span class="token constant">OUT</span><span class="token punctuation">,</span><span class="token constant">INOUT</span>
Create <span class="token class-name">procedure</span><span class="token operator">|</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token class-name">IN</span> <span class="token operator">|</span><span class="token class-name">OUT</span> <span class="token operator">|</span><span class="token class-name">INOUT</span> <span class="token punctuation">]</span> 参数名 数据类形<span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token constant">IN</span> 输入参数
表示该参数的值必须在调用存储过程时指定，在存储过程中修改该参数的值不能被返回，为默认值

<span class="token constant">OUT</span> 输出参数
该值可在存储过程内部被改变，并可返回

<span class="token constant">INOUT</span> 输入输出参数
调用时指定，并且可被改变和返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>IN参数例子</strong></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span>in id <span class="token keyword type-declaration">int</span><span class="token punctuation">)</span>
begin
	select id<span class="token punctuation">;</span> 
	set id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> 
	select id<span class="token punctuation">;</span> 
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>

执行结果
set @id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
call <span class="token function">hello_world</span><span class="token punctuation">(</span>@id<span class="token punctuation">)</span><span class="token punctuation">;</span>
select @id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>OUT参数例子</strong></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world<span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span>out id <span class="token keyword type-declaration">int</span><span class="token punctuation">)</span>
begin
	select id<span class="token punctuation">;</span> <span class="token comment">/*查看输出参数*/</span>
	set id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">/*修改参数值*/</span>
	select id<span class="token punctuation">;</span> <span class="token comment">/*查看修改后的值*/</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>

执行结果
set @id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
call <span class="token function">hello_world</span><span class="token punctuation">(</span>@id<span class="token punctuation">)</span><span class="token punctuation">;</span>
select @id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>INOUT参数例子</strong></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists <span class="token function">hello_world</span><span class="token punctuation">(</span>inout id <span class="token keyword type-declaration">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
beign
	select id<span class="token punctuation">;</span>
	set id <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
	select id<span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>

执行结果
set @id <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
call <span class="token function">hello_world</span><span class="token punctuation">(</span>@id<span class="token punctuation">)</span><span class="token punctuation">;</span>
select @id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型及运算符" tabindex="-1"><a class="header-anchor" href="#数据类型及运算符" aria-hidden="true">#</a> 数据类型及运算符</h3><h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>数据类型与数据库的字段类型一样，数据库有哪些字段类型，存储过程就有哪些类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h4><ul><li><strong>算术运算符</strong></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">+</span>     	加   <span class="token constant">SET</span> var1<span class="token operator">=</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">;</span>    
<span class="token operator">-</span>     	减   <span class="token constant">SET</span> var2<span class="token operator">=</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>   
<span class="token operator">*</span>     	乘   <span class="token constant">SET</span> var3<span class="token operator">=</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>  
<span class="token operator">/</span>     	除   <span class="token constant">SET</span> var4<span class="token operator">=</span><span class="token number">10</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">;</span>   
<span class="token constant">DIV</span>   	整除 <span class="token constant">SET</span> var5<span class="token operator">=</span><span class="token number">10</span> <span class="token constant">DIV</span> <span class="token number">3</span><span class="token punctuation">;</span> 
<span class="token operator">%</span>     	取模 <span class="token constant">SET</span> var6<span class="token operator">=</span><span class="token number">10</span><span class="token operator">%</span><span class="token number">3</span> <span class="token punctuation">;</span> 

<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token constant">BEGIN</span>
<span class="token keyword">declare</span> var1 <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> var2 <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> var3 <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> var4 <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> var5 <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> var6 <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
set var1<span class="token operator">=</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">;</span>
set var2<span class="token operator">=</span><span class="token number">3</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
set var3<span class="token operator">=</span><span class="token number">3</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>
set var4<span class="token operator">=</span><span class="token number">10</span><span class="token operator">/</span><span class="token number">3</span><span class="token punctuation">;</span>
set var5<span class="token operator">=</span><span class="token number">10</span> <span class="token constant">DIV</span> <span class="token number">3</span><span class="token punctuation">;</span>
set var6 <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">%</span><span class="token number">3</span><span class="token punctuation">;</span>
select var1<span class="token punctuation">,</span>var2<span class="token punctuation">,</span>var3<span class="token punctuation">,</span>var4<span class="token punctuation">,</span>var5<span class="token punctuation">,</span>var6<span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>比较运算符</strong></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token operator">&gt;</span>            	大于 <span class="token number">1</span><span class="token operator">&gt;</span><span class="token number">2</span> 		<span class="token constant boolean">False</span>
<span class="token operator">&lt;</span>            	小于 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token number">1</span> 		<span class="token constant boolean">False</span>
<span class="token operator">&lt;=</span>           	小于等于 <span class="token number">2</span><span class="token operator">&lt;=</span><span class="token number">2</span> <span class="token constant boolean">True</span>
<span class="token operator">&gt;=</span>           	大于等于 <span class="token number">3</span><span class="token operator">&gt;=</span><span class="token number">2</span> <span class="token constant boolean">True</span>
<span class="token constant">BETWEEN</span>      	在两值之间 <span class="token number">5</span> <span class="token constant">BETWEEN</span> <span class="token number">1</span> <span class="token keyword">AND</span> <span class="token number">10</span> <span class="token constant boolean">True</span>
<span class="token constant">NOT</span> <span class="token constant">BETWEEN</span> 	不在两值之间 <span class="token number">5</span> <span class="token constant">NOT</span> <span class="token constant">BETWEEN</span> <span class="token number">1</span> <span class="token keyword">AND</span> <span class="token number">10</span> <span class="token constant boolean">False</span>
<span class="token constant">IN</span>           	在集合中 <span class="token number">5</span> <span class="token function">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token constant boolean">False</span>
<span class="token constant">NOT</span> <span class="token constant">IN</span>       	不在集合中 <span class="token number">5</span> <span class="token constant">NOT</span> <span class="token function">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token constant boolean">True</span>
<span class="token operator">=</span>             	等于 <span class="token number">2</span><span class="token operator">=</span><span class="token number">3</span> <span class="token constant boolean">False</span>
<span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">!=</span>       	不等于 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token number">3</span> <span class="token constant boolean">False</span>
<span class="token operator">&lt;=&gt;</span>          	严格比较两个<span class="token constant">NULL</span>值是否相等 <span class="token constant">NULL</span><span class="token operator">&lt;=&gt;</span><span class="token constant">NULL</span> <span class="token constant boolean">True</span>
<span class="token constant">LIKE</span>          	简单模式匹配 <span class="token string double-quoted-string">&quot;Guy Harrison&quot;</span> <span class="token constant">LIKE</span> <span class="token string double-quoted-string">&quot;Guy%&quot;</span> <span class="token constant boolean">True</span>
<span class="token constant">REGEXP</span>       	正则式匹配 <span class="token string double-quoted-string">&quot;Guy Harrison&quot;</span> <span class="token constant">REGEXP</span> <span class="token string double-quoted-string">&quot;[Gg]reg&quot;</span> <span class="token constant boolean">False</span>
<span class="token constant">IS</span> <span class="token constant">NULL</span>      	为空 <span class="token number">0</span> <span class="token constant">IS</span> <span class="token constant">NULL</span> <span class="token constant boolean">False</span>
<span class="token constant">IS</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> 	不为空 <span class="token number">0</span> <span class="token constant">IS</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span> <span class="token constant boolean">True</span>

<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
begin
	select <span class="token number">1</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">;</span>
	select <span class="token number">2</span><span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">;</span>
	select <span class="token number">2</span><span class="token operator">&lt;=</span><span class="token number">2</span><span class="token punctuation">;</span>
	select <span class="token number">3</span><span class="token operator">&gt;=</span><span class="token number">2</span><span class="token punctuation">;</span>
	select <span class="token number">5</span> <span class="token constant">BETWEEN</span> <span class="token number">1</span> <span class="token keyword">AND</span> <span class="token number">10</span><span class="token punctuation">;</span>
	select <span class="token number">5</span> <span class="token constant">NOT</span> <span class="token constant">BETWEEN</span> <span class="token number">1</span> <span class="token keyword">AND</span> <span class="token number">10</span><span class="token punctuation">;</span>
	select <span class="token number">5</span> <span class="token function">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	select <span class="token number">5</span> <span class="token constant">NOT</span> <span class="token function">IN</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	select <span class="token number">2</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
	select <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token number">3</span><span class="token punctuation">;</span>
	select <span class="token constant">NULL</span><span class="token operator">&lt;=&gt;</span><span class="token constant">NULL</span><span class="token punctuation">;</span>
	select <span class="token string double-quoted-string">&quot;Guy Harrison&quot;</span> <span class="token constant">LIKE</span> <span class="token string double-quoted-string">&quot;Guy%&quot;</span><span class="token punctuation">;</span>
	select <span class="token string double-quoted-string">&quot;Guy Harrison&quot;</span> <span class="token constant">REGEXP</span> <span class="token string double-quoted-string">&quot;[Gg]reg&quot;</span><span class="token punctuation">;</span>
	select <span class="token number">0</span> <span class="token constant">IS</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
	select <span class="token number">0</span> <span class="token constant">IS</span> <span class="token constant">NOT</span> <span class="token constant">NULL</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>逻辑运算符</strong></li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>与<span class="token punctuation">(</span><span class="token keyword">AND</span><span class="token punctuation">)</span>
或<span class="token punctuation">(</span><span class="token keyword">OR</span><span class="token punctuation">)</span>
异或<span class="token punctuation">(</span><span class="token keyword">XOR</span><span class="token punctuation">)</span>

<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
begin
	<span class="token function">select</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">1</span> <span class="token keyword">AND</span> <span class="token number">2</span><span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">select</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">1</span> <span class="token keyword">AND</span> <span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">select</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">1</span> <span class="token keyword">OR</span> <span class="token number">2</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">select</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token number">1</span> <span class="token keyword">OR</span> <span class="token number">2</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	select <span class="token operator">!</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
delimiter <span class="token punctuation">;</span>


注释：

mysql存储过程可使用两种风格的注释
双横杠：<span class="token operator">--</span>

该风格一般用于单行注释
c风格：<span class="token comment">/* 注释内容 */</span> 一般用于多行注释
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储过程中的mysql流程语句" tabindex="-1"><a class="header-anchor" href="#存储过程中的mysql流程语句" aria-hidden="true">#</a> 存储过程中的Mysql流程语句</h3><h4 id="if-else-then" tabindex="-1"><a class="header-anchor" href="#if-else-then" aria-hidden="true">#</a> if else then</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world<span class="token punctuation">;</span>

<span class="token class-name type-declaration">delimiter</span> $$<span class="token punctuation">;</span>
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span>in id <span class="token keyword type-declaration">int</span><span class="token punctuation">)</span>
begin
	<span class="token keyword">if</span><span class="token punctuation">(</span>id <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> then
		select <span class="token string single-quoted-string">&#39;&gt;0&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">elseif</span><span class="token punctuation">(</span>id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> then
		select <span class="token string single-quoted-string">&#39;=0&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
		select <span class="token string single-quoted-string">&#39;&lt;0&#39;</span><span class="token punctuation">;</span>
	end <span class="token keyword">if</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>

call <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="case-when-then" tabindex="-1"><a class="header-anchor" href="#case-when-then" aria-hidden="true">#</a> case when then</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world<span class="token punctuation">;</span>

<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span>in id <span class="token keyword type-declaration">int</span><span class="token punctuation">)</span>
begin
	<span class="token keyword">case</span> 
		when id <span class="token operator">&gt;</span> <span class="token number">0</span> then
			select <span class="token string single-quoted-string">&#39;&gt;0&#39;</span><span class="token punctuation">;</span>
		when id <span class="token operator">=</span> <span class="token number">0</span> then
			select <span class="token string single-quoted-string">&#39;=0&#39;</span><span class="token punctuation">;</span>
		when id <span class="token operator">&lt;</span> <span class="token number">0</span> then
			select <span class="token string single-quoted-string">&#39;&lt;0&#39;</span><span class="token punctuation">;</span>
	<span class="token constant">END</span> <span class="token keyword">CASE</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储过程中的mysql循环" tabindex="-1"><a class="header-anchor" href="#存储过程中的mysql循环" aria-hidden="true">#</a> 存储过程中的MySQL循环</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">while</span>循环
loop循环
repeat until循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while循环" tabindex="-1"><a class="header-anchor" href="#while循环" aria-hidden="true">#</a> while循环</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world<span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
begin
	<span class="token keyword">declare</span> i <span class="token keyword type-declaration">int</span><span class="token punctuation">;</span>
	set i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">5</span>
	<span class="token keyword">do</span>
		select i<span class="token punctuation">;</span>
		set i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
	end <span class="token keyword">while</span><span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="repeat-until循环" tabindex="-1"><a class="header-anchor" href="#repeat-until循环" aria-hidden="true">#</a> repeat-until循环</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world<span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
begin
	<span class="token keyword">declare</span> i <span class="token keyword type-declaration">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
	repeat
		select i<span class="token punctuation">;</span>
		set i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
		until i <span class="token operator">&gt;</span> <span class="token number">5</span>
	end repeat<span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="loop循环" tabindex="-1"><a class="header-anchor" href="#loop循环" aria-hidden="true">#</a> LOOP循环</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists hello_world<span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
begin
	<span class="token keyword">declare</span> i <span class="token keyword type-declaration">int</span> <span class="token keyword">default</span> <span class="token number">0</span><span class="token punctuation">;</span>
	loop_label<span class="token punctuation">:</span>loop
		select i<span class="token punctuation">;</span>
		set i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> i <span class="token operator">&gt;=</span> <span class="token number">5</span> then
			leave loop_label<span class="token punctuation">;</span>
		end <span class="token keyword">if</span><span class="token punctuation">;</span>
	end loop<span class="token punctuation">;</span>
end<span class="token punctuation">;</span>
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql游标" tabindex="-1"><a class="header-anchor" href="#mysql游标" aria-hidden="true">#</a> MySQL游标</h3><h4 id="游标的作用及属性" tabindex="-1"><a class="header-anchor" href="#游标的作用及属性" aria-hidden="true">#</a> 游标的作用及属性</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>游标的作用就是用于对查询数据库所返回的记录进行遍历，以便进行相应的操作；游标有下面这些属性：

a、游标是只读的，也就是不能更新它；

b、游标是不能滚动的，也就是只能在一个方向上进行遍历，不能在记录之间随意进退，不能跳过某些记录；

c、避免在已经打开游标的表上更新数据。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如何使用游标" tabindex="-1"><a class="header-anchor" href="#如何使用游标" aria-hidden="true">#</a> 如何使用游标</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>a、定义游标并输入结果集
<span class="token keyword">DECLARE</span> My_Cursor <span class="token constant">CURSOR</span> <span class="token keyword">FOR</span> <span class="token punctuation">(</span> <span class="token constant">SELECT</span> id<span class="token punctuation">,</span> name <span class="token constant">FROM</span> t_people <span class="token punctuation">)</span><span class="token punctuation">;</span>

b、其次需要使用<span class="token constant">OPEN</span>语句来打开上面你定义的游标
<span class="token constant">OPEN</span> My_Cursor<span class="token punctuation">;</span>  

c、将游标当前读取行的数据顺序赋予自定义变量
<span class="token constant">FETCH</span> My_Cursor into my_id<span class="token punctuation">,</span> my_name<span class="token punctuation">;</span>

d、然后最后当我们所需要进行的操作都结束后我们要把游标释放掉。 
<span class="token constant">CLOSE</span> My_Cursor<span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="游标实例" tabindex="-1"><a class="header-anchor" href="#游标实例" aria-hidden="true">#</a> 游标实例</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>drop procedure <span class="token keyword">if</span> exists <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name type-declaration">delimiter</span> $$
create procedure <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
begin  <span class="token operator">--</span> 开始存储过程
	<span class="token keyword">declare</span> my_id <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">--</span> 自定义变量<span class="token number">1</span>
	<span class="token keyword">declare</span> my_name <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">--</span> 自定义变量<span class="token number">2</span>
	<span class="token keyword">DECLARE</span> done <span class="token keyword type-declaration">INT</span> <span class="token keyword">DEFAULT</span> <span class="token constant boolean">FALSE</span><span class="token punctuation">;</span> <span class="token operator">--</span> 自定义控制游标循环变量<span class="token punctuation">,</span>默认<span class="token constant boolean">false</span>

	<span class="token keyword">DECLARE</span> MY_Cursor <span class="token constant">CURSOR</span> <span class="token keyword">FOR</span> <span class="token punctuation">(</span><span class="token constant">SELECT</span> user_id<span class="token punctuation">,</span>user_name <span class="token constant">FROM</span> pre_user<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token operator">--</span> 定义游标并输入结果集
	<span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token constant">NOT</span> <span class="token constant">FOUND</span> <span class="token constant">SET</span> done <span class="token operator">=</span> <span class="token constant boolean">TRUE</span><span class="token punctuation">;</span> <span class="token operator">--</span> 绑定控制变量到游标<span class="token punctuation">,</span>游标循环结束自动转<span class="token constant boolean">true</span>

	<span class="token constant">OPEN</span> My_Cursor<span class="token punctuation">;</span> <span class="token operator">--</span> 打开游标
	myLoop<span class="token punctuation">:</span><span class="token constant">LOOP</span> <span class="token operator">--</span> 开始循环体<span class="token punctuation">,</span>myLoop为自定义循环名<span class="token punctuation">,</span>结束循环时用到
		<span class="token constant">FETCH</span> MY_Cursor into my_id<span class="token punctuation">,</span>my_name<span class="token punctuation">;</span>   <span class="token operator">--</span> 将游标当前读取行的数据顺序赋予自定义变量
		<span class="token keyword">IF</span> done <span class="token constant">THEN</span> <span class="token operator">--</span> 判断是否继续循环
			<span class="token constant">LEAVE</span> myLoop<span class="token punctuation">;</span> <span class="token operator">--</span> 结束循环
		<span class="token constant">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
		<span class="token operator">--</span> 自己要做的事情<span class="token punctuation">,</span>在sql中直接使用自定义变量即可
		<span class="token constant">SELECT</span> my_id<span class="token punctuation">,</span>my_name<span class="token punctuation">;</span>
	<span class="token constant">END</span> <span class="token constant">LOOP</span> myLoop<span class="token punctuation">;</span>  <span class="token operator">--</span> 结束自定义循环体
	<span class="token constant">CLOSE</span> My_Cursor<span class="token punctuation">;</span>  <span class="token operator">--</span> 关闭游标
<span class="token constant">END</span><span class="token punctuation">;</span>
$$
delimiter <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储过程中的mysql错误处理" tabindex="-1"><a class="header-anchor" href="#存储过程中的mysql错误处理" aria-hidden="true">#</a> 存储过程中的MySQL错误处理</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>当MySQL执行存储过程遇到错误时，适当处理它，如继续执行或退出当前代码段，并返回有意义的错误提示是很重要的。
一方面提高程序的容错能力，另一方便当程序出错时，开发人员也能准确定位错误的地方。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="声明处理程序" tabindex="-1"><a class="header-anchor" href="#声明处理程序" aria-hidden="true">#</a> 声明处理程序</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysql为我们提供了一种简单的方法定义处理程序，我们可以使用<span class="token keyword">DECLARE</span> <span class="token constant">HANDLER</span>语句，如下所示：

<span class="token keyword">DECLARE</span> action <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> condition_value statement<span class="token punctuation">;</span>

如果其值与condition_value匹配，MySQL将执行statement，并且根据action值选择继续或退出当前代码块。

action 可以是以下两种：
	<span class="token keyword">CONTINUE</span>：继续执行当前代码块
	<span class="token keyword">EXIT</span>：退出当前代码块

condition_value 是一类特定的条件，可以使一下几种：
	一个<span class="token constant">MYSQL</span>错误代码
	一个标准的<span class="token constant">SQLSTATE</span>值，如<span class="token constant">SQLWARNING</span>，<span class="token constant">NOTFOUND</span> ，<span class="token constant">SQLEXCEPTION</span>等

statement 是一个语句块，从<span class="token constant">BEGIN</span>开始，到<span class="token constant">END</span>结束。它可以是一个简单的sql语句，也可以是很复杂的逻辑语句。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在存储过程中mysql的处理程序的例子" tabindex="-1"><a class="header-anchor" href="#在存储过程中mysql的处理程序的例子" aria-hidden="true">#</a> 在存储过程中MySQL的处理程序的例子</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>首先我们创建一张数据表，为测试所用。


Create <span class="token constant">TABLE</span> <span class="token function">article_tags</span><span class="token punctuation">(</span>
    article_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">,</span>
    tag_id     <span class="token keyword type-declaration">INT</span><span class="token punctuation">,</span>
    <span class="token constant">PRIMARY</span> <span class="token function">KEY</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

article_tags表用来存储文章及标签之间的关系（多对多）。article_id存储文章<span class="token constant">ID</span>，tag_id存储标签<span class="token constant">ID</span>

其次，我们创建一个存储过程，实现插入文章<span class="token constant">ID</span>和标签<span class="token constant">ID</span>。


<span class="token class-name type-declaration">DELIMITER</span> $$
Create <span class="token constant">PROCEDURE</span> <span class="token function">insert_article_tags</span><span class="token punctuation">(</span><span class="token constant">IN</span> article_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">,</span> <span class="token constant">IN</span> tag_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">)</span>
<span class="token constant">BEGIN</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">CONTINUE</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token number">1062</span>
    Select <span class="token function">CONCAT</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;错误：重复键值 (&#39;</span><span class="token punctuation">,</span>article_id<span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;,&#39;</span><span class="token punctuation">,</span>tag_id<span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> msg<span class="token punctuation">;</span>
    <span class="token operator">--</span> 插入新的记录
    Insert <span class="token constant">INTO</span> <span class="token function">article_tags</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span>
    <span class="token function">VALUES</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">--</span> 返回标签数量
    Select <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token constant">FROM</span> article_tags<span class="token punctuation">;</span>
<span class="token constant">END</span><span class="token punctuation">;</span>
$$
<span class="token constant">DELIMITER</span> <span class="token punctuation">;</span>

第三，利用存储过程往article_tags表添加一些数据
<span class="token constant">CALL</span> <span class="token function">insert_article_tags</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">CALL</span> <span class="token function">insert_article_tags</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">CALL</span> <span class="token function">insert_article_tags</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


第四，这一步，我们添加一条已经存在的数据，看看上面定义的错误处理会不会执行。
<span class="token constant">CALL</span> <span class="token function">insert_article_tags</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

执行这条语句后，我们会看到如下的错误提示。
但是，因为在错误处理程序中我们设置了<span class="token keyword">CONTINUE</span>，因此程序还会继续执行，所以最后我们还会看到标签的数量。

错误：重复键值 <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span>

如果我们将<span class="token keyword">CONTINUE</span>改为<span class="token keyword">EXIT</span>，如：

<span class="token class-name type-declaration">DELIMITER</span> $$
Create <span class="token constant">PROCEDURE</span> <span class="token function">insert_article_tags_2</span><span class="token punctuation">(</span><span class="token constant">IN</span> article_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">,</span> <span class="token constant">IN</span> tag_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">)</span>
<span class="token constant">BEGIN</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token constant">SQLEXCEPTION</span>
    Select <span class="token string single-quoted-string">&#39;SQLException异常调用&#39;</span> <span class="token keyword">AS</span> msg<span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token number">1062</span>
        Select <span class="token string single-quoted-string">&#39;MySQL错误代码：1062&#39;</span> <span class="token keyword">AS</span> msg<span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token constant">SQLSTATE</span> <span class="token string single-quoted-string">&#39;23000&#39;</span>
    Select <span class="token string single-quoted-string">&#39;SQLSTATE：23000&#39;</span> <span class="token keyword">AS</span> msg<span class="token punctuation">;</span>
    <span class="token operator">--</span> 插入数据
    Insert <span class="token constant">INTO</span> <span class="token function">article_tags</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span>
       <span class="token function">VALUES</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">--</span> 返回记录数
    Select <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token constant">FROM</span> article_tags<span class="token punctuation">;</span>
<span class="token constant">END</span><span class="token punctuation">;</span>
$$
<span class="token constant">DELIMITER</span> <span class="token punctuation">;</span>

现在，我们再次插入一条已存在的数据：
<span class="token constant">CALL</span> <span class="token function">insert_article_tags_2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

这时，我们将智能看到错误信息，而看不到返回的记录数。
MySQL错误代码：<span class="token number">1062</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mysql处理程序的优先级" tabindex="-1"><a class="header-anchor" href="#mysql处理程序的优先级" aria-hidden="true">#</a> MySQL处理程序的优先级</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>在实际开发过程中，肯定会有多个错误处理程序，此时MySQL就需要根据优先级来调用处理。
在MySQL中，每一个error错误都会对应一个错误代码，一个<span class="token constant">SQLSTATE</span>状态可以映射到MySQL多个错误代码，
不太具体，而像<span class="token constant">SQLEXCPETION</span>或<span class="token constant">SQLWARNING</span>是一类<span class="token constant">SQLSTATES</span>值，是通用的。
因此，在处理优先级上，error错误首先处理，其次是<span class="token constant">SQLSTATE</span>，最后是<span class="token constant">SQLEXCEPTION</span>。

下面我们看一个包含这三种错误的存储过程：

<span class="token class-name type-declaration">DELIMITER</span> $$
Create <span class="token constant">PROCEDURE</span> <span class="token function">insert_article_tags_3</span><span class="token punctuation">(</span><span class="token constant">IN</span> article_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">,</span> <span class="token constant">IN</span> tag_id <span class="token keyword type-declaration">INT</span><span class="token punctuation">)</span>
<span class="token constant">BEGIN</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token number">1062</span> Select <span class="token string single-quoted-string">&#39;键值重复&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token constant">SQLEXCEPTION</span> Select <span class="token string single-quoted-string">&#39;SQLException异常&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token constant">SQLSTATE</span> <span class="token string single-quoted-string">&#39;23000&#39;</span> Select <span class="token string single-quoted-string">&#39;SQLSTATE 23000&#39;</span><span class="token punctuation">;</span>
    <span class="token operator">--</span> 插入记录
    Insert <span class="token constant">INTO</span> <span class="token function">article_tags</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span>
    <span class="token function">VALUES</span><span class="token punctuation">(</span>article_id<span class="token punctuation">,</span>tag_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">--</span> 返回记录数
    Select <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token constant">FROM</span> article_tags<span class="token punctuation">;</span>
<span class="token constant">END</span><span class="token punctuation">;</span>
$$
<span class="token constant">DELIMITER</span> <span class="token punctuation">;</span>

现在，我们插入一条已经存在的记录：
<span class="token constant">CALL</span> <span class="token function">insert_article_tags_3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

按照上面介绍的处理顺序，此时应该提示<span class="token string double-quoted-string">&quot;键值重复&quot;</span>。如下
键值重复
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="命名错误" tabindex="-1"><a class="header-anchor" href="#命名错误" aria-hidden="true">#</a> 命名错误</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>首先我们看一个例子：
<span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span> <span class="token number">1051</span> Select <span class="token string single-quoted-string">&#39;请先创建数据表 abc&#39;</span><span class="token punctuation">;</span>
Select <span class="token operator">*</span> <span class="token constant">FROM</span> abc<span class="token punctuation">;</span>

当我们查询一张不存在的的表时，提示相关错误信息，这里我们用到了<span class="token number">1051</span>代码。
想想一下，MySQL中有相当多的错误代码，难道我们需要记住每一个吗？

当然不是，MySQL为我们提供了<span class="token keyword">DECLARE</span> <span class="token constant">CONDITION</span>语句，用于命名错误条件，如：
<span class="token keyword">DECLARE</span> condition_name <span class="token constant">CONDITION</span> <span class="token keyword">FOR</span> condition_value<span class="token punctuation">;</span>
condition_value是一个错误代码，如<span class="token number">1015</span>或<span class="token constant">SQLSTATE</span>值。

定义之后，我们就可以使用condition_name来代替condition_value。现在，我们将上面的脚本重写，如：

<span class="token keyword">DECLARE</span> table_not_found <span class="token constant">CONDITION</span> <span class="token keyword">for</span> <span class="token number">1051</span><span class="token punctuation">;</span>
<span class="token keyword">DECLARE</span> <span class="token keyword">EXIT</span> <span class="token constant">HANDLER</span> <span class="token keyword">FOR</span>  table_not_found Select <span class="token string single-quoted-string">&#39;请先创建数据表 abc&#39;</span><span class="token punctuation">;</span>
Select <span class="token operator">*</span> <span class="token constant">FROM</span> abc<span class="token punctuation">;</span>

很显然，这段代码可读性比上面的要好。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql存储函数" tabindex="-1"><a class="header-anchor" href="#mysql存储函数" aria-hidden="true">#</a> MySQL存储函数</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysql存储过程基本函数包括：字符串类型，数值类型，日期类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="字符串类" tabindex="-1"><a class="header-anchor" href="#字符串类" aria-hidden="true">#</a> 字符串类</h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">CHARSET(str)</td><td style="text-align:left;">返回字串字符集</td></tr><tr><td style="text-align:left;">CONCAT (string2 [,… ])</td><td style="text-align:left;">连接字串</td></tr><tr><td style="text-align:left;">INSTR (string ,substring )</td><td style="text-align:left;">返回substring首次在string中出现的位置,不存在返回0</td></tr><tr><td style="text-align:left;">LCASE (string2 )</td><td style="text-align:left;">转换成小写</td></tr><tr><td style="text-align:left;">LEFT (string2 ,length )</td><td style="text-align:left;">从string2中的左边起取length个字符</td></tr><tr><td style="text-align:left;">LENGTH (string )</td><td style="text-align:left;">string长度</td></tr><tr><td style="text-align:left;">LOAD_FILE (file_name )</td><td style="text-align:left;">从文件读取内容</td></tr><tr><td style="text-align:left;">LOCATE (substring , string [,start_position ] )</td><td style="text-align:left;">同INSTR,但可指定开始位置</td></tr><tr><td style="text-align:left;">LPAD (string2 ,length ,pad )</td><td style="text-align:left;">重复用pad加在string开头,直到字串长度为length</td></tr><tr><td style="text-align:left;">LTRIM (string2 )</td><td style="text-align:left;">去除前端空格</td></tr><tr><td style="text-align:left;">REPEAT (string2 ,count )</td><td style="text-align:left;">重复count次</td></tr><tr><td style="text-align:left;">REPLACE (str ,search_str ,replace_str )</td><td style="text-align:left;">在str中用replace_str替换search_str</td></tr><tr><td style="text-align:left;">RPAD (string2 ,length ,pad)</td><td style="text-align:left;">在str后用pad补充,直到长度为length</td></tr><tr><td style="text-align:left;">RTRIM (string2 )</td><td style="text-align:left;">去除后端空格</td></tr><tr><td style="text-align:left;">STRCMP (string1 ,string2 )</td><td style="text-align:left;">逐字符比较两字串大小</td></tr><tr><td style="text-align:left;">SUBSTRING (str , position [,length ])</td><td style="text-align:left;">从str的position开始,取length个字符</td></tr><tr><td style="text-align:left;">TRIM([[BOTH、LEADING、TRAILING] [padding] FROM]string2)</td><td style="text-align:left;">去除指定位置的指定字符</td></tr><tr><td style="text-align:left;">UCASE (string2 )</td><td style="text-align:left;">转换成大写</td></tr><tr><td style="text-align:left;">RIGHT(string2,length)</td><td style="text-align:left;">取string2最后length个字符</td></tr><tr><td style="text-align:left;">SPACE(count)</td><td style="text-align:left;">生成count个空格</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysql<span class="token operator">&gt;</span> select <span class="token function">substring</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;abcd&#39;</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="数值类型" tabindex="-1"><a class="header-anchor" href="#数值类型" aria-hidden="true">#</a> 数值类型</h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">ABS (number2 )</td><td style="text-align:left;">绝对值</td></tr><tr><td style="text-align:left;">BIN (decimal_number )</td><td style="text-align:left;">十进制转二进制</td></tr><tr><td style="text-align:left;">CEILING (number2 )</td><td style="text-align:left;">向上取整</td></tr><tr><td style="text-align:left;">CONV(number2,from_base,to_base)</td><td style="text-align:left;">进制转换</td></tr><tr><td style="text-align:left;">FLOOR (number2 )</td><td style="text-align:left;">向下取整</td></tr><tr><td style="text-align:left;">FORMAT (number,decimal_places )</td><td style="text-align:left;">保留小数位数</td></tr><tr><td style="text-align:left;">HEX (DecimalNumber )</td><td style="text-align:left;">转十六进制</td></tr><tr><td style="text-align:left;">LEAST (number , number2 [,..])</td><td style="text-align:left;">求最小值</td></tr><tr><td style="text-align:left;">MOD (numerator ,denominator )</td><td style="text-align:left;">求余</td></tr><tr><td style="text-align:left;">POWER (number ,power )</td><td style="text-align:left;">求指数</td></tr><tr><td style="text-align:left;">RAND([seed])</td><td style="text-align:left;">随机数</td></tr><tr><td style="text-align:left;">ROUND (number [,decimals ])</td><td style="text-align:left;">四舍五入,decimals为小数位数]</td></tr><tr><td style="text-align:left;">SIGN (number2 )</td><td style="text-align:left;">返回符号,正负或0</td></tr><tr><td style="text-align:left;">SQRT(number2)</td><td style="text-align:left;">开平方</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>select <span class="token function">round</span><span class="token punctuation">(</span><span class="token number">1.23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="日期类型" tabindex="-1"><a class="header-anchor" href="#日期类型" aria-hidden="true">#</a> 日期类型</h4><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">ADDTIME (date2 ,time_interval )</td><td style="text-align:left;">将time_interval加到date2</td></tr><tr><td style="text-align:left;">CONVERT_TZ (datetime2 ,fromTZ ,toTZ )</td><td style="text-align:left;">转换时区</td></tr><tr><td style="text-align:left;">CURRENT_DATE ( )</td><td style="text-align:left;">当前日期</td></tr><tr><td style="text-align:left;">CURRENT_TIME ( )</td><td style="text-align:left;">当前时间</td></tr><tr><td style="text-align:left;">CURRENT_TIMESTAMP ( )</td><td style="text-align:left;">当前时间戳</td></tr><tr><td style="text-align:left;">DATE (datetime )</td><td style="text-align:left;">返回datetime的日期部分</td></tr><tr><td style="text-align:left;">DATE_ADD (date2 , INTERVAL d_value d_type )</td><td style="text-align:left;">在date2中加上日期或时间</td></tr><tr><td style="text-align:left;">DATE_FORMAT (datetime ,FormatCodes )</td><td style="text-align:left;">使用formatcodes格式显示datetime</td></tr><tr><td style="text-align:left;">DATE_SUB (date2 , INTERVAL d_value d_type )</td><td style="text-align:left;">在date2上减去一个时间</td></tr><tr><td style="text-align:left;">DATEDIFF (date1 ,date2 )</td><td style="text-align:left;">两个日期差</td></tr><tr><td style="text-align:left;">DAY (date )</td><td style="text-align:left;">返回日期的天</td></tr><tr><td style="text-align:left;">DAYNAME (date )</td><td style="text-align:left;">英文星期</td></tr><tr><td style="text-align:left;">DAYOFWEEK (date )</td><td style="text-align:left;">星期(1-7) ,1为星期天</td></tr><tr><td style="text-align:left;">DAYOFYEAR (date )</td><td style="text-align:left;">一年中的第几天</td></tr><tr><td style="text-align:left;">EXTRACT (interval_name FROM date )</td><td style="text-align:left;">从date中提取日期的指定部分</td></tr><tr><td style="text-align:left;">MAKEDATE (year ,day )</td><td style="text-align:left;">给出年及年中的第几天,生成日期串</td></tr><tr><td style="text-align:left;">MAKETIME (hour ,minute ,second )</td><td style="text-align:left;">生成时间串</td></tr><tr><td style="text-align:left;">MONTHNAME (date )</td><td style="text-align:left;">英文月份名</td></tr><tr><td style="text-align:left;">NOW ( )</td><td style="text-align:left;">当前时间</td></tr><tr><td style="text-align:left;">SEC_TO_TIME (seconds )</td><td style="text-align:left;">秒数转成时间</td></tr><tr><td style="text-align:left;">STR_TO_DATE (string ,format )</td><td style="text-align:left;">字串转成时间,以format格式显示</td></tr><tr><td style="text-align:left;">TIMEDIFF (datetime1 ,datetime2 )</td><td style="text-align:left;">两个时间差</td></tr><tr><td style="text-align:left;">TIME_TO_SEC (time )</td><td style="text-align:left;">时间转秒数]</td></tr><tr><td style="text-align:left;">WEEK (date_time [,start_of_week ])</td><td style="text-align:left;">第几周</td></tr><tr><td style="text-align:left;">YEAR (datetime )</td><td style="text-align:left;">年份</td></tr><tr><td style="text-align:left;">DAYOFMONTH(datetime)</td><td style="text-align:left;">月的第几天</td></tr><tr><td style="text-align:left;">HOUR(datetime)</td><td style="text-align:left;">小时</td></tr><tr><td style="text-align:left;">LAST_DAY(date)</td><td style="text-align:left;">date的月的最后日期</td></tr><tr><td style="text-align:left;">MICROSECOND(datetime)</td><td style="text-align:left;">微秒</td></tr><tr><td style="text-align:left;">MONTH(datetime)</td><td style="text-align:left;">月</td></tr><tr><td style="text-align:left;">MINUTE(datetime)</td><td style="text-align:left;">分</td></tr></tbody></table><h4 id="自定义mysql存储函数" tabindex="-1"><a class="header-anchor" href="#自定义mysql存储函数" aria-hidden="true">#</a> 自定义Mysql存储函数</h4><p>在MySQL中，创建存储函数的基本形式如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token function-definition function">sp_name</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>func_parameter<span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token constant">RETURNS</span> type  <span class="token punctuation">[</span>characteristic <span class="token operator">...</span><span class="token punctuation">]</span> routine_body 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>其中，sp_name参数是存储函数的名称；func_parameter表示存储函数的参数列表；
<span class="token constant">RETURNS</span> type指定返回值的类型；
characteristic参数指定存储函数的特性，该参数的取值与存储过程中的取值是一样的；
routine_body参数是<span class="token constant">SQL</span>代码的内容，可以用<span class="token constant">BEGIN</span>…<span class="token constant">END</span>来标志<span class="token constant">SQL</span>代码的开始和结束。
func_parameter可以由多个参数组成，其中每个参数由参数名称和参数类型组成，其形式如下：
param_name type其中，param_name参数是存储函数的参数名称；
type参数指定存储函数的参数类型，该类型可以是MySQL数据库的任意数据类型。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义mysql存储函数案例" tabindex="-1"><a class="header-anchor" href="#自定义mysql存储函数案例" aria-hidden="true">#</a> 自定义Mysql存储函数案例：</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name type-declaration">delimiter</span> $$
create <span class="token keyword">function</span> <span class="token function-definition function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
returns <span class="token function">varchar</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span>
begin
	<span class="token keyword">return</span> <span class="token function">date_format</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;%Y年%m月%d日：%h时：%i分：%s秒&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name type-declaration">end</span>$$
delimiter <span class="token punctuation">;</span>

存储函数已经创建成功。该函数的使用和MySQL内部函数的使用方法一样：
select <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,79),l=[p];function i(c,o){return s(),a("div",null,l)}const r=n(e,[["render",i],["__file","04.html.vue"]]);export{r as default};
