/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/* eslint import/no-unresolved: [2, { ignore: ['\.img$'] }] */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Index from "./Index";
import Context from "./Context";
import store from "./redux/store";
import occEventTransformer from "./vendor/occ/eventTransformer";

window.occReact = {};

define([
  "knockout",
  "jquery",
  "pubsub",
  "ccConstants",
  "navigation",
  "ccRestClient",
  "ccLogger",
  "CCi18n",
  "ccNumber",
  "currencyHelper",
  "numberFormatHelper",
  "ojs/ojcore",
  "ojs/ojvalidation"
], (
  ko,
  $,
  PubSub,
  CCConstants,
  navigation,
  ccRestClient,
  logger,
  CCi18n,
  ccNumber,
  currencyHelper,
  numberFormatHelper,
  ojcore,
  ojvalidation
) => ({
  onLoad: widget => {
    const occProps = {
      dependencies: {
        ko,
        $,
        PubSub,
        CCConstants,
        navigation,
        ccRestClient,
        logger,
        CCi18n,
        ccNumber,
        currencyHelper,
        numberFormatHelper,
        ojcore,
        ojvalidation
      },
      model: {
        body: ko.dataFor(document.body),
        widget
      }
    };

    //  artificially create container
    const root = document.createElement("div");
    root.id = "root";
    document.getElementById("main").prepend(root);

    occEventTransformer(occProps);

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
