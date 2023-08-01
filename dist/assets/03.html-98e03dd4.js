import{_ as e,o,c as t,a as d}from"./app-47c2ac71.js";const u={},a=d(`<h3 id="导入数据" tabindex="-1"><a class="header-anchor" href="#导入数据" aria-hidden="true">#</a> 导入数据</h3><p>本教程使用test数据库和restaurants集合为例进行讲解。下面是restaurants的一个文档结构示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;address&quot;: {
     &quot;building&quot;: &quot;1007&quot;,
     &quot;coord&quot;: [ -73.856077, 40.848447 ],
     &quot;street&quot;: &quot;Morris Park Ave&quot;,
     &quot;zipcode&quot;: &quot;10462&quot;
  },
  &quot;borough&quot;: &quot;Bronx&quot;,
  &quot;cuisine&quot;: &quot;Bakery&quot;,
  &quot;grades&quot;: [
     { &quot;date&quot;: { &quot;$date&quot;: 1393804800000 }, &quot;grade&quot;: &quot;A&quot;, &quot;score&quot;: 2 },
     { &quot;date&quot;: { &quot;$date&quot;: 1378857600000 }, &quot;grade&quot;: &quot;A&quot;, &quot;score&quot;: 6 },
     { &quot;date&quot;: { &quot;$date&quot;: 1358985600000 }, &quot;grade&quot;: &quot;A&quot;, &quot;score&quot;: 10 },
     { &quot;date&quot;: { &quot;$date&quot;: 1322006400000 }, &quot;grade&quot;: &quot;A&quot;, &quot;score&quot;: 9 },
     { &quot;date&quot;: { &quot;$date&quot;: 1299715200000 }, &quot;grade&quot;: &quot;B&quot;, &quot;score&quot;: 14 }
  ],
  &quot;name&quot;: &quot;Morris Park Bake Shop&quot;,
  &quot;restaurant_id&quot;: &quot;30075445&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入例子数据" tabindex="-1"><a class="header-anchor" href="#导入例子数据" aria-hidden="true">#</a> 导入例子数据</h2><p>在进行操作之前，我们需要例子数据，在这里下载数据文件<a href="../../../mdphoto/framework/mongodb/dataset.json">dataset.json</a>。</p><h2 id="导入数据到集合" tabindex="-1"><a class="header-anchor" href="#导入数据到集合" aria-hidden="true">#</a> 导入数据到集合</h2><p>在命令行中执行<code>mongoimport</code>命令将上面下载的数据文件中的数据导入到<code>test</code>数据库的<code>restaurants</code>集合中。如果此集合已经存在，下面的操作会先删除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongoimport --db test --collection restaurants --drop --file C:\\data\\dataset.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>mongoimport</code>命令连接到本机运行的<code>mongod</code>实例，如果要把数据导到不同主机，不同端口的实例，可以指定主机和端口，使用参数 <code>--host</code>和<code>--port</code>。</p><p>数据导入后，你可以用<code>mongo</code>命令连接到实例，使用<code>show dbs</code>，<code>use test</code>，<code>show collections</code>和<code>db.restaurants.find()</code>命令查看导入的数据。</p>`,10),n=[a];function s(i,r){return o(),t("div",null,n)}const q=e(u,[["render",s],["__file","03.html.vue"]]);export{q as default};
