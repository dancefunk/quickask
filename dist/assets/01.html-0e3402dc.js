import{_ as n,o as s,c as a,a as e}from"./app-d0ac87ef.js";const i={},l=e(`<h3 id="ecma阶段" tabindex="-1"><a class="header-anchor" href="#ecma阶段" aria-hidden="true">#</a> ECMA阶段</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token constant">ECMA</span>规范最终由<span class="token constant">TC39</span>敲定。
<span class="token constant">TC39</span>由包括浏览器厂商在内的各方组成，他们开会推动JavaScript提案沿着一条严格的发展道路前进。 
从提案到入选<span class="token constant">ECMA</span>规范主要有以下几个阶段

Stage <span class="token number">0</span><span class="token operator">:</span> strawman——最初想法的提交。
Stage <span class="token number">1</span><span class="token operator">:</span> proposal（提案）——由<span class="token constant">TC39</span>至少一名成员倡导的正式提案文件，该文件包括<span class="token constant">API</span>事例。
Stage <span class="token number">2</span><span class="token operator">:</span> draft（草案）——功能规范的初始版本，该版本包含功能规范的两个实验实现。
Stage <span class="token number">3</span><span class="token operator">:</span> candidate（候选）——提案规范通过审查并从厂商那里收集反馈
Stage <span class="token number">4</span><span class="token operator">:</span> finished（完成）——提案准备加入ECMAScript，但是到浏览器或者Nodejs中可能需要更长的时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es13新特性-2022" tabindex="-1"><a class="header-anchor" href="#es13新特性-2022" aria-hidden="true">#</a> ES13新特性（2022）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>声明类的字段：类字段可以在类的顶层被定义和初始化
私有方法<span class="token operator">&amp;</span>字段：用#前缀来定义类的私有方法和字段
类的静态公共方法和字段：增加了静态公共字段、静态私有方法和静态私有字段的特性
ECMScript 类静态初始化块：在类声明<span class="token operator">/</span>定义期间评估静态初始化代码块，可以访问类的私有字段
检测私有字段：可以使用<span class="token keyword">in</span>操作符，如果指定的属性<span class="token operator">/</span>字段在指定的对象<span class="token operator">/</span>类中，则返回真，并且也能判断私有字段
Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>object<span class="token punctuation">,</span> property<span class="token punctuation">)</span>：使用 Object<span class="token punctuation">.</span>hasOwn 替代 <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hasOwnProperty<span class="token punctuation">.</span>call
Error Cause：为了便捷的传递导致错误的原因
正则匹配索引：该提案提供了一个新的<span class="token operator">/</span>dflag，以获得关于输入字符串中每个匹配的开始和索引位置结束的额外信息
在所有内置的可索引数据上新增<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es12新特性-2021" tabindex="-1"><a class="header-anchor" href="#es12新特性-2021" aria-hidden="true">#</a> ES12新特性（2021）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>replaceAll ：有了这个 <span class="token constant">API</span>，替换字符不用写正则了
Promise<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span> ：返回第一个 fullfilled 的 promise ，若全部 reject，则返回一个带有失败原因的 AggregateError。
新增逻辑赋值操作符： <span class="token operator">??=</span>、<span class="token operator">&amp;&amp;=</span>、 <span class="token operator">||=</span>
WeakRefs：使用弱引用对象，该弱引用不会阻止 <span class="token constant">GC</span>，并且可以在 <span class="token constant">GC</span> 前使用 <span class="token class-name">WeakRef</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">deref</span> <span class="token punctuation">(</span> <span class="token punctuation">)</span> 解除该引用。
<span class="token function">下划线</span> <span class="token punctuation">(</span>_<span class="token punctuation">)</span> 分隔符：使用 _ 分隔数字字面量以方便阅读
Intl<span class="token punctuation">.</span>ListFormat ：用来处理和多语言相关的对象格式化操作
Intl<span class="token punctuation">.</span>DateTimeFormat <span class="token constant">API</span> 中的 dateStyle 和 timeStyle 的配置项：用来处理多语言下的时间日期格式化的函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es11新特性-2020" tabindex="-1"><a class="header-anchor" href="#es11新特性-2020" aria-hidden="true">#</a> ES11新特性（2020）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>动态 <span class="token keyword">import</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>：按需导入
空值合并运算符：表达式在 <span class="token operator">??</span> 的左侧 运算符求值为<span class="token keyword">undefined</span>或<span class="token keyword">null</span>，返回其右侧
可选链接：<span class="token operator">?.</span>用户检测不确定的中间节点
BigInt：新基本数据类型，表示任意精度的整数
globalThis：浏览器：window、worker：self、node：global
<span class="token keyword">for</span><span class="token operator">-</span><span class="token keyword">in</span> 结构：用于规范<span class="token keyword">for</span><span class="token operator">-</span><span class="token keyword">in</span>语句的遍历顺序
Promise<span class="token punctuation">.</span>allSettled：返回一个在所有给定的promise已被决议或被拒绝后决议的promise，
并带有一个对象数组，每个对象表示对应的promise结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es10新特性-2019" tabindex="-1"><a class="header-anchor" href="#es10新特性-2019" aria-hidden="true">#</a> ES10新特性（2019）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>行分隔符（U + 2028）和段分隔符（U + 2029）符号现在允许在字符串文字中，与JSON匹配
更加友好的 JSON.stringify
新增了Array的flat()方法和flatMap()方法
新增了String的trimStart()方法和trimEnd()方法
Object.fromEntries()
Symbol.prototype.description
String.prototype.matchAll
Function.prototype.toString()现在返回精确字符，包括空格和注释
简化try {} catch {},修改 catch 绑定
新的基本数据类型BigInt
globalThis
import()
Legacy RegEx
私有的实例方法和访问器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es9新特性-2018" tabindex="-1"><a class="header-anchor" href="#es9新特性-2018" aria-hidden="true">#</a> ES9新特性（2018）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>异步迭代
Promise.finally()
Rest/Spread 属性
正则表达式命名捕获组（Regular Expression Named Capture Groups）
正则表达式反向断言（lookbehind）
正则表达式dotAll模式
正则表达式 Unicode 转义
非转义序列的模板字符串
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es8新特性-2017" tabindex="-1"><a class="header-anchor" href="#es8新特性-2017" aria-hidden="true">#</a> ES8新特性（2017）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>async/await
Object.values()
Object.entries()
padStart()和padEnd()，填充字符串达到当前长度
函数参数列表结尾允许逗号
Object.getOwnPropertyDescriptors()
ShareArrayBuffer和Atomics对象，用于从共享内存位置读取和写入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es7新特性-2016" tabindex="-1"><a class="header-anchor" href="#es7新特性-2016" aria-hidden="true">#</a> ES7新特性（2016）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>数组includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。
	
a ** b指数运算符，它与 Math.pow(a, b)相同。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6新特性-2015" tabindex="-1"><a class="header-anchor" href="#es6新特性-2015" aria-hidden="true">#</a> ES6新特性（2015）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>ES6的特性比较多，在 ES5 发布近 6 年（2009-11 至 2015-6）之后才将其标准化。
两个发布版本之间时间跨度很大，所以ES6中的特性比较多。 在这里列举几个常用的：

类
模块化
箭头函数
函数参数默认值
模板字符串
解构赋值
延展操作符
对象属性简写
Promise
Let与Const
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),t=[l];function d(c,r){return s(),a("div",null,t)}const p=n(i,[["render",d],["__file","01.html.vue"]]);export{p as default};
