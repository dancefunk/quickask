(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{632:function(s,t,n){"use strict";n.r(t);var a=n(5),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"cookie概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cookie概述"}},[s._v("#")]),s._v(" Cookie概述")]),s._v(" "),n("p",[s._v("Cookie 是服务器保存在浏览器的一小段文本信息，每个 Cookie 的大小一般不能超过4KB"),n("br"),s._v("\n浏览器每次向服务器发出请求，就会自动附上这段信息"),n("br"),s._v("\nCookie 保存以下几方面的信息")]),s._v(" "),n("ul",[n("li",[s._v("Cookie的名字")]),s._v(" "),n("li",[s._v("Cookie的值")]),s._v(" "),n("li",[s._v("到期时间")]),s._v(" "),n("li",[s._v("所属域名（默认是当前域名）")]),s._v(" "),n("li",[s._v("生效的路径（默认是当前网址）")])]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[s._v("举例来说，如果当前URL是www.example.com，那么Cookie的路径就是根目录 /\n这意味着，这个Cookie对该域名的根路径和它的所有子路径都有效\n如果路径设为 /user，那么这个Cookie只有在访问 www.example.com/user 及其子路径时才有效\n\n浏览器可以设置不接受 Cookie，也可以设置不向服务器发送 Cookie。\nwindow.navigator.cookieEnabled 属性返回一个布尔值，表示浏览器是否打开Cookie功能\n\ndocument.cookie属性返回当前网页的Cookie\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 读取当前网页的所有cookie")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" allCookies "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("ul",[n("li",[s._v("由于"),n("code",[s._v("document.cookie")]),s._v("返回的是分号分隔的所有Cookie，所以必须手动还原才能取出每一个Cookie的值")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//分割成数组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" cookies "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cookies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("blockquote",[n("ul",[n("li",[n("code",[s._v("document.cookie")]),s._v("属性是可写的，可以通过它为当前网站添加Cookie")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username=demo'")]),s._v("\n\nCookie的值必须写成 key"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value 的形式。注意，等号两边不能有空格。\n另外，写入Cookie的时候，必须对分号、逗号和空格进行转义（它们都不允许作为Cookie的值）\n这可以用 encodeURIComponent 方法达到。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("ul",[n("li",[n("code",[s._v("document.cookie")]),s._v("一次只能写入一个Cookie，而且写入并不是覆盖，而是添加")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test1=hello'")]),s._v("\ndocument"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test2=world'")]),s._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// test1=hello;test2=world")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"cookie-的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cookie-的属性"}},[s._v("#")]),s._v(" Cookie 的属性")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("除了Cookie本身的内容，还有一些可选的属性也是可以写入的，它们都必须以分号开头")])])]),s._v(" "),n("div",{staticClass:"language-http line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-http"}},[n("code",[n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Set-Cookie:")]),s._v(" value[; expires=date][; domain=domain][; path=path][; secure]\n\n上面的Set-Cookie字段，用分号分隔多个属性。它们的含义如下\n\nvalue属性\nvalue属性是必需的，它是一个键值对，用于指定Cookie的值。\n\nexpires属性\nexpires属性用于指定Cookie过期时间。它的格式采用 Date.toUTCString() 的格式。\n如果不设置该属性，或者设为`null`，Cookie只在当前会话有效，浏览器窗口一旦关闭，当前会话结束，该Cookie就会被删除。\n浏览器根据本地时间，决定Cookie是否过期，由于本地时间是不精确的，所以没有办法保证Cookie一定会在服务器指定的时间过期。\n\ndomain属性\ndomain属性指定Cookie所在的域名，比如 example.com或.example.com(这种写法将对所有子域名生效)。\n如果未指定，默认为设定该Cookie的域名。所指定的域名必须是当前发送Cookie的域名的一部分，\n比如当前访问的域名是example.com，就不能将其设为google.com。只有访问的域名匹配domain属性，Cookie才会发送到服务器\n\npath属性\n\npath属性用来指定路径，必须是绝对路径（比如/、/mydir），如果未指定，默认为请求该 Cookie 的网页路径\n只有path属性匹配向服务器发送的路径，Cookie才会发送。\n这里的匹配不是绝对匹配，而是从根路径开始，只要path属性匹配发送路径的一部分，就可以发送。\n比如，path属性等于/blog，则发送路径是/blog或者/blog/roll，Cookie都会发送。path属性生效的前提是domain属性匹配。\n\nsecure属性\n\nsecure属性用来指定Cookie只能在加密协议HTTPS下发送到服务器。\n该属性只是一个开关，不需要指定值。如果通信是HTTPS协议，该开关自动打开。\n\nmax-age\nmax-age属性用来指定Cookie有效期，比如60 * 60 * 24 * 365（即一年31536e3秒）\n\nHttpOnly\nHttpOnly属性用于设置该Cookie不能被JavaScript读取，详见下文的说明。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("以上属性可以同时设置一个或多个，也没有次序的要求。"),n("br"),s._v("\n如果服务器想改变一个早先设置的Cookie，必须同时满足四个条件："),n("br"),s._v("\nCookie的"),n("code",[s._v("key")]),s._v("、"),n("code",[s._v("domain")]),s._v("、"),n("code",[s._v("path")]),s._v("和"),n("code",[s._v("secure")]),s._v("都匹配。"),n("br"),s._v("\n也就是说原始的Cookie是用如下的"),n("code",[s._v("Set-Cookie")]),s._v("设置的。")])]),n("div",{staticClass:"language-http line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-http"}},[n("code",[n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Set-Cookie:")]),s._v(" key1=value1; domain=example.com; path=/blog\n改变上面这个cookie的值，就必须使用同样的Set-Cookie\n\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Set-Cookie:")]),s._v(" key1=value2; domain=example.com; path=/blog\n只要有一个属性不同，就会生成一个全新的Cookie，而不是替换掉原来那个Cookie\n\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Set-Cookie:")]),s._v(" key1=value2; domain=example.com; path=/\n\n上面的命令设置了一个全新的同名Cookie，但是path属性不一样。\n下一次访问example.com/blog的时候，浏览器将向服务器发送两个同名的Cookie\n\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Cookie:")]),s._v(" key1=value1; key1=value2\n上面代码的两个Cookie是同名的，匹配越精确的Cookie排在越前面。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("blockquote",[n("ul",[n("li",[s._v("浏览器设置这些属性的写法如下")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username=demo; '")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expires='")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" someDate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toGMTString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'; '")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path=/subdirectory; '")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'domain=*.example.com'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n另外，这些属性只能用来设置Cookie。一旦设置完成，就没有办法读取这些属性的值。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("blockquote",[n("ul",[n("li",[s._v("删除一个Cookie的简便方法，就是设置"),n("code",[s._v("expires")]),s._v("属性等于0，或者等于一个过去的日期")])])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username=;expires=Thu, 01-Jan-1970 00:00:01 GMT'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n上面代码中，名为"),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("username")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("的Cookie的值为空，过期时间设为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),s._v("年"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("月零点，就等同于删除了这个Cookie\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"cookie的限制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cookie的限制"}},[s._v("#")]),s._v(" Cookie的限制")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("浏览器对Cookie数量的限制，规定不一样。\n目前，Firefox是每个域名最多设置"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("个Cookie，而Safari和Chrome没有域名数量的限制。\n\n所有Cookie的累加长度限制为"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("KB。超过这个长度的Cookie，将被忽略，不会被设置。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"同源政策"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#同源政策"}},[s._v("#")]),s._v(" 同源政策")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("浏览器的同源政策规定，两个网址只要域名相同和端口相同，就可以共享Cookie\n注意，这里不要求协议相同\n也就是说，http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com设置的Cookie，可以被https"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com读取\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"http-only"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http-only"}},[s._v("#")]),s._v(" Http-Only")]),s._v(" "),n("div",{staticClass:"language-http line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-http"}},[n("code",[s._v("设置Cookie的时候，如果服务器加上了`HttpOnly`属性，则这个Cookie无法被JavaScript读取\n(即document.cookie不会返回这个Cookie的值)，只用于向服务器发送\n\n"),n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("Set-Cookie:")]),s._v(" key=value; HttpOnly\n\n上面的这个Cookie将无法用JavaScript获取\n进行AJAX异步操作时，XMLHttpRequest对象也无法包括这个Cookie\n这主要是为了防止XSS攻击盗取Cookie\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"实例操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例操作"}},[s._v("#")]),s._v(" 实例操作")]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("cookie.html")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<title>cookie example</title>\n\t</head>\n\t<body>\n\t\t<script type=\"text/javascript\" src=\"cookie.js\" ><\/script>\n\t\t<script type=\"text/javascript\">\n\t\t\tconsole.log('----------cookie对象-------------');\n\t\t\tconsole.log(cookie);\n\t\t\t\n\t\t\tconsole.log('----------对象-------------');\n\t\t\tconsole.log(cookie.getCookies());\n\t\t\t\n\t\t\tconsole.log('----------设置cookie-------------');\n\t\t\tconsole.log(cookie.set('name', 'wlh'));\n\t\t\t\n\t\t\tconsole.log('----------设置cookie 123-------------');\n\t\t\tconsole.log(cookie.set('name', 'wlh123'));\n\t\t\t\n\t\t\tconsole.log('----------设置cookie age-------------');\n\t\t\tconsole.log(cookie.set('age', 20));\n\t\t\t\n\t\t\tconsole.log('----------获取cookie-------------');\n\t\t\tconsole.log(cookie.get('name'));\n\t\t\t\n\t\t\tconsole.log('----------获取所有-------------');\n\t\t\tconsole.log(cookie.getCookies());\n\t\t\t\n\t\t\tconsole.log('----------清除age-------------');\n\t\t\tconsole.log(cookie.remove('age'));\n\t\t\t\n\t\t\tconsole.log('----------获取所有-------------');\n\t\t\tconsole.log(cookie.getCookies());\n\t\t\t\n\t\t\tconsole.log('----------清除所有-------------');\n\t\t\tconsole.log(cookie.clear());\n\t\t\t\n\t\t\tconsole.log('----------获取所有-------------');\n\t\t\tconsole.log(cookie.getCookies());\n\t\t\t\n\t\t\tconsole.log('----------解决冲突-------------');\n\t\t\tvar $Cookie = cookie.noConflict(true /*a new name of cookie*/);\n\t\t\tconsole.log($Cookie);\n\t\t\tconsole.log('----------使用新的命名-------------');\n\t\t\tconsole.log($Cookie.getCookies());\n\t\t\t\n\t\t<\/script>\n\t</body>\n</html>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("blockquote",[n("ul",[n("li",[s._v("cookie.js")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/*\n * HTTP Cookie:存储会话信息\n * 名称和值传送时必须是经过RUL编码的\n * cookie绑定在指定的域名下，非本域无法共享cookie，但是可以是在主站共享cookie给子站\n * cookie有一些限制：比如IE6 & IE6- 限定在20个；IE7 50个；Opear 30个...所以一般会根据【必须】需求才设定cookie\n * cookie的名称不分大小写；同时建议将cookie URL编码；路径是区分cookie在不同情况下传递的好方式；带安全标志cookie\n *     在SSL情况下发送到服务器端，http则不会。建议针对cookie设置expires、domain、 path；每个cookie小于4KB\n * */\n//对cookie的封装，采取getter、setter方式\n(function(global){\n\t//获取cookie对象，以对象表示\n\tfunction getCookiesObj(){\n\t\tvar cookies = {};\n\t\tif(document.cookie){\n\t\t\tvar objs = document.cookie.split('; ');\n\t\t\tfor(var i in objs){\n\t\t\t\tvar index = objs[i].indexOf('='),\n\t\t\t\t\tname = objs[i].substr(0, index),\n\t\t\t\t\tvalue = objs[i].substr(index + 1, objs[i].length);\t\n\t\t\t\tcookies[name] = value;\n\t\t\t}\n\t\t}\n\t\treturn cookies;\n\t}\n\t//设置cookie\n\tfunction set(name, value, opts){\n\t\t//opts maxAge, path, domain, secure\n\t\tif(name && value){\n\t\t\tvar cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);\n\t\t\t//可选参数\n\t\t\tif(opts){\n\t\t\t\tif(opts.maxAge){\n\t\t\t\t\tcookie += '; max-age=' + opts.maxAge; \n\t\t\t\t}\n\t\t\t\tif(opts.path){\n\t\t\t\t\tcookie += '; path=' + opts.path;\n\t\t\t\t}\n\t\t\t\tif(opts.domain){\n\t\t\t\t\tcookie += '; domain=' + opts.domain;\n\t\t\t\t}\n\t\t\t\tif(opts.secure){\n\t\t\t\t\tcookie += '; secure';\n\t\t\t\t}\n\t\t\t}\n\t\t\tdocument.cookie = cookie;\n\t\t\treturn cookie;\n\t\t}else{\n\t\t\treturn '';\n\t\t}\n\t}\n\t//获取cookie\n\tfunction get(name){\n\t\treturn decodeURIComponent(getCookiesObj()[name]) || null;\n\t}\n\t\n\t//清除某个cookie\n\tfunction remove(name){\n\t\tif(getCookiesObj()[name]){\n\t\t\tdocument.cookie = name + '=; max-age=0';\n\t\t}\n\t}\n\t\n\t//清除所有cookie\n\tfunction clear(){\n\t\tvar cookies = getCookiesObj();\n\t\tfor(var key in cookies){\n\t\t\tdocument.cookie = key + '=; max-age=0';\n\t\t}\n\t}\n\t//获取所有cookies\n\tfunction getCookies(name){\n\t\treturn getCookiesObj();\n\t}\n\t//解决冲突\n\tfunction noConflict(name){\n\t\tif(name && typeof name === 'string'){\n\t\t\tif(name && window['cookie']){\n\t\t\t\twindow[name] = window['cookie'];\n\t\t\t\tdelete window['cookie'];\n\t\t\t\treturn window[name];\n\t\t\t}\n\t\t}else{\n\t\t\treturn window['cookie'];\n\t\t\tdelete window['cookie'];\n\t\t}\n\t}\n\tglobal['cookie'] = {\n\t\t'getCookies': getCookies,\n\t\t'set': set,\n\t\t'get': get,\n\t\t'remove': remove,\n\t\t'clear': clear,\n\t\t'noConflict': noConflict\n\t};\n})(window);\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);