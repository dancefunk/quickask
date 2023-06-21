import{_ as n,o as i,c as e,a as s}from"./app-a58d3f97.js";const d={},l=s(`<h3 id="概述介绍" tabindex="-1"><a class="header-anchor" href="#概述介绍" aria-hidden="true">#</a> 概述介绍</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CommonJS(服务器端) 应用于 -&gt; NodeJS 
所具备的全局变量(require,module,exports,global)
CommonJs用在服务器端，AMD和CMD用在浏览器环境

AMD(立刻加载) 应用于 -&gt; requireJS 所具备的全局变量(require,define)
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。
AMD:提前执行（异步加载：依赖先执行）+延迟执行

CMD(用时加载) 应用于 -&gt; seaJS 
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。  
CMD:延迟执行（运行到需加载，根据顺序执行）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requirejs" tabindex="-1"><a class="header-anchor" href="#requirejs" aria-hidden="true">#</a> RequireJS</h3><blockquote><p><strong>index.html</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    
&lt;/body&gt;
&lt;/html&gt;
&lt;script src=&quot;require.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;

    require.config({
        paths:{
            jquery:&#39;jquery.min&#39;  //别名配置
        }
    });

    加载main模块成功后触发后面函数并将模块传递给回调函数
    require([&#39;main&#39;],function(main){
        console.log(main.username);
        console.log(main.password);
    });

    函数式：调用模块
    require([&#39;main&#39;],function(main){
        var res = main.add(2,3);
        console.log(res);
    });

    存在依赖的函数式定义
    require([&#39;main&#39;],function(main){
        console.log(main.demo());
    });

    模块返回值是方法
    require([&#39;main&#39;],function(main){
        console.log(main());
    });

    调用别名模块
    require([&#39;jquery&#39;],function($){
        $(&quot;body&quot;).css(&quot;background&quot;,&quot;red&quot;);
    });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>main.js</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>简单直对定义模块
define({
    username:&#39;demo&#39;,
    password:&#39;123456&#39;
});

函数式：定义模块
define(function(){
    return {
        add:function(num1,num2)
        {
            return num1+num2;
        }
    }
});


存在依赖的函数式定义
define([&#39;./demo&#39;],function(demo){
    return {
        demo:function()
        {
            return &#39;输出demo模块里面的参数：&#39;+demo.num1;
        }
    }
});

模块返回值是方法
define(function(){
    return function()
    {
        return &quot;当前模块的返回值是一个方法&quot;;
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>demo.js</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define({
    num1:1,
    num2:2
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="seajs" tabindex="-1"><a class="header-anchor" href="#seajs" aria-hidden="true">#</a> SeaJS</h3><blockquote><p><strong>index.html</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;ie=edge&quot;&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    
&lt;/body&gt;
&lt;/html&gt;
&lt;script src=&quot;./sea.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    seajs.config({
        base:&quot;./modules/&quot;,
        alias:{
            &quot;math&quot;:&quot;math.js&quot;,
            &quot;jquery&quot;:&quot;jquery.min.js&quot;
        }
    });

    //引入一个入口文件
    seajs.use(&quot;main&quot;,function(main){
        console.log(main.add(1,2));
        console.log(main.demo());
    });
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>main.js</strong></p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//定义模块
define(function(require,exports,module){

    //通过require来引入依赖
    exports.add = function(num1,num2)
    {
        return num1+num2;
    }

    //通过require来引入依赖
    //jquery 是 amd的规范 所以改完cmd 要修改jquery.min.js文件
    var $ = require(&#39;jquery&#39;);

    exports.demo = function()
    {
        return $.ajax();
    }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),a=[l];function v(u,r){return i(),e("div",null,a)}const c=n(d,[["render",v],["__file","JSmokuaihuagongju.html.vue"]]);export{c as default};
