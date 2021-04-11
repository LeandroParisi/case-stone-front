(this["webpackJsonpapp"] = this["webpackJsonpapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/Loaders/Loader.scss":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/Loaders/Loader.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em; }\n  .resetButtonStyles:hover, .resetButtonStyles:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none; }\n\n.loader {\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  position: absolute;\n  background-color: #d10015;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/mixins.scss","webpack://src/assets/Loaders/Loader.scss","webpack://src/assets/scss/variables.scss"],"names":[],"mappings":"AA4GA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB,EAAA;EARxB;IAYI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;ACxHpB;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,yBCCgB;EF4FhB,aAAa;EACb,mBAF4B;EAG5B,uBAH8C;EAI9C,mBAJ8D;EAK9D,iBAL6E,EAAA","sourcesContent":["@mixin screen($media) {\n  @if $media == xs {\n    /* \n            Device = Most of the Smartphones Mobiles (Portrait)\n            Screen = B/w 320px to 479px\n        */\n    @media (max-width: 480px) {\n      @content;\n    }\n  } @else if $media == min-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) {\n      @content;\n    }\n  } @else if $media == sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) and (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == max-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == min-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) {\n      @content;\n    }\n  } @else if $media == md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) and (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == max-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == min-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) {\n      @content;\n    }\n  } @else if $media == lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) and (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == max-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == xl {\n    /*\n            Device = Desktops\n            Screen = 1281px to higher resolution desktops\n        */\n    @media (min-width: 1281px) {\n      @content;\n    }\n  } @else if $media == xxl {\n    @media (min-width: 1500px) {\n      @content;\n    }\n  }\n\n}\n\n@mixin flexBox($direction: row, $justify: center, $align: center, $wrap: nowrap) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n  flex-wrap: $wrap;\n}\n\n.resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none;\n  }\n}","@import '../scss/mixins.scss';\n@import '../scss/variables.scss';\n\n.loader {\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  position: absolute;\n  background-color: $redColor;\n  @include flexBox();\n}","$darkColor: #0a1c20;\n\n$blueColor: #41a6de;\n\n$darkerWineColor: #260306;\n$darkWineColor: #59070E;\n$mediumWineColor: #880000;\n$lightWineColor: #901A2A;\n\n$redColor: #d10015;\n$pinkColor: #f6343c;\n\n$orangeColor: #f08327;\n\n$yellowColor: #F2D335;\n\n$darkerGrayColor: #444444;\n$darkGrayColor: #8f8f8f;\n$darkTranparentGrayColor: #8f8f8f7c;\n$grayColor: #d9d9d9;\n$transparentGrayColor: #d9d9d98a;\n\n$whiteColor: white;\n\n\n$font-large: calc(14px + 0.8vw);\n$font-medium: calc(12px + 0.8vw);\n$font-small: calc(10px + 0.8vw);\n$font-xsmall: calc(8px + 0.8vw);\n$font-xxsmall: calc(6px + 0.8vw);"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/base.scss":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/scss/base.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em; }\n  .resetButtonStyles:hover, .resetButtonStyles:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none; }\n\n@keyframes shakky {\n  0% {\n    margin-left: 0; }\n  25% {\n    margin-left: 7px; }\n  50% {\n    margin-left: 0; }\n  75% {\n    margin-left: -7px; }\n  100% {\n    margin-left: 0; } }\n\n.primaryPage {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: nowrap;\n  height: 100vh;\n  width: 100vw; }\n\n.secondaryPage {\n  background-color: #0a1c20; }\n\n.primaryInput {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap; }\n  .primaryInput .errorMessage {\n    background-color: #F2D335;\n    color: #260306;\n    border-radius: 10px;\n    padding: 3px;\n    font-size: calc(6px + 0.8vw);\n    margin-top: 5px;\n    font-family: 'arial'; }\n\ninput {\n  padding: 10px 10px 2px 10px;\n  font-size: calc(10px + 0.8vw);\n  border: none;\n  border-bottom: 1px solid #8f8f8f;\n  color: #8f8f8f;\n  background-color: transparent;\n  text-align: center;\n  width: 200px; }\n  input:hover, input:focus {\n    border: none;\n    outline: none;\n    color: #d9d9d9;\n    border-bottom: 2px solid #d9d9d9;\n    transition: 0.5s; }\n  input::placeholder {\n    color: #d9d9d98a;\n    font-size: calc(10px + 0.8vw);\n    text-align: center; }\n  input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {\n    box-shadow: 0 0 0 30px #d9d9d98a inset !important;\n    text-align: center; }\n  input.invalid {\n    color: #F2D335;\n    border-bottom: 1px solid #F2D335;\n    animation: shakky .2s;\n    animation-iteration-count: 4; }\n\nbutton {\n  background-color: #0a1c20;\n  cursor: pointer;\n  padding: 10px;\n  color: #F2D335;\n  font-size: calc(14px + 0.8vw);\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px #0a0a0a;\n  transition: 1s;\n  letter-spacing: 0.15em; }\n  button:hover, button:active {\n    background-color: #59070E;\n    box-shadow: 2px 2px 2px #F2D335;\n    color: #F2D335;\n    transition: 1s; }\n  button:disabled {\n    background-color: #d9d9d9;\n    border-color: #8f8f8f;\n    opacity: 70%;\n    color: #8f8f8f;\n    transition: 0.5s; }\n    button:disabled:hover {\n      background-color: #d9d9d9;\n      border-color: #8f8f8f;\n      opacity: 70%;\n      color: #8f8f8f;\n      transition: 0.5s; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/mixins.scss","webpack://src/assets/scss/animations.scss","webpack://src/assets/scss/base.scss","webpack://src/assets/scss/variables.scss"],"names":[],"mappings":"AA4GA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB,EAAA;EARxB;IAYI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;AC3HpB;EACE;IAAI,cAAc,EAAA;EAClB;IAAK,gBAAgB,EAAA;EACrB;IAAK,cAAc,EAAA;EACnB;IAAK,iBAAiB,EAAA;EACtB;IAAM,cAAc,EAAA,EAAA;;ACDtB;EFiGE,aAAa;EACb,sBEjGuB;EFkGvB,6BElGqC;EFmGrC,mBAJ8D;EAK9D,iBAL6E;EE9F7E,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,yBCXiB,EAAA;;ADcnB;EFuFE,aAAa;EACb,sBEvFuB;EFwFvB,uBAH8C;EAI9C,mBAJ8D;EAK9D,iBAL6E,EAAA;EEtF/E;IAII,yBCJiB;IDKjB,cCfqB;IDgBrB,mBAAmB;IACnB,YAAY;IACZ,4BCO4B;IDN5B,eAAe;IACf,oBAAoB,EAAA;;AAIxB;EACE,2BAA2B;EAC3B,6BCH6B;EDI7B,YAAY;EACZ,gCCfqB;EDgBrB,cChBqB;EDiBrB,6BAA6B;EAC7B,kBAAkB;EAClB,YAAY,EAAA;EARd;IAWI,YAAY;IACZ,aAAa;IACb,cCtBe;IDuBf,gCCvBe;IDwBf,gBAAgB,EAAA;EAfpB;IAmBI,gBC3B4B;ID4B5B,6BCrB2B;IDsB3B,kBAAkB,EAAA;EArBtB;IA8BE,iDAA6D;IAC7D,kBAAkB,EAAA;EA/BpB;IAmCI,cCjDiB;IDkDjB,gCClDiB;IDmDjB,qBAAqB;IACrB,4BAA4B,EAAA;;AAIhC;EACE,yBCvEiB;EDwEjB,eAAe;EACf,aAAa;EACb,cC5DmB;ED6DnB,6BClD6B;EDmD7B,YAAY;EACZ,kBAAkB;EAClB,+BAAuC;EACvC,cAAc;EACd,sBAAsB,EAAA;EAVxB;IAcI,yBC/EmB;IDgFnB,+BCvEiB;IDwEjB,cCxEiB;IDyEjB,cAAc,EAAA;EAjBlB;IAqBI,yBCxEe;IDyEf,qBC3EmB;ID4EnB,YAAY;IACZ,cC7EmB;ID8EnB,gBAAgB,EAAA;IAzBpB;MA4BM,yBC/Ea;MDgFb,qBClFiB;MDmFjB,YAAY;MACZ,cCpFiB;MDqFjB,gBAAgB,EAAA","sourcesContent":["@mixin screen($media) {\n  @if $media == xs {\n    /* \n            Device = Most of the Smartphones Mobiles (Portrait)\n            Screen = B/w 320px to 479px\n        */\n    @media (max-width: 480px) {\n      @content;\n    }\n  } @else if $media == min-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) {\n      @content;\n    }\n  } @else if $media == sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) and (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == max-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == min-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) {\n      @content;\n    }\n  } @else if $media == md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) and (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == max-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == min-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) {\n      @content;\n    }\n  } @else if $media == lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) and (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == max-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == xl {\n    /*\n            Device = Desktops\n            Screen = 1281px to higher resolution desktops\n        */\n    @media (min-width: 1281px) {\n      @content;\n    }\n  } @else if $media == xxl {\n    @media (min-width: 1500px) {\n      @content;\n    }\n  }\n\n}\n\n@mixin flexBox($direction: row, $justify: center, $align: center, $wrap: nowrap) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n  flex-wrap: $wrap;\n}\n\n.resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none;\n  }\n}","@keyframes shakky {\n  0% {margin-left: 0;}\n  25% {margin-left: 7px;}\n  50% {margin-left: 0;}\n  75% {margin-left: -7px;}\n  100% {margin-left: 0;}\n}","@import './mixins.scss';\n@import './variables.scss';\n@import './animations.scss';\n\n.primaryPage {\n  @include flexBox(column, space-around);\n  height: 100vh;\n  width: 100vw;\n}\n\n.secondaryPage {\n  background-color: $darkColor;\n}\n\n.primaryInput {\n  @include flexBox(column);\n\n  .errorMessage {\n    background-color: $yellowColor;\n    color: $darkerWineColor;\n    border-radius: 10px;\n    padding: 3px;\n    font-size: $font-xxsmall;\n    margin-top: 5px;\n    font-family: 'arial';\n  }\n}\n\ninput {\n  padding: 10px 10px 2px 10px;\n  font-size: $font-small;\n  border: none;\n  border-bottom: 1px solid $darkGrayColor;\n  color: $darkGrayColor;\n  background-color: transparent;\n  text-align: center;\n  width: 200px;\n\n  &:hover, &:focus {\n    border: none;\n    outline: none;\n    color: $grayColor;\n    border-bottom: 2px solid $grayColor;\n    transition: 0.5s;\n  }\n\n  &::placeholder {\n    color: $transparentGrayColor;\n    font-size: $font-small;\n    text-align: center;\n  }\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover, \n  &:-webkit-autofill:focus, \n  &:-webkit-autofill:active\n  {\n  -webkit-box-shadow: 0 0 0 30px $transparentGrayColor inset !important;\n  box-shadow: 0 0 0 30px $transparentGrayColor inset !important;\n  text-align: center;\n  }\n\n  &.invalid {\n    color: $yellowColor;\n    border-bottom: 1px solid $yellowColor;\n    animation: shakky .2s;\n    animation-iteration-count: 4;\n  }\n}\n\nbutton {\n  background-color: $darkColor;\n  cursor: pointer;\n  padding: 10px;\n  color: $yellowColor;\n  font-size: $font-large;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px rgb(10, 10, 10);\n  transition: 1s;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: $darkWineColor;\n    box-shadow: 2px 2px 2px $yellowColor;\n    color: $yellowColor;\n    transition: 1s;\n  }\n\n  &:disabled {\n    background-color: $grayColor;\n    border-color: $darkGrayColor;\n    opacity: 70%;\n    color: $darkGrayColor;\n    transition: 0.5s;\n\n    &:hover {\n      background-color: $grayColor;\n      border-color: $darkGrayColor;\n      opacity: 70%;\n      color: $darkGrayColor;\n      transition: 0.5s;\n    }\n  }\n}\n","$darkColor: #0a1c20;\n\n$blueColor: #41a6de;\n\n$darkerWineColor: #260306;\n$darkWineColor: #59070E;\n$mediumWineColor: #880000;\n$lightWineColor: #901A2A;\n\n$redColor: #d10015;\n$pinkColor: #f6343c;\n\n$orangeColor: #f08327;\n\n$yellowColor: #F2D335;\n\n$darkerGrayColor: #444444;\n$darkGrayColor: #8f8f8f;\n$darkTranparentGrayColor: #8f8f8f7c;\n$grayColor: #d9d9d9;\n$transparentGrayColor: #d9d9d98a;\n\n$whiteColor: white;\n\n\n$font-large: calc(14px + 0.8vw);\n$font-medium: calc(12px + 0.8vw);\n$font-small: calc(10px + 0.8vw);\n$font-xsmall: calc(8px + 0.8vw);\n$font-xxsmall: calc(6px + 0.8vw);"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/reset.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/assets/scss/reset.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  font-family: 'Bebas Neue';\n  letter-spacing: 0.1em;\n  margin: 0;\n  padding: 0; }\n\n.textContainer {\n  max-width: 45ch;\n  text-align: center;\n  word-wrap: break-word; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/reset.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,eAAe;EACf,kBAAkB;EAClB,qBAAqB,EAAA","sourcesContent":["* {\n  font-family: 'Bebas Neue';\n  letter-spacing: 0.1em;\n  margin: 0;\n  padding: 0;\n}\n\n.textContainer { \n  max-width: 45ch;\n  text-align: center;\n  word-wrap: break-word;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Hamburger-Menu/HamburgerMenu.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/Hamburger-Menu/HamburgerMenu.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resetButtonStyles, .hamburger {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em; }\n  .resetButtonStyles:hover, .hamburger:hover, .resetButtonStyles:active, .hamburger:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none; }\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n.hamburger {\n  align-self: flex-start;\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  box-shadow: none;\n  overflow: visible; }\n\n.hamburger:hover {\n  opacity: 0.9; }\n\n.hamburger.is-active:hover {\n  opacity: 0.9; }\n\n.hamburger.is-active .hamburger-inner,\n.hamburger.is-active .hamburger-inner::before,\n.hamburger.is-active .hamburger-inner::after {\n  background-color: white; }\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n  width: 40px;\n  height: 4px;\n  background-color: white;\n  border-radius: 4px;\n  position: absolute;\n  transition-property: transform;\n  transition-duration: 0.15s;\n  transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n  content: \"\";\n  display: block; }\n\n.hamburger-inner::before {\n  top: -10px; }\n\n.hamburger-inner::after {\n  bottom: -10px; }\n\n/*\n   * 3DX\n   */\n.hamburger--3dx .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dx .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(180deg); }\n\n.hamburger--3dx.is-active .hamburger-inner::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--3dx.is-active .hamburger-inner::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DX Reverse\n   */\n.hamburger--3dx-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dx-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(-180deg); }\n\n.hamburger--3dx-r.is-active .hamburger-inner::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--3dx-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY\n   */\n.hamburger--3dy .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(-180deg); }\n\n.hamburger--3dy.is-active .hamburger-inner::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--3dy.is-active .hamburger-inner::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY Reverse\n   */\n.hamburger--3dy-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg); }\n\n.hamburger--3dy-r.is-active .hamburger-inner::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--3dy-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY\n   */\n.hamburger--3dxy .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dxy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg); }\n\n.hamburger--3dxy.is-active .hamburger-inner::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--3dxy.is-active .hamburger-inner::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY Reverse\n   */\n.hamburger--3dxy-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dxy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner::before {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * Arrow\n   */\n.hamburger--arrow.is-active .hamburger-inner::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Right\n   */\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Alt\n   */\n.hamburger--arrowalt .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Alt Right\n   */\n.hamburger--arrowalt-r .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Turn\n   */\n.hamburger--arrowturn.is-active .hamburger-inner {\n  transform: rotate(-180deg); }\n\n.hamburger--arrowturn.is-active .hamburger-inner::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrowturn.is-active .hamburger-inner::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Turn Right\n   */\n.hamburger--arrowturn-r.is-active .hamburger-inner {\n  transform: rotate(-180deg); }\n\n.hamburger--arrowturn-r.is-active .hamburger-inner::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrowturn-r.is-active .hamburger-inner::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Boring\n   */\n.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n  transition-property: none; }\n\n.hamburger--boring.is-active .hamburger-inner {\n  transform: rotate(45deg); }\n\n.hamburger--boring.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0; }\n\n.hamburger--boring.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg); }\n\n/*\n   * Collapse\n   */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse .hamburger-inner::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n\n.hamburger--collapse .hamburger-inner::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--collapse.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n\n.hamburger--collapse.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Collapse Reverse\n   */\n.hamburger--collapse-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r .hamburger-inner::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n\n.hamburger--collapse-r .hamburger-inner::before {\n  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--collapse-r.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n\n.hamburger--collapse-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Elastic\n   */\n.hamburger--elastic .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic .hamburger-inner::before {\n  top: 10px;\n  transition: opacity 0.125s 0.275s ease; }\n\n.hamburger--elastic .hamburger-inner::after {\n  top: 20px;\n  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(135deg);\n  transition-delay: 0.075s; }\n\n.hamburger--elastic.is-active .hamburger-inner::before {\n  transition-delay: 0s;\n  opacity: 0; }\n\n.hamburger--elastic.is-active .hamburger-inner::after {\n  transform: translate3d(0, -20px, 0) rotate(-270deg);\n  transition-delay: 0.075s; }\n\n/*\n   * Elastic Reverse\n   */\n.hamburger--elastic-r .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r .hamburger-inner::before {\n  top: 10px;\n  transition: opacity 0.125s 0.275s ease; }\n\n.hamburger--elastic-r .hamburger-inner::after {\n  top: 20px;\n  transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(-135deg);\n  transition-delay: 0.075s; }\n\n.hamburger--elastic-r.is-active .hamburger-inner::before {\n  transition-delay: 0s;\n  opacity: 0; }\n\n.hamburger--elastic-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -20px, 0) rotate(270deg);\n  transition-delay: 0.075s; }\n\n/*\n   * Emphatic\n   */\n.hamburger--emphatic {\n  overflow: hidden; }\n\n.hamburger--emphatic .hamburger-inner {\n  transition: background-color 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic .hamburger-inner::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic .hamburger-inner::after {\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic.is-active .hamburger-inner {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important; }\n\n.hamburger--emphatic.is-active .hamburger-inner::before {\n  left: -80px;\n  top: -80px;\n  transform: translate3d(80px, 80px, 0) rotate(45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.hamburger--emphatic.is-active .hamburger-inner::after {\n  right: -80px;\n  top: -80px;\n  transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Emphatic Reverse\n   */\n.hamburger--emphatic-r {\n  overflow: hidden; }\n\n.hamburger--emphatic-r .hamburger-inner {\n  transition: background-color 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic-r .hamburger-inner::before {\n  left: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic-r .hamburger-inner::after {\n  top: 10px;\n  right: 0;\n  transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic-r.is-active .hamburger-inner {\n  transition-delay: 0s;\n  transition-timing-function: ease-out;\n  background-color: transparent !important; }\n\n.hamburger--emphatic-r.is-active .hamburger-inner::before {\n  left: -80px;\n  top: 80px;\n  transform: translate3d(80px, -80px, 0) rotate(-45deg);\n  transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.hamburger--emphatic-r.is-active .hamburger-inner::after {\n  right: -80px;\n  top: 80px;\n  transform: translate3d(-80px, -80px, 0) rotate(45deg);\n  transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Minus\n   */\n.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before {\n  top: 0; }\n\n.hamburger--minus.is-active .hamburger-inner::after {\n  bottom: 0; }\n\n/*\n   * Slider\n   */\n.hamburger--slider .hamburger-inner {\n  top: 2px; }\n\n.hamburger--slider .hamburger-inner::before {\n  top: 10px;\n  transition-property: transform, opacity;\n  transition-timing-function: ease;\n  transition-duration: 0.15s; }\n\n.hamburger--slider .hamburger-inner::after {\n  top: 20px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--slider.is-active .hamburger-inner::before {\n  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\n  opacity: 0; }\n\n.hamburger--slider.is-active .hamburger-inner::after {\n  transform: translate3d(0, -20px, 0) rotate(-90deg); }\n\n/*\n   * Slider Reverse\n   */\n.hamburger--slider-r .hamburger-inner {\n  top: 2px; }\n\n.hamburger--slider-r .hamburger-inner::before {\n  top: 10px;\n  transition-property: transform, opacity;\n  transition-timing-function: ease;\n  transition-duration: 0.15s; }\n\n.hamburger--slider-r .hamburger-inner::after {\n  top: 20px; }\n\n.hamburger--slider-r.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(-45deg); }\n\n.hamburger--slider-r.is-active .hamburger-inner::before {\n  transform: rotate(45deg) translate3d(5.71429px, -6px, 0);\n  opacity: 0; }\n\n.hamburger--slider-r.is-active .hamburger-inner::after {\n  transform: translate3d(0, -20px, 0) rotate(90deg); }\n\n/*\n   * Spin\n   */\n.hamburger--spin .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin .hamburger-inner::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n\n.hamburger--spin .hamburger-inner::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin.is-active .hamburger-inner {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--spin.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n\n.hamburger--spin.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spin Reverse\n   */\n.hamburger--spin-r .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r .hamburger-inner::before {\n  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n\n.hamburger--spin-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r.is-active .hamburger-inner {\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--spin-r.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n\n.hamburger--spin-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(90deg);\n  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spring\n   */\n.hamburger--spring .hamburger-inner {\n  top: 2px;\n  transition: background-color 0s 0.13s linear; }\n\n.hamburger--spring .hamburger-inner::before {\n  top: 10px;\n  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring .hamburger-inner::after {\n  top: 20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring.is-active .hamburger-inner {\n  transition-delay: 0.22s;\n  background-color: transparent !important; }\n\n.hamburger--spring.is-active .hamburger-inner::before {\n  top: 0;\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n\n.hamburger--spring.is-active .hamburger-inner::after {\n  top: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transform: translate3d(0, 10px, 0) rotate(-45deg); }\n\n/*\n   * Spring Reverse\n   */\n.hamburger--spring-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r .hamburger-inner::after {\n  top: -20px;\n  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }\n\n.hamburger--spring-r .hamburger-inner::before {\n  transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--spring-r.is-active .hamburger-inner::after {\n  top: 0;\n  opacity: 0;\n  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }\n\n.hamburger--spring-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(90deg);\n  transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand\n   */\n.hamburger--stand .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n\n.hamburger--stand .hamburger-inner::before {\n  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand .hamburger-inner::after {\n  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand.is-active .hamburger-inner {\n  transform: rotate(90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n\n.hamburger--stand.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--stand.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand Reverse\n   */\n.hamburger--stand-r .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n\n.hamburger--stand-r .hamburger-inner::before {\n  transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r .hamburger-inner::after {\n  transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r.is-active .hamburger-inner {\n  transform: rotate(-90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n\n.hamburger--stand-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: rotate(-45deg);\n  transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--stand-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(45deg);\n  transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Squeeze\n   */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze .hamburger-inner::before {\n  transition: top 0.075s 0.12s ease, opacity 0.075s ease; }\n\n.hamburger--squeeze .hamburger-inner::after {\n  transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.is-active .hamburger-inner {\n  transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--squeeze.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0;\n  transition: top 0.075s ease, opacity 0.075s 0.12s ease; }\n\n.hamburger--squeeze.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg);\n  transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Vortex\n   */\n.hamburger--vortex .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear; }\n\n.hamburger--vortex .hamburger-inner::before {\n  transition-property: top, opacity; }\n\n.hamburger--vortex .hamburger-inner::after {\n  transition-property: bottom, transform; }\n\n.hamburger--vortex.is-active .hamburger-inner {\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n  transition-delay: 0s; }\n\n.hamburger--vortex.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0; }\n\n.hamburger--vortex.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(90deg); }\n\n/*\n   * Vortex Reverse\n   */\n.hamburger--vortex-r .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n  transition-duration: 0s;\n  transition-delay: 0.1s;\n  transition-timing-function: linear; }\n\n.hamburger--vortex-r .hamburger-inner::before {\n  transition-property: top, opacity; }\n\n.hamburger--vortex-r .hamburger-inner::after {\n  transition-property: bottom, transform; }\n\n.hamburger--vortex-r.is-active .hamburger-inner {\n  transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n  transition-delay: 0s; }\n\n.hamburger--vortex-r.is-active .hamburger-inner::before {\n  top: 0;\n  opacity: 0; }\n\n.hamburger--vortex-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: rotate(-90deg); }\n", "",{"version":3,"sources":["webpack://src/assets/scss/mixins.scss","webpack://src/components/Hamburger-Menu/HamburgerMenu.scss"],"names":[],"mappings":"AA4GA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB,EAAA;EARxB;IAYI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;ACxHpB;;;;;;EAkBE;AAXD;EAEC,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,oCAAoC;EACpC,0BAA0B;EAC1B,kCAAkC;EAClC,aAAa;EACb,cAAc;EACd,oBAAoB;EACpB,6BAA6B;EAC7B,SAAS;EACT,SAAS;EACT,gBAAgB;EAChB,iBAAiB,EAAA;;AACjB;EACE,YAAY,EAAA;;AACd;EACE,YAAY,EAAA;;AACd;;;EAGE,uBAAuB,EAAA;;AAE3B;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB,EAAA;;AAEpB;EACE,cAAc;EACd,QAAQ;EACR,gBAAgB,EAAA;;AAChB;EACE,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,8BAA8B;EAC9B,0BAA0B;EAC1B,gCAAgC,EAAA;;AAClC;EACE,WAAW;EACX,cAAc,EAAA;;AAChB;EACE,UAAU,EAAA;;AACZ;EACE,aAAa,EAAA;;AAEjB;;IAoBI;AAjBJ;EACE,iBAAiB,EAAA;;AAEnB;EACE,+HAA+H,EAAA;;AAC/H;EACE,kEAAkE,EAAA;;AAEtE;EACE,wCAAwC;EACxC,0BAA0B,EAAA;;AAC1B;EACE,gDAAgD,EAAA;;AAClD;EACE,kDAAkD,EAAA;;AAEtD;;IAuBI;AApBJ;EACE,iBAAiB,EAAA;;AAEnB;EACE,+HAA+H,EAAA;;AAC/H;EACE,kEAAkE,EAAA;;AAEtE;EACE,wCAAwC;EACxC,2BAA2B,EAAA;;AAC3B;EACE,gDAAgD,EAAA;;AAClD;EACE,kDAAkD,EAAA;;AAEtD;;IA0BI;AAvBJ;EACE,iBAAiB,EAAA;;AAEnB;EACE,+HAA+H,EAAA;;AAC/H;EACE,kEAAkE,EAAA;;AAEtE;EACE,wCAAwC;EACxC,2BAA2B,EAAA;;AAC3B;EACE,gDAAgD,EAAA;;AAClD;EACE,kDAAkD,EAAA;;AAEtD;;IA6BI;AA1BJ;EACE,iBAAiB,EAAA;;AAEnB;EACE,+HAA+H,EAAA;;AAC/H;EACE,kEAAkE,EAAA;;AAEtE;EACE,wCAAwC;EACxC,0BAA0B,EAAA;;AAC1B;EACE,gDAAgD,EAAA;;AAClD;EACE,kDAAkD,EAAA;;AAEtD;;IAgCI;AA7BJ;EACE,iBAAiB,EAAA;;AAEnB;EACE,+HAA+H,EAAA;;AAC/H;EACE,kEAAkE,EAAA;;AAEtE;EACE,wCAAwC;EACxC,0CAA0C,EAAA;;AAC1C;EACE,gDAAgD,EAAA;;AAClD;EACE,kDAAkD,EAAA;;AAEtD;;IAmCI;AAhCJ;EACE,iBAAiB,EAAA;;AAEnB;EACE,+HAA+H,EAAA;;AAC/H;EACE,kEAAkE,EAAA;;AAEtE;EACE,wCAAwC;EACxC,2DAA2D,EAAA;;AAC3D;EACE,gDAAgD,EAAA;;AAClD;EACE,kDAAkD,EAAA;;AAEtD;;IAsCI;AAnCJ;EACE,+DAA+D,EAAA;;AAEjE;EACE,8DAA8D,EAAA;;AAEhE;;IAsCI;AAnCJ;EACE,6DAA6D,EAAA;;AAE/D;EACE,8DAA8D,EAAA;;AAEhE;;IAsCI;AAnCJ;EACE,iFAAiF,EAAA;;AAEnF;EACE,oFAAoF,EAAA;;AAEtF;EACE,MAAM;EACN,mEAAmE;EACnE,qFAAqF,EAAA;;AAEvF;EACE,SAAS;EACT,iEAAiE;EACjE,wFAAwF,EAAA;;AAE1F;;IAsCI;AAnCJ;EACE,iFAAiF,EAAA;;AAEnF;EACE,oFAAoF,EAAA;;AAEtF;EACE,MAAM;EACN,iEAAiE;EACjE,qFAAqF,EAAA;;AAEvF;EACE,SAAS;EACT,iEAAiE;EACjE,wFAAwF,EAAA;;AAE1F;;IAsCI;AAnCJ;EACE,0BAA0B,EAAA;;AAC1B;EACE,6DAA6D,EAAA;;AAC/D;EACE,8DAA8D,EAAA;;AAElE;;IAwCI;AArCJ;EACE,0BAA0B,EAAA;;AAC1B;EACE,+DAA+D,EAAA;;AACjE;EACE,8DAA8D,EAAA;;AAElE;;IA0CI;AAvCJ;EACE,yBAAyB,EAAA;;AAE3B;EACE,wBAAwB,EAAA;;AACxB;EACE,MAAM;EACN,UAAU,EAAA;;AACZ;EACE,SAAS;EACT,yBAAyB,EAAA;;AAE7B;;IA4CI;AAzCJ;EACE,SAAS;EACT,SAAS;EACT,0BAA0B;EAC1B,uBAAuB;EACvB,kEAAkE,EAAA;;AAClE;EACE,UAAU;EACV,yFAAyF,EAAA;;AAC3F;EACE,6HAA6H,EAAA;;AAEjI;EACE,kDAAkD;EAClD,uBAAuB;EACvB,+DAA+D,EAAA;;AAC/D;EACE,MAAM;EACN,UAAU;EACV,0FAA0F,EAAA;;AAC5F;EACE,MAAM;EACN,yBAAyB;EACzB,gIAAgI,EAAA;;AAEpI;;IAgDI;AA7CJ;EACE,SAAS;EACT,SAAS;EACT,0BAA0B;EAC1B,uBAAuB;EACvB,kEAAkE,EAAA;;AAClE;EACE,UAAU;EACV,yFAAyF,EAAA;;AAC3F;EACE,6HAA6H,EAAA;;AAEjI;EACE,iDAAiD;EACjD,uBAAuB;EACvB,+DAA+D,EAAA;;AAC/D;EACE,MAAM;EACN,UAAU;EACV,0FAA0F,EAAA;;AAC5F;EACE,MAAM;EACN,wBAAwB;EACxB,gIAAgI,EAAA;;AAEpI;;IAoDI;AAjDJ;EACE,QAAQ;EACR,2BAA2B;EAC3B,kEAAkE,EAAA;;AAClE;EACE,SAAS;EACT,sCAAsC,EAAA;;AACxC;EACE,SAAS;EACT,mEAAmE,EAAA;;AAEvE;EACE,iDAAiD;EACjD,wBAAwB,EAAA;;AACxB;EACE,oBAAoB;EACpB,UAAU,EAAA;;AACZ;EACE,mDAAmD;EACnD,wBAAwB,EAAA;;AAE5B;;IAwDI;AArDJ;EACE,QAAQ;EACR,2BAA2B;EAC3B,kEAAkE,EAAA;;AAClE;EACE,SAAS;EACT,sCAAsC,EAAA;;AACxC;EACE,SAAS;EACT,mEAAmE,EAAA;;AAEvE;EACE,kDAAkD;EAClD,wBAAwB,EAAA;;AACxB;EACE,oBAAoB;EACpB,UAAU,EAAA;;AACZ;EACE,kDAAkD;EAClD,wBAAwB,EAAA;;AAE5B;;IA4DI;AAzDJ;EACE,gBAAgB,EAAA;;AAChB;EACE,kDAAkD,EAAA;;AAClD;EACE,OAAO;EACP,sHAAsH,EAAA;;AACxH;EACE,SAAS;EACT,QAAQ;EACR,uHAAuH,EAAA;;AAC3H;EACE,oBAAoB;EACpB,oCAAoC;EACpC,wCAAwC,EAAA;;AACxC;EACE,WAAW;EACX,UAAU;EACV,mDAAmD;EACnD,sHAAsH,EAAA;;AACxH;EACE,YAAY;EACZ,UAAU;EACV,qDAAqD;EACrD,uHAAuH,EAAA;;AAE7H;;IAkEI;AA/DJ;EACE,gBAAgB,EAAA;;AAChB;EACE,kDAAkD,EAAA;;AAClD;EACE,OAAO;EACP,sHAAsH,EAAA;;AACxH;EACE,SAAS;EACT,QAAQ;EACR,uHAAuH,EAAA;;AAC3H;EACE,oBAAoB;EACpB,oCAAoC;EACpC,wCAAwC,EAAA;;AACxC;EACE,WAAW;EACX,SAAS;EACT,qDAAqD;EACrD,sHAAsH,EAAA;;AACxH;EACE,YAAY;EACZ,SAAS;EACT,qDAAqD;EACrD,uHAAuH,EAAA;;AAE7H;;IAwEI;AArEJ;EACE,8EAA8E,EAAA;;AAEhF;EACE,UAAU;EACV,8EAA8E,EAAA;;AAEhF;EACE,MAAM,EAAA;;AAER;EACE,SAAS,EAAA;;AAEX;;IAwEI;AArEJ;EACE,QAAQ,EAAA;;AACR;EACE,SAAS;EACT,uCAAuC;EACvC,gCAAgC;EAChC,0BAA0B,EAAA;;AAC5B;EACE,SAAS,EAAA;;AAEb;EACE,gDAAgD,EAAA;;AAChD;EACE,0DAA0D;EAC1D,UAAU,EAAA;;AACZ;EACE,kDAAkD,EAAA;;AAEtD;;IA4EI;AAzEJ;EACE,QAAQ,EAAA;;AACR;EACE,SAAS;EACT,uCAAuC;EACvC,gCAAgC;EAChC,0BAA0B,EAAA;;AAC5B;EACE,SAAS,EAAA;;AAEb;EACE,iDAAiD,EAAA;;AACjD;EACE,wDAAwD;EACxD,UAAU,EAAA;;AACZ;EACE,iDAAiD,EAAA;;AAErD;;IAgFI;AA7EJ;EACE,0BAA0B;EAC1B,kEAAkE,EAAA;;AAClE;EACE,wDAAwD,EAAA;;AAC1D;EACE,6FAA6F,EAAA;;AAEjG;EACE,yBAAyB;EACzB,uBAAuB;EACvB,+DAA+D,EAAA;;AAC/D;EACE,MAAM;EACN,UAAU;EACV,0DAA0D,EAAA;;AAC5D;EACE,SAAS;EACT,yBAAyB;EACzB,2FAA2F,EAAA;;AAE/F;;IAoFI;AAjFJ;EACE,0BAA0B;EAC1B,kEAAkE,EAAA;;AAClE;EACE,wDAAwD,EAAA;;AAC1D;EACE,6FAA6F,EAAA;;AAEjG;EACE,0BAA0B;EAC1B,uBAAuB;EACvB,+DAA+D,EAAA;;AAC/D;EACE,MAAM;EACN,UAAU;EACV,0DAA0D,EAAA;;AAC5D;EACE,SAAS;EACT,wBAAwB;EACxB,2FAA2F,EAAA;;AAE/F;;IAwFI;AArFJ;EACE,QAAQ;EACR,4CAA4C,EAAA;;AAC5C;EACE,SAAS;EACT,4HAA4H,EAAA;;AAC9H;EACE,SAAS;EACT,4HAA4H,EAAA;;AAEhI;EACE,uBAAuB;EACvB,wCAAwC,EAAA;;AACxC;EACE,MAAM;EACN,gIAAgI;EAChI,gDAAgD,EAAA;;AAClD;EACE,MAAM;EACN,0HAA0H;EAC1H,iDAAiD,EAAA;;AAErD;;IA4FI;AAzFJ;EACE,SAAS;EACT,SAAS;EACT,0BAA0B;EAC1B,oBAAoB;EACpB,kEAAkE,EAAA;;AAClE;EACE,UAAU;EACV,uFAAuF,EAAA;;AACzF;EACE,4HAA4H,EAAA;;AAEhI;EACE,kDAAkD;EAClD,uBAAuB;EACvB,+DAA+D,EAAA;;AAC/D;EACE,MAAM;EACN,UAAU;EACV,wFAAwF,EAAA;;AAC1F;EACE,MAAM;EACN,wBAAwB;EACxB,gIAAgI,EAAA;;AAEpI;;IAgGI;AA7FJ;EACE,4GAA4G,EAAA;;AAC5G;EACE,iGAAiG,EAAA;;AACnG;EACE,oGAAoG,EAAA;;AAExG;EACE,wBAAwB;EACxB,wCAAwC;EACxC,qGAAqG,EAAA;;AACrG;EACE,MAAM;EACN,yBAAyB;EACzB,gGAAgG,EAAA;;AAClG;EACE,SAAS;EACT,wBAAwB;EACxB,mGAAmG,EAAA;;AAEvG;;IAoGI;AAjGJ;EACE,4GAA4G,EAAA;;AAC5G;EACE,iGAAiG,EAAA;;AACnG;EACE,oGAAoG,EAAA;;AAExG;EACE,yBAAyB;EACzB,wCAAwC;EACxC,qGAAqG,EAAA;;AACrG;EACE,MAAM;EACN,yBAAyB;EACzB,gGAAgG,EAAA;;AAClG;EACE,SAAS;EACT,wBAAwB;EACxB,mGAAmG,EAAA;;AAEvG;;IAwGI;AArGJ;EACE,2BAA2B;EAC3B,kEAAkE,EAAA;;AAClE;EACE,sDAAsD,EAAA;;AACxD;EACE,6FAA6F,EAAA;;AAEjG;EACE,wBAAwB;EACxB,uBAAuB;EACvB,+DAA+D,EAAA;;AAC/D;EACE,MAAM;EACN,UAAU;EACV,sDAAsD,EAAA;;AACxD;EACE,SAAS;EACT,yBAAyB;EACzB,0FAA0F,EAAA;;AAE9F;;IA4GI;AAzGJ;EACE,yBAAyB;EACzB,0DAA0D,EAAA;;AAC1D;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kCAAkC,EAAA;;AACpC;EACE,iCAAiC,EAAA;;AACnC;EACE,sCAAsC,EAAA;;AAE1C;EACE,yBAAyB;EACzB,0DAA0D,EAAA;;AAC1D;EACE,oBAAoB,EAAA;;AACtB;EACE,MAAM;EACN,UAAU,EAAA;;AACZ;EACE,SAAS;EACT,wBAAwB,EAAA;;AAE5B;;IAkHI;AA/GJ;EACE,yBAAyB;EACzB,0DAA0D,EAAA;;AAC1D;EACE,uBAAuB;EACvB,sBAAsB;EACtB,kCAAkC,EAAA;;AACpC;EACE,iCAAiC,EAAA;;AACnC;EACE,sCAAsC,EAAA;;AAE1C;EACE,0BAA0B;EAC1B,0DAA0D,EAAA;;AAC1D;EACE,oBAAoB,EAAA;;AACtB;EACE,MAAM;EACN,UAAU,EAAA;;AACZ;EACE,SAAS;EACT,yBAAyB,EAAA","sourcesContent":["@mixin screen($media) {\n  @if $media == xs {\n    /* \n            Device = Most of the Smartphones Mobiles (Portrait)\n            Screen = B/w 320px to 479px\n        */\n    @media (max-width: 480px) {\n      @content;\n    }\n  } @else if $media == min-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) {\n      @content;\n    }\n  } @else if $media == sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) and (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == max-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == min-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) {\n      @content;\n    }\n  } @else if $media == md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) and (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == max-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == min-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) {\n      @content;\n    }\n  } @else if $media == lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) and (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == max-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == xl {\n    /*\n            Device = Desktops\n            Screen = 1281px to higher resolution desktops\n        */\n    @media (min-width: 1281px) {\n      @content;\n    }\n  } @else if $media == xxl {\n    @media (min-width: 1500px) {\n      @content;\n    }\n  }\n\n}\n\n@mixin flexBox($direction: row, $justify: center, $align: center, $wrap: nowrap) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n  flex-wrap: $wrap;\n}\n\n.resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none;\n  }\n}","@import '../../assets/scss/mixins.scss';\n@import '../../assets/scss/variables.scss';\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n .hamburger {\n  @extend .resetButtonStyles;\n  align-self: flex-start;\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  box-shadow: none;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.9; }\n  .hamburger.is-active:hover {\n    opacity: 0.9; }\n  .hamburger.is-active .hamburger-inner,\n  .hamburger.is-active .hamburger-inner::before,\n  .hamburger.is-active .hamburger-inner::after {\n    background-color: white; }\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 40px;\n    height: 4px;\n    background-color: white;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -10px; }\n  .hamburger-inner::after {\n    bottom: -10px; }\n\n/*\n   * 3DX\n   */\n.hamburger--3dx .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dx .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(180deg); }\n  .hamburger--3dx.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dx.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DX Reverse\n   */\n.hamburger--3dx-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dx-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateY(-180deg); }\n  .hamburger--3dx-r.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dx-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY\n   */\n.hamburger--3dy .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(-180deg); }\n  .hamburger--3dy.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dy.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DY Reverse\n   */\n.hamburger--3dy-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg); }\n  .hamburger--3dy-r.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dy-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY\n   */\n.hamburger--3dxy .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dxy .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg); }\n  .hamburger--3dxy.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dxy.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY Reverse\n   */\n.hamburger--3dxy-r .hamburger-box {\n  perspective: 80px; }\n\n.hamburger--3dxy-r .hamburger-inner {\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n  .hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner {\n  background-color: transparent !important;\n  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }\n  .hamburger--3dxy-r.is-active .hamburger-inner::before {\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--3dxy-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -10px, 0) rotate(-45deg); }\n\n/*\n   * Arrow\n   */\n.hamburger--arrow.is-active .hamburger-inner::before {\n  transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Right\n   */\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Alt\n   */\n.hamburger--arrowalt .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(-8px, -10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(-8px, 10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Alt Right\n   */\n.hamburger--arrowalt-r .hamburger-inner::before {\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r .hamburger-inner::after {\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::before {\n  top: 0;\n  transform: translate3d(8px, -10px, 0) rotate(45deg) scale(0.7, 1);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  transform: translate3d(8px, 10px, 0) rotate(-45deg) scale(0.7, 1);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Turn\n   */\n.hamburger--arrowturn.is-active .hamburger-inner {\n  transform: rotate(-180deg); }\n  .hamburger--arrowturn.is-active .hamburger-inner::before {\n    transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n  .hamburger--arrowturn.is-active .hamburger-inner::after {\n    transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Turn Right\n   */\n.hamburger--arrowturn-r.is-active .hamburger-inner {\n  transform: rotate(-180deg); }\n  .hamburger--arrowturn-r.is-active .hamburger-inner::before {\n    transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n  .hamburger--arrowturn-r.is-active .hamburger-inner::after {\n    transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Boring\n   */\n.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n  transition-property: none; }\n\n.hamburger--boring.is-active .hamburger-inner {\n  transform: rotate(45deg); }\n  .hamburger--boring.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--boring.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg); }\n\n/*\n   * Collapse\n   */\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--collapse .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n  .hamburger--collapse .hamburger-inner::before {\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--collapse.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n  .hamburger--collapse.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(-90deg);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Collapse Reverse\n   */\n.hamburger--collapse-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0.13s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--collapse-r .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n  .hamburger--collapse-r .hamburger-inner::before {\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--collapse-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n  .hamburger--collapse-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(90deg);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Elastic\n   */\n.hamburger--elastic .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  .hamburger--elastic .hamburger-inner::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease; }\n  .hamburger--elastic .hamburger-inner::after {\n    top: 20px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(135deg);\n  transition-delay: 0.075s; }\n  .hamburger--elastic.is-active .hamburger-inner::before {\n    transition-delay: 0s;\n    opacity: 0; }\n  .hamburger--elastic.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(-270deg);\n    transition-delay: 0.075s; }\n\n/*\n   * Elastic Reverse\n   */\n.hamburger--elastic-r .hamburger-inner {\n  top: 2px;\n  transition-duration: 0.275s;\n  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n  .hamburger--elastic-r .hamburger-inner::before {\n    top: 10px;\n    transition: opacity 0.125s 0.275s ease; }\n  .hamburger--elastic-r .hamburger-inner::after {\n    top: 20px;\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(-135deg);\n  transition-delay: 0.075s; }\n  .hamburger--elastic-r.is-active .hamburger-inner::before {\n    transition-delay: 0s;\n    opacity: 0; }\n  .hamburger--elastic-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(270deg);\n    transition-delay: 0.075s; }\n\n/*\n   * Emphatic\n   */\n.hamburger--emphatic {\n  overflow: hidden; }\n  .hamburger--emphatic .hamburger-inner {\n    transition: background-color 0.125s 0.175s ease-in; }\n    .hamburger--emphatic .hamburger-inner::before {\n      left: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n    .hamburger--emphatic .hamburger-inner::after {\n      top: 10px;\n      right: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n  .hamburger--emphatic.is-active .hamburger-inner {\n    transition-delay: 0s;\n    transition-timing-function: ease-out;\n    background-color: transparent !important; }\n    .hamburger--emphatic.is-active .hamburger-inner::before {\n      left: -80px;\n      top: -80px;\n      transform: translate3d(80px, 80px, 0) rotate(45deg);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n    .hamburger--emphatic.is-active .hamburger-inner::after {\n      right: -80px;\n      top: -80px;\n      transform: translate3d(-80px, 80px, 0) rotate(-45deg);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Emphatic Reverse\n   */\n.hamburger--emphatic-r {\n  overflow: hidden; }\n  .hamburger--emphatic-r .hamburger-inner {\n    transition: background-color 0.125s 0.175s ease-in; }\n    .hamburger--emphatic-r .hamburger-inner::before {\n      left: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in; }\n    .hamburger--emphatic-r .hamburger-inner::after {\n      top: 10px;\n      right: 0;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in; }\n  .hamburger--emphatic-r.is-active .hamburger-inner {\n    transition-delay: 0s;\n    transition-timing-function: ease-out;\n    background-color: transparent !important; }\n    .hamburger--emphatic-r.is-active .hamburger-inner::before {\n      left: -80px;\n      top: 80px;\n      transform: translate3d(80px, -80px, 0) rotate(-45deg);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n    .hamburger--emphatic-r.is-active .hamburger-inner::after {\n      right: -80px;\n      top: 80px;\n      transform: translate3d(-80px, -80px, 0) rotate(45deg);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Minus\n   */\n.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n  opacity: 0;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before {\n  top: 0; }\n\n.hamburger--minus.is-active .hamburger-inner::after {\n  bottom: 0; }\n\n/*\n   * Slider\n   */\n.hamburger--slider .hamburger-inner {\n  top: 2px; }\n  .hamburger--slider .hamburger-inner::before {\n    top: 10px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider .hamburger-inner::after {\n    top: 20px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--slider.is-active .hamburger-inner::before {\n    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(-90deg); }\n\n/*\n   * Slider Reverse\n   */\n.hamburger--slider-r .hamburger-inner {\n  top: 2px; }\n  .hamburger--slider-r .hamburger-inner::before {\n    top: 10px;\n    transition-property: transform, opacity;\n    transition-timing-function: ease;\n    transition-duration: 0.15s; }\n  .hamburger--slider-r .hamburger-inner::after {\n    top: 20px; }\n\n.hamburger--slider-r.is-active .hamburger-inner {\n  transform: translate3d(0, 10px, 0) rotate(-45deg); }\n  .hamburger--slider-r.is-active .hamburger-inner::before {\n    transform: rotate(45deg) translate3d(5.71429px, -6px, 0);\n    opacity: 0; }\n  .hamburger--slider-r.is-active .hamburger-inner::after {\n    transform: translate3d(0, -20px, 0) rotate(90deg); }\n\n/*\n   * Spin\n   */\n.hamburger--spin .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spin .hamburger-inner::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n  .hamburger--spin .hamburger-inner::after {\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin.is-active .hamburger-inner {\n  transform: rotate(225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spin.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n  .hamburger--spin.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spin Reverse\n   */\n.hamburger--spin-r .hamburger-inner {\n  transition-duration: 0.22s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spin-r .hamburger-inner::before {\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n  .hamburger--spin-r .hamburger-inner::after {\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r.is-active .hamburger-inner {\n  transform: rotate(-225deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spin-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n  .hamburger--spin-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(90deg);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spring\n   */\n.hamburger--spring .hamburger-inner {\n  top: 2px;\n  transition: background-color 0s 0.13s linear; }\n  .hamburger--spring .hamburger-inner::before {\n    top: 10px;\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spring .hamburger-inner::after {\n    top: 20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring.is-active .hamburger-inner {\n  transition-delay: 0.22s;\n  background-color: transparent !important; }\n  .hamburger--spring.is-active .hamburger-inner::before {\n    top: 0;\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 10px, 0) rotate(45deg); }\n  .hamburger--spring.is-active .hamburger-inner::after {\n    top: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transform: translate3d(0, 10px, 0) rotate(-45deg); }\n\n/*\n   * Spring Reverse\n   */\n.hamburger--spring-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  transition-duration: 0.13s;\n  transition-delay: 0s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--spring-r .hamburger-inner::after {\n    top: -20px;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }\n  .hamburger--spring-r .hamburger-inner::before {\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r.is-active .hamburger-inner {\n  transform: translate3d(0, -10px, 0) rotate(-45deg);\n  transition-delay: 0.22s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--spring-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }\n  .hamburger--spring-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(90deg);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand\n   */\n.hamburger--stand .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n  .hamburger--stand .hamburger-inner::before {\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand .hamburger-inner::after {\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand.is-active .hamburger-inner {\n  transform: rotate(90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n  .hamburger--stand.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(-45deg);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(45deg);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand Reverse\n   */\n.hamburger--stand-r .hamburger-inner {\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear; }\n  .hamburger--stand-r .hamburger-inner::before {\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--stand-r .hamburger-inner::after {\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r.is-active .hamburger-inner {\n  transform: rotate(-90deg);\n  background-color: transparent !important;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear; }\n  .hamburger--stand-r.is-active .hamburger-inner::before {\n    top: 0;\n    transform: rotate(-45deg);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--stand-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(45deg);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Squeeze\n   */\n.hamburger--squeeze .hamburger-inner {\n  transition-duration: 0.075s;\n  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n  .hamburger--squeeze .hamburger-inner::before {\n    transition: top 0.075s 0.12s ease, opacity 0.075s ease; }\n  .hamburger--squeeze .hamburger-inner::after {\n    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.is-active .hamburger-inner {\n  transform: rotate(45deg);\n  transition-delay: 0.12s;\n  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n  .hamburger--squeeze.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    transition: top 0.075s ease, opacity 0.075s 0.12s ease; }\n  .hamburger--squeeze.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg);\n    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Vortex\n   */\n.hamburger--vortex .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n    transition-duration: 0s;\n    transition-delay: 0.1s;\n    transition-timing-function: linear; }\n  .hamburger--vortex .hamburger-inner::before {\n    transition-property: top, opacity; }\n  .hamburger--vortex .hamburger-inner::after {\n    transition-property: bottom, transform; }\n\n.hamburger--vortex.is-active .hamburger-inner {\n  transform: rotate(765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n    transition-delay: 0s; }\n  .hamburger--vortex.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--vortex.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(90deg); }\n\n/*\n   * Vortex Reverse\n   */\n.hamburger--vortex-r .hamburger-inner {\n  transition-duration: 0.2s;\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n    transition-duration: 0s;\n    transition-delay: 0.1s;\n    transition-timing-function: linear; }\n  .hamburger--vortex-r .hamburger-inner::before {\n    transition-property: top, opacity; }\n  .hamburger--vortex-r .hamburger-inner::after {\n    transition-property: bottom, transform; }\n\n.hamburger--vortex-r.is-active .hamburger-inner {\n  transform: rotate(-765deg);\n  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n  .hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n    transition-delay: 0s; }\n  .hamburger--vortex-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n  .hamburger--vortex-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    transform: rotate(-90deg); }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/Header.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/Header/Header.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em; }\n  .resetButtonStyles:hover, .resetButtonStyles:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none; }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n  height: 10vh;\n  background-color: #F2D335; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/mixins.scss","webpack://src/components/Header/Header.scss","webpack://src/assets/scss/variables.scss"],"names":[],"mappings":"AA4GA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB,EAAA;EARxB;IAYI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;ACrHpB;ED+FE,aAAa;EACb,mBC/FoB;EDgGpB,2BChGgC;EDiGhC,mBCjGwC;EDkGxC,iBAL6E;EC5F7E,YALiB;EAMjB,yBCKmB,EAAA","sourcesContent":["@mixin screen($media) {\n  @if $media == xs {\n    /* \n            Device = Most of the Smartphones Mobiles (Portrait)\n            Screen = B/w 320px to 479px\n        */\n    @media (max-width: 480px) {\n      @content;\n    }\n  } @else if $media == min-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) {\n      @content;\n    }\n  } @else if $media == sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) and (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == max-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == min-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) {\n      @content;\n    }\n  } @else if $media == md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) and (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == max-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == min-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) {\n      @content;\n    }\n  } @else if $media == lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) and (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == max-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == xl {\n    /*\n            Device = Desktops\n            Screen = 1281px to higher resolution desktops\n        */\n    @media (min-width: 1281px) {\n      @content;\n    }\n  } @else if $media == xxl {\n    @media (min-width: 1500px) {\n      @content;\n    }\n  }\n\n}\n\n@mixin flexBox($direction: row, $justify: center, $align: center, $wrap: nowrap) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n  flex-wrap: $wrap;\n}\n\n.resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none;\n  }\n}","@import '../../assets/scss/mixins.scss';\n@import '../../assets/scss/variables.scss';\n\n$headerHeigth: 10vh;\n$headerColor: $yellowColor;\n\nheader {\n  @include flexBox(row, flex-start, center);\n  height: $headerHeigth;\n  background-color: $headerColor;\n}","$darkColor: #0a1c20;\n\n$blueColor: #41a6de;\n\n$darkerWineColor: #260306;\n$darkWineColor: #59070E;\n$mediumWineColor: #880000;\n$lightWineColor: #901A2A;\n\n$redColor: #d10015;\n$pinkColor: #f6343c;\n\n$orangeColor: #f08327;\n\n$yellowColor: #F2D335;\n\n$darkerGrayColor: #444444;\n$darkGrayColor: #8f8f8f;\n$darkTranparentGrayColor: #8f8f8f7c;\n$grayColor: #d9d9d9;\n$transparentGrayColor: #d9d9d98a;\n\n$whiteColor: white;\n\n\n$font-large: calc(14px + 0.8vw);\n$font-medium: calc(12px + 0.8vw);\n$font-small: calc(10px + 0.8vw);\n$font-xsmall: calc(8px + 0.8vw);\n$font-xxsmall: calc(6px + 0.8vw);"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Sidebar/Sidebar.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/Sidebar/Sidebar.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_ballons_defaultBallon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/ballons/defaultBallon.png */ "./src/assets/images/ballons/defaultBallon.png");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_ballons_defaultBallon_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em; }\n  .resetButtonStyles:hover, .resetButtonStyles:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none; }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: nowrap;\n  height: 10vh;\n  background-color: #F2D335; }\n\nnav {\n  position: fixed;\n  top: 10vh;\n  width: 100vw;\n  height: calc(100vh - 10vh);\n  transition: 1s ease; }\n  nav ul {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: nowrap;\n    height: 100%;\n    background-color: #F2D335; }\n    nav ul li {\n      list-style: none;\n      cursor: pointer;\n      background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n      background-position: center;\n      padding: 50px;\n      font-size: calc(12px + 0.8vw); }\n    nav ul hr {\n      width: 30%;\n      border: none;\n      border-bottom: 1px solid #260306;\n      outline: none; }\n\n.move-menu {\n  transform: translateX(-100vw);\n  transition: 1s ease;\n  z-index: 2; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/mixins.scss","webpack://src/components/Header/Header.scss","webpack://src/assets/scss/variables.scss","webpack://src/components/Sidebar/Sidebar.scss"],"names":[],"mappings":"AA4GA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB,EAAA;EARxB;IAYI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;ACrHpB;ED+FE,aAAa;EACb,mBC/FoB;EDgGpB,2BChGgC;EDiGhC,mBCjGwC;EDkGxC,iBAL6E;EC5F7E,YALiB;EAMjB,yBCKmB,EAAA;;ACZrB;EACE,eAAe;EACf,SFDiB;EEEjB,YAAY;EACZ,0BAAsC;EACtC,mBAAmB,EAAA;EALrB;IHmGE,aAAa;IACb,sBG5FyB;IH6FzB,6BG7FuC;IH8FvC,mBAJ8D;IAK9D,iBAL6E;IGzF3E,YAAY;IACZ,yBDEiB,EAAA;ICZrB;MAaM,gBAAgB;MAChB,eAAe;MACf,yDAAsE;MACtE,2BAA2B;MAC3B,aAAa;MACb,6BDM0B,EAAA;ICxBhC;MAsBM,UAAU;MACV,YAAY;MACZ,gCDtBmB;MCuBnB,aAAa,EAAA;;AAKnB;EACE,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU,EAAA","sourcesContent":["@mixin screen($media) {\n  @if $media == xs {\n    /* \n            Device = Most of the Smartphones Mobiles (Portrait)\n            Screen = B/w 320px to 479px\n        */\n    @media (max-width: 480px) {\n      @content;\n    }\n  } @else if $media == min-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) {\n      @content;\n    }\n  } @else if $media == sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) and (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == max-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == min-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) {\n      @content;\n    }\n  } @else if $media == md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) and (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == max-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == min-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) {\n      @content;\n    }\n  } @else if $media == lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) and (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == max-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == xl {\n    /*\n            Device = Desktops\n            Screen = 1281px to higher resolution desktops\n        */\n    @media (min-width: 1281px) {\n      @content;\n    }\n  } @else if $media == xxl {\n    @media (min-width: 1500px) {\n      @content;\n    }\n  }\n\n}\n\n@mixin flexBox($direction: row, $justify: center, $align: center, $wrap: nowrap) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n  flex-wrap: $wrap;\n}\n\n.resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none;\n  }\n}","@import '../../assets/scss/mixins.scss';\n@import '../../assets/scss/variables.scss';\n\n$headerHeigth: 10vh;\n$headerColor: $yellowColor;\n\nheader {\n  @include flexBox(row, flex-start, center);\n  height: $headerHeigth;\n  background-color: $headerColor;\n}","$darkColor: #0a1c20;\n\n$blueColor: #41a6de;\n\n$darkerWineColor: #260306;\n$darkWineColor: #59070E;\n$mediumWineColor: #880000;\n$lightWineColor: #901A2A;\n\n$redColor: #d10015;\n$pinkColor: #f6343c;\n\n$orangeColor: #f08327;\n\n$yellowColor: #F2D335;\n\n$darkerGrayColor: #444444;\n$darkGrayColor: #8f8f8f;\n$darkTranparentGrayColor: #8f8f8f7c;\n$grayColor: #d9d9d9;\n$transparentGrayColor: #d9d9d98a;\n\n$whiteColor: white;\n\n\n$font-large: calc(14px + 0.8vw);\n$font-medium: calc(12px + 0.8vw);\n$font-small: calc(10px + 0.8vw);\n$font-xsmall: calc(8px + 0.8vw);\n$font-xxsmall: calc(6px + 0.8vw);","@import '../Header/Header.scss';\n\nnav {\n  position: fixed;\n  top: $headerHeigth;\n  width: 100vw;\n  height: calc(100vh - #{$headerHeigth});\n  transition: 1s ease;\n\n  ul {\n    @include flexBox(column, space-around);\n    height: 100%;\n    background-color: $headerColor;\n\n    li {\n      list-style: none;\n      cursor: pointer;\n      background-image: url('../../assets/images/ballons/defaultBallon.png');\n      background-position: center;\n      padding: 50px;\n      font-size: $font-medium;\n    }\n\n    hr {\n      width: 30%;\n      border: none;\n      border-bottom: 1px solid $darkerWineColor;\n      outline: none;\n    }\n  }\n}\n\n.move-menu {\n  transform: translateX(-100vw);\n  transition: 1s ease;\n  z-index: 2;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Login/Login.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/pages/Login/Login.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_BGs_Marvel_Background3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/BGs/Marvel_Background3.jpg */ "./src/assets/images/BGs/Marvel_Background3.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_BGs_Marvel_Background3_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em; }\n  .resetButtonStyles:hover, .resetButtonStyles:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none; }\n\nmain.loginPage {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-position-y: -30vh;\n  background-size: 100vw 100vh;\n  padding-top: 40vh;\n  height: calc(100vh - 40vh); }\n\nmain header img {\n  width: 100px; }\n\nmain .inputsContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: nowrap;\n  height: 20vh; }\n", "",{"version":3,"sources":["webpack://src/assets/scss/mixins.scss","webpack://src/pages/Login/Login.scss"],"names":[],"mappings":"AA4GA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,sBAAsB,EAAA;EARxB;IAYI,6BAA6B;IAC7B,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB,EAAA;;ACtHpB;EAEI,yDAAuE;EACvE,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;EAC5B,iBARc;EASd,0BAAqC,EAAA;;AAPzC;EAYM,YAAY,EAAA;;AAZlB;EDgGE,aAAa;EACb,sBChFyB;EDiFzB,8BCjFwC;EDkFxC,mBAJ8D;EAK9D,iBAL6E;EC7E3E,YAAY,EAAA","sourcesContent":["@mixin screen($media) {\n  @if $media == xs {\n    /* \n            Device = Most of the Smartphones Mobiles (Portrait)\n            Screen = B/w 320px to 479px\n        */\n    @media (max-width: 480px) {\n      @content;\n    }\n  } @else if $media == min-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) {\n      @content;\n    }\n  } @else if $media == sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (min-width: 481px) and (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == max-sm {\n    /* \n            Device = Low Resolution Tablets, Mobiles (Landscape)\n            Screen = B/w 481px to 767px\n        */\n    @media (max-width: 767px) {\n      @content;\n    }\n  } @else if $media == min-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) {\n      @content;\n    }\n  } @else if $media == md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (min-width: 768px) and (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == max-md {\n    /* \n            Device = Tablets, Ipads (landscape)\n            Screen = B/w 768px to 1024px\n        */\n    @media (max-width: 1024px) {\n      @content;\n    }\n  } @else if $media == min-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) {\n      @content;\n    }\n  } @else if $media == lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (min-width: 1025px) and (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == max-lg {\n    /* \n            Device = Laptops, Desktops\n            Screen = B/w 1025px to 1280px\n        */\n\n    @media (max-width: 1280px) {\n      @content;\n    }\n  } @else if $media == xl {\n    /*\n            Device = Desktops\n            Screen = 1281px to higher resolution desktops\n        */\n    @media (min-width: 1281px) {\n      @content;\n    }\n  } @else if $media == xxl {\n    @media (min-width: 1500px) {\n      @content;\n    }\n  }\n\n}\n\n@mixin flexBox($direction: row, $justify: center, $align: center, $wrap: nowrap) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n  flex-wrap: $wrap;\n}\n\n.resetButtonStyles {\n  background-color: transparent;\n  padding: 0;\n  color: transparent;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  transition: none;\n  letter-spacing: 0.15em;\n\n\n  &:hover, &:active {\n    background-color: transparent;\n    box-shadow: none;\n    color: transparent;\n    transition: none;\n  }\n}","@import '../../assets/scss/mixins.scss';\n@import '../../assets/scss/variables.scss';\n\n$padding-top: 40vh;\n\nmain {\n  &.loginPage {\n    background-image: url('../../assets/images/BGs/Marvel_Background3.jpg');\n    background-position: center;\n    background-position-y: -30vh;\n    background-size: 100vw 100vh;\n    padding-top: $padding-top;\n    height: calc(100vh - #{$padding-top});\n  }\n\n  header {\n    img {\n      width: 100px;\n    }\n  }\n\n  .inputsContainer {\n    @include flexBox(column, space-between);\n    height: 20vh;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/pages/index.js");
/* harmony import */ var _assets_scss_reset_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scss/reset.scss */ "./src/assets/scss/reset.scss");
/* harmony import */ var _assets_scss_reset_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_reset_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_scss_base_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/scss/base.scss */ "./src/assets/scss/base.scss");
/* harmony import */ var _assets_scss_base_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_base_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/App.jsx";










