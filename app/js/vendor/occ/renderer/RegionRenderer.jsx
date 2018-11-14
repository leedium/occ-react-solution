/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file RegionRenderer.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated 14/11/2018
 * @description Renders an OCC page layout region as defined from the pageLayout
 *              loaded in the previous cycle.
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
