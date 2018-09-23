/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const OccRichText = (props) =>
  (
    <div>
      <div id={`occ-react-id-${props.id}`} className={`${props.type}`} >
        {ReactHtmlParser(props.element.richText.content)}
      </div>
    </div>
  );

export default OccRichText;
