import{_ as e}from"./LiteFlow-concept-1-8e607e25.js";import{_ as i,o as s,c as n,f as d}from"./app-00969e95.js";const a={},l=d(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>2.11.4 经历了 BETA1,BETA2,BETA3 版本之后，正式版发布!</p><p>2.11.4 总共有 18 个 issue 的更新，绝大多数为增强类 issue。在这个版本中，我们优化了底层，着重优化了性能。也提供了一些小特性的升级。</p><p>强烈建议还在用 2.11.3 版本的同学进行升级。</p><p>接下来挑几个更新的增强来详细说下。</p><h2 id="重写了声明式的部分" tabindex="-1"><a class="header-anchor" href="#重写了声明式的部分" aria-hidden="true">#</a> 重写了声明式的部分</h2><p>此增强 issue 困扰我半个多月，一直以来，LiteFlow 声明式的底层代码比较混乱。不太好阅读，而且始终会在一些边缘场景莫名其妙的出问题。我一直想对其进行重写，这个版本，我阅读了大量了 spring bean 构造的底层代码，终于在底层实现了更加优化的改造。改造之后的声明式底层代码更加合理，结构层次也更加清晰，应该会摆脱一些边缘场景的问题。</p><p>改造之后的使用方式同之前一致，用户并不会感知到。</p><p>只是为了说明下，我们对底层代码是有追求的，并会为了追去极致的代码优雅而去不停努力。</p><p>希望你们去使用 LiteFlow，因为 LF 正在变得更强大。</p><h2 id="解决了并行线程池的性能问题" tabindex="-1"><a class="header-anchor" href="#解决了并行线程池的性能问题" aria-hidden="true">#</a> 解决了并行线程池的性能问题</h2><p>源于社区的小伙伴在落地 LF 时发现，第一次请求会比后面的请求慢上一些。社区小伙伴也进行排查，发现 LF 是第一次请求时去初始化并行线程池，并报上了 issue。</p><p>这里确实是之前的版本没考虑周全，这一次，我们修复了这个问题。之后所有的线程池的初始化全都在启动时进行，包括用户自定义的线程池，也是如此。</p><h2 id="并行线程池隔离-bug-的修复" tabindex="-1"><a class="header-anchor" href="#并行线程池隔离-bug-的修复" aria-hidden="true">#</a> 并行线程池隔离 BUG 的修复</h2><p>在 2.11.1 版本中曾经推出了并行线程池的隔离特性，旨在对一些并行分支非常多的进行线程池的隔离，以达到优化性能的目的，没想到这个特性一直存在 BUG。这次我们也深度进行了排查，并修复了这个问题。</p><h2 id="增加映射关键字-ser-和-par" tabindex="-1"><a class="header-anchor" href="#增加映射关键字-ser-和-par" aria-hidden="true">#</a> 增加映射关键字 SER 和 PAR</h2><p>曾经有一个 issue 我还记得，说是 LF 中的 THEN 和 WHEN 是表示串行和并行的意思，但是关键字意义却不精准。</p><p>虽然我承认 THEN 和 WHEN 表示串行和并行的确有些牵强，但是 LF 用户一直这么用，突然改变最主要的关键字也不太好。</p><p>所以这次新推出了<code>SER</code>和<code>PAR</code>关键字，等同于<code>THEN</code>和<code>WHEN</code>。当然继续使用<code>THEN</code>和<code>WHEN</code>也是可以的。</p><h2 id="cmpstep-中加入-starttime-和-endtime" tabindex="-1"><a class="header-anchor" href="#cmpstep-中加入-starttime-和-endtime" aria-hidden="true">#</a> CmpStep 中加入 startTime 和 endTime</h2><p>以前的 CmpStep 提供了耗时，但是没有组件的执行时间参数，这次提供了 startTime 和 EndTime。</p><h2 id="加入了快速解析的参数" tabindex="-1"><a class="header-anchor" href="#加入了快速解析的参数" aria-hidden="true">#</a> 加入了快速解析的参数</h2><p>这个增强，也是源于社区内的一位落地的小伙伴，他和我说项目内有几万的流程。启动耗时非常久。</p><p>详细分析原因后，发现是 LF 的<code>CopyOnWriteHashMap</code>比较慢的缘故，当初用这个是为了平滑更新的因素。</p><p>所以，2.11.4 版本推出了<code>liteflow.fast-load</code>参数，当这个参数为 true 时。那么启动解析的速度回提升 4 到 5 倍。</p><p>我也进行了测试，1w 条流程(每个流程均有 14 个组件)耗时 3 秒，这个解析是线性的。所以在配置了这个参数后，解析速度还是可以接受的。</p><p>但是我并不推荐所有的人把快速 load 模式打开，因为快速 load 模式牺牲了热更新时的平滑性。换句话说就是，在正常模式下，如果当你热更新时正好有正在执行的流程，那么正在执行的流程是会用老的链路的，只有下一次才会用最新的链路。如果你打开了快速 load 模式，那么在热更新时，正好在执行过程中的流程有可能前半部分是老的流程，而后半部分有可能读到新的流程。这样就造成了不一致了。</p><p>当然这种场景是非常极端的场景，在普通的场景中，可能根本也不需要保持热更新时的平滑性。所以 fast-load 模式是有代价的。鱼和熊掌不可兼得。看项目要求了。</p><h2 id="nacos-配置模式新增对阿里云-mse-的鉴权方式" tabindex="-1"><a class="header-anchor" href="#nacos-配置模式新增对阿里云-mse-的鉴权方式" aria-hidden="true">#</a> Nacos 配置模式新增对阿里云 MSE 的鉴权方式</h2><p>新版本的 LiteFlow 在 Nacos 层面可以支持阿里云的 MSE 鉴权方式了。</p><p>只需要这么配置就行了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>liteflow.rule-source-ext-data={\\
    &quot;serverAddr&quot;:&quot;127.0.0.1:8848&quot;,\\
    &quot;dataId&quot;:&quot;demo_rule&quot;,\\
    &quot;group&quot;:&quot;DEFAULT_GROUP&quot;,\\
    &quot;namespace&quot;:&quot;your namespace id&quot;,\\
    &quot;accessKey&quot;:&quot;xxxxxxxxxx&quot;,\\
    &quot;secretKey&quot;:&quot;xxxxxxxxxx&quot;\\
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-11-4-全部更新列表" tabindex="-1"><a class="header-anchor" href="#_2-11-4-全部更新列表" aria-hidden="true">#</a> 2.11.4 全部更新列表</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>增强 #I8UQR4 while组件本身加入loopIndex

https://gitee.com/dromara/liteFlow/issues/I8UQR4

增强 #I8TZFQ 优化EL的check报错提示，代码优化

https://gitee.com/dromara/liteFlow/issues/I8TZFQ

增强 #I8QJE1 增加映射关键字SER和PAR

https://gitee.com/dromara/liteFlow/issues/I8QJE1

增强 #I8PWWO CmpStep中加入startTime和endTime

https://gitee.com/dromara/liteFlow/issues/I8PWWO

增强 #I8MXIB WHEN线程池可能存在第一次调用的时候初始化

https://gitee.com/dromara/liteFlow/issues/I8MXIB

增强 #I8MXHX isAccess在WHEN中会被执行2次的问题

https://gitee.com/dromara/liteFlow/issues/I8MXHX

增强 #I8J622 动态组件el语句data参数缺少单引号

https://gitee.com/dromara/liteFlow/issues/I8J622

增强 #I8IDE5 对声明式代理底层代码进行增强

https://gitee.com/dromara/liteFlow/issues/I8IDE5

增强 #I8H1LT 希望提供nacos对于阿里云MSE的鉴权方式

https://gitee.com/dromara/liteFlow/issues/I8H1LT

增强 #I8FC4F 超大量规则场景下项目启动时间过长的问题

https://gitee.com/dromara/liteFlow/issues/I8FC4F

增强 #I8FBBW chain及script新增enable字段后sql打印错误

https://gitee.com/dromara/liteFlow/issues/I8FBBW

增强 #I8DW1J LiteFlowChainELBuilder.validate()依然存在bug

https://gitee.com/dromara/liteFlow/issues/I8DW1J

增强 #I8AE9G 超时控制增加maxWaitMilliseconds关键字，以增加更精细的时间控制

https://gitee.com/dromara/liteFlow/issues/I8AE9G

修复 #I8TZTK EL语句构建的时候，如果出现了脚本节点。会出NPE的异常

https://gitee.com/dromara/liteFlow/issues/I8TZTK

修复 #I8S75A 去除循环检测，低版本的jackson可能导致的内存溢出问题

https://gitee.com/dromara/liteFlow/issues/I8S75A

修复 #I8RWGZ 开启WHEN线程池隔离线程池创建有问题

https://gitee.com/dromara/liteFlow/issues/I8RWGZ

修复 #I8PEZ0 修复sql插件中script表中enable字段不起作用的bug

https://gitee.com/dromara/liteFlow/issues/I8PEZ0

修复 #I8AF1O 修复redis的订阅模式mode解析的bug

https://gitee.com/dromara/liteFlow/issues/I8AF1O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开设了-lf-club-付费社区" tabindex="-1"><a class="header-anchor" href="#开设了-lf-club-付费社区" aria-hidden="true">#</a> 开设了 LF CLUB 付费社区</h2><p>相信老用户都知道，我们在微信群努力帮大家答疑解惑，坚持了 2 年之多，目前微信群一共有 12 个群。</p><p>随着社区人越来越多，有些问题我有时也没有时间精力去一一回答。为了提高质量，为此我创建了<code>LF CLUB</code>的知识星球。</p><p><code>LF CLUB</code>为付费知识星球，既然是付费星球，加入星球的用户拥有以下权益：</p><ul><li>• <strong>凡是在星球向我提问的问题，当天必定得到详细的回复和指导建议。</strong></li><li>• <strong>每个加入的用户每年提供 2 次远程问题排查，咨询类的服务。</strong></li><li>• <strong>每 1 到 2 天会分享 LF 目前的进度，以及下一个版本的重点。</strong></li><li>• <strong>每周发布一篇 LF 的解析和相关理念分析。</strong></li><li>• <strong>提供之后视频教程的折扣购买权益。</strong></li></ul><p>当然您也可以选择不加入星球，在微信群里向我提问，但是迫于精力问题，也不可能保证每位的问题都能得到细致的回复和指导。</p><p>加入星球，等于拥有了一位专家随时来帮助你更好的使用框架，希望加入<code>LF CLUB</code>的同学请扫以下二维码：</p><img src="`+e+'" style="max-height:340px;">',42),r=[l];function t(c,o){return s(),n("div",null,r)}const m=i(a,[["render",t],["__file","LiteFlow-2.11.4.html.vue"]]);export{m as default};
