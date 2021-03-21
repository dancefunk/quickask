(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{549:function(s,a,t){s.exports=t.p+"assets/img/2.02c341dd.png"},550:function(s,a,t){s.exports=t.p+"assets/img/3.29f8739a.png"},551:function(s,a,t){s.exports=t.p+"assets/img/4.4f32f46b.png"},851:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"myisam表锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myisam表锁"}},[s._v("#")]),s._v(" MyISAM表锁")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("MySQL的表级锁有两种模式：表共享读锁（Table Read Lock）和表独占写锁（Table Write Lock）。\n对MyISAM表的读操作，不会阻塞其他用户对同一表的读请求，但会阻塞对同一表的写请求；\n对MyISAM表的写操作，则会阻塞其他用户对同一表的读和写操作；\nMyISAM表的读操作与写操作之间，以及写操作之间是串行的！\n根据下面的例子可以知道，当一个线程获得对一个表的写锁后，只有持有锁的线程可以对表进行更新操作。\n其他线程的读、写操作都会等待，直到锁被释放为止。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"myisam存储引擎的写锁阻塞读例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎的写锁阻塞读例子"}},[s._v("#")]),s._v(" MyISAM存储引擎的写锁阻塞读例子")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("当一个线程获得对一个表的写锁后，只有持有锁的线程可以对表进行更新操作。其他线程的读、写操作都会等待，直到锁被释放为止。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:t(549),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"myisam存储引擎的读锁阻塞写例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎的读锁阻塞写例子"}},[s._v("#")]),s._v(" MyISAM存储引擎的读锁阻塞写例子")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("一个session使用"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v("命令给表film_text加了读锁，这个session可以查询锁定表中的记录，但更新或访问其他表都会提示错误；\n同时，另外一个session可以查询表中的记录，但更新就会出现锁等待。 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("img",{attrs:{src:t(550),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"如何加表锁"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何加表锁"}},[s._v("#")]),s._v(" 如何加表锁")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("MyISAM在执行查询语句（"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v("）前，会自动给涉及的所有表加读锁，在执行更新操作（"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("、"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELETE")]),s._v("、"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("等）前，\n会自动给涉及的表加写锁，这个过程并不需要用户干预，因此，用户一般不需要直接用"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v("命令给MyISAM表显式加锁。\n在示例中，显式加锁基本上都是为了演示而已，并非必须如此。\n给MyISAM表显示加锁，一般是为了在一定程度模拟事务操作，实现对某一时间点多个表的一致性读取。\n例如， 有一个订单表orders，其中记录有各订单的总金额total，同时还有一个订单明细表order_detail，\n其中记录有各订单每一产品的金额小计 subtotal，假设我们需要检查这两个表的金额合计是否相符，可能就需要执行如下两条"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("：\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("Select "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from orders"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSelect "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("subtotal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from order_detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("这时，如果不先给两个表加锁，就可能产生错误的结果，\n因为第一条语句执行过程中，order_detail表可能已经发生了改变。因此，正确的方法应该是：\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("Lock tables orders read local"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" order_detail read local"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSelect "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("total"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from orders"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nSelect "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("subtotal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" from order_detail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nUnlock tables"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("要特别说明以下两点内容： \n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、上面的例子在"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLES")]),s._v("时加了"),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"local"')]),s._v("选项，其作用就是在满足MyISAM表并发插入条件的情况下，\n允许其他用户在表尾并发插入记录，有关MyISAM表的并发插入问题，在后面还会进一步介绍。\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、在用"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLES")]),s._v("给表显式加表锁时，必须同时取得所有涉及到表的锁，并且MySQL不支持锁升级。\n也就是说，在执行"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLES")]),s._v("后，只能访问显式加锁的这些表，不能访问未加锁的表；\n同时，如果加的是读锁，那么只能执行查询操作，而不能执行更新操作。\n其实，在自动加锁的 情况下也基本如此，MyISAM总是一次获得"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句所需要的全部锁。\n这也正是MyISAM表不会出现死锁（Deadlock Free）的原因。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("当使用"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLES")]),s._v("时，不仅需要一次锁定用到的所有表，而且，\n同一个表在"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句中出现多少次，就要通过与"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句中相同的别名锁定多少次，否则也会出错！举例说明如下。 \n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("对actor表获得读锁：\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" lock table actor read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("affected ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("但是通过别名访问会提示错误：\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" select a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name \nfrom actor a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("actor b \nwhere a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Lisa'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Tom'")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ERROR")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("1100 ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HY000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name return-type"}},[s._v("Table")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'a'")]),s._v(" was not locked with "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCK")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("TABLES\n\n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("需要对别名分别锁定：\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" lock table actor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" a read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("actor "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" b read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nQuery "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" rows "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("affected ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("按照别名的查询可以正确执行：\nmysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" select a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name \nfrom actor a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("actor b where a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("first_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Lisa'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Tom'")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("and")]),s._v(" a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("last_name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("————"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("———–"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("————"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("———–"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("first_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("last_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("first_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("last_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("————"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("———–"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("————"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("———–"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Lisa")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Tom")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("LISA")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MONROE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("————"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("———–"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("————"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("———–"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row in "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("h3",{attrs:{id:"查询表级锁争用情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查询表级锁争用情况"}},[s._v("#")]),s._v(" 查询表级锁争用情况")]),s._v(" "),n("p",[s._v("可以通过检查table_locks_waited和table_locks_immediate状态变量来分析系统上的表锁定争夺：")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("mysql"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show status like "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'table%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Variable_name")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Value")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Table_locks_immediate")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2979")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Table_locks_waited")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" rows in "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n如果Table_locks_waited的值比较高，则说明存在着较严重的表级锁争用情况。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"并发插入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#并发插入"}},[s._v("#")]),s._v(" 并发插入")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("上文提到过MyISAM表的读和写是串行的，但这是就总体而言的。在一定条件下，MyISAM表也支持查询和插入操作的并发进行。\nMyISAM存储引擎有一个系统变量concurrent_insert，专门用以控制其并发插入的行为，其值分别可以为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("、"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("或"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("。\n\n当concurrent_insert设置为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("时，不允许并发插入。\n当concurrent_insert设置为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("时，如果MyISAM表中没有空洞（即表的中间没有被删除的行），\n\t\tMyISAM允许在一个进程读表的同时，另一个进程从表尾插入记录。这也是MySQL的默认设置。\n当concurrent_insert设置为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("时，无论MyISAM表中有没有空洞，都允许在表尾并发插入记录。\n\n\n在下面的例子中，session_1获得了一个表的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("READ")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOCAL")]),s._v("锁，该线程可以对表进行查询操作，但不能对表进行更新操作；\n其他的线程（session_2），虽然不能对表进行删除和更新操作，但却可以对该表进行并发插入操作，这里假设该表中间不存在空洞。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"myisam存储引擎的读写-insert-并发案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎的读写-insert-并发案例"}},[s._v("#")]),s._v(" MyISAM存储引擎的读写-INSERT-并发案例")]),s._v(" "),n("p",[n("img",{attrs:{src:t(551),alt:""}})]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("可以利用MyISAM存储引擎的并发插入特性，来解决应 用中对同一表查询和插入的锁争用。\n例如，将concurrent_insert系统变量设为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，总是允许并发插入；\n同时，通过定期在系统空闲时段执行 "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OPTIMIZE")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v("语句来整理空间碎片，收回因删除记录而产生的中间空洞。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"myisam的锁调度"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#myisam的锁调度"}},[s._v("#")]),s._v(" MyISAM的锁调度")]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[s._v("前面讲过，MyISAM存储引擎的读锁和写锁是互斥的，读写操作是串行的。\n那么，一个进程请求某个 MyISAM表的读锁，同时另一个进程也请求同一表的写锁，MySQL如何处理呢？答案是写进程先获得锁。\n不仅如此，即使读请求先到锁等待队列，写请求后 到，写锁也会插到读锁请求之前！这是因为MySQL认为写请求一般比读请求要重要。\n这也正是MyISAM表不太适合于有大量更新操作和查询操作应用的原因，因为，大量的更新操作会造成查询操作很难获得读锁，从而可能永远阻塞。\n这种情况有时可能会变得非常糟糕！幸好我们可以通过一些设置来调节MyISAM 的调度行为。\n\n通过指定启动参数low"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("priority"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("updates，使MyISAM引擎默认给予读请求以优先的权利。\n通过执行命令"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SET")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOW_PRIORITY_UPDATES")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，使该连接发出的更新请求优先级降低。\n通过指定"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("、"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("、"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELETE")]),s._v("语句的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOW_PRIORITY")]),s._v("属性，降低该语句的优先级。\n\n虽然上面"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("种方法都是要么更新优先，要么查询优先的方法，但还是可以用其来解决查询相对重要的应用（如用户登录系统）中，读锁等待严重的问题。 \n\n另外，MySQL也提供了一种折中的办法来调节读写冲突，即给系统参数max_write_lock_count设置一个合适的值，\n当一个表的读锁达到这个值后，MySQL就暂时将写请求的优先级降低，给读进程一定获得锁的机会。\n\n上面已经讨论了写优先调度机制带来的问题和解决办法。这 里还要强调一点：一些需要长时间运行的查询操作，也会使写进程"),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"饿死"')]),s._v("！\n因此，应用中应尽量避免出现长时间运行的查询操作，不要总想用一条"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v("语 句来解决问题，\n因为这种看似巧妙的"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句，往往比较复杂，执行时间较长，在可能的情况下可以通过使用中间表等措施对"),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句做一定的"),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"分解"')]),s._v("，使每 一步查询都能在较短时间完成，从而减少锁冲突。\n如果复杂查询不可避免，应尽量安排在数据库空闲时段执行，比如一些定期统计可以安排在夜间执行。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);