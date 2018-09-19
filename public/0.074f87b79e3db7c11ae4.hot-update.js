webpackHotUpdate(0,{

/***/ "./app/js/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/react-router-dom/es/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _reactRouterDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // import {Provider} from 'react-redux';


  var Index = function Index(props) {
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/cart' },
        console.log(props.pageName)
      )
    );
  };
  // import PropTypes from 'prop-types';


  Index.propTypes = {
    Index: Index
  };

  exports.default = Index;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})