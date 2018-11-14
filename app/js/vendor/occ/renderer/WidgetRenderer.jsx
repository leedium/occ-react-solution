/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file WidgetRenderer.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated 14/11/2018
 * @description Component renders widget to the page.
 *              The OCCComponent is a assigned the result of the widget type
 *              by it's typeId
 */

import React from "react";
import WidgetsMap from "../../../views/components/widgets/WidgetsMap";

const WidgetRenderer = props => {
  const { occProps } = props;
  let OCCComponent;
  const { widget } = props;
  const widgetContext = occProps.dependencies.ko.contextFor(
    document.getElementById(`${widget.typeId}-${widget.id}`)
  );
  try {
    OCCComponent = WidgetsMap[widget.typeId.split("_")[0]];
  } catch (err) {
    OCCComponent = null;
  }

  console.log("widgetContext", widgetContext);
  console.log("props", props);

  return OCCComponent ? (
    <OCCComponent widgetContext={widgetContext} {...props} />
  ) : null;
};

export default WidgetRenderer;
