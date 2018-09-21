/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {pageLayoutLoadStart} from '../redux/actionCreators';
import ComponentsMap from '../components/ComponentsMap';

class DLTest extends Component {
  constructor (props, context) {
    super(props, context);
    console.log(constructor)
  }

  state = {
    pageLayout: React.createElement('div', null, 'test')
  };

  componentDidMount() {
    console.log('6. component did mount', this.props, this.context);
    this.props.pageLayoutLoad(this.props.match.url);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('3. getDerivedStateFromProps', nextProps, prevState);
    return nextProps
  }

  render() {
    console.log('5. render');
    const OCCLink = ComponentsMap.OCCLink('/','/');
    return (
      <div>
        {this.state.pageLayout}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pageLayout: state.pageLayout
});

const mapDispatchToProps = dispatch => ({
  pageLayoutLoad(payload){ dispatch(pageLayoutLoadStart(payload))}
});

export default connect(mapStateToProps,mapDispatchToProps)(DLTest);
