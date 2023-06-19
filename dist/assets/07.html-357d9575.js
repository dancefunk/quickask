import{_ as e,o as d,c as i,a}from"./app-c220f801.js";const n={},t=a(`<h3 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h3><h1 id="使用mongo命令行更新数据" tabindex="-1"><a class="header-anchor" href="#使用mongo命令行更新数据" aria-hidden="true">#</a> 使用mongo命令行更新数据</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>使用<code>update()</code>方法更新文档。这个方法接收以下参数：</p><ul><li>一个方档匹配的过滤器，用于过滤要更新的文档</li><li>一个用来执行修改操作的更新文档</li><li>一个可选的参数</li></ul><p>指定过滤器和指定查询的时候是一样的。<code>update()</code>方法默认只更新单个文档，使用<code>multi</code>可选参数指定更新所有匹配的文档。</p><p>不能更新文档的<code>_id</code>字段。</p><h2 id="更新指定字段" tabindex="-1"><a class="header-anchor" href="#更新指定字段" aria-hidden="true">#</a> 更新指定字段</h2><p>要改变某个字段的值，MongoDB提供了更新操作，比如<code>$set</code>用来修改值。如果字段不存在，<code>$set</code>会创建这个字段。</p><h2 id="更新顶级字段" tabindex="-1"><a class="header-anchor" href="#更新顶级字段" aria-hidden="true">#</a> 更新顶级字段</h2><p>下面的操作更新<code>name</code>字段值为&quot;Juni&quot;的第一个文档，使用<code>$set</code>操作更新cuisine字段，使用<code>$currentDate</code>操作更新lastModified字段。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.update(
    { &quot;name&quot; : &quot;Juni&quot; },
    {
      $set: { &quot;cuisine&quot;: &quot;American (New)&quot; },
      $currentDate: { &quot;lastModified&quot;: true }
    }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新操作会返回一个<code>WriteResult</code>对象，它包含更新操作返回的一些状态信息。</p><h2 id="更新内嵌文档字段" tabindex="-1"><a class="header-anchor" href="#更新内嵌文档字段" aria-hidden="true">#</a> 更新内嵌文档字段</h2><p>更新内嵌文档的字段，需要使用“.”号。如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.update(
  { &quot;restaurant_id&quot; : &quot;41156888&quot; },
  { $set: { &quot;address.street&quot;: &quot;East 31st Street&quot; } }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更新多个文档" tabindex="-1"><a class="header-anchor" href="#更新多个文档" aria-hidden="true">#</a> 更新多个文档</h2><p>默认地，<code>update()</code>方法只更新一个文档。如果要更新多个文档，需要指定<code>multi</code>可选参数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.update(
  { &quot;address.zipcode&quot;: &quot;10016&quot;, cuisine: &quot;Other&quot; },
  {
    $set: { cuisine: &quot;Category To Be Determined&quot; },
    $currentDate: { &quot;lastModified&quot;: true }
  },
  { multi: true}
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换文档" tabindex="-1"><a class="header-anchor" href="#替换文档" aria-hidden="true">#</a> 替换文档</h2><p>要替换一个文档，只需要把一个新的文档传递给<code>update()</code>的第二个参数，并且不需要包含<code>_id</code>字段。如果包含<code>_id</code>字段，只保证跟原文档是同一个值。用于替换的文档可以跟原文档具有完全不同的字段。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.update(
   { &quot;restaurant_id&quot; : &quot;41704620&quot; },
   {
     &quot;name&quot; : &quot;Vella 2&quot;,
     &quot;address&quot; : {
              &quot;coord&quot; : [ -73.9557413, 40.7720266 ],
              &quot;building&quot; : &quot;1480&quot;,
              &quot;street&quot; : &quot;2 Avenue&quot;,
              &quot;zipcode&quot; : &quot;10075&quot;
     }
   }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),s=[t];function u(r,o){return d(),i("div",null,s)}const l=e(n,[["render",u],["__file","07.html.vue"]]);export{l as default};
