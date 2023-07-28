import{_ as e,o as t,c as o,a as u}from"./app-110372b4.js";const d={},n=u(`<h3 id="数据聚集" tabindex="-1"><a class="header-anchor" href="#数据聚集" aria-hidden="true">#</a> 数据聚集</h3><h1 id="使用mongo命令行进行数据聚合" tabindex="-1"><a class="header-anchor" href="#使用mongo命令行进行数据聚合" aria-hidden="true">#</a> 使用mongo命令行进行数据聚合</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>MongoDB可以执行数据聚合，比如按指定Key分组，计算总数，求不同分组的值。</p><p>使用<code>aggregate()</code>方法执行一个基于步骤的聚合操作（类似于Linux管道）。<code>aggregate()</code>接收一个步骤数组成为它的参数，每个步骤描述对数据处理的操作。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.aggregate( [ &lt;stage1&gt;, &lt;stage2&gt;, ... ] )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="按字段分组并计算总数" tabindex="-1"><a class="header-anchor" href="#按字段分组并计算总数" aria-hidden="true">#</a> 按字段分组并计算总数</h2><p>使用$group管理操作符进行分组操作。在$group操作符中，使用<code>_id</code>来说明分组的key。$gropu管理操作使用$+字段名的方式来访问分组Key的。可以在每个分组管理操作中进行分组计算。下面的例子把restaurants集合按borough字段分组，并使用$sum操作符计算每个分组的文档数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.aggregate(
   [
     { $group: { &quot;_id&quot;: &quot;$borough&quot;, &quot;count&quot;: { $sum: 1 } } }
   ]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集包含以下文档：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ &quot;_id&quot; : &quot;Staten Island&quot;, &quot;count&quot; : 969 }
{ &quot;_id&quot; : &quot;Brooklyn&quot;, &quot;count&quot; : 6086 }
{ &quot;_id&quot; : &quot;Manhattan&quot;, &quot;count&quot; : 10259 }
{ &quot;_id&quot; : &quot;Queens&quot;, &quot;count&quot; : 5656 }
{ &quot;_id&quot; : &quot;Bronx&quot;, &quot;count&quot; : 2338 }
{ &quot;_id&quot; : &quot;Missing&quot;, &quot;count&quot; : 51 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>_id</code>字段包含了不同的borough值，它也是分组参照的Key值。</p><h2 id="过滤并分组文档" tabindex="-1"><a class="header-anchor" href="#过滤并分组文档" aria-hidden="true">#</a> 过滤并分组文档</h2><p>使用<code>$match</code>管道操作符过滤文档。<code>$match</code>使用的是MongoDB查询语法。下面的管道使用<code>$macth</code>查询borough字段值为&quot;Queens&quot;并且cuisine字段值为&quot;Brazilian&quot;的所有文档。然后<code>$group</code>分组管理操作符把匹配的所有文档按address.zipcode字段每组，并且使用<code>$sum</code>计算器计算总数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.aggregate(
   [
     { $match: { &quot;borough&quot;: &quot;Queens&quot;, &quot;cuisine&quot;: &quot;Brazilian&quot; } },
     { $group: { &quot;_id&quot;: &quot;$address.zipcode&quot; , &quot;count&quot;: { $sum: 1 } } }
   ]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集包含的文档如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ &quot;_id&quot; : &quot;11368&quot;, &quot;count&quot; : 1 }
{ &quot;_id&quot; : &quot;11106&quot;, &quot;count&quot; : 3 }
{ &quot;_id&quot; : &quot;11377&quot;, &quot;count&quot; : 1 }
{ &quot;_id&quot; : &quot;11103&quot;, &quot;count&quot; : 1 }
{ &quot;_id&quot; : &quot;11101&quot;, &quot;count&quot; : 2 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>_id</code>字段包含不同的zipcode的值。它是分组的Key。</p>`,18),i=[n];function a(s,c){return t(),o("div",null,i)}const l=e(d,[["render",a],["__file","09.html.vue"]]);export{l as default};
