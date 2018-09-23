/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import ElementRenderer from "../../../renderer/ElementRenderer";

class AWidget extends Component {
  state = {
    elementArray: []
  };

  componentReady = false;

  constructor (props, context) {
    super(props, context)
  }

  componentDidMount () {
    const {ko} = this.props.occProps.depdenencies;
    const elementLength = Object.keys(this.props.context.$elementConfig).length;
    if (elementLength) {
      const widgetMarkup = new DOMParser().parseFromString(this.props.widget.templateSrc, 'text/html');
      const elementArray = [];
      // console.log('qs:', widgetMarkup.querySelectorAll('span[data-bind^="element: "]'));
      // console.log('WidgetMarkup:', widgetMarkup);
      const original = ko.bindingHandlers.element;
      ko.bindingHandlers.element = {
        init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
          // console.log('init', element, valueAccessor(), viewModel, bindingContext)
          const bindingData = allBindings();
          elementArray.push({
            id: bindingData.id,
            type: bindingData.element,
            element: this.props.context.$elementConfig[bindingData.id]
          });
          if (elementArray.length === elementLength) {
            this.setState({
              elementArray
            })
          }

        }
      };
      ko.applyBindings({element: '', id: ''}, widgetMarkup.body);
      ko.bindingHandlers.element = original;
    }
  }

  render () {
    if (this.state.elementArray.length) {
      console.log('reveal', this.state.elementArray)
      return (
        <div id={`occ-react-id-${this.props.widget.id}`}>
          <ElementRenderer elements={this.state.elementArray} {...this.props}/>
        </div>)
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}


export default AWidget;
