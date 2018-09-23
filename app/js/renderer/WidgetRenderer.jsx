/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import ComponentsMap from "../views/components/ComponentsMap";

class WidgetRenderer extends Component {
  render () {
    let OCCComponent;
    const {ko} = this.props.occProps.depdenencies;
    const {widget} = this.props;
    console.log('ko:widget', widget, this.props.occProps.model.widget);
    // console.log(ko.contextFor(document.getElementById(`${widget.typeId}-${widget.id}`)));
    const context = ko.contextFor(document.getElementById(`${widget.typeId}-${widget.id}`));
    try {
      OCCComponent = ComponentsMap[widget.typeId.split('_'[0])](widget, context);
    }catch(err){
      OCCComponent = null
    }
    return OCCComponent ? <OCCComponent/> : null;
  }
}

export default WidgetRenderer;
