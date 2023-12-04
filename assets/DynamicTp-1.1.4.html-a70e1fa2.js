import{_ as i,o as t,c as a,e as n}from"./app-b6614228.js";const r="/assets/img/news/DynamicTp-1.1.4-1.png",e="/assets/img/news/DynamicTp-1.1.4-2.png",o="/assets/img/news/DynamicTp-1.1.4-3.jpg",p="/assets/img/news/DynamicTp-1.1.4-4.png",s={},l=n('<h2 id="dynamictp-简介" tabindex="-1"><a class="header-anchor" href="#dynamictp-简介" aria-hidden="true">#</a> DynamicTp 简介</h2><p>DynamicTp 是一个基于配置中心实现的轻量级动态线程池监控管理工具，主要功能可以总结为动态调参、通知报警、运行监控、三方包线程池管理等几大类。</p><h2 id="dynamictp-特性" tabindex="-1"><a class="header-anchor" href="#dynamictp-特性" aria-hidden="true">#</a> DynamicTp 特性</h2><ul><li><strong>代码零侵入</strong>：我们改变了线程池以往的使用姿势，所有配置均放在配置中心，服务启动时会从配置中心拉取配置生成线程池对象放到 Spring 容器中，使用时直接从 Spring 容器中获取，对业务代码零侵入</li><li><strong>通知告警</strong>：提供多种报警维度（配置变更通知、活性报警、容量阈值报警、拒绝触发报警、任务执行或等待超时报警），已支持企业微信、钉钉、飞书、邮件报警，同时提供 SPI 接口可自定义扩展实现</li><li><strong>运行监控</strong>：定时采集线程池指标数据，支持通过 MicroMeter、JsonLog 日志输出、Endpoint 三种方式，可通过 SPI 接口自定义扩展实现</li><li><strong>任务增强</strong>：提供任务包装功能，实现 TaskWrapper 接口即可，如 MdcTaskWrapper、TtlTaskWrapper、SwTraceTaskWrapper，可以支持线程池上下文信息传递</li><li><strong>多配置中心支持</strong>：基于主流配置中心实现线程池参数动态调整，实时生效，已支持 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb，同时也提供 SPI 接口可自定义扩展实现</li><li><strong>中间件线程池管理</strong>：集成管理常用第三方组件的线程池，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件的线程池管理（调参、监控报警）</li><li><strong>轻量简单</strong>：基于 SpringBoot 实现，引入 starter，接入只需简单 4 步就可完成，顺利 3 分钟搞定</li><li><strong>多模式</strong>：提供了增强线程池 DtpExecutor，IO 密集型场景使用的线程池 EagerDtpExecutor，调度线程池 ScheduledDtpExecutor，有序线程池 OrderedDtpExecutor，可以根据业务场景选择合适的线程池</li><li><strong>兼容性</strong>：JUC 普通线程池和 Spring 中的 ThreadPoolTaskExecutor 也可以被框架管理，@Bean 定义时加 @DynamicTp 注解即可</li><li><strong>可靠性</strong>：框架提供的线程池实现 Spring 生命周期方法，可以在 Spring 容器关闭前尽可能多的处理队列中的任务</li><li><strong>高可扩展</strong>：框架核心功能都提供 SPI 接口供用户自定义个性化实现（配置中心、配置文件解析、通知告警、监控数据采集、任务包装等等）</li><li><strong>线上大规模应用</strong>：参考美团线程池实践，美团内部已经有该理论成熟的应用经验</li></ul><h2 id="v1-1-4-发版记录" tabindex="-1"><a class="header-anchor" href="#v1-1-4-发版记录" aria-hidden="true">#</a> v1.1.4 发版记录</h2><ul><li><p>支持 Spring 项目，SpringBoot 相关特性只在 starter 模块引入，@dragon-zhang</p></li><li><p>添加 jvmti 黑科技模块，方便集成管理各种三方包线程池，@dragon-zhang</p></li><li><p>升级 VariableLinkedBlockingQueue 到 jdk1.8 的 LinkedBlockingQueue 的实现，@yanhom</p></li><li><p>添加插件机制，基于此可以对框架做自定义开发扩展，@WindSearcher</p></li><li><p>细化告警配置，支持不同告警项配置不同接受人，@kyao</p></li><li><p>通知告警平台支持云之家，@chunhui_lu</p></li><li><p>支持 SpringBoot 1.x，@yanhom</p></li><li><p>第三方线程池（tomcat、undertow、dubbo、rocketmq、okhttp3 等等）支持 run_timeout、queue_timeout、reject 告警，@kyao，@yanhom <img src="'+r+'" alt=""></p></li><li><p>提供 Aware 扩展，可以扩展自定义线程池执行过程，@kyao</p></li><li><p>监控数据新增线程池别名，@zhifei</p></li></ul><h4 id="bugfix" tabindex="-1"><a class="header-anchor" href="#bugfix" aria-hidden="true">#</a> Bugfix</h4><ul><li>修复 Tomcat 高低版本兼容性报错问题，@yanhom</li><li>修复其他 agent 增强线程池后，强转 DtpRunnable 失败的问题，@yanhom</li><li>修复企微告警无@提醒的问题，@yanhom</li><li>修复企微告警配置多个接受人不能正确@的问题，@KamToHung</li><li>修复钉钉告警不能@所有人问题，@chenan</li><li>修复因 Bean 初始化顺序不确定导致的 ApplicationContextHolder npe 问题，@yanhom</li><li>修复修复拒绝策略为 CallerRunsPolicy 时，MdcRunnable 会删除主线程 mdc 信息的问题，@kyao</li></ul><h4 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h4><ul><li>优化 dtp 内部 spi 的使用，统一封装管理，@peachyy</li><li>部分代码优化重构，@yanhom，@KamToHung，@dragon-zhang，@kyao</li><li>告警信息优化，trace 信息可以自己扩展，集成内部 ELK 等平台，@yanhom</li></ul><figure><img src="'+e+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="项目地址" tabindex="-1"><a class="header-anchor" href="#项目地址" aria-hidden="true">#</a> 项目地址</h2><p><strong>官网</strong>：https://dynamictp.cn<sup>[1]</sup></p><p><strong>gitee 地址</strong>：https://gitee.com/dromara/dynamic-tp<sup>[2]</sup></p><p><strong>github 地址</strong>：https://github.com/dromara/dynamic-tp<sup>[3]</sup></p><h2 id="加入社群" tabindex="-1"><a class="header-anchor" href="#加入社群" aria-hidden="true">#</a> 加入社群</h2><p><strong>看到这儿，方便的话给项目一个 star，你的支持是我们前进的动力！</strong></p><p>使用过程中有任何问题，或者对项目有什么想法或者建议，可以加入社群，跟群友一起交流讨论。</p><p>新增分群 4，可以自行扫码加入，或者加我微信拉入其他群！</p><img src="'+o+'" height="340"><br><img src="'+p+'" height="340"><p>https://dynamictp.cn</p><p>https://gitee.com/dromara/dynamic-tp</p><p>https://github.com/dromara/dynamic-tp</p>',25),c=[l];function h(g,d){return t(),a("div",null,c)}const u=i(s,[["render",h],["__file","DynamicTp-1.1.4.html.vue"]]);export{u as default};
