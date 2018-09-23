/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import {combineReducers} from 'redux';
import {PAGE_CHANGED, PAGE_LAYOUT_LOAD_COMPLETE} from './actions';

let initialState = {};

export const getInitialState = () => initialState;
export const setInitialState = val => {
  initialState = val;
  return initialState;
};

const page = (state = initialState, action) => {
  if (action.type === PAGE_LAYOUT_LOAD_COMPLETE) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};

const rootReducer = combineReducers({page});

export default rootReducer;
