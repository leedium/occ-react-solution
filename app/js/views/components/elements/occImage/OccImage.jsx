// @flow

/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from "react";
import { convertDashKeysToCamelCase } from "../../../../utils/utils";

type Props = {
  elementConfig: {
    border: {},
    horizontalAlignment: {},
    id: string,
    image: {
      altText: string,
      link: string,
      src: string,
      titleText: string
    },
    padding: {}
  }
};

const OccImage = ({ elementConfig }: Props) => {
  const { image } = elementConfig;
  const img = (
    <img
      style={convertDashKeysToCamelCase(
        Object.assign(
          { borderStyle: "solid", width: "100%" },
          elementConfig.border,
          elementConfig.horizontalAlignment,
          {
            ...Object.keys(elementConfig.padding).reduce((acc, b) => {
              acc[b] = `${elementConfig.padding[b]}px`;
              return acc;
            }, {})
          }
        )
      )}
      title={image.titleText}
      alt={image.altText}
      src={image.src}
    />
  );

  return image.link ? (
    <a title={image.titleText} href={image.link}>
      {img}
    </a>
  ) : (
    <div className="occ-react__image">{}</div>
  );
};

export default OccImage;
