import React, { useState } from "react";
import { Button, Form, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/authManager";

export default function Register() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = {
        firstName,
        lastName,
        email,
      };
      register(userProfile, password).then(() => navigate("/"))
      .catch(() => window.alert("Something went wrong while attempting to create user."));;
    }
  };

  return (
    <Form onSubmit={registerClick}>
      <fieldset>
        <FormGroup>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <InputGroup
            className="login"
            id="firstName"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <InputGroup
            className="login"
            id="lastName"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup
            className="login"
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup
            className="login"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
          <InputGroup
            className="login"
            id="confirmPassword"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button className="navbar">Register</Button>
        </FormGroup>
      </fieldset>
    </Form>
  );
}
