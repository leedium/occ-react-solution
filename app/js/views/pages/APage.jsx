/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file APage.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description Abstract Route View
 *
 *              The view is rendered of the OCC pageLayout model which is loaded when
 *              the component is mounted.
 *
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { PageLayoutType } from "../../types";
import PageLayoutRenderer from "../../vendor/occ/renderer/PageLayoutRenderer";
import { pageLayoutLoadStart } from "../../redux/actions/pageActions";

class APage extends Component {
  static propTypes = {
    pageLayout: PageLayoutType,
    pageLayoutLoad: PropTypes.func,
    match: PropTypes.shape({
      url: PropTypes.string
    }).isRequired
  };

  static defaultProps = {
    pageLayout: null,
    pageLayoutLoad: PropTypes.func
  };

  state = {};

  /**
   * initiates a redux thunk to retrieve the layoutModel for this page
   */
  componentDidMount() {
    const { match, pageLayoutRequest, occProps } = this.props;
    const route = match.url;
    pageLayoutRequest({
      path: `/${route}`,
      headers: {
        Authorization: `Bearer ${
          occProps.dependencies.ccRestClient.tokenSecret
        }`
      }
    });
  }

  static getDerivedStateFromProps(nextProps) {
    return nextProps;
  }

  /**
   * The layout regions are defined once the layoutModel is loaded.
   * Transformations are applied and send to the PageLayout renderer for
   * processing
   * @returns {*}
   */
  render() {
    let pageBody = [];
    const { pageLayout, occProps } = this.props;
    if (pageLayout) {
      const regionsMap = new Map(
        pageLayout.regions.map(region => [region.id, region])
      );
      pageBody = occProps.model.body
        .bodyRows()
        .filter(
          row =>
            row
              .regions()
              .filter(region => region.widgets().length && region.width() > 0)
              .length > 0
        )
        .map((row, i) => ({
          key: i,
          regions: row.regions().reduce((acc, region) => {
            acc.push(regionsMap.get(region.id()));
            return acc;
          }, [])
        }));
    }

    return (
      <div className="container">
        <PageLayoutRenderer pageBody={pageBody} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageLayout: state.page.pageLayout
});

const mapDispatchToProps = dispatch => ({
  pageLayoutRequest(payload) {
    dispatch(pageLayoutLoadStart(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(APage);
