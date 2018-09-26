/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

export const convertDashKeysToCamelCase = obj => {
  const converted = {};

  console.log("obj:", obj);

  Object.keys(obj).reduce((acc, key) => {
    converted[key.replace(/-([a-z])/gi, ($0, $1) => $1.toUpperCase())] =
      obj[key];
    return acc;
  }, {});
  return converted;
};

export const other = "";
