(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4178)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,h=e.priority,v=void 0!==h&&h,j=e.loading,L=e.lazyRoot,O=void 0===L?null:L,S=e.lazyBoundary,N=e.className,M=e.quality,A=e.width,R=e.height,E=e.style,P=e.objectFit,I=e.objectPosition,B=e.onLoadingComplete,T=e.placeholder,H=void 0===T?"empty":T,V=e.blurDataURL,q=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=l.useContext(d.ImageConfigContext),Y=l.useMemo((function(){var e=x||D||s.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:n})}),[D]),F=q,U=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(U=F.layout),delete F.layout);var W=C;if("loader"in F){if(F.loader){var K=F.loader;W=function(e){e.config;var t=m(e,["config"]);return K(t)}}delete F.loader}var Z="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var G=y(t)?t.default:t;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(V=V||G.blurDataURL,Z=G.src,(!U||"fill"!==U)&&(R=R||G.height,A=A||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}var J=!v&&("lazy"===j||"undefined"===typeof j);((t="string"===typeof t?t:Z).startsWith("data:")||t.startsWith("blob:"))&&(f=!0,J=!1);b.has(t)&&(J=!1);g&&(f=!0);var Q,X=i(l.useState(!1),2),$=X[0],ee=X[1],te=i(u.useIntersection({rootRef:O,rootMargin:S||"200px",disabled:!J}),3),ne=te[0],re=te[1],ie=te[2],oe=!J||re,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ce=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:I},ue=z(A),de=z(R),fe=z(M);0;var pe=Object.assign({},E,se),he="blur"!==H||$?{}:{backgroundSize:P||"cover",backgroundPosition:I||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(V,'")')};if("fill"===U)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof ue&&"undefined"!==typeof de){var me=de/ue,ve=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===U?(ae.display="block",ae.position="relative",ce=!0,le.paddingTop=ve):"intrinsic"===U?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",ce=!0,le.maxWidth="100%",Q="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ue,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===U&&(ae.display="inline-block",ae.position="relative",ae.width=ue,ae.height=de)}else 0;var ge={src:w,srcSet:void 0,sizes:void 0};oe&&(ge=_({config:Y,src:t,unoptimized:f,layout:U,width:ue,quality:fe,sizes:n,loader:W}));var xe=t;0;var be;0;var we=(r(be={},"imagesrcset",ge.srcSet),r(be,"imagesizes",ge.sizes),be),je=l.default.useLayoutEffect,ye=l.useRef(B),_e=l.useRef(t);l.useEffect((function(){ye.current=B}),[B]),je((function(){_e.current!==t&&(ie(),_e.current=t)}),[ie,t]);var ze=p({isLazy:J,imgAttributes:ge,heightInt:de,widthInt:ue,qualityInt:fe,layout:U,className:N,imgStyle:pe,blurStyle:he,loading:j,config:Y,unoptimized:f,placeholder:H,loader:W,srcString:xe,onLoadingCompleteRef:ye,setBlurComplete:ee,setIntersection:ne,isVisible:oe,noscriptSizes:n},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:ae},ce?l.default.createElement("span",{style:le},Q?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Q}):null):null,l.default.createElement(k,Object.assign({},ze))),v?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ge.src+ge.srcSet+ge.sizes,rel:"preload",as:"image",href:ge.srcSet?void 0:ge.src},we))):null)};var a,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(5443))&&a.__esModule?a:{default:a},s=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function m(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||{},g=v.experimentalUnoptimized,x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},b=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(O(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(O(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(O(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}function _(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(r);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,c),d=u.widths,f=u.kind,p=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,r){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:s({config:t,src:n,quality:l,width:d[p]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function C(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(n))}function L(e,t,n,r,i,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,s=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,h=e.config,v=e.unoptimized,g=e.loader,x=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,j=e.onLoad,y=e.onError,z=(e.isVisible,e.noscriptSizes),C=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=s?"lazy":d,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},C,t,{decoding:"async","data-nimg":i,className:o,style:p({},a,c),ref:l.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&L(e,f,0,u,x,b)}),[w,f,i,u,x,b]),onLoad:function(e){L(e.currentTarget,f,0,u,x,b),j&&j(e)},onError:function(e){"blur"===u&&b(!0),y&&y(e)}})),(s||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},C,_({config:h,src:f,unoptimized:v,layout:i,width:n,quality:r,sizes:z,loader:g}),{decoding:"async","data-nimg":i,style:a,className:o,loading:d}))))};function O(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),l=n(2725),c=n(3462),s=n(1018),u=n(7190),d=n(1210),f=n(8684);var p="undefined"!==typeof o.default.useTransition,h={};function m(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(i?"%"+i:"")]=!0}}var v=o.default.forwardRef((function(e,t){var n,i=e.href,v=e.as,g=e.children,x=e.prefetch,b=e.passHref,w=e.replace,j=e.soft,y=e.shallow,_=e.scroll,z=e.locale,C=e.onClick,L=e.onMouseEnter,k=e.legacyBehavior,O=void 0===k?!0!==Boolean(!1):k,S=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=g,!O||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var N=!1!==x,M=r(p?o.default.useTransition():[],2)[1],A=o.default.useContext(c.RouterContext),R=o.default.useContext(s.AppRouterContext);R&&(A=R);var E,P=o.default.useMemo((function(){var e=r(a.resolveHref(A,i,!0),2),t=e[0],n=e[1];return{href:t,as:v?a.resolveHref(A,v):n||t}}),[A,i,v]),I=P.href,B=P.as,T=o.default.useRef(I),H=o.default.useRef(B);O&&(E=o.default.Children.only(n));var V=O?E&&"object"===typeof E&&E.ref:t,q=r(u.useIntersection({rootMargin:"200px"}),3),D=q[0],Y=q[1],F=q[2],U=o.default.useCallback((function(e){H.current===B&&T.current===I||(F(),H.current=B,T.current=I),D(e),V&&("function"===typeof V?V(e):"object"===typeof V&&(V.current=e))}),[B,V,I,F,D]);o.default.useEffect((function(){var e=Y&&N&&a.isLocalURL(I),t="undefined"!==typeof z?z:A&&A.locale,n=h[I+"%"+B+(t?"%"+t:"")];e&&!n&&m(A,I,B,{locale:t})}),[B,I,Y,z,N,A]);var W={ref:U,onClick:function(e){O||"function"!==typeof C||C(e),O&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,l,c,s,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[o?i?"softReplace":"softPush":i?"replace":"push"](n):t[i?"replace":"push"](n,r,{shallow:l,locale:s,scroll:c})};u?u(d):d()}}(e,A,I,B,w,j,y,_,z,R?M:void 0)},onMouseEnter:function(e){O||"function"!==typeof L||L(e),O&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),a.isLocalURL(I)&&m(A,I,B,{priority:!0})}};if(!O||b||"a"===E.type&&!("href"in E.props)){var K="undefined"!==typeof z?z:A&&A.locale,Z=A&&A.isLocaleDomain&&d.getDomainLocale(B,K,A.locales,A.domainLocales);W.href=Z||f.addBasePath(l.addLocale(B,K,A&&A.defaultLocale))}return O?o.default.cloneElement(E,W):o.default.createElement("a",Object.assign({},S,W),n)}));t.default=v,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=i.useRef(),d=r(i.useState(!1),2),f=d[0],p=d[1],h=r(i.useState(null),2),m=h[0],v=h[1];i.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),s||f)return;return m&&m.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},c.push(n),l.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,s,n,t,f]);var g=i.useCallback((function(){p(!1)}),[]);return[v,f,g]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var l=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,i=(r=n(7294))&&r.__esModule?r:{default:r};var o=i.default.createContext(null);t.AppRouterContext=o;var a=i.default.createContext(null);t.AppTreeContext=a;var l=i.default.createContext(null);t.FullAppTreeContext=l},4178:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return te}});var o=n(5893),a=n(7294),l=n(5675),c=n.n(l),s=n(9529),u=n.n(s),d=function(){return(0,o.jsxs)("section",{className:u().titlebar,children:[(0,o.jsx)(c(),{src:"/vscode_icon.svg",alt:"VSCode Icon",height:15,width:15,className:u().icon}),(0,o.jsxs)("div",{className:u().items,children:[(0,o.jsx)("p",{children:"File"}),(0,o.jsx)("p",{children:"Edit"}),(0,o.jsx)("p",{children:"Selection"}),(0,o.jsx)("p",{children:"View"}),(0,o.jsx)("p",{children:"Go"}),(0,o.jsx)("p",{children:"Run"}),(0,o.jsx)("p",{children:"Terminal"}),(0,o.jsx)("p",{children:"Help"})]}),(0,o.jsx)("p",{className:u().title,children:"Claire  Yurev - Visual Studio Code"}),(0,o.jsxs)("div",{className:u().windowButtons,children:[(0,o.jsx)("span",{className:u().minimize}),(0,o.jsx)("span",{className:u().maximize}),(0,o.jsx)("span",{className:u().close})]})]})},f=n(1664),p=n.n(f),h=n(1163);function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var v=function(e){return(0,o.jsx)("svg",m(i({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{d:"M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"})}))},g=function(e){return(0,o.jsx)("svg",m(i({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{d:"M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"})}))},x=function(e){return(0,o.jsx)("svg",m(i({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{d:"M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"})}))},b=function(e){return(0,o.jsx)("svg",m(i({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{d:"M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59 2.41 15l4.12-2.36.22-.16L15 4.23V2.77L13.23 1zM2.41 13.59l1.51-3 1.45 1.45-2.96 1.55zm3.83-2.06L4.47 9.76l8-8 1.77 1.77-8 8z"})}))},w=function(e){return(0,o.jsx)("svg",m(i({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"})}))},j=function(e){return(0,o.jsx)("svg",m(i({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{d:"M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z"})}))},y=function(e){return(0,o.jsx)("svg",m(i({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z"})}))},_=n(1923),z=n.n(_),C=[{Icon:v,path:"/"},{Icon:g,path:"https://github.com/ClaireYurev"},{Icon:x,path:"/projects"},{Icon:b,path:"https://www .linkedin.com//"},{Icon:w,path:"/contact"}],L=[{Icon:j,path:"/about"},{Icon:y,path:"/settings"}],k=function(){var e=(0,h.useRouter)();return(0,o.jsxs)("aside",{className:z().sidebar,children:[(0,o.jsx)("div",{className:z().sidebarTop,children:C.map((function(t){var n=t.Icon,r=t.path;return(0,o.jsx)(p(),{href:r,children:(0,o.jsx)("div",{className:"".concat(z().iconContainer," ").concat(e.pathname===r&&z().active),children:(0,o.jsx)(n,{fill:e.pathname===r?"rgb(225, 228, 232)":"rgb(106, 115, 125)",className:z().icon})})},r)}))}),(0,o.jsx)("div",{className:z().sidebarBottom,children:L.map((function(t){var n=t.Icon,r=t.path;return(0,o.jsx)("div",{className:z().iconContainer,children:(0,o.jsx)(p(),{href:r,children:(0,o.jsx)(n,{fill:e.pathname===r?"rgb(225, 228, 232)":"rgb(106, 115, 125)",className:z().icon})},r)})}))})]})},O=function(e){return(0,o.jsx)("svg",m(i({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"})}))},S=n(1654),N=n.n(S),M=[{name:"Home.jsx",path:"/",icon:"1_react_icon.svg"},{name:"Projects.js",path:"/projects",icon:"2_javascript_icon.svg"},{name:"LinkedIn.ts",path:"https://www .linkedin.com//",icon:"3_typescript_icon.svg"},{name:"GitHub.md",path:"https://github.com/claireyurev",icon:"4_github_icon.svg"},{name:"BitBucket.ai",path:"https://bitbucket.org/claireyurev/",icon:"5_bitbucket_icon.svg"},{name:"Resume.pdf",path:"/Claire_Y._Yurev_-_Resume.pdf",icon:"6_pdf_icon.svg"},{name:"About.html",path:"/about",icon:"7_git_icon.svg"},{name:"Contact.css",path:"/contact",icon:"8_html_icon.svg"}],A=function(){var e=(0,a.useState)(!0),t=e[0],n=e[1];return(0,o.jsxs)("div",{className:N().explorer,children:[(0,o.jsx)("p",{className:N().title,children:"Explorer"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{type:"checkbox",className:N().checkbox,id:"portfolio-checkbox",checked:t,onChange:function(){return n(!t)}}),(0,o.jsxs)("label",{htmlFor:"portfolio-checkbox",className:N().heading,children:[(0,o.jsx)(O,{className:N().chevron,style:t?{transform:"rotate(90deg)"}:{}}),"Portfolio"]}),(0,o.jsx)("div",{className:N().files,style:t?{display:"block"}:{display:"none"},children:M.map((function(e){return(0,o.jsx)(p(),{href:e.path,children:(0,o.jsxs)("div",{className:N().file,children:[(0,o.jsx)(c(),{src:"/".concat(e.icon),alt:e.name,height:18,width:18})," ",(0,o.jsx)("p",{children:e.name})]})},e.name)}))})]})]})},R=function(e){return(0,o.jsx)("svg",m(i({width:14,height:14,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"})}))},E=function(e){return(0,o.jsx)("svg",m(i({width:14,height:14,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"})}))},P=function(e){return(0,o.jsx)("svg",m(i({width:14,height:14,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:(0,o.jsx)("path",{d:"M13.377 10.573a7.63 7.63 0 01-.383-2.38V6.195a5.115 5.115 0 00-1.268-3.446 5.138 5.138 0 00-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 00-1.208 1.675 5.067 5.067 0 00-.431 2.022v2.2a7.61 7.61 0 01-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 01-.705.299.997.997 0 01-.706-.3.997.997 0 01-.3-.705h1.999a.939.939 0 01-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 00.443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 012.597 1.4 4.133 4.133 0 011.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z"})}))},I=function(e){return(0,o.jsxs)("svg",m(i({width:16,height:16,xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},e),{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.62 3.596 7.815 12.81l-.728-.033L4 8.382l.754-.53 2.744 3.907L14.917 3l.703.596z"}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m7.234 8.774 4.386-5.178L10.917 3l-4.23 4.994.547.78zm-1.55.403.548.78-.547-.78zm-1.617 1.91.547.78-.799.943-.728-.033L0 8.382l.754-.53 2.744 3.907.57-.672z"})]}))},B=function(e){return(0,o.jsx)("svg",m(i({width:14,fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),{children:(0,o.jsx)("path",{d:"M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"})}))},T=function(e){return(0,o.jsx)("svg",m(i({width:14,fill:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),{children:(0,o.jsx)("path",{d:"M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"})}))},H=n(8167),V=n.n(H),q=function(){return(0,o.jsxs)("footer",{className:V().bottomBar,children:[(0,o.jsxs)("div",{className:V().container,children:[(0,o.jsxs)("a",{href:"https://github.com/claireyurev",target:"_blank",rel:"noreferrer noopener",className:V().section,children:[(0,o.jsx)(T,{className:V().icon}),(0,o.jsx)("p",{children:"main"})]}),(0,o.jsxs)("div",{className:V().section,children:[(0,o.jsx)(R,{className:V().icon}),(0,o.jsx)("p",{className:V().errorText,children:"0"}),"\xa0\xa0",(0,o.jsx)(E,{className:V().icon}),(0,o.jsx)("p",{children:"0"})]})]}),(0,o.jsx)("div",{className:V().container,children:(0,o.jsx)("a",{href:"https://github.com/claireyurev",target:"_blank",rel:"noreferrer noopener",className:V().section,children:(0,o.jsxs)("div",{className:V().greysection,children:[(0,o.jsx)("p",{children:"Make something people want  "})," \xa0\xa0",(0,o.jsx)("p",{style:{color:"orange"},children:(0,o.jsx)("big",{children:"  \ud83c\udd88"})})," \xa0\xa0"]})})}),(0,o.jsxs)("div",{className:V().container,children:[(0,o.jsxs)("div",{className:V().section,children:[(0,o.jsx)(B,{className:V().icon}),(0,o.jsx)("p",{children:"Powered by Next.js"})]}),(0,o.jsxs)("div",{className:V().section,children:[(0,o.jsx)(I,{className:V().icon}),(0,o.jsx)("p",{children:"Prettier"})]}),(0,o.jsx)("div",{className:V().section,children:(0,o.jsx)(P,{})})]})]})},D=n(5875),Y=n.n(D),F=function(e){var t=e.icon,n=e.filename,r=e.path,i=(0,h.useRouter)();return(0,o.jsx)(p(),{href:r,children:(0,o.jsxs)("div",{className:"".concat(Y().tab," ").concat(i.pathname===r&&Y().active),children:[(0,o.jsx)(c(),{src:t,alt:n,height:18,width:18}),(0,o.jsx)("p",{children:n})]})})},U=n(8013),W=n.n(U),K=function(){return(0,o.jsxs)("div",{className:W().tabs,children:[(0,o.jsx)(F,{icon:"/1_react_icon.svg",filename:"Home.jsx",path:"/"}),(0,o.jsx)(F,{icon:"/2_javascript_icon.svg",filename:"Projects.js",path:"/projects"}),(0,o.jsx)(F,{icon:"/3_typescript_icon.svg",filename:"LinkedIn.ts",path:"https://www .linkedin.com//"}),(0,o.jsx)(F,{icon:"/4_github_icon.svg",filename:"GitHub.md",path:"https://github.com/claireyurev"}),(0,o.jsx)(F,{icon:"/5_bitbucket_icon.svg",filename:"BitBucket.ai",path:"https://bitbucket.org/claireyurev/"}),(0,o.jsx)(F,{icon:"/6_pdf_icon.svg",filename:"Resume.pdf",path:"/Claire_Y._Yurev_-_Resume.pdf",target:"_blank"}),(0,o.jsx)(F,{icon:"/7_git_icon.svg",filename:"About.html",path:"/about"}),(0,o.jsx)(F,{icon:"/8_html_icon.svg",filename:"Contact.css",path:"/contact"})]})},Z=n(3853),G=n.n(Z),J=function(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),(0,o.jsxs)("div",{className:G().main,children:[(0,o.jsx)(k,{}),(0,o.jsx)(A,{}),(0,o.jsxs)("div",{style:{width:"100%"},children:[(0,o.jsx)(K,{}),(0,o.jsx)("main",{className:G().content,children:t})]})]}),(0,o.jsx)(q,{})]})},Q=n(9008),X=n.n(Q),$=function(e){var t=e.title;return(0,o.jsxs)(X(),{children:[(0,o.jsx)("title",{children:t}),(0,o.jsx)("meta",{name:"description",content:"Claire  Yurev is a Software Engineer and Data Scientist currently working in California."}),(0,o.jsx)("meta",{name:"keywords",content:"claire y. yurev, claire  yurev, claire, yaroslav, yurev, software engineer, software developer, data scientist, claire software engineer, portfolio, portfolio project, full stack, vscode portfolio, vscode website, vscode browser"}),(0,o.jsx)("meta",{property:"og:title",content:"Claire Yurev | Portfolio"}),(0,o.jsx)("meta",{property:"og:description",content:"Software Engineer currently working in the Bay Area, California."}),(0,o.jsx)("meta",{property:"og:image",content:"https://i.imgur.com/OvIt9Np.jpg"}),(0,o.jsx)("meta",{property:"og:url",content:"https://claireyurev.com"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})},ee=$;$.defaultProps={title:"Claire Y. Yurev"};n(906),n(2859);var te=function(e){var t=e.Component,n=e.pageProps;return(0,a.useEffect)((function(){localStorage.getItem("theme")&&document.documentElement.setAttribute("data-theme",localStorage.getItem("theme"))}),[]),(0,o.jsxs)(J,{children:[(0,o.jsx)(ee,{title:"Claire Y. Yurev | ".concat(n.title)}),(0,o.jsx)(t,i({},n))]})}},8167:function(e){e.exports={bottomBar:"Bottombar_bottomBar__QVIne",icon:"Bottombar_icon__zdqmH",container:"Bottombar_container__v_l0M",section:"Bottombar_section___NTJA",greysection:"Bottombar_greysection__Nh7a6"}},1654:function(e){e.exports={explorer:"Explorer_explorer__MYKPT",title:"Explorer_title__SAx86",heading:"Explorer_heading__YLwUA",checkbox:"Explorer_checkbox__K21K5",files:"Explorer_files__1BcBi",file:"Explorer_file__Strqx",chevron:"Explorer_chevron__PFE0_"}},3853:function(e){e.exports={main:"Layout_main__c1pHS",content:"Layout_content__RNbd0"}},1923:function(e){e.exports={sidebar:"Sidebar_sidebar__gyKt1",iconContainer:"Sidebar_iconContainer__r8abM",active:"Sidebar_active__5C3S5",icon:"Sidebar_icon__czDJe"}},5875:function(e){e.exports={tab:"Tab_tab__oZcQ_",active:"Tab_active__n8qKl"}},8013:function(e){e.exports={tabs:"Tabsbar_tabs__A5mro"}},9529:function(e){e.exports={titlebar:"Titlebar_titlebar__qF029",items:"Titlebar_items__kiyGW",title:"Titlebar_title__JRI8S",windowButtons:"Titlebar_windowButtons__fwpk_",minimize:"Titlebar_minimize__lFuJ1",maximize:"Titlebar_maximize__hjViL",close:"Titlebar_close__32yPf"}},906:function(){},2859:function(){},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);