(self.webpackChunk=self.webpackChunk||[]).push([[15172],{3905:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,y=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},57547:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>m});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=["components"],l={id:"relay-compat",title:"Compatibility Mode",original_id:"relay-compat"},c=void 0,p={unversionedId:"relay-compat",id:"version-v10.0.1/relay-compat",isDocsHomePage:!1,title:"Compatibility Mode",description:"Migrating a Relay Classic app to Relay Modern doesn't require rewriting from",source:"@site/versioned_docs/version-v10.0.1/Modern-RelayCompat.md",sourceDirName:".",slug:"/relay-compat",permalink:"/docs/v10.0.1/relay-compat",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.1/Modern-RelayCompat.md",tags:[],version:"v10.0.1",lastUpdatedBy:"Stiopa Koltsov",lastUpdatedAt:1656341163,formattedLastUpdatedAt:"6/27/2022",frontMatter:{id:"relay-compat",title:"Compatibility Mode",original_id:"relay-compat"}},s=[{value:"API and Runtime",id:"api-and-runtime",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Migrating a Relay Classic app to Relay Modern doesn't require rewriting from\nscratch. Instead, convert one component at a time to the Relay Modern API while\ncontinuing to have a working app. Once all components have been converted, the\nsmaller and faster Relay Modern runtime can be used."),(0,a.mdx)("p",null,"During this migration, use the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/v10.0.1/relay-compat"},"Relay Compat")," tools and APIs to work with both Relay Classic and Relay Modern."),(0,a.mdx)("h2",{id:"api-and-runtime"},"API and Runtime"),(0,a.mdx)("p",null,"Relay can be thought of as two parts which work together: an API for building\ndata-driven components and a runtime which fetches and stores data from GraphQL\nto populate your app. Relay Modern brings both a new API and a new runtime."),(0,a.mdx)("p",null,"In order to incrementally convert an existing codebase, we will need to use the\nRelay Modern API while continuing to use the Relay Classic runtime until all\ncomponents are converted."),(0,a.mdx)("p",null,"Relay Compat is part of ",(0,a.mdx)("inlineCode",{parentName:"p"},"'react-relay'")," which allows you to do exactly this,\nproviding an identical API to Relay Modern, while allowing interoperability with\nboth runtimes."),(0,a.mdx)("h2",{id:"getting-started"},"Getting started"),(0,a.mdx)("p",null,"Require the Relay Compat API from ",(0,a.mdx)("inlineCode",{parentName:"p"},"'react-relay/compat'")," and use it as you would\nRelay Modern. The components using Relay Compat can be referred to by both other\nRelay Modern and Relay Classic components."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"const {createFragmentContainer, graphql} = require('react-relay/compat');\n\nclass TodoItem extends React.Component {\n  render() {\n    const item = this.props.item;\n    // ...\n  }\n}\n\nmodule.exports = createFragmentContainer(TodoItem, graphql`\n  fragment TodoItem_item on Todo {\n    text\n    isComplete\n  }\n`);\n")))}m.isMDXComponent=!0}}]);