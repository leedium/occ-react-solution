/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';


function OCCLink(link, label) {
  class _occLink extends Component {
    componentWillMount(){
      // console.log('componentWillMount')
    }

    componentDidMount(){
      // console.log('componentDidMount')
    }

    componentWillUnmount(){
      // console.log('componentWillUnmount')
    }

    render () {

      console.log(this)

      const element = link.indexOf('://') >0  ? (
        <a target="_blank" rel="noopener noreferrer" href={link}>BBE{label}</a>
      ) : (
        <Link to={link} >{label}</Link>
      );
      return element
    }
  }
  return _occLink;
}


export default OCCLink;
