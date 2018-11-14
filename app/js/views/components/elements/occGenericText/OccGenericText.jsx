/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-solution
 * @file OccGenericText.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 14/11/2018
 * @description React GenericText OCC port
 */

import React from "react";
import { convertDashKeysToCamelCase } from "../../../../utils/utils";
// import ReactHtmlParser from "react-html-parser";

type Props = {
  widget: {
    customTranslations: {}
  },
  nodeName: string,
  elementConfig: {
    id: number,
    padding: {},
    font: {
      styles: {}
    }
  }
};

const OccGenericText = ({ elementConfig, nodeName, widget }: Props) => {
  const { font } = elementConfig;
  const formattedFonts = convertDashKeysToCamelCase(font.styles);
  const ElementNode = nodeName;
  return (
    <ElementNode style={formattedFonts} className="occ-react__generic-text">
      {widget.customTranslations[`text.${elementConfig.id}`]}
    </ElementNode>
  );
};
export default OccGenericText;
