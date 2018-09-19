define([], function () {
  'use strict';

  define(['knockout', 'jquery', 'react', 'react-dom', 'js/$APP_ID'], function (ko, jquery, React, ReactDOM, ReactRedux, App) {
    return {
      beforeAppear: function beforeAppear() {
        var self = this;
        ReactDOM.render(React.createElement(App, {
          model: self
        }), document.getElementById('$APP_ID'));
      }
    };
  });
});