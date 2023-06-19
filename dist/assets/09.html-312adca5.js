import{_ as e,r as t,o as p,c as o,b as n,d as s,e as c,a as l}from"./app-c220f801.js";const i={},r=n("h3",{id:"nodemailer邮件发送",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nodemailer邮件发送","aria-hidden":"true"},"#"),s(" NodeMailer邮件发送")],-1),u={href:"https://nodemailer.com/",target:"_blank",rel:"noopener noreferrer"},d=l(`<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install nodemailer --save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这里举简单例子，也可以封装成service来调用</span>
<span class="token comment">// 引入nodemailer</span>
<span class="token keyword">const</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;nodemailer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 封装发送者信息</span>
<span class="token keyword">const</span> transporter <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">&#39;163&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 调用163服务器</span>
  <span class="token literal-property property">secureConnection</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启动SSL</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">465</span><span class="token punctuation">,</span> <span class="token comment">// 端口就是465</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">&#39;xxxxx@163.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 账号</span>
    <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 授权码,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 邮件参数及内容</span>
<span class="token keyword">const</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;xxxxx@163.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 发送者,与上面的user一致</span>
  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;xxxx@xxx.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 接收者,可以同时发送多个,以逗号隔开</span>
  <span class="token literal-property property">subject</span><span class="token operator">:</span> <span class="token string">&#39;测试的邮件&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span>
  <span class="token comment">// text: &#39;测试内容&#39;, // 文本</span>
  <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token string">&#39;&lt;h2&gt;测试一下:&lt;/h2&gt;&lt;a class=&quot;elem-a&quot; href=&quot;https://baidu.com&quot;&gt;&lt;span class=&quot;content-elem-span&quot;&gt;测试链接&lt;/span&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 调用函数，发送邮件</span>
<span class="token keyword">await</span> transporter<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装服务" tabindex="-1"><a class="header-anchor" href="#封装服务" aria-hidden="true">#</a> 封装服务</h3><ul><li>上面是直接使用nodemailer，在实际开发中，我们可以对其进行简单封装，以便调用</li></ul><blockquote><p>app/service/email.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Service <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;egg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Service<span class="token punctuation">;</span>

<span class="token keyword">const</span> nodemailer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;nodemailer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user_email <span class="token operator">=</span> <span class="token string">&#39;example@163.com&#39;</span><span class="token punctuation">;</span>   <span class="token comment">//发送者邮箱</span>
<span class="token keyword">const</span> auth_code <span class="token operator">=</span> <span class="token string">&#39;xxxxxx&#39;</span><span class="token punctuation">;</span>  <span class="token comment">//授权码</span>

<span class="token keyword">const</span> transporter <span class="token operator">=</span> nodemailer<span class="token punctuation">.</span><span class="token function">createTransport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">service</span><span class="token operator">:</span> <span class="token string">&#39;163&#39;</span><span class="token punctuation">,</span> <span class="token comment">//服务商</span>
  <span class="token literal-property property">secureConnection</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">//是否开启https</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">465</span><span class="token punctuation">,</span>  <span class="token comment">//端口</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> user_email<span class="token punctuation">,</span> <span class="token comment">// 账号</span>
    <span class="token literal-property property">pass</span><span class="token operator">:</span> auth_code<span class="token punctuation">,</span> <span class="token comment">// 授权码</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">EmailService</span> <span class="token keyword">extends</span> <span class="token class-name">Service</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">sendMail</span><span class="token punctuation">(</span><span class="token parameter">email<span class="token punctuation">,</span> subject<span class="token punctuation">,</span> text<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> 
  <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mailOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">from</span><span class="token operator">:</span> user_email<span class="token punctuation">,</span> <span class="token comment">// 发送者,与上面的user一致</span>
      <span class="token literal-property property">to</span><span class="token operator">:</span> email<span class="token punctuation">,</span>   <span class="token comment">// 接收者,可以同时发送多个,以逗号隔开</span>
      subject<span class="token punctuation">,</span>   <span class="token comment">// 标题</span>
      text<span class="token punctuation">,</span>   <span class="token comment">// 文本</span>
      html<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> transporter<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>mailOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> EmailService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制器调用" tabindex="-1"><a class="header-anchor" href="#控制器调用" aria-hidden="true">#</a> 控制器调用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> email <span class="token operator">=</span> <span class="token string">&#39;xxxxx@qq.com&#39;</span><span class="token punctuation">;</span>  <span class="token comment">// 接收者的邮箱</span>
<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token string">&#39;测试邮件&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token string">&#39;这是一封测试邮件&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">&#39;&lt;h2&gt;测试一下::&lt;/h2&gt;&lt;a class=&quot;elem-a&quot; href=&quot;https://baidu.com&quot;&gt;&lt;span class=&quot;content-elem-span&quot;&gt;测试链接&lt;/span&gt;&lt;/a&gt;&#39;</span><span class="token punctuation">;</span>
    
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>service<span class="token punctuation">.</span>email<span class="token punctuation">.</span><span class="token function">sendMail</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> subject<span class="token punctuation">,</span> text<span class="token punctuation">,</span> html<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//查看是否发送成功</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function k(m,v){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",u,[s("https://nodemailer.com/"),c(a)])]),d])}const y=e(i,[["render",k],["__file","09.html.vue"]]);export{y as default};
