import{_ as i,r as o,o as a,c as d,b as n,d as e,e as s,a as u}from"./app-3c87854f.js";const r={},l=u(`<h3 id="使用mongo命令行插入数据" tabindex="-1"><a class="header-anchor" href="#使用mongo命令行插入数据" aria-hidden="true">#</a> 使用mongo命令行插入数据</h3><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>在MongoDB中，你可以使用<code>insert()</code>方法插入一个文档到MongoDB集合中，如果此集合不存在，MongoDB会自动为你创建。</p><h2 id="插入文档" tabindex="-1"><a class="header-anchor" href="#插入文档" aria-hidden="true">#</a> 插入文档</h2><p>先用mongo命令行连接到一个MongoDB实例，转到test数据库。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入一个文档到restaurants集中，如果restaurants集合不存在，这个操作会先创建一个restaurants集合。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.insert(
   {
      &quot;address&quot; : {
         &quot;street&quot; : &quot;2 Avenue&quot;,
         &quot;zipcode&quot; : &quot;10075&quot;,
         &quot;building&quot; : &quot;1480&quot;,
         &quot;coord&quot; : [ -73.9557413, 40.7720266 ],
      },
      &quot;borough&quot; : &quot;Manhattan&quot;,
      &quot;cuisine&quot; : &quot;Italian&quot;,
      &quot;grades&quot; : [
         {
            &quot;date&quot; : ISODate(&quot;2014-10-01T00:00:00Z&quot;),
            &quot;grade&quot; : &quot;A&quot;,
            &quot;score&quot; : 11
         },
         {
            &quot;date&quot; : ISODate(&quot;2014-01-16T00:00:00Z&quot;),
            &quot;grade&quot; : &quot;B&quot;,
            &quot;score&quot; : 17
         }
      ],
      &quot;name&quot; : &quot;Vella&quot;,
      &quot;restaurant_id&quot; : &quot;41704620&quot;
   }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，命令行的执行，其实就是javascript函数的调用。函数调用后返回一个 <code>WriteResult</code>对象，它包含操作的返回状态信息。</p>`,9),c=n("code",null,"_id",-1),v={href:"http://docs.mongodb.org/manual/reference/object-id/",target:"_blank",rel:"noopener noreferrer"};function q(m,b){const t=o("ExternalLinkIcon");return a(),d("div",null,[l,n("p",null,[e("如果插入的文档不包含"),c,e("字段，mongo命令行会自动加上这个字段到文档中，并且这个字段的值是根据"),n("a",v,[e("ObjectId"),s(t)]),e("生成。")])])}const g=i(r,[["render",q],["__file","05.html.vue"]]);export{g as default};
