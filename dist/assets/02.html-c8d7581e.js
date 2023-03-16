import{_ as e,p as i,q as n,Y as s}from"./framework-e1bed10d.js";const d={},l=s(`<h3 id="时间处理模块-moment" tabindex="-1"><a class="header-anchor" href="#时间处理模块-moment" aria-hidden="true">#</a> 时间处理模块(Moment)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
npm install moment --save   

使用
moment().format(&#39;MMMM Do YYYY, h:mm:ss a&#39;);
moment().format(&#39;dddd&#39;);
moment().format(&quot;MMM Do YY&quot;);
moment().format(&#39;YYYY [escaped] YYYY&#39;);
moment().format();

在ejs里面使用
resp.render(&quot;foo.ejs&quot;, { moment: require(&quot;moment&quot;) });
&lt;%=moment.xxx()%&gt;


地址
http://momentjs.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="body-parser中间层" tabindex="-1"><a class="header-anchor" href="#body-parser中间层" aria-hidden="true">#</a> body-parser中间层</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
$ npm install body-parser

使用
var bodyParser = require(&#39;body-parser&#39;)

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

module.exports.addData = function(req,res)
{
	console.log(req.body);   //获取post表单的数据
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="captchapng验证码" tabindex="-1"><a class="header-anchor" href="#captchapng验证码" aria-hidden="true">#</a> captchapng验证码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
$ npm install captchapng --save

使用
//加载验证码
const captchapng = require(&#39;captchapng&#39;);

//获取验证码并返回图片
module.exports.getVcodeImage = function(req,res)
{
    var vcode = parseInt(Math.random()*9000+1000);
    var p = new captchapng(80,30,vcode);
    p.color(0,0,0,0);
    p.color(80,80,80,255);
    req.session.vcode = vcode;

    var img = p.getBase64();
    var imgbase64 = new Buffer(img,&#39;base64&#39;);
    res.writeHead(200,{
        &#39;Content-Type&#39;:&#39;image/png&#39;
    });
    res.end(imgbase64);
};

//视图里面使用
&lt;img id=&quot;vcodeimg&quot; src=&quot;/account/vcode&quot; /&gt;

&lt;script&gt;
$(&quot;#vcodeimg&quot;).click(function(){
        $(&quot;#vcodeimg&quot;).attr(&#39;src&#39;,&#39;/account/vcode?vid=&#39;+Math.random());
    });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="connect-multiparty文件上传" tabindex="-1"><a class="header-anchor" href="#connect-multiparty文件上传" aria-hidden="true">#</a> connect-multiparty文件上传</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
$ npm install connect-multiparty --save

使用
const mutipart= require(&#39;connect-multiparty&#39;);

const mutipartMiddeware = mutipart();

app.use(mutipart({uploadDir:&#39;./assets/uploads&#39;}));

//这里就是接受form表单请求的接口路径，请求方式为post。
app.post(&#39;/upload&#39;, mutipartMiddeware,function (req,res) {
    //这里打印可以看到接收到文件的信息。
    console.log(req.files);
    /*//do something
    * 成功接受到浏览器传来的文件。我们可以在这里写对文件的一系列操作。例如重命名，修改文件储存路径 。等等。
    *
    *
    * */

    //给浏览器返回一个成功提示。
    res.send(&#39;upload success!&#39;);
});


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="express-session" tabindex="-1"><a class="header-anchor" href="#express-session" aria-hidden="true">#</a> express-session</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
$ npm install express-session --save

使用
//使用session中间件
app.use(session({secret:&#39;keyboard cat&#39;,cookie:{maxAge:60000},rolling:true,resave:false,saveUninitialized:true}));

//权限验证
app.get(&#39;/&#39;,function(req,res,next){
    if(req.url == &#39;/account/login&#39; || req.url == &#39;/account/logout/&#39;)
    {
        next();
    }else{
        if(req.session.username == null)
        {
            res.setHeader(&quot;Content-Type&quot;,&#39;text/html;charset=utf-8&#39;);
            res.end(&quot;&lt;script&gt;alert(&#39;您还没有登录,请先登录&#39;);location.href = &#39;/account/login&#39;&lt;/script&gt;&quot;);
        }
    }

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="md5" tabindex="-1"><a class="header-anchor" href="#md5" aria-hidden="true">#</a> md5</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
npm install md5 --save

使用
var md5=require(&quot;md5&quot;)  
var str=md5(&quot;abcdef&quot;)  
//str=e80b5017098950fc58aad83c8c14978e  默认32位小写  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="opn" tabindex="-1"><a class="header-anchor" href="#opn" aria-hidden="true">#</a> opn</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
npm install opn --save

使用
const opn = require(&#39;opn&#39;);

onst opn = require(&#39;opn&#39;);

app.listen(3000,function(){
  var url = &quot;http://localhost:3000&quot;;
  console.log(&#39;server is start&#39;);
  opn(url,{app: [&#39;google chrome&#39;, &#39;--incognito&#39;]});
});
 
// Opens the image in the default image viewer 
opn(&#39;unicorn.png&#39;).then(() =&gt; {
    // image viewer closed 
});
 
// Opens the url in the default browser 
opn(&#39;http://sindresorhus.com&#39;);
 
// Specify the app to open in 
opn(&#39;http://sindresorhus.com&#39;, {app: &#39;firefox&#39;});
 
// Specify app arguments 
opn(&#39;http://sindresorhus.com&#39;, {app: [&#39;google chrome&#39;, &#39;--incognito&#39;]});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nodejs-express-ejs分页查询" tabindex="-1"><a class="header-anchor" href="#nodejs-express-ejs分页查询" aria-hidden="true">#</a> Nodejs+express+ejs分页查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var db = require(path.join(__dirname,&#39;../config/database.js&#39;));

module.exports.index = function(req,res)
{
    //当前页面
    var page = parseInt(req.query.page || 1);

    //每页显示多少条
    var limit = parseInt(req.query.limit || 6);

    //偏移量
    var start = (page-1) * limit;

    //获取分页的相关数据
    db.count(&#39;article&#39;,&#39;&#39;,function(err,count){
        //计算总页数
        var totalPage = count % limit == 0 ? count / limit : parseInt(count / limit) + 1;

        db.where(&#39;article&#39;,&#39;&#39;,{skip:start,limit:limit},function(err,article_list){

            var data = {
                page:page,
                limit:limit,
                totalPage:totalPage,
                article_list:article_list
            };
            res.render(&#39;home/index&#39;,{&quot;data&quot;:data,&quot;article_list&quot;:article_list});
        });
    });
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>视图使用</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/libs/bootstrap.min.css&quot; /&gt;
&lt;script src=&quot;/libs/bootstrap.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;/libs/bootstrap-paginator.js&quot;&gt;&lt;/script&gt;

&lt;%for(var i=0;i&lt;article_list.length;i++){%&gt;
  &lt;h3&gt;&lt;%=article_list[i].art_title%&gt;&lt;/h3&gt;
&lt;%}%&gt;

&lt;div class=&quot;pagination&quot;&gt;&lt;/div&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
var options = {
    currentPage:&quot;&lt;%=data.page%&gt;&quot;,
    totalPages:&quot;&lt;%=data.totalPage%&gt;&quot;,
    size:&quot;large&quot;,
    alignment:&quot;center&quot;,
    itemContainerClass: function (type, page, current) {
        return (page === current) ? &quot;active&quot; : &quot;pointer-cursor&quot;;
    },
    onPageClicked: function(e,originalEvent,type,page){
        //alert(&quot;Page item clicked, type: &quot;+type+&quot; page: &quot;+page);
    },
    onPageChanged: function(e,oldPage,newPage){
        //alert(&quot;Current page changed, old: &quot;+oldPage+&quot; new: &quot;+newPage);
    },
    pageUrl:function(type,page,current){
        return &quot;/home/?page=&quot;+page;
    }
}

$(&quot;.pagination&quot;).bootstrapPaginator(options);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解决bootstrap-paginator与bootstrap3样式兼容的问题" tabindex="-1"><a class="header-anchor" href="#解决bootstrap-paginator与bootstrap3样式兼容的问题" aria-hidden="true">#</a> 解决bootstrap-paginator与bootstrap3样式兼容的问题</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>问题描述：
HTML标签：&lt;div class=&quot;pagination&quot;&gt;&lt;/div&gt;
JavaScript:$(&#39;.pagination&#39;).bootstrapPaginator(options);
在bootstrap2下样式正常，在bootstrap3下样式未加载。

解决办法：
HTML标签改为：&lt;ul class=&quot;pagination&quot;&gt;&lt;ul&gt;
bootstrap-paginator.js中将bootstrapMajorVersion: 2,改为bootstrapMajorVersion: 3,

问题原因分析：
bootstrap3修改了关于pagination在bootstrap2中的部分样式，
且bootstrap3中添加分页功能是以ul为根节点添加的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie-parser-nodejs使用使用cookie" tabindex="-1"><a class="header-anchor" href="#cookie-parser-nodejs使用使用cookie" aria-hidden="true">#</a> cookie-parser nodejs使用使用cookie</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装
cnpm install cookie-parser --save


引入
var cookieParser = require(&#39;cookie-parser&#39;);    #引入模块
app.use(cookieParser());        #挂载中间件，可以理解为实例化

创建cookie 
res.cookie(name, value [, options]);

name 是 cookie 名，value 是 cookie 值，可以是 json 对象或字符串。options 是选项
{
    &#39;maxAge&#39;: 90000,    # 有效时长，即90000毫秒后过期，String
    &#39;signed&#39;: false     # 默认为false，表示是否签名，Boolean
}

获取cookie
var cookies = req.cookies      # 获取cookie集合
var value = req.cookies.key    # 获取名称为key的cookie的值

删除cookie
res.clearCookie(name [, options])
name 是 cookie 名，options 与创建 cookie 时所传一致


签名
上文所写 cookie 的各种操作，都是没有经过签名的。签名可以提高安全性。

app.use(cookieParser(&#39;ruidoc&#39;)); # 需要传一个自定义字符串作为secret


# 创建cookie的options中，必填 signed: true
res.cookie(name, value, {    
    &#39;signed&#39;: true
});

var cookies = req.signedCookies      # 获取cookie集合
var value = req.signedCookies.key    # 获取名称为key的cookie的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),a=[l];function r(v,t){return i(),n("div",null,a)}const u=e(d,[["render",r],["__file","02.html.vue"]]);export{u as default};
