/* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';

import Index from './index';


//  artificially create container
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

define([
    'knockout',
    'jquery',
    'pubsub',
    'ccConstants',
    'navigation'
  ],
  (
    ko,
    $,
    pubsub,
    ccConstants,
    navigation
  ) =>
    ({
      onLoad: (widget) => {
        console.log(widget, pubsub, ccConstants, navigation);
        console.log(ko.toJS(widget));
        ReactDOM.render(
          <Index pageName={'TEST'}/>,
          document.getElementById('main')
        );
        $.Topic('PAGE_CHANGED', pageContext => {
          console.log(pageContext)
        });
      }
    })
);

