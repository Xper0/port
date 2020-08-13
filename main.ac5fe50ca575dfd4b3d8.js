/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/adaptiv.css":
/*!****************************!*\
  !*** ./assets/adaptiv.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/adaptiv.css?");

/***/ }),

/***/ "./assets/style.css":
/*!**************************!*\
  !*** ./assets/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/style.css?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ \"./assets/style.css\");\n/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_adaptiv_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/adaptiv.css */ \"./assets/adaptiv.css\");\n/* harmony import */ var _assets_adaptiv_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_adaptiv_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.js */ \"./slider.js\");\n\n\n\n\nwindow.currentSlide = _slider_js__WEBPACK_IMPORTED_MODULE_2__[\"currentSlide\"];\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! exports provided: currentSlide */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\slider.js: `currentSlide` has already been exported. Exported identifiers must be unique. (61:8)\\n\\n\\u001b[0m \\u001b[90m 59 | \\u001b[39mclickBtn(btnbuy[\\u001b[35m1\\u001b[39m])\\u001b[0m\\n\\u001b[0m \\u001b[90m 60 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 61 | \\u001b[39m\\u001b[36mexport\\u001b[39m {currentSlide}\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 62 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 63 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 64 | \\u001b[39m\\u001b[0m\\n    at Object._raise (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:757:17)\\n    at Object.raiseWithData (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:750:17)\\n    at Object.raise (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:744:17)\\n    at Object.checkDuplicateExports (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12559:12)\\n    at Object.checkExport (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12498:16)\\n    at Object.parseExport (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12302:12)\\n    at Object.parseStatementContent (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11307:27)\\n    at Object.parseStatement (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11203:17)\\n    at Object.parseBlockOrModuleBlockBody (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11778:25)\\n    at Object.parseBlockBody (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11764:10)\\n    at Object.parseTopLevel (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11134:10)\\n    at Object.parse (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12836:10)\\n    at parse (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12889:38)\\n    at parser (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\gensync\\\\index.js:266:13\\n    at async.call.result.err.err (D:\\\\информ прогр\\\\опа\\\\осовы html\\\\platform\\\\node_modules\\\\gensync\\\\index.js:216:11)\");\n\n//# sourceURL=webpack:///./slider.js?");

/***/ })

/******/ });