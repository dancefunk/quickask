(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{867:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"索引优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#索引优点"}},[t._v("#")]),t._v(" 索引优点")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("索引看着挺高大上的一个名字，说白了就是我们书最新面的目录。\n\n假如你用新华字典来查找"),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"张"')]),t._v("这个汉字，不使用目录的话，你可能要从新华字典的第一页找到最后一页，可能要花二个小时。\n\n字典越厚呢，你花的时间就越多。\n\n现在你使用目录来查找"),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"张"')]),t._v("这个汉字，张的首字母是z，\nz开头的汉字从"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("900")]),t._v("多页开始，有了这条线索，你查找一个汉字可能只要一分钟，由此可见索引的重要性。\n\n索引用于快速找出在某个列中有一特定值的行。\n\n不使用索引，MySQL必须从第"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("条记录开始然后读完整个表直到找出相关的行。表越大，花费的时间越多。\n如果表中查询的列有一个索引，MySQL能快速到达一个位置去搜寻到数据文件的中间，没有必要看所有数据。\n\n当然索引也不易过多，索引越多写入，修改的速度越慢。因为，写入修改数据时，也要修改索引。\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("h3",{attrs:{id:"mysql的索引类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql的索引类型"}},[t._v("#")]),t._v(" MySQL的索引类型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("功能说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("普通索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最基本的索引，它没有任何限制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("唯一索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("某一行企用了唯一索引则不准许这一列的行数据中有重复的值。针对这一列的每一行数据都要求是唯一的")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("主键索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("它是一种特殊的唯一索引，不允许有空值。一般是在建表的时候同时创建主键索引，常用于用户ID。类似于书中的页码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("全文索引")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("对于需要全局搜索的数据，进行全文索引")])])])]),t._v(" "),s("h3",{attrs:{id:"普通索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通索引"}},[t._v("#")]),t._v(" 普通索引")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("详细说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("基本语法")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("alter table 表 add index(字段)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE money ADD INDEX(username);")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例解释")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为money表的username字段增加索引")])])])]),t._v(" "),s("h3",{attrs:{id:"唯一索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[t._v("#")]),t._v(" 唯一索引")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("详细说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("基本语法")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("alter table 表 add UNIQUE(字段)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE money ADD UNIQUE(email);")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例解释")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为money表的email字段增加唯一索引")])])])]),t._v(" "),s("h3",{attrs:{id:"全文索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全文索引"}},[t._v("#")]),t._v(" 全文索引")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("详细说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("基本语法")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("alter table 表 add FULLTEXT(字段)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE money ADD FULLTEXT(content);")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例解释")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为money表的content字段增加唯一索引")])])])]),t._v(" "),s("h3",{attrs:{id:"主键索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主键索引"}},[t._v("#")]),t._v(" 主键索引")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("详细说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("基本语法")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("alter table 表 add PRIMARY KEY(字段)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("ALTER TABLE money ADD PRIMARY KEY(id);")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("示例解释")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为money表的id字段增加主键索引")])])])]),t._v(" "),s("h3",{attrs:{id:"创建表时也可以声明索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建表时也可以声明索引"}},[t._v("#")]),t._v(" 创建表时也可以声明索引")]),t._v(" "),s("p",[t._v("创建表时可在创建表语句后加上对应的类型即可声明索引：")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KEY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("索引名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FULLTEXT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("索引名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNIQUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("索引名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("字段"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("blockquote",[s("ul",[s("li",[t._v("整体示例如下：")])])]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("INT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tusername "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tpassword "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("INT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcontent "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("INT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("KEY ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INDEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pw ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UNIQUE ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FULLTEXT ")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENGINE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" InnoDB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);