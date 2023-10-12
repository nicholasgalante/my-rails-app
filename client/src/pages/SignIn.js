import React from "react";
import { useState } from "react";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";

function SignIn() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <>
      {showSignIn ? (
        <>
          <SignInForm />{" "}
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowSignIn(false)}>
              Create an Account
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm/>{" "}
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowSignIn(true)}>
              Sign In
            </Button>
          </p>
        </>
      )}
    </>
  );
}

export default SignIn;
