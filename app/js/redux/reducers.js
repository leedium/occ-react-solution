/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import { combineReducers } from 'redux';
import { PAGE_CHANGED } from './actions';

const page = (state = {}, action) => {
  if (action.type === PAGE_CHANGED) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};

const occProps = (state = {}, action) => {
  if (action.type === PAGE_CHANGED) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};

const rootReducer = combineReducers({ page });

export default rootReducer;
