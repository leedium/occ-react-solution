/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import WidgetRenderer from "./WidgetRenderer";

const RegionRenderer = props =>
  props.widgets.map(widget => (
    <div key={widget.id} className={`col-xs-${props.width}`}>
      <WidgetRenderer widget={widget} {...props} />
    </div>
  ));

export default RegionRenderer;
