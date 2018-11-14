/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/**
 * @project occ-react-solution
 * @file Context.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated; 14/11/2018
 * @description Simple Wrapper to help inject the occProps in modules in via
 *              Provider / Consumer workflows
 *
 *              occProps is the Context object to which dependencies are injected
 *              into.
 */

import React from "react";

const Context = React.createContext("occProps");
export default Context;
