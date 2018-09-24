/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import { Component } from "react";
import PropTypes from "prop-types";

// type Props = {
//   occProps: any,
//   children: Array<any>
// };

class RouterListener extends Component {
  static contextTypes = {
    router: PropTypes.shape({})
  };

  static propTypes = {
    occProps: PropTypes.shape({}).isRequired,
    children: PropTypes.element.isRequired
  };

  componentDidMount() {
    const { context } = this;
    const { occProps } = this.props;

    // console.log(occProps);
    // console.log(context);

    this.handleLocationChange(context.router.history.location);
    this.unListen = context.router.history.listen(
      this.handleLocationChange.bind(this)
    );
  }

  componentWillUnmount() {
    this.unListen();
  }

  unListen = () => {
    super.unListen();
  };

  handleLocationChange(location) {
    const { occProps } = this.props;
    const { $, PubSub } = occProps.dependencies;
    $.Topic(PubSub.topicNames.PAGE_VIEW_CHANGED).publish({
      path: location.pathname
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default RouterListener;
