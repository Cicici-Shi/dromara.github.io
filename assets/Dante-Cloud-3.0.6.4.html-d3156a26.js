import{_ as e,o,c as i,e as r}from"./app-b04a40d2.js";const n="/assets/img/news/Dante-Cloud-3.0.6.4-1.png",d="/assets/img/news/Dante-Cloud-3.0.6.4-2.png",a={},l=r('<p><strong>Dante Cloud</strong> 是一款企业级微服务架构和服务能力开发平台，是采用领域驱动模型(DDD)设计思想的、全面拥抱 Spring Authorization Server 的、基于 OAuth2.1 协议的、支持智能电视、IoT 等物联网设备认证的微服务架构。基于 Spring Authorization Server 1.1.0、Spring Boot 3.1.0、Spring Cloud 2022.0.3、Spring Cloud Tencent 1.11.7-2022.0.1、Spring Cloud Alibaba 2022.0.0.0、Nacos 2.2.2 等主流技术栈开发的多租户系统，遵循 SpringBoot 编程思想，高度模块化和可配置化。具备服务发现、配置、熔断、限流、降级、监控、多级缓存、分布式事务、工作流等功能</p><p><strong>平台定位</strong></p><ul><li>构建成熟的、完善的、全面的，基于 OAuth2.1 的、前后端分离的微服务架构解决方案。</li><li>面向企业级应用和互联网应用设计开发，既兼顾传统项目的微服务化，又满足互联网应用开发建设、快速迭代的使用需求。</li><li>平台架构使用微服务领域及周边相关的各类新兴技术或主流技术进行建设，是帮助快速跨越架构技术选型、研究探索阶段的利器。</li><li>代码简洁规范、结构合理清晰，是新技术开发应用的典型的、综合性案例，助力开发人员对新兴技术的学习和掌握。</li></ul><p><strong>发布背景</strong></p><p>自 11 月 24 日，Spring Boot 3.0 以及 Spring Cloud 2022.0.0、Spring Cloud Tencent 等全新版本发布，整个 Java 社区也步入的 Java 17 和 Spring Boot 3 的新时代。紧跟 Java 技术和 Spring 社区的发展，让更多质量更好、性能更优的新特性服务于实际的开发工作，Dante Cloud 也同步进行升级及适配，开发了全新的 3.0 版本。</p><h2 id="_1-新特性背景" tabindex="-1"><a class="header-anchor" href="#_1-新特性背景" aria-hidden="true">#</a> [1] 新特性背景</h2><p>OAuth2 <strong>Device Authorization Grant</strong> 认证模式，是在 OIDC 协议支持的模式中，专有的一类 Device Flow 设备模式，允许各类终端或硬件完成认证登录流程。</p><p><strong>Device Authorization Grant</strong> （设备授权授予）或 <strong>Device Flow</strong> 对于处理，例如：智能电视、IoT 设备或打印机等，输入受限终端或硬件的身份验证和授权非常有用。由于终端的显示模式可能受限，无法内置登录页面。通过 Device Flow 提供的超链接或者生成二维码，设备会让用户在另一台设备上的浏览器中访问一个网页，以进行登录。用户登录后，设备可以获取所需的访问令牌和刷新令牌。</p><h2 id="_2-本次更新内容" tabindex="-1"><a class="header-anchor" href="#_2-本次更新内容" aria-hidden="true">#</a> [2] 本次更新内容</h2><ul><li><p>【主要更新】</p></li><li><p>[升级] Spring Authroization Server 版本升级至 1.1.0</p></li><li><p>[升级] Spring Security 版本升级至 6.1.0</p></li><li><p>[新增] 新增支持智能电视、IOT 设备等输入受限设备的 Device Flow 认证模式</p></li><li><p>【其它更新】</p></li><li><p>[新增] 新增 Device Flow 认证系统内置页面</p></li><li><p>[新增] 新增 IOT 产品、设备管理 SDK</p></li><li><p>[重构] 重构 Spring Authorization Server 授权确认页面，与内置认证页面统一风格。</p></li><li><p>[重构] 除特殊依赖外，将所有内置页面静态资源引用改为 Webjars 方式。</p></li><li><p>[重构] 所有内置页面均改用页面嵌入 Vue 方式重新实现</p></li><li><p>[优化] 优化客户端动态自动注册相关功能代码及配置方式</p></li><li><p>[优化] 优化数据库初始化脚本，增加 Spring Authorization Server 内置默认 Scope 数据及关联数据</p></li><li><p>【依赖更新】</p></li><li><p>[升级] fastjson2 版本升级至 2.0.32</p></li><li><p>[升级] tencentcloud-sdk-java-sms 版本升级至 3.1.756</p></li><li><p>[升级] aliyun-sdk-oss 版本升级至 3.16.3</p></li></ul><p><strong>新特性界面预览</strong></p><p><img src="'+n+'" alt="" loading="lazy"><br><img src="'+d+'" alt="" loading="lazy"></p><h2 id="_3-dante-cloud-3-0-0-后端新特性" tabindex="-1"><a class="header-anchor" href="#_3-dante-cloud-3-0-0-后端新特性" aria-hidden="true">#</a> [3] Dante Cloud 3.0.0 后端新特性</h2><h3 id="_1-核心基础依赖便捷切换" tabindex="-1"><a class="header-anchor" href="#_1-核心基础依赖便捷切换" aria-hidden="true">#</a> 1. 核心基础依赖便捷切换</h3><ul><li>新增 <code>Spring Cloud Tencent</code> 和 <code>Spring Cloud</code> 原生微服务全家桶等两种基础设施支持。</li><li>新增 <code>Spring Cloud Alibaba</code>、<code>Spring Cloud Tencent</code> 和 <code>Spring Cloud</code> 原生微服务全家桶三种基础设值切换能力，可以以相对便捷的方式切换使用 Alibaba、Tencent、Spring 等基础设施环境。可根据自身实际需求选择，不再局限于只能在某一种基础设施环境中运行。</li></ul><h3 id="_2-支持-graalvm-原生镜像" tabindex="-1"><a class="header-anchor" href="#_2-支持-graalvm-原生镜像" aria-hidden="true">#</a> 2. 支持 <code>GraalVM</code> 原生镜像</h3><ul><li>整体调整各类模块 pom build 配置，适当增加冗余重复配置，以支持 <code>Spring Native</code> 或 <code>GraalVM</code> 编译需要。规避对所有模块进行 Native 编译，而导致错误问题。</li></ul><h3 id="_3-spring-authorization-server-全特性支持及扩展" tabindex="-1"><a class="header-anchor" href="#_3-spring-authorization-server-全特性支持及扩展" aria-hidden="true">#</a> 3. <code>Spring Authorization Server</code> 全特性支持及扩展</h3><ul><li>基于 <code>Spring Authorization Server</code> 和 <code>Spring Data JPA</code> 实现多租户系统架构， 支持 Database 和 Schema 两种模式。</li><li>基于 <code>Spring Data JPA</code>，重新构建 <code>Spring Authorization Server</code> 基础数据存储代码，替代原有 JDBC 数据访问方式，破除 <code>Spring Authorization Server</code> 原有数据存储局限，扩展为更符合实际应用的方式和设计。</li><li>基于 <code>Spring Authorization Server</code>，在 OAuth 2.1 规范基础之上，增加自定义 <code>Resource Ownership Password</code> (密码) 认证模式，以兼容现有基于 OAuth 2 规范的、前后端分离的应用，支持 <code>Refresh Token</code> 的使用。</li><li>基于 <code>Spring Authorization Server</code>，在 OAuth 2.1 规范基础之上，增加自定义 <code>Social Credentials</code> (社会化登录) 认证模式，支持手机短信验证码、微信小程序、基于 <code>JustAuth</code> 的第三方应用登录， 支持 <code>Refresh Token</code> 的使用。</li><li>扩展 <code>Spring Authorization Server</code> 默认的 <code>Client Credentials</code> 模式，实现真正的使用 Scope 权限对接口进行验证。增加客户端 Scope 的权限配置功能，并与已有的用户权限体系解耦</li><li>支持 <code>Spring Authorization Server</code> <code>Authorization Code PKCE</code> 认证模式</li><li>在 <code>Spring Authorization Server</code> 的标准的 <code>JWT Token</code> 加密校验方式外，支持基于自定义证书的 <code>JWT Token</code> 加密校验方式，可通过配置动态修改。</li><li>支持 <code>Opaque Token</code> (不透明令牌) 格式及校验方式，将低 <code>JWT Token</code> 被捕获解析的风险。可通过修改配置参数，设置默认 Token 格式是采用 <code>Opaque Token</code> 格式还是 <code>JWT Token</code> 格式。</li><li>全面支持 <code>OpenID Connect</code> (OIDC) 协议，系统使用时可根据使用需求，通过前端开关配置，快速切换 OIDC 模式和传统 OAuth2 模式</li><li>深度扩展 <code>Authorization Code</code>、<code>Resource Ownership Password</code>、<code>Social Credentials</code> 几种模式，全面融合 <code>IdToken</code>、<code>Opaque Token</code>、<code>JWT Token</code> 与现有权限体系，同时提供 <code>IdToken</code> 和 自定义 Token 扩展两种无须二次请求的用户信息传递方式，减少用户信息的频繁请求。</li><li>自定义 <code>Spring Authorization Server</code> 授权码模式登录认证页面和授权确认页面，授权码模式登录采用数据加密传输。支持多种验证码类型，暂不支持行为验证码。</li><li>无须在代码中配置 <code>Spring Security</code> 权限注解以及权限方法，即可实现接口鉴权以及权限的动态修改。采用分布式鉴权方案，规避 Gateway 统一鉴权的压力以及重复鉴权问题</li><li>OAuth2 UserDetails 核心数据支持直连数据库获取和 Feign 远程调用两种模式。OAuth2 直连数据库模式性能更优，Feign 访问远程调用可扩展性更强。可通过配置动态修改采用策略方式。</li><li>基于自定义 Session，混合国密 <code>SM2</code> (非对称) 和 <code>SM4</code> (对称加密) 算法，实现基于数字信封技术的秘钥动态生成加密传输。利用 “一人一码机制”，实现密码模式登录数据进行动态加密传输。配合 OAuth2 Client 验证，保护接口调用和前后端数据传输的合理性及安全性。</li></ul><h2 id="_4-dante-cloud-3-0-0-前端新特性" tabindex="-1"><a class="header-anchor" href="#_4-dante-cloud-3-0-0-前端新特性" aria-hidden="true">#</a> [4] Dante Cloud 3.0.0 前端新特性</h2><h3 id="采用-pnpm-monorepo-重构前端" tabindex="-1"><a class="header-anchor" href="#采用-pnpm-monorepo-重构前端" aria-hidden="true">#</a> 采用 <code>pnpm monorepo</code> 重构前端</h3><ul><li>前端工程包管理器变更为 pnpm。</li><li>采用 <code>monorepo</code> 模式对前端工程进行重构，抽取 utils、components、apis、bpmn-designer 等相关代码，形成共享模块</li><li>共享模块已进行优化配置，利用 Vite 可编译成独立的组件，单独以组件形式进行发布</li><li>代码以共享模块的方式进行单独维护开发，降低现有工程代码复杂度，便于后续功能的扩展和代码的复用。</li></ul>',22),c=[l];function t(p,s){return o(),i("div",null,c)}const h=e(a,[["render",t],["__file","Dante-Cloud-3.0.6.4.html.vue"]]);export{h as default};
