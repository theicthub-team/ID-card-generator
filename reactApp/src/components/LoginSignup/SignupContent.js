import React, { Component } from "react";
import "./LoginSignup.css";

export default class SignupContent extends Component {
  state = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: ""
  };

  onFormSubmit = e => {
    // here "this" Reference the SearchBar class

    e.preventDefault();

    // this.props.onSubmit(this.state.term);
    this.props.onSignup(
      this.state.username,
      this.state.email,
      this.state.first_name,
      this.state.last_name,
      this.state.password
    );
  };

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

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="email form-control rounded rounded-pill border border-primary  "
                  placeholder="Username *"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email form-control rounded rounded-pill border border-primary  "
                  placeholder="Email *"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email form-control rounded rounded-pill border border-primary  "
                  placeholder="First name *"
                  value={this.state.first_name}
                  onChange={e => this.setState({ first_name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email form-control rounded rounded-pill border border-primary  "
                  placeholder="Last name *"
                  value={this.state.last_name}
                  onChange={e => this.setState({ last_name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control rounded-pill border border-primary "
                  placeholder="Your Password *"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-light rounded-pill border border-primary text-primary px-4"
                  onClick={this.onFormSubmit}
                >
                  Register
                </button>
              </div>
              <p className="text-muted">
                We're getting all product ready, we will email you as soon as we
                are ready
              </p>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
