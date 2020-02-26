import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Container, Row, Col } from "react-grid-system";
import show from "./../assets/show.jpg";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function Login() {
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
          <h1>Register for unlimited ID card</h1>
          <p className="text-muted">
            Jibone ki ar ache, bolen? EK din to morei jabo. tai esob dunia-dari
            bad den, kamal er birani khan
          </p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicOrganization">
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="first name" />
            </Form.Group>
            <Form.Group controlId="formBasicOrganization">
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="last name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="outline-primary">Register</Button>
            <Form.Text className="text-muted">We are getting</Form.Text>
          </Form>
        </Container>
      </Col>
    </Row>
  );
}
