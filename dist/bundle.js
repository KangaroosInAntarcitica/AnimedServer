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
/******/ 	return __webpack_require__(__webpack_require__.s = "./static/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fonts/Open_Sans/OpenSans-Bold.ttf":
/*!*******************************************!*\
  !*** ./fonts/Open_Sans/OpenSans-Bold.ttf ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts_dist/OpenSans-Bold.ttf\";\n\n//# sourceURL=webpack:///./fonts/Open_Sans/OpenSans-Bold.ttf?");

/***/ }),

/***/ "./fonts/Open_Sans/OpenSans-ExtraBold.ttf":
/*!************************************************!*\
  !*** ./fonts/Open_Sans/OpenSans-ExtraBold.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts_dist/OpenSans-ExtraBold.ttf\";\n\n//# sourceURL=webpack:///./fonts/Open_Sans/OpenSans-ExtraBold.ttf?");

/***/ }),

/***/ "./fonts/Open_Sans/OpenSans-Light.ttf":
/*!********************************************!*\
  !*** ./fonts/Open_Sans/OpenSans-Light.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts_dist/OpenSans-Light.ttf\";\n\n//# sourceURL=webpack:///./fonts/Open_Sans/OpenSans-Light.ttf?");

/***/ }),

/***/ "./fonts/Open_Sans/OpenSans-Regular.ttf":
/*!**********************************************!*\
  !*** ./fonts/Open_Sans/OpenSans-Regular.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts_dist/OpenSans-Regular.ttf\";\n\n//# sourceURL=webpack:///./fonts/Open_Sans/OpenSans-Regular.ttf?");

/***/ }),

/***/ "./fonts/Pacifico/Pacifico-Regular.ttf":
/*!*********************************************!*\
  !*** ./fonts/Pacifico/Pacifico-Regular.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts_dist/Pacifico-Regular.ttf\";\n\n//# sourceURL=webpack:///./fonts/Pacifico/Pacifico-Regular.ttf?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/Article/Article.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/Article/Article.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Article {\\n  font-size: 20px;\\n  color: #212129AA; }\\n  .Article__paragraph {\\n    margin: 0; }\\n  .Article__title {\\n    font-size: 52px;\\n    font-weight: 300;\\n    color: #212129;\\n    margin: 20px 0;\\n    padding: 0 10px;\\n    border-bottom: 4px solid #eeeeee; }\\n  .Article__sub-title {\\n    font-size: 32px;\\n    color: #212129CC;\\n    font-weight: normal;\\n    padding: 0 20px;\\n    margin: 10px 0;\\n    border-left: 6px solid #ff8a00; }\\n    .Article__sub-title:hover {\\n      border-color: #ffa640; }\\n  .Article__break {\\n    display: block;\\n    height: 15px; }\\n  .Article__bold {\\n    font-weight: bold; }\\n  .Article__italics {\\n    font-style: italic; }\\n  .Article__mark {\\n    background-color: #ffa640;\\n    padding-left: 2px;\\n    padding-right: 2px;\\n    color: #FFFFFF; }\\n  .Article__clear {\\n    font-size: 20px;\\n    color: #212129AA;\\n    font-weight: normal;\\n    text-decoration: none;\\n    font-style: normal; }\\n  .Article__quote {\\n    color: #333333;\\n    background-color: #EEE;\\n    padding-left: 2px;\\n    padding-right: 2px; }\\n  .Article__quote::before {\\n    color: #666666;\\n    content: open-quote; }\\n  .Article__quote::after {\\n    color: #666666;\\n    content: close-quote; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/Article/Article.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/Header/Header.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/Header/Header.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Header {\\n  background-color: #212129;\\n  width: 100%;\\n  height: 80px; }\\n  .Header__container {\\n    box-sizing: border-box;\\n    height: 100%;\\n    width: 100%;\\n    margin: 0 auto;\\n    max-width: 1024px;\\n    padding: 0 10px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center; }\\n  .Header__title-container {\\n    display: flex;\\n    flex-direction: row;\\n    justify-content: flex-start;\\n    align-items: flex-end; }\\n  .Header__title {\\n    line-height: 80px;\\n    margin: 0;\\n    color: #eeeeee;\\n    font-family: \\\"Pacifico\\\", cursive;\\n    font-size: 50px; }\\n  .Header__name {\\n    line-height: 60px;\\n    margin: 0 0 0 10px;\\n    color: #ff8a00;\\n    font-family: \\\"Open Sans\\\", sans-serif;\\n    font-weight: 300;\\n    font-size: 30px; }\\n  .Header__options-container {\\n    height: 100%;\\n    box-sizing: border-box;\\n    display: flex;\\n    align-items: stretch;\\n    padding-top: 30px; }\\n  .Header__option {\\n    box-sizing: border-box;\\n    padding: 10px 20px 6px;\\n    border-bottom: 4px solid transparent;\\n    color: #eeeeee;\\n    font-size: 20px;\\n    display: flex;\\n    align-items: flex-end;\\n    cursor: pointer;\\n    transition: 0.5s; }\\n    .Header__option_selected {\\n      border-bottom-color: #ff8a00; }\\n    .Header__option:hover {\\n      border-bottom-color: #ffa640;\\n      background: #eeeeee11;\\n      color: #ffa640; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/Header/Header.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/UserPage/UserPage.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/UserPage/UserPage.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".Login {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center; }\\n  .Login__container {\\n    width: 200px;\\n    display: flex;\\n    flex-direction: column; }\\n  .Login__form-title {\\n    font-size: 34px;\\n    color: #ffa640;\\n    font-weight: 300;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    margin: 20px 0 4px;\\n    border-bottom: 4px solid #eeeeee; }\\n  .Login__input {\\n    box-sizing: border-box;\\n    border: 2px solid #eeeeee;\\n    height: 30px;\\n    min-width: 160px;\\n    outline: none;\\n    background-color: #FFF !important;\\n    border-radius: 4px;\\n    padding: 0 4px;\\n    font-size: 16px;\\n    color: #21212988;\\n    margin-top: 10px;\\n    transition: 0.4s; }\\n    .Login__input:hover, .Login__input:focus {\\n      border-color: #ffa640; }\\n    .Login__input::placeholder {\\n      color: #21212944; }\\n    .Login__input:disabled {\\n      opacity: 0.3; }\\n  .Login__button {\\n    box-sizing: border-box;\\n    cursor: pointer;\\n    height: 30px;\\n    min-width: 160px;\\n    outline: none;\\n    background-color: #ffa640;\\n    border-radius: 4px;\\n    color: white;\\n    font-size: 16px;\\n    font-weight: 800;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    border: none;\\n    margin-top: 30px;\\n    transition: 0.2s; }\\n    .Login__button:hover, .Login__button:active {\\n      background-color: #ff8a00; }\\n  .Login__status {\\n    display: block;\\n    box-sizing: border-box;\\n    height: 24px;\\n    font-size: 20px;\\n    font-weight: 300;\\n    color: #eeeeee;\\n    align-self: center;\\n    transition: color 0.6s; }\\n    .Login__status.error {\\n      color: #FF3BBF; }\\n    .Login__status.success {\\n      color: #4d91ff; }\\n    .Login__status.loading {\\n      color: #eeeeee; }\\n  .Login__alternative {\\n    cursor: pointer;\\n    border: none;\\n    outline: none;\\n    background: none;\\n    font-size: 14px;\\n    color: #ffa640;\\n    font-weight: 300;\\n    align-self: center;\\n    margin-top: 6px; }\\n    .Login__alternative:hover, .Login__alternative:active {\\n      text-decoration: underline;\\n      color: #ffa640; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/UserPage/UserPage.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./styles/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./styles/main.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/Open_Sans/OpenSans-Regular.ttf */ \"./fonts/Open_Sans/OpenSans-Regular.ttf\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../fonts/Open_Sans/OpenSans-Bold.ttf */ \"./fonts/Open_Sans/OpenSans-Bold.ttf\"));\nvar ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../fonts/Open_Sans/OpenSans-ExtraBold.ttf */ \"./fonts/Open_Sans/OpenSans-ExtraBold.ttf\"));\nvar ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../fonts/Open_Sans/OpenSans-Light.ttf */ \"./fonts/Open_Sans/OpenSans-Light.ttf\"));\nvar ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../fonts/Pacifico/Pacifico-Regular.ttf */ \"./fonts/Pacifico/Pacifico-Regular.ttf\"));\n\n// Module\nexports.push([module.i, \"@font-face {\\n  src: url(\" + ___CSS_LOADER_URL___0___ + \");\\n  font-family: \\\"Open Sans\\\";\\n  font-weight: normal; }\\n\\n@font-face {\\n  src: url(\" + ___CSS_LOADER_URL___1___ + \");\\n  font-family: \\\"Open Sans\\\";\\n  font-weight: bold; }\\n\\n@font-face {\\n  src: url(\" + ___CSS_LOADER_URL___2___ + \");\\n  font-family: \\\"Open Sans\\\";\\n  font-weight: 800; }\\n\\n@font-face {\\n  src: url(\" + ___CSS_LOADER_URL___3___ + \");\\n  font-family: \\\"Open Sans\\\";\\n  font-weight: 300; }\\n\\n@font-face {\\n  src: url(\" + ___CSS_LOADER_URL___4___ + \");\\n  font-family: \\\"Pacifico\\\";\\n  font-weight: normal; }\\n\\nbody {\\n  margin: 0;\\n  width: 100%;\\n  font-family: \\\"Open Sans\\\", sans-serif; }\\n\\n.Main {\\n  box-sizing: border-box;\\n  display: block;\\n  width: 100%;\\n  max-width: 1024px;\\n  margin: 0 auto;\\n  padding: 0 10px; }\\n  .Main__container {\\n    display: block;\\n    width: 100%; }\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./static/Article/Article.js":
