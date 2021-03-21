(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{796:function(s,a,e){"use strict";e.r(a);var n=e(5),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"数据聚集"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据聚集"}},[s._v("#")]),s._v(" 数据聚集")]),s._v(" "),e("h1",{attrs:{id:"使用mongo命令行进行数据聚合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用mongo命令行进行数据聚合"}},[s._v("#")]),s._v(" 使用mongo命令行进行数据聚合")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("MongoDB可以执行数据聚合，比如按指定Key分组，计算总数，求不同分组的值。")]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("aggregate()")]),s._v("方法执行一个基于步骤的聚合操作（类似于Linux管道）。"),e("code",[s._v("aggregate()")]),s._v("接收一个步骤数组成为它的参数，每个步骤描述对数据处理的操作。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("db.collection.aggregate( [ <stage1>, <stage2>, ... ] )\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"按字段分组并计算总数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按字段分组并计算总数"}},[s._v("#")]),s._v(" 按字段分组并计算总数")]),s._v(" "),e("p",[s._v("使用$group管理操作符进行分组操作。在$group操作符中，使用"),e("code",[s._v("_id")]),s._v("来说明分组的key。$gropu管理操作使用$+字段名的方式来访问分组Key的。可以在每个分组管理操作中进行分组计算。下面的例子把restaurants集合按borough字段分组，并使用$sum操作符计算每个分组的文档数。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.restaurants.aggregate(\n   [\n     { $group: { "_id": "$borough", "count": { $sum: 1 } } }\n   ]\n);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("结果集包含以下文档：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{ "_id" : "Staten Island", "count" : 969 }\n{ "_id" : "Brooklyn", "count" : 6086 }\n{ "_id" : "Manhattan", "count" : 10259 }\n{ "_id" : "Queens", "count" : 5656 }\n{ "_id" : "Bronx", "count" : 2338 }\n{ "_id" : "Missing", "count" : 51 }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("code",[s._v("_id")]),s._v("字段包含了不同的borough值，它也是分组参照的Key值。")]),s._v(" "),e("h2",{attrs:{id:"过滤并分组文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤并分组文档"}},[s._v("#")]),s._v(" 过滤并分组文档")]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("$match")]),s._v("管道操作符过滤文档。"),e("code",[s._v("$match")]),s._v("使用的是MongoDB查询语法。下面的管道使用"),e("code",[s._v("$macth")]),s._v('查询borough字段值为"Queens"并且cuisine字段值为"Brazilian"的所有文档。然后'),e("code",[s._v("$group")]),s._v("分组管理操作符把匹配的所有文档按address.zipcode字段每组，并且使用"),e("code",[s._v("$sum")]),s._v("计算器计算总数。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.restaurants.aggregate(\n   [\n     { $match: { "borough": "Queens", "cuisine": "Brazilian" } },\n     { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } }\n   ]\n);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("结果集包含的文档如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{ "_id" : "11368", "count" : 1 }\n{ "_id" : "11106", "count" : 3 }\n{ "_id" : "11377", "count" : 1 }\n{ "_id" : "11103", "count" : 1 }\n{ "_id" : "11101", "count" : 2 }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("code",[s._v("_id")]),s._v("字段包含不同的zipcode的值。它是分组的Key。")])])}),[],!1,null,null,null);a.default=t.exports}}]);