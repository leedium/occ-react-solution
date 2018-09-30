import React, { Component } from "react";
import { connect } from "react-redux";

import { loginUserRequest } from "../../../../redux/actions/userActions";

class Header extends Component {
  componentDidMount() {}

  render() {
    return <div>header</div>;
  }
}

const mapStateToProps = state => ({
  user: state.model.user
});
const mapDispatchProps = dispatch => ({
  login(loginObj) {
    dispatch(loginUserRequest(loginObj));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(Header);
