/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-solution
 * @file WebContent.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description React WebContent OCCC port
 */

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
