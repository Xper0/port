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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentSlide\", function() { return currentSlide; });\nvar slideIndex = 1;\nshowSlides(slideIndex);\nvar next = document.querySelector('.next');\nvar prev = document.querySelector('.prev');\nvar btnCircle = document.querySelectorAll('.slider-dots_item'); // Вперед/назад элементы управления\n\n/* Функция увеличивает индекс на 1, показывает следующй слайд*/\n\nfunction plusSlide() {\n  showSlides(slideIndex += 1);\n}\n/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/\n\n\nfunction minusSlide() {\n  showSlides(slideIndex -= 1);\n} // Элементы управления миниатюрами изображений\n\n\nfunction currentSlide(n) {\n  showSlides(slideIndex = n);\n}\n\nfunction showSlides(n) {\n  var i;\n  var slides = document.getElementsByClassName(\"item\");\n  var dots = document.getElementsByClassName(\"slider-dots_item\");\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\n  }\n\n  slides[slideIndex - 1].style.display = \"block\";\n  dots[slideIndex - 1].className += \" active\";\n} //export {slideIndex, showSlides, plusSlides, currentSlide }\n\n\nvar btnbuy = document.querySelectorAll(\".btnbuy\");\n\nfunction clickBtn(target) {\n  target.addEventListener('click', function () {\n    if (target === btnbuy[0]) {\n      document.location.href = \"https://wa.me/789777379428\";\n    } else {\n      document.location.href = \"http://samusu.ru/test/\";\n    }\n  });\n}\n\nclickBtn(btnbuy[0]);\nclickBtn(btnbuy[1]);\n\n/*\r\nbtnPrew.addEventListener('click', () => {\r\n    const itemLeft = Math.abs(position) / itemWidth;\r\n    position += itemLeft >= slideScroll ? movePosition : itemLeft * itemWidth;\r\n\r\n    setPosition()\r\n    checkBtns()\r\n    sliderActive(img, activeSlide)\r\n})\r\n\r\nbtnNext.addEventListener('click', () => {\r\n    const itemLeft = itemCounter - (Math.abs(position) + slideShow * itemWidth) / itemWidth;\r\n    position -= itemLeft >= slideScroll ? movePosition : itemLeft * itemWidth;\r\n\r\n\r\n\r\n    setPosition()\r\n    checkBtns()\r\n    sliderActive(img)\r\n})\r\n\r\nconst setPosition = () => {\r\n    track.style.transform = `translateX(${position}px)`\r\n}\r\n\r\n\r\n\r\n\r\nconst checkBtns = () =>{\r\n    btnPrew.disabled = slideIndex === 0;\r\n    btnNext.disabled = position <= -(itemCounter - slideShow) * itemWidth\r\n\r\n\r\n    btnPrew.disabled = position === 0;\r\n    btnNext.disabled = position <= -(itemCounter - slideShow) * itemWidth;\r\n\r\n}\r\nfunction sliderActive(img,  activeslide){\r\n    console.log(img)\r\n    console.log(activeslide)\r\n    //img.map(item  => {\r\n            //item.a\r\n        //}\r\n    //)\r\n\r\n}\r\n\r\n\r\ncheckBtns()\r\n*/\n\n/*\r\nbtnPrew.addEventListener('click', () => {\r\n    const btnLeft = Math.abs(position) / itemWidth;\r\n    position += btnLeft >=  slideScroll ? movePosition : btnLeft * itemWidth;\r\n    setPosition()\r\n    checkBtns()\r\n})\r\n\r\n\r\nbtnNext.addEventListener('click', () => {\r\n    const btnLeft = Math.abs(position) / itemWidth;\r\n    position -= btnLeft >=  slideScroll ? movePosition : btnLeft * itemWidth;\r\n    setPosition()\r\n    checkBtns()\r\n})\r\n\r\nconst setPosition = () => {\r\n    track.style.transform = `translateX(${position}px)`\r\n}\r\n\r\n\r\ncheckBtns()*/\n\n//# sourceURL=webpack:///./slider.js?");

/***/ })

/******/ });