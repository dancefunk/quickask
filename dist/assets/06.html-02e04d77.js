import{_ as p,r as i,o,c as l,b as n,d as s,e as a,a as t}from"./app-9f8282b6.js";const r={},c={id:"转载地址-https-juejin-cn-post-7142815651294511135",tabindex:"-1"},u=n("a",{class:"header-anchor",href:"#转载地址-https-juejin-cn-post-7142815651294511135","aria-hidden":"true"},"#",-1),d={href:"https://juejin.cn/post/7142815651294511135",target:"_blank",rel:"noopener noreferrer"},v=t(`<h3 id="eslint语法检测工具" tabindex="-1"><a class="header-anchor" href="#eslint语法检测工具" aria-hidden="true">#</a> ESlint语法检测工具</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>中文文档：https://www.eslint.com.cn/
英文官网：https://eslint.org/

是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误

简单理解就是：检查代码，报告错误，保证代码语法结构的完整性，减少bug的书写量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建基于vite-vue的项目" tabindex="-1"><a class="header-anchor" href="#创建基于vite-vue的项目" aria-hidden="true">#</a> 创建基于vite + vue的项目</h3><blockquote><p>如果已经安装了就忽略次步骤</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm create vite@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="eslint安装使用" tabindex="-1"><a class="header-anchor" href="#eslint安装使用" aria-hidden="true">#</a> eslint安装使用</h3><blockquote><p>安装ESLint</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm add -D eslint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>初始化ESLint配置</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>配置初始化选择，根目录会生成.eslintrc.cjs文件</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>? How would you like to use ESLint? ... 
  To check syntax only
  To check syntax and find problems
&gt; To check syntax, find problems, and enforce code style
---------------------------------------------------------------- 选择强制代码风格
√ How would you like to use ESLint? · style       
? What type of modules does your project use? ... 
&gt; JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
---------------------------------------------------------------- 选择ESM规范
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
? Which framework does your project use? ... 
  React
&gt; Vue.js
  None of these
---------------------------------------------------------------- 选择VUE框架
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
? Does your project use TypeScript? » No / Yes
---------------------------------------------------------------- 使用TS yes
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
? Where does your code run? ...  (Press &lt;space&gt; to select, &lt;a&gt; to toggle all, &lt;i&gt; to invert selection)
√ Browser
√ Node
---------------------------------------------------------------- 空格增选Node 回车
√ How would you like to use ESLint? · style       
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
? How would you like to define a style for your project? ... 
  Use a popular style guide
&gt; Answer questions about your style
---------------------------------------------------------------- 用过A&amp;Q来配置规则
√ How would you like to define a style for your project? · prompt
? What format do you want your config file to be in? ...
&gt; JavaScript
  YAML
  JSON
---------------------------------------------------------------- 配置文件使用js文件
这里直接回车，因为这些格式化配置最后都要删掉，采用prettier规定格式
----------------------------------------------------------------
√ What style of indentation do you use? · tab
√ What quotes do you use for strings? · double
√ What line endings do you use? · unix
√ Do you require semicolons? · No / Yes
The config that you‘ve selected requires the following dependencies:
eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
? Would you like to install them now? » No / Yes
---------------------------------------------------------------- 选择yes现在立即初始化配置文件
√ Would you like to install them now? · No / Yes
? Which package manager do you want to use? ...
&gt; npm
  yarn
  pnpm
---------------------------------------------------------------- 包管理器选择npm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装vite-plugin-eslint（eslint结合vite使用）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 说明: 该包是用于配置vite运行的时候自动检测eslint规范 不符合页面会报错
npm add -D vite-plugin-eslint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>安装eslint-parser</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm add -D @babel/core
npm add -D @babel/eslint-parser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>配置vite.config.ts</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> eslintPlugin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-eslint&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token function">eslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/**/*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/**/*.vue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/*.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vscode安装eslint插件" tabindex="-1"><a class="header-anchor" href="#vscode安装eslint插件" aria-hidden="true">#</a> VsCode安装ESLint插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在商店中查找ESLint插件，然后安装它，不需要配置
在项目内如果集成了eslint的npm包，这个插件会根据配置文件，对代码检查问题进行高亮提示
(红色波浪线是错误提示，黄色波浪线是警告提示)，然后根据弹出框指示修改就可以了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prettier安装使用" tabindex="-1"><a class="header-anchor" href="#prettier安装使用" aria-hidden="true">#</a> Prettier安装使用</h3>`,21),m={href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm add -D prettier
npm add -D eslint-config-prettier #eslint兼容的插件
npm add -D eslint-plugin-prettier #eslint的prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>配置.prettierrc.js</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** .prettierrc.js
 * 在VSCode中安装prettier插件 打开插件配置填写\`.prettierrc.js\` 将本文件作为其代码格式化规范
 * 在本文件中修改格式化规则，不会同时触发改变ESLint代码检查
 * 所以每次修改本文件需要重启VSCode，ESLint检查才能同步代码格式化
 * 需要相应的代码格式化规范请自行查阅配置，下面为默认项目配置
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token comment">// 一行最多多少个字符</span>
	<span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
	<span class="token comment">// 指定每个缩进级别的空格数</span>
	<span class="token literal-property property">tabWidth</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token comment">// 使用制表符而不是空格缩进行</span>
	<span class="token literal-property property">useTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 在语句末尾是否需要分号</span>
	<span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 是否使用单引号</span>
	<span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// 更改引用对象属性的时间 可选值&quot;&lt;as-needed|consistent|preserve&gt;&quot;</span>
	<span class="token literal-property property">quoteProps</span><span class="token operator">:</span> <span class="token string">&#39;as-needed&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// 在JSX中使用单引号而不是双引号</span>
	<span class="token literal-property property">jsxSingleQuote</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值&quot;&lt;none|es5|all&gt;&quot;，默认none</span>
	<span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;es5&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// 在对象文字中的括号之间打印空格</span>
	<span class="token literal-property property">bracketSpacing</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token comment">// jsx 标签的反尖括号需要换行</span>
	<span class="token literal-property property">jsxBracketSameLine</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 在单独的箭头函数参数周围包括括号 always：(x) =&gt; x \\ avoid：x =&gt; x</span>
	<span class="token literal-property property">arrowParens</span><span class="token operator">:</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码</span>
	<span class="token literal-property property">rangeStart</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token literal-property property">rangeEnd</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
	<span class="token comment">// 指定要使用的解析器，不需要写文件开头的 @prettier</span>
	<span class="token literal-property property">requirePragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 不需要自动在文件开头插入 @prettier</span>
	<span class="token literal-property property">insertPragma</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">// 使用默认的折行标准 always\\never\\preserve</span>
	<span class="token literal-property property">proseWrap</span><span class="token operator">:</span> <span class="token string">&#39;preserve&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// 指定HTML文件的全局空格敏感度 css\\strict\\ignore</span>
	<span class="token literal-property property">htmlWhitespaceSensitivity</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
	<span class="token comment">// Vue文件脚本和样式标签缩进</span>
	<span class="token literal-property property">vueIndentScriptAndStyle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token comment">//在 windows 操作系统中换行符通常是回车 (CR) 加换行分隔符 (LF)，也就是回车换行(CRLF)，</span>
	<span class="token comment">//然而在 Linux 和 Unix 中只使用简单的换行分隔符 (LF)。</span>
	<span class="token comment">//对应的控制字符为 &quot;\\n&quot; (LF) 和 &quot;\\r\\n&quot;(CRLF)。auto意为保持现有的行尾</span>
	<span class="token comment">// 换行符使用 lf 结尾是 可选值&quot;&lt;auto|lf|crlf|cr&gt;&quot;</span>
	<span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">&#39;auto&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prettier结合eslint" tabindex="-1"><a class="header-anchor" href="#prettier结合eslint" aria-hidden="true">#</a> Prettier结合ESLint</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>配置完成prettier肯定会和eslint发生冲突，所以接下来要调整一下.eslintrc.js文件，
通过几个扩展，来完成vue3、ts、prettier的规则和eslint插件结合使用，配置如下面代码所示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>.eslintrc.cjs</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** .eslintrc.cjs
 * 在VSCode中安装ESLint插件，编写过程中检测代码质量
 * ESLint 代码质量校验相关配置
 * 这里使用prettier作为代码格式化工具，用ESLint做代码质检
 * 相关配置使用下面extends扩展先做默认设置
 * 在.prettierrc.js文件中配置好后，格式化规则会以.prettierrc.js作为最终格式，所以不建议在本文件中做代码格式化相关配置
 * 相关prettier配置ESLint会默认加载为代码质检 格式化以prettier为主
 * 在本配置文件中只做代码质量约束规范配置
 */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token literal-property property">node</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token string">&#39;eslint-config-prettier&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用推荐的eslint</span>
		<span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;plugin:vue/vue3-recommended&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 使用插件支持vue3</span>
		<span class="token string">&#39;plugin:vue/vue3-essential&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">//1.继承.prettierrc.js文件规则  2.开启rules的 &quot;prettier/prettier&quot;: &quot;error&quot;  3.eslint fix的同时执行prettier格式化</span>
		<span class="token string">&#39;plugin:prettier/recommended&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;vue-eslint-parser&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span> <span class="token number">2020</span><span class="token punctuation">,</span>
		<span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">defineProps</span><span class="token operator">:</span> <span class="token string">&#39;readonly&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">defineEmits</span><span class="token operator">:</span> <span class="token string">&#39;readonly&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">defineExpose</span><span class="token operator">:</span> <span class="token string">&#39;readonly&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">withDefaults</span><span class="token operator">:</span> <span class="token string">&#39;readonly&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allow</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">//生产模式不允许使用log</span>
		<span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">//生产默认不允许使用debugger</span>
		<span class="token string-property property">&#39;@typescript-eslint/no-unused-vars&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">varsIgnorePattern</span><span class="token operator">:</span> <span class="token string">&#39;.*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//变量声明未使用</span>
		<span class="token string-property property">&#39;@typescript-eslint/no-explicit-any&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 允许ts使用any</span>
		<span class="token comment">// &#39;@typescript-eslint/no-var-requires&#39;: &#39;off&#39;, // 强制使用 import 且不允许使用 require 设置off关闭检查</span>
		<span class="token comment">// &#39;vue/require-v-for-key&#39;: &#39;off&#39;, // 对保留元素检查 vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写</span>
		<span class="token comment">// &#39;vue/valid-v-for&#39;: &#39;off&#39;, // 对于非保留(自定义)元素检查  vue3中v-for会自动追加key值，所以不用再强制添加key属性，所以不检查key的填写</span>
		<span class="token comment">// // 添加组件命名忽略规则 vue官方默认规则是多单词驼峰来进行组件命名</span>
		<span class="token comment">// &#39;vue/multi-word-component-names&#39;: [</span>
		<span class="token comment">// 	&#39;warn&#39;,</span>
		<span class="token comment">// 	{</span>
		<span class="token comment">// 		ignores: [&#39;index&#39;], //需要忽略的组件名</span>
		<span class="token comment">// 	},</span>
		<span class="token comment">// ],</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(y,g){const e=i("ExternalLinkIcon");return o(),l("div",null,[n("h3",c,[u,s(" 转载地址："),n("a",d,[s("https://juejin.cn/post/7142815651294511135"),a(e)])]),v,n("blockquote",null,[n("p",null,[s("VSCode插件地址："),n("a",m,[s("Prettier"),a(e)])])]),k])}const f=p(r,[["render",b],["__file","06.html.vue"]]);export{f as default};
