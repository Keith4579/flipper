"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7233],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>c,mdx:()=>f,useMDXComponents:()=>p,withMDXComponents:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),m=function(e){return function(n){var t=p(n.components);return i.createElement(e,r({},n,{components:t}))}},p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(t),c=a,h=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return t?i.createElement(h,l(l({ref:n},s),{},{components:t})):i.createElement(h,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},13919:(e,n,t)=>{function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}t.d(n,{b:()=>i,Z:()=>a})},44996:(e,n,t)=>{t.r(n),t.d(n,{useBaseUrlUtils:()=>r,default:()=>o});var i=t(52263),a=t(13919);function r(){var e=(0,i.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,l=void 0!==o&&o,d=r.absolute,s=void 0!==d&&d;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(l)return n+t;var m=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+m:m}(r,t,e,n)}}}function o(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},37957:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>m,metadata:()=>p,toc:()=>c,default:()=>f});var i,a=t(83117),r=t(80102),o=(t(67294),t(3905)),l=t(44996),d=["components"],s={id:"ios",title:"Building an iOS Plugin"},m=void 0,p={unversionedId:"tutorial/ios",id:"tutorial/ios",isDocsHomePage:!1,title:"Building an iOS Plugin",description:"For the purpose of the tutorial, it's assumed you already have an existing iOS application in which you have a feed or list of items.",source:"@site/../docs/tutorial/ios.mdx",sourceDirName:"tutorial",slug:"/tutorial/ios",permalink:"/docs/tutorial/ios",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/tutorial/ios.mdx",tags:[],version:"current",frontMatter:{id:"ios",title:"Building an iOS Plugin"},sidebar:"main",previous:{title:"Introduction",permalink:"/docs/tutorial/intro"},next:{title:"Building an Android Plugin",permalink:"/docs/tutorial/android"}},c=[{value:"Creating a plugin",id:"creating-a-plugin",children:[],level:2},{value:"Registering your plugin",id:"registering-your-plugin",children:[],level:2},{value:"What next?",id:"what-next",children:[],level:2}],u=(i="FbInternalOnly",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),h={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,d);return(0,o.mdx)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("img",{alt:"iOS Tutorial App",src:(0,l.default)("img/ios-tutorial-app.png")}),(0,o.mdx)("p",null,"For the purpose of the tutorial, it's assumed you already have an existing iOS application in which you have a feed or list of items."),(0,o.mdx)("p",null,"Part of what makes Flipper so useful is allowing users to inspect the internals of their app. This part of the tutorial is concerned with how to make data available to the Flipper desktop app, which, for the sake of this tutorial, is called 'Sea-mammals' (an app based on sea mammals)."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"You can find the source code for this tutorial on ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/tree/c55bebd1be545c63dde93e143dd5c341dc2fd20b/iOS/Tutorial/Tutorial"},"GitHub"),"."))),(0,o.mdx)("h2",{id:"creating-a-plugin"},"Creating a plugin"),(0,o.mdx)(u,{mdxType:"FbInternalOnly"},(0,o.mdx)("div",{class:"warning"},"[FB-Only] Depending on the options selected during scaffolding (see the [introduction](/docs/tutorial/intro) page), some of the following code might already have been generated by `scarf`.")),(0,o.mdx)("p",null,"On iOS, a Flipper plugin is a class that implements the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper/blob/main/iOS/FlipperKit/FlipperPlugin.h"},"FlipperPlugin")," interface."),(0,o.mdx)("p",null,"The interface consists of four methods:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"(NSString *)identifier")," - specify a unique string so the JavaScript side knows where to talk to. This must match the name attribute in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"package.json"),", which is examined later in the tutorial."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"(void)didConnect:(id<FlipperConnection>)connection")," - this method is called when the desktop client connects and is ready to receive or send data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"(void)didDisconnect")," - sets connection to nil."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"(BOOL)runInBackground")," - unless this is true, only the currently selected plugin in the Flipper UI can communicate with the device. Its an optional method which you can override. The default value used is ",(0,o.mdx)("inlineCode",{parentName:"li"},"false"),".")),(0,o.mdx)("p",null,"The following code shows the implementation of these methods for the Sea-mammals app:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},'import Foundation\nimport FlipperKit\n\nclass SeaMammalsPlugin: NSObject, FlipperPlugin {\n  var connection: FlipperConnection? = nil\n  let mammals: [MarineMammal]\n\n  init(_ marineMammals: [MarineMammal]) {\n      mammals = marineMammals\n  }\n\n  func identifier() -> String! {\n    return "Sea-mammals"\n  }\n\n  func didConnect(_ connection: FlipperConnection!) {\n    self.connection = connection\n    for (index, mammal) in mammals.enumerated() {\n      connection.send("newRow", withParams: ["id": index, "title": mammal.name, "url": mammal.image.absoluteString])\n    }\n  }\n\n  func didDisconnect() {\n    connection = nil;\n  }\n}\n')),(0,o.mdx)("p",null,"There are two items of interest here: ",(0,o.mdx)("inlineCode",{parentName:"p"},"didConnect")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"connection.send"),", which sends a message to the desktop app and is identified with the name ",(0,o.mdx)("inlineCode",{parentName:"p"},"newRow"),"."),(0,o.mdx)("p",null,"For the Sea-mammals app, there is a static data source. However, in real life, you'll likely dynamically receive new data as the user interacts with the app. So, while in the Sea-mammals app, the data is sent all at once with ",(0,o.mdx)("inlineCode",{parentName:"p"},"didConnect"),", in real life, you'd set up a listener to call ",(0,o.mdx)("inlineCode",{parentName:"p"},'connection.send("newRow", params)')," as the dynamic data arrives."),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"In the above code, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"withParams")," are just dictionary that contains the data that Sea-mammals sends over the wire to the desktop app."))),(0,o.mdx)("h2",{id:"registering-your-plugin"},"Registering your plugin"),(0,o.mdx)("p",null,"Now all you need to do is let Flipper know about your new plugin. You do this by calling ",(0,o.mdx)("inlineCode",{parentName:"p"},"add")," on your ",(0,o.mdx)("inlineCode",{parentName:"p"},"FlipperClient"),", which is normally created at application startup:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"let client = FlipperClient.shared()\n// Add all sorts of other amazing plugins here ...\nclient?.add(SeaMammalsPlugin(MarineMammal.defaultList))\nclient?.start()\n")),(0,o.mdx)("h2",{id:"what-next"},"What next?"),(0,o.mdx)("p",null,"When starting your application, Flipper tells the desktop application about the plugin it supports (including 'Sea-mammals') and looks for a corresponding ",(0,o.mdx)("a",{parentName:"p",href:"/docs/tutorial/javascript"},"JavaScript plugin")," by the same name."))}f.isMDXComponent=!0}}]);