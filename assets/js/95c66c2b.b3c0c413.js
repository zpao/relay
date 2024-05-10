"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46091],{3905:(e,n,r)=>{r.r(n),r.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=a.createContext({}),d=function(e){return function(n){var r=m(n.components);return a.createElement(e,l({},n,{components:r}))}},m=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=m(r),c=t,y=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return r?a.createElement(y,o(o({ref:n},s),{},{components:r})):a.createElement(y,o({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},60811:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=r(83117),t=r(80102),l=(r(67294),r(3905)),i=["components"],o={id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},p=void 0,s={unversionedId:"installation-and-setup",id:"version-v1.5.0/installation-and-setup",title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v1.5.0/Introduction-InstallationAndSetup.md",sourceDirName:".",slug:"/installation-and-setup",permalink:"/relay/docs/v1.5.0/installation-and-setup",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.5.0/Introduction-InstallationAndSetup.md",tags:[],version:"v1.5.0",lastUpdatedBy:"Paul O\u2019Shannessy",lastUpdatedAt:1715378297,formattedLastUpdatedAt:"May 10, 2024",frontMatter:{id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},sidebar:"version-v1.5.0/docs",previous:{title:"Prerequisites",permalink:"/relay/docs/v1.5.0/prerequisites"},next:{title:"Quick Start Guide",permalink:"/relay/docs/v1.5.0/quick-start-guide"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",level:2},{value:"Set up relay-compiler",id:"set-up-relay-compiler",level:2},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",level:2}],c={toc:m};function u(e){var n=e.components,r=(0,t.Z)(e,i);return(0,l.mdx)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"installation"},"Installation"),(0,l.mdx)("p",null,"Install React and Relay using ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add react react-dom react-relay\n\n")),(0,l.mdx)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,l.mdx)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev babel-plugin-relay graphql\n\n")),(0,l.mdx)("p",null,"Add ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,l.mdx)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,l.mdx)("p",null,"Please note that the ",(0,l.mdx)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,l.mdx)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#plugin-preset-ordering"},"documentation on this topic"),"."),(0,l.mdx)("p",null,"See the ",(0,l.mdx)("a",{parentName:"p",href:"/relay/docs/v1.5.0/migration-setup"},"Migration Setup")," guide if upgrading an existing Relay app."),(0,l.mdx)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,l.mdx)("p",null,"Relay's ahead-of-time compilation requires the ",(0,l.mdx)("a",{parentName:"p",href:"/relay/docs/v1.5.0/graphql-in-relay#relay-compiler"},"Relay Compiler"),", which you can install via ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev relay-compiler graphql\n\n")),(0,l.mdx)("p",null,"This installs the bin script ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,l.mdx)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),(0,l.mdx)("p",null,"Then, after making edits to your application files, just run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay\n\n")),(0,l.mdx)("p",null,"Alternatively, you can pass the ",(0,l.mdx)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,l.mdx)("strong",{parentName:"p"},"Note:")," Requires ",(0,l.mdx)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay -- --watch\n\n")),(0,l.mdx)("p",null,"For more details, check out our ",(0,l.mdx)("a",{parentName:"p",href:"/relay/docs/v1.5.0/graphql-in-relay#relay-compiler"},"Relay Compiler docs"),"."),(0,l.mdx)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,l.mdx)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,l.mdx)("p",null,"However, Relay Modern expects modern JavaScript global types (",(0,l.mdx)("inlineCode",{parentName:"p"},"Map"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"Set"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"Promise"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,l.mdx)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"babel-polyfill"),"."),(0,l.mdx)("p",null,"A polyfilled environment for Relay using ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")))}u.isMDXComponent=!0}}]);