// import React, { useState, useEffect } from "react";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";

function App() {
  // const [user, setUser] = useState(null);

  // auto-login
  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <>
    <SignIn/>
    </>
  );
}

export default App;
