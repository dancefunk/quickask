import{_ as a,o as n,c as s,a as t}from"./app-6325e707.js";const p={},e=t(`<h3 id="html列表" tabindex="-1"><a class="header-anchor" href="#html列表" aria-hidden="true">#</a> HTML列表</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>无序列表、有序列表、定义列表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h4><table><thead><tr><th>属性</th><th>属性值</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>disc、circle、square</td><td>用来设置项目前面的标记</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h4><table><thead><tr><th>属性</th><th>属性值</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td>1、 a 、 A、i、I</td><td>用来设置项目前面的标记</td></tr><tr><td>start</td><td>数值</td><td>从哪里开始</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="定义列表" tabindex="-1"><a class="header-anchor" href="#定义列表" aria-hidden="true">#</a> 定义列表</h4><p>定义列表用来组织术语和它们的定义<br> 任何信息如果包含多个术语和相对应的解释,都可以使用定义列表进行组织</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>HTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>html 是超文本标记语言<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">&gt;</span></span>XHTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>可扩展超文本置标语言 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">&gt;</span></span>表现形式与超文本置标语言(HTML)类似,不过语法上更加严格 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="html表格" tabindex="-1"><a class="header-anchor" href="#html表格" aria-hidden="true">#</a> HTML表格</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>表格由 &lt;table&gt; 标签以及一个或多个 tr、th或td 元素组成   
单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>width</td><td>指定表格的宽度</td></tr><tr><td>height</td><td>表格的高度</td></tr><tr><td>border</td><td>指定表格边框的宽度</td></tr><tr><td>cellpadding</td><td>指定边框与内容之间的空白</td></tr><tr><td>cellspacing</td><td>指定单元格之间的空白</td></tr><tr><td>align</td><td>指定对齐方式</td></tr><tr><td>valign</td><td>垂直排列方式</td></tr><tr><td>colspan</td><td>合并列单元格</td></tr><tr><td>rowspan</td><td>合并行单元格</td></tr></tbody></table><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>row 1, cell 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>row 1, cell 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>row 2, cell 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>row 2, cell 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">&gt;</span></span> 定义表格
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span> 定义表头
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span> 定义表格的行
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span> 定义表格单元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[e];function c(o,i){return n(),s("div",null,l)}const d=a(p,[["render",c],["__file","03.html.vue"]]);export{d as default};