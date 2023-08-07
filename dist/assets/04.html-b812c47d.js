import{_ as n,o as s,c as a,a as t}from"./app-b57ef521.js";const p={},e=t(`<h3 id="vue组件的api风格" tabindex="-1"><a class="header-anchor" href="#vue组件的api风格" aria-hidden="true">#</a> Vue组件的API风格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选项式API
使用选项式API，我们可以用包含多个选项的对象来描述组件的逻辑，例如 data、methods 和 mounted
选项所定义的属性都会暴露在函数内部的 this 上，它会指向当前的组件实例

组合式API
组合式API是使用导入的方式来描述组件逻辑，通常会与 &lt;script setup&gt; 搭配使用
&lt;script setup&gt; 里面的代码会被编译成组件 setup() 函数的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项式api" tabindex="-1"><a class="header-anchor" href="#选项式api" aria-hidden="true">#</a> 选项式API</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  {{username}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ClickMe<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>绑定事件-简写方式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>计算属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  {{count}}

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>ref用法<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>ref用法说明<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 数据结构</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 方法</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">ClickMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;触发事件&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//计算属性 计算属性与数据结构同级，都是用来表示数据，但是计算属性可以加上逻辑处理</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">//保留小数点后两位</span>
      <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">5.56789</span>
      <span class="token keyword">var</span> res <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//侦听器 可以监控数据变化前后的值</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">username</span><span class="token punctuation">(</span><span class="token parameter">newval<span class="token punctuation">,</span> oldval</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">新的值：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newval<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> --- 旧的值：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>oldval<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//生命周期钩子</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// vue给我们提供一个操作dom的属性ref。绑定在dom元素上时，用起来与id差不多，通过this.$refs来调用</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>test<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合式api" tabindex="-1"><a class="header-anchor" href="#组合式api" aria-hidden="true">#</a> 组合式API</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> onMounted<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token comment">// 创建响应式数据</span>
  <span class="token keyword">let</span> username <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
  
  <span class="token comment">// 事件绑定</span>
  <span class="token keyword">function</span> <span class="token function">ClickMe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;触发事件&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 计算属性 计算属性与数据结构同级，都是用来表示数据，但是计算属性可以加上逻辑处理</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">150.417</span>
    <span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">//侦听器 可以监控数据变化前后的值</span>
  <span class="token function">watch</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> oldVal</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span> oldVal<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 获取组件中ref=&quot;hello&quot;的真实dom元素</span>
  <span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token comment">// 生命周期钩子</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// &lt;input type=&quot;text&quot;&gt;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hello<span class="token punctuation">.</span>value<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// 张三</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  {{username}}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ClickMe<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>绑定事件-简写方式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>计算属性<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  {{count}}

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Ref用法 获取DOM节点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>张三<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[e];function o(l,u){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","04.html.vue"]]);export{k as default};
