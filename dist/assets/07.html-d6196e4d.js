import{_ as n,o as s,c as a,a as e}from"./app-4841f850.js";const p={},t=e(`<h3 id="创建对象的几种方式" tabindex="-1"><a class="header-anchor" href="#创建对象的几种方式" aria-hidden="true">#</a> 创建对象的几种方式</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">//正常字面量意思，进行对象的创建</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//new Object()：可以接收 number、string、boolean、object 等任意类型参数，可不传入参数，默认为 {}</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>

<span class="token comment">//如果是传入一个对象参数，那么可以理解为浅拷贝的意思</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">hello</span><span class="token operator">:</span> <span class="token string">&#39;你好&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">world</span><span class="token operator">:</span> <span class="token string">&#39;世界&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2 <span class="token operator">===</span> obj3<span class="token punctuation">)</span>

<span class="token comment">// Object.create( obj ) : obj 为必传参数，传参类型是对象类型。</span>
<span class="token comment">// 该创建对象方式，目的是创建继承 obj 的实例对象，或者说将新建对象的隐式原型 _proto_ 指向 obj</span>
<span class="token comment">// 即 obj 作为新建对象的原型对象。</span>
<span class="token keyword">function</span> <span class="token function">People</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token keyword">var</span> father <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">&#39;父对象&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>

<span class="token comment">//子类继承与父类</span>
<span class="token keyword">var</span> son <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>father<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>son<span class="token punctuation">.</span>__proto__ <span class="token operator">==</span> father<span class="token punctuation">)</span>

<span class="token comment">// instanceof 检测 People的构造函数 是否存在于son对象上</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>son <span class="token keyword">instanceof</span> <span class="token class-name">People</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性操作" tabindex="-1"><a class="header-anchor" href="#属性操作" aria-hidden="true">#</a> 属性操作</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">work</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>nickname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 正在工作</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//给对象添加新属性</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;money&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>  <span class="token comment">//设置属性的值</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//是否可修改属性的值；true：可修改属性的值；false：不可修改属性的值</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">// 冻结对象，不能添加属性以及无法对属性进行修改、删除等操作</span>
<span class="token comment">// Object.freeze(obj)</span>

<span class="token comment">// 修改属性</span>
obj<span class="token punctuation">.</span>money <span class="token operator">=</span> <span class="token number">2000</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">// hasOwnProperty 判断对象是否有某个属性(非继承)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">&#39;nickname&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//判断对象是否包含某个属性，会从对象的实例属性、继承属性里进行检测</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sex&#39;</span> <span class="token keyword">in</span> obj<span class="token punctuation">)</span>

<span class="token comment">// 返回一个数组，包含对象的所有属性和方法，不包含原型继承的属性和方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//返回对象中所有的属性</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//返回对象中所有属性的值</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// 删除属性 delete只能删除对象的自有属性，不能删除继承属性</span>
<span class="token comment">// 自身属性</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>money
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>money<span class="token punctuation">)</span>

<span class="token comment">// 不能删除继承属性</span>
obj<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>house <span class="token operator">=</span> <span class="token string">&#39;我的房子&#39;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>house
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>house<span class="token punctuation">)</span>

<span class="token comment">//对象合并</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> res <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问器getter-setter" tabindex="-1"><a class="header-anchor" href="#访问器getter-setter" aria-hidden="true">#</a> 访问器getter/setter</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 访问器，添加一个新属性</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;work&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_work <span class="token operator">||</span> <span class="token string">&#39;工作技能&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_work <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//我们自定义了一个work属性，使用_work来进行赋值，js中会自动关联 work = _work</span>
<span class="token comment">//为了防止报错：超出了最大调用堆栈大小（Maximum call stack size exceeded）</span>
<span class="token comment">//如果不理解可以把上方get/set方法中的 _work 改成 work 试一下效果</span>

<span class="token comment">//调用打印的时候，实际上调用就是 get 方法</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>work<span class="token punctuation">)</span>

<span class="token comment">//修改属性实际上调用的是 set 方法</span>
obj<span class="token punctuation">.</span>work <span class="token operator">=</span> <span class="token string">&#39;修改这个属性的值&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>work<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","07.html.vue"]]);export{r as default};
