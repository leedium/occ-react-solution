webpackHotUpdate(0,{

/***/ "./app/js/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/prop-types/index.js"), __webpack_require__("./node_modules/react-router-dom/es/index.js"), __webpack_require__("./app/js/pages/Home.jsx"), __webpack_require__("./app/js/pages/DLTest.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _propTypes, _reactRouterDom, _Home, _DLTest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Home2 = _interopRequireDefault(_Home);

  var _DLTest2 = _interopRequireDefault(_DLTest);

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

  // import Components from './components/Components';

  function Index(props) {
    // const OCCLink = Components.OCCLink('cart','Hello',props.occProps.navigation);
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      { forceRefresh: trrue },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component(p) {
            return _react2.default.createElement(_Home2.default, _extends({}, p, { occProps: props.occProps }));
          } }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dltest', component: function component(p) {
            return _react2.default.createElement(_DLTest2.default, _extends({}, p, { occProps: props.occProps }));
          } })
      )
    );
  }
  Index.propTypes = {
    occProps: _propTypes2.default.any.isRequired
  };

  exports.default = Index;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})