const e=JSON.parse('{"key":"v-09f19465","path":"/zh/blog/soul_source_learning_08_httplongpolling_01.html","title":"Soul网关学习Http长轮询解析01","lang":"zh-CN","frontmatter":{"title":"Soul网关学习Http长轮询解析01","author":"朱明","date":"2021-01-25T00:00:00.000Z","tag":["Soul"],"cover":"/assets/img/architecture/soul-framework.png","head":[["meta",{"name":"博客"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/soul_source_learning_08_httplongpolling_01.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/soul_source_learning_08_httplongpolling_01.html"}],["meta",{"property":"og:title","content":"Soul网关学习Http长轮询解析01"}],["meta",{"property":"og:description","content":"后台与网关数据同步 (Http 长轮询篇) 配置 后台信息模式切换 在上篇分析 Zookeeper 同步的文章 (Soul 网关源码分析-11 期 (https://blog.csdn.net/zm469568595/article/details/113065463)) 中, 我们通过 DataSyncConfiguration 这个配置类做的切换,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T11:37:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Soul网关学习Http长轮询解析01"}],["meta",{"property":"article:author","content":"朱明"}],["meta",{"property":"article:tag","content":"Soul"}],["meta",{"property":"article:published_time","content":"2021-01-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T11:37:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Soul网关学习Http长轮询解析01\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\\"],\\"datePublished\\":\\"2021-01-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-29T11:37:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"朱明\\"}]}"]],"description":"后台与网关数据同步 (Http 长轮询篇) 配置 后台信息模式切换 在上篇分析 Zookeeper 同步的文章 (Soul 网关源码分析-11 期 (https://blog.csdn.net/zm469568595/article/details/113065463)) 中, 我们通过 DataSyncConfiguration 这个配置类做的切换,..."},"headers":[{"level":2,"title":"后台与网关数据同步 (Http 长轮询篇)","slug":"后台与网关数据同步-http-长轮询篇","link":"#后台与网关数据同步-http-长轮询篇","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"DataChangedListener 体系","slug":"datachangedlistener-体系","link":"#datachangedlistener-体系","children":[]},{"level":3,"title":"其他同步策略此时在干什么?","slug":"其他同步策略此时在干什么","link":"#其他同步策略此时在干什么","children":[]},{"level":3,"title":"长轮询实现方式思考","slug":"长轮询实现方式思考","link":"#长轮询实现方式思考","children":[]},{"level":3,"title":"HttpLongPollingDataChangedListener 长轮询实现","slug":"httplongpollingdatachangedlistener-长轮询实现","link":"#httplongpollingdatachangedlistener-长轮询实现","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1693309054000,"updatedTime":1693309054000,"contributors":[{"name":"Cici","email":"1901177100@qq.com","commits":1}]},"readingTime":{"minutes":8.76,"words":2628},"filePathRelative":"zh/blog/soul_source_learning_08_httplongpolling_01.md","localizedDate":"2021年1月25日","autoDesc":true,"excerpt":""}');export{e as data};
