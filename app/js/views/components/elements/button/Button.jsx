/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

import React from "react";

type Props = {
  handleLoginClick: Function,
  loginLabel: string,
  classes: string,
  id: string
};

const Button = ({ handleLoginClick, loginLabel, classes, id }: Props) => (
  <button
    id={id}
    className={`occ-react__button ${classes}`}
    type="button"
    href="#"
    onClick={handleLoginClick}
  >
    {loginLabel}
  </button>
);

Button.primary = "occ-react__button occ-react__button--primary";

export default Button;
