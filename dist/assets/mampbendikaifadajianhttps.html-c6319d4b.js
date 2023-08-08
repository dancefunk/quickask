import{_ as n,o as s,c as a,a as e}from"./app-1b1b276f.js";const i="/dist/assets/images/article/2021/ssl.png",l="/dist/assets/images/article/2021/mamp.png",t={},r=e(`<h3 id="安装openssl" tabindex="-1"><a class="header-anchor" href="#安装openssl" aria-hidden="true">#</a> 安装openssl</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>请自行搜索安装过程，这么不做过多讲解
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建证书存放目录" tabindex="-1"><a class="header-anchor" href="#新建证书存放目录" aria-hidden="true">#</a> 新建证书存放目录</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>/htdocs/localssl  这个目录你可以自己修改放在项目根目录也是可以的

例如这样：
/htdocs/project/localssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建生成证书所需的配置文件" tabindex="-1"><a class="header-anchor" href="#创建生成证书所需的配置文件" aria-hidden="true">#</a> 创建生成证书所需的配置文件</h3><blockquote><p>/localssl/openssl.conf</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span> req <span class="token punctuation">]</span>

default_bits        <span class="token operator">=</span> <span class="token number">2048</span>
default_keyfile     <span class="token operator">=</span> server-key.pem
distinguished_name  <span class="token operator">=</span> subject
req_extensions      <span class="token operator">=</span> req_ext
x509_extensions     <span class="token operator">=</span> x509_ext
string_mask         <span class="token operator">=</span> utf8only

<span class="token punctuation">[</span> subject <span class="token punctuation">]</span>

countryName                 <span class="token operator">=</span> Country Name <span class="token punctuation">(</span><span class="token number">2</span> letter code<span class="token punctuation">)</span>
countryName_default         <span class="token operator">=</span> US

stateOrProvinceName         <span class="token operator">=</span> State or Province Name <span class="token punctuation">(</span>full name<span class="token punctuation">)</span>
stateOrProvinceName_default <span class="token operator">=</span> NY

localityName                <span class="token operator">=</span> Locality Name <span class="token punctuation">(</span>eg, city<span class="token punctuation">)</span>
localityName_default        <span class="token operator">=</span> New York

organizationName            <span class="token operator">=</span> Organization Name <span class="token punctuation">(</span>eg, company<span class="token punctuation">)</span>
organizationName_default    <span class="token operator">=</span> Example, LLC

commonName                  <span class="token operator">=</span> Common Name <span class="token punctuation">(</span>e.g. server FQDN or YOUR name<span class="token punctuation">)</span>
commonName_default          <span class="token operator">=</span> Example Company

emailAddress                <span class="token operator">=</span> Email Address
emailAddress_default        <span class="token operator">=</span> test@example.com

<span class="token punctuation">[</span> x509_ext <span class="token punctuation">]</span>

subjectKeyIdentifier   <span class="token operator">=</span> <span class="token builtin class-name">hash</span>
authorityKeyIdentifier <span class="token operator">=</span> keyid,issuer

basicConstraints       <span class="token operator">=</span> CA:FALSE
keyUsage               <span class="token operator">=</span> digitalSignature, keyEncipherment
subjectAltName         <span class="token operator">=</span> @alternate_names
nsComment              <span class="token operator">=</span> <span class="token string">&quot;OpenSSL Generated Certificate&quot;</span>

<span class="token punctuation">[</span> req_ext <span class="token punctuation">]</span>

subjectKeyIdentifier <span class="token operator">=</span> <span class="token builtin class-name">hash</span>

basicConstraints     <span class="token operator">=</span> CA:FALSE
keyUsage             <span class="token operator">=</span> digitalSignature, keyEncipherment
subjectAltName       <span class="token operator">=</span> @alternate_names
nsComment            <span class="token operator">=</span> <span class="token string">&quot;OpenSSL Generated Certificate&quot;</span>

<span class="token punctuation">[</span> alternate_names <span class="token punctuation">]</span>

DNS.1       <span class="token operator">=</span> www.demo.com
IP.1        <span class="token operator">=</span> <span class="token number">127.0</span>.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非常注意点" tabindex="-1"><a class="header-anchor" href="#非常注意点" aria-hidden="true">#</a> 非常注意点</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>注意将文件的最后一行的改成自己的域名
DNS.1 = www.demo.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成证书命令" tabindex="-1"><a class="header-anchor" href="#生成证书命令" aria-hidden="true">#</a> 生成证书命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl req <span class="token parameter variable">-config</span> openssl.conf <span class="token parameter variable">-new</span> <span class="token parameter variable">-sha256</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-keyout</span> www.demo.com.key <span class="token parameter variable">-x509</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span> <span class="token parameter variable">-out</span> www.demo.com.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第二个值得注意的点" tabindex="-1"><a class="header-anchor" href="#第二个值得注意的点" aria-hidden="true">#</a> 第二个值得注意的点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>生成证书时，会有一系列问题需要填写，其他的问题都可以敲回车直接跳过

只将common name填写成你的域名 <span class="token punctuation">(</span>关键步骤<span class="token punctuation">)</span> ！！！

Common Name <span class="token punctuation">(</span>e.g. server FQDN or YOUR name<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>:www.demo.com

命令运行成功会在当前目录下生成两个文件：www.demo.com.crt, www.demo.com.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="授权步骤" tabindex="-1"><a class="header-anchor" href="#授权步骤" aria-hidden="true">#</a> 授权步骤</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、最好给个权限
	<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> localssl/

<span class="token number">2</span>、双击.crt的证书文件

<span class="token number">3</span>、打开钥匙串访问，在左侧栏系统中，找到你自己的ssl证书
	将证书的信任一栏，全部都改成始终信任
	
<span class="token number">4</span>、最后在去将ssl配置到虚拟主机上面去

<span class="token number">5</span>、重启环境在进行访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="ssl"></p><p><img src="'+l+'" alt="mamp"></p>',17),c=[r];function d(o,p){return s(),a("div",null,c)}const m=n(t,[["render",d],["__file","mampbendikaifadajianhttps.html.vue"]]);export{m as default};