/*!***********************************!*\
  !*** ./static/Article/Article.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderable */ \"./static/Renderable/index.js\");\n/* harmony import */ var _Parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parser */ \"./static/Article/Parser.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./static/actions/index.js\");\n/* harmony import */ var _Article_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article.scss */ \"./static/Article/Article.scss\");\n/* harmony import */ var _Article_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Article_scss__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Article extends _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(...children) {\r\n        super();\r\n\r\n        this.createInlineNodeFromType = this.createInlineNodeFromType.bind(this);\r\n        this.createNodeFromType = this.createNodeFromType.bind(this);\r\n\r\n        this.articleId = null;\r\n    }\r\n\r\n    clear() {\r\n        for (let node of this.element.children) {\r\n            this.element.removeChild(node);\r\n        }\r\n    }\r\n\r\n    locationListener(location) {\r\n        if (location && location.params) {\r\n            const id = Number(location.params.articleId);\r\n\r\n            console.log(\"id\", id);\r\n            if (id !== this.articleId) {\r\n                this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getArticle(id));\r\n            }\r\n            this.articleId = id;\r\n        }\r\n    }\r\n\r\n    articleListener(article) {\r\n        if (!article) {\r\n            return;\r\n        }\r\n\r\n        let articleData = article.data[this.articleId];\r\n        console.log(\"articleData\", articleData);\r\n        if (articleData) {\r\n            this.clear();\r\n            this.parseMarkRight(this.element, articleData.content);\r\n        }\r\n    }\r\n\r\n    create() {\r\n        let element = this.createSelf(\"article\", this.block());\r\n        this.error = this.crel(\"div\", this.block(\"error\"));\r\n\r\n        const text = `\r\n        # Header # \r\n        ##\r\n        Sub header \r\n        / so that is how we do /\r\n        ##\r\n        This is a *_long text_* that has many words and just one sentence.\r\n        \r\n        I don't care \\`about\\` all \"the other stuff\". Yep.\r\n        `\r\n        ;\r\n\r\n        this.globalStorage.registerListener(this.articleListener.bind(this), \"article\");\r\n        this.globalStorage.registerListener(this.locationListener.bind(this), \"location\");\r\n    }\r\n\r\n\r\n    createInlineNodeFromType(type) {\r\n        switch(type) {\r\n            case \"*\": return this.crel(\"b\", this.block(\"bold\"));\r\n            case \"_\": return this.crel(\"i\", this.block(\"italics\"));\r\n            case \"`\": return this.crel(\"mark\", this.block(\"mark\"));\r\n            case \"\\\"\": return this.crel(\"quote\", this.block(\"quote\"));\r\n            case \"/\": return this.crel(\"span\", this.block(\"clear\"));\r\n            default: return this.crel(\"span\");\r\n        }\r\n    }\r\n\r\n    createNodeFromType(type, block=true) {\r\n        if (!block) return this.createInlineNodeFromType(type);\r\n\r\n        switch(type) {\r\n            case \"#\": return this.crel(\"h1\", this.block(\"title\"));\r\n            case \"##\": return this.crel(\"h2\", this.block(\"sub-title\"));\r\n            case \"\": return this.crel(\"p\", this.block(\"paragraph\"));\r\n            case \"\\n\": return this.crel(\"div\", this.block(\"break\"));\r\n        }\r\n    }\r\n\r\n    parseMarkRight(parent, text) {\r\n        Object(_Parser__WEBPACK_IMPORTED_MODULE_1__[\"parseFormat\"])(parent, text, this.BLOCK_TAGS, this.INLINE_TAGS, this.createNodeFromType);\r\n    }\r\n}\r\n\r\nArticle.prototype.INLINE_TAGS = [\"*\", \"_\", \"`\", \"\\\"\", \"/\"];\r\nArticle.prototype.BLOCK_TAGS = [\"##\", \"#\"];\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Article);\r\n\n\n//# sourceURL=webpack:///./static/Article/Article.js?");

/***/ }),

/***/ "./static/Article/Article.scss":
/*!*************************************!*\
  !*** ./static/Article/Article.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Article.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/Article/Article.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/Article/Article.scss?");

/***/ }),

/***/ "./static/Article/Parser.js":
/*!**********************************!*\
  !*** ./static/Article/Parser.js ***!
  \**********************************/
