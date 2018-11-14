/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file Define the OCC and other require.js dependencies here
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description
 */

module.exports = {
  componentName: "occReactComponent",
  dependencies: {
    knockout: "knockout",
    jquery: "jquery",
    pubsub: "pubsub",
    ccConstants: "ccConstants",
    ccRestClient: "ccRestClient",
    navigation: "navigation",
    notifier: "notifier",
    ccLogger: "ccLogger",
    CCi18n: "CCi18n",
    ccNumber: "ccNumber",
    currencyHelper: "currencyHelper",
    numberFormatHelper: "numberFormatHelper",
    "pageLayout/product": "Product",
    "ojs/ojcore": "ojs/ojcore",
    "ojs/ojvalidation": "ojs/ojvalidation"
    // react: "https://unpkg.com/react@16.5.2/umd/react.production.min",
    // "react-dom":
    //   "https://unpkg.com/react-dom@16.5.2/umd/react-dom.production.min",
    // redux: "https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.0/redux.min"
  }
};
