/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import Loadable from 'react-loadable';

class AsyncRoute extends Component {
  // state = {
  //   loaded: false
  // };

  component = null;

  componentDidMount(){
    // console.log(this.props.importPromise)
    // this.props.importPromise.then(module => {
    //   console.log('module',module);
    //   this.setState({
    //     loaded: true
    //   })
    // })
    this.component = Loadable({
      loader: () => this.props.importPromise,
      loading() { return <div>Loading...</div> }
    })
  }

  render() {
    // if(this.state.loaded) {
    //   return <this.component {...this.props.props} />
    // }
    return (
      <this.component {...this.props.props} />
    );
  }
}

export default AsyncRoute;


