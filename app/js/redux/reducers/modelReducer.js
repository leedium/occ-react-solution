/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGOUT_SUCCESSFUL
} from "../actions/actions";

const initialModel = {
  user: {},
  product: {},
  cart: {},
  pageContext: {}
};

//  model
const modelReducer = (state = initialModel, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESSFUL:
    case USER_LOGOUT_SUCCESSFUL:
      console.log("action", action.payload);

      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default modelReducer;
