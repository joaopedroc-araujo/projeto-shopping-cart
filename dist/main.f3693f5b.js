parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Pa8j":[function(require,module,exports) {
"use strict";function r(r){return n(r)||o(r)||e(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r,t){if(r){if("string"==typeof r)return a(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?a(r,t):void 0}}function o(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function n(r){if(Array.isArray(r))return a(r)}function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.saveCartID=exports.removeCartID=exports.getSavedCartIDs=void 0;var i=exports.getSavedCartIDs=function(){var r=localStorage.getItem("cartProducts");return r?JSON.parse(r):[]},c=exports.saveCartID=function(t){if(!t)throw new Error("Você deve fornecer um ID");var e=i(),o=[].concat(r(e),[t]);localStorage.setItem("cartProducts",JSON.stringify(o))},s=exports.removeCartID=function(t){if(!t)throw new Error("Você deve fornecer um ID");var e=r(i()),o=e.indexOf(t);e.splice(o,1),localStorage.setItem("cartProducts",JSON.stringify(e))};
},{}],"qIvx":[function(require,module,exports) {
"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(){r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(e){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:S(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function x(){}var L={};l(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(C([])));_&&_!==o&&i.call(_,u)&&(L=_);var j=x.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach(function(r){l(t,r,function(t){return this._invoke(r,t)})})}function P(r,e){function n(o,a,c,u){var s=p(r[o],r,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==t(l)&&i.call(l,"__await")?e.resolve(l.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(l).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}})}function S(t,r,n){var o=y;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function k(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function C(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=x,a(j,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},O(P.prototype),l(P.prototype,s,function(){return this}),n.AsyncIterator=P,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new P(h(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(j),l(j,f,"Generator"),l(j,u,function(){return this}),l(j,"toString",function(){return"[object Generator]"}),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},n}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.searchCep=exports.getAddress=void 0;var o=exports.getAddress=function(t){return n(r().mark(function e(){var n,o,i,a;return r().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n="https://cep.awesomeapi.com.br/json/".concat(t),o="https://brasilapi.com.br/api/cep/v2/".concat(t),r.prev=2,r.next=5,Promise.any([fetch(n),fetch(o)]);case 5:if((i=r.sent).ok){r.next=8;break}throw new Error("Erro na requisição: ".concat(i.status));case 8:return r.next=10,i.json();case 10:return a=r.sent,r.abrupt("return",a);case 14:return r.prev=14,r.t0=r.catch(2),console.error(r.t0),r.abrupt("return",null);case 18:case"end":return r.stop()}},e,null,[[2,14]])}))()},i=exports.searchCep=function(){var t=n(r().mark(function t(){var e,n,i;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.querySelector(".cep-input"),n=e.value,8,8!==n.length&&alert("CEP inválido"),t.next=6,o(n);case 6:i=t.sent,document.querySelector(".cart__address").textContent=i?"".concat(i.street||i.address," - ").concat(i.neighborhood||i.district," - ").concat(i.city," - ").concat(i.state):"CEP não encontrado";case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();
},{}],"mOkH":[function(require,module,exports) {
"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(){r=function(){return n};var e,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(e){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:k(t,e,c)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function w(){}function b(){}function x(){}var L={};h(L,u,function(){return this});var E=Object.getPrototypeOf,_=E&&E(E(F([])));_&&_!==o&&i.call(_,u)&&(L=_);var j=x.prototype=w.prototype=Object.create(L);function O(t){["next","throw","return"].forEach(function(r){h(t,r,function(t){return this._invoke(r,t)})})}function P(r,e){function n(o,a,c,u){var s=p(r[o],r,a);if("throw"!==s.type){var f=s.arg,h=f.value;return h&&"object"==t(h)&&i.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):e.resolve(h).then(function(t){f.value=t,c(f)},function(t){return n("throw",t,c,u)})}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e(function(e,o){n(t,r,e,o)})}return o=o?o.then(i,i):i()}})}function k(t,r,n){var o=y;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(t,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function S(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function G(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function N(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function F(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function t(){for(;++o<r.length;)if(i.call(r,o))return t.value=r[o],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return b.prototype=x,a(j,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=h(x,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,h(t,f,"GeneratorFunction")),t.prototype=Object.create(j),t},n.awrap=function(t){return{__await:t}},O(P.prototype),h(P.prototype,s,function(){return this}),n.AsyncIterator=P,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new P(l(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},O(j),h(j,f,"Generator"),h(j,u,function(){return this}),h(j,"toString",function(){return"[object Generator]"}),n.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=F,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),N(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;N(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:F(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},n}function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise(function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.fetchProductsList=exports.fetchProduct=void 0;var o=exports.fetchProduct=function(){var t=n(r().mark(function t(e){var n,o,i;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}throw new Error("ID não informado");case 2:return n="https://api.mercadolibre.com/items/".concat(e),t.next=5,fetch(n);case 5:return o=t.sent,t.next=8,o.json();case 8:return i=t.sent,t.abrupt("return",i);case 10:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}(),i=exports.fetchProductsList=function(){var t=n(r().mark(function t(e){var n,o,i;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e){t.next=3;break}throw new Error("Termo de busca não informado");case 3:return n="https://api.mercadolibre.com/sites/MLB/search?q=".concat(e),t.next=6,fetch(n);case 6:return o=t.sent,t.next=9,o.json();case 9:return i=t.sent,t.abrupt("return",i.results);case 13:throw t.prev=13,t.t0=t.catch(0),console.error(t.t0),t.t0;case 17:case"end":return t.stop()}},t,null,[[0,13]])}));return function(r){return t.apply(this,arguments)}}();
},{}],"p3Ez":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getIdFromProduct=exports.createProductElement=exports.createCustomElement=exports.createCartProductElement=void 0;var e=require("./cartFunctions"),t=function(e){var t=document.createElement("img");return t.className="product__image",t.src=e.replace("I.jpg","O.jpg"),t},r=exports.createCustomElement=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=document.createElement(e);return n.className=t,n.innerText=r,n},n=exports.getIdFromProduct=function(e){return e.querySelector("span.product__id").innerText},a=function(t,r){t.remove(),(0,e.removeCartID)(r)},d=exports.createCartProductElement=function(e){var n=e.id,d=e.title,c=e.price,p=e.pictures,i=document.createElement("li");i.className="cart__product";var o=r("div","cart__product__image-container"),u=t(p[0].url);o.appendChild(u);var l=t((p[1]||p[0]).url);o.appendChild(l),i.appendChild(o);var _=r("div","cart__product__info-container");_.appendChild(r("span","product__title",d));var s=r("span","product__price","R$ ");s.appendChild(r("span","product__price__value",c)),_.appendChild(s),i.appendChild(_);var m=r("i","material-icons cart__product__remove","delete");return i.appendChild(m),i.addEventListener("click",function(){return a(i,n)}),i},c=exports.createProductElement=function(e){var n=e.id,a=e.title,d=e.thumbnail,c=e.price,p=document.createElement("section");p.className="product",p.appendChild(r("span","product__id",n));var i=r("div","img__container");i.appendChild(t(d)),p.appendChild(i),p.appendChild(r("span","product__title",a));var o=r("span","product__price","R$ ");o.appendChild(r("span","product__price__value",c)),p.appendChild(o);var u=r("button","product__add","Adicionar ao carrinho!");return p.appendChild(u),p};
},{"./cartFunctions":"Pa8j"}],"Lat4":[function(require,module,exports) {

},{}],"HJDO":[function(require,module,exports) {
var define;
var t,e=require("./helpers/cartFunctions"),r=require("./helpers/cepFunctions"),n=require("./helpers/fetchFunctions"),o=require("./helpers/shopFunctions");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){"use strict";c=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,c=Object.create(i.prototype),a=new F(n||[]);return o(c,"_invoke",{value:k(t,r,a)}),c}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function x(){}function b(){}var L={};f(L,u,function(){return this});var E=Object.getPrototypeOf,S=E&&E(E(N([])));S&&S!==r&&n.call(S,u)&&(L=S);var _=b.prototype=w.prototype=Object.create(L);function q(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function P(t,e){function r(o,c,a,u){var s=p(t[o],t,c);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==i(f)&&n.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,a,u)},function(t){r("throw",t,a,u)}):e.resolve(f).then(function(t){l.value=t,a(l)},function(t){return r("throw",t,a,u)})}u(s.arg)}var c;o(this,"_invoke",{value:function(t,n){function o(){return new e(function(e,o){r(t,n,e,o)})}return c=c?c.then(o,o):o()}})}function k(e,r,n){var o=d;return function(i,c){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:t,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=C(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var c=i.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}throw new TypeError(i(e)+" is not iterable")}return x.prototype=b,o(_,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:x,configurable:!0}),x.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},q(P.prototype),f(P.prototype,s,function(){return this}),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new P(h(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},q(_),f(_,l,"Generator"),f(_,u,function(){return this}),f(_,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function a(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}require("./style.css"),document.querySelector(".cep-button").addEventListener("click",r.searchCep);var s=document.querySelector(".container"),l=document.querySelector(".products"),f=new MutationObserver(q),h={childList:!0},p=document.querySelector(".cart__products");function d(){return y.apply(this,arguments)}function y(){return(y=u(c().mark(function t(){var r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector(".cart__products"),document.querySelectorAll(".product__add").forEach(function(t){return t.addEventListener("click",u(c().mark(function i(){var a,u,s;return c().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return a=t.closest(".product").querySelector(".product__id").textContent,(0,e.saveCartID)(a),i.next=4,(0,n.fetchProduct)(a);case 4:u=i.sent,s=(0,o.createCartProductElement)({id:u.id,title:u.title,price:u.price,pictures:u.pictures}),r.appendChild(s);case 7:case"end":return i.stop()}},i)})))});case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function v(){return m.apply(this,arguments)}function m(){return(m=u(c().mark(function t(){return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.fetchProductsList)("computador");case 2:t.sent.forEach(function(t){var e=(0,o.createProductElement)(t);l.appendChild(e)}),d(),q();case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function g(){var t=document.createElement("div");t.classList.add("loading"),t.textContent="carregando...",s.insertBefore(t,s.querySelector(".products")),t.style.display="block"}function w(){var t=document.querySelector(".loading");t&&t.parentNode.removeChild(t)}function x(){var t=document.createElement("div");t.classList.add("error"),t.textContent="Algum erro ocorreu, recarregue a página e tente novamente",s.insertBefore(t,s.querySelector(".products"))}f.observe(p,h);var b=document.querySelector(".error");function L(){return E.apply(this,arguments)}function E(){return(E=u(c().mark(function t(){var e,r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return g(),t.prev=1,t.next=4,fetch("https://api.mercadolibre.com/sites/MLB/search?q=computador");case 4:return e=t.sent,t.next=7,e.json();case 7:return r=t.sent,t.abrupt("return",r);case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),x();case 15:return t.prev=15,w(),t.finish(15);case 18:case"end":return t.stop()}},t,null,[[1,11,15,18]])}))).apply(this,arguments)}function S(){return _.apply(this,arguments)}function _(){return(_=u(c().mark(function t(){var r,i,a;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,e.getSavedCartIDs)(),console.log(r),i=document.querySelector(".cart__products"),a=r.map(n.fetchProduct),t.next=6,Promise.all(a);case 6:t.sent.forEach(function(t){var e=(0,o.createCartProductElement)(t);i.appendChild(e)});case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function q(){return P.apply(this,arguments)}function P(){return(P=u(c().mark(function t(){var r,o,i;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=(0,e.getSavedCartIDs)(),o=0,i=r.map(n.fetchProduct),t.next=5,Promise.all(i);case 5:t.sent.forEach(function(t){var e=t.price;return o+=e}),document.querySelector(".total-price").textContent=o.toFixed(2);case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}b&&b.parentNode.removeChild(b),window.onload=function(){L(),S(),v()};
},{"./helpers/cartFunctions":"Pa8j","./helpers/cepFunctions":"qIvx","./helpers/fetchFunctions":"mOkH","./helpers/shopFunctions":"p3Ez","./style.css":"Lat4"}]},{},["HJDO"], null)
//# sourceMappingURL=/main.f3693f5b.js.map