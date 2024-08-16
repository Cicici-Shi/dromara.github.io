import{_ as a,o as t,c as i,f as r}from"./app-b852c2ab.js";const e="/assets/img/news/DynamicTp-1.1.5-1.png",n="/assets/img/news/DynamicTp-1.1.5-2.png",o={},s=r('<h2 id="dynamictp-简介" tabindex="-1"><a class="header-anchor" href="#dynamictp-简介" aria-hidden="true">#</a> DynamicTp 简介</h2><p>DynamicTp 是一个基于配置中心实现的轻量级动态线程池监控管理工具，主要功能可以总结为动态调参、通知报警、运行监控、三方包线程池管理等几大类。</p><h2 id="dynamictp-特性" tabindex="-1"><a class="header-anchor" href="#dynamictp-特性" aria-hidden="true">#</a> DynamicTp 特性</h2><ul><li><strong>代码零侵入</strong>：我们改变了线程池以往的使用姿势，所有配置均放在配置中心，服务启动时会从配置中心拉取配置生成线程池对象放到 Spring 容器中，使用时直接从 Spring 容器中获取，对业务代码零侵入</li><li><strong>通知告警</strong>：提供多种报警维度（配置变更通知、活性报警、容量阈值报警、拒绝触发报警、任务执行或等待超时报警），已支持企业微信、钉钉、飞书、邮件报警，同时提供 SPI 接口可自定义扩展实现</li><li><strong>运行监控</strong>：定时采集线程池指标数据，支持通过 MicroMeter、JsonLog 日志输出、Endpoint 三种方式，可通过 SPI 接口自定义扩展实现</li><li><strong>任务增强</strong>：提供任务包装功能，实现 TaskWrapper 接口即可，如 MdcTaskWrapper、TtlTaskWrapper、SwTraceTaskWrapper，可以支持线程池上下文信息传递</li><li><strong>多配置中心支持</strong>：基于主流配置中心实现线程池参数动态调整，实时生效，已支持 Nacos、Apollo、Zookeeper、Consul、Etcd、Polaris、ServiceComb，同时也提供 SPI 接口可自定义扩展实现</li><li><strong>中间件线程池管理</strong>：集成管理常用第三方组件的线程池，已集成 Tomcat、Jetty、Undertow、Dubbo、RocketMq、Hystrix、Grpc、Motan、Okhttp3、Brpc、Tars、SofaRpc、RabbitMq 等组件的线程池管理（调参、监控报警）</li><li><strong>轻量简单</strong>：基于 SpringBoot 实现，引入 starter，接入只需简单 4 步就可完成，顺利 3 分钟搞定</li><li><strong>多模式</strong>：提供了增强线程池 DtpExecutor，IO 密集型场景使用的线程池 EagerDtpExecutor，调度线程池 ScheduledDtpExecutor，有序线程池 OrderedDtpExecutor，可以根据业务场景选择合适的线程池</li><li><strong>兼容性</strong>：JUC 普通线程池和 Spring 中的 ThreadPoolTaskExecutor 也可以被框架管理，@Bean 定义时加 @DynamicTp 注解即可</li><li><strong>可靠性</strong>：框架提供的线程池实现 Spring 生命周期方法，可以在 Spring 容器关闭前尽可能多的处理队列中的任务</li><li><strong>高可扩展</strong>：框架核心功能都提供 SPI 接口供用户自定义个性化实现（配置中心、配置文件解析、通知告警、监控数据采集、任务包装等等）</li><li><strong>线上大规模应用</strong>：参考美团线程池实践，美团内部已经有该理论成熟的应用经验</li></ul><h2 id="v1-1-5-发版记录" tabindex="-1"><a class="header-anchor" href="#v1-1-5-发版记录" aria-hidden="true">#</a> v1.1.5 发版记录</h2><h4 id="feature" tabindex="-1"><a class="header-anchor" href="#feature" aria-hidden="true">#</a> Feature</h4><ul><li>监控模块新增 TPS、TP99、TP95、TP50 等监控指标，@kyao，@yanhom</li></ul><figure><img src="'+e+'" alt="" tabindex="0"><figcaption></figcaption></figure><ul><li>Grafana 监控面板升级，支持更丰富指标查看，@yanhom</li><li>告警信息里添加系统负载，cpu 使用率，cpu 核数等指标，@yanhom</li></ul><figure><img src="'+n+'" alt="" tabindex="0"><figcaption></figcaption></figure><h4 id="bugfix" tabindex="-1"><a class="header-anchor" href="#bugfix" aria-hidden="true">#</a> Bugfix</h4><ul><li>修复 jetty 线程池代理后一直触发任务超时告警的问题，@kyao</li><li>修复 DtpPostProcessor 增强普通线程池后没返回代理，shutdown 原线程池的问题，@yanhom</li><li>修复代理三方线程池时直接继承 juc 线程池，没兼容框架内自定义线程池的场景，如 dubbo、motan 的 eager 模式，@yanhom</li></ul><h4 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h4><ul><li>各三方中间件线程池被代理后，原线程池优雅关闭，@yanhom</li><li>设置 hutool http 工具包的超时时间，@chenkangning</li><li>调整告警项的默认阈值，@yanhom</li><li>部分代码优化重构，@yanhom</li></ul><h2 id="加入社群" tabindex="-1"><a class="header-anchor" href="#加入社群" aria-hidden="true">#</a> 加入社群</h2><p><strong>看到这儿，方便的话给项目一个 star，你的支持是我们前进的动力！</strong></p><p>使用过程中有任何问题，或者对项目有什么想法或者建议，可以加入社群，跟 1000+群友一起交流讨论。</p><h2 id="项目地址" tabindex="-1"><a class="header-anchor" href="#项目地址" aria-hidden="true">#</a> 项目地址</h2><p><strong>官网</strong>：https://dynamictp.cn[1]</p><p><strong>gitee 地址</strong>：https://gitee.com/dromara/dynamic-tp[2]</p><p><strong>github 地址</strong>：https://github.com/dromara/dynamic-tp[3]</p><h3 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h3><p>[1]</p><p>https://dynamictp.cn: <em>https://dynamictp.cn</em></p><p>[2]</p><p>https://gitee.com/dromara/dynamic-tp: <em>https://gitee.com/dromara/dynamic-tp</em></p><p>[3]</p><p>https://github.com/dromara/dynamic-tp: <em>https://github.com/dromara/dynamic-tp</em></p>',28),p=[s];function c(h,d){return t(),i("div",null,p)}const g=a(o,[["render",c],["__file","DynamicTp-1.1.5.html.vue"]]);export{g as default};