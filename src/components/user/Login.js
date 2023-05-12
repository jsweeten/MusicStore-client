import React, { useState } from "react";
import { Form, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../modules/authManager";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => navigate("/"))
      .catch(() => window.alert("Invalid email or password"));
  };

  return (
    <Form 
    onSubmit={loginSubmit}>
      <fieldset>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup
            required
            className="login"
            id="email"
            type="text"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup
            required
            className="login"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <button className="navbar">Login</button>
        </FormGroup>
        <em>
          Not registered? <Link to="/register">Register</Link>
        </em>
      </fieldset>
    </Form>
  );
}