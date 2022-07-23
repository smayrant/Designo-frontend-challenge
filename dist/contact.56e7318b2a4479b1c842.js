/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _img_logo_dark_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo-dark.png */ \"./src/img/logo-dark.png\");\n/* harmony import */ var _img_bg_pattern_hero_contact_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bg-pattern-hero-contact.svg */ \"./src/img/bg-pattern-hero-contact.svg\");\n/* harmony import */ var _img_error_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/error.svg */ \"./src/img/error.svg\");\n/* harmony import */ var _img_canada_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/canada.svg */ \"./src/img/canada.svg\");\n/* harmony import */ var _img_australia_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/australia.svg */ \"./src/img/australia.svg\");\n/* harmony import */ var _img_united_kingdom_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/united-kingdom.svg */ \"./src/img/united-kingdom.svg\");\n/* harmony import */ var _img_bg_pattern_small_circle_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/bg-pattern-small-circle.svg */ \"./src/img/bg-pattern-small-circle.svg\");\n/* harmony import */ var _img_logo_light_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/logo-light.png */ \"./src/img/logo-light.png\");\n/* harmony import */ var _img_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/icon-facebook.svg */ \"./src/img/icon-facebook.svg\");\n/* harmony import */ var _img_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/icon-instagram.svg */ \"./src/img/icon-instagram.svg\");\n/* harmony import */ var _img_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/icon-pinterest.svg */ \"./src/img/icon-pinterest.svg\");\n/* harmony import */ var _img_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/icon-twitter.svg */ \"./src/img/icon-twitter.svg\");\n/* harmony import */ var _img_icon_youtube_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/icon-youtube.svg */ \"./src/img/icon-youtube.svg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Header images\n\nvar logoDark = document.querySelector(\".header__logo-img\");\nlogoDark.src = _img_logo_dark_png__WEBPACK_IMPORTED_MODULE_1__;\nvar heroBGImg = document.querySelector(\".contact-us__container\");\nheroBGImg.style.backgroundImage = \"url(\\\"\".concat(_img_bg_pattern_hero_contact_svg__WEBPACK_IMPORTED_MODULE_2__, \"\\\")\"); // Contact form images\n\nvar formErrorImg = document.querySelectorAll(\".contact-us__form-warning-img\"); // formError.src = error;\n\nformErrorImg.forEach(function (errorImg) {\n  errorImg.src = _img_error_svg__WEBPACK_IMPORTED_MODULE_3__;\n}); // Location images\n\nvar canadaImg = document.querySelector(\".location__img--canada\");\ncanadaImg.src = _img_canada_svg__WEBPACK_IMPORTED_MODULE_4__;\nvar australiaImg = document.querySelector(\".location__img--australia\");\naustraliaImg.src = _img_australia_svg__WEBPACK_IMPORTED_MODULE_5__;\nvar unitedKingdomImg = document.querySelector(\".location__img--united-kingdom\");\nunitedKingdomImg.src = _img_united_kingdom_svg__WEBPACK_IMPORTED_MODULE_6__;\nvar bg = document.querySelectorAll(\".location__bg-img\");\nbg.forEach(function (elem) {\n  elem.src = _img_bg_pattern_small_circle_svg__WEBPACK_IMPORTED_MODULE_7__;\n}); // Footer\n\nvar logoLight = document.querySelector(\".footer__logo\");\nlogoLight.src = _img_logo_light_png__WEBPACK_IMPORTED_MODULE_8__;\nvar iconFb = document.querySelector(\".footer__icon--fb\");\niconFb.src = _img_icon_facebook_svg__WEBPACK_IMPORTED_MODULE_9__;\nvar iconYt = document.querySelector(\".footer__icon--yt\");\niconYt.src = _img_icon_youtube_svg__WEBPACK_IMPORTED_MODULE_13__;\nvar iconTw = document.querySelector(\".footer__icon--tw\");\niconTw.src = _img_icon_twitter_svg__WEBPACK_IMPORTED_MODULE_12__;\nvar iconPt = document.querySelector(\".footer__icon--pt\");\niconPt.src = _img_icon_pinterest_svg__WEBPACK_IMPORTED_MODULE_11__;\nvar iconIg = document.querySelector(\".footer__icon--ig\");\niconIg.src = _img_icon_instagram_svg__WEBPACK_IMPORTED_MODULE_10__; // Get burger menu, page mask and menu elements\n\nvar burger = document.querySelector(\".header__burger\");\nvar pageMask = document.querySelector(\".page-mask\");\nvar navMenu = document.querySelector(\".main-nav\");\n\nvar toggleVisibility = function toggleVisibility() {\n  document.body.classList.toggle(\"no-scroll\");\n\n  for (var _len = arguments.length, className = new Array(_len), _key = 0; _key < _len; _key++) {\n    className[_key] = arguments[_key];\n  }\n\n  className.forEach(function (className) {\n    className.classList.toggle(\"visible\");\n  });\n};\n\nburger.addEventListener(\"click\", toggleVisibility.bind(null, navMenu, pageMask)); // form validation\n\nvar form = document.querySelector(\".contact-us__form\");\nvar inputs = document.querySelectorAll(\"input\");\nvar textarea = document.querySelector(\"textarea\");\nform.addEventListener(\"submit\", function (e) {\n  inputs.forEach(function (input) {\n    if (input.value === \"\" || input.value == null) {\n      e.preventDefault();\n      input.nextElementSibling.classList.remove(\"no-display\");\n    } else {\n      input.nextElementSibling.classList.add(\"no-display\");\n    }\n  });\n\n  if (textarea.value === \"\" || textarea.value == null) {\n    e.preventDefault();\n    textarea.nextElementSibling.classList.remove(\"no-display\");\n  } else {\n    textarea.nextElementSibling.classList.add(\"no-display\");\n  }\n});\n\n//# sourceURL=webpack://portfolio/./src/contact.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/main.scss?");

