"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[74344],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>w,useMDXComponents:()=>d,withMDXComponents:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(39960),o=n(86341),a=n(67294);function l(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var c=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:l},"Filing a task"))},u=function(){return a.createElement("p",null,"Help us make the site even better by"," ",a.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return a.createElement(i,null,a.createElement(s,null),a.createElement(c,null),a.createElement(u,null))},p=function(){return a.createElement(i,null,a.createElement(c,null),a.createElement(u,null))};const m=function(){return(0,o.fbContent)({internal:a.createElement(d,null),external:a.createElement(p,null)})}},58308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>f});var r,o=n(83117),a=n(80102),l=(n(67294),n(3905)),i=n(68629),c=n(86341),s=["components"],u={id:"workflow",title:"Workflow",slug:"/guided-tour/workflow/",description:"Relay guide to workflow",keywords:["workflow","compiler"]},d=void 0,p={unversionedId:"guided-tour/workflow",id:"version-v14.0.0/guided-tour/workflow",title:"Workflow",description:"Relay guide to workflow",source:"@site/versioned_docs/version-v14.0.0/guided-tour/workflow.md",sourceDirName:"guided-tour",slug:"/guided-tour/workflow/",permalink:"/docs/v14.0.0/guided-tour/workflow/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/workflow.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1710894309,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"workflow",title:"Workflow",slug:"/guided-tour/workflow/",description:"Relay guide to workflow",keywords:["workflow","compiler"]}},m={},f=[],w=(r="FbWorkflow",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),g={toc:f};function y(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.mdx)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,l.mdx)(w,{mdxType:"FbWorkflow"})),(0,l.mdx)(c.OssOnly,{mdxType:"OssOnly"},(0,l.mdx)("p",null,"Before we can get started writing Relay code, we need to make sure to ",(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("a",{parentName:"strong",href:"../../getting-started/installation-and-setup/#set-up-relay-compiler"},"setup the Relay Compiler")),"."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("strong",{parentName:"p"},(0,l.mdx)("a",{parentName:"strong",href:"../../guides/compiler/"},"Relay Compiler"))," will analyze any ",(0,l.mdx)("inlineCode",{parentName:"p"},"graphql")," literals inside your Javascript code, and produce a set of artifacts that are used by Relay at runtime, when the application is running on the browser."),(0,l.mdx)("p",null,"So whenever we're developing Relay components, for example by writing ",(0,l.mdx)("a",{parentName:"p",href:"../rendering/fragments/"},"Fragments")," or ",(0,l.mdx)("a",{parentName:"p",href:"../rendering/queries/"},"Queries"),", we will need to run the Relay Compiler:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay\n")),(0,l.mdx)("p",null,"Or we can run it in watch mode, so the artifacts are re-generated as we update our source code:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn run relay --watch\n"))),(0,l.mdx)(i.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);