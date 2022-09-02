import {Button} from "@chakra-ui/react";
import React from "react";
import {Link} from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <Link to="/login">
        <Button>Login Page</Button>
      </Link>
      <br />
      <br />
      <Link to="/dashboard">
        <Button>Go To Dashboard</Button>
      </Link>
    </div>
  );
};
