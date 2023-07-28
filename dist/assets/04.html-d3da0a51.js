import{_ as n,o as s,c as a,a as t}from"./app-11dfbba7.js";const p={},e=t(`<h3 id="permission授权" tabindex="-1"><a class="header-anchor" href="#permission授权" aria-hidden="true">#</a> Permission授权</h3><p>很多操作需要用户许可，比如脚本想要知道用户的位置，或者操作用户机器上的摄像头</p><p><code>Permissions API</code>就是用来查询某个接口的许可情况</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 查询地理位置接口的许可情况</span>
navigator<span class="token punctuation">.</span>permissions<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;geolocation&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


返回的状态有：
granted	允许
denied		拒绝
prompt		询问


可查阅的权限有：
geolocation
notifications
push
midi
camera
microphone
speaker
device<span class="token operator">-</span>info
background<span class="token operator">-</span>fetch
background<span class="token operator">-</span>sync
bluetooth
persistent<span class="token operator">-</span>storage
ambient<span class="token operator">-</span>light<span class="token operator">-</span>sensor
accelerometer
gyroscope
magnetometer
clipboard
display<span class="token operator">-</span>capture
nfc

有了这个<span class="token constant">API</span>，就可以自动查询用户的态度。当用户已经明确拒绝的时候，就可以不必再次询问用户许可了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="geolocation地理位置" tabindex="-1"><a class="header-anchor" href="#geolocation地理位置" aria-hidden="true">#</a> Geolocation地理位置</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Geolocation接口用于获取用户的地理位置		
它使用的方法基于GPS或者其他机制（比如IP地址、Wifi热点、手机基站等）   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="getcurrentposition方法" tabindex="-1"><a class="header-anchor" href="#getcurrentposition方法" aria-hidden="true">#</a> getCurrentPosition方法</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>getCurrentPosition方法，用来获取用户的地理位置。
使用它需要得到用户的授权，浏览器会跳出一个对话框，询问用户是否许可当前页面获取他的地理位置。
必须考虑两种情况的回调函数：一种是同意授权，另一种是拒绝授权。如果用户拒绝授权，会抛出一个错误。

navigator.geolocation.getCurrentPosition(geoSuccess,geoError)

geoSuccess的参数是一个event对象。
event有两个属性：timestamp和coords。timestamp属性是一个时间戳，返回获得位置信息的具体时间。
coords属性指向一个对象，包含了用户的位置信息，主要是以下几个值：
coords.latitude：纬度
coords.longitude：经度
coords.accuracy：精度
coords.altitude：海拔
coords.altitudeAccuracy：海拔精度（单位：米）
coords.heading：以360度表示的方向
coords.speed：每秒的速度（单位：米）


geoError的参数也是一个event对象。event.code属性表示错误类型，有四个值：
0：未知错误，浏览器没有提示出错的原因，相当于常量event.UNKNOWN_ERROR
1：用户拒绝授权，相当于常量event.PERMISSION_DENIED
2：没有得到位置，GPS或其他定位机制无法定位，相当于常量event.POSITION_UNAVAILABLE
3：超时，GPS没有在指定时间内返回结果，相当于常量event.TIMEOUT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码示例-需要梯子才有效果" tabindex="-1"><a class="header-anchor" href="#代码示例-需要梯子才有效果" aria-hidden="true">#</a> 代码示例(需要梯子才有效果)</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>HTML5 Geolocation距离跟踪器<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">#map</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>demo<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>获取经纬度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>long<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>您当前的经度为<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>longitude<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>lat<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>您当前的纬度为<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>latitude<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> demo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> long <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;longitude&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> lat <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;latitude&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    demo<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">//检测当前设备是否支持H5Geolocation API</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">//检测结果存在地理定位对象的话，navigator.geolocation调用将返回该对象</span>
            <span class="token comment">//第一个参数获取当前地理信息成功是执行的回调函数，带3个参数，</span>
            <span class="token comment">//第一个参数是必写的，表示获取当前地理位置信息成功时所执行的回调函数，该函数参数position也是必须。</span>
            <span class="token comment">//第二个参数是获取地理位置信息失败的回调函数，该函数的参数error也是必写的，第三个参数是一些可选属性列表（2、3个参数可省略）</span>
            navigator<span class="token punctuation">.</span>geolocation<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span>show<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;该浏览器不支持获取地理位置&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> cords <span class="token operator">=</span> position<span class="token punctuation">.</span>coords<span class="token punctuation">;</span> 
        long<span class="token punctuation">.</span>value <span class="token operator">=</span> cords<span class="token punctuation">.</span>longitude<span class="token punctuation">;</span> <span class="token comment">//获取经度</span>
        lat<span class="token punctuation">.</span>value <span class="token operator">=</span> cords<span class="token punctuation">.</span>latitude<span class="token punctuation">;</span> <span class="token comment">//获取纬度</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> err <span class="token operator">=</span> error<span class="token punctuation">.</span>code<span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;用户拒绝了位置服务&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;获取不到位置信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;获取信息超时&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vibration设备振动" tabindex="-1"><a class="header-anchor" href="#vibration设备振动" aria-hidden="true">#</a> Vibration设备振动</h3><p>Vibration接口用于在浏览器中发出命令，使得设备振动。<br> 显然，这个API主要针对手机，适用场合是向用户发出提示或警告，游戏中尤其会大量使用。<br> 由于振动操作很耗电，在低电量时最好取消该操作。</p><p>使用下面的代码检查该接口是否可用。<br> 目前，只有Chrome和Firefox的Android平台最新版本支持它。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>title<span class="token operator">&gt;</span>手机振动测试<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">&quot;vibrate()&quot;</span><span class="token operator">&gt;</span>手机振动测试<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>vibrate<span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// 支持</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//不支持</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">function</span> <span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//振动1秒</span>
        navigator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>

        <span class="token comment">//设备先振动500毫秒，然后等待300毫秒，再接着振动100毫秒</span>
        <span class="token comment">// navigator.vibrate([500, 300, 100])</span>

        <span class="token comment">// vibrate是一个非阻塞式的操作，即手机振动的同时，JavaScript代码继续向下运行。</span>
        <span class="token comment">// 要停止振动，只有将0毫秒或者一个空数组传入vibrate方法。</span>
        <span class="token comment">// navigator.vibrate(0)</span>
        <span class="token comment">// navigator.vibrate([])</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// 如果要让振动一直持续，可以使用setInterval不断调用vibrate</span>
    <span class="token keyword">var</span> vibrateInterval

    <span class="token keyword">function</span> <span class="token function">startVibrate</span><span class="token punctuation">(</span><span class="token parameter">duration <span class="token operator">=</span> <span class="token number">1000</span></span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        navigator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">stopVibrate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>vibrateInterval<span class="token punctuation">)</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>vibrateInterval<span class="token punctuation">)</span>
        navigator<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">startPeristentVibrate</span><span class="token punctuation">(</span><span class="token parameter">duration<span class="token punctuation">,</span> interval</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        vibrateInterval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">startVibrate</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> interval<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orientation横竖屏" tabindex="-1"><a class="header-anchor" href="#orientation横竖屏" aria-hidden="true">#</a> Orientation横竖屏</h3><p>Orientation API用于检测手机的摆放方向（竖放或横放）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">function</span> <span class="token function">orientationChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>orientation<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;肖像模式 0,screen-width: &quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">&quot;; screen-height:&quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token operator">-</span><span class="token number">90</span><span class="token operator">:</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;左旋 -90,screen-width: &quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">&quot;; screen-height:&quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">90</span><span class="token operator">:</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;右旋 90,screen-width: &quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">&quot;; screen-height:&quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">180</span><span class="token operator">:</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&quot;风景模式 180,screen-width: &quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">&quot;; screen-height:&quot;</span> <span class="token operator">+</span> screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">orientationChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      window<span class="token punctuation">.</span>onorientationchange <span class="token operator">=</span> orientationChange
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="battery电池状态" tabindex="-1"><a class="header-anchor" href="#battery电池状态" aria-hidden="true">#</a> Battery电池状态</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>navigator<span class="token punctuation">.</span><span class="token function">getBattery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">battery</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
　　console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>battery<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// charging: 是否在充电</span>
<span class="token comment">// chargingTime: 充满电还需要的时间(秒)</span>
<span class="token comment">// dischargingTime:  电池剩余可用时间(秒)</span>
<span class="token comment">// level: 剩余电量,最大电量就是1</span>
<span class="token comment">// onchargingchange:  充电状态改变时触发该监听函数</span>
<span class="token comment">// onchargingtimechange:  充满还需时间改变时触发该监听函数</span>
<span class="token comment">// ondischargingtimechange:  电池剩余可用时间改变时触发该监听函数</span>
<span class="token comment">// onlevelchange:  电量改变时触发该监听函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="language当前语言" tabindex="-1"><a class="header-anchor" href="#language当前语言" aria-hidden="true">#</a> language当前语言</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getThisLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">const</span> langList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;cn&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hk&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;tw&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;fr&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> langListLen <span class="token operator">=</span> langList<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">const</span> thisLang <span class="token operator">=</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>language <span class="token operator">||</span> navigator<span class="token punctuation">.</span>browserLanguage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> langListLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">let</span> lang <span class="token operator">=</span> langList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>thisLang<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> lang
        <span class="token punctuation">}</span><span class="token keyword">else</span> 
        <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;en&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getThisLang</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fullscreen窗口全屏" tabindex="-1"><a class="header-anchor" href="#fullscreen窗口全屏" aria-hidden="true">#</a> Fullscreen窗口全屏</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>全屏测试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>full<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>全屏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>close<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>退出全屏<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">//获取元素</span>
    <span class="token keyword">var</span> full <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;full&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> close <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">//打开全屏</span>
    full<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement
        <span class="token keyword">if</span> <span class="token punctuation">(</span>body<span class="token punctuation">.</span>requestFullscreen<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            body<span class="token punctuation">.</span><span class="token function">requestFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>body<span class="token punctuation">.</span>mozRequestFullScreen<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            body<span class="token punctuation">.</span><span class="token function">mozRequestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>body<span class="token punctuation">.</span>webkitRequestFullScreen<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            body<span class="token punctuation">.</span><span class="token function">webkitRequestFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//关闭全屏</span>
    close<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>exitFullscreen<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">exitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>msExitFullscreen<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">msExitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>mozCancelFullScreen<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">mozCancelFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>webkitExitFullscreen<span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            document<span class="token punctuation">.</span><span class="token function">webkitExitFullscreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>



    <span class="token comment">//监听window是否全屏，并进行相应的操作,支持esc键退出</span>
    window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> isFull<span class="token operator">=</span><span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>webkitIsFullScreen <span class="token operator">||</span> document<span class="token punctuation">.</span>mozFullScreen <span class="token operator">||</span> document<span class="token punctuation">.</span>msFullscreenElement <span class="token operator">||</span> document<span class="token punctuation">.</span>fullscreenElement<span class="token punctuation">)</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>isFull<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;您打开了全屏&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;您退出了全屏&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 补充：</span>
    <span class="token comment">// !和!!的区别</span>
    <span class="token comment">// ! 变量转换成boolean类型判断，null、undefined和空字符串取反都为false，其余都为true。</span>
    <span class="token comment">// !! 用来做类型判断</span>
    <span class="token comment">// if(a!=null&amp;&amp;typeof(a)!=undefined&amp;&amp;a!=’’){}</span>
    <span class="token comment">// 等价于if(!!a){}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器活跃窗口监听" tabindex="-1"><a class="header-anchor" href="#浏览器活跃窗口监听" aria-hidden="true">#</a> 浏览器活跃窗口监听</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>微信网页版<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> <span class="token constant">T</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;blur&#39;</span> <span class="token punctuation">,</span>UpdateTitle<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span> <span class="token punctuation">,</span>ClearTitle<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>

    <span class="token comment">//闪烁标题</span>
    <span class="token keyword">function</span> <span class="token function">UpdateTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">var</span> check <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token constant">T</span> <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>check<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;【新消息】&quot;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;微信网页版&quot;</span>
            <span class="token punctuation">}</span>

            check <span class="token operator">=</span> <span class="token operator">!</span>check
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//停止闪烁</span>
    <span class="token keyword">function</span> <span class="token function">ClearTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token constant">T</span><span class="token punctuation">)</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&#39;微信网页版&#39;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","04.html.vue"]]);export{k as default};
