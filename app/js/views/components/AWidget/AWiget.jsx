/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import PropTypes from 'prop-types';


function AWiget (widget, context) {
  class component extends Component {
    componentWillMount () {
      // console.log('componentWillMount')
    }

    componentDidMount () {
      // console.log('componentDidMount')
    }

    componentWillUnmount () {
      // console.log('componentWillUnmount')
    }

    render () {

      return (
        <div className="a-widget">
          AWidget
        </div>
      )
    }
  }

  return component;
}


export default AWiget;
