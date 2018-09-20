/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from 'react';
import Components from '../components/Components';
import OCCComponent from "../components/OCCComponent";

class DLTest extends OCCComponent {
  constructor (props, context) {
    super(props, context);
    console.log(props);
  }
  render() {
    const OCCLink = Components.OCCLink('/','/');
    return (
      <div>
        <div>DLTest</div>
        <OCCLink />
      </div>
    )
  }
}

export default DLTest;
