import{_ as n,o as s,c as a,a as e}from"./app-f46aa08f.js";const p={},t=e(`<h3 id="变量数据类型" tabindex="-1"><a class="header-anchor" href="#变量数据类型" aria-hidden="true">#</a> 变量数据类型</h3><h3 id="php标记" tabindex="-1"><a class="header-anchor" href="#php标记" aria-hidden="true">#</a> php标记</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="php注释" tabindex="-1"><a class="header-anchor" href="#php注释" aria-hidden="true">#</a> php注释</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>多行注释
<span class="token comment">/*
  This script is hello world
  Author: david
  Date: 2010.04.01
*/</span>
 
单行注释
<span class="token comment">//print hello</span>
 
文档、函数、语法提示型注释
<span class="token doc-comment comment">/**
* <span class="token keyword">@name</span> 名字
* <span class="token keyword">@abstract</span> 申明变量/类/方法
* <span class="token keyword">@access</span> 指明这个变量、类、函数/方法的存取权限
* <span class="token keyword">@author</span> 函数作者的名字和邮箱地址
* <span class="token keyword">@category</span>  组织packages
* <span class="token keyword">@copyright</span> 指明版权信息
* <span class="token keyword">@const</span> 指明常量
* <span class="token keyword">@deprecate</span> 指明不推荐或者是废弃的信息MyEclipse编码设置
* <span class="token keyword">@example</span> 示例
* <span class="token keyword">@exclude</span> 指明当前的注释将不进行分析，不出现在文挡中
* <span class="token keyword">@final</span> 指明这是一个最终的类、方法、属性，禁止派生、修改。
* <span class="token keyword">@global</span> 指明在此函数中引用的全局变量
* <span class="token keyword">@include</span> 指明包含的文件的信息
* <span class="token keyword">@link</span> 定义在线连接
* <span class="token keyword">@module</span> 定义归属的模块信息
* <span class="token keyword">@modulegroup</span> 定义归属的模块组
* <span class="token keyword">@package</span> 定义归属的包的信息
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> 定义函数或者方法的参数信息
* <span class="token keyword">@return</span> 定义函数或者方法的返回信息
* <span class="token keyword">@see</span> 定义需要参考的函数、变量，并加入相应的超级连接。
* <span class="token keyword">@since</span> 指明该api函数或者方法是从哪个版本开始引入的
* <span class="token keyword">@static</span> 指明变量、类、函数是静态的。
* <span class="token keyword">@throws</span> 指明此函数可能抛出的错误异常,极其发生的情况
* <span class="token keyword">@todo</span> 指明应该改进或没有实现的地方
* <span class="token keyword">@var</span> 定义说明变量/属性。
* <span class="token keyword">@version</span> 定义版本信息
*/</span>
<span class="token keyword">function</span> <span class="token function-definition function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的命名规则" tabindex="-1"><a class="header-anchor" href="#变量的命名规则" aria-hidden="true">#</a> 变量的命名规则</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>变量以美元符 $ 开头，然后是变量名<span class="token punctuation">;</span>
 
变量名由字母或下划线开头，由字母，下划线，数字组成<span class="token punctuation">;</span>
 
变量名区分大小写<span class="token punctuation">;</span>
 
变量名里面不能够有标点符号，空格，除了下划线以外
 
php是弱类型的语言，不需要事先声明变量的数据类型<span class="token punctuation">;</span>
 
php可以不用显示的声明变量就直接使用，不过好的编码习惯：所有的变量在使用前应该进行声明<span class="token punctuation">;</span>

可以使用驼峰命名法、匈牙利命名法、帕斯卡命名法、来给变量进行命名。
 
<span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
<span class="token variable">$color</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;red&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$sum</span> <span class="token operator">=</span> <span class="token number">12</span> <span class="token operator">+</span> <span class="token string double-quoted-string">&quot;15&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// $sum = 27</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量赋值" tabindex="-1"><a class="header-anchor" href="#变量赋值" aria-hidden="true">#</a> 变量赋值</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>值赋值：就是将赋值表达式的值复制到变量<span class="token punctuation">;</span>
 
引用赋值：php4引入了引用赋值功能，创建的变量与另一个变量引用的内容相同。
 
<span class="token variable">$val_1</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$val_2</span> <span class="token operator">=</span> <span class="token operator">&amp;</span><span class="token variable">$val_1</span><span class="token punctuation">;</span>  <span class="token comment">//把$val_1的内存空间地址赋值给$val_2</span>
<span class="token variable">$val_2</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;goodbye&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$var_1</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;goodbye&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量的变量" tabindex="-1"><a class="header-anchor" href="#变量的变量" aria-hidden="true">#</a> 变量的变量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$val_1</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$$val_1</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;world&#39;</span><span class="token punctuation">;</span> 
<span class="token keyword">echo</span> <span class="token variable">$hello</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$val_1</span><span class="token punctuation">;</span> 
<span class="token keyword">echo</span> <span class="token variable">$</span><span class="token punctuation">{</span><span class="token variable">$val_1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php的超全局变量" tabindex="-1"><a class="header-anchor" href="#php的超全局变量" aria-hidden="true">#</a> PHP的超全局变量</h3><blockquote><p>php提供了很多有用的预定义变量，用于提供大量与环境有关的信息</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$_SERVER</span> 服务器变量
 
  该全局变量包含着服务器和客户端配置及当前请求环境的有关信息
 
  <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;SERVER_NAME&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">:</span> 当前运行脚本所在的服务器的主机名
 
  <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;REMOTE_ADDR&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> 客户端<span class="token constant">IP</span>地址
 
  <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;REQUEST_URI&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token constant">URL</span>的路径部份
 
  <span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;HTTP_USER_AGENT&#39;</span><span class="token punctuation">]</span>  <span class="token punctuation">:</span>  操作系统和浏览器的有关信息

<span class="token variable">$_GET</span>   该变量包含使用 <span class="token constant">GET</span> 方法传递的参数的有关信息<span class="token punctuation">;</span>
 
  url<span class="token punctuation">:</span> http<span class="token punctuation">:</span><span class="token comment">//localhost/test.php?id=100&amp;page=2</span>
 
  <span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
  <span class="token variable">$page</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;page&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$_POST</span>   该变量包含使用 <span class="token constant">POST</span> 方法传递的参数的有关信息<span class="token punctuation">;</span>

html<span class="token punctuation">:</span>
 <span class="token operator">&lt;</span>form name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;reg&quot;</span> action<span class="token operator">=</span><span class="token string double-quoted-string">&quot;test.php&quot;</span> method<span class="token operator">=</span><span class="token string double-quoted-string">&quot;post&quot;</span><span class="token operator">&gt;</span>
  用户名：<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;text&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;username&quot;</span><span class="token operator">&gt;</span>
  密码<span class="token punctuation">:</span> <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;password&quot;</span> name<span class="token operator">=</span><span class="token string double-quoted-string">&quot;password&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string double-quoted-string">&quot;submit&quot;</span> value<span class="token operator">=</span><span class="token string double-quoted-string">&quot;提交&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>

php<span class="token punctuation">:</span> 
<span class="token variable">$username</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$password</span> <span class="token operator">=</span> <span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$_REQUEST</span>  该变量记录着通过各种输入方法传递给脚本的变量<span class="token punctuation">,</span>如<span class="token constant">GET</span><span class="token punctuation">,</span><span class="token function">POST</span> <span class="token punctuation">(</span>不安全<span class="token punctuation">)</span>
<span class="token variable">$_COOKIE</span>    cookie变量数组
<span class="token variable">$_SESSION</span>   会话变量数组
<span class="token variable">$_FILES</span>     与上传文件有关的变量数组
<span class="token variable">$_ENV</span>       环境变量数组
<span class="token variable">$GLOBALS</span>    所有全局变量数组
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量的定义" tabindex="-1"><a class="header-anchor" href="#常量的定义" aria-hidden="true">#</a> 常量的定义</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>常量是指在程序执行中无法修改的值。如 <span class="token function">PI</span> <span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
在脚本执行期间该值不能改变<span class="token punctuation">;</span>
常量对大小写敏感，通常常量名总是大写<span class="token punctuation">;</span>
常量是全局的，可以在脚本的任何地方引用<span class="token punctuation">;</span>
常量分为内置常量和自定义常量<span class="token punctuation">;</span>
常量使用<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">)</span>函数定义<span class="token punctuation">;</span>
 
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;PI&#39;</span><span class="token punctuation">,</span> <span class="token number">3.1415926</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token constant">PI</span><span class="token punctuation">;</span>

<span class="token comment">// 定义常量数组</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;fruits&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;Apple&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Orange&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;Banana&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置常量" tabindex="-1"><a class="header-anchor" href="#内置常量" aria-hidden="true">#</a> 内置常量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">PHP_OS</span>           <span class="token constant">PHP</span>所在的操作系统的名字
<span class="token constant">PHP_VERSION</span>      当前 <span class="token constant">PHP</span> 的版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="魔术常量" tabindex="-1"><a class="header-anchor" href="#魔术常量" aria-hidden="true">#</a> 魔术常量</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">__LINE__</span>  文件中的当前行号<span class="token punctuation">;</span>
<span class="token constant">__FILE__</span>  文件的完整路径和文件名<span class="token punctuation">;</span>
<span class="token constant">__FUNCTION__</span>  函数名称<span class="token punctuation">;</span>
<span class="token constant">__CLASS__</span> 类的名称<span class="token punctuation">;</span>
<span class="token constant">__METHOD__</span>  类的方法名<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>标量数据类型：字符串 数值 布尔类型    
复合数据类型：数组  对象    
特殊数据类型：资源  <span class="token constant">null</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串 (string)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>字符串有三种定义方式：单引号，双引号，定界符<span class="token punctuation">(</span>heredoc<span class="token punctuation">)</span><span class="token punctuation">;</span>
单引号字符串中出现的变量不会被变量的值替代<span class="token punctuation">;</span>
双引号字符串中最重要的一点是其中的变量会被变量值替代<span class="token punctuation">;</span>
 
如果遇到美元符号<span class="token punctuation">(</span>$<span class="token punctuation">)</span>解析器会尽可能多地取得后面的字符以组成一个合法的变量名<span class="token operator">.</span>
如果想明确的指定名字的结束，用花括号把变量名括起来。
 
<span class="token variable">$beer</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Heineken&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;He drank some <span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$beer</span><span class="token punctuation">}</span></span>s&quot;</span><span class="token punctuation">;</span>
 
字符串定界的方法使用定界符语法 <span class="token string double-quoted-string">&quot;&lt;&lt;&lt;&quot;</span>
 
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string heredoc-string"><span class="token delimiter symbol"><span class="token punctuation">&lt;&lt;&lt;</span>EOD</span>
Example of string
using heredoc syntax.
<span class="token delimiter symbol">EOD<span class="token punctuation">;</span></span></span>
 
<span class="token keyword">echo</span> <span class="token variable">$str</span><span class="token punctuation">;</span>
 
在<span class="token constant">PHP</span>定界符中的任何特殊字符都不需要转义，<span class="token constant">PHP</span>定界符中的<span class="token constant">PHP</span>变量会被正常的用其值来替换
使用定界符要注意：
结束标识符所在的行不能包含任何其它字符，这意味着该标识符不能被缩进，
在分号之前之后都不能有任何空格或制表符<span class="token punctuation">;</span>
 
转义字符
\\n    换行
 
\\r    回车 <span class="token punctuation">(</span> <span class="token constant">WINDOW</span> \\r\\n <span class="token punctuation">)</span> <span class="token punctuation">(</span>linux \\n<span class="token punctuation">)</span> （Mac <span class="token constant">OS</span> \\r）
 
\\t    水平制表符 <span class="token punctuation">(</span>按键盘 tab 产生的效果<span class="token punctuation">)</span>
 
\\\\    反斜线
 
\\$    美元符<span class="token punctuation">(</span>表示变量的开始<span class="token punctuation">)</span>
 
\\&quot;    双引号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="整型-integer" tabindex="-1"><a class="header-anchor" href="#整型-integer" aria-hidden="true">#</a> 整型(integer)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="浮点型-float-double" tabindex="-1"><a class="header-anchor" href="#浮点型-float-double" aria-hidden="true">#</a> 浮点型(float, double)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">5.39</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="布尔型-bool" tabindex="-1"><a class="header-anchor" href="#布尔型-bool" aria-hidden="true">#</a> 布尔型（bool）</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$bo</span> <span class="token operator">=</span> <span class="token constant boolean">TRUE</span><span class="token punctuation">;</span>
<span class="token variable">$bo</span> <span class="token operator">=</span> <span class="token constant boolean">FALSE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//索引数组</span>
<span class="token variable">$week</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;星期一&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;星期二&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;星期三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$week</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;星期一&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;星期二&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;星期三&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//关联数组</span>
<span class="token variable">$week</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;one&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;星期一&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;two&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;星期二&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;three&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;星期三&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$db</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">db</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="资源" tabindex="-1"><a class="header-anchor" href="#资源" aria-hidden="true">#</a> 资源</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$fh</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;test.txt&quot;</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;r&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="null" tabindex="-1"><a class="header-anchor" href="#null" aria-hidden="true">#</a> null</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">null</span> 无，表示没有值，<span class="token constant">null</span>不表示空格，也不表示<span class="token number">0</span><span class="token punctuation">;</span>
以下情况，则认为是<span class="token constant">null</span><span class="token punctuation">:</span>   
<span class="token number">1</span>、没有设置为任何预定义的变量<span class="token punctuation">;</span>
<span class="token number">2</span>、明确的赋值为<span class="token constant">null</span><span class="token punctuation">;</span>
<span class="token number">3</span>、使用函数<span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>清除<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型自动转换" tabindex="-1"><a class="header-anchor" href="#类型自动转换" aria-hidden="true">#</a> 类型自动转换</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>因为php对于类型定义非常的松散，所以有时会根据引用变量的环境，将变量自动转换为最适合的类型<span class="token punctuation">;</span>
<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;15&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$num</span> <span class="token operator">+</span> <span class="token variable">$str</span><span class="token punctuation">;</span> 
 
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;100 hello&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$num</span> <span class="token operator">+</span> <span class="token variable">$str</span><span class="token punctuation">;</span>
 
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;1.2&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//if 判断为 true</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>  
 <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>第一种转换方式： <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token keyword type-casting">float</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token keyword type-casting">object</span><span class="token punctuation">)</span>
<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span><span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">float</span><span class="token punctuation">)</span><span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">string</span><span class="token punctuation">)</span><span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">bool</span><span class="token punctuation">)</span><span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span><span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword type-casting">object</span><span class="token punctuation">)</span><span class="token variable">$num</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


第二种转换方式：  <span class="token function">intval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token function">floatval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token function">strval</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token variable">$str</span><span class="token operator">=</span><span class="token string double-quoted-string">&quot;123.9abc&quot;</span><span class="token punctuation">;</span>   
<span class="token variable">$int</span><span class="token operator">=</span><span class="token function">intval</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//转换后数值：123   </span>
<span class="token variable">$float</span><span class="token operator">=</span><span class="token function">floatval</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//转换后数值：123.9   </span>
<span class="token variable">$str</span><span class="token operator">=</span><span class="token function">strval</span><span class="token punctuation">(</span><span class="token variable">$float</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//转换后字符串：&quot;123.9&quot;    </span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$float</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


第三种转换方式：  <span class="token function">settype</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$num</span><span class="token operator">=</span><span class="token number">12.8</span><span class="token punctuation">;</span>   
<span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;int&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;float&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;string&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;bool&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;array&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
<span class="token function">settype</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">,</span><span class="token string double-quoted-string">&quot;object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与类型相关的函数" tabindex="-1"><a class="header-anchor" href="#与类型相关的函数" aria-hidden="true">#</a> 与类型相关的函数</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1.</span><span class="token function">gettype</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 返回变量的类型
 
共有<span class="token number">8</span>个可能的值 <span class="token keyword type-declaration">string</span>、integer、<span class="token keyword type-declaration">float</span>、boolean、<span class="token keyword type-declaration">array</span>、<span class="token keyword type-declaration">object</span>、<span class="token constant">null</span>、<span class="token class-name type-declaration">unknow</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;hello&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">gettype</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token number">2.</span><span class="token function">is_type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 查看变量是否属于某个类型<span class="token punctuation">,</span>是返回 <span class="token constant boolean">TRUE</span> <span class="token punctuation">,</span>否返回 <span class="token constant boolean">FALSE</span><span class="token punctuation">;</span>
 
<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">is_array</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token variable">$num</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">is_int</span><span class="token punctuation">(</span><span class="token variable">$num</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token number">3.</span><span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  函数用来得到变量的类型和值的详细信息
 
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),i=[t];function l(o,c){return s(),a("div",null,i)}const r=n(p,[["render",l],["__file","01.html.vue"]]);export{r as default};
