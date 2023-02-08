!function(){"use strict";var e,t={5959:function(e,t,n){var r=n(2263),i=n(5243),o=n.n(i),a=n(7091),s=n.n(a),c=new URL(n(8930),n.b),l=new URL(n(3701),n.b),u=new URL(n(2116),n.b),f=new URL(n(2987),n.b),d=new URL(n(2459),n.b),p=new URL(n(5755),n.b),b=new URL(n(8464),n.b),v=(s()(c),s()(l),s()(u),s()(f),s()(d),s()(p),s()(b),n(8930)),w=n(3701),h=n(2116);function m(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=document.querySelector(".header__menu"),_=document.querySelector(".header");y.addEventListener("click",(function(){y.classList.toggle("header__menu_changed"),_.classList.toggle("header_mobile-active")})),r.ZP.use([r.tl]),new r.ZP("#cardsSwiper",{slidesPerView:4,spaceBetween:70,breakpoints:{320:{slidesPerView:1,spaceBetween:40},780:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:4,spaceBetween:70}}}),new r.ZP("#featuresSwiper",{slidesPerView:4,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:40,pagination:{el:".swiper-pagination",clickable:!0}},780:{slidesPerView:1,spaceBetween:40,pagination:{el:".swiper-pagination",clickable:!0}},1024:{slidesPerView:4,spaceBetween:10}}});var k=m(document.querySelectorAll(".benefits__sticker")),L=new r.ZP("#benefitsSwiper",{slidesPerView:1});document.addEventListener("keydown",(function(e){["ArrowLeft","<"].includes(e.key)?L.slidePrev():["ArrowRight",">"].includes(e.key)&&L.slideNext()})),k.forEach((function(e){return e.addEventListener("click",(function(){k.forEach((function(e){return e.classList.remove("benefits__sticker_active")})),this.classList.add("benefits__sticker_active"),L.slideTo(this.dataset.index)}))})),L.on("slideChange",(function(e){k.forEach((function(t){Number(t.dataset.index)===e.activeIndex?t.classList.add("benefits__sticker_active"):t.classList.remove("benefits__sticker_active")}))}));var P={default:[51.505,-.09],shop:[51.495,-.09],medicine:[51.505,-.14]},x=o().map("map").setView(P.default,13),S=o().icon({iconUrl:v}),E=o().icon({iconUrl:w}),O=o().icon({iconUrl:h});m(document.querySelectorAll(".map__sticker")).forEach((function(e){return e.addEventListener("click",(function(){x.flyTo(P[this.dataset.type])}))})),o().marker(P.default,{icon:S}).addTo(x),o().marker(P.shop,{icon:E}).addTo(x),o().marker(P.medicine,{icon:O}).addTo(x),m(document.querySelectorAll(".form__field")).forEach((function(e){return e.addEventListener("input",(function(){this.value?this.classList.add("form__field_valuable"):this.classList.remove("form__field_valuable")}))}))},2987:function(e,t,n){e.exports=n.p+"assets/add7a716dacbded7488c.png"},2459:function(e,t,n){e.exports=n.p+"assets/e40f6ac979796954c9e4.png"},5755:function(e,t,n){e.exports=n.p+"assets/7b18f97b89ebcf054c5c.png"},8464:function(e,t,n){e.exports=n.p+"assets/13d63bfb7f271c212a99.png"},2116:function(e,t,n){e.exports=n.p+"assets/99416c1a78308a74f2e3.svg"},3701:function(e,t,n){e.exports=n.p+"assets/5a47fd5ab3c8bc555917.svg"},8930:function(e,t,n){e.exports=n.p+"assets/327fa6a376d28f490632.svg"}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,o<a&&(a=o));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){r.b=document.baseURI||self.location.href;var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],s=n[1],c=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var u=c(r)}for(t&&t(n);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunklabsales=self.webpackChunklabsales||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[361],(function(){return r(6981)}));var i=r.O(void 0,[361],(function(){return r(5959)}));i=r.O(i)}();