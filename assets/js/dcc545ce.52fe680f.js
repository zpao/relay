(self.webpackChunk=self.webpackChunk||[]).push([[68093],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),h=o,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55574:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>m});var r=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],s={id:"network-layer",title:"Network Layer",original_id:"network-layer"},c=void 0,l={unversionedId:"network-layer",id:"version-v10.1.3/network-layer",isDocsHomePage:!1,title:"Network Layer",description:"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the NetworkLayer interface when creating an instance of a Relay Environment. The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration.",source:"@site/versioned_docs/version-v10.1.3/Modern-NetworkLayer.md",sourceDirName:".",slug:"/network-layer",permalink:"/docs/v10.1.3/network-layer",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.1.3/Modern-NetworkLayer.md",version:"v10.1.3",lastUpdatedBy:"David Tolnay",lastUpdatedAt:1631159380,formattedLastUpdatedAt:"9/9/2021",frontMatter:{id:"network-layer",title:"Network Layer",original_id:"network-layer"},sidebar:"version-v10.1.3/docs",previous:{title:"Relay Environment",permalink:"/docs/v10.1.3/relay-environment"},next:{title:"QueryRenderer",permalink:"/docs/v10.1.3/query-renderer"}},p=[{value:"Caching",id:"caching",children:[]},{value:"Custom open-source implementations",id:"custom-open-source-implementations",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to know how to access your GraphQL server, Relay Modern requires developers to provide an object implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"NetworkLayer")," interface when creating an instance of a ",(0,a.kt)("a",{parentName:"p",href:"./relay-environment"},"Relay Environment"),". The environment uses this network layer to execute queries, mutations, and (if your server supports them) subscriptions. This allows developers to use whatever transport (HTTP, WebSockets, etc) and authentication is most appropriate for their application, decoupling the environment from the particulars of each application's network configuration."),(0,a.kt)("p",null,"Currently the easiest way to create a network layer is via a helper from the ",(0,a.kt)("inlineCode",{parentName:"p"},"relay-runtime")," package:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Environment,\n  Network,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\n\n// Define a function that fetches the results of an operation (query/mutation/etc)\n// and returns its results as a Promise:\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n  uploadables,\n) {\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      // Add authentication and other headers here\n      'content-type': 'application/json'\n    },\n    body: JSON.stringify({\n      query: operation.text, // GraphQL text from input\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  });\n}\n\n// Create a network layer from the fetch function\nconst network = Network.create(fetchQuery);\nconst store = new Store(new RecordSource())\n\nconst environment = new Environment({\n  network,\n  store\n  // ... other options\n});\n\nexport default environment;\n")),(0,a.kt)("p",null,"Note that this is a basic example to help you get started. This example could be extended with additional features such as request/response caching (enabled e.g. when ",(0,a.kt)("inlineCode",{parentName:"p"},"cacheConfig.force")," is false) and uploading form data for mutations (the ",(0,a.kt)("inlineCode",{parentName:"p"},"uploadables")," parameter)."),(0,a.kt)("h2",{id:"caching"},"Caching"),(0,a.kt)("p",null,"Relay modern makes no assumptions about what to cache and will garbage collect any data that is no longer referenced."),(0,a.kt)("p",null,"You have to implement your own cache strategy. A simple solution is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryResponseCache")," (an in-memory cache):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Environment,\n  Network,\n  QueryResponseCache,\n  RecordSource,\n  Store,\n} from 'relay-runtime';\n\nconst oneMinute = 60 * 1000;\nconst cache = new QueryResponseCache({ size: 250, ttl: oneMinute });\n\nfunction fetchQuery(\n  operation,\n  variables,\n  cacheConfig,\n) {\n  const queryID = operation.text;\n  const isMutation = operation.operationKind === 'mutation';\n  const isQuery = operation.operationKind === 'query';\n  const forceFetch = cacheConfig && cacheConfig.force;\n\n  // Try to get data from cache on queries\n  const fromCache = cache.get(queryID, variables);\n  if (\n    isQuery &&\n    fromCache !== null &&\n    !forceFetch\n  ) {\n    return fromCache;\n  }\n\n  // Otherwise, fetch data from server\n  return fetch('/graphql', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: operation.text,\n      variables,\n    }),\n  }).then(response => {\n    return response.json();\n  }).then(json => {\n    // Update cache on queries\n    if (isQuery && json) {\n      cache.set(queryID, variables, json);\n    }\n    // Clear cache on mutations\n    if (isMutation) {\n      cache.clear();\n    }\n\n    return json;\n  });\n}\n\nconst environment = new Environment({\n  network: Network.create(fetchQuery),\n  store: new Store(new RecordSource()),\n});\n\nexport default environment;\n")),(0,a.kt)("h2",{id:"custom-open-source-implementations"},"Custom open-source implementations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/relay-tools/react-relay-network-modern"},"react-relay-network-modern"))," on ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-relay-network-modern"},"npm")," - is a Network Layer for Relay Modern which has built-in highly customizable middlewares for commonly used scenarios: batching query requests, caching, authentication, request retrying, logging. Moreover, you may write your own middlewares with custom logic."))}m.isMDXComponent=!0}}]);