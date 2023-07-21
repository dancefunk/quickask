import{_ as i,r as l,o as r,c,b as n,d as a,e as s,a as t}from"./app-6f490402.js";const d={},o=n("h3",{id:"antd-ui框架",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#antd-ui框架","aria-hidden":"true"},"#"),a(" antd - UI框架")],-1),p={href:"https://ant.design/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://mobile.ant.design/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://pro.ant.design/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://procomponents.ant.design/",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="安装-我们安装pc版本为例" tabindex="-1"><a class="header-anchor" href="#安装-我们安装pc版本为例" aria-hidden="true">#</a> 安装(我们安装PC版本为例)</h3><blockquote><p>使用 NPM 或者 Yarn 安装</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install antd -S

yarn add antd -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h3><blockquote><p>我们随便找个组件来使用一下</p></blockquote><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>import React from &#39;react&#39;
import { Switch } from &#39;antd&#39;

export default class ui extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {}
    }

    onChange(checked) 
    {
        console.log(\`switch to \${checked}\`)
    }

    render()
    {
        return (
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                UI组件调用示例
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">defaultChecked</span> <span class="token special-attr"><span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token value javascript language-javascript"><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span></span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        )
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vant-ui框架" tabindex="-1"><a class="header-anchor" href="#vant-ui框架" aria-hidden="true">#</a> Vant - UI框架</h3>`,7),b={href:"https://react-vant-gitee.3lang.dev/",target:"_blank",rel:"noopener noreferrer"},k=t(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i react-vant@next

yarn add react-vant@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="直接使用" tabindex="-1"><a class="header-anchor" href="#直接使用" aria-hidden="true">#</a> 直接使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>直接引入组件即可，react-vant 会自动为你加载 css 样式文件：
import { Button } from &#39;react-vant&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="还要一种如果不想每个文件都重复引入的话-可以使用下面这种" tabindex="-1"><a class="header-anchor" href="#还要一种如果不想每个文件都重复引入的话-可以使用下面这种" aria-hidden="true">#</a> 还要一种如果不想每个文件都重复引入的话，可以使用下面这种</h3><blockquote><p>src/index.js</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as vant from &#39;react-vant&#39;

//将UI框架自定义属性挂载到全局上 我们自己加的步骤，官网没有这个操作
React.$vant = vant
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>src/component/login.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
	<span class="token keyword">return</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token operator">&lt;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>$vant<span class="token punctuation">.</span>Switch defaultChecked <span class="token operator">/</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function g(x,_){const e=l("ExternalLinkIcon");return r(),c("div",null,[o,n("ul",null,[n("li",null,[n("a",p,[a("https://ant.design/"),s(e)]),a(" - PC版本")]),n("li",null,[n("a",u,[a("https://mobile.ant.design/"),s(e)]),a(" - 移动端版本")]),n("li",null,[n("a",v,[a("https://pro.ant.design/"),s(e)]),a(" - ANT DESIGN PRO")]),n("li",null,[n("a",m,[a("https://procomponents.ant.design/"),s(e)]),a(" - ProComponents")])]),h,n("p",null,[n("a",b,[a("https://react-vant-gitee.3lang.dev/"),s(e)]),a(" - React版本的Vant框架")]),k])}const q=i(d,[["render",g],["__file","03.html.vue"]]);export{q as default};
