import React from "react";
import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function SignIn() {
  const [showSignIn, setShowSignIn] = useState(true);

  return <>{showSignIn ? <><SignInForm/>          
  <p>
  Don't have an account? &nbsp;
  <Button color="secondary" onClick={() => setShowLogin(false)}>
    Sign Up
  </Button>
</p>
</> : <><SignUpForm/></>}</>;
}

export default SignIn;
