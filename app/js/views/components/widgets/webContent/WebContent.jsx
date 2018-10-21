/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow
import React from "react";

import ElementRenderer from "../../../../vendor/occ/renderer/ElementRenderer";

type Props = {
  widgetContext: any,
  widget: any
};

const WebContent = ({ widgetContext, widget }: Props) => (
  <ElementRenderer widgetContext={widgetContext} widget={widget} />
);

export default WebContent;
