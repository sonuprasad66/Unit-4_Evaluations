import React, {useContext, useState} from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import {AppContext} from "../context/AppContext";
import {useNavigate} from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {isAuth, UserLogin, UserLogout} = useContext(AppContext);

  const handleSubmit = () => {
    console.log(email, password);
    const payload = {
      email,
      password,
    };

    return fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.token);
        UserLogin(res.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Login</h2>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};
