import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css"

interface AuthProps {
    isSignin: boolean;
}

const Auth = ({ isSignin } : AuthProps) => {

    const [showSignin, setSignin] = useState(isSignin);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeSignin = () => {
      setSignin(showSignin ? false : true)
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
      const payload = {

      }
    }

    return (
      <Form className="auth-form">
        <h3 className="auth-form-title">
          {showSignin
            ? "Sign in"
            : "Sign up"
          }
        </h3>
        <Form.Text>
          {showSignin
            ? `Not Registered yet?${" "}`
            : `Already registered?${" "}`
          }
          <span className="link-primary" onClick={() => changeSignin()}>
            {showSignin
              ? "Sign in"
              : "Sign up"
            }
          </span>
        </Form.Text>
        <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}

export default Auth;