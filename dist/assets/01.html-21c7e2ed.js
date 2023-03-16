import{_ as a,p as l,q as d,s as e,R as n,t as i,Z as r,n as c}from"./framework-823c4b5a.js";const v={},t=e("h3",{id:"本教程参考转载文档",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本教程参考转载文档","aria-hidden":"true"},"#"),n(" 本教程参考转载文档")],-1),o={href:"https://www.kancloud.cn/cooldrw2015/egg_api",target:"_blank",rel:"noopener noreferrer"},u={href:"https://eggjs.org/",target:"_blank",rel:"noopener noreferrer"},m=r(`<h3 id="快速初始化" tabindex="-1"><a class="header-anchor" href="#快速初始化" aria-hidden="true">#</a> 快速初始化</h3><blockquote><p>npm &gt;= 6.1.0</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> project <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> project
<span class="token function">npm</span> init egg <span class="token parameter variable">--type</span><span class="token operator">=</span>simple
<span class="token function">npm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>启动项目</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>egg-project
    ├── package.json
    ├── app.js (可选)
    ├── agent.js (可选)
    ├── app
    |   ├── router.js
    │   ├── controller
    │   |   └── home.js
    │   ├── service (可选)
    │   |   └── user.js
    │   ├── middleware (可选)
    │   |   └── response_time.js
    │   ├── schedule (可选)
    │   |   └── my_task.js
    │   ├── public (可选)
    │   |   └── reset.css
    │   ├── view (可选)
    │   |   └── home.tpl
    │   ├── model (可选)
    │   |   └── user.js
    │   └── extend (可选)
    │       ├── helper.js (可选)
    │       ├── request.js (可选)
    │       ├── response.js (可选)
    │       ├── context.js (可选)
    │       ├── application.js (可选)
    │       └── agent.js (可选)
    ├── config
    |   ├── plugin.js
    |   ├── config.default.js
    │   ├── config.prod.js
    |   ├── config.test.js (可选)
    |   ├── config.local.js (可选)
    |   └── config.unittest.js (可选)
    └── test
        ├── middleware
        |   └── response_time.test.js
        └── controller
            └── home.test.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>app/router.js 用于配置 URL 路由规则
app/controller/** 控制器，用于编写业务逻辑
app/service/** 用于构建应用服务
app/middleware/** 用于编写中间件
app/public/** 用于放置静态资源
app/extend/** 用于框架的扩展
config/config.{env}.js 用于编写配置文件
config/plugin.js 用于配置需要加载的插件
test/** 用于单元测试
app.js 和 agent.js 用于自定义启动时的初始化工作
app/schedule/** 用于定时任务
app/view/** 用于放置模板文件
app/model/** 用于数据库模型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function p(b,g){const s=c("ExternalLinkIcon");return l(),d("div",null,[t,e("ul",null,[e("li",null,[e("a",o,[n("https://www.kancloud.cn/cooldrw2015/egg_api"),i(s)])]),e("li",null,[e("a",u,[n("Eggjs官方文档"),i(s)])])]),m])}const j=a(v,[["render",p],["__file","01.html.vue"]]);export{j as default};
