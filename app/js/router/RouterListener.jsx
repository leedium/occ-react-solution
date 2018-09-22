/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OCCComponent from "../views/components/OCCComponent";


class RouterListener extends OCCComponent {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentDidMount(){
    this.handleLocationChange(this.context.router.history.location);
    this.unListen = this.context.router.history.listen(this.handleLocationChange.bind(this));
  };

  componentWillUnmount(){
    this.unListen();
  };

  handleLocationChange(location) {
    const {$, PubSub} = this.props.occProps.depdenencies;
    $.Topic(PubSub.topicNames.PAGE_VIEW_CHANGED).publish({
      path : location.pathname,
    });
  };

  render () {
    return this.props.children;
  };
}

export default RouterListener;
