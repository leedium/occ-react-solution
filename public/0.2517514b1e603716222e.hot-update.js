webpackHotUpdate(0,{

/***/ "./app/js/components/ComponentsFactory.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./app/js/components/OCCLink/OccLink.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (exports, _react, _OccLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ComponentKeys = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _OccLink2 = _interopRequireDefault(_OccLink);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var ComponentKeys = exports.ComponentKeys = {
    'OCCLink': _OccLink2.default
  };

  var ComponentsFactory = function () {
    function ComponentsFactory() {
      _classCallCheck(this, ComponentsFactory);
    }

    _createClass(ComponentsFactory, null, [{
      key: 'create',
      value: function create(key) {
        var Element = ComponentKeys[key];
        return _react2.default.createElement(Element, null);
      }
    }]);

    return ComponentsFactory;
  }();

  exports.default = ComponentsFactory;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./app/js/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/react-router-dom/es/index.js"), __webpack_require__("./app/js/components/ComponentsFactory.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _reactRouterDom, _ComponentsFactory) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _ComponentsFactory2 = _interopRequireDefault(_ComponentsFactory);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Index = function Index() {
    var OCCLink = _ComponentsFactory2.default.create(_ComponentsFactory.ComponentKeys.OCCLink);
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(OCCLink, { link: 'cart', onClick: '', label: 'Hello' })
    );
  };

  Index.defaultProps = {
    pageName: ''
  };

  exports.default = Index;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})