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

  renderServerError() {
    if (this.props.errorMessage.username !== "") {
      return <p style={{ color: "red" }}>{this.props.errorMessage.username}</p>;
    } else if (this.props.errorMessage.email !== "") {
      return <p style={{ color: "red" }}>{this.props.errorMessage.email}</p>;
    } else if (this.props.errorMessage.first_name !== "") {
      return (
        <p style={{ color: "red" }}>{this.props.errorMessage.first_name}</p>
      );
    } else if (this.props.errorMessage.last_name !== "") {
      return (
        <p style={{ color: "red" }}>{this.props.errorMessage.last_name}</p>
      );
    } else if (this.props.errorMessage.password !== "") {
      return <p style={{ color: "red" }}>{this.props.errorMessage.password}</p>;
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
              <Field
                name="email"
                type="email"
                placeholder="Email *"
                component={this.renderTextInput}
              />
              <Field
                name="first_name"
                type="text"
                placeholder="First name *"
                component={this.renderTextInput}
              />
              <Field
                name="last_name"
                type="text"
                placeholder="Last name *"
                component={this.renderTextInput}
              />
              <Field
                name="password"
                type="password"
                placeholder="Password *"
                component={this.renderTextInput}
              />
              {this.renderServerError()}
              {this.renderSuccessMsg()}
              <div className="form-group">
                <button className="btn btn-light rounded-pill border border-primary text-primary px-4">
                  Register
                </button>
              </div>
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
      ...state.auth.error,
    },
    successMessage: state.auth.message,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "Signup",
    validate,
  })(SignupContent)
);
