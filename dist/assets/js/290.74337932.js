(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{853:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"mysql触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql触发器"}},[s._v("#")]),s._v(" Mysql触发器")]),s._v(" "),a("h3",{attrs:{id:"什么触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么触发器"}},[s._v("#")]),s._v(" 什么触发器")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、个人理解\n触发器，从字面来理解，一触即发的一个器，简称触发器（哈哈，个人理解），\n举个例子吧，好比天黑了，你开灯了，你看到东西了。你放炮仗，点燃了，一会就炸了\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、官方定义\n触发器（trigger）是个特殊的存储过程，它的执行不是由程序调用，也不是手工启动，而是由事件来触发，\n比如当对一个表进行操作（ insert，delete， update）时就会激活它执行。触发器经常用于加强数据的完整性约束和业务规则等。 \n触发器可以从 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DBA_TRIGGERS")]),s._v(" ，"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USER_TRIGGERS")]),s._v(" 数据字典中查到。\n触发器有一个非常好的特性就是"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("触发器可以禁止或回滚违反引用完整性的更改，从而取消所尝试的数据修改。\n什么意思，举个例子解释一下，街机游戏大家都玩过吧，闯过一关，闯下一关，有一关没闯过就要从第一关开始。触发器跟这个类似。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、官方解释如下\n触发程序视为单一交易中的一部份，因此可以由原触发程序还原交易，\n如果在交易过程中侦测到严重的错误（如使用者中断连线），则会自动还原整个交易。\n他的作用很明显了，可以保重数据的完整性，下面有一个实例来说明他的好处，以及如果使编写代码不那么复杂\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"触发器语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发器语法"}},[s._v("#")]),s._v(" 触发器语法")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TRIGGER")]),s._v(" trigger_name trigger_time trigger_event "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" tbl_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EACH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ROW")]),s._v(" trigger_stmt\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TRIGGER")]),s._v(" 触发器的名字 触发时间 触发事件 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" 数据表名 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("EACH")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ROW")]),s._v(" 触发程序时执行的语句\n\ntrigger_name：触发器的名字\ntrigger_time：触发时间 before after\ntrigger_event：触发事件 insert update delete\ntbl_name：数据表名\ntrigger_stmt：触发程序时执行的语句\n\n触发程序是与表有关的命名数据库对象，当表上出现特定事件时，将激活该对象。\n触发程序与命名为tbl_name的表相关。tbl_name必须引用永久性表。不能将触发程序与"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TEMPORARY")]),s._v("表或视图关联起来。\ntrigger_time是触发程序的动作时间。它可以是 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" 或 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AFTER")]),s._v(" ，以指明触发程序是在激活它的语句之前或之后触发。\ntrigger_event指明了激活触发程序的语句的类型。trigger_event可以是下述值之一：\n\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("：将新行插入表时激活触发程序，例如，通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATA")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REPLACE")]),s._v("语句。\n\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("：更改某一行时激活触发程序，例如，通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("语句。\n\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELETE")]),s._v("：从表中删除某一行时激活触发程序，例如，通过"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELETE")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REPLACE")]),s._v("语句。\n\n请注意，trigger_event与以表操作方式激活触发程序的"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SQL")]),s._v("语句并不很类似，这点很重要。\n例如，关于"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("的"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v("触发程序不仅能被"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("语句激活，也能被"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LOAD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATA")]),s._v("语句激活。\n\n可能会造成混淆的例子之一是"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DUPLICATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n语法："),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("触发程序对于每一行将激活，后跟"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AFTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("触发程序，或"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("和"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AFTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("触发程序，\n具体情况取决于行上是否有重复键。对于具有相同触发程序动作时间和事件的给定表，不能有两个触发程序。\n例如，对于某一表，不能有两个"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("触发程序。\n但可以有"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("触发程序和"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v("触发程序，或"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEFORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("触发程序和"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("个"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AFTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v("触发程序。\ntrigger_stmt是当触发程序激活时执行的语句。如果你打算执行多个语句，可使用"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BEGIN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("END")]),s._v("复合语句结构。\n这样，就能使用存储子程序中允许的相同语句\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("h3",{attrs:{id:"测试数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试数据"}},[s._v("#")]),s._v(" 测试数据")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("用户表user\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`user`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`id`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" auto_increment "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'用户ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`name`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`sex`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'0'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'0为男，1为女'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("KEY  ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`id`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MyISAM  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`user`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`id`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`name`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`sex`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("VALUES \n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'张映'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'tank'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("评论表comment\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("TABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`comment`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`c_id`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" auto_increment "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'评论ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`u_id`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[s._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'用户ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`name`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'用户名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`content`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'评论内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("KEY  ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`c_id`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MyISAM  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DEFAULT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INSERT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("INTO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`comment`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`c_id`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`u_id`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`name`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[s._v("`content`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("VALUES \n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'张映'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'触发器测试'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'张映'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'解决字段冗余'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'tank'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'使代码更简单'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("在这里有一个冗余字段name，我们在读取评论时可以用联合查寻来找到user表中的名字，为什么要有冗余字段呢，\n因简单的sql语句执行效率更高，但不是冗余字段越多越好，冗余字段多了，同样会增加数据库负担"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("\n我要做的事情是，当我更新user表的name时，触发器同时更新comment表，就不要写php代码去更新了，\n当用户被删除时，comment表中，有关该用户的数据将被删除\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"创建触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建触发器"}},[s._v("#")]),s._v(" 创建触发器")]),s._v(" "),a("h4",{attrs:{id:"创建更新name触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建更新name触发器"}},[s._v("#")]),s._v(" 创建更新name触发器")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("drop trigger "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" exists updatename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[s._v("delimiter")]),s._v(" $$\ncreate trigger updatename after update on user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" each row\nbegin\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v("old"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("name then\n\t\tupdate comment set comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("name where comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("u_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" old"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tend "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[s._v("end")]),s._v("$$\ndelimiter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"创建删除comment数据触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建删除comment数据触发器"}},[s._v("#")]),s._v(" 创建删除comment数据触发器")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("drop trigger "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" exists deletecomment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[s._v("delimiter")]),s._v(" $$\ncreate trigger deletecomment before delete on user "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" each row\nbegin\ndelete from comment where comment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("u_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" old"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[s._v("end")]),s._v("$$\ndelimiter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("有一点很让人郁闷，就是写好的触发器代码，不能修改，你要删除掉重建，郁闷中，\n还有一点就是phpmyadmin，有的能创建触发器，有的不能，有的能创建，但创建了看不到。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"测试触发器是否可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试触发器是否可用"}},[s._v("#")]),s._v(" 测试触发器是否可用")]),s._v(" "),a("h4",{attrs:{id:"测试updata触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试updata触发器"}},[s._v("#")]),s._v(" 测试updata触发器")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("update user set name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'Soctt'")]),s._v(" where id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更新后去comment表里面看看，里面name字段里面的段有没有改变")]),s._v(" "),a("h4",{attrs:{id:"测试delete触发器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试delete触发器"}},[s._v("#")]),s._v(" 测试delete触发器")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("delete from user  where id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更新后去comment表里面看看，里面name字段里面的段有没有改变")]),s._v(" "),a("h3",{attrs:{id:"mysql触发器-trigger之after与before区分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql触发器-trigger之after与before区分"}},[s._v("#")]),s._v(" MySQL触发器 trigger之after与before区分")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("after：是先完成数据的增删改，然后再触发，触发的语句晚于监视的增删改，无法影响前面的增删改动作；\n也就是说先插入订单记录，再更新商品数量。当商品数量少于订单数量时造成爆库。\n\nbefore：先完成触发，在进行增删改，触发语句先于监视的增删改，我们就有机会判断，修改即将发生的操作。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"触发器的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#触发器的优点"}},[s._v("#")]),s._v(" 触发器的优点")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("触发器的"),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"自动性"')]),s._v("\n对程序员来说，触发器是看不到的，但是他的确做事情了，如果不用触发器的话，\n你更新了user表的name字段时，你还要写代码去更新其他表里面的冗余字段，\n举例子，只是一张表，如果是几张表都有冗余字段呢，你的代码是不是要写很多呢，看上去是不是很不爽呢。\n\n\n触发器的数据完整性\n触发器有回滚性，举个例子，就是你要更新五张表的数据，不会出现更新了二个张表，而另外三张表没有更新。\n但是如果是用php代码去写的话，就有可能出现这种情况的，比如你更新了二张表的数据，这个时候，数据库挂掉了。\n你就郁闷了，有的更新了，有的没更新。这样页面显示不一致了，变有bug了。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);