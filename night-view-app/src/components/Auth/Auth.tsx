import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { postSignIn, postSignUp } from "../../services/authService";
import { AuthUser } from "../../services/types"
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { setUserAction } from "./store/authSlice";

interface AuthProps {
    initialStateSignIn: boolean;
}

const Auth = ({ initialStateSignIn } : AuthProps) => {

    const [isSignIn, setSignin] = useState(initialStateSignIn);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const changeSignin = () => {
      setSignin(!isSignIn);
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
            dispatch(setUserAction());
            navigateHome();
          });
        } else {
          postSignUp(payload).then((res: any) => {
            dispatch(setUserAction());
            navigateHome();
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    return (
      <div className="auth-form-container">
        <Form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="auth-form-content d-grid gap-2">
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
            <Button variant="primary" type="submit" size="lg">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    );
}

export default Auth;