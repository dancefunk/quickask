import{_ as n,o as s,c as e,a}from"./app-d0ac87ef.js";const i={},l=a(`<h3 id="表引擎" tabindex="-1"><a class="header-anchor" href="#表引擎" aria-hidden="true">#</a> 表引擎</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>MySQL的强大之处在于它的插件式存储引擎，我们可以基于表的特点使用不同的存储引擎，从而达到最好的性能。

如果你足够熟悉，并且有一定工作经验后。你还可以使用阿里巴巴和网易开源出来的MySQL引擎在自己的服务器中使用。

mysql在创建表的时候，可以指定对应的引擎。

在mysql命令中使用：show engines<span class="token punctuation">;</span>

可以查看到当前服务器支持的所有引擎。

我们介绍几种常用的引擎和了解几个不常用的引擎。避免未来在实际工作中看到一些引擎不知道概念。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">引擎名称</th><th style="text-align:left;">特点</th></tr></thead><tbody><tr><td style="text-align:left;">MyISAM</td><td style="text-align:left;">MyISAM不支持事物、不支持外键、表锁定、优势是访问速度快，对事物没有要求或者以select、insert为主的应用基本上都可以用这个引擎建表</td></tr><tr><td style="text-align:left;">InnoDB</td><td style="text-align:left;">InnoDB表类型可以看作是对MyISAM的进一步更新产品，它提供了事务、行级锁机制和外键约束的功能</td></tr><tr><td style="text-align:left;">Memory</td><td style="text-align:left;">这种类型的数据表只存在于内存中。它使用散列索引，所以数据的存取速度非常快。因为是存在于内存中，所以这种类型常应用于临时表中。</td></tr><tr><td style="text-align:left;">Archive</td><td style="text-align:left;">这种类型只支持select 和 insert语句，而且不支持索引。常应用于日志记录和聚合分析方面。</td></tr><tr><td style="text-align:left;">Merge</td><td style="text-align:left;">这种类型是MyISAM类型的一种变种。合并表是将几个相同的MyISAM表合并为一个虚表。常应用于日志和数据仓库。</td></tr><tr><td style="text-align:left;">NDB</td><td style="text-align:left;">不常用。主要在MySQL 集群服务器中使用</td></tr><tr><td style="text-align:left;">BDB</td><td style="text-align:left;">可替代InnoDB的事务引擎，支持COMMIT、ROLLBACK和其他事务特性。</td></tr><tr><td style="text-align:left;">Federated</td><td style="text-align:left;">能够将多个分离的MySQL服务器链接起来，从多个物理服务器创建一个逻辑数据库。十分适合于分布式环境或数据集市环境。</td></tr><tr><td style="text-align:left;">Other</td><td style="text-align:left;">其他存储引擎包括CSV（引用由逗号隔开的用作数据库表的文件），Blackhole（用于临时禁止对数据库的应用程序输入），以及Example引擎（可为快速创建定制的插件式存储引擎提供帮助）</td></tr></tbody></table><h3 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam" aria-hidden="true">#</a> MyISAM</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>MyISAM 存储引擎独立于操作系统，也就是可以在windows上使用，也可以比较简单的将数据转移到linux操作系统上去。
这种存储引擎在创建表的时候，会创建三个文件，一个是<span class="token operator">.</span>frm文件用于存储表的定义，
一个是<span class="token operator">.</span><span class="token constant">MYD</span>文件用于存储表的数据，另一个是<span class="token operator">.</span><span class="token constant">MYI</span>文件，存储的是索引。
操作系统对大文件的操作是比较慢的，这样将表分为三个文件，
那么<span class="token operator">.</span><span class="token constant">MYD</span>这个文件单独来存放数据自然可以优化数据库的查询等操作。

<span class="token number">1.</span>不支持事务，但是并不代表着有事务操作的项目不能用MyISAM存储引擎，可以在service层进行根据自己的业务需求进行相应的控制。
<span class="token number">2.</span>不支持外键。
<span class="token number">3.</span>查询速度很快，如果数据库insert和update的操作比较多的话比较适用。
<span class="token number">4.</span>对表进行加锁。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>可以把InnoDB看做是MyISAM的一种更新换代产品，它增加了以下几种新功能<span class="token punctuation">:</span>

事务：InnoDB数据表里的数据库操作可以被执行为一个事务，这将允许把几条有着内在逻辑关系的<span class="token constant">SQL</span>命令当做一个整体来执行。
如果在执行时发行错误，所有的命令都将失效，就好像从未执行过这些命令<span class="token punctuation">;</span>

数据行级锁定机制：在执行一个事务的时候，InnoDB数据表的驱动程序使用的是它自已内建的数据行级锁定机制（不是MySQL提供的数据表级锁定机制）。
也就是说，在事务的过程中数据表是不会被锁定的，其他用户仍可以访问它，被锁定的只是正在接受事务处理的数据记录<span class="token punctuation">;</span>

外键约束条件：如果在数据表之间定义了关系，InnoDB驱动程序将自动保证数据表的引用一致性在执行过<span class="token constant">DELETE</span>命令之后也能保持。
也就是说，不可能出现数据表<span class="token constant">A</span>里的一条记录引用了数据表<span class="token constant">B</span>里一条不复存在的记录的问题。用数据库的术语来讲，这一功能叫做<span class="token string double-quoted-string">&quot;外键约束条件&quot;</span><span class="token punctuation">;</span>

崩溃恢复：在发生崩溃后，InnoDB数据表能够迅速地自动恢复到一个稳定可用的状态（前提是计算机文件系统没有被破坏）<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="memory" tabindex="-1"><a class="header-anchor" href="#memory" aria-hidden="true">#</a> Memory</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Memory数据表只存在于内存中（不是硬盘上）。它们使用了一个散列索引（hash index<span class="token punctuation">)</span><span class="token punctuation">,</span>所以记录在存取速度非常快<span class="token punctuation">;</span>

Memory数据表适用于数据量相对较小、但对访问速度要求很高的场合。
请注意，因为Memory数据表只存于内存，所以一旦MySQL服务器停止运行， Memory数据表也就消失了<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="archive" tabindex="-1"><a class="header-anchor" href="#archive" aria-hidden="true">#</a> Archive</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>archive是归档的意思，仅仅支持插入和查询两种功能，在MySQL5<span class="token operator">.</span><span class="token number">5</span>以后支持索引功能，他拥有很好的压缩机制，使用zlib压缩库，
在记录请求的时候实时的进行压缩，经常被用来作为仓库使用。适合存储大量的独立的作为历史记录的数据。
拥有很高的插入速度但是对查询的支持较差。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> Merge</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Merge存储引擎，是一组MyIsam的组合，也就是说，他将MyIsam引擎的多个表聚合起来，
但是他的内部没有数据，真正的数据依然是MyIsam引擎的表中，但是可以直接进行查询、删除更新等操作。

比如：我们可能会遇到这样的问题，同一种类的数据会根据数据的时间分为多个表，如果这时候进行查询的话，就会比较麻烦，
Merge可以直接将多个表聚合成一个表统一查询，然后再删除Merge表（删除的是定义），原来的数据不会影响。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ndbcluster" tabindex="-1"><a class="header-anchor" href="#ndbcluster" aria-hidden="true">#</a> NDBCluster</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1.</span>特性

　　分布式：分布式存储引擎，可以由多个NDBCluster存储引擎组成集群分别存放整体数据的一部分

　　支持事务：和Innodb一样，支持事务

　　可与mysqld不在一台主机：可以和mysqld分开存在于独立的主机上，然后通过网络和mysqld通信交互

　　内存需求量巨大：新版本索引以及被索引的数据必须存放在内存中，老版本所有数据和索引必须存在与内存中

<span class="token number">2.</span>适用场景

　　具有非常高的并发需求

　　对单个请求的响应并不是非常的critical

　　查询简单，过滤条件较为固定，每次请求数据量较少，又不希望自己进行水平Sharding

<span class="token number">3.</span>最佳实践

　　尽可能让查询简单，避免数据的跨节点传输

　　尽可能满足<span class="token constant">SQL</span>节点的计算性能，大一点的集群<span class="token constant">SQL</span>节点会明显多余Data节点

　　在各节点之间尽可能使用万兆网络环境互联，以减少数据在网络层传输过程中的延时
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bdb" tabindex="-1"><a class="header-anchor" href="#bdb" aria-hidden="true">#</a> BDB</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">BDB</span>存储引擎全称为BerkeleyDB存储引擎，和Innodb一样，也不是MySQL自己开发实现的一个存储引擎，
而是由Sleepycat Software所提供，当然，也是开源存储引擎，同样支持事务安全。


<span class="token constant">BDB</span>存储引擎的数据存放也是每个表两个物理文件，一个<span class="token operator">.</span>frm和一个<span class="token operator">.</span>db的文件，数据和索引信息都是存放在<span class="token operator">.</span>db文件中。
此外，<span class="token constant">BDB</span>为了实现事务安全，也有自己的redo日志，和Innodb一样，也可以通过参数指定日志文件存放的位置。
在锁定机制方面，<span class="token constant">BDB</span>和Memory存储引擎一样，实现页级锁定。


由于<span class="token constant">BDB</span>存储引擎实现了事务安全，那么他肯定也需要有自己的check point机制。
<span class="token constant">BDB</span>在每次启动的时候，都会做一次check point，并且将之前的所有redo日志清空。
在运行过程中，我们也可以通过执行flush logs来手工对<span class="token constant">BDB</span>进行check point操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="federated" tabindex="-1"><a class="header-anchor" href="#federated" aria-hidden="true">#</a> Federated</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">FEDERATED</span>存储引擎所实现的功能，和Oracle的<span class="token constant">DBLINK</span>基本相似，主要用来提供对远程MySQL服务器上面的数据的访问借口。
如果我们使用源码编译来安装MySQL，那么必须手工指定启用

<span class="token constant">FEDERATED</span>存储引擎才行，因为MySQL默认是不起用该存储引擎的。


当我们创建一个<span class="token constant">FEDERATED</span>表的时候，仅仅在本地创建了一个表的结构定义信息的文件而已，
所有数据均实时取自远程的MySQL服务器上面的数据库。



当我们通过<span class="token constant">SQL</span>操作<span class="token constant">FEDERATED</span>表的时候，实现过程基本如下：

a、<span class="token constant">SQL</span>调用被本地发布

b、MySQL处理器<span class="token constant">API</span>（数据以处理器格式）

c、MySQL客户端<span class="token constant">API</span>（数据被转换成<span class="token constant">SQL</span>调用）

d、远程数据库<span class="token operator">-&gt;</span> <span class="token property">MySQL</span>客户端<span class="token constant">API</span>

e、转换结果包（如果有的话）到处理器格式

f、处理器 <span class="token constant">API</span> <span class="token operator">-&gt;</span> 结果行或受行影响的对本地的计数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blackhole" tabindex="-1"><a class="header-anchor" href="#blackhole" aria-hidden="true">#</a> BLACKHOLE</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">BLACKHOLE</span>存储引擎是一个非常有意思的存储引擎，功能恰如其名，就是一个<span class="token string double-quoted-string">&quot;黑洞&quot;</span>。
就像我们unix系统下面的<span class="token string double-quoted-string">&quot;/dev/null&quot;</span>设备一样，不管我们写入任何信息，都是有去无回。
那么<span class="token constant">BLACKHOLE</span>存储引擎对我们有什么用呢？在我最初接触MySQL的时候我也有过同样的疑问，不知道MySQL提供这样一个存储引擎给我们的用意为何？
但是后来在又一次数据的迁移过程中，正是<span class="token constant">BLACKHOLE</span>给我带来了非常大的功效。
在那次数据迁移过程中，由于数据需要经过一个中转的MySQL服务器做一些相关的转换操作，然后再通过复制移植到新的服务器上面。
可当时我没有足够的空间来支持这个中转服务器的运作。
这时候就显示出<span class="token constant">BLACKHOLE</span>的功效了，他不会记录下任何数据，但是会在binlog中记录下所有的sql。
而这些sql最终都是会被复制所利用，并实施到最终的slave端。

MySQL的用户手册上面还介绍了<span class="token constant">BLACKHOLE</span>存储引擎其他几个用途如下：

a、<span class="token constant">SQL</span>文件语法的验证。
b、来自二进制日志记录的开销测量，通过比较允许二进制日志功能的<span class="token constant">BLACKHOLE</span>的性能与禁止二进制日志功能的<span class="token constant">BLACKHOLE</span>的性能。
c、因为<span class="token constant">BLACKHOLE</span>本质上是一个<span class="token string double-quoted-string">&quot;no-op&quot;</span> 存储引擎，它可能被用来查找与存储引擎自身不相关的性能瓶颈。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> CSV</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">CSV</span>存储引擎实际上操作的就是一个标准的<span class="token constant">CSV</span>文件，他不支持索引。
起主要用途就是大家有些时候可能会需要通过数据库中的数据导出成一份报表文件，而<span class="token constant">CSV</span>文件是很多软件都支持的一种较为标准的格式，
所以我们可以通过先在数据库中建立一张<span class="token constant">CVS</span>表，然后将生成的报表信息插入到该表，即可得到一份<span class="token constant">CSV</span>报表文件了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),d=[l];function t(c,r){return s(),e("div",null,d)}const p=n(i,[["render",t],["__file","03.html.vue"]]);export{p as default};
