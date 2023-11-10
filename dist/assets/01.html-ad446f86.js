import{_ as n,o as s,c as a,a as e}from"./app-c94bd78a.js";const p={},t=e(`<h3 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>日常环境由无数实体组成<span class="token punctuation">:</span>植物<span class="token punctuation">,</span>人群<span class="token punctuation">,</span>交通工具<span class="token punctuation">,</span>食物<span class="token operator">...</span> 每个实体都由一组性质和行为来定义。
例如<span class="token punctuation">:</span> 男人可以定义有<span class="token punctuation">:</span>身高<span class="token punctuation">,</span>体重<span class="token punctuation">,</span>是否帅气<span class="token punctuation">,</span>肤色等性质<span class="token punctuation">,</span>并且定义有能赚钱<span class="token punctuation">,</span>能下厨<span class="token punctuation">,</span>能开车等行为。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>通过类创建出来的实体称为对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="类和对象的关系" tabindex="-1"><a class="header-anchor" href="#类和对象的关系" aria-hidden="true">#</a> 类和对象的关系</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>类：汽车图纸
对象：生产出来的汽车

我们可以根据 汽车图纸 来 制造出 一辆真正的汽车 
换成程序关系就是 类 实例化 出来 得到的产物就是对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类" aria-hidden="true">#</a> 定义类</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function-definition function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;工作中....&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建对象-实例化" tabindex="-1"><a class="header-anchor" href="#创建对象-实例化" aria-hidden="true">#</a> 创建对象(实例化)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="外部访问对象成员" tabindex="-1"><a class="header-anchor" href="#外部访问对象成员" aria-hidden="true">#</a> 外部访问对象成员</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">;</span>

<span class="token comment">//访问对象属性</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token punctuation">;</span> 

<span class="token comment">//访问对象方法</span>
<span class="token variable">$obj</span><span class="token operator">-&gt;</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内部访问对象成员" tabindex="-1"><a class="header-anchor" href="#内部访问对象成员" aria-hidden="true">#</a> 内部访问对象成员</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span> 
<span class="token punctuation">{</span> 
    <span class="token keyword">public</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>
  
    <span class="token keyword">function</span> <span class="token function-definition function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span><span class="token operator">.</span><span class="token string double-quoted-string">&quot;hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>类中定义常量，即不会在类中改变的值
 
类常量创建<span class="token punctuation">:</span><span class="token keyword">const</span> <span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;value&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span> 
<span class="token punctuation">{</span>
   <span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415926</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
访问常量
<span class="token keyword">echo</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">PI</span><span class="token punctuation">;</span> <span class="token comment">//类内部访问</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">person</span><span class="token operator">::</span><span class="token constant">PI</span><span class="token punctuation">;</span> <span class="token comment">//类外部访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>使用 <span class="token keyword">static</span> 关键字可以用来标识静态属性，也可以用来标识静态方法
 
<span class="token keyword">static</span> <span class="token variable">$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;value&#39;</span><span class="token punctuation">;</span> <span class="token comment">//属性</span>

<span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//方法</span>
 
声明类属性或方法为静态<span class="token punctuation">,</span>就可以不实例化类直接访问
静态的成员属于类所有<span class="token punctuation">,</span>所以我们在静态方法里<span class="token punctuation">,</span>不能使用<span class="token variable">$this</span>来引用静态成员
使用<span class="token keyword">self</span>关键字来调用

<span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span>
<span class="token punctuation">{</span>
    <span class="token comment">//静态属性</span>
    <span class="token keyword">static</span> <span class="token variable">$test</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;static&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">//静态方法</span>
    <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//类内部访问静态属性</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$test</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">echo</span> <span class="token class-name static-context">person</span><span class="token operator">::</span><span class="token variable">$test</span><span class="token punctuation">;</span> <span class="token comment">//外部访问静态属性</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">person</span><span class="token operator">::</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//外部访问静态方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数与析构函数" tabindex="-1"><a class="header-anchor" href="#构造函数与析构函数" aria-hidden="true">#</a> 构造函数与析构函数</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">person</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>

    <span class="token comment">//构造函数：在实例化的时候自动调用</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;在实例化的时候自动调用&quot;</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//析构函数  在对象调用完成后自动触发的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;在对象调用完成后自动触发的方法&quot;</span><span class="token punctuation">;</span>
        
        <span class="token comment">//在销毁的时候 复原一些设置</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token variable">$obj</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[t];function c(o,l){return s(),a("div",null,i)}const u=n(p,[["render",c],["__file","01.html.vue"]]);export{u as default};
