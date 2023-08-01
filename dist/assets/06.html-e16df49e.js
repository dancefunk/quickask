import{_ as s,r as a,o as l,c as i,b as e,d as t,e as d,a as r}from"./app-47c2ac71.js";const o={},c=e("h3",{id:"条件编译",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#条件编译","aria-hidden":"true"},"#"),t(" 条件编译")],-1),u={href:"https://uniapp.dcloud.io/platform",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>条件编译是用特殊的注释作为标记，在编译时根据这些特殊的注释，将注释里面的代码编译到不同平台。

写法：以 #ifdef 或 #ifndef 加 %PLATFORM% 开头，以 #endif 结尾。

#ifdef：if defined 仅在某平台存在
#ifndef：if not defined 除了某平台均存在
%PLATFORM%：平台名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>%PLATFORM% 可取值如下：</p></blockquote><table><thead><tr><th style="text-align:left;">值</th><th style="text-align:left;">生效条件</th></tr></thead><tbody><tr><td style="text-align:left;">VUE3</td><td style="text-align:left;">HBuilderX 3.2.0+ 详情</td></tr><tr><td style="text-align:left;">APP-PLUS</td><td style="text-align:left;">App</td></tr><tr><td style="text-align:left;">APP-PLUS-NVUE或APP-NVUE</td><td style="text-align:left;">App nvue</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:left;">H5</td></tr><tr><td style="text-align:left;">MP-WEIXIN</td><td style="text-align:left;">微信小程序</td></tr><tr><td style="text-align:left;">MP-ALIPAY</td><td style="text-align:left;">支付宝小程序</td></tr><tr><td style="text-align:left;">MP-BAIDU</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">MP-TOUTIAO</td><td style="text-align:left;">字节跳动小程序</td></tr><tr><td style="text-align:left;">MP-LARK</td><td style="text-align:left;">飞书小程序</td></tr><tr><td style="text-align:left;">MP-QQ</td><td style="text-align:left;">QQ小程序</td></tr><tr><td style="text-align:left;">MP-KUAISHOU</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">MP-360</td><td style="text-align:left;">360小程序</td></tr><tr><td style="text-align:left;">MP</td><td style="text-align:left;">微信小程序/支付宝小程序/百度小程序/字节跳动小程序/飞书小程序/QQ小程序/360小程序</td></tr><tr><td style="text-align:left;">QUICKAPP-WEBVIEW</td><td style="text-align:left;">快应用通用(包含联盟、华为)</td></tr><tr><td style="text-align:left;">QUICKAPP-WEBVIEW-UNION</td><td style="text-align:left;">快应用联盟</td></tr><tr><td style="text-align:left;">QUICKAPP-WEBVIEW-HUAWEI</td><td style="text-align:left;">快应用华为</td></tr></tbody></table><h3 id="代码中条件编译" tabindex="-1"><a class="header-anchor" href="#代码中条件编译" aria-hidden="true">#</a> 代码中条件编译</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// #ifdef  APP-PLUS</span>
平台特有的<span class="token constant">API</span>实现
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件的条件编译" tabindex="-1"><a class="header-anchor" href="#组件的条件编译" aria-hidden="true">#</a> 组件的条件编译</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--  #ifdef APP-PLUS --&gt;</span>
	仅在App下面编译
<span class="token comment">&lt;!--  #endif --&gt;</span>

<span class="token comment">&lt;!-- #ifdef MP-WEIXIN --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>official-account</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>official-account</span><span class="token punctuation">&gt;</span></span>
    仅在微信小程序下面编译
<span class="token comment">&lt;!-- #endif --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式的条件编译" tabindex="-1"><a class="header-anchor" href="#样式的条件编译" aria-hidden="true">#</a> 样式的条件编译</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/*  #ifdef APP-PLUS */</span>
	仅在App下生效
<span class="token comment">/*  #endif  */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pages-json-的条件编译" tabindex="-1"><a class="header-anchor" href="#pages-json-的条件编译" aria-hidden="true">#</a> pages.json 的条件编译</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// #ifdef APP-PLUS</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/api/speech/speech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;navigationbartitletext&quot;</span><span class="token operator">:</span> &quot;语音识别
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// #endif</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="uniapp-hbuild打包app-node-sass报错解决记录" tabindex="-1"><a class="header-anchor" href="#uniapp-hbuild打包app-node-sass报错解决记录" aria-hidden="true">#</a> uniapp HBuild打包APP node-sass报错解决记录</h3><blockquote><p>报错信息</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 
8.x [HBuilder] 10:52:46.052 Found bindings for the following environments:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>问题的原因</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HBuild有个内置的node，是v12版本的
而我们自己的版本是v16版本的

在打包发布的时候会使用HBuild内置的node，所以是会报错的。

我们node_module下的包是用高版本的node生成的，但是在打包的时候使用的HBuild里面的低版本的node
所以就会找不到需要的东西

我们可以用全局的node，来代替HBuild内置的node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>解决方案</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>首先进入HBuild自带的node下面，将node重命名即可备份：
cd /Applications/HBuilderX.app/Contents/HBuilderX/plugins/node
mv node node-backup

然后添加全局node的软链接
ln -s /usr/local/bin/node /Applications/HBuilderX.app/Contents/HBuilderX/plugins/node/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后重启HBuild，再次打包，就没有问题了~</p>`,19);function v(m,b){const n=a("ExternalLinkIcon");return l(),i("div",null,[c,e("blockquote",null,[e("p",null,[e("a",u,[t("https://uniapp.dcloud.io/platform"),d(n)])])]),p])}const f=s(o,[["render",v],["__file","06.html.vue"]]);export{f as default};
