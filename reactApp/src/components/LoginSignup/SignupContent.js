import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import "./LoginSignup.css";

class SignupContent extends Component {
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
        {this.renderErrorMsg(formProps.meta)}
      </div>
    );
  };

  renderErrorMsg(meta) {
    if (meta.error && meta.touched)
      return <p style={{ color: "red" }}>{meta.error}</p>;
  }

  renderSignUpButton() {
    if (this.props.loading) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      );
    }

    return (
      <button className="btn btn-light rounded-pill border border-primary text-primary px-4">
        Register
      </button>
    );
  }

  renderServerError(inputName) {
    switch (inputName) {
      case "username":
        return (
          <p style={{ color: "red" }}>{this.props.errorMessage.username}</p>
        );
      case "email":
        return <p style={{ color: "red" }}>{this.props.errorMessage.email}</p>;
      case "first_name":
        return (
          <p style={{ color: "red" }}>{this.props.errorMessage.first_name}</p>
        );
      case "last_name":
        return (
          <p style={{ color: "red" }}>{this.props.errorMessage.last_name}</p>
        );
      case "password":
        return (
          <p style={{ color: "red" }}>{this.props.errorMessage.password}</p>
        );

      case "message":
        return (
          <p style={{ color: "red" }}>{this.props.errorMessage.message}</p>
        );

      default:
        break;
    }
  }

  renderSuccessMsg() {
    if (this.props.successMessage) {
      return (
        <div className="alert alert-success" role="alert">
          {this.props.successMessage}
        </div>
      );
    }
  }

  render() {
    return (
      <main role="main">
        <div className="row">
          <div className="img col-md-6"></div>
          <div className="text col-md-6 m-auto text-center ">
            <h3>Register for unlimited ID card</h3>
            <p className="text-left">
              Jibone ki ar ache, bolen? EK din to morei jabo. tai esob
              dunia-dari bad den, kamal er birani khan
            </p>

            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
              <Field
                name="username"
                type="text"
                placeholder="Username *"
                component={this.renderTextInput}
              />
              {this.renderServerError("username")}
              <Field
                name="email"
                type="email"
                placeholder="Email *"
                component={this.renderTextInput}
              />
              {this.renderServerError("email")}
              <Field
                name="first_name"
                type="text"
                placeholder="First name *"
                component={this.renderTextInput}
              />
              {this.renderServerError("first_name")}
              <Field
                name="last_name"
                type="text"
                placeholder="Last name *"
                component={this.renderTextInput}
              />
              {this.renderServerError("last_name")}
              <Field
                name="password"
                type="password"
                placeholder="Password *"
                component={this.renderTextInput}
              />
              {this.renderServerError("password")}

              {this.renderServerError("message")}

              {this.renderSuccessMsg()}
              <div className="form-group">{this.renderSignUpButton()}</div>
            </form>
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

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "You must enter a username";
  }
  if (!formValues.email) {
    errors.email = "You must enter a email";
  }
  if (!formValues.first_name) {
    errors.first_name = "You must enter a first name";
  }
  if (!formValues.last_name) {
    errors.last_name = "You must enter a last name";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

const mapStateToProps = (state) => {
  return {
    errorMessage: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      message: "",
      ...state.auth.error,
    },
    successMessage: state.auth.message,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "Signup",
    validate,
  })(SignupContent)
);
