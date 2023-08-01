import{_ as n,o as s,c as a,a as e}from"./app-47c2ac71.js";const p={},t=e(`<h3 id="面向对象三个基本概念" tabindex="-1"><a class="header-anchor" href="#面向对象三个基本概念" aria-hidden="true">#</a> 面向对象三个基本概念</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token constant">OOP</span>三个基本概念<span class="token punctuation">:</span>封装、继承、多态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>类的封装其实指的意思就是，将我们常用的一些功能封装成一个类，将一些参数和函数，封装为类的属性和方法
封装的好处，有利于我们对程序的开发和维护，防止被外部的程序修改，对项目开发有一定的规范
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">db</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$host</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$username</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$password</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$dbname</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$host</span><span class="token punctuation">,</span> <span class="token variable">$username</span><span class="token punctuation">,</span> <span class="token variable">$password</span><span class="token punctuation">,</span> <span class="token variable">$dbname</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">host</span> <span class="token operator">=</span> <span class="token variable">$host</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">username</span> <span class="token operator">=</span> <span class="token variable">$username</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">password</span> <span class="token operator">=</span> <span class="token variable">$password</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">dbname</span> <span class="token operator">=</span> <span class="token variable">$dbname</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查询方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 插入方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 更新方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 删除方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">del</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>继承是可以让类与类之间进行共享的一种方式，将父类的一切给到子类，让子类可以拥有使用权限
<span class="token constant">PHP</span>本身为 单继承 的方式，使用 <span class="token keyword">extends</span> 关键词来继承
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>多态就是让继承的方法，可以多样化。例如：
father 类 里面的 work 方法
son 类 里面的 work 方法
在不同类里面有不同的实现效果，这个就是类的多态
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">father</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;父类&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$money</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;父类的构造函数&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//父类的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//每工作一次+1000</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">money</span> <span class="token operator">+=</span> <span class="token number">1000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">class</span> <span class="token class-name-definition class-name">son</span> <span class="token keyword">extends</span> <span class="token class-name">father</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//继承父类的构造函数</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;子类的构造函数&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>       
    <span class="token punctuation">}</span>

    <span class="token comment">//子类自己独有的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;子类自己的方法&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//从父类继承过来的方法，子类有权去修改，这种方式就是多态</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//每工作一次+5000</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">money</span> <span class="token operator">+=</span> <span class="token number">5000</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$father</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">father</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$father</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token variable">$father</span><span class="token operator">-&gt;</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$father</span><span class="token operator">-&gt;</span><span class="token property">money</span><span class="token punctuation">;</span>

<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>

<span class="token variable">$son</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">son</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$son</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;子类&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$son</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;&lt;br /&gt;&#39;</span><span class="token punctuation">;</span>
<span class="token variable">$son</span><span class="token operator">-&gt;</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token variable">$son</span><span class="token operator">-&gt;</span><span class="token property">money</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象链" tabindex="-1"><a class="header-anchor" href="#对象链" aria-hidden="true">#</a> 对象链</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>实例化一个对象后，连续调用多个方法成员
使用<span class="token keyword">return</span> <span class="token variable">$this</span>表示本对象
语法格式：<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">self</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;我是<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">}</span></span>-&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;正在吃饭-&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;已经吃饱-正在睡觉-非诚勿扰&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;小明&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">self</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function i(c,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","03.html.vue"]]);export{r as default};
