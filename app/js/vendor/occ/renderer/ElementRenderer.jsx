/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

// @flow

/**
 * @project occ-react-solution
 * @file ElementRenderer.jsx
 * @company LEEDIUM
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateUpdated 14/11/2018
 * @description Element renderer compares the elements defined in each widget
 *              and injects the associated React Component in it's place.
 *              As all the mapped React Components are defined as dynamic imports
 *              the load for a selected component happens in real time.
 *              *See AsyncElement to see how the promise is implemented.
 *
 */

import React, { Component } from "react";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";

import ElementsMap from "../../../views/components/elements/ElementsMap";
import AsyncElement from "../../../views/components/elements/AsyncElement";

function looseJsonParse(obj) {
  // $FlowFixMe
  return Function(`return (${obj})`)(); // eslint-disable-line no-new-func
}

type Props = {
  widgetContext: {
    $elementConfig: {}
  },
  widget: {
    templateSrc: string
  }
};

type State = {
  elementMarkup: string
};

class ElementRenderer extends Component<Props, State> {
  state = {
    elementMarkup: ""
  };

  elementPromiseArray = [];

  componentDidMount() {
    this.injectElement();
  }

  injectElement = () => {
    const { widgetContext, widget } = this.props;

    const transform = (node, index) => {
      if (node.type === "comment") {
        return null;
      }

      if (node.attribs["data-bind"]) {
        if (
          node.attribs["data-bind"].indexOf(`element: 'generic-text'`) ||
          node.attribs["data-bind"].indexOf(`element: 'rich-text'`) ||
          node.attribs["data-bind"].indexOf(`element: 'editorialLink'`) ||
          node.attribs["data-bind"].indexOf(`element: 'react-image'`) ||
          node.attribs["data-bind"].indexOf(`element: 'image'`)
        ) {
          const data = looseJsonParse(`{${node.attribs["data-bind"]}}`);

          console.log("data", data);

          const Element = ElementsMap[data.element];
          this.elementPromiseArray.push(Element);

          return (
            <AsyncElement
              elementPromise={Element}
              id={`occ-react-id-${data.id}`}
              key={`occ-react-id-${data.id}`}
              elementConfig={widgetContext.$elementConfig[data.id]}
              widget={widget}
              nodeName={node.name}
            />
          );
        }
      } else if (node.name === "a") {
        console.log("a - this will be replaced ", node);
        //:todo add in the replacement for the occ link
      }
      return convertNodeToElement(node, index, transform);
    };

    const elementMarkup = ReactHtmlParser(widget.templateSrc, {
      decodeEntities: true,
      transform
    });
    this.setState({
      elementMarkup
    });
  };

  render() {
    const { state } = this;
    return state.elementMarkup;
  }
}

export default ElementRenderer;
