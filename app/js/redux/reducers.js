/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import { combineReducers } from "redux";
import * as Actions from "./actions/actions";

const initialPageState = {
  pageLayout: null,
};


const initialModel = {
  user:{},
  product:{},
  cart:{},
  pageContext:{}
};

const page = (state = initialPageState, action) => {

  if (action.type === Actions.PAGE_LAYOUT_LOAD_COMPLETE) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};


//  model
const model = (state = initialModel, action) => {
  switch(action.type){
    case Actions.USER_LOGIN_SUCCESSFUL:
    case Actions.USER_LOGOUT_SUCCESSFULL:
     return Object.assign({},state, action.payload);
     default:
    return state

  }
};


const rootReducer = combineReducers({ page, model });

export default rootReducer;
