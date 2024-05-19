import{_ as e,o as i,c as t,f as o}from"./app-e38f0e67.js";const a="/assets/img/blog/HertzBeat-intro-0.png",r="/assets/img/blog/HertzBeat-intro-1.png",c="/assets/img/blog/HertzBeat-intro-2.png",d="/assets/img/blog/HertzBeat-intro-3.png",n="/assets/img/blog/HertzBeat-intro-4.png",l="/assets/img/blog/HertzBeat-intro-5.png",s="/assets/img/blog/HertzBeat-intro-6.png",g="/assets/img/blog/HertzBeat-intro-7.png",p="/assets/img/blog/HertzBeat-intro-8.png",h="/assets/img/blog/HertzBeat-intro-9.png",u="/assets/img/blog/HertzBeat-intro-10.png",b="/assets/img/blog/HertzBeat-intro-11.png",f="/assets/img/blog/HertzBeat-intro-12.png",m="/assets/img/blog/HertzBeat-intro-13.png",B="/assets/img/blog/HertzBeat-intro-14.png",S="/assets/img/blog/HertzBeat-intro-15.png",H="/assets/img/blog/HertzBeat-intro-16.png",x="/assets/img/blog/HertzBeat-intro-17.png",_="/assets/img/blog/HertzBeat-intro-18.png",z="/assets/img/blog/HertzBeat-intro-19.png",k="/assets/img/blog/HertzBeat-intro-20.png",D="/assets/img/blog/HertzBeat-intro-21.png",P={},M=o('<blockquote><p>做了这么久，好像都没有出文章详细介绍了我们做的这个开源项目，在这里给大家介绍一波。</p></blockquote><h2 id="🎡-介绍" tabindex="-1"><a class="header-anchor" href="#🎡-介绍" aria-hidden="true">#</a> 🎡 介绍</h2><p>HertzBeat 赫兹跳动 是一个拥有强大自定义监控能力，高性能集群，兼容 Prometheus，无需 Agent 的开源实时监控告警系统。</p><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li>集 <strong>监控+告警+通知</strong> 为一体，支持对应用服务，应用程序，数据库，缓存，操作系统，大数据，中间件，Web 服务器，云原生，网络，自定义等监控阈值告警通知一步到位。</li><li>易用友好，无需 <code>Agent</code>，全 <code>WEB</code> 页面操作，鼠标点一点就能监控告警，零上手学习成本。</li><li>将 <code>Http, Jmx, Ssh, Snmp, Jdbc, Prometheus</code> 等协议规范可配置化，只需在浏览器配置监控模版 <code>YML</code> 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 <code>K8s</code> 或 <code>Docker</code> 等新的监控类型吗？</li><li>兼容 <code>Prometheus</code> 的系统生态并且更多，只需页面操作就可以监控 <code>Prometheus</code> 所能监控的。</li><li>高性能，支持多采集器集群横向扩展，支持多隔离网络监控，云边协同。</li><li>自由的告警阈值规则，<code>邮件</code> <code>Discord</code> <code>Slack</code> <code>Telegram</code> <code>钉钉</code> <code>微信</code> <code>飞书</code> <code>短信</code> <code>Webhook</code> <code>Server酱</code> 等方式消息及时送达。</li></ul><blockquote><p><code>HertzBeat</code>的强大自定义，多类型支持，高性能，易扩展，低耦合，希望能帮助开发者和团队快速搭建自有监控系统。<br> 当然我们也提供了对应的 **SAAS 版本监控云服务**，中小团队和个人无需再为监控自有资源而去部署一套监控系统，**登录即可免费开始**。</p></blockquote><hr><h3 id="强大的监控模版" tabindex="-1"><a class="header-anchor" href="#强大的监控模版" aria-hidden="true">#</a> 强大的监控模版</h3><blockquote><p>开始我们就说 HertzBeat 的特点是自定义监控能力，无需 Agent。在讨论这两点之前，我们先介绍下 HertzBeat 的不一样的监控模版。而正是因为这样的监控模版设计，才会有了后面的高级特性。</p></blockquote><p>HertzBeat 自身并没有去创造一种采集数据协议让监控对端来适配它。而是充分使用了现有的生态，<code>SNMP协议</code>采集网络交换机路由器信息，<code>JMX规范</code>采集 JAVA 应用信息，<code>JDBC规范</code>采集数据集信息，<code>SSH</code>直连执行脚本获取回显信息，<code>HTTP+(JsonPath | prometheus等)</code>解析 API 接口信息，<code>IPMI协议</code>采集服务器信息等等。<br> HertzBeat 使用这些已有的标准协议或规范，将他们抽象规范可配置化，最后使其都可以通过编写 YML 格式监控模版的形式，来制定模版使用这些协议来采集任何想要的指标数据。</p><figure><img src="'+a+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>你相信用户只需在 UI 页面编写一个监控模版，点击保存后，就能立刻适配一款<code>K8s</code>或<code>Docker</code>等新的监控类型吗？</p><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="内置监控类型" tabindex="-1"><a class="header-anchor" href="#内置监控类型" aria-hidden="true">#</a> 内置监控类型</h3><p><strong>官方内置了大量的监控模版类型，方便用户直接在页面添加使用，一款监控类型对应一个 YML 监控模版</strong></p><ul><li>Website, Port Telnet,Http Api, Ping Connect,Jvm, SiteMap,Ssl Certificate, SpringBoot2,FTP Server, SpringBoot3,Udp Port, Dns,Pop3, Ntp,Api Code, Smtp,Nginx</li><li>Mysql, PostgreSQL,MariaDB, Redis,ElasticSearch, SqlServer,Oracle, MongoDB,DM, OpenGauss,ClickHouse, IoTDB,Redis Cluster, Redis SentinelDoris BE, Doris FE,Memcached, NebulaGraph</li><li>Linux, Ubuntu,CentOS, Windows,EulerOS, Fedora CoreOS,OpenSUSE, Rocky Linux,Red Hat, FreeBSD,AlmaLinux, Debian Linux</li><li>Tomcat, Nacos,Zookeeper, RabbitMQ,Flink, Kafka,ShenYu, DynamicTp,Jetty, ActiveMQ,Spring Gateway, EMQX MQTT,AirFlow, Hive,Spark, Hadoop</li><li>Kubernetes, Docker</li><li>CiscoSwitch, HpeSwitch,HuaweiSwitch, TpLinkSwitch,H3cSwitch</li><li>和更多自定义监控模版。</li><li>通知支持 <code>Discord</code> <code>Slack</code> <code>Telegram</code> <code>邮件</code> <code>钉钉</code> <code>微信</code> <code>飞书</code> <code>短信</code> <code>Webhook</code> <code>Server酱</code>。</li></ul><h3 id="强大自定义功能" tabindex="-1"><a class="header-anchor" href="#强大自定义功能" aria-hidden="true">#</a> 强大自定义功能</h3><blockquote><p>由前面的<strong>监控模版</strong>介绍，大概清楚了 <code>HertzBeat</code> 拥有的强大自定义功能。<br> 我们将每个监控类型都视为一个监控模版，不管是官方内置的还是后期用户自定义新增的。用户都可以方便的通过修改监控模版来新增修改删除监控指标。<br> 模版里面包含各个协议的使用配置，环境变量，指标转换，指标计算，单位转换，指标采集等一系列功能，帮助用户能采集到自己想要的监控指标。</p></blockquote><figure><img src="'+c+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="无需-agent" tabindex="-1"><a class="header-anchor" href="#无需-agent" aria-hidden="true">#</a> 无需 Agent</h3><blockquote><p>对于使用过各种系统的用户来说，可能最麻烦头大的不过就是各种 <code>agent</code> 的安装部署调试升级了。<br> 每台主机得装个 <code>agent</code>，为了监控不同应用中间件可能还得装几个对应的 <code>agent</code>，监控数量上来了轻轻松松上千个，写个批量脚本可能会减轻点负担。<br><code>agent</code> 的版本是否与主应用兼容, <code>agent</code> 与主应用的通讯调试, <code>agent</code> 的同步升级等等等等，这些全是头大的点。</p></blockquote><p><code>HertzBeat</code> 的原理就是使用不同的协议去直连对端系统，采用 <code>PULL</code> 的形式去拉取采集数据，无需用户在对端主机上部署安装 <code>Agent</code> | <code>Exporter</code> 等。</p><ul><li>比如监控 <code>linux操作系统</code>, 在 <code>HertzBeat</code> 端输入 IP 端口账户密码或密钥即可。</li><li>比如监控 <code>mysql数据库</code>, 在 <code>HertzBeat</code> 端输入 IP 端口账户密码即可。<br><strong>密码等敏感信息全链路加密</strong></li></ul><h3 id="高性能集群" tabindex="-1"><a class="header-anchor" href="#高性能集群" aria-hidden="true">#</a> 高性能集群</h3><blockquote><p>当监控数量指数级上升，采集性能下降或者环境不稳定容易造成采集器单点故障时，这时我们的采集器集群就出场了。</p></blockquote><ul><li><code>HertzBeat</code> 支持部署采集器集群，多采集器集群横向扩展，指数级提高可监控数量与采集性能。</li><li>监控任务在采集器集群中自调度，单采集器挂掉无感知故障迁移采集任务，新加入采集器节点自动调度分担采集压力。</li><li>单机模式与集群模式相互切换部署非常方便，无需额外组件部署。</li></ul><figure><img src="'+d+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="云边协同" tabindex="-1"><a class="header-anchor" href="#云边协同" aria-hidden="true">#</a> 云边协同</h3><blockquote><p>两地三中心，多云环境，多隔离网络，这些场景名词可能大家略有耳闻。当需要用一套监控系统统一监控不同隔离网络的 IT 资源时，这时我们的云边协同就来啦。</p></blockquote><ul><li><code>HertzBeat</code> 支持部署边缘采集器集群，与主 <code>HertzBeat</code> 服务云边协同提升采集能力。</li></ul><p>在多个网络不相通的隔离网络中，在以往方案中我们需要在每个网络都部署一套监控系统，这导致数据不互通，管理部署维护都不方便。<br><code>HertzBeat</code> 提供的云边协同能力，可以在多个隔离网络部署边缘采集器，采集器在隔离网络内部进行监控任务采集，采集数据上报，由主服务统一调度管理展示。</p><figure><img src="'+n+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="易用友好" tabindex="-1"><a class="header-anchor" href="#易用友好" aria-hidden="true">#</a> 易用友好</h3><ul><li>集 <strong>监控+告警+通知</strong> All in one, 无需单独部署多个组件服务。</li><li>全 UI 界面操作，不管是新增监控，修改监控模版，还是告警阈值通知，都可在 WEB 界面操作完成，无需要修改文件或脚本或重启。</li><li>无需 Agent, 监控对端我们只需在 WEB 界面填写所需 IP 端口账户密码等参数即可。</li><li>自定义友好，只需一个监控模版 YML，自动生成对应监控类型的监控管理页面，数据图表页面，阈值配置等。</li><li>阈值告警通知友好，基于表达式阈值配置，多种告警通知渠道，支持告警静默，时段标签告警级别过滤等。</li></ul><h3 id="完全开源" tabindex="-1"><a class="header-anchor" href="#完全开源" aria-hidden="true">#</a> 完全开源</h3><ul><li>Dromara 开源社区顶级项目，Gitee GVP，使用<code>Apache2</code>协议，由自由开放的开源社区主导维护的开源协作产品。</li><li>无监控数量<code>License</code>，监控类型限制等伪开源限制。</li><li>基于<code>Java+SpringBoot+TypeScript+Angular</code>主流技术栈构建，方便的二次开发。</li><li>开源不等同于免费，不能基于 HertzBeat 二次开发修改 logo，名称，版权等。</li></ul><p><strong>HertzBeat 已被 CNCF 云原生全景图 收录</strong></p><figure><img src="'+l+'" alt="" tabindex="0"><figcaption></figcaption></figure><hr><p><strong><code>HertzBeat</code>的强大自定义，多类型支持，高性能，易扩展，低耦合，希望能帮助开发者和团队快速搭建自有监控系统。</strong></p><hr><h2 id="即刻体验一波" tabindex="-1"><a class="header-anchor" href="#即刻体验一波" aria-hidden="true">#</a> 即刻体验一波</h2><p>Docker 环境下运行一条命令即可：<code>docker run -d -p 1157:1157 -p 1158:1158 --name hertzbeat tancloud/hertzbeat</code><br> 浏览器访问 <code>http://localhost:1157</code> 默认账户密码 <code>admin/hertzbeat</code></p><h3 id="登陆页面" tabindex="-1"><a class="header-anchor" href="#登陆页面" aria-hidden="true">#</a> 登陆页面</h3><ul><li>HertzBeat 的用户管理统一由配置文件 <code>sureness.yml</code> 维护，用户可以通过修改此文件来新增删除修改用户信息，用户角色权限等。默认账户密码 admin/hertzbeat</li></ul><figure><img src="'+s+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="概览页面" tabindex="-1"><a class="header-anchor" href="#概览页面" aria-hidden="true">#</a> 概览页面</h3><ul><li>全局概览页面，分类展示了当前监控大类别数量分布，用户可直观查看当前的监控类型与数量并点击跳转至对应监控类型进行维护管理。</li><li>展示当前注册的采集器集群状态，包括采集器的上线状态，监控任务，启动时间，IP 地址，名称等。</li><li>下发展示了最近告警信息列表，告警级别分布情况，告警处理率情况。</li></ul><figure><img src="'+g+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="监控中心" tabindex="-1"><a class="header-anchor" href="#监控中心" aria-hidden="true">#</a> 监控中心</h3><ul><li>监控入口，支持对应用服务，数据库，操作系统，中间件，网络，自定义等监控的管理。</li><li>以列表的形式展示当前已添加的监控，支持对监控的新增，修改，删除，取消监控，导入导出，批量管理等。</li><li>支持标签分组，查询过滤，查看监控详情入口等。</li></ul><p>内置支持的监控类型包括：</p><ul><li>Website, Port Telnet,Http Api, Ping Connect,Jvm, SiteMap,Ssl Certificate, SpringBoot2,FTP Server, SpringBoot3,Udp Port, Dns,Pop3, Ntp,Api Code, Smtp,Nginx</li><li>Mysql, PostgreSQL,MariaDB, Redis,ElasticSearch, SqlServer,Oracle, MongoDB,DM, OpenGauss,ClickHouse, IoTDB,Redis Cluster, Redis SentinelDoris BE, Doris FE,Memcached, NebulaGraph</li><li>Linux, Ubuntu,CentOS, Windows,EulerOS, Fedora CoreOS,OpenSUSE, Rocky Linux,Red Hat, FreeBSD,AlmaLinux, Debian Linux</li><li>Tomcat, Nacos,Zookeeper, RabbitMQ,Flink, Kafka,ShenYu, DynamicTp,Jetty, ActiveMQ,Spring Gateway, EMQX MQTT,AirFlow, Hive,Spark, Hadoop</li><li>Kubernetes, Docker</li><li>CiscoSwitch, HpeSwitch,HuaweiSwitch, TpLinkSwitch,H3cSwitch</li></ul><figure><img src="'+p+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="新增修改监控" tabindex="-1"><a class="header-anchor" href="#新增修改监控" aria-hidden="true">#</a> 新增修改监控</h3><ul><li>新增或修改指定监控类型的监控实例，配置对端监控的 IP，端口等参数，设置采集周期，采集任务调度方式，支持提前探测可用性等。</li><li>页面上配置的监控参数由对应监控类型的监控模版所定义，用户可以通过修改监控模版来修改页面配置参数。</li><li>支持关联标签，用标签来管理监控分组，告警匹配等。</li></ul><figure><img src="'+h+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="监控详情" tabindex="-1"><a class="header-anchor" href="#监控详情" aria-hidden="true">#</a> 监控详情</h3><ul><li>监控的数据详情页面，展示了当前监控的基本参数信息，监控指标数据信息。</li><li>监控实时数据报告，以小卡片列表的形式展示了当前监控的所有指标实时值，用户可根据实时值参考配置告警阈值规则。</li><li>监控历史数据报告，以趋势图表的形式展示了当前监控数值类型的指标的历史值，支持查询小时，天，月的历史数据，支持配置页面刷新时间。</li><li>⚠️ 注意监控历史图表需配置外置时序数据库才能获取完整功能，时序数据库支持: IOTDB, TDengine, InfluxDB, GreptimeDB</li></ul><figure><img src="'+u+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+b+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="告警中心" tabindex="-1"><a class="header-anchor" href="#告警中心" aria-hidden="true">#</a> 告警中心</h3><ul><li>已触发告警消息的管理展示页面，使用户有直观的展示当前告警情况。</li><li>支持告警处理，告警标记未处理，告警删除清空等批量操作。</li></ul><figure><img src="'+f+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><h3 id="阈值规则" tabindex="-1"><a class="header-anchor" href="#阈值规则" aria-hidden="true">#</a> 阈值规则</h3><ul><li>对于监控的可用性状态设置阈值规则，特定指标的值超过我们预期范围时发出告警，这些都可以在阈值规则这里配置。</li><li>告警级别分为三级：通知告警，严重告警，紧急告警。</li><li>阈值规则支持可视化页面配置或表达式规则配置，灵活性更高。</li><li>支持配置触发次数，告警级别，通知模版，关联指定监控等。</li></ul><figure><img src="'+m+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><figure><img src="'+B+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><h3 id="告警收敛" tabindex="-1"><a class="header-anchor" href="#告警收敛" aria-hidden="true">#</a> 告警收敛</h3><ul><li>当通过阈值规则判断触发告警后，会进入到告警收敛，告警收敛会根据规则对特定时间段的重复告警消息去重收敛，已避免大量重复性告警导致接收人告警麻木。</li><li>告警收敛规则支持重复告警生效时间段，标签匹配和告警级别匹配过滤。</li></ul><figure><img src="'+S+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><figure><img src="'+H+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><h3 id="告警静默" tabindex="-1"><a class="header-anchor" href="#告警静默" aria-hidden="true">#</a> 告警静默</h3><ul><li>当通过阈值规则判断触发告警后，会进入到告警静默，告警静默会根据规则对特定一次性时间段或周期性时候段的告警消息屏蔽静默，此时间段不发送告警消息。</li><li>此应用场景如用户在系统维护中，无需发已知告警。用户在工作日时间才会接收告警消息，用户在晚上需避免打扰等。</li><li>告警静默规则支持一次性时间段或周期性时间段，支持标签匹配和告警级别匹配。</li></ul><figure><img src="'+x+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><figure><img src="'+_+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>hertzbeat</p><h3 id="消息通知" tabindex="-1"><a class="header-anchor" href="#消息通知" aria-hidden="true">#</a> 消息通知</h3><ul><li>消息通知功能是把告警消息通过不同媒体渠道通知给指定的接收人，告警消息及时触达。</li><li>功能包含接收人信息管理和通知策略管理，接收人管理维护接收人信息以其通知方式信息，通知策略管理维护把哪些告警信息通知给哪些接收人的策略规则。</li><li>通知方式支持 <code>邮件</code> <code>Discord</code> <code>Slack</code> <code>Telegram</code> <code>钉钉</code> <code>微信</code> <code>飞书</code> <code>短信</code> <code>Webhook</code> 等方式。</li><li>通知策略支持标签匹配和告警级别匹配，方便的使不同标签的告警和告警级别分派给不同的接收处理人。</li><li>支持通知模版，用户可以自定义通过模版内容格式来满足自己的个性化通知展示需求。</li></ul><figure><img src="'+z+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="监控模版" tabindex="-1"><a class="header-anchor" href="#监控模版" aria-hidden="true">#</a> 监控模版</h3><ul><li>HertzBeat 将 <code>Http, Jmx, Ssh, Snmp, Jdbc, Prometheus</code> 等协议规范可配置化，只需在浏览器配置监控模版 <code>YML</code> 就能使用这些协议去自定义采集想要的指标。您相信只需配置下就能立刻适配一款 <code>K8s</code> 或 <code>Docker</code> 等新的监控类型吗？</li><li>同理我们内置的所有监控类型(mysql,website,jvm,k8s)也一一映射为对应的监控模版，用户可以新增修改监控模版来自定义监控功能。</li></ul><figure><img src="'+D+'" alt="" tabindex="0"><figcaption></figcaption></figure><hr><p><strong>还有更多强大的功能快去探索呀。Have Fun!</strong></p><hr><p><strong>官网: https://hertzbeat.com/</strong><br><strong>Github: https://github.com/dromara/hertzbeat</strong><br><strong>Gitee: https://gitee.com/dromara/hertzbeat</strong></p>',94),T=[M];function A(q,L){return i(),t("div",null,T)}const C=e(P,[["render",A],["__file","HertzBeat-intro.html.vue"]]);export{C as default};