/*! exports provided: parseFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseFormat\", function() { return parseFormat; });\nconst passes = (text, i, formatTag) => {\r\n    let matches = true;\r\n    for (let j = 0; j < formatTag.length; ++j) {\r\n        if (formatTag[j] !== text[i + j]) matches = false;\r\n    }\r\n    if (matches) return formatTag;\r\n};\r\n\r\nconst passAll = (text, i, formatTags) => {\r\n    for (let formatTag of formatTags) {\r\n        if (passes(text, i, formatTag)) return formatTag;\r\n    }\r\n};\r\n\r\nconst tagPasses = (text, i, formatTag) => {\r\n    let beginPasses = true;\r\n    for (let tagI = 0; tagI < formatTag.length; ++tagI) {\r\n        if (text[i + tagI] !== formatTag[tagI]) beginPasses = false;\r\n    }\r\n    let textStart = i + formatTag.length;\r\n\r\n    if (!beginPasses) return false;\r\n\r\n    for (let j = i + formatTag.length; j < text.length; ++j) {\r\n        let endPasses = true;\r\n\r\n        for (let tagI = 0; tagI < formatTag.length; ++tagI) {\r\n            if (text[j + tagI] !== formatTag[tagI]) endPasses = false;\r\n        }\r\n\r\n        if (endPasses) {\r\n            let tagEnd = j + formatTag.length;\r\n            return [formatTag, text.substring(textStart, j), tagEnd];\r\n        }\r\n    }\r\n\r\n    return false;\r\n};\r\n\r\nconst tagsPass = (text, i, formatTags) => {\r\n    for (let formatTag of formatTags) {\r\n        let value = tagPasses(text, i, formatTag);\r\n        if (value) return value;\r\n    }\r\n\r\n    return false;\r\n};\r\n\r\n\r\nconst parseFormat = (parent, text, blockTags, inlineTags, createNode, block=true) => {\r\n    // parent - HTML node\r\n    // text - formatted text\r\n    // blockTags, inlineTags - array of strings of tags to use as format\r\n    // createNode (string formatTag, bool block) => HTML node\r\n    // block - parent tag is block or not\r\n    const ESCAPE_CHARACTER = \"\\\\\";\r\n    const BREAK_CHARACTER = \"\\n\";\r\n\r\n    let i = 0;\r\n\r\n    let currentParagraph = [];\r\n    let breakRequired = false;\r\n    let paragraphNum = 0;\r\n    let currentText = \"\";\r\n    const handleText = (paragraph=false, end=false) => {\r\n        if (currentText.trim()) currentParagraph.push(document.createTextNode(currentText));\r\n\r\n        let paragraphRequired = true;\r\n\r\n        if (end && paragraphNum === 0) {\r\n            for (let node of currentParagraph) parent.appendChild(node);\r\n            paragraphRequired = false;\r\n        } else if (!paragraph || !block) {\r\n            paragraphRequired = false;\r\n        }\r\n\r\n        if (paragraphRequired) {\r\n            if (currentParagraph.length === 0) {\r\n                breakRequired = paragraphNum !== 0;\r\n                return;\r\n            }\r\n\r\n            checkBreak();\r\n            paragraphNum += 1;\r\n\r\n            let parNode = createNode(\"\", true);\r\n            for (let node of currentParagraph) {\r\n                parNode.appendChild(node);\r\n            }\r\n            parent.appendChild(parNode);\r\n\r\n            currentParagraph = [];\r\n        }\r\n\r\n        currentText = \"\";\r\n    };\r\n\r\n    const checkBreak = () => {\r\n        if (breakRequired) {\r\n            parent.appendChild(createNode(\"\\n\"));\r\n            breakRequired = false;\r\n        }\r\n    };\r\n\r\n\r\n    while (i < text.length) {\r\n        let c = text[i];\r\n\r\n        if (c === ESCAPE_CHARACTER) {\r\n            i += 2;\r\n            continue;\r\n        }\r\n\r\n        let blockTag = block && tagsPass(text, i, blockTags);\r\n        if (blockTag) {\r\n            handleText(true);\r\n            let [formatTag, innerText, nextI] = blockTag;\r\n            i = nextI;\r\n\r\n            let node = createNode(formatTag, true);\r\n            parseFormat(node, innerText, blockTags, inlineTags, createNode, true);\r\n            checkBreak();\r\n            parent.appendChild(node);\r\n        }\r\n\r\n        let inlineTag = !blockTag && tagsPass(text, i, inlineTags);\r\n        if (inlineTag) {\r\n            handleText(false);\r\n            let [formatTag, innerText, nextI] = inlineTag;\r\n            i = nextI;\r\n\r\n            let node = createNode(formatTag, false);\r\n            parseFormat(node, innerText, blockTags, inlineTags, createNode, false);\r\n            currentParagraph.push(node);\r\n        }\r\n\r\n        if (!blockTag && !inlineTag) {\r\n            if (c === BREAK_CHARACTER) {\r\n                handleText(true);\r\n            } else {\r\n                currentText += c;\r\n            }\r\n\r\n            ++i;\r\n        }\r\n    }\r\n\r\n    handleText(false, true);\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./static/Article/Parser.js?");

/***/ }),

/***/ "./static/Article/index.js":
/*!*********************************!*\
  !*** ./static/Article/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article */ \"./static/Article/Article.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Article__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./static/Article/index.js?");

/***/ }),

/***/ "./static/Header/Header.js":
/*!*********************************!*\
  !*** ./static/Header/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderable */ \"./static/Renderable/index.js\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ \"./static/Header/Header.scss\");\n/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\nclass Header extends _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"Renderable\"] {\r\n    create () {\r\n        let element = this.createSelf(\"div\", this.block());\r\n\r\n        let container = this.crel(\"div\", this.block(\"container\"));\r\n        element.appendChild(container);\r\n\r\n        let titleContainer = this.crel(\"div\", this.block(\"title-container\"));\r\n        container.appendChild(titleContainer);\r\n        let title = this.crel(\"h1\", this.block(\"title\"), \"Animed\");\r\n        titleContainer.appendChild(title);\r\n        let name = this.crel(\"h2\", this.block(\"name\"), \"Фізика\");\r\n        titleContainer.appendChild(name);\r\n\r\n        // let optionsContainer = this.crel(\"div\", this.block(\"options-container\"));\r\n        // container.appendChild(optionsContainer);\r\n        // let option = this.crel(\"a\", this.block(\"option\", \"selected\"), \"Увійти\");\r\n        // optionsContainer.appendChild(option);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\r\n\r\n\n\n//# sourceURL=webpack:///./static/Header/Header.js?");

/***/ }),

/***/ "./static/Header/Header.scss":
/*!***********************************!*\
  !*** ./static/Header/Header.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Header.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/Header/Header.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/Header/Header.scss?");

/***/ }),

/***/ "./static/Header/index.js":
/*!********************************!*\
  !*** ./static/Header/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./static/Header/Header.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack:///./static/Header/index.js?");

/***/ }),

/***/ "./static/Renderable/Body.js":
/*!***********************************!*\
  !*** ./static/Renderable/Body.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderable */ \"./static/Renderable/Renderable.js\");\n\r\n\r\nclass Body extends _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(...children) {\r\n        super(...children);\r\n    }\r\n\r\n    create () {\r\n        this.element = document.querySelector(\"body\");\r\n        if (!this.element) throw Error(\"Failed to create body element\");\r\n        this.createChildren();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Body.js?");

/***/ }),

