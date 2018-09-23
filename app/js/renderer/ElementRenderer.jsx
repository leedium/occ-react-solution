/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

import React, {Component} from 'react';
import ElementsMap from "../views/components/elements/ElementsMap";

class ElementRenderer extends Component {
  render () {
    let OCCComponent;
    const {widget} = this.props;

    return this.props.elements.map(row => (
      <div key={`occ-react-row-id-${widget}-${row.id}`} className="row">
        {
          row.elements.map(el => {
            const Element = ElementsMap[el.type];
            return (
              <div key={`occ-react-id-${el.id}`} className={el.colClass}>
                <Element {...el}/>
              </div>
            )
          })
        }
      </div>
    ))
  }
}

export default ElementRenderer;
