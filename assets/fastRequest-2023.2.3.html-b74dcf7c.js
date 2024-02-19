import{_ as e,o as t,c as s,f as n}from"./app-00969e95.js";const i="/assets/img/news/fastRequest-2023.2.3-0.png",a="/assets/img/news/fastRequest-2023.2.3-1.png",r="/assets/img/news/fastRequest-2023.2.3-2.png",o="/assets/img/news/fastRequest-2023.2.3-3.png",g="/assets/img/news/fastRequest-2023.2.3-4.png",p="/assets/img/news/fastRequest-2023.2.3-5.png",d="/assets/img/news/fastRequest-2023.2.3-6.png",c="/assets/img/news/fastRequest-2023.2.3-7.png",f="/assets/img/news/fastRequest-2023.2.3-8.png",l={},u=n('<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><p><strong>Restful Fast Request</strong> 是一个类似于 Postman 的 IDEA 插件。它是一个强大的 restful api 工具包插件，可以根据已有的方法帮助您快速、自动生成 url 和 params。Restful Fast Request = API 调试工具 + API 管理工具 + API 搜索工具。它有一个漂亮的界面来完成请求、检查服务器响应、存储你的 api 请求和导出 api 请求。插件帮助你在 IDEA 界面内更快更高效得调试你的 API。</p><p><strong>最新域名</strong>：<strong>api-buddy.cn</strong></p><p><strong>Restful Fast Request 为简化 API 调试而生，3 秒调完 Spring 接口不是梦</strong>，所以少年，赶紧<strong>上号</strong>吧</p><p><strong>倾听用户的声音，不断提升自我</strong>，本次<strong>Restful Fast Request</strong>更新主要内容如下：</p><p><strong>重要功能、新功能、优化项、修复项</strong></p><ul><li><strong>feat:API 同步至 Postman</strong></li><li><strong>feat:自动域名切换项目名下拉框自动切换</strong></li><li><strong>feat:Markdown 文档模板配置</strong></li><li><strong>feat:JSON5 支持</strong></li><li><strong>perf:Environment 重构</strong></li><li><strong>perf:项目域名添加优化</strong></li><li><strong>perf:api 文档同步触发在 api 保存的时候</strong></li><li><strong>perf:忽略字段使用 @fastRequestParseIgnore</strong></li><li><strong>fix:SearchEveryWhere 兼容 idea2023.3</strong></li><li><strong>fix:body 中传非 json 报错</strong></li><li><strong>fix:历史请求显示错误</strong></li></ul><h2 id="_1-api-同步至-postman" tabindex="-1"><a class="header-anchor" href="#_1-api-同步至-postman" aria-hidden="true">#</a> 1. API 同步至 Postman</h2><p>仅需配置 Postman 的 token 和对应 workspace 的 ID，再点击保存或同步按钮。即可将 API 上传到 Postman.无需额外操作。</p><p>同时支持了 Environment 变量的上传和域名的变量上传。</p><figure><img src="'+i+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+a+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="_2-markdown-文档模板配置" tabindex="-1"><a class="header-anchor" href="#_2-markdown-文档模板配置" aria-hidden="true">#</a> 2. <strong>Markdown 文档模板配置</strong></h2><p>利用 Velocity 和 Markdown 技术，实现导出文档和 **Api 在线文档 **自定义格式实现，满足用户各种样式类型文档的输出。</p><p>**点击**查看文档</p><figure><img src="'+o+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0"><figcaption></figcaption></figure><figure><img src="'+p+'" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="_3-json5-支持" tabindex="-1"><a class="header-anchor" href="#_3-json5-支持" aria-hidden="true">#</a> 3. JSON5 支持</h3><p>请求体 JSON5 格式支持,JSON 字段注释支持等</p><figure><img src="'+d+'" alt="" tabindex="0"><figcaption></figcaption></figure><p>json5</p><h2 id="_4-environment-重构" tabindex="-1"><a class="header-anchor" href="#_4-environment-重构" aria-hidden="true">#</a> 4. Environment 重构</h2><p>Environment 区分为本地值(Current value)和共享值(Initial value)</p><p>Initial value 可以通过提交 .fastRequest/config/fastRequestCurrentProjectEnvironment.json 实现共享</p><figure><img src="'+c+'" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="_5-项目域名添加优化" tabindex="-1"><a class="header-anchor" href="#_5-项目域名添加优化" aria-hidden="true">#</a> 5. 项目域名添加优化</h2><p>添加项目名的时候，自动识别 module 名称作为下拉框选项,也可以自定义输入.</p><figure><img src="'+f+`" alt="" tabindex="0"><figcaption></figcaption></figure><p>projectName</p><h2 id="_6-忽略字段使用-fastrequestparseignore" tabindex="-1"><a class="header-anchor" href="#_6-忽略字段使用-fastrequestparseignore" aria-hidden="true">#</a> 6. 忽略字段使用@fastRequestParseIgnore</h2><p>针对实体类需要忽略解析的字段,可以在注释中添加@fastRequestParseIgnore 来实现,原来的注解@parseIgnore 依然适用，减少代码入侵</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * xxx description
 * @fastRequestParseIgnore
 */
private String someIgnoreField ;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有非常多的细节优化不再一一描述，赶紧升级吧！</p><h1 id="更多详情" tabindex="-1"><a class="header-anchor" href="#更多详情" aria-hidden="true">#</a> 更多详情</h1><p>请点击 -------------&gt;<strong>这里 https://api-buddy.cn/guide/history.html</strong></p><p><strong>看完还不赶紧上号？</strong></p>`,38),m=[u];function h(_,v){return t(),s("div",null,m)}const b=e(l,[["render",h],["__file","fastRequest-2023.2.3.html.vue"]]);export{b as default};
