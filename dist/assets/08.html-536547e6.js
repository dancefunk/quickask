import{_ as e,o as d,c as i,a as n}from"./app-6f490402.js";const a={},s=n(`<h3 id="blade模板引擎" tabindex="-1"><a class="header-anchor" href="#blade模板引擎" aria-hidden="true">#</a> blade模板引擎</h3><p><code>Blade</code> 是由 <code>Laravel</code> 提供的非常简单但功能强大的模板引擎，不同于其他流行的 PHP 模板引擎，<code>Blade</code> 在视图中并不约束你使用 <code>PHP</code> 原生代码。所有的 <code>Blade</code> 视图最终都会被编译成原生 <code>PHP</code> 代码并缓存起来直到被修改，这意味着对应用的性能而言 <code>Blade</code> 基本上是零开销。<code>Blade</code> 视图文件使用 <code>.blade.php</code> 文件扩展并存放在 <code>resources/views</code> 目录下。</p><h3 id="模板继承" tabindex="-1"><a class="header-anchor" href="#模板继承" aria-hidden="true">#</a> 模板继承</h3><h3 id="定义布局" tabindex="-1"><a class="header-anchor" href="#定义布局" aria-hidden="true">#</a> 定义布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 存放在 resources/views/layouts/app.blade.php --&gt;

&lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;应用名称 - @yield(&#39;title&#39;)&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        @section(&#39;sidebar&#39;)
            这里是侧边栏
        @show

        &lt;div class=&quot;container&quot;&gt;
            @yield(&#39;content&#39;)
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承布局" tabindex="-1"><a class="header-anchor" href="#继承布局" aria-hidden="true">#</a> 继承布局</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 存放在 resources/views/child.blade.php --&gt;

@extends(&#39;layouts.app&#39;)

@section(&#39;title&#39;, &#39;Laravel&#39;)

@section(&#39;sidebar&#39;)
    @parent
    &lt;p&gt;Laravel侧边栏内容&lt;/p&gt;
@endsection

@section(&#39;content&#39;)
    &lt;p&gt;这里是主体内容，完善中...&lt;/p&gt;
@endsection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件-插槽" tabindex="-1"><a class="header-anchor" href="#组件-插槽" aria-hidden="true">#</a> 组件 &amp; 插槽</h3><p>组件和插槽给内容片段<code>（section）</code>和布局<code>（layout）</code>带来了方便，不过，有些人可能会发现组件和插槽的模型更容易理解。首先，我们假设有一个可复用的<code>alert</code>组件，我们想要在整个应用中都可以复用它：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- /resources/views/alert.blade.php --&gt;

&lt;div class=&quot;alert alert-danger&quot;&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>{{ $slot }}</code> 变量包含了我们想要注入组件的内容，现在，要构建这个组件，我们可以使用 Blade 指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@component(&#39;alert&#39;)
    &lt;strong&gt;Whoops!&lt;/strong&gt; Something went wrong!
@endcomponent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候为组件定义多个插槽很有用。下面我们来编辑<code>alert</code>组件以便可以注入<code>标题</code>，命名插槽可以通过<code>echoing</code>与它们的名字相匹配的变量来显示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- /resources/views/alert.blade.php --&gt;

&lt;div class=&quot;alert alert-danger&quot;&gt;
    &lt;div class=&quot;alert-title&quot;&gt;{{ $title }}&lt;/div&gt;
    {{ $slot }}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以使用指令 <code>@slot</code> 注入内容到命名的插槽。任何不在 <code>@slot</code> 指令中的内容都会被传递到组件的 <code>$slot</code> 变量中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@component(&#39;alert&#39;)
    @slot(&#39;title&#39;)
        Forbidden
    @endslot

    You are not allowed to access this resource!
@endcomponent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据显示" tabindex="-1"><a class="header-anchor" href="#数据显示" aria-hidden="true">#</a> 数据显示</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Route::get(&#39;greeting&#39;, function () {
    return view(&#39;welcome&#39;, [&#39;name&#39; =&gt; &#39;学院君&#39;]);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么可以通过如下方式显示 <code>name</code> 变量的内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>你好, {{ $name }}。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出 <code>PHP</code> 函数的结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>The current UNIX timestamp is {{ time() }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="输出存在的数据" tabindex="-1"><a class="header-anchor" href="#输出存在的数据" aria-hidden="true">#</a> 输出存在的数据</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ isset($name) ? $name : &#39;Default&#39; }}

除了使用三元运算符，Blade 还提供了更简单的方式：

{{ $name or &#39;Default&#39; }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示原生数据" tabindex="-1"><a class="header-anchor" href="#显示原生数据" aria-hidden="true">#</a> 显示原生数据</h3><p>要输出带 <code>HTML</code> 元素的富文本，可以使用如下语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello, {!! $name !!}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="渲染-json-内容" tabindex="-1"><a class="header-anchor" href="#渲染-json-内容" aria-hidden="true">#</a> 渲染 JSON 内容</h3><p>有时候你可能会将数据以数组方式传递到视图再将其转化为 <code>JSON</code> 格式以便初始化某个 <code>JavaScript </code>变量，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
    var app = &lt;?php echo json_encode($array); ?&gt;;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样显得很麻烦，有更简便的方式来实现这个功能，那就是 <code>Blade</code> 的 <code>@json</code> 指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
    var app = @json($array);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="blade-javascript-框架" tabindex="-1"><a class="header-anchor" href="#blade-javascript-框架" aria-hidden="true">#</a> Blade &amp; JavaScript 框架</h3><p>由于很多 <code>JavaScript</code> 框架也是用花括号来表示要显示在浏览器中的表达式，如 <code>Vue</code>，我们可以使用 <code>@</code> 符号来告诉 <code>Blade</code> 渲染引擎该表达式应该保持原生格式不作改动。比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;Laravel&lt;/h1&gt;
Hello, @{{ name }}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h2><h3 id="if-语句" tabindex="-1"><a class="header-anchor" href="#if-语句" aria-hidden="true">#</a> If 语句</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@if (count($records) === 1)
    I have one record!
@elseif (count($records) &gt; 1)
    I have multiple records!
@else
    I don&#39;t have any records!
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为方便起见，<code>Blade</code> 还提供了 <code>@unless</code> 指令，表示除非：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@unless (Auth::check())
    You are not signed in.
@endunless
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，<code>Blade</code> 还提供了 <code>@isset</code> 和 <code>@empty</code> 指令，分别对应 <code>PHP</code> 的 <code>isset</code> 和 <code>empty</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@isset($records)
    // $records is defined and is not null...
@endisset

@empty($records)
    // $records is &quot;empty&quot;...
@endempty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="认证指令" tabindex="-1"><a class="header-anchor" href="#认证指令" aria-hidden="true">#</a> 认证指令</h3><p><code>@auth</code> 和 <code>@guest</code> 指令可用于快速判断当前用户是否登录：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@auth
    // 用户已登录...
@endauth

@guest
    // 用户未登录...
@endguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果需要的话，你也可以在使用 <code>@auth</code> 和 <code>@guest</code> 的时候指定认证 <code>guard</code>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@auth(&#39;admin&#39;)
    // The user is authenticated...
@endauth

@guest(&#39;admin&#39;)
    // The user is not authenticated...
@endguest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="section-指令" tabindex="-1"><a class="header-anchor" href="#section-指令" aria-hidden="true">#</a> Section 指令</h3><p>你可以使用 <code>@hasSection</code> 指令判断某个 section 中是否有内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@hasSection(&#39;navigation&#39;)
    &lt;div class=&quot;pull-right&quot;&gt;
        @yield(&#39;navigation&#39;)
    &lt;/div&gt;

    &lt;div class=&quot;clearfix&quot;&gt;&lt;/div&gt;
@endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句" aria-hidden="true">#</a> Switch 语句</h3><p><code>switch</code> 语句可以通过 <code>@switch，@case，@break，@default</code> 和 <code>@enswitch</code> 指令构建：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@switch($i)
    @case(1)
        First case...
        @break

    @case(2)
        Second case...
        @break

    @default
        Default case...
@endswitch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@for ($i = 0; $i &lt; 10; $i++)
    The current value is {{ $i }}
@endfor

@foreach ($users as $user)
    &lt;p&gt;This is user {{ $user-&gt;id }}&lt;/p&gt;
@endforeach

@forelse ($users as $user)
    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;
@empty
    &lt;p&gt;No users&lt;/p&gt;
@endforelse

@while (true)
    &lt;p&gt;I&#39;m looping forever.&lt;/p&gt;
@endwhile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用循环的时候还可以结束循环或跳出当前迭代：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@foreach ($users as $user)
    @if ($user-&gt;type == 1)
        @continue
    @endif

    &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;

    @if ($user-&gt;number == 5)
        @break
    @endif
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以使用指令声明来引入条件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@foreach ($users as $user)
    @continue($user-&gt;type == 1)
        &lt;li&gt;{{ $user-&gt;name }}&lt;/li&gt;
    @break($user-&gt;number == 5)
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loop变量" tabindex="-1"><a class="header-anchor" href="#loop变量" aria-hidden="true">#</a> <code>$loop</code>变量</h3><p>在循环的时候，可以在循环体中使用 <code>$loop</code> 变量，该变量提供了一些有用的信息，比如当前循环索引，以及当前循环是不是第一个或最后一个迭代：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@foreach ($users as $user)
    @if ($loop-&gt;first)
        This is the first iteration.
    @endif

    @if ($loop-&gt;last)
        This is the last iteration.
    @endif

    &lt;p&gt;This is user {{ $user-&gt;id }}&lt;/p&gt;
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你身处嵌套循环，可以通过 <code>$loop</code> 变量的 <code>parent</code> 属性访问父级循环：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@foreach ($users as $user)
    @foreach ($user-&gt;posts as $post)
        @if ($loop-&gt;parent-&gt;first)
            This is first iteration of the parent loop.
        @endif
    @endforeach
@endforeach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>$loop</code> 变量还提供了其他一些有用的属性：</p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$loop-&gt;index</code></td><td style="text-align:left;">当前循环迭代索引 (从0开始)</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;iteration</code></td><td style="text-align:left;">当前循环迭代 (从1开始)</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;remaining</code></td><td style="text-align:left;">当前循环剩余的迭代</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;count</code></td><td style="text-align:left;">迭代数组元素的总数量</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;first</code></td><td style="text-align:left;">是否是当前循环的第一个迭代</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;last</code></td><td style="text-align:left;">是否是当前循环的最后一个迭代</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;depth</code></td><td style="text-align:left;">当前循环的嵌套层级</td></tr><tr><td style="text-align:left;"><code>$loop-&gt;parent</code></td><td style="text-align:left;">嵌套循环中的父级循环变量</td></tr></tbody></table><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{-- 注释的内容 --}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入子视图" tabindex="-1"><a class="header-anchor" href="#引入子视图" aria-hidden="true">#</a> 引入子视图</h2><p>你可以使用 Blade 的 <code>@include</code> 命令来引入一个已存在的视图，所有在父视图的可用变量在被引入的视图中都是可用的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div&gt;
    @include(&#39;shared.errors&#39;)

    &lt;form&gt;
        &lt;!-- 表单内容 --&gt;
    &lt;/form&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被引入的视图会继承父视图中的所有数据，同时也可以向引入的视图传递额外的数组数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@include(&#39;view.name&#39;, [&#39;some&#39; =&gt; &#39;data&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，如果尝试使用 <code>@include</code> 去引入一个不存在的视图，<code>Laravel</code> 会抛出错误。如果想引入一个可能存在或可能不存在的视图，就使用 <code>@includeIf</code> 指令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@includeIf(&#39;view.name&#39;, [&#39;some&#39; =&gt; &#39;data&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果要根据给定的布尔条件 <code>@include</code> 视图，可以使用 <code>@includeWhen</code> 指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@includeWhen($boolean, &#39;view.name&#39;, [&#39;some&#39; =&gt; &#39;data&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要包含来自给定数组视图的第一个视图，可以使用 <code>includeFirst</code> 指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@includeFirst([&#39;custom.admin&#39;, &#39;admin&#39;], [&#39;some&#39; =&gt; &#39;data&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>请避免在 Blade 视图中使用 <code>__DIR__</code> 及 <code>__FILE__</code> 常量，因为它们会引用编译视图时缓存的位置。</p></blockquote><h2 id="堆栈" tabindex="-1"><a class="header-anchor" href="#堆栈" aria-hidden="true">#</a> 堆栈</h2><p>Blade 可以被推送到在其他视图或布局中的其他位置渲染的命名堆栈。这在子视图中指定所需的 <code>JavaScript</code> 库时非常有用：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@push(&#39;scripts&#39;)
    &lt;script src=&quot;/example.js&quot;&gt;&lt;/script&gt;
@endpush
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以根据需要多次压入堆栈，通过 <code>@stack</code> 命令中传递堆栈的名称来渲染完整的堆栈内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;head&gt;
    &lt;!-- Head Contents --&gt;

    @stack(&#39;scripts&#39;)
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,85),l=[s];function t(r,c){return d(),i("div",null,l)}const u=e(a,[["render",t],["__file","08.html.vue"]]);export{u as default};
