import{_ as e,o as i,c as n,a as s}from"./app-11dfbba7.js";const d={},a=s(`<h3 id="linux-svn搭建配置钩子自动更新" tabindex="-1"><a class="header-anchor" href="#linux-svn搭建配置钩子自动更新" aria-hidden="true">#</a> linux svn搭建配置钩子自动更新</h3><h2 id="_1、安装svn服务器端" tabindex="-1"><a class="header-anchor" href="#_1、安装svn服务器端" aria-hidden="true">#</a> 1、安装svn服务器端</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install subversion  

从镜像下载安装svn服务器端 
中间会提示是否ok，输入y，确认 
安装成功提示：.....complete！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/              //进入目录，准备创建svn目录 
 
mkdir svnRepo                   //创建一个svn目录 
 
chmod -R 777 svnRepo            //修改目录权限为777 
 
svnadmin create /usr/local/svnRepo/first //创建一个svn版本仓库first(first可以随便起名字) 
 
cd first/conf               //进入first版本仓库下的配置文件目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、下面要修改这个目录下的三个配置文件" tabindex="-1"><a class="header-anchor" href="#_2、下面要修改这个目录下的三个配置文件" aria-hidden="true">#</a> 2、下面要修改这个目录下的三个配置文件</h2><p>(1) svnserve.conf //配置版本库信息和用户文件和用户密码文件的路径、版本库路径</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>anon-access = none       //默认是只读read
auth-access = write      //认证后有写入权限
password-db = passwd     //帐号密码配置文件
authz-db = authz         //权限配置文件
realm = first            //改成自己的版本库 生效范围
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其它采用默认配置. 各语句都必须顶格写, 左侧不能留空格, 否则会出错. 这是个坑一定要注意</p><p>(2) passwd //创建或修改用户密码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[users]
# harry = harryssecret
# sally = sallyssecret
user1 = 123456
user2 = 123456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) authz //文件,创建svn组和组用户的权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[group]  
company = user1,user2       //创建一个first的组，并制定两个用户user1和user2 


[first:/]       //创建first这个版本库的所有者
@company = rw      //com
* = r
 
[/]                   //制定根目录下的权限 
@company = rw           //first组用户权限为读写  
* = r                 //其他用户只有读权限
*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、然后要设置自启动" tabindex="-1"><a class="header-anchor" href="#_3、然后要设置自启动" aria-hidden="true">#</a> 3、然后要设置自启动</h2><p>打开自启动文件 /etc/rc.local</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh 
# 
# This script will be executed *after* all the other init scripts. 
# You can put your own initialization stuff in here if you don&#39;t 
# want to do the full Sys V style init stuff. 

touch /var/lock/subsys/local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加下面一行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>svnserve -d -r /usr/local/svnRepo/first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>svn命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ps aux |grep &#39;svn&#39;  查找所有svn启动的进程 
 
kill -9 2505    杀死2505这个查找到的svn进程 

1：单版本库起动    svnserve -d -r /usr/local/svnRepo/first 
2：多版本库起动    svnserve -d -r /usr/local/svnRepo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、客户端访问" tabindex="-1"><a class="header-anchor" href="#_4、客户端访问" aria-hidden="true">#</a> 4、客户端访问</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>假设客户端使用tortoiseSVN 输入地址, svn://你的svn服务器ip:3690 
输入用户名和密码查看是否有链接成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、使用post-commit实现自动部署" tabindex="-1"><a class="header-anchor" href="#_5、使用post-commit实现自动部署" aria-hidden="true">#</a> 5、使用post-commit实现自动部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cd hooks/ 
$ cp post-commit.tmpl post-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(1):然后打开文件清空内容，修改为以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
export LANG=en_US.UTF-8
/usr/bin/svn update --username user1 --password 123456 /var/www/test


其中第一行意思是：用sh来解析这个脚本，因为各种shell的语法有细微的差别
第二行是编码格式：这里我使用的是UTF-8
最后一行/usr/bin/svn 是svn的路径，不是项目路径，应该都是一样的，
后半句分别是用户名、密码、和项目路径。
--username这个比较坑了，网上搜出来的很多都搞错了，前面其实是两个减号，英文输入法下的。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2):修改post-commit的可执行权限</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod 755 post-commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3): checkout项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在服务器进入项目目录/var/www/test checkout 整个项目。
svn checkout svn://您的服务器地址:3690 . //注意目录后面还有一个点
至此，如果按照此步骤搞下来，应该已经没有问题了，你可以本地commit代码，自动同步到项目了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),l=[a];function r(v,t){return i(),n("div",null,l)}const u=e(d,[["render",r],["__file","linuxsvndajianpeizhigouzizidonggengxin.html.vue"]]);export{u as default};
