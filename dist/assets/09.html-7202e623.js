import{_ as s,r as d,o as l,c as r,b as e,d as n,e as a,a as v}from"./app-da5bd584.js";const t={},u=e("h3",{id:"表单验证",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#表单验证","aria-hidden":"true"},"#"),n(" 表单验证")],-1),c={href:"https://laravelacademy.org/post/8798.html",target:"_blank",rel:"noopener noreferrer"},m=v(`<h3 id="创建路由" tabindex="-1"><a class="header-anchor" href="#创建路由" aria-hidden="true">#</a> 创建路由</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;test&#39;,&#39;VerController@index&#39;);
 
Route::post(&#39;tosubmit&#39;,&#39;VerController@tosubmit&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在控制器中编辑代码" tabindex="-1"><a class="header-anchor" href="#在控制器中编辑代码" aria-hidden="true">#</a> 在控制器中编辑代码</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class VerController extends Controller
{
    //表单页面
    public function index()
    {
        return view(&#39;from.from&#39;);
    }
 
    //表单提交验证
    //这种是用自带的Request进行验证
//    public function tosubmit(Request $request)
//    {
//        $this-&gt;validate($request, [
//            &#39;title&#39;=&gt;&#39;required&#39;,
//            &#39;content&#39;=&gt;&#39;required|min:10&#39;
//        ]);
//        return &#39;success&#39;;
//    }
 
    //这种是用自己写的Request，用php artisan make:request FromRequest生成
    public function tosubmit(Requests\\FromRequest $request)
    {
        return &#39;success&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成自定义的request" tabindex="-1"><a class="header-anchor" href="#生成自定义的request" aria-hidden="true">#</a> 生成自定义的Request</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>php artisan make:request FromRequest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="fromrequest" tabindex="-1"><a class="header-anchor" href="#fromrequest" aria-hidden="true">#</a> FromRequest</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 判断用户是否有权限进行此请求。
 *
 * @return bool
 */
public function authorize()
{
    //别问为什么，就是要返回true
    return true;
}

/**
 * 获取适用于请求的验证规则。
 *
 * @return array
 */
public function rules()
{
    return [
        //这里写规则
        &#39;title&#39;=&gt;&#39;required&#39;,
        &#39;content&#39;=&gt;&#39;required|min:10&#39;
    ];
}

/**
 * 获取已定义的验证规则的错误消息。
 *
 * @return array
 */
public function messages()
{
    return [
        &#39;title.required&#39; =&gt; &#39;A title is required&#39;,
        &#39;content.required&#39;  =&gt; &#39;A message is required&#39;,
    ];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种" aria-hidden="true">#</a> 第二种</h2><p>直接在<code>Controller</code>里面定义规则和错误信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public function yanzhen()
{
    $input = Input::except(&#39;_token&#39;);
    $relus = [
        //规则
        &#39;name&#39;=&gt;&#39;required|min:5&#39;
    ];
    $message = [
        //错误信息
        &#39;name.required&#39; =&gt; &#39;不能为空&#39;,
        &#39;name.min&#39; =&gt; &#39;最少5个字符&#39;
    ];
    //这里参数必须按照顺序(验证的内容,规则,错误信息)
    $vail = Validator::make($input,$relus,$message);
    if ($vail-&gt;passes()){
        return &#39;通过验证&#39;;
    } else {
        //这里传入的是变量
        return back()-&gt;withErrors($vail);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;body&gt;
	&lt;div class=&quot;container&quot;&gt;
	    @if(count($errors)&gt;0)
	        @if(is_object($errors))
	            {{--这里一定要获取$error-&gt;all()--}}
	            @foreach($errors-&gt;all() as $error)
	                {{ $error }}
	            @endforeach
	        @endif
	    @endif
	    {{ Form::open([&#39;url&#39;=&gt;url(&quot;yanzhen&quot;)]) }}
	    {{ Form::text(&#39;name&#39;) }}
	    {{ Form::submit(&#39;提交&#39;) }}
	    {{ Form::close() }}
	&lt;/div&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function b(o,h){const i=d("ExternalLinkIcon");return l(),r("div",null,[u,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",c,[n("Laravel 5.6 - 表单验证官方文档"),a(i)])])])]),m])}const x=s(t,[["render",b],["__file","09.html.vue"]]);export{x as default};
