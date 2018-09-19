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

  var OCCLink = function (_Component) {
    _inherits(OCCLink, _Component);

    function OCCLink(props) {
      _classCallCheck(this, OCCLink);

      return _possibleConstructorReturn(this, (OCCLink.__proto__ || Object.getPrototypeOf(OCCLink)).call(this, props));
    }

    _createClass(OCCLink, [{
      key: 'handleClick',
      value: function handleClick(e) {
        console.log(e);
      }
    }, {
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

    return OCCLink;
  }(_react.Component);

  OCCLink.defaultProps = {
    internal: false,
    link: '',
    label: ''
  };

  OCCLink.propTypes = {
    internal: _propTypes2.default.bool,
    link: _propTypes2.default.string,
    label: _propTypes2.default.string
  };

  exports.default = OCCLink;
  module.exports = exports['default'];
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

})