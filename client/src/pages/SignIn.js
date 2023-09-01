import React from "react";
import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";

function SignIn() {
  const [showSignIn, setShowSignIn] = useState(true);

  return <>{showSignIn ? <><SignInForm/></> : <><SignUpForm/></>}</>;
}

export default SignIn;
