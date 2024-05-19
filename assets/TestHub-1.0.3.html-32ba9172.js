import{_ as t}from"./TestHub-1.0.2-1-a1e87689.js";import{_ as e,o,c as u,f as i}from"./app-e38f0e67.js";const d="/assets/img/news/TestHub-1.0.3-1.jpg",n={},r=i('<h1 id="自动化测试工具-testhub-v1-0-3-版本发布" tabindex="-1"><a class="header-anchor" href="#自动化测试工具-testhub-v1-0-3-版本发布" aria-hidden="true">#</a> 自动化测试工具：TestHub V1.0.3 版本发布</h1><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>TestHub 是一款基于流程编排的自动化测试工具。是为了解决在软件开发旅程中测试流程管理和执行的复杂挑战而诞生的。传统测试工具可能局限于接口级自动化，无法满足多样化的需求，而我们在 TestHub 中引入了独特的流程编排功能，让您能够轻松定义、管理和执行测试流程。无论是自动化测试、流程调度还是其他自动化任务，TestHub 的插件式架构都能够满足您的无限扩展需求。</p><p>使用手册：http://nsrule.com/</p><p>演示环境：http://testhub.nsrule.com:11018/#/</p><p>Gitee 开源地址：https://gitee.com/dromara/TestHub</p><p>Gitub 开源地址：https://github.com/dromara/TestHub</p><p>演示视频：https://www.bilibili.com/video/BV1X94y1v7ak/</p><p>安装包：https://url37.ctfile.com/d/42659137-59604925-26bdd9?p=3710 (访问密码: 3710)</p><figure><img src="'+t+`" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="_1-0-3-更新内容" tabindex="-1"><a class="header-anchor" href="#_1-0-3-更新内容" aria-hidden="true">#</a> 1.0.3 更新内容</h2><ul><li><p>🪲🪲 修复 BUG🪲🪲</p></li><li><p>优化用例编辑器卡顿问题</p></li><li><p>修复 HTTP 不支持异步接口能问题</p></li><li><p>自动生成的 ID 和人工输入的 ID 可能会产生重复@magic(感谢大佬) #I8AZW1</p></li><li><p>👍👍 新增功能 👍👍</p></li><li><p>优化 Formula 表达式日志展示。使用说明</p></li><li><p>基于 antlr4 重构 Formula 表达式</p></li><li><p>支持操作 cookie #I8I89D</p></li><li><p>参数支持复制键入 #I8B27J</p></li><li><p>优化环境变量的使用 #I8CEPE</p></li></ul><h2 id="如何使用-formula-表达式" tabindex="-1"><a class="header-anchor" href="#如何使用-formula-表达式" aria-hidden="true">#</a> 如何使用 Formula 表达式</h2><p><strong>❓ 为什么要基于 antlr4 重构 Formula 表达式 ❓</strong></p><p>ANTLR (ANother Tool for Language Recognition) 是一个强大的语法分析器生成工具，用于生成词法分析器和语法分析器。ANTLR4 是其最新版本，具有许多先进的功能，它有一些优势使其在一些情况下比 TestHub 之前版本手动解析更有优势，而且支持的语法更多。</p><p>Formula 表达式做为操作数是 TestHub 数据的最小操作单元,</p><p>我们用 FormulaNode 表示一个的操作数 - TestHub 中内置了 5 种基础操作数</p><ul><li>DataNode 表示固定值,是有配置人员手动指定的, 例如:<code>xxxx</code></li><li>PathNode 表示变量值,可以基于 jsonPath 从决策上下文中获取指定的变量值,标识为<code>\${xxx.yyy}</code></li><li>FuncNode 表示方法型函数的调用,标识为<code>%{方法名(形参 1:操作数,......)}</code></li><li>ArithmeticNode 表示计算算数运算, 例如:<code>1+2+3*4/5%3</code></li><li>MixNode 表示混合表达式</li></ul><h3 id="操作对象" tabindex="-1"><a class="header-anchor" href="#操作对象" aria-hidden="true">#</a> 操作对象</h3><p>后续介绍均以上下文中存在如下数据为前提</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;store&quot;: {
    &quot;book&quot;: [
      {
        &quot;category&quot;: &quot;reference&quot;,
        &quot;author&quot;: &quot;Nigel Rees&quot;,
        &quot;title&quot;: &quot;Sayings of the Century&quot;,
        &quot;price&quot;: 8.95
      },
      {
        &quot;category&quot;: &quot;fiction&quot;,
        &quot;author&quot;: &quot;Evelyn Waugh&quot;,
        &quot;title&quot;: &quot;Sword of Honour&quot;,
        &quot;price&quot;: 12.99
      },
      {
        &quot;category&quot;: &quot;fiction&quot;,
        &quot;author&quot;: &quot;Herman Melville&quot;,
        &quot;title&quot;: &quot;Moby Dick&quot;,
        &quot;isbn&quot;: &quot;0-553-21311-3&quot;,
        &quot;price&quot;: 8.99
      },
      {
        &quot;category&quot;: &quot;fiction&quot;,
        &quot;author&quot;: &quot;J. R. R. Tolkien&quot;,
        &quot;title&quot;: &quot;The Lord of the Rings&quot;,
        &quot;isbn&quot;: &quot;0-395-19395-8&quot;,
        &quot;price&quot;: 22.99
      }
    ],
    &quot;bicycle&quot;: {
      &quot;color&quot;: &quot;red&quot;,
      &quot;price&quot;: 19.95
    }
  },
  &quot;expensive&quot;: 2
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><h4 id="固定值-datanode" tabindex="-1"><a class="header-anchor" href="#固定值-datanode" aria-hidden="true">#</a> 固定值-DataNode</h4><p>data=&quot;root&quot;中的 我们写死的 root 其实就是 DataNode 类型的操作数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;param code=&quot;password&quot; name = &quot;密码&quot; dataType=&quot;STRING&quot; data=&quot;root&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>写法</th><th>例子</th><th>值</th></tr></thead><tbody><tr><td><code>-1.0086</code></td><td>数字</td><td>-1.0086</td></tr><tr><td><code>{attr:{a:1},attr1:1}</code></td><td>json 对象</td><td>{&quot;attr&quot;:{&quot;a&quot;:1},&quot;attr1&quot;:1}</td></tr><tr><td><code>[\${expensive},1]</code></td><td>列表 操作对象的 expensive 做为第一个元素，1 是第二个元素</td><td><code>[2,1]</code></td></tr></tbody></table><h4 id="变量值-pathnode" tabindex="-1"><a class="header-anchor" href="#变量值-pathnode" aria-hidden="true">#</a> 变量值-PathNode</h4><div class="hint-container warning"><p class="hint-container-title">PathNode 几乎支持了所有 jsonPath 的语法,但是我们不支持 \`$[&#39;store&#39;][&#39;book&#39;][0][&#39;title&#39;]\` 这种\`[]\`的写法 如果目前的语法满足不了你的测试过程，请于\`gitee\`仓库提 lssues，我们会优先支持。 jsonPath 语法学习 请参考 https://github.com/alibaba/fastjson/wiki/JSONPath</p></div><table><thead><tr><th>写法</th><th>例子</th><th>值</th></tr></thead><tbody><tr><td><code>\${expensive}</code></td><td>操作对象的 expensive 的值</td><td>2</td></tr><tr><td><code>\${store.book.price}</code></td><td>操作对象的 store 的每一个 book 的 price 值</td><td><code>[8.95, 12.99, 8.99, 22.99]</code></td></tr><tr><td><code>\${store.book[-1].author}</code></td><td>操作对象的 store 的最后一个 book 的 author</td><td>J. R. R. Tolkien</td></tr><tr><td><code>\${store.book[0:2].author}</code></td><td>操作对象的 store 的 0 到 2book 的 author</td><td>Nigel Rees,Sword of Honour,Herman Melville</td></tr><tr><td><code>\${store.book[?(isbn)]}</code></td><td>操作对象的 store 的 book 中 isbn 属性不等于空的</td><td>Herman Melville,J. R. R. Tolkien</td></tr><tr><td><code>\${store.book[author=&#39;Nigel Rees&#39;].title}</code></td><td>操作对象的 store 的 book 中 author 等于 Nigel Rees 的 book 的 title</td><td>Sayings of the Century</td></tr></tbody></table><h4 id="内置方法-funcnode" tabindex="-1"><a class="header-anchor" href="#内置方法-funcnode" aria-hidden="true">#</a> 内置方法-FuncNode</h4><table><thead><tr><th>写法</th><th>例子</th><th>值</th></tr></thead><tbody><tr><td><code>%{getNowTime()}</code></td><td>获取当前时间</td><td>看表</td></tr><tr><td><code>%{add(attr1:1,attr2:2)}</code></td><td>进行 1+2 ，key:val 的写法</td><td>3</td></tr><tr><td><code>%{add(1,2)}</code></td><td>进行 1+2 默认 key 为下标的写法</td><td>3</td></tr></tbody></table><p>内置函数是我们基于 SPI 机制提供的扩展点之一，目前我们实现了这些内置函数</p><p>如果有不满足你的可以按照一下方式扩展</p><ol><li>继承 FunctionHandler</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package org.dromara.testhub.nsrule.core.executer.mode.base.function;

import com.alibaba.fastjson.JSONObject;
import org.dromara.testhub.nsrule.core.executer.context.Context;

public interface FunctionHandler {
    String getName();

    Object execute(Context context, JSONObject data);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 META-INF.services 路径下的 org.dromara.testhub.nsrule.core.executer.mode.base.function.FunctionHandler 配置的你扩展方法</li></ol><h4 id="算数运算-arithmeticnode" tabindex="-1"><a class="header-anchor" href="#算数运算-arithmeticnode" aria-hidden="true">#</a> 算数运算-ArithmeticNode</h4><p>是的我们支持了手写算数运算的表达式</p><table><thead><tr><th>符号</th><th>作用</th></tr></thead><tbody><tr><td>+</td><td>加</td></tr><tr><td>-</td><td>减</td></tr><tr><td><code>*</code></td><td>乘</td></tr><tr><td>/</td><td>除</td></tr><tr><td>%</td><td>取余</td></tr><tr><td>()</td><td>优先级</td></tr></tbody></table><table><thead><tr><th>写法</th><th>例子</th><th>值</th></tr></thead><tbody><tr><td><code>1+2+3*4/5%3</code></td><td>计算<code>1+2+3*4/5%3</code></td><td>5.4</td></tr><tr><td><code>1+(2+3)*4/5%3</code></td><td>计算<code>1+(2+3)*4/5%3</code></td><td>2</td></tr></tbody></table><h4 id="混合表达式-mixnode" tabindex="-1"><a class="header-anchor" href="#混合表达式-mixnode" aria-hidden="true">#</a> 混合表达式-MixNode</h4><p>用户组合所有 FormulaNode 最终结果返回字符串</p><table><thead><tr><th>写法</th><th>例子</th><th>值</th></tr></thead><tbody><tr><td><code>http:\${expensive}:10010/server/workerHeartbeat</code></td><td>将操作对象的 expensive 的值替换后返回字符串</td><td>http:2:10010/server/workerHeartbeat</td></tr></tbody></table><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><figure><img src="`+d+`" alt="" tabindex="0"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;

&lt;rule code=&quot;RULE_0000000013&quot; name=&quot;Formula操作数使用说明&quot; model=&quot;flow&quot; project=&quot;default&quot;&gt;
    &lt;actions&gt;
        &lt;action code=&quot;getData&quot; name=&quot;操作数据&quot; type=&quot;CONST&quot; dataType=&quot;MAP&quot;&gt;
            &lt;bound&gt;
                {&quot;store&quot;:{&quot;book&quot;:[{&quot;category&quot;:&quot;reference&quot;,&quot;author&quot;:&quot;Nigel Rees&quot;,&quot;title&quot;:&quot;Sayings of the Century&quot;,&quot;price&quot;:8.95},{&quot;category&quot;:&quot;fiction&quot;,&quot;author&quot;:&quot;Evelyn Waugh&quot;,&quot;title&quot;:&quot;Sword of Honour&quot;,&quot;price&quot;:12.99},{&quot;category&quot;:&quot;fiction&quot;,&quot;author&quot;:&quot;Herman Melville&quot;,&quot;title&quot;:&quot;Moby Dick&quot;,&quot;isbn&quot;:&quot;0-553-21311-3&quot;,&quot;price&quot;:8.99},{&quot;category&quot;:&quot;fiction&quot;,&quot;author&quot;:&quot;J. R. R. Tolkien&quot;,&quot;title&quot;:&quot;The Lord of the Rings&quot;,&quot;isbn&quot;:&quot;0-395-19395-8&quot;,&quot;price&quot;:22.99}],&quot;bicycle&quot;:{&quot;color&quot;:&quot;red&quot;,&quot;price&quot;:19.95}},&quot;expensive&quot;:2}
            &lt;/bound&gt;
        &lt;/action&gt;
    &lt;/actions&gt;
    &lt;flows&gt;
        &lt;flow code=&quot;flow1&quot;&gt;
            &lt;execute code=&quot;stp1&quot; name=&quot;获取基础操作数据&quot; actionCode=&quot;getData&quot;/&gt;
            &lt;execute code=&quot;stp2&quot; name=&quot;固定值-DataNode&quot; actionCode=&quot;check&quot;&gt;
                &lt;checkItem code=&quot;check1&quot; name=&quot;固定值数字&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; cover=&quot;-1.0086&quot; threshold=&quot;-1.0086&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check2&quot; name=&quot;固定值字符串&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; cover=&quot;* 0/1 * * * ?&quot; threshold=&quot;* 0/1 * * * ?&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check3&quot; name=&quot;固定值列表&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; coverComplex=&quot;1&quot; cover=&quot;[\${stp1.expensive},1]&quot; thresholdComplex=&quot;1&quot; threshold=&quot;[2,1]&quot;/&gt;
                &lt;/checkItem&gt;
            &lt;/execute&gt;
            &lt;execute code=&quot;stp3&quot; name=&quot;变量值-PathNode&quot; actionCode=&quot;check&quot;&gt;
                &lt;checkItem code=&quot;check1&quot; name=&quot;操作对象的 expensive 的值&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; cover=&quot;\${stp1.expensive}&quot; threshold=&quot;2&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check2&quot; name=&quot;操作对象的 store 的每一个 book 的 price 值&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; coverComplex=&quot;1&quot; cover=&quot;\${stp1.store.book.price}&quot; thresholdComplex=&quot;1&quot; threshold=&quot;[8.95,12.99,8.99,22.99]&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check3&quot; name=&quot;操作对象的 store 的最后一个 book 的 author&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; cover=&quot;\${stp1.store.book[-1].author}&quot; threshold=&quot;J. R. R. Tolkien&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check4&quot; name=&quot;操作对象的 store 的 0 到 2book 的 author&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; coverComplex=&quot;1&quot; cover=&quot;\${stp1.store.book[0:2].author}&quot; thresholdComplex=&quot;1&quot; threshold=&quot;[Nigel Rees,Sword of Honour,Herman Melville]&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check5&quot; name=&quot;操作对象的 store 的 book 中 isbn 属性不等于空的 的 author&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; coverComplex=&quot;1&quot; cover=&quot;\${stp1.store.book[?(isbn)].author}&quot; thresholdComplex=&quot;1&quot; threshold=&quot;[Herman Melville,J. R. R. Tolkien]&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check6&quot; name=&quot;操作对象的 store 的 book 中 author 等于 Nigel Rees 的 book 的 title&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; cover=&quot;\${stp1.store.book[author=&#39;Nigel Rees&#39;].title}&quot; threshold=&quot;Sayings of the Century&quot;/&gt;
                &lt;/checkItem&gt;
            &lt;/execute&gt;
            &lt;execute code=&quot;stp4&quot; name=&quot;内置方法-FuncNode&quot; actionCode=&quot;check&quot;&gt;
                &lt;checkItem code=&quot;check1&quot; name=&quot;参数key:val形式&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; cover=&quot;%{add(attr1:1,attr2:2)}&quot; threshold=&quot;3&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check2&quot; name=&quot;参数,形式&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; cover=&quot;%{add(1,2)}&quot; threshold=&quot;3&quot;/&gt;
                &lt;/checkItem&gt;
            &lt;/execute&gt;
            &lt;execute code=&quot;stp5&quot; name=&quot;算数运算-ArithmeticNode&quot; actionCode=&quot;check&quot;&gt;
                &lt;checkItem code=&quot;check1&quot; name=&quot;计算1+2+3*4/5%3&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; cover=&quot;1+2+3*4/5%3&quot; threshold=&quot;5.4&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check2&quot; name=&quot;计算1+(2+3)*4/5%3&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;NUMBER&quot; cover=&quot;1+(2+3)*4/5%3&quot; threshold=&quot;2&quot;/&gt;
                &lt;/checkItem&gt;
            &lt;/execute&gt;
            &lt;execute code=&quot;stp6&quot; name=&quot;混合表达式-MixNode&quot; actionCode=&quot;check&quot;&gt;
                &lt;checkItem code=&quot;check1&quot; name=&quot;store 的 book中第expensive+1个  的 author&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; cover=&quot;\${stp1.store.book[%{add(\${stp1.expensive},1)}].author}&quot; threshold=&quot;J. R. R. Tolkien&quot;/&gt;
                &lt;/checkItem&gt;
                &lt;checkItem code=&quot;check2&quot; name=&quot;store 的 book中第expensive+1个  的 author&quot; msg=&quot;&quot;&gt;
                    &lt;expression expressionType=&quot;relation&quot; operationCode=&quot;eq&quot; dataType=&quot;STRING&quot; cover=&quot;\${stp1.expensive}.1&quot; threshold=&quot;2.1&quot;/&gt;
                &lt;/checkItem&gt;
            &lt;/execute&gt;
        &lt;/flow&gt;
    &lt;/flows&gt;
&lt;/rule&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),a=[r];function l(s,q){return o(),u("div",null,a)}const h=e(n,[["render",l],["__file","TestHub-1.0.3.html.vue"]]);export{h as default};
