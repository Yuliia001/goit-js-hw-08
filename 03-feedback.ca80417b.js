!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(h,t),d?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function x(){var e=g(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(s)return f=setTimeout(h,t),y(l)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},x.flush=function(){return void 0===f?a:w(g())},x}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S,O={form:document.querySelector(".feedback-form"),input:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]')},h=O.form,w=O.input,x=O.textarea,T="feedback-form-state",N={};(S=JSON.parse(localStorage.getItem(T)))&&(w.value=S.email,x.value=S.message),h.addEventListener("input",e(t)((function(e){N[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(N))}),500)),h.addEventListener("submit",(function(e){e.preventDefault(),w.value&&x.value?(console.log(N),h.reset(),localStorage.removeItem(T)):alert("всі поля повинні бути заповнені")}))}();
//# sourceMappingURL=03-feedback.ca80417b.js.map
