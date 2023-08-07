import{_ as n,o as s,c as a,a as t}from"./app-b57ef521.js";const p={},e=t(`<h3 id="父子组件通信" tabindex="-1"><a class="header-anchor" href="#父子组件通信" aria-hidden="true">#</a> 父子组件通信</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父传子 - 用属性(props)
子传父 - 用事件(event)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选项式api写法" tabindex="-1"><a class="header-anchor" href="#选项式api写法" aria-hidden="true">#</a> 选项式API写法</h3><h4 id="父组件" tabindex="-1"><a class="header-anchor" href="#父组件" aria-hidden="true">#</a> 父组件</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 父组件向子组件传递数据 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son1</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son1</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son2</span> <span class="token attr-name">SubData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>some other data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@SubClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SubClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">import</span> Son1 <span class="token keyword">from</span> <span class="token string">&#39;./son1.vue&#39;</span>
    <span class="token keyword">import</span> Son2 <span class="token keyword">from</span> <span class="token string">&#39;./son2.vue&#39;</span>

    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>
            <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

            <span class="token keyword">function</span> <span class="token function">SubClick</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// 接收子组件传递过来的数据</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> 

            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                name<span class="token punctuation">,</span>
                age<span class="token punctuation">,</span>
                SubClick
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            Son1<span class="token punctuation">,</span>
            Son2<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="son1组件-props-父子通信" tabindex="-1"><a class="header-anchor" href="#son1组件-props-父子通信" aria-hidden="true">#</a> son1组件-props-父子通信</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{name}} {{age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> toRef<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> 
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> Number
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>age<span class="token punctuation">)</span>

            <span class="token keyword">let</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span>value<span class="token punctuation">,</span> age<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="son2组件-context-子父通信" tabindex="-1"><a class="header-anchor" href="#son2组件-context-子父通信" aria-hidden="true">#</a> son2组件-context-子父通信</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 父组件向子组件传递数据 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HandleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Children<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
        <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">let</span> <span class="token punctuation">{</span> attrs<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit <span class="token punctuation">}</span> <span class="token operator">=</span> context

            <span class="token comment">// vue3.x 获取组件上的属性</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attrs<span class="token punctuation">.</span>SubData<span class="token punctuation">)</span>

            <span class="token comment">// vue3.x 获取slot插槽的节点</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>slots<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

            <span class="token comment">// vue3.x emit方法(子组件向父组件传递数据)</span>
            <span class="token keyword">function</span> <span class="token function">HandleClick</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;SubClick&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue3.x - this is subData&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                HandleClick
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组合式api写法" tabindex="-1"><a class="header-anchor" href="#组合式api写法" aria-hidden="true">#</a> 组合式API写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>defineProps()   定义组件属性API
defineEmits()   定义组件执行器API
defineExpose()  暴露当前组件的数据和方法

useSlots()  获取插槽对象
useAttrs()  获取自定义属性对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="父组件-1" tabindex="-1"><a class="header-anchor" href="#父组件-1" aria-hidden="true">#</a> 父组件</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> Son1 <span class="token keyword">from</span> <span class="token string">&#39;./son1.vue&#39;</span>
  <span class="token keyword">import</span> Son2 <span class="token keyword">from</span> <span class="token string">&#39;./son2.vue&#39;</span>

  <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>

  <span class="token comment">//自定义事件</span>
  <span class="token keyword">function</span> <span class="token function">SubClick</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token comment">//接收子组件传递过来的数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 父组件向子组件传递数据 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son1</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:age</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son1</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!-- 子组件向父组件传递数据 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son2</span> <span class="token attr-name">SubData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>some other data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@SubClick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SubClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Son2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="son1组件-props-父子通信-1" tabindex="-1"><a class="header-anchor" href="#son1组件-props-父子通信-1" aria-hidden="true">#</a> son1组件-props-父子通信</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">//接收props参数</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> Number
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  {{props.name}}
  {{props.age}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="son2组件-context-子父通信-1" tabindex="-1"><a class="header-anchor" href="#son2组件-context-子父通信-1" aria-hidden="true">#</a> son2组件-context-子父通信</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> useSlots<span class="token punctuation">,</span> useAttrs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> attrs <span class="token operator">=</span> <span class="token function">useAttrs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> slots <span class="token operator">=</span> <span class="token function">useSlots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 获取组件上的属性</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>attrs<span class="token punctuation">)</span>

  <span class="token comment">// 获取slot插槽的节点</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>slots<span class="token punctuation">)</span>

  <span class="token comment">// emit方法(子组件向父组件传递数据)</span>
  <span class="token keyword">const</span> emit <span class="token operator">=</span> <span class="token function">defineEmits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;SubClick&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">HandleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;SubClick&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vue3.x - this is subData&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 子组件向父组件传递数据 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HandleClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>子组件传递数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","09.html.vue"]]);export{k as default};
