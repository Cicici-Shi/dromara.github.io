const t=JSON.parse('{"key":"v-e0528bf6","path":"/zh/blog/soul_source_learning_09_httplongpolling_02.html","title":"Soul网关学习Http长轮询解析02","lang":"zh-CN","frontmatter":{"title":"Soul网关学习Http长轮询解析02","author":"朱明","date":"2021-01-27T00:00:00.000Z","tag":["Soul"],"cover":"/assets/img/architecture/soul-framework.png","head":[["meta",{"name":"博客"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuepress-theme-hope-docs-demo.netlify.app/blog/soul_source_learning_09_httplongpolling_02.html"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/blog/soul_source_learning_09_httplongpolling_02.html"}],["meta",{"property":"og:title","content":"Soul网关学习Http长轮询解析02"}],["meta",{"property":"og:description","content":"后台与网关数据同步 (Http 长轮询篇) 长轮询分析的最后一篇, 总结网关端的长轮询的实现, 以及数据流动方式. 网关端长轮询的流程总体也分两个模块: 一是启动时拉取, 二是轮询监听变化 网关启动时拉取数据 网关启动后, 会调用后台提供的接口拉取数据, 并将数据发送到各个插件的数据处理类中 下面展示下网关启动拉取数据的处理流程: 01 这几个处理步骤..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T11:37:34.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Soul网关学习Http长轮询解析02"}],["meta",{"property":"article:author","content":"朱明"}],["meta",{"property":"article:tag","content":"Soul"}],["meta",{"property":"article:published_time","content":"2021-01-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T11:37:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Soul网关学习Http长轮询解析02\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/assets/img/architecture/soul-framework.png\\"],\\"datePublished\\":\\"2021-01-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-29T11:37:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"朱明\\"}]}"]],"description":"后台与网关数据同步 (Http 长轮询篇) 长轮询分析的最后一篇, 总结网关端的长轮询的实现, 以及数据流动方式. 网关端长轮询的流程总体也分两个模块: 一是启动时拉取, 二是轮询监听变化 网关启动时拉取数据 网关启动后, 会调用后台提供的接口拉取数据, 并将数据发送到各个插件的数据处理类中 下面展示下网关启动拉取数据的处理流程: 01 这几个处理步骤..."},"headers":[{"level":2,"title":"后台与网关数据同步 (Http 长轮询篇)","slug":"后台与网关数据同步-http-长轮询篇","link":"#后台与网关数据同步-http-长轮询篇","children":[]},{"level":2,"title":"网关启动时拉取数据","slug":"网关启动时拉取数据","link":"#网关启动时拉取数据","children":[]},{"level":2,"title":"网关轮询监听变化","slug":"网关轮询监听变化","link":"#网关轮询监听变化","children":[]}],"git":{"createdTime":1693309054000,"updatedTime":1693309054000,"contributors":[{"name":"Cici","email":"1901177100@qq.com","commits":1}]},"readingTime":{"minutes":5.54,"words":1663},"filePathRelative":"zh/blog/soul_source_learning_09_httplongpolling_02.md","localizedDate":"2021年1月27日","autoDesc":true,"excerpt":""}');export{t as data};
