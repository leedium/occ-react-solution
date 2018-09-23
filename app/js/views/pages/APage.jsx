/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import {connect} from "react-redux";

import {PageLayoutType} from "../../types";
import PageLayoutRenderer from "../../renderer/PageLayoutRenderer";
import {pageLayoutLoadStart} from "../../redux/actionCreators";


class APage extends Component {

  static propTypes = {
    pageLayout: PageLayoutType
  };

  static defaultProps = {
    pageLayout: null
  };

  state = {};


  componentDidMount () {
    // console.log('6. component did mount', this.props, this.context);
    const route = this.props.match.url;
    this.props.pageLayoutLoad(route);
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    // console.log('3. getDerivedStateFromProps', nextProps, prevState);
    return nextProps
  }

  render () {
    let pageBody = [];
    if (this.props.pageLayout) {
      const regionsMap = new Map(this.props.pageLayout.regions
        .map(region => [region.id, region]));
      pageBody = this.props.occProps.model.body.bodyRows()
        .filter(row => (row.regions().filter(region => (region.widgets().length && region.width() > 0)).length > 0))
        .map((row,i) => (
          {
            key:i,
            regions: row.regions().reduce((acc, region) => {
              acc.push(regionsMap.get(region.id()));
              return acc;
            }, [])
          }))
    }

    return (<div className="container">
      <PageLayoutRenderer pageBody={pageBody} {...this.props}/>
    </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(APage);
