import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import { Wrapper } from "../styles";
import NewCause from "../pages/NewCause";

function App() {
  const [user, setUser] = useState(null);
  const [causes, setCauses] = useState([]);

  //get causes
  useEffect(() => {
    fetch("/causes").then((r) => {
      if (r.ok) {
        r.json().then((causes) => setCauses(causes));
      }
    });
  }, []);

  //auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleAddNewCause(newCause) {
    setCauses([...causes, newCause]);
  }

  //sign out
  function handleSignOut() {
    fetch("/signout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  
  return (
    <>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CauseList causes={causes} />} />
            <Route
              path="/new"
              element={<NewCause handleAddNewCause={handleAddNewCause} />}
            />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}

export default App;
