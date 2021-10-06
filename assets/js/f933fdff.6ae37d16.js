"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9558,9841],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>m,useMDXComponents:()=>p,withMDXComponents:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){return function(t){var r=p(t.components);return n.createElement(e,i({},t,{components:r}))}},p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59618:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>f});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=r(44996),a=["components"],l={},c=void 0,u={type:"mdx",permalink:"/docs/plugins/device-logs/overview",source:"@site/src/embedded-pages/docs/plugins/device-logs/overview.mdx"},p=[{value:"Filtering",id:"filtering",children:[]},{value:"Expression watcher",id:"expression-watcher",children:[]}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The Logs plugin shows device logs without any additional setup. This is a device plugin, meaning that it is not tied to any specific app and there is no additional setup needed to see the logs."),(0,i.mdx)("img",{alt:"Logs plugin",src:(0,s.default)("img/logs.png")}),(0,i.mdx)("h2",{id:"filtering"},"Filtering"),(0,i.mdx)("p",null,"The search bar can be used to search for logs and filter for certain types. From the context menu on the table headers you can show more infos like timestamp, PID or TID. Click on a tag, PID or TID in the table to filter only for logs with the same value."),(0,i.mdx)("h2",{id:"expression-watcher"},"Expression watcher"),(0,i.mdx)("p",null,"The expression watcher in the sidebar can be used to watch for certain logs to happen and count how often they occur. An expression can be a simple string, or a regular expression which is matched against the logs."),(0,i.mdx)("p",null,"When the notify checkbox is enabled, Flipper will send notifications once the log is happening. This lets you know when the watcher triggered, even if Flipper is in the background."))}f.isMDXComponent=!0},13919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},44996:(e,t,r)=>{r.r(t),r.d(t,{useBaseUrlUtils:()=>i,default:()=>s});var n=r(52263),o=r(13919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,a=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(a)return t+r;var u=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+u:u}(i,r,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},56652:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>p,default:()=>f});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=r(59618),a=["components"],l={id:"device-logs",title:"Logs Plugin",sidebar_label:"Logs",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/logs/docs/overview.mdx"},c=void 0,u={unversionedId:"features/plugins/device-logs",id:"features/plugins/device-logs",isDocsHomePage:!1,title:"Logs Plugin",description:"",source:"@site/../docs/features/plugins/device-logs.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/device-logs",permalink:"/docs/features/plugins/device-logs",editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/logs/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"device-logs",title:"Logs Plugin",sidebar_label:"Logs",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/logs/docs/overview.mdx"},sidebar:"features",previous:{title:"Databases",permalink:"/docs/features/plugins/databases"},next:{title:"Images",permalink:"/docs/features/plugins/fresco"}},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(s.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);