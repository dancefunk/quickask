import{_ as n,o as s,c as t,a}from"./app-11dfbba7.js";const e={},o=a(`<h3 id="常用插件" tabindex="-1"><a class="header-anchor" href="#常用插件" aria-hidden="true">#</a> 常用插件</h3><table><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">Chinese (Simplified) Language Pack for Visual Studio Code</td><td style="text-align:left;">中文语言包</td></tr><tr><td style="text-align:left;">Path Intellisense</td><td style="text-align:left;">文件路径工具查找</td></tr><tr><td style="text-align:left;">Sublime Text Keymap and Settings Importer</td><td style="text-align:left;">submit按键支持</td></tr><tr><td style="text-align:left;">vscode-icons</td><td style="text-align:left;">主题图标</td></tr><tr><td style="text-align:left;">Markdown Preview Enhanced</td><td style="text-align:left;">markdown语法支持</td></tr><tr><td style="text-align:left;">npm Intellisense</td><td style="text-align:left;">npm工具查找</td></tr><tr><td style="text-align:left;">Code Runner</td><td style="text-align:left;">各类语言调试工具配置(环境变量)</td></tr><tr><td style="text-align:left;">REST Client</td><td style="text-align:left;">类似于Postman的请求工具</td></tr><tr><td style="text-align:left;">PHP IntelliSense</td><td style="text-align:left;">php语法支持</td></tr><tr><td style="text-align:left;">PHP Debug</td><td style="text-align:left;">php调试</td></tr><tr><td style="text-align:left;">Python</td><td style="text-align:left;">python环境支持</td></tr></tbody></table><h3 id="settings-json配置文件" tabindex="-1"><a class="header-anchor" href="#settings-json配置文件" aria-hidden="true">#</a> settings.json配置文件</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.multiCursorModifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ctrlCmd&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.snippetSuggestions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vsicons.dontShowNewVersionMessage&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.showExitAlert&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git.ignoreLegacyWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git.ignoreLimitWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git.ignoreMissingGitWarning&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${activeEditorLong}\${separator}\${rootName}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workbench.statusBar.feedback.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emmet.triggerExpansionOnTab&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;**/.git&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/.svn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/.hg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/CVS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/.DS_Store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;node_modules/&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/.vscode&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code-runner.executorMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;php&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Applications/MAMP/bin/php/php7.1.12/bin/php&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;python&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/local/Cellar/python/3.7.0/bin/python3.7&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;php.executablePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Applications/MAMP/bin/php/php7.1.12/bin/php&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;python.pythonPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/usr/local/Cellar/python/3.7.0/bin/python3.7&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode-设置取消打开文件目录的自动定位跟踪功能" tabindex="-1"><a class="header-anchor" href="#vscode-设置取消打开文件目录的自动定位跟踪功能" aria-hidden="true">#</a> VSCODE 设置取消打开文件目录的自动定位跟踪功能</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>文件--&gt;首选项--&gt;设置--&gt;在搜索栏中搜索：explorer.autoReveal;    去掉勾选即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),p=[o];function l(i,r){return s(),t("div",null,p)}const u=n(e,[["render",l],["__file","vscodebianjiqigongnenzhengli.html.vue"]]);export{u as default};