/***/ "./static/Renderable/Location/LocationSwitch.js":
/*!******************************************************!*\
  !*** ./static/Renderable/Location/LocationSwitch.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LocationSwitch; });\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderable */ \"./static/Renderable/Renderable.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ \"./static/Renderable/Location/location.js\");\n\r\n\r\n\r\n\r\nclass LocationSwitch extends _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(options) {\r\n        super(null);\r\n\r\n        if (!(options instanceof Object))\r\n            throw Error(\"Options parameter should be an Object for LocationSwitch\");\r\n        for (let key of Object.keys(options)) {\r\n            if (!(options[key].prototype instanceof _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]))\r\n                throw Error(\"Each option value for LocationSwitch should be a Renderable subclass\");\r\n        }\r\n\r\n        this.options = options;\r\n        this.prevParamsPath = null;\r\n\r\n        if (this.globalStorage) {\r\n            this.globalStorage.registerListener(this.updateLocation.bind(this), \"location\");\r\n        }\r\n    }\r\n\r\n    splitPath(path) {\r\n        if (!path) return [];\r\n        return path.split(\"/\").filter(p => p);\r\n    }\r\n\r\n    findParamPath(location) {\r\n        let path = this.splitPath(location.path);\r\n\r\n        let passedParams, passedKey;\r\n        for (let key of Object.keys(this.options)) {\r\n            key = this.splitPath(key);\r\n            if (key.length > path.length) continue;\r\n\r\n            const params = {};\r\n            let keyPassed = true;\r\n            for (let i = 0; i < key.length; ++i) {\r\n                if (key[i].startsWith(\":\")) {\r\n                    params[key[i].substring(1)] = path[i];\r\n                }\r\n                else if (key[i] !== path[i]) {\r\n                    keyPassed = false; break;\r\n                }\r\n            }\r\n\r\n            if (keyPassed !== false) {\r\n                if (!passedKey || key.length > passedKey.length) {\r\n                    passedKey = key;\r\n                    passedParams = params;\r\n                }\r\n            }\r\n        }\r\n\r\n        if (passedKey instanceof Array)\r\n            return {paramsPath: \"/\" + passedKey.join(\"/\"), params: passedParams};\r\n        else return {};\r\n    }\r\n\r\n    updateLocation(location) {\r\n        if (!location) return;\r\n        const {paramsPath, params} = this.findParamPath(location);\r\n\r\n        if (paramsPath && this.globalStorage) {\r\n            if (this.prevParamsPath === paramsPath) return;\r\n\r\n            this.prevParamsPath = paramsPath;\r\n            this.globalStorage.update(Object(_location__WEBPACK_IMPORTED_MODULE_1__[\"setParamsAction\"])(params, paramsPath));\r\n            this.setElement(this.options[paramsPath])\r\n        }\r\n    }\r\n\r\n    setElement(Element) {\r\n        let element = new Element();\r\n        element.createAll();\r\n        element = element.element;\r\n\r\n        if (this.element && this.element.parentNode)\r\n            this.element.parentNode.replaceChild(element, this.element);\r\n        this.element = element;\r\n    }\r\n\r\n    create() {\r\n        this.element = this.createSelf(\"div\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Location/LocationSwitch.js?");

/***/ }),

/***/ "./static/Renderable/Location/index.js":
/*!*********************************************!*\
  !*** ./static/Renderable/Location/index.js ***!
  \*********************************************/
/*! exports provided: createLocationUpdater, setLocation, LocationSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLocationUpdater\", function() { return createLocationUpdater; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocation\", function() { return setLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocationSwitch\", function() { return LocationSwitch; });\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./static/Renderable/Location/location.js\");\n/* harmony import */ var _LocationSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocationSwitch */ \"./static/Renderable/Location/LocationSwitch.js\");\n\r\n\r\n\r\nconst createLocationUpdater = _location__WEBPACK_IMPORTED_MODULE_0__[\"locationUpdater\"];\r\nconst setLocation = _location__WEBPACK_IMPORTED_MODULE_0__[\"locationAction\"];\r\nconst LocationSwitch = _LocationSwitch__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Location/index.js?");

/***/ }),

/***/ "./static/Renderable/Location/location.js":
/*!************************************************!*\
  !*** ./static/Renderable/Location/location.js ***!
  \************************************************/
/*! exports provided: locationUpdater, locationAction, setParamsAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locationUpdater\", function() { return locationUpdater; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"locationAction\", function() { return locationAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setParamsAction\", function() { return setParamsAction; });\nconst parseSearchParams = (search) => {\r\n    if (!search) return {};\r\n    const searchParams = {};\r\n\r\n    search = search.replace(\"?\", \"\").split(\"&\");\r\n    search.forEach(param => {\r\n        const [key, value] = param.split(\"=\");\r\n        searchParams[key] = value || true;\r\n    });\r\n\r\n    return searchParams;\r\n};\r\n\r\nconst SET_LOCATION = \"SET_LOCATION\";\r\nconst SET_PARAMETERS = \"SET_PARAMETERS\";\r\nconst INIT_TYPE = \"__INIT__\";\r\n\r\nconst locationUpdater = (storage) => {\r\n    storage.registerUpdater((action, state) => {\r\n        state = state || {};\r\n        if (action.type !== INIT_TYPE && action.type !== SET_LOCATION) return state;\r\n\r\n        const location = window.location;\r\n\r\n        return {\r\n            ...state,\r\n            protocol: location.protocol,\r\n            host: location.host,\r\n            path: location.pathname,\r\n            searchParams: parseSearchParams(location.search)\r\n        }\r\n    }, \"location\");\r\n\r\n    storage.registerUpdater((action, state) => {\r\n        if (action.type !== SET_PARAMETERS) return state;\r\n\r\n        return {\r\n            ...state,\r\n            params: action.params,\r\n            paramsPath: action.paramsPath\r\n        };\r\n    }, \"location\");\r\n};\r\n\r\nconst locationAction = (url) => (storage) => {\r\n    window.history.pushState(null, null, url);\r\n    storage.update({type: SET_LOCATION }, \"location\");\r\n};\r\n\r\nconst setParamsAction = (params, paramsPath) => (storage) => {\r\n    storage.update({type: SET_PARAMETERS, params, paramsPath}, \"location\");\r\n};\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Location/location.js?");

/***/ }),

/***/ "./static/Renderable/Renderable.js":
/*!*****************************************!*\
  !*** ./static/Renderable/Renderable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/BEM */ \"./static/helpers/BEM.js\");\n\r\n\r\nclass Renderable {\r\n    constructor(...children) {\r\n        this.children = children;\r\n        this.element = null;\r\n        this.block = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.constructor.name);\r\n    }\r\n\r\n    createAll() {\r\n        if (!this.create) {\r\n            throw new Error(\"Each element should have a create function\");\r\n        }\r\n\r\n        this.create();\r\n    }\r\n\r\n    createChildren(element) {\r\n        if (!element) element = this.element;\r\n        if (!this.children) return;\r\n\r\n        for (let child of this.children) {\r\n            if (child && child.createAll)\r\n                child.createAll();\r\n\r\n            if (child instanceof Node) {\r\n                element.appendChild(child);\r\n            } else if (child && child.element) {\r\n                element.appendChild(child.element);\r\n            } else {\r\n                throw new Error(\"Each child should either be a DOM element or Renderable\")\r\n            }\r\n        }\r\n    }\r\n\r\n    crel(tagName, className, innerText) {\r\n        // create Element\r\n        let element = document.createElement(tagName);\r\n\r\n        if (!className) {}\r\n        else if (typeof className == \"string\" || className instanceof String) {\r\n            className.split(\" \").map(n => element.classList.add(n));\r\n        } else if (className instanceof Array) {\r\n            className.map(n => element.classList.add(n));\r\n        } else {\r\n            throw new Error(\"Class name \" + className + \" should be a String or Array.\");\r\n        }\r\n\r\n        if (innerText) {\r\n            element.innerText = innerText;\r\n        }\r\n\r\n        return element;\r\n    }\r\n\r\n    createSelf(tagName, className, innerText) {\r\n        const newElement = this.crel(tagName, className, innerText);\r\n        if (this.element && this.element.parentNode) {\r\n            this.element.parentNode.replaceChild(newElement, this.element);\r\n        }\r\n        this.element = newElement;\r\n        return newElement;\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderable);\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Renderable.js?");

