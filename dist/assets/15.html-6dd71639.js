import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const p={},t=e(`<h3 id="标量类型与返回值类型声明" tabindex="-1"><a class="header-anchor" href="#标量类型与返回值类型声明" aria-hidden="true">#</a> 标量类型与返回值类型声明</h3><h4 id="标量类型声明" tabindex="-1"><a class="header-anchor" href="#标量类型声明" aria-hidden="true">#</a> 标量类型声明</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>默认情况下，所有的PHP文件都处于弱类型校验模式。
PHP7 增加了标量类型声明的特性，标量类型声明有两种模式:
强制模式 (默认)
严格模式

标量类型声明语法格式：
declare(strict_types=1); 

strict_types的值（1或者0），1表示严格类型校验模式，作用于函数调用和返回语句；0表示弱类型校验模式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// 严格模式 由于采用了严格模式，所以如果参数中出现不适整数的类型会报错</span>
<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-definition function">sum</span><span class="token punctuation">(</span><span class="token keyword type-declaration">int</span> <span class="token operator">...</span><span class="token variable">$ints</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token function">array_sum</span><span class="token punctuation">(</span><span class="token variable">$ints</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token number">4.1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="返回类型声明" tabindex="-1"><a class="header-anchor" href="#返回类型声明" aria-hidden="true">#</a> 返回类型声明</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 增加了对返回类型声明的支持，返回类型声明指明了函数返回值的类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-definition function">returnIntValue</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
<span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token function">returnIntValue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>返回类型声明错误</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//由于采用了严格模式，返回值必须是 int，但是计算结果是float，所以会报错</span>
<span class="token keyword">declare</span><span class="token punctuation">(</span>strict_types<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-definition function">returnIntValue</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$value</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
<span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token variable">$value</span> <span class="token operator">+</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token function">returnIntValue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="void函数" tabindex="-1"><a class="header-anchor" href="#void函数" aria-hidden="true">#</a> void函数</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>void 函数可以省去 return 语句，或者使用一个空的 return 语句
定义返回类型为 void 的函数不能有返回值，即使返回 null 也不行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">swap</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token variable">$left</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token variable">$right</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$left</span> <span class="token operator">===</span> <span class="token variable">$right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$tmp</span> <span class="token operator">=</span> <span class="token variable">$left</span><span class="token punctuation">;</span>
    <span class="token variable">$left</span> <span class="token operator">=</span> <span class="token variable">$right</span><span class="token punctuation">;</span>
    <span class="token variable">$right</span> <span class="token operator">=</span> <span class="token variable">$tmp</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">$b</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">swap</span><span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$a</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="null合并运算符" tabindex="-1"><a class="header-anchor" href="#null合并运算符" aria-hidden="true">#</a> NULL合并运算符</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 新增加的 NULL 合并运算符（??）是用于执行isset()检测的三元运算的快捷方式。

NULL 合并运算符会判断变量是否存在且值不为NULL，如果是，它就会返回自身的值，否则返回它的第二个操作数。

以前我们这样写三元运算符：

$username = isset($_GET[&#39;username&#39;]) ? $_GET[&#39;username&#39;] : &#39;未知用户名&#39;;

现在我们可以直接这样写：

$username = $_GET[&#39;username&#39;] ?? &#39;未知用户名&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="太空船运算符-组合比较符" tabindex="-1"><a class="header-anchor" href="#太空船运算符-组合比较符" aria-hidden="true">#</a> 太空船运算符（组合比较符）</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 新增加的太空船运算符（组合比较符）用于比较两个表达式 $a 和 $b，
如果 $a 小于、等于或大于 $b时，它分别返回-1、0或1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// 整型比较</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token operator">&lt;=&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token number">1</span> <span class="token operator">&lt;=&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token number">2</span> <span class="token operator">&lt;=&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// PHP_EOL 为换行符</span>

<span class="token comment">// 浮点型比较</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token number">1.5</span> <span class="token operator">&lt;=&gt;</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token number">1.5</span> <span class="token operator">&lt;=&gt;</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token number">2.5</span> <span class="token operator">&lt;=&gt;</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 字符串比较</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token string double-quoted-string">&quot;a&quot;</span> <span class="token operator">&lt;=&gt;</span> <span class="token string double-quoted-string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token string double-quoted-string">&quot;a&quot;</span> <span class="token operator">&lt;=&gt;</span> <span class="token string double-quoted-string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span> <span class="token string double-quoted-string">&quot;b&quot;</span> <span class="token operator">&lt;=&gt;</span> <span class="token string double-quoted-string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量数组" tabindex="-1"><a class="header-anchor" href="#常量数组" aria-hidden="true">#</a> 常量数组</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>在 PHP 5.6 中仅能通过 const 定义常量数组，PHP 7 可以通过 define() 来定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// 使用 define 函数来定义数组</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;fruits&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
   <span class="token string single-quoted-string">&#39;Apple&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;Orange&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;Banana&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="匿名类" tabindex="-1"><a class="header-anchor" href="#匿名类" aria-hidden="true">#</a> 匿名类</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 支持通过 new class 来实例化一个匿名类，这可以用来替代一些&quot;用后即焚&quot;的完整类定义
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">Logger</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">log</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$msg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Application</span> <span class="token punctuation">{</span>
   <span class="token keyword">private</span> <span class="token variable">$logger</span><span class="token punctuation">;</span>

   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Logger</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">logger</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setLogger</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Logger</span> <span class="token variable">$logger</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">logger</span> <span class="token operator">=</span> <span class="token variable">$logger</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>

<span class="token variable">$app</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">;</span>
<span class="token comment">// 使用 new class 创建匿名类</span>
<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">setLogger</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">implements</span> <span class="token class-name">Logger</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">log</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token variable">$msg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$app</span><span class="token operator">-&gt;</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;我的第一条日志&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="closure-call-绑定" tabindex="-1"><a class="header-anchor" href="#closure-call-绑定" aria-hidden="true">#</a> Closure::call()绑定</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 的 Closure::call() 有着更好的性能，将一个闭包函数动态绑定到一个新的对象实例并调用执行该函数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// PHP 7 之前版本定义闭包函数代码</span>
<span class="token variable">$getXCB</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 闭包函数绑定到类 A 上</span>
<span class="token variable">$getX</span> <span class="token operator">=</span> <span class="token variable">$getXCB</span><span class="token operator">-&gt;</span><span class="token function">bindTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token keyword">echo</span> <span class="token variable">$getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// PHP 7+ 代码</span>
<span class="token variable">$getX</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">x</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$getX</span><span class="token operator">-&gt;</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过滤unserialize" tabindex="-1"><a class="header-anchor" href="#过滤unserialize" aria-hidden="true">#</a> 过滤unserialize()</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7增加了可以为 unserialize() 提供过滤的特性，可以防止非法数据进行代码注入，提供了更安全的反序列化数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyClass1</span> <span class="token punctuation">{</span> 
   <span class="token keyword">public</span> <span class="token variable">$obj1prop</span><span class="token punctuation">;</span>   
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyClass2</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token variable">$obj2prop</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token variable">$obj1</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj1</span><span class="token operator">-&gt;</span><span class="token property">obj1prop</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token variable">$obj2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyClass2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj2</span><span class="token operator">-&gt;</span><span class="token property">obj2prop</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token variable">$serializedObj1</span> <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$obj1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$serializedObj2</span> <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$obj2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 默认行为是接收所有类</span>
<span class="token comment">// 第二个参数可以忽略</span>
<span class="token comment">// 如果 allowed_classes 设置为 false, unserialize 会将所有对象转换为 __PHP_Incomplete_Class 对象</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$serializedObj1</span> <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;allowed_classes&quot;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 转换所有对象到 __PHP_Incomplete_Class 对象，只允许 MyClass1 和 MyClass2 转换到 __PHP_Incomplete_Class</span>
<span class="token variable">$data2</span> <span class="token operator">=</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$serializedObj2</span> <span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;allowed_classes&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;MyClass1&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;MyClass2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token operator">-&gt;</span><span class="token property">obj1prop</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token variable">$data2</span><span class="token operator">-&gt;</span><span class="token property">obj2prop</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intlchar字符转换" tabindex="-1"><a class="header-anchor" href="#intlchar字符转换" aria-hidden="true">#</a> IntlChar字符转换</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP 7 通过 intl 扩展来支持国际化 (i18n) 和本地化 (l10n) 。
此扩展仅仅是对 ICU 库的基础包装，并提供了和 ICU 库类似的方法和特性。

PHP 7 通过新的 IntlChar 类暴露出 ICU 中的 Unicode 字符特性。
这个类自身定义了许多静态方法用于操作多字符集的 unicode 字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;%x&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">IntlChar</span><span class="token operator">::</span><span class="token constant">CODEPOINT_MAX</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">IntlChar</span><span class="token operator">::</span><span class="token function">charName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;@&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token class-name static-context">IntlChar</span><span class="token operator">::</span><span class="token function">ispunct</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csprng伪随机数产生器" tabindex="-1"><a class="header-anchor" href="#csprng伪随机数产生器" aria-hidden="true">#</a> CSPRNG伪随机数产生器</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>CSPRNG（Cryptographically Secure Pseudo-Random Number Generator，伪随机数产生器）。

PHP7 通过引入几个 CSPRNG 函数提供一种简单的机制来生成密码学上强壮的随机数。

random_bytes() - 加密生存被保护的伪随机字符串。
random_int() - 加密生存被保护的伪随机整数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="random-bytes" tabindex="-1"><a class="header-anchor" href="#random-bytes" aria-hidden="true">#</a> random_bytes</h4><blockquote><p>返回一个字符串，接受一个int型入参代表返回结果的字节数</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token variable">$bytes</span> <span class="token operator">=</span> <span class="token function">random_bytes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token function">bin2hex</span><span class="token punctuation">(</span><span class="token variable">$bytes</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="random-int" tabindex="-1"><a class="header-anchor" href="#random-int" aria-hidden="true">#</a> random_int</h4><blockquote><p>返回一个指定范围内的int型数字</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token function">random_int</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token constant">PHP_EOL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token function">random_int</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use语句" tabindex="-1"><a class="header-anchor" href="#use语句" aria-hidden="true">#</a> use语句</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 可以使用一个 use 从同一个 namespace 中导入类、函数和常量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// PHP 7 之前版本需要使用多次 use</span>
<span class="token keyword">use</span> <span class="token package">some<span class="token punctuation">\\</span>namespace<span class="token punctuation">\\</span>ClassA</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">some<span class="token punctuation">\\</span>namespace<span class="token punctuation">\\</span>ClassB</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">some<span class="token punctuation">\\</span>namespace<span class="token punctuation">\\</span>ClassC</span> <span class="token keyword">as</span> <span class="token constant">C</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">some<span class="token punctuation">\\</span>namespace<span class="token punctuation">\\</span>fn_a</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">some<span class="token punctuation">\\</span>namespace<span class="token punctuation">\\</span>fn_b</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token keyword">function</span> <span class="token package">some<span class="token punctuation">\\</span>namespace<span class="token punctuation">\\</span>fn_c</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">const</span> some\\<span class="token keyword">namespace</span>\\ConstA<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">const</span> some\\<span class="token keyword">namespace</span>\\ConstB<span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">const</span> some\\<span class="token keyword">namespace</span>\\ConstC<span class="token punctuation">;</span>

<span class="token comment">// PHP 7+ 之后版本可以使用一个 use 导入同一个 namespace 的类</span>
<span class="token keyword">use</span> some\\<span class="token keyword">namespace</span>\\<span class="token punctuation">{</span>ClassA<span class="token punctuation">,</span> ClassB<span class="token punctuation">,</span> ClassC <span class="token keyword">as</span> <span class="token constant">C</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">function</span> some\\<span class="token keyword">namespace</span>\\<span class="token punctuation">{</span>fn_a<span class="token punctuation">,</span> fn_b<span class="token punctuation">,</span> fn_c<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">const</span> some\\<span class="token keyword">namespace</span>\\<span class="token punctuation">{</span>ConstA<span class="token punctuation">,</span> ConstB<span class="token punctuation">,</span> ConstC<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="intdiv函数" tabindex="-1"><a class="header-anchor" href="#intdiv函数" aria-hidden="true">#</a> intdiv函数</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 新增加了 intdiv() 函数，接收两个参数，返回值为第一个参数除于第二个参数的值并取整。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
	<span class="token keyword">echo</span> <span class="token function">intdiv</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token function">intdiv</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>
	<span class="token keyword">echo</span> <span class="token function">intdiv</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token constant">PHP_EOL</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session选项" tabindex="-1"><a class="header-anchor" href="#session选项" aria-hidden="true">#</a> Session选项</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>PHP7 session_start() 函数可以接收一个数组作为参数，可以覆盖 php.ini 中 session 的配置项。

这个特性也引入了一个新的 php.ini 设置（session.lazy_write）, 
默认情况下设置为 true，意味着 session 数据只在发生变化时才写入。

除了常规的会话配置指示项， 还可以在此数组中包含 read_and_close 选项。
如果将此选项的值设置为 TRUE， 那么会话文件会在读取完毕之后马上关闭， 
因此，可以在会话数据没有变动的时候，避免不必要的文件锁。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//把 cache_limiter 设置为私有的，同时在阅读完 session 后立即关闭</span>
<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
   <span class="token string single-quoted-string">&#39;cache_limiter&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;private&#39;</span><span class="token punctuation">,</span>
   <span class="token string single-quoted-string">&#39;read_and_close&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php7废弃特性" tabindex="-1"><a class="header-anchor" href="#php7废弃特性" aria-hidden="true">#</a> PHP7废弃特性</h3><h4 id="php4风格的构造函数-废弃" tabindex="-1"><a class="header-anchor" href="#php4风格的构造函数-废弃" aria-hidden="true">#</a> PHP4风格的构造函数(废弃)</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">A</span> <span class="token punctuation">{</span>
   <span class="token keyword">function</span> <span class="token function-definition function">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Style Constructor&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="以静态的方式调用非静态方法-废弃" tabindex="-1"><a class="header-anchor" href="#以静态的方式调用非静态方法-废弃" aria-hidden="true">#</a> 以静态的方式调用非静态方法(废弃)</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">A</span> <span class="token punctuation">{</span>
   <span class="token keyword">function</span> <span class="token function-definition function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Non-static call&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name static-context">A</span><span class="token operator">::</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="password-hash-随机因子选项-废弃" tabindex="-1"><a class="header-anchor" href="#password-hash-随机因子选项-废弃" aria-hidden="true">#</a> password_hash() 随机因子选项(废弃)</h4><h4 id="capture-session-meta-ssl-上下文选项-废弃" tabindex="-1"><a class="header-anchor" href="#capture-session-meta-ssl-上下文选项-废弃" aria-hidden="true">#</a> capture_session_meta SSL 上下文选项(废弃)</h4><h3 id="php7移除的扩展" tabindex="-1"><a class="header-anchor" href="#php7移除的扩展" aria-hidden="true">#</a> PHP7移除的扩展</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>ereg

mssql

mysql

sybase_ct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php7移除的sapi" tabindex="-1"><a class="header-anchor" href="#php7移除的sapi" aria-hidden="true">#</a> PHP7移除的SAPI</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>aolserver

apache

apache_hooks

apache2filter

caudium

continuity

isapi

milter

nsapi

phttpd

pi3web

roxen

thttpd

tux

webjames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),i=[t];function l(c,o){return s(),a("div",null,i)}const d=n(p,[["render",l],["__file","15.html.vue"]]);export{d as default};
