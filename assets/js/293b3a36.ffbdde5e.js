"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[70325],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){return function(t){var a=c(t.components);return n.createElement(e,o({},t,{components:a}))}},c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(i,".").concat(p)]||u[p]||h[p]||o;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},65488:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(83117),r=a(67294),o=a(34334),i=a(72389),s=a(67392),l=a(7094),d=a(12466);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a,i=e.lazy,p=e.block,h=e.defaultValue,m=e.values,f=e.groupId,g=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(t=null!=h?h:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.U)(),q=x.tabGroupChoices,T=x.setTabGroupChoices,N=(0,r.useState)(w),k=N[0],O=N[1],I=[],R=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var L=q[f];null!=L&&L!==k&&v.some((function(e){return e.value===L}))&&O(L)}var j=function(e){var t=e.currentTarget,a=I.indexOf(t),n=v[a].value;n!==k&&(R(t),O(n),null!=f&&T(f,String(n)))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var o,i=I.indexOf(e.currentTarget)-1;a=null!=(o=I[i])?o:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},v.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function h(e){var t=(0,i.default)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},49998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=a(65488),s=a(85162),l=["components"],d={},u="GraphQL and Relay",c={unversionedId:"tutorial/graphql",id:"tutorial/graphql",title:"GraphQL and Relay",description:"This section is an overview to situate Relay in relation to GraphQL, React, and the other parts of the stack. Don\u2019t worry about understanding every detail, just try to get the gist and the proceed to the next section to start working with code. Much more specifics will be explained as we go through working examples throughout the tutorial.",source:"@site/docs/tutorial/graphql.md",sourceDirName:"tutorial",slug:"/tutorial/graphql",permalink:"/docs/next/tutorial/graphql",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/tutorial/graphql.md",tags:[],version:"current",lastUpdatedBy:"Pieter Vanderwerff",lastUpdatedAt:1694102456,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Tutorial Intro",permalink:"/docs/next/tutorial/intro"},next:{title:"Query Basics",permalink:"/docs/next/tutorial/queries-1"}},p={},h=[{value:"Summary",id:"summary",level:2}],m={toc:h};function f(e){var t=e.components,d=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"graphql-and-relay"},"GraphQL and Relay"),(0,o.mdx)("p",null,"This section is an overview to situate Relay in relation to GraphQL, React, and the other parts of the stack. Don\u2019t worry about understanding every detail, just try to get the gist and the proceed to the next section to start working with code. Much more specifics will be explained as we go through working examples throughout the tutorial."),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"GraphQL is a language for querying and modifying data on servers. The unique thing about GraphQL is that rather than having a fixed set of API endpoints, your server provides a palette of options that the client can use to request any combination of data that it may need. This allows front-end developers to move more quickly because there is no need to write and deploy new endpoints as data requirements change. It also means that when a new version of the client is released, it can request just the data it needs, without extra fields leftover for compatibility with older versions."),(0,o.mdx)("p",null,"GraphQL provides a unified interface for querying data across any kind of back-end. Whether your data is in a relational SQL database, a graph-oriented database, or an armada of microservices, a GraphQL server can collect the data from multiple back-ends and send it to the client in a single response, which is more efficient than issuing separate queries to each service from the client."),(0,o.mdx)("p",null,"In a traditional HTTP API, there are URLs that each respond with a fixed set of information:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'Request:\nGET /person?id=24601\n\nResponse:\n{"id": "24601", "name": "Jean Valjean", "age": 64, "occupation": "Mayor"}\n')),(0,o.mdx)("p",null,"In GraphQL, the client asks for the specific information that it wants, and the server responds with just the information that was requested:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'Request:\nquery {\n  person(id: "24601") {\n    name\n    occupation\n  }\n}\n\nResponse:\n{\n  "person": {\n    "name": "Jean Valjean",\n    "occupation": "Mayor"\n  }\n}\n')),(0,o.mdx)("p",null,"Notice that only the specific fields that the client requested were included in the response."),(0,o.mdx)("p",null,"As the name suggests, GraphQL organizes data into a ",(0,o.mdx)("em",{parentName:"p"},"graph"),". The graph consists of ",(0,o.mdx)("em",{parentName:"p"},"nodes")," (like objects or records) and ",(0,o.mdx)("em",{parentName:"p"},"edges")," (pointers from one node to another):"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Nodes with fields connected by edges",src:a(41855).Z,width:"2420",height:"1800"})),(0,o.mdx)("p",null,"GraphQL lets you follow those edges from one node to another and ask for information about each node that you visit. For example, here we go from a person to their city and get information about the city:"),(0,o.mdx)(i.default,{mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"1",label:"Request",default:!0,mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'query {\n  person(id: "24601") {\n    name\n    occupation\n    location {\n      name\n      population\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Query diagram",src:a(20186).Z,width:"990",height:"612"}))),(0,o.mdx)(s.default,{value:"2",label:"Response",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},'{\n  "person": {\n    "name": "Jean Valjean",\n    "occupation": "Mayor",\n    "location": {\n      "name": "Montreuil-sur-Mer",\n      "population": 1935\n    }\n  }\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"Response diagram",src:a(44162).Z,width:"1192",height:"638"})))),(0,o.mdx)("p",null,"This means we can retrieve information about a whole panoply of objects all in one query \u2014 in others words, you can efficiently get all the data for a screen in a single request instead of sending many requests one after the other. But you achieve this without writing and maintaining a separate endpoint for each screen in your UI."),(0,o.mdx)("p",null,"Instead, your GraphQL server provides a ",(0,o.mdx)("em",{parentName:"p"},"schema"),", which describes what kinds of nodes there are, how they\u2019re connected, and what information each node contains. Then, you pick and choose from this schema to select the information you want."),(0,o.mdx)("p",null,"The example app in this tutorial is a newsfeed app, so its schema consists of types such as"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Story"),", which represents a newsfeed story \u2014 it has fields such as its title, an image, and an ",(0,o.mdx)("em",{parentName:"li"},"edge")," to the person or organization who posted it"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Person"),", with information such as their name, email, and a list of friends (which are edges to other Persons)."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Viewer"),", which represents the person viewing the app and has information like their list of newsfeed stories"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Image"),", which has a URL for the image itself as well as an ",(0,o.mdx)("inlineCode",{parentName:"li"},"alt")," text description.")),(0,o.mdx)("p",null,"The GraphQL language includes a type system and language for specifying the schema. Here\u2019s a snippet from the schema definition for our example app \u2014 don\u2019t worry about every detail, it\u2019s just to give you a general idea:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"// A newsfeed story. It has fields, some of which are scalars (e.g. strings\n// and numbers) and some that are edges that point to other nodes in the graph,\n// such as the 'thumbnail' and 'poster' fields:\ntype Story {\n  id: ID!\n  category: Category\n  title: String\n  summary: String\n  thumbnail: Image\n  poster: Actor\n}\n\n// An Actor is an entity that can do something on the site. This is an\n// interface that multiple different types can implement, in this case\n// Person and Organization:\ninterface Actor {\n  id: ID!\n  name: String\n  profilePicture: Image\n}\n\n// This is a specific type that implements that interface:\ntype Person implements Actor {\n  id: ID!\n  name: String\n  email: String\n  profilePicture: Image\n  location: Location\n}\n\n// The schema also lets you define enums, such as the category\n// of a newsfeed story:\nenum Category {\n  EDUCATION\n  NEWS\n  COOKING\n}\n")),(0,o.mdx)("p",null,"Besides queries, GraphQL also lets you send ",(0,o.mdx)("em",{parentName:"p"},"mutations")," that ask the server to update its data. If queries are analogous to HTTP GET requests, then mutations are the equivalent of POST requests. Like POSTs, they let the server respond with updated data. GraphQL also has ",(0,o.mdx)("em",{parentName:"p"},"subscriptions")," which allow for an open connection for realtime updates."),(0,o.mdx)("p",null,"(GraphQL is usually implemented over HTTP, so queries and mutations are not only ",(0,o.mdx)("em",{parentName:"p"},"analogous")," to GET and POST, but may be sent as such as well.)"),(0,o.mdx)("hr",null),(0,o.mdx)("p",null,"Now that we\u2019ve talked about GraphQL, let\u2019s talk about Relay. It has a few different parts and pieces that we\u2019ll briefly go over before diving into the code."),(0,o.mdx)("p",null,"Relay is a data management library for the client that\u2019s oriented around GraphQL, but uses it in a very specific way that gets the most benefit from it."),(0,o.mdx)("p",null,"For the best performance, you want your app to issue a single request at the beginning of each screen or page instead of having individual components issue their own requests. But the problem with that is that it couples components and screens together, creating a big maintenance problem: If you need some additional data in a specific component, you have to find every screen where that component is used and add the new field to that screen\u2019s query. On the other hand, if you remove the need for a particular field, you have to remove that field from every query again \u2014 but this time, are you sure the field isn\u2019t still in use by some ",(0,o.mdx)("em",{parentName:"p"},"other")," component? It becomes very difficult to maintain these big screen-wide queries."),(0,o.mdx)("p",null,"Relay\u2019s unique strength is to avoid this tradeoff by letting each component declare its own data requirements locally, but then stitching those requirements together into larger queries. That way you get both performance and maintainability."),(0,o.mdx)("p",null,"Relay does this with a ",(0,o.mdx)("em",{parentName:"p"},"compiler")," that scans your JavaScript code for fragments of GraphQL, and then stitches those fragments together into complete queries."),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"The Relay Compiler combines fragments into a query",src:a(24866).Z,width:"2506",height:"1780"})),(0,o.mdx)("p",null,"Besides the compiler, Relay has runtime code that manages the fetching and processing of GraphQL. It maintains a local cache of all the data that has been retrieved (called the ",(0,o.mdx)("em",{parentName:"p"},"Store"),"), and vends out to each component the data that belongs to it:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"The Relay Runtime fetches the query and vends out the appropriate data to each component according to its fragment",src:a(26473).Z,width:"2976",height:"1628"})),(0,o.mdx)("p",null,"The advantage of having a centralized Store is that it lets you keep your data consistent when it\u2019s updated. For instance, if your UI has a way for somebody to edit their name, then you can make that update in a single place and every component that displays that person\u2019s name will see the new information, even if they\u2019re on different screens and therefore used different queries to initially retrieve the data. This is because Relay ",(0,o.mdx)("em",{parentName:"p"},"normalizes")," the data as it comes in, meaning that it merges all the data it sees for a single graph node into one place, so it doesn\u2019t have multiple copies of the same node."),(0,o.mdx)("p",null,"Indeed, Relay doesn\u2019t just query data, it provides for the entire lifecycle of querying and updating, including support for optimistic updates and rollbacks. You can paginate, refresh data \u2014 all of the basic operations you\u2019ll need to create a UI. Whenever data in the Store is updated, Relay efficiently re-renders just those components that are displaying that particular data."),(0,o.mdx)("h2",{id:"summary"},"Summary"),(0,o.mdx)("p",null,"GraphQL is a language for modeling data as a graph and querying that data from a server (as well as updating the data). Relay is a React-based client library for GraphQL that lets you build up queries from individual fragments that are co-located with each React component. Once the data has been queried, Relay maintains consistency and re-renders components as the data is updated."))}f.isMDXComponent=!0},24866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphql-compiler-combines-fragments-efd0a81c2506eff9c4c9f0370cce14b4.png"},41855:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphql-graph-detail-f6e827091095e5065533a8da93632e1c.png"},26473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphql-relay-runtime-fetches-query-4f0734093c2d277f1dbe5135c5a519ba.png"},20186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphql-request-51846e0de74f1eb6c3bcc2f5e4c6d22b.png"},44162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graphql-response-0e5fa1ece4cac735173d89a8cfcd5c73.png"}}]);