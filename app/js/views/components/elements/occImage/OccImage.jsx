/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";

const OccImage = ({ elementConfig }) => (
  <div>
    <img
      title={elementConfig.title}
      alt={elementConfig.alt}
      src={elementConfig.path}
    />
  </div>
);

export default OccImage;
