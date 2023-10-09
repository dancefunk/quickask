import{_ as n,o as s,c as a,a as t}from"./app-88c1fa71.js";const e={},l=t(`<h3 id="css选择符" tabindex="-1"><a class="header-anchor" href="#css选择符" aria-hidden="true">#</a> CSS选择符</h3><ul><li><strong>元素选择符</strong></li><li><strong>关系选择符</strong></li><li><strong>伪类选择符</strong></li><li><strong>属性选择符</strong></li><li><strong>伪对象选择符</strong></li></ul><h3 id="元素选择符" tabindex="-1"><a class="header-anchor" href="#元素选择符" aria-hidden="true">#</a> 元素选择符</h3><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">通配选择符</td><td style="text-align:left;"><code>*</code></td></tr><tr><td style="text-align:left;">类型选择符</td><td style="text-align:left;"><code>body </code></td></tr><tr><td style="text-align:left;">群组选择符</td><td style="text-align:left;"><code>body,p,span</code></td></tr><tr><td style="text-align:left;">ID选择符</td><td style="text-align:left;"><code>#id</code></td></tr><tr><td style="text-align:left;">CLASS选择符</td><td style="text-align:left;"><code>.class</code></td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 通配选择符 */</span>
<span class="token selector">*</span><span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token comment">/* 类型选择符 */</span>
<span class="token selector">body</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token selector">h1</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token selector">p</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>


<span class="token comment">/* 群组选择符 */</span>
<span class="token selector">h1,h2, h3, p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span> <span class="token property">font-family</span><span class="token punctuation">:</span>arial<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token comment">/* ID选择符 */</span>
<span class="token selector">&lt;style&gt;
#p1</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span> <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span><span class="token punctuation">}</span>
&lt;/style&gt;
 
&lt;p id=<span class="token string">&quot;p1&quot;</span>&gt; 这是一个段落 &lt;/p&gt;


<span class="token comment">/* CLASS选择符 */</span>
<span class="token selector">&lt;style&gt;
.p1</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span>12px<span class="token punctuation">;</span> <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span><span class="token punctuation">}</span>
&lt;/style&gt;

&lt;p class=<span class="token string">&quot;p1&quot;</span>&gt; 这是一个段落 &lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系选择符" tabindex="-1"><a class="header-anchor" href="#关系选择符" aria-hidden="true">#</a> 关系选择符</h3><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">包含选择符</td><td style="text-align:left;">A   B</td></tr><tr><td style="text-align:left;">子选择符</td><td style="text-align:left;">A &gt; B</td></tr><tr><td style="text-align:left;">相邻选择符</td><td style="text-align:left;">A + B</td></tr><tr><td style="text-align:left;">兄弟选择符</td><td style="text-align:left;">A ~ B</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 包含选择符 */</span>
<span class="token selector">.son1 a</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span> 

<span class="token comment">/* 子选择符 */</span>
<span class="token selector">.son1&gt;a</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span> 

<span class="token comment">/* 相邻选择符 */</span>
<span class="token selector">.son1+div</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token comment">/* 兄弟选择符*/</span>
<span class="token selector">.son1~div</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>father<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>son1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grandson<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>grandson<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>son2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>son3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>son3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪类选择符" tabindex="-1"><a class="header-anchor" href="#伪类选择符" aria-hidden="true">#</a> 伪类选择符</h3><table><thead><tr><th style="text-align:left;">选择符</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">link</td><td style="text-align:left;">未访问的链接</td></tr><tr><td style="text-align:left;">visited</td><td style="text-align:left;">已访问的链接</td></tr><tr><td style="text-align:left;">hover</td><td style="text-align:left;">鼠标在链接上</td></tr><tr><td style="text-align:left;">active</td><td style="text-align:left;">激活链接</td></tr><tr><td style="text-align:left;">first-child</td><td style="text-align:left;">获取第一个元素</td></tr><tr><td style="text-align:left;">last-child</td><td style="text-align:left;">获取最后一个元素</td></tr><tr><td style="text-align:left;">nth-child(n)</td><td style="text-align:left;">获取第n个元素</td></tr><tr><td style="text-align:left;">first-of-type</td><td style="text-align:left;">获取同类型中的第一个元素</td></tr><tr><td style="text-align:left;">last-of-type</td><td style="text-align:left;">获取同类型中的最后一个元素</td></tr><tr><td style="text-align:left;">nth-of-type(n)</td><td style="text-align:left;">获取同类型中的第n个元素</td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;">元素在产生输入焦点时的样式</td></tr><tr><td style="text-align:left;">checked</td><td style="text-align:left;">匹配被选中元素</td></tr></tbody></table><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* link 未访问的链接 */</span>
<span class="token selector">a:link</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #FF0000<span class="token punctuation">;</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">}</span> 


<span class="token comment">/* visited 已访问的链接 */</span>
<span class="token selector">a:visited</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #00FF00<span class="token punctuation">;</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">}</span> 


<span class="token comment">/* hover 鼠标在链接上 */</span>
<span class="token selector">a:hover</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #FF00FF<span class="token punctuation">;</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">}</span>  


<span class="token comment">/* active 激活链接 */</span>
<span class="token selector">a:active</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #0000FF<span class="token punctuation">;</span> <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">}</span>  

<span class="token comment">/* first-child 获取第一个元素 */</span>
<span class="token selector">li:first-child</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token comment">/* last-child 获取最后一个元素 */</span>
<span class="token selector">li:last-child</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token comment">/* nth-child(n) 获取第n个元素 */</span>
<span class="token selector">li:nth-child(2)</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token comment">/* first-of-type 获取同类型中的第一个元素 */</span>
<span class="token selector">p:first-of-type</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;test&quot;</span>&gt;
	&lt;div&gt;我是一个div元素&lt;/div&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
&lt;/div&gt;



<span class="token comment">/* last-of-type 获取同类型中的最后一个元素 */</span>
<span class="token selector">p:last-of-type</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;test&quot;</span>&gt;
	&lt;div&gt;我是一个div元素&lt;/div&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
&lt;/div&gt;



<span class="token comment">/* nth-of-type(n) 获取同类型中的第n个元素 */</span>
<span class="token selector">p:nth-of-type(2)</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span><span class="token punctuation">}</span>

&lt;div class=<span class="token string">&quot;test&quot;</span>&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
	&lt;div&gt;我是一个div元素&lt;/div&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
	&lt;p&gt;我是一个p元素&lt;/p&gt;
&lt;/div&gt;


<span class="token comment">/* focus 元素在产生输入焦点时的样式 */</span>
<span class="token selector">input[type=&quot;text&quot;]:focus</span> <span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span> #f6f6f6<span class="token punctuation">;</span><span class="token punctuation">}</span>


<span class="token comment">/* checked 匹配被选中元素 */</span>
<span class="token selector">&lt;style&gt;
    input[name=&quot;love&quot;]:checked + label</span><span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span>white<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span>
        <span class="token property">font-weight</span><span class="token punctuation">:</span>bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
&lt;/style&gt;


&lt;input type=<span class="token string">&quot;checkbox&quot;</span> name=<span class="token string">&quot;love&quot;</span> id=<span class="token string">&quot;book&quot;</span> value=<span class="token string">&quot;book&quot;</span> /&gt;
&lt;label for=<span class="token string">&quot;book&quot;</span>&gt;书&lt;/label&gt;
&lt;br /&gt;

&lt;input type=<span class="token string">&quot;checkbox&quot;</span> name=<span class="token string">&quot;love&quot;</span> id=<span class="token string">&quot;music&quot;</span> value=<span class="token string">&quot;music&quot;</span> /&gt;
&lt;label for=<span class="token string">&quot;music&quot;</span>&gt;音乐&lt;/label&gt;
&lt;br /&gt;

&lt;input type=<span class="token string">&quot;checkbox&quot;</span> name=<span class="token string">&quot;love&quot;</span> id=<span class="token string">&quot;movie&quot;</span> value=<span class="token string">&quot;movie&quot;</span> /&gt;
&lt;label for=<span class="token string">&quot;movie&quot;</span>&gt;电影&lt;/label&gt;
&lt;br /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性选择符" tabindex="-1"><a class="header-anchor" href="#属性选择符" aria-hidden="true">#</a> 属性选择符</h3><table><thead><tr><th style="text-align:left;">选择符</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>[attr]</code></td><td style="text-align:left;">具有attr属性的元素</td></tr><tr><td style="text-align:left;"><code>[attr=&quot;val&quot;]</code></td><td style="text-align:left;">属性值等于val的元素</td></tr><tr><td style="text-align:left;"><code>[attr^=&quot;val&quot;]</code></td><td style="text-align:left;">属性值为以val开头的元素</td></tr><tr><td style="text-align:left;"><code>[attr$=&quot;val&quot;]</code></td><td style="text-align:left;">属性值为以val结尾的元素</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">p[class]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>green<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p[class=&quot;qq&quot;]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">p[class^=&quot;aa&quot;]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>yellow<span class="token punctuation">;</span><span class="token punctuation">}</span>       
<span class="token selector">p[class$=&quot;abc&quot;]</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试数据1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>qq<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试数据2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aa123<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试数据4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test-abc<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>测试数据5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="伪对象选择符" tabindex="-1"><a class="header-anchor" href="#伪对象选择符" aria-hidden="true">#</a> 伪对象选择符</h3><table><thead><tr><th style="text-align:left;">选择符</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">before</td><td style="text-align:left;">元素前追加</td></tr><tr><td style="text-align:left;">after</td><td style="text-align:left;">元素后追加</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">input提示文字的样式</td></tr><tr><td style="text-align:left;">selection</td><td style="text-align:left;">元素被选中时的颜色</td></tr></tbody></table><h4 id="before-after" tabindex="-1"><a class="header-anchor" href="#before-after" aria-hidden="true">#</a> before/after</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.t2::before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token selector">.t2::after</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&#39;123&#39;</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
 <span class="token selector">input::-webkit-input-placeholder</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span><span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>测试<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="selection" tabindex="-1"><a class="header-anchor" href="#selection" aria-hidden="true">#</a> selection</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">p::selection</span><span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #E13300<span class="token punctuation">;</span> <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>请使用鼠标选取我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>请使用鼠标选取我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="选择符优先权" tabindex="-1"><a class="header-anchor" href="#选择符优先权" aria-hidden="true">#</a> 选择符优先权</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>!important &gt; 行内样式 &gt; ID选择器 &gt; CLASS选择器 &gt; 标签 &gt; 通配符 &gt; 继承 &gt; 浏览器默认属性

CSS样式的层级越深执行的权限就越大        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),p=[l];function c(o,i){return s(),a("div",null,p)}const d=n(e,[["render",c],["__file","02.html.vue"]]);export{d as default};
