// @flow

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, { Component, ComponentType } from "react";

type Props = {
  elementPromise: Promise<*>,
  key: string,
  elementConfig: {},
  widget: {},
  nodeName: string
};

type State = {
  elementReady: ComponentType<*>
};

class AsyncElement extends Component<Props, State> {
  state = {
    elementReady: null
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

    if (elementReady) {
      const Element = elementReady;

      return <Element {...this.props} />;
    }

    return null;
  }
}

export default AsyncElement;
