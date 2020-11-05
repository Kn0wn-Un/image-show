(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(645),i=t.n(a)()((function(e){return e[1]}));i.push([e.id,"html {\n    min-height: 100%;\n}\nbody {\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.9);\n    display: flex;\n    flex-direction: column;\n    margin: 0px;\n}\n.navbar {\n    background-color: rgb(20, 33, 61);\n    color: white;\n    margin: 0px 0px 25px 0px;\n    padding: 10px 50px;\n}\nh1 {\n    display: inline;\n}\na,\na:visited,\na:active {\n    color: white;\n    text-decoration: none;\n    float: right;\n    font-size: 18px;\n    margin: 10px 10vw 5px 0px;\n}\na:hover {\n    color: rgba(255, 255, 255, 0.8);\n}\n.image-view {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n.image {\n    height: 75vh;\n    width: 75vw;\n}\n.image-nav {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: 15px 0px 0px 0px;\n}\n.controls {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n.previous,\n.next,\n.play,\n.pause {\n    height: 50px;\n    width: 80px;\n    align-self: center;\n    filter: invert(48%) sepia(12%) saturate(377%) hue-rotate(166deg)\n        brightness(90%) contrast(79%);\n    transition: transform 100ms ease-in-out;\n}\n.play,\n.pause {\n    height: 40px;\n    order: 2;\n}\n@keyframes left {\n    0% {\n        left: 0px;\n    }\n    50% {\n        left: -25px;\n    }\n    100% {\n        left: 0px;\n    }\n}\n@keyframes right {\n    0% {\n        left: 0px;\n    }\n    50% {\n        left: 25px;\n    }\n    100% {\n        left: 0px;\n    }\n}\n.previous {\n    position: relative;\n    order: 1;\n}\n.next {\n    position: relative;\n    order: 3;\n}\n.previous:hover {\n    animation-name: left;\n    animation-duration: 500ms;\n    animation-timing-function: ease-in-out;\n}\n.next:hover {\n    animation-name: right;\n    animation-duration: 500ms;\n    animation-timing-function: ease-in-out;\n}\n.play:hover,\n.pause:hover {\n    transform: scale(1.1);\n}\n.image-pre {\n    background-color: rgb(20, 33, 61);\n    margin: 15px 0px;\n    align-self: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    max-width: 75vw;\n}\n.image-sm {\n    max-height: 50px;\n    max-width: 50px;\n    margin: 5px;\n    transition: transform 100ms ease-in-out;\n}\n.image-sm:hover {\n    transform: scale(1.2);\n    box-shadow: 0px 0px 5px white;\n}\n",""]);const r=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);a&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},379:(e,n,t)=>{var a,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function o(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},a=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var p=o(d),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:d,updater:g(u,n),references:1}),a.push(d)}return a}function s(e){var n=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=t.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){n.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,a){var i=t?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var r=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(r,o[n]):e.appendChild(r)}}function u(e,n,t){var a=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var f=null,m=0;function g(e,n){var t,a,i;if(n.singleton){var r=m++;t=f||(f=s(n)),a=p.bind(null,t,r,!1),i=p.bind(null,t,r,!0)}else t=s(n),a=u.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return a(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;a(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<t.length;a++){var i=o(t[a]);r[i].references--}for(var s=c(e,n),l=0;l<t.length;l++){var d=o(t[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=s}}}}},n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),a=t(426);n()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=()=>{const e=document.createElement("div");e.classList.add("navbar");const n=document.createElement("h1");n.innerHTML="I";const t=document.createElement("h1");t.innerHTML="S";const a=document.createElement("a");a.href="https://github.com/Kn0wn-Un/image-show",a.innerHTML="GitHub",e.innerHTML=n.outerHTML+"mage"+t.outerHTML+"how",e.appendChild(a),document.body.appendChild(e)},r=()=>{const e=document.createElement("div");e.classList.add("image-view");const n=document.createElement("img");n.classList.add("image"),e.appendChild(n),document.body.appendChild(e)},o=t.p+"1e8340ca5b5c654edf5b8b1b1e58ea0b.svg",c=t.p+"4e65fa2ccaf6348d82737621118f75f7.svg",s=t.p+"71aed264a09fe2c7fc5c3fa8e87e2eb1.svg",l=t.p+"25191218d8e80e6cd237904ff0f4fbf1.svg",d=(()=>{const e=e=>{document.querySelector(".image").src=e},n=(e,n)=>{if("play"!==e.classList[0])clearInterval(e.id);else{let t=setInterval((()=>{d.nextImg(n)}),3e3);e.id=t}u.addPause(e,"play"===e.classList[0])};return{imageClick:(t,a)=>{t.addEventListener("click",(()=>{e(t.src);let i=document.querySelector(".pause");i&&n(i,a)}))},imageShow:n,ctrClick:(t,a)=>{let i=document.querySelector(".image").src,r=a.indexOf(i);console.log(r),"previous"===t.classList[0]&&(e(a[0===r?a.length-1:(r-1)%a.length]),"pause"===t.nextSibling.classList[0]&&n(t.nextSibling,a)),"next"===t.classList[0]&&(e(a[(r+1)%a.length]),"pause"===t.previousSibling.classList[0]&&n(t.previousSibling,a))},imageDisp:e,nextImg:n=>{let t=document.querySelector(".image").src;console.log(t);let a=n.indexOf(t);e(n[(a+1)%n.length])}}})(),p=d,u={addNav:e=>{const n=document.createElement("div");n.classList.add("image-nav");let t=(e=>{let n=document.createElement("div");n.classList.add("controls");let t=document.createElement("img");t.classList.add("previous"),t.src=o,t.alt="Previous",t.addEventListener("click",(()=>{p.ctrClick(t,e)}));let a=document.createElement("img");a.classList.add("next"),a.src=c,a.alt="Next",a.addEventListener("click",(()=>{p.ctrClick(a,e)}));let i=document.createElement("img");return i.classList.add("play"),i.src=s,i.alt="Play",i.addEventListener("click",(()=>{p.imageShow(i,e)})),n.appendChild(t),n.appendChild(i),n.appendChild(a),n})(e),a=(e=>{let n=document.createElement("div");n.classList.add("image-pre");for(let t=0;t<e.length;t++){let a=document.createElement("img");a.src=e[t],a.classList.add("image-sm"),a.innerHTML=e[t],p.imageClick(a,e),n.appendChild(a)}return n})(e);n.appendChild(t),n.appendChild(a),document.body.appendChild(n),p.imageDisp(e[0])},addPause:(e,n)=>{e.classList.remove(n?"play":"pause"),e.src=n?l:s,e.alt=n?"pause":"play",e.classList.add(n?"pause":"play")}},f=t.p+"1fd3ed0aeae7b60cf665c49f4311dfd8.jpg",m=t.p+"8c1cd2d12bd924cac881de83854e5a81.jpg",g=t.p+"5914addb3abc9407328208c5cf905f75.jpg",h=t.p+"9b08fce19d366786d834dba1247215d1.jpg",v=t.p+"f28da559ffd9a83585d17f2c624d96b9.jpg";let x=[];x.push(f),x.push(m),x.push(g),x.push(h),x.push(v),console.log(x),i(),r(),u.addNav(x),console.log("Success!")})()})();