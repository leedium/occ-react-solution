define(['knockout', 'jquery', 'react', 'react-dom', 'dummywidget'], function (_knockout, _jquery, _react, _reactDom, _dummywidget) {
  'use strict';

  var _knockout2 = _interopRequireDefault(_knockout);

  var _jquery2 = _interopRequireDefault(_jquery);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _dummywidget2 = _interopRequireDefault(_dummywidget);

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

  var Main = function () {
    function Main() {
      _classCallCheck(this, Main);
    }

    Main.prototype.beforeAppear = function beforeAppear() {
      var self = this;
      _reactDom2.default.render(React.createElement(_dummywidget2.default, { model: self }), document.getElementById('dummywidget'));
    };

    return Main;
  }();
});