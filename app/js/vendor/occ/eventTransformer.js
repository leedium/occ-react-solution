/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */
import * as Actions from '../../redux/actions/actions';
import actionCreators from '../../redux/actions/pageActions';

const updateUserModel = (ko) => {

};


function initialize(occProps){
  const {ko, $} = occProps.dependencies;

  $.Topic(Actions.USER_LOGOUT_SUCCESSFUL).subscribe();

}

export default initialize;
