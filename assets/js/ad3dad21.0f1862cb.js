"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4556],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),u=function(e){return function(t){var n=c(t.components);return a.createElement(e,r({},t,{components:n}))}},c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,h=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39960:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(80102),i=n(67294),r=n(73727),o=n(52263),l=n(13919),s=n(10412),d=(0,i.createContext)({collectLink:function(){}}),u=n(44996),c=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var t,n,m=e.isNavLink,h=e.to,f=e.href,b=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,y=void 0===w||w,x=(0,a.Z)(e,p),k=(0,o.default)().siteConfig,N=k.trailingSlash,C=k.baseUrl,O=(0,u.useBaseUrlUtils)().withBaseUrl,T=(0,i.useContext)(d),j=h||f,P=(0,l.Z)(j),D=null==j?void 0:j.replace("pathname://",""),U=void 0!==D?(n=D,y&&function(e){return e.startsWith("/")}(n)?O(n):n):void 0;U&&P&&(U=(0,c.applyTrailingSlash)(U,{trailingSlash:N,baseUrl:C}));var S=(0,i.useRef)(!1),M=m?r.OL:r.rU,B=s.default.canUseIntersectionObserver,E=(0,i.useRef)();(0,i.useEffect)((function(){return!B&&P&&null!=U&&window.docusaurus.prefetch(U),function(){B&&E.current&&E.current.disconnect()}}),[E,U,B,P]);var R=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,_=!U||!P||R;return U&&P&&!R&&!v&&T.collectLink(U),_?i.createElement("a",Object.assign({href:U},j&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(M,Object.assign({},x,{onMouseEnter:function(){S.current||null==U||(window.docusaurus.preload(U),S.current=!0)},innerRef:function(e){var t,n;B&&e&&P&&(t=e,n=function(){null!=U&&window.docusaurus.prefetch(U)},E.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.current.unobserve(t),E.current.disconnect(),n())}))})),E.current.observe(t))},to:U||""},m&&{isActive:g,activeClassName:b}))}},13919:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,{b:()=>a,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>r,default:()=>o});var a=n(52263),i=n(13919);function r(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,l=void 0!==o&&o,s=r.absolute,d=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,a=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,r=e.split(/[#?]/)[0],o="/"===r||r===a?r:(i=r,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(r,o)}},18780:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(i).default}});var r=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(r).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},13184:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>u,toc:()=>c,default:()=>m});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(44996),l=(n(39960),["components"]),s={id:"js-table",title:"Building a Desktop Plugin - Showing a Table",sidebar_label:"Showing a Table"},d=void 0,u={unversionedId:"tutorial/js-table",id:"tutorial/js-table",isDocsHomePage:!1,title:"Building a Desktop Plugin - Showing a Table",description:"Building a Table",source:"@site/../docs/tutorial/js-table.mdx",sourceDirName:"tutorial",slug:"/tutorial/js-table",permalink:"/docs/tutorial/js-table",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/js-table.mdx",tags:[],version:"current",frontMatter:{id:"js-table",title:"Building a Desktop Plugin - Showing a Table",sidebar_label:"Showing a Table"},sidebar:"main",previous:{title:"Setup",permalink:"/docs/tutorial/js-setup"},next:{title:"Custom UI",permalink:"/docs/tutorial/js-custom"}},c=[{value:"Building a Table",id:"building-a-table",children:[{value:"Row Types",id:"row-types",children:[],level:3},{value:"Columns",id:"columns",children:[],level:3},{value:"Configuring the table",id:"configuring-the-table",children:[],level:3}],level:2},{value:"What next?",id:"what-next",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"building-a-table"},"Building a Table"),(0,r.mdx)("p",null,"One of the best ways to understand how your app works is to get access to its underlying data, which are used to display items on screen. An efficient way of achieving this is by showing the data in a table.\nThe data for Sea-mammals has been optimized for easy display in a table, which you can sort, filter and select items for more detailed information."),(0,r.mdx)("img",{alt:"Android Tutorial App",src:(0,o.default)("img/android-tutorial-desktop.png")}),(0,r.mdx)("p",null,"In this section of the tutorial, you'll be editing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"index.tsx")," file that was generated in the previous scaffolding step."),(0,r.mdx)("h3",{id:"row-types"},"Row Types"),(0,r.mdx)("p",null,"Start off by defining what your table rows look like:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"type Row = {\n  id: number,\n  title: string,\n  url: string,\n};\n")),(0,r.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,r.mdx)("h5",{parentName:"div"},(0,r.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,r.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.mdx)("div",{parentName:"div",className:"admonition-content"},(0,r.mdx)("p",{parentName:"div"},"It's important that you have some unique identifier for every row so that you know when something new was added to the table; the 'id' field is sufficient"))),(0,r.mdx)("h3",{id:"columns"},"Columns"),(0,r.mdx)("p",null,"Define which columns to show and how to display them:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"import {DataTableColumn} from 'flipper-plugin';\n\nconst columns: DataTableColumn<Row>[] = [\n  {\n    key: 'title',\n    width: 150,\n  },\n  {\n    key: 'url',\n    title: 'URL',\n  },\n];\n")),(0,r.mdx)("p",null,"The keys used here will show up again in the next step when building your rows, so keep them consistent.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"title")," defined for each column will show up as the header at the top of the table and will be default to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"key")," value if omitted."),(0,r.mdx)("p",null,"For the ",(0,r.mdx)("inlineCode",{parentName:"p"},"width"),", you can either choose a fixed number (pixels), a percentage, or leave it out to distribute the remaining available space."),(0,r.mdx)("h3",{id:"configuring-the-table"},"Configuring the table"),(0,r.mdx)("p",null,"You now have a Row type that describes the data you'll be storing and a description of the columns to display. With these components it's a trivial task to get a table showing data, including search / sort and a details view, as shown in the following code snippet:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-typescript"},"import {DataTableColumn, createTablePlugin} from 'flipper-plugin';\n\nmodule.exports = createTablePlugin<Row>({\n  columns,\n  method: 'newRow',\n  key: 'id',\n});\n")),(0,r.mdx)("p",null,"The above code snippet has the following properties:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"method")," - refers to the method that should be listened to to fill the table with data."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"'newRow'")," - refers back to the identifier used with ",(0,r.mdx)("inlineCode",{parentName:"li"},"connection.send")," to send the data to the Flipper desktop application in the previous step."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"key")," - ","[optional]"," - but by setting this property, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"'id'")," field is used as an identifier. As a result, once a ",(0,r.mdx)("inlineCode",{parentName:"li"},"newRow")," message arrives with an existing ",(0,r.mdx)("inlineCode",{parentName:"li"},"id"),", it will overwrite the old entry, rather than appending a new one.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"createTablePlugin")," API supports more options, which are documented in the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#createtableplugin"},"Dektop Plugin API")," page."),(0,r.mdx)("p",null,"And that's all there is to it!"),(0,r.mdx)("p",null,"Starting Flipper will now compile your plugin and connect to the native side. It's a good idea to start Flipper from the command line to see any potential errors. The console in the DevTools is a great source of information if something doesn't work as expected, too."),(0,r.mdx)("p",null,"The final result of this step can be seen at ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/seamammals/src/index_table.tsx"},"index_table.tsx"),"."),(0,r.mdx)("h2",{id:"what-next"},"What next?"),(0,r.mdx)("p",null,"You now have an interactive table that you can sort, filter and use to get additional information about the data you see on screen."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"createTablePlugin")," is a high-level abstraction that takes care of both connection management and a standardized UI for the most common scenario."),(0,r.mdx)("p",null,"For many cases, this is all you need. However, sometimes you may want to build something a bit more custom, which is covered in the ",(0,r.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-custom"},"Desktop Plugin - Custom UI page")))}m.isMDXComponent=!0}}]);