__webpack_require__(/*! typeface-bebas-neue */ "./node_modules/typeface-bebas-neue/index.css");

function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["Login"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/search",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["Search"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/register",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["Register"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/details/character/:id",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["CharacterDetails"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/details/comics/:id",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["ComicsDetails"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/favorites",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["Favorites"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
          exact: true,
          path: "/profile",
          component: _pages__WEBPACK_IMPORTED_MODULE_3__["Profile"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/Loaders/Loader.jsx":
/*!***************************************!*\
  !*** ./src/assets/Loaders/Loader.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.scss */ "./src/assets/Loaders/Loader.scss");
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/assets/Loaders/Loader.jsx";





function Loader({
  src
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "loader",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
      src: src,
      alt: "Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = Loader;
Loader.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

__webpack_require__.$Refresh$.register(_c, "Loader");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/Loaders/Loader.scss":
/*!****************************************!*\
  !*** ./src/assets/Loaders/Loader.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Loader.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/Loaders/Loader.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Loader.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/Loaders/Loader.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Loader.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/Loaders/Loader.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/Loaders/loaderDictionary.js":
/*!************************************************!*\
  !*** ./src/assets/Loaders/loaderDictionary.js ***!
  \************************************************/
/*! exports provided: getImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return getImage; });
/* harmony import */ var _images_gifs_avengers1_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/gifs/avengers1.gif */ "./src/assets/images/gifs/avengers1.gif");
/* harmony import */ var _images_gifs_mrAmerica1_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/gifs/mrAmerica1.gif */ "./src/assets/images/gifs/mrAmerica1.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain.gif */ "./src/assets/images/gifs/marvelLoadingMain.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain2_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain2.gif */ "./src/assets/images/gifs/marvelLoadingMain2.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain3_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain3.gif */ "./src/assets/images/gifs/marvelLoadingMain3.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain4_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain4.gif */ "./src/assets/images/gifs/marvelLoadingMain4.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain5_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain5.gif */ "./src/assets/images/gifs/marvelLoadingMain5.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain6_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain6.gif */ "./src/assets/images/gifs/marvelLoadingMain6.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain7_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain7.gif */ "./src/assets/images/gifs/marvelLoadingMain7.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain8_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain8.gif */ "./src/assets/images/gifs/marvelLoadingMain8.gif");
/* harmony import */ var _images_gifs_marvelLoadingMain9_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/gifs/marvelLoadingMain9.gif */ "./src/assets/images/gifs/marvelLoadingMain9.gif");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);












const loaderImages = {
  avengers: {
    src: _images_gifs_avengers1_gif__WEBPACK_IMPORTED_MODULE_0__["default"],
    timer: 5000
  },
  mrAmerica: {
    src: _images_gifs_mrAmerica1_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
    timer: 5000
  },
  main1: {
    src: _images_gifs_marvelLoadingMain_gif__WEBPACK_IMPORTED_MODULE_2__["default"],
    timer: 2750
  },
  main2: {
    src: _images_gifs_marvelLoadingMain2_gif__WEBPACK_IMPORTED_MODULE_3__["default"],
    timer: 5000
  },
  main3: {
    src: _images_gifs_marvelLoadingMain3_gif__WEBPACK_IMPORTED_MODULE_4__["default"],
    timer: 5000
  },
  main4: {
    src: _images_gifs_marvelLoadingMain4_gif__WEBPACK_IMPORTED_MODULE_5__["default"],
    timer: 5000
  },
  main5: {
    src: _images_gifs_marvelLoadingMain5_gif__WEBPACK_IMPORTED_MODULE_6__["default"],
    timer: 5000
  },
  main6: {
    src: _images_gifs_marvelLoadingMain6_gif__WEBPACK_IMPORTED_MODULE_7__["default"],
    timer: 5000
  },
  main7: {
    src: _images_gifs_marvelLoadingMain7_gif__WEBPACK_IMPORTED_MODULE_8__["default"],
    timer: 5000
  },
  main8: {
    src: _images_gifs_marvelLoadingMain8_gif__WEBPACK_IMPORTED_MODULE_9__["default"],
    timer: 5000
  },
  main9: {
    src: _images_gifs_marvelLoadingMain9_gif__WEBPACK_IMPORTED_MODULE_10__["default"],
    timer: 5000
  }
};
const getImage = image => loaderImages[image];
/* harmony default export */ __webpack_exports__["default"] = (loaderImages);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/assets/images/BGs/Marvel_Background3.jpg":
/*!******************************************************!*\
  !*** ./src/assets/images/BGs/Marvel_Background3.jpg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Marvel_Background3.d27611f9.jpg");

/***/ }),

