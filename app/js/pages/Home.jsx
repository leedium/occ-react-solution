/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from 'react';
import OCCComponent from "../components/OCCComponent";
import Components from "../components/Components";

class Home extends OCCComponent {
  constructor (props) {
    super(props);
  }
  render() {
    const OCCLink = Components.OCCLink('dltest','DLTest');
    return (
      <div>
        <div>Home</div>
        <OCCLink />
      </div>
    )
  }
}

export default Home;
