import{_ as n,p as i,q as e,Y as d}from"./framework-e1bed10d.js";const s={},l=d(`<h2 id="函数列表" tabindex="-1"><a class="header-anchor" href="#函数列表" aria-hidden="true">#</a> 函数列表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bcadd — 将两个高精度数字相加

bccomp — 比较两个高精度数字，返回-1, 0, 1

bcdiv — 将两个高精度数字相除

bcmod — 求高精度数字余数

bcmul — 将两个高精度数字相乘

bcpow — 求高精度数字乘方

bcpowmod — 求高精度数字乘方求模，数论里非常常用

bcscale — 配置默认小数点的位数，相当于linux的bc中的“scale=”

bcsqrt — 求高精度数字平方根

bcsub — 将两个高精度数字相减
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="误差bug原因" tabindex="-1"><a class="header-anchor" href="#误差bug原因" aria-hidden="true">#</a> 误差Bug原因</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们在对浮点数进行 +-*/ 计算的时候，有时会遇到一些计算结果错误的问题，例如intval( 0.58*100); 打印结果是57，而不是58，这个其实是计算机底层二进制无法精确表示浮点数的一个bug。为什么出现这个bug？

首先我们要知道浮点数的表示（IEEE 754：是IEEE二进位浮点数算数标准的编号），具体内容如下：

浮点数，以64位的长度（双精度）为例，会采用1位符号位（E）, 11指数位（Q）, 52位尾数位（M）表示（一共64位）。

符号位：最高位表示数据的正负，0表示正数，1表示负数。

指数位：表示数据以2为底的幂，指数采用偏移码表示。

尾数：表示数据小数点后的有效数字。

例如：0.58的二进制表示基本上(52位)是:0010100011110101110000101000111101011100001010001111；

0.57的二进制表示基本上(52位)是:0010001111010111000010100011110101110000101000111101;

而两者的二进制, 如果只是通过这52位计算的话,分别是:

0.58-&gt;0.57999999999999996

0.57-&gt;0.56999999999999995

至于0.58*100的具体浮点数乘法, 我们模糊的以心算来看… 0.58 * 100 = 57.999999999,那么intval后，就是57了。

所以，你看似有穷的小数，在计算机的二进制表示里却是无穷的。也因此，浮点数在进行+-*/时候存在不准确的问题。

重点来了，解决这个问题，我们需要了解php有一个BC高精确度函数库，它包含了：相加，比较，相除，相减，求余，相乘，

n次方，配置默认小数点数目，求平方。BC是Binary Calculator的缩写.

bc*函数的参数都是操作数加上一个可选的[intscale],比如bcadd(string$left_operand,string$right_operand[,int$scale])，

如果scale没有提供，就用bcscale的缺省值。这里大数直接用一个由0-9组成的string表示，计算结果返回的也是一个string。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[l];function v(c,r){return i(),e("div",null,a)}const b=n(s,[["render",v],["__file","phpfudianshudejingqueyunsuan.html.vue"]]);export{b as default};
