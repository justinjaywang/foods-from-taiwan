function setActivePost(a){removeActivePost();var b=document.querySelector(".food-nav__link[href='#"+a+"']"),c=document.querySelector(".food-post[id='"+a+"']");b.classList.add("js-active"),c.classList.add("js-active"),setTimeout(function(){b.classList.remove("js-active")},750)}function removeActivePost(){var a,b,c=document.querySelector(".js-nav"),d=c.querySelectorAll(".js-nav-link");for(a=0,b=d.length;a<b;a++)d[a].classList.remove("js-active");var e,f,g=document.querySelectorAll(".food-post");for(e=0,f=g.length;e<f;e++)g[e].classList.remove("js-active")}function scrollTo(a,b,c,d){function e(){const a="now"in window.performance?performance.now():(new Date).getTime(),i=Math.min(1,(a-h)/b),j=f[c](i);return window.scroll(0,Math.ceil(j*(l-g)+g)),window.pageYOffset===l?void(d&&d()):void requestAnimationFrame(e)}const f={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return a*(2-a)},easeInOutQuad:function(a){return a<.5?2*a*a:-1+(4-2*a)*a},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return--a*a*a+1},easeInOutCubic:function(a){return a<.5?4*a*a*a:(a-1)*(2*a-2)*(2*a-2)+1},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return 1- --a*a*a*a},easeInOutQuart:function(a){return a<.5?8*a*a*a*a:1-8*--a*a*a*a},easeInQuint:function(a){return a*a*a*a*a},easeOutQuint:function(a){return 1+--a*a*a*a*a},easeInOutQuint:function(a){return a<.5?16*a*a*a*a*a:1+16*--a*a*a*a*a}},g=window.pageYOffset,h="now"in window.performance?performance.now():(new Date).getTime(),i=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),j=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,k="number"==typeof a?a:a.offsetTop,l=Math.round(i-k<j?i-j:k);return"requestAnimationFrame"in window==!1?(window.scroll(0,l),void(d&&d())):void e()}function updateUrl(a){a?window.history.replaceState(null,null,window.location.pathname+"#"+a):window.history.replaceState(null,null,window.location.pathname)}!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.Blazy=b()}(this,function(){function a(a){var c=a._util;c.elements=i(a.options),c.count=c.elements.length,c.destroyed&&(c.destroyed=!1,a.options.container&&m(a.options.container,function(a){k(a,"scroll",c.validateT)}),k(window,"resize",c.saveViewportOffsetT),k(window,"resize",c.validateT),k(window,"scroll",c.validateT)),b(a)}function b(a){for(var b=a._util,d=0;d<b.count;d++){var e,f=b.elements[d],h=f;e=a.options;var i=h.getBoundingClientRect();e.container&&r&&(h=h.closest(e.containerClass))?(h=h.getBoundingClientRect(),e=!!c(h,p)&&c(i,{top:h.top-e.offset,right:h.right+e.offset,bottom:h.bottom+e.offset,left:h.left-e.offset})):e=c(i,p),(e||g(f,a.options.successClass))&&(a.load(f),b.elements.splice(d,1),b.count--,d--)}0===b.count&&a.destroy()}function c(a,b){return a.right>=b.left&&a.bottom>=b.top&&a.left<=b.right&&a.top<=b.bottom}function d(a,b,c){if(!g(a,c.successClass)&&(b||c.loadInvisible||0<a.offsetWidth&&0<a.offsetHeight))if(b=a.getAttribute(o)||a.getAttribute(c.src)){b=b.split(c.separator);var d=b[q&&1<b.length?1:0],i=a.getAttribute(c.srcset),j="img"===a.nodeName.toLowerCase(),n=(b=a.parentNode)&&"picture"===b.nodeName.toLowerCase();if(j||void 0===a.src){var p=new Image,r=function(){c.error&&c.error(a,"invalid"),h(a,c.errorClass),l(p,"error",r),l(p,"load",s)},s=function(){j?n||f(a,d,i):a.style.backgroundImage='url("'+d+'")',e(a,c),l(p,"load",s),l(p,"error",r)};n&&(p=a,m(b.getElementsByTagName("source"),function(a){var b=c.srcset,d=a.getAttribute(b);d&&(a.setAttribute("srcset",d),a.removeAttribute(b))})),k(p,"error",r),k(p,"load",s),f(p,d,i)}else a.src=d,e(a,c)}else"video"===a.nodeName.toLowerCase()?(m(a.getElementsByTagName("source"),function(a){var b=c.src,d=a.getAttribute(b);d&&(a.setAttribute("src",d),a.removeAttribute(b))}),a.load(),e(a,c)):(c.error&&c.error(a,"missing"),h(a,c.errorClass))}function e(a,b){h(a,b.successClass),b.success&&b.success(a),a.removeAttribute(b.src),a.removeAttribute(b.srcset),m(b.breakpoints,function(b){a.removeAttribute(b.src)})}function f(a,b,c){c&&a.setAttribute("srcset",c),a.src=b}function g(a,b){return-1!==(" "+a.className+" ").indexOf(" "+b+" ")}function h(a,b){g(a,b)||(a.className+=" "+b)}function i(a){var b=[];a=a.root.querySelectorAll(a.selector);for(var c=a.length;c--;b.unshift(a[c]));return b}function j(a){p.bottom=(window.innerHeight||document.documentElement.clientHeight)+a,p.right=(window.innerWidth||document.documentElement.clientWidth)+a}function k(a,b,c){a.attachEvent?a.attachEvent&&a.attachEvent("on"+b,c):a.addEventListener(b,c,{capture:!1,passive:!0})}function l(a,b,c){a.detachEvent?a.detachEvent&&a.detachEvent("on"+b,c):a.removeEventListener(b,c,{capture:!1,passive:!0})}function m(a,b){if(a&&b)for(var c=a.length,d=0;d<c&&!1!==b(a[d],d);d++);}function n(a,b,c){var d=0;return function(){var e=+new Date;e-d<b||(d=e,a.apply(c,arguments))}}var o,p,q,r;return function(c){if(!document.querySelectorAll){var e=document.createStyleSheet();document.querySelectorAll=function(a,b,c,d,f){for(f=document.all,b=[],a=a.replace(/\[for\b/gi,"[htmlFor").split(","),c=a.length;c--;){for(e.addRule(a[c],"k:v"),d=f.length;d--;)f[d].currentStyle.k&&b.push(f[d]);e.removeRule(0)}return b}}var f=this,g=f._util={};g.elements=[],g.destroyed=!0,f.options=c||{},f.options.error=f.options.error||!1,f.options.offset=f.options.offset||100,f.options.root=f.options.root||document,f.options.success=f.options.success||!1,f.options.selector=f.options.selector||".b-lazy",f.options.separator=f.options.separator||"|",f.options.containerClass=f.options.container,f.options.container=!!f.options.containerClass&&document.querySelectorAll(f.options.containerClass),f.options.errorClass=f.options.errorClass||"b-error",f.options.breakpoints=f.options.breakpoints||!1,f.options.loadInvisible=f.options.loadInvisible||!1,f.options.successClass=f.options.successClass||"b-loaded",f.options.validateDelay=f.options.validateDelay||25,f.options.saveViewportOffsetDelay=f.options.saveViewportOffsetDelay||50,f.options.srcset=f.options.srcset||"data-srcset",f.options.src=o=f.options.src||"data-src",r=Element.prototype.closest,q=1<window.devicePixelRatio,p={},p.top=0-f.options.offset,p.left=0-f.options.offset,f.revalidate=function(){a(f)},f.load=function(a,b){var c=this.options;void 0===a.length?d(a,b,c):m(a,function(a){d(a,b,c)})},f.destroy=function(){var a=this._util;this.options.container&&m(this.options.container,function(b){l(b,"scroll",a.validateT)}),l(window,"scroll",a.validateT),l(window,"resize",a.validateT),l(window,"resize",a.saveViewportOffsetT),a.count=0,a.elements.length=0,a.destroyed=!0},g.validateT=n(function(){b(f)},f.options.validateDelay,f),g.saveViewportOffsetT=n(function(){j(f.options.offset)},f.options.saveViewportOffsetDelay,f),j(f.options.offset),m(f.options.breakpoints,function(a){if(a.width>=window.screen.width)return o=a.src,!1}),setTimeout(function(){a(f)})}}),!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define("scrollMonitor",[],b):"object"==typeof exports?exports.scrollMonitor=b():a.scrollMonitor=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";var d=c(1),e=d.isInBrowser,f=c(2),g=new f(e?document.body:null);g.setStateFromDOM(null),g.listenToDOM(),e&&(window.scrollMonitor=g),a.exports=g},function(a,b){"use strict";b.VISIBILITYCHANGE="visibilityChange",b.ENTERVIEWPORT="enterViewport",b.FULLYENTERVIEWPORT="fullyEnterViewport",b.EXITVIEWPORT="exitViewport",b.PARTIALLYEXITVIEWPORT="partiallyExitViewport",b.LOCATIONCHANGE="locationChange",b.STATECHANGE="stateChange",b.eventTypes=[b.VISIBILITYCHANGE,b.ENTERVIEWPORT,b.FULLYENTERVIEWPORT,b.EXITVIEWPORT,b.PARTIALLYEXITVIEWPORT,b.LOCATIONCHANGE,b.STATECHANGE],b.isOnServer="undefined"==typeof window,b.isInBrowser=!b.isOnServer,b.defaultOffsets={top:0,bottom:0}},function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a){return i?0:a===document.body?window.innerHeight||document.documentElement.clientHeight:a.clientHeight}function f(a){return i?0:a===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):a.scrollHeight}function g(a){return i?0:a===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop}var h=c(1),i=h.isOnServer,j=h.isInBrowser,k=h.eventTypes,l=c(3),m=!1;if(j)try{var n=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,n)}catch(a){}var o=!!m&&{capture:!1,passive:!0},p=function(){function a(b,c){function h(){if(j.viewportTop=g(b),j.viewportBottom=j.viewportTop+j.viewportHeight,j.documentHeight=f(b),j.documentHeight!==l){for(m=j.watchers.length;m--;)j.watchers[m].recalculateLocation();l=j.documentHeight}}function i(){for(n=j.watchers.length;n--;)j.watchers[n].update();for(n=j.watchers.length;n--;)j.watchers[n].triggerCallbacks()}d(this,a);var j=this;this.item=b,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=f(b),this.viewportHeight=e(b),this.DOMListener=function(){a.prototype.DOMListener.apply(j,arguments)},this.eventTypes=k,c&&(this.containerWatcher=c.create(b));var l,m,n;this.update=function(){h(),i()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return a.prototype.listenToDOM=function(){j&&(window.addEventListener?(this.item===document.body?window.addEventListener("scroll",this.DOMListener,o):this.item.addEventListener("scroll",this.DOMListener,o),window.addEventListener("resize",this.DOMListener)):(this.item===document.body?window.attachEvent("onscroll",this.DOMListener):this.item.attachEvent("onscroll",this.DOMListener),window.attachEvent("onresize",this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener("scroll",this.DOMListener,o),this.containerWatcher.destroy()):this.item.removeEventListener("scroll",this.DOMListener,o),window.removeEventListener("resize",this.DOMListener)):(this.item===document.body?(window.detachEvent("onscroll",this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent("onscroll",this.DOMListener),window.detachEvent("onresize",this.DOMListener))})},a.prototype.destroy=function(){},a.prototype.DOMListener=function(a){this.setStateFromDOM(a)},a.prototype.setStateFromDOM=function(a){var b=g(this.item),c=e(this.item),d=f(this.item);this.setState(b,c,d,a)},a.prototype.setState=function(a,b,c,d){var e=b!==this.viewportHeight||c!==this.contentHeight;if(this.latestEvent=d,this.viewportTop=a,this.viewportHeight=b,this.viewportBottom=a+b,this.contentHeight=c,e)for(var f=this.watchers.length;f--;)this.watchers[f].recalculateLocation();this.updateAndTriggerWatchers(d)},a.prototype.updateAndTriggerWatchers=function(a){for(var b=this.watchers.length;b--;)this.watchers[b].update();for(b=this.watchers.length;b--;)this.watchers[b].triggerCallbacks(a)},a.prototype.createCustomContainer=function(){return new a},a.prototype.createContainer=function(b){"string"==typeof b?b=document.querySelector(b):b&&b.length>0&&(b=b[0]);var c=new a(b,this);return c.setStateFromDOM(),c.listenToDOM(),c},a.prototype.create=function(a,b){"string"==typeof a?a=document.querySelector(a):a&&a.length>0&&(a=a[0]);var c=new l(this,a,b);return this.watchers.push(c),c},a.prototype.beget=function(a,b){return this.create(a,b)},a}();a.exports=p},function(a,b,c){"use strict";function d(a,b,c){function d(a,b){if(0!==a.length)for(u=a.length;u--;)v=a[u],v.callback.call(e,b,e),v.isOne&&a.splice(u,1)}var e=this;this.watchItem=b,this.container=a,c?c===+c?this.offsets={top:c,bottom:c}:this.offsets={top:c.top||n.top,bottom:c.bottom||n.bottom}:this.offsets=n,this.callbacks={};for(var o=0,p=m.length;o<p;o++)e.callbacks[m[o]]=[];this.locked=!1;var q,r,s,t,u,v;this.triggerCallbacks=function(a){switch(this.isInViewport&&!q&&d(this.callbacks[g],a),this.isFullyInViewport&&!r&&d(this.callbacks[h],a),this.isAboveViewport!==s&&this.isBelowViewport!==t&&(d(this.callbacks[f],a),r||this.isFullyInViewport||(d(this.callbacks[h],a),d(this.callbacks[j],a)),q||this.isInViewport||(d(this.callbacks[g],a),d(this.callbacks[i],a))),!this.isFullyInViewport&&r&&d(this.callbacks[j],a),!this.isInViewport&&q&&d(this.callbacks[i],a),this.isInViewport!==q&&d(this.callbacks[f],a),!0){case q!==this.isInViewport:case r!==this.isFullyInViewport:case s!==this.isAboveViewport:case t!==this.isBelowViewport:d(this.callbacks[l],a)}q=this.isInViewport,r=this.isFullyInViewport,s=this.isAboveViewport,t=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var a=this.top,b=this.bottom;if(this.watchItem.nodeName){var c=this.watchItem.style.display;"none"===c&&(this.watchItem.style.display="");for(var e=0,f=this.container;f.containerWatcher;)e+=f.containerWatcher.top-f.containerWatcher.container.viewportTop,f=f.containerWatcher.container;var g=this.watchItem.getBoundingClientRect();this.top=g.top+this.container.viewportTop-e,this.bottom=g.bottom+this.container.viewportTop-e,"none"===c&&(this.watchItem.style.display=c)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===a&&void 0===b||this.top===a&&this.bottom===b||d(this.callbacks[k],null)}},this.recalculateLocation(),this.update(),q=this.isInViewport,r=this.isFullyInViewport,s=this.isAboveViewport,t=this.isBelowViewport}var e=c(1),f=e.VISIBILITYCHANGE,g=e.ENTERVIEWPORT,h=e.FULLYENTERVIEWPORT,i=e.EXITVIEWPORT,j=e.PARTIALLYEXITVIEWPORT,k=e.LOCATIONCHANGE,l=e.STATECHANGE,m=e.eventTypes,n=e.defaultOffsets;d.prototype={on:function(a,b,c){switch(!0){case a===f&&!this.isInViewport&&this.isAboveViewport:case a===g&&this.isInViewport:case a===h&&this.isFullyInViewport:case a===i&&this.isAboveViewport&&!this.isInViewport:case a===j&&this.isInViewport&&this.isAboveViewport:if(b.call(this,this.container.latestEvent,this),c)return}if(!this.callbacks[a])throw new Error("Tried to add a scroll monitor listener of type "+a+". Your options are: "+m.join(", "));this.callbacks[a].push({callback:b,isOne:c||!1})},off:function(a,b){if(!this.callbacks[a])throw new Error("Tried to remove a scroll monitor listener of type "+a+". Your options are: "+m.join(", "));for(var c,d=0;c=this.callbacks[a][d];d++)if(c.callback===b){this.callbacks[a].splice(d,1);break}},one:function(a,b){this.on(a,b,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var a=this.container.watchers.indexOf(this),b=this;this.container.watchers.splice(a,1);for(var c=0,d=m.length;c<d;c++)b.callbacks[m[c]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var o=function(a){return function(b,c){this.on.call(this,a,b,c)}},p=0,q=m.length;p<q;p++){var r=m[p];d.prototype[r]=o(r)}a.exports=d}])});var initLazyLoad=function(){var a=new Blazy({selector:".js-lazy",successClass:"js-lazy-loaded",success:function(a){setTimeout(function(){a.classList.add("js-post-lazy-loaded")},1)},errorClass:"js-lazy-error",loadInvisible:!0});a.load(document.querySelectorAll(".js-manual-lazy"))},initStickyNav=function(){function a(a,b){b.isAboveViewport?document.body.classList.add("js-is-sticky"):(document.body.classList.remove("js-is-sticky"),removeActivePost(),updateUrl(null))}var b=document.querySelector(".js-nav");if(b){var c=document.querySelectorAll("[data-monitor]")[0],d=scrollMonitor.create(c,240);d.stateChange(a),a(null,d)}},initScrollMonitor=function(){function a(a,b){b.isFullyInViewport&&(setActivePost(b.watchItem.id),updateUrl(b.watchItem.id))}var b=document.querySelectorAll("[data-monitor]");if(b){var c=[];for(i=0,l=b.length;i<l;i++){var d=b[i],e=scrollMonitor.create(d,112);c[i]=e,e.stateChange(a)}for(i=0,l=c.length;i<l;i++)a(null,c[i])}},initSmoothScroll=function(){var a=document.querySelector(".js-home"),b=document.querySelectorAll(".js-nav-link");if(a&&b)for(a.addEventListener("click",function(a){a.preventDefault(),scrollTo(document.body,500,"easeInOutQuart",function(){updateUrl(null)})}),i=0,l=b.length;i<l;i++)b[i].addEventListener("click",function(a){a.preventDefault();var b=this.getAttribute("href"),c=b.substr(1);scrollTo(document.querySelector("#"+c),500,"easeInOutQuart",function(){setActivePost(c),updateUrl(c)})})};document.addEventListener("DOMContentLoaded",function(){initLazyLoad(),initScrollMonitor(),initSmoothScroll(),setTimeout(function(){initStickyNav()},0)});