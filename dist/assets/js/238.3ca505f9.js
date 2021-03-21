(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{790:function(s,a,e){"use strict";e.r(a);var t=e(5),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"导入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[s._v("#")]),s._v(" 导入数据")]),s._v(" "),e("p",[s._v("本教程使用test数据库和restaurants集合为例进行讲解。下面是restaurants的一个文档结构示例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n  "address": {\n     "building": "1007",\n     "coord": [ -73.856077, 40.848447 ],\n     "street": "Morris Park Ave",\n     "zipcode": "10462"\n  },\n  "borough": "Bronx",\n  "cuisine": "Bakery",\n  "grades": [\n     { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },\n     { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },\n     { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },\n     { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },\n     { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }\n  ],\n  "name": "Morris Park Bake Shop",\n  "restaurant_id": "30075445"\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"导入例子数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入例子数据"}},[s._v("#")]),s._v(" 导入例子数据")]),s._v(" "),e("p",[s._v("在进行操作之前，我们需要例子数据，在这里下载数据文件"),e("a",{attrs:{href:"../../../mdphoto/framework/mongodb/dataset.json"}},[s._v("dataset.json")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"导入数据到集合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入数据到集合"}},[s._v("#")]),s._v(" 导入数据到集合")]),s._v(" "),e("p",[s._v("在命令行中执行"),e("code",[s._v("mongoimport")]),s._v("命令将上面下载的数据文件中的数据导入到"),e("code",[s._v("test")]),s._v("数据库的"),e("code",[s._v("restaurants")]),s._v("集合中。如果此集合已经存在，下面的操作会先删除。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mongoimport --db test --collection restaurants --drop --file C:\\data\\dataset.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("code",[s._v("mongoimport")]),s._v("命令连接到本机运行的"),e("code",[s._v("mongod")]),s._v("实例，如果要把数据导到不同主机，不同端口的实例，可以指定主机和端口，使用参数 "),e("code",[s._v("--host")]),s._v("和"),e("code",[s._v("--port")]),s._v("。")]),s._v(" "),e("p",[s._v("数据导入后，你可以用"),e("code",[s._v("mongo")]),s._v("命令连接到实例，使用"),e("code",[s._v("show dbs")]),s._v("，"),e("code",[s._v("use test")]),s._v("，"),e("code",[s._v("show collections")]),s._v("和"),e("code",[s._v("db.restaurants.find()")]),s._v("命令查看导入的数据。")])])}),[],!1,null,null,null);a.default=n.exports}}]);