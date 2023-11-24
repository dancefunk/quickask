import{_ as n,o as s,c as a,a as t}from"./app-3e5ace64.js";const p={},e=t(`<h3 id="格式化输出" tabindex="-1"><a class="header-anchor" href="#格式化输出" aria-hidden="true">#</a> 格式化输出</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">printf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 函数输出格式化的字符串
<span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 函数把格式化的字符串写入一个变量中

格式说明
<span class="token operator">%</span><span class="token operator">%</span> <span class="token operator">-</span> 返回百分比符号
<span class="token operator">%</span>b <span class="token operator">-</span> 二进制数
<span class="token operator">%</span>c <span class="token operator">-</span> 依照 <span class="token constant">ASCII</span> 值的字符
<span class="token operator">%</span>d <span class="token operator">-</span> 带符号十进制数
<span class="token operator">%</span>e <span class="token operator">-</span> 可续计数法（比如 <span class="token number">1.5e+3</span>）
<span class="token operator">%</span>u <span class="token operator">-</span> 无符号十进制数
<span class="token operator">%</span>f <span class="token operator">-</span> 浮点数<span class="token punctuation">(</span>local settings aware<span class="token punctuation">)</span>
<span class="token operator">%</span><span class="token constant">F</span> <span class="token operator">-</span> 浮点数<span class="token punctuation">(</span>not local settings aware<span class="token punctuation">)</span>
<span class="token operator">%</span>o <span class="token operator">-</span> 八进制数
<span class="token operator">%</span>s <span class="token operator">-</span> 字符串
<span class="token operator">%</span>x <span class="token operator">-</span> 十六进制数（小写字母）
<span class="token operator">%</span><span class="token constant">X</span> <span class="token operator">-</span> 十六进制数（大写字母）


<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;123 test&#39;</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;整数：%d&#39;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;浮点数：%.2f&#39;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;字符串：%s&#39;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;123 test&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$val</span> <span class="token operator">=</span> <span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;%d&#39;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$val</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用字符串函数" tabindex="-1"><a class="header-anchor" href="#常用字符串函数" aria-hidden="true">#</a> 常用字符串函数</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// strlen 返回字符串的长度</span>
<span class="token keyword">echo</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// htmlspecialchars 转换字符串中的html标签为字符实体</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&lt;p&gt;这是一个段落&lt;/p&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">htmlspecialchars</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ltrim rtrim trim 去掉空白字符</span>
<span class="token variable">$str</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot; hello world  &quot;</span><span class="token punctuation">;</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// md5 md5加密</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">md5</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// sha1 sha1加密</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">sha1</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// str_replace 与 str_ireplace(不区分大小写) 字符串替换</span>
<span class="token keyword">echo</span> <span class="token function">str_ireplace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;PHP&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// strpos 与 stripos(不区分大小写) 查找字符串第一次出现的位置</span>
<span class="token keyword">echo</span> <span class="token function">stripos</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;WO&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// strstr 与 stristr(不区分大小写) 查找字符串第一次出现的位置并返回字符串的其余部分</span>
<span class="token keyword">echo</span> <span class="token function">stristr</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;llo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// str_shuffle 随机打乱字符串</span>
<span class="token keyword">echo</span> <span class="token function">str_shuffle</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// str_split 字符串分割成数组</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">str_split</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// strip_tags 去掉字符串中的html标签</span>
<span class="token keyword">echo</span> <span class="token function">strip_tags</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello &lt;b&gt;world&lt;/b&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// strtolower strtoupper 大小写转换</span>
<span class="token keyword">echo</span> <span class="token function">strtolower</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;HELLO WORLD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// substr 字符串截取</span>
<span class="token keyword">echo</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;hello world&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[e];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","08.html.vue"]]);export{r as default};
