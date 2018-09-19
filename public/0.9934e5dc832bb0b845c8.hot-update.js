webpackHotUpdate(0,{

/***/ "./app/js/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/prop-types/index.js"), __webpack_require__("./node_modules/react-router-dom/es/index.js"), __webpack_require__("./app/js/components/OCCify.jsx"), __webpack_require__("./app/js/components/ComponentsFactory.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _propTypes, _reactRouterDom, _OCCify, _ComponentsFactory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _OCCify2 = _interopRequireDefault(_OCCify);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function Index(props) {
    props = {
      occProps: _propTypes2.default.shape
    };
    var OCCLink = (0, _OCCify2.default)(_ComponentsFactory.ComponentKeys.OCCLink, props.occProps);
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(OCCLink, { link: 'cart', label: 'Hello' })
    );
  }

  exports.default = Index;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})