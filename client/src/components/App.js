import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "../pages/SignIn";
import CauseList from "../pages/CauseList";
import DonationsList from "../pages/DonationsList";
import { Wrapper } from "../styles";
import NewCause from "../pages/NewCause";
import CauseDetail from "../pages/CauseDetail";
import { useContext } from 'react';

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

  //handle add new donation
  function handleAddNewDonation(newDonation) {
    const causeIndex = causes.findIndex(
      (cause) => cause.id === newDonation.cause_id
    );
    const updatedCauses = [...causes];
    const updatedCause = { ...updatedCauses[causeIndex] };
    updatedCause.donations = [...updatedCause.donations, newDonation];
    updatedCauses[causeIndex] = updatedCause;
    setCauses(updatedCauses);
  }

  return (
    <>
      <Navbar user={user} handleSignOut={handleSignOut} />
      <Wrapper>
        <Routes>
          <Route path="/causes" element={<CauseList causes={causes} />} />
          <Route path="/mydonations" element={<DonationsList/>} />
          <Route
            path="/new"
            element={<NewCause handleAddNewCause={handleAddNewCause} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route
            path="/causes/:causeId"
            element={
              <CauseDetail
                causes={causes}
                user={user}
                handleAddNewDonation={handleAddNewDonation}
              />
            }
          />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
