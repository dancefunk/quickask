import{_ as n,o as s,c as t,a}from"./app-4841f850.js";const e={},l=a(`<h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>定义和用法：
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 设置 <span class="token constant">PHP</span> 的报错级别
 
函数语法：
<span class="token function">error_reporting</span><span class="token punctuation">(</span>report_level<span class="token punctuation">)</span>
 
如果参数 level 未指定，当前报错级别将被返回。下面几项是 level 可能的值：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">常量</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;">E_ERROR</td><td style="text-align:left;">致命的运行错误。错误无法恢复，暂停执行脚本。</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">E_WARNING</td><td style="text-align:left;">运行时警告(非致命性错误)。非致命的运行错误，脚本执行不会停止。</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">E_PARSE</td><td style="text-align:left;">编译时解析错误。解析错误只由分析器产生。</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">E_NOTICE</td><td style="text-align:left;">运行时提醒(这些经常是你代码中的bug引起的，也可能是有意的行为造成的。)</td></tr><tr><td style="text-align:left;">16</td><td style="text-align:left;">E_CORE_ERROR</td><td style="text-align:left;">PHP启动时初始化过程中的致命错误。</td></tr><tr><td style="text-align:left;">32</td><td style="text-align:left;">E_CORE_WARNING</td><td style="text-align:left;">PHP启动时初始化过程中的警告(非致命性错)。</td></tr><tr><td style="text-align:left;">64</td><td style="text-align:left;">E_COMPILE_ERROR</td><td style="text-align:left;">编译时致命性错。这就像由Zend脚本引擎生成了一个E_ERROR</td></tr><tr><td style="text-align:left;">128</td><td style="text-align:left;">E_COMPILE_WARNING</td><td style="text-align:left;">编译时警告(非致命性错)。这就像由Zend脚本引擎生成了一个E_WARNING警告。</td></tr><tr><td style="text-align:left;">256</td><td style="text-align:left;">E_USER_ERROR</td><td style="text-align:left;">用户自定义的错误消息。这就像由使用PHP函数trigger_error（程序员设置E_ERROR）</td></tr><tr><td style="text-align:left;">512</td><td style="text-align:left;">E_USER_WARNING</td><td style="text-align:left;">用户自定义的警告消息。这就像由使用PHP函数trigger_error（程序员设定的一个E_WARNING警告）</td></tr><tr><td style="text-align:left;">1024</td><td style="text-align:left;">E_USER_NOTICE</td><td style="text-align:left;">用户自定义的提醒消息。这就像一个由使用PHP函数trigger_error（程序员一个E_NOTICE集）</td></tr><tr><td style="text-align:left;">2048</td><td style="text-align:left;">E_STRICT</td><td style="text-align:left;">编码标准化警告。允许PHP建议如何修改代码以确保最佳的互操作性向前兼容性。</td></tr><tr><td style="text-align:left;">4096</td><td style="text-align:left;">E_RECOVERABLE_ERROR</td><td style="text-align:left;">开捕致命错误。这就像一个E_ERROR，但可以通过用户定义的处理捕获（又见set_error_handler（））</td></tr><tr><td style="text-align:left;">8191</td><td style="text-align:left;">E_ALL</td><td style="text-align:left;">所有的错误和警告(不包括 E_STRICT) (E_STRICT will be part of E_ALL as of PHP 6.0)</td></tr></tbody></table><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//禁用错误报告</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//报告运行时错误</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token class-name">E_ERROR</span> <span class="token operator">|</span> <span class="token class-name">E_WARNING</span> <span class="token operator">|</span> <span class="token class-name">E_PARSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">//报告所有错误</span>
<span class="token function">error_reporting</span><span class="token punctuation">(</span><span class="token constant">E_ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改php的配置文件php-ini" tabindex="-1"><a class="header-anchor" href="#修改php的配置文件php-ini" aria-hidden="true">#</a> 修改PHP的配置文件php.ini</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>这种方式设置error_reporting后，重启web服务器，就会永久生效。

打开配置文件php<span class="token operator">.</span>ini，查看错误报告级别error_reporting的默认值，如下：

error_reporting<span class="token operator">=</span><span class="token constant">E_ALL</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token constant">E_DEPRECATED</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token constant">E_STRICT</span>
意思是报告所有的错误，但除了<span class="token constant">E_DEPRECATED</span>和<span class="token constant">E_STRICT</span>这两种。

将其修改为：
error_reporting<span class="token operator">=</span><span class="token constant">E_ALL</span> <span class="token operator">&amp;</span> <span class="token operator">~</span><span class="token constant">E_NOTICE</span>

意思是报告所有的错误，但除了<span class="token constant">E_NOTICE</span>这一种。
这也是最常用的错误报告级别，它不会报告注意类（如：使用了未定义的变量）的错误。
保存，重启web服务器后生效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用错误抑制符" tabindex="-1"><a class="header-anchor" href="#使用错误抑制符" aria-hidden="true">#</a> 使用错误抑制符@</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>@<span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$demo</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>异常处理（又称为错误处理）提供了处理程序运行时出现的错误或异常情况的方法
异常处理通常是防止未知错误产生所采取的处理措施

<span class="token constant">PHP</span> 提供了一种新的面向对象的错误处理方法。可以使用检测（<span class="token keyword">try</span>）、抛出（<span class="token keyword">throw</span>）和捕获（<span class="token keyword">catch</span>）异常
一个 <span class="token keyword">try</span> 至少要有一个与之对应的 <span class="token keyword">catch</span>。定义多个 <span class="token keyword">catch</span> 可以捕获不同的对象
php 会按这些 <span class="token keyword">catch</span> 被定义的顺序执行，直到完成最后一个为止
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//try 检测程序</span>
<span class="token keyword">try</span><span class="token punctuation">{</span>
    <span class="token comment">//抛出一个错误</span>
    <span class="token variable">$error</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;始终抛出此错误&#39;</span><span class="token punctuation">;</span>  
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token variable">$error</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 从这里开始的代码将不会被执行  </span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;不会被执行&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$err</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//捕获异常</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$err</span><span class="token operator">-&gt;</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>  
  
<span class="token comment">// 继续执行  </span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[l];function p(d,r){return s(),t("div",null,i)}const o=n(e,[["render",p],["__file","03.html.vue"]]);export{o as default};
