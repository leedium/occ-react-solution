/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component, PureComponent} from 'react';
import WidgetRenderer from "./WidgetRenderer";

class RegionRenderer extends PureComponent {
  render () {
    return (
      this.props.widgets.map(widget =>
        <div key={widget.id} className={`col-xs-${this.props.width}`}>
         <WidgetRenderer widget={widget} {...this.props}/>
        </div>
      )
    );
  }
}

export default RegionRenderer;
