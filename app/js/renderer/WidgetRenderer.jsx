/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import WidgetsMap from "../views/components/widgets/WidgetsMap";

const WidgetRenderer = props => {
  const { occProps } = props;
  let OCCComponent;
  const { ko } = occProps.dependencies;
  const { widget } = props;
  const widgetContext = ko.contextFor(
    document.getElementById(`${widget.typeId}-${widget.id}`)
  );
  // console.log(widgetContext, props)
  try {
    OCCComponent = WidgetsMap[widget.typeId.split("_")[0]];
  } catch (err) {
    OCCComponent = null;
  }
  return OCCComponent ? (
    <OCCComponent widgetContext={widgetContext} {...props} />
  ) : null;
};

export default WidgetRenderer;