/***/ }),

/***/ "./src/img/australia.svg":
/*!*******************************!*\
  !*** ./src/img/australia.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/australia.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/australia.svg?");

/***/ }),

/***/ "./src/img/bg-pattern-hero-contact.svg":
/*!*********************************************!*\
  !*** ./src/img/bg-pattern-hero-contact.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-pattern-hero-contact.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-pattern-hero-contact.svg?");

/***/ }),

/***/ "./src/img/bg-pattern-small-circle.svg":
/*!*********************************************!*\
  !*** ./src/img/bg-pattern-small-circle.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-pattern-small-circle.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-pattern-small-circle.svg?");

/***/ }),

/***/ "./src/img/canada.svg":
/*!****************************!*\
  !*** ./src/img/canada.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/canada.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/canada.svg?");

/***/ }),

/***/ "./src/img/error.svg":
/*!***************************!*\
  !*** ./src/img/error.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/error.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/error.svg?");

/***/ }),

/***/ "./src/img/icon-facebook.svg":
/*!***********************************!*\
  !*** ./src/img/icon-facebook.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icon-facebook.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/icon-facebook.svg?");

/***/ }),

/***/ "./src/img/icon-instagram.svg":
/*!************************************!*\
  !*** ./src/img/icon-instagram.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icon-instagram.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/icon-instagram.svg?");

/***/ }),

/***/ "./src/img/icon-pinterest.svg":
/*!************************************!*\
  !*** ./src/img/icon-pinterest.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icon-pinterest.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/icon-pinterest.svg?");

/***/ }),

/***/ "./src/img/icon-twitter.svg":
/*!**********************************!*\
  !*** ./src/img/icon-twitter.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icon-twitter.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/icon-twitter.svg?");

/***/ }),

/***/ "./src/img/icon-youtube.svg":
/*!**********************************!*\
  !*** ./src/img/icon-youtube.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/icon-youtube.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/icon-youtube.svg?");

/***/ }),

/***/ "./src/img/logo-dark.png":
/*!*******************************!*\
  !*** ./src/img/logo-dark.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logo-dark.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/logo-dark.png?");

/***/ }),

/***/ "./src/img/logo-light.png":
/*!********************************!*\
  !*** ./src/img/logo-light.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logo-light.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/logo-light.png?");

/***/ }),

/***/ "./src/img/united-kingdom.svg":
/*!************************************!*\
  !*** ./src/img/united-kingdom.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/united-kingdom.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/united-kingdom.svg?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
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
/******/ 			"contact": 0,
/******/ 			"src_styles_main_scss-src_styles_main_scss": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_styles_main_scss-src_styles_main_scss"], () => (__webpack_require__("./src/contact.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;