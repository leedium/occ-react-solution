/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import OccRichText from "./occRichText/OccRichText";
import OccGenericText from "./occGenericText/OccGenericText";
import OccImage from "./occImage/OccImage";

const WidgetsMap = {
  image: OccImage,
  "rich-text": OccRichText,
  "generic-text": OccGenericText,
  editorialLink: OccRichText
};

export default WidgetsMap;
