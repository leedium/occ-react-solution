/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import PropTypes from "prop-types";

export const other = null;
export const PageLayoutType = PropTypes.shape({
  route: PropTypes.string,
  isPreview: PropTypes.bool,
  viewports: PropTypes.string,
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      widgets: PropTypes.arrayOf(
        PropTypes.shape({
          global: PropTypes.bool,
          isPreview: PropTypes.bool,
          displayName: PropTypes.string,
          instanceName: PropTypes.string
        })
      )
    })
  ).isRequired
});
