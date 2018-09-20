/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import {Component} from 'react';
import PropTypes from 'prop-types';

class OCCComponent extends Component {
  static defaultProps = {
    occProps: null
  };
  static propTypes = {
    occProps: PropTypes.any
  };

  constructor (props, context) {
    super(props, context);
  }
}

export default OCCComponent;
