import{f as _,A as f,j as m,B as s,k as g,C as y,D as R,E as a,G as w,H as u}from"./app-ebfaec78.js";const S=e=>JSON.parse(decodeURIComponent(e));var h=_({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=f(),n=m(!0),t=s(),l=s(),r=s(),o=g(()=>y({},i,S(e.settings))),d=async()=>{const[{ReplStore:v,Repl:p},{default:c}]=await Promise.all([u(()=>import("./vue-repl-dacec44b.js"),["assets/vue-repl-dacec44b.js","assets/app-ebfaec78.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-de833af9.js","assets/utils-a5e1dbae-143be013.js"]),u(()=>import("./codemirror-editor-e8650eee.js"),["assets/codemirror-editor-e8650eee.js","assets/utils-a5e1dbae-143be013.js","assets/app-ebfaec78.js"])]);t.value=p,r.value=c,l.value=new v({serializedState:decodeURIComponent(e.files)}),o.value.vueVersion&&await l.value.setVueVersion(o.value.vueVersion)};return R(async()=>{await d(),n.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[n.value?a(w,{class:"preview-loading",height:192}):null,t.value?a(t.value,{editor:r.value,store:l.value,autoResize:!0,...o.value,layout:"horizontal"}):null])])]}});export{h as default};
