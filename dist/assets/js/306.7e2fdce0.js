(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{866:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("MySQL中存的是数据。只要是数据，我们就会规定数据的类型。在表的字段中规定了使用的是某个数据类型。\n那么，在插入的数据中就要使用对应的数据类型。并且，遵守数据类型的长度要求。\n\n在MySQL里面我们将数据类型分为了以下一些类型：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、数值类型（整型、浮点）\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、字符串类型\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、日期时间类型\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("、复合类型\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("、空间类型（非科学性工作基本不用，不做讲解）\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"整型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整型"}},[t._v("#")]),t._v(" 整型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("所占字节")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("值范围")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tinyint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-128~127")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("smallint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-32768~32767")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mediumint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-8388608~8388607")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("范围-2147483648~2147483647")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("bigint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("±9.22*10的18次方")])])])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("整型的长度不同，在实际使用过程也就不同。\nMySQL 以一个可选的显示宽度指示器的形式对 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SQL")]),t._v(" 标准进行扩展，这样当从数据库检索一个值时，\n可以把这个值加长到指定的长度。例如，指定一个字段的类型为 "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，\n就可以保证所包含数字少于 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" 个的值从数据库中检索出来时能够自动地用空格填充。\n需要注意的是，使用一个宽度指示器不会影响字段的大小和它可以存储的值的范围。\n\n注意：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、在创建表字段时，性别我们可以使用无符号的微小整型（tinyint）来表示。用"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("表示女、用"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("表示男。用"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("表示未知。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、同样人类年龄也是，在创建表字段时可用用无符号的整型。因为人类的年龄还没有负数\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、在实际使用过程中。我们业务中最大需要存储多大的数值。我们创建表时，就选择什么样的类型来存储这样的值。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"浮点类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点类型"}},[t._v("#")]),t._v(" 浮点类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("所占字节")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("值范围")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("float(m, d)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("单精度浮点型，m总个数，d小数位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("double(m, d)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("双精度浮点型，m总个数，d小数位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("decimal(m, d)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("...")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("decimal是存储为字符串的浮点数")])])])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("注意：\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("浮点是非精确值，会存在不太准确的情况\n\t"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("而decimal叫做定点数。在MySQL内部，本质上是用字符串存储的。\n\t实际使用过程中如果存在金额、钱精度要求比较高的浮点数存储，建议使用decimal（定点数）这个类型。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"字符类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符类型"}},[t._v("#")]),t._v(" 字符类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("所占字节")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("值范围")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定长字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VARCHAR")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("变长字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TINYBLOB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不超过255个字符的二进制字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TINYTEXT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("短文本字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BLOB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-65535字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("二进制形式的长文本数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TEXT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-65535字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("长文本数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MEDIUMBLOB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-16 777 215字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("二进制形式的中等长度文本数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MEDIUMTEXT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-16 777 215字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("中等长度文本数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("LOGNGBLOB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-4 294 967 295字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("二进制形式的极大文本数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("LONGTEXT")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0-4 294 967 295字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("极大文本数据")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("VARBINARY(M)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许长度0-M个字节的定长字节符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("值的长度+1个字节")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BINARY(M)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("M")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("允许长度0-M个字节的定长字节符串")])])])]),t._v(" "),a("h4",{attrs:{id:"char"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#char"}},[t._v("#")]),t._v(" CHAR")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("类型用于定长字符串，并且必须在圆括号内用一个大小修饰符来定义。\n这个大小修饰符的范围从 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("。比指定长度大的值将被截短，而比指定长度小的值将会用空格作填补\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h4",{attrs:{id:"varchar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#varchar"}},[t._v("#")]),t._v(" VARCHAR")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("把这个大小视为值的大小，在长度不足的情况下就用空格补足。\n而 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VARCHAR")]),t._v(" 类型把它视为最大值并且只使用存储字符串实际需要的长度\n类型不会被空格填补，但长于指示器的值仍然会被截短。\n因为 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VARCHAR")]),t._v(" 类型可以根据实际内容动态改变存储值的长度，\n所以在不能确定字段需要多少字符时使用 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VARCHAR")]),t._v(" 类型可以大大地节约磁盘空间、提高存储效率。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"text类型与blob类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text类型与blob类型"}},[t._v("#")]),t._v(" text类型与blob类型")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("对于字段长度要求超过 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v(" 个的情况下，MySQL 提供了 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLOB")]),t._v(" 两种类型。\n根据存储数据的大小，它们都有不同的子类型。这些大型的数据用于存储文本块或图像、\n声音文件等二进制数据类型。\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLOB")]),t._v(" 类型在分类和比较上存在区别。\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLOB")]),t._v(" 类型区分大小写，而 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),t._v(" 不区分大小写。大小修饰符不用于各种 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLOB")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),t._v(" 子类型。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"时间类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间类型"}},[t._v("#")]),t._v(" 时间类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("所占字节")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("值范围")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("date")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日期，格式：2014-09-18")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("时间，格式：08:42:30")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("datetime")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("日期时间，格式：2014-09-18 08:42:30")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("timestamp")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自动存储记录修改的时间")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("year")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1字节")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("年份")])])])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("注意：\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、时间类型在web系统中用的比较少，很多时候很多人喜欢使用"),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("int")]),t._v("来存储时间。\n插入时插入的是unix时间戳，因为这种方式更方便计算。\n在前端业务中用date类型的函数，再将unix时间戳转成人们可识别的时间。\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、上面的类型你可以根据实际情况实际进行选择\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、有些人为了在数据库管理中方便查看，也有人使用datetime类型来存储时间。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"复合类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复合类型"}},[t._v("#")]),t._v(" 复合类型")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("MySQL数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("所占字节")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("值范围")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("set")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("集合类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('set("member","member2",…"member64")')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enum")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("枚举类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('enum("member1","member2",…"member65535")')])])])]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("一个 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型只允许从一个集合中取得一个值；而 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v(" 类型允许从一个集合中取得任意多个值\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"enum-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enum-类型"}},[t._v("#")]),t._v(" ENUM 类型")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型因为只允许在集合中取得一个值，有点类似于单选项。\n在处理相互排拆的数据时容易让人理解，比如人类的性别。\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型字段可以从集合中取得一个值或使用"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("值，除此之外的输入将会使 MySQL 在这个字段中插入一个空字符串。\n另外如果插入值的大小写与集合中值的大小写不匹配，MySQL会自动使用插入值的大小写转换成与集合中大小写一致的值。\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型在系统内部可以存储为数字，并且从"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("开始用数字做索引。\n一个 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型最多可以包含 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65536")]),t._v(" 个元素，其中一个元素被 MySQL 保留，\n用来存储错误信息，这个错误值用索引 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 或者一个空字符串表示。\n\nMySQL 认为 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型集合中出现的值是合法输入，除此之外其它任何输入都将失败。\n这说明通过搜索包含空字符串或对应数字索引为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 的行就可以很容易地找到错误记录的位置。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h4",{attrs:{id:"set-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-类型"}},[t._v("#")]),t._v(" SET 类型")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v(" 类型与 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型相似但不相同。"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v("类型可以从预定义的集合中取得任意数量的值。\n并且与 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENUM")]),t._v(" 类型相同的是任何试图在 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v(" 类型字段中插入非预定义的值都会使MySQL插入一个空字符串。\n如果插入一个即有合法的元素又有非法的元素的记录，MySQL 将会保留合法的元素，除去非法的元素。\n\n\n一个 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v(" 类型最多可以包含 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v(" 个元素。在 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v(" 元素中值被存储为一个分离的"),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"位"')]),t._v("序列，这些"),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"位"')]),t._v("表示与它相对应的元素。\n"),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"位"')]),t._v("是创建有序元素集合的一种简单而有效的方式。\n并且它还去除了重复的元素，所以"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v("类型中不可能包含两个相同的元素。\n希望从 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SET")]),t._v(" 类型字段中找出非法的记录只需查找包含空字符串或二进制值为 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" 的行。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"类型使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型使用"}},[t._v("#")]),t._v(" 类型使用")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("我们学习了这么多类型，在创建表的语句的时候使用对应的类型即可。\n\n举例如下：\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXISTS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("demo ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),a("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tusername "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tpassword "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcontent longtext "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcreatetime datetime "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsex "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tinyint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("InnoDB "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"字段其他属性设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段其他属性设置"}},[t._v("#")]),t._v(" 字段其他属性设置")]),t._v(" "),a("h4",{attrs:{id:"unsigned"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsigned"}},[t._v("#")]),t._v(" UNSIGNED")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UNSIGNED")]),t._v("（无符号）\n主要用于整型和浮点类型，使用无符号。即，没有前面面的"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("（负号）。\n存储位数更长。tinyint整型的取值区间为，"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127")]),t._v("。而使用无符号后可存储"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v("个长度。\n创建时在整型或浮点字段语句后接上：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" unsigned\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"zerofill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zerofill"}},[t._v("#")]),t._v(" ZEROFILL")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("（不是空格）可以用来真补输出的值。使用这个修饰符可以阻止 MySQL 数据库存储负值。\n创建时在整型或浮点字段语句后接上：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" zerofill\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"default"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default"}},[t._v("#")]),t._v(" default")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v("属性确保在没有任何值可用的情况下，赋予某个常量值，这个值必须是常量，因为MySQL不允许插入函数或表达式值。\n\n此外，此属性无法用于"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLOB")]),t._v("或"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT")]),t._v("列。\n如果已经为此列指定了"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v("属性，没有指定默认值时默认值将为"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),t._v("，否则默认值将依赖于字段的数据类型。\n\n创建时在整型或浮点字段语句后接上：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'值'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"not-null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-null"}},[t._v("#")]),t._v(" not null")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("如果将一个列定义为not "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("，将不允许向该列插入"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("值。\n建议在重要情况下始终使用not "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("属性，因为它提供了一个基本验证，确保已经向查询传递了所有必要的值。\n创建时在整型或浮点字段语句后接上：\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" not "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h4",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" null")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("为列指定"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("属性时，该列可以保持为空，而不论行中其它列是否已经被填充。\n记住，"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("精确的说法是"),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"无"')]),t._v("，而不是空字符串或"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("。\n创建时在整型或浮点字段语句后不要声明not "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v("即可。\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);