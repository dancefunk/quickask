import{_ as s,o as n,c as a,a as e}from"./app-4841f850.js";const t={},o=e(`<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有些时候，我们需要将自己封装的composer包安装到指定的目录
而composer默认会将包安装到 vendor 目录中，这样就达不到我们项目的要求
这个时候我们就可以借助第三方的工具，来自定义安装路径


这个是 composer 官方写的一个自定义加载路径的工具
https://github.com/composer/installers

这个是非官方的一个加载工具，我们本教程用下面的这个工具
https://github.com/oomphinc/composer-installers-extender

以下教程中我们统一下名称
插件包名称为：quickask/assets
本地测试项目文件夹为：test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件包目录结构-quickask-assets" tabindex="-1"><a class="header-anchor" href="#插件包目录结构-quickask-assets" aria-hidden="true">#</a> 插件包目录结构(quickask/assets)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer.json
assets
	/images
		1.jpg
	/css
		index.css
	/js
		index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装自定义目录工具" tabindex="-1"><a class="header-anchor" href="#安装自定义目录工具" aria-hidden="true">#</a> 安装自定义目录工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在我们自创的composer插件包目录下去安装：(quickask/assets)

composer require oomphinc/composer-installers-extender -vvv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装后的自创包的配置-composer-json" tabindex="-1"><a class="header-anchor" href="#安装后的自创包的配置-composer-json" aria-hidden="true">#</a> 安装后的自创包的配置 composer.json</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;quickask/assets&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Composer自定义的静态插件包&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;quickask&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dancefunk&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dancefunk@qq.com&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minimum-stability&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stable&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;oomphinc/composer-installers-extender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;allow-plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;composer/installers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;oomphinc/composer-installers-extender&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交当前仓库，并添加tag标签，发布到 <strong>packagist.org</strong> 线上平台</p><h3 id="随后在本地项目中配置-test文件夹" tabindex="-1"><a class="header-anchor" href="#随后在本地项目中配置-test文件夹" aria-hidden="true">#</a> 随后在本地项目中配置(test文件夹)</h3><blockquote><p>composer.json</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;extra&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;installer-types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;quickask&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  #这个quickask的值要和上面自创包中的\`type\`要一样
        <span class="token property">&quot;installer-paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;public/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;quickask/assets&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>     # 将 quickask/assets 这个包里面的文件 安装到 public/ 目录下
          <span class="token property">&quot;public/{$name}/&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;type:quickask&quot;</span><span class="token punctuation">]</span> # 将 type<span class="token operator">:</span>quickask 这个类型的包 根据名称自动安装的 public 目录下面
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最后安装-安装完成后进行查看" tabindex="-1"><a class="header-anchor" href="#最后安装-安装完成后进行查看" aria-hidden="true">#</a> 最后安装，安装完成后进行查看</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer require quickask/assets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如果要卸载的话" tabindex="-1"><a class="header-anchor" href="#如果要卸载的话" aria-hidden="true">#</a> 如果要卸载的话</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>composer remove quickask/assets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,16),i=[o];function p(c,l){return n(),a("div",null,i)}const u=s(t,[["render",p],["__file","03.html.vue"]]);export{u as default};
