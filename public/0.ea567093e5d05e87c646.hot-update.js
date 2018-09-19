webpackHotUpdate(0,{

/***/ "./app/js/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./app/js/index.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (_react, _reactDom, _index) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  //  artificially create container
  var root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(1), __webpack_require__(4), __webpack_require__(0), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ko, $, pubsub, ccConstants, navigation) {

    var dependencies = { ko: ko, $: $, pubsub: pubsub, ccConstants: ccConstants, navigation: navigation };

    return {
      onLoad: function onLoad(widget) {
        console.log(widget, pubsub, ccConstants, navigation);
        console.log(ko.toJS(widget));
        _reactDom2.default.render(_react2.default.createElement(_index2.default, _extends({ pageName: 'TEST' }, dependencies)), document.getElementById('main'));
        $.Topic('PAGE_CHANGED', function (pageContext) {
          console.log(pageContext);
        });
      }
    };
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})