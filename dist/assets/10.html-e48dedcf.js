import{_ as n,o as s,c as a,a as p}from"./app-da5bd584.js";const e={},t=p(`<h3 id="文件上传的相关配置" tabindex="-1"><a class="header-anchor" href="#文件上传的相关配置" aria-hidden="true">#</a> 文件上传的相关配置</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>表单设置
    要进行文件的上传，需要对form表单进行特殊设置
    <span class="token number">1.</span>设定表单数据的提交方式为<span class="token constant">POST</span>
    <span class="token number">2.</span>设定enctype属性值为<span class="token punctuation">:</span> multipart<span class="token operator">/</span>form<span class="token operator">-</span>data
    <span class="token number">3.</span>为了避免用户等待许久之后才发现上传文件太大，可以在表单中添加
      <span class="token constant">MAX_FILE_SIZE</span>隐藏域<span class="token punctuation">,</span>通过设置其value值可以限制上传文件的大小
 
<span class="token constant">PHP</span>设置
<span class="token number">1.</span>file_uploads
      是否允许通过<span class="token constant">HTTP</span>上传文件，默认为<span class="token constant">ON</span>
 
<span class="token number">2.</span>upload_max_filesize
      允许上传文件大小的最大值，默认为<span class="token number">2</span>M，此指令必须小于post_max_size
 
<span class="token number">3.</span>upload_tmp_dir
      指定上传文件的临时存放路径，这个目录对于拥有此服务器进程的用户必须是可写的
      如果未指定则使用系统默认值
 
<span class="token number">4.</span>post_max_size
      控制<span class="token constant">POST</span>方式提交数据php所能够接收的最大数据量
 
<span class="token number">5.</span>memory_limit
      指定单个脚本程序可以使用的最大内存容量
 
<span class="token number">6.</span>max_execution_time
      此指令确定php脚本可以执行的最长时间，以秒为单位，默认为<span class="token number">30</span>秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="files数组" tabindex="-1"><a class="header-anchor" href="#files数组" aria-hidden="true">#</a> FILES数组</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$_FILES</span>超级全局变量作用是存储各种与上传文件有关的信息
<span class="token variable">$_FILES</span>是一个二维数组，数组中共有<span class="token number">5</span>项：
 
<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;userfile&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;name&quot;</span><span class="token punctuation">]</span> 上传文件的名称
 
<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;userfile&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;type&quot;</span><span class="token punctuation">]</span>   上传文件的类型
 
<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;userfile&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;size&quot;</span><span class="token punctuation">]</span>   上传文件的大小<span class="token punctuation">,</span> 以字节为单位
 
<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;userfile&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;tmp_name&quot;</span><span class="token punctuation">]</span> 文件上传后在服务器端储存的临时文件名
 
<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;userfile&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;error&quot;</span><span class="token punctuation">]</span>  文件上传相关的错误代码
 
注<span class="token punctuation">:</span>userfile只是一个占位符，代表文件上传表单元素的名字<span class="token punctuation">;</span> 因此这个值将根据你所给定的名称有所不同<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上传错误信息" tabindex="-1"><a class="header-anchor" href="#上传错误信息" aria-hidden="true">#</a> 上传错误信息</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;userfile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;error&#39;</span><span class="token punctuation">]</span>  提供了在文件上传过程中出现的错误：
 
<span class="token number">1.</span><span class="token function">UPLOAD_ERR_OK</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>    
  如果文件上传成功返回<span class="token number">0</span><span class="token punctuation">;</span>
 
<span class="token number">2.</span><span class="token function">UPLOAD_ERR_INI_SIZE</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span>
  如果试图上传的文件大小超出了 upload_max_filesize指令指定的值，则返回<span class="token number">1</span><span class="token punctuation">;</span>
 
<span class="token number">3.</span><span class="token function">UPLOAD_ERR_FORM_SIZE</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span>
  如果试图上传的文件大小超出了<span class="token constant">MAX_FILE_SIZE</span>指令（可能嵌入在<span class="token constant">HTML</span>表单中）指定的值，则返回<span class="token number">2</span><span class="token punctuation">;</span>
 
<span class="token number">4.</span><span class="token function">UPLOAD_ERR_PARTIAL</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span>
  如果文件没有完全上传，则返回<span class="token number">3</span><span class="token punctuation">;</span> 如网络出现错误，导致上传过程中断<span class="token punctuation">;</span>
 
<span class="token number">5.</span><span class="token function">UPLOAD_ERR_NO_FILE</span> <span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span>
  如果用户没有指定上传的文件就提交表单，则返回<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件上传函数" tabindex="-1"><a class="header-anchor" href="#文件上传函数" aria-hidden="true">#</a> 文件上传函数</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">// is_uploaded_file 判断文件是否通过 http post方式上传</span>
<span class="token comment">// move_uploaded_file 将上传的临时文件，移动到指定的目录</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">is_uploaded_file</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;file&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tmp_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token function">move_uploaded_file</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;file&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tmp_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;./uploads/back.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缩略图处理" tabindex="-1"><a class="header-anchor" href="#缩略图处理" aria-hidden="true">#</a> 缩略图处理</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token comment">//图片上传</span>
  <span class="token number">1</span><span class="token punctuation">,</span>通过<span class="token variable">$_FILES</span> 接收表单上传的图片元素
  <span class="token number">2</span><span class="token punctuation">,</span>通过<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;input_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 判断文件是否上传到服务器
  <span class="token number">3</span><span class="token punctuation">,</span>定义新的文件名称
  <span class="token number">4</span><span class="token punctuation">,</span>通过is_uploaded_file函数  判断<span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;input_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tmp_name&#39;</span><span class="token punctuation">]</span> 是否是通过http post方式上传的
  <span class="token number">5</span><span class="token punctuation">,</span>然后使用<span class="token function">move_uploaded_file</span><span class="token punctuation">(</span><span class="token variable">$_FILES</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;input_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;tmp_name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;./images/1.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    函数移动图片到指定目录
  到达第<span class="token number">5</span>步就说明文件已经上传成功 然后是图片缩略图处理
 
<span class="token comment">//缩略图处理  整体步骤分为</span>
  <span class="token number">1</span>、打开原图
  <span class="token number">2</span>、新建小图
  <span class="token number">3</span>、复制大图粘贴到小图，并且调整图片大小
  <span class="token number">4</span>、保存小图
 
 
<span class="token number">1</span><span class="token punctuation">,</span>通过<span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span>获取原图的宽度和高度
    <span class="token variable">$imginfo</span> <span class="token operator">=</span> <span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$img_w</span> <span class="token operator">=</span> <span class="token variable">$imginfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token variable">$img_h</span> <span class="token operator">=</span> <span class="token variable">$imginfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
 
 
<span class="token number">2</span><span class="token punctuation">,</span>判断是什么类型的图片将它打开
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$imginfo</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
       <span class="token variable">$f_img</span> <span class="token operator">=</span> <span class="token function">imagecreatefromgif</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
       <span class="token variable">$f_img</span> <span class="token operator">=</span> <span class="token function">imagecreatefromjpeg</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
       <span class="token variable">$f_img</span> <span class="token operator">=</span> <span class="token function">imagecreatefrompng</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token number">3</span><span class="token punctuation">,</span>新建一张缩略图
  <span class="token variable">$small_w</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
  <span class="token variable">$small_h</span> <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
  <span class="token variable">$small_img</span> <span class="token operator">=</span> <span class="token function">imagecreatetruecolor</span><span class="token punctuation">(</span><span class="token variable">$small_w</span><span class="token punctuation">,</span><span class="token variable">$small_h</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
<span class="token number">4</span><span class="token punctuation">,</span>复制大图粘贴到小图，并且调整图片大小
  <span class="token comment">//imagecopyresized</span>
  <span class="token comment">//参数1:目标（小图）的资源;</span>
  <span class="token comment">//参数2:原图资源 ;</span>
  <span class="token comment">//参数3,4:要放到目标图的X,Y;</span>
  <span class="token comment">//参数5,6:从原图复制的X,Y;</span>
  <span class="token comment">//参数7,8:复制到目标图后的宽度,高度;</span>
  <span class="token comment">//参数9,10:要在原图复制的区域的宽,高度</span>
  <span class="token function">imagecopyresized</span> <span class="token punctuation">(</span><span class="token variable">$small_img</span><span class="token punctuation">,</span><span class="token variable">$f_img</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token variable">$small_w</span><span class="token punctuation">,</span><span class="token variable">$small_h</span><span class="token punctuation">,</span><span class="token variable">$img_w</span><span class="token punctuation">,</span><span class="token variable">$img_h</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
 
<span class="token number">5</span><span class="token punctuation">,</span>新的缩略图名称
    <span class="token comment">//得到文件的后缀名:</span>
    <span class="token variable">$ext</span>   <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">,</span><span class="token constant">PATHINFO_EXTENSION</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//文件的后缀名</span>
    <span class="token variable">$imgname</span> <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">,</span><span class="token constant">PATHINFO_FILENAME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//文件名</span>
 
    <span class="token comment">//新的缩略图名为:</span>
    <span class="token variable">$small_name</span> <span class="token operator">=</span> <span class="token variable">$imgname</span><span class="token operator">.</span><span class="token string single-quoted-string">&#39;_thumb.&#39;</span><span class="token operator">.</span><span class="token variable">$ext</span><span class="token punctuation">;</span>
 
 
<span class="token number">6</span><span class="token punctuation">,</span>保存文件路径
 
<span class="token number">7</span><span class="token punctuation">,</span>输出图像
    <span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$imginfo</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token function">imagegif</span><span class="token punctuation">(</span><span class="token variable">$small_img</span><span class="token punctuation">,</span><span class="token variable">$path</span><span class="token operator">.</span><span class="token variable">$small_name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token function">imagejpeg</span><span class="token punctuation">(</span><span class="token variable">$small_img</span><span class="token punctuation">,</span><span class="token variable">$path</span><span class="token operator">.</span><span class="token variable">$small_name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token function">imagepng</span><span class="token punctuation">(</span><span class="token variable">$small_img</span><span class="token punctuation">,</span><span class="token variable">$path</span><span class="token operator">.</span><span class="token variable">$small_name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token number">8</span><span class="token punctuation">,</span>释放资源
  <span class="token function">imagedestroy</span><span class="token punctuation">(</span><span class="token variable">$f_img</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">imagedestroy</span><span class="token punctuation">(</span><span class="token variable">$smail_img</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 
 
<span class="token number">9</span><span class="token punctuation">,</span>删除旧文件
  <span class="token function">is_file</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">unlink</span><span class="token punctuation">(</span><span class="token variable">$imgsrc</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token number">10</span> 生成缩略图成功
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;生成缩略图成功&quot;</span><span class="token operator">.</span><span class="token variable">$path</span><span class="token operator">.</span><span class="token variable">$smail_name</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片水印" tabindex="-1"><a class="header-anchor" href="#图片水印" aria-hidden="true">#</a> 图片水印</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code>图片水印是我们在开发过程中常用到的一个功能<span class="token operator">.</span>
下面我们就来讲解一下如何运用php的知识点来完成这个功能

<span class="token number">1</span>、定义函数 img_water_mark
<span class="token number">2</span>、获取基本信息<span class="token punctuation">(</span>名称<span class="token punctuation">,</span>路径<span class="token punctuation">,</span>后缀<span class="token punctuation">,</span>新的名称<span class="token punctuation">,</span>新的路径<span class="token punctuation">)</span>
<span class="token number">3</span>、获取原图图片信息 判断原图文件是否存在
<span class="token number">4</span>、获取水印图片的信息 判断水印图片文件是否存在
<span class="token number">5</span>、打开原图 	image_create_from_ext 自定义函数
<span class="token number">6</span>、打开水印图片		image_create_from_ext 自定义函数
<span class="token number">7</span>、判断水印位置
<span class="token number">8</span>、合成图片 imagecopymerge
<span class="token number">9</span>、输出图片
<span class="token number">10</span>、销毁资源
<span class="token number">11</span>、将生成的图片名称<span class="token keyword">return</span>

<span class="token number">1</span>、定义函数 img_create_from_ext
<span class="token number">2</span>、获取图片信息
<span class="token number">3</span>、判断文件类型
<span class="token number">4</span>、<span class="token keyword">return</span>打开的文件

<span class="token doc-comment comment">/**
  * 图片加水印(适用于png/jpg/gif格式)
  * 
  * <span class="token keyword">@author</span> flynetcn
  *
  * <span class="token keyword">@param</span> <span class="token parameter">$srcImg</span> 原图片
  * <span class="token keyword">@param</span> <span class="token parameter">$waterImg</span> 水印图片
  * <span class="token keyword">@param</span> <span class="token parameter">$savepath</span> 保存路径
  * <span class="token keyword">@param</span> <span class="token parameter">$savename</span> 保存名字
  * <span class="token keyword">@param</span> <span class="token parameter">$positon</span> 水印位置 
  * 1:顶部居左, 2:顶部居右, 3:居中, 4:底部局左, 5:底部居右 
  * <span class="token keyword">@param</span> <span class="token parameter">$alpha</span> 透明度 -- 0:完全透明, 100:完全不透明
  * 
  * <span class="token keyword">@return</span> 
  *     成功 -- 加水印后的新图片地址
  *     失败 -- 
  *     -1:原文件不存在
  *     -2:水印图片不存在
  *     -3:原文件图像对象建立失败
  *     -4:水印文件图像对象建立失败
  *     -5:加水印后的新图片保存失败
*/</span>
<span class="token keyword">function</span> <span class="token function-definition function">img_water_mark</span><span class="token punctuation">(</span><span class="token variable">$srcImg</span><span class="token punctuation">,</span><span class="token variable">$waterImg</span><span class="token punctuation">,</span><span class="token variable">$savepath</span><span class="token operator">=</span><span class="token constant">null</span><span class="token punctuation">,</span><span class="token variable">$savename</span><span class="token operator">=</span><span class="token constant">null</span><span class="token punctuation">,</span><span class="token variable">$position</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token variable">$alpha</span><span class="token operator">=</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//获取基本信息(名称,路径,后缀,新的名称,新的路径)</span>
	<span class="token variable">$temp</span> <span class="token operator">=</span> <span class="token function">pathinfo</span><span class="token punctuation">(</span><span class="token variable">$srcImg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//读取原图</span>
	<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;basename&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//文件名称</span>
	<span class="token variable">$path</span> <span class="token operator">=</span> <span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;dirname&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//目录名称</span>
	<span class="token variable">$exte</span> <span class="token operator">=</span> <span class="token variable">$temp</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;extension&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">//获取后缀</span>
	<span class="token variable">$savename</span> <span class="token operator">=</span> <span class="token variable">$savename</span> <span class="token operator">?</span> <span class="token variable">$savename</span> <span class="token punctuation">:</span> <span class="token variable">$name</span><span class="token punctuation">;</span>  <span class="token comment">//新的文件名称</span>
	<span class="token variable">$savepath</span> <span class="token operator">=</span> <span class="token variable">$savepath</span> <span class="token operator">?</span> <span class="token variable">$savepath</span> <span class="token punctuation">:</span> <span class="token variable">$path</span><span class="token punctuation">;</span>  <span class="token comment">//新的文件路径</span>
	<span class="token variable">$savefile</span> <span class="token operator">=</span> <span class="token variable">$savepath</span> <span class="token operator">.</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token operator">.</span><span class="token variable">$savename</span><span class="token punctuation">;</span>  <span class="token comment">//新的路径</span>

	<span class="token comment">//获取原图图片信息 判断原图文件是否存在</span>
	<span class="token variable">$srcinfo</span> <span class="token operator">=</span> @<span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$srcImg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$srcinfo</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">//源文件不存在</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//获取水印图片的信息 判断水印图片文件是否存在</span>
	<span class="token variable">$waterinfo</span> <span class="token operator">=</span> @<span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$waterImg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$waterinfo</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>  <span class="token comment">//水印图片不存在</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//打开原图 	image_create_from_ext 自定义函数</span>
	<span class="token variable">$srcImgObj</span> <span class="token operator">=</span> <span class="token function">image_create_from_ext</span><span class="token punctuation">(</span><span class="token variable">$srcImg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  

	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$srcImgObj</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span>  <span class="token comment">//打开原图失败</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//打开水印图片		image_create_from_ext 自定义函数</span>
	<span class="token variable">$waterImgObj</span> <span class="token operator">=</span> <span class="token function">image_create_from_ext</span><span class="token punctuation">(</span><span class="token variable">$waterImg</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
	<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$waterImgObj</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">;</span>   <span class="token comment">//水印文件图像对象建立失败</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//判断水印位置</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$position</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>	<span class="token comment">//1顶部居左</span>
			<span class="token variable">$x</span><span class="token operator">=</span><span class="token variable">$y</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

		<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>	<span class="token comment">//2顶部居右</span>
			<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
			<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>	<span class="token comment">//3居中</span>
			<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>	<span class="token comment">//4底部居左</span>
			<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">5</span><span class="token punctuation">:</span>	<span class="token comment">//5底部居右</span>
			<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">-</span><span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token variable">$x</span><span class="token operator">=</span><span class="token variable">$y</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//合成图片 imagecopymerge</span>
	<span class="token comment">//srcImgObj			目标图像</span>
	<span class="token comment">//waterImgObj		被拷贝的源图像</span>
	<span class="token comment">//$x,$y,0,0			目标图像开始 x,y 坐标	拷贝图像开始 x,y 坐标</span>
	<span class="token comment">//$waterinfo[0]		拷贝的宽度</span>
	<span class="token comment">//$waterinfo[1]		拷贝的高度</span>
	<span class="token comment">//alpha 			透明度</span>
	<span class="token function">imagecopymerge</span><span class="token punctuation">(</span><span class="token variable">$srcImgObj</span><span class="token punctuation">,</span><span class="token variable">$waterImgObj</span><span class="token punctuation">,</span> <span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$waterinfo</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token variable">$alpha</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//输出图片	</span>
	<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$srcinfo</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
			<span class="token function">imagegif</span><span class="token punctuation">(</span><span class="token variable">$srcImgObj</span><span class="token punctuation">,</span><span class="token variable">$savefile</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
			<span class="token function">imagegif</span><span class="token punctuation">(</span><span class="token variable">$srcImgObj</span><span class="token punctuation">,</span><span class="token variable">$savefile</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
			<span class="token function">imagejpeg</span><span class="token punctuation">(</span><span class="token variable">$srcImgObj</span><span class="token punctuation">,</span><span class="token variable">$savefile</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">4</span><span class="token punctuation">:</span>
			<span class="token function">imagepng</span><span class="token punctuation">(</span><span class="token variable">$srcImgObj</span><span class="token punctuation">,</span><span class="token variable">$savefile</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>  <span class="token comment">//保存失败</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//销毁资源</span>
	<span class="token function">imagedestroy</span><span class="token punctuation">(</span><span class="token variable">$srcImgObj</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">imagedestroy</span><span class="token punctuation">(</span><span class="token variable">$waterImgObj</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">//将生成的图片名称return</span>
	<span class="token keyword">return</span> <span class="token variable">$savefile</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>


<span class="token comment">//打开图片函数</span>
<span class="token keyword">function</span> <span class="token function-definition function">image_create_from_ext</span><span class="token punctuation">(</span><span class="token variable">$imgfile</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token variable">$info</span> <span class="token operator">=</span> <span class="token function">getimagesize</span><span class="token punctuation">(</span><span class="token variable">$imgfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//获取图片信息</span>
	<span class="token variable">$im</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">;</span>   
	<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token comment">//判断文件类型</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
			<span class="token variable">$im</span> <span class="token operator">=</span> <span class="token function">imagecreatefromgif</span><span class="token punctuation">(</span><span class="token variable">$imgfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
			<span class="token variable">$im</span> <span class="token operator">=</span> <span class="token function">imagecreatefromjpeg</span><span class="token punctuation">(</span><span class="token variable">$imgfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
			<span class="token variable">$im</span> <span class="token operator">=</span> <span class="token function">imagecreatefrompng</span><span class="token punctuation">(</span><span class="token variable">$imgfile</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token variable">$im</span><span class="token punctuation">;</span>	<span class="token comment">//return打开的文件</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证码处理" tabindex="-1"><a class="header-anchor" href="#验证码处理" aria-hidden="true">#</a> 验证码处理</h3><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token number">1</span><span class="token punctuation">,</span>先创建一张指定宽度和高度的一张验证码图片 <span class="token function">imagecreatetruecolor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">2</span>，给验证码图片添加背景颜色 和文字颜色 <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">3</span><span class="token punctuation">,</span> 在指定图片上面，画一个矩形 <span class="token function">imagefilledrectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">4</span><span class="token punctuation">,</span> 获取随机数  <span class="token punctuation">(</span>定义一个函数<span class="token punctuation">)</span> <span class="token function">get_rand_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token number">1</span>，定义一个字符串
  <span class="token number">2</span>，将上面的字符串 打乱  <span class="token function">str_shuffle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token number">3</span>，并且从这个打乱的字符串当中去截取一部分内容 <span class="token function">substr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token number">4</span>，把截取出来的字符串转化成小写字母 <span class="token function">strtolower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token number">5</span><span class="token punctuation">,</span> 将这个字符串 <span class="token keyword">return</span>
<span class="token number">5</span><span class="token punctuation">,</span>将随机数写入到这个图片里面去 <span class="token function">imagestring</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">6</span><span class="token punctuation">,</span>防止别人去恶意刷我们的验证码 可以在这个图片上面加上一些点 <span class="token function">imagesetpixel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token number">7</span><span class="token punctuation">,</span>开启session会话  将我们的验证码 存储到session当中与我们表单当中输入的验证码进行匹配
<span class="token number">8</span><span class="token punctuation">,</span>输入图片的 头信息 和 图片资源 删除 <span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Content-Type:image/png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">imagepng</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">imagedestroy</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">9</span><span class="token punctuation">,</span>在登录界面 获取表单输入的验证码  和 我们session当中的验证码进行对比 如果正确就跳转登录界面 否则重新输入
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img_code.php<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token comment">//开启session会话</span>
<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//封装一个生成随机数</span>
<span class="token keyword">function</span> <span class="token function-definition function">get_rand_str</span><span class="token punctuation">(</span><span class="token variable">$length</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//随机字符串</span>
    <span class="token variable">$chars</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;1234567890ABCDEFGHJKLMNPQRSTUVWXYZ&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">//随机打乱他</span>
    <span class="token variable">$chars</span> <span class="token operator">=</span> <span class="token function">str_shuffle</span><span class="token punctuation">(</span><span class="token variable">$chars</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//截取</span>
    <span class="token keyword">return</span> <span class="token function">substr</span><span class="token punctuation">(</span><span class="token variable">$chars</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$length</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//验证码图片尺寸</span>
<span class="token variable">$width</span> <span class="token operator">=</span> <span class="token number">80</span><span class="token punctuation">;</span>
<span class="token variable">$height</span> <span class="token operator">=</span> <span class="token number">35</span><span class="token punctuation">;</span>

<span class="token comment">//创建一张彩色图片</span>
<span class="token variable">$img</span> <span class="token operator">=</span> <span class="token function">imagecreatetruecolor</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">,</span> <span class="token variable">$height</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//一个背景颜色</span>
<span class="token variable">$bgcolor</span> <span class="token operator">=</span> <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">238</span><span class="token punctuation">,</span><span class="token number">238</span><span class="token punctuation">,</span><span class="token number">238</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 文字颜色</span>
<span class="token variable">$txtcolor</span> <span class="token operator">=</span> <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//先将背景色填充到图片上</span>
<span class="token comment">//img 当前图片</span>
<span class="token comment">// 0,0 起始点</span>
<span class="token comment">// width height 结束点</span>
<span class="token comment">// bgcolor 颜色</span>
<span class="token function">imagefilledrectangle</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">,</span> <span class="token variable">$height</span><span class="token punctuation">,</span> <span class="token variable">$bgcolor</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 生成随机数</span>
<span class="token variable">$vercode</span> <span class="token operator">=</span> <span class="token function">get_rand_str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//将生成出来的验证码保存到session中</span>
<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;vercode&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$vercode</span><span class="token punctuation">;</span>

<span class="token comment">//将随机数写到图片上</span>
<span class="token comment">// imagestring() 不能跳转字体大小</span>
<span class="token comment">//这个字体文件 如果无法加载请选用绝对路径或者相对路径</span>
<span class="token variable">$font</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;./assets/font/diy.ttf&quot;</span><span class="token punctuation">;</span>
<span class="token function">imagettftext</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">27</span><span class="token punctuation">,</span> <span class="token variable">$txtcolor</span><span class="token punctuation">,</span> <span class="token variable">$font</span><span class="token punctuation">,</span> <span class="token variable">$vercode</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//为了防止别人刷我们的验证码可以添加一些点或者是线</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span><span class="token variable">$i</span><span class="token operator">&lt;=</span><span class="token number">250</span><span class="token punctuation">;</span><span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//将每个点的颜色随机</span>
    <span class="token variable">$r</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从一个整数范围内随机去整数值</span>
    <span class="token variable">$g</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从一个整数范围内随机去整数值</span>
    <span class="token variable">$b</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从一个整数范围内随机去整数值</span>
    <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token variable">$r</span><span class="token punctuation">,</span> <span class="token variable">$g</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//只能够在图片的范围内运行</span>
    <span class="token variable">$x</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$y</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token variable">$height</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//在图片上打印出 1*1的单位像素点 1px</span>
    <span class="token function">imagesetpixel</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token variable">$x</span><span class="token punctuation">,</span> <span class="token variable">$y</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//画线</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//将每个点的颜色随机</span>
    <span class="token variable">$r</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从一个整数范围内随机去整数值</span>
    <span class="token variable">$g</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从一个整数范围内随机去整数值</span>
    <span class="token variable">$b</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//从一个整数范围内随机去整数值</span>
    <span class="token variable">$color</span> <span class="token operator">=</span> <span class="token function">imagecolorallocate</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token variable">$r</span><span class="token punctuation">,</span> <span class="token variable">$g</span><span class="token punctuation">,</span> <span class="token variable">$b</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$sx</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token variable">$width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$sy</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token variable">$height</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$ex</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token variable">$width</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$ey</span> <span class="token operator">=</span> <span class="token function">mt_rand</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token variable">$height</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">imageline</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">,</span> <span class="token variable">$sx</span><span class="token punctuation">,</span> <span class="token variable">$sy</span><span class="token punctuation">,</span> <span class="token variable">$ex</span><span class="token punctuation">,</span> <span class="token variable">$ey</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//输出最终的验证码</span>

<span class="token comment">// 图片的头信息</span>
<span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type:image/png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//将图片输出</span>
<span class="token function">imagepng</span><span class="token punctuation">(</span><span class="token variable">$img</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[t];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","10.html.vue"]]);export{r as default};
