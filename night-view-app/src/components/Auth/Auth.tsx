import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css"

interface AuthProps {
    isSignin: boolean;
}

const Auth = ({ isSignin } : AuthProps) => {

    const [showSignin, setSignin] = useState(isSignin);

    if (showSignin) {
      return (
        <Form className="auth-form">
          <h3 className="auth-form-title">Sign In</h3>
          <Form.Text>
            Not registered yet?{" "}
            <span className="link-primary" onClick={() => setSignin(false)}>
              Sign up
            </span>
          </Form.Text>
          <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
    }

    return (
      <Form className="auth-form">
          <h3 className="auth-form-title">Sign Up</h3>
          <Form.Text>
            Already registered?{" "}
            <span className="link-primary" onClick={() => setSignin(true)}>
              Sign in
            </span>
          </Form.Text>
          <Form.Group className="mt-3 mb-3" controlId="formGroupFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
          <Form.Group className="mt-3 mb-3" controlId="formGroupLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    );
}

export default Auth;