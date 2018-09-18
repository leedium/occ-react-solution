define(['module', 'exports', 'react'], function (module, exports, _react) {
  'use strict';

  exports.__esModule = true;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // import ReactDOM from 'react-dom';
  // import PropTypes from 'prop-types';

  // import ko from 'knockout';

  function Dummywidget() {
    return _react2.default.createElement(
      'div',
      null,
      'hello world now'
    );
  }

  // Dummywidget.propTypes = {
  //   model: PropTypes.shape
  // };

  exports.default = Dummywidget();
  module.exports = exports['default'];
});