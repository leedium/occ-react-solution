/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {pageLayoutLoadStart} from '../redux/actionCreators';

class Article extends Component {
  props = {
    pageLayout: PropTypes.shape({
      route: PropTypes.string,
      isPreview: PropTypes.bool,
      viewports: PropTypes.string,
      regions: PropTypes.arrayOf(
        PropTypes.shape({
          widgets: PropTypes.arrayOf(
            PropTypes.shape({
              global: PropTypes.bool,
              isPreview: PropTypes.bool,
              displayName: PropTypes.string,
              instanceName: PropTypes.string,
            })
          )
        })
      )
    })
  };

  constructor (props, context) {
    super(props, context);
    console.log(constructor)
  }

  componentDidMount () {
    console.log('6. component did mount', this.props, this.context);
    this.props.pageLayoutLoad(this.props.match.url);
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('3. getDerivedStateFromProps', nextProps, prevState);
    return nextProps
  }

  render () {
    // console.log('5. render', this.props);
    // const pageLayout = !this.props.pageLayout ? <div>Loading</div> : (
    //     <div>
    //       <
    //     </div>
    // );
    // return pageLayout;
    return this.props.children;
  }
}

const mapStateToProps = state => ({
  pageLayout: state.page.pageLayout
});

const mapDispatchToProps = dispatch => ({
  pageLayoutLoad (payload) {
    dispatch(pageLayoutLoadStart(payload))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
