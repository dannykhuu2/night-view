import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { postSignIn, postSignUp } from "../../services/AuthService";
import { AuthUser } from "../../services/types"
import { useNavigate } from "react-router-dom";
import "./Auth.css"

interface AuthProps {
    showSignIn: boolean;
}

const Auth = ({ showSignIn } : AuthProps) => {

    const [isSignIn, setSignin] = useState(showSignIn);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeSignin = () => {
      setSignin(showSignIn ? false : true)
    }

    const navigate = useNavigate();

    const navigateHome = () => {
      navigate("/");
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const payload : AuthUser = {
        email,
        password
      }

      try {
        if (isSignIn) {
          postSignIn(payload).then((res: any) => {
            console.log(res.data);
            navigateHome();
          });
        } else {
          postSignUp(payload).then((res: any) => {
            console.log(res.data);
            navigateHome();
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <Form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="auth-form-title">
          {isSignIn
            ? "Sign in"
            : "Sign up"
          }
        </h3>
        <Form.Text>
          {isSignIn
            ? `Not Registered yet?${" "}`
            : `Already registered?${" "}`
          }
          <span className="link-primary" onClick={() => changeSignin()}>
            {isSignIn
              ? "Sign up"
              : "Sign in"
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