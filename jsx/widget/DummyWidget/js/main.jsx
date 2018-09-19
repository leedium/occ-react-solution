import ko from 'knockout';
import $ from 'jquery';
import react from 'react';
import ReactDOM from 'react-dom';
import App from 'dummywidget';

class Main {
  beforeAppear() {
    var self = this;
    ReactDOM.render(
      <App model={self}/>,
      document.getElementById('dummywidget')
    );
  }
}
