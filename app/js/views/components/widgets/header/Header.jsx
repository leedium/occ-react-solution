// @flow

import React from "react";
import ElementRenderer from "../../../../vendor/occ/renderer/ElementRenderer";

type Props = {
  widgetContext: any,
  widget: any
};

const Header = ({ widgetContext, widget }: Props) => (
  <div>
    <ElementRenderer widgetContext={widgetContext} widget={widget} />
    <div className="occ-react-header-custom">hello</div>
  </div>
);

export default Header;
