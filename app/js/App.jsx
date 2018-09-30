/* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }] */

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Index from "./Index";
import Context from "./Context";
import store from "./redux/store";

//  artificially create container
const root = document.createElement("div");
root.id = "root";
document.body.prepend(root);

window.occReact = {};

define([
  "knockout",
  "jquery",
  "pubsub",
  "ccConstants",
  "navigation",
  "ccRestClient",
  "ccLogger"
], (ko, $, PubSub, CCConstants, navigation, ccRestClient, logger) => ({
  onLoad: widget => {
    const occProps = {
      dependencies: {
        ko,
        $,
        PubSub,
        CCConstants,
        navigation,
        ccRestClient,
        logger
      },
      model: {
        body: ko.dataFor(document.body),
        widget
      }
    };

    $.Topic(PubSub.topicNames.PAGE_VIEW_CHANGED).subscribe(() => {});
    ReactDOM.render(
      <Provider store={store}>
        <Context.Provider value={{ occProps }}>
          <Index pageName="TEST" />
        </Context.Provider>
      </Provider>,
      document.getElementById("root")
    );
  }
}));
