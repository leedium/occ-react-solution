// @flow
/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";

import ElementRenderer from "../../../../renderer/ElementRenderer";

type Props = {
  widgetContext: any,
  widget: any
};

const WebContent = ({ widgetContext, widget }: Props) => (
  <ElementRenderer widgetContext={widgetContext} widget={widget} />
);

export default WebContent;
