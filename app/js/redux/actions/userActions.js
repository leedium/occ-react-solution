/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import { USER_LOGIN_SUCCESSFUL, USER_LOGIN_REQUESTED } from "./actions";

export function temp() {}

export function userModelUpdated(user) {
  return { type: USER_LOGIN_SUCCESSFUL, payload: { user } };
}

export function loginUserRequest() {
  return { type: USER_LOGIN_REQUESTED, payload: {} };
}
