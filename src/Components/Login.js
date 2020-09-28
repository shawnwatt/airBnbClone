import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <h1>Login Page</h1>
      <div className="login__container">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Slack_logo.png"
          alt=""
        />
        <h1>Sign in to watts supplies HQ</h1>
        <p>wattssupplies.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
