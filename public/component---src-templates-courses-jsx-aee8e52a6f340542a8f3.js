/*! For license information please see component---src-templates-courses-jsx-aee8e52a6f340542a8f3.js.LICENSE.txt */
(self.webpackChunkcodemaster=self.webpackChunkcodemaster||[]).push([[462],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),c=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},9931:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var c=o.apply(null,r);c&&e.push(c)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),c=r(7316),i=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),p=r(3497).mdx,d=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,i),l=d(t),f=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:p},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return u.createElement(f,s({},a))}},3333:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var n,o=r(2982),a=r(7294),c=r(5444),i=r(6725),l=r(6125),s=r(913),u=r(6486),p=r(3497),d=function(e){var t=e.link;return a.createElement("a",{href:t,className:"inline-block py-2 px-24 lg:px-28 bg-green-500 rounded text-white shadow-xl",target:"_blank",rel:"noreferrer"},"Download")},f=(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),m=function(e){function t(t){var r=e.call(this,t)||this;return r.name="AssertionError",r}return f(t,e),t}(Error);function h(e,t){if(!e)throw new m(t)}function w(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],r=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(r))}));return t.length>0?"?"+t.join("&"):""}var y=r(9931),b=r.n(y),v=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)},x=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function c(e){try{l(n.next(e))}catch(t){a(t)}}function i(e){try{l(n.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,i)}l((n=n.apply(e,t||[])).next())}))},O=function(e,t){var r,n,o,a,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,n=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){c.label=a[1];break}if(6===a[0]&&c.label<o[1]){c.label=o[1],o=a;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(a);break}o[2]&&c.ops.pop(),c.trys.pop();continue}a=t.call(e,c)}catch(i){a=[6,i],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},k=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},j=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},N=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function _(e,t,r){var n=t.height,o=t.width,a=E(t,["height","width"]),c=g({height:n,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),i=window.open(e,"",Object.keys(c).map((function(e){return e+"="+c[e]})).join(", "));if(r)var l=window.setInterval((function(){try{(null===i||i.closed)&&(window.clearInterval(l),r(i))}catch(e){console.error(e)}}),1e3);return i}var S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var r=t.props,n=r.onShareWindowClose,o=r.windowHeight,a=void 0===o?400:o,c=r.windowPosition,i=void 0===c?"windowCenter":c,l=r.windowWidth,s=void 0===l?550:l;_(e,g({height:a,width:s},"windowCenter"===i?j(s,a):N(s,a)),n)},t.handleClick=function(e){return x(t,void 0,void 0,(function(){var t,r,n,o,a,c,i,l,s,u;return O(this,(function(p){switch(p.label){case 0:return t=this.props,r=t.beforeOnClick,n=t.disabled,o=t.networkLink,a=t.onClick,c=t.url,i=t.openShareDialogOnClick,l=t.opts,s=o(c,l),n?[2]:(e.preventDefault(),r?(u=r(),k(u)?[4,u]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return i&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return v(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),r=e.className,n=e.disabled,o=e.disabledStyle,c=e.forwardedRef,i=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,E(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=b()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!n,disabled:!!n},r),d=g(g(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),n&&o);return a.createElement("button",g({},u,{"aria-label":u["aria-label"]||i,className:p,onClick:this.handleClick,ref:c,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),P=S,C=function(){return C=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C.apply(this,arguments)};var M=function(e,t,r,n){function o(o,c){var i=r(o),l=C({},o);return Object.keys(i).forEach((function(e){delete l[e]})),a.createElement(P,C({},n,l,{forwardedRef:c,networkName:e,networkLink:t,opts:r(o)}))}return o.displayName="ShareButton-"+e,(0,a.forwardRef)(o)};var A=M("facebook",(function(e,t){var r=t.quote,n=t.hashtag;return h(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+w({u:e,quote:r,hashtag:n})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),R=function(){return R=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},R.apply(this,arguments)},z=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function D(e){var t=function(t){var r=t.bgStyle,n=t.borderRadius,o=t.iconFillColor,c=t.round,i=t.size,l=z(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return a.createElement("svg",R({viewBox:"0 0 64 64",width:i,height:i},l),c?a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:r}):a.createElement("rect",{width:"64",height:"64",rx:n,ry:n,fill:e.color,style:r}),a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var B=D({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var H=M("twitter",(function(e,t){var r=t.title,n=t.via,o=t.hashtags,a=void 0===o?[]:o,c=t.related,i=void 0===c?[]:c;return h(e,"twitter.url"),h(Array.isArray(a),"twitter.hashtags is not an array"),h(Array.isArray(i),"twitter.related is not an array"),"https://twitter.com/share"+w({url:e,text:r,via:n,hashtags:a.length>0?a.join(","):void 0,related:i.length>0?i.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),W=D({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var L=M("pinterest",(function(e,t){var r=t.media,n=t.description;return h(e,"pinterest.url"),h(r,"pinterest.media"),"https://pinterest.com/pin/create/button/"+w({url:e,media:r,description:n})}),(function(e){return{media:e.media,description:e.description}}),{windowWidth:1e3,windowHeight:730}),I=D({color:"#cb2128",networkName:"pinterest",path:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"});var T=M("reddit",(function(e,t){var r=t.title;return h(e,"reddit.url"),"https://www.reddit.com/submit"+w({url:e,title:r})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),q=D({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var F=M("whatsapp",(function(e,t){var r=t.title,n=t.separator;return h(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+w({text:r?r+n+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),X=D({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"}),U=function(e){var t=e.title,r=e.url,n=e.twitterHandle,o=e.tags;return a.createElement("div",{className:"flex items-center"},a.createElement(A,{url:r},a.createElement(B,{size:28,round:!0})),a.createElement(H,{url:r,title:t,via:n,hashtags:o},a.createElement(W,{size:28,round:!0})),a.createElement(L,{url:r},a.createElement(I,{size:28,round:!0})),a.createElement(T,{url:r,title:t},a.createElement(q,{size:28,round:!0})),a.createElement(F,{url:r,title:t},a.createElement(X,{size:28,round:!0})))},V=r(9138),G=r.n(V);function Z(e){var t=e.image,r=e.title,n=e.description,o=e.slug,i=e.createdAt,s=(0,l.d)(t);return a.createElement("div",{className:"p-2"},a.createElement("div",{className:"overflow-hidden rounded shadow-xl bg-gray-700"},a.createElement("figure",{className:"object-cover w-full h-28 md:h-48 rounded"},a.createElement(l.G,{className:"h-full",image:s,alt:r})),a.createElement("div",{className:"py-3 px-2"},a.createElement("p",{className:"mb-2 text-xs font-semibold text-gray-400 uppercase"},i),a.createElement(c.Link,{to:"/"+o,"aria-label":"Article",className:" inline-block mb-2 text-green-400 transition-colors duration-200 hover:text-deep-purple-accent-700 "},a.createElement("h2",{className:"text-lg font-bold",style:{wordBreak:"break-all"}},G()(r,{length:25}))),a.createElement("p",{className:"mb-3 text-gray-300 text-sm",style:{wordBreak:"break-all"}},G()(n,{length:120})),a.createElement(c.Link,{to:"/"+o,"aria-label":"Likes",className:"bg-green-400 rounded text-center py-1 text-sm text-gray-900 flex justify-center items-center"},a.createElement("span",{className:"inline-block font-bold"},"Read Now"),a.createElement("span",{className:"inline-block"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-5 -5 24 24",width:"18",fill:"currentColor"},a.createElement("path",{d:"M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z"})))))))}var K=r(5858),Y=r(8720),$=r(4738);Y.ZP.use([Y.W_]);var J={DownloadBTN:d},Q=function(e){var t=e.data,r=e.pageContext,n=t.file.childMdx,d=n.body,f=n.frontmatter,m=n.timeToRead,h=(0,l.d)(f.image),w=f.image.childImageSharp.ogImage.src,y=f.tags||[],b=y.map((function(e){return{name:"article:tag",content:e}})),v=(0,o.Z)(b);r.categories.forEach((function(e){v.push({name:"article:section",content:e.name})}));var g,x=Object.keys(r.relatedPosts);return g="undefined"==typeof window?"":window.location.href,a.createElement(p.MDXProvider,{components:J},a.createElement(s.b,null,a.createElement(u.Z,{title:f.title,description:f.description,keywords:f.keywords,meta:v,image:w}),a.createElement("article",{className:"mx-auto max-w-7xl text-sm md:text-base py-6 px-4 mb-8"},a.createElement("div",{className:"w-full mx-auto mb-8 text-left"},a.createElement("div",{className:""},a.createElement("h1",{className:"mb-3 text-2xl md:text-3xl font-bold text-gray-300",itemProp:"headline"},f.title),a.createElement("p",{className:"text-base text-gray-400"},f.createdAt," —",a.createElement("span",{className:"text-green-400"},"CodeMaster"),a.createElement("span",{className:"ml-2"},"Time To Read: ",m," Minute"))),a.createElement("hr",{className:"my-4"}),a.createElement("div",{className:"flex items-center mb-6 space-x-2 text-gray-400"},a.createElement("p",{className:""},"Share this article"),a.createElement(U,{title:f.title,url:g,twitterHandle:"some",tags:y})),a.createElement("div",{className:"my-8 md:my-10 flex justify-center"},a.createElement(l.G,{image:h,alt:f.title}))),a.createElement("div",{className:"w-full mx-auto text-gray-300 md:p-4 courses-module--courses-content--U7BK5"},a.createElement(i.MDXRenderer,null,d)),a.createElement("div",{className:"py-2 px-3 flex flex-wrap"},y.map((function(e){return a.createElement(c.Link,{className:"py-1 px-2 bg-green-500 text-white rounded ml-2 mt-2 inline-block capitalize shadow-md",key:e,to:"/tags/"+e.toLowerCase().split(" ").join("-")},e)})))),a.createElement("section",{className:""},x.length&&x.map((function(e){return a.createElement("div",{key:e,className:"mb-3 py-6 px-3 bg-gray-800 rounded shadow-md"},a.createElement("h3",{className:"mb-2 text-lg text-green-400"},"More ",e," Courses"),a.createElement(K.t,{spaceBetween:5,slidesPerView:"auto",navigation:!0},r.relatedPosts[e].map((function(e){var t=e.node;return a.createElement(K.o,{key:t.id,style:{width:$.tq?"220px":"280px"}},a.createElement(Z,Object.assign({},t.course.frontmatter,{slug:t.name})))}))))})))))}}}]);
//# sourceMappingURL=component---src-templates-courses-jsx-aee8e52a6f340542a8f3.js.map