/***/ }),

/***/ "./static/Renderable/Storage/ReducerNode.js":
/*!**************************************************!*\
  !*** ./static/Renderable/Storage/ReducerNode.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReducerNode; });\nconst REDUCER_BRANCH = \"REDUCER_BRANCH\";\r\nconst REDUCER_LEAF = \"REDUCER_LEAF\";\r\n\r\n\r\nconst splitPath = (path) => {\r\n    if (!path) return {};\r\n\r\n    const index = path.indexOf(\".\");\r\n    const start = index !== -1 ? path.substring(0, index) : path;\r\n    const end = index !== -1 ? path.substring(index + 1) : null;\r\n    return {start, end};\r\n};\r\n\r\n\r\nclass ReducerNode {\r\n    constructor(name, parent) {\r\n        if (!name || name.includes(\".\")) {\r\n            throw Error(`Invalid name \"${name}\" for reducer`)\r\n        }\r\n\r\n        this.name = name;\r\n        this.parent = parent;\r\n        this.type = null;\r\n        this.data = null;\r\n        this.listeners = [];\r\n    }\r\n\r\n    prepareLeaf() {\r\n        // Prepares this node if leaf is needed\r\n        if (this.type === REDUCER_BRANCH) {\r\n            throw Error(`The reducer node \"${this.name}\" is a branch and cannot be updated.`);\r\n        } else if (!this.type){\r\n            this.type = REDUCER_LEAF;\r\n            this.updaters = [];\r\n            this.data = null;\r\n        }\r\n    }\r\n\r\n    prepareBranch(start, end) {\r\n        // Prepares this node if branch is needed\r\n        if (!start && end)\r\n            throw Error(`The path is invalid at \"${start}.${end}\"`);\r\n\r\n        if (this.type === REDUCER_LEAF) {\r\n            throw Error(`The reducer node \"${this.name}\" is a value node and cannot recurse.`);\r\n        } else if (!this.type) {\r\n            this.type = REDUCER_BRANCH;\r\n            this.reducers = {};\r\n        }\r\n\r\n        if (!this.reducers[start]) {\r\n            this.reducers[start] = new ReducerNode(start, this)\r\n        }\r\n    }\r\n\r\n    registerUpdater(updater, path) {\r\n        if (!path) {\r\n            this.prepareLeaf();\r\n            this.updaters.push(updater);\r\n        } else {\r\n            const {start, end} = splitPath(path);\r\n            this.prepareBranch(start, end);\r\n            this.reducers[start].registerUpdater(updater, end);\r\n        }\r\n    }\r\n\r\n    registerListener(listener, path) {\r\n        if (!path) {\r\n            this.listeners.push(listener);\r\n        } else {\r\n            const {start, end} = splitPath(path);\r\n            this.prepareBranch(start, end);\r\n            this.reducers[start].registerListener(listener, end);\r\n        }\r\n    }\r\n\r\n    invokeListeners(sourceNodeName, sourceData, back) {\r\n        // Invokes all listeners recursively and returns data\r\n        if (sourceNodeName && this.type === REDUCER_BRANCH) {\r\n            this.data = this.data || {};\r\n            this.data = {...this.data, [sourceNodeName]: sourceData};\r\n        }\r\n\r\n        this.listeners.forEach(listener => listener(this.data));\r\n        if (back && this.parent)\r\n            this.parent.invokeListeners(this.name, this.data);\r\n    }\r\n\r\n    invokeUpdaters(action, path, back) {\r\n        // Invokes all updaters recursively\r\n\r\n        if (path) {\r\n            const {start, end} = splitPath(path);\r\n            if (this.type !== REDUCER_BRANCH)\r\n                throw Error(`The reducer node \"${path}\" cannot recurse`);\r\n\r\n            this.data = {...this.data, [start]: this.reducers[start].invokeUpdaters(action, end, true)}\r\n        } else {\r\n            if (this.type === REDUCER_BRANCH) {\r\n                this.data = {};\r\n                Object.keys(this.reducers)\r\n                    .forEach(name =>\r\n                        this.data[name] = this.reducers[name].invokeUpdaters(action, null, false)\r\n                    );\r\n            } else if (this.type === REDUCER_LEAF) {\r\n                this.data = this.updaters.reduce((data, updater) => updater(action, data), this.data, back);\r\n            }\r\n\r\n            this.invokeListeners(back);\r\n        }\r\n\r\n        return this.data;\r\n    }\r\n\r\n    getState(path) {\r\n        // Returns state at path\r\n\r\n        if (path) {\r\n            const {start, end} = splitPath(path);\r\n            if (this.type !== REDUCER_BRANCH)\r\n                return null;\r\n            return this.reducers[start].getState(end);\r\n        }\r\n        return this.data;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Storage/ReducerNode.js?");

/***/ }),

/***/ "./static/Renderable/Storage/Storage.js":
/*!**********************************************!*\
  !*** ./static/Renderable/Storage/Storage.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Storage; });\n/* harmony import */ var _ReducerNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReducerNode */ \"./static/Renderable/Storage/ReducerNode.js\");\n\r\n\r\n\r\nclass Storage {\r\n    constructor() {\r\n        this.root = new _ReducerNode__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"root\");\r\n    }\r\n\r\n    registerListener(listener, path) {\r\n        // Listener - will be called if state is changed\r\n\r\n        this.root.registerListener(listener, path);\r\n        listener(this.root.getState(path));\r\n    }\r\n\r\n    registerUpdater(updater, path) {\r\n        // Updater - will be called with ACTION to update storage\r\n        // updater (currentState, action) => newState\r\n        // updater gets called on register\r\n\r\n        this.root.registerUpdater(updater, path);\r\n    }\r\n\r\n    update(action, path) {\r\n        // If action is function, call it with storage passed\r\n        // Otherwise invoke the updater\r\n\r\n        if (action instanceof Function) {\r\n            return action(this);\r\n        } else {\r\n            if (!(action instanceof Object))\r\n                throw Error(\"Action to update should be an Object\");\r\n            if (action.type === null)\r\n                throw Error(`Invoked action without type to path \"${path}\"`);\r\n\r\n            this.root.invokeUpdaters(action, path);\r\n        }\r\n    }\r\n\r\n    getState(path) {\r\n        // Returns currentState at node\r\n\r\n        return this.root.getState(path);\r\n    }\r\n\r\n    init() {\r\n        // Will call all updaters with value null as currentState\r\n\r\n        this.update({type: Storage.INIT_TYPE});\r\n    }\r\n}\r\n\r\nStorage.INIT_TYPE = \"__INIT__\";\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Storage/Storage.js?");

