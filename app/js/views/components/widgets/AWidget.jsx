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
    let rowIndex = 0;
    let elementCount = 0;

    if (elementLength) {
      const widgetMarkup = new DOMParser().parseFromString(this.props.widget.templateSrc, 'text/html');
      const rows = Array.from(widgetMarkup.querySelectorAll('.row'));

      console.log(rows);

      const elementArray = [];
      // console.log('qs:', widgetMarkup.querySelectorAll('span[data-bind^="element: "]'));
      // console.log('WidgetMarkup:', widgetMarkup);
      const original = ko.bindingHandlers.element;

      rows.map( (row, i) => {
          rowIndex = i;
          elementArray[rowIndex] = {
            id:i,
            elements:[]
          };
          ko.bindingHandlers.element = {
            init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
              // console.log('init', element.parentNode.className, valueAccessor(), viewModel, bindingContext)
              const bindingData = allBindings();
              elementArray[rowIndex].elements.push({
                id: bindingData.id,
                type: bindingData.element,
                colClass: element.parentNode.className,
                element: this.props.context.$elementConfig[bindingData.id]
              });
              elementCount+=1;
              if (elementCount === elementLength) {
                this.setState({
                  elementArray
                })
              }

            }
          };
          ko.applyBindings({element: '', id: ''}, row);
          return null;
      });
      ko.bindingHandlers.element = original;
    }
  }

  render () {
    if (this.state.elementArray.length) {
      console.log('reveal', this.state.elementArray)
      return (
        <div id={`occ-react-id-${this.props.widget.id}`}>
          <ElementRenderer elements={this.state.elementArray} />
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
