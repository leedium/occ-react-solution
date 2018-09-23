/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React from 'react';
import AWidget from "../AWidget";

class WebContent extends AWidget {
  constructor (props, context){
    super(props, context);
  }

  // render () {
  //   console.log('WebContent',this.state.elementArray.length, this.componentReady, this.props.widget, this.props.context);
  //
  //   if (this.state.elementArray.length) {
  //     super.render();
  //   }
  //   return <div className="a-widget"/>
  // }
}


export default WebContent;
