// @flow

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
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
    <ElementNode style={formattedFonts}>
      {widget.customTranslations[`text.${elementConfig.id}`]}
    </ElementNode>
  );
};
export default OccGenericText;
