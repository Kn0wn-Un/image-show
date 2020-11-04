(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,"html {\n    min-height: 100%;\n}\nbody {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.9);\n    display: flex;\n    flex-direction: column;\n    margin: 0px;\n}\n.navbar {\n    background-color: slategray;\n    color: white;\n    margin: 0px 0px 25px 0px;\n    padding: 10px 50px;\n}\nh1 {\n    display: inline;\n}\na,\na:visited,\na:active {\n    color: white;\n    text-decoration: none;\n    float: right;\n    font-size: 18px;\n    margin: 10px 10vw 5px 0px;\n}\na:hover {\n    color: rgba(255, 255, 255, 0.8);\n}\n.image-view {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n.image {\n    height: 75vh;\n    width: 75vw;\n    background-color: red;\n}\n.image-nav {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 15px 0px 0px 0px;\n}\n.controls {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n.previous,\n.next,\n.play,\n.pause {\n    height: 50px;\n    width: 80px;\n    align-self: center;\n    filter: invert(48%) sepia(12%) saturate(377%) hue-rotate(166deg)\n        brightness(90%) contrast(79%);\n    transition: transform 100ms ease-in-out;\n}\n.play,\n.pause {\n    height: 40px;\n    order: 2;\n}\n@keyframes left {\n    0% {\n        left: 0px;\n    }\n    50% {\n        left: -25px;\n    }\n    100% {\n        left: 0px;\n    }\n}\n@keyframes right {\n    0% {\n        left: 0px;\n    }\n    50% {\n        left: 25px;\n    }\n    100% {\n        left: 0px;\n    }\n}\n.previous {\n    position: relative;\n    order: 1;\n}\n.next {\n    position: relative;\n    order: 3;\n}\n.previous:hover {\n    animation-name: left;\n    animation-duration: 300ms;\n}\n.next:hover {\n    animation-name: right;\n    animation-duration: 300ms;\n}\n.play:hover,\n.pause:hover {\n    transform: scale(1.1);\n}\n.image-pre {\n    background-color: rgba(256, 0, 0, 0.2);\n    margin: 15px 0px;\n    align-self: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    max-width: 75vw;\n}\n.image-sm {\n    height: 50px;\n    min-width: 50px;\n    margin: 5px;\n    background-color: royalblue;\n}\n.image-sm:hover {\n    transform: scale(1.2);\n}\n",""]);const i=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var r,a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function o(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],a=0;a<e.length;a++){var c=e[a],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var p=o(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:d,updater:h(u,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,r){var a=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,a);else{var i=document.createTextNode(a),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(i,o[n]):e.appendChild(i)}}function u(e,n,t){var r=t.css,a=t.media,i=t.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,a;if(n.singleton){var i=m++;t=f||(f=s(n)),r=p.bind(null,t,i,!1),a=p.bind(null,t,i,!0)}else t=s(n),r=u.bind(null,t,n),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else a()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var a=o(t[r]);i[a].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=o(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=s}}}}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const a=()=>{const e=document.createElement("div");e.classList.add("navbar");const n=document.createElement("h1");n.innerHTML="I";const t=document.createElement("h1");t.innerHTML="S";const r=document.createElement("a");r.href="https://github.com/Kn0wn-Un/image-show",r.innerHTML="GitHub",e.innerHTML=n.outerHTML+"mage"+t.outerHTML+"how",e.appendChild(r),document.body.appendChild(e)},i=()=>{const e=document.createElement("div");e.classList.add("image-view");const n=document.createElement("div");n.classList.add("image"),e.appendChild(n),document.body.appendChild(e)},o=t.p+"1e8340ca5b5c654edf5b8b1b1e58ea0b.svg",c=t.p+"4e65fa2ccaf6348d82737621118f75f7.svg",s=t.p+"71aed264a09fe2c7fc5c3fa8e87e2eb1.svg",l=t.p+"25191218d8e80e6cd237904ff0f4fbf1.svg",d=(()=>{const e=e=>{document.querySelector(".image").innerHTML=e};return{imageClick:n=>{n.addEventListener("click",(()=>{e(n.innerHTML)}))},imageShow:e=>{console.log(e.classList[0]),p.addPause(e,"play"===e.classList[0])},ctrClick:(n,t)=>{console.log(n.classList[0]);let r=document.querySelector(".image").innerHTML,a=t.find((e=>e===parseInt(r,10)));"previous"===n.classList[0]&&e(0===a?t.length-1:(a-1)%t.length),"next"===n.classList[0]&&e((a+1)%t.length)}}})(),p={addNav:e=>{const n=document.createElement("div");n.classList.add("image-nav");let t=(e=>{let n=document.createElement("div");n.classList.add("controls");let t=document.createElement("img");t.classList.add("previous"),t.src=o,t.alt="Previous",t.addEventListener("click",(()=>{d.ctrClick(t,e)}));let r=document.createElement("img");r.classList.add("next"),r.src=c,r.alt="Next",r.addEventListener("click",(()=>{d.ctrClick(r,e)}));let a=document.createElement("img");return a.classList.add("play"),a.src=s,a.alt="Play",a.addEventListener("click",(()=>{d.imageShow(a)})),n.appendChild(t),n.appendChild(r),n.appendChild(a),n})(e),r=(e=>{let n=document.createElement("div");n.classList.add("image-pre");for(let t=0;t<e.length;t++){let r=document.createElement("div");r.classList.add("image-sm"),r.innerHTML=e[t],d.imageClick(r),n.appendChild(r)}return n})(e);n.appendChild(t),n.appendChild(r),document.body.appendChild(n)},addPause:(e,n)=>{e.classList.remove(n?"play":"pause"),e.src=n?l:s,e.alt=n?"pause":"play",e.classList.add(n?"pause":"play")}};let u=[...Array(10).keys()];a(),i(),p.addNav(u),console.log("Success!")})()})();