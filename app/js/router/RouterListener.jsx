import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OCCComponent from "../components/OCCComponent";

class RouterListener extends OCCComponent {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    occProps: PropTypes.shape.isRequired,
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
    const {$, PubSub} = this.props.occProps;
    $.Topic(PubSub.topicNames.PAGE_VIEW_CHANGED).publish({
      path : location.pathname,
    });
  };

  render () {
    console.log(this.props.children);
    return this.props.children;
  };
}

export default RouterListener;
