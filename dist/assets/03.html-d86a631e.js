import{_ as n,o as s,c as a,a as e}from"./app-3e5ace64.js";const p={},t=e(`<h3 id="基类控制器" tabindex="-1"><a class="header-anchor" href="#基类控制器" aria-hidden="true">#</a> 基类控制器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>application/common/controller/Api.php //API接口基类控制器
application/common/controller/Backend.php //后台基类控制器
application/common/controller/Frontend.php //前台基类控制器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础结构" tabindex="-1"><a class="header-anchor" href="#基础结构" aria-hidden="true">#</a> 基础结构</h3><blockquote><p>CRUD生成的标准控制器如下(开发时请注意好命名空间、多层目录、大小写等问题)</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">app<span class="token punctuation">\\</span>admin<span class="token punctuation">\\</span>controller</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 文章管理
 *
 * <span class="token keyword">@icon</span> fa fa-list
 * <span class="token keyword">@remark</span> 用于统一管理网站的所有文章
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Article</span> <span class="token keyword">extends</span> <span class="token class-name">Backend</span>
<span class="token punctuation">{</span>

    <span class="token keyword">protected</span> <span class="token variable">$model</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$noNeedLogin</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token variable">$noNeedRight</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;selectpage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">_initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">_initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 默认生成的控制器所继承的父类中有八个方法
     * index/add/edit/del/multi/destroy/restore/recyclebin
     * 因此在当前控制器中可不用编写增删改查的代码,如果需要自己控制这部分逻辑
     * 需要将application/admin/library/traits/Backend.php中对应的方法复制到当前控制器,然后进行修改
     */</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>基类的结构</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">class</span> <span class="token class-name-definition class-name">Backend</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 查看
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 添加
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">add</span><span class="token punctuation">(</span><span class="token variable">$ids</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 编辑
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token variable">$ids</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 删除
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">del</span><span class="token punctuation">(</span><span class="token variable">$ids</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 批量更新
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">multi</span><span class="token punctuation">(</span><span class="token variable">$ids</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 回收站
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">recyclebin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 真实删除
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token variable">$ids</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 还原
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">restore</span><span class="token punctuation">(</span><span class="token variable">$ids</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
      <span class="token doc-comment comment">/**
     * 导入
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">import</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  
    <span class="token doc-comment comment">/**
     * 下拉筛选
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">selectpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">selectpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性和方法" tabindex="-1"><a class="header-anchor" href="#属性和方法" aria-hidden="true">#</a> 属性和方法</h3><blockquote><p>当我们的控制器继承自<code>app\\common\\controller\\Backend</code>以后，我们就可以使用以下属性</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 无需登录的方法,同时也就不需要鉴权了
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$noNeedLogin</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 无需鉴权的方法,但需要登录
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span>
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$noNeedRight</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 布局模板
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">string</span></span>
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$layout</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;default&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 权限控制类
 * <span class="token keyword">@var</span> <span class="token class-name">Auth</span>
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$auth</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 快速搜索时执行查找的字段
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$searchFields</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 是否是关联查询
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$relationSearch</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 是否开启数据限制
 * 支持auth/personal
 * 表示按权限判断/仅限个人 
 * 默认为禁用,若启用请务必保证表中存在admin_id字段
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$dataLimit</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 数据限制字段
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$dataLimitField</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin_id&#39;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 是否开启Validate验证
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$modelValidate</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 是否开启模型场景验证
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$modelSceneValidate</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Multi方法可批量修改的字段
 */</span>
<span class="token keyword">protected</span> <span class="token variable">$multiFields</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;status&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>基类<code>app\\common\\controller\\Backend</code>中所支持的方法如下</p></blockquote><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 加载语言文件
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span> <span class="token parameter">$name</span>
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">loadlang</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 渲染配置信息
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$name</span> 键名或数组
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$value</span> 值 
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">assignconfig</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$value</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>    
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 生成查询所需要的条件,排序方式
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">mixed</span></span> <span class="token parameter">$searchfields</span> 快速查询的字段
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">boolean</span></span> <span class="token parameter">$relationSearch</span> 是否关联查询
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">buildparams</span><span class="token punctuation">(</span><span class="token variable">$searchfields</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token variable">$relationSearch</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>    
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 获取数据限制的管理员ID
 * 禁用数据限制时返回的是null
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">getDataLimitAdminIds</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>    
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Selectpage的实现方法
 * 
 * 当前方法只是一个比较通用的搜索匹配,请按需重载此方法来编写自己的搜索逻辑,$where按自己的需求写即可
 * 这里示例了所有的参数，所以比较复杂，实现上自己实现只需简单的几行即可
 * 
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">selectpage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据限制-这个是重点" tabindex="-1"><a class="header-anchor" href="#数据限制-这个是重点" aria-hidden="true">#</a> 数据限制(这个是重点)</h3><p>在后台开发的过程中经常会有这样的一个需求，每个管理员单独管理自己添加的数据或单独管理自己下级管理员添加的数据，管理员之间的数据是不相通的，每个管理员看到的数据是不同的。在<code>FastAdmin</code>中可以很方便的实现此功能</p><p>首先我们需要在当前控制器添加以下两个属性</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$dataLimit</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">;</span> <span class="token comment">//默认基类中为false，表示不启用，可额外使用auth和personal两个值</span>
<span class="token keyword">protected</span> <span class="token variable">$dataLimitField</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;admin_id&#39;</span><span class="token punctuation">;</span> <span class="token comment">//数据关联字段,当前控制器对应的模型表中必须存在该字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$dataLimit</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span> <span class="token comment">//表示不启用，显示所有数据</span>
<span class="token variable">$dataLimit</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">;</span> <span class="token comment">//表示显示当前自己和所有子级管理员的所有数据</span>
<span class="token variable">$dataLimit</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;personal&#39;</span><span class="token punctuation">;</span> <span class="token comment">//表示仅显示当前自己的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$dataLimitField字段默认为admin_id，请注意添加该字段类型为int(10)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过以上配置后，在列表加载数据的时候将默认添加条件过滤不属于自己权限的数据，同时在添加时会自动维护<code>admin_id</code>的数据，在编辑、删除的时候会自动控制权限避免越权操作</p><h3 id="关联查询-这个是重点" tabindex="-1"><a class="header-anchor" href="#关联查询-这个是重点" aria-hidden="true">#</a> 关联查询(这个是重点)</h3><p>目前<code>FastAdmin</code>后台<code>index</code>方法支持一对一关联查询，比如我们一篇文章有归属分类，我们在列出数据时需要同时列表文章分类名称。需要在当前控制器中添加以下属性</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$relationSearch</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们修改控制器的<code>index</code>方法，代码如下：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">request</span><span class="token operator">-&gt;</span><span class="token function">isAjax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">list</span><span class="token punctuation">(</span><span class="token variable">$where</span><span class="token punctuation">,</span> <span class="token variable">$sort</span><span class="token punctuation">,</span> <span class="token variable">$order</span><span class="token punctuation">,</span> <span class="token variable">$offset</span><span class="token punctuation">,</span> <span class="token variable">$limit</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">buildparams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$total</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span>
                <span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;category&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token variable">$where</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token variable">$sort</span><span class="token punctuation">,</span> <span class="token variable">$order</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$list</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span>
                <span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;category&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token variable">$where</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token variable">$sort</span><span class="token punctuation">,</span> <span class="token variable">$order</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token variable">$offset</span><span class="token punctuation">,</span> <span class="token variable">$limit</span><span class="token punctuation">)</span>
                <span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;total&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$total</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;rows&quot;</span> <span class="token operator">=&gt;</span> <span class="token variable">$list</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">json</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">view</span><span class="token operator">-&gt;</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在控制器对应的model(非关联model)中添加以下代码：</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">category</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">belongsTo</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Category&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;category_id&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">setEagerlyType</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据校验" tabindex="-1"><a class="header-anchor" href="#数据校验" aria-hidden="true">#</a> 数据校验</h3><p>在<code>FastAdmin</code>中默认的<code>add/edit</code>方法可以使用模型验证，验证器位于<code>application/admin/validate/模型名.php</code>中，模型验证默认是关闭的状态，如果需要启用，我们需要在当前控制器定义以下属性</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$modelValidate</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//是否开启Validate验证，默认是false关闭状态</span>
<span class="token keyword">protected</span> <span class="token variable">$modelSceneValidate</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//是否开启模型场景验证，默认是false关闭状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当开启模型验证后，我们的添加和修改操作都会首先进行模型验证，验证不通过将会抛出错误信息，具体的模型验证规则可以参考TP5官方文档的模型验证规则</p><h3 id="权限控制-这个是重点" tabindex="-1"><a class="header-anchor" href="#权限控制-这个是重点" aria-hidden="true">#</a> 权限控制(这个是重点)</h3><p>在基类中我们有定义以下两个属性</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$noNeedLogin</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//无需登录的方法,同时也就不需要鉴权了</span>
<span class="token keyword">protected</span> <span class="token variable">$noNeedRight</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//无需鉴权的方法,但需要登录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们有定义一个方法<code>mywork</code>，而这个方法是不需要登录即可访问的，则我们需要在当前的控制器定义</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$noNeedLogin</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;mywork&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们有定义一个方法<code>mytest</code>，而这个方法是需要登录后任何管理员都可以访问，则我们需要在当前的控制器定义</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$noNeedRight</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;mytest&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们需要动态定义，请务必放在调用父类的<code>_initialize</code>方法之前，否则是不会生效的</p><h3 id="视图渲染" tabindex="-1"><a class="header-anchor" href="#视图渲染" aria-hidden="true">#</a> 视图渲染</h3><p>基类<code>app\\common\\controller\\Backend</code>会默认渲染以下几个对象到视图中</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//渲染站点配置</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;site&#39;</span><span class="token punctuation">,</span> <span class="token variable">$site</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渲染配置信息</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;config&#39;</span><span class="token punctuation">,</span> <span class="token variable">$config</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渲染权限对象</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;auth&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">auth</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渲染管理员对象</span>
<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">Session</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以在视图中使用<code>{$site.name}</code>、<code>{$config.modulename}</code>、<code>{$auth.id}</code>、<code>{$admin.username}</code>来获取我们所需要的数据</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$site</span>所支持的数据对应为application<span class="token operator">/</span>extra<span class="token operator">/</span>site<span class="token operator">.</span>php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$config</span>所支持的数据为
<span class="token string single-quoted-string">&#39;site&#39;</span>           <span class="token operator">=&gt;</span> <span class="token variable">$site</span>中的<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;cdnurl&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;version&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;timezone&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;languages&#39;</span>字段<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;upload&#39;</span>         <span class="token operator">=&gt;</span> application<span class="token operator">/</span>extra<span class="token operator">/</span>upload<span class="token operator">.</span>php中数据<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;modulename&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;controllername&#39;</span> <span class="token operator">=&gt;</span> 控制器名<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;actionname&#39;</span>     <span class="token operator">=&gt;</span> 方法名<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;jsname&#39;</span>         <span class="token operator">=&gt;</span> 控制器<span class="token constant">JS</span>所加载的路径<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;moduleurl&#39;</span>      <span class="token operator">=&gt;</span> 后台module的链接<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;language&#39;</span>       <span class="token operator">=&gt;</span> 当前语言<span class="token punctuation">,</span>
<span class="token string single-quoted-string">&#39;fastadmin&#39;</span>      <span class="token operator">=&gt;</span> application<span class="token operator">/</span>config<span class="token operator">.</span>php中fastadmin的配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$auth</span>是一个对象，所对应的类是application<span class="token operator">/</span>admin<span class="token operator">/</span>library<span class="token operator">/</span>Auth<span class="token operator">.</span>php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$admin</span>是一个当前管理员登录的session数据，存储有管理员的用户名、昵称、<span class="token constant">ID</span>、头像等信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们需要在JS中使用以上数据，则使用以下语句来获取相关的配置信息</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Config<span class="token punctuation">.</span>site<span class="token punctuation">.</span>name
Config<span class="token punctuation">.</span>modulename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们需要自己在控制器中透传数据到JS中去，则可以使用控制器的<code>assignconfig</code>方法来透传，使用如下</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">assignconfig</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;demo&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;名称&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们就可以在JS中使用以下语句来获取对应的数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Config<span class="token punctuation">.</span>demo<span class="token punctuation">.</span>name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="模板布局" tabindex="-1"><a class="header-anchor" href="#模板布局" aria-hidden="true">#</a> 模板布局</h3><p>控制器默认全部采用模板布局，因此我们的页面都会自动加上头部和尾部，如果我们有特殊的页面不需要采用模板布局，我们可以使用以下语句来关闭当前方法的模板布局</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">view</span><span class="token operator">-&gt;</span><span class="token property">engine</span><span class="token operator">-&gt;</span><span class="token function">layout</span><span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们需要使用自己的模板布局，在当前控制器定义以下语句即可</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$layout</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;布局模板&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>请注意如果采用了自己的模板布局或禁用了模板布局，将无法使用<code>FastAdmin的JS按需加载和Config变量访问</code></p>`,58),o=[t];function i(c,l){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","03.html.vue"]]);export{r as default};
