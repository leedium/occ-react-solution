/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import ComponentsMap from "../components/ComponentsMap";

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const OCCLink = ComponentsMap.OCCLink('dltest','DLTest');
    return (
      <div>
        <div>Home</div>
        <OCCLink />
      </div>
    )
  }
}

export default Home;
