/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

import React from "react";
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
  const formattedFonts = Object.keys(font.styles).reduce((acc, key) => {
    acc[key.replace(/-([a-z])/gi, ($0, $1) => $1.toUpperCase())] =
      elementConfig.font.styles[key];
    return acc;
  }, {});
  const ElementNode = nodeName;
  return (
    <ElementNode style={formattedFonts}>
      {widget.customTranslations[`text.${elementConfig.id}`]}
    </ElementNode>
  );
};
// {ReactHtmlParser(elementConfig.richText.content)}
export default OccGenericText;
