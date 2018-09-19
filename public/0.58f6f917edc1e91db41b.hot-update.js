webpackHotUpdate(0,{

/***/ "./app/js/App.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/react/react.js"), __webpack_require__("./node_modules/react-dom/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (_react, _reactDom) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //  artificially create container
  /* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

  var root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = function (ko, $) {
    return {
      onLoad: function onLoad(widget) {
        console.log(widget);
        _reactDom2.default.render(_react2.default.createElement(
          'div',
          null,
          'HELLO'
        ), document.getElementById('main'));
      }
    };
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})