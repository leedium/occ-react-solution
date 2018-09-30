/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import store from '../../redux/store';
import * as Actions from '../../redux/actions/actions';
import {userModelUpdated} from '../../redux/actions/userActions';

const updateUserModel = (ko,widget) => {
 return () => {
   store.dispatch(userModelUpdated(ko.toJS(widget.user())));
 }
};

function initialize(occProps){
  const {ko} = occProps.dependencies;
  const {widget} = occProps.model;

  //user model
  $.Topic(Actions.USER_LOGIN_SUCCESSFUL).subscribe(updateUserModel(ko, widget));
  $.Topic(Actions.USER_LOGOUT_SUCCESSFUL).subscribe(updateUserModel(ko, widget));

}

export default initialize;
