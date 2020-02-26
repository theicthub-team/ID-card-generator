import React, { Component } from "react";
// eslint-disable-next-line
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";
import show from "./../assets/show.jpg";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import idgenerator from "./../api/idgenerator";

export default class Login extends Component {
  state = { token: null, err: "", username: null, password: null };

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
      });
  };

  render() {
    return (
      <Row>
        <Col xs={6}>
          <Container>
            <MDBContainer className="lg-6">
              <MDBRow>
                <MDBCol>
                  <img src={show} className="img-fluid" alt="" />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Container>
        </Col>
        <Col xs={6}>
          <Container>
            <h1>A Trusted Better Account To Manage ID Card</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ username: e.target.value })}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                onClick={this.onFormSubmit}
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
              <br />
              or
              <br />
              <Link to="/signup">
                <Button variant="outline-primary">Register</Button>
              </Link>
            </Form>
          </Container>
        </Col>
      </Row>
    );
  }
}
