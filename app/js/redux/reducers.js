/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import { combineReducers } from "redux";
import { PAGE_LAYOUT_LOAD_COMPLETE, USER_LOGIN_SUCCESSFUL } from "./actions";

let initialPageState = {
  pageLayout:{},
};


let initialUserState = {}

export const getInitialPageState = () => initialPageState;
export const setInitialPageState = val => {
  initialPageState = val;
  return initialPageState;
};

const page = (state = initialPageState, action) => {
  if (action.type === PAGE_LAYOUT_LOAD_COMPLETE) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};


//  model
const user = (state = initialUserState, action) => {
  if(action.type === USER_LOGIN_SUCCESSFUL){
    return Object.assign({},state, action.payload)
  }
  return state
}


const rootReducer = combineReducers({ page });

export default rootReducer;
