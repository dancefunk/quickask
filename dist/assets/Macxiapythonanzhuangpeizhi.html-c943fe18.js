import{_ as n,p as e,q as i,Z as a}from"./framework-823c4b5a.js";const l={},s=a(`<h3 id="mac下python安装配置" tabindex="-1"><a class="header-anchor" href="#mac下python安装配置" aria-hidden="true">#</a> Mac下python安装配置</h3><h3 id="千万-不要-把mac系统自带的python2-7-2-6删除掉-否则系统会有问题" tabindex="-1"><a class="header-anchor" href="#千万-不要-把mac系统自带的python2-7-2-6删除掉-否则系统会有问题" aria-hidden="true">#</a> 千万“不要”把Mac系统自带的Python2.7 2.6删除掉，否则系统会有问题！！！</h3><p>下载pycharm，在新建项目的时候可以查看当前安装了多少个版本的python</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.先安装homebrew
2.再安装Xcode command line tools

3.再安装Python3(关键！！！)
    brew install python3
    py3会被安装到homebrew的库中去：/usr/local/Cellar/python3

4.软件链接到LaunchPad中，也就是应用程序里
    brew linkapps python3

5.打开终端，修改~/.bash_profile文件追加内容
    export PATH=&quot;/usr/local/Cellar/python3/3.6.2/bin:\${PATH}&quot;
    alias python=&quot;/usr/local/Cellar/python3/3.6.2/bin/python3.6&quot;
    alias pip=&quot;/usr/local/Cellar/python3/3.6.2/bin/pip3.6&quot;

6.执行
    source ~/.bash_profile

7.查看是否安装成功(Python 3.6.2)
  	python --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[s];function r(t,c){return e(),i("div",null,d)}const h=n(l,[["render",r],["__file","Macxiapythonanzhuangpeizhi.html.vue"]]);export{h as default};
