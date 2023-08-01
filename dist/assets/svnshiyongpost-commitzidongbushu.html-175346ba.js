import{_ as e,o as s,c as n,a as i}from"./app-47c2ac71.js";const t={},o=i(`<h5 id="post-commit-bat" tabindex="-1"><a class="header-anchor" href="#post-commit-bat" aria-hidden="true">#</a> post-commit.bat</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@echo off
SET REPOS=%1
SET REV=%2
SET DIR=%REPOS%/hooks
SET WORKING_COPY=E:/phpStudy/WWW/h1901/demo   目录
SET PATH=%PATH%;
svn update %WORKING_COPY% --username 用户名 --password 密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请将上述参数进行替换，并保存文件为：post-commit.bat 放到版本库的hooks文件夹里面</strong></p>`,3),a=[o];function d(c,r){return s(),n("div",null,a)}const m=e(t,[["render",d],["__file","svnshiyongpost-commitzidongbushu.html.vue"]]);export{m as default};
