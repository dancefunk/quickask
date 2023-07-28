import{_ as n,o as s,c as a,a as e}from"./app-110372b4.js";const t={},p=e(`<h3 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">PHP</span>命名空间为了避免产生类名冲突而产生的
<span class="token number">1</span>、命名空间采用<span class="token keyword">namespace</span>来声明
<span class="token number">2</span>、命名空间语法必须在文件的第一行定义
<span class="token number">3</span>、命名空间会影响三种元素：类、函数、常量
<span class="token number">4</span>、不提倡在同一个文件中定义多个命名空间
<span class="token number">5</span>、<span class="token keyword">use</span> 别名使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="demo-php" tabindex="-1"><a class="header-anchor" href="#demo-php" aria-hidden="true">#</a> demo.php</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//定义了一个名字空间</span>
<span class="token keyword">namespace</span> <span class="token package">demo</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function-definition function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string double-quoted-string">&quot;demo空间里面的time函数&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">const</span> <span class="token constant">PHP_OS</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo空间里面的常量&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Test</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;demo空间里面的Test类&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="index-php" tabindex="-1"><a class="header-anchor" href="#index-php" aria-hidden="true">#</a> index.php</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type:text/html;charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//引入刚刚定义的命名空间文件</span>
<span class="token keyword">include_once</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 内置函数</span>
<span class="token keyword">echo</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 命名空间里面的函数</span>
<span class="token keyword">echo</span> <span class="token function">demo<span class="token punctuation">\\</span>time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token function"><span class="token punctuation">\\</span>demo<span class="token punctuation">\\</span>time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>


<span class="token comment">//内置常量</span>
<span class="token keyword">echo</span> <span class="token constant">PHP_OS</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 命名空间里面的常量</span>
<span class="token keyword">echo</span> demo\\<span class="token constant">PHP_OS</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>


<span class="token comment">// 命名空间里面的类</span>
<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">demo<span class="token punctuation">\\</span>Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//使用别名</span>
<span class="token keyword">use</span> <span class="token package">demo</span> <span class="token keyword">as</span> hello<span class="token punctuation">;</span>
<span class="token variable">$obj2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">hello<span class="token punctuation">\\</span>Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","04.html.vue"]]);export{d as default};
