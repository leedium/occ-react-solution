/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

import React from "react";
import ReactHtmlParser from "react-html-parser";

type Props = {
  elementConfig: {
    node: {},
    richText: {
      id: number,
      content: string
    }
  }
};

const OccRichText = ({ elementConfig }: Props) => (
  <div
    key={`occ-react-id-${elementConfig.richText.id}`}
    className="occ-react__rich-text"
  >
    {ReactHtmlParser(elementConfig.richText.content)}
  </div>
);

export default OccRichText;
