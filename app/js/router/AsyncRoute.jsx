/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file AsyncRoute.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description This file acts as a proxy to asynchronously load the model for the  route
 *              before it is displayed.
 *
 *              The injected module(loadingImport) itself is a the dynamic import which returns
 *              a promise that updates the flag to render the display.
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
