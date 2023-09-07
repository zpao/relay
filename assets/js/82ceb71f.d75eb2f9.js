"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[11547],{3905:(e,r,n)=>{n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>h,useMDXComponents:()=>c,withMDXComponents:()=>u});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){return function(r){var n=c(r.components);return t.createElement(e,o({},r,{components:n}))}},c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,y=u["".concat(i,".").concat(p)]||u[p]||m[p]||o;return n?t.createElement(y,l(l({ref:r},s),{},{components:n})):t.createElement(y,l({ref:r},s))}));function h(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},68629:(e,r,n)=>{n.d(r,{Z:()=>m});var t=n(39960),a=n(86341),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var r=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),r)}var d=function(){var e=o.useState(!1),r=e[0],n=e[1],t=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},u=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(d,null),o.createElement(u,null))},p=function(){return o.createElement(l,null,o.createElement(d,null),o.createElement(u,null))};const m=function(){return(0,a.fbContent)({internal:o.createElement(c,null),external:o.createElement(p,null)})}},88507:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>y});var t,a=n(83117),o=n(80102),i=(n(67294),n(3905)),l=n(68629),d=n(86341),s=["components"],u={id:"error-states",title:"Error States with ErrorBoundaries",slug:"/guided-tour/rendering/error-states/",description:"Relay guide to rendering error states",keywords:["rendering","error","boundary"]},c=void 0,p={unversionedId:"guided-tour/rendering/error-states",id:"version-v14.0.0/guided-tour/rendering/error-states",title:"Error States with ErrorBoundaries",description:"Relay guide to rendering error states",source:"@site/versioned_docs/version-v14.0.0/guided-tour/rendering/error-states.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/error-states/",permalink:"/docs/v14.0.0/guided-tour/rendering/error-states/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/rendering/error-states.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Pieter Vanderwerff",lastUpdatedAt:1694102456,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"error-states",title:"Error States with ErrorBoundaries",slug:"/guided-tour/rendering/error-states/",description:"Relay guide to rendering error states",keywords:["rendering","error","boundary"]},sidebar:"docs",previous:{title:"Relay Resolvers",permalink:"/docs/v14.0.0/guides/relay-resolvers/"},next:{title:"Reusing Cached Data",permalink:"/docs/v14.0.0/guided-tour/reusing-cached-data/"}},m={},y=[{value:"Retrying after an Error",id:"retrying-after-an-error",level:2},{value:"When using <code>useQueryLoader</code> / <code>loadQuery</code>",id:"when-using-usequeryloader--loadquery",level:3},{value:"When using <code>useLazyLoadQuery</code>",id:"when-using-uselazyloadquery",level:3},{value:"Accessing errors in GraphQL Responses",id:"accessing-errors-in-graphql-responses",level:2}],h=(t="FbErrorBoundary",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),f={toc:y};function g(e){var r=e.components,n=(0,o.Z)(e,s);return(0,i.mdx)("wrapper",(0,a.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)(h,{mdxType:"FbErrorBoundary"}),(0,i.mdx)("p",null,"As you may have noticed, we mentioned that using ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery")," will render data from a query that was (or is) being fetched from the server, but we didn't elaborate on how to render UI to show an error if an error occurred during fetch. We will cover that in this section."),(0,i.mdx)("p",null,"We can use ",(0,i.mdx)("a",{parentName:"p",href:"https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"},"Error Boundary")," components to catch errors that occur during render (due to a network error, or any kind of error), and render an alternative error UI when that occurs. The way it works is similar to how ",(0,i.mdx)("inlineCode",{parentName:"p"},"Suspense")," works, by wrapping a component tree in an error boundary, we can specify how we want to react when an error occurs, for example by rendering a fallback UI."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"},"Error boundaries")," are simply components that implement the static ",(0,i.mdx)("inlineCode",{parentName:"p"},"getDerivedStateFromError")," method:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const React = require('React');\n\ntype State = {error: ?Error};\n\nclass ErrorBoundary extends React.Component<Props, State> {\n  static getDerivedStateFromError(error): State {\n    // Set some state derived from the caught error\n    return {error: error};\n  }\n}\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst ErrorBoundary = require('ErrorBoundary');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\nconst SecondaryContent = require('./SecondaryContent.react');\n\nfunction App() {\n  return (\n    // Render an ErrorSection if an error occurs within\n    // MainContent or Secondary Content\n    <ErrorBoundary fallback={error => <ErrorUI error={error} />}>\n      <MainContent />\n      <SecondaryContent />\n    </ErrorBoundary>\n  );\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"We can use the Error Boundary to wrap subtrees and show a different UI when an error occurs within that subtree. When an error occurs, the specified ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback")," will be rendered instead of the content inside the boundary."),(0,i.mdx)("li",{parentName:"ul"},"Note that we can also control the granularity at which we render error UIs, by wrapping components at different levels with error boundaries. In this example, if any error occurs within ",(0,i.mdx)("inlineCode",{parentName:"li"},"MainContent")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"SecondaryContent"),", we will render an ",(0,i.mdx)("inlineCode",{parentName:"li"},"ErrorSection")," in place of the entire app content.")),(0,i.mdx)("h2",{id:"retrying-after-an-error"},"Retrying after an Error"),(0,i.mdx)("h3",{id:"when-using-usequeryloader--loadquery"},"When using ",(0,i.mdx)("inlineCode",{parentName:"h3"},"useQueryLoader")," / ",(0,i.mdx)("inlineCode",{parentName:"h3"},"loadQuery")),(0,i.mdx)("p",null,"When using ",(0,i.mdx)("inlineCode",{parentName:"p"},"useQueryLoader"),"/",(0,i.mdx)("inlineCode",{parentName:"p"},"loadQuery")," to fetch a query, in order to retry after an error has occurred, you can call ",(0,i.mdx)("inlineCode",{parentName:"p"},"loadQuery")," again and pass the ",(0,i.mdx)("em",{parentName:"p"},"new")," query reference to ",(0,i.mdx)("inlineCode",{parentName:"p"},"usePreloadedQuery"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * ErrorBoundaryWithRetry.react.js\n */\n\nconst React = require('React');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nclass ErrorBoundaryWithRetry extends React.Component<Props, State> {\n  state = {error: null};\n\n  static getDerivedStateFromError(error): State {\n    return {error: error};\n  }\n\n  _retry = () => {\n    // This ends up calling loadQuery again to get and render\n    // a new query reference\n    this.props.onRetry();\n    this.setState({\n      // Clear the error\n      error: null,\n    });\n  }\n\n  render() {\n    const {children, fallback} = this.props;\n    const {error} = this.state;\n    if (error) {\n      if (typeof fallback === 'function') {\n        return fallback({error, retry: this._retry});\n      }\n      return fallback;\n    }\n    return children;\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When an error occurs, we render the provided ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback"),"."),(0,i.mdx)("li",{parentName:"ul"},"When ",(0,i.mdx)("inlineCode",{parentName:"li"},"retry")," is called, we will clear the error, and call ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," again. This will fetch the query again and provide us a new query reference, which we can then pass down to ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),".")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst ErrorBoundaryWithRetry = require('ErrorBoundaryWithRetry');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\n\nconst query = require('__generated__/MainContentQuery.graphql');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nfunction App(props) {\n  // E.g., initialQueryRef provided by router\n  const [queryRef, loadQuery] = useQueryLoader(query, props.initialQueryRef);\n\n  return (\n    <ErrorBoundaryWithRetry\n      // On retry we call loadQuery again, which will update\n      // the value of queryRef from useQueryLoader with a new\n      // fresh query reference\n      onRetry={() => loadQuery(/* ... */)}\n      fallback={({error, retry}) =>\n        <>\n          <ErrorUI error={error} />\n          {/* Render a button to retry; this will attempt to re-render the\n          content inside the boundary, i.e. the query component */}\n          <Button onPress={retry}>Retry</Button>\n        </>\n      }>\n      {/* The value of queryRef will be updated after calling\n      loadQuery again */}\n      <MainContent queryRef={queryRef} />\n    </ErrorBoundaryWithRetry>\n  );\n}\n\n/**\n * MainContent.react.js\n */\nfunction MainContent(props) {\n  const data = usePreloadedQuery(\n    graphql`...`,\n    props.queryRef\n  );\n\n  return (/* ... */);\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The sample Error Boundary in this example code will provide a ",(0,i.mdx)("inlineCode",{parentName:"li"},"retry")," function to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback")," which we can use to clear the error, re-load the query, and re-render with a new query ref that we can pass to the component that uses ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),". That component will consume the new query ref and suspend if necessary on the new network request.")),(0,i.mdx)("h3",{id:"when-using-uselazyloadquery"},"When using ",(0,i.mdx)("inlineCode",{parentName:"h3"},"useLazyLoadQuery")),(0,i.mdx)("p",null,"When using ",(0,i.mdx)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," to fetch a query, in order to retry after an error has occurred, you can attempt to re-mount ",(0,i.mdx)("em",{parentName:"p"},"and")," re-evaluate the query component by passing it a new ",(0,i.mdx)("inlineCode",{parentName:"p"},"fetchKey"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * ErrorBoundaryWithRetry.react.js\n */\n\nconst React = require('React');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nclass ErrorBoundaryWithRetry extends React.Component<Props, State> {\n  state = {error: null, fetchKey: 0};\n\n  static getDerivedStateFromError(error): State {\n    return {error: error, fetchKey: 0};\n  }\n\n  _retry = () => {\n    this.setState(prev => ({\n      // Clear the error\n      error: null,\n      // Increment and set a new fetchKey in order\n      // to trigger a re-evaluation and refetching\n      // of the query using useLazyLoadQuery\n      fetchKey: prev.fetchKey + 1,\n    }));\n  }\n\n  render() {\n    const {children, fallback} = this.props;\n    const {error, fetchKey} = this.state;\n    if (error) {\n      if (typeof fallback === 'function') {\n        return fallback({error, retry: this._retry});\n      }\n      return fallback;\n    }\n    return children({fetchKey});\n  }\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"When an error occurs, we render the provided ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback"),"."),(0,i.mdx)("li",{parentName:"ul"},"When ",(0,i.mdx)("inlineCode",{parentName:"li"},"retry")," is called, we will clear the error, and increment our ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey")," which we can then pass down to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),". This will make it so we re-render the component that uses ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," with a new ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey"),", ensuring that the query is refetched upon the new call to ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery"),".")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n */\n\nconst ErrorBoundaryWithRetry = require('ErrorBoundaryWithRetry');\nconst React = require('React');\n\nconst MainContent = require('./MainContent.react');\n\n// NOTE: This is NOT actual production code;\n// it is only used to illustrate example\nfunction App() {\n  return (\n    <ErrorBoundaryWithRetry\n      fallback={({error, retry}) =>\n        <>\n          <ErrorUI error={error} />\n          {/* Render a button to retry; this will attempt to re-render the\n            content inside the boundary, i.e. the query component */}\n          <Button onPress={retry}>Retry</Button>\n        </>\n      }>\n      {({fetchKey}) => {\n        // If we have retried, use the new `retryQueryRef` provided\n        // by the Error Boundary\n        return <MainContent fetchKey={fetchKey} />;\n      }}\n    </ErrorBoundaryWithRetry>\n  );\n}\n\n/**\n * MainContent.react.js\n */\nfunction MainContent(props) {\n  const data = useLazyLoadQuery(\n    graphql`...`,\n    variables,\n    {fetchKey: props.fetchKey}\n  );\n\n  return (/* ... */);\n}\n")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The sample Error Boundary in this example code will provide a ",(0,i.mdx)("inlineCode",{parentName:"li"},"retry")," function to the ",(0,i.mdx)("inlineCode",{parentName:"li"},"fallback")," which we can use to clear the error and re-render ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," with a new ",(0,i.mdx)("inlineCode",{parentName:"li"},"fetchKey"),". This will cause the query to be re-evaluated and refetched, and ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery")," start a new network request and suspend.")),(0,i.mdx)("h2",{id:"accessing-errors-in-graphql-responses"},"Accessing errors in GraphQL Responses"),(0,i.mdx)(d.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"By default, internally at fb, Relay will ",(0,i.mdx)("em",{parentName:"p"},"only")," surface errors to React that are returned in the top-level ",(0,i.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/validation/"},(0,i.mdx)("inlineCode",{parentName:"a"},"errors")," field")," if they are ether:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"of ",(0,i.mdx)("inlineCode",{parentName:"li"},"CRITICAL")," severity,"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"or")," if the top-level ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," field wasn't returned in the response."))),(0,i.mdx)("p",null,"If you wish to access error information in your application to display user friendly messages, the recommended approach is to model and expose the error information as part of your GraphQL schema."),(0,i.mdx)("p",null,"For example, you could expose a field in your schema that returns either the expected result, or an Error object if an error occurred while resolving that field (instead of returning null):"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"type Error {\n  # User friendly message\n  message: String!\n}\n\ntype Foo {\n  bar: Result | Error\n}\n")),(0,i.mdx)(l.Z,{mdxType:"DocsRating"}))}g.isMDXComponent=!0}}]);