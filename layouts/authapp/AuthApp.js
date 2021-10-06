import React, { Component } from "react";
import { connect } from "react-redux";
import * as Icon from "react-feather";
import { withRouter, Redirect } from "react-router-dom";
import { Fade } from "react-reveal";
import SidebarLayout from "../sidebar/Sidebar";
import { showSidebar, hideSidebar } from "../../redux/actions";
import { AuthAppRoutes } from "../../routes";
import { BRAND } from "../../utils/Constant";

import "./authapp.scss";

const mapStateToProps = (state) => {
  return {
    sidebarShown: state.global.sidebarShown,
  };
};

class AuthApp extends Component {
  componentDidMount() {
    document.body.onclick = (e) => {
      const { sidebarShown } = this.props;

      const target = e.target || null;

      if (target && target.id == "app-canvas" && sidebarShown)
        this.props.dispatch(hideSidebar());
    };
  }

  showSidebar = (e) => {
    e.preventDefault();
    this.props.dispatch(showSidebar());
  };

  renderRole() {
    const { auth: authUser } = this.props;

    if (authUser.is_super_admin) return "Super Admin";
    else if (authUser.is_admin) return "Admin";
    else if (authUser.is_member) return "Voting Associate";
    else if (authUser.is_proposer) return "Proposer";
    else if (authUser.is_participant) return "Associate";
    else if (authUser.is_guest) return "Guest";
    return "";
  }

  render() {
    const { auth: authUser } = this.props;
    if (!authUser || !authUser.id) return null;

    if (
      !authUser.is_admin &&
      !authUser.is_participant &&
      !authUser.is_member &&
      !authUser.is_proposer &&
      !authUser.is_guest
    )
      return <Redirect to="/" />;

    if (!authUser.is_admin) {
      if (!authUser.email_verified || !authUser.can_access)
        return <Redirect to="/" />;
    }

    if (
      authUser.profile &&
      authUser.profile.twoFA_login &&
      authUser.profile.twoFA_login_active
    )
      return <Redirect to="/" />;

    return (
      <div className="app-page-wrap">
        <SidebarLayout authUser={authUser} />

        <div className="app-content-wrap">
          <div id="app-canvas"></div>

          <div className="app-content-body" id="app-content-body">
            <div id="app-content__header">
              <Icon.Menu onClick={this.showSidebar} />

              <div>
                <Fade distance={"20px"} bottom duration={500} delay={400}>
                  <p>Welcome, {authUser.first_name}</p>
                </Fade>
                <Fade distance={"20px"} bottom duration={500} delay={500}>
                  <label>
                    User Type: <span>{this.renderRole()}</span>
                  </label>
                </Fade>
              </div>
            </div>

            <AuthAppRoutes />
          </div>
          <div id="app-content__footer">&copy;{BRAND} 2021</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(AuthApp));