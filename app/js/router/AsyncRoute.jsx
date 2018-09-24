/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, { Component } from "react";

class AsyncRoute extends Component {
  state = {
    loaded: false
  };

  component = null;

  componentDidMount() {
    const { loadingImport } = this.props;
    loadingImport.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return <this.component {...this.props} />;
    }
    return null;
  }
}

export default AsyncRoute;
