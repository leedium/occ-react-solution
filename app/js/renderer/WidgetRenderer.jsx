/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import WidgetsMap from "../views/components/widgets/WidgetsMap";

class WidgetRenderer extends Component {

  render () {
    let OCCComponent;
    const {ko} = this.props.occProps.depdenencies;
    const {widget} = this.props;
    const context = ko.contextFor(document.getElementById(`${widget.typeId}-${widget.id}`));

    try {
      OCCComponent = WidgetsMap[widget.typeId.split('_')[0]];
    }catch(err){
      OCCComponent = null
    }
      return OCCComponent ? <OCCComponent context={context} {...this.props}/> : null;
  }
}

export default WidgetRenderer;
