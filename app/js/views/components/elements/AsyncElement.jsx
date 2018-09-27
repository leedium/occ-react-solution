// @flow

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
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
