import React, { useState, useEffect } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";

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

  console.log("USER: ", user)

  return (
    <>
    <Navbar user={user}/>
    <CauseList/>
    <SignIn setUser={setUser}/>
    </>
  );
}

export default App;
