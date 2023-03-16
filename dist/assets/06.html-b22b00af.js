import{_ as t,p as o,q as i,s as n,R as a,t as e,Z as l,n as p}from"./framework-823c4b5a.js";const c={},r=n("h3",{id:"egg-validate",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#egg-validate","aria-hidden":"true"},"#"),a(" egg-validate")],-1),d=n("blockquote",null,[n("p",null,"egg-validate是基于parameter")],-1),u={href:"https://github.com/eggjs/egg-validate",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/node-modules/parameter",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.cnblogs.com/hengyumo/p/11134619.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<h4 id="关于内置的验证规则-请翻阅文档查看" tabindex="-1"><a class="header-anchor" href="#关于内置的验证规则-请翻阅文档查看" aria-hidden="true">#</a> 关于内置的验证规则，请翻阅文档查看</h4><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --save egg-validate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><blockquote><p>config/config.default.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//表单验证</span>
config<span class="token punctuation">.</span>validate <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// convert: false,</span>
	<span class="token comment">// validateRoot: false,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>config/plugin.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//表单效验</span>
exports<span class="token punctuation">.</span>validate <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&#39;egg-validate&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//设置验证规则</span>
	<span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>app<span class="token punctuation">.</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body<span class="token punctuation">)</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;表单填写有误，请重新填写表单&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function g(h,b){const s=p("ExternalLinkIcon");return o(),i("div",null,[r,d,n("ul",null,[n("li",null,[n("a",u,[a("egg-validate文档"),e(s)])]),n("li",null,[n("a",v,[a("parameter文档"),e(s)])]),n("li",null,[n("a",k,[a("egg-validate参考文档"),e(s)])])]),m])}const _=t(c,[["render",g],["__file","06.html.vue"]]);export{_ as default};
