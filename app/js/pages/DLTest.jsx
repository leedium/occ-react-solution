/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import ComponentsMap from '../components/ComponentsMap';

class DLTest extends Component {
  constructor (props, context) {
    super(props, context);
  }

  render() {
    const OCCLink = ComponentsMap.OCCLink('/','/');
    return (
      <div>
        <div>DLTest</div>
        <OCCLink />
      </div>
    )
  }
}

export default DLTest;
