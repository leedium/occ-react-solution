// @flow

import React, { Component } from "react";
import type { Dispatch } from "redux";
import { connect } from "react-redux";

import ElementRenderer from "../../../../vendor/occ/renderer/ElementRenderer";
import Button from "../../elements/button/Button";
import { loginUserRequest } from "../../../../redux/actions/userActions";

type Props = {
  occProps: {
    dependencies: {
      CCi18n: {
        t: Function
      }
    }
  },
  widgetContext: {
    $elementConfig: {}
  },
  widget: {
    templateSrc: string
  },
  loginUser: Function
};

class Header extends Component<Props> {
  handleClickEvent = (event: SyntheticInputEvent<HTMLButtonElement>) => {
    event.persist();
    event.stopPropagation();
    const { id } = event.target;
    const { loginUser, occProps } = this.props;
    switch (id) {
      case "loginBtn":
        loginUser(occProps);
        break;
      default:
    }
  };

  render() {
    const { widgetContext, widget, occProps } = this.props;
    const { CCi18n } = occProps.dependencies;
    return (
      <div>
        <ElementRenderer widgetContext={widgetContext} widget={widget} />
        <div className="occ-react__header-component">
          <Button
            id="loginBtn"
            handleLoginClick={this.handleClickEvent}
            loginLabel={CCi18n.t("ns.common:resources.loginLinkText")}
            classes={Button.primary}
          />
          <Button
            id="createAccountBtn"
            handleLoginClick={this.handleClickEvent}
            loginLabel={CCi18n.t("ns.common:resources.createAccountText")}
            classes={Button.primary}
          />
          <Button
            id="wishlistBtn"
            handleLoginClick={this.handleClickEvent}
            loginLabel={CCi18n.t("ns.common:resources.wishlist")}
            classes={Button.primary}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ model }) => ({
  user: model.user
});

const mapDispatchToProps = (dispatch: Dispatch<Function>) => ({
  loginUser(payload) {
    dispatch(loginUserRequest(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