/***/ }),

/***/ "./static/Renderable/Storage/index.js":
/*!********************************************!*\
  !*** ./static/Renderable/Storage/index.js ***!
  \********************************************/
/*! exports provided: Storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Storage\", function() { return Storage; });\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ \"./static/Renderable/Storage/Storage.js\");\n\r\n\r\nconst Storage = _Storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Storage);\r\n\n\n//# sourceURL=webpack:///./static/Renderable/Storage/index.js?");

/***/ }),

/***/ "./static/Renderable/index.js":
/*!************************************!*\
  !*** ./static/Renderable/index.js ***!
  \************************************/
/*! exports provided: Renderable, Body, actions, globalStorage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderable\", function() { return Renderable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Body\", function() { return Body; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"actions\", function() { return actions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"globalStorage\", function() { return globalStorage; });\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderable */ \"./static/Renderable/Renderable.js\");\n/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Body */ \"./static/Renderable/Body.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ \"./static/Renderable/Storage/index.js\");\n/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Location */ \"./static/Renderable/Location/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst Renderable = _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nconst Body = _Body__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nconst actions = {\r\n    setLocation: _Location__WEBPACK_IMPORTED_MODULE_3__[\"setLocation\"]\r\n};\r\n\r\nconst globalStorage = new _Storage__WEBPACK_IMPORTED_MODULE_2__[\"Storage\"]();\r\nRenderable.prototype.globalStorage = globalStorage;\r\nObject(_Location__WEBPACK_IMPORTED_MODULE_3__[\"createLocationUpdater\"])(globalStorage);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderable);\r\n\n\n//# sourceURL=webpack:///./static/Renderable/index.js?");

/***/ }),

/***/ "./static/UserPage/Login.js":
/*!**********************************!*\
  !*** ./static/UserPage/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderable */ \"./static/Renderable/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./static/actions/index.js\");\n/* harmony import */ var _UserPage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPage.scss */ \"./static/UserPage/UserPage.scss\");\n/* harmony import */ var _UserPage_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserPage_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nclass Login extends _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n    }\r\n\r\n    loginAction() {\r\n        this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginUser(this.usernameInput.value, this.passwordInput.value));\r\n    }\r\n\r\n    loginListener(user) {\r\n        if (!user) return;\r\n\r\n        if (user.loading) {\r\n            this.button.setAttribute(\"disabled\", \"\");\r\n            this.status.innerText = \"Завантаження\";\r\n            this.status.classList.add(\"loading\");\r\n        } else {\r\n            this.button.removeAttribute(\"disabled\");\r\n            this.status.classList.remove(\"loading\");\r\n        }\r\n\r\n        if (user.error) {\r\n            this.status.innerText = \"Невірно\";\r\n            this.status.classList.add(\"error\");\r\n            this.status.classList.remove(\"success\");\r\n        }\r\n\r\n        if (user.data) {\r\n            this.status.innerText = \"Успішно\";\r\n            this.status.classList.add(\"success\");\r\n            this.status.classList.remove(\"error\");\r\n\r\n            this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLocation(\"/article/1\"));\r\n        }\r\n    }\r\n\r\n    goToRegistration() {\r\n        this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLocation(\"/register\"));\r\n    }\r\n\r\n    create() {\r\n        let element = this.createSelf(\"section\", this.block());\r\n        let container = this.crel(\"div\", this.block(\"container\"));\r\n        element.appendChild(container);\r\n\r\n        let title = this.crel(\"h1\", this.block(\"form-title\"), \"Логін\");\r\n        container.appendChild(title);\r\n\r\n        this.status = this.crel(\"div\", this.block(\"status\"));\r\n        container.appendChild(this.status);\r\n\r\n        this.usernameInput = this.crel(\"input\", this.block(\"input\"));\r\n        this.passwordInput = this.crel(\"input\", this.block(\"input\"));\r\n        this.usernameInput.setAttribute(\"placeholder\", \"Ім'я користувача\");\r\n        this.usernameInput.setAttribute(\"autocomplete\", \"false\");\r\n        this.passwordInput.setAttribute(\"placeholder\", \"Пароль\");\r\n        this.passwordInput.setAttribute(\"type\", \"password\");\r\n        container.appendChild(this.usernameInput);\r\n        container.appendChild(this.passwordInput);\r\n        this.button = this.crel(\"button\", this.block(\"button\"), \"Увійти\");\r\n        container.appendChild(this.button);\r\n\r\n        let alternative = this.crel(\"button\", this.block(\"alternative\"), \"Зареєструватись\");\r\n        container.appendChild(alternative);\r\n\r\n        this.button.addEventListener(\"click\", this.loginAction.bind(this));\r\n        alternative.addEventListener(\"click\", this.goToRegistration.bind(this));\r\n\r\n        this.globalStorage.registerListener(this.loginListener.bind(this), \"user\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./static/UserPage/Login.js?");

/***/ }),

/***/ "./static/UserPage/Registration.js":
/*!*****************************************!*\
  !*** ./static/UserPage/Registration.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderable */ \"./static/Renderable/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ \"./static/actions/index.js\");\n/* harmony import */ var _UserPage_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserPage.scss */ \"./static/UserPage/UserPage.scss\");\n/* harmony import */ var _UserPage_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserPage_scss__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\nclass Login extends _Renderable__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor() {\r\n        super();\r\n\r\n        this.data = {};\r\n    }\r\n\r\n    registerAction() {\r\n        let data = {\r\n            username: this.usernameInput.value,\r\n            password: this.passwordInput.value,\r\n            name: this.nameInput.value\r\n        };\r\n\r\n        this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerUser(data.username, data.password, data.name));\r\n        this.data = data;\r\n    }\r\n\r\n    registerListener(register) {\r\n        if (!register) return;\r\n\r\n        if (register.loading) {\r\n            this.button.setAttribute(\"disabled\", \"\");\r\n            this.status.innerText = \"Завантаження\";\r\n            this.status.classList.add(\"loading\");\r\n        } else {\r\n            this.button.removeAttribute(\"disabled\");\r\n            this.status.classList.remove(\"loading\");\r\n        }\r\n\r\n        if (register.error) {\r\n            this.status.innerText = \"Невірно\";\r\n            this.status.classList.add(\"error\");\r\n            this.status.classList.remove(\"success\");\r\n        }\r\n\r\n        if (register.success) {\r\n            this.status.innerText = \"Успішно\";\r\n            this.status.classList.add(\"success\");\r\n            this.status.classList.remove(\"error\");\r\n\r\n            // login\r\n            this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginUser(this.data.username, this.data.password));\r\n            this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLocation(\"/login\"));\r\n        }\r\n    }\r\n\r\n    goToLogin() {\r\n        this.globalStorage.update(_actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setLocation(\"/login\"));\r\n    }\r\n\r\n    create() {\r\n        let element = this.createSelf(\"section\", this.block());\r\n        let container = this.crel(\"div\", this.block(\"container\"));\r\n        element.appendChild(container);\r\n\r\n        let title = this.crel(\"h1\", this.block(\"form-title\"), \"Реєстрація\");\r\n        container.appendChild(title);\r\n\r\n        this.status = this.crel(\"div\", this.block(\"status\"));\r\n        container.appendChild(this.status);\r\n\r\n        this.usernameInput = this.crel(\"input\", this.block(\"input\"));\r\n        this.passwordInput = this.crel(\"input\", this.block(\"input\"));\r\n        this.nameInput = this.crel(\"input\", this.block(\"input\"));\r\n        this.usernameInput.setAttribute(\"placeholder\", \"Ім'я користувача\");\r\n        this.passwordInput.setAttribute(\"placeholder\", \"Пароль\");\r\n        this.passwordInput.setAttribute(\"type\", \"password\");\r\n        this.nameInput.setAttribute(\"placeholder\", \"Ім'я\");\r\n        container.appendChild(this.usernameInput);\r\n        container.appendChild(this.passwordInput);\r\n        container.appendChild(this.nameInput);\r\n        this.button = this.crel(\"button\", this.block(\"button\"), \"Зареєструватись\");\r\n        container.appendChild(this.button);\r\n        let alternative = this.crel(\"button\", this.block(\"alternative\"), \"Увійти\");\r\n        container.appendChild(alternative);\r\n\r\n        this.button.addEventListener(\"click\", this.registerAction.bind(this));\r\n        alternative.addEventListener(\"click\", this.goToLogin.bind(this));\r\n\r\n        this.globalStorage.registerListener(this.registerListener.bind(this), \"register\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./static/UserPage/Registration.js?");

