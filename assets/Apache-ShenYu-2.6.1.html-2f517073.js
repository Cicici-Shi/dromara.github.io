import{_ as p,o as h,c as e,f as t}from"./app-e38f0e67.js";const u="/assets/img/news/Apache-ShenYu-2.6.1-0.png",a="/assets/img/news/Apache-ShenYu-2.6.1-1.png",s="/assets/img/news/Apache-ShenYu-2.6.1-2.png",c="/assets/img/news/Apache-ShenYu-2.6.1-3.png",n={},l=t('<h2 id="关于-apache-shenyu" tabindex="-1"><a class="header-anchor" href="#关于-apache-shenyu" aria-hidden="true">#</a> 关于 Apache ShenYu</h2><p>官网: https://shenyu.apache.org</p><p>GitHub: https://github.com/apache/shenyu</p><h2 id="版本预览" tabindex="-1"><a class="header-anchor" href="#版本预览" aria-hidden="true">#</a> 版本预览</h2><p>版本记录：https://github.com/apache/shenyu/compare/v2.6.0...v2.6.1</p><h3 id="新特性" tabindex="-1"><a class="header-anchor" href="#新特性" aria-hidden="true">#</a> 新特性</h3><p>1.为 shenyu ingress controller 添加 Dubbo 注解元数据</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5000</p><p>具体文档请查看：</p><p>https://shenyu.apache.org/zh/docs/user-guide/kubernetes-controller/config</p><p>2.支持插件生命周期</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5031</p><p>3.添加 shenyu-sdk-openfeign 模块</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5041</p><p>4.添加 Motan 和 Spring Cloud 添加 ingress controller 支持</p><p>5.shenyu 支持告警功能</p><figure><img src="'+u+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4782</p><p>具体文档请查看：</p><p>https://shenyu.apache.org/zh/docs/next/developer/notice-alert</p><p>6.shenyu client 添加 discovery 的注册中心</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5153</p><p>7.添加 shenyu context-path Ingress controller</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5167</p><p>8.添加 shenyu grpc Ingress controller</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5240</p><p>9.添加 shenyu sofa Ingress controller</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5253</p><p>10.添加 nacos, etcd, eureka 作为 shenyu discovery 服务注册中心</p><figure><img src="'+a+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5193</p><p>11.添加新的插件：basic-plugin</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5258</p><p>12.添加新插件以及集成测试：shenyu-rabbitmq-logging plugin</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5283</p><p>https://github.com/apache/shenyu/pull/5312</p><p>13.通过 shenyu-discovery 绑定 selector</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5261</p><h3 id="api-变化" tabindex="-1"><a class="header-anchor" href="#api-变化" aria-hidden="true">#</a> API 变化</h3><p>1.重构 shenyu 数据同步的数据结构</p><figure><img src="'+c+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>2.使用 netty 作为默认的 httpclient</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5200</p><p>3.重构 shenyu-admin-listener 来支持 shenyu admin 数据同步</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5294</p><p>https://github.com/apache/shenyu/pull/5347</p><p>4.删除 shenyu 对 brpc 的支持，包括 brpc 插件，brpc 示例，brpc 集成测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5305</p><p>https://github.com/apache/shenyu/pull/5358</p><p>5.移除 Apollo 的依赖以便支持 Java 17(自行添加依赖)</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5308</p><p>具体文档请查看：</p><p>https://shenyu.apache.org/docs/next/user-guide/property-config/use-data-sync/#apollo-synchronization-config</p><p>6.删除 shenyu 的中间件 register center</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5352</p><h3 id="增强" tabindex="-1"><a class="header-anchor" href="#增强" aria-hidden="true">#</a> 增强</h3><p>1.添加 shenyu model event 的单元测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4965</p><p>2.添加 shenyu admin 测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4971</p><p>https://github.com/apache/shenyu/pull/5231</p><p>https://github.com/apache/shenyu/pull/5263</p><p>3.添加 motan 的端到端测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4957</p><p>4.支持 motan 插件选择协议</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5003</p><p>5.添加 Grpc 的端到端测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4966</p><p>6.升级 apache-rat-plugin 版本到 0.15</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5029</p><p>7.在匹配时地址 isBlank 条件匹配</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4983</p><p>8.Clickhouse 支持 ttl 字段</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5032</p><p>9.支持 HttpUtils 的日志级别判断</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4976</p><p>10.为 Ingress Reconciler 添加单元测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5051</p><p>https://github.com/apache/shenyu/pull/5169</p><p>11.当软件包分发时自动 checksum</p><p>具体 pr‘请查看：</p><p>https://github.com/apache/shenyu/pull/5049</p><p>12.在 tcp 插件中实现零拷贝</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5066</p><p>13.shenyu-client-springmvc 支持默认的 appname 和 context-path</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5050</p><p>14.添加 sdk-feign 的示例和集成测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5099</p><p>15.es log 插件支持用户自定义的索引</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5102</p><p>16.增强 grpc 插件支持 shenyu-loadbalancer 负载均衡算法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5115</p><p>17.支持 http2 协议的下游服务</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5125</p><p>18.重构增强 dubbo 插件支持 shenyu-loadbalancer 负载均衡算法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5131</p><p>19.添加 ingress controller 的 springcloud 集成测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5139</p><p>20.添加 WebSocket 插件代理 ping 的功能</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5144</p><p>21.添加 ingress controller 的 websocket 集成测试</p><p>22.Rewrite 插件支持按照百分比重写</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5119</p><p>23.Admin 使用 discovery config 初始化 discovery server</p><p>具体请查看：</p><p>https://github.com/apache/shenyu/pull/5174</p><p>24.Divide 插件适配 shenyu discovery</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5185</p><p>25.Alert 支持多个 admin 的集群</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5197</p><p>26.WebSocket 插件适配 shenyu discovery</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5202</p><p>27.注册服务实例到 shenyu discovery</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5170</p><p>28.ShenYu Admin 适配 shenyu-discovery 的 local 模式</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5176</p><p>29.添加 shenyu sdk core 的测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5267</p><p>https://github.com/apache/shenyu/pull/5270</p><p>30.添加 shenyu-discovery 的测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5285</p><p>https://github.com/apache/shenyu/pull/5289</p><p>https://github.com/apache/shenyu/pull/5291</p><p>https://github.com/apache/shenyu/pull/5297</p><p>https://github.com/apache/shenyu/pull/5310</p><p>31.添加 opengauss 的 e2e 测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5309</p><p>32.添加上传插件包大小的限制</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5316</p><p>33.添加 shenyu-client-websocket 的测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5322</p><p>34.升级 shiro 到安全版本(1.18.0)</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5334</p><p>35.升级 SpringBoot 版本到 2.7.17，更新 license</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5356</p><p>36.添加网关异常时发送通知到 shenyu-alert</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5382</p><p>37.添加 EurekaDiscoveryService 单元测试</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5390</p><h3 id="重构" tabindex="-1"><a class="header-anchor" href="#重构" aria-hidden="true">#</a> 重构</h3><p>1.重构整理 2.6.1 版本(pom.xml)</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4995</p><p>2.使用 computeIfAbsent 重构 Map 的操作</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4997</p><p>3.重构 polaris 测试用例</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4986</p><p>4.迁移 Maven Wrapper 到官方镜像</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5011</p><p>5.在 WebClientMessageWriter 中编译过的 Pattern</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5026</p><p>6.重构 HttpUtils 的请求方法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5027</p><p>7.升级 github action 版本并重构 ci</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4992</p><p>https://github.com/apache/shenyu/pull/5039</p><p>https://github.com/apache/shenyu/pull/5081</p><p>8.重构数据同步的抽象模板方法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5001</p><p>9.重构 MenuProject, MenuModule, MenuDocItem 为 VO 对象</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5062</p><p>10.统一 dubbo 版本</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5083</p><p>11.重构 HttpClient 的目录</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5107</p><p>12.重构 github action ci 缓存</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5096</p><p>13.重构 motan 插件支持 pojo 对象作为方法参数</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5112</p><p>14.升级 kafka-client 版本到 3.4.0</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5122</p><p>15.迁移 admin swagger springfox 到 springdoc</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5113</p><p>16.升级 dubbo 版本到 3.2.5 并重构过期方法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5120</p><p>17.重构 AbstractShenyuSdkClient getOrDefault 方法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5173</p><p>18.重构 HttpClient 的参数</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5151</p><p>19.重构 webclient 插件的实现</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5196</p><p>20.升级 guava 版本到 32.0.0-jre</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5137</p><p>21.支持 k8s 作为 e2e 的测试环境</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5217</p><p>https://github.com/apache/shenyu/pull/5298</p><p>22.使用@Restapi 作为 rest api 的请求路径映射</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5222</p><p>23.使用 StringBuilder 作为字符串连接器</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5074</p><p>24.设置 netty allocator 参数为 unpooled</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5244</p><p>25.重构启动的 banner</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5329</p><p>https://github.com/apache/shenyu/pull/5339</p><p>26.删除重复的代码并且将部分代码作为公用</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5336</p><p>27.重构 null 的判断方法</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5345</p><p>28.重构日志插件的选择器处理器</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5357</p><p>https://github.com/apache/shenyu/pull/5367</p><p>29.重构自定义插件类加载器</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5368</p><p>30.重构日志插件支持插件级别的采样比率</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5385</p><p>31.重构 Context-path 避免重复注册(使用 selector for update)</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5387</p><p>https://github.com/apache/shenyu/pull/5386</p><h3 id="问题修复" tabindex="-1"><a class="header-anchor" href="#问题修复" aria-hidden="true">#</a> 问题修复</h3><p>1.避免创建 TimeoutException 的永久开销</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4973</p><p>2.修复示例模块的主类路径</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/497</p><p>3.修复插件排序问题</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4999</p><p>4.修复 Makefile Snapshot 版本问题</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4996</p><p>5.修复 RELEASE-NOTES.md 的拼写错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4991</p><p>6.修复示例中的错误包名</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5007</p><p>7.修复密码验证规则，并且添加#和.的支持</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4977</p><p>8.修复 e2e 中 zookeeper:3.8.0 的健康检查</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5008</p><p>9.修复不稳定的 ci 检验</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5017</p><p>10.添加 e2e WaitForHelper 异常日志</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5023</p><p>11.修复 springcloud 在某些注册中心中间件不能获取 scheme</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5014</p><p>12.修复 javadoc 编译错误</p><p>13.修复 HttpUtils 中错误的请求类型</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4975</p><p>14.修复更新 auth 时未更新用户 id</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/4982</p><p>15.修复 TCP 插件的 eventloop 线程泄漏</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5048</p><p>16.格式化 shenyu-integrated-test 中的 quickstart</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5065</p><p>17.修复 SQL 脚本错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5086</p><p>https://github.com/apache/shenyu/pull/5037</p><p>https://github.com/apache/shenyu/pull/5184</p><p>https://github.com/apache/shenyu/pull/5234</p><p>https://github.com/apache/shenyu/pull/5368</p><p>18.修复 uri 插件 path 错误，并且使用 rawpath 替代 path</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5121</p><p>https://github.com/apache/shenyu/pull/5128</p><p>19.修复 websocket 插件对 rewrite 插件的支持</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5130</p><p>20.修复 ElasticSearchLog Plugin 索引名称无效</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5158</p><p>21.修复 context-path 插件的错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5159</p><p>22.修复 shenyu-admin 的 cpu 占用过高问题</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5168</p><p>https://github.com/apache/shenyu/pull/5164</p><p>23.修复 alert 中 LocalDateTime 的格式化问题</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5180</p><p>24.修复 shenyu-client 的 apiDoc 的错误重试问题</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5171</p><p>25.修复 applicationContextAware 初始化顺序过晚</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5195</p><p>26.修复重复的 response header</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5190</p><p>27.设置 k8s 的最大等待时间</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5220</p><p>28.修改 clickhouse 日志插件的 status 字段类型</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5230</p><p>29.修复 response write plugin 可能造成的内存泄漏</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5228</p><p>30.修复 dataType 字段选择错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5237</p><p>31.修复 http 数据同步错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5239</p><p>32.修复单词拼写错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5251</p><p>33.修复 shenyu dubbo 代理插件的注册状态</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5243</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5266</p><p>35.修复 shenyu-registry 的 eureka 注册错误逻辑</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5269</p><p>36.修复 AbstractLogPluginDataHandler hashcode 错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5280</p><p>37.修复 ratelimit 插件在集群模式下的 key 错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5286</p><p>38.修复同一个应用多个 shenyu-client 重复注册 context-path 的错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5320</p><p>39.修复在插件关闭后不会重新加载插件</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5338</p><p>40.修复 shenyu admin 上传插件的错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5342</p><p>41.修复 shenyu 不能加载 resource 目录下的资源</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5372</p><p>42.修复 Admin 来展示字典值</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5375</p><p>43.修复 Authorization 在 sign 插件中的冲突</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5381</p><p>44.修复签名插件的 context-path 路径匹配错误</p><p>具体 pr 请查看：</p><p>https://github.com/apache/shenyu/pull/5379</p><h2 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者" aria-hidden="true">#</a> 贡献者</h2><p>TeslaCN,GOODBOY008,moremind,devinsong77,runqi-zhao,JooKS-me,kerwin612,li-keguo,yeshadoo,yu199195,DamonXue,liusishan,HaiqiQin,coderDylan,dragon-zhang,haolinkong,mxyyyy,misaya295,kerwin612,ywj1352,dengliming,impactCn,yunlongn,tanpenggood,xcsnx,xuziyang,ShawnJim,cubxxw,tomsun28,wenlongbrother,VampireAchao,wenpanwenpan,Ceilzcx,847850277,realize096,crudboy,tian-pengfei,0xmkzt,whenelse,lahmXu,wang3820,jbampton,eurecalulu,yudayday,YxYL6125,CytFree,GNK48-Ava,lianjunwei,MRgenial,geek-ken,ttfont</p><h2 id="成为贡献者" tabindex="-1"><a class="header-anchor" href="#成为贡献者" aria-hidden="true">#</a> 成为贡献者</h2><p>我们欢迎每一位贡献者的加入 ShenYu，欢迎贡献者以 Apache Way 的精神参与 ShenYu！</p><p>贡献者指南请参考：</p><p>https://shenyu.apache.org/zh/community/contributor-guide</p>',433),i=[l];function o(r,g){return h(),e("div",null,i)}const m=p(n,[["render",o],["__file","Apache-ShenYu-2.6.1.html.vue"]]);export{m as default};
