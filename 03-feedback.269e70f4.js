!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,r,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=o,i=r;return o=r=void 0,l=t,u=e.apply(i,n)}function h(e){return l=e,f=setTimeout(w,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function w(){var e=p();if(O(e))return S(e);f=setTimeout(w,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function S(e){return f=void 0,m&&o?y(e):(o=r=void 0,u)}function T(){var e=p(),n=O(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(w,t),y(c)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=r=f=void 0},T.flush=function(){return void 0===f?u:S(p())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};var h,O="feedback-form-state",w=document.querySelector(".feedback-form"),S={};h=localStorage.getItem(O),function(e){try{w.email.value=e.email,w.message.value=e.message}catch(e){console.log(e.email,"cant't reade data"),console.log(e.message,"cant't reade data"),S={}}}(S=JSON.parse(h)),document.addEventListener("input",e(t)((function(e){(function(e){var t=e.target.value;"email"===e.target.name?S.email=t:S.message=t})(e),localStorage.setItem(O,JSON.stringify(S))}),500)),document.addEventListener("submit",(function(e){e.preventDefault(),w.reset(),console.log(S),localStorage.removeItem(O)}))}();
//# sourceMappingURL=03-feedback.269e70f4.js.map
