/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import {PAGE_LAYOUT_LOAD_COMPLETE} from "../actions/actions";

const initialPageState = {
  pageLayout: null,
};


const pageReducer = (state = initialPageState, action) => {

  if (action.type === PAGE_LAYOUT_LOAD_COMPLETE) {
    return Object.assign({}, state, action.payload);
  }
  return state;

};



export default pageReducer;
