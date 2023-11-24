import{_ as s,o as n,c as a,a as e}from"./app-3e5ace64.js";const t="/dist/assets/images/database/mysql/2.png",p="/dist/assets/images/database/mysql/3.png",l="/dist/assets/images/database/mysql/4.png",i={},o=e(`<h3 id="myisam表锁" tabindex="-1"><a class="header-anchor" href="#myisam表锁" aria-hidden="true">#</a> MyISAM表锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>MySQL的表级锁有两种模式：表共享读锁（Table Read Lock）和表独占写锁（Table Write Lock）。
对MyISAM表的读操作，不会阻塞其他用户对同一表的读请求，但会阻塞对同一表的写请求；
对MyISAM表的写操作，则会阻塞其他用户对同一表的读和写操作；
MyISAM表的读操作与写操作之间，以及写操作之间是串行的！
根据下面的例子可以知道，当一个线程获得对一个表的写锁后，只有持有锁的线程可以对表进行更新操作。
其他线程的读、写操作都会等待，直到锁被释放为止。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="myisam存储引擎的写锁阻塞读例子" tabindex="-1"><a class="header-anchor" href="#myisam存储引擎的写锁阻塞读例子" aria-hidden="true">#</a> MyISAM存储引擎的写锁阻塞读例子</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>当一个线程获得对一个表的写锁后，只有持有锁的线程可以对表进行更新操作。其他线程的读、写操作都会等待，直到锁被释放为止。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+t+`" alt=""></p><h3 id="myisam存储引擎的读锁阻塞写例子" tabindex="-1"><a class="header-anchor" href="#myisam存储引擎的读锁阻塞写例子" aria-hidden="true">#</a> MyISAM存储引擎的读锁阻塞写例子</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>一个session使用<span class="token constant">LOCK</span> <span class="token constant">TABLE</span>命令给表film_text加了读锁，这个session可以查询锁定表中的记录，但更新或访问其他表都会提示错误；
同时，另外一个session可以查询表中的记录，但更新就会出现锁等待。 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+`" alt=""></p><h3 id="如何加表锁" tabindex="-1"><a class="header-anchor" href="#如何加表锁" aria-hidden="true">#</a> 如何加表锁</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>MyISAM在执行查询语句（<span class="token constant">SELECT</span>）前，会自动给涉及的所有表加读锁，在执行更新操作（<span class="token constant">UPDATE</span>、<span class="token constant">DELETE</span>、<span class="token constant">INSERT</span>等）前，
会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用<span class="token constant">LOCK</span> <span class="token constant">TABLE</span>命令给MyISAM表显式加锁。
在示例中，显式加锁基本上都是为了演示而已，并非必须如此。
给MyISAM表显示加锁，一般是为了在一定程度模拟事务操作，实现对某一时间点多个表的一致性读取。
例如， 有一个订单表orders，其中记录有各订单的总金额total，同时还有一个订单明细表order_detail，
其中记录有各订单每一产品的金额小计 subtotal，假设我们需要检查这两个表的金额合计是否相符，可能就需要执行如下两条<span class="token constant">SQL</span>：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Select <span class="token function">sum</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> from orders<span class="token punctuation">;</span>
Select <span class="token function">sum</span><span class="token punctuation">(</span>subtotal<span class="token punctuation">)</span> from order_detail<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>这时，如果不先给两个表加锁，就可能产生错误的结果，
因为第一条语句执行过程中，order_detail表可能已经发生了改变。因此，正确的方法应该是：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>Lock tables orders read local<span class="token punctuation">,</span> order_detail read local<span class="token punctuation">;</span>
Select <span class="token function">sum</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> from orders<span class="token punctuation">;</span>
Select <span class="token function">sum</span><span class="token punctuation">(</span>subtotal<span class="token punctuation">)</span> from order_detail<span class="token punctuation">;</span>
Unlock tables<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>要特别说明以下两点内容： 
<span class="token number">1</span>、上面的例子在<span class="token constant">LOCK</span> <span class="token constant">TABLES</span>时加了<span class="token string double-quoted-string">&quot;local&quot;</span>选项，其作用就是在满足MyISAM表并发插入条件的情况下，
允许其他用户在表尾并发插入记录，有关MyISAM表的并发插入问题，在后面还会进一步介绍。

<span class="token number">2</span>、在用<span class="token constant">LOCK</span> <span class="token constant">TABLES</span>给表显式加表锁时，必须同时取得所有涉及到表的锁，并且MySQL不支持锁升级。
也就是说，在执行<span class="token constant">LOCK</span> <span class="token constant">TABLES</span>后，只能访问显式加锁的这些表，不能访问未加锁的表；
同时，如果加的是读锁，那么只能执行查询操作，而不能执行更新操作。
其实，在自动加锁的 情况下也基本如此，MyISAM总是一次获得<span class="token constant">SQL</span>语句所需要的全部锁。
这也正是MyISAM表不会出现死锁（Deadlock Free）的原因。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>当使用<span class="token constant">LOCK</span> <span class="token constant">TABLES</span>时，不仅需要一次锁定用到的所有表，而且，
同一个表在<span class="token constant">SQL</span>语句中出现多少次，就要通过与<span class="token constant">SQL</span>语句中相同的别名锁定多少次，否则也会出错！举例说明如下。 

<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>对actor表获得读锁：
mysql<span class="token operator">&gt;</span> lock table actor read<span class="token punctuation">;</span>
Query <span class="token constant">OK</span><span class="token punctuation">,</span> <span class="token number">0</span> rows <span class="token function">affected</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>但是通过别名访问会提示错误：
mysql<span class="token operator">&gt;</span> select a<span class="token operator">.</span>first_name<span class="token punctuation">,</span>a<span class="token operator">.</span>last_name<span class="token punctuation">,</span>b<span class="token operator">.</span>first_name<span class="token punctuation">,</span>b<span class="token operator">.</span>last_name 
from actor a<span class="token punctuation">,</span>actor b 
where a<span class="token operator">.</span>first_name <span class="token operator">=</span> b<span class="token operator">.</span>first_name <span class="token keyword">and</span> a<span class="token operator">.</span>first_name <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Lisa&#39;</span> <span class="token keyword">and</span> a<span class="token operator">.</span>last_name <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Tom&#39;</span> 
<span class="token keyword">and</span> a<span class="token operator">.</span>last_name <span class="token operator">&lt;</span><span class="token operator">&gt;</span> b<span class="token operator">.</span>last_name<span class="token punctuation">;</span>

<span class="token constant">ERROR</span> <span class="token number">1100</span> <span class="token punctuation">(</span><span class="token constant">HY000</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Table</span> <span class="token string single-quoted-string">&#39;a&#39;</span> was not locked with <span class="token constant">LOCK</span> <span class="token function">TABLES</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>需要对别名分别锁定：
mysql<span class="token operator">&gt;</span> lock table actor <span class="token keyword">as</span> a read<span class="token punctuation">,</span>actor <span class="token keyword">as</span> b read<span class="token punctuation">;</span>
Query <span class="token constant">OK</span><span class="token punctuation">,</span> <span class="token number">0</span> rows <span class="token function">affected</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>按照别名的查询可以正确执行：
mysql<span class="token operator">&gt;</span> select a<span class="token operator">.</span>first_name<span class="token punctuation">,</span>a<span class="token operator">.</span>last_name<span class="token punctuation">,</span>b<span class="token operator">.</span>first_name<span class="token punctuation">,</span>b<span class="token operator">.</span>last_name 
from actor a<span class="token punctuation">,</span>actor b where a<span class="token operator">.</span>first_name <span class="token operator">=</span> b<span class="token operator">.</span>first_name 
<span class="token keyword">and</span> a<span class="token operator">.</span>first_name <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Lisa&#39;</span> <span class="token keyword">and</span> a<span class="token operator">.</span>last_name <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Tom&#39;</span> 
<span class="token keyword">and</span> a<span class="token operator">.</span>last_name <span class="token operator">&lt;</span><span class="token operator">&gt;</span> b<span class="token operator">.</span>last_name<span class="token punctuation">;</span>

<span class="token operator">+</span>————<span class="token operator">+</span>———–<span class="token operator">+</span>————<span class="token operator">+</span>———–<span class="token operator">+</span>
<span class="token operator">|</span> <span class="token class-name">first_name</span> <span class="token operator">|</span> <span class="token class-name">last_name</span> <span class="token operator">|</span> <span class="token class-name">first_name</span> <span class="token operator">|</span> <span class="token class-name">last_name</span> <span class="token operator">|</span>
<span class="token operator">+</span>————<span class="token operator">+</span>———–<span class="token operator">+</span>————<span class="token operator">+</span>———–<span class="token operator">+</span>
<span class="token operator">|</span> <span class="token class-name">Lisa</span> <span class="token operator">|</span> <span class="token class-name">Tom</span> <span class="token operator">|</span> <span class="token class-name">LISA</span> <span class="token operator">|</span> <span class="token class-name">MONROE</span> <span class="token operator">|</span>
<span class="token operator">+</span>————<span class="token operator">+</span>———–<span class="token operator">+</span>————<span class="token operator">+</span>———–<span class="token operator">+</span>
<span class="token number">1</span> row in <span class="token function">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询表级锁争用情况" tabindex="-1"><a class="header-anchor" href="#查询表级锁争用情况" aria-hidden="true">#</a> 查询表级锁争用情况</h3><p>可以通过检查table_locks_waited和table_locks_immediate状态变量来分析系统上的表锁定争夺：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>mysql<span class="token operator">&gt;</span> show status like <span class="token string single-quoted-string">&#39;table%&#39;</span><span class="token punctuation">;</span>

<span class="token class-name">Variable_name</span> <span class="token operator">|</span> <span class="token class-name">Value</span>
<span class="token class-name">Table_locks_immediate</span> <span class="token operator">|</span> <span class="token number">2979</span>
<span class="token class-name">Table_locks_waited</span> <span class="token operator">|</span> <span class="token number">0</span>

<span class="token number">2</span> rows in <span class="token function">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span><span class="token punctuation">)</span>

如果Table_locks_waited的值比较高，则说明存在着较严重的表级锁争用情况。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="并发插入" tabindex="-1"><a class="header-anchor" href="#并发插入" aria-hidden="true">#</a> 并发插入</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>上文提到过MyISAM表的读和写是串行的，但这是就总体而言的。在一定条件下，MyISAM表也支持查询和插入操作的并发进行。
MyISAM存储引擎有一个系统变量concurrent_insert，专门用以控制其并发插入的行为，其值分别可以为<span class="token number">0</span>、<span class="token number">1</span>或<span class="token number">2</span>。

当concurrent_insert设置为<span class="token number">0</span>时，不允许并发插入。
当concurrent_insert设置为<span class="token number">1</span>时，如果MyISAM表中没有空洞（即表的中间没有被删除的行），
		MyISAM允许在一个进程读表的同时，另一个进程从表尾插入记录。这也是MySQL的默认设置。
当concurrent_insert设置为<span class="token number">2</span>时，无论MyISAM表中有没有空洞，都允许在表尾并发插入记录。


在下面的例子中，session_1获得了一个表的<span class="token constant">READ</span> <span class="token constant">LOCAL</span>锁，该线程可以对表进行查询操作，但不能对表进行更新操作；
其他的线程（session_2），虽然不能对表进行删除和更新操作，但却可以对该表进行并发插入操作，这里假设该表中间不存在空洞。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="myisam存储引擎的读写-insert-并发案例" tabindex="-1"><a class="header-anchor" href="#myisam存储引擎的读写-insert-并发案例" aria-hidden="true">#</a> MyISAM存储引擎的读写-INSERT-并发案例</h3><p><img src="`+l+`" alt=""></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>可以利用MyISAM存储引擎的并发插入特性，来解决应 用中对同一表查询和插入的锁争用。
例如，将concurrent_insert系统变量设为<span class="token number">2</span>，总是允许并发插入；
同时，通过定期在系统空闲时段执行 <span class="token constant">OPTIMIZE</span> <span class="token constant">TABLE</span>语句来整理空间碎片，收回因删除记录而产生的中间空洞。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="myisam的锁调度" tabindex="-1"><a class="header-anchor" href="#myisam的锁调度" aria-hidden="true">#</a> MyISAM的锁调度</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>前面讲过，MyISAM存储引擎的读锁和写锁是互斥的，读写操作是串行的。
那么，一个进程请求某个 MyISAM表的读锁，同时另一个进程也请求同一表的写锁，MySQL如何处理呢？答案是写进程先获得锁。
不仅如此，即使读请求先到锁等待队列，写请求后 到，写锁也会插到读锁请求之前！这是因为MySQL认为写请求一般比读请求要重要。
这也正是MyISAM表不太适合于有大量更新操作和查询操作应用的原因，因为，大量的更新操作会造成查询操作很难获得读锁，从而可能永远阻塞。
这种情况有时可能会变得非常糟糕！幸好我们可以通过一些设置来调节MyISAM 的调度行为。

通过指定启动参数low<span class="token operator">-</span>priority<span class="token operator">-</span>updates，使MyISAM引擎默认给予读请求以优先的权利。
通过执行命令<span class="token constant">SET</span> <span class="token constant">LOW_PRIORITY_UPDATES</span><span class="token operator">=</span><span class="token number">1</span>，使该连接发出的更新请求优先级降低。
通过指定<span class="token constant">INSERT</span>、<span class="token constant">UPDATE</span>、<span class="token constant">DELETE</span>语句的<span class="token constant">LOW_PRIORITY</span>属性，降低该语句的优先级。

虽然上面<span class="token number">3</span>种方法都是要么更新优先，要么查询优先的方法，但还是可以用其来解决查询相对重要的应用（如用户登录系统）中，读锁等待严重的问题。 

另外，MySQL也提供了一种折中的办法来调节读写冲突，即给系统参数max_write_lock_count设置一个合适的值，
当一个表的读锁达到这个值后，MySQL就暂时将写请求的优先级降低，给读进程一定获得锁的机会。

上面已经讨论了写优先调度机制带来的问题和解决办法。这 里还要强调一点：一些需要长时间运行的查询操作，也会使写进程<span class="token string double-quoted-string">&quot;饿死&quot;</span>！
因此，应用中应尽量避免出现长时间运行的查询操作，不要总想用一条<span class="token constant">SELECT</span>语 句来解决问题，
因为这种看似巧妙的<span class="token constant">SQL</span>语句，往往比较复杂，执行时间较长，在可能的情况下可以通过使用中间表等措施对<span class="token constant">SQL</span>语句做一定的<span class="token string double-quoted-string">&quot;分解&quot;</span>，使每 一步查询都能在较短时间完成，从而减少锁冲突。
如果复杂查询不可避免，应尽量安排在数据库空闲时段执行，比如一些定期统计可以安排在夜间执行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),c=[o];function r(d,u){return n(),a("div",null,c)}const v=s(i,[["render",r],["__file","02.html.vue"]]);export{v as default};