/***/ "./src/assets/images/ballons/defaultBallon.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/ballons/defaultBallon.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/defaultBallon.1015aeca.png");

/***/ }),

/***/ "./src/assets/images/gifs/avengers1.gif":
/*!**********************************************!*\
  !*** ./src/assets/images/gifs/avengers1.gif ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/avengers1.7367ea5b.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain.gif":
/*!******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain.gif ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain.4ddc6657.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain2.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain2.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain2.68eeaff4.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain3.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain3.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain3.ba871995.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain4.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain4.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain4.4053fbfd.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain5.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain5.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain5.f3c85a8b.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain6.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain6.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain6.f3e7abd6.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain7.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain7.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain7.05d91f66.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain8.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain8.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain8.52cc84d7.gif");

/***/ }),

/***/ "./src/assets/images/gifs/marvelLoadingMain9.gif":
/*!*******************************************************!*\
  !*** ./src/assets/images/gifs/marvelLoadingMain9.gif ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/marvelLoadingMain9.34869fb0.gif");

/***/ }),

/***/ "./src/assets/images/gifs/mrAmerica1.gif":
/*!***********************************************!*\
  !*** ./src/assets/images/gifs/mrAmerica1.gif ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/mrAmerica1.836ff92b.gif");

/***/ }),

