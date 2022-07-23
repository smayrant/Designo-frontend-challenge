/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8435:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/img/logo-dark.png
const logo_dark_namespaceObject = __webpack_require__.p + "img/logo-dark.png";
;// CONCATENATED MODULE: ./src/img/bg-pattern.svg
const bg_pattern_namespaceObject = __webpack_require__.p + "img/bg-pattern.svg";
;// CONCATENATED MODULE: ./src/img/hero-phone.png
const hero_phone_namespaceObject = __webpack_require__.p + "img/hero-phone.png";
;// CONCATENATED MODULE: ./src/img/app-design.jpg
const app_design_namespaceObject = __webpack_require__.p + "img/app-design.jpg";
;// CONCATENATED MODULE: ./src/img/graphic-design.jpg
const graphic_design_namespaceObject = __webpack_require__.p + "img/graphic-design.jpg";
;// CONCATENATED MODULE: ./src/img/web-design.jpg
const web_design_namespaceObject = __webpack_require__.p + "img/web-design.jpg";
;// CONCATENATED MODULE: ./src/img/graphic-design-lg.jpg
const graphic_design_lg_namespaceObject = __webpack_require__.p + "img/graphic-design-lg.jpg";
;// CONCATENATED MODULE: ./src/img/app-design-lg.jpg
const app_design_lg_namespaceObject = __webpack_require__.p + "img/app-design-lg.jpg";
;// CONCATENATED MODULE: ./src/img/web-design-lg.jpg
const web_design_lg_namespaceObject = __webpack_require__.p + "img/web-design-lg.jpg";
;// CONCATENATED MODULE: ./src/img/bg-pattern-leaf.svg
const bg_pattern_leaf_namespaceObject = __webpack_require__.p + "img/bg-pattern-leaf.svg";
;// CONCATENATED MODULE: ./src/img/friendly.svg
const friendly_namespaceObject = __webpack_require__.p + "img/friendly.svg";
;// CONCATENATED MODULE: ./src/img/passionate.svg
const passionate_namespaceObject = __webpack_require__.p + "img/passionate.svg";
;// CONCATENATED MODULE: ./src/img/resourceful.svg
const resourceful_namespaceObject = __webpack_require__.p + "img/resourceful.svg";
;// CONCATENATED MODULE: ./src/img/bg-pattern-about-us.svg
const bg_pattern_about_us_namespaceObject = __webpack_require__.p + "img/bg-pattern-about-us.svg";
;// CONCATENATED MODULE: ./src/img/bg-pattern-cta.svg
const bg_pattern_cta_namespaceObject = __webpack_require__.p + "img/bg-pattern-cta.svg";
;// CONCATENATED MODULE: ./src/img/logo-light.png
const logo_light_namespaceObject = __webpack_require__.p + "img/logo-light.png";
;// CONCATENATED MODULE: ./src/img/icon-facebook.svg
const icon_facebook_namespaceObject = __webpack_require__.p + "img/icon-facebook.svg";
;// CONCATENATED MODULE: ./src/img/icon-instagram.svg
const icon_instagram_namespaceObject = __webpack_require__.p + "img/icon-instagram.svg";
;// CONCATENATED MODULE: ./src/img/icon-pinterest.svg
const icon_pinterest_namespaceObject = __webpack_require__.p + "img/icon-pinterest.svg";
;// CONCATENATED MODULE: ./src/img/icon-twitter.svg
const icon_twitter_namespaceObject = __webpack_require__.p + "img/icon-twitter.svg";
;// CONCATENATED MODULE: ./src/img/icon-youtube.svg
const icon_youtube_namespaceObject = __webpack_require__.p + "img/icon-youtube.svg";
;// CONCATENATED MODULE: ./src/index.js






















var logoDark = document.querySelector(".header__logo-img");
logoDark.src = logo_dark_namespaceObject;
var heroBG = document.querySelector(".hero ");
heroBG.style.backgroundImage = "url(\"".concat(bg_pattern_namespaceObject, "\")");
var phoneHero = document.querySelector(".hero__img");
phoneHero.src = hero_phone_namespaceObject; // Services

var designApp = document.querySelector(".services__img--app");
designApp.src = app_design_namespaceObject;
var designGraphic = document.querySelector(".services__img--graphic");
designGraphic.src = graphic_design_namespaceObject;
var designWeb = document.querySelector(".services__img--web");
designWeb.src = web_design_namespaceObject;
var designGraphicLg = document.querySelector(".services__img--graphic-desktop");
designGraphicLg.src = graphic_design_lg_namespaceObject;
var designAppLg = document.querySelector(".services__img--app-desktop");
designAppLg.src = app_design_lg_namespaceObject;
var designWebLg = document.querySelector(".services__img--web-desktop");
designWebLg.src = web_design_lg_namespaceObject; // About Us

var aboutBG = document.querySelector(".about-us__bg-img");
aboutBG.src = bg_pattern_leaf_namespaceObject;
var passionateImg = document.querySelector(".about-us__img--passionate");
passionateImg.src = passionate_namespaceObject;
var resourcefulImg = document.querySelector(".about-us__img--resourceful");
resourcefulImg.src = resourceful_namespaceObject;
var friendlyImg = document.querySelector(".about-us__img--friendly");
friendlyImg.src = friendly_namespaceObject;
var passionateBGImg = document.querySelector(".about-us__bg-img--passionate");
passionateBGImg.src = bg_pattern_about_us_namespaceObject;
var resourcefulBGImg = document.querySelector(".about-us__bg-img--resourceful");
resourcefulBGImg.src = bg_pattern_about_us_namespaceObject;
var friendlyBGImg = document.querySelector(".about-us__bg-img--friendly");
friendlyBGImg.src = bg_pattern_about_us_namespaceObject; // Contact

var contactBGImg = document.querySelector(".contact");
contactBGImg.style.backgroundImage = "url(\"".concat(bg_pattern_cta_namespaceObject, "\")"); // Footer

var logoLight = document.querySelector(".footer__logo");
logoLight.src = logo_light_namespaceObject;
var iconFb = document.querySelector(".footer__icon--fb");
iconFb.src = icon_facebook_namespaceObject;
var iconYt = document.querySelector(".footer__icon--yt");
iconYt.src = icon_youtube_namespaceObject;
var iconTw = document.querySelector(".footer__icon--tw");
iconTw.src = icon_twitter_namespaceObject;
var iconPt = document.querySelector(".footer__icon--pt");
iconPt.src = icon_pinterest_namespaceObject;
var iconIg = document.querySelector(".footer__icon--ig");
iconIg.src = icon_instagram_namespaceObject; // Get burger menu, page mask and menu elements

var burger = document.querySelector(".header__burger");
var pageMask = document.querySelector(".page-mask");
var navMenu = document.querySelector(".main-nav");

var toggleVisibility = function toggleVisibility() {
  document.body.classList.toggle("no-scroll");

  for (var _len = arguments.length, className = new Array(_len), _key = 0; _key < _len; _key++) {
    className[_key] = arguments[_key];
  }

  className.forEach(function (className) {
    className.classList.toggle("visible");
  });
};

burger.addEventListener("click", toggleVisibility.bind(null, navMenu, pageMask));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0,
/******/ 			449: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [449], () => (__webpack_require__(8435)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;