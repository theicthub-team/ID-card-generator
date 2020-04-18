import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";
import "./LoginSignup.css";

export class LoginContent extends Component {
  renderErrorMsg() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.errorMessage ||
            "Something went wrong! Please try again later."}
        </div>
      );
    }
  }

  renderLoginButton() {
    if (this.props.loading) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      );
    }

    return (
      <button className="btn btn-primary rounded-pill px-4">Log In</button>
    );
  }

  renderTextInput = (formProps) => {
    return (
      <div className="form-group">
        <input
          className="form-control rounded rounded-pill border border-primary"
          {...formProps.input}
          type={formProps.type}
          placeholder={formProps.placeholder}
          autoComplete="off"
        />
      </div>
    );
  };

  render() {
    return (
      <main role="main">
        <div className="row">
          <div className="img col-md-6"></div>
          <div className="text col-md-6 m-auto text-center ">
            <h3>A Trusted Better Account To Manage ID Card</h3>
            <p className="text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <form
              onSubmit={this.props.handleSubmit(this.props.onSubmit)}
              className="ui form error"
            >
              <Field
                name="username"
                type="text"
                placeholder="Your Username *"
                component={this.renderTextInput}
              />
              <Field
                name="password"
                type="password"
                placeholder="Your Password *"
                component={this.renderTextInput}
              />
              {this.renderErrorMsg()}
              <div className="form-group">{this.renderLoginButton()}</div>
            </form>

            <p className="text-muted">or</p>
            <div className="form-group">
              <Link to="/signup">
                <button
                  type="button"
                  className="btn btn-light rounded-pill border border-primary text-primary px-4"
                >
                  Register
                </button>
              </Link>
            </div>
            <p className="text-muted">
              We're getting all product ready, we will email you as soon as we
              are ready
            </p>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "Login",
  })(LoginContent)
);
