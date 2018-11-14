/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-solution
 * @file AsyncElement.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description Proxy Element that receives a dynamically imported Component
 *              When the load is complete, the element is rendered on the page
 *              when the state property is updated.
 */

import React, { Component } from "react";
import type { StatelessFunctionalComponent } from "react";

type Props = {
  elementPromise: Promise<*>,
  id: string,
  elementConfig: {},
  widget: {},
  nodeName: string
};

type State = {
  elementReady: StatelessFunctionalComponent<*>
};

class AsyncElement extends Component<Props, State> {
  state = {
    elementReady: () => null
  };

  componentDidMount() {
    const { elementPromise } = this.props;
    elementPromise.then(res => {
      this.setState({
        elementReady: res.default
      });
    });
  }

  render() {
    const { elementReady } = this.state;
    const { id } = this.props;

    if (elementReady) {
      const El = elementReady;
      return <El key={id} {...this.props} />;
    }

    return null;
  }
}

export default AsyncElement;
