import{_ as e,o as i,c as n,a as s}from"./app-a528498f.js";const l={},d=s(`<h3 id="nodejs使用async-await同步操作mysql" tabindex="-1"><a class="header-anchor" href="#nodejs使用async-await同步操作mysql" aria-hidden="true">#</a> nodejs使用async/await同步操作mysql</h3><blockquote><ul><li>npm install mysql --save</li></ul></blockquote><h3 id="创建mysql连接" tabindex="-1"><a class="header-anchor" href="#创建mysql连接" aria-hidden="true">#</a> 创建mysql连接</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const mysql      = require(&#39;mysql&#39;)

const connection = mysql.createConnection({
  host     : &#39;127.0.0.1&#39;,   // 数据库地址
  user     : &#39;root&#39;,    // 数据库用户
  password : &#39;123456&#39;   // 数据库密码
  database : &#39;my_database&#39;  // 选中数据库
})

// 连接数据库 这一步不是必须的 因为在query的时候会默认连接
connection.connect((err) =&gt; {
    // 如果在这一步抛出错误 请检查数据库配置  比如权限 选中数据库是否存在等等..
    if (err) return console.log(&#39;数据库连接失败&#39;, err.message);
    console.log(&#39;数据库连接成功&#39;);
})

// 执行sql脚本对数据库进行读写 
connection.query(&#39;SELECT * FROM my_table&#39;,  (error, results, fields) =&gt; {
  if (error) throw error
  // connected! 

  // 结束会话
  connection.release() 
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：一个事件就有一个从开始到结束的过程，数据库会话操作执行完后，就需要关闭掉，以免占用连接资源。</p><h3 id="创建数据连接池" tabindex="-1"><a class="header-anchor" href="#创建数据连接池" aria-hidden="true">#</a> 创建数据连接池</h3><p>一般情况下，我们不会按照上面的做法，因为一般操作数据库是很复杂的读写过程，不只是一个会话，如果直接用会话操作，就需要每次会话都要配置连接参数，所以这时候就需要连接池管理会话(如果使用MongoDB则无需担心这些问题mongo会管理自己的连接集合，或连接&quot;池&quot;)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const mysql = require(&#39;mysql&#39;)

// 创建数据池
const pool  = mysql.createPool({
  host     : &#39;127.0.0.1&#39;,   // 数据库地址
  user     : &#39;root&#39;,    // 数据库用户
  password : &#39;123456&#39;   // 数据库密码
  database : &#39;my_database&#39;  // 选中数据库
})

// 在数据池中进行会话操作
pool.getConnection(function(err, connection) {

  connection.query(&#39;SELECT * FROM my_table&#39;,  (error, results, fields) =&gt; {

    // 结束会话
    connection.release();

    // 如果有错误就抛出
    if (error) throw error;
  })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装mysql请求对象" tabindex="-1"><a class="header-anchor" href="#封装mysql请求对象" aria-hidden="true">#</a> 封装mysql请求对象</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let mysql = require(&#39;node-mysql-promise&#39;)

class DB
{
  //构造函数
  constructor()
  {
    this.pool = mysql.createConnection({
      host: &quot;localhost&quot;,
      user: &quot;root&quot;,
      password: &quot;root&quot;,
      database: &quot;book&quot;,
      tablePrefix: &quot;pre_&quot;,
      logSql: true, //是否控制台输出sql语句
    })
  }

  table($table)
  {
    this.$table = $table
    return this
  }

  field($field = &quot;&quot;)
  {
    this.$field = $field
    return this
  }

  where($where = 1)
  {
    this.$where = $where
    return this
  }

  limit($limit = null)
  {
    this.$limit = $limit
    return this
  }

  select()
  {
    //返回一个 Promise
    return new Promise((resolve, reject) =&gt; {
      this.pool.table(this.$table).field(this.$field).where(this.$where).limit(this.$limit).select().then((success) =&gt; {
        //返回成功的数据
        resolve(success)
      }).catch((e) =&gt; {
        reject(e)
      })
    })
    
  }

  find() {
    //返回一个 Promise
    return new Promise((resolve, reject) =&gt; {
      this.pool.table(this.$table).field(this.$field).where(this.$where).find().then((success) =&gt; {
        //返回成功的数据
        resolve(success)
      }).catch((e) =&gt; {
        reject(e)
      })
    })

  }

  count() {
    //返回一个 Promise
    return new Promise((resolve, reject) =&gt; {
      this.pool.table(this.$table).where(this.$where).count(&#39;id&#39;).then((success) =&gt; {
        //返回成功的数据
        resolve(success)
      }).catch((e) =&gt; {
        reject(e)
      })
    })

  }
}

let db = new DB()

module.exports = db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),r=[d];function v(a,c){return i(),n("div",null,r)}const t=e(l,[["render",v],["__file","nodejsshiyongasync_awaittongbucaozuomysql.html.vue"]]);export{t as default};
