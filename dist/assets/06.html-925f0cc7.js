import{_ as n,o as s,c as a,a as e}from"./app-6325e707.js";const t={},p=e(`<h3 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h3><table><thead><tr><th style="text-align:left;">元字符</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">.</td><td style="text-align:left;">匹配任意单个字符</td></tr><tr><td style="text-align:left;">*</td><td style="text-align:left;">匹配前面的字符零次或多次 等同于 ｛0，｝</td></tr><tr><td style="text-align:left;">+</td><td style="text-align:left;">匹配前面的字符一次或多次 等同于 ｛1，｝</td></tr><tr><td style="text-align:left;">?</td><td style="text-align:left;">? 匹配前面的字符零次或一次 等同于 ｛0，1｝</td></tr><tr><td style="text-align:left;"><code>^</code></td><td style="text-align:left;">匹配字符串的开始位置</td></tr><tr><td style="text-align:left;"><code>$</code></td><td style="text-align:left;">匹配字符串结束位置</td></tr><tr><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">匹配方括号中的任一字符</td></tr><tr><td style="text-align:left;"><code>[^]</code></td><td style="text-align:left;">匹配除方括号中的字符外的任何字符</td></tr><tr><td style="text-align:left;">\\w</td><td style="text-align:left;">匹配字母、数字、下划线</td></tr><tr><td style="text-align:left;">\\W</td><td style="text-align:left;">匹配除了字母、数字、下划线</td></tr><tr><td style="text-align:left;">\\d</td><td style="text-align:left;">匹配数字，等价于0-9</td></tr><tr><td style="text-align:left;">\\D</td><td style="text-align:left;">匹配非数字，等价于^0-9</td></tr><tr><td style="text-align:left;">\\s</td><td style="text-align:left;">匹配任何空白字符，包括空格，制表符，换行符等等。等价于[\\f\\n\\r\\t\\v]</td></tr><tr><td style="text-align:left;">\\S</td><td style="text-align:left;">匹配非空白字符，等价于^\\f\\n\\r\\t\\v</td></tr></tbody></table><h3 id="模式修正符" tabindex="-1"><a class="header-anchor" href="#模式修正符" aria-hidden="true">#</a> 模式修正符</h3><table><thead><tr><th style="text-align:left;">符号</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">i</td><td style="text-align:left;">不区分大小写</td></tr><tr><td style="text-align:left;">m</td><td style="text-align:left;">视为多行</td></tr><tr><td style="text-align:left;">s</td><td style="text-align:left;">匹配空白字符</td></tr><tr><td style="text-align:left;">g</td><td style="text-align:left;">全局匹配</td></tr></tbody></table><h4 id="用于匹配任何单个字符-除了换行符以外" tabindex="-1"><a class="header-anchor" href="#用于匹配任何单个字符-除了换行符以外" aria-hidden="true">#</a> <code>.</code>用于匹配任何单个字符(除了换行符以外)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;abcde&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a.c</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配次数" tabindex="-1"><a class="header-anchor" href="#匹配次数" aria-hidden="true">#</a> 匹配次数</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// *匹配前面的字符零次或多次  等同于 ｛0，｝</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;aaabbbccc&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a*</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// +匹配前面的字符一次或多次  等同于 ｛1，｝</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// ?匹配前面的字符零次或一次  等同于 ｛0，1｝</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 指定次数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a{3}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a{1,}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a{1,2}</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配多个选择" tabindex="-1"><a class="header-anchor" href="#匹配多个选择" aria-hidden="true">#</a> 匹配多个选择</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a|e|l</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配开始和结束" tabindex="-1"><a class="header-anchor" href="#匹配开始和结束" aria-hidden="true">#</a> 匹配开始和结束</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ^ 匹配字符串的开始位置</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^he</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// $ 匹配字符串结束位置</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">ld$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="范围匹配" tabindex="-1"><a class="header-anchor" href="#范围匹配" aria-hidden="true">#</a> 范围匹配</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// [] 匹配方括号中的任一字符</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[abcde]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token comment">// [^] 匹配除方括号中的字符外的任何字符</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[^abcde]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配字母、数字、下划线" tabindex="-1"><a class="header-anchor" href="#匹配字母、数字、下划线" aria-hidden="true">#</a> 匹配字母、数字、下划线</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// \\w 匹配字母、数字、下划线</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\w</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \\W 匹配除字母、数字、下划线</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\W</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配数字" tabindex="-1"><a class="header-anchor" href="#匹配数字" aria-hidden="true">#</a> 匹配数字</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// \\d 匹配与一个数字字符</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world 123456&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \\D 匹配一个非数字字符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\D</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="匹配任何空白字符-包括空格-制表符-换行符等等" tabindex="-1"><a class="header-anchor" href="#匹配任何空白字符-包括空格-制表符-换行符等等" aria-hidden="true">#</a> 匹配任何空白字符，包括空格，制表符，换行符等等</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// \\s 匹配任何空白字符，包括空格，制表符，换行符等等</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \\S 匹配非空白字符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\S</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="贪婪模式与非贪婪模式" tabindex="-1"><a class="header-anchor" href="#贪婪模式与非贪婪模式" aria-hidden="true">#</a> 贪婪模式与非贪婪模式</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello&lt;p&gt;你好&lt;/p&gt;world&lt;p&gt;世界&lt;/p&gt;&quot;</span>

<span class="token comment">// 贪婪模式 匹配所有字符</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;p&gt;.*&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 后面加问号，变成非贪婪模式</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;p&gt;.*?&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模式修正符-1" tabindex="-1"><a class="header-anchor" href="#模式修正符-1" aria-hidden="true">#</a> 模式修正符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// i 不区分大小写</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;HELLO WORLD&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// m 视为多行</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;HELLO WORLD\\r\\n js \\r\\nabc&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^abc</span><span class="token regex-delimiter">/</span><span class="token regex-flags">m</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// s 匹配空白字符</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello\\nworld&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">o.</span><span class="token regex-delimiter">/</span><span class="token regex-flags">s</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 如果不带g，正则过程中字符串从左到右匹配，找到第一个符合条件的即匹配成功</span>
<span class="token comment">// 如果带g，则字符串从左到右，找到每个符合条件的都记录下来，直到字符串结尾位置</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;aaaaaaaa&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">a</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则方法" tabindex="-1"><a class="header-anchor" href="#正则方法" aria-hidden="true">#</a> 正则方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 返回匹配数组</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 匹配成功返回true 失败返回false</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">hello</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),l=[p];function c(o,i){return s(),a("div",null,l)}const u=n(t,[["render",c],["__file","06.html.vue"]]);export{u as default};