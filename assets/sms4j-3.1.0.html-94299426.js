import{_ as s,o as a,c as e,f as i}from"./app-e38f0e67.js";const l={},r=i('<h1 id="📣📣sms4j-3-1-0-终于发布啦-📣📣" tabindex="-1"><a class="header-anchor" href="#📣📣sms4j-3-1-0-终于发布啦-📣📣" aria-hidden="true">#</a> 📣📣sms4j 3.1.0 终于发布啦！📣📣</h1><p>2023 年转瞬即逝，sms4j 项目在这段时间里取得了令人瞩目的成就。截至目前，我们已经获得了超过 1300 个 star，这离不开大家对 sms4j 项目的支持和关注，我代表整个开发团队向大家表示衷心的感谢！</p><p>同时，我很高兴地告诉大家，我们的开发团队正在不断壮大，并迎来了一批新的成员加入。他们的加入为项目注入了新的活力和创造力。此外，我们还收到了许多建设性的意见和建议，这些宝贵的反馈将有助于我们进一步提升 sms4j 的功能和性能。</p><p>接下来，让我们一起来了解一下本次 3.1.0 版本的更新内容，以及认识一下团队的新成员吧！在这个版本中，我们增加了一些新的特性和功能，以满足用户不断增长的需求。同时，我们也修复了一些已知的问题和 bug，提升了系统的稳定性和可靠性。</p><p>如果我们的项目对你产生了帮助，或者你觉得还算值得鼓励，请用你发财的小手帮助点上一个 start</p><p><strong>官网地址 https://sms4j.com</strong></p><p><strong>gitee 仓库 https://gitee.com/dromara/sms4j</strong></p><p><strong>github 仓库 https://github.com/dromara/sms4j</strong></p><h2 id="新增功能" tabindex="-1"><a class="header-anchor" href="#新增功能" aria-hidden="true">#</a> 新增功能：</h2><ul><li>联麓短信：我们新增了对联麓短信的支持，现在可以像使用其他厂商一样方便地进行使用。</li><li>鼎众短信：我们还新增了对鼎众短信的支持，鼎众短信可以发送无模板短信，有需要的小伙伴可以尝试一下。</li><li>OA 通知：在 3.1 版本中，我们正式加入了对 OA 通知的支持，兼容钉钉、飞书和企业微信。</li></ul><h2 id="优化功能" tabindex="-1"><a class="header-anchor" href="#优化功能" aria-hidden="true">#</a> 优化功能：</h2><ul><li>邮件功能优化：现在邮件发送可以直接发送 HTML 字符串，并且可以存在模板变量。</li><li>标准短信方法优化：我们添加了一个方法，该方法用于发送固定模板下的多参数模板短信。</li><li>全局黑名单功能优化：在这次的更新中，我们重构了底层对于短信失败重试和短信黑名单的功能，现在它变得更加轻量、更加稳定。</li><li>新增方法 reload 和 reloadAll：我们在核心工厂类（SmsFactory）中新增了方法 reload 和 reloadAll，用于重新从接口实现中读取并重新实例化短信对象。这样可以极大地减少对于重新读取配置的工作量。</li></ul><h2 id="修复问题" tabindex="-1"><a class="header-anchor" href="#修复问题" aria-hidden="true">#</a> 修复问题：</h2><ul><li>合一短信 HMAC 模式下签名无效的问题：我们修复了合一短信在 HMAC 模式下签名无效的问题。</li><li>邮件插件 JDK17 的适配：我们修复了邮件插件在 JDK17 上的适配问题。</li><li>容联云短信发送失败问题：我们修复了容联云短信发送失败的问题。</li><li>阿里云短信在个别情况下报签名错误问题：我们修复了阿里云短信在个别情况下报签名错误的问题。</li><li>云片短信在无模板下报错的问题：我们修复了云片短信在无模板下报错的问题。</li></ul>',14),t=[r];function o(h,d){return a(),e("div",null,t)}const c=s(l,[["render",o],["__file","sms4j-3.1.0.html.vue"]]);export{c as default};
