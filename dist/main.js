(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),c=t(417),s=t.n(c),d=new URL(t(306),t.b),l=new URL(t(38),t.b),u=i()(r()),m=s()(d),p=s()(l);u.push([e.id,`*  {\n    margin:0;\n    font-family: 'Georgia', sans-serif;\n}\n\n\nbody {\n    overflow-x: hidden;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    width: 100%;\n    max-width: 100vw;\n    height: 100vh;\n}\n\n.landing {\n    background-image: url(${m});\n    color: white;\n}\n\n.landing-container {\n    margin-left: 2rem;\n}\n\n.menu {\n    background-image: url(${p});\n    color: black;\n    margin: 0rem 20rem 0rem 20rem;\n}\n\n.flex-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: calc(100vw - 40rem);\n    flex-direction: column;\n}\n\n.menu-flex-child {\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    border-bottom: 2px solid rgb(104, 89, 62);\n    margin-bottom: 2rem;\n    width: 100%;\n}\n\nnav {\n    display: flex;\n    align-items: center;\n    padding: 3rem;\n}\n\n.logo {\n    cursor: pointer;\n}\n\nnav h1 {\n    font-size: 2rem;\n    margin-right: 2rem;\n}\n\n#content {\n    margin-top: 5rem;\n    width: 37%;\n}\n\nh2 {\n    font-size: 3rem;\n    margin-bottom: 1.5rem;\n}\n\n.menu-title {\n    font-size: 4rem;\n    margin-bottom: 3rem;\n}\n\n.menu-item-title {\n    font-size: 2rem;\n    font-weight: 700;\n}\n\n.menu-item-text {\n    font-size: 0.875rem;\n    font-weight: 400;\n    margin-bottom: 2rem;\n}\n\n.landing-text {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n}\n\nbutton {\n    color: white;\n    border: none;\n    font-size: 1.5rem;\n    margin: 2rem;\n    background-color: transparent;\n    cursor: pointer;\n    transition: color 0.3s ease;\n}\n\n.active {\n    color: pink;\n}\n\n.landing-button {\n    padding: 1rem 2.5rem;\n    border: 2px solid white;\n}\n\nbutton:hover {\n    color: yellow;\n}`,""]);const f=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var f=r(p,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},38:(e,n,t)=>{e.exports=t.p+"0f258ff84f180d8fdd9e.jpg"},306:(e,n,t)=>{e.exports=t.p+"846bec76ac514775d0d5.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),m=t.n(u),p=t(113),f=t.n(p),h=t(365),g={};function v(){const e=document.querySelector("body");e.className="",e.classList.add("landing");const n=document.createElement("div");n.classList.add("landing-container");const t=document.createElement("h2");t.textContent="Good food choices are good investments.",t.classList.add("landing-title");const o=document.createElement("p");o.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi unde error optio soluta eum aliquid.",o.classList.add("landing-text");const r=document.createElement("button"),a=document.createElement("button");return r.classList.add("landing-button"),a.classList.add("landing-button"),r.textContent="Menu",a.textContent="About",document.querySelectorAll("button").forEach((e=>{e.style.color="white"})),n.appendChild(t),n.appendChild(o),n.appendChild(r),n.appendChild(a),n}g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".nav-button"),n=document.getElementById("content");e.forEach((t=>{t.addEventListener("click",(()=>{switch(e.forEach((e=>e.classList.remove("active"))),t.classList.add("active"),t.textContent){case"Menu":n.innerHTML="",n.appendChild(function(){const e=document.querySelector("body");e.className="",e.classList.add("menu"),document.querySelectorAll("button").forEach((e=>{e.style.color="black"}));const n=document.createElement("div");n.classList.add("flex-container");const t=document.createElement("h2");t.textContent="A la Carte",t.classList.add("menu-title");const o=document.createElement("div");o.classList.add("menu-flex-child");const r=document.createElement("p");r.classList.add("menu-item-title"),r.textContent="Tagliatelle Gorgonzola";const a=document.createElement("p");a.textContent="Fresh tagliatelle in a creamy Gorgonzola sauce, topped with toasted walnuts, fresh arugula, and a drizzle of truffle oil. Rich, bold, and satisfying.",a.classList.add("menu-item-text"),o.appendChild(r),o.appendChild(a);const i=document.createElement("div");i.classList.add("menu-flex-child");const c=document.createElement("p");c.classList.add("menu-item-title"),c.textContent="Penne Arrabbiata";const s=document.createElement("p");s.textContent="Penne pasta in a spicy tomato sauce with garlic, red chili flakes, and fresh basil. Bold, fiery, and full of flavor.",s.classList.add("menu-item-text"),i.appendChild(c),i.appendChild(s);const d=document.createElement("div");d.classList.add("menu-flex-child");const l=document.createElement("p");l.classList.add("menu-item-title"),l.textContent="Spaghetti Carbonara";const u=document.createElement("p");return u.textContent="Classic spaghetti tossed in a creamy Parmesan sauce with crispy pancetta, cracked black pepper, and a touch of egg yolk. Rich, savory, and comforting.",u.classList.add("menu-item-text"),d.appendChild(l),d.appendChild(u),n.appendChild(t),n.appendChild(o),n.appendChild(i),n.appendChild(d),n}());break;case"About":n.innerHTML="",n.appendChild(function(){const e=document.querySelector("body");e.className="",e.classList.add("landing"),document.querySelectorAll("button").forEach((e=>{e.style.color="white"}));const n=document.createElement("div");n.classList.add("landing-container");const t=document.createElement("h2");t.classList.add("landing-title"),t.textContent="GoodFood's mission";const o=document.createElement("p");return o.classList.add("landing-text"),o.textContent="At GoodFood, we’re passionate about pasta. Our mission is to bring you the freshest, most flavorful pasta dishes made with high-quality ingredients. Whether you're craving a classic favorite or something new, we create every dish with care and love. Join us for a meal that feels like home.",n.appendChild(t),n.appendChild(o),n}());break;default:n.innerHTML="",n.appendChild(v())}}))}))})),document.getElementById("content").appendChild(v())})();