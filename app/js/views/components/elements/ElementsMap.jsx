/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// import OccRichText from "./occRichText/OccRichText";
// import OccGenericText from "./occGenericText/OccGenericText";
// import OccImage from "./occImage/OccImage";

const WidgetsMap = {
  image: import("./occImage/OccImage"),
  "react-image": import("./occImage/OccImage"),
  "react-rich-text": import("./occRichText/OccRichText"),
  "generic-text": import("./occGenericText/OccGenericText"),
  "react-generic-text": import("./occGenericText/OccGenericText"),
  editorialLink: import("./occRichText/OccRichText"),
  button: import(/* webpackChunkName: "Button" */ "./button/Button")
};

export default WidgetsMap;
