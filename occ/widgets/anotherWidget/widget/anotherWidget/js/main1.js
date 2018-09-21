/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

define(['knockout','jquery','pubsub', 'notifier', 'ccConstants', 'ccRestClient','pageLayout/product', 'ccStoreConfiguration'],

  function (ko,$, pubsub, notifier, CCConstants, CCRestClient, Product, CCStoreConfiguration) {

    var moduleObj = {
      onLoad: function(widget) {
        console.log('another widget main1', widget);
      }
    };

    return moduleObj;

  }

);
