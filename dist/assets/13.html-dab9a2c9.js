import{_ as n,o as s,c as a,a as p}from"./app-c94bd78a.js";const t={},e=p(`<h3 id="接口大全" tabindex="-1"><a class="header-anchor" href="#接口大全" aria-hidden="true">#</a> 接口大全</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>常用的免费接口集合
https<span class="token punctuation">:</span><span class="token comment">//www.free-api.com/</span>

获取当前所在地区
http<span class="token punctuation">:</span><span class="token comment">//ip-api.com/json/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="curl" tabindex="-1"><a class="header-anchor" href="#curl" aria-hidden="true">#</a> CURL</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>curl是<span class="token constant">PHP</span>的一个扩展，利用该扩展可以实现服务器之间的数据或文件传输

也就是说curl就是一个工具，用来做服务器之间数据、文件传输的工具

可以用来采集网络中的html网页文件、其他服务器提供接口数据等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启扩展" tabindex="-1"><a class="header-anchor" href="#开启扩展" aria-hidden="true">#</a> 开启扩展</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在php.ini里面开启curl这个扩展

重启apache服务器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://www.php.net/manual/zh/function.curl-setopt.php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发送get请求" tabindex="-1"><a class="header-anchor" href="#发送get请求" aria-hidden="true">#</a> 发送get请求</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//发送数据</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;username&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token number">123456</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">//请求接口地址</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;http://localhost/class/api.php&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//利用 http_build_query 转换参数格式</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token variable">$url</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;?&quot;</span><span class="token operator">.</span><span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化一个curl会话</span>
<span class="token variable">$ch</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//设置请求地址</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_URL</span><span class="token punctuation">,</span> <span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//不返回 header 头信息</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_HEADER</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置是直接显示结果（echo） false</span>
<span class="token comment">// 还是将结果返回（return）true</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_RETURNTRANSFER</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置请求时间</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_TIMEOUT</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//发送请求，并接收返回值</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//关闭会话</span>
<span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印返回结果</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>api.php</strong></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发送post请求" tabindex="-1"><a class="header-anchor" href="#发送post请求" aria-hidden="true">#</a> 发送post请求</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//请求接口地址</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;http://localhost/class/api.php&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//发送数据</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;username&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;password&#39;</span><span class="token operator">=&gt;</span><span class="token number">123456</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化一个curl会话</span>
<span class="token variable">$ch</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//设置请求地址</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_URL</span><span class="token punctuation">,</span> <span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置请求类型为post</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POST</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//添加请求数据</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POSTFIELDS</span><span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 设置是直接显示结果（echo） false</span>
<span class="token comment">// 还是将结果返回（return）true</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_RETURNTRANSFER</span><span class="token punctuation">,</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//发送请求，并接收返回值</span>
<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//如果请求有错误可以打印错误信息 这一步可添加也可注释</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$result</span> <span class="token operator">===</span> <span class="token constant boolean">FALSE</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">curl_error</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">exit</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取请求的具体信息</span>
<span class="token variable">$info</span> <span class="token operator">=</span> <span class="token function">curl_getinfo</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//关闭会话</span>
<span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印返回结果</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>api.php</strong></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">echo</span> <span class="token function">http_build_query</span><span class="token punctuation">(</span><span class="token variable">$_POST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="发送json请求" tabindex="-1"><a class="header-anchor" href="#发送json请求" aria-hidden="true">#</a> 发送json请求</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//请求接口地址</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;http://localhost/class/api.php&quot;</span><span class="token punctuation">;</span>

<span class="token variable">$data</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;{&quot;username&quot;:&quot;demo&quot;,&quot;password&quot;:&quot;123456&quot;}&#39;</span><span class="token punctuation">;</span>

<span class="token variable">$ch</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_URL</span><span class="token punctuation">,</span> <span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POST</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_CONNECTTIMEOUT</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_HTTPHEADER</span><span class="token punctuation">,</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type: application/json&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Content-Length:&#39;</span> <span class="token operator">.</span> <span class="token function">strlen</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POSTFIELDS</span> <span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_RETURNTRANSFER</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$output</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$output</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>api.php</strong></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$input</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;php://input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function">urldecode</span><span class="token punctuation">(</span><span class="token variable">$input</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发送文件请求" tabindex="-1"><a class="header-anchor" href="#发送文件请求" aria-hidden="true">#</a> 发送文件请求</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//请求接口地址</span>
<span class="token variable">$url</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;http://localhost/class/api.php&quot;</span><span class="token punctuation">;</span>

<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span> 
    <span class="token string double-quoted-string">&quot;upload&quot;</span><span class="token operator">=&gt;</span><span class="token keyword">new</span> <span class="token class-name">CURLFile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./back.jpg&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$ch</span> <span class="token operator">=</span> <span class="token function">curl_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_URL</span><span class="token punctuation">,</span> <span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POST</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_CONNECTTIMEOUT</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_POSTFIELDS</span> <span class="token punctuation">,</span> <span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">curl_setopt</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">,</span> <span class="token constant">CURLOPT_RETURNTRANSFER</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$output</span> <span class="token operator">=</span> <span class="token function">curl_exec</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token variable">$output</span><span class="token punctuation">;</span>

<span class="token function">curl_close</span><span class="token punctuation">(</span><span class="token variable">$ch</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>api.php</strong></p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),c=[e];function l(o,i){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","13.html.vue"]]);export{r as default};
