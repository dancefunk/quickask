import{_ as e,p as n,q as i,Y as d}from"./framework-aa5c4115.js";const s={},l=d(`<h3 id="nodejs-nodemailer" tabindex="-1"><a class="header-anchor" href="#nodejs-nodemailer" aria-hidden="true">#</a> NodeJS-Nodemailer</h3><p>使用nodejs模块发送邮件</p><blockquote><ul><li>package.json</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;mail&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;&quot;,
  &quot;main&quot;: &quot;mail.js&quot;,
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;echo \\&quot;Error: no test specified\\&quot; &amp;&amp; exit 1&quot;
  },
  &quot;author&quot;: &quot;&quot;,
  &quot;license&quot;: &quot;ISC&quot;,
  &quot;dependencies&quot;: {
    &quot;nodemailer&quot;: &quot;^4.0.1&quot;,
    &quot;nodemailer-smtp-transport&quot;: &quot;^2.7.4&quot;,
    &quot;nodemailer-wellknown&quot;: &quot;^0.2.3&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>mail.js</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var nodemailer = require(&quot;nodemailer&quot;);
var smtpTransport = require(&#39;nodemailer-smtp-transport&#39;);
var wellknown = require(&quot;nodemailer-wellknown&quot;);
var config = wellknown(&quot;163&quot;);   //所选择的第三方服务

config.auth = {
    user:&#39;xxxxxxx@163.com&#39;,  //邮件账号
    pass:&#39;xxxxxxxxxxxx&#39;   //这里密码不是163密码，是你设置的smtp授权密码
}


var transporter = nodemailer.createTransport(smtpTransport(config));

var mailOptions = {
    from:&quot;xxxxxxx@163.com&quot;,   //发送方的邮件地址
    to:&quot;xxxxxxxxxx@qq.com&quot;,    //收件人的邮件地址
    subject:&quot;问答社区&quot;,  //邮件主题
    text:&quot;text plain&quot;,    //邮件文档类型
    html:&quot;&lt;div&gt;您好&lt;/div&gt;&quot;   //邮件正文内容
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log(&#39;Message sent: &#39; + info.response);

});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sendcloud" tabindex="-1"><a class="header-anchor" href="#sendcloud" aria-hidden="true">#</a> sendcloud</h3><p>使用第三方平台<code>(sendcloud)</code>发送邮件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?php
//http://sendcloud.sohu.com/
function send_mail() {
  $url = &#39;http://api.sendcloud.net/apiv2/mail/send&#39;;
  $API_USER = &#39;xxxxxxxxxxxxxx&#39;;
  $API_KEY = &#39;xxxxxxxxxxxxxx&#39;;

  //您需要登录SendCloud创建API_USER，使用API_USER和API_KEY才可以进行邮件的发送。
  $param = array(
      &#39;apiUser&#39; =&gt; $API_USER,
      &#39;apiKey&#39; =&gt; &#39;xxxxxxxxxxxxxx&#39;,
      &#39;from&#39; =&gt; &#39;service@sendcloud.im&#39;,
      &#39;fromName&#39; =&gt; &#39;SendCloud测试邮件&#39;,
      &#39;to&#39; =&gt; &#39;xxxxxxxxxx@qq.com&#39;,
      &#39;subject&#39; =&gt; &#39;来自SendCloud的第一封邮件！&#39;,
      &#39;html&#39; =&gt; &#39;你太棒了！你已成功的从SendCloud发送了一封测试邮件，接下来快登录前台去完善账户信息吧！&#39;,
      &#39;respEmailId&#39; =&gt; &#39;true&#39;);

  $data = http_build_query($param);

  $options = array(
        &#39;http&#39; =&gt; array(
        &#39;method&#39;  =&gt; &#39;POST&#39;,
        &#39;header&#39;  =&gt; &#39;Content-Type: application/x-www-form-urlencoded&#39;,
        &#39;content&#39; =&gt; $data
  ));

  $context  = stream_context_create($options);
  $result = file_get_contents($url, false, $context);

  return $result;
}

echo send_mail();
?&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),t=[l];function a(r,u){return n(),i("div",null,t)}const v=e(s,[["render",a],["__file","06.html.vue"]]);export{v as default};
