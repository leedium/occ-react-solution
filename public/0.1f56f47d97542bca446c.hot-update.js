webpackHotUpdate(0,{

/***/ "./app/js/components/ComponentsFactory.js":
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
        var el = ComponentKeys[key];
        return _react2.default.createElement('el', null);
      }
    }]);

    return ComponentsFactory;
  }();

  exports.default = ComponentsFactory;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})