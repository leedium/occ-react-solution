define(['module', 'exports', 'react', 'react-dom', 'prop-types', 'knockout'], function (module, exports, _react, _reactDom, _propTypes, _knockout) {
  'use strict';

  exports.__esModule = true;

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _knockout2 = _interopRequireDefault(_knockout);

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

  var Dummywidget = function (_Component) {
    _inherits(Dummywidget, _Component);

    function Dummywidget() {
      _classCallCheck(this, Dummywidget);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Dummywidget.prototype.render = function render() {
      console.log(this.props);
      return _react2.default.createElement(
        'div',
        null,
        'hello world now'
      );
    };

    return Dummywidget;
  }(_react.Component);

  Dummywidget.propTypes = {
    model: _propTypes2.default.shape
  };

  exports.default = Dummywidget;
  module.exports = exports['default'];
});