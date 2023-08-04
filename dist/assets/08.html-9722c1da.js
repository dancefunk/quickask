import{_ as s,r as a,o as d,c as u,b as e,d as t,e as i,a as l}from"./app-d0ac87ef.js";const o={},r=e("h3",{id:"分包机制",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分包机制","aria-hidden":"true"},"#"),t(" 分包机制")],-1),v={href:"https://uniapp.dcloud.net.cn/collocation/pages.html#subpackages",target:"_blank",rel:"noopener noreferrer"},c=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>小程序在打包上传的时候体积不可以超过2M的大小，如果我们的项目体积超过了2M的话，就会需要用到分包机制。
分包就是把财产分给自己的兄弟，但是又属于自己的大家庭
微信小程序每个分包的大小是2M，总体积一共不能超过16M
uni-app内支持对微信小程序、QQ小程序、百度小程序分包优化，即将静态资源或者js文件放入分包内不占用主包大小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={href:"https://uniapp.dcloud.io/collocation/manifest.html#%E5%85%B3%E4%BA%8E%E5%88%86%E5%8C%85%E4%BC%98%E5%8C%96%E7%9A%84%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},b=l(`<h3 id="分包目录结构" tabindex="-1"><a class="header-anchor" href="#分包目录结构" aria-hidden="true">#</a> 分包目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>┌─pages
│  ├─index
│  │  └─index.vue
│  └─login
│     └─login.vue
├─pagesA
│  ├─static
│  └─list
│     └─list.vue
├─pagesB
│  ├─static
│  └─detail
│     └─detail.vue
├─static
├─main.js
├─App.vue
├─manifest.json
└─pages.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则需要在 pages.json 中填写</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	&quot;pages&quot;: [{
		&quot;path&quot;: &quot;pages/index/index&quot;,
		&quot;style&quot;: { ...}
	}, {
		&quot;path&quot;: &quot;pages/login/login&quot;,
		&quot;style&quot;: { ...}
	}],
	&quot;subPackages&quot;: [{
		&quot;root&quot;: &quot;pagesA&quot;,
		&quot;pages&quot;: [{
			&quot;path&quot;: &quot;list/list&quot;,
			&quot;style&quot;: { ...}
		}]
	}, {
		&quot;root&quot;: &quot;pagesB&quot;,
		&quot;pages&quot;: [{
			&quot;path&quot;: &quot;detail/detail&quot;,
			&quot;style&quot;: { ...}
		}]
	}],
	&quot;preloadRule&quot;: {
		&quot;pagesA/list/list&quot;: {
			&quot;network&quot;: &quot;all&quot;,
			&quot;packages&quot;: [&quot;__APP__&quot;]
		},
		&quot;pagesB/detail/detail&quot;: {
			&quot;network&quot;: &quot;all&quot;,
			&quot;packages&quot;: [&quot;pagesA&quot;]
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="preloadrule" tabindex="-1"><a class="header-anchor" href="#preloadrule" aria-hidden="true">#</a> preloadRule</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>配置preloadRule后，在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度

preloadRule 中，key 是页面路径，value 是进入此页面的预下载配置，每个配置有以下几项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">packages</td><td style="text-align:left;">进入页面后预下载分包的 root 或 name。<code>__APP__</code> 表示主包。</td></tr><tr><td style="text-align:left;">network</td><td style="text-align:left;">在指定网络下预下载，可选值为：all（不限网络）、wifi（仅wifi下预下载）</td></tr></tbody></table><p>app的分包，同样支持preloadRule，但网络规则无效</p>`,8);function p(q,g){const n=a("ExternalLinkIcon");return d(),u("div",null,[r,e("p",null,[e("a",v,[t("分包详情链接"),i(n)])]),c,e("p",null,[t("详情参考："),e("a",m,[t("关于分包优化说明"),i(n)])]),b])}const x=s(o,[["render",p],["__file","08.html.vue"]]);export{x as default};
