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
  ) => {

    const dependencies = {ko, $, pubsub, ccConstants, navigation};

    return ({
      onLoad: (widget) => {
        console.log(widget, pubsub, ccConstants, navigation);
        console.log(ko.toJS(widget));

        $.Topic(pubsub.topicNames.PAGE_VIEW_CHANGED).subscribe( pageContext => {
          console.log(widget,pageContext)
        });

        ReactDOM.render(
          <Index pageName={'TEST'} occProps={dependencies} />,
          document.getElementById('root')
        );
      }
    })
  }
);

