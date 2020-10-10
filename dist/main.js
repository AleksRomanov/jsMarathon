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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemons.js */ \"./src/pokemons.js\");\n/* harmony import */ var _pokemon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pokemon.js */ \"./src/pokemon.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Game = function Game() {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Game);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"generateRandomPokemon\", function () {\n    return _pokemons_js__WEBPACK_IMPORTED_MODULE_2__[\"pokemons\"][Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_pokemons_js__WEBPACK_IMPORTED_MODULE_2__[\"pokemons\"].length - 1)];\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"createConsole\", function () {\n    var consoleBlock = document.createElement('div');\n    var playGround = document.querySelector('html');\n    playGround.appendChild(consoleBlock).setAttribute('id', 'logs');\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderActionLimits\", function (button, action, counter) {\n    button.innerText = \"\".concat(action.name, \" (\").concat(action.maxCount - counter, \")\");\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"makeActionLog\", function (counter, action) {\n    var consoleBar = document.getElementById('logs');\n    var consoleLog = document.createElement('p');\n\n    if (counter < action.maxCount) {\n      consoleLog.innerText = \"\\u041A\\u043E\\u043B\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u0435\\u043D\\u0438\\u0439 \\u043D\\u0430\\u0432\\u044B\\u043A\\u0430 \\\"\".concat(action.name, \"\\\" : \").concat(counter, \". \\u041E\\u0441\\u0442\\u0430\\u043B\\u043E\\u0441\\u044C: \").concat(action.maxCount - counter);\n      consoleBar.insertBefore(consoleLog, consoleBar.children[0]);\n    } else {\n      consoleLog.innerText = \"\\u0411\\u043E\\u043B\\u044C\\u0448\\u0435 \\u043D\\u0435\\u043B\\u044C\\u0437\\u044F \\u043F\\u0440\\u0438\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u044D\\u0442\\u043E\\u0442 \\u043D\\u0430\\u0432\\u044B\\u043A\";\n      consoleBar.insertBefore(consoleLog, consoleBar.children[0]);\n    }\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderHP\", function (player) {\n    _this.renderHPLabel(player);\n\n    _this.renderHPBar(player);\n\n    _this.setHPStatus(player);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderHPLabel\", function (player) {\n    player.elHPLabel.innerText = player.hp.current + '/' + player.hp.total;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderHPBar\", function (player) {\n    player.elHPBar.style.width = player.hp.current * 100 / player.hp.total + '%';\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"setHPStatus\", function (player) {\n    if (player.hp.current <= 60 && player.hp.current >= 20) {\n      player.elHPBar.classList.add('low');\n    } else if (player.hp.current < 20) {\n      player.elHPBar.classList.add('critical');\n    } else {\n      player.elHPBar.classList.remove('critical');\n      player.elHPBar.classList.remove('low');\n    }\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"makeAction\", function (action, button, action2) {\n    var actionCounter = 0;\n    var This = _this;\n\n    _this.renderActionLimits(button, action, actionCounter);\n\n    return function () {\n      if (actionCounter < action.maxCount) {\n        ++actionCounter;\n        This.getDamage(This.player2, Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(action.damageMultiplier));\n        This.getDamage(This.player1, Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(action2.damageMultiplier));\n        This.makeActionLog(actionCounter, action);\n        This.renderActionLimits(button, action, actionCounter);\n      } else {\n        button.disabled = true;\n        This.makeActionLog(actionCounter, action);\n      }\n    };\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"getDamage\", function (player, count) {\n    var damageCount = Math.ceil(player.hp.total / 100 * count);\n\n    if (count > player.hp.current * 100 / player.hp.total) {\n      _this.disableALlActions();\n\n      if (player.selectors === _this.player1.selectors) {\n        alert(\"\\u0412\\u044B \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438! \\u041D\\u0430\\u0447\\u043D\\u0451\\u0442\\u0435 \\u0441\\u043D\\u043E\\u0432\\u0430?\");\n\n        _this.startGame();\n      } else {\n        _this.player2.hp.total = 0;\n        alert(\"\\u0412\\u044B \\u0432\\u044B\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438! \\u041F\\u0440\\u043E\\u0434\\u043E\\u043B\\u0436\\u0438\\u0442\\u0435 \\u0431\\u043E\\u0439?\");\n\n        _this.changeEnemy();\n      }\n    } else {\n      if (player.selectors === _this.player1.selectors) {\n        _this.makeHItLog(_this.player1, _this.player2, damageCount);\n      } else {\n        _this.makeHItLog(_this.player2, _this.player1, damageCount);\n      }\n\n      player.hp.current -= damageCount;\n\n      _this.renderHP(player);\n    }\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"setupHitButtons\", function (attacks1, attacks2) {\n    var controlBar = document.querySelector('.control');\n    attacks1.forEach(function (attack) {\n      var buttonElement = document.createElement('button');\n      buttonElement.classList.add('button');\n      buttonElement.innerText = attack.name;\n\n      var strikeOut = _this.makeAction(attack, buttonElement, attacks2);\n\n      buttonElement.addEventListener('click', function () {\n        console.log('click');\n        strikeOut();\n      });\n      controlBar.appendChild(buttonElement);\n    });\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"generateHitLog\", function (firstPerson, secondPerson, damage) {\n    var logs = [\"\".concat(firstPerson.name, \" \\u0432\\u0441\\u043F\\u043E\\u043C\\u043D\\u0438\\u043B \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0432\\u0430\\u0436\\u043D\\u043E\\u0435, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(secondPerson.name, \", \\u043D\\u0435 \\u043F\\u043E\\u043C\\u043D\\u044F \\u0441\\u0435\\u0431\\u044F \\u043E\\u0442 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0430, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043F\\u0440\\u0435\\u0434\\u043F\\u043B\\u0435\\u0447\\u044C\\u0435 \\u0432\\u0440\\u0430\\u0433\\u0430. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0437\\u0430 \\u044D\\u0442\\u043E \").concat(secondPerson.name, \" \\u0441 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0443 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0438\\u043B \\u043F\\u0440\\u044F\\u043C\\u043E\\u0439 \\u0443\\u0434\\u0430\\u0440 \\u043A\\u043E\\u043B\\u0435\\u043D\\u043E\\u043C \\u0432 \\u043B\\u043E\\u0431 \\u0432\\u0440\\u0430\\u0433\\u0430. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u0437\\u0430\\u0431\\u044B\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 \").concat(secondPerson.name, \", \\u043F\\u0440\\u0438\\u043D\\u044F\\u0432 \\u0432\\u043E\\u043B\\u0435\\u0432\\u043E\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u0435, \\u043D\\u0435\\u0441\\u043B\\u044B\\u0448\\u043D\\u043E \\u043F\\u043E\\u0434\\u043E\\u0439\\u0434\\u044F \\u0441\\u0437\\u0430\\u0434\\u0438, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u043F\\u0440\\u0438\\u0448\\u0435\\u043B \\u0432 \\u0441\\u0435\\u0431\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(secondPerson.name, \" \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u043D\\u0430\\u043D\\u0435\\u0441 \\u043C\\u043E\\u0449\\u043D\\u0435\\u0439\\u0448\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \").concat(secondPerson.name, \" \\u043D\\u0435\\u0445\\u043E\\u0442\\u044F \\u0440\\u0430\\u0437\\u0434\\u0440\\u043E\\u0431\\u0438\\u043B \\u043A\\u0443\\u043B\\u0430\\u043A\\u043E\\u043C <\\u0432\\u044B\\u0440\\u0435\\u0437\\u0430\\u043D\\u043D\\u043E \\u0446\\u0435\\u043D\\u0437\\u0443\\u0440\\u043E\\u0439> \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u0443\\u0434\\u0438\\u0432\\u0438\\u043B\\u0441\\u044F, \\u0430 \").concat(secondPerson.name, \" \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u0432\\u0448\\u0438\\u0441\\u044C \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u043F\\u043E\\u0434\\u043B\\u044B\\u0439 \\u0443\\u0434\\u0430\\u0440. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u0432\\u044B\\u0441\\u043C\\u043E\\u0440\\u043A\\u0430\\u043B\\u0441\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(secondPerson.name, \" \\u043F\\u0440\\u043E\\u0432\\u0435\\u043B \\u0434\\u0440\\u043E\\u0431\\u044F\\u0449\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0432\\u043D\\u0435\\u0437\\u0430\\u043F\\u043D\\u043E \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 \").concat(secondPerson.name, \" \\u0431\\u0435\\u0441\\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u043D\\u043E \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043D\\u043E\\u0433\\u0443 \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430 -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u0440\\u0430\\u0441\\u0441\\u0442\\u0440\\u043E\\u0438\\u043B\\u0441\\u044F, \\u043A\\u0430\\u043A \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(secondPerson.name, \" \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u0441\\u0442\\u043E\\u043F\\u043E\\u0439 \\u0432 \\u0436\\u0438\\u0432\\u043E\\u0442 \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0430. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\"), \"\".concat(firstPerson.name, \" \\u043F\\u044B\\u0442\\u0430\\u043B\\u0441\\u044F \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0441\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C, \\u043D\\u043E \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \").concat(secondPerson.name, \" \\u0441\\u043E \\u0441\\u043A\\u0443\\u043A\\u0438, \\u0440\\u0430\\u0437\\u0431\\u0438\\u043B \\u0431\\u0440\\u043E\\u0432\\u044C \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0443. -\").concat(damage, \", [\").concat(firstPerson.hp.current, \"/\").concat(firstPerson.hp.total, \"]\")];\n    return logs[Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(logs.length - 1)];\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"makeHItLog\", function (target, person, damage) {\n    var consoleBar = document.getElementById('logs');\n    var consoleLog = document.createElement('p');\n    consoleLog.innerText = _this.generateHitLog(target, person, damage);\n    consoleBar.insertBefore(consoleLog, consoleBar.children[0]);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"disableALlActions\", function () {\n    var actions = document.querySelector('.control').querySelectorAll('button');\n    actions.forEach(function (action) {\n      action.remove();\n    });\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderNames\", function (player, enemy) {\n    var playerName = document.querySelector('#name-player1');\n    var enemyName = document.querySelector('#name-player2');\n    playerName.innerText = player.name;\n    enemyName.innerText = enemy.name;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"renderAvatars\", function (player, enemy) {\n    var playerImage = document.querySelector('.player1').querySelector('img');\n    var enemyImage = document.querySelector('.player2').querySelector('img');\n    playerImage.src = player.img;\n    enemyImage.src = enemy.img;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addCharacter\", function () {\n    var character = _this.generateRandomPokemon();\n\n    _this.player1 = new _pokemon_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_objectSpread(_objectSpread({}, character), {}, {\n      selectors: 'player1'\n    }));\n    _this.attacks1 = _this.player1.attacks;\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"addEnemy\", function () {\n    var enemy = _this.generateRandomPokemon();\n\n    _this.player2 = new _pokemon_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_objectSpread(_objectSpread({}, enemy), {}, {\n      selectors: 'player2'\n    }));\n    _this.attacks2 = _this.player2.attacks[0];\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"startGame\", function () {\n    _this.addEnemy();\n\n    _this.addCharacter();\n\n    _this.createConsole();\n\n    _this.resetGame();\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"resetGame\", function () {\n    _this.setupHitButtons(_this.attacks1, _this.attacks2);\n\n    _this.renderNames(_this.player1, _this.player2);\n\n    _this.renderHP(_this.player1);\n\n    _this.renderHP(_this.player2);\n\n    _this.renderAvatars(_this.player1, _this.player2);\n  });\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, \"changeEnemy\", function () {\n    _this.addEnemy();\n\n    _this.resetGame();\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nvar newGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\nnewGame.startGame();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nvar Selectors = function Selectors(name) {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Selectors);\n\n  this.elHPLabel = document.getElementById(\"health-\".concat(name));\n  this.elHPBar = document.getElementById(\"progressbar-\".concat(name));\n};\n\nvar Pokemon = /*#__PURE__*/function (_Selectors) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0___default()(Pokemon, _Selectors);\n\n  var _super = _createSuper(Pokemon);\n\n  function Pokemon(_ref) {\n    var _this;\n\n    var name = _ref.name,\n        hp = _ref.hp,\n        selectors = _ref.selectors,\n        attacks = _ref.attacks,\n        _ref$img = _ref.img,\n        img = _ref$img === void 0 ? [] : _ref$img;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Pokemon);\n\n    _this = _super.call(this, selectors);\n    _this.name = name;\n    _this.img = img;\n    _this.selectors = selectors;\n    _this.hp = {\n      current: hp,\n      total: hp\n    };\n    _this.attacks = attacks;\n    return _this;\n  }\n\n  return Pokemon;\n}(Selectors);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ }),

