/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import Loadable from 'react-loadable';

const Loader = () => (
  <div>loading</div>
);


class AsyncRoute extends Component {

  state = {
    loaded: false
  };

  component = null;

  componentDidMount () {
    this.props.loadingImport.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render () {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    }
    return null;
  }
}

export default AsyncRoute;


