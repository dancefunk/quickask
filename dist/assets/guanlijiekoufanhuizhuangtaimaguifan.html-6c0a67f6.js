import{_ as i,o as n,c as e,a as d}from"./app-a58d3f97.js";const u={},s=d(`<h3 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一" aria-hidden="true">#</a> 方案一</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>状态码库  6位、100000 开始

例如：101001 
前三位：代表模块 例如、101 用户模块
后三位：代表状态 例如、001 登录成功

200、404、500等默认HTTP状态码不变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二" aria-hidden="true">#</a> 方案二</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>5 位 局部码 定义规则：ABBCC 自动补零

* 1) A 消息级别码 1 位, 
	1=控制性操作(如登录成功 /添加成功 需要跳转) 
	2=提示性消息(发送成功,无后续操作) 
	3=隐藏性提示(操作成功)
	
* 2) BB 模块标识码 2 位, 00 禁止使用 具体看 module 定义

* 3) CC 消息状态码 2 位, 00 禁止使用 10 以下预留

{&quot;code&quot;:10110,&quot;message&quot;:&quot;尚未登录&quot;,&quot;data&quot;:{&quot;url&quot;:&quot;/login&quot;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="restful-api-状态码和对应的消息文本" tabindex="-1"><a class="header-anchor" href="#restful-api-状态码和对应的消息文本" aria-hidden="true">#</a> Restful API 状态码和对应的消息文本</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-----------------------------------------------------------状态码
OK                         =&quot;200&quot;
CREATED                    =&quot;201&quot;
ACCEPTED                   =&quot;202&quot;
NOCONTENT                  =&quot;204&quot;
MOVEDPERMANENTLY           =&quot;301&quot;
SEEOTHER                   =&quot;303&quot;
NOTMODIFIED                =&quot;304&quot;
BADREQUEST                 =&quot;400&quot;
UNAUTHORIZED               =&quot;401&quot;
FORBIDDEN                  =&quot;403&quot;
NOTFOUND                   =&quot;404&quot;
MethodNotAllowed           =&quot;405&quot;
NOTACCEPTABLE              =&quot;406&quot;
CONFLICT                   =&quot;409&quot;
INTERNALSERVERERROR        =&quot;500&quot;
SERVICEUNAVAILABLE         =&quot;503&quot;

DBERR                      = &quot;4001&quot;
NODATA                     = &quot;4002&quot;
DATAEXIST                  = &quot;4003&quot;
DATAERR                    = &quot;4004&quot;
SESSIONERR                 = &quot;4101&quot;
LOGINERR                   = &quot;4102&quot;
PARAMERR                   = &quot;4103&quot;
USERERR                    = &quot;4104&quot;
ROLEERR                    = &quot;4105&quot;
PWDERR                     = &quot;4106&quot;
REQERR                     = &quot;4201&quot;
IPERR                      = &quot;4202&quot;
THIRDERR                   = &quot;4301&quot;
IOERR                      = &quot;4302&quot;
SERVERERR                  = &quot;4500&quot;
UNKOWNERR                  = &quot;4501&quot;

-----------------------------------------------------------消息文本

RET.OK                    :&#39;请求成功&#39;,
RET.CREATED               :&#39;创建成功&#39;,
RET.ACCEPTED              :&#39;更新成功&#39;,
RET.NOCONTENT             :&#39;表示资源有空&#39;,
RET.MOVEDPERMANENTLY      :&#39;资源的URI已被更新&#39;,
RET.SEEOTHER              :&#39;其他（如，负载均衡)&#39;,
RET.NOTMODIFIED           :&#39;资源未更改（缓存）&#39;,
RET.BADREQUEST            :&#39;坏请求（如，参数错误）&#39;,
RET.UNAUTHORIZED          :&#39;未授权&#39;,
RET.FORBIDDEN             :&#39;被禁止访问&#39;,
RET.NOTFOUND              :&#39;请求的资源不存在&#39;,
RET.METHODNOTALLOWED      :&#39;请求方法对指定的资源不适用&#39;,
RET.NOTACCEPTABLE         :&#39;请求格式错误&#39;,
RET.CONFLICT              :&#39;通用冲突 &#39; , 
RET.INTERNALSERVERERROR   :&#39;内部错误 &#39; , 
RET.SERVICEUNAVAILABLE    :&#39;服务当前无法处理请求 &#39; , 

RET.DBERR                 :&quot;数据库查询错误 &quot; , 
RET.NODATA                :&quot;无数据 &quot; , 
RET.DATAEXIST             :&quot;数据已存在 &quot; , 
RET.DATAERR               :&quot;数据错误 &quot; , 
RET.SESSIONERR            :&quot;用户未登录 &quot; , 
RET.LOGINERR              :&quot;用户登录失败 &quot; , 
RET.PARAMERR              :&quot;参数错误 &quot; , 
RET.USERERR               :&quot;用户不存在或未激活 &quot; , 
RET.ROLEERR               :&quot;用户身份错误 &quot; , 
RET.PWDERR                :&quot;密码错误 &quot; , 
RET.REQERR                :&quot;非法请求或请求次数受限 &quot; , 
RET.IPERR                 :&quot;P 受限 &quot; , 
RET.THIRDERR              :&quot;第三方系统错误 &quot; , 
RET.IOERR                 :&quot;文件读写错误 &quot; , 
RET.SERVERERR             :&quot;内部错误 &quot; , 
RET.UNKOWNERR             :&quot;未知错误 &quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[s];function v(a,t){return n(),e("div",null,l)}const r=i(u,[["render",v],["__file","guanlijiekoufanhuizhuangtaimaguifan.html.vue"]]);export{r as default};