/***/ }),

/***/ "./static/UserPage/UserPage.scss":
/*!***************************************!*\
  !*** ./static/UserPage/UserPage.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./UserPage.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./static/UserPage/UserPage.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/UserPage/UserPage.scss?");

/***/ }),

/***/ "./static/UserPage/index.js":
/*!**********************************!*\
  !*** ./static/UserPage/index.js ***!
  \**********************************/
/*! exports provided: Login, Registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Login\", function() { return Login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Registration\", function() { return Registration; });\n/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ \"./static/UserPage/Login.js\");\n/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration */ \"./static/UserPage/Registration.js\");\n\r\n\r\n\r\nconst Login = _Login__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nconst Registration = _Registration__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n\n\n//# sourceURL=webpack:///./static/UserPage/index.js?");

/***/ }),

/***/ "./static/actions/api.js":
/*!*******************************!*\
  !*** ./static/actions/api.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst API_HOST = \"https://animatededucation.herokuapp.com/\";\r\n\r\nconst api = {\r\n    registerUser: async (username, password, name) => {\r\n        try {\r\n            let result = await fetch(API_HOST + \"user/register\", {\r\n                method: \"POST\",\r\n                headers: {'Content-Type': 'application/x-www-form-urlencoded'},\r\n                body: `username=${username}&password=${password}&name=${name}`\r\n            });\r\n            let json = await result.json();\r\n\r\n            return json.success;\r\n        } catch(e) {\r\n            return false;\r\n        }\r\n    },\r\n\r\n    loginUser: async (username, password) => {\r\n        try {\r\n            let result = await fetch(API_HOST + \"user/login\", {\r\n                method: \"POST\",\r\n                headers: {'Content-Type': 'application/x-www-form-urlencoded'},\r\n                body: `username=${username}&password=${password}&grant_type=password&client_id=null&client_secret=null`\r\n            });\r\n            let json = await result.json();\r\n\r\n            return json\r\n        } catch(e) {\r\n            return false;\r\n        }\r\n    },\r\n\r\n\r\n    getArticle: async (accessToken, articleId) => {\r\n        try {\r\n            let result = await fetch(API_HOST + \"article/\" + articleId, {\r\n                headers: {'Authorization': `Bearer ${accessToken}`}\r\n            });\r\n            let json = await result.json();\r\n\r\n            return json;\r\n        } catch(e) {\r\n            return {error: e.toString()};\r\n        }\r\n    },\r\n\r\n    createArticle: async (accessToken, name, content) => {\r\n        try {\r\n            let result = await fetch(API_HOST + \"article/\", {\r\n                method: \"POST\",\r\n                headers: {\r\n                    'Authorization': `Bearer ${accessToken}`,\r\n                    \"Content-Type\": \"application/json\"},\r\n                body: JSON.stringify({name, content})\r\n            });\r\n            let json = await result.json();\r\n\r\n            return json;\r\n        } catch(e) {\r\n            return {error: e.toString()};\r\n        }\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);\r\n\r\n\n\n//# sourceURL=webpack:///./static/actions/api.js?");

/***/ }),

/***/ "./static/actions/index.js":
/*!*********************************!*\
  !*** ./static/actions/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updaters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../updaters */ \"./static/updaters/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./static/actions/api.js\");\n/* harmony import */ var _Renderable_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Renderable/Location */ \"./static/Renderable/Location/index.js\");\n\r\n\r\n\r\n\r\n\r\nconst actions = {\r\n    registerUser: (username, password, name) => async storage => {\r\n        storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"START\"]}, \"register\");\r\n        let result = await _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].registerUser(username, password, name);\r\n        if (result) {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"SUCCESS\"]}, \"register\");\r\n        } else {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"ERROR\"], error: \"fail\"}, \"register\");\r\n        }\r\n    },\r\n\r\n    loginUser: (username, password) => async storage => {\r\n        storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"START\"]}, \"user\");\r\n        let result = await _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loginUser(username, password);\r\n        if (result) {\r\n            let data = {accessToken: result.access_token, expiresIn: result.expires_in};\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"SUCCESS\"], data}, \"user\");\r\n        }\r\n        else {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"ERROR\"], error: \"fail\"}, \"user\");\r\n        }\r\n    },\r\n\r\n    getArticle: (id) => async storage => {\r\n        let user = storage.getState(\"user\");\r\n\r\n        if (!user || !user.data) {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"ERROR\"], id, error: \"Not registered\"}, \"article\");\r\n            return;\r\n        }\r\n\r\n        let accessToken = user.data.accessToken;\r\n        storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"START\"], id}, \"article\");\r\n        let result = await _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getArticle(accessToken, id);\r\n        if (result.error) {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"ERROR\"], id, error: result.error}, \"article\");\r\n        } else {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"SUCCESS\"], id, data: result.data}, \"article\");\r\n        }\r\n    },\r\n\r\n    createArticle: (name, content) => async storage => {\r\n        let user = storage.getState(\"user\");\r\n\r\n        if (!user || !user.data) {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"ERROR\"], name, error: \"Not registered\"}, \"createArticle\");\r\n            return;\r\n        }\r\n\r\n        let accessToken = user.data.accessToken;\r\n        storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"START\"], name}, \"createArticle\");\r\n        let result = await _api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createArticle(accessToken, name, content);\r\n        if (result.error) {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"ERROR\"], name, error: result.error}, \"createArticle\");\r\n        } else {\r\n            storage.update({type: _updaters__WEBPACK_IMPORTED_MODULE_0__[\"SUCCESS\"], name, data: result.data}, \"createArticle\");\r\n        }\r\n    },\r\n\r\n    setLocation: _Renderable_Location__WEBPACK_IMPORTED_MODULE_2__[\"setLocation\"]\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (actions);\r\n\r\n\n\n//# sourceURL=webpack:///./static/actions/index.js?");

