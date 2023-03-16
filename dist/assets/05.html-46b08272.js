import{_ as n,p as i,q as e,Z as l}from"./framework-823c4b5a.js";const d={},s=l(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cnpm install mongodb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据库操作-curd" tabindex="-1"><a class="header-anchor" href="#数据库操作-curd" aria-hidden="true">#</a> 数据库操作(CURD)</h3><p>与 MySQL 不同的是 MongoDB 会自动创建数据库和集合，所以使用前我们不需要手动去创建。</p><h3 id="插入数据" tabindex="-1"><a class="header-anchor" href="#插入数据" aria-hidden="true">#</a> 插入数据</h3><blockquote><ul><li>以下实例我们连接数据库 demo 的 site 表，并插入两条数据：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var MongoClient = require(&#39;mongodb&#39;).MongoClient;
var DB_CONN_STR = &#39;mongodb://localhost:27017/demo&#39;; # 数据库为 demo
 
var insertData = function(db, callback) {  
    //连接到表 site
    var collection = db.collection(&#39;site&#39;);
    //插入数据
    var data = [{&quot;name&quot;:&quot;demo&quot;,&quot;url&quot;:&quot;www.demo.com&quot;},{&quot;name&quot;:&quot;demo&quot;,&quot;url&quot;:&quot;c.demo.com&quot;}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log(&#39;Error:&#39;+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log(&quot;连接成功！&quot;);
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>执行以下命令输出就结果为：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ node test.js
连接成功！
{ result: { ok: 1, n: 2 },
  ops: 
   [ { name: &#39;demo&#39;,
       url: &#39;www.demo.com&#39;,
       _id: 58c25e13a08de70d3b9d4116 },
     { name: &#39;demo&#39;,
       url: &#39;c.demo.com&#39;,
       _id: 58c25e13a08de70d3b9d4117 } ],
  insertedCount: 2,
  insertedIds: [ 58c25e13a08de70d3b9d4116, 58c25e13a08de70d3b9d4117 ] }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果来看，数据已插入成功。 我们也可以打开 MongoDB 的客户端查看数据，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; show dbs
admin   0.000GB
local   0.000GB
demo  0.000GB          # 自动创建了 demo 数据库
&gt; show tables
site                     # 自动创建了 site 集合（数据表）
&gt; db.site.find()         # 查看集合中的数据
{ &quot;_id&quot; : ObjectId(&quot;58c25f300cd56e0d7ddfc0c8&quot;), &quot;name&quot; : &quot;demo&quot;, &quot;url&quot; : &quot;www.demo.com&quot; }
{ &quot;_id&quot; : ObjectId(&quot;58c25f300cd56e0d7ddfc0c9&quot;), &quot;name&quot; : &quot;demo&quot;, &quot;url&quot; : &quot;c.demo.com&quot; }
&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询数据" tabindex="-1"><a class="header-anchor" href="#查询数据" aria-hidden="true">#</a> 查询数据</h3><blockquote><ul><li>以下实例搜索 name 为 &quot;demo&quot; 的实例：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var MongoClient = require(&#39;mongodb&#39;).MongoClient;
var DB_CONN_STR = &#39;mongodb://localhost:27017/demo&#39;;    
 
var selectData = function(db, callback) {  
  //连接到表  
  var collection = db.collection(&#39;site&#39;);
  //查询数据
  var whereStr = {&quot;name&quot;:&#39;demo&#39;};
  collection.find(whereStr).toArray(function(err, result) {
    if(err)
    {
      console.log(&#39;Error:&#39;+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log(&quot;连接成功！&quot;);
  selectData(db, function(result) {
    console.log(result);
    db.close();
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>执行以下命令输出就结果为：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>连接成功！
[ { _id: 58c25f300cd56e0d7ddfc0c8,
    name: &#39;demo&#39;,
    url: &#39;www.demo.com&#39; },
  { _id: 58c25f300cd56e0d7ddfc123,
    name: &#39;demo&#39;,
    url: &#39;www.demo.com&#39; },
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新数据" tabindex="-1"><a class="header-anchor" href="#更新数据" aria-hidden="true">#</a> 更新数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var MongoClient = require(&#39;mongodb&#39;).MongoClient;
var DB_CONN_STR = &#39;mongodb://localhost:27017/demo&#39;;    
 
var updateData = function(db, callback) {  
    //连接到表  
    var collection = db.collection(&#39;site&#39;);
    //更新数据
    var whereStr = {&quot;name&quot;:&#39;demo&#39;};
    var updateStr = {$set: { &quot;url&quot; : &quot;https://www.baidu.com&quot; }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log(&#39;Error:&#39;+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log(&quot;连接成功！&quot;);
    updateData(db, function(result) {
        console.log(result);
        db.close();
    });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>执行成功后，进入 mongo 管理工具查看数据已修改：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; db.site.find()
{ &quot;_id&quot; : ObjectId(&quot;58c25f300cd56e0d7ddfc0c8&quot;), &quot;name&quot; : &quot;demo&quot;, &quot;url&quot; : &quot;https://www.demo.com&quot; }
{ &quot;_id&quot; : ObjectId(&quot;58c25f300cd56e0d7ddfc0c9&quot;), &quot;name&quot; : &quot;demo&quot;, &quot;url&quot; : &quot;c.demo.com&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var MongoClient = require(&#39;mongodb&#39;).MongoClient;
var DB_CONN_STR = &#39;mongodb://localhost:27017/demo&#39;;    
 
var delData = function(db, callback) {  
  //连接到表  
  var collection = db.collection(&#39;site&#39;);
  //删除数据
  var whereStr = {&quot;name&quot;:&#39;demo&#39;};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log(&#39;Error:&#39;+ err);
      return;
    }     
    callback(result);
  });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log(&quot;连接成功！&quot;);
  delData(db, function(result) {
    console.log(result);
    db.close();
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>执行成功后，进入 mongo 管理工具查看数据已删除：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; db.site.find()
{ &quot;_id&quot; : ObjectId(&quot;58c25f300cd56e0d7ddfc0c8&quot;), &quot;name&quot; : &quot;demo&quot;, &quot;url&quot; : &quot;https://www.demo.com&quot; }
&gt; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongoose操作类-封装mongodb-可用于项目" tabindex="-1"><a class="header-anchor" href="#mongoose操作类-封装mongodb-可用于项目" aria-hidden="true">#</a> mongoose操作类(封装mongodb) 可用于项目</h3><blockquote><ul><li>新建database.js</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * mongoose操作类(封装mongodb)
 */

var fs = require(&#39;fs&#39;);
var path = require(&#39;path&#39;);
var mongoose = require(&#39;mongoose&#39;);
var logger = require(&#39;pomelo-logger&#39;).getLogger(&#39;mongodb-log&#39;);

var options = {
    db_user: &quot;&quot;,
    db_pwd: &quot;&quot;,
    db_host: &quot;localhost&quot;,
    db_port: 27017,
    db_name: &quot;blog&quot;
};

var dbURL = &quot;mongodb://&quot; + options.db_user + &quot;:&quot; + options.db_pwd + &quot;@&quot; + options.db_host + &quot;:&quot; + options.db_port + &quot;/&quot; + options.db_name;
mongoose.connect(dbURL);

mongoose.connection.on(&#39;connected&#39;, function (err) {
    if (err) logger.error(&#39;Database connection failure&#39;);
});

mongoose.connection.on(&#39;error&#39;, function (err) {
    logger.error(&#39;Mongoose connected error &#39; + err);
});

mongoose.connection.on(&#39;disconnected&#39;, function () {
    logger.error(&#39;Mongoose disconnected&#39;);
});

process.on(&#39;SIGINT&#39;, function () {
    mongoose.connection.close(function () {
        logger.info(&#39;Mongoose disconnected through app termination&#39;);
        process.exit(0);
    });
});

var DB = function () {
    this.mongoClient = {};
    var filename = path.join(path.dirname(__dirname).replace(&#39;app&#39;, &#39;&#39;), &#39;config/table.json&#39;);
    this.tabConf = JSON.parse(fs.readFileSync(path.normalize(filename)));
};

/**
 * 初始化mongoose model
 * @param table_name 表名称(集合名称)
 */
DB.prototype.getConnection = function (table_name) {
    if (!table_name) return;
    if (!this.tabConf[table_name]) {
        logger.error(&#39;No table structure&#39;);
        return false;
    }

    var client = this.mongoClient[table_name];
    if (!client) {
        //构建用户信息表结构
        var nodeSchema = new mongoose.Schema(this.tabConf[table_name]);

        //构建model
        client = mongoose.model(table_name, nodeSchema, table_name);

        this.mongoClient[table_name] = client;
    }
    return client;
};

/**
 * 保存数据
 * @param table_name 表名
 * @param fields 表数据
 * @param callback 回调方法
 */
DB.prototype.save = function (table_name, fields, callback) {
    if (!fields) {
        if (callback) callback({msg: &#39;Field is not allowed for null&#39;});
        return false;
    }

    var err_num = 0;
    for (var i in fields) {
        if (!this.tabConf[table_name][i]) err_num ++;
    }
    if (err_num &gt; 0) {
        if (callback) callback({msg: &#39;Wrong field name&#39;});
        return false;
    }

    var node_model = this.getConnection(table_name);
    var mongooseEntity = new node_model(fields);
    mongooseEntity.save(function (err, res) {
        if (err) {
            if (callback) callback(err);
        } else {
            if (callback) callback(null, res);
        }
    });
};

/**
 * 更新数据
 * @param table_name 表名
 * @param conditions 更新需要的条件 {_id: id, user_name: name}
 * @param update_fields 要更新的字段 {age: 21, sex: 1}
 * @param callback 回调方法
 */
DB.prototype.update = function (table_name, conditions, update_fields, callback) {
    if (!update_fields || !conditions) {
        if (callback) callback({msg: &#39;Parameter error&#39;});
        return;
    }
    var node_model = this.getConnection(table_name);
    node_model.update(conditions, {$set: update_fields}, {multi: true, upsert: true}, function (err, res) {
        if (err) {
            if (callback) callback(err);
        } else {
            if (callback) callback(null, res);
        }
    });
};

/**
 * 更新数据方法(带操作符的)
 * @param table_name 数据表名
 * @param conditions 更新条件 {_id: id, user_name: name}
 * @param update_fields 更新的操作符 {$set: {id: 123}}
 * @param callback 回调方法
 */
DB.prototype.updateData = function (table_name, conditions, update_fields, callback) {
    if (!update_fields || !conditions) {
        if (callback) callback({msg: &#39;Parameter error&#39;});
        return;
    }
    var node_model = this.getConnection(table_name);
    node_model.findOneAndUpdate(conditions, update_fields, {multi: true, upsert: true}, function (err, data) {
        if (callback) callback(err, data);
    });
};

/**
 * 删除数据
 * @param table_name 表名
 * @param conditions 删除需要的条件 {_id: id}
 * @param callback 回调方法
 */
DB.prototype.remove = function (table_name, conditions, callback) {
    var node_model = this.getConnection(table_name);
    node_model.remove(conditions, function (err, res) {
        if (err) {
            if (callback) callback(err);
        } else {
            if (callback) callback(null, res);
        }
    });
};

/**
 * 查询数据
 * @param table_name 表名
 * @param conditions 查询条件
 * @param fields 待返回字段
 * @param callback 回调方法
 */
DB.prototype.find = function (table_name, conditions, fields, callback) {
    var node_model = this.getConnection(table_name);
    node_model.find(conditions, fields || null, {}, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 查询单条数据
 * @param table_name 表名
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.findOne = function (table_name, conditions, callback) {
    var node_model = this.getConnection(table_name);
    node_model.findOne(conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 根据_id查询指定的数据
 * @param table_name 表名
 * @param _id 可以是字符串或 ObjectId 对象。
 * @param callback 回调方法
 */
DB.prototype.findById = function (table_name, _id, callback) {
    var node_model = this.getConnection(table_name);
    node_model.findById(_id, function (err, res){
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 返回符合条件的文档数
 * @param table_name 表名
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.count = function (table_name, conditions, callback) {
    var node_model = this.getConnection(table_name);
    node_model.count(conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 查询符合条件的文档并返回根据键分组的结果
 * @param table_name 表名
 * @param field 待返回的键值
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.distinct = function (table_name, field, conditions, callback) {
    var node_model = this.getConnection(table_name);
    node_model.distinct(field, conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 连写查询
 * @param table_name 表名
 * @param conditions 查询条件 {a:1, b:2}
 * @param options 选项：{fields: &quot;a b c&quot;, sort: {time: -1}, limit: 10}
 * @param callback 回调方法
 */
DB.prototype.where = function (table_name, conditions, options, callback) {
    var node_model = this.getConnection(table_name);
    node_model.find(conditions)
        .select(options.fields || &#39;&#39;)
        .sort(options.sort || {})
        .limit(options.limit || {})
        .skip(options.skip || 0)
        .exec(function (err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        });
};

module.exports = new DB();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>新建table.json</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;article&quot;: {
        &quot;art_title&quot;: &quot;String&quot;,
        &quot;art_img&quot;: &quot;String&quot;,
        &quot;art_author&quot;: &quot;String&quot;,
        &quot;art_time&quot;: &quot;String&quot;
    },
    &quot;about&quot;:{
        &quot;about_name&quot;:&quot;String&quot;,
        &quot;about_job&quot;:&quot;String&quot;,
        &quot;about_desc&quot;:&quot;String&quot;,
        &quot;about_img&quot;:&quot;String&quot;,
        &quot;about_content&quot;:&quot;String&quot;
    },
    &quot;comment&quot;:{
        &quot;comment_content&quot;:&quot;String&quot;,
        &quot;comment_time&quot;:&quot;String&quot;
    },
    &quot;person&quot;:{
        &quot;person_img&quot;:&quot;String&quot;,
        &quot;person_content&quot;:&quot;String&quot;,
        &quot;person_time&quot;:&quot;String&quot;
    },
    &quot;photo&quot;:{
        &quot;photo_img&quot;:&quot;String&quot;,
        &quot;photo_time&quot;:&quot;String&quot;
    },
    &quot;cate&quot;:{
        &quot;cate_name&quot;:&quot;String&quot;,
        &quot;cate_time&quot;:&quot;String&quot;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>使用</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var db = require(path.join(__dirname,&#39;../config/database.js&#39;));

db.findOne(&quot;about&quot;,{},function(err,about){
   	//数据结构
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),a=[s];function v(r,c){return i(),e("div",null,a)}const o=n(d,[["render",v],["__file","05.html.vue"]]);export{o as default};
