!function(e){function n(n){for(var t,o,u=n[0],i=n[1],a=0,f=[];a<u.length;a++)o=u[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(s&&s(n);f.length;)f.shift()()}var t={},r={0:0};var o={};var u={7:function(){return{"./kingslayer_wasm.js":{__wbg_alert_11a5936d1b406551:function(e,n,r){return t[2].exports.a(e,n,r)},__wbg_prompt_72b0f0b08f4b6ba3:function(e,n,r){return t[2].exports.g(e,n,r)},__wbg_new_59cb74e423758ede:function(){return t[2].exports.f()},__wbg_stack_558ba5917b466edd:function(e,n){return t[2].exports.k(e,n)},__wbg_error_4bb6c2a97407129a:function(e,n){return t[2].exports.c(e,n)},__wbindgen_object_drop_ref:function(e){return t[2].exports.m(e)},__wbg_self_1b7a39e3a92c949c:function(){return t[2].exports.j()},__wbg_require_604837428532a733:function(e,n){return t[2].exports.i(e,n)},__wbg_crypto_968f1772287e2df0:function(e){return t[2].exports.b(e)},__wbindgen_is_undefined:function(e){return t[2].exports.l(e)},__wbg_getRandomValues_a3d34b4fee3c2869:function(e){return t[2].exports.d(e)},__wbg_getRandomValues_f5e14ab7ac8e995d:function(e,n,r){return t[2].exports.e(e,n,r)},__wbg_randomFillSync_d5bd2d655fdf256a:function(e,n,r){return t[2].exports.h(e,n,r)}}}}};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=a);var f,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+""+({}[e]||e)+".js"}(e);var s=new Error;f=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",s.name="ChunkLoadError",s.type=o,s.request=u,t[1](s)}r[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:c})}),12e4);c.onerror=c.onload=f,document.head.appendChild(c)}return({1:[7]}[e]||[]).forEach((function(e){var t=o[e];if(t)n.push(t);else{var r,a=u[e](),f=fetch(i.p+""+{7:"5d66a927c8bfd6f8887f"}[e]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(f),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(f,a);else{r=f.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)}))}n.push(o[e]=r.then((function(n){return i.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},i.m=e,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e},i.w={};var a=window.webpackJsonp=window.webpackJsonp||[],f=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var s=f;i(i.s=0)}([function(e,n,t){t.e(1).then(t.bind(null,1))}]);