import{_ as a,o as e,c as i,e as r}from"./app-b04a40d2.js";const s={},l=r('<p>📣 <strong>爷爷！你关注的短信框架终于更新啦！</strong></p><h2 id="🎊sms4j-2-1-0-版本正式发布-🎊" tabindex="-1"><a class="header-anchor" href="#🎊sms4j-2-1-0-版本正式发布-🎊" aria-hidden="true">#</a> 🎊SMS4J  2.1.0 版本正式发布！🎊</h2><p>本次更新带来了诸多的新特性，也修复了先前版本中的诸多问题，接下来让我们一起来看一下本次更新的内容吧！</p><h2 id="🎉-新特性-🎉" tabindex="-1"><a class="header-anchor" href="#🎉-新特性-🎉" aria-hidden="true">#</a> 🎉 新特性 🎉</h2><ol><li><h4 id="新增天翼云短信支持" tabindex="-1"><a class="header-anchor" href="#新增天翼云短信支持" aria-hidden="true">#</a> 新增天翼云短信支持</h4><p>V 2.1.0 版本再添新支持厂商，天翼云短信，在新版本中，小伙伴们可以使用天翼云短信啦</p></li><li><h4 id="添加-solon-框架支持" tabindex="-1"><a class="header-anchor" href="#添加-solon-框架支持" aria-hidden="true">#</a> 添加 solon 框架支持</h4><p>solon 是一个非常优秀的国产框架，作者也是一个很强大的男人（单挑 spring 的男人），目前 solon 框架已经得到了多家军工企业的青睐，没准未来会与 spring 平分天下哦！在这里也感谢 solon 的作者对于我们的支持。</p></li><li><h4 id="supplierfactory-添加一个通用的-set-方法" tabindex="-1"><a class="header-anchor" href="#supplierfactory-添加一个通用的-set-方法" aria-hidden="true">#</a> SupplierFactory 添加一个通用的 set 方法</h4><p>对于想要传值来构建不同实现类型的小伙伴来说，每个厂商一个 set 方法用起来不太方便，这里我们整合了一个完整的 set 方法，可以实现所有厂商的 set</p></li><li><h4 id="添加负载均衡工具" tabindex="-1"><a class="header-anchor" href="#添加负载均衡工具" aria-hidden="true">#</a> 添加负载均衡工具</h4><p>在本次的版本中添加了一个实验性的新特性，短信负载均衡，当你有多个厂商同时存在，并且不关注本次短信使用哪个厂商发送时，可以使用该工具，工具采用平滑加权负载均衡算法实现，可以根据设置的权重，自动选择托管中的短信服务</p></li><li><h4 id="添加了一个静态方法用于获取-linkedhashmap-实例" tabindex="-1"><a class="header-anchor" href="#添加了一个静态方法用于获取-linkedhashmap-实例" aria-hidden="true">#</a> 添加了一个静态方法用于获取 LinkedHashMap 实例</h4><p>很多人并不常用 LinkedHashMap，为了方便使用和记忆，我们添加了用于获取它的实例，位于<br><code>org.dromara.sms4j.comm.utils.SmsUtil</code>类中的<code>getNewMap()</code></p></li></ol><h2 id="🔧-修复-🔧" tabindex="-1"><a class="header-anchor" href="#🔧-修复-🔧" aria-hidden="true">#</a> 🔧 修复 🔧</h2><ol><li>修复云片短信未能如期创建实现对象的问题<br> 在先前的版本中我们发现，云片短信并未能如期的创建一个完整的实现，我们在这个版本中对其进行了修复</li><li>修复亿美短信返回值异常<br> 在 2.0.2 版本中，亿美短信的返回值在某些情况下存在异常（比如请求的 url 错误时），在这个版本中我们对此进行了修复</li><li>修复阿里云短信返回值异常<br> 在先前的版本中，阿里云短信的返回值未能如期的通过 SmsResponse 对象返回，而是打印在了 log 中</li><li>先前版本中短信拦截未生效</li></ol><p>短信限制功能的拦截一直过度依赖于 Spring 的 AOP 实现，一旦开启就是全局的拦截，无法做到精准的厂商级别拦截，在 2.1.0 版本中我们对于短信限制功能进行了重构，使其能够精准的分厂商进行短信拦截</p><h2 id="📀-优化-📀" tabindex="-1"><a class="header-anchor" href="#📀-优化-📀" aria-hidden="true">#</a> 📀 优化 📀</h2><ul><li>优化了厂商短信的实现</li><li>优化 javax 加密包使用</li><li>部分短信发送的返回值添加了非空判断</li><li>优化阿里云实现的部分代码</li><li>优化 SmsFactory 内部实现，获取更好的性能和拓展性</li></ul>',10),h=[l];function d(n,o){return e(),i("div",null,h)}const c=a(s,[["render",d],["__file","sms4j-2.1.0.html.vue"]]);export{c as default};
