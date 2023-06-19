import{_ as a,o as s,c as n,a as e}from"./app-c220f801.js";const i={},t=e(`<h3 id="active-class是哪个组件的属性-嵌套路由怎么定义" tabindex="-1"><a class="header-anchor" href="#active-class是哪个组件的属性-嵌套路由怎么定义" aria-hidden="true">#</a> active-class是哪个组件的属性？嵌套路由怎么定义？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vue<span class="token operator">-</span>router模块的router<span class="token operator">-</span>link组件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="怎么定义vue-router的动态路由-怎么获取传过来的动态参数" tabindex="-1"><a class="header-anchor" href="#怎么定义vue-router的动态路由-怎么获取传过来的动态参数" aria-hidden="true">#</a> 怎么定义vue-router的动态路由？怎么获取传过来的动态参数？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>在router目录下的index<span class="token punctuation">.</span>js文件中，对path属性加上<span class="token operator">/</span><span class="token operator">:</span>id
使用router对象的params<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router有哪几种导航钩子" tabindex="-1"><a class="header-anchor" href="#vue-router有哪几种导航钩子" aria-hidden="true">#</a> vue-router有哪几种导航钩子</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>三种，一种是全局导航钩子：router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span>to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next<span class="token punctuation">)</span>，作用：跳转前进行判断拦截。
第二种：组件内的钩子；
第三种：单独路由独享组件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss是什么-安装使用的步骤是-有哪几大特性" tabindex="-1"><a class="header-anchor" href="#scss是什么-安装使用的步骤是-有哪几大特性" aria-hidden="true">#</a> scss是什么？安装使用的步骤是？有哪几大特性？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>预处理css，把css当前函数编写，定义变量<span class="token punctuation">,</span>嵌套。 
先装css<span class="token operator">-</span>loader、node<span class="token operator">-</span>loader、sass<span class="token operator">-</span>loader等加载器模块，
在webpack<span class="token operator">-</span>base<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js配置文件中加多一个拓展<span class="token operator">:</span>extenstion，再加多一个模块：module里面test、loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scss是什么-在vue-cli中的安装使用步骤是-有哪几大特性" tabindex="-1"><a class="header-anchor" href="#scss是什么-在vue-cli中的安装使用步骤是-有哪几大特性" aria-hidden="true">#</a> scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>css的预编译

使用步骤：

第一步：用npm 下三个loader（sass<span class="token operator">-</span>loader、css<span class="token operator">-</span>loader、node<span class="token operator">-</span>sass）

第二步：在build目录找到webpack<span class="token punctuation">.</span>base<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js，在那个<span class="token keyword">extends</span>属性中加一个拓展<span class="token punctuation">.</span>scss

第三步：还是在同一个文件，配置一个module属性

第四步：然后在组件的style标签加上lang属性 ，例如：lang<span class="token operator">=</span>”scss”

<span class="token literal-property property">有哪几大特性</span><span class="token operator">:</span>

<span class="token number">1</span>、可以用变量，例如（$变量名称<span class="token operator">=</span>值）；

<span class="token number">2</span>、可以用混合器，例如（）

<span class="token number">3</span>、可以嵌套
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-model是什么-怎么使用-vue中标签怎么绑定事件" tabindex="-1"><a class="header-anchor" href="#v-model是什么-怎么使用-vue中标签怎么绑定事件" aria-hidden="true">#</a> v-model是什么？怎么使用？ vue中标签怎么绑定事件？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>可以实现双向绑定，指令（v<span class="token operator">-</span><span class="token keyword">class</span>、v<span class="token operator">-</span><span class="token keyword">for</span>、v<span class="token operator">-</span><span class="token keyword">if</span>、v<span class="token operator">-</span>show、v<span class="token operator">-</span>on）。
vue的model层的data属性。绑定事件：<span class="token operator">&lt;</span>input @click<span class="token operator">=</span><span class="token function">doLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios是什么-怎么使用-描述使用它实现登录功能的流程" tabindex="-1"><a class="header-anchor" href="#axios是什么-怎么使用-描述使用它实现登录功能的流程" aria-hidden="true">#</a> axios是什么？怎么使用？描述使用它实现登录功能的流程？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>请求后台资源的模块。npm install axios <span class="token operator">-</span><span class="token constant">S</span>装好，然后发送的是跨域，需在配置文件中config<span class="token operator">/</span>index<span class="token punctuation">.</span>js进行设置。
后台如果是Tp5则定义一个资源路由。
js中使用<span class="token keyword">import</span>引入axios，然后<span class="token punctuation">.</span>get或<span class="token punctuation">.</span>post。返回在<span class="token punctuation">.</span>then函数中如果成功，失败则是在<span class="token punctuation">.</span>catch函数中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios-tp5进阶中-调用axios-post-api-user-是进行的什么操作-axios-put-api-user-8′-呢" tabindex="-1"><a class="header-anchor" href="#axios-tp5进阶中-调用axios-post-api-user-是进行的什么操作-axios-put-api-user-8′-呢" aria-hidden="true">#</a> axios+tp5进阶中，调用axios.post(‘api/user’)是进行的什么操作？axios.put(‘api/user/8′)呢？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>跨域，添加用户操作，更新操作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="什么是restful-api-怎么使用" tabindex="-1"><a class="header-anchor" href="#什么是restful-api-怎么使用" aria-hidden="true">#</a> 什么是RESTful API？怎么使用?</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>是一个api的标准，无状态请求。请求的路由地址是固定的，如果是tp5则先路由配置中把资源路由配置好。
标准有：<span class="token punctuation">.</span>post <span class="token punctuation">.</span>put <span class="token punctuation">.</span>delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuex是什么-怎么使用-哪种功能场景使用它" tabindex="-1"><a class="header-anchor" href="#vuex是什么-怎么使用-哪种功能场景使用它" aria-hidden="true">#</a> vuex是什么？怎么使用？哪种功能场景使用它？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>vue框架中状态管理。在main<span class="token punctuation">.</span>js引入store，注入。新建了一个目录store，…<span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">export</span> 。
场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mvvm框架是什么-它和其它框架-jquery-的区别是什么-哪些场景适合" tabindex="-1"><a class="header-anchor" href="#mvvm框架是什么-它和其它框架-jquery-的区别是什么-哪些场景适合" aria-hidden="true">#</a> mvvm框架是什么？它和其它框架（jquery）的区别是什么？哪些场景适合？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>一个model<span class="token operator">+</span>view<span class="token operator">+</span>viewModel框架，数据模型model，viewModel连接两个

区别：vue数据驱动，通过数据来显示视图层而不是节点操作。

场景：数据操作比较多的场景，更加便捷
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义指令-v-check、v-focus-的方法有哪些-它有哪些钩子函数-还有哪些钩子函数参数" tabindex="-1"><a class="header-anchor" href="#自定义指令-v-check、v-focus-的方法有哪些-它有哪些钩子函数-还有哪些钩子函数参数" aria-hidden="true">#</a> 自定义指令（v-check、v-focus）的方法有哪些？它有哪些钩子函数？还有哪些钩子函数参数？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：全局定义指令：在vue对象的directive方法里面有两个参数，一个是指令名称，另外一个是函数。
组件内定义指令：directives

<span class="token function">钩子函数：bind（绑定事件触发）、inserted</span><span class="token punctuation">(</span>节点插入的时候触发<span class="token punctuation">)</span>、update（组件内相关更新）

钩子函数参数：el、binding
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="说出至少4种vue当中的指令和它的用法" tabindex="-1"><a class="header-anchor" href="#说出至少4种vue当中的指令和它的用法" aria-hidden="true">#</a> 说出至少4种vue当中的指令和它的用法？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：v<span class="token operator">-</span><span class="token keyword">if</span>：判断是否隐藏；v<span class="token operator">-</span><span class="token keyword">for</span>：数据循环出来；v<span class="token operator">-</span>bind<span class="token operator">:</span><span class="token keyword">class</span>：绑定一个属性；v<span class="token operator">-</span>model：实现双向绑定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vue-router是什么-它有哪些组件" tabindex="-1"><a class="header-anchor" href="#vue-router是什么-它有哪些组件" aria-hidden="true">#</a> vue-router是什么？它有哪些组件？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：vue用来写路由一个插件。router<span class="token operator">-</span>link、router<span class="token operator">-</span>view
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="导航钩子有哪些-它们有哪些参数" tabindex="-1"><a class="header-anchor" href="#导航钩子有哪些-它们有哪些参数" aria-hidden="true">#</a> 导航钩子有哪些？它们有哪些参数？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：导航钩子有：a<span class="token operator">/</span>全局钩子和组件内独享的钩子。
b<span class="token operator">/</span>beforeRouteEnter、afterEnter、beforeRouterUpdate、beforeRouteLeave

参数：有
to（去的那个路由）、
from（离开的路由）、
next（一定要用这个函数才能去到下一个路由，如果不用就拦截）最常用就这几种
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue的双向数据绑定原理是什么" tabindex="-1"><a class="header-anchor" href="#vue的双向数据绑定原理是什么" aria-hidden="true">#</a> Vue的双向数据绑定原理是什么？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：vue<span class="token punctuation">.</span>js 是采用数据劫持结合发布者<span class="token operator">-</span>订阅者模式的方式，通过Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>来劫持各个属性的
setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

具体步骤：

第一步：需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter
这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化

第二步：compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新
函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

<span class="token literal-property property">第三步：Watcher订阅者是Observer和Compile之间通信的桥梁，主要做的事情是</span><span class="token operator">:</span>
<span class="token number">1</span><span class="token function">、在自身实例化时往属性订阅器</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>里面添加自己
<span class="token number">2</span><span class="token function">、自身必须有一个update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法
<span class="token number">3</span>、待属性变动dep<span class="token punctuation">.</span><span class="token function">notice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token function">通知时，能调用自身的update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>方法，并触发Compile中绑定的回调，则功成身退。

第四步：<span class="token constant">MVVM</span>作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的model数据变
化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 <span class="token operator">-</span><span class="token operator">&gt;</span> 
<span class="token function">视图更新；视图交互变化</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> 数据model变更的双向绑定效果。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请详细说下你对vue生命周期的理解" tabindex="-1"><a class="header-anchor" href="#请详细说下你对vue生命周期的理解" aria-hidden="true">#</a> 请详细说下你对vue生命周期的理解？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：总共分为<span class="token number">8</span>个阶段创建前<span class="token operator">/</span>后，载入前<span class="token operator">/</span>后，更新前<span class="token operator">/</span>后，销毁前<span class="token operator">/</span>后。

创建前<span class="token operator">/</span>后： 在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为<span class="token keyword">undefined</span>，还未初始化。在created
阶段，vue实例的数据对象data有了，$el还没有。

载入前<span class="token operator">/</span>后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data<span class="token punctuation">.</span>message
还未替换。在mounted阶段，vue实例挂载完成，data<span class="token punctuation">.</span>message成功渲染。

更新前<span class="token operator">/</span>后：当data变化时，会触发beforeUpdate和updated方法。

销毁前<span class="token operator">/</span>后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom
的绑定，但是dom结构依然存在
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请说下封装-vue-组件的过程" tabindex="-1"><a class="header-anchor" href="#请说下封装-vue-组件的过程" aria-hidden="true">#</a> 请说下封装 vue 组件的过程？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、
难维护、复用性等问题。

然后，使用Vue<span class="token punctuation">.</span>extend方法创建一个组件，然后使用Vue<span class="token punctuation">.</span>component方法注册组件。子组件需要数据，可以在props中接
受定义。而子组件修改好数据后，想把数据传递给父组件。可以采用emit方法。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="你是怎么认识vuex的" tabindex="-1"><a class="header-anchor" href="#你是怎么认识vuex的" aria-hidden="true">#</a> 你是怎么认识vuex的？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：vuex可以理解为一种开发模式或框架。比如<span class="token constant">PHP</span>有thinkphp，java有spring等。
通过状态（数据源）集中管理驱动组件的变化（好比spring的<span class="token constant">IOC</span>容器对bean进行集中管理）。

应用级的状态集中放在store中； 改变状态的方式是提交mutations，这是个同步的事物； 
异步逻辑应该封装在action中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-loader是什么-使用它的用途有哪些" tabindex="-1"><a class="header-anchor" href="#vue-loader是什么-使用它的用途有哪些" aria-hidden="true">#</a> vue-loader是什么？使用它的用途有哪些？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：解析<span class="token punctuation">.</span>vue文件的一个加载器，跟template<span class="token operator">/</span>js<span class="token operator">/</span>style转换成js模块。

用途：js可以写es6、style样式可以scss或less、template可以加jade等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请说出vue-cli项目中src目录每个文件夹和文件的用法" tabindex="-1"><a class="header-anchor" href="#请说出vue-cli项目中src目录每个文件夹和文件的用法" aria-hidden="true">#</a> 请说出vue.cli项目中src目录每个文件夹和文件的用法？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>assets文件夹是放静态资源；
components是放组件；
router是定义路由相关的配置<span class="token punctuation">;</span>
view视图；
app<span class="token punctuation">.</span>vue是一个应用主组件；
main<span class="token punctuation">.</span>js是入口文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-cli中怎样使用自定义的组件-有遇到过哪些问题吗" tabindex="-1"><a class="header-anchor" href="#vue-cli中怎样使用自定义的组件-有遇到过哪些问题吗" aria-hidden="true">#</a> vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：第一步：在components目录新建你的组件文件（smithButton<span class="token punctuation">.</span>vue），script一定要<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

第二步：在需要用的页面（组件）中导入：<span class="token keyword">import</span> smithButton from ‘<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">/</span>components<span class="token operator">/</span>smithButton<span class="token punctuation">.</span>vue’

第三步：注入到vue的子组件的components属性上面<span class="token punctuation">,</span><span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>smithButton<span class="token punctuation">}</span>

第四步：在template视图view中使用，<span class="token operator">&lt;</span>smith<span class="token operator">-</span>button<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span><span class="token operator">/</span>smith<span class="token operator">-</span>button<span class="token operator">&gt;</span>
问题有：smithButton命名，使用的时候则smith<span class="token operator">-</span>button。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="聊聊你对vue-js的template编译的理解" tabindex="-1"><a class="header-anchor" href="#聊聊你对vue-js的template编译的理解" aria-hidden="true">#</a> 聊聊你对Vue.js的template编译的理解？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>答：简而言之，就是先转化成<span class="token constant">AST</span>树，再得到的render函数返回VNode（Vue的虚拟<span class="token constant">DOM</span>节点）

详情步骤：

首先，通过compile编译器把template编译成<span class="token constant">AST</span>语法树（abstract syntax tree 即 源代码的抽象语法结构的树状表
现形式），compile是createCompiler的返回值，createCompiler是用以创建编译器的。另外compile还负责合并
option。

然后，<span class="token constant">AST</span>会经过generate（将<span class="token constant">AST</span>语法树转化成render funtion字符串的过程）得到render函数，render的返回值是
VNode，VNode是Vue的虚拟<span class="token constant">DOM</span>节点，里面有（标签名、子节点、文本等等）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="挑战一下" tabindex="-1"><a class="header-anchor" href="#挑战一下" aria-hidden="true">#</a> 挑战一下：</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span>、vue响应式原理？
<span class="token number">2</span>、vue<span class="token operator">-</span>router实现原理？
<span class="token number">3</span>、为什么要选vue？与其它框架对比的优势和劣势？
<span class="token number">4</span>、vue如何实现父子组件通信，以及非父子组件通信？
<span class="token number">5</span>、vuejs与angularjs以及react的区别？
<span class="token number">6</span>、vuex是用来做什么的？
<span class="token number">7</span>、vue源码结构
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),r=[t];function l(d,c){return s(),n("div",null,r)}const o=a(i,[["render",l],["__file","Vuekuangjiazhuanti.html.vue"]]);export{o as default};
