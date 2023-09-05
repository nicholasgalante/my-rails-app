import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import { Wrapper } from "../styles";
import NewCause from "../pages/NewCause";

function App() {
  const [user, setUser] = useState(null);
  const [causes, setCauses] = useState([]);
  // const navigate = useNavigate();

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
    // navigate(`/causes/${newCause.id}`);
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
        <Routes>
          <Route path="/" element={<CauseList causes={causes} />} />
          <Route
            path="/new"
            element={<NewCause handleAddNewCause={handleAddNewCause} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
