/* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

import Index from './index';


//  artificially create container
const root = document.createElement('div');
root.id = 'root';
document.body.prepend(root);

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
    PubSub,
    CCConstants,
    navigation
  ) => {

    const dependencies = {ko, $, PubSub, CCConstants, navigation};

    return ({
      onLoad: (widget) => {
        console.log(widget, PubSub, CCConstants, navigation);
        console.log(ko.toJS(widget));

        $.Topic(PubSub.topicNames.PAGE_VIEW_CHANGED).subscribe( pageContext => {
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

