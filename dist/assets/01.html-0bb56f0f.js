import{_ as e,o as n,c as i,a as t}from"./app-b57ef521.js";const o={},d=t(`<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3><h1 id="mongodb简介" tabindex="-1"><a class="header-anchor" href="#mongodb简介" aria-hidden="true">#</a> MongoDB简介</h1><p>MongoDB是一个开源的文档类型数据库，它具有高性能，高可用，可自动收缩的特性。MongoDB能够避免传统的ORM映射从而有助于开发。</p><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2><p>在MongoDB中，一行纪录就是一个文档，它是一个由键值对构成的数据结构，MongoDB文档与JSON对象类似。键的值可以包含其他的文档，数组，文档数组。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
   &quot;_id&quot; : ObjectId(&quot;54c955492b7c8eb21818bd09&quot;),
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h2><p>MongoDB在集合中存储文档。集合类似于关系数据库中的表。然而，与表不同的是集合不要求它里面的文档具有相同的结构。</p><p>在MongoDB中，存储在集合中的文档必然有一个唯一的_id字段作为主键。</p>`,9),u=[d];function a(s,l){return n(),i("div",null,u)}const c=e(o,[["render",a],["__file","01.html.vue"]]);export{c as default};
