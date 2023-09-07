import{_ as n,o as s,c as a,a as e}from"./app-3c87854f.js";const t={},p=e(`<h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>抽象类是指含有抽象方法（即没有函数体的方法）的类
抽象类必须有抽象方法，但也可以有非抽象方法，具有以下特点

抽象类在没有把抽象方法变为非抽象方法之前，不能实例化
当子类继承了父抽象类时，必须把父类的所有抽象方法变为非抽象方法，才可以实例化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">TestA</span>
<span class="token punctuation">{</span>
    <span class="token keyword">abstract</span> <span class="token keyword">function</span> <span class="token function-definition function">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">function</span> <span class="token function-definition function">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">abstract</span> <span class="token keyword">function</span> <span class="token function-definition function">A3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">function</span> <span class="token function-definition function">A4</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;我是非抽象类&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestB</span> <span class="token keyword">extends</span> <span class="token class-name">TestA</span>
<span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function-definition function">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;把A1方法变为非抽象方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;把A2方法变为非抽象方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">A3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;把A3方法变为非抽象方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>只含有抽象方法的类。具有以下特点：
接口不能含有非抽象方法，并且在没有把抽象方法变为非抽象方法之前，不能实例化
当子类继承了父接口类时，必须把父类的所有抽象方法变为非抽象方法，才能实例化
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//声明接口</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">TestA</span>
<span class="token punctuation">{</span>
    <span class="token comment">//抽象方法</span>
    <span class="token keyword">function</span> <span class="token function-definition function">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function-definition function">A3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token comment">//调用接口</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestB</span> <span class="token keyword">implements</span> <span class="token class-name">TestA</span>
<span class="token punctuation">{</span>
    <span class="token comment">//把抽象方法变为非抽象方法</span>
    <span class="token keyword">function</span> <span class="token function-definition function">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;把A1方法变为非抽象方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;把A2方法变为非抽象方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">A3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;把A3方法变为非抽象方法&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>如果需要将对象保存起来的话，我们可以用下面的方法
将对象序列化后，可存到下面的容器中
将序列化对象存入到 session 变量
将序列化对象存入到 文件中
将序列化对象存入到 数据库中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$age</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$age</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">age</span> <span class="token operator">=</span> <span class="token variable">$age</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function-definition function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;我的名字叫：&quot;</span><span class="token operator">.</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;我的年龄是：&quot;</span><span class="token operator">.</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">age</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;&lt;br /&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;张三&quot;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$obj</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 序列化</span>
<span class="token variable">$string</span> <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token variable">$obj</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 反序列化</span>
<span class="token variable">$obj2</span> <span class="token operator">=</span> <span class="token function">unserialize</span><span class="token punctuation">(</span><span class="token variable">$string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$obj2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj2</span><span class="token operator">-&gt;</span><span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reflection反射机制" tabindex="-1"><a class="header-anchor" href="#reflection反射机制" aria-hidden="true">#</a> Reflection反射机制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反射机制原理：我引入了一个类，但是我不知道这个类里面的内容都有啥，这个时候就需要把这个类进行 逆向工程
来获取出，这个类的名称、属性、方法 都相关信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$sex</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token variable">$money</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;work&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;sleep&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取person类的信息</span>
<span class="token variable">$class</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReflectionClass</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;person&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取类所有属性</span>
<span class="token variable">$attr</span> <span class="token operator">=</span> <span class="token variable">$class</span><span class="token operator">-&gt;</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$attr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取某一个类属性</span>
<span class="token variable">$public</span> <span class="token operator">=</span> <span class="token variable">$class</span><span class="token operator">-&gt;</span><span class="token function">getProperties</span><span class="token punctuation">(</span><span class="token class-name static-context">ReflectionProperty</span><span class="token operator">::</span><span class="token constant">IS_PUBLIC</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$public</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取类所有的方法</span>
<span class="token variable">$methods</span> <span class="token operator">=</span> <span class="token variable">$class</span><span class="token operator">-&gt;</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$methods</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","05.html.vue"]]);export{d as default};
