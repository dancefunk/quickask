import{_ as p,r as e,o,c as l,b as n,d as s,e as t,a as i}from"./app-6325e707.js";const c={},u=n("h3",{id:"内置过滤器规则",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#内置过滤器规则","aria-hidden":"true"},"#"),s(" 内置过滤器规则")],-1),r={href:"https://www.runoob.com/php/php-ref-filter.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.php.net/manual/zh/book.filter.php",target:"_blank",rel:"noopener noreferrer"},d=i(`<h3 id="filter-var-单个值过滤" tabindex="-1"><a class="header-anchor" href="#filter-var-单个值过滤" aria-hidden="true">#</a> filter_var(单个值过滤)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//1、内置过滤类型 - 判断单个变量的值 是否为 指定类型 </span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">filter_var</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;123@qq.com&quot;</span><span class="token punctuation">,</span> <span class="token constant">FILTER_VALIDATE_EMAIL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//2、带过滤选项</span>
<span class="token variable">$options</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;options&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;min_range&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">//最小值</span>
        <span class="token string single-quoted-string">&#39;max_range&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">256</span> <span class="token comment">//最大值</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">filter_var</span><span class="token punctuation">(</span><span class="token number">250</span><span class="token punctuation">,</span> <span class="token constant">FILTER_VALIDATE_INT</span><span class="token punctuation">,</span> <span class="token variable">$options</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//3、自定义过滤函数</span>
<span class="token keyword">function</span> <span class="token function-definition function">convert</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;_&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">echo</span> <span class="token function">filter_var</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;www_demo_com&#39;</span><span class="token punctuation">,</span> <span class="token constant">FILTER_CALLBACK</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;options&#39;</span><span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;convert&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter-var-array-多个值过滤" tabindex="-1"><a class="header-anchor" href="#filter-var-array-多个值过滤" aria-hidden="true">#</a> filter_var_array(多个值过滤)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//判断多个变量的值 是否为 指定类型</span>

<span class="token variable">$info</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;age&#39;</span>   <span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;123@qq.com&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$filters</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;filter&#39;</span>  <span class="token operator">=&gt;</span> <span class="token constant">FILTER_CALLBACK</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;flags&#39;</span>   <span class="token operator">=&gt;</span> <span class="token constant">FILTER_FORCE_ARRAY</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;options&#39;</span> <span class="token operator">=&gt;</span><span class="token string single-quoted-string">&#39;ucwords&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;age&#39;</span>  <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;filter&#39;</span>  <span class="token operator">=&gt;</span> <span class="token constant">FILTER_VALIDATE_INT</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;options&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;min_range&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">&#39;max_range&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">120</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;email&#39;</span> <span class="token operator">=&gt;</span> <span class="token constant">FILTER_VALIDATE_EMAIL</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token function">filter_var_array</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">,</span><span class="token variable">$filters</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter-input-单个值过滤" tabindex="-1"><a class="header-anchor" href="#filter-input-单个值过滤" aria-hidden="true">#</a> filter_input(单个值过滤)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//对外部输入内容进行过滤，例如表单提交</span>
<span class="token comment">//输入的来源可以是：</span>
<span class="token comment">// INPUT_GET</span>
<span class="token comment">// INPUT_POST</span>
<span class="token comment">// INPUT_COOKIE</span>
<span class="token comment">// INPUT_ENV</span>
<span class="token comment">// INPUT_SERVER</span>
<span class="token comment">// INPUT_SESSION（尚未推行）</span>
<span class="token comment">// INPUT_REQUEST（尚未推行）</span>

<span class="token comment">//对 POST 请求中的 name=email 信息 进行 email类型过滤</span>
<span class="token variable">$res</span> <span class="token operator">=</span> <span class="token function">filter_input</span><span class="token punctuation">(</span><span class="token constant">INPUT_POST</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">,</span> <span class="token constant">FILTER_VALIDATE_EMAIL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$res</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token attr-name">required</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请输入邮箱<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter-input-array-多个值过滤" tabindex="-1"><a class="header-anchor" href="#filter-input-array-多个值过滤" aria-hidden="true">#</a> filter_input_array(多个值过滤)</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//对外部输入内容进行过滤，例如表单提交</span>
<span class="token variable">$filters</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">&quot;email&quot;</span><span class="token operator">=&gt;</span> <span class="token constant">FILTER_VALIDATE_EMAIL</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">&quot;age&quot;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string double-quoted-string">&quot;filter&quot;</span><span class="token operator">=&gt;</span><span class="token constant">FILTER_VALIDATE_INT</span><span class="token punctuation">,</span>
        <span class="token string double-quoted-string">&quot;options&quot;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token string double-quoted-string">&quot;min_range&quot;</span><span class="token operator">=&gt;</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string double-quoted-string">&quot;max_range&quot;</span><span class="token operator">=&gt;</span><span class="token number">120</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token variable">$result</span> <span class="token operator">=</span> <span class="token function">filter_input_array</span><span class="token punctuation">(</span><span class="token constant">INPUT_POST</span><span class="token punctuation">,</span> <span class="token variable">$filters</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    邮箱：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    年龄：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(m,g){const a=e("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("strong",null,[n("a",r,[s("https://www.runoob.com/php/php-ref-filter.html"),t(a)])])]),n("p",null,[n("strong",null,[n("a",k,[s("https://www.php.net/manual/zh/book.filter.php"),t(a)])])]),d])}const _=p(c,[["render",v],["__file","14.html.vue"]]);export{_ as default};