/***/ "./src/assets/scss/base.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/base.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./base.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/base.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./base.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/base.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./base.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/base.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/assets/scss/reset.scss":
/*!************************************!*\
  !*** ./src/assets/scss/reset.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./reset.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/reset.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./reset.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/reset.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./reset.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/reset.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Button/Button.jsx":
/*!******************************************!*\
  !*** ./src/components/Button/Button.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/components/Button/Button.jsx";




const Button = ({
  title,
  isDisabled,
  onClick
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
  type: "button",
  disabled: isDisabled,
  onClick: onClick && (() => onClick()),
  children: title
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

_c = Button;
Button.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Button.defaultProps = {
  isDisabled: false,
  onClick: null
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

__webpack_require__.$Refresh$.register(_c, "Button");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Hamburger-Menu/HamburgerMenu.jsx":
/*!*********************************************************!*\
  !*** ./src/components/Hamburger-Menu/HamburgerMenu.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HamburgerMenu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HamburgerMenu.scss */ "./src/components/Hamburger-Menu/HamburgerMenu.scss");
/* harmony import */ var _HamburgerMenu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HamburgerMenu_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/components/Hamburger-Menu/HamburgerMenu.jsx";





function HamburgerMenu({
  isSidebarOpen,
  setIsSidebarOpen
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
    type: "button",
    className: `hamburger btn-burguer hamburger--stand ${isSidebarOpen && 'is-active'}`,
    onClick: () => setIsSidebarOpen(!isSidebarOpen),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
      className: "hamburger-box",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        className: "hamburger-inner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = HamburgerMenu;
HamburgerMenu.propTypes = {
  isSidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  setIsSidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);

var _c;

__webpack_require__.$Refresh$.register(_c, "HamburgerMenu");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Hamburger-Menu/HamburgerMenu.scss":
/*!**********************************************************!*\
  !*** ./src/components/Hamburger-Menu/HamburgerMenu.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HamburgerMenu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Hamburger-Menu/HamburgerMenu.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HamburgerMenu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Hamburger-Menu/HamburgerMenu.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HamburgerMenu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Hamburger-Menu/HamburgerMenu.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hamburger_Menu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hamburger-Menu/HamburgerMenu */ "./src/components/Hamburger-Menu/HamburgerMenu.jsx");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Sidebar/Sidebar */ "./src/components/Sidebar/Sidebar.jsx");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.scss */ "./src/components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/components/Header/Header.jsx",
    _s = __webpack_require__.$Refresh$.signature();







