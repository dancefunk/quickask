import{_ as n,o as s,c as a,a as e}from"./app-d50584af.js";const t={},p=e(`<h3 id="ziparchive压缩解压类" tabindex="-1"><a class="header-anchor" href="#ziparchive压缩解压类" aria-hidden="true">#</a> ZipArchive压缩解压类</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">ZIPARCHIVE</span><span class="token operator">::</span><span class="token constant">OVERWRITE</span> 总是创建一个新的文件，如果指定的zip文件存在，则会覆盖掉
<span class="token class-name static-context">ZIPARCHIVE</span><span class="token operator">::</span><span class="token constant">CREATE</span> 如果指定的zip文件不存在，则新建一个
<span class="token class-name static-context">ZIPARCHIVE</span><span class="token operator">::</span><span class="token constant">EXCL</span> 如果指定的zip文件存在，则会报错
<span class="token class-name static-context">ZIPARCHIVE</span><span class="token operator">::</span><span class="token constant">CHECKCONS</span> 对指定的zip执行其他一致性测试

<span class="token variable">$zip</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified"><span class="token punctuation">\\</span>ZipArchive</span><span class="token punctuation">;</span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test_new.zip&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>ZipArchive</span><span class="token operator">::</span><span class="token constant">CREATE</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h3><blockquote><p>addFile(将指定文件添加到压缩包中)</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//将test.txt文件添加到压缩包中</span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addFile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第二个参数可对文件进行重命名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>addEmptyDir(将指定空目录添加到压缩包中)</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//将一个空的目录添加到zip中</span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addEmptyDir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;newdir&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>addFromString(将指定内容的文件添加到压缩包)</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// 将有指定内容的new.txt文件添加到zip文件中</span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addFromString</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;new.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;要添加到new.txt文件中的文本&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>extractTO（将压缩包解压到指定目录）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">extractTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>getNameIndex（根据索引返回文件名称）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">getNameIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//返回压缩包中索引为0的文件名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>getStream（根据压缩内的文件名称，获取该文件的文本流）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">getStream</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hello.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>renameIndex（根据压缩文件内的索引（从0开始）修改压缩文件内的文件名）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//把压缩文件内第一个文件修改成newname.txt </span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">renameIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;newname.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>renameName（根据压缩文件内的文件名，修改压缩文件内的文件名）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//把压缩文件内的word.txt修改成newword.txt </span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">renameName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;word.txt&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;newword.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>deleteIndex （根据压缩文件内的索引删除压缩文件内的文件）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//把压缩文件内第一个文件删除 </span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">deleteIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>deleteName（根据压缩文件内的文件名删除文件）</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//把压缩文件内的word.txt删除</span>
<span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">deleteName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;word.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例代码" tabindex="-1"><a class="header-anchor" href="#案例代码" aria-hidden="true">#</a> 案例代码</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type:text/html;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建压缩文件</span>
<span class="token variable">$zip</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZipArchive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./out.zip&#39;</span><span class="token punctuation">,</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>ZipArchive</span><span class="token operator">::</span><span class="token constant">CREATE</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// 添加多个压缩文件</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addFile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;1.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addFile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./2.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;2.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//将一个空的目录添加到zip中</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addEmptyDir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 将内容添加到指定文件中去</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addFromString</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;1.txt&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;要添加到1.txt文件中的文本&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//将images目录下所有文件添加到zip中</span>
  <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token function">scandir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./images&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$list</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$item</span> <span class="token operator">!=</span> <span class="token string double-quoted-string">&quot;.&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$item</span> <span class="token operator">!=</span> <span class="token string double-quoted-string">&quot;..&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">is_dir</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./images/&#39;</span><span class="token operator">.</span><span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">addFile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./images/&#39;</span> <span class="token operator">.</span> <span class="token variable">$item</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 关闭压缩文件</span>
  <span class="token variable">$flag</span> <span class="token operator">=</span> <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">echo</span> <span class="token variable">$flag</span> <span class="token operator">?</span> <span class="token string single-quoted-string">&#39;压缩成功&#39;</span><span class="token punctuation">:</span><span class="token string single-quoted-string">&#39;压缩失败&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 修改压缩包内指定文件的文件名称及删除压缩包内指定文件</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./out.zip&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">//把压缩文件内索引为0的文件修改成newname.txt</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">renameIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;newname.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//把压缩文件内的1.txt修改成123.txt</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">renameName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;1.txt&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;123.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//删除压缩文件内索引为0的文件</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">deleteIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//删除压缩文件 newname.txt</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">deleteName</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;newname.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//关闭zip文件</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 解压压缩包文件</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;./out.zip&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token constant boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">//获取索引为0的文件名称</span>
  <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">getNameIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//将压缩包文件解压到test目录下</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">extractTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//获取压缩包指定文件的文本流</span>
  <span class="token variable">$stream</span> <span class="token operator">=</span> <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">getStream</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;1.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 根据文本流，读取文件内容</span>
  <span class="token variable">$str</span> <span class="token operator">=</span> <span class="token function">stream_get_contents</span><span class="token punctuation">(</span><span class="token variable">$stream</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 关闭zip文件</span>
  <span class="token variable">$zip</span><span class="token operator">-&gt;</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","15.html.vue"]]);export{r as default};