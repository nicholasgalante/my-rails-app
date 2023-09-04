import React, { useState, useEffect } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import { Wrapper } from "../styles";

function App() {
  const [user, setUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  //sign out
  function handleSignOut() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  console.log("USER: ", user);

  return (
    <>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Wrapper>
        <CauseList />
        <SignIn setUser={setUser} />
      </Wrapper>
    </>
  );
}



export default App;