function Header() {
  _s();

  const [isSidebarOpen, setIsSidebarOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("header", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Hamburger_Menu_HamburgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      isSidebarOpen: isSidebarOpen,
      setIsSidebarOpen: setIsSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      isSidebarOpen: isSidebarOpen,
      setIsSidebarOpen: setIsSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_s(Header, "7pDpjxpt81vLgIcSls7O8aGkvA4=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

__webpack_require__.$Refresh$.register(_c, "Header");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Header/Header.scss":
/*!*******************************************!*\
  !*** ./src/components/Header/Header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Header.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/Header.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Header.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/Header.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Header.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Header/Header.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Input/Input.jsx":
/*!****************************************!*\
  !*** ./src/components/Input/Input.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/components/Input/Input.jsx";




const Input = ({
  title,
  type,
  onChange,
  value,
  placeholder,
  isReadOnly,
  onBlur,
  isValid,
  errorMessage,
  resetValidity
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
  className: "primaryInput",
  children: [title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
    htmlFor: title,
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
    id: title,
    type: type,
    onChange: onChange && (e => onChange(e.target.value)),
    onBlur: onBlur && (e => onBlur(e.target.value)),
    value: value,
    readOnly: isReadOnly,
    placeholder: placeholder,
    className: isValid !== null && !isValid && 'invalid',
    onClick: () => resetValidity(true)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined), isValid !== null && !isValid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "errorMessage textContainer",
    children: errorMessage
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 38
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 16,
  columnNumber: 3
}, undefined);

_c = Input;
Input.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isValid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  resetValidity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
Input.defaultProps = {
  onChange: null,
  onBlur: null,
  isReadOnly: false,
  title: null
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

var _c;

__webpack_require__.$Refresh$.register(_c, "Input");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.jsx":
/*!********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Sidebar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidebar.scss */ "./src/components/Sidebar/Sidebar.scss");
/* harmony import */ var _Sidebar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/components/Sidebar/Sidebar.jsx",
    _s = __webpack_require__.$Refresh$.signature();

/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */






const options = [{
  name: 'Search',
  redirect: '/search'
}, {
  name: 'Favorites',
  redirect: '/favorites',
  testId: 'side-menu-item-my-orders'
}, {
  name: 'Profile',
  redirect: '/profile'
}];
function Sidebar({
  isSidebarOpen,
  setIsSidebarOpen
}) {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    pathname
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const clicked = !isSidebarOpen && 'move-menu';
  const filteredOptions = options.filter(opt => opt.redirect !== pathname);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("nav", {
    className: `${clicked}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
      children: filteredOptions.map(({
        name,
        redirect
      }, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          onClick: () => {
            setIsSidebarOpen(false);
            history.push(`${redirect}`);
          },
          className: "menu-item",
          tabIndex: 0,
          role: "button",
          onKeyDown: () => {
            setIsSidebarOpen(false);
            history.push(`${redirect}`);
          },
          children: name
        }, name, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }, this), index < filteredOptions.length - 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 57
        }, this)]
      }, void 0, true))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

_s(Sidebar, "qGnL9YSTIRNS2o1TV8Zg7ePWimA=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"]];
});

_c = Sidebar;
Sidebar.propTypes = {
  isSidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setIsSidebarOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _c;

__webpack_require__.$Refresh$.register(_c, "Sidebar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Sidebar/Sidebar.scss":
/*!*********************************************!*\
  !*** ./src/components/Sidebar/Sidebar.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Sidebar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Sidebar/Sidebar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Sidebar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Sidebar/Sidebar.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Sidebar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Sidebar/Sidebar.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/hooks/useLoader.jsx":
/*!*********************************!*\
  !*** ./src/hooks/useLoader.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Loaders_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Loaders/Loader */ "./src/assets/Loaders/Loader.jsx");
/* harmony import */ var _assets_Loaders_loaderDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Loaders/loaderDictionary */ "./src/assets/Loaders/loaderDictionary.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/hooks/useLoader.jsx",
    _s = __webpack_require__.$Refresh$.signature();






const useLoader = image => {
  _s();

  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    src,
    timer
  } = Object(_assets_Loaders_loaderDictionary__WEBPACK_IMPORTED_MODULE_2__["getImage"])(image);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(() => {
      setDisplay(false);
    }, timer);
  }, []);
  return display && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_assets_Loaders_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: src
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 16
  }, undefined);
};

_s(useLoader, "inlhF0BDF6QUvLWIP1vUGrdgahA=");

/* harmony default export */ __webpack_exports__["default"] = (useLoader);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/hooks/useProtectRoute.jsx":
/*!***************************************!*\
  !*** ./src/hooks/useProtectRoute.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _store_localStorage_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/localStorage/provider */ "./src/store/localStorage/provider.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/hooks/useProtectRoute.jsx";





function useProtectRoute() {
  return !Object(_store_localStorage_provider__WEBPACK_IMPORTED_MODULE_2__["getToken"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 20
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (useProtectRoute);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/index.jsx";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/CharacterDetails/CharacterDetails.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/CharacterDetails/CharacterDetails.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/CharacterDetails/CharacterDetails.jsx";
// import React, { useEffect, useState } from 'react';



function CharacterDetails() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
    children: "CharacterDetails"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = CharacterDetails;
/* harmony default export */ __webpack_exports__["default"] = (CharacterDetails);

var _c;

__webpack_require__.$Refresh$.register(_c, "CharacterDetails");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/ComicsDetails/ComicsDetails.jsx":
/*!***************************************************!*\
  !*** ./src/pages/ComicsDetails/ComicsDetails.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/ComicsDetails/ComicsDetails.jsx";
// import React, { useEffect, useState } from 'react';



function ComicsDetails() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
    children: "ComicsDetails"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = ComicsDetails;
/* harmony default export */ __webpack_exports__["default"] = (ComicsDetails);

var _c;

__webpack_require__.$Refresh$.register(_c, "ComicsDetails");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Favorites/Favorites.jsx":
/*!*******************************************!*\
  !*** ./src/pages/Favorites/Favorites.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/Favorites/Favorites.jsx";
// import React, { useEffect, useState } from 'react';



function Favorites() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
    children: "Favorites"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Favorites;
/* harmony default export */ __webpack_exports__["default"] = (Favorites);

var _c;

__webpack_require__.$Refresh$.register(_c, "Favorites");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Login/Login.jsx":
/*!***********************************!*\
  !*** ./src/pages/Login/Login.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _hooks_useLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useLoader */ "./src/hooks/useLoader.jsx");
/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validations */ "./src/utils/validations/index.js");
/* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login.scss */ "./src/pages/Login/Login.scss");
/* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Login_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Input/Input */ "./src/components/Input/Input.jsx");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.jsx");
/* harmony import */ var _services_postLogin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/postLogin */ "./src/services/postLogin.js");
/* harmony import */ var _store_localStorage_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/localStorage/actions */ "./src/store/localStorage/actions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/Login/Login.jsx",
    _s = __webpack_require__.$Refresh$.signature();














function Login() {
  _s();

  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [isDisabled, setIsDisabled] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [isEmailValid, setIsEmailValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [isPasswordValid, setIsPasswordValid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const history = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsDisabled(!(_utils_validations__WEBPACK_IMPORTED_MODULE_4__["validateEmail"].isValid(email) && _utils_validations__WEBPACK_IMPORTED_MODULE_4__["validatePassword"].isValid(password)));
  }, [email, password]);

  const handleButtonClick = async () => {
    const {
      token,
      message
    } = await Object(_services_postLogin__WEBPACK_IMPORTED_MODULE_8__["default"])({
      email,
      password
    });

    if (!token) {
      return react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error(message);
    }

    Object(_store_localStorage_actions__WEBPACK_IMPORTED_MODULE_9__["saveToken"])(token);
    return history.push('/search');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [Object(_hooks_useLoader__WEBPACK_IMPORTED_MODULE_3__["default"])('main1'), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("main", {
      className: "primaryPage loginPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "inputsContainer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "text",
          placeholder: "Your email",
          value: email,
          onChange: setEmail,
          onBlur: Object(_utils_validations__WEBPACK_IMPORTED_MODULE_4__["isInputValid"])(setIsEmailValid, _utils_validations__WEBPACK_IMPORTED_MODULE_4__["validateEmail"].isValid),
          isValid: isEmailValid,
          errorMessage: _utils_validations__WEBPACK_IMPORTED_MODULE_4__["validateEmail"].errorMessage,
          resetValidity: setIsEmailValid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "password",
          placeholder: "Your password",
          value: password,
          onChange: setPassword,
          onBlur: Object(_utils_validations__WEBPACK_IMPORTED_MODULE_4__["isInputValid"])(setIsPasswordValid, _utils_validations__WEBPACK_IMPORTED_MODULE_4__["validatePassword"].isValid),
          isValid: isPasswordValid,
          errorMessage: _utils_validations__WEBPACK_IMPORTED_MODULE_4__["validatePassword"].errorMessage,
          resetValidity: setIsPasswordValid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Button_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Login",
        isDisabled: isDisabled,
        onClick: handleButtonClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Login, "7FuNarWHju7e7CZ1v4kyqPKlmVA=", false, function () {
  return [react_router__WEBPACK_IMPORTED_MODULE_1__["useHistory"], _hooks_useLoader__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

__webpack_require__.$Refresh$.register(_c, "Login");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Login/Login.scss":
/*!************************************!*\
  !*** ./src/pages/Login/Login.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Login.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Login/Login.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Login.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Login/Login.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Login.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Login/Login.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/Profile/Profile.jsx":
/*!***************************************!*\
  !*** ./src/pages/Profile/Profile.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/Profile/Profile.jsx";
// import React, { useEffect, useState } from 'react';



function Profile() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
    children: "Profile"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

__webpack_require__.$Refresh$.register(_c, "Profile");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Register/Register.jsx":
/*!*****************************************!*\
  !*** ./src/pages/Register/Register.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/Register/Register.jsx";
// import React, { useEffect, useState } from 'react';



function Register() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
    children: "Register"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

__webpack_require__.$Refresh$.register(_c, "Register");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Search/Search.jsx":
/*!*************************************!*\
  !*** ./src/pages/Search/Search.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useProtectRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useProtectRoute */ "./src/hooks/useProtectRoute.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/betrybe/Documentos/LeandroParisi/6.Programa\xE7\xE3o/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/pages/Search/Search.jsx",
    _s = __webpack_require__.$Refresh$.signature();

// import React, { useEffect, useState } from 'react';






function Search() {
  _s();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [Object(_hooks_useProtectRoute__WEBPACK_IMPORTED_MODULE_1__["default"])(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      children: "Search"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Search, "OtjF4IpJGsLiSPisdnqIqLngl+A=", false, function () {
  return [_hooks_useProtectRoute__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

__webpack_require__.$Refresh$.register(_c, "Search");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: CharacterDetails, ComicsDetails, Favorites, Login, Profile, Register, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _CharacterDetails_CharacterDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CharacterDetails/CharacterDetails */ "./src/pages/CharacterDetails/CharacterDetails.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterDetails", function() { return _CharacterDetails_CharacterDetails__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ComicsDetails_ComicsDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComicsDetails/ComicsDetails */ "./src/pages/ComicsDetails/ComicsDetails.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComicsDetails", function() { return _ComicsDetails_ComicsDetails__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Favorites_Favorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Favorites/Favorites */ "./src/pages/Favorites/Favorites.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Favorites", function() { return _Favorites_Favorites__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login/Login */ "./src/pages/Login/Login.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _Login_Login__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Profile_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Profile/Profile */ "./src/pages/Profile/Profile.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _Profile_Profile__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Register_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Register/Register */ "./src/pages/Register/Register.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return _Register_Register__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search/Search */ "./src/pages/Search/Search.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search_Search__WEBPACK_IMPORTED_MODULE_6__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);









const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(({
      getCLS,
      getFID,
      getFCP,
      getLCP,
      getTTFB
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/services/config.js":
/*!********************************!*\
  !*** ./src/services/config.js ***!
  \********************************/
/*! exports provided: endpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoints", function() { return endpoints; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();

const url = Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).BACKEND_SERVER || 'http://localhost:3001';
const endpoints = {
  login: '/users/login'
};
/* harmony default export */ __webpack_exports__["default"] = (url);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/services/postLogin.js":
/*!***********************************!*\
  !*** ./src/services/postLogin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/services/config.js");
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to */ "./src/services/to.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);




const postLogin = async body => {
  const loginUrl = `${_config__WEBPACK_IMPORTED_MODULE_0__["default"]}${_config__WEBPACK_IMPORTED_MODULE_0__["endpoints"].login}`;
  const response = await Object(_to__WEBPACK_IMPORTED_MODULE_1__["default"])('POST', loginUrl, body);
  return response;
};

/* harmony default export */ __webpack_exports__["default"] = (postLogin);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/services/to.js":
/*!****************************!*\
  !*** ./src/services/to.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/* eslint-disable max-len */
const axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/**
 * Default fetcher for entire application
 * @param {string} method HTTP method to be used on request
 * @param {string} url Complet URL for the request: server + endpoint
 * @param {object} body Request body
 * @param {object} headers Request headers
 * @returns Object { ...responsePayload } Any relevant information returned by the API. It will always include a key message (even on errors)
 */


const to = async (method, url, body, headers) => {
  const options = {
    method,
    headers: headers && { ...headers
    },
    url,
    data: body
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return {
      message: error.response.data.message
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (to);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/localStorage/actions.js":
/*!*******************************************!*\
  !*** ./src/store/localStorage/actions.js ***!
  \*******************************************/
/*! exports provided: saveToken, anotherFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToken", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anotherFunction", function() { return anotherFunction; });
/* harmony import */ var _keysLibray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keysLibray */ "./src/store/localStorage/keysLibray.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const saveToken = token => {
  localStorage.setItem(_keysLibray__WEBPACK_IMPORTED_MODULE_0__["default"].token, token);
};

const anotherFunction = () => null;



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/localStorage/keysLibray.js":
/*!**********************************************!*\
  !*** ./src/store/localStorage/keysLibray.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const keysLibrary = {
  token: 'Marvelous_app_token'
};
/* harmony default export */ __webpack_exports__["default"] = (keysLibrary);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/store/localStorage/provider.js":
/*!********************************************!*\
  !*** ./src/store/localStorage/provider.js ***!
  \********************************************/
/*! exports provided: getToken, anotherFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anotherFunction", function() { return anotherFunction; });
/* harmony import */ var _keysLibray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keysLibray */ "./src/store/localStorage/keysLibray.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



const getToken = () => {
  const token = localStorage.getItem(_keysLibray__WEBPACK_IMPORTED_MODULE_0__["default"].token);
  return token;
};

const anotherFunction = () => null;



const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/validations/index.js":
/*!****************************************!*\
  !*** ./src/utils/validations/index.js ***!
  \****************************************/
/*! exports provided: validateEmail, validatePassword, isInputValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateEmail */ "./src/utils/validations/validateEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return _validateEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _validatePassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validatePassword */ "./src/utils/validations/validatePassword.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return _validatePassword__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isInputValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isInputValid */ "./src/utils/validations/isInputValid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputValid", function() { return _isInputValid__WEBPACK_IMPORTED_MODULE_2__["default"]; });

__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/validations/isInputValid.js":
/*!***********************************************!*\
  !*** ./src/utils/validations/isInputValid.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const isInputValid = (toggleInput, validation) => value => toggleInput(validation(value));

/* harmony default export */ __webpack_exports__["default"] = (isInputValid);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/validations/validateEmail.js":
/*!************************************************!*\
  !*** ./src/utils/validations/validateEmail.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const validateEmail = {
  errorMessage: 'Invalid email, it should not begin with a number',
  isValid: email => {
    const passwordRegex = /^[a-z][a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]{0,2})?$/;
    return passwordRegex.test(email.toLowerCase());
  }
};
/* harmony default export */ __webpack_exports__["default"] = (validateEmail);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils/validations/validatePassword.js":
/*!***************************************************!*\
  !*** ./src/utils/validations/validatePassword.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const validatePassword = {
  errorMessage: `Password must containt minimun eight characters, 
  at least one letter and one number`,
  isValid: password => {
    const passwordRegex = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/;
    return passwordRegex.test(password);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (validatePassword);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.jsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/betrybe/Documentos/LeandroParisi/6.Programação/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/betrybe/Documentos/LeandroParisi/6.Programação/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/betrybe/Documentos/LeandroParisi/6.Programação/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/betrybe/Documentos/LeandroParisi/6.Programação/1_Portfolio/2.Jobs/2021.04.09_Entrevista_Stone/caseStone_MarvelousApp_Front/app/src/index.jsx */"./src/index.jsx");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map