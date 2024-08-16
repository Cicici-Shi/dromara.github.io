import{_ as i,o as e,c as s,f as a}from"./app-b852c2ab.js";const t="/assets/img/news/dbswitch-0-0.png",d="/assets/img/news/dbswitch-0-1.png",r="/assets/img/news/dbswitch-0-2.png",l="/assets/img/news/dbswitch-0-3.png",n={},c=a('<h1 id="一个适用于异构数据库迁移同步的简单工具-dbswitch" tabindex="-1"><a class="header-anchor" href="#一个适用于异构数据库迁移同步的简单工具-dbswitch" aria-hidden="true">#</a> 一个适用于异构数据库迁移同步的简单工具 dbswitch</h1><h2 id="作者介绍" tabindex="-1"><a class="header-anchor" href="#作者介绍" aria-hidden="true">#</a> 作者介绍</h2><ul><li>网名：三胖(inrgihc)</li><li>dromara 开源组织成员，项目 dromara/dbswitch 作者</li><li>项目地址：https://gitee.com/dromara/dbswitch</li></ul><figure><img src="'+t+`" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="dbswitch-的诞生" tabindex="-1"><a class="header-anchor" href="#dbswitch-的诞生" aria-hidden="true">#</a> dbswitch 的诞生</h2><p>你需要<strong>将 Oracle 等老牌数据库中的数据一键搞到 MySQL 或 PostgreSQL 中</strong>么？你需要<strong>将 MySQL 等关系型数据库中的数据一键搞到 Greenplum/ClickHouse 等 OLAP 数据库中进行分析</strong>么？</p><p>如果你在工作中遇到与我同样的需求，那么不妨体验下 dbswitch 工具。</p><p>dbswitch 是在<strong>数据库间数据搬迁</strong>和<strong>数据入仓入湖</strong>这两大背景环境下诞生的，虽然目标路程还很长，但是<strong>dbswitch 作为一款开源工具</strong>会一直再努力坚持着（也许各个数据库厂商都有自己的专业迁移工具）。</p><h2 id="dbswitch-的功能" tabindex="-1"><a class="header-anchor" href="#dbswitch-的功能" aria-hidden="true">#</a> dbswitch 的功能</h2><p>简言之，dbswitch 提供源端数据库向目的端数据库的批量迁移同步功能：</p><ul><li>结构迁移：</li></ul><p>(1)支持字段类型、主键信息、建表语句等的转换，并生成建表 SQL 语句。</p><p>(2)支持基于正则表达式转换的表名与字段名映射转换。</p><ul><li>数据同步：</li></ul><p>(1)基于 JDBC 的分批次读取源端数据库数据，并基于 jdbc(insert/copy 方式)将数据分批次写入目的数据库。</p><p>(2)支持有主键表（基于数据比对变化计算原理的）增量变更(insert/update/delete)同步功能</p><h2 id="dbswitch-支持的数据库" tabindex="-1"><a class="header-anchor" href="#dbswitch-支持的数据库" aria-hidden="true">#</a> dbswitch 支持的数据库</h2><p>当前基于<strong>驱动隔离</strong>已经集成支持<strong>多版本的数据库</strong>产品如下：</p><ul><li>甲骨文的 Oracle</li><li>微软的 Microsoft SQLServer</li><li>MySQL/MariaDB</li><li>PostgreSQL</li><li>Greenplum(需使用 PostgreSQL 类型)</li><li>IBM 的 DB2</li><li>Sybase 数据库</li><li>国产达梦数据库 DMDB</li><li>国产人大金仓数据库 Kingbase8</li><li>国产翰高数据库 HighGo</li><li>国产神通数据库 Oscar</li><li>国产南大通用数据库 GBase8a</li><li>Apache Hive(基于 JdbcStorageHandler)</li><li>SQLite3</li><li>OpenGuass</li><li>ClickHouse</li><li>MongoDB</li></ul><h2 id="dbswitch-的部署体验" tabindex="-1"><a class="header-anchor" href="#dbswitch-的部署体验" aria-hidden="true">#</a> dbswitch 的部署体验</h2><h3 id="_1-一键部署" tabindex="-1"><a class="header-anchor" href="#_1-一键部署" aria-hidden="true">#</a> 1.一键部署</h3><ul><li>基于 docker-compose 的一键安装(或升级):</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -sSL https://gitee.com/inrgihc/dbswitch/attach_files/1551962/download | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>基于 docker 的一键安装：</li></ul><p>假设已经部署好的 MySQL 数据库地址为 192.168.31.57，端口为 3306，账号为 test，密码为 123456</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name dbswitch \\
 -e MYSQLDB_HOST=192.168.31.57 \\
 -e MYSQLDB_PORT=3306 \\
 -e MYSQLDB_USERNAME=test \\
 -e MYSQLDB_PASSWORD=&#39;123456&#39; \\
 -v /tmp:/tmp \\
 -p 9088:9088 \\
 registry.cn-hangzhou.aliyuncs.com/inrgihc/dbswitch:1.8.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-部分截图" tabindex="-1"><a class="header-anchor" href="#_2-部分截图" aria-hidden="true">#</a> 2.部分截图</h2><p><img src="`+d+'" alt=""><img src="'+r+'" alt=""></p><ul><li>二次集成开发</li></ul><p>dbswitch 也支持 java 下二次集成开发，具体可查看 dbswitch 项目中的文档说明。</p><h2 id="关注-dbswitch" tabindex="-1"><a class="header-anchor" href="#关注-dbswitch" aria-hidden="true">#</a> 关注 dbswitch</h2><p>欢迎体验使用 dbswitch 工具，同时项目中也提供了 dbswitch 相关的实现原理。对项目有什么想法、建议或 BUG，可以加微信进群深度交流（加好友请注明：&quot;程序交流&quot;），也可创建 issues 进行反馈:</p><figure><img src="'+l+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="友情项目" tabindex="-1"><a class="header-anchor" href="#友情项目" aria-hidden="true">#</a> 友情项目</h2><p>[1] Greenplum 一键安装</p><p>[2] 新闻文章正文抽取正文抽取组件</p><ul><li><strong>项目地址：https://gitee.com/dromara/dbswitch</strong></li></ul>',37),h=[c];function o(u,b){return e(),s("div",null,h)}const g=i(n,[["render",o],["__file","dbswitch-0.html.vue"]]);export{g as default};