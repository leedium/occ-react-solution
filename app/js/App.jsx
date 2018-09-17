/* eslint-disable class-methods-use-this, import/no-unresolved, no-undef, import/no-amd, no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';


//  artificially create container
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

define([
    'knockout',
    'jquery',
    'pubsub',
    'ccConstants'
  ],
  (
    ko,
    $,
    pubsub,
    ccConstants
  ) =>
    ({
      onLoad: (widget) => {
        console.log(widget, pubsub, ccConstants);
        ReactDOM.render(
          <div>HELLO</div>,
          document.getElementById('main')
        );
      }
    })
);

