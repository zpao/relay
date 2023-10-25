"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[55609],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>s});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){return function(r){var n=d(r.components);return t.createElement(e,i({},r,{components:n}))}},d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},m=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?t.createElement(f,c(c({ref:r},l),{},{components:n})):t.createElement(f,c({ref:r},l))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7852:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var t=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],c={id:"legacy-apis",title:"Legacy APIs",slug:"/api-reference/legacy-apis/",description:"API reference for legacy APIs",keywords:["QueryRenderer","Container"]},p=void 0,l={unversionedId:"api-reference/legacy-apis/legacy-apis",id:"version-v16.0.0/api-reference/legacy-apis/legacy-apis",title:"Legacy APIs",description:"API reference for legacy APIs",source:"@site/versioned_docs/version-v16.0.0/api-reference/legacy-apis/legacy-apis.md",sourceDirName:"api-reference/legacy-apis",slug:"/api-reference/legacy-apis/",permalink:"/docs/api-reference/legacy-apis/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v16.0.0/api-reference/legacy-apis/legacy-apis.md",tags:[],version:"v16.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1698197440,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"legacy-apis",title:"Legacy APIs",slug:"/api-reference/legacy-apis/",description:"API reference for legacy APIs",keywords:["QueryRenderer","Container"]},sidebar:"docs",previous:{title:"GraphQL Directives",permalink:"/docs/api-reference/graphql-and-directives/"},next:{title:"Upgrading to Relay Hooks",permalink:"/docs/migration-and-compatibility/"}},s={},d=[],m={toc:d};function u(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"API references for our previous legacy APIs are available in our previous docs website:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/query-renderer"},(0,i.mdx)("inlineCode",{parentName:"a"},"QueryRenderer"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/fragment-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"Fragment Container"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/refetch-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"Refetch Container"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/pagination-container"},(0,i.mdx)("inlineCode",{parentName:"a"},"Pagination Container"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/mutations"},(0,i.mdx)("inlineCode",{parentName:"a"},"Mutations"))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://relay.dev/docs/en/v10.1.3/subscriptions"},(0,i.mdx)("inlineCode",{parentName:"a"},"Subscriptions")))))}u.isMDXComponent=!0}}]);