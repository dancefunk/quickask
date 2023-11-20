import{_ as i,o as n,c as e,a as d}from"./app-9f8282b6.js";const s="/dist/assets/images/html5/javascript/javascript.png",l={},a=d(`<h3 id="对象概述" tabindex="-1"><a class="header-anchor" href="#对象概述" aria-hidden="true">#</a> 对象概述</h3><h3 id="javascript内置对象" tabindex="-1"><a class="header-anchor" href="#javascript内置对象" aria-hidden="true">#</a> Javascript内置对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Javascript是一种面向对象的语言，因此可以使用面向对象的思想来进行           
对象就是由一些彼此相关的属性和方法集合在一起而构成的一个数据实体。         
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+s+`" alt="javascript"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>计算字符串中某个字符的个数
数组去重
数组冒泡排序
数组快速排序
json 对象数组排序
删除数组的第一个元素，不直接改变数组
判断一个字符串中出现次数最多的字符，统计这个次数
求一个字符串的字节长度(中文字符占两个字节)
函数的链式调用
数组排序,如[[1,2],[2,1],[1,3]]-&gt;[[1,2],[1,3],[2,1]]
查找数组中某元素的位置
数组求和
移除数组中的item 元素, 不直接修改原先数组
splice向 / 从数组中添加 / 删除项目，然后返回被删除的项目。
改变原始数组
添加元素 不直接修改原先数组
删除数组的最后一个元素，不直接改变数组
在数组开头添加元素，不直接改变数组
向数组指定位置添加元素，不直接改变数组
统计数组中的值等于item元素 出现的次数
将字符串反向 &#39;abc123&#39; =&gt; &#39;321cba&#39;
打平嵌套数组 [1, [2, [3], 4], 5] =&gt; [1, 2, 3, 4, 5]
打印数组全排列 [1,2,3] =&gt; [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
寻找两个有序数组最小相同元素
有序二维数组寻找某元素坐标
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算字符串中某个字符的个数" tabindex="-1"><a class="header-anchor" href="#计算字符串中某个字符的个数" aria-hidden="true">#</a> 计算字符串中某个字符的个数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var aaa = &#39;1231011211009181&#39;;

function count(str) 
{

	var arr = [];

	for (var i = 0; i &lt; str.length; i++) 
	{
		if (str.charAt(i) == &#39;1&#39;) 
		{
			arr.push(str.charAt(i));
		}
	}
	return arr.length;
}

console.log(count(aaa));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重" aria-hidden="true">#</a> 数组去重</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 1, 1, 2, 2, 1, 3, 1, 3, 4, 5, 6];

function arrDel(arr) 
{

	var result = [],

		obj = {};

	for (var i in arr) 
	{
		//判断对象的属性
		if (!obj[arr[i]]) 
		{
			result.push(arr[i]);

			obj[arr[i]] = 1;
		}
	}
	return result;
}

console.log(arrDel(arr));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组冒泡排序" tabindex="-1"><a class="header-anchor" href="#数组冒泡排序" aria-hidden="true">#</a> 数组冒泡排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function bubbleSort(arr) 
{
	for (var i = 0; i &lt; arr.length - 1; i++) 
	{
		for (var j = i + 1; j &lt; arr.length; j++) 
		{
			//获取前一个值和后一个值进行比较
			if (arr[i] &gt; arr[j]) 
			{
				//创建中间变量 交换值

				var cur = arr[j];

				arr[j] = arr[i];

				arr[i] = cur;
			}
		}
	}

	return arr;
}

var array = [5, 1, 6, 4, 10, 11, 15, 0, 2];

console.log(bubbleSort(array));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组快速排序" tabindex="-1"><a class="header-anchor" href="#数组快速排序" aria-hidden="true">#</a> 数组快速排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function quickSort(arr) 
{
	if (arr.length &lt;= 1) { return arr };

	//选基准值，可以是任意位置

	var key = Math.floor(arr.length / 2);

	var keyValue = arr.splice(key, 1)[0];

	//定义两个数组

	var left = [];

	var right = [];



	for (var i = 0; i &lt; arr.length; i++) 
	{
		//小于基准的方左边、大于右边

		if (arr[i] &lt; keyValue) 
		{

			left.push(arr[i]);

		} else {

			right.push(arr[i]);

		}

	}

	//递归

	return quickSort(left).concat([keyValue], quickSort(right));

	//return typeof keyValue;

}



var array = [5, 1, 6, 4, 10, 11, 15, 0, 2];

console.log(quickSort(array));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-对象数组排序" tabindex="-1"><a class="header-anchor" href="#json-对象数组排序" aria-hidden="true">#</a> json 对象数组排序</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var data = [{

	name: &quot;海外事业部&quot;,

	value: 0.58

}, {

	name: &quot;内销&quot;,

	value: 0.36

}, {

	name: &quot;互联网中心&quot;,

	value: 0.78

}];



function compare(a, b) {

	return b.value - a.value;

}

data.sort(compare);

console.log(data);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数组的第一个元素-不直接改变数组" tabindex="-1"><a class="header-anchor" href="#删除数组的第一个元素-不直接改变数组" aria-hidden="true">#</a> 删除数组的第一个元素，不直接改变数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var a = [2, 1, 3, 4, 5, 8];

function delFirst(arr) 
{

	var arr2 = arr.slice(0);

	arr2.shift();

	return arr2;

}

console.log(delFirst(a));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断一个字符串中出现次数最多的字符-统计这个次数" tabindex="-1"><a class="header-anchor" href="#判断一个字符串中出现次数最多的字符-统计这个次数" aria-hidden="true">#</a> 判断一个字符串中出现次数最多的字符，统计这个次数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;addddfffssdfsadfsdfsafjsd&#39;;

var json = {}; //定义对象来存放 对象属性的值

//遍历字符串，将重复出现的字符 累加

for (var i = 0; i &lt; str.length; i++) 
{
	if (!json[str.charAt(i)]) 
	{

		json[str.charAt(i)] = 1;

	} else {

		json[str.charAt(i)]++;

	}

}

var iMax = 0;

var icur = &#39;&#39;;

console.log(json);//{a:3,d:8,f:7,s:6,j:1}

//遍历 json对象取最大值

for (var val in json) 
{

	if (json[val] &gt; iMax) 
	{

		iMax = json[val];
		icur = val;
	}

}

console.log(&#39;出现最多的字符:&#39; + icur, &#39;出现次数:&#39; + iMax);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="求一个字符串的字节长度-中文字符占两个字节" tabindex="-1"><a class="header-anchor" href="#求一个字符串的字节长度-中文字符占两个字节" aria-hidden="true">#</a> 求一个字符串的字节长度(中文字符占两个字节)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var str = &#39;aad发是地方地方&#39;;

function getStrLen(str) 
{

	var json = { len: 0 };

	var pattern = /[\\u4e00-\\u9fa5]/;//unicode编码符合中文字符


	for (var i = 0; i &lt; str.length; i++) 
	{

		if (pattern.test(str.charAt(i))) 
		{

			json[&#39;len&#39;]++;

		}

	}

	return json[&#39;len&#39;] + str.length;

}

console.log(getStrLen(str));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的链式调用-类似-add-1-2" tabindex="-1"><a class="header-anchor" href="#函数的链式调用-类似-add-1-2" aria-hidden="true">#</a> 函数的链式调用 类似：add(1)(2)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function add(a) 
{
	var sum = a;

	var tmp = function (y) {

		sum = sum + y;

		return tmp;//为了完成链式调用

	}

	//以字符串的形式返回对象的原始值

	tmp.toString = function () {

		return sum;

	};

	return tmp;
}

console.log(add(1)(2)(3));//6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组排序-如-1-2-2-1-1-3-1-2-1-3-2-1" tabindex="-1"><a class="header-anchor" href="#数组排序-如-1-2-2-1-1-3-1-2-1-3-2-1" aria-hidden="true">#</a> 数组排序,如[[1,2],[2,1],[1,3]]-&gt;[[1,2],[1,3],[2,1]]</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr1 = [[2, 4], [1, 2], [2, 1], [1, 3]];

function comparetwo(a, b) 
{

	if (a[0] != b[0]) {

		return a[0] - b[0];

	} else {

		return a[1] - b[1];

	}

}

var result = arr1.sort(comparetwo);

console.log(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找数组中某元素的位置" tabindex="-1"><a class="header-anchor" href="#查找数组中某元素的位置" aria-hidden="true">#</a> 查找数组中某元素的位置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function indexOf(arr, item) 
{

	for (var i = 0; i &lt; arr.length; i++) 
	{

		if (arr[i] == item) { return i; }

	}

	return -1;

}


var arr1 = [1, 2, 3, 4];

var result = indexOf(arr1, 2);

console.log(result);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组求和" tabindex="-1"><a class="header-anchor" href="#数组求和" aria-hidden="true">#</a> 数组求和</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function sum(arr) 
{

	var sum = 0;

	arr.forEach(function (value) {

		sum += value;

	});

	return sum;

}

var arr = [1, 2, 3, 4];

console.log(sum(arr));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除数组中的item-元素-不直接修改原先数组" tabindex="-1"><a class="header-anchor" href="#移除数组中的item-元素-不直接修改原先数组" aria-hidden="true">#</a> 移除数组中的item 元素, 不直接修改原先数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function remove(arr, item) 
{

	var arr2 = [];

	arr.forEach(function (val) {

		if (val != item) { arr2.push(val); }

	});

	return arr2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="splice向-从数组中添加-删除项目-然后返回被删除的项目。" tabindex="-1"><a class="header-anchor" href="#splice向-从数组中添加-删除项目-然后返回被删除的项目。" aria-hidden="true">#</a> splice向 / 从数组中添加 / 删除项目，然后返回被删除的项目。</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function remove2(arr, item) 
{

	var newarr = arr.slice(0);

	for (var i = 0; i &lt; newarr.length; i++) {

		if (newarr[i] == item) {

			newarr.splice(i, 1);

			i--;//删除一个元素后，后面的元素会提前一位

		}

	}

	return newarr;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="改变原始数组" tabindex="-1"><a class="header-anchor" href="#改变原始数组" aria-hidden="true">#</a> 改变原始数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function remove3(arr, item) 
{

	for (var i = 0; i &lt; arr.length; i++) {

		if (arr[i] == item) {

			arr.splice(i, 1);

			i--;//删除一个元素后，后面的元素会提前一位

		}

	}

	return arr;

}



var arr = [1, 2, 3, 3, 5, 4, 4, 9];

console.log(remove3(arr, 4));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加元素-不直接修改原先数组" tabindex="-1"><a class="header-anchor" href="#添加元素-不直接修改原先数组" aria-hidden="true">#</a> 添加元素 不直接修改原先数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function append(arr, item) 
{

	// return arr.push(item);

	return arr.concat([item]);

}

var arr = [1, 2, 3, 5];

console.log(append(arr, 4));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数组的最后一个元素-不直接改变数组" tabindex="-1"><a class="header-anchor" href="#删除数组的最后一个元素-不直接改变数组" aria-hidden="true">#</a> 删除数组的最后一个元素，不直接改变数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function truncate(arr) 
{

	var arr2 = arr.slice(0);

	arr2.pop();

	return arr2;

}

function truncate2(arr) 
{

	var arr2 = arr.slice(0, arr.length - 1);//返回一个新数组

	return arr2;

}

var arr = [1, 2, 3, 4, 5];

console.log(truncate2(arr));//1,2,3,4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在数组开头添加元素-不直接改变数组" tabindex="-1"><a class="header-anchor" href="#在数组开头添加元素-不直接改变数组" aria-hidden="true">#</a> 在数组开头添加元素，不直接改变数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function prepend(arr, item) 
{

	var arr2 = arr.slice(0);

	arr2.unshift(item);

	return arr2;

}

var arr = [1, 2, 3, 4, 5, 6];

console.log(prepend(arr, 0));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="向数组指定位置添加元素-不直接改变数组" tabindex="-1"><a class="header-anchor" href="#向数组指定位置添加元素-不直接改变数组" aria-hidden="true">#</a> 向数组指定位置添加元素，不直接改变数组</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function insert(arr, item, index) 
{

	var arr2 = arr.slice(0);

	arr2.splice(index, 0, item);

	return arr2;

}

var arr = [1, 2, 3, 4];

console.log(insert(arr, 5, 2));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计数组中的值等于item元素-出现的次数" tabindex="-1"><a class="header-anchor" href="#统计数组中的值等于item元素-出现的次数" aria-hidden="true">#</a> 统计数组中的值等于item元素 出现的次数</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function count(arr, item) 
{

	var count = 0;

	for (var i = 0; i &lt; arr.length; i++) {

		if (arr[i] == item) {

			count++;

		}

	}

	return count;

}

var arr = [1, 2, 4, 4, 3, 4, 3];

console.log(count(arr, 4));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将字符串反向-abc123-321cba" tabindex="-1"><a class="header-anchor" href="#将字符串反向-abc123-321cba" aria-hidden="true">#</a> 将字符串反向 &#39;abc123&#39; =&gt; &#39;321cba&#39;</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.log(&#39;abc123&#39;.split(&#39;&#39;).reverse().join(&#39;&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="打平嵌套数组-1-2-3-4-5-1-2-3-4-5" tabindex="-1"><a class="header-anchor" href="#打平嵌套数组-1-2-3-4-5-1-2-3-4-5" aria-hidden="true">#</a> 打平嵌套数组 [1, [2, [3], 4], 5] =&gt; [1, 2, 3, 4, 5]</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const arr = [1, [2, [3], 4], 5];
var arr2 = arr.join().split(&#39;,&#39;).map(it =&gt; Number(it));

const arr = [1, [2, [3], 4], 5];
var arr2 = JSON.parse(\`[\${arr}]\`);
console.log(arr2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="打印数组全排列-1-2-3-1-2-3-1-3-2-2-1-3-2-3-1-3-1-2-3-2-1" tabindex="-1"><a class="header-anchor" href="#打印数组全排列-1-2-3-1-2-3-1-3-2-2-1-3-2-3-1-3-1-2-3-2-1" aria-hidden="true">#</a> 打印数组全排列 [1,2,3] =&gt; [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function allRange(arr, path, res) 
{
	if (!arr.length) {
		res.push(path)
		return
	}
	arr.forEach((v, idx) =&gt; {
		const t = arr.slice()
		const p = path.slice()
		t.splice(idx, 1)
		p.push(v)
		allRange(t, p, res)
	})
}

var a = [1, 2, 3, 4]
const b = []
allRange(a, [], b)
console.log(b);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="寻找两个有序数组最小相同元素" tabindex="-1"><a class="header-anchor" href="#寻找两个有序数组最小相同元素" aria-hidden="true">#</a> 寻找两个有序数组最小相同元素</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const a = [1, 2, 5, 9, 10]
const b = [3, 4, 6, 9, 10]

function findElement(a, b) 
{
	let i = j = 0
	while (i &lt; a.length || j &lt; b.length) {
		if (a[i] === b[j]) {
			return a[i]
		} else if (a[i] &gt; b[j]) {
			j++
		} else if (a[i] &lt; b[j]) {
			i++
		}
	}
	return null
}

console.log(findElement(a, b));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有序二维数组寻找某元素坐标" tabindex="-1"><a class="header-anchor" href="#有序二维数组寻找某元素坐标" aria-hidden="true">#</a> 有序二维数组寻找某元素坐标</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const data = [[1, 2, 5, 9, 10],
[12, 22, 35, 49, 51],
[61, 62, 75, 79, 81]]

const len = data[0].length
function findOffset(e, a, b) 
{
	if (a &gt; b) return null

	const offset = (b - a) / 2 + a

	// 映射位置偏移到坐标
	const x = offset % len
	const y = ~~(offset / len)

	if (data[y][x] === e) {
		return [x, y]
	} else if (e &gt; data[y][x]) {
		return findOffset(e, offset + 1, b)
	} else {
		return findOffset(e, a, offset - 1)
	}
}
var result = findOffset(75, 0, len * data.length - 1);
console.log(result);
// =&gt; [2, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),r=[a];function v(c,t){return n(),e("div",null,r)}const m=i(l,[["render",v],["__file","01.html.vue"]]);export{m as default};
