/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import { Link } from "react-router-dom";

const OccLink = (link, label) => {
  const element =
    link.indexOf("://") > 0 ? (
      <a
        className="occ-react__link"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        BBE
        {label}
      </a>
    ) : (
      <Link className="occ-react__link" to={link}>
        {label}
      </Link>
    );
  return element;
};

export default OccLink;
