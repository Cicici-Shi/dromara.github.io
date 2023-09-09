import{_ as t,r as l,o,c as i,a,b as n,d as e,h as r}from"./app-ebfaec78.js";const p={},c=r(`<h2 id="hmily-released-2-0-2-release" tabindex="-1"><a class="header-anchor" href="#hmily-released-2-0-2-release" aria-hidden="true">#</a> Hmily released 2.0.2-Release</h2><ul><li><p>Resolved the issue of SpringCloud using Hystrix to configure thread pool.</p></li><li><p>New issue with SpringCloud embedded transaction calls.</p></li><li><p>Added Hmily load balancing strategy.</p></li><li><p>Other bug fixes and code optimizations.</p></li><li><p>Remove unnecessary third-party JAR packages.</p></li><li><p>Introduction of zero intrusion mode.</p></li></ul><h2 id="hmily-s-support-for-the-popular-rpc-framework-and-spring" tabindex="-1"><a class="header-anchor" href="#hmily-s-support-for-the-popular-rpc-framework-and-spring" aria-hidden="true">#</a> Hmily&#39;s support for the popular RPC framework and Spring.</h2><ul><li><p>Dubbo 2.7.0 for all versions below.</p></li><li><p>SpringCloud Dalston and above, including support for Finchley and Greenwich</p></li><li><p>All versions of Motan.</p></li><li><p>All Spring versions up to 3.0.</p></li></ul><h2 id="hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2" tabindex="-1"><a class="header-anchor" href="#hmily-has-a-load-balancing-policy-for-user-rpc-clusters-in-version-2-0-2" aria-hidden="true">#</a> Hmily has a load-balancing policy for user RPC clusters in version 2.0.2.</h2><ul><li><p>Hmily provides its own implementation of the load-balancing strategy, only for interfaces with @Hmily added</p><p>Dubbo cluster configuration with loadbalance=&quot;hmily&quot;</p></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">dubbo:</span>reference</span> <span class="token attr-name">timeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50000<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">interface</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.dromara.hmily.demo.dubbo.account.api.service.AccountService<span class="token punctuation">&quot;</span></span>
             <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountService<span class="token punctuation">&quot;</span></span>
                 <span class="token attr-name">retries</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">check</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">actives</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token attr-name">loadbalance</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hmily<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring Cloud added to the caller&#39;s YML configuration file:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>hmily ：
   <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
      rule
        <span class="token key atrule">enabled</span> <span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="documents" tabindex="-1"><a class="header-anchor" href="#documents" aria-hidden="true">#</a> Documents</h2>`,10),u={href:"https://dromara.org/website/zh-cn/docs/hmily/index.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/yu199195/hmily",target:"_blank",rel:"noopener noreferrer"},m={href:"https://gitee.com/dromara/hmily",target:"_blank",rel:"noopener noreferrer"},h=a("p",null,"Welcome to Star Fork, provide excellent code and suggestions.",-1);function k(v,b){const s=l("ExternalLinkIcon");return o(),i("div",null,[c,a("ul",null,[a("li",null,[a("p",null,[n("Official document: "),a("a",u,[n("https://dromara.org/website/zh-cn/docs/hmily/index.html"),e(s)])])]),a("li",null,[a("p",null,[n("Github: "),a("a",d,[n("https://github.com/yu199195/hmily"),e(s)])])]),a("li",null,[a("p",null,[n("Gitee: "),a("a",m,[n("https://gitee.com/dromara/hmily"),e(s)])]),h])])])}const f=t(p,[["render",k],["__file","hmily-2.0.2.html.vue"]]);export{f as default};
