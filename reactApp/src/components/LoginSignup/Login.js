import React, { Component } from "react";
import { Link } from "react-router-dom";
import idgenerator from "../../api/idgenerator";
import "./LoginSignup.css";

export class Login extends Component {
  state = { token: null, err: "", username: "", password: "" };

  onFormSubmit = e => {
    // here "this" Reference the SearchBar class

    e.preventDefault();

    // this.props.onSubmit(this.state.term);
    idgenerator
      .post("user/login", {
        username: this.state.username,
        password: this.state.password
      })

      .then(result => {
        // if (result.data.token) {
        //   this.setState({ token: result.data.token });
        // }
        console.log(result);
        // let responseObj = JSON.parse(JSON.stringify(result));
        console.log(result.data.token);
        alert(result.data.token);
      })
      .catch(error => {
        console.clear();
        this.setState({ err: error.response.statusText });
      });
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

            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="email form-control rounded rounded-pill border border-primary  "
                  placeholder="Your Email *"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
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
                  className="btn btn-primary rounded-pill px-4"
                  onClick={this.onFormSubmit}
                >
                  Log In
                </button>
              </div>
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
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
