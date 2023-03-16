import{_ as n,p as i,q as e,Z as s}from"./framework-823c4b5a.js";const d={},l=s(`<h3 id="创建计划任务-www用户" tabindex="-1"><a class="header-anchor" href="#创建计划任务-www用户" aria-hidden="true">#</a> 创建计划任务(www用户)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -e -u www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看计划任务-www用户" tabindex="-1"><a class="header-anchor" href="#查看计划任务-www用户" aria-hidden="true">#</a> 查看计划任务(www用户)</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crontab -l -u www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看计划任务执行日志" tabindex="-1"><a class="header-anchor" href="#查看计划任务执行日志" aria-hidden="true">#</a> 查看计划任务执行日志</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail /var/log/cron
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="任务格式" tabindex="-1"><a class="header-anchor" href="#任务格式" aria-hidden="true">#</a> 任务格式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>*　　*　　*　　*　　*　　command
分　 时　 日　 月　 周　 命令

解 释:
第1列表示分钟1～59 每分钟用或者 /1表示
第2列表示小时1～23（0表示0点）
第3列表示日期1～31
第4列表示月份1～12
第5列标识号星期0～6（0表示星期天）
第6列要运行的命令

例如定时请求某一个url
00 03 * * * /usr/bin/curl http://crmpay.com/mpdown

1.每分钟定时执行一次规则：
每1分钟执行： */1 * * * *或者* * * * *
每5分钟执行： */5 * * * *

2.每小时定时执行一次规则：
每小时执行： 0 * * * *或者0 */1 * * *
每天上午7点执行：0 7 * * *
每天上午7点10分执行：10 7 * * *

3.每天定时执行一次规则：
每天执行 0 0 * * *

4.每周定时执行一次规则：
每周执行 0 0 * * 0

5.每月定时执行一次规则：
每月执行 0 0 1 * *

6.每年定时执行一次规则：
每年执行 0 0 1 1 *

7.其他例子
5 * * * * ls 指定每小时的第5分钟执行一次ls命令
30 5 * * * ls 指定每天的 5:30 执行ls命令
30 7 8 * * ls 指定每月8号的7：30分执行ls命令
30 5 8 6 * ls 指定每年的6月8日5：30执行ls命令
30 6 * * 0 ls 指定每星期日的6:30执行ls命令
[注：0表示星期天，1表示星期1，以此类推，也可以用英文来表示，sun表示星期天，mon表示星期一等]

30 3 10,20 * * ls 每月10号及20号的3：30执行ls命令 
[注：“，”用来连接多个不连续的时段]

25 8-11 * * * ls 每天8-11点的第25分钟执行ls命令
[注：“-”用来连接连续的时段]

*/15 * * * * ls 每15分钟执行一次ls命令
[即每个小时的第0 15 30 45 60分钟执行ls命令 ]

30 6 */10 * * ls 每个月中，每隔10天6:30执行一次ls命令
[即每月的1、11、21、31日是的6：30执行一次ls命令]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),a=[l];function v(r,c){return i(),e("div",null,a)}const m=n(d,[["render",v],["__file","crontabjihuarenwu.html.vue"]]);export{m as default};
