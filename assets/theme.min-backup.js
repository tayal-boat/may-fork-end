/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));


// vendor.js

(()=>{var t,e;!function(){"use strict";var t="function"==typeof Promise?Promise:function(t){var e,n=[],r=0;return t(function(t){e=t,r=1,n.splice(0).forEach(i)}),{then:i};function i(t){return r?setTimeout(t,0,e):n.push(t),this}},e=function(t,e){var n=function(t){for(var e=0,n=t.length;e<n;e++)r(t[e])},r=function(t){var e=t.target,n=t.attributeName,r=t.oldValue;e.attributeChangedCallback(n,r,e.getAttribute(n))};return function(i,o){var a=i.constructor.observedAttributes;return a&&t(o).then(function(){new e(n).observe(i,{attributes:!0,attributeOldValue:!0,attributeFilter:a});for(var t=0,o=a.length;t<o;t++)i.hasAttribute(a[t])&&r({target:i,attributeName:a[t],oldValue:null})}),i}},n=!0,r="querySelectorAll";function i(t){this.observe(t,{subtree:n,childList:n})}var o="querySelectorAll",a=self,s=a.document,u=a.Element,l=a.MutationObserver,c=a.Set,f=a.WeakMap,d=function(t){return o in t},h=[].filter,p=function(t){var e=new f,a=function(n,r){var i;if(r)for(var o,a=function(t){return t.matches||t.webkitMatchesSelector||t.msMatchesSelector}(n),s=0,u=m.length;s<u;s++)a.call(n,o=m[s])&&(e.has(n)||e.set(n,new c),(i=e.get(n)).has(o)||(i.add(o),t.handle(n,r,o)));else e.has(n)&&(i=e.get(n),e.delete(n),i.forEach(function(e){t.handle(n,r,e)}))},p=function(t){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=0,r=t.length;n<r;n++)a(t[n],e)},m=t.query,g=t.root||s,v=function(t,e,o){var a=function e(i,o,a,s,u){for(var l=0,c=i.length;l<c;l++){var f=i[l];(u||r in f)&&(s?o.has(f)||(o.add(f),a.delete(f),t(f,s)):a.has(f)||(a.add(f),o.delete(f),t(f,s)),u||e(f[r]("*"),o,a,s,n))}},s=new(o||MutationObserver)(function(t){for(var e=new Set,r=new Set,i=0,o=t.length;i<o;i++){var s=t[i],u=s.addedNodes,l=s.removedNodes;a(l,e,r,!1,!1),a(u,e,r,n,!1)}});return s.add=i,s.add(e||document),s}(a,g,l),b=u.prototype.attachShadow;return b&&(u.prototype.attachShadow=function(t){var e=b.call(this,t);return v.add(e),e}),m.length&&p(g[o](m)),{drop:function(t){for(var n=0,r=t.length;n<r;n++)e.delete(t[n])},flush:function(){for(var t=v.takeRecords(),e=0,n=t.length;e<n;e++)p(h.call(t[e].removedNodes,d),!1),p(h.call(t[e].addedNodes,d),!0)},observer:v,parse:p}},m=self,g=m.document,v=m.Map,b=m.MutationObserver,y=m.Object,_=m.Set,w=m.WeakMap,T=m.Element,x=m.HTMLElement,E=m.Node,S=m.Error,P=m.TypeError,k=m.Reflect,N=self.Promise||t,A=y.defineProperty,R=y.keys,M=y.getOwnPropertyNames,L=y.setPrototypeOf,D=!self.customElements,O=function(t){for(var e=R(t),n=[],r=e.length,i=0;i<r;i++)n[i]=t[e[i]],delete t[e[i]];return function(){for(var i=0;i<r;i++)t[e[i]]=n[i]}};if(D){var I=function(){var t=this.constructor;if(!H.has(t))throw new P("Illegal constructor");var e=H.get(t);if(j)return U(j,e);var n=C.call(g,e);return U(L(n,t.prototype),e)},C=g.createElement,H=new v,W=new v,F=new v,B=new v,q=[],z=p({query:q,handle:function(t,e,n){var r=F.get(n);if(e&&!r.isPrototypeOf(t)){var i=O(t);j=L(t,r);try{new r.constructor}finally{j=null,i()}}var o="".concat(e?"":"dis","connectedCallback");o in r&&t[o]()}}).parse,j=null,V=function(e){if(!W.has(e)){var n,r=new t(function(t){n=t});W.set(e,{$:r,_:n})}return W.get(e).$},U=e(V,b);A(self,"customElements",{configurable:!0,value:{define:function(t,e){if(B.has(t))throw new S('the name "'.concat(t,'" has already been used with this registry'));H.set(e,t),F.set(t,e.prototype),B.set(t,e),q.push(t),V(t).then(function(){z(g.querySelectorAll(t))}),W.get(t)._(e)},get:function(t){return B.get(t)},whenDefined:V}}),A(I.prototype=x.prototype,"constructor",{value:I}),A(self,"HTMLElement",{configurable:!0,value:I}),A(g,"createElement",{configurable:!0,value:function(t,e){var n=e&&e.is,r=n?B.get(n):B.get(t);return r?new r:C.call(g,t)}}),"isConnected"in E.prototype||A(E.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var $=function t(){return self.Reflect.construct(HTMLLIElement,[],t)};$.prototype=HTMLLIElement.prototype;var K="extends-li";self.customElements.define("extends-li",$,{extends:"li"}),D=g.createElement("li",{is:K}).outerHTML.indexOf(K)<0;var X=self.customElements,Y=X.get,G=X.whenDefined;A(self.customElements,"whenDefined",{configurable:!0,value:function(t){var e=this;return G.call(this,t).then(function(n){return n||Y.call(e,t)})}})}catch(t){D=!D}if(D){var Q=function(t){var e=it.get(t);ht(e.querySelectorAll(this),t.isConnected)},J=self.customElements,Z=T.prototype.attachShadow,tt=g.createElement,et=J.define,nt=J.get,rt=(k||{construct:function(t){return t.call(this)}}).construct,it=new w,ot=new _,at=new v,st=new v,ut=new v,lt=new v,ct=[],ft=[],dt=function(t){return lt.get(t)||nt.call(J,t)},ht=p({query:ft,handle:function(t,e,n){var r=ut.get(n);if(e&&!r.isPrototypeOf(t)){var i=O(t);vt=L(t,r);try{new r.constructor}finally{vt=null,i()}}var o="".concat(e?"":"dis","connectedCallback");o in r&&t[o]()}}).parse,pt=p({query:ct,handle:function(t,e){it.has(t)&&(e?ot.add(t):ot.delete(t),ft.length&&Q.call(ft,t))}}).parse,mt=function(t){if(!st.has(t)){var e,n=new N(function(t){e=t});st.set(t,{$:n,_:e})}return st.get(t).$},gt=e(mt,b),vt=null;M(self).filter(function(t){return/^HTML/.test(t)}).forEach(function(t){var e=self[t];function n(){var t=this.constructor;if(!at.has(t))throw new P("Illegal constructor");var n=at.get(t),r=n.is,i=n.tag;if(r){if(vt)return gt(vt,r);var o=tt.call(g,i);return o.setAttribute("is",r),gt(L(o,t.prototype),r)}return rt.call(this,e,[],t)}A(n.prototype=e.prototype,"constructor",{value:n}),A(self,t,{value:n})}),A(g,"createElement",{configurable:!0,value:function(t,e){var n=e&&e.is;if(n){var r=lt.get(n);if(r&&at.get(r).tag===t)return new r}var i=tt.call(g,t);return n&&i.setAttribute("is",n),i}}),Z&&(T.prototype.attachShadow=function(t){var e=Z.call(this,t);return it.set(this,e),e}),A(J,"get",{configurable:!0,value:dt}),A(J,"whenDefined",{configurable:!0,value:mt}),A(J,"define",{configurable:!0,value:function(t,e,n){if(dt(t))throw new S("'".concat(t,"' has already been defined as a custom element"));var r,i=n&&n.extends;at.set(e,i?{is:t,tag:i}:{is:"",tag:t}),i?(r="".concat(i,'[is="').concat(t,'"]'),ut.set(r,e.prototype),lt.set(t,e),ft.push(r)):(et.apply(J,arguments),ct.push(r=t)),mt(t).then(function(){i?(ht(g.querySelectorAll(r)),ot.forEach(Q,[r])):pt(g.querySelectorAll(r))}),st.get(t)._(e)}})}}(),function(){var t,e,n={},r={};!function(t,e){function n(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear",this._easingFunction=d}function r(){return t.isDeprecated("Invalid timing inputs","2016-03-02","TypeError exceptions will be thrown instead.",!0)}function i(e,r,i){var o=new n;return r&&(o.fill="both",o.duration="auto"),"number"!=typeof e||isNaN(e)?void 0!==e&&Object.getOwnPropertyNames(e).forEach(function(n){if("auto"!=e[n]){if(("number"==typeof o[n]||"duration"==n)&&("number"!=typeof e[n]||isNaN(e[n])))return;if("fill"==n&&-1==c.indexOf(e[n]))return;if("direction"==n&&-1==f.indexOf(e[n]))return;if("playbackRate"==n&&1!==e[n]&&t.isDeprecated("AnimationEffectTiming.playbackRate","2014-11-28","Use Animation.playbackRate instead."))return;o[n]=e[n]}}):o.duration=e,o}function o(t,e,n,r){return t<0||t>1||n<0||n>1?d:function(i){function o(t,e,n){return 3*t*(1-n)*(1-n)*n+3*e*(1-n)*n*n+n*n*n}if(i<=0){var a=0;return t>0?a=e/t:!e&&n>0&&(a=r/n),a*i}if(i>=1){var s=0;return n<1?s=(r-1)/(n-1):1==n&&t<1&&(s=(e-1)/(t-1)),1+s*(i-1)}for(var u=0,l=1;u<l;){var c=(u+l)/2,f=o(t,n,c);if(Math.abs(i-f)<1e-5)return o(e,r,c);f<i?u=c:l=c}return o(e,r,c)}}function a(t,e){return function(n){if(n>=1)return 1;var r=1/t;return(n+=e*r)-n%r}}function s(t){v||(v=document.createElement("div").style),v.animationTimingFunction="",v.animationTimingFunction=t;var e=v.animationTimingFunction;if(""==e&&r())throw new TypeError(t+" is not a valid value for easing");return e}function u(t){if("linear"==t)return d;var e=y.exec(t);if(e)return o.apply(this,e.slice(1).map(Number));var n=_.exec(t);if(n)return a(Number(n[1]),m);var r=w.exec(t);return r?a(Number(r[1]),{start:h,middle:p,end:m}[r[2]]):g[t]||d}function l(t,e,n){if(null==e)return T;var r=n.delay+t+n.endDelay;return e<Math.min(n.delay,r)?x:e>=Math.min(n.delay+t,r)?E:S}var c="backwards|forwards|both|none".split("|"),f="reverse|alternate|alternate-reverse".split("|"),d=function(t){return t};n.prototype={_setMember:function(e,n){this["_"+e]=n,this._effect&&(this._effect._timingInput[e]=n,this._effect._timing=t.normalizeTimingInput(this._effect._timingInput),this._effect.activeDuration=t.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(t){this._setMember("delay",t)},get delay(){return this._delay},set endDelay(t){this._setMember("endDelay",t)},get endDelay(){return this._endDelay},set fill(t){this._setMember("fill",t)},get fill(){return this._fill},set iterationStart(t){if((isNaN(t)||t<0)&&r())throw new TypeError("iterationStart must be a non-negative number, received: "+t);this._setMember("iterationStart",t)},get iterationStart(){return this._iterationStart},set duration(t){if("auto"!=t&&(isNaN(t)||t<0)&&r())throw new TypeError("duration must be non-negative or auto, received: "+t);this._setMember("duration",t)},get duration(){return this._duration},set direction(t){this._setMember("direction",t)},get direction(){return this._direction},set easing(t){this._easingFunction=u(s(t)),this._setMember("easing",t)},get easing(){return this._easing},set iterations(t){if((isNaN(t)||t<0)&&r())throw new TypeError("iterations must be non-negative, received: "+t);this._setMember("iterations",t)},get iterations(){return this._iterations}};var h=1,p=.5,m=0,g={ease:o(.25,.1,.25,1),"ease-in":o(.42,0,1,1),"ease-out":o(0,0,.58,1),"ease-in-out":o(.42,0,.58,1),"step-start":a(1,h),"step-middle":a(1,p),"step-end":a(1,m)},v=null,b="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",y=new RegExp("cubic-bezier\\("+b+","+b+","+b+","+b+"\\)"),_=/steps\(\s*(\d+)\s*\)/,w=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,T=0,x=1,E=2,S=3;t.cloneTimingInput=function(t){if("number"==typeof t)return t;var e={};for(var n in t)e[n]=t[n];return e},t.makeTiming=i,t.numericTimingToObject=function(t){return"number"==typeof t&&(t=isNaN(t)?{duration:0}:{duration:t}),t},t.normalizeTimingInput=function(e,n){return i(e=t.numericTimingToObject(e),n)},t.calculateActiveDuration=function(t){return Math.abs(function(t){return 0===t.duration||0===t.iterations?0:t.duration*t.iterations}(t)/t.playbackRate)},t.calculateIterationProgress=function(t,e,n){var r=l(t,e,n),i=function(t,e,n,r,i){switch(r){case x:return"backwards"==e||"both"==e?0:null;case S:return n-i;case E:return"forwards"==e||"both"==e?t:null;case T:return null}}(t,n.fill,e,r,n.delay);if(null===i)return null;var o=function(t,e,n,r,i){var o=i;return 0===t?e!==x&&(o+=n):o+=r/t,o}(n.duration,r,n.iterations,i,n.iterationStart),a=function(t,e,n,r,i,o){var a=t===1/0?e%1:t%1;return 0!==a||n!==E||0===r||0===i&&0!==o||(a=1),a}(o,n.iterationStart,r,n.iterations,i,n.duration),s=function(t,e,n,r){return t===E&&e===1/0?1/0:1===n?Math.floor(r)-1:Math.floor(r)}(r,n.iterations,a,o),u=function(t,e,n){var r=t;if("normal"!==t&&"reverse"!==t){var i=e;"alternate-reverse"===t&&(i+=1),r="normal",i!==1/0&&i%2!=0&&(r="reverse")}return"normal"===r?n:1-n}(n.direction,s,a);return n._easingFunction(u)},t.calculatePhase=l,t.normalizeEasing=s,t.parseEasingFunction=u}(n),function(t,e){function n(t,e){return t in u&&u[t][e]||e}function r(t,e,r){if(!function(t){return"display"===t||0===t.lastIndexOf("animation",0)||0===t.lastIndexOf("transition",0)}(t)){var i=o[t];if(i)for(var s in a.style[t]=e,i){var u=i[s],l=a.style[u];r[u]=n(u,l)}else r[t]=n(t,e)}}function i(t){var e=[];for(var n in t)if(!(n in["easing","offset","composite"])){var r=t[n];Array.isArray(r)||(r=[r]);for(var i,o=r.length,a=0;a<o;a++)(i={}).offset="offset"in t?t.offset:1==o?1:a/(o-1),"easing"in t&&(i.easing=t.easing),"composite"in t&&(i.composite=t.composite),i[n]=r[a],e.push(i)}return e.sort(function(t,e){return t.offset-e.offset}),e}var o={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},a=document.createElementNS("http://www.w3.org/1999/xhtml","div"),s={thin:"1px",medium:"3px",thick:"5px"},u={borderBottomWidth:s,borderLeftWidth:s,borderRightWidth:s,borderTopWidth:s,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:s,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};t.convertToArrayForm=i,t.normalizeKeyframes=function(e){if(null==e)return[];window.Symbol&&Symbol.iterator&&Array.prototype.from&&e[Symbol.iterator]&&(e=Array.from(e)),Array.isArray(e)||(e=i(e));for(var n=e.map(function(e){var n={};for(var i in e){var o=e[i];if("offset"==i){if(null!=o){if(o=Number(o),!isFinite(o))throw new TypeError("Keyframe offsets must be numbers.");if(o<0||o>1)throw new TypeError("Keyframe offsets must be between 0 and 1.")}}else if("composite"==i){if("add"==o||"accumulate"==o)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};if("replace"!=o)throw new TypeError("Invalid composite mode "+o+".")}else o="easing"==i?t.normalizeEasing(o):""+o;r(i,o,n)}return null==n.offset&&(n.offset=null),null==n.easing&&(n.easing="linear"),n}),o=!0,a=-1/0,s=0;s<n.length;s++){var u=n[s].offset;if(null!=u){if(u<a)throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");a=u}else o=!1}return n=n.filter(function(t){return t.offset>=0&&t.offset<=1}),o||function(){var t=n.length;null==n[t-1].offset&&(n[t-1].offset=1),t>1&&null==n[0].offset&&(n[0].offset=0);for(var e=0,r=n[0].offset,i=1;i<t;i++){var o=n[i].offset;if(null!=o){for(var a=1;a<i-e;a++)n[e+a].offset=r+(o-r)*a/(i-e);e=i,r=o}}}(),n}}(n),e={},(t=n).isDeprecated=function(t,n,r,i){var o=i?"are":"is",a=new Date,s=new Date(n);return s.setMonth(s.getMonth()+3),!(a<s&&(t in e||console.warn("Web Animations: "+t+" "+o+" deprecated and will stop working on "+s.toDateString()+". "+r),e[t]=!0,1))},t.deprecated=function(e,n,r,i){var o=i?"are":"is";if(t.isDeprecated(e,n,r,i))throw new Error(e+" "+o+" no longer supported. "+r)},function(){if(document.documentElement.animate){var t=document.documentElement.animate([],0),e=!0;if(t&&(e=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(n){void 0===t[n]&&(e=!0)})),!e)return}var i;!function(t,e,n){e.convertEffectInput=function(n){var r=function(t){for(var e={},n=0;n<t.length;n++)for(var r in t[n])if("offset"!=r&&"easing"!=r&&"composite"!=r){var i={offset:t[n].offset,easing:t[n].easing,value:t[n][r]};e[r]=e[r]||[],e[r].push(i)}for(var o in e){var a=e[o];if(0!=a[0].offset||1!=a[a.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return e}(t.normalizeKeyframes(n)),i=function(n){var r=[];for(var i in n)for(var o=n[i],a=0;a<o.length-1;a++){var s=a,u=a+1,l=o[s].offset,c=o[u].offset,f=l,d=c;0==a&&(f=-1/0,0==c&&(u=s)),a==o.length-2&&(d=1/0,1==l&&(s=u)),r.push({applyFrom:f,applyTo:d,startOffset:o[s].offset,endOffset:o[u].offset,easingFunction:t.parseEasingFunction(o[s].easing),property:i,interpolation:e.propertyInterpolation(i,o[s].value,o[u].value)})}return r.sort(function(t,e){return t.startOffset-e.startOffset}),r}(r);return function(t,n){if(null!=n)i.filter(function(t){return n>=t.applyFrom&&n<t.applyTo}).forEach(function(r){var i=n-r.startOffset,o=r.endOffset-r.startOffset,a=0==o?0:r.easingFunction(i/o);e.apply(t,r.property,r.interpolation(a))});else for(var o in r)"offset"!=o&&"easing"!=o&&"composite"!=o&&e.clear(t,o)}}}(n,r),function(t,e,n){function r(t){return t.replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function i(t,e,n){o[n]=o[n]||[],o[n].push([t,e])}var o={};e.addPropertiesHandler=function(t,e,n){for(var o=0;o<n.length;o++)i(t,e,r(n[o]))};var a={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",strokeDasharray:"none",strokeDashoffset:"0px",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};e.propertyInterpolation=function(n,i,s){var u=n;/-/.test(n)&&!t.isDeprecated("Hyphenated property names","2016-03-22","Use camelCase instead.",!0)&&(u=r(n)),"initial"!=i&&"initial"!=s||("initial"==i&&(i=a[u]),"initial"==s&&(s=a[u]));for(var l=i==s?[]:o[u],c=0;l&&c<l.length;c++){var f=l[c][0](i),d=l[c][0](s);if(void 0!==f&&void 0!==d){var h=l[c][1](f,d);if(h){var p=e.Interpolation.apply(null,h);return function(t){return 0==t?i:1==t?s:p(t)}}}}return e.Interpolation(!1,!0,function(t){return t?s:i})}}(n,r),function(t,e,n){e.KeyframeEffect=function(n,r,i,o){var a,s=function(e){var n=t.calculateActiveDuration(e),r=function(r){return t.calculateIterationProgress(n,r,e)};return r._totalDuration=e.delay+n+e.endDelay,r}(t.normalizeTimingInput(i)),u=e.convertEffectInput(r),l=function(){u(n,a)};return l._update=function(t){return null!==(a=s(t))},l._clear=function(){u(n,null)},l._hasSameTarget=function(t){return n===t},l._target=n,l._totalDuration=s._totalDuration,l._id=o,l}}(n,r),function(t,e){function n(t,e,n){n.enumerable=!0,n.configurable=!0,Object.defineProperty(t,e,n)}function r(t){this._element=t,this._surrogateStyle=document.createElementNS("http://www.w3.org/1999/xhtml","div").style,this._style=t.style,this._length=0,this._isAnimatedProperty={},this._updateSvgTransformAttr=function(t,e){return!(!e.namespaceURI||-1==e.namespaceURI.indexOf("/svg"))&&(i in t||(t[i]=/Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)),t[i])}(window,t),this._savedTransformAttr=null;for(var e=0;e<this._style.length;e++){var n=this._style[e];this._surrogateStyle[n]=this._style[n]}this._updateIndices()}var i="_webAnimationsUpdateSvgTransformAttr",o={cssText:1,length:1,parentRule:1},a={getPropertyCSSValue:1,getPropertyPriority:1,getPropertyValue:1,item:1,removeProperty:1,setProperty:1},s={removeProperty:1,setProperty:1};for(var u in r.prototype={get cssText(){return this._surrogateStyle.cssText},set cssText(t){for(var e={},n=0;n<this._surrogateStyle.length;n++)e[this._surrogateStyle[n]]=!0;this._surrogateStyle.cssText=t,this._updateIndices();for(n=0;n<this._surrogateStyle.length;n++)e[this._surrogateStyle[n]]=!0;for(var r in e)this._isAnimatedProperty[r]||this._style.setProperty(r,this._surrogateStyle.getPropertyValue(r))},get length(){return this._surrogateStyle.length},get parentRule(){return this._style.parentRule},_updateIndices:function(){for(;this._length<this._surrogateStyle.length;)Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,get:function(t){return function(){return this._surrogateStyle[t]}}(this._length)}),this._length++;for(;this._length>this._surrogateStyle.length;)this._length--,Object.defineProperty(this,this._length,{configurable:!0,enumerable:!1,value:void 0})},_set:function(e,n){this._style[e]=n,this._isAnimatedProperty[e]=!0,this._updateSvgTransformAttr&&"transform"==t.unprefixedPropertyName(e)&&(null==this._savedTransformAttr&&(this._savedTransformAttr=this._element.getAttribute("transform")),this._element.setAttribute("transform",t.transformToSvgMatrix(n)))},_clear:function(e){this._style[e]=this._surrogateStyle[e],this._updateSvgTransformAttr&&"transform"==t.unprefixedPropertyName(e)&&(this._savedTransformAttr?this._element.setAttribute("transform",this._savedTransformAttr):this._element.removeAttribute("transform"),this._savedTransformAttr=null),delete this._isAnimatedProperty[e]}},a)r.prototype[u]=function(t,e){return function(){var n=this._surrogateStyle[t].apply(this._surrogateStyle,arguments);return e&&(this._isAnimatedProperty[arguments[0]]||this._style[t].apply(this._style,arguments),this._updateIndices()),n}}(u,u in s);for(var l in document.documentElement.style)l in o||l in a||function(t){n(r.prototype,t,{get:function(){return this._surrogateStyle[t]},set:function(e){this._surrogateStyle[t]=e,this._updateIndices(),this._isAnimatedProperty[t]||(this._style[t]=e)}})}(l);t.apply=function(e,i,o){(function(t){if(!t._webAnimationsPatchedStyle){var e=new r(t);try{n(t,"style",{get:function(){return e}})}catch(e){t.style._set=function(e,n){t.style[e]=n},t.style._clear=function(e){t.style[e]=""}}t._webAnimationsPatchedStyle=t.style}})(e),e.style._set(t.propertyName(i),o)},t.clear=function(e,n){e._webAnimationsPatchedStyle&&e.style._clear(t.propertyName(n))}}(r),i=r,window.Element.prototype.animate=function(t,e){var n="";return e&&e.id&&(n=e.id),i.timeline._play(i.KeyframeEffect(this,t,e,n))},function(t,e){r.Interpolation=function(t,e,n){return function(r){return n(function t(e,n,r){if("number"==typeof e&&"number"==typeof n)return e*(1-r)+n*r;if("boolean"==typeof e&&"boolean"==typeof n)return r<.5?e:n;if(e.length==n.length){for(var i=[],o=0;o<e.length;o++)i.push(t(e[o],n[o],r));return i}throw"Mismatched interpolation arguments "+e+":"+n}(t,e,r))}}}(),function(t,e){var n=function(){function t(t,e){for(var n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],r=0;r<4;r++)for(var i=0;i<4;i++)for(var o=0;o<4;o++)n[r][i]+=e[r][o]*t[o][i];return n}return function(e,n,r,i,o){for(var a=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],s=0;s<4;s++)a[s][3]=o[s];for(s=0;s<3;s++)for(var u=0;u<3;u++)a[3][s]+=e[u]*a[u][s];var l=i[0],c=i[1],f=i[2],d=i[3],h=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];h[0][0]=1-2*(c*c+f*f),h[0][1]=2*(l*c-f*d),h[0][2]=2*(l*f+c*d),h[1][0]=2*(l*c+f*d),h[1][1]=1-2*(l*l+f*f),h[1][2]=2*(c*f-l*d),h[2][0]=2*(l*f-c*d),h[2][1]=2*(c*f+l*d),h[2][2]=1-2*(l*l+c*c),a=t(a,h);var p,m=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];for(r[2]&&(m[2][1]=r[2],a=t(a,m)),r[1]&&(m[2][1]=0,m[2][0]=r[0],a=t(a,m)),r[0]&&(m[2][0]=0,m[1][0]=r[0],a=t(a,m)),s=0;s<3;s++)for(u=0;u<3;u++)a[s][u]*=n[s];return 0==(p=a)[0][2]&&0==p[0][3]&&0==p[1][2]&&0==p[1][3]&&0==p[2][0]&&0==p[2][1]&&1==p[2][2]&&0==p[2][3]&&0==p[3][2]&&1==p[3][3]?[a[0][0],a[0][1],a[1][0],a[1][1],a[3][0],a[3][1]]:a[0].concat(a[1],a[2],a[3])}}();t.composeMatrix=n,t.quat=function(e,n,r){var i=t.dot(e,n),o=[];if(1===(i=function(t,e,n){return Math.max(Math.min(t,n),e)}(i,-1,1)))o=e;else for(var a=Math.acos(i),s=1*Math.sin(r*a)/Math.sqrt(1-i*i),u=0;u<4;u++)o.push(e[u]*(Math.cos(r*a)-i*s)+n[u]*s);return o}}(r),function(t,e,n){t.sequenceNumber=0;var r=function(t,e,n){this.target=t,this.currentTime=e,this.timelineTime=n,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=t,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};e.Animation=function(e){this.id="",e&&e._id&&(this.id=e._id),this._sequenceNumber=t.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!0,this.onfinish=null,this._finishHandlers=[],this._effect=e,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},e.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,e.timeline._animations.push(this))},_tickCurrentTime:function(t,e){t!=this._currentTime&&(this._currentTime=t,this._isFinished&&!e&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(t){t=+t,isNaN(t)||(e.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-t/this._playbackRate),this._currentTimePending=!1,this._currentTime!=t&&(this._idle&&(this._idle=!1,this._paused=!0),this._tickCurrentTime(t,!0),e.applyDirtiedAnimation(this)))},get startTime(){return this._startTime},set startTime(t){t=+t,isNaN(t)||this._paused||this._idle||(this._startTime=t,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),e.applyDirtiedAnimation(this))},get playbackRate(){return this._playbackRate},set playbackRate(t){if(t!=this._playbackRate){var n=this.currentTime;this._playbackRate=t,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&(this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),e.applyDirtiedAnimation(this)),null!=n&&(this.currentTime=n)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},_rewind:function(){if(this._playbackRate>=0)this._currentTime=0;else{if(!(this._totalDuration<1/0))throw new DOMException("Unable to rewind negative playback rate animation with infinite duration","InvalidStateError");this._currentTime=this._totalDuration}},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._rewind(),this._startTime=null),this._finishedFlag=!1,this._idle=!1,this._ensureAlive(),e.applyDirtiedAnimation(this)},pause:function(){this._isFinished||this._paused||this._idle?this._idle&&(this._rewind(),this._idle=!1):this._currentTimePending=!0,this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1,e.applyDirtiedAnimation(this))},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this._paused=!1,this._finishedFlag=!0,this._currentTime=0,this._startTime=null,this._effect._update(null),e.applyDirtiedAnimation(this))},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(t,e){"function"==typeof e&&"finish"==t&&this._finishHandlers.push(e)},removeEventListener:function(t,e){if("finish"==t){var n=this._finishHandlers.indexOf(e);n>=0&&this._finishHandlers.splice(n,1)}},_fireEvents:function(t){if(this._isFinished){if(!this._finishedFlag){var e=new r(this,this._currentTime,t),n=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);setTimeout(function(){n.forEach(function(t){t.call(e.target,e)})},0),this._finishedFlag=!0}}else this._finishedFlag=!1},_tick:function(t,e){this._idle||this._paused||(null==this._startTime?e&&(this.startTime=t-this._currentTime/this.playbackRate):this._isFinished||this._tickCurrentTime((t-this._startTime)*this.playbackRate)),e&&(this._currentTimePending=!1,this._fireEvents(t))},get _needsTick(){return this.playState in{pending:1,running:1}||!this._finishedFlag},_targetAnimations:function(){var t=this._effect._target;return t._activeAnimations||(t._activeAnimations=[]),t._activeAnimations},_markTarget:function(){var t=this._targetAnimations();-1===t.indexOf(this)&&t.push(this)},_unmarkTarget:function(){var t=this._targetAnimations(),e=t.indexOf(this);-1!==e&&t.splice(e,1)}}}(n,r),function(t,e,n){function r(t){var e=l;l=[],t<m.currentTime&&(t=m.currentTime),m._animations.sort(i),m._animations=s(t,!0,m._animations)[0],e.forEach(function(e){e[1](t)}),a(),void 0}function i(t,e){return t._sequenceNumber-e._sequenceNumber}function o(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function a(){h.forEach(function(t){t()}),h.length=0}function s(t,n,r){p=!0,d=!1,e.timeline.currentTime=t,f=!1;var i=[],o=[],a=[],s=[];return r.forEach(function(e){e._tick(t,n),e._inEffect?(o.push(e._effect),e._markTarget()):(i.push(e._effect),e._unmarkTarget()),e._needsTick&&(f=!0);var r=e._inEffect||e._needsTick;e._inTimeline=r,r?a.push(e):s.push(e)}),h.push.apply(h,i),h.push.apply(h,o),f&&requestAnimationFrame(function(){}),p=!1,[a,s]}var u=window.requestAnimationFrame,l=[],c=0;window.requestAnimationFrame=function(t){var e=c++;return 0==l.length&&u(r),l.push([e,t]),e},window.cancelAnimationFrame=function(t){l.forEach(function(e){e[0]==t&&(e[1]=function(){})})},o.prototype={_play:function(n){n._timing=t.normalizeTimingInput(n.timing);var r=new e.Animation(n);return r._idle=!1,r._timeline=this,this._animations.push(r),e.restart(),e.applyDirtiedAnimation(r),r}};var f=!1,d=!1;e.restart=function(){return f||(f=!0,requestAnimationFrame(function(){}),d=!0),d},e.applyDirtiedAnimation=function(t){if(!p){t._markTarget();var n=t._targetAnimations();n.sort(i),s(e.timeline.currentTime,!1,n.slice())[1].forEach(function(t){var e=m._animations.indexOf(t);-1!==e&&m._animations.splice(e,1)}),a()}};var h=[],p=!1,m=new o;e.timeline=m}(n,r),function(t,e){function n(t,e){for(var n=0,r=0;r<t.length;r++)n+=t[r]*e[r];return n}function r(t,e){return[t[0]*e[0]+t[4]*e[1]+t[8]*e[2]+t[12]*e[3],t[1]*e[0]+t[5]*e[1]+t[9]*e[2]+t[13]*e[3],t[2]*e[0]+t[6]*e[1]+t[10]*e[2]+t[14]*e[3],t[3]*e[0]+t[7]*e[1]+t[11]*e[2]+t[15]*e[3],t[0]*e[4]+t[4]*e[5]+t[8]*e[6]+t[12]*e[7],t[1]*e[4]+t[5]*e[5]+t[9]*e[6]+t[13]*e[7],t[2]*e[4]+t[6]*e[5]+t[10]*e[6]+t[14]*e[7],t[3]*e[4]+t[7]*e[5]+t[11]*e[6]+t[15]*e[7],t[0]*e[8]+t[4]*e[9]+t[8]*e[10]+t[12]*e[11],t[1]*e[8]+t[5]*e[9]+t[9]*e[10]+t[13]*e[11],t[2]*e[8]+t[6]*e[9]+t[10]*e[10]+t[14]*e[11],t[3]*e[8]+t[7]*e[9]+t[11]*e[10]+t[15]*e[11],t[0]*e[12]+t[4]*e[13]+t[8]*e[14]+t[12]*e[15],t[1]*e[12]+t[5]*e[13]+t[9]*e[14]+t[13]*e[15],t[2]*e[12]+t[6]*e[13]+t[10]*e[14]+t[14]*e[15],t[3]*e[12]+t[7]*e[13]+t[11]*e[14]+t[15]*e[15]]}function i(t){var e=t.rad||0;return((t.deg||0)/360+(t.grad||0)/400+(t.turn||0))*(2*Math.PI)+e}function o(t){switch(t.t){case"rotatex":var e=i(t.d[0]);return[1,0,0,0,0,Math.cos(e),Math.sin(e),0,0,-Math.sin(e),Math.cos(e),0,0,0,0,1];case"rotatey":e=i(t.d[0]);return[Math.cos(e),0,-Math.sin(e),0,0,1,0,0,Math.sin(e),0,Math.cos(e),0,0,0,0,1];case"rotate":case"rotatez":e=i(t.d[0]);return[Math.cos(e),Math.sin(e),0,0,-Math.sin(e),Math.cos(e),0,0,0,0,1,0,0,0,0,1];case"rotate3d":var n=t.d[0],r=t.d[1],o=t.d[2],a=(e=i(t.d[3]),n*n+r*r+o*o);if(0===a)n=1,r=0,o=0;else if(1!==a){var s=Math.sqrt(a);n/=s,r/=s,o/=s}var u=Math.sin(e/2),l=u*Math.cos(e/2),c=u*u;return[1-2*(r*r+o*o)*c,2*(n*r*c+o*l),2*(n*o*c-r*l),0,2*(n*r*c-o*l),1-2*(n*n+o*o)*c,2*(r*o*c+n*l),0,2*(n*o*c+r*l),2*(r*o*c-n*l),1-2*(n*n+r*r)*c,0,0,0,0,1];case"scale":return[t.d[0],0,0,0,0,t.d[1],0,0,0,0,1,0,0,0,0,1];case"scalex":return[t.d[0],0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"scaley":return[1,0,0,0,0,t.d[0],0,0,0,0,1,0,0,0,0,1];case"scalez":return[1,0,0,0,0,1,0,0,0,0,t.d[0],0,0,0,0,1];case"scale3d":return[t.d[0],0,0,0,0,t.d[1],0,0,0,0,t.d[2],0,0,0,0,1];case"skew":var f=i(t.d[0]),d=i(t.d[1]);return[1,Math.tan(d),0,0,Math.tan(f),1,0,0,0,0,1,0,0,0,0,1];case"skewx":e=i(t.d[0]);return[1,0,0,0,Math.tan(e),1,0,0,0,0,1,0,0,0,0,1];case"skewy":e=i(t.d[0]);return[1,Math.tan(e),0,0,0,1,0,0,0,0,1,0,0,0,0,1];case"translate":return[1,0,0,0,0,1,0,0,0,0,1,0,n=t.d[0].px||0,r=t.d[1].px||0,0,1];case"translatex":return[1,0,0,0,0,1,0,0,0,0,1,0,n=t.d[0].px||0,0,0,1];case"translatey":return[1,0,0,0,0,1,0,0,0,0,1,0,0,r=t.d[0].px||0,0,1];case"translatez":return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,o=t.d[0].px||0,1];case"translate3d":return[1,0,0,0,0,1,0,0,0,0,1,0,n=t.d[0].px||0,r=t.d[1].px||0,o=t.d[2].px||0,1];case"perspective":return[1,0,0,0,0,1,0,0,0,0,1,t.d[0].px?-1/t.d[0].px:0,0,0,0,1];case"matrix":return[t.d[0],t.d[1],0,0,t.d[2],t.d[3],0,0,0,0,1,0,t.d[4],t.d[5],0,1];case"matrix3d":return t.d}}function a(t){return 0===t.length?[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]:t.map(o).reduce(r)}var s=function(){function t(t){return t[0][0]*t[1][1]*t[2][2]+t[1][0]*t[2][1]*t[0][2]+t[2][0]*t[0][1]*t[1][2]-t[0][2]*t[1][1]*t[2][0]-t[1][2]*t[2][1]*t[0][0]-t[2][2]*t[0][1]*t[1][0]}function e(t){var e=r(t);return[t[0]/e,t[1]/e,t[2]/e]}function r(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}function i(t,e,n,r){return[n*t[0]+r*e[0],n*t[1]+r*e[1],n*t[2]+r*e[2]]}return function(o){var a=[o.slice(0,4),o.slice(4,8),o.slice(8,12),o.slice(12,16)];if(1!==a[3][3])return null;for(var s=[],u=0;u<4;u++)s.push(a[u].slice());for(u=0;u<3;u++)s[u][3]=0;if(0===t(s))return null;var l,c,f=[];a[0][3]||a[1][3]||a[2][3]?(f.push(a[0][3]),f.push(a[1][3]),f.push(a[2][3]),f.push(a[3][3]),l=function(t,e){for(var n=[],r=0;r<4;r++){for(var i=0,o=0;o<4;o++)i+=t[o]*e[o][r];n.push(i)}return n}(f,[[(c=function(e){for(var n=1/t(e),r=e[0][0],i=e[0][1],o=e[0][2],a=e[1][0],s=e[1][1],u=e[1][2],l=e[2][0],c=e[2][1],f=e[2][2],d=[[(s*f-u*c)*n,(o*c-i*f)*n,(i*u-o*s)*n,0],[(u*l-a*f)*n,(r*f-o*l)*n,(o*a-r*u)*n,0],[(a*c-s*l)*n,(l*i-r*c)*n,(r*s-i*a)*n,0]],h=[],p=0;p<3;p++){for(var m=0,g=0;g<3;g++)m+=e[3][g]*d[g][p];h.push(m)}return h.push(1),d.push(h),d}(s))[0][0],c[1][0],c[2][0],c[3][0]],[c[0][1],c[1][1],c[2][1],c[3][1]],[c[0][2],c[1][2],c[2][2],c[3][2]],[c[0][3],c[1][3],c[2][3],c[3][3]]])):l=[0,0,0,1];var d=a[3].slice(0,3),h=[];h.push(a[0].slice(0,3));var p=[];p.push(r(h[0])),h[0]=e(h[0]);var m=[];h.push(a[1].slice(0,3)),m.push(n(h[0],h[1])),h[1]=i(h[1],h[0],1,-m[0]),p.push(r(h[1])),h[1]=e(h[1]),m[0]/=p[1],h.push(a[2].slice(0,3)),m.push(n(h[0],h[2])),h[2]=i(h[2],h[0],1,-m[1]),m.push(n(h[1],h[2])),h[2]=i(h[2],h[1],1,-m[2]),p.push(r(h[2])),h[2]=e(h[2]),m[1]/=p[2],m[2]/=p[2];var g=function(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}(h[1],h[2]);if(n(h[0],g)<0)for(u=0;u<3;u++)p[u]*=-1,h[u][0]*=-1,h[u][1]*=-1,h[u][2]*=-1;var v,b,y=h[0][0]+h[1][1]+h[2][2]+1;return y>1e-4?(v=.5/Math.sqrt(y),b=[(h[2][1]-h[1][2])*v,(h[0][2]-h[2][0])*v,(h[1][0]-h[0][1])*v,.25/v]):h[0][0]>h[1][1]&&h[0][0]>h[2][2]?b=[.25*(v=2*Math.sqrt(1+h[0][0]-h[1][1]-h[2][2])),(h[0][1]+h[1][0])/v,(h[0][2]+h[2][0])/v,(h[2][1]-h[1][2])/v]:h[1][1]>h[2][2]?(v=2*Math.sqrt(1+h[1][1]-h[0][0]-h[2][2]),b=[(h[0][1]+h[1][0])/v,.25*v,(h[1][2]+h[2][1])/v,(h[0][2]-h[2][0])/v]):(v=2*Math.sqrt(1+h[2][2]-h[0][0]-h[1][1]),b=[(h[0][2]+h[2][0])/v,(h[1][2]+h[2][1])/v,.25*v,(h[1][0]-h[0][1])/v]),[d,p,m,b,l]}}();t.dot=n,t.makeMatrixDecomposition=function(t){return[s(a(t))]},t.transformListToMatrix=a}(r),function(t){function e(t,e){var n=t.exec(e);if(n)return[n=t.ignoreCase?n[0].toLowerCase():n[0],e.substr(n.length)]}function n(t,e){var n=t(e=e.replace(/^\s*/,""));if(n)return[n[0],n[1].replace(/^\s*/,"")]}function r(t,e,n,r,i){for(var o=[],a=[],s=[],u=function(t,e){for(var n=t,r=e;n&&r;)n>r?n%=r:r%=n;return t*e/(n+r)}(r.length,i.length),l=0;l<u;l++){var c=e(r[l%r.length],i[l%i.length]);if(!c)return;o.push(c[0]),a.push(c[1]),s.push(c[2])}return[o,a,function(e){var r=e.map(function(t,e){return s[e](t)}).join(n);return t?t(r):r}]}t.consumeToken=e,t.consumeTrimmed=n,t.consumeRepeated=function(t,r,i){t=n.bind(null,t);for(var o=[];;){var a=t(i);if(!a)return[o,i];if(o.push(a[0]),!(a=e(r,i=a[1]))||""==a[1])return[o,i];i=a[1]}},t.consumeParenthesised=function(t,e){for(var n=0,r=0;r<e.length&&(!/\s|,/.test(e[r])||0!=n);r++)if("("==e[r])n++;else if(")"==e[r]&&(0==--n&&r++,n<=0))break;var i=t(e.substr(0,r));return null==i?void 0:[i,e.substr(r)]},t.ignore=function(t){return function(e){var n=t(e);return n&&(n[0]=void 0),n}},t.optional=function(t,e){return function(n){return t(n)||[e,n]}},t.consumeList=function(e,n){for(var r=[],i=0;i<e.length;i++){var o=t.consumeTrimmed(e[i],n);if(!o||""==o[0])return;void 0!==o[0]&&r.push(o[0]),n=o[1]}if(""==n)return r},t.mergeNestedRepeated=r.bind(null,null),t.mergeWrappedNestedRepeated=r,t.mergeList=function(t,e,n){for(var r=[],i=[],o=[],a=0,s=0;s<n.length;s++)if("function"==typeof n[s]){var u=n[s](t[a],e[a++]);r.push(u[0]),i.push(u[1]),o.push(u[2])}else!function(t){r.push(!1),i.push(!1),o.push(function(){return n[t]})}(s);return[r,i,function(t){for(var e="",n=0;n<t.length;n++)e+=o[n](t[n]);return e}]}}(r),function(t){function e(e){var n={inset:!1,lengths:[],color:null},r=t.consumeRepeated(function(e){var r=t.consumeToken(/^inset/i,e);return r?(n.inset=!0,r):(r=t.consumeLengthOrPercent(e))?(n.lengths.push(r[0]),r):(r=t.consumeColor(e))?(n.color=r[0],r):void 0},/^/,e);if(r&&r[0].length)return[n,r[1]]}var n=function(e,n,r,i){function o(t){return{inset:t,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var a=[],s=[],u=0;u<r.length||u<i.length;u++){var l=r[u]||o(i[u].inset),c=i[u]||o(r[u].inset);a.push(l),s.push(c)}return t.mergeNestedRepeated(e,n,a,s)}.bind(null,function(e,n){for(;e.lengths.length<Math.max(e.lengths.length,n.lengths.length);)e.lengths.push({px:0});for(;n.lengths.length<Math.max(e.lengths.length,n.lengths.length);)n.lengths.push({px:0});if(e.inset==n.inset&&!!e.color==!!n.color){for(var r,i=[],o=[[],0],a=[[],0],s=0;s<e.lengths.length;s++){var u=t.mergeDimensions(e.lengths[s],n.lengths[s],2==s);o[0].push(u[0]),a[0].push(u[1]),i.push(u[2])}if(e.color&&n.color){var l=t.mergeColors(e.color,n.color);o[1]=l[0],a[1]=l[1],r=l[2]}return[o,a,function(t){for(var n=e.inset?"inset ":" ",o=0;o<i.length;o++)n+=i[o](t[0][o])+" ";return r&&(n+=r(t[1])),n}]}},", ");t.addPropertiesHandler(function(n){var r=t.consumeRepeated(e,/^,/,n);if(r&&""==r[1])return r[0]},n,["box-shadow","text-shadow"])}(r),function(t,e){function n(t){return t.toFixed(3).replace(/0+$/,"").replace(/\.$/,"")}function r(t,e,n){return Math.min(e,Math.max(t,n))}function i(t){if(/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t))return Number(t)}function o(t,e){return function(i,o){return[i,o,function(i){return n(r(t,e,i))}]}}function a(t){var e=t.trim().split(/\s*[\s,]\s*/);if(0!==e.length){for(var n=[],r=0;r<e.length;r++){var o=i(e[r]);if(void 0===o)return;n.push(o)}return n}}t.clamp=r,t.addPropertiesHandler(a,function(t,e){if(t.length==e.length)return[t,e,function(t){return t.map(n).join(" ")}]},["stroke-dasharray"]),t.addPropertiesHandler(i,o(0,1/0),["border-image-width","line-height"]),t.addPropertiesHandler(i,o(0,1),["opacity","shape-image-threshold"]),t.addPropertiesHandler(i,function(t,e){if(0!=t)return o(0,1/0)(t,e)},["flex-grow","flex-shrink"]),t.addPropertiesHandler(i,function(t,e){return[t,e,function(t){return Math.round(r(1,1/0,t))}]},["orphans","widows"]),t.addPropertiesHandler(i,function(t,e){return[t,e,Math.round]},["z-index"]),t.parseNumber=i,t.parseNumberList=a,t.mergeNumbers=function(t,e){return[t,e,n]},t.numberToString=n}(r),function(t,e){r.addPropertiesHandler(String,function(t,e){if("visible"==t||"visible"==e)return[0,1,function(n){return n<=0?t:n>=1?e:"visible"}]},["visibility"])}(),function(t,e){function n(t){t=t.trim(),o.fillStyle="#000",o.fillStyle=t;var e=o.fillStyle;if(o.fillStyle="#fff",o.fillStyle=t,e==o.fillStyle){o.fillRect(0,0,1,1);var n=o.getImageData(0,0,1,1).data;o.clearRect(0,0,1,1);var r=n[3]/255;return[n[0]*r,n[1]*r,n[2]*r,r]}}function r(e,n){return[e,n,function(e){if(e[3])for(var n=0;n<3;n++)e[n]=Math.round((r=e[n]/e[3],Math.max(0,Math.min(255,r))));var r;return e[3]=t.numberToString(t.clamp(0,1,e[3])),"rgba("+e.join(",")+")"}]}var i=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");i.width=i.height=1;var o=i.getContext("2d");t.addPropertiesHandler(n,r,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","fill","flood-color","lighting-color","outline-color","stop-color","stroke","text-decoration-color"]),t.consumeColor=t.consumeParenthesised.bind(null,n),t.mergeColors=r}(r),function(t,e){function n(t){function e(){var e=a.exec(t);o=e?e[0]:void 0}function n(){if("("!==o)return function(){var t=Number(o);return e(),t}();e();var t=i();return")"!==o?NaN:(e(),t)}function r(){for(var t=n();"*"===o||"/"===o;){var r=o;e();var i=n();"*"===r?t*=i:t/=i}return t}function i(){for(var t=r();"+"===o||"-"===o;){var n=o;e();var i=r();"+"===n?t+=i:t-=i}return t}var o,a=/([\+\-\w\.]+|[\(\)\*\/])/g;return e(),i()}function r(t,e){if("0"==(e=e.trim().toLowerCase())&&"px".search(t)>=0)return{px:0};if(/^[^(]*$|^calc/.test(e)){e=e.replace(/calc\(/g,"(");var r={};e=e.replace(t,function(t){return r[t]=null,"U"+t});for(var i="U("+t.source+")",o=e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g,"N").replace(new RegExp("N"+i,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),a=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],s=0;s<a.length;)a[s].test(o)?(o=o.replace(a[s],"$1"),s=0):s++;if("D"==o){for(var u in r){var l=n(e.replace(new RegExp("U"+u,"g"),"").replace(new RegExp(i,"g"),"*0"));if(!isFinite(l))return;r[u]=l}return r}}}function i(t,e){return o(t,e,!0)}function o(e,n,r){var i,o=[];for(i in e)o.push(i);for(i in n)o.indexOf(i)<0&&o.push(i);return e=o.map(function(t){return e[t]||0}),n=o.map(function(t){return n[t]||0}),[e,n,function(e){var n=e.map(function(n,i){return 1==e.length&&r&&(n=Math.max(n,0)),t.numberToString(n)+o[i]}).join(" + ");return e.length>1?"calc("+n+")":n}]}var a="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",s=r.bind(null,new RegExp(a,"g")),u=r.bind(null,new RegExp(a+"|%","g")),l=r.bind(null,/deg|rad|grad|turn/g);t.parseLength=s,t.parseLengthOrPercent=u,t.consumeLengthOrPercent=t.consumeParenthesised.bind(null,u),t.parseAngle=l,t.mergeDimensions=o;var c=t.consumeParenthesised.bind(null,s),f=t.consumeRepeated.bind(void 0,c,/^/),d=t.consumeRepeated.bind(void 0,f,/^,/);t.consumeSizePairList=d;var h=t.mergeNestedRepeated.bind(void 0,i," "),p=t.mergeNestedRepeated.bind(void 0,h,",");t.mergeNonNegativeSizePair=h,t.addPropertiesHandler(function(t){var e=d(t);if(e&&""==e[1])return e[0]},p,["background-size"]),t.addPropertiesHandler(u,i,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),t.addPropertiesHandler(u,o,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","stroke-dashoffset","text-indent","top","vertical-align","word-spacing"])}(r),function(t,e){function n(e){return t.consumeLengthOrPercent(e)||t.consumeToken(/^auto/,e)}function r(e){var r=t.consumeList([t.ignore(t.consumeToken.bind(null,/^rect/)),t.ignore(t.consumeToken.bind(null,/^\(/)),t.consumeRepeated.bind(null,n,/^,/),t.ignore(t.consumeToken.bind(null,/^\)/))],e);if(r&&4==r[0].length)return r[0]}var i=t.mergeWrappedNestedRepeated.bind(null,function(t){return"rect("+t+")"},function(e,n){return"auto"==e||"auto"==n?[!0,!1,function(r){var i=r?e:n;if("auto"==i)return"auto";var o=t.mergeDimensions(i,i);return o[2](o[0])}]:t.mergeDimensions(e,n)},", ");t.parseBox=r,t.mergeBoxes=i,t.addPropertiesHandler(r,i,["clip"])}(r),function(t,e){function n(t){return function(e){var n=0;return t.map(function(t){return t===l?e[n++]:t})}}function r(t){return t}function i(e){if("none"==(e=e.toLowerCase().trim()))return[];for(var n,r=/\s*(\w+)\(([^)]*)\)/g,i=[],o=0;n=r.exec(e);){if(n.index!=o)return;o=n.index+n[0].length;var a=n[1],s=d[a];if(!s)return;var u=n[2].split(","),l=s[0];if(l.length<u.length)return;for(var h=[],p=0;p<l.length;p++){var m,g=u[p],v=l[p];if(void 0===(m=g?{A:function(e){return"0"==e.trim()?f:t.parseAngle(e)},N:t.parseNumber,T:t.parseLengthOrPercent,L:t.parseLength}[v.toUpperCase()](g):{a:f,n:h[0],t:c}[v]))return;h.push(m)}if(i.push({t:a,d:h}),r.lastIndex==e.length)return i}}function o(t){return t.toFixed(6).replace(".000000","")}function a(e,n){if(e.decompositionPair!==n){e.decompositionPair=n;var r=t.makeMatrixDecomposition(e)}if(n.decompositionPair!==e){n.decompositionPair=e;var i=t.makeMatrixDecomposition(n)}return null==r[0]||null==i[0]?[[!1],[!0],function(t){return t?n[0].d:e[0].d}]:(r[0].push(0),i[0].push(1),[r,i,function(e){var n=t.quat(r[0][3],i[0][3],e[5]);return t.composeMatrix(e[0],e[1],e[2],n,e[4]).map(o).join(",")}])}function s(t){return t.replace(/[xy]/,"")}function u(t){return t.replace(/(x|y|z|3d)?$/,"3d")}var l=null,c={px:0},f={deg:0},d={matrix:["NNNNNN",[l,l,0,0,l,l,0,0,0,0,1,0,l,l,0,1],r],matrix3d:["NNNNNNNNNNNNNNNN",r],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",n([l,l,1]),r],scalex:["N",n([l,1,1]),n([l,1])],scaley:["N",n([1,l,1]),n([1,l])],scalez:["N",n([1,1,l])],scale3d:["NNN",r],skew:["Aa",null,r],skewx:["A",null,n([l,f])],skewy:["A",null,n([f,l])],translate:["Tt",n([l,l,c]),r],translatex:["T",n([l,c,c]),n([l,c])],translatey:["T",n([c,l,c]),n([c,l])],translatez:["L",n([c,c,l])],translate3d:["TTL",r]};t.addPropertiesHandler(i,function(e,n){var r=t.makeMatrixDecomposition&&!0,i=!1;if(!e.length||!n.length){e.length||(i=!0,e=n,n=[]);for(var o=0;o<e.length;o++){var l=e[o].t,c=e[o].d,f="scale"==l.substr(0,5)?1:0;n.push({t:l,d:c.map(function(t){if("number"==typeof t)return f;var e={};for(var n in t)e[n]=f;return e})})}}var h,p,m=[],g=[],v=[];if(e.length!=n.length){if(!r)return;m=[(E=a(e,n))[0]],g=[E[1]],v=[["matrix",[E[2]]]]}else for(o=0;o<e.length;o++){var b=e[o].t,y=n[o].t,_=e[o].d,w=n[o].d,T=d[b],x=d[y];if(p=y,"perspective"==(h=b)&&"perspective"==p||("matrix"==h||"matrix3d"==h)&&("matrix"==p||"matrix3d"==p)){if(!r)return;var E=a([e[o]],[n[o]]);m.push(E[0]),g.push(E[1]),v.push(["matrix",[E[2]]])}else{if(b==y)l=b;else if(T[2]&&x[2]&&s(b)==s(y))l=s(b),_=T[2](_),w=x[2](w);else{if(!T[1]||!x[1]||u(b)!=u(y)){if(!r)return;m=[(E=a(e,n))[0]],g=[E[1]],v=[["matrix",[E[2]]]];break}l=u(b),_=T[1](_),w=x[1](w)}for(var S=[],P=[],k=[],N=0;N<_.length;N++)E=("number"==typeof _[N]?t.mergeNumbers:t.mergeDimensions)(_[N],w[N]),S[N]=E[0],P[N]=E[1],k.push(E[2]);m.push(S),g.push(P),v.push([l,k])}}if(i){var A=m;m=g,g=A}return[m,g,function(t){return t.map(function(t,e){var n=t.map(function(t,n){return v[e][1][n](t)}).join(",");return"matrix"==v[e][0]&&16==n.split(",").length&&(v[e][0]="matrix3d"),v[e][0]+"("+n+")"}).join(" ")}]},["transform"]),t.transformToSvgMatrix=function(e){var n=t.transformListToMatrix(i(e));return"matrix("+o(n[0])+" "+o(n[1])+" "+o(n[4])+" "+o(n[5])+" "+o(n[12])+" "+o(n[13])+")"}}(r),function(t){function e(e){return e=100*Math.round(e/100),400===(e=t.clamp(100,900,e))?"normal":700===e?"bold":String(e)}t.addPropertiesHandler(function(t){var e=Number(t);if(!(isNaN(e)||e<100||e>900||e%100!=0))return e},function(t,n){return[t,n,e]},["font-weight"])}(r),function(t){function e(t){var e={};for(var n in t)e[n]=-t[n];return e}function n(e){return t.consumeToken(/^(left|center|right|top|bottom)\b/i,e)||t.consumeLengthOrPercent(e)}function r(e,r){var i=t.consumeRepeated(n,/^/,r);if(i&&""==i[1]){var a=i[0];if(a[0]=a[0]||"center",a[1]=a[1]||"center",3==e&&(a[2]=a[2]||{px:0}),a.length==e){if(/top|bottom/.test(a[0])||/left|right/.test(a[1])){var s=a[0];a[0]=a[1],a[1]=s}if(/left|right|center|Object/.test(a[0])&&/top|bottom|center|Object/.test(a[1]))return a.map(function(t){return"object"==typeof t?t:o[t]})}}}function i(r){var i=t.consumeRepeated(n,/^/,r);if(i){for(var a=i[0],s=[{"%":50},{"%":50}],u=0,l=!1,c=0;c<a.length;c++){var f=a[c];"string"==typeof f?(l=/bottom|right/.test(f),s[u={left:0,right:0,center:u,top:1,bottom:1}[f]]=o[f],"center"==f&&u++):(l&&((f=e(f))["%"]=(f["%"]||0)+100),s[u]=f,u++,l=!1)}return[s,i[1]]}}var o={left:{"%":0},center:{"%":50},right:{"%":100},top:{"%":0},bottom:{"%":100}},a=t.mergeNestedRepeated.bind(null,t.mergeDimensions," ");t.addPropertiesHandler(r.bind(null,3),a,["transform-origin"]),t.addPropertiesHandler(r.bind(null,2),a,["perspective-origin"]),t.consumePosition=i,t.mergeOffsetList=a;var s=t.mergeNestedRepeated.bind(null,a,", ");t.addPropertiesHandler(function(e){var n=t.consumeRepeated(i,/^,/,e);if(n&&""==n[1])return n[0]},s,["background-position","object-position"])}(r),function(t){var e=t.consumeParenthesised.bind(null,t.parseLengthOrPercent),n=t.consumeRepeated.bind(void 0,e,/^/),r=t.mergeNestedRepeated.bind(void 0,t.mergeDimensions," "),i=t.mergeNestedRepeated.bind(void 0,r,",");t.addPropertiesHandler(function(r){var i=t.consumeToken(/^circle/,r);if(i&&i[0])return["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0,/^\(/)),e,t.ignore(t.consumeToken.bind(void 0,/^at/)),t.consumePosition,t.ignore(t.consumeToken.bind(void 0,/^\)/))],i[1]));var o=t.consumeToken(/^ellipse/,r);if(o&&o[0])return["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0,/^\(/)),n,t.ignore(t.consumeToken.bind(void 0,/^at/)),t.consumePosition,t.ignore(t.consumeToken.bind(void 0,/^\)/))],o[1]));var a=t.consumeToken(/^polygon/,r);return a&&a[0]?["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0,/^\(/)),t.optional(t.consumeToken.bind(void 0,/^nonzero\s*,|^evenodd\s*,/),"nonzero,"),t.consumeSizePairList,t.ignore(t.consumeToken.bind(void 0,/^\)/))],a[1])):void 0},function(e,n){if(e[0]===n[0])return"circle"==e[0]?t.mergeList(e.slice(1),n.slice(1),["circle(",t.mergeDimensions," at ",t.mergeOffsetList,")"]):"ellipse"==e[0]?t.mergeList(e.slice(1),n.slice(1),["ellipse(",t.mergeNonNegativeSizePair," at ",t.mergeOffsetList,")"]):"polygon"==e[0]&&e[1]==n[1]?t.mergeList(e.slice(2),n.slice(2),["polygon(",e[1],i,")"]):void 0},["shape-outside"])}(r),function(t,e){function n(t,e){e.concat([t]).forEach(function(e){e in document.documentElement.style&&(r[t]=e),i[e]=t})}var r={},i={};n("transform",["webkitTransform","msTransform"]),n("transformOrigin",["webkitTransformOrigin"]),n("perspective",["webkitPerspective"]),n("perspectiveOrigin",["webkitPerspectiveOrigin"]),t.propertyName=function(t){return r[t]||t},t.unprefixedPropertyName=function(t){return i[t]||t}}(r)}(),function(){if(void 0===document.createElement("div").animate([]).oncancel){if(window.performance&&performance.now)var t=function(){return performance.now()};else t=function(){return Date.now()};var e=function(t,e,n){this.target=t,this.currentTime=e,this.timelineTime=n,this.type="cancel",this.bubbles=!1,this.cancelable=!1,this.currentTarget=t,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()},n=window.Element.prototype.animate;window.Element.prototype.animate=function(r,i){var o=n.call(this,r,i);o._cancelHandlers=[],o.oncancel=null;var a=o.cancel;o.cancel=function(){a.call(this);var n=new e(this,null,t()),r=this._cancelHandlers.concat(this.oncancel?[this.oncancel]:[]);setTimeout(function(){r.forEach(function(t){t.call(n.target,n)})},0)};var s=o.addEventListener;o.addEventListener=function(t,e){"function"==typeof e&&"cancel"==t?this._cancelHandlers.push(e):s.call(this,t,e)};var u=o.removeEventListener;return o.removeEventListener=function(t,e){if("cancel"==t){var n=this._cancelHandlers.indexOf(e);n>=0&&this._cancelHandlers.splice(n,1)}else u.call(this,t,e)},o}}}(),function(t){var e=document.documentElement,n=null,r=!1;try{var i="0"==getComputedStyle(e).getPropertyValue("opacity")?"1":"0";(n=e.animate({opacity:[i,i]},{duration:1})).currentTime=0,r=getComputedStyle(e).getPropertyValue("opacity")==i}catch(t){}finally{n&&n.cancel()}if(!r){var o=window.Element.prototype.animate;window.Element.prototype.animate=function(e,n){return window.Symbol&&Symbol.iterator&&Array.prototype.from&&e[Symbol.iterator]&&(e=Array.from(e)),Array.isArray(e)||null===e||(e=t.convertToArrayForm(e)),o.call(this,e,n)}}}(n)}(),function(t,e){if("function"!=typeof t.createEvent)return!1;var n,r,i,o,a,s,u,l,c,f=function(t){var e=t.toLowerCase(),n="MS"+t;return navigator.msPointerEnabled?n:!!window.PointerEvent&&e},d=function(t){return"on"+t in window&&t},h={useJquery:!e.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:e.SWIPE_THRESHOLD||100,tapThreshold:e.TAP_THRESHOLD||150,dbltapThreshold:e.DBL_TAP_THRESHOLD||200,longtapThreshold:e.LONG_TAP_THRESHOLD||1e3,tapPrecision:e.TAP_PRECISION/2||30,justTouchEvents:e.JUST_ON_TOUCH_DEVICES},p=!1,m=d("touchstart")||f("PointerDown"),g=d("touchend")||f("PointerUp"),v=d("touchmove")||f("PointerMove"),b=function(t){return!t.pointerId||void 0===n||t.pointerId===n},y=function(t,e,n){for(var r=e.split(" "),i=r.length;i--;)t.addEventListener(r[i],n,!1)},_=function(t){var e=Boolean(t.targetTouches&&t.targetTouches.length);switch(!0){case Boolean(t.target.touches):return t.target.touches[0];case e&&void 0!==t.targetTouches[0].pageX:return t.targetTouches[0];case e&&Boolean(t.targetTouches[0].touches):return t.targetTouches[0].touches[0];default:return t}},w=function(t){return(t.targetTouches||t.target.touches||[]).length>1},T=function(){return(new Date).getTime()},x=function(e,n,o,a){var s=t.createEvent("Event");if(s.originalEvent=o,(a=a||{}).x=r,a.y=i,h.useJquery&&(s=jQuery.Event(n,{originalEvent:o}),jQuery(e).trigger(s,a)),s.initEvent){for(var u in a)s[u]=a[u];s.initEvent(n,!0,!0),e.dispatchEvent(s)}for(;e;)e["on"+n]&&e["on"+n](s),e=e.parentNode},E=0;y(t,m+(h.justTouchEvents?"":" mousedown"),function(t){if(b(t)&&!w(t)&&(n=t.pointerId,"mousedown"!==t.type&&(p=!0),"mousedown"!==t.type||!p)){var e=_(t);o=r=e.pageX,a=i=e.pageY,c=setTimeout(function(){x(t.target,"longtap",t),u=t.target},h.longtapThreshold),s=T(),E++}}),y(t,g+(h.justTouchEvents?"":" mouseup"),function(t){if(b(t)&&!w(t))if(n=void 0,"mouseup"===t.type&&p)p=!1;else{var e=[],f=T(),d=a-i,m=o-r;if(clearTimeout(l),clearTimeout(c),m<=-h.swipeThreshold&&e.push("swiperight"),m>=h.swipeThreshold&&e.push("swipeleft"),d<=-h.swipeThreshold&&e.push("swipedown"),d>=h.swipeThreshold&&e.push("swipeup"),e.length){for(var g=0;g<e.length;g++){var v=e[g];x(t.target,v,t,{distance:{x:Math.abs(m),y:Math.abs(d)}})}E=0}else o>=r-h.tapPrecision&&o<=r+h.tapPrecision&&a>=i-h.tapPrecision&&a<=i+h.tapPrecision&&s+h.tapThreshold-f>=0&&(x(t.target,E>=2&&u===t.target?"dbltap":"tap",t),u=t.target),l=setTimeout(function(){E=0},h.dbltapThreshold)}}),y(t,v+(h.justTouchEvents?"":" mousemove"),function(t){if(b(t)&&("mousemove"!==t.type||!p)){var e=_(t);r=e.pageX,i=e.pageY}}),e.tocca=function(t){for(var e in t)h[e]=t[e];return h}}(document,window);var n=new Set,r=document.createElement("link"),i=r.relList&&r.relList.supports&&r.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,o="instantAllowQueryString"in document.body.dataset,a="instantAllowExternalLinks"in document.body.dataset,s="instantWhitelist"in document.body.dataset,u="instantMousedownShortcut"in document.body.dataset,l=1111,c=65,f=!1,d=!1,h=!1;if("instantIntensity"in document.body.dataset){const t=document.body.dataset.instantIntensity;if("mousedown"==t.substr(0,"mousedown".length))f=!0,"mousedown-only"==t&&(d=!0);else if("viewport"==t.substr(0,"viewport".length))navigator.connection&&(navigator.connection.saveData||navigator.connection.effectiveType&&navigator.connection.effectiveType.includes("2g"))||("viewport"==t?document.documentElement.clientWidth*document.documentElement.clientHeight<45e4&&(h=!0):"viewport-all"==t&&(h=!0));else{const e=parseInt(t);isNaN(e)||(c=e)}}if(i){const n={capture:!0,passive:!0};if(d||document.addEventListener("touchstart",function(t){e=performance.now();const n=t.target.closest("a");if(!m(n))return;g(n.href)},n),f?u||document.addEventListener("mousedown",function(t){const e=t.target.closest("a");if(!m(e))return;g(e.href)},n):document.addEventListener("mouseover",function(n){if(performance.now()-e<l)return;const r=n.target.closest("a");if(!m(r))return;r.addEventListener("mouseout",p,{passive:!0}),t=setTimeout(()=>{g(r.href),t=void 0},c)},n),u&&document.addEventListener("mousedown",function(t){if(performance.now()-e<l)return;const n=t.target.closest("a");if(t.which>1||t.metaKey||t.ctrlKey)return;if(!n)return;n.addEventListener("click",function(t){1337!=t.detail&&t.preventDefault()},{capture:!0,passive:!1,once:!0});const r=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1,detail:1337});n.dispatchEvent(r)},n),h){let t;(t=window.requestIdleCallback?t=>{requestIdleCallback(t,{timeout:1500})}:t=>{t()})(()=>{const t=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const n=e.target;t.unobserve(n),g(n.href)}})});document.querySelectorAll("a").forEach(e=>{m(e)&&t.observe(e)})})}}function p(e){e.relatedTarget&&e.target.closest("a")==e.relatedTarget.closest("a")||t&&(clearTimeout(t),t=void 0)}function m(t){if(t&&t.href&&(!s||"instant"in t.dataset)&&(a||t.origin==location.origin||"instant"in t.dataset)&&["http:","https:"].includes(t.protocol)&&("http:"!=t.protocol||"https:"!=location.protocol)&&(o||!t.search||"instant"in t.dataset)&&!(t.hash&&t.pathname+t.search==location.pathname+location.search||"noInstant"in t.dataset))return!0}function g(t){if(n.has(t))return;const e=document.createElement("link");e.rel="prefetch",e.href=t,document.head.appendChild(e),n.add(t)}var v=t=>void 0===t||"auto"===t||"instant"===t||"smooth"===t;function b(t,e){this.scrollLeft=t,this.scrollTop=e}var y=(t,e,n="cannot convert to dictionary.")=>`Failed to execute '${t}' on '${e}': ${n}`,_=(t,e,n)=>y(t,e,`The provided value '${n}' is not a valid enum value of type ScrollBehavior.`),w=(t,e,n)=>{var r;const i=`__SEAMLESS.BACKUP$${e}`;return t[i]||!t[e]||(null==(r=t[e])?void 0:r.__isPolyfill)||(t[i]=t[e]),t[i]||n},T=t=>{const e=typeof t;return null!==t&&("object"===e||"function"===e)},x=()=>"scrollBehavior"in window.document.documentElement.style,E=t=>{Object.defineProperty(t,"__isPolyfill",{value:!0})},S=(t,e)=>{E(e),[HTMLElement.prototype,SVGElement.prototype,Element.prototype].forEach(n=>{w(n,t),n[t]=e})},P=t=>t.ownerDocument.scrollingElement||t.ownerDocument.documentElement,k=()=>{var t,e,n;return null!=(n=null==(e=null==(t=window.performance)?void 0:t.now)?void 0:e.call(t))?n:window.Date.now()},N=t=>{const e=(k()-t.timeStamp)/(t.duration||500);if(e>1)return t.method(t.targetX,t.targetY),void t.callback();const n=(t.timingFunc||(t=>.5*(1-Math.cos(Math.PI*t))))(e),r=t.startX+(t.targetX-t.startX)*n,i=t.startY+(t.targetY-t.startY)*n;t.method(r,i),t.rafId=window.requestAnimationFrame(()=>{N(t)})},A=t=>isFinite(t)?Number(t):0,R=t=>(e,n,r)=>{const[i,o]=(t=>t.window===t)(e)?[P(e.document.documentElement),"Window"]:[e,"Element"],a=null!=n?n:{};if(!T(a))throw new TypeError(y(t,o));if(!v(a.behavior))throw new TypeError(_(t,o,a.behavior));"scrollBy"===t&&(a.left=A(a.left)+i.scrollLeft,a.top=A(a.top)+i.scrollTop),((t,e,n)=>{var r,i;if(!(t=>{var e;return null!=(e=t.isConnected)?e:!(t.ownerDocument&&1&t.ownerDocument.compareDocumentPosition(t))})(t))return;const o=t.scrollLeft,a=t.scrollTop,s=A(null!=(r=e.left)?r:o),u=A(null!=(i=e.top)?i:a);if(s===o&&u===a)return;const l=w(HTMLElement.prototype,"scroll",b),c=w(Object.getPrototypeOf(t),"scroll",l).bind(t);if("smooth"!==e.behavior)return void c(s,u);const f=()=>{window.removeEventListener("wheel",h),window.removeEventListener("touchmove",h)},d={...n,timeStamp:k(),startX:o,startY:a,targetX:s,targetY:u,rafId:0,method:c,callback:f},h=()=>{window.cancelAnimationFrame(d.rafId),f()};window.addEventListener("wheel",h,{passive:!0,once:!0}),window.addEventListener("touchmove",h,{passive:!0,once:!0}),N(d)})(i,a,r)},M=R("scroll"),L=R("scrollTo"),D=R("scrollBy"),O=M,I=t=>{switch(t){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},C=(t,e,n,r)=>{let i=0;switch(e||(i^=2),t){case 0:i=i>>1|(1&i)<<1,[n,r]=[r,n];break;case 1:case 3:i^=1;break;case 4:i^=2}return[i,n,r]},H=t=>{return 1==(1&C(I(t.writingMode),"rtl"!==t.direction,void 0,void 0)[0])},W=(t,e,n,r,i,o,a)=>0!==t?t:i<e&&o>n||i>e&&o<n?null:i<=e&&a<=r||o>=n&&a>=r?2:o>n&&a<r||i<e&&a>r?3:null,F=t=>"visible"!==t&&"clip"!==t,B=(t,e)=>(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth)&&(F(e.overflowY)||F(e.overflowX)||t===P(t)),q=t=>{const e=t.parentNode,n=t.parentElement;if(null===n&&null!==e){if(11===e.nodeType)return e.host;if(9===e.nodeType)return(t=>{var e;try{return(null==(e=t.ownerDocument.defaultView)?void 0:e.frameElement)||null}catch{return null}})(t)}return n},z=(t,e,n)=>t<e?e:t>n?n:t,j=(t,e,n)=>{switch(t){case 1:return(e+n)/2;case 3:return n;case 2:case 0:return e}},V=(t,e)=>{var n,r,i;const o=null==(n=t.ownerDocument.defaultView)?void 0:n.visualViewport,[a,s,u,l]=t===P(t)?[0,0,null!=(r=null==o?void 0:o.width)?r:t.clientWidth,null!=(i=null==o?void 0:o.height)?i:t.clientHeight]:[e.left,e.top,t.clientWidth,t.clientHeight],c=a+t.clientLeft,f=s+t.clientTop;return[f,c+u,f+l,c]},U=(t,e)=>{const n=[];let r=t.ownerDocument,i=r.defaultView;if(!i)return n;const o=window.getComputedStyle(t),a="rtl"!==o.direction,s=I(o.writingMode||o.getPropertyValue("-webkit-writing-mode")||o.getPropertyValue("-ms-writing-mode")),[u,l]=((t,e,n)=>{const[r,i,o]=C(e,n,t.block||"start",t.inline||"nearest");return[i,o].map((t,e)=>{switch(t){case"center":return 1;case"nearest":return 0;default:return"start"===t==!(r>>e&1)?2:3}})})(e,s,a);let[c,f,d,h]=((t,e,n)=>{const{top:r,right:i,bottom:o,left:a}=e,s=(t=>["scroll-margin","scroll-snap-margin"].filter(e=>e in t.documentElement.style)[0])(t.ownerDocument);if(!s)return[r,i,o,a];const u=t=>{const e=n.getPropertyValue(`${s}-${t}`);return parseInt(e,10)||0};return[r-u("top"),i+u("right"),o+u("bottom"),a-u("left")]})(t,t.getBoundingClientRect(),o);for(let o=q(t);null!==o;o=q(o)){if(r!==o.ownerDocument){if(!(i=(r=o.ownerDocument).defaultView))break;const{left:t,top:e}=o.getBoundingClientRect();c+=e,f+=t,d+=e,h+=t}const t=i.getComputedStyle(o);if("fixed"===t.position)break;if(!B(o,t))continue;const a=o.getBoundingClientRect(),[s,p,m,g]=V(o,a),v=W(u,g,p,o.clientWidth,h,f,f-h),b=W(l,s,m,o.clientHeight,c,d,d-c),y=null===v?0:j(v,h,f)-j(v,g,p),_=null===b?0:j(b,c,d)-j(b,s,m),w=H(t)?z(y,-o.scrollWidth+o.clientWidth-o.scrollLeft,-o.scrollLeft):z(y,-o.scrollLeft,o.scrollWidth-o.clientWidth-o.scrollLeft),T=z(_,-o.scrollTop,o.scrollHeight-o.clientHeight-o.scrollTop);n.push([o,{left:o.scrollLeft+w,top:o.scrollTop+T,behavior:e.behavior}]),c=Math.max(c-T,s),f=Math.min(f-w,p),d=Math.min(d-T,m),h=Math.max(h-w,g)}return n},$=(t,e,n)=>{const r=e||{};if(!v(r.behavior))throw new TypeError(_("scrollIntoView","Element",r.behavior));U(t,r).forEach(([t,e])=>{O(t,e,n)})},K=(t,e)=>n=>{if(x())return;const r={scroll:M,scrollTo:L,scrollBy:D}[t];e(t,function(){const t=arguments;if(1===arguments.length)return void r(this,t[0],n);const e=t[0],i=t[1];r(this,{left:e,top:i})})},X=(K("scroll",S),K("scrollTo",S)),Y=K("scrollBy",S),G=(t,e)=>{E(e),w(window,t),window[t]=e};K("scroll",G),K("scrollTo",G),K("scrollBy",G);function Q(t){$(this,{block:null==t||t?"start":"end",inline:"nearest"})}(t=>{if(x())return;const e=w(window.HTMLElement.prototype,"scrollIntoView",Q);S("scrollIntoView",function(){const n=arguments,r=n[0];1===n.length&&T(r)?$(this,r,t):e.apply(this,n)})})(),X(),Y()})();


// theme.js
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
 
  // node_modules/ftdomdelegate/main.js
  function Delegate(root) {
    this.listenerMap = [{}, {}];
    if (root) {
      this.root(root);
    }
    this.handle = Delegate.prototype.handle.bind(this);
    this._removedListeners = [];
  }
  Delegate.prototype.root = function(root) {
    const listenerMap = this.listenerMap;
    let eventType;
    if (this.rootElement) {
      for (eventType in listenerMap[1]) {
        if (listenerMap[1].hasOwnProperty(eventType)) {
          this.rootElement.removeEventListener(eventType, this.handle, true);
        }
      }
      for (eventType in listenerMap[0]) {
        if (listenerMap[0].hasOwnProperty(eventType)) {
          this.rootElement.removeEventListener(eventType, this.handle, false);
        }
      }
    }
    if (!root || !root.addEventListener) {
      if (this.rootElement) {
        delete this.rootElement;
      }
      return this;
    }
    this.rootElement = root;
    for (eventType in listenerMap[1]) {
      if (listenerMap[1].hasOwnProperty(eventType)) {
        this.rootElement.addEventListener(eventType, this.handle, true);
      }
    }
    for (eventType in listenerMap[0]) {
      if (listenerMap[0].hasOwnProperty(eventType)) {
        this.rootElement.addEventListener(eventType, this.handle, false);
      }
    }
    return this;
  };
  Delegate.prototype.captureForType = function(eventType) {
    return ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(eventType) !== -1;
  };
  Delegate.prototype.on = function(eventType, selector, handler, useCapture) {
    let root;
    let listenerMap;
    let matcher;
    let matcherParam;
    if (!eventType) {
      throw new TypeError("Invalid event type: " + eventType);
    }
    if (typeof selector === "function") {
      useCapture = handler;
      handler = selector;
      selector = null;
    }
    if (useCapture === void 0) {
      useCapture = this.captureForType(eventType);
    }
    if (typeof handler !== "function") {
      throw new TypeError("Handler must be a type of Function");
    }
    root = this.rootElement;
    listenerMap = this.listenerMap[useCapture ? 1 : 0];
    if (!listenerMap[eventType]) {
      if (root) {
        root.addEventListener(eventType, this.handle, useCapture);
      }
      listenerMap[eventType] = [];
    }
    if (!selector) {
      matcherParam = null;
      matcher = matchesRoot.bind(this);
    } else if (/^[a-z]+$/i.test(selector)) {
      matcherParam = selector;
      matcher = matchesTag;
    } else if (/^#[a-z0-9\-_]+$/i.test(selector)) {
      matcherParam = selector.slice(1);
      matcher = matchesId;
    } else {
      matcherParam = selector;
      matcher = Element.prototype.matches;
    }
    listenerMap[eventType].push({
      selector,
      handler,
      matcher,
      matcherParam
    });
    return this;
  };
  Delegate.prototype.off = function(eventType, selector, handler, useCapture) {
    let i;
    let listener;
    let listenerMap;
    let listenerList;
    let singleEventType;
    if (typeof selector === "function") {
      useCapture = handler;
      handler = selector;
      selector = null;
    }
    if (useCapture === void 0) {
      this.off(eventType, selector, handler, true);
      this.off(eventType, selector, handler, false);
      return this;
    }
    listenerMap = this.listenerMap[useCapture ? 1 : 0];
    if (!eventType) {
      for (singleEventType in listenerMap) {
        if (listenerMap.hasOwnProperty(singleEventType)) {
          this.off(singleEventType, selector, handler);
        }
      }
      return this;
    }
    listenerList = listenerMap[eventType];
    if (!listenerList || !listenerList.length) {
      return this;
    }
    for (i = listenerList.length - 1; i >= 0; i--) {
      listener = listenerList[i];
      if ((!selector || selector === listener.selector) && (!handler || handler === listener.handler)) {
        this._removedListeners.push(listener);
        listenerList.splice(i, 1);
      }
    }
    if (!listenerList.length) {
      delete listenerMap[eventType];
      if (this.rootElement) {
        this.rootElement.removeEventListener(eventType, this.handle, useCapture);
      }
    }
    return this;
  };
  Delegate.prototype.handle = function(event) {
    let i;
    let l;
    const type = event.type;
    let root;
    let phase;
    let listener;
    let returned;
    let listenerList = [];
    let target;
    const eventIgnore = "ftLabsDelegateIgnore";
    if (event[eventIgnore] === true) {
      return;
    }
    target = event.target;
    if (target.nodeType === 3) {
      target = target.parentNode;
    }
    if (target.correspondingUseElement) {
      target = target.correspondingUseElement;
    }
    root = this.rootElement;
    phase = event.eventPhase || (event.target !== event.currentTarget ? 3 : 2);
    switch (phase) {
      case 1:
        listenerList = this.listenerMap[1][type];
        break;
      case 2:
        if (this.listenerMap[0] && this.listenerMap[0][type]) {
          listenerList = listenerList.concat(this.listenerMap[0][type]);
        }
        if (this.listenerMap[1] && this.listenerMap[1][type]) {
          listenerList = listenerList.concat(this.listenerMap[1][type]);
        }
        break;
      case 3:
        listenerList = this.listenerMap[0][type];
        break;
    }
    let toFire = [];
    l = listenerList.length;
    while (target && l) {
      for (i = 0; i < l; i++) {
        listener = listenerList[i];
        if (!listener) {
          break;
        }
        if (target.tagName && ["button", "input", "select", "textarea"].indexOf(target.tagName.toLowerCase()) > -1 && target.hasAttribute("disabled")) {
          toFire = [];
        } else if (listener.matcher.call(target, listener.matcherParam, target)) {
          toFire.push([event, target, listener]);
        }
      }
      if (target === root) {
        break;
      }
      l = listenerList.length;
      target = target.parentElement || target.parentNode;
      if (target instanceof HTMLDocument) {
        break;
      }
    }
    let ret;
    for (i = 0; i < toFire.length; i++) {
      if (this._removedListeners.indexOf(toFire[i][2]) > -1) {
        continue;
      }
      returned = this.fire.apply(this, toFire[i]);
      if (returned === false) {
        toFire[i][0][eventIgnore] = true;
        toFire[i][0].preventDefault();
        ret = false;
        break;
      }
    }
    return ret;
  };
  Delegate.prototype.fire = function(event, target, listener) {
    return listener.handler.call(target, event, target);
  };
  function matchesTag(tagName, element) {
    return tagName.toLowerCase() === element.tagName.toLowerCase();
  }
  function matchesRoot(selector, element) {
    if (this.rootElement === window) {
      return element === document || element === document.documentElement || element === window;
    }
    return this.rootElement === element;
  }
  function matchesId(id, element) {
    return id === element.id;
  }
  Delegate.prototype.destroy = function() {
    this.off();
    this.root();
  };
  var main_default = Delegate;

  // js/components/input-binding-manager.js
  var InputBindingManager = class {
    constructor() {
      this.delegateElement = new main_default(document.body);
      this.delegateElement.on("change", "[data-bind-value]", this._onValueChanged.bind(this));
    }
    _onValueChanged(event, target) {
      const boundElement = document.getElementById(target.getAttribute("data-bind-value"));
      if (boundElement) {
        if (target.tagName === "SELECT") {
          target = target.options[target.selectedIndex];
        }
        boundElement.innerHTML = target.hasAttribute("title") ? target.getAttribute("title") : target.value;
      }
    }
  };

  // js/helper/event.js
  function triggerEvent(element, name, data = {}) {
    element.dispatchEvent(new CustomEvent(name, {
      bubbles: true,
      detail: data
    }));
  }
  function triggerNonBubblingEvent(element, name, data = {}) {
    element.dispatchEvent(new CustomEvent(name, {
      bubbles: false,
      detail: data
    }));
  }

  // js/custom-element/custom-html-element.js
  var CustomHTMLElement = class extends HTMLElement {
    constructor() {
      super();
      this._hasSectionReloaded = false;
      if (Shopify.designMode) {
        this.rootDelegate.on("shopify:section:select", (event) => {
          const parentSection = this.closest(".shopify-section");
          if (event.target === parentSection && event.detail.load) {
            this._hasSectionReloaded = true;
          }
        });
      }
    }
    get rootDelegate() {
      return this._rootDelegate = this._rootDelegate || new main_default(document.documentElement);
    }
    get delegate() {
      return this._delegate = this._delegate || new main_default(this);
    }
    showLoadingBar() {
      triggerEvent(document.documentElement, "theme:loading:start");
    }
    hideLoadingBar() {
      triggerEvent(document.documentElement, "theme:loading:end");
    }
    untilVisible(intersectionObserverOptions = { rootMargin: "30px 0px", threshold: 0 }) {
      const onBecameVisible = () => {
        this.classList.add("became-visible");
        this.style.opacity = "1";
      };
      return new Promise((resolve) => {
        if (window.IntersectionObserver) {
          this.intersectionObserver = new IntersectionObserver((event) => {
            if (event[0].isIntersecting) {
              this.intersectionObserver.disconnect();
              requestAnimationFrame(() => {
                resolve();
                onBecameVisible();
              });
            }
          }, intersectionObserverOptions);
          this.intersectionObserver.observe(this);
        } else {
          resolve();
          onBecameVisible();
        }
      });
    }
    disconnectedCallback() {
      var _a;
      this.delegate.destroy();
      this.rootDelegate.destroy();
      (_a = this.intersectionObserver) == null ? void 0 : _a.disconnect();
      delete this._delegate;
      delete this._rootDelegate;
    }
  };

  // node_modules/tabbable/dist/index.esm.js
  var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
  var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
  var matches = typeof Element === "undefined" ? function() {
  } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var getCandidates = function getCandidates2(el, includeContainer, filter) {
    var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
    if (includeContainer && matches.call(el, candidateSelector)) {
      candidates.unshift(el);
    }
    candidates = candidates.filter(filter);
    return candidates;
  };
  var isContentEditable = function isContentEditable2(node) {
    return node.contentEditable === "true";
  };
  var getTabindex = function getTabindex2(node) {
    var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
    if (!isNaN(tabindexAttr)) {
      return tabindexAttr;
    }
    if (isContentEditable(node)) {
      return 0;
    }
    if ((node.nodeName === "AUDIO" || node.nodeName === "VIDEO" || node.nodeName === "DETAILS") && node.getAttribute("tabindex") === null) {
      return 0;
    }
    return node.tabIndex;
  };
  var sortOrderedTabbables = function sortOrderedTabbables2(a, b) {
    return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
  };
  var isInput = function isInput2(node) {
    return node.tagName === "INPUT";
  };
  var isHiddenInput = function isHiddenInput2(node) {
    return isInput(node) && node.type === "hidden";
  };
  var isDetailsWithSummary = function isDetailsWithSummary2(node) {
    var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
      return child.tagName === "SUMMARY";
    });
    return r;
  };
  var getCheckedRadio = function getCheckedRadio2(nodes, form) {
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].checked && nodes[i].form === form) {
        return nodes[i];
      }
    }
  };
  var isTabbableRadio = function isTabbableRadio2(node) {
    if (!node.name) {
      return true;
    }
    var radioScope = node.form || node.ownerDocument;
    var queryRadios = function queryRadios2(name) {
      return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
    };
    var radioSet;
    if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
      radioSet = queryRadios(window.CSS.escape(node.name));
    } else {
      try {
        radioSet = queryRadios(node.name);
      } catch (err) {
        console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
        return false;
      }
    }
    var checked = getCheckedRadio(radioSet, node.form);
    return !checked || checked === node;
  };
  var isRadio = function isRadio2(node) {
    return isInput(node) && node.type === "radio";
  };
  var isNonTabbableRadio = function isNonTabbableRadio2(node) {
    return isRadio(node) && !isTabbableRadio(node);
  };
  var isHidden = function isHidden2(node, displayCheck) {
    if (getComputedStyle(node).visibility === "hidden") {
      return true;
    }
    var isDirectSummary = matches.call(node, "details>summary:first-of-type");
    var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
    if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
      return true;
    }
    if (!displayCheck || displayCheck === "full") {
      while (node) {
        if (getComputedStyle(node).display === "none") {
          return true;
        }
        node = node.parentElement;
      }
    } else if (displayCheck === "non-zero-area") {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }
    return false;
  };
  var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
    if (isInput(node) || node.tagName === "SELECT" || node.tagName === "TEXTAREA" || node.tagName === "BUTTON") {
      var parentNode = node.parentElement;
      while (parentNode) {
        if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
          for (var i = 0; i < parentNode.children.length; i++) {
            var child = parentNode.children.item(i);
            if (child.tagName === "LEGEND") {
              if (child.contains(node)) {
                return false;
              }
              return true;
            }
          }
          return true;
        }
        parentNode = parentNode.parentElement;
      }
    }
    return false;
  };
  var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
    if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
      return false;
    }
    return true;
  };
  var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
    if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
      return false;
    }
    return true;
  };
  var tabbable = function tabbable2(el, options) {
    options = options || {};
    var regularTabbables = [];
    var orderedTabbables = [];
    var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
    candidates.forEach(function(candidate, i) {
      var candidateTabindex = getTabindex(candidate);
      if (candidateTabindex === 0) {
        regularTabbables.push(candidate);
      } else {
        orderedTabbables.push({
          documentOrder: i,
          tabIndex: candidateTabindex,
          node: candidate
        });
      }
    });
    var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a) {
      return a.node;
    }).concat(regularTabbables);
    return tabbableNodes;
  };
  var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
  var isFocusable = function isFocusable2(node, options) {
    options = options || {};
    if (!node) {
      throw new Error("No node provided");
    }
    if (matches.call(node, focusableCandidateSelector) === false) {
      return false;
    }
    return isNodeMatchingSelectorFocusable(options, node);
  };

  // node_modules/focus-trap/dist/focus-trap.esm.js
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var activeFocusTraps = function() {
    var trapQueue = [];
    return {
      activateTrap: function activateTrap(trap) {
        if (trapQueue.length > 0) {
          var activeTrap = trapQueue[trapQueue.length - 1];
          if (activeTrap !== trap) {
            activeTrap.pause();
          }
        }
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex === -1) {
          trapQueue.push(trap);
        } else {
          trapQueue.splice(trapIndex, 1);
          trapQueue.push(trap);
        }
      },
      deactivateTrap: function deactivateTrap(trap) {
        var trapIndex = trapQueue.indexOf(trap);
        if (trapIndex !== -1) {
          trapQueue.splice(trapIndex, 1);
        }
        if (trapQueue.length > 0) {
          trapQueue[trapQueue.length - 1].unpause();
        }
      }
    };
  }();
  var isSelectableInput = function isSelectableInput2(node) {
    return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
  };
  var isEscapeEvent = function isEscapeEvent2(e) {
    return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
  };
  var isTabEvent = function isTabEvent2(e) {
    return e.key === "Tab" || e.keyCode === 9;
  };
  var delay = function delay2(fn) {
    return setTimeout(fn, 0);
  };
  var findIndex = function findIndex2(arr, fn) {
    var idx = -1;
    arr.every(function(value, i) {
      if (fn(value)) {
        idx = i;
        return false;
      }
      return true;
    });
    return idx;
  };
  var valueOrHandler = function valueOrHandler2(value) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    return typeof value === "function" ? value.apply(void 0, params) : value;
  };
  var getActualTarget = function getActualTarget2(event) {
    return event.target.shadowRoot && typeof event.composedPath === "function" ? event.composedPath()[0] : event.target;
  };
  var createFocusTrap = function createFocusTrap2(elements, userOptions) {
    var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
    var config = _objectSpread2({
      returnFocusOnDeactivate: true,
      escapeDeactivates: true,
      delayInitialFocus: true
    }, userOptions);
    var state = {
      containers: [],
      tabbableGroups: [],
      nodeFocusedBeforeActivation: null,
      mostRecentlyFocusedNode: null,
      active: false,
      paused: false,
      delayInitialFocusTimer: void 0
    };
    var trap;
    var getOption = function getOption2(configOverrideOptions, optionName, configOptionName) {
      return configOverrideOptions && configOverrideOptions[optionName] !== void 0 ? configOverrideOptions[optionName] : config[configOptionName || optionName];
    };
    var containersContain = function containersContain2(element) {
      return !!(element && state.containers.some(function(container) {
        return container.contains(element);
      }));
    };
    var getNodeForOption = function getNodeForOption2(optionName) {
      var optionValue = config[optionName];
      if (typeof optionValue === "function") {
        for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          params[_key2 - 1] = arguments[_key2];
        }
        optionValue = optionValue.apply(void 0, params);
      }
      if (!optionValue) {
        if (optionValue === void 0 || optionValue === false) {
          return optionValue;
        }
        throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
      }
      var node = optionValue;
      if (typeof optionValue === "string") {
        node = doc.querySelector(optionValue);
        if (!node) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
      }
      return node;
    };
    var getInitialFocusNode = function getInitialFocusNode2() {
      var node = getNodeForOption("initialFocus");
      if (node === false) {
        return false;
      }
      if (node === void 0) {
        if (containersContain(doc.activeElement)) {
          node = doc.activeElement;
        } else {
          var firstTabbableGroup = state.tabbableGroups[0];
          var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
          node = firstTabbableNode || getNodeForOption("fallbackFocus");
        }
      }
      if (!node) {
        throw new Error("Your focus-trap needs to have at least one focusable element");
      }
      return node;
    };
    var updateTabbableNodes = function updateTabbableNodes2() {
      state.tabbableGroups = state.containers.map(function(container) {
        var tabbableNodes = tabbable(container);
        if (tabbableNodes.length > 0) {
          return {
            container,
            firstTabbableNode: tabbableNodes[0],
            lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
          };
        }
        return void 0;
      }).filter(function(group) {
        return !!group;
      });
      if (state.tabbableGroups.length <= 0 && !getNodeForOption("fallbackFocus")) {
        throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
      }
    };
    var tryFocus = function tryFocus2(node) {
      if (node === false) {
        return;
      }
      if (node === doc.activeElement) {
        return;
      }
      if (!node || !node.focus) {
        tryFocus2(getInitialFocusNode());
        return;
      }
      node.focus({
        preventScroll: !!config.preventScroll
      });
      state.mostRecentlyFocusedNode = node;
      if (isSelectableInput(node)) {
        node.select();
      }
    };
    var getReturnFocusNode = function getReturnFocusNode2(previousActiveElement) {
      var node = getNodeForOption("setReturnFocus", previousActiveElement);
      return node ? node : node === false ? false : previousActiveElement;
    };
    var checkPointerDown = function checkPointerDown2(e) {
      var target = getActualTarget(e);
      if (containersContain(target)) {
        return;
      }
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        trap.deactivate({
          returnFocus: config.returnFocusOnDeactivate && !isFocusable(target)
        });
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
    };
    var checkFocusIn = function checkFocusIn2(e) {
      var target = getActualTarget(e);
      var targetContained = containersContain(target);
      if (targetContained || target instanceof Document) {
        if (targetContained) {
          state.mostRecentlyFocusedNode = target;
        }
      } else {
        e.stopImmediatePropagation();
        tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    };
    var checkTab = function checkTab2(e) {
      var target = getActualTarget(e);
      updateTabbableNodes();
      var destinationNode = null;
      if (state.tabbableGroups.length > 0) {
        var containerIndex = findIndex(state.tabbableGroups, function(_ref) {
          var container = _ref.container;
          return container.contains(target);
        });
        if (containerIndex < 0) {
          if (e.shiftKey) {
            destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
          } else {
            destinationNode = state.tabbableGroups[0].firstTabbableNode;
          }
        } else if (e.shiftKey) {
          var startOfGroupIndex = findIndex(state.tabbableGroups, function(_ref2) {
            var firstTabbableNode = _ref2.firstTabbableNode;
            return target === firstTabbableNode;
          });
          if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === target) {
            startOfGroupIndex = containerIndex;
          }
          if (startOfGroupIndex >= 0) {
            var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
            var destinationGroup = state.tabbableGroups[destinationGroupIndex];
            destinationNode = destinationGroup.lastTabbableNode;
          }
        } else {
          var lastOfGroupIndex = findIndex(state.tabbableGroups, function(_ref3) {
            var lastTabbableNode = _ref3.lastTabbableNode;
            return target === lastTabbableNode;
          });
          if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === target) {
            lastOfGroupIndex = containerIndex;
          }
          if (lastOfGroupIndex >= 0) {
            var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
            var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
            destinationNode = _destinationGroup.firstTabbableNode;
          }
        }
      } else {
        destinationNode = getNodeForOption("fallbackFocus");
      }
      if (destinationNode) {
        e.preventDefault();
        tryFocus(destinationNode);
      }
    };
    var checkKey = function checkKey2(e) {
      if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
        e.preventDefault();
        trap.deactivate();
        return;
      }
      if (isTabEvent(e)) {
        checkTab(e);
        return;
      }
    };
    var checkClick = function checkClick2(e) {
      if (valueOrHandler(config.clickOutsideDeactivates, e)) {
        return;
      }
      var target = getActualTarget(e);
      if (containersContain(target)) {
        return;
      }
      if (valueOrHandler(config.allowOutsideClick, e)) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
    };
    var addListeners = function addListeners2() {
      if (!state.active) {
        return;
      }
      activeFocusTraps.activateTrap(trap);
      state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function() {
        tryFocus(getInitialFocusNode());
      }) : tryFocus(getInitialFocusNode());
      doc.addEventListener("focusin", checkFocusIn, true);
      doc.addEventListener("mousedown", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("touchstart", checkPointerDown, {
        capture: true,
        passive: false
      });
      doc.addEventListener("click", checkClick, {
        capture: true,
        passive: false
      });
      doc.addEventListener("keydown", checkKey, {
        capture: true,
        passive: false
      });
      return trap;
    };
    var removeListeners = function removeListeners2() {
      if (!state.active) {
        return;
      }
      doc.removeEventListener("focusin", checkFocusIn, true);
      doc.removeEventListener("mousedown", checkPointerDown, true);
      doc.removeEventListener("touchstart", checkPointerDown, true);
      doc.removeEventListener("click", checkClick, true);
      doc.removeEventListener("keydown", checkKey, true);
      return trap;
    };
    trap = {
      activate: function activate(activateOptions) {
        if (state.active) {
          return this;
        }
        var onActivate = getOption(activateOptions, "onActivate");
        var onPostActivate = getOption(activateOptions, "onPostActivate");
        var checkCanFocusTrap = getOption(activateOptions, "checkCanFocusTrap");
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = doc.activeElement;
        if (onActivate) {
          onActivate();
        }
        var finishActivation = function finishActivation2() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          if (onPostActivate) {
            onPostActivate();
          }
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
        return this;
      },
      deactivate: function deactivate(deactivateOptions) {
        if (!state.active) {
          return this;
        }
        clearTimeout(state.delayInitialFocusTimer);
        state.delayInitialFocusTimer = void 0;
        removeListeners();
        state.active = false;
        state.paused = false;
        activeFocusTraps.deactivateTrap(trap);
        var onDeactivate = getOption(deactivateOptions, "onDeactivate");
        var onPostDeactivate = getOption(deactivateOptions, "onPostDeactivate");
        var checkCanReturnFocus = getOption(deactivateOptions, "checkCanReturnFocus");
        if (onDeactivate) {
          onDeactivate();
        }
        var returnFocus = getOption(deactivateOptions, "returnFocus", "returnFocusOnDeactivate");
        var finishDeactivation = function finishDeactivation2() {
          delay(function() {
            if (returnFocus) {
              tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
            }
            if (onPostDeactivate) {
              onPostDeactivate();
            }
          });
        };
        if (returnFocus && checkCanReturnFocus) {
          checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
          return this;
        }
        finishDeactivation();
        return this;
      },
      pause: function pause() {
        if (state.paused || !state.active) {
          return this;
        }
        state.paused = true;
        removeListeners();
        return this;
      },
      unpause: function unpause() {
        if (!state.paused || !state.active) {
          return this;
        }
        state.paused = false;
        updateTabbableNodes();
        addListeners();
        return this;
      },
      updateContainerElements: function updateContainerElements(containerElements) {
        var elementsAsArray = [].concat(containerElements).filter(Boolean);
        state.containers = elementsAsArray.map(function(element) {
          return typeof element === "string" ? doc.querySelector(element) : element;
        });
        if (state.active) {
          updateTabbableNodes();
        }
        return this;
      }
    };
    trap.updateContainerElements(elements);
    return trap;
  };

  // js/helper/section.js
  function filterShopifyEvent(event, domElement, callback) {
    let executeCallback = false;
    if (event.type.includes("shopify:section")) {
      if (domElement.hasAttribute("section") && domElement.getAttribute("section") === event.detail.sectionId) {
        executeCallback = true;
      }
    } else if (event.type.includes("shopify:block") && event.target === domElement) {
      executeCallback = true;
    }
    if (executeCallback) {
      callback(event);
    }
  }

  // js/custom-element/behavior/openable-element.js
  var OpenableElement = class extends CustomHTMLElement {
    static get observedAttributes() {
      return ["open"];
    }
    constructor() {
      super();
      if (Shopify.designMode) {
        this.rootDelegate.on("shopify:section:select", (event) => filterShopifyEvent(event, this, () => this.open = true));
        this.rootDelegate.on("shopify:section:deselect", (event) => filterShopifyEvent(event, this, () => this.open = false));
      }
      if (this.hasAttribute("append-body")) {
        const existingNode = document.getElementById(this.id);
        this.removeAttribute("append-body");
        if (existingNode && existingNode !== this) {
          existingNode.replaceWith(this.cloneNode(true));
          this.remove();
        } else {
          document.body.appendChild(this);
        }
      }
    }
    connectedCallback() {
      this.delegate.on("click", ".openable__overlay", () => this.open = false);
      this.delegate.on("click", '[data-action="close"]', (event) => {
        event.stopPropagation();
        this.open = false;
      });
    }
    get requiresLoading() {
      return this.hasAttribute("href");
    }
    get open() {
      return this.hasAttribute("open");
    }
    set open(value) {
      if (value) {
        (async () => {
          await this._load();
          this.clientWidth;
          this.setAttribute("open", "");
        })();
      } else {
        this.removeAttribute("open");
      }
    }
    get shouldTrapFocus() {
      return true;
    }
    get returnFocusOnDeactivate() {
      return !this.hasAttribute("return-focus") || this.getAttribute("return-focus") === "true";
    }
    get focusTrap() {
      return this._focusTrap = this._focusTrap || createFocusTrap(this, {
        fallbackFocus: this,
        initialFocus: this.hasAttribute("initial-focus-selector") ? this.getAttribute("initial-focus-selector") : void 0,
        clickOutsideDeactivates: (event) => !(event.target.hasAttribute("aria-controls") && event.target.getAttribute("aria-controls") === this.id),
        allowOutsideClick: (event) => event.target.hasAttribute("aria-controls") && event.target.getAttribute("aria-controls") === this.id,
        returnFocusOnDeactivate: this.returnFocusOnDeactivate,
        onDeactivate: () => this.open = false,
        preventScroll: true
      });
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "open":
          if (oldValue === null && newValue === "") {
            if (this.shouldTrapFocus) {
              setTimeout(() => this.focusTrap.activate(), 150);
            }
            triggerEvent(this, "openable-element:open");
          } else if (newValue === null) {
            if (this.shouldTrapFocus) {
              this.focusTrap.deactivate();
            }
            triggerEvent(this, "openable-element:close");
          }
      }
    }
    async _load() {
      if (!this.requiresLoading) {
        return;
      }
      triggerNonBubblingEvent(this, "openable-element:load:start");
      const response = await fetch(this.getAttribute("href"));
      const element = document.createElement("div");
      element.innerHTML = await response.text();
      this.innerHTML = element.querySelector(this.tagName.toLowerCase()).innerHTML;
      this.removeAttribute("href");
      triggerNonBubblingEvent(this, "openable-element:load:end");
    }
  };
  window.customElements.define("openable-element", OpenableElement);

  // js/custom-element/behavior/collapsible-content.js
  var CollapsibleContent = class extends OpenableElement {
    constructor() {
      super();
      this.ignoreNextTransition = this.open;
      this.addEventListener("shopify:block:select", () => this.open = true);
      this.addEventListener("shopify:block:deselect", () => this.open = false);
    }
    get animateItems() {
      return this.hasAttribute("animate-items");
    }
    attributeChangedCallback(name) {
      if (this.ignoreNextTransition) {
        return this.ignoreNextTransition = false;
      }
      switch (name) {
        case "open":
          this.style.overflow = "hidden";
          const keyframes = {
            height: ["0px", `${this.scrollHeight}px`],
            visibility: ["hidden", "visible"]
          };
          if (this.animateItems) {
            keyframes["opacity"] = this.open ? [0, 0] : [0, 1];
          }
          this.animate(keyframes, {
            duration: 500,
            direction: this.open ? "normal" : "reverse",
            easing: "cubic-bezier(0.75, 0, 0.175, 1)"
          }).onfinish = () => {
            this.style.overflow = this.open ? "visible" : "hidden";
          };
          if (this.animateItems && this.open) {
            this.animate({
              opacity: [0, 1],
              transform: ["translateY(10px)", "translateY(0)"]
            }, {
              duration: 250,
              delay: 250,
              easing: "cubic-bezier(0.75, 0, 0.175, 1)"
            });
          }
          triggerEvent(this, this.open ? "openable-element:open" : "openable-element:close");
      }
    }
  };
  window.customElements.define("collapsible-content", CollapsibleContent);

  // js/custom-element/behavior/confirm-button.js
  var ConfirmButton = class extends HTMLButtonElement {
    connectedCallback() {
      this.addEventListener("click", (event) => {
        if (!window.confirm(this.getAttribute("data-message") || "Are you sure you wish to do this?")) {
          event.preventDefault();
        }
      });
    }
  };
  window.customElements.define("confirm-button", ConfirmButton, { extends: "button" });

  // js/mixin/loader-button.js
  var LoaderButtonMixin = {
    _prepareButton() {
      this.originalContent = this.innerHTML;
      this._startTransitionPromise = null;
      this.innerHTML = `
      <span class="loader-button__text">${this.innerHTML}</span>
      <span class="loader-button__loader" hidden>
        <div class="spinner">
          <svg focusable="false" width="24" height="24" class="icon icon--spinner" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5"></circle>
          </svg>
        </div>
      </span>
    `;
      this.textElement = this.firstElementChild;
      this.spinnerElement = this.lastElementChild;
      window.addEventListener("pagehide", () => this.removeAttribute("aria-busy"));
    },
    _startTransition() {
      const textAnimation = this.textElement.animate({
        opacity: [1, 0],
        transform: ["translateY(0)", "translateY(-10px)"]
      }, {
        duration: 75,
        easing: "ease",
        fill: "forwards"
      });
      this.spinnerElement.hidden = false;
      const spinnerAnimation = this.spinnerElement.animate({
        opacity: [0, 1],
        transform: ["translate(-50%, 0%)", "translate(-50%, -50%)"]
      }, {
        duration: 75,
        delay: 75,
        easing: "ease",
        fill: "forwards"
      });
      this._startTransitionPromise = Promise.all([
        new Promise((resolve) => textAnimation.onfinish = () => resolve()),
        new Promise((resolve) => spinnerAnimation.onfinish = () => resolve())
      ]);
    },
    async _endTransition() {
      if (!this._startTransitionPromise) {
        return;
      }
      await this._startTransitionPromise;
      this.spinnerElement.animate({
        opacity: [1, 0],
        transform: ["translate(-50%, -50%)", "translate(-50%, -100%)"]
      }, {
        duration: 75,
        delay: 100,
        easing: "ease",
        fill: "forwards"
      }).onfinish = () => this.spinnerElement.hidden = true;
      this.textElement.animate({
        opacity: [0, 1],
        transform: ["translateY(10px)", "translateY(0)"]
      }, {
        duration: 75,
        delay: 175,
        easing: "ease",
        fill: "forwards"
      });
      this._startTransitionPromise = null;
    }
  };

  // js/custom-element/behavior/loader-button.js
  var LoaderButton = class extends HTMLButtonElement {
    static get observedAttributes() {
      return ["aria-busy"];
    }
    constructor() {
      super();
      this.addEventListener("click", (event) => {
        if (this.type === "submit" && this.form && this.form.checkValidity() && !this.form.hasAttribute("is")) {
          if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            event.preventDefault();
            this.setAttribute("aria-busy", "true");
            setTimeout(() => this.form.submit(), 250);
          } else {
            this.setAttribute("aria-busy", "true");
          }
        }
      });
    }
    connectedCallback() {
      this._prepareButton();
    }
    disconnectedCallback() {
      this.innerHTML = this.originalContent;
    }
    attributeChangedCallback(property, oldValue, newValue) {
      if (property === "aria-busy") {
        if (newValue === "true") {
          this._startTransition();
        } else {
          this._endTransition();
        }
      }
    }
  };
  Object.assign(LoaderButton.prototype, LoaderButtonMixin);
  window.customElements.define("loader-button", LoaderButton, { extends: "button" });

  // js/custom-element/behavior/page-pagination.js
  var PagePagination = class extends CustomHTMLElement {
    connectedCallback() {
      if (this.hasAttribute("ajax")) {
        this.delegate.on("click", "a", this._onLinkClicked.bind(this));
      }
    }
    _onLinkClicked(event, target) {
      event.preventDefault();
      const url = new URL(window.location.href);
      url.searchParams.set("page", target.getAttribute("data-page"));
      triggerEvent(this, "pagination:page-changed", { url: url.toString() });
    }
  };
  window.customElements.define("page-pagination", PagePagination);
  
  function productCardDisCalculation(selectedVarient, i){
    if(i !== undefined ){
      selectedVarient = selectedVarient[i];
    }
    if(selectedVarient !== null){
      let savePrice = selectedVarient.getAttribute('data-price');
      savePrice = parseInt(savePrice);
      let product_flas_sale = selectedVarient.parentElement.className;
      if(Shopify.enable_namagoo && product_flas_sale.includes("custom-product-card_namogoo")){
      if(localStorage.getItem('Namogoo')) {  
        let NamogooDiscount = JSON.parse(localStorage.getItem('Namogoo'));
        let discountValue = NamogooDiscount.discountValue;
        let savePriceDis = savePrice / 100 * discountValue;
        savePrice = savePrice - savePriceDis;
        if(selectedVarient.className.includes("product-card-price-varies")){
          selectedVarient.innerHTML = 'From ' + Shopify.formatMoney(savePrice,Shopify.money_format);
        }else{
          selectedVarient.innerHTML = Shopify.formatMoney(savePrice,Shopify.money_format);
        }
      }   
      } 
    }
    };

  // js/custom-element/behavior/toggle-button.js
  var ToggleButton = class extends HTMLButtonElement {
    static get observedAttributes() {
      return ["aria-expanded", "aria-busy"];
    }
    constructor() {
      super();
      if (this.hasAttribute("loader")) {
        this._prepareButton();
      }
      this.addEventListener("click", this._onButtonClick.bind(this));
      this.rootDelegate = new main_default(document.documentElement);
    }
    _onButtonClick() {
      this.isExpanded = !this.isExpanded;
      setTimeout(function(){
      let quick_product_Varient = document.querySelector('.quick_product-price');
      productCardDisCalculation(quick_product_Varient);
      },1000);
    }
    connectedCallback() {
      document.addEventListener("openable-element:close", (event) => {
        if (this.controlledElement === event.target) {
          this.isExpanded = false;
          event.stopPropagation();
        }
      });
      document.addEventListener("openable-element:open", (event) => {
        if (this.controlledElement === event.target) {
          this.isExpanded = true;
          event.stopPropagation();
        }
      });
      this.rootDelegate.on("openable-element:load:start", `#${this.getAttribute("aria-controls")}`, () => {
        if (this.classList.contains("button")) {
          this.setAttribute("aria-busy", "true");
        } else if (this.offsetParent !== null) {
          triggerEvent(document.documentElement, "theme:loading:start");
        }
      }, true);
      this.rootDelegate.on("openable-element:load:end", `#${this.getAttribute("aria-controls")}`, () => {
        if (this.classList.contains("button")) {
          this.removeAttribute("aria-busy");
        } else if (this.offsetParent !== null) {
          triggerEvent(document.documentElement, "theme:loading:end");
        }
      }, true);
    }
    disconnectedCallback() {
      this.rootDelegate.destroy();
    }
    get isExpanded() {
      return this.getAttribute("aria-expanded") === "true";
    }
    set isExpanded(value) {
      this.setAttribute("aria-expanded", value ? "true" : "false");
    }
    get controlledElement() {
      return document.getElementById(this.getAttribute("aria-controls"));
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "aria-expanded":
          if (oldValue === "false" && newValue === "true") {
            this.controlledElement.open = true;
          } else if (oldValue === "true" && newValue === "false") {
            this.controlledElement.open = false;
          }
          break;
        case "aria-busy":
          if (this.hasAttribute("loader")) {
            if (newValue === "true") {
              this._startTransition();
            } else {
              this._endTransition();
            }
          }
          break;
      }
    }
  };
  Object.assign(ToggleButton.prototype, LoaderButtonMixin);
  window.customElements.define("toggle-button", ToggleButton, { extends: "button" });

  // js/custom-element/behavior/toggle-link.js
  var ToggleLink = class extends HTMLAnchorElement {
    static get observedAttributes() {
      return ["aria-expanded"];
    }
    constructor() {
      super();
      this.addEventListener("click", (event) => {
        event.preventDefault();
        this.isExpanded = !this.isExpanded;
      });
      this.rootDelegate = new main_default(document.documentElement);
    }
    connectedCallback() {
      this.rootDelegate.on("openable-element:close", `#${this.getAttribute("aria-controls")}`, (event) => {
        if (this.controlledElement === event.target) {
          this.isExpanded = false;
        }
      }, true);
      this.rootDelegate.on("openable-element:open", `#${this.getAttribute("aria-controls")}`, (event) => {
        if (this.controlledElement === event.target) {
          this.isExpanded = true;
        }
      }, true);
    }
    disconnectedCallback() {
      this.rootDelegate.destroy();
    }
    get isExpanded() {
      return this.getAttribute("aria-expanded") === "true";
    }
    set isExpanded(value) {
      this.setAttribute("aria-expanded", value ? "true" : "false");
    }
    get controlledElement() {
      return document.querySelector(`#${this.getAttribute("aria-controls")}`);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      switch (name) {
        case "aria-expanded":
          if (oldValue === "false" && newValue === "true") {
            this.controlledElement.open = true;
          } else if (oldValue === "true" && newValue === "false") {
            this.controlledElement.open = false;
          }
      }
    }
  };
  window.customElements.define("toggle-link", ToggleLink, { extends: "a" });

  // js/custom-element/behavior/page-dots.js
  var PageDots = class extends CustomHTMLElement {
    connectedCallback() {
      this.buttons = Array.from(this.querySelectorAll("button"));
      this.delegate.on("click", "button", (event, target) => {
        this._dispatchEvent(this.buttons.indexOf(target));
      });
      if (this.hasAttribute("animation-timer")) {
        this.delegate.on("animationend", (event) => {
          if (event.elapsedTime > 0) {
            this._dispatchEvent((this.selectedIndex + 1 + this.buttons.length) % this.buttons.length);
          }
        });
      }
    }
    get selectedIndex() {
      return this.buttons.findIndex((button) => button.getAttribute("aria-current") === "true");
    }
    set selectedIndex(selectedIndex) {
      this.buttons.forEach((button, index) => button.setAttribute("aria-current", selectedIndex === index ? "true" : "false"));
      if (this.hasAttribute("align-selected")) {
        const selectedItem = this.buttons[selectedIndex], windowHalfWidth = window.innerWidth / 2, boundingRect = selectedItem.getBoundingClientRect(), scrollableElement = this._findFirstScrollableElement(this.parentElement);
        if (scrollableElement) {
          scrollableElement.scrollTo({
            behavior: "smooth",
            left: scrollableElement.scrollLeft + (boundingRect.left - windowHalfWidth) + boundingRect.width / 2
          });
        }
      }
    }
    _dispatchEvent(index) {
      if (index !== this.selectedIndex) {
        this.dispatchEvent(new CustomEvent("page-dots:changed", {
          bubbles: true,
          detail: {
            index
          }
        }));
      }
    }
    _findFirstScrollableElement(item, currentDepth = 0) {
      if (item === null || currentDepth > 3) {
        return null;
      }
      return item.scrollWidth > item.clientWidth ? item : this._findFirstScrollableElement(item.parentElement, currentDepth + 1);
    }
  };
  window.customElements.define("page-dots", PageDots);

  // js/custom-element/behavior/prev-next-buttons.js
  var PrevNextButtons = class extends HTMLElement {
    connectedCallback() {
      this.prevButton = this.querySelector("button:first-of-type");
      this.nextButton = this.querySelector("button:last-of-type");
      this.prevButton.addEventListener("click", () => this.prevButton.dispatchEvent(new CustomEvent("prev-next:prev", { bubbles: true })));
      this.nextButton.addEventListener("click", () => this.nextButton.dispatchEvent(new CustomEvent("prev-next:next", { bubbles: true })));
    }
    set isPrevDisabled(value) {
      this.prevButton.disabled = value;
    }
    set isNextDisabled(value) {
      this.nextButton.disabled = value;
    }
  };
  var PrevButton = class extends HTMLButtonElement {
    connectedCallback() {
      this.addEventListener("click", () => this.dispatchEvent(new CustomEvent("prev-next:prev", { bubbles: true })));
    }
  };
  var NextButton = class extends HTMLButtonElement {
    connectedCallback() {
      this.addEventListener("click", () => this.dispatchEvent(new CustomEvent("prev-next:next", { bubbles: true })));
    }
  };
  window.customElements.define("prev-next-buttons", PrevNextButtons);
  window.customElements.define("prev-button", PrevButton, { extends: "button" });
  window.customElements.define("next-button", NextButton, { extends: "button" });

  // js/helper/dimensions.js
  function getStickyHeaderOffset() {
    const documentStyles = getComputedStyle(document.documentElement);
    return parseInt(documentStyles.getPropertyValue("--header-height") || 0) * parseInt(documentStyles.getPropertyValue("--enable-sticky-header") || 0) + parseInt(documentStyles.getPropertyValue("--announcement-bar-height") || 0) * parseInt(documentStyles.getPropertyValue("--enable-sticky-announcement-bar") || 0);
  }

  // js/custom-element/behavior/safe-sticky.js
  var SafeSticky = class extends HTMLElement {
    connectedCallback() {
      this.lastKnownY = window.scrollY;
      this.currentTop = 0;
      this.hasPendingRaf = false;
      window.addEventListener("scroll", this._checkPosition.bind(this));
    }
    get initialTopOffset() {
      return getStickyHeaderOffset() + (parseInt(this.getAttribute("offset")) || 0);
    }
    _checkPosition() {
      if (this.hasPendingRaf) {
        return;
      }
      this.hasPendingRaf = true;
      requestAnimationFrame(() => {
        let bounds = this.getBoundingClientRect(), maxTop = bounds.top + window.scrollY - this.offsetTop + this.initialTopOffset, minTop = this.clientHeight - window.innerHeight;
        if (window.scrollY < this.lastKnownY) {
          this.currentTop -= window.scrollY - this.lastKnownY;
        } else {
          this.currentTop += this.lastKnownY - window.scrollY;
        }
        this.currentTop = Math.min(Math.max(this.currentTop, -minTop), maxTop, this.initialTopOffset);
        this.lastKnownY = window.scrollY;
        this.style.top = `${this.currentTop}px`;
        this.hasPendingRaf = false;
      });
    }
  };
  window.customElements.define("safe-sticky", SafeSticky);

  // js/helper/throttle.js
  function throttle(callback, delay3 = 15) {
    let throttleTimeout = null, storedEvent = null;
    const throttledEventHandler = (event) => {
      storedEvent = event;
      const shouldHandleEvent = !throttleTimeout;
      if (shouldHandleEvent) {
        callback(storedEvent);
        storedEvent = null;
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          if (storedEvent) {
            throttledEventHandler(storedEvent);
          }
        }, delay3);
      }
    };
    return throttledEventHandler;
  }

  // js/custom-element/behavior/scroll-spy.js
  var ScrollSpy = class extends HTMLElement {
    connectedCallback() {
      this._createSvg();
      this.elementsToObserve = Array.from(this.querySelectorAll("a")).map((linkElement) => document.querySelector(linkElement.getAttribute("href")));
      this.navListItems = Array.from(this.querySelectorAll("li"));
      this.navItems = this.navListItems.map((listItem) => {
        const anchor = listItem.firstElementChild, targetID = anchor && anchor.getAttribute("href").slice(1), target = document.getElementById(targetID);
        return { listItem, anchor, target };
      }).filter((item) => item.target);
      this.drawPath();
      window.addEventListener("scroll", throttle(this.markVisibleSection.bind(this), 25));
      window.addEventListener("orientationchange", () => {
        window.addEventListener("resize", () => {
          this.drawPath();
          this.markVisibleSection();
        }, { once: true });
      });
      this.markVisibleSection();
    }
    _createSvg() {
      this.navPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgElement.insertAdjacentElement("beforeend", this.navPath);
      this.insertAdjacentElement("beforeend", svgElement);
      this.lastPathStart = this.lastPathEnd = null;
    }
    drawPath() {
      let path = [], pathIndent;
      this.navItems.forEach((item, i) => {
        const x = item.anchor.offsetLeft - 5, y = item.anchor.offsetTop, height = item.anchor.offsetHeight;
        if (i === 0) {
          path.push("M", x, y, "L", x, y + height);
          item.pathStart = 0;
        } else {
          if (pathIndent !== x) {
            path.push("L", pathIndent, y);
          }
          path.push("L", x, y);
          this.navPath.setAttribute("d", path.join(" "));
          item.pathStart = this.navPath.getTotalLength() || 0;
          path.push("L", x, y + height);
        }
        pathIndent = x;
        this.navPath.setAttribute("d", path.join(" "));
        item.pathEnd = this.navPath.getTotalLength();
      });
    }
    syncPath() {
      const someElsAreVisible = () => this.querySelectorAll(".is-visible").length > 0, thisElIsVisible = (el) => el.classList.contains("is-visible"), pathLength = this.navPath.getTotalLength();
      let pathStart = pathLength, pathEnd = 0;
      this.navItems.forEach((item) => {
        if (thisElIsVisible(item.listItem)) {
          pathStart = Math.min(item.pathStart, pathStart);
          pathEnd = Math.max(item.pathEnd, pathEnd);
        }
      });
      if (someElsAreVisible() && pathStart < pathEnd) {
        if (pathStart !== this.lastPathStart || pathEnd !== this.lastPathEnd) {
          const dashArray = `1 ${pathStart} ${pathEnd - pathStart} ${pathLength}`;
          this.navPath.style.setProperty("stroke-dashoffset", "1");
          this.navPath.style.setProperty("stroke-dasharray", dashArray);
          this.navPath.style.setProperty("opacity", "1");
        }
      } else {
        this.navPath.style.setProperty("opacity", "0");
      }
      this.lastPathStart = pathStart;
      this.lastPathEnd = pathEnd;
    }
    markVisibleSection() {
      this.navListItems.forEach((item) => item.classList.remove("is-visible"));
      for (const [index, elementToObserve] of this.elementsToObserve.entries()) {
        const boundingClientRect = elementToObserve.getBoundingClientRect();
        if (boundingClientRect.top > getStickyHeaderOffset() || index === this.elementsToObserve.length - 1) {
          this.querySelector(`a[href="#${elementToObserve.id}"]`).parentElement.classList.add("is-visible");
          break;
        }
      }
      this.syncPath();
    }
  };
  window.customElements.define("scroll-spy", ScrollSpy);

  // js/custom-element/behavior/scroll-shadow.js
  var template = `
  <style>
    :host {
      display: inline-block;
      contain: layout;
      position: relative;
    }
    
    :host([hidden]) {
      display: none;
    }
    
    s {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      pointer-events: none;
      background-image:
        var(--scroll-shadow-top, radial-gradient(farthest-side at 50% 0%, rgba(0,0,0,.2), rgba(0,0,0,0))),
        var(--scroll-shadow-bottom, radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0))),
        var(--scroll-shadow-left, radial-gradient(farthest-side at 0%, rgba(0,0,0,.2), rgba(0,0,0,0))),
        var(--scroll-shadow-right, radial-gradient(farthest-side at 100%, rgba(0,0,0,.2), rgba(0,0,0,0)));
      background-position: top, bottom, left, right;
      background-repeat: no-repeat;
      background-size: 100% var(--top, 0), 100% var(--bottom, 0), var(--left, 0) 100%, var(--right, 0) 100%;
    }
  </style>
  <slot></slot>
  <s></s>
`;
  var Updater = class {
    constructor(targetElement) {
      this.scheduleUpdate = throttle(() => this.update(targetElement, getComputedStyle(targetElement)));
      this.resizeObserver = new ResizeObserver(this.scheduleUpdate.bind(this));
    }
    start(element) {
      if (this.element) {
        this.stop();
      }
      if (element) {
        element.addEventListener("scroll", this.scheduleUpdate);
        this.resizeObserver.observe(element);
        this.element = element;
      }
    }
    stop() {
      if (!this.element) {
        return;
      }
      this.element.removeEventListener("scroll", this.scheduleUpdate);
      this.resizeObserver.unobserve(this.element);
      this.element = null;
    }
    update(targetElement, style) {
      if (!this.element) {
        return;
      }
      const maxSize = style.getPropertyValue("--scroll-shadow-size") ? parseInt(style.getPropertyValue("--scroll-shadow-size")) : 0;
      const scroll = {
        top: Math.max(this.element.scrollTop, 0),
        bottom: Math.max(this.element.scrollHeight - this.element.offsetHeight - this.element.scrollTop, 0),
        left: Math.max(this.element.scrollLeft, 0),
        right: Math.max(this.element.scrollWidth - this.element.offsetWidth - this.element.scrollLeft, 0)
      };
      requestAnimationFrame(() => {
        for (const position of ["top", "bottom", "left", "right"]) {
          targetElement.style.setProperty(`--${position}`, `${scroll[position] > maxSize ? maxSize : scroll[position]}px`);
        }
      });
    }
  };
  var ScrollShadow = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = template;
      this.updater = new Updater(this.shadowRoot.lastElementChild);
    }
    connectedCallback() {
      this.shadowRoot.querySelector("slot").addEventListener("slotchange", () => this.start());
      this.start();
    }
    disconnectedCallback() {
      this.updater.stop();
    }
    start() {
      this.updater.start(this.firstElementChild);
    }
  };
  if ("ResizeObserver" in window) {
    window.customElements.define("scroll-shadow", ScrollShadow);
  }

  // js/custom-element/behavior/share-toggle-button.js
  var ShareToggleButton = class extends ToggleButton {
    _onButtonClick() {
      if (window.matchMedia(window.themeVariables.breakpoints.phone).matches && navigator.share) {
        navigator.share({
          title: this.hasAttribute("share-title") ? this.getAttribute("share-title") : document.title,
          url: this.hasAttribute("share-url") ? this.getAttribute("share-url") : window.location.href
        });
      } else {
        super._onButtonClick();
      }
    }
  };
  window.customElements.define("share-toggle-button", ShareToggleButton, { extends: "button" });

  // js/custom-element/ui/carousel.js
  var NativeCarousel = class extends CustomHTMLElement {
    connectedCallback() {
      this.items = Array.from(this.querySelectorAll("native-carousel-item"));
      this.pageDotsElements = Array.from(this.querySelectorAll("page-dots"));
      this.prevNextButtonsElements = Array.from(this.querySelectorAll("prev-next-buttons"));
      if (this.items.length > 1) {
        this.addEventListener("prev-next:prev", this.prev.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
        this.addEventListener("page-dots:changed", (event) => this.select(event.detail.index, true));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", (event) => this.select(event.target.index, !event.detail.load));
        }
      }
      const scrollerElement = this.items[0].parentElement;
      this.intersectionObserver = new IntersectionObserver(this._onVisibilityChanged.bind(this), { root: scrollerElement, rootMargin: `${scrollerElement.clientHeight}px 0px`, threshold: 0.8 });
      this.items.forEach((item) => this.intersectionObserver.observe(item));
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.intersectionObserver.disconnect();
    }
    get selectedIndex() {
      return this.items.findIndex((item) => item.selected);
    }
    prev(shouldAnimate = true) {
      this.select(Math.max(this.selectedIndex - 1, 0), shouldAnimate);
    }
    next(shouldAnimate = true) {
      this.select(Math.min(this.selectedIndex + 1, this.items.length - 1), shouldAnimate);
    }
    select(index, shouldAnimate = true) {
      const clampIndex = Math.max(0, Math.min(index, this.items.length));
      const selectedElement = this.items[clampIndex];
      this._adjustNavigationForElement(selectedElement);
      if (shouldAnimate) {
        this.items.forEach((item) => this.intersectionObserver.unobserve(item));
        setInterval(() => {
          this.items.forEach((item) => this.intersectionObserver.observe(item));
        }, 800);
      }
      this.items.forEach((item, loopIndex) => item.selected = loopIndex === clampIndex);
      const direction = window.themeVariables.settings.direction === "ltr" ? 1 : -1;
      selectedElement.parentElement.scrollTo({ left: direction * (selectedElement.clientWidth * clampIndex), behavior: shouldAnimate ? "smooth" : "auto" });
    }
    _adjustNavigationForElement(selectedElement) {
      this.items.forEach((item) => item.selected = selectedElement === item);
      this.pageDotsElements.forEach((pageDot) => pageDot.selectedIndex = selectedElement.index);
      this.prevNextButtonsElements.forEach((prevNextButton) => {
        prevNextButton.isPrevDisabled = selectedElement.index === 0;
        prevNextButton.isNextDisabled = selectedElement.index === this.items.length - 1;
      });
    }
    _onVisibilityChanged(entries) {
      for (let entry of entries) {
        if (entry.isIntersecting) {
          this._adjustNavigationForElement(entry.target);
          break;
        }
      }
    }
  };
  var NativeCarouselItem = class extends CustomHTMLElement {
    static get observedAttributes() {
      return ["hidden"];
    }
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    set selected(value) {
      this.hidden = !value;
    }
  };
  window.customElements.define("native-carousel-item", NativeCarouselItem);
  window.customElements.define("native-carousel", NativeCarousel);

  // js/custom-element/ui/drag-cursor.js
  var DragCursor = class extends HTMLElement {
    connectedCallback() {
      this.scrollableElement = this.parentElement;
      this.scrollableElement.addEventListener("mouseenter", this._onMouseEnter.bind(this));
      this.scrollableElement.addEventListener("mousemove", this._onMouseMove.bind(this));
      this.scrollableElement.addEventListener("mouseleave", this._onMouseLeave.bind(this));
      this.innerHTML = `
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <path d="M0 60C0 26.863 26.863 0 60 0s60 26.863 60 60-26.863 60-60 60S0 93.137 0 60z" fill="rgb(var(--text-color))"/>
        <path d="M46 50L36 60l10 10M74 50l10 10-10 10" stroke="rgb(var(--section-background))" stroke-width="4"/>
      </svg>
    `;
    }
    _onMouseEnter(event) {
      this.removeAttribute("hidden");
      this._positionCursor(event);
    }
    _onMouseLeave() {
      this.setAttribute("hidden", "");
    }
    _onMouseMove(event) {
      this.toggleAttribute("hidden", event.target.tagName === "BUTTON" || event.target.tagName === "A");
      this._positionCursor(event);
    }
    _positionCursor(event) {
      const elementBoundingRect = this.scrollableElement.getBoundingClientRect();
      const x = event.clientX - elementBoundingRect.x;
      const y = event.clientY - elementBoundingRect.y;
      this.style.transform = `translate(${x - this.clientWidth / 2}px, ${y - this.clientHeight / 2}px)`;
    }
  };
  window.customElements.define("drag-cursor", DragCursor);

  // js/custom-element/ui/scrollable-content.js
  var ScrollableContent = class extends CustomHTMLElement {
    connectedCallback() {
      if (this.draggable) {
        this._setupDraggability();
      }
      this._checkScrollability();
      window.addEventListener("resize", this._checkScrollability.bind(this));
      this.addEventListener("scroll", throttle(this._calculateProgress.bind(this), 15));
    }
    get draggable() {
      return this.hasAttribute("draggable");
    }
    _setupDraggability() {
      this.insertAdjacentHTML("afterend", '<drag-cursor hidden class="custom-drag-cursor"></drag-cursor>');
      const mediaQuery = matchMedia("(hover: none)");
      mediaQuery.addListener(this._onMediaChanges.bind(this));
      if (!mediaQuery.matches) {
        this._attachDraggableListeners();
      }
    }
    _attachDraggableListeners() {
      this.delegate.on("mousedown", this._onMouseDown.bind(this));
      this.delegate.on("mousemove", this._onMouseMove.bind(this));
      this.delegate.on("mouseup", this._onMouseUp.bind(this));
    }
    _removeDraggableListeners() {
      this.delegate.off("mousedown");
      this.delegate.off("mousemove");
      this.delegate.off("mouseup");
    }
    _checkScrollability() {
      this.classList.toggle("is-scrollable", this.scrollWidth > this.offsetWidth);
    }
    _calculateProgress() {
      const scrollLeft = this.scrollLeft * (window.themeVariables.settings.direction === "ltr" ? 1 : -1);
      const progress = Math.max(0, Math.min(1, scrollLeft / (this.scrollWidth - this.clientWidth))) * 100;
      triggerEvent(this, "scrollable-content:progress", { progress });
    }
    _onMediaChanges(event) {
      if (!event.matches) {
        this._attachDraggableListeners();
      } else {
        this._removeDraggableListeners();
      }
    }
    _onMouseDown(event) {
      if (event.target && event.target.nodeName === "IMG") {
        event.preventDefault();
      }
      this.startX = event.clientX + this.scrollLeft;
      this.diffX = 0;
      this.drag = true;
    }
    _onMouseMove(event) {
      if (this.drag) {
        this.diffX = this.startX - (event.clientX + this.scrollLeft);
        this.scrollLeft += this.diffX;
      }
    }
    _onMouseUp() {
      this.drag = false;
      let start = 1;
      let animate = () => {
        let step = Math.sinh(start);
        if (step <= 0) {
          window.cancelAnimationFrame(animate);
        } else {
          this.scrollLeft += this.diffX * step;
          start -= 0.03;
          window.requestAnimationFrame(animate);
        }
      };
      animate();
    }
  };
  window.customElements.define("scrollable-content", ScrollableContent);

  // js/custom-element/ui/loading-bar.js
  var LoadingBar = class extends CustomHTMLElement {
    constructor() {
      super();
      this.rootDelegate.on("theme:loading:start", this.show.bind(this));
      this.rootDelegate.on("theme:loading:end", this.hide.bind(this));
      this.delegate.on("transitionend", this._onTransitionEnd.bind(this));
    }
    show() {
      this.classList.add("is-visible");
      this.style.transform = "scaleX(0.4)";
    }
    hide() {
      this.style.transform = "scaleX(1)";
      this.classList.add("is-finished");
    }
    _onTransitionEnd(event) {
      if (event.propertyName === "transform" && this.classList.contains("is-finished")) {
        this.classList.remove("is-visible");
        this.classList.remove("is-finished");
        this.style.transform = "scaleX(0)";
      }
    }
  };
  window.customElements.define("loading-bar", LoadingBar);

  // js/custom-element/ui/split-lines.js
  var SplitLines = class extends HTMLElement {
    connectedCallback() {
      this.originalContent = this.textContent;
      this.lastWidth = window.innerWidth;
      this.hasBeenSplitted = false;
      window.addEventListener("resize", this._onResize.bind(this));
    }
    [Symbol.asyncIterator]() {
      return {
        splitPromise: this.split.bind(this),
        index: 0,
        async next() {
          const lines = await this.splitPromise();
          if (this.index !== lines.length) {
            return { done: false, value: lines[this.index++] };
          } else {
            return { done: true };
          }
        }
      };
    }
    split(force = false) {
      if (this.childElementCount > 0 && !force) {
        return Promise.resolve(Array.from(this.children));
      }
      this.hasBeenSplitted = true;
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          this.innerHTML = this.originalContent.replace(/./g, "<span>$&</span>").replace(/\s/g, " ");
          const bounds = {};
          Array.from(this.children).forEach((child) => {
            const rect = parseInt(child.getBoundingClientRect().top);
            bounds[rect] = (bounds[rect] || "") + child.textContent;
          });
          this.innerHTML = Object.values(bounds).map((item) => `<span ${this.hasAttribute("reveal") && !force ? "reveal" : ""} ${this.hasAttribute("reveal-visibility") && !force ? "reveal-visibility" : ""} style="display: block">${item.trim()}</span>`).join("");
          this.style.opacity = this.hasAttribute("reveal") ? 1 : null;
          this.style.visibility = this.hasAttribute("reveal-visibility") ? "visible" : null;
          resolve(Array.from(this.children));
        });
      });
    }
    async _onResize() {
      if (this.lastWidth === window.innerWidth || !this.hasBeenSplitted) {
        return;
      }
      await this.split(true);
      this.dispatchEvent(new CustomEvent("split-lines:re-split", { bubbles: true }));
      this.lastWidth = window.innerWidth;
    }
  };
  window.customElements.define("split-lines", SplitLines);

  // js/custom-element/ui/popover.js
  var PopoverContent = class extends OpenableElement {
    connectedCallback() {
      super.connectedCallback();
      this.delegate.on("click", ".popover__overlay", () => this.open = false);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          document.documentElement.classList.toggle("lock-mobile", this.open);
      }
    }
  };
  window.customElements.define("popover-content", PopoverContent);

  // js/custom-element/ui/tabs-nav.js
  var TabsNav = class extends HTMLElement {
    connectedCallback() {
      this.buttons = Array.from(this.querySelectorAll("button[aria-controls]"));
      this.scrollerElement = this.querySelector(".tabs-nav__scroller");
      this.buttons.forEach((button) => button.addEventListener("click", () => this.selectButton(button)));
      this.addEventListener("shopify:block:select", (event) => this.selectButton(event.target, !event.detail.load));
      this.positionElement = document.createElement("span");
      this.positionElement.classList.add("tabs-nav__position");
      this.buttons[0].parentElement.insertAdjacentElement("afterend", this.positionElement);
      window.addEventListener("resize", this._onWindowResized.bind(this));
      this._adjustNavigationPosition();
      if (this.hasArrows) {
        this._handleArrows();
      }
    }
    get hasArrows() {
      return this.hasAttribute("arrows");
    }
    get selectedTabIndex() {
      return this.buttons.findIndex((button) => button.getAttribute("aria-expanded") === "true");
    }
    get selectedButton() {
      return this.buttons.find((button) => button.getAttribute("aria-expanded") === "true");
    }
    selectButton(button, animate = true) {
      if (!this.buttons.includes(button) || this.selectedButton === button) {
        return;
      }
      const from = document.getElementById(this.selectedButton.getAttribute("aria-controls")), to = document.getElementById(button.getAttribute("aria-controls"));
      if (animate) {
        this._transitionContent(from, to);
      } else {
        from.hidden = true;
        to.hidden = false;
      }
      this.selectedButton.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-expanded", "true");
      triggerEvent(this, "tabs-nav:changed", { button });
      this._adjustNavigationPosition();
    }
    addButton(button) {
      button.addEventListener("click", () => this.selectButton(button));
      button.setAttribute("aria-expanded", "false");
      this.buttons[this.buttons.length - 1].insertAdjacentElement("afterend", button);
      this.buttons.push(button);
      this._adjustNavigationPosition(false);
    }
    _transitionContent(from, to) {
      from.animate({
        opacity: [1, 0]
      }, {
        duration: 250,
        easing: "ease"
      }).onfinish = () => {
        from.hidden = true;
        to.hidden = false;
        to.animate({
          opacity: [0, 1]
        }, {
          duration: 250,
          easing: "ease"
        });
      };
    }
    _onWindowResized() {
      this._adjustNavigationPosition();
    }
    _adjustNavigationPosition(shouldAnimate = true) {
      const scale = this.selectedButton.clientWidth / this.positionElement.parentElement.clientWidth, translate = this.selectedButton.offsetLeft / this.positionElement.parentElement.clientWidth / scale, windowHalfWidth = this.scrollerElement.clientWidth / 2;
      this.scrollerElement.scrollTo({
        behavior: shouldAnimate ? "smooth" : "auto",
        left: this.selectedButton.offsetLeft - windowHalfWidth + this.selectedButton.clientWidth / 2
      });
      if (!shouldAnimate) {
        this.positionElement.style.transition = "none";
      }
      this.positionElement.style.setProperty("--scale", scale);
      this.positionElement.style.setProperty("--translate", `${translate * 100}%`);
      this.positionElement.clientWidth;
      requestAnimationFrame(() => {
        this.positionElement.classList.add("is-initialized");
        this.positionElement.style.transition = null;
      });
    }
    _handleArrows() {
      const arrowsContainer = this.querySelector(".tabs-nav__arrows");
      arrowsContainer.firstElementChild.addEventListener("click", () => {
        this.selectButton(this.buttons[Math.max(this.selectedTabIndex - 1, 0)]);
      });
      arrowsContainer.lastElementChild.addEventListener("click", () => {
        this.selectButton(this.buttons[Math.min(this.selectedTabIndex + 1, this.buttons.length - 1)]);
      });
    }
  };
  window.customElements.define("tabs-nav", TabsNav);

  // js/helper/library-loader.js
  var LibraryLoader = class {
    static load(libraryName) {
      const STATUS_REQUESTED = "requested", STATUS_LOADED = "loaded";
      const library = this.libraries[libraryName];
      if (!library) {
        return;
      }
      if (library.status === STATUS_REQUESTED) {
        return library.promise;
      }
      if (library.status === STATUS_LOADED) {
        return Promise.resolve();
      }
      let promise;
      if (library.type === "script") {
        promise = new Promise((resolve, reject) => {
          let tag = document.createElement("script");
          tag.id = library.tagId;
          tag.src = library.src;
          tag.onerror = reject;
          tag.onload = () => {
            library.status = STATUS_LOADED;
            resolve();
          };
          document.body.appendChild(tag);
        });
      } else {
        promise = new Promise((resolve, reject) => {
          let tag = document.createElement("link");
          tag.id = library.tagId;
          tag.href = library.src;
          tag.rel = "stylesheet";
          tag.type = "text/css";
          tag.onerror = reject;
          tag.onload = () => {
            library.status = STATUS_LOADED;
            resolve();
          };
          document.body.appendChild(tag);
        });
      }
      library.promise = promise;
      library.status = STATUS_REQUESTED;
      return promise;
    }
  };
  __publicField(LibraryLoader, "libraries", {
    flickity: {
      tagId: "flickity",
      src: window.themeVariables.libs.flickity,
      type: "script"
    },
    photoswipe: {
      tagId: "photoswipe",
      src: window.themeVariables.libs.photoswipe,
      type: "script"
    },
    qrCode: {
      tagId: "qrCode",
      src: window.themeVariables.libs.qrCode,
      type: "script"
    },
    modelViewerUiStyles: {
      tagId: "shopify-model-viewer-ui-styles",
      src: "https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css",
      type: "link"
    }
  });

  // js/custom-element/ui/qr-code.js
  var QrCode = class extends HTMLElement {
    async connectedCallback() {
      await LibraryLoader.load("qrCode");
      new window.QRCode(this, {
        text: this.getAttribute("identifier"),
        width: 200,
        height: 200
      });
    }
  };
  window.customElements.define("qr-code", QrCode);

  // js/custom-element/ui/country-selector.js
  var CountrySelector = class extends HTMLSelectElement {
    connectedCallback() {
      this.provinceElement = document.getElementById(this.getAttribute("aria-owns"));
      this.addEventListener("change", this._updateProvinceVisibility.bind(this));
      if (this.hasAttribute("data-default")) {
        for (let i = 0; i !== this.options.length; ++i) {
          if (this.options[i].text === this.getAttribute("data-default")) {
            this.selectedIndex = i;
            break;
          }
        }
      }
      this._updateProvinceVisibility();
      const provinceSelectElement = this.provinceElement.tagName === "SELECT" ? this.provinceElement : this.provinceElement.querySelector("select");
      if (provinceSelectElement.hasAttribute("data-default")) {
        for (let i = 0; i !== provinceSelectElement.options.length; ++i) {
          if (provinceSelectElement.options[i].text === provinceSelectElement.getAttribute("data-default")) {
            provinceSelectElement.selectedIndex = i;
            break;
          }
        }
      }
    }
    _updateProvinceVisibility() {
      const selectedOption = this.options[this.selectedIndex];
      if (!selectedOption) {
        return;
      }
      let provinces = JSON.parse(selectedOption.getAttribute("data-provinces") || "[]"), provinceSelectElement = this.provinceElement.tagName === "SELECT" ? this.provinceElement : this.provinceElement.querySelector("select");
      provinceSelectElement.innerHTML = "";
      if (provinces.length === 0) {
        this.provinceElement.hidden = true;
        return;
      }
      provinces.forEach((data) => {
        provinceSelectElement.options.add(new Option(data[1], data[0]));
      });
      this.provinceElement.hidden = false;
    }
  };
  window.customElements.define("country-selector", CountrySelector, { extends: "select" });

  // js/custom-element/ui/modal.js
  var ModalContent = class extends OpenableElement {
    connectedCallback() {
      super.connectedCallback();
      if (this.appearAfterDelay && !(this.onlyOnce && this.hasAppearedOnce)) {
        setTimeout(() => this.open = true, this.apparitionDelay);
      }
      this.delegate.on("click", ".modal__overlay", () => this.open = false);
    }
    get appearAfterDelay() {
      return this.hasAttribute("apparition-delay");
    }
    get apparitionDelay() {
      return parseInt(this.getAttribute("apparition-delay") || 0) * 1e3;
    }
    get onlyOnce() {
      return this.hasAttribute("only-once");
    }
    get hasAppearedOnce() {
      return localStorage.getItem("theme:popup-appeared") !== null;
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          document.documentElement.classList.toggle("lock-all", this.open);
          if (this.open) {
            localStorage.setItem("theme:popup-appeared", true);
          }
      }
    }
  };
  window.customElements.define("modal-content", ModalContent);

  // js/custom-element/ui/price-range.js
  var PriceRange = class extends HTMLElement {
    connectedCallback() {
      this.rangeLowerBound = this.querySelector(".price-range__range-group input:first-child");
      this.rangeHigherBound = this.querySelector(".price-range__range-group input:last-child");
      this.textInputLowerBound = this.querySelector(".price-range__input:first-child input");
      this.textInputHigherBound = this.querySelector(".price-range__input:last-child input");
      this.textInputLowerBound.addEventListener("focus", () => this.textInputLowerBound.select());
      this.textInputHigherBound.addEventListener("focus", () => this.textInputHigherBound.select());
      this.textInputLowerBound.addEventListener("change", (event) => {
        event.target.value = Math.max(Math.min(parseInt(event.target.value), parseInt(this.textInputHigherBound.value || event.target.max) - 1), event.target.min);
        this.rangeLowerBound.value = event.target.value;
        this.rangeLowerBound.parentElement.style.setProperty("--range-min", `${parseInt(this.rangeLowerBound.value) / parseInt(this.rangeLowerBound.max) * 100}%`);
      });
      this.textInputHigherBound.addEventListener("change", (event) => {
        event.target.value = Math.min(Math.max(parseInt(event.target.value), parseInt(this.textInputLowerBound.value || event.target.min) + 1), event.target.max);
        this.rangeHigherBound.value = event.target.value;
        this.rangeHigherBound.parentElement.style.setProperty("--range-max", `${parseInt(this.rangeHigherBound.value) / parseInt(this.rangeHigherBound.max) * 100}%`);
      });
      this.rangeLowerBound.addEventListener("change", (event) => {
        this.textInputLowerBound.value = event.target.value;
        this.textInputLowerBound.dispatchEvent(new Event("change", { bubbles: true }));
      });
      this.rangeHigherBound.addEventListener("change", (event) => {
        this.textInputHigherBound.value = event.target.value;
        this.textInputHigherBound.dispatchEvent(new Event("change", { bubbles: true }));
      });
      this.rangeLowerBound.addEventListener("input", (event) => {
        triggerEvent(this, "facet:abort-loading");
        event.target.value = Math.min(parseInt(event.target.value), parseInt(this.textInputHigherBound.value || event.target.max) - 1);
        event.target.parentElement.style.setProperty("--range-min", `${parseInt(event.target.value) / parseInt(event.target.max) * 100}%`);
        this.textInputLowerBound.value = event.target.value;
      });
      this.rangeHigherBound.addEventListener("input", (event) => {
        triggerEvent(this, "facet:abort-loading");
        event.target.value = Math.max(parseInt(event.target.value), parseInt(this.textInputLowerBound.value || event.target.min) + 1);
        event.target.parentElement.style.setProperty("--range-max", `${parseInt(event.target.value) / parseInt(event.target.max) * 100}%`);
        this.textInputHigherBound.value = event.target.value;
      });
    }
  };
  window.customElements.define("price-range", PriceRange);

  // js/custom-element/ui/link-bar.js
  var LinkBar = class extends HTMLElement {
    connectedCallback() {
      const selectedItem = this.querySelector(".link-bar__link-item--selected");
      if (selectedItem) {
        requestAnimationFrame(() => {
          selectedItem.style.scrollSnapAlign = "none";
        });
      }
    }
  };
  window.customElements.define("link-bar", LinkBar);

  // js/helper/media-features.js
  var MediaFeatures = class {
    static prefersReducedMotion() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    static supportsHover() {
      return window.matchMedia("(pointer: fine)").matches;
    }
  };

  // js/custom-element/ui/flickity-carousel.js
  var FlickityCarousel = class extends CustomHTMLElement {
    constructor() {
      super();
      if (this.childElementCount === 1) {
        return;
      }
      this.addEventListener("flickity:ready", this._preloadNextImage.bind(this));
      this.addEventListener("flickity:slide-changed", this._preloadNextImage.bind(this));
      this._createFlickity();
    }
    async disconnectedCallback() {
      if (this.flickity) {
        const flickityInstance = await this.flickity;
        flickityInstance.destroy();
      }
    }
    get flickityConfig() {
      return JSON.parse(this.getAttribute("flickity-config"));
    }
    get flickityInstance() {
      return this.flickity;
    }
    async next() {
      (await this.flickityInstance).next();
    }
    async previous() {
      (await this.flickityInstance).previous();
    }
    async select(indexOrSelector) {
      (await this.flickityInstance).selectCell(indexOrSelector);
    }
    async setDraggable(draggable) {
      const flickityInstance = await this.flickity;
      flickityInstance.options.draggable = draggable;
      flickityInstance.updateDraggable();
    }
    async reload() {
      const flickityInstance = await this.flickity;
      flickityInstance.destroy();
      if (this.flickityConfig["cellSelector"]) {
        Array.from(this.children).sort((a, b) => parseInt(a.getAttribute("data-original-position")) > parseInt(b.getAttribute("data-original-position")) ? 1 : -1).forEach((node) => this.appendChild(node));
      }
      this._createFlickity();
    }
    async _createFlickity() {
      this.flickity = new Promise(async (resolve) => {
        await LibraryLoader.load("flickity");
        await this.untilVisible({ rootMargin: "400px", threshold: 0 });
        const flickityInstance = new window.ThemeFlickity(this, { ...this.flickityConfig, ...{
          rightToLeft: window.themeVariables.settings.direction === "rtl",
          accessibility: MediaFeatures.supportsHover(),
          on: {
            ready: (event) => triggerEvent(this, "flickity:ready", event),
            change: (event) => triggerEvent(this, "flickity:slide-changed", event),
            settle: (event) => triggerEvent(this, "flickity:slide-settled", event)
          }
        } });
        resolve(flickityInstance);
      });
      if (this.hasAttribute("click-nav")) {
        const flickityInstance = await this.flickityInstance;
        flickityInstance.on("staticClick", this._onStaticClick.bind(this));
        this.addEventListener("mousemove", this._onMouseMove.bind(this));
      }
    }
    async _onStaticClick(event, pointer, cellElement) {
      const flickityInstance = await this.flickityInstance, isVideoOrModelType = flickityInstance.selectedElement.hasAttribute("data-media-type") && ["video", "external_video", "model"].includes(flickityInstance.selectedElement.getAttribute("data-media-type"));
      if (!cellElement || isVideoOrModelType || window.matchMedia(window.themeVariables.breakpoints.phone).matches) {
        return;
      }
      const flickityViewport = flickityInstance.viewport, boundingRect = flickityViewport.getBoundingClientRect(), halfEdge = Math.floor(boundingRect.right - boundingRect.width / 2);
      if (pointer.clientX > halfEdge) {
        flickityInstance.next();
      } else {
        flickityInstance.previous();
      }
    }
    async _onMouseMove(event) {
      const flickityInstance = await this.flickityInstance, isVideoOrModelType = flickityInstance.selectedElement.hasAttribute("data-media-type") && ["video", "external_video", "model"].includes(flickityInstance.selectedElement.getAttribute("data-media-type"));
      this.classList.toggle("is-hovering-right", event.offsetX > this.clientWidth / 2 && !isVideoOrModelType);
      this.classList.toggle("is-hovering-left", event.offsetX <= this.clientWidth / 2 && !isVideoOrModelType);
    }
    async _preloadNextImage() {
      var _a;
      const flickityInstance = await this.flickity;
      if (flickityInstance.selectedElement.nextElementSibling) {
        (_a = flickityInstance.selectedElement.nextElementSibling.querySelector("img")) == null ? void 0 : _a.setAttribute("loading", "eager");
      }
    }
  };
  window.customElements.define("flickity-carousel", FlickityCarousel);

  // js/helper/dom.js
  function getSiblings(element, filter, includeSelf = false) {
    let siblings = [];
    let currentElement = element;
    while (currentElement = currentElement.previousElementSibling) {
      if (!filter || currentElement.matches(filter)) {
        siblings.push(currentElement);
      }
    }
    if (includeSelf) {
      siblings.push(element);
    }
    currentElement = element;
    while (currentElement = currentElement.nextElementSibling) {
      if (!filter || currentElement.matches(filter)) {
        siblings.push(currentElement);
      }
    }
    return siblings;
  }
  async function resolveAsyncIterator(target) {
    const processedTarget = [];
    if (!(target != null && typeof target[Symbol.iterator] === "function")) {
      target = [target];
    }
    for (const targetItem of target) {
      if (typeof targetItem[Symbol.asyncIterator] === "function") {
        for await (const awaitTarget of targetItem) {
          processedTarget.push(awaitTarget);
        }
      } else {
        processedTarget.push(targetItem);
      }
    }
    return processedTarget;
  }

  // js/custom-element/ui/flickity-controls.js
  var FlickityControls = class extends CustomHTMLElement {
    async connectedCallback() {
      this.flickityCarousel.addEventListener("flickity:ready", this._onSlideChanged.bind(this, false));
      this.flickityCarousel.addEventListener("flickity:slide-changed", this._onSlideChanged.bind(this, true));
      this.delegate.on("click", '[data-action="prev"]', () => this.flickityCarousel.previous());
      this.delegate.on("click", '[data-action="next"]', () => this.flickityCarousel.next());
      this.delegate.on("click", '[data-action="select"]', (event, target) => this.flickityCarousel.select(`#${target.getAttribute("aria-controls")}`));
    }
    get flickityCarousel() {
      return this._flickityCarousel = this._flickityCarousel || document.getElementById(this.getAttribute("controls"));
    }
    async _onSlideChanged(animate = true) {
      let flickityInstance = await this.flickityCarousel.flickityInstance, activeItems = Array.from(this.querySelectorAll(`[aria-controls="${flickityInstance.selectedElement.id}"]`));
      activeItems.forEach((activeItem) => {
        activeItem.setAttribute("aria-current", "true");
        getSiblings(activeItem).forEach((sibling) => sibling.removeAttribute("aria-current"));
        requestAnimationFrame(() => {
          if (activeItem.offsetParent && activeItem.offsetParent !== this) {
            const windowHalfHeight = activeItem.offsetParent.clientHeight / 2, windowHalfWidth = activeItem.offsetParent.clientWidth / 2;
            activeItem.offsetParent.scrollTo({
              behavior: animate ? "smooth" : "auto",
              top: activeItem.offsetTop - windowHalfHeight + activeItem.clientHeight / 2,
              left: activeItem.offsetLeft - windowHalfWidth + activeItem.clientWidth / 2
            });
          }
        });
      });
    }
  };
  window.customElements.define("flickity-controls", FlickityControls);

  // js/custom-element/ui/external-video.js
  var ExternalVideo = class extends CustomHTMLElement {
    constructor() {
      super();
      this.hasLoaded = false;
      (async () => {
        if (this.autoPlay) {
          await this.untilVisible({ rootMargin: "300px", threshold: 0 });
          this.play();
        } else {
          this.addEventListener("click", this.play.bind(this), { once: true });
        }
      })();
    }
    get autoPlay() {
      return this.hasAttribute("autoplay");
    }
    get provider() {
      return this.getAttribute("provider");
    }
    async play() {
      if (!this.hasLoaded) {
        await this._setupPlayer();
      }
      if (this.provider === "youtube") {
        this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ event: "command", func: "playVideo", args: "" }), "*");
      } else if (this.provider === "vimeo") {
        this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ method: "play" }), "*");
      }
    }
    pause() {
      if (!this.hasLoaded) {
        return;
      }
      if (this.provider === "youtube") {
        this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ event: "command", func: "pauseVideo", args: "" }), "*");
      } else if (this.provider === "vimeo") {
        this.querySelector("iframe").contentWindow.postMessage(JSON.stringify({ method: "pause" }), "*");
      }
    }
    _setupPlayer() {
      if (this._setupPromise) {
        return this._setupPromise;
      }
      return this._setupPromise = new Promise((resolve) => {
        const template2 = this.querySelector("template"), node = template2.content.firstElementChild.cloneNode(true);
        node.onload = () => {
          this.hasLoaded = true;
          resolve();
        };
        if (this.autoPlay) {
          template2.replaceWith(node);
        } else {
          this.innerHTML = "";
          this.appendChild(node);
        }
      });
    }
  };
  window.customElements.define("external-video", ExternalVideo);

  // js/helper/product-loader.js
  var ProductLoader = class {
    static load(productHandle) {
      if (!productHandle) {
        return;
      }
      if (this.loadedProducts[productHandle]) {
        return this.loadedProducts[productHandle];
      }
      this.loadedProducts[productHandle] = new Promise(async (resolve) => {
        const response = await fetch(`${window.themeVariables.routes.rootUrlWithoutSlash}/products/${productHandle}.js`);
        const responseAsJson = await response.json();
        resolve(responseAsJson);
      });
      return this.loadedProducts[productHandle];
    }
  };
  __publicField(ProductLoader, "loadedProducts", {});

  // js/custom-element/ui/model-media.js
  var ModelMedia = class extends HTMLElement {
    constructor() {
      super();
      LibraryLoader.load("modelViewerUiStyles");
      window.Shopify.loadFeatures([
        {
          name: "shopify-xr",
          version: "1.0",
          onLoad: this._setupShopifyXr.bind(this)
        },
        {
          name: "model-viewer-ui",
          version: "1.0",
          onLoad: () => {
            this.modelUi = new window.Shopify.ModelViewerUI(this.firstElementChild, { focusOnPlay: false });
            const modelViewer = this.querySelector("model-viewer");
            modelViewer.addEventListener("shopify_model_viewer_ui_toggle_play", () => {
              modelViewer.dispatchEvent(new CustomEvent("model:played", { bubbles: true }));
            });
            modelViewer.addEventListener("shopify_model_viewer_ui_toggle_pause", () => {
              modelViewer.dispatchEvent(new CustomEvent("model:paused", { bubbles: true }));
            });
          }
        }
      ]);
    }
    disconnectedCallback() {
      var _a;
      (_a = this.modelUi) == null ? void 0 : _a.destroy();
    }
    play() {
      if (this.modelUi) {
        this.modelUi.play();
      }
    }
    pause() {
      if (this.modelUi) {
        this.modelUi.pause();
      }
    }
    async _setupShopifyXr() {
      if (!window.ShopifyXR) {
        document.addEventListener("shopify_xr_initialized", this._setupShopifyXr.bind(this));
      } else {
        const product = await ProductLoader.load(this.getAttribute("product-handle"));
        const models = product["media"].filter((media) => media["media_type"] === "model");
        window.ShopifyXR.addModels(models);
        window.ShopifyXR.setupXRElements();
      }
    }
  };
  window.customElements.define("model-media", ModelMedia);

  // js/custom-element/ui/native-video.js
  var NativeVideo = class extends HTMLElement {
    constructor() {
      super();
      this.hasLoaded = false;
      if (this.autoPlay) {
        this.play();
      } else {
        this.addEventListener("click", this.play.bind(this), { once: true });
      }
    }
    get autoPlay() {
      return this.hasAttribute("autoplay");
    }
    play() {
      if (!this.hasLoaded) {
        this._replaceContent();
      }
      this.querySelector("video").play();
    }
    pause() {
      if (this.hasLoaded) {
        this.querySelector("video").pause();
      }
    }
    _replaceContent() {
      const node = this.querySelector("template").content.firstElementChild.cloneNode(true);
      this.innerHTML = "";
      this.appendChild(node);
      this.firstElementChild.addEventListener("play", () => {
        this.dispatchEvent(new CustomEvent("video:played", { bubbles: true }));
      });
      this.firstElementChild.addEventListener("pause", () => {
        this.dispatchEvent(new CustomEvent("video:paused", { bubbles: true }));
      });
      this.hasLoaded = true;
    }
  };
  window.customElements.define("native-video", NativeVideo);

  // js/custom-element/ui/combo-box.js
  var ComboBox = class extends OpenableElement {
    connectedCallback() {
      super.connectedCallback();
      this.options = Array.from(this.querySelectorAll('[role="option"]'));
      this.delegate.on("click", '[role="option"]', this._onValueClicked.bind(this));
      this.delegate.on("keydown", '[role="listbox"]', this._onKeyDown.bind(this));
      this.delegate.on("change", "select", this._onValueChanged.bind(this));
      this.delegate.on("click", ".combo-box__overlay", () => this.open = false);
      if (this.hasAttribute("fit-toggle")) {
        const maxWidth = Math.max(...this.options.map((item) => item.clientWidth)), control = document.querySelector(`[aria-controls="${this.id}"]`);
        if (control) {
          control.style.setProperty("--largest-option-width", `${maxWidth + 2}px`);
        }
      }
    }
    get nativeSelect() {
      return this.querySelector("select");
    }
    set selectedValue(value) {
      this.options.forEach((option) => {
        option.setAttribute("aria-selected", option.getAttribute("value") === value ? "true" : "false");
      });
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          if (this.open) {
            const boundingRect = this.getBoundingClientRect();
            this.classList.toggle("combo-box--top", boundingRect.top >= window.innerHeight / 2 * 1.5);
            setTimeout(() => this.focusTrap.activate(), 150);
          } else {
            this.focusTrap.deactivate();
            setTimeout(() => this.classList.remove("combo-box--top"), 200);
          }
          document.documentElement.classList.toggle("lock-mobile", this.open);
      }
    }
    _onValueClicked(event, target) {
      this.selectedValue = target.value;
      this.nativeSelect.value = target.value;
      this.nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
      this.open = false;
    }
    _onValueChanged(event, target) {
      Array.from(this.nativeSelect.options).forEach((option) => option.toggleAttribute("selected", target.value === option.value));
      this.selectedValue = target.value;
    }
    _onKeyDown(event) {
      var _a, _b;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          (_a = document.activeElement.nextElementSibling) == null ? void 0 : _a.focus();
        } else {
          (_b = document.activeElement.previousElementSibling) == null ? void 0 : _b.focus();
        }
      }
    }
  };
  window.customElements.define("combo-box", ComboBox);

  // js/custom-element/ui/quantity-selector.js
  var QuantitySelector = class extends CustomHTMLElement {
    connectedCallback() {
      this.inputElement = this.querySelector("input");
      this.delegate.on("click", "button:first-child", () => this.inputElement.quantity = this.inputElement.quantity - 1);
      this.delegate.on("click", "button:last-child", () => this.inputElement.quantity = this.inputElement.quantity + 1);
    }
  };
  window.customElements.define("quantity-selector", QuantitySelector);

  // js/custom-element/ui/input-number.js
  var InputNumber = class extends HTMLInputElement {
    connectedCallback() {
      this.addEventListener("input", this._onValueInput.bind(this));
      this.addEventListener("change", this._onValueChanged.bind(this));
      this.addEventListener("keydown", this._onKeyDown.bind(this));
    }
    get quantity() {
      return parseInt(this.value);
    }
    set quantity(quantity) {
      const isNumeric = (typeof quantity === "number" || typeof quantity === "string" && quantity.trim() !== "") && !isNaN(quantity);
      if (quantity === "") {
        return;
      }
      if (!isNumeric || quantity < 0) {
        quantity = parseInt(quantity) || 1;
      }
      this.value = Math.max(this.min || 1, Math.min(quantity, this.max || Number.MAX_VALUE)).toString();
      this.size = Math.max(this.value.length + 1, 2);
    }
    _onValueInput() {
      this.quantity = this.value;
    }
    _onValueChanged() {
      if (this.value === "") {
        this.quantity = 1;
      }
    }
    _onKeyDown(event) {
      event.stopPropagation();
      if (event.key === "ArrowUp") {
        this.quantity = this.quantity + 1;
      } else if (event.key === "ArrowDown") {
        this.quantity = this.quantity - 1;
      }
    }
  };
  window.customElements.define("input-number", InputNumber, { extends: "input" });

  // js/custom-element/section/announcement-bar/announcement-bar.js
  var AnnouncementBar = class extends CustomHTMLElement {
    async connectedCallback() {
      await customElements.whenDefined("announcement-bar-item");
      this.items = Array.from(this.querySelectorAll("announcement-bar-item"));
      this.hasPendingTransition = false;
      this.delegate.on("click", '[data-action="prev"]', this.previous.bind(this));
      this.delegate.on("click", '[data-action="next"]', this.next.bind(this));
      if (this.autoPlay) {
        this.delegate.on("announcement-bar:content:open", this._pausePlayer.bind(this));
        this.delegate.on("announcement-bar:content:close", this._startPlayer.bind(this));
      }
      if (window.ResizeObserver) {
        this.resizeObserver = new ResizeObserver(this._updateCustomProperties.bind(this));
        this.resizeObserver.observe(this);
      }
      if (this.autoPlay) {
        this._startPlayer();
      }
      if (Shopify.designMode) {
        this.delegate.on("shopify:block:select", (event) => this.select(event.target.index, false));
      }
    }
    get autoPlay() {
      return this.hasAttribute("auto-play");
    }
    get selectedIndex() {
      return this.items.findIndex((item) => item.selected);
    }
    previous() {
      this.select((this.selectedIndex - 1 + this.items.length) % this.items.length);
    }
    next() {
      this.select((this.selectedIndex + 1 + this.items.length) % this.items.length);
    }
    async select(index, animate = true) {
      if (this.selectedIndex === index || this.hasPendingTransition) {
        return;
      }
      if (this.autoPlay) {
        this._pausePlayer();
      }
      this.hasPendingTransition = true;
      await this.items[this.selectedIndex].deselect(animate);
      await this.items[index].select(animate);
      this.hasPendingTransition = false;
      if (this.autoPlay) {
        this._startPlayer();
      }
    }
    _pausePlayer() {
      clearInterval(this._interval);
    }
    _startPlayer() {
      this._interval = setInterval(this.next.bind(this), parseInt(this.getAttribute("cycle-speed")) * 1e3);
    }
    _updateCustomProperties(entries) {
      entries.forEach((entry) => {
        if (entry.target === this) {
          const height = entry.borderBoxSize ? entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.borderBoxSize.blockSize : entry.target.clientHeight;
          document.documentElement.style.setProperty("--announcement-bar-height", `${height}px`);
        }
      });
    }
  };
  window.customElements.define("announcement-bar", AnnouncementBar);

  // js/custom-element/section/announcement-bar/item.js
  var AnnouncementBarItem = class extends CustomHTMLElement {
    connectedCallback() {
      if (this.hasContent) {
        this.contentElement = this.querySelector(".announcement-bar__content");
        this.delegate.on("click", '[data-action="open-content"]', this.openContent.bind(this));
        this.delegate.on("click", '[data-action="close-content"]', this.closeContent.bind(this));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", this.openContent.bind(this));
          this.addEventListener("shopify:block:deselect", this.closeContent.bind(this));
        }
      }
    }
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get hasContent() {
      return this.hasAttribute("has-content");
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    get focusTrap() {
      return this._trapFocus = this._trapFocus || createFocusTrap(this.contentElement.querySelector(".announcement-bar__content-inner"), {
        fallbackFocus: this,
        clickOutsideDeactivates: (event) => !(event.target.tagName === "BUTTON"),
        allowOutsideClick: (event) => event.target.tagName === "BUTTON",
        onDeactivate: this.closeContent.bind(this),
        preventScroll: true
      });
    }
    async select(animate = true) {
      this.removeAttribute("hidden");
      await new Promise((resolve) => {
        this.animate({
          transform: ["translateY(8px)", "translateY(0)"],
          opacity: [0, 1]
        }, {
          duration: animate ? 150 : 0,
          easing: "ease-in-out"
        }).onfinish = resolve;
      });
    }
    async deselect(animate = true) {
      await this.closeContent();
      await new Promise((resolve) => {
        this.animate({
          transform: ["translateY(0)", "translateY(-8px)"],
          opacity: [1, 0]
        }, {
          duration: animate ? 150 : 0,
          easing: "ease-in-out"
        }).onfinish = resolve;
      });
      this.setAttribute("hidden", "");
    }
    async openContent() {
      if (this.hasContent) {
        this.contentElement.addEventListener("transitionend", () => this.focusTrap.activate(), { once: true });
        this.contentElement.removeAttribute("hidden");
        document.documentElement.classList.add("lock-all");
        this.dispatchEvent(new CustomEvent("announcement-bar:content:open", { bubbles: true }));
      }
    }
    async closeContent() {
      if (!this.hasContent || this.contentElement.hasAttribute("hidden")) {
        return Promise.resolve();
      }
      await new Promise((resolve) => {
        this.contentElement.addEventListener("transitionend", () => resolve(), { once: true });
        this.contentElement.setAttribute("hidden", "");
        this.focusTrap.deactivate();
        document.documentElement.classList.remove("lock-all");
        this.dispatchEvent(new CustomEvent("announcement-bar:content:close", { bubbles: true }));
      });
    }
  };
  window.customElements.define("announcement-bar-item", AnnouncementBarItem);

  // js/custom-element/section/search/search-page.js
  var SearchPage = class extends HTMLElement {
    connectedCallback() {
      this.facetToolbar = document.getElementById("mobile-facet-toolbar");
      this.tabsNav = document.getElementById("search-tabs-nav");
      this.tabsNav.addEventListener("tabs-nav:changed", this._onCategoryChanged.bind(this));
      this._completeSearch();
    }
    get terms() {
      return this.getAttribute("terms");
    }
    get completeFor() {
      return JSON.parse(this.getAttribute("complete-for")).filter((item) => !(item === ""));
    }
    async _completeSearch() {
      const promisesList = [];
      this.completeFor.forEach((item) => {
        promisesList.push(fetch(`${window.themeVariables.routes.searchUrl}?section_id=${this.getAttribute("section-id")}&q=${this.terms}&type=${item}&options[prefix]=last&options[unavailable_products]=${window.themeVariables.settings.searchUnavailableProducts}`));
      });
      const responses = await Promise.all(promisesList);
      await Promise.all(responses.map(async (response) => {
        const div = document.createElement("div");
        div.innerHTML = await response.text();
        const categoryResultDiv = div.querySelector(".main-search__category-result"), tabNavItem = div.querySelector("#search-tabs-nav .tabs-nav__item");
        if (categoryResultDiv) {
          categoryResultDiv.setAttribute("hidden", "");
          this.insertAdjacentElement("beforeend", categoryResultDiv);
          this.tabsNav.addButton(tabNavItem);
        }
      }));
    }
    _onCategoryChanged(event) {
      const button = event.detail.button;
      this.facetToolbar.classList.toggle("is-collapsed", button.getAttribute("data-type") !== "product");
    }
  };
  window.customElements.define("search-page", SearchPage);

  // js/custom-element/section/footer/cookie-bar.js
  var CookieBar = class extends CustomHTMLElement {
    connectedCallback() {
      if (window.Shopify && window.Shopify.designMode) {
        this.rootDelegate.on("shopify:section:select", (event) => filterShopifyEvent(event, this, () => this.open = true));
        this.rootDelegate.on("shopify:section:deselect", (event) => filterShopifyEvent(event, this, () => this.open = false));
      }
      this.delegate.on("click", '[data-action~="accept-policy"]', this._acceptPolicy.bind(this));
      this.delegate.on("click", '[data-action~="decline-policy"]', this._declinePolicy.bind(this));
      window.Shopify.loadFeatures([{
        name: "consent-tracking-api",
        version: "0.1",
        onLoad: this._onCookieBarSetup.bind(this)
      }]);
    }
    set open(value) {
      this.toggleAttribute("hidden", !value);
    }
    _onCookieBarSetup() {
      if (window.Shopify.customerPrivacy.shouldShowGDPRBanner()) {
        this.open = true;
      }
    }
    _acceptPolicy() {
      window.Shopify.customerPrivacy.setTrackingConsent(true, () => this.open = false);
    }
    _declinePolicy() {
      window.Shopify.customerPrivacy.setTrackingConsent(false, () => this.open = false);
    }
  };
  window.customElements.define("cookie-bar", CookieBar);

  // js/custom-element/section/product-recommendations/product-recommendations.js
  var ProductRecommendations = class extends HTMLElement {
    async connectedCallback() {
      if (!this.hasAttribute("use-automatic-recommendations")) {
        return;
      }
      const response = await fetch(`${window.themeVariables.routes.productRecommendationsUrl}?product_id=${this.productId}&limit=${this.recommendationsCount}&section_id=${this.sectionId}`);
      const div = document.createElement("div");
      div.innerHTML = await response.text();
      const productRecommendationsElement = div.querySelector("product-recommendations");
      if (productRecommendationsElement.hasChildNodes()) {
        this.innerHTML = productRecommendationsElement.innerHTML;
        if(Shopify.enable_flash_sale || Shopify.enable_namagoo){
          let selectedVarient = $('.product-card-price');
          for (let i = 0; i < selectedVarient.length; i++) {
            productCardDisCalculation(selectedVarient, i);
          }
          }
      }
    }
    get productId() {
      return this.getAttribute("product-id");
    }
    get sectionId() {
      return this.getAttribute("section-id");
    }
    get recommendationsCount() {
      return parseInt(this.getAttribute("recommendations-count") || 4);
    }
  };
  window.customElements.define("product-recommendations", ProductRecommendations);

  // js/custom-element/section/product-recommendations/recently-viewed-products.js
  var RecentlyViewedProducts = class extends HTMLElement {
    async connectedCallback() {
      if (this.searchQueryString === "") {
        return;
      }
      const response = await fetch(`${window.themeVariables.routes.searchUrl}?type=product&q=${this.searchQueryString}&section_id=${this.sectionId}`);
      const div = document.createElement("div");
      div.innerHTML = await response.text();
      const recentlyViewedProductsElement = div.querySelector("recently-viewed-products");
      if (recentlyViewedProductsElement.hasChildNodes()) {
        this.innerHTML = recentlyViewedProductsElement.innerHTML;
      }
    }
    get searchQueryString() {
      const items = JSON.parse(localStorage.getItem("theme:recently-viewed-products") || "[]");
      if (this.hasAttribute("exclude-product-id") && items.includes(parseInt(this.getAttribute("exclude-product-id")))) {
        items.splice(items.indexOf(parseInt(this.getAttribute("exclude-product-id"))), 1);
      }
      return items.map((item) => "id:" + item).slice(0, this.productsCount).join(" OR ");
    }
    get sectionId() {
      return this.getAttribute("section-id");
    }
    get productsCount() {
      return this.getAttribute("products-count") || 4;
    }
  };
  window.customElements.define("recently-viewed-products", RecentlyViewedProducts);

  // js/helper/image.js
  function getSizedMediaUrl(media, size) {
    let src = typeof media === "string" ? media : media["preview_image"] ? media["preview_image"]["src"] : media["url"];
    if (size === null) {
      return src;
    }
    if (size === "master") {
      return src.replace(/http(s)?:/, "");
    }
    const match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);
    if (match) {
      const prefix = src.split(match[0]);
      const suffix = match[0];
      return (prefix[0] + "_" + size + suffix).replace(/http(s)?:/, "");
    } else {
      return null;
    }
  }
  function getMediaSrcset(media, sizeList) {
    let srcset = [], supportedSizes = typeof media === "string" ? sizeList : getSupportedSizes(media, sizeList);
    supportedSizes.forEach((supportedSize) => {
      srcset.push(`${getSizedMediaUrl(media, supportedSize + "x")} ${supportedSize}w`);
    });
    return srcset.join(",");
  }
  function getSupportedSizes(media, desiredSizes) {
    let supportedSizes = [], mediaWidth = media["preview_image"]["width"];
    desiredSizes.forEach((width) => {
      if (mediaWidth >= width) {
        supportedSizes.push(width);
      }
    });
    return supportedSizes;
  }
  function imageLoaded(image) {
    return new Promise((resolve) => {
      if (!image || image.tagName !== "IMG" || image.complete) {
        resolve();
      } else {
        image.onload = () => resolve();
      }
    });
  }

  // js/helper/animation.js
  var CustomAnimation = class {
    constructor(effect) {
      this._effect = effect;
      this._playState = "idle";
      this._finished = Promise.resolve();
    }
    get finished() {
      return this._finished;
    }
    get animationEffects() {
      return this._effect instanceof CustomKeyframeEffect ? [this._effect] : this._effect.animationEffects;
    }
    cancel() {
      this.animationEffects.forEach((animationEffect) => animationEffect.cancel());
    }
    finish() {
      this.animationEffects.forEach((animationEffect) => animationEffect.finish());
    }
    play() {
      this._playState = "running";
      this._effect.play();
      this._finished = this._effect.finished;
      this._finished.then(() => {
        this._playState = "finished";
      }, (rejection) => {
        this._playState = "idle";
      });
    }
  };
  var CustomKeyframeEffect = class {
    constructor(target, keyframes, options = {}) {
      if (!target) {
        return;
      }
      if ("Animation" in window) {
        this._animation = new Animation(new KeyframeEffect(target, keyframes, options));
      } else {
        options["fill"] = "forwards";
        this._animation = target.animate(keyframes, options);
        this._animation.pause();
      }
      this._animation.addEventListener("finish", () => {
        target.style.opacity = keyframes.hasOwnProperty("opacity") ? keyframes["opacity"][keyframes["opacity"].length - 1] : null;
        target.style.visibility = keyframes.hasOwnProperty("visibility") ? keyframes["visibility"][keyframes["visibility"].length - 1] : null;
      });
    }
    get finished() {
      if (!this._animation) {
        return Promise.resolve();
      }
      return this._animation.finished ? this._animation.finished : new Promise((resolve) => this._animation.onfinish = resolve);
    }
    play() {
      if (this._animation) {
        this._animation.startTime = null;
        this._animation.play();
      }
    }
    cancel() {
      if (this._animation) {
        this._animation.cancel();
      }
    }
    finish() {
      if (this._animation) {
        this._animation.finish();
      }
    }
  };
  var GroupEffect = class {
    constructor(childrenEffects) {
      this._childrenEffects = childrenEffects;
      this._finished = Promise.resolve();
    }
    get finished() {
      return this._finished;
    }
    get animationEffects() {
      return this._childrenEffects.flatMap((effect) => {
        return effect instanceof CustomKeyframeEffect ? effect : effect.animationEffects;
      });
    }
  };
  var ParallelEffect = class extends GroupEffect {
    play() {
      const promises = [];
      for (const effect of this._childrenEffects) {
        effect.play();
        promises.push(effect.finished);
      }
      this._finished = Promise.all(promises);
    }
  };
  var SequenceEffect = class extends GroupEffect {
    play() {
      this._finished = new Promise(async (resolve, reject) => {
        try {
          for (const effect of this._childrenEffects) {
            effect.play();
            await effect.finished;
          }
          resolve();
        } catch (exception) {
          reject();
        }
      });
    }
  };

  // js/custom-element/section/slideshow/slideshow-item.js
  var SlideshowItem = class extends HTMLElement {
    async connectedCallback() {
      this._pendingAnimations = [];
      this.addEventListener("split-lines:re-split", (event) => {
        Array.from(event.target.children).forEach((line) => line.style.visibility = this.selected ? "visible" : "hidden");
      });
      if (MediaFeatures.prefersReducedMotion()) {
        this.setAttribute("reveal-visibility", "");
        Array.from(this.querySelectorAll("[reveal], [reveal-visibility]")).forEach((item) => {
          item.removeAttribute("reveal");
          item.removeAttribute("reveal-visibility");
        });
      }
    }
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    async transitionToLeave(transitionType, shouldAnimate = true) {
      if (transitionType !== "reveal") {
        this.setAttribute("hidden", "");
      }
      this._pendingAnimations.forEach((animation2) => animation2.cancel());
      this._pendingAnimations = [];
      let animation = null, textElements = await resolveAsyncIterator(this.querySelectorAll("split-lines, .button-group, .button-wrapper")), imageElements = Array.from(this.querySelectorAll(".slideshow__image-wrapper"));
      switch (transitionType) {
        case "sweep":
          animation = new CustomAnimation(new SequenceEffect([
            new CustomKeyframeEffect(this, { visibility: ["visible", "hidden"] }, { duration: 500 }),
            new ParallelEffect(textElements.map((item) => {
              return new CustomKeyframeEffect(item, { opacity: [1, 0], visibility: ["visible", "hidden"] });
            }))
          ]));
          break;
        case "fade":
          animation = new CustomAnimation(new CustomKeyframeEffect(this, { opacity: [1, 0], visibility: ["visible", "hidden"] }, { duration: 250, easing: "ease-in-out" }));
          break;
        case "reveal":
          animation = new CustomAnimation(new SequenceEffect([
            new ParallelEffect(textElements.reverse().map((item) => {
              return new CustomKeyframeEffect(item, { opacity: [1, 0], visibility: ["visible", "hidden"] }, { duration: 250, easing: "ease-in-out" });
            })),
            new ParallelEffect(imageElements.map((item) => {
              if (!item.classList.contains("slideshow__image-wrapper--secondary")) {
                return new CustomKeyframeEffect(item, { visibility: ["visible", "hidden"], clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"] }, { duration: 450, easing: "cubic-bezier(0.99, 0.01, 0.50, 0.94)" });
              } else {
                return new CustomKeyframeEffect(item, { visibility: ["visible", "hidden"], clipPath: ["inset(0 0 0 0)", "inset(100% 0 0 0)"] }, { duration: 450, easing: "cubic-bezier(0.99, 0.01, 0.50, 0.94)" });
              }
            }))
          ]));
          break;
      }
      await this._executeAnimation(animation, shouldAnimate);
      if (transitionType === "reveal") {
        this.setAttribute("hidden", "");
      }
    }
    async transitionToEnter(transitionType, shouldAnimate = true, reverseDirection = false) {
      this.removeAttribute("hidden");
      await this._untilReady();
      let animation = null, textElements = await resolveAsyncIterator(this.querySelectorAll("split-lines, .button-group, .button-wrapper")), imageElements = Array.from(this.querySelectorAll(".slideshow__image-wrapper"));
      switch (transitionType) {
        case "sweep":
          animation = new CustomAnimation(new SequenceEffect([
            new CustomKeyframeEffect(this, { visibility: ["hidden", "visible"], clipPath: reverseDirection ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] : ["inset(0 0 0 100%)", "inset(0 0 0 0)"] }, { duration: 500, easing: "cubic-bezier(1, 0, 0, 1)" }),
            new ParallelEffect(textElements.map((item, index) => {
              return new CustomKeyframeEffect(item, { opacity: [0, 1], visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"], transform: ["translateY(100%)", "translateY(0)"] }, { duration: 450, delay: 100 * index, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" });
            }))
          ]));
          break;
        case "fade":
          animation = new CustomAnimation(new CustomKeyframeEffect(this, { opacity: [0, 1], visibility: ["hidden", "visible"] }, { duration: 250, easing: "ease-in-out" }));
          break;
        case "reveal":
          animation = new CustomAnimation(new SequenceEffect([
            new ParallelEffect(imageElements.map((item) => {
              if (!item.classList.contains("slideshow__image-wrapper--secondary")) {
                return new CustomKeyframeEffect(item, { visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"] }, { duration: 450, delay: 100, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" });
              } else {
                return new CustomKeyframeEffect(item, { visibility: ["hidden", "visible"], clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] }, { duration: 450, delay: 100, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" });
              }
            })),
            new ParallelEffect(textElements.map((item, index) => {
              return new CustomKeyframeEffect(item, { opacity: [0, 1], visibility: ["hidden", "visible"], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"], transform: ["translateY(100%)", "translateY(0)"] }, { duration: 450, delay: 100 * index, easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)" });
            }))
          ]));
          break;
      }
      return this._executeAnimation(animation, shouldAnimate);
    }
    async _executeAnimation(animation, shouldAnimate) {
      this._pendingAnimations.push(animation);
      shouldAnimate ? animation.play() : animation.finish();
      return animation.finished;
    }
    async _untilReady() {
      return Promise.all(this._getVisibleImages().map((image) => imageLoaded(image)));
    }
    _preloadImages() {
      this._getVisibleImages().forEach((image) => {
        image.setAttribute("loading", "eager");
      });
    }
    _getVisibleImages() {
      return Array.from(this.querySelectorAll("img")).filter((image) => {
        return getComputedStyle(image.parentElement).display !== "none";
      });
    }
  };
  window.customElements.define("slide-show-item", SlideshowItem);

  // js/mixin/vertical-scroll-blocker.js
  var VerticalScrollBlockerMixin = {
    _blockVerticalScroll(threshold = 18) {
      this.addEventListener("touchstart", (event) => {
        this.firstTouchClientX = event.touches[0].clientX;
      });
      this.addEventListener("touchmove", (event) => {
        const touchClientX = event.touches[0].clientX - this.firstTouchClientX;
        if (Math.abs(touchClientX) > threshold) {
          event.preventDefault();
        }
      }, { passive: false });
    }
  };

  // js/custom-element/section/slideshow/slideshow.js
  var Slideshow = class extends CustomHTMLElement {
    connectedCallback() {
      this.items = Array.from(this.querySelectorAll("slide-show-item"));
      this.pageDots = this.querySelector("page-dots");
      this.isTransitioning = false;
      if (this.items.length > 1) {
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:deselect", this.startPlayer.bind(this));
          this.addEventListener("shopify:block:select", (event) => {
            this.pausePlayer();
            this.intersectionObserver.disconnect();
            if (!(!event.detail.load && event.target.selected)) {
              this.select(event.target.index, !event.detail.load);
            }
          });
        }
        this.addEventListener("swiperight", this.previous.bind(this));
        this.addEventListener("swipeleft", this.next.bind(this));
        this.addEventListener("page-dots:changed", (event) => this.select(event.detail.index));
        this._blockVerticalScroll();
      }
      this._setupVisibility();
    }
    get selectedIndex() {
      return this.items.findIndex((item) => item.selected);
    }
    get transitionType() {
      return MediaFeatures.prefersReducedMotion() ? "fade" : this.getAttribute("transition-type");
    }
    async _setupVisibility() {
      await this.untilVisible();
      await this.items[this.selectedIndex].transitionToEnter(this.transitionType).catch((error) => {
      });
      this.startPlayer();
    }
    previous() {
      this.select((this.selectedIndex - 1 + this.items.length) % this.items.length, true, true);
    }
    next() {
      this.select((this.selectedIndex + 1 + this.items.length) % this.items.length, true, false);
    }
    async select(index, shouldTransition = true, reverseDirection = false) {
      if (this.transitionType === "reveal" && this.isTransitioning) {
        return;
      }
      this.isTransitioning = true;
      const previousItem = this.items[this.selectedIndex], newItem = this.items[index];
      this.items[(newItem.index + 1) % this.items.length]._preloadImages();
      if (previousItem && previousItem !== newItem) {
        if (this.transitionType !== "reveal") {
          previousItem.transitionToLeave(this.transitionType, shouldTransition);
        } else {
          await previousItem.transitionToLeave(this.transitionType, shouldTransition);
        }
      }
      if (this.pageDots) {
        this.pageDots.selectedIndex = newItem.index;
      }
      await newItem.transitionToEnter(this.transitionType, shouldTransition, reverseDirection).catch((error) => {
      });
      this.isTransitioning = false;
    }
    pausePlayer() {
      this.style.setProperty("--section-animation-play-state", "paused");
    }
    startPlayer() {
      if (this.hasAttribute("auto-play")) {
        this.style.setProperty("--section-animation-play-state", "running");
      }
    }
  };
  Object.assign(Slideshow.prototype, VerticalScrollBlockerMixin);
  window.customElements.define("slide-show", Slideshow);

  // js/custom-element/section/image-with-text/image-with-text-item.js
  var ImageWithTextItem = class extends HTMLElement {
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    get hasAttachedImage() {
      return this.hasAttribute("attached-image");
    }
    async transitionToEnter(shouldAnimate = true) {
      this.removeAttribute("hidden");
      const textWrapper = this.querySelector(".image-with-text__text-wrapper"), headings = await resolveAsyncIterator(this.querySelectorAll(".image-with-text__content split-lines"));
      const animation = new CustomAnimation(new SequenceEffect([
        new ParallelEffect(headings.map((item, index) => {
          return new CustomKeyframeEffect(item, {
            opacity: [0, 0.2, 1],
            transform: ["translateY(100%)", "translateY(0)"],
            clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"]
          }, {
            duration: 350,
            delay: 120 * index,
            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
          });
        })),
        new CustomKeyframeEffect(textWrapper, { opacity: [0, 1] }, { duration: 300 })
      ]));
      shouldAnimate ? animation.play() : animation.finish();
      return animation.finished;
    }
    async transitionToLeave(shouldAnimate = true) {
      const elements = await resolveAsyncIterator(this.querySelectorAll(".image-with-text__text-wrapper, .image-with-text__content split-lines"));
      const animation = new CustomAnimation(new ParallelEffect(elements.map((item) => {
        return new CustomKeyframeEffect(item, { opacity: [1, 0] }, { duration: 200 });
      })));
      shouldAnimate ? animation.play() : animation.finish();
      await animation.finished;
      this.setAttribute("hidden", "");
    }
  };
  window.customElements.define("image-with-text-item", ImageWithTextItem);

  // js/custom-element/section/image-with-text/image-with-text.js
  var ImageWithText = class extends CustomHTMLElement {
    connectedCallback() {
      this.items = Array.from(this.querySelectorAll("image-with-text-item"));
      this.imageItems = Array.from(this.querySelectorAll(".image-with-text__image"));
      this.pageDots = this.querySelector("page-dots");
      this.hasPendingTransition = false;
      if (this.items.length > 1) {
        this.addEventListener("page-dots:changed", (event) => this.select(event.detail.index));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:deselect", this.startPlayer.bind(this));
          this.addEventListener("shopify:block:select", (event) => {
            this.intersectionObserver.disconnect();
            this.pausePlayer();
            this.select(event.target.index, !event.detail.load);
          });
        }
      }
      this._setupVisibility();
    }
    async _setupVisibility() {
      await this.untilVisible();
      if (this.hasAttribute("reveal-on-scroll")) {
        await this.transitionImage(this.selectedIndex);
        this.select(this.selectedIndex);
      }
      this.startPlayer();
    }
    get selectedIndex() {
      return this.items.findIndex((item) => item.selected);
    }
    async select(index, shouldAnimate = true) {
      if (this.hasPendingTransition) {
        return;
      }
      this.hasPendingTransition = true;
      if (this.items[index].hasAttachedImage || !shouldAnimate) {
        await this.transitionImage(index, shouldAnimate);
      }
      if (this.selectedIndex !== index) {
        await this.items[this.selectedIndex].transitionToLeave(shouldAnimate);
      }
      if (this.pageDots) {
        this.pageDots.selectedIndex = index;
      }
      await this.items[index].transitionToEnter(shouldAnimate);
      this.hasPendingTransition = false;
    }
    async transitionImage(index, shouldAnimate = true) {
      const activeImage = this.imageItems.find((item) => !item.hasAttribute("hidden")), nextImage = this.imageItems.find((item) => item.id === this.items[index].getAttribute("attached-image")) || activeImage;
      activeImage.setAttribute("hidden", "");
      nextImage.removeAttribute("hidden");
      await imageLoaded(nextImage);
      const animation = new CustomAnimation(new CustomKeyframeEffect(nextImage, {
        visibility: ["hidden", "visible"],
        clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
      }, {
        duration: 600,
        easing: "cubic-bezier(1, 0, 0, 1)"
      }));
      shouldAnimate ? animation.play() : animation.finish();
    }
    pausePlayer() {
      this.style.setProperty("--section-animation-play-state", "paused");
    }
    startPlayer() {
      this.style.setProperty("--section-animation-play-state", "running");
    }
  };
  window.customElements.define("image-with-text", ImageWithText);

  // js/custom-element/section/testimonials/testimonial-item.js
  var TestimonialItem = class extends CustomHTMLElement {
    connectedCallback() {
      this.addEventListener("split-lines:re-split", (event) => {
        Array.from(event.target.children).forEach((line) => line.style.visibility = this.selected ? "visible" : "hidden");
      });
    }
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    async transitionToLeave(shouldAnimate = true) {
      const textLines = await resolveAsyncIterator(this.querySelectorAll("split-lines, .testimonial__author")), animation = new CustomAnimation(new ParallelEffect(textLines.reverse().map((item, index) => {
        return new CustomKeyframeEffect(item, {
          visibility: ["visible", "hidden"],
          clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"],
          transform: ["translateY(0)", "translateY(100%)"]
        }, {
          duration: 350,
          delay: 60 * index,
          easing: "cubic-bezier(0.68, 0.00, 0.77, 0.00)"
        });
      })));
      shouldAnimate ? animation.play() : animation.finish();
      await animation.finished;
      this.setAttribute("hidden", "");
    }
    async transitionToEnter(shouldAnimate = true) {
      const textLines = await resolveAsyncIterator(this.querySelectorAll("split-lines, .testimonial__author")), animation = new CustomAnimation(new ParallelEffect(textLines.map((item, index) => {
        return new CustomKeyframeEffect(item, {
          visibility: ["hidden", "visible"],
          clipPath: ["inset(0 0 100% 0)", "inset(0 0 0px 0)"],
          transform: ["translateY(100%)", "translateY(0)"]
        }, {
          duration: 550,
          delay: 120 * index,
          easing: "cubic-bezier(0.23, 1, 0.32, 1)"
        });
      })));
      this.removeAttribute("hidden");
      shouldAnimate ? animation.play() : animation.finish();
      return animation.finished;
    }
  };
  window.customElements.define("testimonial-item", TestimonialItem);

  // js/custom-element/section/testimonials/testimonial-list.js
  var TestimonialList = class extends CustomHTMLElement {
    connectedCallback() {
      this.items = Array.from(this.querySelectorAll("testimonial-item"));
      this.pageDots = this.querySelector("page-dots");
      this.hasPendingTransition = false;
      if (this.items.length > 1) {
        this.addEventListener("swiperight", this.previous.bind(this));
        this.addEventListener("swipeleft", this.next.bind(this));
        this.addEventListener("prev-next:prev", this.previous.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
        this.addEventListener("page-dots:changed", (event) => this.select(event.detail.index));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", (event) => {
            var _a;
            (_a = this.intersectionObserver) == null ? void 0 : _a.disconnect();
            if (event.detail.load || !event.target.selected) {
              this.select(event.target.index, !event.detail.load);
            }
          });
        }
        this._blockVerticalScroll();
      }
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
    }
    get selectedIndex() {
      return this.items.findIndex((item) => item.selected);
    }
    async _setupVisibility() {
      await this.untilVisible();
      this.items[this.selectedIndex].transitionToEnter();
    }
    previous() {
      this.select((this.selectedIndex - 1 + this.items.length) % this.items.length);
    }
    next() {
      this.select((this.selectedIndex + 1 + this.items.length) % this.items.length);
    }
    async select(index, shouldAnimate = true) {
      if (this.hasPendingTransition) {
        return;
      }
      this.hasPendingTransition = true;
      await this.items[this.selectedIndex].transitionToLeave(shouldAnimate);
      if (this.pageDots) {
        this.pageDots.selectedIndex = index;
      }
      await this.items[index].transitionToEnter(shouldAnimate);
      this.hasPendingTransition = false;
    }
  };
  Object.assign(TestimonialList.prototype, VerticalScrollBlockerMixin);
  window.customElements.define("testimonial-list", TestimonialList);

  // js/custom-element/section/shop-the-look/shop-the-look-item.js
  var ShopTheLookItem = class extends HTMLElement {
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    async transitionToLeave(shouldAnimate = true) {
      this.setAttribute("hidden", "");
      const animation = new CustomAnimation(new CustomKeyframeEffect(this, { visibility: ["visible", "hidden"] }, { duration: 500 }));
      shouldAnimate ? animation.play() : animation.finish();
      return animation.finished;
    }
    async transitionToEnter(shouldAnimate = true) {
      this.removeAttribute("hidden");
      const dots = Array.from(this.querySelectorAll(".shop-the-look__dot"));
      dots.forEach((dot) => dot.style.opacity = 0);
      const animation = new CustomAnimation(new SequenceEffect([
        new ParallelEffect(Array.from(this.querySelectorAll(".shop-the-look__image")).map((item) => {
          return new CustomKeyframeEffect(item, { opacity: [1, 1] }, { duration: 0 });
        })),
        new CustomKeyframeEffect(this, { visibility: ["hidden", "visible"], zIndex: [0, 1], clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"] }, { duration: 500, easing: "cubic-bezier(1, 0, 0, 1)" }),
        new ParallelEffect(dots.map((item, index) => {
          return new CustomKeyframeEffect(item, { opacity: [0, 1], transform: ["scale(0)", "scale(1)"] }, { duration: 120, delay: 75 * index, easing: "ease-in-out" });
        }))
      ]));
      shouldAnimate ? animation.play() : animation.finish();
      await animation.finished;
      if (window.matchMedia(window.themeVariables.breakpoints.tabletAndUp).matches) {
        const firstPopover = this.querySelector(".shop-the-look__product-wrapper .shop-the-look__dot");
        firstPopover == null ? void 0 : firstPopover.setAttribute("aria-expanded", "true");
      }
    }
  };
  window.customElements.define("shop-the-look-item", ShopTheLookItem);

  // js/custom-element/section/shop-the-look/shop-the-look-nav.js
  var ShopTheLookNav = class extends CustomHTMLElement {
    connectedCallback() {
      this.shopTheLook = this.closest("shop-the-look");
      this.delegate.on("click", '[data-action="prev"]', () => this.shopTheLook.previous());
      this.delegate.on("click", '[data-action="next"]', () => this.shopTheLook.next());
    }
    transitionToIndex(index, shouldAnimate = true) {
      const indexElements = Array.from(this.querySelectorAll(".shop-the-look__counter-page-transition")), currentElement = indexElements.find((item) => !item.hasAttribute("hidden")), nextElement = indexElements[index];
      currentElement.animate({ transform: ["translateY(0)", "translateY(-100%)"] }, { duration: shouldAnimate ? 1e3 : 0, easing: "cubic-bezier(1, 0, 0, 1)" }).onfinish = () => currentElement.setAttribute("hidden", "");
      nextElement.removeAttribute("hidden");
      nextElement.animate({ transform: ["translateY(100%)", "translateY(0)"] }, { duration: shouldAnimate ? 1e3 : 0, easing: "cubic-bezier(1, 0, 0, 1)" });
    }
  };
  window.customElements.define("shop-the-look-nav", ShopTheLookNav);

  // js/custom-element/section/shop-the-look/shop-the-look.js
  var ShopTheLook = class extends CustomHTMLElement {
    connectedCallback() {
      this.lookItems = Array.from(this.querySelectorAll("shop-the-look-item"));
      this.nav = this.querySelector("shop-the-look-nav");
      this.hasPendingTransition = false;
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
      if (this.lookItems.length > 1 && Shopify.designMode) {
        this.addEventListener("shopify:block:select", async (event) => {
          this.intersectionObserver.disconnect();
          await this.select(event.target.index, !event.detail.load);
          this.nav.animate({ opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }, { duration: 0, fill: "forwards", easing: "ease-in-out" });
        });
      }
    }
    get selectedIndex() {
      return this.lookItems.findIndex((item) => item.selected);
    }
    async _setupVisibility() {
      await this.untilVisible();
      const images = Array.from(this.lookItems[this.selectedIndex].querySelectorAll(".shop-the-look__image"));
      for (let image of images) {
        if (image.offsetParent !== null) {
          await imageLoaded(image);
        }
      }
      await this.lookItems[this.selectedIndex].transitionToEnter();
      if (this.nav) {
        this.nav.animate({ opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] }, { duration: 150, fill: "forwards", easing: "ease-in-out" });
      }
    }
    previous() {
      this.select((this.selectedIndex - 1 + this.lookItems.length) % this.lookItems.length);
    }
    next() {
      this.select((this.selectedIndex + 1 + this.lookItems.length) % this.lookItems.length);
    }
    async select(index, animate = true) {
      const currentLook = this.lookItems[this.selectedIndex], nextLook = this.lookItems[index];
      if (this.hasPendingTransition) {
        return;
      }
      this.hasPendingTransition = true;
      if (currentLook !== nextLook) {
        this.nav.transitionToIndex(index, animate);
        currentLook.transitionToLeave();
      }
      nextLook.transitionToEnter(animate);
      this.hasPendingTransition = false;
    }
  };
  window.customElements.define("shop-the-look", ShopTheLook);

  // js/custom-element/section/collection-list/collection-list.js
  var CollectionList = class extends CustomHTMLElement {
    async connectedCallback() {
      this.items = Array.from(this.querySelectorAll(".list-collections__item"));
      if (this.hasAttribute("scrollable")) {
        this.scroller = this.querySelector(".list-collections__scroller");
        this.addEventListener("prev-next:prev", this.previous.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
        this.addEventListener("shopify:block:select", (event) => event.target.scrollIntoView({ block: "nearest", inline: "center", behavior: event.detail.load ? "auto" : "smooth" }));
      }
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
    }
    async _setupVisibility() {
      await this.untilVisible();
      const prefersReducedMotion = MediaFeatures.prefersReducedMotion();
      const animation = new CustomAnimation(new ParallelEffect(this.items.map((item, index) => {
        return new SequenceEffect([
          new CustomKeyframeEffect(item.querySelector(".list-collections__item-image"), {
            opacity: [0, 1],
            transform: [`scale(${prefersReducedMotion ? 1 : 1.1})`, "scale(1)"]
          }, {
            duration: 250,
            delay: prefersReducedMotion ? 0 : 150 * index,
            easing: "cubic-bezier(0.65, 0, 0.35, 1)"
          }),
          new ParallelEffect(Array.from(item.querySelectorAll(".list-collections__item-info [reveal]")).map((textItem, subIndex) => {
            return new CustomKeyframeEffect(textItem, {
              opacity: [0, 1],
              clipPath: [`inset(${prefersReducedMotion ? "0 0 0 0" : "0 0 100% 0"})`, "inset(0 0 0 0)"],
              transform: [`translateY(${prefersReducedMotion ? 0 : "100%"})`, "translateY(0)"]
            }, {
              duration: 200,
              delay: prefersReducedMotion ? 0 : 150 * index + 150 * subIndex,
              easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
            });
          }))
        ]);
      })));
      this._hasSectionReloaded ? animation.finish() : animation.play();
    }
    previous() {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1;
      this.scroller.scrollBy({
        left: -this.items[0].clientWidth * directionFlip,
        behavior: "smooth"
      });
    }
    next() {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1;
      this.scroller.scrollBy({
        left: this.items[0].clientWidth * directionFlip,
        behavior: "smooth"
      });
    }
  };
  window.customElements.define("collection-list", CollectionList);

  // js/custom-element/section/product-list/product-list.js
  var ProductList = class extends CustomHTMLElement {
    constructor() {
      super();
      this.productListInner = this.querySelector(".product-list__inner");
      this.productItems = Array.from(this.querySelectorAll("product-item"));
    }
    connectedCallback() {
      this.addEventListener("prev-next:prev", this.previous.bind(this));
      this.addEventListener("prev-next:next", this.next.bind(this));
      if (!this.hidden && this.staggerApparition) {
        this._staggerProductsApparition();
      }
    }
    get staggerApparition() {
      return this.hasAttribute("stagger-apparition");
    }
    get apparitionAnimation() {
      return this._animation = this._animation || new CustomAnimation(new ParallelEffect(this.productItems.map((item, index) => {
        return new CustomKeyframeEffect(item, {
          opacity: [0, 1],
          transform: [`translateY(${MediaFeatures.prefersReducedMotion() ? 0 : window.innerWidth < 1e3 ? 35 : 60}px)`, "translateY(0)"]
        }, {
          duration: 600,
          delay: MediaFeatures.prefersReducedMotion() ? 0 : 100 * index - Math.min(3 * index * index, 100 * index),
          easing: "ease"
        });
      })));
    }
    previous(event) {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1, columnGap = parseInt(getComputedStyle(this).getPropertyValue("--product-list-column-gap"));
      event.target.nextElementSibling.removeAttribute("disabled");
      event.target.toggleAttribute("disabled", this.productListInner.scrollLeft * directionFlip - (this.productListInner.clientWidth + columnGap) <= 0);
      this.productListInner.scrollBy({ left: -(this.productListInner.clientWidth + columnGap) * directionFlip, behavior: "smooth" });
    }
    next(event) {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1, columnGap = parseInt(getComputedStyle(this).getPropertyValue("--product-list-column-gap"));
      event.target.previousElementSibling.removeAttribute("disabled");
      event.target.toggleAttribute("disabled", this.productListInner.scrollLeft * directionFlip + (this.productListInner.clientWidth + columnGap) * 2 >= this.productListInner.scrollWidth);
      this.productListInner.scrollBy({ left: (this.productListInner.clientWidth + columnGap) * directionFlip, behavior: "smooth" });
    }
    attributeChangedCallback(name) {
      var _a, _b;
      if (!this.staggerApparition) {
        return;
      }
      switch (name) {
        case "hidden":
          if (!this.hidden) {
            this.productListInner.scrollLeft = 0;
            this.productListInner.parentElement.scrollLeft = 0;
            (_a = this.querySelector(".prev-next-button--prev")) == null ? void 0 : _a.setAttribute("disabled", "");
            (_b = this.querySelector(".prev-next-button--next")) == null ? void 0 : _b.removeAttribute("disabled");
            this._staggerProductsApparition();
          } else {
            this.apparitionAnimation.finish();
          }
      }
    }
    async _staggerProductsApparition() {
      this.productItems.forEach((item) => item.style.opacity = 0);
      await this.untilVisible({ threshold: this.clientHeight > 0 ? Math.min(50 / this.clientHeight, 1) : 0 });
      this.apparitionAnimation.play();
    }
  };
  __publicField(ProductList, "observedAttributes", ["hidden"]);
  window.customElements.define("product-list", ProductList);

  // js/custom-element/section/logo-list/logo-list.js
  var LogoList = class extends CustomHTMLElement {
    async connectedCallback() {
      this.items = Array.from(this.querySelectorAll(".logo-list__item"));
      this.logoListScrollable = this.querySelector(".logo-list__list");
      if (this.items.length > 1) {
        this.addEventListener("prev-next:prev", this.previous.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
      }
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
    }
    async _setupVisibility() {
      await this.untilVisible({ rootMargin: "50px 0px", threshold: 0 });
      const animation = new CustomAnimation(new ParallelEffect(this.items.map((item, index) => {
        return new CustomKeyframeEffect(item, {
          opacity: [0, 1],
          transform: [`translateY(${MediaFeatures.prefersReducedMotion() ? 0 : "30px"})`, "translateY(0)"]
        }, {
          duration: 300,
          delay: MediaFeatures.prefersReducedMotion() ? 0 : 100 * index,
          easing: "ease"
        });
      })));
      this._hasSectionReloaded ? animation.finish() : animation.play();
    }
    previous(event) {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1;
      event.target.nextElementSibling.removeAttribute("disabled");
      event.target.toggleAttribute("disabled", this.logoListScrollable.scrollLeft * directionFlip - (this.logoListScrollable.clientWidth + 24) <= 0);
      this.logoListScrollable.scrollBy({ left: -(this.logoListScrollable.clientWidth + 24) * directionFlip, behavior: "smooth" });
    }
    next(event) {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1;
      event.target.previousElementSibling.removeAttribute("disabled");
      event.target.toggleAttribute("disabled", this.logoListScrollable.scrollLeft * directionFlip + (this.logoListScrollable.clientWidth + 24) * 2 >= this.logoListScrollable.scrollWidth);
      this.logoListScrollable.scrollBy({ left: (this.logoListScrollable.clientWidth + 24) * directionFlip, behavior: "smooth" });
    }
  };
  window.customElements.define("logo-list", LogoList);

  // js/custom-element/section/blog/blog-post-navigation.js
  var BlogPostNavigation = class extends HTMLElement {
    connectedCallback() {
      window.addEventListener("scroll", throttle(this._updateProgressBar.bind(this), 15));
    }
    get hasNextArticle() {
      return this.hasAttribute("has-next-article");
    }
    _updateProgressBar() {
      const stickyHeaderOffset = getStickyHeaderOffset(), marginCompensation = window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? 40 : 80, articleNavBoundingBox = this.getBoundingClientRect(), articleMainPartBoundingBox = this.parentElement.getBoundingClientRect(), difference = articleMainPartBoundingBox.bottom - (articleNavBoundingBox.bottom - marginCompensation), progress = Math.max(-1 * (difference / (articleMainPartBoundingBox.height + marginCompensation) - 1), 0);
      this.classList.toggle("is-visible", articleMainPartBoundingBox.top < stickyHeaderOffset && articleMainPartBoundingBox.bottom > stickyHeaderOffset + this.clientHeight - marginCompensation);
      if (this.hasNextArticle) {
        if (progress > 0.8) {
          this.classList.add("article__nav--show-next");
        } else {
          this.classList.remove("article__nav--show-next");
        }
      }
      this.style.setProperty("--transform", `${progress}`);
    }
  };
  window.customElements.define("blog-post-navigation", BlogPostNavigation);

  // js/custom-element/section/multi-column/multi-column.js
  var MultiColumn = class extends CustomHTMLElement {
    connectedCallback() {
      if (!this.hasAttribute("stack")) {
        this.multiColumnInner = this.querySelector(".multi-column__inner");
        this.addEventListener("prev-next:prev", this.previous.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", (event) => {
            event.target.scrollIntoView({ inline: "center", block: "nearest", behavior: event.detail.load ? "auto" : "smooth" });
          });
        }
      }
      if (this.hasAttribute("stagger-apparition")) {
        this._setupVisibility();
      }
    }
    async _setupVisibility() {
      await this.untilVisible({ threshold: Math.min(50 / this.clientHeight, 1) });
      const prefersReducedMotion = MediaFeatures.prefersReducedMotion();
      const animation = new CustomAnimation(new ParallelEffect(Array.from(this.querySelectorAll(".multi-column__item")).map((item, index) => {
        return new CustomKeyframeEffect(item, {
          opacity: [0, 1],
          transform: [`translateY(${MediaFeatures.prefersReducedMotion() ? 0 : window.innerWidth < 1e3 ? 35 : 60}px)`, "translateY(0)"]
        }, {
          duration: 600,
          delay: prefersReducedMotion ? 0 : 100 * index,
          easing: "ease"
        });
      })));
      this._hasSectionReloaded ? animation.finish() : animation.play();
    }
    previous(event) {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1, columnGap = parseInt(getComputedStyle(this).getPropertyValue("--multi-column-column-gap"));
      event.target.nextElementSibling.removeAttribute("disabled");
      event.target.toggleAttribute("disabled", this.multiColumnInner.scrollLeft * directionFlip - (this.multiColumnInner.clientWidth + columnGap) <= 0);
      this.multiColumnInner.scrollBy({ left: -(this.multiColumnInner.clientWidth + columnGap) * directionFlip, behavior: "smooth" });
    }
    next(event) {
      const directionFlip = window.themeVariables.settings.direction === "ltr" ? 1 : -1, columnGap = parseInt(getComputedStyle(this).getPropertyValue("--multi-column-column-gap"));
      event.target.previousElementSibling.removeAttribute("disabled");
      event.target.toggleAttribute("disabled", this.multiColumnInner.scrollLeft * directionFlip + (this.multiColumnInner.clientWidth + columnGap) * 2 >= this.multiColumnInner.scrollWidth);
      this.multiColumnInner.scrollBy({ left: (this.multiColumnInner.clientWidth + columnGap) * directionFlip, behavior: "smooth" });
    }
  };
  window.customElements.define("multi-column", MultiColumn);

  // js/custom-element/section/gallery/gallery-list.js
  var GalleryList = class extends HTMLElement {
    connectedCallback() {
      this.listItems = Array.from(this.querySelectorAll("gallery-item"));
      this.scrollBarElement = this.querySelector(".gallery__progress-bar");
      this.listWrapperElement = this.querySelector(".gallery__list-wrapper");
      if (this.listItems.length > 1) {
        this.addEventListener("scrollable-content:progress", this._updateProgressBar.bind(this));
        this.addEventListener("prev-next:prev", this.previous.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", (event) => this.select(event.target.index, !event.detail.load));
        }
      }
    }
    previous() {
      this.select([...this.listItems].reverse().find((item) => item.isOnLeftHalfPartOfScreen).index);
    }
    next() {
      this.select(this.listItems.findIndex((item) => item.isOnRightHalfPartOfScreen));
    }
    select(index, animate = true) {
      const boundingRect = this.listItems[index].getBoundingClientRect();
      this.listWrapperElement.scrollBy({
        behavior: animate ? "smooth" : "auto",
        left: Math.floor(boundingRect.left - window.innerWidth / 2 + boundingRect.width / 2)
      });
    }
    _updateProgressBar(event) {
      var _a;
      (_a = this.scrollBarElement) == null ? void 0 : _a.style.setProperty("--transform", `${event.detail.progress}%`);
    }
  };
  window.customElements.define("gallery-list", GalleryList);

  // js/custom-element/section/gallery/gallery-item.js
  var GalleryItem = class extends HTMLElement {
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get isOnRightHalfPartOfScreen() {
      if (window.themeVariables.settings.direction === "ltr") {
        return this.getBoundingClientRect().left > window.innerWidth / 2;
      } else {
        return this.getBoundingClientRect().right < window.innerWidth / 2;
      }
    }
    get isOnLeftHalfPartOfScreen() {
      if (window.themeVariables.settings.direction === "ltr") {
        return this.getBoundingClientRect().right < window.innerWidth / 2;
      } else {
        return this.getBoundingClientRect().left > window.innerWidth / 2;
      }
    }
  };
  window.customElements.define("gallery-item", GalleryItem);

  // js/custom-element/section/image-with-text-overlay/image-with-text-overlay.js
  var ImageWithTextOverlay = class extends CustomHTMLElement {
    connectedCallback() {
      if (this.hasAttribute("parallax") && !MediaFeatures.prefersReducedMotion()) {
        this._hasPendingRaF = false;
        this._onScrollListener = this._onScroll.bind(this);
        window.addEventListener("scroll", this._onScrollListener);
      }
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (this._onScrollListener) {
        window.removeEventListener("scroll", this._onScrollListener);
      }
    }
    async _setupVisibility() {
      await this.untilVisible();
      const image = this.querySelector(".image-overlay__image"), headings = await resolveAsyncIterator(this.querySelectorAll("split-lines")), prefersReducedMotion = MediaFeatures.prefersReducedMotion();
      await imageLoaded(image);
      const innerEffect = [
        new CustomKeyframeEffect(image, { opacity: [0, 1], transform: [`scale(${prefersReducedMotion ? 1 : 1.1})`, "scale(1)"] }, { duration: 500, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }),
        new ParallelEffect(headings.map((item, index) => {
          return new CustomKeyframeEffect(item, {
            opacity: [0, 0.2, 1],
            transform: [`translateY(${prefersReducedMotion ? 0 : "100%"})`, "translateY(0)"],
            clipPath: [`inset(${prefersReducedMotion ? "0 0 0 0" : "0 0 100% 0"})`, "inset(0 0 0 0)"]
          }, {
            duration: 300,
            delay: prefersReducedMotion ? 0 : 120 * index,
            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
          });
        })),
        new CustomKeyframeEffect(this.querySelector(".image-overlay__text-container"), { opacity: [0, 1] }, { duration: 300 })
      ];
      const animation = prefersReducedMotion ? new CustomAnimation(new ParallelEffect(innerEffect)) : new CustomAnimation(new SequenceEffect(innerEffect));
      this._hasSectionReloaded ? animation.finish() : animation.play();
    }
    _onScroll() {
      if (this._hasPendingRaF) {
        return;
      }
      this._hasPendingRaF = true;
      requestAnimationFrame(() => {
        const boundingRect = this.getBoundingClientRect(), speedFactor = 3, contentElement = this.querySelector(".image-overlay__content-wrapper"), imageElement = this.querySelector(".image-overlay__image"), boundingRectBottom = boundingRect.bottom, boundingRectHeight = boundingRect.height, stickyHeaderOffset = getStickyHeaderOffset();
        if (contentElement) {
          contentElement.style.opacity = Math.max(1 - speedFactor * (1 - Math.min(boundingRectBottom / boundingRectHeight, 1)), 0).toString();
        }
        if (imageElement) {
          imageElement.style.transform = `translateY(${100 - Math.max(1 - (1 - Math.min(boundingRectBottom / (boundingRectHeight + stickyHeaderOffset), 1)), 0) * 100}px)`;
        }
        this._hasPendingRaF = false;
      });
    }
  };
  window.customElements.define("image-with-text-overlay", ImageWithTextOverlay);

  // js/custom-element/section/image-with-text-block/image-with-text-block.js
  var ImageWithTextBlock = class extends CustomHTMLElement {
    async connectedCallback() {
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
    }
    async _setupVisibility() {
      await this.untilVisible();
      const images = Array.from(this.querySelectorAll(".image-with-text-block__image[reveal]")), headings = await resolveAsyncIterator(this.querySelectorAll("split-lines")), prefersReducedMotion = MediaFeatures.prefersReducedMotion();
      for (const image of images) {
        if (image.offsetParent !== null) {
          await imageLoaded(image);
        }
      }
      const innerEffect = [
        new ParallelEffect(images.map((item) => {
          return new CustomKeyframeEffect(item, { opacity: [0, 1], transform: [`scale(${prefersReducedMotion ? 1 : 1.1})`, "scale(1)"] }, { duration: 500, easing: "cubic-bezier(0.65, 0, 0.35, 1)" });
        })),
        new CustomKeyframeEffect(this.querySelector(".image-with-text-block__content"), { opacity: [0, 1], transform: [`translateY(${prefersReducedMotion ? 0 : "60px"})`, "translateY(0)"] }, { duration: 150, easing: "ease-in-out" }),
        new ParallelEffect(headings.map((item, index) => {
          return new CustomKeyframeEffect(item, {
            opacity: [0, 0.2, 1],
            transform: [`translateY(${prefersReducedMotion ? 0 : "100%"})`, "translateY(0)"],
            clipPath: [`inset(${prefersReducedMotion ? "0 0 0 0" : "0 0 100% 0"})`, "inset(0 0 0 0)"]
          }, {
            duration: 300,
            delay: prefersReducedMotion ? 0 : 120 * index,
            easing: "cubic-bezier(0.5, 0.06, 0.01, 0.99)"
          });
        })),
        new CustomKeyframeEffect(this.querySelector(".image-with-text-block__text-container"), { opacity: [0, 1] }, { duration: 300 })
      ];
      const animation = prefersReducedMotion ? new CustomAnimation(new ParallelEffect(innerEffect)) : new CustomAnimation(new SequenceEffect(innerEffect));
      this._hasSectionReloaded ? animation.finish() : animation.play();
    }
  };
  window.customElements.define("image-with-text-block", ImageWithTextBlock);

  // js/custom-element/section/blog/article-list.js
  var ArticleList = class extends CustomHTMLElement {
    async connectedCallback() {
      this.articleItems = Array.from(this.querySelectorAll(".article-item"));
      if (this.staggerApparition) {
        await this.untilVisible({ threshold: this.clientHeight > 0 ? Math.min(50 / this.clientHeight, 1) : 0 });
        const animation = new CustomAnimation(new ParallelEffect(this.articleItems.map((item, index) => {
          return new CustomKeyframeEffect(item, {
            opacity: [0, 1],
            transform: [`translateY(${MediaFeatures.prefersReducedMotion() ? 0 : window.innerWidth < 1e3 ? 35 : 60}px)`, "translateY(0)"]
          }, {
            duration: 600,
            delay: MediaFeatures.prefersReducedMotion() ? 0 : 100 * index - Math.min(3 * index * index, 100 * index),
            easing: "ease"
          });
        })));
        this._hasSectionReloaded ? animation.finish() : animation.play();
      }
    }
    get staggerApparition() {
      return this.hasAttribute("stagger-apparition");
    }
  };
  window.customElements.define("article-list", ArticleList);

  // js/custom-element/section/blog/blog-post-header.js
  var BlogPostHeader = class extends HTMLElement {
    async connectedCallback() {
      const image = this.querySelector(".article__image");
      if (MediaFeatures.prefersReducedMotion()) {
        image.removeAttribute("reveal");
      } else {
        await imageLoaded(image);
        image.animate({ opacity: [0, 1], transform: ["scale(1.1)", "scale(1)"] }, { duration: 500, fill: "forwards", easing: "cubic-bezier(0.65, 0, 0.35, 1)" });
      }
    }
  };
  window.customElements.define("blog-post-header", BlogPostHeader);

  // js/custom-element/section/search/predictive-search-input.js
  var PredictiveSearchInput = class extends HTMLInputElement {
    connectedCallback() {
      this.addEventListener("click", () => document.getElementById(this.getAttribute("aria-controls")).open = true);
    }
  };
  window.customElements.define("predictive-search-input", PredictiveSearchInput, { extends: "input" });

  // js/custom-element/ui/drawer.js
  var DrawerContent = class extends OpenableElement {
    connectedCallback() {
      super.connectedCallback();
      if (this.hasAttribute("reverse-breakpoint")) {
        this.originalDirection = this.classList.contains("drawer--from-left") ? "left" : "right";
        const matchMedia2 = window.matchMedia(this.getAttribute("reverse-breakpoint"));
        matchMedia2.addListener(this._checkReverseOpeningDirection.bind(this));
        this._checkReverseOpeningDirection(matchMedia2);
      }
      this.delegate.on("click", ".drawer__overlay", () => this.open = false);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          document.documentElement.classList.toggle("lock-all", this.open);
      }
    }
    _checkReverseOpeningDirection(match) {
      this.classList.remove("drawer--from-left");
      if (this.originalDirection === "left" && !match.matches || this.originalDirection !== "left" && match.matches) {
        this.classList.add("drawer--from-left");
      }
    }
  };
  window.customElements.define("drawer-content", DrawerContent);

  // js/custom-element/section/search/predictive-search-drawer.js
  var PredictiveSearchDrawer = class extends DrawerContent {
    connectedCallback() {
      super.connectedCallback();
      this.inputElement = this.querySelector('[name="q"]');
      this.drawerContentElement = this.querySelector(".drawer__content");
      this.drawerFooterElement = this.querySelector(".drawer__footer");
      this.loadingStateElement = this.querySelector(".predictive-search__loading-state");
      this.resultsElement = this.querySelector(".predictive-search__results");
      this.menuListElement = this.querySelector(".predictive-search__menu-list");
      this.delegate.on("input", '[name="q"]', this._debounce(this._onSearch.bind(this), 200));
      this.delegate.on("click", '[data-action="reset-search"]', this._startNewSearch.bind(this));
    }
    async _onSearch(event, target) {
      if (event.key === "Enter") {
        return;
      }
      if (this.abortController) {
        this.abortController.abort();
      }
      this.drawerContentElement.classList.remove("drawer__content--center");
      this.drawerFooterElement.hidden = true;
      if (target.value === "") {
        this.loadingStateElement.hidden = true;
        this.resultsElement.hidden = true;
        this.menuListElement ? this.menuListElement.hidden = false : "";
      } else {
        this.drawerContentElement.classList.add("drawer__content--center");
        this.loadingStateElement.hidden = false;
        this.resultsElement.hidden = true;
        this.menuListElement ? this.menuListElement.hidden = true : "";
        let searchResults = {};
        try {
          this.abortController = new AbortController();
          if (this._supportPredictiveApi()) {
            searchResults = await this._doPredictiveSearch(target.value);
          } else {
            searchResults = await this._doLiquidSearch(target.value);
          }
        } catch (e) {
          if (e.name === "AbortError") {
            return;
          }
        }
        this.loadingStateElement.hidden = true;
        this.resultsElement.hidden = false;
        this.menuListElement ? this.menuListElement.hidden = true : "";
        if (searchResults.hasResults) {
          this.drawerFooterElement.hidden = false;
          this.drawerContentElement.classList.remove("drawer__content--center");
        }
        this.resultsElement.innerHTML = searchResults.html;
      }
    }
    async _doPredictiveSearch(term) {
      const response = await fetch(`${window.themeVariables.routes.predictiveSearchUrl}?q=${term}&resources[limit]=10&resources[type]=${window.themeVariables.settings.searchMode}&resources[options[unavailable_products]]=${window.themeVariables.settings.searchUnavailableProducts}&resources[options[fields]]=title,body,product_type,variants.title,variants.sku,vendor&section_id=predictive-search`, {
        signal: this.abortController.signal
      });
      const div = document.createElement("div");
      div.innerHTML = await response.text();
      return { hasResults: div.querySelector(".predictive-search__results-categories") !== null, html: div.firstElementChild.innerHTML };
    }
    async _doLiquidSearch(term) {
      let promises = [], supportedTypes = window.themeVariables.settings.searchMode.split(",").filter((item) => item !== "collection");
      supportedTypes.forEach((searchType) => {
        promises.push(fetch(`${window.themeVariables.routes.searchUrl}?section_id=predictive-search-compatibility&q=${term}&type=${searchType}&options[unavailable_products]=${window.themeVariables.settings.searchUnavailableProducts}&options[prefix]=last`, {
          signal: this.abortController.signal
        }));
      });
      let results = await Promise.all(promises), resultsByCategories = {};
      for (const [index, value] of results.entries()) {
        const resultAsText = await value.text();
        const fakeDiv = document.createElement("div");
        fakeDiv.innerHTML = resultAsText;
        fakeDiv.innerHTML = fakeDiv.firstElementChild.innerHTML;
        if (fakeDiv.childElementCount > 0) {
          resultsByCategories[supportedTypes[index]] = fakeDiv.innerHTML;
        }
      }
      if (Object.keys(resultsByCategories).length > 0) {
        const entries = Object.entries(resultsByCategories), keys = Object.keys(resultsByCategories);
        let html = `
        <tabs-nav class="tabs-nav tabs-nav--edge2edge tabs-nav--narrow tabs-nav--no-border">
          <scrollable-content class="tabs-nav__scroller hide-scrollbar">
            <div class="tabs-nav__scroller-inner">
              <div class="tabs-nav__item-list">
      `;
        for (let [type, value] of entries) {
          html += `
          <button type="button" class="tabs-nav__item heading heading--small" aria-expanded="${type === keys[0] ? "true" : "false"}" aria-controls="predictive-search-${type}">
            ${window.themeVariables.strings["search" + type.charAt(0).toUpperCase() + type.slice(1) + "s"]}
          </button>
        `;
        }
        html += `
              </div>
            </div>
          </scrollable-content>
        </tabs-nav>
      `;
        html += '<div class="predictive-search__results-categories">';
        for (let [type, value] of entries) {
          html += `
          <div class="predictive-search__results-categories-item" ${type !== keys[0] ? "hidden" : ""} id="predictive-search-${type}">
            ${value}
          </div>
        `;
        }
        html += "</div>";
        return { hasResults: true, html };
      } else {
        return {
          hasResults: false,
          html: `
        <p class="text--large">${window.themeVariables.strings.searchNoResults}</p>
          <div class="button-wrapper">
            <button type="button" data-action="reset-search" class="button button--primary">${window.themeVariables.strings.searchNewSearch}</button>
          </div>
        `
        };
      }
    }
    _startNewSearch() {
      this.inputElement.value = "";
      this.inputElement.focus();
      const event = new Event("input", {
        bubbles: true,
        cancelable: true
      });
      this.inputElement.dispatchEvent(event);
    }
    _supportPredictiveApi() {
      const shopifyFeatureRequests = JSON.parse(document.getElementById("shopify-features").innerHTML);
      return shopifyFeatureRequests["predictiveSearch"];
    }
    _debounce(fn, delay3) {
      let timer = null;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, delay3);
      };
    }
  };
  window.customElements.define("predictive-search-drawer", PredictiveSearchDrawer);

  // js/custom-element/section/timeline/timeline.js
  var Timeline = class extends HTMLElement {
    connectedCallback() {
      this.prevNextButtons = this.querySelector("prev-next-buttons");
      this.pageDots = this.querySelector("page-dots");
      this.scrollBarElement = this.querySelector(".timeline__progress-bar");
      this.listWrapperElement = this.querySelector(".timeline__list-wrapper");
      this.listItemElements = Array.from(this.querySelectorAll(".timeline__item"));
      this.isScrolling = false;
      if (this.listItemElements.length > 1) {
        this.addEventListener("prev-next:prev", this.previous.bind(this));
        this.addEventListener("prev-next:next", this.next.bind(this));
        this.addEventListener("page-dots:changed", (event) => this.select(event.detail.index));
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", (event) => {
            this.select([...event.target.parentNode.children].indexOf(event.target), !event.detail.load);
          });
        }
        this.itemIntersectionObserver = new IntersectionObserver(this._onItemObserved.bind(this), { threshold: 0.4 });
        const mediaQuery = window.matchMedia(window.themeVariables.breakpoints.pocket);
        mediaQuery.addListener(this._onMediaChanged.bind(this));
        this._onMediaChanged(mediaQuery);
      }
    }
    get selectedIndex() {
      return this.listItemElements.findIndex((item) => !item.hasAttribute("hidden"));
    }
    previous() {
      this.select(Math.max(0, this.selectedIndex - 1));
    }
    next() {
      this.select(Math.min(this.selectedIndex + 1, this.listItemElements.length - 1));
    }
    select(index, animate = true) {
      const listItemElement = this.listItemElements[index], boundingRect = listItemElement.getBoundingClientRect();
      if (animate) {
        this.isScrolling = true;
        setTimeout(() => this.isScrolling = false, 800);
      }
      if (window.matchMedia(window.themeVariables.breakpoints.pocket).matches) {
        this.listWrapperElement.scrollTo({
          behavior: animate ? "smooth" : "auto",
          left: this.listItemElements[0].clientWidth * index
        });
      } else {
        this.listWrapperElement.scrollBy({
          behavior: animate ? "smooth" : "auto",
          left: Math.floor(boundingRect.left - window.innerWidth / 2 + boundingRect.width / 2)
        });
      }
      this._onItemSelected(index);
    }
    _onItemSelected(index) {
      var _a;
      const listItemElement = this.listItemElements[index];
      listItemElement.removeAttribute("hidden", "false");
      getSiblings(listItemElement).forEach((item) => item.setAttribute("hidden", ""));
      this.prevNextButtons.isPrevDisabled = index === 0;
      this.prevNextButtons.isNextDisabled = index === this.listItemElements.length - 1;
      this.pageDots.selectedIndex = index;
      (_a = this.scrollBarElement) == null ? void 0 : _a.style.setProperty("--transform", `${100 / (this.listItemElements.length - 1) * index}%`);
    }
    _onItemObserved(entries) {
      if (this.isScrolling) {
        return;
      }
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._onItemSelected([...entry.target.parentNode.children].indexOf(entry.target));
        }
      });
    }
    _onMediaChanged(event) {
      if (event.matches) {
        this.listItemElements.forEach((item) => this.itemIntersectionObserver.observe(item));
      } else {
        this.listItemElements.forEach((item) => this.itemIntersectionObserver.unobserve(item));
      }
    }
  };
  window.customElements.define("time-line", Timeline);

  // js/custom-element/section/press/press-list.js
  var PressList = class extends CustomHTMLElement {
    connectedCallback() {
      this.pressItemsWrapper = this.querySelector(".press-list__wrapper");
      this.pressItems = Array.from(this.querySelectorAll("press-item"));
      this.pageDots = this.querySelector("page-dots");
      if (this.pressItems.length > 1) {
        if (Shopify.designMode) {
          this.addEventListener("shopify:block:select", (event) => {
            var _a;
            (_a = this.intersectionObserver) == null ? void 0 : _a.disconnect();
            if (event.detail.load || !event.target.selected) {
              this.select(event.target.index, !event.detail.load);
            }
          });
        }
        this.pressItemsWrapper.addEventListener("swiperight", this.previous.bind(this));
        this.pressItemsWrapper.addEventListener("swipeleft", this.next.bind(this));
        this.addEventListener("page-dots:changed", (event) => this.select(event.detail.index));
        this._blockVerticalScroll();
      }
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
    }
    async _setupVisibility() {
      await this.untilVisible();
      this.pressItems[this.selectedIndex].transitionToEnter();
    }
    get selectedIndex() {
      return this.pressItems.findIndex((item) => item.selected);
    }
    previous() {
      this.select((this.selectedIndex - 1 + this.pressItems.length) % this.pressItems.length);
    }
    next() {
      this.select((this.selectedIndex + 1 + this.pressItems.length) % this.pressItems.length);
    }
    async select(index, shouldAnimate = true) {
      const previousItem = this.pressItems[this.selectedIndex], newItem = this.pressItems[index];
      await previousItem.transitionToLeave(shouldAnimate);
      this.pageDots.selectedIndex = index;
      await newItem.transitionToEnter(shouldAnimate);
    }
  };
  Object.assign(PressList.prototype, VerticalScrollBlockerMixin);
  window.customElements.define("press-list", PressList);

  // js/custom-element/section/press/press-item.js
  var PressItem = class extends HTMLElement {
    connectedCallback() {
      this.addEventListener("split-lines:re-split", (event) => {
        Array.from(event.target.children).forEach((line) => line.style.visibility = this.selected ? "visible" : "hidden");
      });
    }
    get index() {
      return [...this.parentNode.children].indexOf(this);
    }
    get selected() {
      return !this.hasAttribute("hidden");
    }
    async transitionToLeave(shouldAnimate = true) {
      const textLines = await resolveAsyncIterator(this.querySelectorAll("split-lines")), animation = new CustomAnimation(new ParallelEffect(textLines.reverse().map((item, index) => {
        return new CustomKeyframeEffect(item, {
          visibility: ["visible", "hidden"],
          clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"],
          transform: ["translateY(0)", "translateY(100%)"]
        }, {
          duration: 350,
          delay: 60 * index,
          easing: "cubic-bezier(0.68, 0.00, 0.77, 0.00)"
        });
      })));
      shouldAnimate ? animation.play() : animation.finish();
      await animation.finished;
      this.setAttribute("hidden", "");
    }
    async transitionToEnter(shouldAnimate = true) {
      this.removeAttribute("hidden");
      const textLines = await resolveAsyncIterator(this.querySelectorAll("split-lines, .testimonial__author")), animation = new CustomAnimation(new ParallelEffect(textLines.map((item, index) => {
        return new CustomKeyframeEffect(item, {
          visibility: ["hidden", "visible"],
          clipPath: ["inset(0 0 100% 0)", "inset(0 0 0px 0)"],
          transform: ["translateY(100%)", "translateY(0)"]
        }, {
          duration: 550,
          delay: 120 * index,
          easing: "cubic-bezier(0.23, 1, 0.32, 1)"
        });
      })));
      shouldAnimate ? animation.play() : animation.finish();
      return animation.finished;
    }
  };
  window.customElements.define("press-item", PressItem);

  // js/custom-element/section/header/desktop-navigation.js
  var DesktopNavigation = class extends CustomHTMLElement {
    connectedCallback() {
      this.openingTimeout = null;
      this.currentMegaMenu = null;
      this.delegate.on("mouseenter", ".has-dropdown", (event, target) => {
        if (event.target === target && event.relatedTarget !== null) {
          this.openDropdown(target);
        }
      }, true);
      this.delegate.on("click", ".header__linklist-link[aria-expanded], .nav-dropdown__link[aria-expanded]", (event, target) => {
        if (window.matchMedia("(hover: hover)").matches || target.getAttribute("aria-expanded") === "true") {
          return;
        }
        event.preventDefault();
        this.openDropdown(target.parentElement);
      });
      this.delegate.on("shopify:block:select", (event) => this.openDropdown(event.target.parentElement));
      this.delegate.on("shopify:block:deselect", (event) => this.closeDropdown(event.target.parentElement));
    }
    openDropdown(parentElement) {
      const menuItem = parentElement.querySelector("[aria-controls]"), dropdown = parentElement.querySelector(`#${menuItem.getAttribute("aria-controls")}`);
      this.currentMegaMenu = dropdown.classList.contains("mega-menu") ? dropdown : null;
      let openingTimeout = setTimeout(() => {
        if (menuItem.getAttribute("aria-expanded") === "true") {
          return;
        }
        menuItem.setAttribute("aria-expanded", "true");
        dropdown.removeAttribute("hidden");
        if (dropdown.classList.contains("mega-menu") && !MediaFeatures.prefersReducedMotion()) {
          const items = Array.from(dropdown.querySelectorAll(".mega-menu__column, .mega-menu__image-push"));
          items.forEach((item) => {
            item.getAnimations().forEach((animation2) => animation2.cancel());
            item.style.opacity = 0;
          });
          const animation = new CustomAnimation(new ParallelEffect(items.map((item, index) => {
            return new CustomKeyframeEffect(item, {
              opacity: [0, 1],
              transform: ["translateY(20px)", "translateY(0)"]
            }, {
              duration: 250,
              delay: 100 + 60 * index,
              easing: "cubic-bezier(0.65, 0, 0.35, 1)"
            });
          })));
          animation.play();
        }
        const leaveListener = (event) => {
          if (event.relatedTarget !== null) {
            this.closeDropdown(parentElement);
            parentElement.removeEventListener("mouseleave", leaveListener);
          }
        };
        parentElement.addEventListener("mouseleave", leaveListener);
        openingTimeout = null;
        this.dispatchEvent(new CustomEvent("desktop-nav:dropdown:open", { bubbles: true }));
      }, 100);
      parentElement.addEventListener("mouseleave", () => {
        if (openingTimeout) {
          clearTimeout(openingTimeout);
        }
      }, { once: true });
    }
    closeDropdown(parentElement) {
      const menuItem = parentElement.querySelector("[aria-controls]"), dropdown = parentElement.querySelector(`#${menuItem.getAttribute("aria-controls")}`);
      requestAnimationFrame(() => {
        dropdown.classList.add("is-closing");
        menuItem.setAttribute("aria-expanded", "false");
        setTimeout(() => {
          dropdown.setAttribute("hidden", "");
          clearTimeout(this.openingTimeout);
          dropdown.classList.remove("is-closing");
        }, dropdown.classList.contains("mega-menu") && this.currentMegaMenu !== dropdown ? 250 : 0);
        this.dispatchEvent(new CustomEvent("desktop-nav:dropdown:close", { bubbles: true }));
      });
    }
  };
  window.customElements.define("desktop-navigation", DesktopNavigation);

  // js/custom-element/section/header/mobile-navigation.js
  var MobileNavigation = class extends DrawerContent {
    get apparitionAnimation() {
      if (this._apparitionAnimation) {
        return this._apparitionAnimation;
      }
      if (!MediaFeatures.prefersReducedMotion()) {
        const navItems = Array.from(this.querySelectorAll('.mobile-nav__item[data-level="1"]')), effects = [];
        effects.push(new ParallelEffect(navItems.map((item, index) => {
          return new CustomKeyframeEffect(item, {
            opacity: [0, 1],
            transform: ["translateX(-40px)", "translateX(0)"]
          }, {
            duration: 300,
            delay: 300 + 120 * index - Math.min(2 * index * index, 120 * index),
            easing: "cubic-bezier(0.25, 1, 0.5, 1)"
          });
        })));
        const bottomBar = this.querySelector(".drawer__footer");
        if (bottomBar) {
          effects.push(new CustomKeyframeEffect(bottomBar, {
            opacity: [0, 1],
            transform: ["translateY(100%)", "translateY(0)"]
          }, {
            duration: 300,
            delay: 500 + Math.max(125 * navItems.length - 25 * navItems.length, 25),
            easing: "cubic-bezier(0.25, 1, 0.5, 1)"
          }));
        }
        return this._apparitionAnimation = new CustomAnimation(new ParallelEffect(effects));
      }
    }
    attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          if (this.open && this.apparitionAnimation) {
            Array.from(this.querySelectorAll('.mobile-nav__item[data-level="1"], .drawer__footer')).forEach((item) => item.style.opacity = 0);
            this.apparitionAnimation.play();
          }
          triggerEvent(this, this.open ? "mobile-nav:open" : "mobile-nav:close");
      }
    }
  };
  window.customElements.define("mobile-navigation", MobileNavigation);

  // js/custom-element/section/header/store-header.js
  var StoreHeader = class extends CustomHTMLElement {
    connectedCallback() {
      if (window.ResizeObserver) {
        this.resizeObserver = new ResizeObserver(this._updateCustomProperties.bind(this));
        this.resizeObserver.observe(this);
        this.resizeObserver.observe(this.querySelector(".header__wrapper"));
      }
      if (this.isTransparent) {
        this.isTransparencyDetectionLocked = false;
        this.delegate.on("desktop-nav:dropdown:open", () => this.lockTransparency = true);
        this.delegate.on("desktop-nav:dropdown:close", () => this.lockTransparency = false);
        this.rootDelegate.on("mobile-nav:open", () => this.lockTransparency = true);
        this.rootDelegate.on("mobile-nav:close", () => this.lockTransparency = false);
        this.delegate.on("mouseenter", this._checkTransparentHeader.bind(this), true);
        this.delegate.on("mouseleave", this._checkTransparentHeader.bind(this));
        if (this.isSticky) {
          this._checkTransparentHeader();
          this._onWindowScrollListener = throttle(this._checkTransparentHeader.bind(this), 100);
          window.addEventListener("scroll", this._onWindowScrollListener);
        }
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      if (window.ResizeObserver) {
        this.resizeObserver.disconnect();
      }
      if (this.isTransparent && this.isSticky) {
        window.removeEventListener("scroll", this._onWindowScrollListener);
      }
    }
    get isSticky() {
      return this.hasAttribute("sticky");
    }
    get isTransparent() {
      return this.hasAttribute("transparent");
    }
    get transparentHeaderThreshold() {
      return 25;
    }
    set lockTransparency(value) {
      this.isTransparencyDetectionLocked = value;
      this._checkTransparentHeader();
    }
    _updateCustomProperties(entries) {
      entries.forEach((entry) => {
        if (entry.target === this) {
          const height = entry.borderBoxSize ? entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.borderBoxSize.blockSize : entry.target.clientHeight;
          document.documentElement.style.setProperty("--header-height", `${height}px`);
        }
        if (entry.target.classList.contains("header__wrapper")) {
          const heightWithoutNav = entry.borderBoxSize ? entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.borderBoxSize.blockSize : entry.target.clientHeight;
          document.documentElement.style.setProperty("--header-height-without-bottom-nav", `${heightWithoutNav}px`);
        }
      });
    }
    _checkTransparentHeader(event) {
      if (this.isTransparencyDetectionLocked || window.scrollY > this.transparentHeaderThreshold || event && event.type === "mouseenter") {
        this.classList.remove("header--transparent");
      } else {
        this.classList.add("header--transparent");
      }
    }
  };
  window.customElements.define("store-header", StoreHeader);

  // js/custom-element/section/product/image-zoom.js
  var PhotoSwipeUi = class {
    constructor(pswp) {
      this.photoSwipeInstance = pswp;
      this.delegate = new main_default(this.photoSwipeInstance.scrollWrap);
      this.maxSpreadZoom = window.themeVariables.settings.mobileZoomFactor || 2;
      this.pswpUi = this.photoSwipeInstance.scrollWrap.querySelector(".pswp__ui");
      this.delegate.on("click", '[data-action="pswp-close"]', this._close.bind(this));
      this.delegate.on("click", '[data-action="pswp-prev"]', this._goToPrev.bind(this));
      this.delegate.on("click", '[data-action="pswp-next"]', this._goToNext.bind(this));
      this.delegate.on("click", '[data-action="pswp-move-to"]', this._moveTo.bind(this));
      this.photoSwipeInstance.listen("close", this._onPswpClosed.bind(this));
      this.photoSwipeInstance.listen("doubleTap", this._onPswpDoubleTap.bind(this));
      this.photoSwipeInstance.listen("beforeChange", this._onPswpBeforeChange.bind(this));
      this.photoSwipeInstance.listen("initialZoomInEnd", this._onPswpInitialZoomInEnd.bind(this));
      this.photoSwipeInstance.listen("initialZoomOut", this._onPswpInitialZoomOut.bind(this));
      this.photoSwipeInstance.listen("parseVerticalMargin", this._onPswpParseVerticalMargin.bind(this));
      this.delegate.on("pswpTap", ".pswp__img", this._onPswpTap.bind(this));
    }
    init() {
      const prevNextButtons = this.pswpUi.querySelector(".pswp__prev-next-buttons"), dotsNavWrapper = this.pswpUi.querySelector(".pswp__dots-nav-wrapper");
      if (this.photoSwipeInstance.items.length <= 1) {
        prevNextButtons.style.display = "none";
        dotsNavWrapper.style.display = "none";
        return;
      }
      prevNextButtons.style.display = "";
      dotsNavWrapper.style.display = "";
      let dotsNavHtml = "";
      this.photoSwipeInstance.items.forEach((item, index) => {
        dotsNavHtml += `
        <button class="dots-nav__item tap-area" ${index === 0 ? 'aria-current="true"' : ""} data-action="pswp-move-to">
          <span class="visually-hidden">Go to slide ${index}</span>
        </button>
      `;
      });
      dotsNavWrapper.querySelector(".pswp__dots-nav-wrapper .dots-nav").innerHTML = dotsNavHtml;
    }
    _close() {
      this.photoSwipeInstance.close();
    }
    _goToPrev() {
      this.photoSwipeInstance.prev();
    }
    _goToNext() {
      this.photoSwipeInstance.next();
    }
    _moveTo(event, target) {
      this.photoSwipeInstance.goTo([...target.parentNode.children].indexOf(target));
    }
    _onPswpClosed() {
      this.delegate.off("pswpTap");
    }
    _onPswpDoubleTap(point) {
      const initialZoomLevel = this.photoSwipeInstance.currItem.initialZoomLevel;
      if (this.photoSwipeInstance.getZoomLevel() !== initialZoomLevel) {
        this.photoSwipeInstance.zoomTo(initialZoomLevel, point, 333);
      } else {
        this.photoSwipeInstance.zoomTo(initialZoomLevel < 0.7 ? 1 : this.maxSpreadZoom, point, 333);
      }
    }
    _onPswpTap(event) {
      if (event.detail.pointerType === "mouse") {
        this.photoSwipeInstance.toggleDesktopZoom(event.detail.releasePoint);
      }
    }
    _onPswpBeforeChange() {
      if (this.photoSwipeInstance.items.length <= 1) {
        return;
      }
      const activeDot = this.photoSwipeInstance.scrollWrap.querySelector(`.dots-nav__item:nth-child(${this.photoSwipeInstance.getCurrentIndex() + 1})`);
      activeDot.setAttribute("aria-current", "true");
      getSiblings(activeDot).forEach((item) => item.removeAttribute("aria-current"));
    }
    _onPswpInitialZoomInEnd() {
      var _a;
      (_a = this.pswpUi) == null ? void 0 : _a.classList.remove("pswp__ui--hidden");
    }
    _onPswpInitialZoomOut() {
      var _a;
      (_a = this.pswpUi) == null ? void 0 : _a.classList.add("pswp__ui--hidden");
    }
    _onPswpParseVerticalMargin(item) {
      item.vGap.bottom = this.photoSwipeInstance.items.length <= 1 || window.matchMedia(window.themeVariables.breakpoints.lapAndUp).matches ? 0 : 60;
    }
  };
  var ProductImageZoom = class extends OpenableElement {
    connectedCallback() {
      super.connectedCallback();
      this.mediaElement = this.closest(".product__media");
      this.maxSpreadZoom = window.themeVariables.settings.mobileZoomFactor || 2;
      LibraryLoader.load("photoswipe");
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      (_a = this.photoSwipeInstance) == null ? void 0 : _a.destroy();
    }
    async attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          if (this.open) {
            await LibraryLoader.load("photoswipe");
            this._openPhotoSwipe();
          }
      }
    }
    async _openPhotoSwipe() {
      const items = await this._buildItems();
      this.photoSwipeInstance = new window.ThemePhotoSwipe(this, PhotoSwipeUi, items, {
        index: items.findIndex((item) => item.selected),
        maxSpreadZoom: this.maxSpreadZoom,
        loop: false,
        allowPanToNext: false,
        closeOnScroll: false,
        closeOnVerticalDrag: MediaFeatures.supportsHover(),
        showHideOpacity: true,
        arrowKeys: true,
        history: false,
        getThumbBoundsFn: () => {
          const thumbnail = this.mediaElement.querySelector(".product__media-item.is-selected"), pageYScroll = window.pageYOffset || document.documentElement.scrollTop, rect = thumbnail.getBoundingClientRect();
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        },
        getDoubleTapZoom: (isMouseClick, item) => {
          if (isMouseClick) {
            return item.w > item.h ? 1.6 : 1;
          } else {
            return item.initialZoomLevel < 0.7 ? 1 : 1.33;
          }
        }
      });
      let lastWidth = null;
      this.photoSwipeInstance.updateSize = new Proxy(this.photoSwipeInstance.updateSize, {
        apply: (target, thisArg, argArray) => {
          if (lastWidth !== window.innerWidth) {
            target(arguments);
            lastWidth = window.innerWidth;
          }
        }
      });
      this.photoSwipeInstance.listen("close", () => {
        this.open = false;
      });
      this.photoSwipeInstance.init();
    }
    async _buildItems() {
      const activeImages = Array.from(this.mediaElement.querySelectorAll('.product__media-item[data-media-type="image"]:not(.is-filtered)')), product = await ProductLoader.load(this.getAttribute("product-handle"));
      return Promise.resolve(activeImages.map((item) => {
        const matchedMedia = product["media"].find((media) => media.id === parseInt(item.getAttribute("data-media-id"))), supportedSizes = getSupportedSizes(matchedMedia, [200, 300, 400, 500, 600, 700, 800, 1e3, 1200, 1400, 1600, 1800, 2e3, 2200, 2400, 2600, 2800, 3e3]), desiredWidth = Math.min(supportedSizes[supportedSizes.length - 1], window.innerWidth);
        return {
          selected: item.classList.contains("is-selected"),
          src: getSizedMediaUrl(matchedMedia, `${Math.ceil(Math.min(desiredWidth * window.devicePixelRatio * this.maxSpreadZoom, 3e3))}x`),
          msrc: item.firstElementChild.currentSrc,
          originalMedia: matchedMedia,
          w: desiredWidth,
          h: parseInt(desiredWidth / matchedMedia["aspect_ratio"])
        };
      }));
    }
  };
  window.customElements.define("product-image-zoom", ProductImageZoom);

  // js/custom-element/section/product/inventory.js
  var ProductInventory = class extends HTMLElement {
    connectedCallback() {
      var _a;
      const scriptTag = this.querySelector("script");
      if (!scriptTag) {
        return;
      }
      this.inventories = JSON.parse(scriptTag.innerHTML);
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
    }
    _onVariantChanged(event) {
      var _a;
      (_a = this.querySelector("span")) == null ? void 0 : _a.remove();
      if (event.detail.variant && this.inventories[event.detail.variant["id"]] !== "") {
        this.hidden = false;
        this.insertAdjacentHTML("afterbegin", this.inventories[event.detail.variant["id"]]);
      } else {
        this.hidden = true;
      }
    }
  };
  window.customElements.define("product-inventory", ProductInventory);

  // js/custom-element/section/product/payment-container.js
  var PaymentContainer = class extends HTMLElement {
    connectedCallback() {
      var _a;
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
      if (Shopify.designMode && Shopify.PaymentButton) {
        Shopify.PaymentButton.init();
      }
    }
    _onVariantChanged(event) {
      this._updateAddToCartButton(event.detail.variant);
      this._updateDynamicCheckoutButton(event.detail.variant);
    }
    _updateAddToCartButton(variant) {
      let addToCartButtonElement = this.querySelector("[data-product-add-to-cart-button]");
      if (!addToCartButtonElement) {
        return;
      }
      let addToCartButtonText = "";
      addToCartButtonElement.classList.remove("button--primary", "button--secondary", "button--ternary");
      if (!variant) {
        addToCartButtonElement.setAttribute("disabled", "disabled");
        addToCartButtonElement.classList.add("button--ternary");
        addToCartButtonText = window.themeVariables.strings.productFormUnavailable;
      } else {
        if (variant["available"]) {
          addToCartButtonElement.removeAttribute("disabled");
          addToCartButtonElement.classList.add(addToCartButtonElement.hasAttribute("data-use-primary") ? "button--primary" : "button--secondary");
          addToCartButtonText = addToCartButtonElement.getAttribute("data-button-content");
        } else {
          addToCartButtonElement.setAttribute("disabled", "disabled");
          addToCartButtonElement.classList.add("button--ternary");
          addToCartButtonText = window.themeVariables.strings.productFormSoldOut;
        }
      }
      if (addToCartButtonElement.getAttribute("is") === "loader-button") {
        addToCartButtonElement.firstElementChild.innerHTML = addToCartButtonText;
      } else {
        addToCartButtonElement.innerHTML = addToCartButtonText;
      }
    }
    _updateDynamicCheckoutButton(variant) {
      let paymentButtonElement = this.querySelector(".shopify-payment-button");
      if (!paymentButtonElement) {
        return;
      }
      paymentButtonElement.style.display = !variant || !variant["available"] ? "none" : "block";
    }
  };
  window.customElements.define("product-payment-container", PaymentContainer);

  // js/custom-element/section/product/payment-terms.js
  var PaymentTerms = class extends CustomHTMLElement {
    connectedCallback() {
      var _a;
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
    }
    _onVariantChanged(event) {
      const variant = event.detail.variant;
      if (variant) {
        const idElement = this.querySelector('[name="id"]');
        idElement.value = variant["id"];
        idElement.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };
  window.customElements.define("product-payment-terms", PaymentTerms);

  // js/custom-element/section/product/product-form.js
  var ProductForm = class extends HTMLFormElement {
    connectedCallback() {
      this.id.disabled = false;
      if (window.themeVariables.settings.cartType === "page" || window.themeVariables.settings.pageType === "cart") {
        return;
      }
      this.addEventListener("submit", this._onSubmit.bind(this));
    }
    async _onSubmit(event) {
      event.preventDefault();
      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }
      const submitButtons = Array.from(this.elements).filter((button) => button.type === "submit");
      submitButtons.forEach((submitButton) => {
        submitButton.setAttribute("disabled", "disabled");
        submitButton.setAttribute("aria-busy", "true");
      });
      const productForm = new FormData(this);
      productForm.append("sections", ["mini-cart"]);
      productForm.delete("option1");
      productForm.delete("option2");
      productForm.delete("option3");
      const response = await fetch(`${window.themeVariables.routes.cartAddUrl}.js`, {
        body: productForm,
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      submitButtons.forEach((submitButton) => {
        submitButton.removeAttribute("disabled");
        submitButton.removeAttribute("aria-busy");
      });
      const responseJson = await response.json();
      if (response.ok) {
        this.dispatchEvent(new CustomEvent("variant:added", {
          bubbles: true,
          detail: {
            variant: responseJson.hasOwnProperty("items") ? responseJson["items"][0] : responseJson
          }
        }));
        fetch(`${window.themeVariables.routes.cartUrl}.js`).then(async (response2) => {
          const cartContent = await response2.json();
          document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
            bubbles: true,
            detail: {
              cart: cartContent
            }
          }));
          cartContent["sections"] = responseJson["sections"];
          document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
            bubbles: true,
            detail: {
              cart: cartContent,
              openMiniCart: window.themeVariables.settings.cartType === "drawer" && this.closest(".drawer") === null
            }
          }));
        });
      }
      this.dispatchEvent(new CustomEvent("cart-notification:show", {
        bubbles: true,
        cancelable: true,
        detail: {
          status: response.ok ? "success" : "error",
          error: responseJson["description"] || ""
        }
      }));
    }
  };
  window.customElements.define("product-form", ProductForm, { extends: "form" });

  // js/custom-element/section/product/product-media.js
  var ProductMedia = class extends CustomHTMLElement {
    async connectedCallback() {
      var _a;
      this.mainCarousel = this.querySelector("flickity-carousel");
      if (this.hasAttribute("reveal-on-scroll")) {
        this._setupVisibility();
      }
      if (this.mainCarousel.childElementCount === 1) {
        return;
      }
      this.selectedVariantMediaId = null;
      this.viewInSpaceElement = this.querySelector("[data-shopify-model3d-id]");
      this.zoomButton = this.querySelector(".product__zoom-button");
      this.product = await ProductLoader.load(this.getAttribute("product-handle"));
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
      this.mainCarousel.addEventListener("model:played", () => this.mainCarousel.setDraggable(false));
      this.mainCarousel.addEventListener("model:paused", () => this.mainCarousel.setDraggable(true));
      this.mainCarousel.addEventListener("video:played", () => this.mainCarousel.setDraggable(false));
      this.mainCarousel.addEventListener("video:paused", () => this.mainCarousel.setDraggable(true));
      this.mainCarousel.addEventListener("flickity:ready", this._onFlickityReady.bind(this));
      this.mainCarousel.addEventListener("flickity:slide-changed", this._onFlickityChanged.bind(this));
      this.mainCarousel.addEventListener("flickity:slide-settled", this._onFlickitySettled.bind(this));
      this._onFlickityReady();
    }
    get thumbnailsPosition() {
      return window.matchMedia(window.themeVariables.breakpoints.pocket).matches ? "bottom" : this.getAttribute("thumbnails-position");
    }
    async _setupVisibility() {
      await this.untilVisible();
      const flickityInstance = await this.mainCarousel.flickityInstance, image = flickityInstance ? flickityInstance.selectedElement.querySelector("img") : this.querySelector(".product__media-image-wrapper img"), prefersReducedMotion = MediaFeatures.prefersReducedMotion();
      await imageLoaded(image);
      const animation = new CustomAnimation(new ParallelEffect([
        new CustomKeyframeEffect(image, { opacity: [0, 1], transform: [`scale(${prefersReducedMotion ? 1 : 1.1})`, "scale(1)"] }, { duration: 500, easing: "cubic-bezier(0.65, 0, 0.35, 1)" }),
        new ParallelEffect(Array.from(this.querySelectorAll(".product__thumbnail-item:not(.is-filtered)")).map((item, index) => {
          return new CustomKeyframeEffect(item, {
            opacity: [0, 1],
            transform: this.thumbnailsPosition === "left" ? [`translateY(${prefersReducedMotion ? 0 : "40px"})`, "translateY(0)"] : [`translateX(${prefersReducedMotion ? 0 : "50px"})`, "translateX(0)"]
          }, {
            duration: 250,
            delay: prefersReducedMotion ? 0 : 100 * index,
            easing: "cubic-bezier(0.75, 0, 0.175, 1)"
          });
        }))
      ]));
      this._hasSectionReloaded ? animation.finish() : animation.play();
    }
    async _onVariantChanged(event) {
      const variant = event.detail.variant;
      const filteredMediaIds = [];
      let shouldReload = false;
      this.product["media"].forEach((media) => {
        var _a;
        let matchMedia2 = variant["featured_media"] && media["id"] === variant["featured_media"]["id"];
        if ((_a = media["alt"]) == null ? void 0 : _a.includes("#")) {
          shouldReload = true;
          if (!matchMedia2) {
            const altParts = media["alt"].split("#"), mediaGroupParts = altParts.pop().split("_");
            this.product["options"].forEach((option) => {
              if (option["name"].toLowerCase() === mediaGroupParts[0].toLowerCase()) {
                if (variant["options"][option["position"] - 1].toLowerCase() !== mediaGroupParts[1].trim().toLowerCase()) {
                  filteredMediaIds.push(media["id"]);
                }
              }
            });
          }
        }
      });
      const currentlyFilteredIds = [...new Set(Array.from(this.querySelectorAll(".is-filtered[data-media-id]")).map((item) => parseInt(item.getAttribute("data-media-id"))))];
      if (currentlyFilteredIds.some((value) => !filteredMediaIds.includes(value))) {
        const selectedMediaId = variant["featured_media"] ? variant["featured_media"]["id"] : this.product["media"].map((item) => item.id).filter((item) => !filteredMediaIds.includes(item))[0];
        Array.from(this.querySelectorAll("[data-media-id]")).forEach((item) => {
          item.classList.toggle("is-filtered", filteredMediaIds.includes(parseInt(item.getAttribute("data-media-id"))));
          item.classList.toggle("is-selected", selectedMediaId === parseInt(item.getAttribute("data-media-id")));
          item.classList.toggle("is-initial-selected", selectedMediaId === parseInt(item.getAttribute("data-media-id")));
        });
        this.mainCarousel.reload();
      } else {
        if (!event.detail.variant["featured_media"] || this.selectedVariantMediaId === event.detail.variant["featured_media"]["id"]) {
          return;
        }
        this.mainCarousel.select(`[data-media-id="${event.detail.variant["featured_media"]["id"]}"]`);
      }
      this.selectedVariantMediaId = event.detail.variant["featured_media"] ? event.detail.variant["featured_media"]["id"] : null;
    }
    async _onFlickityReady() {
      const flickityInstance = await this.mainCarousel.flickityInstance;
      if (["video", "external_video"].includes(flickityInstance.selectedElement.getAttribute("data-media-type")) && this.hasAttribute("autoplay-video")) {
        flickityInstance.selectedElement.firstElementChild.play();
      }
    }
    async _onFlickityChanged() {
      const flickityInstance = await this.mainCarousel.flickityInstance;
      flickityInstance.cells.forEach((item) => {
        if (["external_video", "video", "model"].includes(item.element.getAttribute("data-media-type"))) {
          item.element.firstElementChild.pause();
        }
      });
    }
    async _onFlickitySettled() {
      const flickityInstance = await this.mainCarousel.flickityInstance, selectedSlide = flickityInstance.selectedElement;
      if (this.zoomButton) {
        this.zoomButton.hidden = selectedSlide.getAttribute("data-media-type") !== "image";
      }
      if (this.viewInSpaceElement) {
        this.viewInSpaceElement.setAttribute("data-shopify-model3d-id", this.viewInSpaceElement.getAttribute("data-shopify-model3d-default-id"));
      }
      switch (selectedSlide.getAttribute("data-media-type")) {
        case "model":
          this.viewInSpaceElement.setAttribute("data-shopify-model3d-id", selectedSlide.getAttribute("data-media-id"));
          selectedSlide.firstElementChild.play();
          break;
        case "external_video":
        case "video":
          if (this.hasAttribute("autoplay-video")) {
            selectedSlide.firstElementChild.play();
          }
          break;
      }
    }
  };
  window.customElements.define("product-media", ProductMedia);

  // js/helper/currency.js
  function formatMoney(cents, format = "") {
    if (typeof cents === "string") {
      cents = cents.replace(".", "");
    }
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/, formatString = format || window.themeVariables.settings.moneyFormat;
    function defaultTo(value2, defaultValue) {
      return value2 == null || value2 !== value2 ? defaultValue : value2;
    }
    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultTo(precision, 2);
      thousands = defaultTo(thousands, ",");
      decimal = defaultTo(decimal, ".");
      if (isNaN(number) || number == null) {
        return 0;
      }
      number = (number / 100).toFixed(precision);
      let parts = number.split("."), dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands), centsAmount = parts[1] ? decimal + parts[1] : "";
      return dollarsAmount + centsAmount;
    }
    let value = "";
    switch (formatString.match(placeholderRegex)[1]) {
      case "amount":
        value = formatWithDelimiters(cents, 2);
        break;
      case "amount_no_decimals":
        value = formatWithDelimiters(cents, 0);
        break;
      case "amount_with_space_separator":
        value = formatWithDelimiters(cents, 2, " ", ".");
        break;
      case "amount_with_comma_separator":
        value = formatWithDelimiters(cents, 2, ".", ",");
        break;
      case "amount_with_apostrophe_separator":
        value = formatWithDelimiters(cents, 2, "'", ".");
        break;
      case "amount_no_decimals_with_comma_separator":
        value = formatWithDelimiters(cents, 0, ",", ".");
        break;
      case "amount_no_decimals_with_space_separator":
        value = formatWithDelimiters(cents, 0, " ");
        break;
      case "amount_no_decimals_with_apostrophe_separator":
        value = formatWithDelimiters(cents, 0, "'");
        break;
    }
    if (formatString.indexOf("with_comma_separator") !== -1) {
      return formatString.replace(placeholderRegex, value);
    } else {
      return formatString.replace(placeholderRegex, value);
    }
  }

  // js/custom-element/section/product/product-meta.js
  var ProductMeta = class extends HTMLElement {
    connectedCallback() {
      var _a;
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
    }
    get priceClass() {
      return this.getAttribute("price-class") || "";
    }
    get unitPriceClass() {
      return this.getAttribute("unit-price-class") || "";
    }
    _onVariantChanged(event) {
      this._updateLabels(event.detail.variant);
      this._updatePrices(event.detail.variant);
      this._updateSku(event.detail.variant);
    }
    _updateLabels(variant) {
      let productLabelList = this.querySelector("[data-product-label-list]");
      if (!productLabelList) {
        return;
      }
      if (!variant) {
        productLabelList.innerHTML = "";
      } else {
        productLabelList.innerHTML = "";
        if (variant["compare_at_price"] > variant["price"]) {
          let savings = "";
          if (window.themeVariables.settings.discountMode === "percentage") {
            savings = `${Math.round((variant["compare_at_price"] - variant["price"]) * 100 / variant["compare_at_price"])}%`;
          } else {
            savings = formatMoney(variant["compare_at_price"] - variant["price"]);
          }
          productLabelList.innerHTML = `<span class="label label--highlight">${window.themeVariables.strings.collectionDiscount.replace("@savings@", savings)}</span>`;
        }
      }
    }
    _updatePrices(variant) {
      let productPrices = this.querySelector("[data-product-price-list]"), currencyFormat = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : Shopify.money_format2;
      if (!productPrices) {
        let customPriceSelector = document.querySelector('.custom-product-price');
        if(customPriceSelector){
          sessionStorage.setItem('varientID',variant[id]);
          sessionStorage.setItem('varientSku',variant[sku]);
          if(window.innerWidth > 990){
            productPrices = document.querySelector('.custom-product-price [data-product-price-list]');
          }else{productPrices = document.querySelector('.custom-product-price-mobile [data-product-price-list]')}
          currencyFormat = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : Shopify.money_format;
        }else{return;}
      }
      if (!variant) {
        productPrices.style.display = "none";
      } else {
        productPrices.innerHTML = "";
        if (variant["compare_at_price"] > variant["price"]) {
          let Price = variant["price"];
          let savePrice = DisCalculation(Price , productPrices);
          productPrices.innerHTML += `<span class="price price--highlight ${this.priceClass}"><span class="visually-hidden">${window.themeVariables.strings.productSalePrice}</span>${Shopify.formatMoney(savePrice, currencyFormat)}</span>`;
          productPrices.innerHTML += `<span class="price price--compare line-through"><span class="visually-hidden">${window.themeVariables.strings.productRegularPrice}</span>${Shopify.formatMoney(variant["compare_at_price"], currencyFormat)}</span>`;
        } else {
          let Price = variant["price"];
          let savePrice = DisCalculation(Price , productPrices);
          productPrices.innerHTML += `<span class="price ${this.priceClass}"><span class="visually-hidden">${window.themeVariables.strings.productSalePrice}</span>${Shopify.formatMoney(savePrice, currencyFormat)}</span>`;
        }
        if (variant["unit_price_measurement"]) {
          DisCalculation(variant["unit_price_measurement"] , productPrices);
          let referenceValue = "";
          if (variant["unit_price_measurement"]["reference_value"] !== 1) {
            referenceValue = `<span class="unit-price-measurement__reference-value">${variant["unit_price_measurement"]["reference_value"]}</span>`;
          }
          productPrices.innerHTML += `
          <div class="price text--subdued ${this.unitPriceClass}">
            <div class="unit-price-measurement">
              <span class="unit-price-measurement__price">${formatMoney(variant["unit_price"])}</span>
              <span class="unit-price-measurement__separator">/</span>
              ${referenceValue}
              <span class="unit-price-measurement__reference-unit">${variant["unit_price_measurement"]["reference_unit"]}</span>
            </div>
          </div>
        `;
        }
        productPrices.style.display = "";
      }
      
    }
    _updateSku(variant) {
      let productSku = this.querySelector("[data-product-sku-container]");
      if (!productSku) {
        return;
      }
      let productSkuNumber = productSku.querySelector("[data-product-sku-number]");
      if (!variant || !variant["sku"]) {
        productSku.style.display = "none";
      } else {
        productSkuNumber.innerHTML = variant["sku"];
        productSku.style.display = "";
      }
    }
  };
  window.customElements.define("product-meta", ProductMeta);

  // js/custom-element/section/product-list/quick-buy-drawer.js
  var QuickBuyDrawer = class extends DrawerContent {
    connectedCallback() {
      super.connectedCallback();
      this.delegate.on("variant:changed", this._onVariantChanged.bind(this));
    }
    async _load() {
      await super._load();
      this.imageElement = this.querySelector(".quick-buy-product__image");
      if (window.Shopify && window.Shopify.PaymentButton) {
        window.Shopify.PaymentButton.init();
      }
    }
    _onVariantChanged(event) {
      const variant = event.detail.variant;
      if (variant) {
        Array.from(this.querySelectorAll(`[href*="/products"]`)).forEach((link) => {
          const url = new URL(link.href);
          url.searchParams.set("variant", variant["id"]);
          link.setAttribute("href", url.toString());
        });
      }
      if (!this.imageElement || !variant || !variant["featured_media"]) {
        return;
      }
      const featuredMedia = variant["featured_media"];
      if (featuredMedia["alt"]) {
        this.imageElement.setAttribute("alt", featuredMedia["alt"]);
      }
      this.imageElement.setAttribute("width", featuredMedia["preview_image"]["width"]);
      this.imageElement.setAttribute("height", featuredMedia["preview_image"]["height"]);
      this.imageElement.setAttribute("src", getSizedMediaUrl(featuredMedia, "342x"));
      this.imageElement.setAttribute("srcset", getMediaSrcset(featuredMedia, [114, 228, 342]));
    }
  };
  window.customElements.define("quick-buy-drawer", QuickBuyDrawer);

  // js/custom-element/section/product-list/quick-buy-popover.js
  var QuickBuyPopover = class extends PopoverContent {
    connectedCallback() {
      super.connectedCallback();
      this.delegate.on("variant:changed", this._onVariantChanged.bind(this));
      this.delegate.on("variant:added", () => this.open = false);
    }
    async _load() {
      await super._load();
      this.imageElement = this.querySelector(".quick-buy-product__image");
    }
    _onVariantChanged(event) {
      const variant = event.detail.variant;
      if (variant) {
        Array.from(this.querySelectorAll(`[href*="/products"]`)).forEach((link) => {
          const url = new URL(link.href);
          url.searchParams.set("variant", variant["id"]);
          link.setAttribute("href", url.toString());
        });
      }
      if (!this.imageElement || !variant || !variant["featured_media"]) {
        return;
      }
      const featuredMedia = variant["featured_media"];
      if (featuredMedia["alt"]) {
        this.imageElement.setAttribute("alt", featuredMedia["alt"]);
      }
      this.imageElement.setAttribute("width", featuredMedia["preview_image"]["width"]);
      this.imageElement.setAttribute("height", featuredMedia["preview_image"]["height"]);
      this.imageElement.setAttribute("src", getSizedMediaUrl(featuredMedia, "195x"));
      this.imageElement.setAttribute("srcset", getMediaSrcset(featuredMedia, [65, 130, 195]));
    }
  };
  window.customElements.define("quick-buy-popover", QuickBuyPopover);

  // js/custom-element/section/product/store-pickup.js
  var StorePickup = class extends HTMLElement {
    connectedCallback() {
      var _a;
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
    }
    _onVariantChanged(event) {
      if (!event.detail.variant) {
        this.innerHTML = "";
      } else {
        this._renderForVariant(event.detail.variant["id"]);
      }
    }
    async _renderForVariant(id) {
      const response = await fetch(`${window.themeVariables.routes.rootUrlWithoutSlash}/variants/${id}?section_id=store-availability`), div = document.createElement("div");
      div.innerHTML = await response.text();
      this.innerHTML = div.firstElementChild.innerHTML.trim();
    }
  };
  window.customElements.define("store-pickup", StorePickup);

  const DisCalculation = (savePrice , selector) => {
    let selectedVarient = document.querySelector('.quick_product-price');
    if(Shopify.enable_flash_sale && selector.className.includes("custom-product_flash-sale")){
    let savePriceDis = savePrice / 100 * Shopify.flash_discount;
     savePrice = savePrice - savePriceDis;
    }
    else if(Shopify.enable_namagoo && selector.className.includes("custom-product_namogoo")){
    if(localStorage.getItem('Namogoo')) {  
      let NamogooDiscount = JSON.parse(localStorage.getItem('Namogoo'));
      let discountValue = NamogooDiscount.discountValue;
      let savePriceDis = savePrice / 100 * discountValue;
       savePrice = savePrice - savePriceDis;
    }
    }
    return savePrice; 
    };

  // js/custom-element/section/product/variants.js
  var ProductVariants = class extends CustomHTMLElement {
    async connectedCallback() {
      this.masterSelector = document.getElementById(this.getAttribute("form-id")).id;
      this.optionSelectors = Array.from(this.querySelectorAll("[data-selector-type]"));
      if (!this.masterSelector) {
        console.warn(`The variant selector for product with handle ${this.productHandle} is not linked to any product form.`);
        return;
      }
      this.product = await ProductLoader.load(this.productHandle);
      this.delegate.on("change", '[name^="option"]', this._onOptionChanged.bind(this));
      this.masterSelector.addEventListener("change", this._onMasterSelectorChanged.bind(this));
      this._updateDisableSelectors();
      this.selectVariant(this.selectedVariant["id"]);
    }
    get selectedVariant() {
      return this._getVariantById(parseInt(this.masterSelector.value));
    }
    get productHandle() {
      return this.getAttribute("handle");
    }
    get hideSoldOutVariants() {
      return this.hasAttribute("hide-sold-out-variants");
    }
    get updateUrl() {
      return this.hasAttribute("update-url");
    }
    selectVariant(id) {
      var _a;
      if (!this._isVariantSelectable(this._getVariantById(id))) {
        id = this._getFirstMatchingAvailableOrSelectableVariant()["id"];
      }
      if (((_a = this.selectedVariant) == null ? void 0 : _a.id) === id) {
        return;
      }
      this.masterSelector.value = id;
      this.masterSelector.dispatchEvent(new Event("change", { bubbles: true }));
      if (this.updateUrl && history.replaceState) {
        const newUrl = new URL(window.location.href);
        if (id) {
          newUrl.searchParams.set("variant", id);
        } else {
          newUrl.searchParams.delete("variant");
        }
        window.history.replaceState({ path: newUrl.toString() }, "", newUrl.toString());
      }
      this._updateDisableSelectors();
      triggerEvent(this.masterSelector.form, "variant:changed", { variant: this.selectedVariant });
    }
    _onOptionChanged() {
      var _a;
      this.selectVariant((_a = this._getVariantFromOptions()) == null ? void 0 : _a.id);
    }
    _onMasterSelectorChanged() {
      var _a;
      const options = ((_a = this.selectedVariant) == null ? void 0 : _a.options) || [];
      options.forEach((value, index) => {
        let input = this.querySelector(`input[name="option${index + 1}"][value="${CSS.escape(value)}"], select[name="option${index + 1}"]`), triggerChangeEvent = false;
        if (input.tagName === "SELECT") {
          triggerChangeEvent = input.value !== value;
          input.value = value;
        } else if (input.tagName === "INPUT") {
          triggerChangeEvent = !input.checked && input.value === value;
          input.checked = input.value === value;
        }
        if (triggerChangeEvent) {
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    }
    _getVariantById(id) {
      return this.product["variants"].find((variant) => variant["id"] === id);
    }
    _getVariantFromOptions() {
      const options = this._getSelectedOptionValues();
      return this.product["variants"].find((variant) => {
        return variant["options"].every((value, index) => value === options[index]);
      });
    }
    _isVariantSelectable(variant) {
      if (!variant) {
        return false;
      } else {
        return variant["available"] || !this.hideSoldOutVariants && !variant["available"];
      }
    }
    _getFirstMatchingAvailableOrSelectableVariant() {
      let options = this._getSelectedOptionValues(), matchedVariant = null, slicedCount = 0;
      do {
        options.pop();
        slicedCount += 1;
        matchedVariant = this.product["variants"].find((variant) => {
          if (this.hideSoldOutVariants) {
            return variant["available"] && variant["options"].slice(0, variant["options"].length - slicedCount).every((value, index) => value === options[index]);
          } else {
            return variant["options"].slice(0, variant["options"].length - slicedCount).every((value, index) => value === options[index]);
          }
        });
      } while (!matchedVariant && options.length > 0);
      return matchedVariant;
    }
    _getSelectedOptionValues() {
      const options = [];
      Array.from(this.querySelectorAll('input[name^="option"]:checked, select[name^="option"]')).forEach((option) => options.push(option.value));
      return options;
    }
    _updateDisableSelectors() {
      const selectedVariant = this.selectedVariant;
      if (!selectedVariant) {
        return;
      }
      const applyClassToSelector = (selector, valueIndex, available, hasAtLeastOneCombination) => {
        let selectorType = selector.getAttribute("data-selector-type"), cssSelector = "";
        switch (selectorType) {
          case "color":
            cssSelector = `.color-swatch:nth-child(${valueIndex + 1})`;
            break;
          case "variant-image":
            cssSelector = `.variant-swatch:nth-child(${valueIndex + 1})`;
            break;
          case "block":
            cssSelector = `.block-swatch:nth-child(${valueIndex + 1})`;
            break;
          case "dropdown":
            cssSelector = `.combo-box__option-item:nth-child(${valueIndex + 1})`;
            break;
        }
        selector.querySelector(cssSelector).toggleAttribute("hidden", !hasAtLeastOneCombination);
        if (this.hideSoldOutVariants) {
          selector.querySelector(cssSelector).toggleAttribute("hidden", !available);
        } else {
          selector.querySelector(cssSelector).classList.toggle("is-disabled", !available);
        }
      };
      if (this.optionSelectors && this.optionSelectors[0]) {
        this.product["options"][0]["values"].forEach((value, valueIndex) => {
          const hasAtLeastOneCombination = this.product["variants"].some((variant) => variant["option1"] === value && variant), hasAvailableVariant = this.product["variants"].some((variant) => variant["option1"] === value && variant["available"]);
          applyClassToSelector(this.optionSelectors[0], valueIndex, hasAvailableVariant, hasAtLeastOneCombination);
          if (this.optionSelectors[1]) {
            this.product["options"][1]["values"].forEach((value2, valueIndex2) => {
              const hasAtLeastOneCombination2 = this.product["variants"].some((variant) => variant["option2"] === value2 && variant["option1"] === selectedVariant["option1"] && variant), hasAvailableVariant2 = this.product["variants"].some((variant) => variant["option2"] === value2 && variant["option1"] === selectedVariant["option1"] && variant["available"]);
              applyClassToSelector(this.optionSelectors[1], valueIndex2, hasAvailableVariant2, hasAtLeastOneCombination2);
              if (this.optionSelectors[2]) {
                this.product["options"][2]["values"].forEach((value3, valueIndex3) => {
                  const hasAtLeastOneCombination3 = this.product["variants"].some((variant) => variant["option3"] === value3 && variant["option1"] === selectedVariant["option1"] && variant["option2"] === selectedVariant["option2"] && variant), hasAvailableVariant3 = this.product["variants"].some((variant) => variant["option3"] === value3 && variant["option1"] === selectedVariant["option1"] && variant["option2"] === selectedVariant["option2"] && variant["available"]);
                  applyClassToSelector(this.optionSelectors[2], valueIndex3, hasAvailableVariant3, hasAtLeastOneCombination3);
                });
              }
            });
          }
        });
      
      }
    }
  };
  window.customElements.define("product-variants", ProductVariants);

  // js/custom-element/section/product-list/product-item.js
  var ProductItem = class extends CustomHTMLElement {
    connectedCallback() {
      this.primaryImageList = Array.from(this.querySelectorAll(".product-item__primary-image"));
      this.delegate.on("change", ".product-item-meta__swatch-list .color-swatch__radio", this._onColorSwatchChanged.bind(this));
      this.delegate.on("mouseenter", ".product-item-meta__swatch-list .color-swatch__item", this._onColorSwatchHovered.bind(this), true);
    }
    async _onColorSwatchChanged(event, target) {
      Array.from(this.querySelectorAll(`[href*="/products"]`)).forEach((link) => {
        let url;
        if (link.tagName === "A") {
          url = new URL(link.href);
        } else {
          url = new URL(link.getAttribute("href"), `https://${window.themeVariables.routes.host}`);
        }
        url.searchParams.set("variant", target.getAttribute("data-variant-id"));
        link.setAttribute("href", url.toString());
      });
      if (target.hasAttribute("data-variant-featured-media")) {
        const newImage = this.primaryImageList.find((image) => image.getAttribute("data-media-id") === target.getAttribute("data-variant-featured-media"));
        newImage.setAttribute("loading", "eager");
        const onImageLoaded = newImage.complete ? Promise.resolve() : new Promise((resolve) => newImage.onload = resolve);
        await onImageLoaded;
        newImage.removeAttribute("hidden");
        let properties = {};
        if (Array.from(newImage.parentElement.classList).some((item) => ["aspect-ratio--short", "aspect-ratio--tall", "aspect-ratio--square"].includes(item))) {
          properties = [
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", transform: "translate(calc(-50% - 20px), -50%)", zIndex: 1, offset: 0 },
            { clipPath: "polygon(0 0, 20% 0, 5% 100%, 0 100%)", transform: "translate(calc(-50% - 20px), -50%)", zIndex: 1, offset: 0.3 },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "translate(-50%, -50%)", zIndex: 1, offset: 1 }
          ];
        } else {
          properties = [
            { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", transform: "translateX(-20px)", zIndex: 1, offset: 0 },
            { clipPath: "polygon(0 0, 20% 0, 5% 100%, 0 100%)", transform: "translateX(-20px)", zIndex: 1, offset: 0.3 },
            { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transform: "translateX(0px)", zIndex: 1, offset: 1 }
          ];
        }
        await newImage.animate(properties, {
          duration: 500,
          easing: "ease-in-out"
        }).finished;
        this.primaryImageList.filter((image) => image.classList.contains("product-item__primary-image") && image !== newImage).forEach((image) => image.setAttribute("hidden", ""));
      }
    }
    _onColorSwatchHovered(event, target) {
      const input = target.previousElementSibling;
      if (input.hasAttribute("data-variant-featured-media")) {
        const newImage = this.primaryImageList.find((image) => image.getAttribute("data-media-id") === input.getAttribute("data-variant-featured-media"));
        newImage.setAttribute("loading", "eager");
      }
    }
  };
  window.customElements.define("product-item", ProductItem);

  // js/custom-element/section/product-facet/product-facet.js
  var ProductFacet = class extends CustomHTMLElement {
    connectedCallback() {
      this.delegate.on("pagination:page-changed", this._rerender.bind(this));
      this.delegate.on("facet:criteria-changed", this._rerender.bind(this));
      this.delegate.on("facet:abort-loading", this._abort.bind(this));
    }
    async _rerender(event) {
      history.replaceState({}, "", event.detail.url);
      this._abort();
      this.showLoadingBar();
      const url = new URL(window.location);
      url.searchParams.set("section_id", this.getAttribute("section-id"));
      try {
        this.abortController = new AbortController();
        const response = await fetch(url.toString(), { signal: this.abortController.signal });
        const responseAsText = await response.text();
        const fakeDiv = document.createElement("div");
        fakeDiv.innerHTML = responseAsText;
        this.querySelector("#facet-main").innerHTML = fakeDiv.querySelector("#facet-main").innerHTML;
        const activeFilterList = Array.from(fakeDiv.querySelectorAll(".product-facet__active-list")), toolbarItem = document.querySelector(".mobile-toolbar__item--filters");
        if (toolbarItem) {
          toolbarItem.classList.toggle("has-filters", activeFilterList.length > 0);
        }
        const filtersTempDiv = fakeDiv.querySelector("#facet-filters");
        if (filtersTempDiv) {
          const previousScrollTop = this.querySelector("#facet-filters .drawer__content").scrollTop;
          Array.from(this.querySelectorAll("#facet-filters-form .collapsible-toggle")).forEach((filterToggle) => {
            const filtersTempDivToggle = filtersTempDiv.querySelector(`[aria-controls="${filterToggle.getAttribute("aria-controls")}"]`), isExpanded = filterToggle.getAttribute("aria-expanded") === "true";
            filtersTempDivToggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
            filtersTempDivToggle.nextElementSibling.toggleAttribute("open", isExpanded);
            filtersTempDivToggle.nextElementSibling.style.overflow = isExpanded ? "visible" : "";
          });
          this.querySelector("#facet-filters").innerHTML = filtersTempDiv.innerHTML;
          this.querySelector("#facet-filters .drawer__content").scrollTop = previousScrollTop;
        }
        const scrollTo = this.querySelector(".product-facet__meta-bar") || this.querySelector(".product-facet__product-list") || this.querySelector(".product-facet__main");
        requestAnimationFrame(() => {
          scrollTo.scrollIntoView({ block: "start", behavior: "smooth" });
        });
        this.hideLoadingBar();
      } catch (e) {
        if (e.name === "AbortError") {
          return;
        }
      }
    }
    _abort() {
      if (this.abortController) {
        this.abortController.abort();
      }
    }
  };

  function loadMoreProduct(){ 
    if(sessionStorage.getItem('Load_More') === 'true'){
      // console.log('loadMoreProduct');
      sessionStorage.setItem('Load_More','false');
      var $this =$('.load-more-icon'),totalPages = parseInt($('[data-total-pages]').val()),currentPage = parseInt($('[data-current-page]').val());
      currentPage = currentPage+1;
      var nextUrl = $('[data-next-url]').val().replace(/page=[0-9]+/,'page='+currentPage);
      $('[data-current-page]').val(currentPage);
      $.ajax({
        url: nextUrl,
        type: 'GET',
        dataType: 'html',
        success: function(responseHTML){
          $('.load-more__inner').append($(responseHTML).find('.load-more__inner').html());
        },
        complete: function() {
          if(currentPage >= totalPages) {
             $this.addClass('hide');
          } 
        }
      });
    }
  };

function collectionLoadMoreButton(){
  // console.log('collectionLoadMoreButton');
  let loadMoreButton = document.querySelector('.js-load-more');
  var observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true)
      sessionStorage.setItem('Load_More','true');
      loadMoreProduct();
  }, { threshold: [1] });
  if(loadMoreButton !== null){
    observer.observe(loadMoreButton);
  }
  
};
sessionStorage.setItem('Load_More','false');
collectionLoadMoreButton();


  window.customElements.define("product-facet", ProductFacet);
  // js/custom-element/section/facet/facet-filters.js
  var FacetFilters = class extends DrawerContent {
    connectedCallback() {
      super.connectedCallback();
      this.delegate.on("change", '[name^="filter."]', this._onFilterChanged.bind(this));
      this.rootDelegate.on("click", '[data-action="clear-filters"]', this._onFiltersCleared.bind(this));
      if (this.alwaysVisible) {
        this.matchMedia = window.matchMedia(window.themeVariables.breakpoints.pocket);
        this.matchMedia.addListener(this._adjustDrawer.bind(this));
        this._adjustDrawer(this.matchMedia);
      }
    }
    get alwaysVisible() {
      return this.hasAttribute("always-visible");
    }
    _onFiltersCleared(event, target) {
      event.preventDefault();
      triggerEvent(this, "facet:criteria-changed", { url: target.href });
      setTimeout(function(){
        collectionLoadMoreButton();
        },1000);
    }
    _onFilterChanged() {
      const formData = new FormData(this.querySelector("#facet-filters-form"));
      const searchParamsAsString = new URLSearchParams(formData).toString();
      triggerEvent(this, "facet:criteria-changed", { url: `${window.location.pathname}?${searchParamsAsString}` });
      setTimeout(function(){
        collectionLoadMoreButton();
      },1000);
    }
    _adjustDrawer(match) {
      this.classList.toggle("drawer", match.matches);
      this.classList.toggle("drawer--from-left", match.matches);
    }
    
  };
  window.customElements.define("facet-filters", FacetFilters);

  // js/custom-element/section/facet/sort-by-popover.js
  var SortByPopover = class extends PopoverContent {
    connectedCallback() {
      super.connectedCallback();
      this.delegate.on("change", '[name="sort_by"]', this._onSortChanged.bind(this));
    }
    _onSortChanged(event, target) {
      const currentUrl = new URL(location.href);
      currentUrl.searchParams.set("sort_by", target.value);
      currentUrl.searchParams.delete("page");
      this.open = false;
      this.dispatchEvent(new CustomEvent("facet:criteria-changed", {
        bubbles: true,
        detail: {
          url: currentUrl.toString()
        }
      }));
      setTimeout(function(){
        collectionLoadMoreButton();
      },1000);
    }
  };
  window.customElements.define("sort-by-popover", SortByPopover);

  // js/custom-element/section/cart/cart-count.js
  var CartCount = class extends CustomHTMLElement {
    connectedCallback() {
      this.rootDelegate.on("cart:updated", (event) => this.innerText = event.detail.cart["item_count"]);
      this.rootDelegate.on("cart:refresh", (event) => this.innerText = event.detail.cart["item_count"]);
    }
  };
  window.customElements.define("cart-count", CartCount);


Shopify.cartNamogooPrice = function(cartJson){ 
   if(Shopify.enable_namagoo){
  let NamogooDiscount = JSON.parse(localStorage.getItem('Namogoo'));
  let discountValue = NamogooDiscount.discountValue;
     let totalPriceOrg = cartJson.total_price;
    let totalPriceDis = totalPriceOrg / 100 * discountValue;
     totalPriceOrg = totalPriceOrg - totalPriceDis;  
 $('.mini-cart__drawer-footer .cart-total-text b').html(Shopify.formatMoney(totalPriceOrg,Shopify.money_format2));
    for (let i = 0; i < cartJson.items.length; i++) {
      let properties = cartJson.items[i].properties;
      if(Object.keys(properties).includes("namogoo")){
        let savePrice = cartJson.items[i].line_price;
        let savePriceDis = savePrice / 100 * discountValue;
        savePrice = savePrice - savePriceDis;   
        $('#mini-cart-form [data-product_id='+cartJson.items[i].product_id+']').siblings('.product-item-meta__price-list-container').children('.price-list').children('.price.price--highlight').html(Shopify.formatMoney(savePrice,Shopify.money_format2) );    
      }
    }
  }
}

  // js/custom-element/section/cart/cart-drawer.js
  var CartDrawer = class extends DrawerContent {
    connectedCallback() {
      super.connectedCallback();
      this.nextReplacementDelay = 0;
      this.rootDelegate.on("cart:refresh", this._rerenderCart.bind(this));
      this.addEventListener("variant:added", () => this.nextReplacementDelay = 600);
    }
    async _rerenderCart(event) {
      var _a;
      let cartContent = null, html = "";
      if (event.detail && event.detail["cart"]) {
        cartContent = event.detail["cart"];
        html = event.detail["cart"]["sections"]["mini-cart"];
      } else {
        const response = await fetch(`${window.themeVariables.routes.cartUrl}?section_id=${this.getAttribute("section")}`);
        html = await response.text();
      }

      const fakeDiv = document.createElement("div");
      fakeDiv.innerHTML = html;
      setTimeout(async () => {
        var _a2;
        const previousPosition = this.querySelector(".drawer__content").scrollTop;
        if (cartContent && cartContent["item_count"] === 0) {
          const animation = new CustomAnimation(new ParallelEffect(Array.from(this.querySelectorAll(".drawer__content, .drawer__footer")).map((item) => {
            return new CustomKeyframeEffect(item, { opacity: [1, 0] }, { duration: 250, easing: "ease-in" });
          })));
          animation.play();
          await animation.finished;
        }
        this.innerHTML = fakeDiv.querySelector("cart-drawer").innerHTML;
      Shopify.cartNamogooPrice(cartContent);
        if (cartContent && cartContent["item_count"] === 0) {
          this.querySelector(".drawer__content").animate({ opacity: [0, 1], transform: ["translateY(40px)", "translateY(0)"] }, { duration: 450, easing: "cubic-bezier(0.33, 1, 0.68, 1)" });
        } else {
          this.querySelector(".drawer__content").scrollTop = previousPosition;
        }
        if ((_a2 = event == null ? void 0 : event.detail) == null ? void 0 : _a2.openMiniCart) {
          this.clientWidth;
          this.open = true;
        }
  
      }, ((_a = event == null ? void 0 : event.detail) == null ? void 0 : _a.replacementDelay) || this.nextReplacementDelay);
      this.nextReplacementDelay = 0;
  
    
    }
    async attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
      switch (name) {
        case "open":
          if (this.open) {
            this.querySelector(".drawer__content").scrollTop = 0;
            if (!MediaFeatures.prefersReducedMotion()) {
              const lineItems = Array.from(this.querySelectorAll(".line-item")), recommendationsInner = this.querySelector(".mini-cart__recommendations-inner"), bottomBar = this.querySelector(".drawer__footer"), effects = [];
              if (recommendationsInner && window.matchMedia(window.themeVariables.breakpoints.pocket).matches) {
                lineItems.push(recommendationsInner);
              }
              lineItems.forEach((item) => item.style.opacity = 0);
              recommendationsInner ? recommendationsInner.style.opacity = 0 : null;
              bottomBar ? bottomBar.style.opacity = 0 : null;
              effects.push(new ParallelEffect(lineItems.map((item, index) => {
                return new CustomKeyframeEffect(item, {
                  opacity: [0, 1],
                  transform: ["translateX(40px)", "translateX(0)"]
                }, {
                  duration: 400,
                  delay: 400 + 120 * index - Math.min(2 * index * index, 120 * index),
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                });
              })));
              if (bottomBar) {
                effects.push(new CustomKeyframeEffect(bottomBar, {
                  opacity: [0, 1],
                  transform: ["translateY(100%)", "translateY(0)"]
                }, {
                  duration: 300,
                  delay: 400,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                }));
              }
              if (recommendationsInner && !window.matchMedia(window.themeVariables.breakpoints.pocket).matches) {
                effects.push(new CustomKeyframeEffect(recommendationsInner, {
                  opacity: [0, 1],
                  transform: ["translateX(100%)", "translateX(0)"]
                }, {
                  duration: 250,
                  delay: 400 + Math.max(120 * lineItems.length - 25 * lineItems.length, 25),
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)"
                }));
              }
              let animation = new CustomAnimation(new ParallelEffect(effects));
              animation.play();
            }
          }
      }
  fetch(`${window.themeVariables.routes.cartUrl}.js`).then(async (response2) => {
          const cartContent = await response2.json();
      Shopify.cartNamogooPrice(cartContent);
});    

    }

  };
  window.customElements.define("cart-drawer", CartDrawer);

  // js/custom-element/section/cart/cart-drawer-recommendations.js
  var _CartDrawerRecommendations = class extends HTMLElement {
    async connectedCallback() {
      if (!_CartDrawerRecommendations.recommendationsCache[this.productId]) {
        _CartDrawerRecommendations.recommendationsCache[this.productId] = fetch(`${window.themeVariables.routes.productRecommendationsUrl}?product_id=${this.productId}&limit=10&section_id=${this.sectionId}`);
      }
      const response = await _CartDrawerRecommendations.recommendationsCache[this.productId];
      const div = document.createElement("div");
      div.innerHTML = await response.clone().text();
      const productRecommendationsElement = div.querySelector("cart-drawer-recommendations");
      if (productRecommendationsElement && productRecommendationsElement.hasChildNodes()) {
        this.innerHTML = productRecommendationsElement.innerHTML;
      } else {
        this.hidden = true;
      }
    }
    get productId() {
      return this.getAttribute("product-id");
    }
    get sectionId() {
      return this.getAttribute("section-id");
    }
  };
  var CartDrawerRecommendations = _CartDrawerRecommendations;
  __publicField(CartDrawerRecommendations, "recommendationsCache", {});
  window.customElements.define("cart-drawer-recommendations", CartDrawerRecommendations);

  // js/custom-element/section/cart/cart-note.js
  var CartNote = class extends HTMLTextAreaElement {
    connectedCallback() {
      this.addEventListener("change", this._onNoteChanged.bind(this));
    }
    get ownedToggle() {
      return this.hasAttribute("aria-owns") ? document.getElementById(this.getAttribute("aria-owns")) : null;
    }
    async _onNoteChanged() {
      if (this.ownedToggle) {
        this.ownedToggle.innerHTML = this.value === "" ? window.themeVariables.strings.cartAddOrderNote : window.themeVariables.strings.cartEditOrderNote;
      }
      const response = await fetch(`${window.themeVariables.routes.cartUrl}/update.js`, {
        body: JSON.stringify({ note: this.value }),
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const cartContent = await response.json();
      document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
        bubbles: true,
        detail: {
          cart: cartContent
        }
      }));
    }
  };
  window.customElements.define("cart-note", CartNote, { extends: "textarea" });

  // js/custom-element/section/cart/free-shipping-bar.js
  var FreeShippingBar = class extends HTMLElement {
    connectedCallback() {
      document.documentElement.addEventListener("cart:updated", this._onCartUpdated.bind(this));
    }
    get threshold() {
      return parseFloat(this.getAttribute("threshold"));
    }
    _onCartUpdated(event) {
      this.style.setProperty("--progress", Math.min(parseFloat(event.detail["cart"]["total_price"]) / this.threshold, 1));
    }
  };
  window.customElements.define("free-shipping-bar", FreeShippingBar);

  // js/custom-element/section/cart/item-quantity.js
  var LineItemQuantity = class extends CustomHTMLElement {
    connectedCallback() {
      this.delegate.on("click", "a", this._onQuantityLinkClicked.bind(this));
      this.delegate.on("change", "input", this._onQuantityChanged.bind(this));
    }
    _onQuantityLinkClicked(event, target) {
      event.preventDefault();
      this._updateFromLink(target.href);
    }
    _onQuantityChanged(event, target) {
      this._updateFromLink(`${window.themeVariables.routes.cartChangeUrl}?quantity=${target.value}&line=${target.getAttribute("data-line")}`);
    }
    async _updateFromLink(link) {
      if (window.themeVariables.settings.pageType === "cart") {
        window.location.href = link;
        return;
      }
      const changeUrl = new URL(link, `https://${window.themeVariables.routes.host}`), searchParams = changeUrl.searchParams, line = searchParams.get("line"), id = searchParams.get("id"), quantity = parseInt(searchParams.get("quantity"));
      this.dispatchEvent(new CustomEvent("line-item-quantity:change:start", { bubbles: true, detail: { newLineQuantity: quantity } }));
      const response = await fetch(`${window.themeVariables.routes.cartChangeUrl}.js`, {
        body: JSON.stringify({ line, id, quantity, sections: ["mini-cart"] }),
        credentials: "same-origin",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const cartContent = await response.json();
      this.dispatchEvent(new CustomEvent("line-item-quantity:change:end", { bubbles: true, detail: { cart: cartContent, newLineQuantity: quantity } }));
      document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
        bubbles: true,
        detail: {
          cart: cartContent
        }
      }));
      document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
        bubbles: true,
        detail: {
          cart: cartContent,
          replacementDelay: quantity === 0 ? 600 : 750
        }
      }));
    }
  };
  window.customElements.define("line-item-quantity", LineItemQuantity);

  // js/custom-element/section/cart/line-item.js
  var LineItem = class extends HTMLElement {
    connectedCallback() {
      this.lineItemLoader = this.querySelector(".line-item__loader");
      this.addEventListener("line-item-quantity:change:start", this._onQuantityStart.bind(this));
      this.addEventListener("line-item-quantity:change:end", this._onQuantityEnd.bind(this));
    }
    _onQuantityStart() {
      if (!this.lineItemLoader) {
        return;
      }
      this.lineItemLoader.hidden = false;
      this.lineItemLoader.firstElementChild.hidden = false;
      this.lineItemLoader.lastElementChild.hidden = true;
    }
    async _onQuantityEnd(event) {
      if (event.detail.cart["item_count"] === 0) {
        return;
      }
      if (this.lineItemLoader) {
        await this.lineItemLoader.firstElementChild.animate({ opacity: [1, 0], transform: ["translateY(0)", "translateY(-10px)"] }, 75).finished;
        this.lineItemLoader.firstElementChild.hidden = true;
        if (event.detail.newLineQuantity === 0) {
          await this.animate({ opacity: [1, 0], height: [`${this.clientHeight}px`, 0] }, { duration: 300, easing: "ease" }).finished;
          this.remove();
        } else {
          this.lineItemLoader.lastElementChild.hidden = false;
          await this.lineItemLoader.lastElementChild.animate({ opacity: [0, 1], transform: ["translateY(10px)", "translateY(0)"] }, { duration: 75, endDelay: 300 }).finished;
          this.lineItemLoader.hidden = true;
        }
      }
    }
  };
  window.customElements.define("line-item", LineItem);

  // js/custom-element/section/cart/notification.js
  var CartNotification = class extends CustomHTMLElement {
    connectedCallback() {
      this.rootDelegate.on("cart-notification:show", this._onShow.bind(this), !this.hasAttribute("global"));
      this.delegate.on("click", '[data-action="close"]', (event) => {
        event.stopPropagation();
        this.hidden = true;
      });
      this.addEventListener("mouseenter", this.stopTimer.bind(this));
      this.addEventListener("mouseleave", this.startTimer.bind(this));
      window.addEventListener("pagehide", () => this.hidden = true);
    }
    set hidden(value) {
      if (!value) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
      this.toggleAttribute("hidden", value);
    }
    get isInsideDrawer() {
      return this.classList.contains("cart-notification--drawer");
    }
    stopTimer() {
      clearTimeout(this._timeout);
    }
    startTimer() {
      this._timeout = setTimeout(() => this.hidden = true, 3e3);
    }
    _onShow(event) {
      if (this.isInsideDrawer && !this.closest(".drawer").open) {
        return;
      }
      if (this.hasAttribute("global") && event.detail.status === "success" && window.themeVariables.settings.cartType === "drawer") {
        return;
      }
      event.stopPropagation();
      let closeButtonHtml = "";
      if (!this.isInsideDrawer) {
        closeButtonHtml = `
        <button class="cart-notification__close tap-area hidden-phone" data-action="close">
          <span class="visually-hidden">${window.themeVariables.strings.accessibilityClose}</span>
          <svg focusable="false" width="14" height="14" class="icon icon--close icon--inline" viewBox="0 0 14 14">
            <path d="M13 13L1 1M13 1L1 13" stroke="currentColor" stroke-width="2" fill="none"></path>
          </svg>
        </button>
      `;
      }
      if (event.detail.status === "success") {
        this.classList.remove("cart-notification--error");
        this.innerHTML = `
        <div class="cart-notification__overflow">
          <div class="container">
            <div class="cart-notification__wrapper">
              <svg focusable="false" width="20" height="20" class="icon icon--cart-notification" viewBox="0 0 20 20">
                <rect width="20" height="20" rx="10" fill="currentColor"></rect>
                <path d="M6 10L9 13L14 7" fill="none" stroke="rgb(var(--success-color))" stroke-width="2"></path>
              </svg>
              
              <div class="cart-notification__text-wrapper">
                <span class="cart-notification__heading heading hidden-phone">${window.themeVariables.strings.cartItemAdded}</span>
                <span class="cart-notification__heading heading hidden-tablet-and-up">${window.themeVariables.strings.cartItemAddedShort}</span>
				<a href="" class="noti-view">View Cart</a>
              </div>
              
              ${closeButtonHtml}
            </div>
          </div>
        </div>
      `;
        $('.noti-view').click(function(event) {
          	event.preventDefault();
            $('.drawer--quick-buy').attr('open', false);
            $('.header__cart').attr('aria-expanded', true)
        });
      } else {
        this.classList.add("cart-notification--error");
        this.innerHTML = `
        <div class="cart-notification__overflow">
          <div class="container">
            <div class="cart-notification__wrapper">
              <svg focusable="false" width="20" height="20" class="icon icon--cart-notification" viewBox="0 0 20 20">
                <rect width="20" height="20" rx="10" fill="currentColor"></rect>
                <path d="M9.6748 13.2798C9.90332 13.0555 10.1763 12.9434 10.4937 12.9434C10.811 12.9434 11.0819 13.0555 11.3062 13.2798C11.5347 13.5041 11.6489 13.7749 11.6489 14.0923C11.6489 14.4097 11.5347 14.6847 11.3062 14.9175C11.0819 15.146 10.811 15.2603 10.4937 15.2603C10.1763 15.2603 9.90332 15.146 9.6748 14.9175C9.45052 14.6847 9.33838 14.4097 9.33838 14.0923C9.33838 13.7749 9.45052 13.5041 9.6748 13.2798ZM9.56689 12.1816V5.19922H11.4141V12.1816H9.56689Z" fill="rgb(var(--error-color))"></path>
              </svg>
              
              <div class="cart-notification__text-wrapper">
                <span class="cart-notification__heading heading">${event.detail.error}</span>
              </div>
              
              ${closeButtonHtml}
            </div>
          </div>
        </div>
      `;
      }
      this.clientHeight;
      this.hidden = false;
    }
  };
  window.customElements.define("cart-notification", CartNotification);

  // js/custom-element/section/cart/shipping-estimator.js
  var ShippingEstimator = class extends HTMLElement {
    connectedCallback() {
      this.submitButton = this.querySelector('[type="button"]');
      this.submitButton.addEventListener("click", this._estimateShipping.bind(this));
    }
    async _estimateShipping() {
      const zip = this.querySelector('[name="shipping-estimator[zip]"]').value, country = this.querySelector('[name="shipping-estimator[country]"]').value, province = this.querySelector('[name="shipping-estimator[province]"]').value;
      this.submitButton.setAttribute("aria-busy", "true");
      const prepareResponse = await fetch(`${window.themeVariables.routes.cartUrl}/prepare_shipping_rates.json?shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${province}`, { method: "POST" });
      if (prepareResponse.ok) {
        const shippingRates = await this._getAsyncShippingRates(zip, country, province);
        this._formatShippingRates(shippingRates);
      } else {
        const jsonError = await prepareResponse.json();
        this._formatError(jsonError);
      }
      this.submitButton.removeAttribute("aria-busy");
    }
    async _getAsyncShippingRates(zip, country, province) {
      const response = await fetch(`${window.themeVariables.routes.cartUrl}/async_shipping_rates.json?shipping_address[zip]=${zip}&shipping_address[country]=${country}&shipping_address[province]=${province}`);
      const responseAsText = await response.text();
      if (responseAsText === "null") {
        return this._getAsyncShippingRates(zip, country, province);
      } else {
        return JSON.parse(responseAsText)["shipping_rates"];
      }
    }
    _formatShippingRates(shippingRates) {
      var _a;
      (_a = this.querySelector(".shipping-estimator__results")) == null ? void 0 : _a.remove();
      let formattedShippingRates = "";
      shippingRates.forEach((shippingRate) => {
        formattedShippingRates += `<li>${shippingRate["presentment_name"]}: ${formatMoney(parseFloat(shippingRate["price"]) * 100)}</li>`;
      });
      const html = `
      <div class="shipping-estimator__results">
        <p>${shippingRates.length === 0 ? window.themeVariables.strings.shippingEstimatorNoResults : shippingRates.length === 1 ? window.themeVariables.strings.shippingEstimatorOneResult : window.themeVariables.strings.shippingEstimatorMultipleResults}</p>
        ${formattedShippingRates === "" ? "" : `<ul class="unordered-list">${formattedShippingRates}</ul>`}
      </div>
    `;
      this.insertAdjacentHTML("beforeend", html);
    }
    _formatError(errors) {
      var _a;
      (_a = this.querySelector(".shipping-estimator__results")) == null ? void 0 : _a.remove();
      let formattedShippingRates = "";
      Object.keys(errors).forEach((errorKey) => {
        formattedShippingRates += `<li>${errorKey} ${errors[errorKey]}</li>`;
      });
      const html = `
      <div class="shipping-estimator__results">
        <p>${window.themeVariables.strings.shippingEstimatorError}</p>
        <ul class="unordered-list">${formattedShippingRates}</ul>
      </div>
    `;
      this.insertAdjacentHTML("beforeend", html);
    }
  };
  window.customElements.define("shipping-estimator", ShippingEstimator);

  // js/custom-element/section/product/review-link.js
  var ReviewLink = class extends HTMLAnchorElement {
    constructor() {
      super();
      this.addEventListener("click", this._onClick.bind(this));
    }
    _onClick() {
      const shopifyReviewsElement = document.getElementById("shopify-product-reviews");
      if (!shopifyReviewsElement) {
        return;
      }
      if (window.matchMedia(window.themeVariables.breakpoints.pocket).matches) {
        shopifyReviewsElement.closest("collapsible-content").open = true;
      } else {
        document.querySelector(`[aria-controls="${shopifyReviewsElement.closest(".product-tabs__tab-item-wrapper").id}"]`).click();
      }
    }
  };
  window.customElements.define("review-link", ReviewLink, { extends: "a" });

  // js/custom-element/section/product/sticky-form.js
  var ProductStickyForm = class extends HTMLElement {
    connectedCallback() {
      var _a;
      (_a = document.getElementById(this.getAttribute("form-id"))) == null ? void 0 : _a.addEventListener("variant:changed", this._onVariantChanged.bind(this));
      this.imageElement = this.querySelector(".product-sticky-form__image");
      this.priceElement = this.querySelector(".product-sticky-form__price");
      this.unitPriceElement = this.querySelector(".product-sticky-form__unit-price");
      this._setupVisibilityObservers();
    }
    disconnectedCallback() {
      this.intersectionObserver.disconnect();
    }
    set hidden(value) {
      this.toggleAttribute("hidden", value);
      if (value) {
        document.documentElement.style.removeProperty("--cart-notification-offset");
      } else {
        document.documentElement.style.setProperty("--cart-notification-offset", `${this.clientHeight}px`);
      }
    }
    _onVariantChanged(event) {
      const variant = event.detail.variant, currencyFormat = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : window.themeVariables.settings.moneyFormat;
      if (!variant) {
        return;
      }
      if (this.priceElement) {
        this.priceElement.innerHTML = formatMoney(variant["price"], currencyFormat);
      }
      if (this.unitPriceElement) {
        this.unitPriceElement.style.display = variant["unit_price_measurement"] ? "block" : "none";
        if (variant["unit_price_measurement"]) {
          let referenceValue = "";
          if (variant["unit_price_measurement"]["reference_value"] !== 1) {
            referenceValue = `<span class="unit-price-measurement__reference-value">${variant["unit_price_measurement"]["reference_value"]}</span>`;
          }
          this.unitPriceElement.innerHTML = `
          <div class="unit-price-measurement">
            <span class="unit-price-measurement__price">${formatMoney(variant["unit_price"])}</span>
            <span class="unit-price-measurement__separator">/</span>
            ${referenceValue}
            <span class="unit-price-measurement__reference-unit">${variant["unit_price_measurement"]["reference_unit"]}</span>
          </div>
        `;
        }
      }
      if (!this.imageElement || !variant || !variant["featured_media"]) {
        return;
      }
      const featuredMedia = variant["featured_media"];
      if (featuredMedia["alt"]) {
        this.imageElement.setAttribute("alt", featuredMedia["alt"]);
      }
      this.imageElement.setAttribute("width", featuredMedia["preview_image"]["width"]);
      this.imageElement.setAttribute("height", featuredMedia["preview_image"]["height"]);
      this.imageElement.setAttribute("src", getSizedMediaUrl(featuredMedia, "165x"));
      this.imageElement.setAttribute("srcset", getMediaSrcset(featuredMedia, [55, 110, 165]));
    }
    _setupVisibilityObservers() {
      const paymentContainerElement = document.getElementById("MainPaymentContainer"), footerElement = document.querySelector(".shopify-section--footer"), stickyHeaderOffset = getStickyHeaderOffset();
      this._isFooterVisible = this._isPaymentContainerPassed = false;
      this.intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === footerElement) {
            this._isFooterVisible = entry.intersectionRatio > 0;
          }
          if (entry.target === paymentContainerElement) {
            const boundingRect = paymentContainerElement.getBoundingClientRect();
            this._isPaymentContainerPassed = entry.intersectionRatio === 0 && boundingRect.top + boundingRect.height <= stickyHeaderOffset;
          }
        });
        if (window.matchMedia(window.themeVariables.breakpoints.pocket).matches) {
          this.hidden = !this._isPaymentContainerPassed || this._isFooterVisible;
        } else {
          this.hidden = !this._isPaymentContainerPassed;
        }
      }, { rootMargin: `-${stickyHeaderOffset}px 0px 0px 0px` });
      this.intersectionObserver.observe(paymentContainerElement);
      this.intersectionObserver.observe(footerElement);
    }
  };
  window.customElements.define("product-sticky-form", ProductStickyForm);

  // js/index.js
  (() => {
    new InputBindingManager();
  })();
  (() => {
    if (Shopify.designMode) {
      document.addEventListener("shopify:section:load", () => {
        if (window.SPR) {
          window.SPR.initDomEls();
          window.SPR.loadProducts();
        }
      });
    }
    window.SPRCallbacks = {
      onFormSuccess: (event, info) => {
        document.getElementById(`form_${info.id}`).classList.add("spr-form--success");
      }
    };
  })();
  (() => {
    let previousClientWidth = window.visualViewport ? window.visualViewport.width : document.documentElement.clientWidth;
    let setViewportProperty = () => {
      const clientWidth = window.visualViewport ? window.visualViewport.width : document.documentElement.clientWidth, clientHeight = window.visualViewport ? window.visualViewport.height : document.documentElement.clientHeight;
      if (clientWidth === previousClientWidth) {
        return;
      }
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--window-height", clientHeight + "px");
        previousClientWidth = clientWidth;
      });
    };
    setViewportProperty();
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setViewportProperty);
    } else {
      window.addEventListener("resize", setViewportProperty);
    }
  })();
  (() => {
    let documentDelegate = new main_default(document.body);
    documentDelegate.on("keyup", 'input:not([type="checkbox"]):not([type="radio"]), textarea', (event, target) => {
      target.classList.toggle("is-filled", target.value !== "");
    });
    documentDelegate.on("change", "select", (event, target) => {
      target.parentNode.classList.toggle("is-filled", target.value !== "");
    });
  })();
  (() => {
    document.querySelectorAll(".rte table").forEach((table) => {
      table.outerHTML = '<div class="table-wrapper">' + table.outerHTML + "</div>";
    });
    document.querySelectorAll(".rte iframe").forEach((iframe) => {
      if (iframe.src.indexOf("youtube") !== -1 || iframe.src.indexOf("youtu.be") !== -1 || iframe.src.indexOf("vimeo") !== -1) {
        iframe.outerHTML = '<div class="video-wrapper">' + iframe.outerHTML + "</div>";
      }
    });
  })();
  (() => {
    let documentDelegate = new main_default(document.documentElement);
    documentDelegate.on("click", "[data-smooth-scroll]", (event, target) => {
      const elementToScroll = document.querySelector(target.getAttribute("href"));
      if (elementToScroll) {
        event.preventDefault();
        elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  })();
  (() => {
    document.addEventListener("keyup", function(event) {
      if (event.key === "Tab") {
        document.body.classList.remove("no-focus-outline");
        document.body.classList.add("focus-outline");
      }
    });
  })();
})();




Shopify.money_format = "₹ {{amount_no_decimals}}";
Shopify.money_format2 = "Rs. {{amount}}";
Shopify.formatMoney = function(cents, format) {
  if (typeof cents == 'string') { cents = cents.replace('.',''); }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = (format || this.money_format);

  function defaultOption(opt, def) {
     return (typeof opt == 'undefined' ? def : opt);
  }

  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal   = defaultOption(decimal, '.');

    if (isNaN(number) || number == null) { return 0; }

    number = (number/100.0).toFixed(precision);

    var parts   = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents   = parts[1] ? (decimal + parts[1]) : '';

    return dollars + cents;
  }

  switch(formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
};




/*!
* focus-trap 6.7.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/


/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?e(Object(r),!0).forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(r,t))})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var n="transitionend";function o(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null},jQueryDetection:function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};_.jQueryDetection(),g.fn.emulateTransitionEnd=o,g.event.special[_.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=g.fn[r],f={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},d="alert",m="fade",p="show",v=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,a),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n=n||g(t).closest("."+d)[0]},t._triggerCloseEvent=function(t){var e=g.Event(f.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(p),g(e).hasClass(m)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(a);e||(e=new i(this),t.data(a,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',v._handleDismiss(new v)),g.fn[r]=v._jQueryInterface,g.fn[r].Constructor=v,g.fn[r].noConflict=function(){return g.fn[r]=h,v._jQueryInterface};var y="button",E="bs.button",C="."+E,T=".data-api",b=g.fn[y],S="active",D="btn",I="focus",w='[data-toggle^="button"]',A='[data-toggle="buttons"]',N='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',k='input:not([type="hidden"])',P=".active",L=".btn",j={CLICK_DATA_API:"click"+C+T,FOCUS_BLUR_DATA_API:"focus"+C+T+" blur"+C+T,LOAD_DATA_API:"load"+C+T},H=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(A)[0];if(n){var i=this._element.querySelector(k);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(P);o&&g(o).removeClass(S)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(S)&&(t=!1):t=!1;t&&(i.checked=!this._element.classList.contains(S),g(i).trigger("change")),i.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S))},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();g(document).on(j.CLICK_DATA_API,w,function(t){var e=t.target;if(g(e).hasClass(D)||(e=g(e).closest(L)[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var n=e.querySelector(k);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void t.preventDefault();H._jQueryInterface.call(g(e),"toggle")}}).on(j.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(L)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g(window).on(j.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(O)),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(k);o.checked||o.hasAttribute("checked")?i.classList.add(S):i.classList.remove(S)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll(N))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(S):a.classList.remove(S)}}),g.fn[y]=H._jQueryInterface,g.fn[y].Constructor=H,g.fn[y].noConflict=function(){return g.fn[y]=b,H._jQueryInterface};var R="carousel",x="bs.carousel",F="."+x,U=".data-api",W=g.fn[R],q={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",Q="prev",B="left",V="right",Y={SLIDE:"slide"+F,SLID:"slid"+F,KEYDOWN:"keydown"+F,MOUSEENTER:"mouseenter"+F,MOUSELEAVE:"mouseleave"+F,TOUCHSTART:"touchstart"+F,TOUCHMOVE:"touchmove"+F,TOUCHEND:"touchend"+F,POINTERDOWN:"pointerdown"+F,POINTERUP:"pointerup"+F,DRAG_START:"dragstart"+F,LOAD_DATA_API:"load"+F+U,CLICK_DATA_API:"click"+F+U},z="carousel",X="active",$="slide",G="carousel-item-right",J="carousel-item-left",Z="carousel-item-next",tt="carousel-item-prev",et="pointer-event",nt=".active",it=".active.carousel-item",ot=".carousel-item",rt=".carousel-item img",st=".carousel-item-next, .carousel-item-prev",at=".carousel-indicators",lt="[data-slide], [data-slide-to]",ct='[data-ride="carousel"]',ht={TOUCH:"touch",PEN:"pen"},ut=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(at),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(K)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(Q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(st)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(it);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Y.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?K:Q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(F),g.removeData(this._element,x),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},q,{},t),_.typeCheckConfig(R,t,M),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;(this.touchDeltaX=0)<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Y.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Y.MOUSEENTER,function(t){return e.pause(t)}).on(Y.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var n=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]?e.touchStartX=t.originalEvent.clientX:e._pointerEvent||(e.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){e._pointerEvent&&ht[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval))};g(this._element.querySelectorAll(rt)).on(Y.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Y.POINTERDOWN,function(t){return n(t)}),g(this._element).on(Y.POINTERUP,function(t){return i(t)}),this._element.classList.add(et)):(g(this._element).on(Y.TOUCHSTART,function(t){return n(t)}),g(this._element).on(Y.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&1<t.originalEvent.touches.length?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX}(t)}),g(this._element).on(Y.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(ot)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===K,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(it)),o=g.Event(Y.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(nt));g(e).removeClass(X);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(X)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(it),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===K?(n=J,i=Z,B):(n=G,i=tt,V),l&&g(l).hasClass(X))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Y.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass($)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(X),g(s).removeClass(X+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(X),g(l).addClass(X),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(x),e=l({},q,{},g(this).data());"object"==typeof i&&(e=l({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(x,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(z)){var i=l({},g(n).data(),{},g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(x).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return q}}]),r}();g(document).on(Y.CLICK_DATA_API,lt,ut._dataApiClickHandler),g(window).on(Y.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ct)),e=0,n=t.length;e<n;e++){var i=g(t[e]);ut._jQueryInterface.call(i,i.data())}}),g.fn[R]=ut._jQueryInterface,g.fn[R].Constructor=ut,g.fn[R].noConflict=function(){return g.fn[R]=W,ut._jQueryInterface};var ft="collapse",dt="bs.collapse",gt="."+dt,_t=g.fn[ft],mt={toggle:!0,parent:""},pt={toggle:"boolean",parent:"(string|element)"},vt={SHOW:"show"+gt,SHOWN:"shown"+gt,HIDE:"hide"+gt,HIDDEN:"hidden"+gt,CLICK_DATA_API:"click"+gt+".data-api"},yt="show",Et="collapse",Ct="collapsing",Tt="collapsed",bt="width",St="height",Dt=".show, .collapsing",It='[data-toggle="collapse"]',wt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(It)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(yt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(yt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Dt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(Et)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(dt))&&e._isTransitioning))){var i=g.Event(vt.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(dt,null));var o=this._getDimension();g(this._element).removeClass(Et).addClass(Ct),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Tt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(Ct).addClass(Et).addClass(yt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(vt.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(yt)){var e=g.Event(vt.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(Ct).removeClass(Et).removeClass(yt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(yt)||g(r).addClass(Tt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(Ct).addClass(Et).trigger(vt.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,dt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},mt,{},t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ft,t,pt),t},t._getDimension=function(){return g(this._element).hasClass(bt)?bt:St},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(yt);e.length&&g(e).toggleClass(Tt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(dt),n=l({},mt,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(dt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return mt}}]),a}();g(document).on(vt.CLICK_DATA_API,It,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(dt)?"toggle":n.data();wt._jQueryInterface.call(t,e)})}),g.fn[ft]=wt._jQueryInterface,g.fn[ft].Constructor=wt,g.fn[ft].noConflict=function(){return g.fn[ft]=_t,wt._jQueryInterface};var At="dropdown",Nt="bs.dropdown",Ot="."+Nt,kt=".data-api",Pt=g.fn[At],Lt=new RegExp("38|40|27"),jt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+kt,KEYDOWN_DATA_API:"keydown"+Ot+kt,KEYUP_DATA_API:"keyup"+Ot+kt},Ht="disabled",Rt="show",xt="dropup",Ft="dropright",Ut="dropleft",Wt="dropdown-menu-right",qt="position-static",Mt='[data-toggle="dropdown"]',Kt=".dropdown form",Qt=".dropdown-menu",Bt=".navbar-nav",Vt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Yt="top-start",zt="top-end",Xt="bottom-start",$t="bottom-end",Gt="right-start",Jt="left-start",Zt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},te={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},ee=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)){var t=g(this._menu).hasClass(Rt);c._clearMenus(),t||this.show(!0)}},t.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||g(this._element).hasClass(Ht)||g(this._menu).hasClass(Rt))){var e={relatedTarget:this._element},n=g.Event(jt.SHOW,e),i=c._getParentFromElement(this._element);if(g(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(i).addClass(qt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(i).closest(Bt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Rt),g(i).toggleClass(Rt).trigger(g.Event(jt.SHOWN,e))}}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Ht)&&g(this._menu).hasClass(Rt)){var t={relatedTarget:this._element},e=g.Event(jt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),g(this._menu).toggleClass(Rt),g(n).toggleClass(Rt).trigger(g.Event(jt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Nt),g(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(jt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,{},g(this._element).data(),{},t),_.typeCheckConfig(At,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(Qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Xt;return t.hasClass(xt)?(e=Yt,g(this._menu).hasClass(Wt)&&(e=zt)):t.hasClass(Ft)?e=Gt:t.hasClass(Ut)?e=Jt:g(this._menu).hasClass(Wt)&&(e=$t),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),l({},t,{},this._config.popperConfig)},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Nt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Nt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Mt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Nt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Rt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(jt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),g(a).removeClass(Rt),g(o).removeClass(Rt).trigger(g.Event(jt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(Qt).length)):Lt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Ht))){var e=c._getParentFromElement(this),n=g(e).hasClass(Rt);if(n||27!==t.which)if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Vt)).filter(function(t){return g(t).is(":visible")});if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Mt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Zt}},{key:"DefaultType",get:function(){return te}}]),c}();g(document).on(jt.KEYDOWN_DATA_API,Mt,ee._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API,Qt,ee._dataApiKeydownHandler).on(jt.CLICK_DATA_API+" "+jt.KEYUP_DATA_API,ee._clearMenus).on(jt.CLICK_DATA_API,Mt,function(t){t.preventDefault(),t.stopPropagation(),ee._jQueryInterface.call(g(this),"toggle")}).on(jt.CLICK_DATA_API,Kt,function(t){t.stopPropagation()}),g.fn[At]=ee._jQueryInterface,g.fn[At].Constructor=ee,g.fn[At].noConflict=function(){return g.fn[At]=Pt,ee._jQueryInterface};var ne="modal",ie="bs.modal",oe="."+ie,re=g.fn[ne],se={backdrop:!0,keyboard:!0,focus:!0,show:!0},ae={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},le={HIDE:"hide"+oe,HIDE_PREVENTED:"hidePrevented"+oe,HIDDEN:"hidden"+oe,SHOW:"show"+oe,SHOWN:"shown"+oe,FOCUSIN:"focusin"+oe,RESIZE:"resize"+oe,CLICK_DISMISS:"click.dismiss"+oe,KEYDOWN_DISMISS:"keydown.dismiss"+oe,MOUSEUP_DISMISS:"mouseup.dismiss"+oe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+oe,CLICK_DATA_API:"click"+oe+".data-api"},ce="modal-dialog-scrollable",he="modal-scrollbar-measure",ue="modal-backdrop",fe="modal-open",de="fade",ge="show",_e="modal-static",me=".modal-dialog",pe=".modal-body",ve='[data-toggle="modal"]',ye='[data-dismiss="modal"]',Ee=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ce=".sticky-top",Te=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(me),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(de)&&(this._isTransitioning=!0);var n=g.Event(le.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(le.CLICK_DISMISS,ye,function(t){return e.hide(t)}),g(this._dialog).on(le.MOUSEDOWN_DISMISS,function(){g(e._element).one(le.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(le.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(de);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(le.FOCUSIN),g(this._element).removeClass(ge),g(this._element).off(le.CLICK_DISMISS),g(this._dialog).off(le.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(oe)}),g(document).off(le.FOCUSIN),g.removeData(this._element,ie),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},se,{},t),_.typeCheckConfig(ne,t,ae),t},t._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=g.Event(le.HIDE_PREVENTED);if(g(this._element).trigger(e),e.defaultPrevented)return;this._element.classList.add(_e);var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t._element.classList.remove(_e)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},t._showElement=function(t){var e=this,n=g(this._element).hasClass(de),i=this._dialog?this._dialog.querySelector(pe):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(ce)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ge),this._config.focus&&this._enforceFocus();function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(r)}var r=g.Event(le.SHOWN,{relatedTarget:t});if(n){var s=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},t._enforceFocus=function(){var e=this;g(document).off(le.FOCUSIN).on(le.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(le.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||g(this._element).off(le.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(le.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(le.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(fe),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(le.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(de)?de:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ue,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(le.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ge),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ge);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(de)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(Ee)),e=[].slice.call(document.querySelectorAll(Ce));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(fe)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(Ee));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+Ce));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=he,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(ie),e=l({},se,{},g(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(ie,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return se}}]),o}();g(document).on(le.CLICK_DATA_API,ve,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(ie)?"toggle":l({},g(e).data(),{},g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(le.SHOW,function(t){t.isDefaultPrevented()||r.one(le.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});Te._jQueryInterface.call(g(e),o,this)}),g.fn[ne]=Te._jQueryInterface,g.fn[ne].Constructor=Te,g.fn[ne].noConflict=function(){return g.fn[ne]=re,Te._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Se={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},De=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Ie=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function we(t,r,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(t){var e=a[t],n=e.nodeName.toLowerCase();if(-1===s.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e),"continue";var i=[].slice.call(e.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(De)||t.nodeValue.match(Ie));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(t,o)&&e.removeAttribute(t.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var Ae="tooltip",Ne="bs.tooltip",Oe="."+Ne,ke=g.fn[Ae],Pe="bs-tooltip",Le=new RegExp("(^|\\s)"+Pe+"\\S+","g"),je=["sanitize","whiteList","sanitizeFn"],He={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Re={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Se,popperConfig:null},Fe="show",Ue="out",We={HIDE:"hide"+Oe,HIDDEN:"hidden"+Oe,SHOW:"show"+Oe,SHOWN:"shown"+Oe,INSERTED:"inserted"+Oe,CLICK:"click"+Oe,FOCUSIN:"focusin"+Oe,FOCUSOUT:"focusout"+Oe,MOUSEENTER:"mouseenter"+Oe,MOUSELEAVE:"mouseleave"+Oe},qe="fade",Me="show",Ke=".tooltip-inner",Qe=".arrow",Be="hover",Ve="focus",Ye="click",ze="manual",Xe=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Me))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(qe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,this._getPopperConfig(a)),g(o).addClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===Ue&&e._leave(null,e)};if(g(this.tip).hasClass(qe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){function e(){n._hoverState!==Fe&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),g(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=g.Event(this.constructor.Event.HIDE);if(g(this.element).trigger(o),!o.isDefaultPrevented()){if(g(i).removeClass(Me),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ye]=!1,this._activeTrigger[Ve]=!1,this._activeTrigger[Be]=!1,g(this.tip).hasClass(qe)){var r=_.getTransitionDurationFromElement(i);g(i).one(_.TRANSITION_END,e).emulateTransitionEnd(r)}else e();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Pe+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ke)),this.getTitle()),g(t).removeClass(qe+" "+Me)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=we(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t=t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},t._getPopperConfig=function(t){var e=this;return l({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Qe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Re[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==ze){var e=t===Be?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Be?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),this._hideModalHandler=function(){i.element&&i.hide()},g(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ve:Be]=!0),g(e.getTipElement()).hasClass(Me)||e._hoverState===Fe?e._hoverState=Fe:(clearTimeout(e._timeout),e._hoverState=Fe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===Fe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ve:Be]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=Ue,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===Ue&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==je.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(Ae,t,this.constructor.DefaultType),t.sanitize&&(t.template=we(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Le);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(qe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ne),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ne,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Ae}},{key:"DATA_KEY",get:function(){return Ne}},{key:"Event",get:function(){return We}},{key:"EVENT_KEY",get:function(){return Oe}},{key:"DefaultType",get:function(){return He}}]),i}();g.fn[Ae]=Xe._jQueryInterface,g.fn[Ae].Constructor=Xe,g.fn[Ae].noConflict=function(){return g.fn[Ae]=ke,Xe._jQueryInterface};var $e="popover",Ge="bs.popover",Je="."+Ge,Ze=g.fn[$e],tn="bs-popover",en=new RegExp("(^|\\s)"+tn+"\\S+","g"),nn=l({},Xe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),on=l({},Xe.DefaultType,{content:"(string|element|function)"}),rn="fade",sn="show",an=".popover-header",ln=".popover-body",cn={HIDE:"hide"+Je,HIDDEN:"hidden"+Je,SHOW:"show"+Je,SHOWN:"shown"+Je,INSERTED:"inserted"+Je,CLICK:"click"+Je,FOCUSIN:"focusin"+Je,FOCUSOUT:"focusout"+Je,MOUSEENTER:"mouseenter"+Je,MOUSELEAVE:"mouseleave"+Je},hn=function(t){function i(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}(i,t);var e=i.prototype;return e.isWithContent=function(){return this.getTitle()||this._getContent()},e.addAttachmentClass=function(t){g(this.getTipElement()).addClass(tn+"-"+t)},e.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},e.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(an),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ln),e),t.removeClass(rn+" "+sn)},e._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},e._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(en);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ge),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ge,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return nn}},{key:"NAME",get:function(){return $e}},{key:"DATA_KEY",get:function(){return Ge}},{key:"Event",get:function(){return cn}},{key:"EVENT_KEY",get:function(){return Je}},{key:"DefaultType",get:function(){return on}}]),i}(Xe);g.fn[$e]=hn._jQueryInterface,g.fn[$e].Constructor=hn,g.fn[$e].noConflict=function(){return g.fn[$e]=Ze,hn._jQueryInterface};var un="scrollspy",fn="bs.scrollspy",dn="."+fn,gn=g.fn[un],_n={offset:10,method:"auto",target:""},mn={offset:"number",method:"string",target:"(string|element)"},pn={ACTIVATE:"activate"+dn,SCROLL:"scroll"+dn,LOAD_DATA_API:"load"+dn+".data-api"},vn="dropdown-item",yn="active",En='[data-spy="scroll"]',Cn=".nav, .list-group",Tn=".nav-link",bn=".nav-item",Sn=".list-group-item",Dn=".dropdown",In=".dropdown-item",wn=".dropdown-toggle",An="offset",Nn="position",On=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+Tn+","+this._config.target+" "+Sn+","+this._config.target+" "+In,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(pn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?An:Nn,o="auto"===this._config.method?t:this._config.method,r=o===Nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,fn),g(this._scrollElement).off(dn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},_n,{},"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(un),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(un,t,mn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(vn)?(n.closest(Dn).find(wn).addClass(yn),n.addClass(yn)):(n.addClass(yn),n.parents(Cn).prev(Tn+", "+Sn).addClass(yn),n.parents(Cn).prev(bn).children(Tn).addClass(yn)),g(this._scrollElement).trigger(pn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(yn)}).forEach(function(t){return t.classList.remove(yn)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(fn);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(fn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return _n}}]),n}();g(window).on(pn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(En)),e=t.length;e--;){var n=g(t[e]);On._jQueryInterface.call(n,n.data())}}),g.fn[un]=On._jQueryInterface,g.fn[un].Constructor=On,g.fn[un].noConflict=function(){return g.fn[un]=gn,On._jQueryInterface};var kn="bs.tab",Pn="."+kn,Ln=g.fn.tab,jn={HIDE:"hide"+Pn,HIDDEN:"hidden"+Pn,SHOW:"show"+Pn,SHOWN:"shown"+Pn,CLICK_DATA_API:"click"+Pn+".data-api"},Hn="dropdown-menu",Rn="active",xn="disabled",Fn="fade",Un="show",Wn=".dropdown",qn=".nav, .list-group",Mn=".active",Kn="> li > .active",Qn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Bn=".dropdown-toggle",Vn="> .dropdown-menu .active",Yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Rn)||g(this._element).hasClass(xn))){var t,i,e=g(this._element).closest(qn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Kn:Mn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(jn.HIDE,{relatedTarget:this._element}),a=g.Event(jn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(jn.HIDDEN,{relatedTarget:n._element}),e=g.Event(jn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,kn),this._element=null},t._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Mn):g(e).find(Kn))[0],s=n&&r&&g(r).hasClass(Fn);if(r&&s){var a=_.getTransitionDurationFromElement(r);g(r).removeClass(Un).one(_.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Rn);var i=g(e.parentNode).find(Vn)[0];i&&g(i).removeClass(Rn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Rn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(Fn)&&t.classList.add(Un),t.parentNode&&g(t.parentNode).hasClass(Hn)){var o=g(t).closest(Wn)[0];if(o){var r=[].slice.call(o.querySelectorAll(Bn));g(r).addClass(Rn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(kn);if(e||(e=new i(this),t.data(kn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();g(document).on(jn.CLICK_DATA_API,Qn,function(t){t.preventDefault(),Yn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Yn._jQueryInterface,g.fn.tab.Constructor=Yn,g.fn.tab.noConflict=function(){return g.fn.tab=Ln,Yn._jQueryInterface};var zn="toast",Xn="bs.toast",$n="."+Xn,Gn=g.fn[zn],Jn={CLICK_DISMISS:"click.dismiss"+$n,HIDE:"hide"+$n,HIDDEN:"hidden"+$n,SHOW:"show"+$n,SHOWN:"shown"+$n},Zn="fade",ti="hide",ei="show",ni="showing",ii={animation:"boolean",autohide:"boolean",delay:"number"},oi={animation:!0,autohide:!0,delay:500},ri='[data-dismiss="toast"]',si=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this,e=g.Event(Jn.SHOW);if(g(this._element).trigger(e),!e.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Zn);var n=function(){t._element.classList.remove(ni),t._element.classList.add(ei),g(t._element).trigger(Jn.SHOWN),t._config.autohide&&(t._timeout=setTimeout(function(){t.hide()},t._config.delay))};if(this._element.classList.remove(ti),_.reflow(this._element),this._element.classList.add(ni),this._config.animation){var i=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},t.hide=function(){if(this._element.classList.contains(ei)){var t=g.Event(Jn.HIDE);g(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(ei)&&this._element.classList.remove(ei),g(this._element).off(Jn.CLICK_DISMISS),g.removeData(this._element,Xn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},oi,{},g(this._element).data(),{},"object"==typeof t&&t?t:{}),_.typeCheckConfig(zn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Jn.CLICK_DISMISS,ri,function(){return t.hide()})},t._close=function(){function t(){e._element.classList.add(ti),g(e._element).trigger(Jn.HIDDEN)}var e=this;if(this._element.classList.remove(ei),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Xn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Xn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return ii}},{key:"Default",get:function(){return oi}}]),i}();g.fn[zn]=si._jQueryInterface,g.fn[zn].Constructor=si,g.fn[zn].noConflict=function(){return g.fn[zn]=Gn,si._jQueryInterface},t.Alert=v,t.Button=H,t.Carousel=ut,t.Collapse=wt,t.Dropdown=ee,t.Modal=Te,t.Popover=hn,t.Scrollspy=On,t.Tab=Yn,t.Toast=si,t.Tooltip=Xe,t.Util=_,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map


/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);




