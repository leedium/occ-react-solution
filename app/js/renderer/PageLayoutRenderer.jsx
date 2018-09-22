/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PageLayoutRenderer extends Component {
  static defaultProps = {
    pageBody: null
  };

  static propTypes = {
    pageBody: PropTypes.array
  };

  render () {
    const body = this.props.pageBody.length ? this.props.pageBody.map( rows  => (
      <div className="" key={`row${rows.key}`}>region</div>
    )) : null;

    return body;
  }
}

export default PageLayoutRenderer;
