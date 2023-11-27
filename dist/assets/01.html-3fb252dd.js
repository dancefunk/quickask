import{_ as n,o as s,c as a,a as e}from"./app-a528498f.js";const p="/dist/assets/images/html5/javascript/1.png",t={},o=e(`<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Javascipt是一种动态、弱类型、基于原型的脚本语言，由web浏览器进行解释和执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="javascript由哪三个部分组成" tabindex="-1"><a class="header-anchor" href="#javascript由哪三个部分组成" aria-hidden="true">#</a> Javascript由哪三个部分组成</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">ECMAScript</span> <span class="token operator">:</span> <span class="token function">核心</span>  <span class="token punctuation">(</span>描述了javascript组成语言的语法和基本对象<span class="token punctuation">)</span>          
<span class="token constant">DOM</span> <span class="token operator">:</span> <span class="token function">文档对象模型</span>  <span class="token punctuation">(</span>描述处理网页内容的方法和接口<span class="token punctuation">)</span>            
<span class="token constant">BOM</span> <span class="token operator">:</span> <span class="token function">浏览器对象模型</span> <span class="token punctuation">(</span>描述与浏览器进行交互的方法和接口<span class="token punctuation">)</span>      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript应用到网页的几种方式" tabindex="-1"><a class="header-anchor" href="#javascript应用到网页的几种方式" aria-hidden="true">#</a> Javascript应用到网页的几种方式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>方法一：将javascript代码插入html文档<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>部分的标签中<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
例：<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
      <span class="token comment">//javascript 代码</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>

方法二：将javascript代码存放在一个独立的文件
例：test<span class="token punctuation">.</span>js
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;hello wordld&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
test<span class="token punctuation">.</span>html
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span> src<span class="token operator">=</span><span class="token string">&quot;test.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js定义变量" tabindex="-1"><a class="header-anchor" href="#js定义变量" aria-hidden="true">#</a> JS定义变量</h3><blockquote><p>变量由 var 运算符加变量名定义</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>     
  <span class="token keyword">var</span> mood <span class="token operator">=</span> <span class="token string">&#39;happy&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js注释" tabindex="-1"><a class="header-anchor" href="#js注释" aria-hidden="true">#</a> JS注释</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//          单行注释     </span>
<span class="token comment">/* …*/</span>      多行注释      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js拼接" tabindex="-1"><a class="header-anchor" href="#js拼接" aria-hidden="true">#</a> JS拼接</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>当<span class="token operator">+</span>存在于变量与字符串中间位置的时候就代表是拼接或者连接的作用    
<span class="token operator">+=</span> 代表什么意思 <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>  a <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">;</span> a <span class="token operator">=</span> a<span class="token operator">+</span><span class="token number">3</span><span class="token punctuation">;</span>  给当前这个变量增加多少     
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js变量的命名有哪些规则" tabindex="-1"><a class="header-anchor" href="#js变量的命名有哪些规则" aria-hidden="true">#</a> JS变量的命名有哪些规则</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">第一个字符必须是字母、下划线</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token function">、或美元符号</span> <span class="token punctuation">(</span>$<span class="token punctuation">)</span><span class="token punctuation">;</span>       
变量名中不能包含空格或标点符号（$ 除外<span class="token punctuation">)</span><span class="token punctuation">;</span>       
变量名区分大小写<span class="token punctuation">;</span>       
不能使用保留字、关键字       
为了让变量名有更好的可读性，可以在变量名中适当的插入下划线分隔，       
如：<span class="token keyword">var</span> my_mood <span class="token operator">=</span> ‘happy’<span class="token punctuation">;</span>       
<span class="token function">使用驼峰命名法</span><span class="token punctuation">(</span>大驼峰<span class="token punctuation">,</span>小驼峰<span class="token punctuation">)</span>或者匈牙利命名法

小驼峰式命名法（lower camel <span class="token keyword">case</span>）：
第一个单字以小写字母开始；第二个单字的首字母大写，例如：firstName、lastName。

大驼峰式命名法（upper camel <span class="token keyword">case</span>）：
每一个单字的首字母都采用大写字母，例如：FirstName、LastName、CamelCase。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js关键字保留字汇总" tabindex="-1"><a class="header-anchor" href="#js关键字保留字汇总" aria-hidden="true">#</a> JS关键字保留字汇总</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>关键字大全：
    <span class="token keyword">break</span>    <span class="token keyword">do</span>  <span class="token keyword">instanceof</span>  <span class="token class-name">typeof</span>
    <span class="token keyword">case</span>     <span class="token keyword">else</span>    <span class="token keyword">new</span>     <span class="token class-name">var</span>
    <span class="token keyword">catch</span>    finally     <span class="token keyword">return</span>  <span class="token keyword">void</span>
    <span class="token keyword">continue</span>     <span class="token keyword">for</span>     <span class="token keyword">switch</span>  <span class="token keyword">while</span>
    <span class="token keyword">debugger</span>    <span class="token keyword">function</span>    <span class="token keyword">this</span>    <span class="token keyword">with</span>
    <span class="token keyword">default</span>  <span class="token keyword">if</span>  <span class="token keyword">throw</span>   <span class="token keyword">delete</span>
    <span class="token keyword">in</span>   <span class="token keyword">try</span>
     
保留字大全：
    abstract     <span class="token keyword">enum</span>    int     short
    boolean  <span class="token keyword">export</span>  <span class="token keyword">interface</span>   <span class="token class-name">static</span>
    byte     <span class="token keyword">extends</span>     <span class="token class-name">long</span>    <span class="token keyword">super</span>
    char     final   native  synchronized
    <span class="token keyword">class</span>    <span class="token class-name">float</span>   <span class="token keyword">package</span>     throws
    <span class="token keyword">const</span>    goto    <span class="token keyword">private</span>     transient
    <span class="token keyword">debugger</span>     <span class="token keyword">implements</span>  <span class="token class-name">protected</span>   volatile
    double   <span class="token keyword">import</span>  <span class="token keyword">public</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js常见的数据类型有哪些" tabindex="-1"><a class="header-anchor" href="#js常见的数据类型有哪些" aria-hidden="true">#</a> JS常见的数据类型有哪些</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>字符串 
<span class="token number">2.</span>数值  
<span class="token number">3.</span><span class="token function">布尔类型</span> <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>  
<span class="token number">4</span><span class="token punctuation">.</span>array
<span class="token number">5</span><span class="token punctuation">.</span>object 
<span class="token number">6</span><span class="token punctuation">.</span>undefined  
<span class="token number">7.</span><span class="token constant">NULL</span>
 
<span class="token number">1.</span><span class="token function">字符串</span><span class="token punctuation">(</span>String<span class="token punctuation">)</span>
  字符串由零个或多个字符构成，字符包括字母，数字，标点符号和空格<span class="token punctuation">;</span>
  字符串必须放在引号里（单引号或双引号）<span class="token punctuation">;</span>
  <span class="token keyword">var</span> mood <span class="token operator">=</span> “happy”<span class="token punctuation">;</span>
  <span class="token keyword">var</span> mood <span class="token operator">=</span> ‘happy’<span class="token punctuation">;</span>
 
<span class="token number">2.</span><span class="token function">数值</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
  <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> price <span class="token operator">=</span> <span class="token number">33.25</span><span class="token punctuation">;</span> 
 
<span class="token number">3.</span><span class="token function">布尔类型</span> <span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>
  布尔型数据只能有两种种值 <span class="token boolean">true</span> 和 <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> married <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> married <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  与字符串不同，不要把布尔值用引号括起来。布尔值 <span class="token boolean">false</span> 与 字符串 <span class="token string">&quot;false&quot;</span>是两回事。

<span class="token number">4</span><span class="token punctuation">.</span>Array 数组
我们的变量一般都只能存储一个内容 所以它其实是一个单一的容器
我们的数组一般可以存一个或者是多个值 ，所以数组是一个大的容器
 
<span class="token literal-property property">组成部分</span><span class="token operator">:</span>
 <span class="token function">数组其实是由多个</span> <span class="token punctuation">(</span>键<span class="token operator">-</span>值<span class="token punctuation">)</span> 所组成的一个多容器
 数组的索引 默认是从<span class="token number">0</span>开始的

定义数组
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">45</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">435</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">34</span><span class="token punctuation">,</span><span class="token number">546</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> arr3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  arr3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>
  arr3<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>

<span class="token number">5</span><span class="token punctuation">.</span>object
  <span class="token function">对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式</span> <span class="token punctuation">(</span>name <span class="token operator">:</span> value<span class="token punctuation">)</span> 来定义。
  属性由逗号分隔<span class="token punctuation">.</span>
  <span class="token keyword">var</span> person<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">firstname</span><span class="token operator">:</span><span class="token string">&quot;Bill&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">lastname</span><span class="token operator">:</span><span class="token string">&quot;Gates&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">5566</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">上面例子中的对象</span> <span class="token punctuation">(</span>person<span class="token punctuation">)</span> 有三个属性：firstname、lastname 以及 id

<span class="token number">6</span><span class="token punctuation">.</span>Undefined 
  在 JavaScript 中<span class="token punctuation">,</span> <span class="token keyword">undefined</span> 是一个没有设置值的变量。
  <span class="token keyword">typeof</span> 一个没有值的变量会返回 <span class="token keyword">undefined</span>。
  <span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>    你可以设置为 <span class="token keyword">undefined</span> <span class="token literal-property property">来清空对象</span><span class="token operator">:</span>


<span class="token number">7.</span><span class="token constant">NULL</span>
  在 JavaScript 中 <span class="token keyword">null</span> 表示 <span class="token string">&quot;什么都没有&quot;</span>。
  <span class="token keyword">null</span>是一个只有一个值的特殊类型。表示一个空对象引用。
  <span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>        你可以设置为 <span class="token keyword">null</span> <span class="token literal-property property">来清空对象</span><span class="token operator">:</span>
  

Undefined 和 Null 的区别
<span class="token keyword">typeof</span> <span class="token keyword">undefined</span>             <span class="token comment">// undefined</span>
<span class="token keyword">typeof</span> <span class="token keyword">null</span>                  <span class="token comment">// object</span>
<span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>           <span class="token comment">// false</span>
<span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span>            <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查看数据类型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换为字符串</span>
<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token boolean">true</span>
demo <span class="token operator">=</span> demo<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span>

<span class="token comment">// 转换为整数</span>
<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span>
demo <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span>

<span class="token comment">// 转换为浮点数</span>
<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token string">&quot;123.123&quot;</span>
demo <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span>

<span class="token comment">// 保留两位小数 返回字符串类型</span>
<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token number">123.123</span>
demo <span class="token operator">=</span> demo<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span>

<span class="token comment">// 转换为布尔值</span>
<span class="token keyword">var</span> demo <span class="token operator">=</span> <span class="token number">123</span>
demo <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> demo<span class="token punctuation">,</span> demo<span class="token punctuation">)</span>

<span class="token comment">// 其他原始类型也是可以用这种方式转换</span>
<span class="token comment">// Number(demo)  转换为数值</span>
<span class="token comment">// String(demo)  转换为字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js堆区和栈区" tabindex="-1"><a class="header-anchor" href="#js堆区和栈区" aria-hidden="true">#</a> JS堆区和栈区</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>栈(stack)会自动分配内存空间，会自动释放
堆(heap)动态分配的内存，大小不定也不会自动释放

1、栈区（stack）
由编译器自动分配释放 ，存放函数的参数值，局部变量的值等，内存的分配是连续的
类似于平时我们所说的栈，如果还不清楚，那么就把它想成数组，它的内存分配是连续分配的
即，所分配的内存是在一块连续的内存区域内．当我们声明变量时
那么编译器会自动接着当前栈区的结尾来分配内存

2、堆区（heap）
一般由程序员分配释放， 若程序员不释放，程序结束时可能由操作系统回收．类似于链表
在内存中的分布不是连续的，它们是不同区域的内存块通过指针链接起来的
一旦某一节点从链中断开，我们要人为的把所断开的节点从内存中释放

3、全局区（静态区）（static）
全局变量和静态变量的存储是放在一块的
初始化的全局变量和静态变量在一块区域， 未初始化的全局变量和未初始化的静态变量在相邻的另一块区域。
程序结束后由系统释放
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>简单数据类型 - 栈区</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newName <span class="token operator">=</span> name<span class="token punctuation">;</span>
 
name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//李四</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>复杂数据类型 - 堆区</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">34</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> newObj <span class="token operator">=</span> obj<span class="token punctuation">;</span> 
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> 

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//{name: &quot;李四&quot;, age: 100}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">//{name: &quot;李四&quot;, age: 100}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt="photo"></p>',28),l=[o];function c(i,r){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","01.html.vue"]]);export{u as default};
