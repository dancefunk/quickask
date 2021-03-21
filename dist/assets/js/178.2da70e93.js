(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{728:function(s,n,a){"use strict";a.r(n);var e=a(5),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"vue中的按键修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue中的按键修饰符"}},[s._v("#")]),s._v(" Vue中的按键修饰符")]),s._v(" "),a("p",[s._v("Vue中的事件绑定中，键盘事件有些特殊，我们可以通过获取不同的键值操作不同键盘触发不同的事件")]),s._v(" "),a("p",[s._v("Vue为不同键盘定义了不同的键名")]),s._v(" "),a("h3",{attrs:{id:"数字按键修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字按键修饰符"}},[s._v("#")]),s._v(" 数字按键修饰符")]),s._v(" "),a("p",[s._v("根据不同的键值，可以获取不同的键盘按键")]),s._v(" "),a("p",[s._v("示例：获取回车键（keyCode为）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <div id="app">\n        <input type="button" value="键盘事件" @keydown.13="fun()">\n    </div>\n    <script>\n        new Vue({\n            el: \'#app\',\n            methods: {\n                fun(){\n                    alert(\'按回车键的到的内容\');\n                }\n            }\n        })\n    <\/script>  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("键盘值有很多，我们可以自行获取（类似于上例）")]),s._v(" "),a("h3",{attrs:{id:"按键修饰符别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按键修饰符别名"}},[s._v("#")]),s._v(" 按键修饰符别名")]),s._v(" "),a("p",[s._v("Vue为部分键设置了别名，我们不仅可以通过键值获取按键，也可以通过键名获取按键")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <div id="app">\n        <input type="button" value="键盘事件" @keydown.enter="fun()">\n    </div>\n    <script>\n        new Vue({\n            el: \'#app\',\n            methods: {\n                fun(){\n                    alert(\'按回车键的到的内容\');\n                }\n            }\n        })\n    <\/script>  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"自定义按键修饰符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义按键修饰符"}},[s._v("#")]),s._v(" 自定义按键修饰符")]),s._v(" "),a("p",[s._v("自定义按键修饰符通过构造函数中的config进行拓展")]),s._v(" "),a("p",[s._v("1）自定义按键修饰符示例")]),s._v(" "),a("p",[s._v("例子：设置上键别名为test")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <div id="app">\n        <input type="button" value="键盘事件" @keydown.test="fun()">\n    </div>\n    <script>\n        Vue.config.keyCodes = {\n            test: 38\n        }\n\n        new Vue({\n            el: \'#app\',\n            methods: {\n                fun(){\n                    alert(\'按回车键的到的内容\');\n                }\n            }\n        })\n    <\/script>  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("2）自定义按键修饰符 驼峰式命名 无法使用")]),s._v(" "),a("p",[s._v("3）自定义按键修饰符 横杠式命名")]),s._v(" "),a("p",[s._v("横杠是按键修饰符在定义时候需要加引号")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <div id="app">\n        <input type="button" value="键盘事件" @keydown.test-me="fun()">\n    </div>\n    <script>\n        Vue.config.keyCodes = {\n            \'test-me\': 38\n        }\n\n        new Vue({\n            el: \'#app\',\n            methods: {\n                fun(){\n                    alert(\'按回车键的到的内容\');\n                }\n            }\n        })\n    <\/script>  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("自定义修饰符 数组式多命名")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    <div id="app">\n        <input type="button" value="键盘事件" @keydown.test="fun()">\n    </div>\n    <script>\n        Vue.config.keyCodes = {\n            test: [38, 39]\n        }\n\n        new Vue({\n            el: \'#app\',\n            methods: {\n                fun(){\n                    alert(\'按回车键的到的内容\');\n                }\n            }\n        })\n    <\/script>  \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);