import{_ as i,r as c,o as n,c as s,a as e,b as o,d,e as l}from"./app-b04a40d2.js";const p="/assets/img/news/Sa-Token-1.35.0.png",a={},r=l('<h2 id="sa-token-v1-35-0-更新-新增动态-active-timeout-能力" tabindex="-1"><a class="header-anchor" href="#sa-token-v1-35-0-更新-新增动态-active-timeout-能力" aria-hidden="true">#</a> Sa-Token v1.35.0 更新，新增动态 active-timeout 能力</h2><p>Sa-Token 是一个轻量级 Java 权限认证框架，主要解决：登录认证、权限认证、分布式 Session 会话、单点登录、OAuth2.0 等一系列权限相关问题。</p><p>框架针对踢人下线、自动续签、前后台分离、分布式会话…… 等常见业务进行 N 多适配，通过 Sa-Token，你可以以一种极简的方式实现系统的权限认证部分</p><p>Sa-Token v1.35.0.RC   版本更新包括以下内容：</p><ul><li><p>sa-token-core：</p></li><li><p>优化：前端未提供 token 时，<code>getTokenSession()</code> 将抛出未登录异常，而不是返回 null。<strong>[不向下兼容]</strong></p></li><li><p>新增：SaSession 新增字段：<code>type</code>、<code>loginType</code>、<code>loginId</code>、<code>token</code>。</p></li><li><p>重构：全局过滤器抽离 SaFilter 统一接口。</p></li><li><p>重构：全局过滤器 <code>includeList</code>、<code>excludeList</code> 改为 public，同时移除对应的 getter 方法。<strong>[不向下兼容]</strong></p></li><li><p>重构：将全局过滤器的 BeforeAuth 认证设为不受 <code>includeList</code> 与 <code>excludeList</code> 的限制，所有请求都会进入。<strong>[不向下兼容]</strong></p></li><li><p>新增：新增循环生成 token 的算法，用于确保 Token 的唯一性。<strong>[重要]</strong></p></li><li><p>重构：API 接口签名所有方法均迁移至 core 核心模块。<strong>[重要]</strong></p></li><li><p>新增：新增彩色日志打印，更方便的分辨不同日志等级。<strong>[重要]</strong></p></li><li><p>重构：重构概念：临时有效期 -&gt; token 最低活跃频率，过期后 token 冻结。</p></li><li><p>重构：重构概念：<code>User-Session</code> -&gt; <code>Account-Session</code>。</p></li><li><p>新增：新增 <code>getTokenTimeout(String token)</code> 方法，获取任意 token 剩余有效期。</p></li><li><p>优化：在登录时增加判断当前 StpLogic 是否支持 extra 扩展参数模式，如果不支持则打印警告信息。</p></li><li><p>新增：NotLoginException 增加新场景值 -6、-7，提供更精确的未登录异常描述信息。</p></li><li><p>新增：TokenSign 新增 tag 挂载参数，可在登录时方便的存储一些客户端特有数据。 <strong>[重要]</strong></p></li><li><p>新增：新增 <code>SaStrategy#createStpLogic</code>，用于指定动态创建 StpLogic 时的算法策略。</p></li><li><p>新增：新增 <code>@SaCheckOr</code> 批量注解鉴权：只要满足其中一个注解即可通过验证。 <strong>[重要]</strong></p></li><li><p>重构：重命名：<code>SaStrategy.me</code> -&gt; <code>SaStrategy.instance</code>。</p></li><li><p>重构：在登录时强制性检查账号 id 是否为异常值，如果是则登录失败。</p></li><li><p>重构：重构概念：<code>activity-timeout</code> -&gt; <code>active-timeout</code>。 <strong>[重要]</strong></p></li><li><p>新增：新增动态 <code>active-timeout</code> 能力，可在每次登录时指定 <code>active-timeout</code> 值。 <strong>[重要]</strong></p></li><li><p>优化：将 <code>SaStrategy</code> 所有策略声明抽离为单独的函数式接口。</p></li><li><p>新增：增加为 StpLogic 单独配置 <code>SaTokenConfig</code> 参数的能力。</p></li><li><p>sa-token-sso：</p></li><li><p>修复：在 SSO 模式三中 <code>ticket</code> 校验地址配错时，会出现 NPE 的问题</p></li><li><p>新增：新增 <code>getData</code> 接口配置，在模式三拉取数据时可以传递任意参数。<strong>[重要]</strong></p></li><li><p>重构：模式三秘钥配置更改：<code>sa-token.sso.secretkey=xxx</code> -&gt; <code>sa-token.sign.secret-key=xxx</code>。<strong>[不向下兼容]</strong></p></li><li><p>重构：模式三校验签名方法更改：<code>SaSsoUtil.checkSign(req)</code> -&gt; <code>SaSignUtil.checkRequest(req)</code>。<strong>[不向下兼容]</strong></p></li><li><p>新增：新增 <code>sa-token.sso.mode</code> 配置项，用于约定此系统使用的 SSO 模式。</p></li><li><p>优化：优化校验 ticket 的逻辑。</p></li><li><p>sa-token-jwt：</p></li><li><p>修复：jwt 令牌的签名类型可以被篡改的问题。<strong>[重要]</strong></p></li><li><p>其它：</p></li><li><p>优化：所有模块优化注释，更方便开发者阅读源码。</p></li><li><p>优化：在所有 .java 文件中添加 license 头说明。</p></li><li><p>优化：修复大部分代码警告。</p></li><li><p>新增：新增 thymeleaf 标签方言命名空间，增强 ide 代码提示。<strong>[重要]</strong></p></li><li><p>新增：定义 <code>sa-token-bom</code> 包，方便引入 sa-token 时对齐版本。</p></li><li><p>新增：sa-token-dubbo3 插件新增代码示例。</p></li><li><p>新增：新增跨域文章和示例：Header 参数版和第三方 Cookie 版。<strong>[重要]</strong></p></li><li><p>修复：修复 <code>sa-token-alone-redis</code> 在低版本 springboot 下无法启动成功(缺少 <code>username</code> 属性)的问题。</p></li><li><p>新增插件：</p></li><li><p>新增：新增 <code>sa-token-context-dubbo3</code> 插件。感谢 <code>@qiudaozhang</code> 提交的 pr。<strong>[重要]</strong></p></li><li><p>文档：</p></li><li><p>新增：部分常见报错排查。</p></li><li><p>新增：首页图片增加懒加载效果，节省流量。</p></li><li><p>新增：增加 Cookie 配置示例。</p></li><li><p>修复：整理 demo 结构目录结构，修复不正确的路径说明。</p></li><li><p>新增：新增 api-sign 模块文档。 <strong>[重要]</strong></p></li><li><p>简化包名  <strong>[重要]</strong>  <strong>[不向下兼容]</strong></p></li><li><p><code>sa-token-dao-redis</code> -&gt; <code>sa-token-redis</code></p></li><li><p><code>sa-token-dao-redis-jackson</code> -&gt; <code>sa-token-redis-jackson</code>。</p></li><li><p><code>sa-token-dao-redis-fastjson</code> -&gt; <code>sa-token-redis-fastjson</code>。</p></li><li><p><code>sa-token-dao-redis-fastjson2</code> -&gt; <code>sa-token-redis-fastjson2</code>。</p></li><li><p><code>sa-token-dao-redisson-jackson</code> -&gt; <code>sa-token-redis-jackson</code>。</p></li><li><p><code>sa-token-dao-redisx</code> -&gt; <code>sa-token-redisx</code>。</p></li><li><p><code>sa-token-context-dubbo</code> -&gt; <code>sa-token-dubbo</code>。</p></li><li><p><code>sa-token-context-dubbo3</code> -&gt; <code>sa-token-dubbo3</code>。</p></li><li><p><code>sa-token-context-grpc</code> -&gt; <code>sa-token-grpc</code>。</p></li></ul><p>cn.dev33sa-token-spring-boot-starter1.35.0.RC</p>',6),g={id:"代码仓库-https-gitee-com-dromara-sa-token",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#代码仓库-https-gitee-com-dromara-sa-token","aria-hidden":"true"},"#",-1),S={href:"https://gitee.com/dromara/sa-token",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"框架功能结构图",-1),m=e("figure",null,[e("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function h(_,x){const t=c("ExternalLinkIcon");return n(),s("div",null,[r,e("h4",g,[k,o(" 代码仓库："),e("a",S,[o("https://gitee.com/dromara/sa-token"),d(t)])]),u,m])}const f=i(a,[["render",h],["__file","Sa-Token-1.35.0.html.vue"]]);export{f as default};
