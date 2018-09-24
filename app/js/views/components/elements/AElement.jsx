/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';

class AElement extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default AElement;
