/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import page from "./reducers/pageReducer";
import model from "./reducers/modelReducer";

const store = createStore(
  combineReducers({page, model}),
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

export default store;
