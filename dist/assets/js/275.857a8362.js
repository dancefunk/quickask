(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{835:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h3",{attrs:{id:"更新数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新数据"}},[s._v("#")]),s._v(" 更新数据")]),s._v(" "),e("h1",{attrs:{id:"使用mongo命令行更新数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用mongo命令行更新数据"}},[s._v("#")]),s._v(" 使用mongo命令行更新数据")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("update()")]),s._v("方法更新文档。这个方法接收以下参数：")]),s._v(" "),e("ul",[e("li",[s._v("一个方档匹配的过滤器，用于过滤要更新的文档")]),s._v(" "),e("li",[s._v("一个用来执行修改操作的更新文档")]),s._v(" "),e("li",[s._v("一个可选的参数")])]),s._v(" "),e("p",[s._v("指定过滤器和指定查询的时候是一样的。"),e("code",[s._v("update()")]),s._v("方法默认只更新单个文档，使用"),e("code",[s._v("multi")]),s._v("可选参数指定更新所有匹配的文档。")]),s._v(" "),e("p",[s._v("不能更新文档的"),e("code",[s._v("_id")]),s._v("字段。")]),s._v(" "),e("h2",{attrs:{id:"更新指定字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新指定字段"}},[s._v("#")]),s._v(" 更新指定字段")]),s._v(" "),e("p",[s._v("要改变某个字段的值，MongoDB提供了更新操作，比如"),e("code",[s._v("$set")]),s._v("用来修改值。如果字段不存在，"),e("code",[s._v("$set")]),s._v("会创建这个字段。")]),s._v(" "),e("h2",{attrs:{id:"更新顶级字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新顶级字段"}},[s._v("#")]),s._v(" 更新顶级字段")]),s._v(" "),e("p",[s._v("下面的操作更新"),e("code",[s._v("name")]),s._v('字段值为"Juni"的第一个文档，使用'),e("code",[s._v("$set")]),s._v("操作更新cuisine字段，使用"),e("code",[s._v("$currentDate")]),s._v("操作更新lastModified字段。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.restaurants.update(\n    { "name" : "Juni" },\n    {\n      $set: { "cuisine": "American (New)" },\n      $currentDate: { "lastModified": true }\n    }\n)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("更新操作会返回一个"),e("code",[s._v("WriteResult")]),s._v("对象，它包含更新操作返回的一些状态信息。")]),s._v(" "),e("h2",{attrs:{id:"更新内嵌文档字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新内嵌文档字段"}},[s._v("#")]),s._v(" 更新内嵌文档字段")]),s._v(" "),e("p",[s._v("更新内嵌文档的字段，需要使用“.”号。如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.restaurants.update(\n  { "restaurant_id" : "41156888" },\n  { $set: { "address.street": "East 31st Street" } }\n)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"更新多个文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新多个文档"}},[s._v("#")]),s._v(" 更新多个文档")]),s._v(" "),e("p",[s._v("默认地，"),e("code",[s._v("update()")]),s._v("方法只更新一个文档。如果要更新多个文档，需要指定"),e("code",[s._v("multi")]),s._v("可选参数。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.restaurants.update(\n  { "address.zipcode": "10016", cuisine: "Other" },\n  {\n    $set: { cuisine: "Category To Be Determined" },\n    $currentDate: { "lastModified": true }\n  },\n  { multi: true}\n)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"替换文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换文档"}},[s._v("#")]),s._v(" 替换文档")]),s._v(" "),e("p",[s._v("要替换一个文档，只需要把一个新的文档传递给"),e("code",[s._v("update()")]),s._v("的第二个参数，并且不需要包含"),e("code",[s._v("_id")]),s._v("字段。如果包含"),e("code",[s._v("_id")]),s._v("字段，只保证跟原文档是同一个值。用于替换的文档可以跟原文档具有完全不同的字段。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('db.restaurants.update(\n   { "restaurant_id" : "41704620" },\n   {\n     "name" : "Vella 2",\n     "address" : {\n              "coord" : [ -73.9557413, 40.7720266 ],\n              "building" : "1480",\n              "street" : "2 Avenue",\n              "zipcode" : "10075"\n     }\n   }\n)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);