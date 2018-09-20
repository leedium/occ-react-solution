/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import axios from 'axios';
import {ENDPOINT_PAGE_LAYOUT} from '../constants';
import {PAGE_CHANGED, PAGE_LAYOUT_LOAD_COMPLETE} from './actions';

export function pageChanged (pageContext) {
  return {type: PAGE_CHANGED, payload: pageContext};
}

export function pageLayoutLoadComplete (pageLayoutData) {
  return {type: PAGE_LAYOUT_LOAD_COMPLETE, payload: pageLayoutData}
}

export function pageLayoutLoadStart (path, headers) {
  return (dispatch) => {
    axios({
      url: `${ENDPOINT_PAGE_LAYOUT}${path}`,
      headers,
      params: {
        ccvp: 'md'
      },
      responseType: 'json'
    })
      .then(res => {
        dispatch(pageLayoutLoadComplete(res))
      })
      .catch(err => {
        console.error('axios error', err);
      })
  }
}

