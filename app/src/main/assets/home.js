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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 435);
/******/ })
/************************************************************************/
/******/ ({

/***/ 247:
/***/ (function(module, exports) {

module.exports = {
  "company-item": {
    "flexDirection": "row",
    "position": "absolute",
    "bottom": 0,
    "width": 750
  },
  "company-title": {
    "flex": 1,
    "color": "#2F4056",
    "textAlign": "center",
    "fontSize": 25,
    "marginBottom": 15
  },
  "label-text": {
    "color": "#0F0F0D",
    "fontSize": 35,
    "textAlign": "left",
    "textOverflow": "ellipsis",
    "lineHeight": 35
  },
  "body": {
    "flexDirection": "column",
    "alignItems": "center",
    "backgroundColor": "#f5f5f9"
  },
  "list": {
    "paddingLeft": 30,
    "paddingRight": 30
  },
  "list-div": {
    "borderBottomStyle": "solid",
    "borderBottomColor": "#c0c0c0",
    "borderBottomWidth": 1,
    "height": 110,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "padding": 20
  },
  "list-text": {
    "fontSize": 25,
    "lineHeight": 70
  }
}

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = {
  "type": "container",
  "children": [
    {
      "type": "scroller",
      "classList": [
        "body"
      ],
      "children": [
        {
          "type": "div",
          "classList": [
            "list"
          ],
          "repeat": {
            "expression": function () {return this.items},
            "value": "item"
          },
          "attr": {
            "index": function () {return this.$index}
          },
          "events": {
            "click": "setting"
          },
          "children": [
            {
              "type": "div",
              "classList": [
                "list-div"
              ],
              "children": [
                {
                  "type": "text",
                  "classList": [
                    "label-text",
                    "list-text"
                  ],
                  "attr": {
                    "value": function () {return this.item.text}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": "assets/images/weixin.jpg"
          },
          "classList": [
            "img"
          ],
          "style": {
            "width": 600,
            "height": 600,
            "marginTop": 50
          }
        },
        {
          "type": "div",
          "classList": [
            "company-item"
          ],
          "children": [
            {
              "type": "text",
              "classList": [
                "company-title"
              ],
              "attr": {
                "value": "Copyright©小航博客"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = function(module, exports, __weex_require__){'use strict';

var navigator = __weex_require__('@weex-module/navigator');
var globalEvent = __weex_require__('@weex-module/globalEvent');
module.exports = {
    data: function () {return {
        items: [{ text: "贴表情设置", method: function method() {
                var params = { 'url': "assets://setting.js", 'animated': 'true' };
                navigator.push(params, function () {});
            } }, { text: "贴表情模板", method: function method() {
                var params = { 'url': "assets://templatelist.js", 'animated': 'true' };
                navigator.push(params, function () {});
            } }, { text: "检查更新", method: function method() {
                __weex_require__('@weex-module/configModule').update();
            } }, { text: "关于", method: function method() {
                var params = { 'url': "assets://my.js", 'animated': 'true' };
                navigator.push(params, function () {});
            } }]
    }},
    methods: {
        setting: function setting(e) {
            var index = e.target.attr.index;
            var item = this.items[index];
            item.method();
        }
    },
    created: function created() {
        globalEvent.addEventListener('androidback', function (e) {
            navigator.pop({ 'animated': 'true' }, function () {});
        });
    }
};}
/* generated by weex-loader */


/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

var __weex_template__ = __webpack_require__(298)
var __weex_style__ = __webpack_require__(247)
var __weex_script__ = __webpack_require__(350)

__weex_define__('@weex-component/a99677454f478e5e506e83b235e4bf89', [], function(__weex_require__, __weex_exports__, __weex_module__) {

    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
    if (__weex_exports__.__esModule && __weex_exports__.default) {
      __weex_module__.exports = __weex_exports__.default
    }

    __weex_module__.exports.template = __weex_template__

    __weex_module__.exports.style = __weex_style__

})

__weex_bootstrap__('@weex-component/a99677454f478e5e506e83b235e4bf89',undefined,undefined)

/***/ })

/******/ });