/***/ "./src/pokemons.js":
/*!*************************!*\
  !*** ./src/pokemons.js ***!
  \*************************/
/*! exports provided: pokemons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pokemons\", function() { return pokemons; });\nvar pokemons = [{\n  name: 'Pikachu',\n  type: 'electric',\n  hp: 274,\n  img: 'http://sify4321.000webhostapp.com/pikachu.png',\n  attacks: [{\n    name: \"thunder jolt\",\n    maxCount: 100,\n    damageMultiplier: 20\n  }, {\n    name: \"electro ball\",\n    maxCount: 6,\n    damageMultiplier: 40\n  }, {\n    name: \"volt tackle\",\n    maxCount: 4,\n    damageMultiplier: 50\n  }, {\n    name: \"thunder crack\",\n    maxCount: 2,\n    damageMultiplier: 60\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/charmander.png',\n  name: 'Charmander',\n  type: 'fire',\n  hp: 282,\n  attacks: [{\n    name: \"ember\",\n    maxCount: 100,\n    damageMultiplier: 20\n  }, {\n    name: \"flamethrower\",\n    maxCount: 6,\n    damageMultiplier: 40\n  }, {\n    name: \"burning tail\",\n    maxCount: 4,\n    damageMultiplier: 50\n  }, {\n    name: \"fire spin\",\n    maxCount: 2,\n    damageMultiplier: 60\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/bulbasaur.png',\n  name: 'Bulbasaur',\n  type: 'fire',\n  hp: 294,\n  attacks: [{\n    name: \"tackle\",\n    maxCount: 100,\n    damageMultiplier: 20\n  }, {\n    name: \"vine whip\",\n    maxCount: 6,\n    damageMultiplier: 40\n  }, {\n    name: \"razor leaf\",\n    maxCount: 4,\n    damageMultiplier: 50\n  }, {\n    name: \"solar beam\",\n    maxCount: 2,\n    damageMultiplier: 60\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/squirtle.png',\n  name: 'Squirtle',\n  type: 'water',\n  hp: 292,\n  attacks: [{\n    name: \"bubble\",\n    maxCount: 100,\n    damageMultiplier: 20\n  }, {\n    name: \"water gun\",\n    maxCount: 6,\n    damageMultiplier: 40\n  }, {\n    name: \"shell attack\",\n    maxCount: 4,\n    damageMultiplier: 50\n  }, {\n    name: \"hydro pump\",\n    maxCount: 2,\n    damageMultiplier: 60\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/pidgey.png',\n  name: 'Pidgey',\n  type: 'air',\n  hp: 284,\n  attacks: [{\n    name: \"Air Slash\",\n    maxCount: 100,\n    damageMultiplier: 20\n  }, {\n    name: \"Razor Wind\",\n    maxCount: 6,\n    damageMultiplier: 40\n  }, {\n    name: \"Heat Wave\",\n    maxCount: 4,\n    damageMultiplier: 50\n  }, {\n    name: \"Sky Attack\",\n    maxCount: 2,\n    damageMultiplier: 60\n  }]\n}, {\n  img: 'http://sify4321.000webhostapp.com/mew.png',\n  name: 'Mew',\n  type: 'air',\n  hp: 404,\n  attacks: [{\n    name: \"Pound\",\n    maxCount: 100,\n    damageMultiplier: 20\n  }, {\n    name: \"Ancient Power\",\n    maxCount: 6,\n    damageMultiplier: 40\n  }, {\n    name: \"Aura Sphere\",\n    maxCount: 4,\n    damageMultiplier: 50\n  }, {\n    name: \"Psychic\",\n    maxCount: 2,\n    damageMultiplier: 60\n  }]\n}];\n\n//# sourceURL=webpack:///./src/pokemons.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// random = (num) => Math.ceil(Math.random() * num)\n// function random (num)  {Math.ceil(Math.random() * num)};\nfunction random(num) {\n  return Math.ceil(Math.random() * num);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (random);\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });