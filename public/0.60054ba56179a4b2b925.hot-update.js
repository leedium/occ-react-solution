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

  // import Components from './components/Components';

  function Index(props) {
    // const OCCLink = Components.OCCLink('cart','Hello',props.occProps.navigation);
    return _react2.default.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dltest', component: _DLTest2.default })
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

/***/ }),

/***/ "./app/js/pages/DLTest.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./app/js/components/Components.jsx"), __webpack_require__("./app/js/components/OCCComponent.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _Components, _OCCComponent2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Components2 = _interopRequireDefault(_Components);

  var _OCCComponent3 = _interopRequireDefault(_OCCComponent2);

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DLTest = function (_OCCComponent) {
    _inherits(DLTest, _OCCComponent);

    function DLTest(props, context) {
      _classCallCheck(this, DLTest);

      var _this = _possibleConstructorReturn(this, (DLTest.__proto__ || Object.getPrototypeOf(DLTest)).call(this, props, context));

      console.log(props);
      return _this;
    }

    _createClass(DLTest, [{
      key: 'render',
      value: function render() {
        var OCCLink = _Components2.default.OCCLink('/', 'Hello', this.props.occProps.navigation);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            'DLTest'
          ),
          _react2.default.createElement(OCCLink, null)
        );
      }
    }]);

    return DLTest;
  }(_OCCComponent3.default);

  exports.default = DLTest;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})