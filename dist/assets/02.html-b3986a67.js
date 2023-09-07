import{_ as n,o as i,c as e,a as d}from"./app-3c87854f.js";const s={},l=d(`<h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><blockquote><p>FastAdmin目录结构遵循ThinkPHP5官方建议的模块设计：</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>FastAdmin项目目录
├── addons                  //插件存放目录
├── application           //应用目录
│   ├── admin             //后台管理应用模块
│   ├── api               //API应用模块
│   ├── common             //通用应用模块
│   ├── extra             //扩展配置目录
│   ├── index             //前台应用模块
│   ├── build.php
│   ├── command.php        //命令行配置
│   ├── common.php         //通用辅助函数
│   ├── config.php         //基础配置
│   ├── database.php       //数据库配置
│   ├── route.php          //路由配置
│   ├── tags.php           //行为配置
├── extend
│   └── fast               //FastAdmin扩展辅助类目录
├── public
│   ├── assets
│   │   ├── build            //打包JS、CSS的资源目录
│   │   ├── css                //CSS样式目录
│   │   ├── fonts            //字体目录
│   │   ├── img
│   │   ├── js
│   │   │   ├── backend
│   │   │   └── frontend     //后台功能模块JS文件存放目录
│   │   ├── libs            //Bower资源包位置
│   │   └── less            //Less资源目录
│   └── uploads                //上传文件目录
│   ├── index.php            //应用入口主文件
│   ├── install.php          //FastAdmin安装引导
│   ├── admin.php            //后台入口文件,强烈建议修改
│   ├── robots.txt
│   └── router.php
├── runtime                    //缓存目录    
├── thinkphp                //ThinkPHP5框架核心目录
├── vendor                    //Compposer资源包位置
├── .bowerrc                //Bower目录配置文件
├── LICENSE
├── README.md
├── bower.json                //Bower前端包配置
├── build.php                    
├── composer.json            //Composer包配置
└── think
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="默认模块说明" tabindex="-1"><a class="header-anchor" href="#默认模块说明" aria-hidden="true">#</a> 默认模块说明</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>后台模块(admin)是FastAdmin中的核心模块，具备系统配置、附件管理、分类管理、插件管理等多个功能模块
	
前台模块(index)的结构和后台模块(admin)类似

公共模块(common)是一个特殊的模块，默认是禁止直接访问的，一般用于放置一些公共的类或其它模块的继承基类等

Api模块(api)通常用于对接APP，用于向APP提供接口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开发说明" tabindex="-1"><a class="header-anchor" href="#开发说明" aria-hidden="true">#</a> 开发说明</h2><blockquote><p>开发一个功能所需要的一套标准CURD的文件配备</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── application
│   └── admin
│       ├── controller
│       │   └── Test.php        //控制器类
│       ├── lang
│       │   ├── zh-cn            
│       │   │   └── test.php    //功能语言包,按需加载
│       │   └── zh-cn.php        //后台语言包,默认加载
│       ├── model
│       │   └── Test.php        //模型类
│       ├── validate
│       │   └── Test.php        //验证器类
│       └── view
│           └── test            
│               ├── index.html   //列表视图
│               ├── add.html     //添加视图
│               └── edit.html    //编辑视图
└── public
    └── assets
        └── js
            └── backend
                └── test.js      //功能模块JS文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>FastAdmin</code>中每一个功能模块至少对应一个功能模块JS文件，也就是说每一个控制器都对应一个同名的JS文件，其次每一个控制器的方法对应JS文件中同名的方法</p>`,9),a=[l];function v(r,c){return i(),e("div",null,a)}const u=n(s,[["render",v],["__file","02.html.vue"]]);export{u as default};
