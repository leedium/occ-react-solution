webpackHotUpdate(0,{

/***/ "./app/js/pages/Home.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./app/js/components/OCCLink/OCCLink.jsx"), __webpack_require__("./app/js/components/OCCComponent.jsx"), __webpack_require__("./app/js/components/Components.jsx")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _OCCLink, _OCCComponent2, _Components) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _OCCLink2 = _interopRequireDefault(_OCCLink);

  var _OCCComponent3 = _interopRequireDefault(_OCCComponent2);

  var _Components2 = _interopRequireDefault(_Components);

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

  var Home = function (_OCCComponent) {
    _inherits(Home, _OCCComponent);

    function Home(props) {
      _classCallCheck(this, Home);

      var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

      _this.test = "test";
      return _this;
    }

    _createClass(Home, [{
      key: "render",
      value: function render() {
        var OCCLink = _Components2.default.OCCLink('dltest', 'DLTest', this.props.occProps.navigation);

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            "Home"
          ),
          _react2.default.createElement(OCCLink, null)
        );
      }
    }]);

    return Home;
  }(_OCCComponent3.default);

  exports.default = Home;
  module.exports = exports["default"];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})