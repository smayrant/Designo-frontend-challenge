/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 591:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/img/logo-dark.png
const logo_dark_namespaceObject = __webpack_require__.p + "img/logo-dark.png";
;// CONCATENATED MODULE: ./src/img/bg-pattern-hero-contact.svg
const bg_pattern_hero_contact_namespaceObject = __webpack_require__.p + "img/bg-pattern-hero-contact.svg";
;// CONCATENATED MODULE: ./src/img/error.svg
const error_namespaceObject = __webpack_require__.p + "img/error.svg";
;// CONCATENATED MODULE: ./src/img/canada.svg
const canada_namespaceObject = __webpack_require__.p + "img/canada.svg";
;// CONCATENATED MODULE: ./src/img/australia.svg
const australia_namespaceObject = __webpack_require__.p + "img/australia.svg";
;// CONCATENATED MODULE: ./src/img/united-kingdom.svg
const united_kingdom_namespaceObject = __webpack_require__.p + "img/united-kingdom.svg";
;// CONCATENATED MODULE: ./src/img/bg-pattern-small-circle.svg
const bg_pattern_small_circle_namespaceObject = __webpack_require__.p + "img/bg-pattern-small-circle.svg";
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
;// CONCATENATED MODULE: ./src/contact.js













 // Header images

var logoDark = document.querySelector(".header__logo-img");
logoDark.src = logo_dark_namespaceObject;
var heroBGImg = document.querySelector(".contact-us__container");
heroBGImg.style.backgroundImage = "url(\"".concat(bg_pattern_hero_contact_namespaceObject, "\")"); // Contact form images

var formErrorImg = document.querySelectorAll(".contact-us__form-warning-img"); // formError.src = error;

formErrorImg.forEach(function (errorImg) {
  errorImg.src = error_namespaceObject;
}); // Location images

var canadaImg = document.querySelector(".location__img--canada");
canadaImg.src = canada_namespaceObject;
var australiaImg = document.querySelector(".location__img--australia");
australiaImg.src = australia_namespaceObject;
var unitedKingdomImg = document.querySelector(".location__img--united-kingdom");
unitedKingdomImg.src = united_kingdom_namespaceObject;
var bg = document.querySelectorAll(".location__bg-img");
bg.forEach(function (elem) {
  elem.src = bg_pattern_small_circle_namespaceObject;
}); // Footer

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

burger.addEventListener("click", toggleVisibility.bind(null, navMenu, pageMask)); // form validation

var contact_form = document.querySelector(".contact-us__form");
var inputs = document.querySelectorAll("input");
var contact_textarea = document.querySelector("textarea");
contact_form.addEventListener("submit", function (e) {
  inputs.forEach(function (input) {
    if (input.value === "" || input.value == null) {
      e.preventDefault();
      input.nextElementSibling.classList.remove("no-display");
    } else {
      input.nextElementSibling.classList.add("no-display");
    }
  });

  if (contact_textarea.value === "" || contact_textarea.value == null) {
    e.preventDefault();
    contact_textarea.nextElementSibling.classList.remove("no-display");
  } else {
    contact_textarea.nextElementSibling.classList.add("no-display");
  }
});

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
/******/ 			631: 0,
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [449], () => (__webpack_require__(591)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;