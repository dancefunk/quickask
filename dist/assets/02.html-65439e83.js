import{_ as n,o as s,c as a,a as t}from"./app-a58d3f97.js";const e={},p=t(`<h3 id="几组常见的输入输出函数" tabindex="-1"><a class="header-anchor" href="#几组常见的输入输出函数" aria-hidden="true">#</a> 几组常见的输入输出函数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>printf 与 scanf
getchar 与 putchar
gets 与 puts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="printf输出" tabindex="-1"><a class="header-anchor" href="#printf输出" aria-hidden="true">#</a> printf输出</h3><blockquote><p>功能：按照规定格式输出指定数据</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%[-][0][m][.n][l]格式字符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">格式字符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">-</td><td style="text-align:left;">输出的数字或字符以左对齐，右边填空格</td></tr><tr><td style="text-align:left;">0（数字）</td><td style="text-align:left;">输出的空位用0填充。</td></tr><tr><td style="text-align:left;">m（一个正整数）</td><td style="text-align:left;">输出数据的字段宽度。如果实际位数多于m，按实际位数输出；如果实际位数少于m，则补以空格或0。</td></tr><tr><td style="text-align:left;">.n（一个正整数）</td><td style="text-align:left;">对实数，表示输出n位小数；对字符串，表示截取的字符个数。</td></tr><tr><td style="text-align:left;">l（字母）</td><td style="text-align:left;">输出长整型整数</td></tr></tbody></table><h3 id="常见格式输出" tabindex="-1"><a class="header-anchor" href="#常见格式输出" aria-hidden="true">#</a> 常见格式输出</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%d —— 以带符号的十进制形式输出整数
%o —— 以无符号的八进制形式输出整数
%x —— 以无符号的十六进制形式输出整数
%u —— 以无符号的十进制形式输出整数
%c —— 以字符形式输出单个字符
%s —— 输出字符串
%f —— 以小数点形式输出单、双精度实数
%e —— 以标准指数形式输出单、双精度实数
%g —— 选用输出宽度较小的格式输出实数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c格式符" tabindex="-1"><a class="header-anchor" href="#c格式符" aria-hidden="true">#</a> %c格式符</h4><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> x<span class="token operator">=</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>  <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">98</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c,%d\\n&quot;</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c,%d\\n&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="s格式符" tabindex="-1"><a class="header-anchor" href="#s格式符" aria-hidden="true">#</a> %s格式符</h4><blockquote><p>格式：%[-][m][.n]s</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%s 直接输出指定字符串。

%ms 输出字符串占m列，右对齐。m小于字符串长度时原样输出，大于字符串长度时不足补空格，下同。

%-ms 输出字符串占m列，左对齐。

%m.ns 输出字符串前n个字符，占m列，右对齐。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%3s,%-6s,%-5.2s,%4.3s,%.3s,&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span> 
    <span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="f格式符" tabindex="-1"><a class="header-anchor" href="#f格式符" aria-hidden="true">#</a> %f格式符</h4><blockquote><p>格式： %[-][0][m][.n][l]f</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%f 整数部分全部输出，小数部分输出6位（四舍五入）。

0 右边补0满足小数位数，或左边补0满足m列

%m.nf 输出数据共占m列，小数占n位，右对齐。
	  只有m时，当m大于字符串长度则需补足m列，当m小于字符串长度则与%f同

%-m.nf 输出数据共占m列，小数占n位，左对齐。

%lf 以双精度输出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">float</span> f<span class="token operator">=</span><span class="token number">3.14159</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f,%07.3f,%-7.3f,%10f,%.3f,&quot;</span><span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e格式符" tabindex="-1"><a class="header-anchor" href="#e格式符" aria-hidden="true">#</a> %e格式符</h4><blockquote><p>格式：%[-][0][m][.n]e</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%e：输出数据共占13位，其中整数部分为1位非零数字，小数点占1位，小数部分为6位，
指数部分e占1位，指数符号占1位，指数为3位。若输出数据为负数，还应增加一位整数部分的符号位。

%m.ne 输出占m列，小数位为n项(四舍五入)。m小于输出宽度时原样输出，大于输出宽度时补足空位

– 设置左对齐
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n,%10.1e&quot;</span><span class="token punctuation">,</span><span class="token number">31.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="o、-x和-u格式符" tabindex="-1"><a class="header-anchor" href="#o、-x和-u格式符" aria-hidden="true">#</a> %o、%x和%u格式符</h4><blockquote><p>格式： %[-][0][m][l]o(x或u)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>将内存单元中的二进制数（包括符号位）直接转换成八进制数、十六进制或十进制数输出。

%o 输出无符号八进制
%x 输出无符号十六进制
%u 输出无符号十进制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%d,%o,%x,%u&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>i<span class="token punctuation">,</span>i<span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1111 1111  ,1字节</span>
<span class="token keyword">unsigned</span> <span class="token keyword">char</span> ch1 <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
<span class="token keyword">char</span> ch2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>

<span class="token comment">// %hh 限定了字符为8位一个字节 </span>
<span class="token comment">// %hhd 有符号十进制字符型 %hhu 无符号十进制字符型</span>
<span class="token comment">//128,255,377,ff</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n%hhd,%hhu,%hho,%hhx&quot;</span><span class="token punctuation">,</span>ch2<span class="token punctuation">,</span>ch1<span class="token punctuation">,</span>ch1<span class="token punctuation">,</span>ch1<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// %h 限定了16位2个字节    </span>
<span class="token comment">// 1111 1111 1111 1111 ,2字节 </span>
<span class="token keyword">unsigned</span> <span class="token keyword">short</span> sh1 <span class="token operator">=</span> <span class="token number">65535</span><span class="token punctuation">;</span> 
<span class="token keyword">short</span> sh2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">32767</span><span class="token punctuation">;</span> 
<span class="token comment">// 32769,-1,177777,ffff</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%hu,%hd,%ho,%hx&quot;</span><span class="token punctuation">,</span>sh2<span class="token punctuation">,</span>sh1<span class="token punctuation">,</span>sh1<span class="token punctuation">,</span>sh1<span class="token punctuation">)</span><span class="token punctuation">;</span>  

<span class="token comment">// %l 限定了32位4个字节 </span>
<span class="token comment">//1111 1111 1111 1111 1111 1111 1111 1111  ,4字节</span>
<span class="token keyword">unsigned</span> <span class="token keyword">long</span> ulong <span class="token operator">=</span> <span class="token number">4294967295</span><span class="token punctuation">;</span> 
<span class="token keyword">long</span> slong <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2147483647</span><span class="token punctuation">;</span>
<span class="token comment">// -2147483647,4294967295,37777777777,ffffffff</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%ld,%lu,%lo,%lx&quot;</span><span class="token punctuation">,</span>slong<span class="token punctuation">,</span>ulong<span class="token punctuation">,</span>ulong<span class="token punctuation">,</span>ulong<span class="token punctuation">)</span><span class="token punctuation">;</span> 


<span class="token comment">// %ll 限定了64位8个字节 </span>
<span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">long</span> ull<span class="token operator">=</span> <span class="token number">4294967295</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> <span class="token keyword">long</span> ll <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2147483647</span><span class="token punctuation">;</span>
<span class="token comment">// -2147483647,4294967295,37777777777,ffffffff</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%lld,%llu,%llo,%llx&quot;</span><span class="token punctuation">,</span>ll<span class="token punctuation">,</span>ull<span class="token punctuation">,</span>ull<span class="token punctuation">,</span>ull<span class="token punctuation">)</span><span class="token punctuation">;</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="g格式符" tabindex="-1"><a class="header-anchor" href="#g格式符" aria-hidden="true">#</a> %g格式符</h4><blockquote><p>根据数值的大小，自动选择用f格式或e格式输出实数。输出时选择占宽度较小的一种，且不输出无意义的零。</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">float</span> f<span class="token operator">=</span><span class="token number">3.14159</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n%e,%f,%lf,%g&quot;</span><span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用printf的注意事项" tabindex="-1"><a class="header-anchor" href="#使用printf的注意事项" aria-hidden="true">#</a> 使用printf的注意事项</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不同类型的数据应使用相应类型的格式字符说明其输出形式，以保证显示结果符合预期。

格式字符中，除了X、E、G外，其他均用小写字母，如&quot;%d&quot;不能写成&quot;%D&quot;。

如需输出双引号，应在&quot;格式控制&quot;中表示为转义字符的形式并用单引号引起来，即&quot;\\&quot;。

如需输出字符&quot;％&quot;，在&quot;格式控制&quot;中用连续两个&quot;％&quot;即可。
如：printf(&quot;%d%%&quot;,10);

当&quot;格式控制&quot;中格式符个数少于输出表中的输出项时，多余的输出项不予输出。

当&quot;格式符&quot;多于输出项时，多出的格式符输出结果为不定值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scanf输入" tabindex="-1"><a class="header-anchor" href="#scanf输入" aria-hidden="true">#</a> scanf输入</h3><blockquote><p>格式：scanf(格式控制, 地址表)</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：要求用户从键盘上输入指定格式的数据。
说明：如果数据不止一个，应在数据之间用一个或多个空格间隔，也可以用回车键或跳格键tab间隔。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="格式控制" tabindex="-1"><a class="header-anchor" href="#格式控制" aria-hidden="true">#</a> 格式控制</h4><table><thead><tr><th style="text-align:left;">格式符</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">d</td><td style="text-align:left;">用于输入十进制整数</td></tr><tr><td style="text-align:left;">o</td><td style="text-align:left;">用于输入八进制形整数</td></tr><tr><td style="text-align:left;">x</td><td style="text-align:left;">用于输入十六进制整数</td></tr><tr><td style="text-align:left;">c</td><td style="text-align:left;">用于输入一个字符</td></tr><tr><td style="text-align:left;">s</td><td style="text-align:left;">用于输入字符串，并将字符串送到一个字符数组中。输入时以非空白字符开始， 第一个空白字符结束。字符串以串结束标志&quot;\\0&quot;作为其最后一个字符。</td></tr><tr><td style="text-align:left;">f</td><td style="text-align:left;">用于输入实数。输入时用小数点形式或指数形式均可。(输入双精度必须用%lf，否则不能正常输入)</td></tr><tr><td style="text-align:left;">e</td><td style="text-align:left;">与f作用相同</td></tr></tbody></table><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 1）可以指定输入的数据所占据的字符个数，scanf函数自动按照指示截取所需长度的数据。如：</span>

<span class="token keyword">int</span> i<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%3d%3d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>i<span class="token punctuation">,</span><span class="token operator">&amp;</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输入：1234567</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出  123，456</span>

<span class="token comment">// 2）%后面的*格式符，用来表示在解析时，将读入的数据忽略不赋给任何变量。如：</span>

<span class="token keyword">int</span> i<span class="token punctuation">,</span>j<span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %*d %d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>i<span class="token punctuation">,</span><span class="token operator">&amp;</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输入: 123 456 789 </span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,%d&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 输出: 123,789</span>

<span class="token comment">// 3）输入数据时不能指定精度。如：</span>

<span class="token keyword">float</span> f<span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%7.2f&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输入 123.456 </span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f23&quot;</span><span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 0.00000023 </span>

<span class="token comment">// 4) 输入双精度数使用%lf</span>
<span class="token comment">// 输入双精度浮点数时，务必用%lf，如下错误</span>
<span class="token keyword">double</span> db<span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%f&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//输入： 123.456</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%f&quot;</span><span class="token punctuation">,</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 ： 0.000000 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符输入输出-getchar-putchar" tabindex="-1"><a class="header-anchor" href="#字符输入输出-getchar-putchar" aria-hidden="true">#</a> 字符输入输出（getchar/putchar）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有些时候，仅仅为了在显示器屏幕上打印或从控制台获取一个字符，
此时使用功能强大的printf与scanf函数，则显得过于繁琐，
C提供了一个库函数putchar/getchar来完成这个简单的任务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="putchar" tabindex="-1"><a class="header-anchor" href="#putchar" aria-hidden="true">#</a> putchar</h3><blockquote><p>putchar(字符数据);</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">1</span>）字符数据可以是一个字符型变量，如：<span class="token keyword">char</span> c_var<span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> <span class="token function">putchar</span><span class="token punctuation">(</span>c_var<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token number">2</span>）字符数据也可以是一个字符常量，如<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>输出结果：a

<span class="token number">3</span>）字符数据还可以是一个整数。整数可以是十进制整数，如：<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span><span class="token punctuation">;</span>输出结果：a

<span class="token number">4</span>）字符数据还可以是一个表达式，只要结果是<span class="token number">255</span>以内的整数即可。如：
<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token operator">+</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>输出结果：z

<span class="token number">5</span>）字符数据可以是转义字符。如：
<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>结果输出一个换行。<span class="token function">putchar</span><span class="token punctuation">(</span><span class="token char">&#39;\\007&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 输出一个提示音
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getchar" tabindex="-1"><a class="header-anchor" href="#getchar" aria-hidden="true">#</a> getchar</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">char</span> ch<span class="token punctuation">;</span>
ch<span class="token operator">=</span><span class="token function">getchar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 获取输入的字符</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c&quot;</span><span class="token punctuation">,</span>ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串输入输出函数-gets与puts" tabindex="-1"><a class="header-anchor" href="#字符串输入输出函数-gets与puts" aria-hidden="true">#</a> 字符串输入输出函数 （gets与puts）</h3><h3 id="puts" tabindex="-1"><a class="header-anchor" href="#puts" aria-hidden="true">#</a> puts</h3><blockquote><p>puts函数功能非常单一，在显示器屏幕上输出一个字符串，并换行</p></blockquote><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">puts</span><span class="token punctuation">(</span><span class="token string">&quot;你好啊~&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
输出结果<span class="token operator">:</span>
你好啊<span class="token operator">~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gets" tabindex="-1"><a class="header-anchor" href="#gets" aria-hidden="true">#</a> gets</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">//不要char*p，然后gets(p)，这是错误的，</span>
<span class="token comment">//因为p没有指向有效的内存，它可能指向任何非法地址 ，造成非法访问异常 </span>
<span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                  
<span class="token function">gets</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>与gets/puts类似的还有fgets与fputs，它们一般用于对文件的操作</p></blockquote>`,51),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","02.html.vue"]]);export{d as default};
