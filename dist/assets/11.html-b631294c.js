import{_ as o,r,o as a,c as s,b as n,d as e,e as t,a as d}from"./app-d0ac87ef.js";const l={},c=d('<h3 id="原子性和事务" tabindex="-1"><a class="header-anchor" href="#原子性和事务" aria-hidden="true">#</a> 原子性和事务</h3><h1 id="mongodb原子性和事务" tabindex="-1"><a class="header-anchor" href="#mongodb原子性和事务" aria-hidden="true">#</a> MongoDB原子性和事务</h1><p>在MongoDB中，写操作的原子性是在<code>document</code>级别上的，即使修改的是文档中的内嵌部分，写锁的级别也是<code>document</code>上。</p><p>当一个写操作要修改多个文档，每个文档的修改是原子性的。整个的写操作并不是原子性的，它可能和其他写操作产生交织。然而你可以使用<code>$isolated</code>隔离操作符来限制写操作，让它不与其他写操作交织。 不隔离性能更高，但是会产生数据的不确定性，隔离写操作，事务性更好。MongoDB把这个级别完全由用户控制。</p><h1 id="隔离写操作" tabindex="-1"><a class="header-anchor" href="#隔离写操作" aria-hidden="true">#</a> 隔离写操作</h1><p>MongoDB使用<code>$isolated</code>操作符来隔离写操作。如果一个写操作要更新多个文档，它能防止其他进程与本次写操作交错。直到这个写操作完成，其他进程才能写。</p><p>但是，<code>$isolated</code>算不上一个事务，如果在写的过程中发生错误，MongoDB并不会回滚已经写的数据。<code>$isolated</code>也不能在分片集群上工作。</p><p>特性：</p><ul><li>隔离不支持分片集群</li><li>不支持“all-or-nothing”特性</li><li>MongoDB2.2版本后<code>$isolated</code>被替换成<code>$atomic</code></li></ul><h1 id="类事务语法" tabindex="-1"><a class="header-anchor" href="#类事务语法" aria-hidden="true">#</a> 类事务语法</h1>',10),u={href:"http://docs.mongodb.org/manual/tutorial/perform-two-phase-commits",target:"_blank",rel:"noopener noreferrer"},v=d(`<p>#并发控制#</p><p>并发控制允许多个应用层程序同时访问数据库，而不引起数据不一致或冲突。</p><p>MongoDB中提到两种技术来解决这个问题。第一种是唯一索引，第二种是叫<code>Update if Current</code>。</p><p>用唯一索引来防止多个进程重复插入或者更新导致的重复的值。 <code>Update if Current</code>意思是说在更新数据的时候，在更新条件里给定一个期望的值（这个值是先查询出来的），用来防止在更新之前其他进程已经将此值更新。看一个例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var myDocument = db.products.findOne( { sku: &quot;abc123&quot; } );

if ( myDocument ) {
   var oldQuantity = myDocument.quantity;
   var oldReordered = myDocument.reordered;

   var results = db.products.update(
      {
        _id: myDocument._id,
        quantity: oldQuantity,
        reordered: oldReordered
      },
      {
        $inc: { quantity: 50 },
        $set: { reordered: true }
      }
   )

   if ( results.hasWriteError() ) {
      print( &quot;unexpected error updating document: &quot; + tojson(results) );
   }
   else if ( results.nMatched === 0 ) {
      print( &quot;No matching document for &quot; +
             &quot;{ _id: &quot;+ myDocument._id.toString() +
             &quot;, quantity: &quot; + oldQuantity +
             &quot;, reordered: &quot; + oldReordered
             + &quot; } &quot;
      );
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，在findAndModify()函数中:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.people.findAndModify({
    query: { name: &quot;Andy&quot; },
    sort: { rating: 1 },
    update: { $inc: { score: 1 } },
    upsert: true
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有多个进程同时调用此函数，这些进程都完成了查询阶段，如果<code>name</code>字段上没有唯一索引，upsert阶段的操作，多个进程可能都会执行。导致写入重复的文档。</p>`,8);function m(b,p){const i=r("ExternalLinkIcon");return a(),s("div",null,[c,n("p",null,[e("MongoDB并不支持关系型数据库中的那种事务特性，为了性能着想，它把这个特性交给程序员去实现。这就是MongoDB官方所讲的"),n("a",u,[e("Two Phase Commits"),t(i)]),e("两阶段提交。这个技术虽然在一定程度上能保证数据最终的一致性，但是应用程序还是可能会读到提交或者回滚过程中的中间数据。对于这个技术如果有兴趣可以读一读原文。")]),v])}const g=o(l,[["render",m],["__file","11.html.vue"]]);export{g as default};
