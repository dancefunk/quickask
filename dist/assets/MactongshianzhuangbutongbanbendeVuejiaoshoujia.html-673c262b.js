import{_ as s,r as d,o as l,c as r,b as e,d as n,e as a,a as t}from"./app-6f490402.js";const u={},c=e("h4",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),n(" 参考链接")],-1),v={href:"https://blog.csdn.net/weixin_45603293/article/details/118444822",target:"_blank",rel:"noopener noreferrer"},o={href:"https://blog.csdn.net/jcyyyyyy/article/details/120520585",target:"_blank",rel:"noopener noreferrer"},b=t(`<h4 id="先安装一个想要兼容的脚手架版本-比如说" tabindex="-1"><a class="header-anchor" href="#先安装一个想要兼容的脚手架版本-比如说" aria-hidden="true">#</a> 先安装一个想要兼容的脚手架版本 比如说：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vue/cli@4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="安装完之后-我们去全局目录先拷贝一份用来备份" tabindex="-1"><a class="header-anchor" href="#安装完之后-我们去全局目录先拷贝一份用来备份" aria-hidden="true">#</a> 安装完之后，我们去全局目录先拷贝一份用来备份</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安装路径
/usr/local/lib/node_modules/@vue

比如我们备份一个，改一下别名
@vues
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="然后在卸载掉-在去安装最新版的vue脚手架" tabindex="-1"><a class="header-anchor" href="#然后在卸载掉-在去安装最新版的vue脚手架" aria-hidden="true">#</a> 然后在卸载掉，在去安装最新版的vue脚手架</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>卸载命令，有些不会自动删除全局文件夹，然后去全局目录里面自己删除掉
sudo npm uninstall -g @vue/cli

安装最新脚手架，安装到全局
npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="接下来我们要配置两个版本" tabindex="-1"><a class="header-anchor" href="#接下来我们要配置两个版本" aria-hidden="true">#</a> 接下来我们要配置两个版本</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>全局路径
	这个目录不需要创建，这个是已经安装好的最新版脚手架， 我当前最新的是vue/cli 5.0 的版本
	/usr/local/lib/node_modules/@vue  
	
	这个目录是我们先前备份的 另一个版本  这个版本是 vue/cli 4.5 的版本
	/usr/local/lib/node_modules/@vues
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置vues替身" tabindex="-1"><a class="header-anchor" href="#配置vues替身" aria-hidden="true">#</a> 配置vues替身</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>配置好这两个全局路径后，我们可以在系统中，配置一个vue的别名环境变量 给我们另一个版本(vues) 来使用

源文件地址需要是绝对路径

ln -s 源文件[目录] 目标文件[目录]

ln -s /usr/local/lib/node_modules/@vues/cli/bin/vue.js /usr/local/bin/vues
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="最后检验一下结果" tabindex="-1"><a class="header-anchor" href="#最后检验一下结果" aria-hidden="true">#</a> 最后检验一下结果</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vue --version
@vue/cli 5.0.8

vues --version
@vue/cli 4.5.19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function h(m,x){const i=d("ExternalLinkIcon");return l(),r("div",null,[c,e("ul",null,[e("li",null,[e("p",null,[e("a",v,[n("Windows同一设备安装不同版本的Vue脚手架"),a(i)])])]),e("li",null,[e("p",null,[e("a",o,[n("Mac同一设备安装不同版本的Vue脚手架"),a(i)])])])]),b])}const _=s(u,[["render",h],["__file","MactongshianzhuangbutongbanbendeVuejiaoshoujia.html.vue"]]);export{_ as default};
