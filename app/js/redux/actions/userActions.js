/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import {USER_LOGIN_SUCCESSFUL} from "./actions";

export function temp(){}

export function userModelUpdated(user) {
  return {type: USER_LOGIN_SUCCESSFUL, payload:{user}}
}