/***/ }),

/***/ "./static/helpers/BEM.js":
/*!*******************************!*\
  !*** ./static/helpers/BEM.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ELEMENT_SPLITTER = \"__\";\r\nconst MODIFIER_SPLITTER = \"_\";\r\n\r\nconst flatten = ([first, ...other]) => other.length > 0 ?\r\n    (first instanceof Array ? [...flatten(first), ...flatten(other)] : [first, ...flatten(other)]) :\r\n    (first instanceof Array ? [...flatten(first)] : [first]);\r\n\r\nconst createArray = (items) => {\r\n    let result = [];\r\n    if (typeof items == \"string\" || items instanceof String) {\r\n        result = items.split(\" \");\r\n    }\r\n    else if (items instanceof Array) {\r\n        result = flatten(items.map(createArray));\r\n    }\r\n    else if (items instanceof Object) {\r\n        result = flatten(Object.keys(items).filter(key => items[key]).map(createArray));\r\n    }\r\n    result = result.filter((item) => !!item.trim());\r\n\r\n    return result;\r\n};\r\n\r\nconst BEM = (blockName) => {\r\n    return (elementNames, modifierNames) => {\r\n        let elements = createArray(elementNames).map(e => blockName ? blockName + ELEMENT_SPLITTER + e : e);\r\n        if (elements.length < 1) elements = [blockName];\r\n\r\n        let modifiers = createArray(modifierNames);\r\n        if (modifiers.length < 1)\r\n            return elements.join(\" \");\r\n\r\n        return elements.map(\r\n            e => e + \" \" + (modifiers.map(m => e + MODIFIER_SPLITTER + m).join(\" \"))\r\n        ).join(\" \");\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BEM);\r\n\n\n//# sourceURL=webpack:///./static/helpers/BEM.js?");

/***/ }),

/***/ "./static/index.js":
/*!*************************!*\
  !*** ./static/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Renderable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderable */ \"./static/Renderable/index.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./static/Header/index.js\");\n/* harmony import */ var _Article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Article */ \"./static/Article/index.js\");\n/* harmony import */ var _UserPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserPage */ \"./static/UserPage/index.js\");\n/* harmony import */ var _Renderable_Location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Renderable/Location */ \"./static/Renderable/Location/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ \"./static/actions/index.js\");\n/* harmony import */ var _updaters__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updaters */ \"./static/updaters/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Main extends _Renderable__WEBPACK_IMPORTED_MODULE_1__[\"Renderable\"] {\r\n    create() {\r\n        let element = this.createSelf(\"div\", this.block(\"container\"));\r\n        let main = this.crel(\"main\", this.block());\r\n        element.appendChild(main);\r\n\r\n        this.createChildren(main);\r\n    }\r\n}\r\n\r\nlet body = new _Renderable__WEBPACK_IMPORTED_MODULE_1__[\"Body\"](new _Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), new Main(\r\n    new _Renderable_Location__WEBPACK_IMPORTED_MODULE_5__[\"LocationSwitch\"]({\r\n        \"/\": _UserPage__WEBPACK_IMPORTED_MODULE_4__[\"Login\"],\r\n        \"/login\": _UserPage__WEBPACK_IMPORTED_MODULE_4__[\"Login\"],\r\n        \"/register\": _UserPage__WEBPACK_IMPORTED_MODULE_4__[\"Registration\"],\r\n        \"/article/:articleId\": _Article__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n    })\r\n));\r\n// new Article()\r\nbody.createAll();\r\n\r\nObject(_updaters__WEBPACK_IMPORTED_MODULE_7__[\"registerUpdaters\"])(body.globalStorage);\r\nbody.globalStorage.init();\r\n\r\nwindow.body = body;\r\nwindow.storage = body.globalStorage;\r\nwindow.actions = _actions__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\r\n\n\n//# sourceURL=webpack:///./static/index.js?");

/***/ }),

/***/ "./static/updaters/index.js":
/*!**********************************!*\
  !*** ./static/updaters/index.js ***!
  \**********************************/
/*! exports provided: START, ERROR, SUCCESS, user, register, articlesData, articlesLoading, articlesError, createArticle, registerUpdaters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"START\", function() { return START; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR\", function() { return ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUCCESS\", function() { return SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"user\", function() { return user; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articlesData\", function() { return articlesData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articlesLoading\", function() { return articlesLoading; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"articlesError\", function() { return articlesError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArticle\", function() { return createArticle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerUpdaters\", function() { return registerUpdaters; });\nconst START = \"START\";\r\nconst ERROR = \"ERROR\";\r\nconst SUCCESS = \"SUCCESS\";\r\n\r\nconst user = (action, state) => {\r\n    state = state || {};\r\n    switch(action.type) {\r\n        case START: return {...state, loading: true};\r\n        case ERROR: return {...state, loading: false, error: action.error};\r\n        case SUCCESS: return {...state, loading: false, data: action.data};\r\n        default: return state;\r\n    }\r\n};\r\n\r\nconst register = (action, state) => {\r\n    state = state || {};\r\n    switch(action.type) {\r\n        case START: return {loading: true};\r\n        case ERROR: return {error: true};\r\n        case SUCCESS: return {success: true};\r\n        default: return state;\r\n    }\r\n};\r\n\r\nconst articlesData = (action, state) => {\r\n    state = state || {};\r\n    switch(action.type) {\r\n        case ERROR: return {...state, [action.id]: null};\r\n        case SUCCESS: return {...state, [action.id]: action.data};\r\n        default: return state;\r\n    }\r\n};\r\n\r\nconst articlesLoading = (action, state) => {\r\n    state = state || {};\r\n    switch(action.type) {\r\n        case START: return {...state, [action.id]: true};\r\n        case SUCCESS:\r\n        case ERROR:\r\n            return {...state, [action.id]: false};\r\n        default: return state;\r\n    }\r\n};\r\n\r\nconst articlesError = (action, state) => {\r\n    state = state || {};\r\n    switch(action.type) {\r\n        case SUCCESS: return {...state, [action.id]: false};\r\n        case ERROR:\r\n            return {...state, [action.id]: action.error};\r\n        default: return state;\r\n    }\r\n};\r\n\r\nconst createArticle = (action, state) => {\r\n    state = state || {};\r\n    switch(action.type) {\r\n        case START: return {...state, [action.name]: {loading: true}};\r\n        case SUCCESS: return {...state, [action.name]: {data: action.data}};\r\n        case ERROR: return {...state, [action.name]: {error: true}};\r\n    }\r\n};\r\n\r\n\r\nconst registerUpdaters = (storage) => {\r\n    storage.registerUpdater(user, \"user\");\r\n    storage.registerUpdater(register, \"register\");\r\n\r\n    storage.registerUpdater(articlesData, \"article.data\");\r\n    storage.registerUpdater(articlesLoading, \"article.loading\");\r\n    storage.registerUpdater(articlesError, \"article.error\");\r\n\r\n    storage.registerUpdater(createArticle, \"createArticle\");\r\n};\r\n\n\n//# sourceURL=webpack:///./static/updaters/index.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./styles/main.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ })

/******/ });