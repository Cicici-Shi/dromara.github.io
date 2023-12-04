import{_ as e}from"./CloudEon-1.2.0-4-a7ea2624.js";import{_ as o,o as i,c as n,e as a}from"./app-b6614228.js";const p={},l=a(`<p>CloudEon 社区的小伙伴们大家好，今天很高兴宣布 CloudEon 于 2023 年 7 月 28 日正式发布 1.1.0   版本。</p><p>非常感谢 CloudEon 开源社区成员对 1.1.0 版本发布做出的贡献。</p><h2 id="重要更新" tabindex="-1"><a class="header-anchor" href="#重要更新" aria-hidden="true">#</a> 重要更新</h2><p>1.1.0 版本主要有如下重大更新：</p><p><strong>新增功能：</strong></p><ul><li>支持 Kyuubi 服务,实现 Spark SQL 查询</li><li>增加 Kyuubi 监控面板</li><li>支持 Iceberg 数据湖功能,实现 Iceberg 在 Flink 和 Spark 上的集成</li><li>支持 Elasticsearch 组件</li><li>支持数据采集 seatunnel 组件</li><li>支持 OLAP 组件 Kylin5</li><li>支持实时计算 Dinky 组件</li></ul><p><strong>优化改进：</strong></p><ul><li>优化组件 Docker 镜像,精简大小</li><li>改进节点 SSH 连接,支持指定私钥</li><li>优化监控面板,修复多个面板问题</li><li>优化部分组件的容器资源控制问题，包括 hbase/flink/spark/hive/yarn/hdfs/zookeeper</li></ul><p><strong>修复缺陷：</strong></p><ul><li>修复停止服务时角色 Pod 错乱的问题</li><li>修复 Zookeeper 无法修改客户端端口的问题</li><li>修复 HBase Shell 无法在 Pod 中使用的问题</li><li>修复偶尔出现 ssh 导致的命令执行卡住问题</li><li>修复 hive 容器缺失 mysql 驱动问题</li></ul><p>详情可查看：</p><p>https://github.com/dromara/CloudEon/releases/tag/v1.1.0</p><h2 id="安装部署" tabindex="-1"><a class="header-anchor" href="#安装部署" aria-hidden="true">#</a> 安装部署</h2><h3 id="docker-部署-推荐" tabindex="-1"><a class="header-anchor" href="#docker-部署-推荐" aria-hidden="true">#</a> <strong>Docker 部署（推荐）</strong></h3><p>如果你本地已经安装了 docker，执行以下命令可以一键安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run  -p 7700:7700  --name cloudeon --rm registry.cn-hangzhou.aliyuncs.com/udh/cloudeon:v1.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>镜像启动成功后，在浏览器中访问 http://docker_ip:7700 进入登录页。镜像中提供初始账户，用户名 admin 密码 admin</p><p>更多配置信息可以查看项目文档。</p><h2 id="社区参与" tabindex="-1"><a class="header-anchor" href="#社区参与" aria-hidden="true">#</a> 社区参与</h2><p>CloudEon 项目依靠社区发展，我们致力为用户提供简单易用的大数据产品，我们强调社区协作，互相帮助，共同成长。</p><p>首先，如果您在下载和使用 CloudEon 1.1.0 中发现任何问题，欢迎使用 Github Issues 功能，将您遇到的问题和社区分享。</p><p>https://github.com/dromara/CloudEon/issues</p><p>如果您或者您的公司正在使用 CloudEon，并乐意与社区分享，可以在<strong>Who is using Cloudeon?</strong> 中进行留言。</p><p>https://github.com/dromara/CloudEon/issues/20</p><p>我们也接受其他任何形式的帮助，详见：</p><p>https://docs.cloudeon.top/en/dev/%E7%A4%BE%E5%8C%BA%E8%B4%A1%E7%8C%AE/contribute/</p><h2 id="致谢" tabindex="-1"><a class="header-anchor" href="#致谢" aria-hidden="true">#</a> 致谢</h2><p>CloudEon 1.1.0 版本的发布离不开所有社区成员的支持和反馈，在社区驱动的模式下，CloudEon 才得以有今天的发展态势，真诚地感谢每一位社区贡献者及用户的信任、支持和帮助。</p><p>特别感谢对 1.1.0 版本直接贡献的社区成员：</p><p>@Pandas886</p><p>@limaiwang</p><p>@KangTomwk</p><p>@linshenkx</p><p>@tgluon</p><p>@Mericol</p><p>@linzehao</p><p>@wangkang1</p><p>@pan3793</p><p>@tangxiuhong</p><p>另外感谢@wangkang1 贡献组件扩展文档，如果社区小伙伴有想要扩展组件的需求，可以参考文档：</p><p>https://docs.cloudeon.top/en/dev/component_extension/</p><h2 id="项目简介" tabindex="-1"><a class="header-anchor" href="#项目简介" aria-hidden="true">#</a> 项目简介</h2><p>CloudEon 是一款基于 Kubernetes 的云原生大数据平台，旨在为用户提供一种简单、高效、可扩展的大数据解决方案。如果 CloudEon 项目对您有帮助，请在 Gitee 或 Github 搜索 CloudEon 支持一下，点击 star 加关注。</p><p>CloudEon 遵循 Apache-2.0 开源协议，代码完全开源，如果您想为开源社区做出贡献，非常欢迎加入 CloudEon 项目，与其他开发者一起共同推动项目的发展。</p><p>Gitee：https://gitee.com/dromara/CloudEon</p><p>Github：https://github.com/dromara/CloudEon</p><p>官网：https://cloudeon.top/</p><p>欢迎加入社区技术交流</p><p>公众号：CloudEon 开源</p><p>微信社区：</p><figure><img src="`+e+'" alt="" tabindex="0"><figcaption></figcaption></figure>',51),r=[l];function t(d,s){return i(),n("div",null,r)}const c=o(p,[["render",t],["__file","CloudEon-1.1.0.html.vue"]]);export{c as default};
