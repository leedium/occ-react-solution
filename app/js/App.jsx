/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';

import Index from './index';
import context from './context';
import store from './redux/store';

//  artificially create container
const root = document.createElement('div');
root.id = 'root';
document.body.prepend(root);

window.occReact = {};


define([
    'knockout',
    'jquery',
    'pubsub',
    'ccConstants',
    'navigation',
    'ccRestClient'
  ],
  (ko, $, PubSub, CCConstants, navigation, ccRestClient) => ({
    onLoad: widget => {
      // console.log(widget, PubSub, CCConstants, navigation);
      const occProps = {ko, $, PubSub, CCConstants, navigation, ccRestClient};

      console.log(ko.toJS(widget));
      ReactDOM.render(
        <context value={{occProps}}>
          <Provider store={store}>
            <Index pageName={'TEST'}/>
          </Provider>
        </context>,
        document.getElementById('root')
      );
    }
  })
);

