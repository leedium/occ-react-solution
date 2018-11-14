/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import axios from "axios";
import { ENDPOINT_PAGE_LAYOUT } from "../../constants";
import {
  PAGE_CHANGED,
  PAGE_LAYOUT_LOAD_COMPLETE,
  APP_INIT_OCC_PROPS
} from "./actions";

const pageMap = new Map();

export function siteInitStore(occProps) {
  return { type: APP_INIT_OCC_PROPS, payload: occProps };
}

export function pageChanged(payload) {
  return { type: PAGE_CHANGED, payload };
}

export function pageLayoutLoadComplete(pageLayout) {
  return { type: PAGE_LAYOUT_LOAD_COMPLETE, payload: { pageLayout } };
}

export function pageLayoutLoadStart({ path, headers }) {
  if (pageMap.has(path)) {
    return pageLayoutLoadComplete(pageMap.get(path));
  }
  return dispatch => {
    axios({
      url: `${ENDPOINT_PAGE_LAYOUT}${path}`,
      headers,
      params: {
        ccvp: "md",
        usePreviewData: true
      },
      responseType: "json"
    })
      .then(({ data }) => {
        pageMap.set(path, data);
        dispatch(pageLayoutLoadComplete(data));
      })
      .catch(err => {
        console.error("axios error", err);
      });
  };
}
