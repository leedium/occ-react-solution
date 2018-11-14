/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-solution
 * @file OccImage.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 14/11/2018
 * @description React Image OCC port.
 */

import React from "react";
import { convertDashKeysToCamelCase } from "../../../../utils/utils";

type Props = {
  elementConfig: {
    border: {},
    horizontalAlignment: {},
    id: string,
    richText: {
      content: string
    },
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
  console.log("Image Props", elementConfig);
  const { image, richText } = elementConfig;
  const img = (
    <img
      style={convertDashKeysToCamelCase(
        Object.assign(
          { borderStyle: "solid", width: "100%" },
          elementConfig.border || {},
          elementConfig.horizontalAlignment || {},
          {
            ...Object.keys(elementConfig.padding || []).reduce((acc, b) => {
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

  return (
    <div>
      {image.link ? (
        <a title={image.titleText} href={image.link}>
          {img}
        </a>
      ) : (
        <div className="occ-react__image">{img}</div>
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: richText.content
        }}
      />
    </div>
  );
};

export default OccImage;
