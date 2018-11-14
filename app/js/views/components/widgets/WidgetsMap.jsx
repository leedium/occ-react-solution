/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file ElementsMap.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description Lookup hash to transform OCC defined widgets into React Components
 */

import WebContent from "./webContent/WebContent";
import Header from "./header/Header";

const WidgetsMap = {
  reactWebContent: WebContent,
  reactHeader: Header,
  webContent: WebContent
};

export default WidgetsMap;
