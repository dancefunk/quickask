import{_ as e,o as a,c as n,a as s}from"./app-4841f850.js";const i={},d=s(`<h3 id="mysql数据锁" tabindex="-1"><a class="header-anchor" href="#mysql数据锁" aria-hidden="true">#</a> Mysql数据锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Mysql表锁
Mysql行锁
Mysql页面锁
Mysql共享锁
Mysql排它锁
Mysql间隙锁
Mysql乐观锁
Mysql悲观锁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="锁的特征" tabindex="-1"><a class="header-anchor" href="#锁的特征" aria-hidden="true">#</a> 锁的特征</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>相对于其他的数据库而言，MySQL的锁机制比较简单，最显著的特点就是不同的存储引擎支持不同的锁机制。
根据不同的存储引擎，MySQL中锁的特性可以大致归纳如下：
开销、加锁速度、死锁、粒度、并发性能

开销：指的是mysql表在运作过程中，操作表同时会产生的开销

加锁速度：用户在操作表的过程中会对表进行加锁<span class="token operator">.</span>

死锁：死锁是指两个或者多个事务在同一资源上相互占用，并请求锁定对方占用的资源，从而导致恶性循环的假象。
多个事务同时锁定同一个资源时，也会产生死锁。

粒度：为了尽可能提高数据库的并发度，每次锁定的数据范围越小越好，理论上每次只锁定当前操作的数据的方案会得到最大的并发度，
但是管理锁是很耗资源的事情（涉及获取，检查，释放锁等动作），因此数据库系统需要在高并发响应和系统性能两方面进行平衡，
这样就产生了<span class="token string double-quoted-string">&quot;锁粒度（Lock granularity）&quot;</span>的概念。

并发性能：一并请求的发送量。<span class="token punctuation">(</span>某个时间点同时存在多少请求量<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持程度" tabindex="-1"><a class="header-anchor" href="#支持程度" aria-hidden="true">#</a> 支持程度</h3><table><thead><tr><th style="text-align:left;">表引擎</th><th style="text-align:left;">行锁</th><th style="text-align:left;">表锁</th><th style="text-align:left;">页面锁</th></tr></thead><tbody><tr><td style="text-align:left;">MyISAM</td><td style="text-align:left;"></td><td style="text-align:left;">支持</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">BDB</td><td style="text-align:left;"></td><td style="text-align:left;">支持</td><td style="text-align:left;">支持</td></tr><tr><td style="text-align:left;">InnoDB</td><td style="text-align:left;">支持</td><td style="text-align:left;">支持</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="mysql表锁" tabindex="-1"><a class="header-anchor" href="#mysql表锁" aria-hidden="true">#</a> Mysql表锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>表锁：管理锁的开销最小，同时允许的并发量也最小的锁机制。MyIsam存储引擎使用的锁机制。
当要写入数据时，把整个表都锁上，此时其他读、写动作一律等待。
在MySql中，除了MyIsam存储引擎使用这种锁策略外，MySql本身也使用表锁来执行某些特定动作，比如alter table<span class="token operator">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql行锁" tabindex="-1"><a class="header-anchor" href="#mysql行锁" aria-hidden="true">#</a> Mysql行锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>行锁：可以支持最大并发的锁策略（同时也带来了最大的锁开销）。InnoDB和Falcon两张存储引擎都采用这种策略。
行级锁只在存储引擎层实现，而MySQL服务器层没有实现。服务器层完全不了解存储引擎中的锁实现。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql页面锁" tabindex="-1"><a class="header-anchor" href="#mysql页面锁" aria-hidden="true">#</a> Mysql页面锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mysql共享锁" tabindex="-1"><a class="header-anchor" href="#mysql共享锁" aria-hidden="true">#</a> Mysql共享锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>共享锁又称为读锁，简称<span class="token constant">S</span>锁，顾名思义，共享锁就是多个事务对于同一数据可以共享一把锁，都能访问到数据，但是只能读不能修改。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mysql排它锁" tabindex="-1"><a class="header-anchor" href="#mysql排它锁" aria-hidden="true">#</a> Mysql排它锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>排他锁又称为写锁，简称<span class="token constant">X</span>锁，顾名思义，排他锁就是不能与其他所并存，
如一个事务获取了一个数据行的排他锁，其他事务就不能再获取该行的其他锁，
包括共享锁和排他锁，但是获取排他锁的事务是可以对数据就行读取和修改。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql间隙锁" tabindex="-1"><a class="header-anchor" href="#mysql间隙锁" aria-hidden="true">#</a> Mysql间隙锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>当我们用范围条件而不是相等条件检索数据，并请求共享或排他锁时，InnoDB会给符合条件的已有数据记录的 索引项加锁；
对于键值在条件范围内但并不存在的记录，叫做<span class="token string double-quoted-string">&quot;间隙（GAP)&quot;</span>，InnoDB也会对这个<span class="token string double-quoted-string">&quot;间隙&quot;</span>加锁，
这种锁机制就是所谓的间隙锁 （Next<span class="token operator">-</span>Key锁）。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mysql悲观锁" tabindex="-1"><a class="header-anchor" href="#mysql悲观锁" aria-hidden="true">#</a> Mysql悲观锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>在读取数据时锁住那几行，其他对这几行的更新需要等到悲观锁结束时才能继续
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mysql乐观锁" tabindex="-1"><a class="header-anchor" href="#mysql乐观锁" aria-hidden="true">#</a> Mysql乐观锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>读取数据时不锁，更新时检查是否数据已经被更新过，如果是则取消当前更新
一般在悲观锁的等待时间过长而不能接受时我们才会选择乐观锁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[d];function t(r,c){return a(),n("div",null,l)}const v=e(i,[["render",t],["__file","01.html.vue"]]);export{v as default};
