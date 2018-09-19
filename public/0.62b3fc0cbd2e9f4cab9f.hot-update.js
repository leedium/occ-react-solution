webpackHotUpdate(0,{

/***/ "./app/js/components/OCCLink/OccLink.jsx":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js"), __webpack_require__("./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (module, exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  function OCCLink(occProps) {
    console.log(occProps);

    var Link = function (_Component) {
      _inherits(Link, _Component);

      function Link() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Link);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
          e.preventDefault();
          console.log(_this.props.link, e);
          occProps.navigation.goTo(_this.props.link);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _createClass(Link, [{
        key: 'render',
        value: function render() {
          var element = !this.props.internal ? _react2.default.createElement(
            'a',
            { href: this.props.link },
            'BBE',
            this.props.label
          ) : _react2.default.createElement(
            'a',
            { href: this.props.link, onClick: this.handleClick },
            'HELLO',
            this.props.label
          );
          return element;
        }
      }]);

      return Link;
    }(_react.Component);

    Link.defaultProps = {
      internal: false,
      link: '',
      label: ''
    };

    Link.propTypes = {
      internal: _propTypes2.default.bool,
      link: _propTypes2.default.string,
      label: _propTypes2.default.string
    };

    return Link;
  }

  exports.default = OCCLink;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})